import style from './../../sassModules/Donation.module.scss';
import mono from './../../media/monobank.jpeg';
import payPal from './../../media/paypal.png';
import patreon from './../../media/Patreon.png';
import { useState, useEffect } from 'react';

export const Donation = (props) => {
    if(!props.patreon){ return(
        <div className={style.wrapper} style={props.style}>
            <div className={style.content}>
                <span>{props.text}</span>
            </div>
            <div className={style.container}>
                <PaymentButton handler={props.handler}/>
                <PaymentButton type="paypal" handler={props.handler}/>
            </div>
        </div>
    );}else{
        return(
            <div className={style.wrapper} style={props.style}>
            <div className={style.content}>
                <span>{props.text}</span>
            </div>
            <div className={style.container}>
                <PaymentButton type="patreon" handler={props.handler}/>
            </div>
        </div>
        );
    }
}
export const PaymentInput = (props) =>{
    const [error, setError] = useState(false);
    useEffect(() => {
        if(props.amount < 1 || props.amount > 10000){
            setError(true);
        }if(props.amount === 0 || props.amount === "-"){
            props.amount = 1;
        }
    }, [])
    return(
        <input type='number' value={props.amount} className={error ? `${style.error} ${style.input}` : style.input} onChange={props.handler} min={1} max={10000}/>
    );
}
export const PaymentButton = (props) => {
        switch(props.type){
            case "paypal":
                return(
                    <div className={style.btn} onClick={props.handler}>
                        <img src={payPal} className={style.img}/>
                    </div>
                );
            case "patreon":
                return(
                    <div className={style.btn} onClick={props.handler}>
                        <a href='https://kick.com/'><img src={patreon} className={style.img}/></a>
                    </div>
                );
            default:
                return(
                    <div className={style.btn} onClick={props.handlerMono}>
                        <a href='https://send.monobank.ua/jar/9o1sGtveD3'><img src={mono} className={style.img} style={{borderRadius: "5px"}}/></a>
                    </div>
                );
        }
}