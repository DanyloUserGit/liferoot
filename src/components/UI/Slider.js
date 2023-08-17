import style from './../../sassModules/Slider.module.scss';
import { useEffect, useState } from 'react';

export function Slider ({children}) {
    const [slide, setSlide] = useState(1);
    const [on, setOn] = useState(false);
    const [prevPos, setPrevPos] = useState({});
    const slider = {
        slideToRight: ()=>{
            if(slide === 1){
                slider.slideToLeft();
            }else{
                document.getElementById('line').style.margin = `0 0`;
                setSlide(1);
            }
        },
        slideToLeft: ()=>{
            if(slide === 3){
                slider.slideToRight();
            }else{
                document.getElementById('line').style.margin = `0 -200%`;
                setSlide(3);
            }
        },
        slideToCenter: ()=>{
            document.getElementById('line').style.margin = `0 -100%`;
            setSlide(2);
        },
    }
    return(
        <div className={style.slider} id="slider">
            <div className={style.wrapper} id="wrapper">
                <div className={style.line} id='line' >
                    {children}
                </div>
            </div>
            <div className={style.indicators}>
                    <div className={slide === 1 ? `${style.indicator} ${style.active}` : `${style.indicator}`} onClick={(e)=>{
                        slider.slideToRight();
                        e.target.classList.add("active");
                    }}></div>
                    <div className={slide === 2 ? `${style.indicator} ${style.active}` : `${style.indicator}`} onClick={(e)=>{
                        slider.slideToCenter();
                        e.target.classList.add("active");
                    }}></div>
                    <div className={slide === 3 ? `${style.indicator} ${style.active}` : `${style.indicator}`} onClick={(e)=>{
                        slider.slideToLeft();
                        e.target.classList.add("active");
                    }}></div>
                </div>
        </div>
    );
}
export const Slide = (props) => {
    const {name, img, text} = props.data;
    return(
        <div className={style.slide} style={props.style} >
            {
                text !=="" ? <span className={style.text}>{text}</span> : ""
            }
            <img src={img} alt={name} className={style.preview} style={props.style}/>
        </div>
    );
}