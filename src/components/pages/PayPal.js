import {useEffect, useRef, useState} from 'react'
import style from './../../sassModules/PayPal.module.scss';
import { PaymentInput } from '../UI/Donation';
import { Button } from '../UI/Button';

export const PayPalBTN = (props) => {
    const paypal = useRef();
    const render = useRef(true);
    const [on, setOn] = useState(false);
    const [amount, setAmount] = useState(1);
    useEffect(()=>{
        if(render.current){
            window.paypal.Buttons(
                {
                    createOrder: (data, actions, error) => {
                        return actions.order.create({
                            intent: "CAPTURE",
                            purchase_units: [
                                {
                                    description: `Donation: ${amount}, Type: ${props.text}`,
                                    amount: {
                                        currency_code: "USD",
                                        value: amount
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
    }, [amount])
        return(
            <div className={style.wrapper}>
                <PaymentInput amount={amount} handler={(e)=>{
                    setAmount(e.target.value);
                    if(amount > 10000){
                        setAmount(10000);
                    }
                }}/>
                {/* <Button type="btn" text="Donate" handler={()=>{
                        setOn(true);
                    }}/> */}
                <div ref={paypal}></div>
            </div>
        );
    }