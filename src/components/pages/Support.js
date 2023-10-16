import style from './../../sassModules/Support.module.scss';
import { Outlet } from 'react-router-dom';
import {Donation} from './../UI/Donation';
import { useState } from 'react';
import { PayPalBTN } from './PayPal';

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
                <PayPalBTN val={data.val} text={data.text}/>
            );
        }
        else{
            return(
                <div className={style.page}>
                    <div className={style.line}>
                        <Donation text="support us" handler={()=>{
                            handler(15, "Support");
                            setPayment(true);
                                            }}/>
                            <hr className={style.l}></hr>
                        <Donation value={100} text="our kick" patreon={true}/>
                    </div>
                    <Outlet />
                </div>
            ); 
        }
}
