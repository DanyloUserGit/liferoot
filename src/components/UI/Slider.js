import style from './../../sassModules/Slider.module.scss';
import { useState } from 'react';

export function Slider ({children}) {
    const [slide, setSlide] = useState(2);
    const slider = {
        slideToRight: ()=>{
            document.getElementById('line').style.margin = `0 0`;
            setSlide(1);
        },
        slideToLeft: ()=>{
            document.getElementById('line').style.margin = `0 -200%`;
            setSlide(3);
        },
        slideToCenter: ()=>{
            document.getElementById('line').style.margin = `0 -100%`;
            setSlide(2);
        },
        // slideToMouse: ()=>{
        //     const line = document.getElementById('line');
        //     line.addEventListener("mousedown", (event)=>{
        //         console.log(event.clientX);
        //         if(event.clientX > 500){
        //             switch (slide){
        //                 case 1:
        //                     slider.slideToCenter();
        //                     break;
        //                 case 2:
        //                     slider.slideToRight();
        //                     break;
        //                 default:
        //                     return "";
        //             }
        //         }
        //         if(event.clientX < 500){
        //             switch (slide){
        //                 case 3:
        //                     slider.slideToCenter();
        //                     break;
        //                 case 2:
        //                     slider.slideToLeft();
        //                     break;
        //                 default:
        //                     return "";
        //             }
        //         }
        //     });

        // }
    }
    return(
        <div className={style.wrapper}>
            <div className={style.line} id='line' >
                {children}
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
            <img src={img} alt={name} className={style.preview}/>
        </div>
    );
}