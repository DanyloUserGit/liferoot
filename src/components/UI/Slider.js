import style from './../../sassModules/Slider.module.scss';
import { useEffect, useState } from 'react';

export function Slider ({children}) {
    const [slide, setSlide] = useState(2);
    const [on, setOn] = useState(false);
    const [prevPos, setPrevPos] = useState({});
    const slider = {
        slideToRight: ()=>{
            if(slide === 1){
                slider.slideToLeft();
            }else{
                document.getElementById('line').style.margin = `0 15%`;
                setSlide(1);
            }
        },
        slideToLeft: ()=>{
            if(slide === 3){
                slider.slideToRight();
            }else{
                document.getElementById('line').style.margin = `0 -195%`;
                setSlide(3);
            }
        },
        slideToCenter: ()=>{
            document.getElementById('line').style.margin = `0 -90%`;
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
            <div className={style.buttons}>
                <div className={style.left} onClick={()=>{
                    if(slide === 3){
                        slider.slideToCenter();
                    }else{
                        slider.slideToRight();
                    }
                }}><img width="100" height="100" src="https://img.icons8.com/carbon-copy/100/collapse-arrow.png" alt="collapse-arrow"/></div>
                <div className={style.right} onClick={()=>{
                    if(slide === 1){
                        slider.slideToCenter();
                    }else{
                        slider.slideToLeft();
                    }
                }}><img width="100" height="100" src="https://img.icons8.com/carbon-copy/100/collapse-arrow.png" alt="collapse-arrow"/></div>
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