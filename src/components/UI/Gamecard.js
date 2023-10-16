import style from './../../sassModules/Gamecard.module.scss';
import { useState } from 'react';
export const Gamecard = (props) => {
    const [Img, setImg] = useState(props.data.img);
    return(
        <div className={style.wrapper}>
            <img src={Img} alt={props.data.game} onMouseEnter={(e)=>{
                setImg(props.data.gif);
            }} onMouseLeave={(e)=>{
                setImg(props.data.img);
            }}/>
            <h1 className={style.name}>{props.data.game}</h1>
            <span className={style.description}>{props.data.description}</span>
        </div>
    );
}