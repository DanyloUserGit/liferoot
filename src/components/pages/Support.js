import style from './../../sassModules/Support.module.scss';
import { Outlet } from 'react-router-dom';
import {Donation} from './../UI/Donation';
import { useState } from 'react';
import { PayPal } from './PayPal';

export const Support = ({children}) => {
    const [data, setData] = useState({});
    const [payment, setPayment] = useState(false);
    const handler = (val, text) => {
        setData({
            val:val,
            text:text
        })
    }
        if(payment){
            return(
                <PayPal val={data.val} text={data.text}/>
            );
        }
        else{
            return(
                <div className={style.page}>
                    <div className={style.line}>
                        <Donation value={15} text="support" handler={()=>{
                            handler(15, "Support");
                            setPayment(true);
                                            }}/>
                        <Donation value={50} text="Motivator" handler={()=>{
                            setPayment(true);
                            handler(50, "Motivator")}} />
                        <Donation value={75} text="investor" handler={()=>{
                            setPayment(true);
                            handler(75, "Investor")}} />
                    </div>
                    <div className={style.line}>
                        <Donation value={100} text="gamer" handler={()=>{
                            setPayment(true);
                            handler(100, "Gamer")}}/>
                        <Donation value={150} text="pro-gamer" handler={()=>{
                            setPayment(true);
                            handler(150, "Pro-Gamer")}} />
                        <Donation value={250} text="the best" handler={()=>{
                            setPayment(true);
                            handler(250, "The Best")}} />
                    </div>
                    {/* <Donation value={100} text="our kick" patreon={true} style={{margin: "0 auto"}}/> */}
                    <Outlet />
                </div>
            ); 
        }
}
