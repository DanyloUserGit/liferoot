import {useEffect, useRef, useState} from 'react'
import style from './../../sassModules/PayPal.module.scss';
import { PaymentInput } from '../UI/Donation';
import { Button } from '../UI/Button';

export const PayPalBTN = (props) => {
    const [donate, setDonate] = useState(false);
    const [amount, setAmount] = useState(1);

    if(donate === false){
        return(
            <div className={style.wrapper}>
                <PaymentInput amount={amount} handler={(e)=>{
                    setAmount(e.target.value);
                    if(amount > 10000){
                        setAmount(10000);
                    }if(amount === 0 || amount === "" || amount === "-"){
                        setAmount(1);
                    }
                    console.log(amount);
                    
                }}/>

                <Button type="btn" text="Donate" handler={()=>{
                        setDonate(true);
                    }}/>
            </div>
        );
    }else{
        return(
            <div className={style.wrapper}>
                <Donate amount={amount}/>
            </div>
        )
    }
}

export const Donate = (props) => {
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
                                    description: `Donation: ${props.amount}, Type: ${props.text}`,
                                    amount: {
                                        currency_code: "USD",
                                        value: props.amount
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
    }, [props.amount])
    return(
        <div ref={paypal}></div>
    )
}