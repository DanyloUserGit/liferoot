import {useEffect, useRef} from 'react'
import style from './../../sassModules/PayPal.module.scss';

export const PayPal = (props) => {
    const paypal = useRef();
    const render = useRef(true);
    useEffect(()=>{
        if(render.current){
            window.paypal.Buttons(
                {
                    createOrder: (data, actions, error) => {
                        return actions.order.create({
                            intent: "CAPTURE",
                            purchase_units: [
                                {
                                    description: `Donation: ${props.val}, Type: ${props.text}`,
                                    amount: {
                                        currency_code: "USD",
                                        value: props.val
                                    }
                                }
                            ],
                            application_context: {
                                shipping_preference: "NO_SHIPPING"
                            }
                        })
                    },
                    onApprove: async (data, actions) => {
                        const order = await actions.order.capture();
                        console.log(`successful order: ${order}`);
                    },
                    onError: (error) => {
                        console.log(error);
                    }
                }
            ).render(paypal.current);
            render.current = false;
        }
    }, [])
    return(
        <div className={style.wrapper} ref={paypal}>
        </div>
    );
}