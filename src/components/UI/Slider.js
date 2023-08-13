import style from './../../sassModules/Slider.module.scss';
import { useState } from 'react';
import $ from 'jquery';

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
    }
    let prevPos
    $('line').on('mousedown', function (evt) {
        $(this).on('mousemove', drag)
        prevPos = {x:evt.clientX, y:evt.clientY}
    }).on('mouseup mouseout', function() {
        $(this).off('mousemove', drag)
    })

    function drag(evt) {
        window.scrollBy(prevPos.x - evt.clientX, prevPos.y - evt.clientY);
        prevPos = {x:evt.clientX, y:evt.clientY}
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