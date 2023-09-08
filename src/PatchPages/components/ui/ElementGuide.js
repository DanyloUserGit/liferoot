import { useState } from 'react';
import { Button } from '../../../components/UI/Button';
import style from './../../sassModules/elementguide.module.scss';

export const ElementGuide = (props) => {
    const [vis, setVis] = useState(false);
    switch(props.element){
        case "text":
            return (
                <div className={style.element}>
                    <h3 className={style.label}>Text</h3>
                    <Button type="btn" text="+" vis={vis} handler={()=>{
                        setVis(true);
                    }}/>
                    <span className={style.text} >properties</span>
                    {vis ? 
                    <ul className={style.properties}>
                        <li>
                            <span className={style.text}>status</span>
                            <div className={style.possibleVariant}>
                                <span className={style.text}>title</span>
                            </div>
                            <div className={style.possibleVariant}>
                                <span className={style.text}>text</span>
                            </div>
                        </li>
                        <li>
                            <span className={style.text}>value</span>
                            <div className={style.possibleVariant}>
                                <span className={style.text}>your value</span>
                            </div>
                        </li>
                        <li>
                            <span className={style.text}>color</span>
                            <div className={`${style.possibleVariant} ${style.white}`}>
                                <span className={`${style.text} ${style.dark}`}>white</span>
                            </div>
                            <div className={`${style.possibleVariant} ${style.dark}`}>
                                <span className={`${style.text} ${style.white}`} style={{color: "#fff"}}>dark</span>
                            </div>
                            <div className={`${style.possibleVariant} ${style.blue}`}>
                                <span className={`${style.text} ${style.dark}`}>blue</span>
                            </div>
                            <div className={`${style.possibleVariant} ${style.pink}`}>
                                <span className={`${style.text} ${style.dark}`}>pink</span>
                            </div>
                            <div className={`${style.possibleVariant} ${style.gray}`}>
                                <span className={`${style.text} ${style.dark}`}>gray</span>
                            </div>
                        </li>
                        <li>
                            <span className={style.text}>text size (px)</span>
                            <div className={style.possibleVariant}>
                                <span className={style.text}>your value</span>
                            </div>
                        </li>
                        <li>
                        <Button type="btn" text="-" vis={!vis} handler={()=>{
                                setVis(false);
                            }}/>
                        </li>
                    </ul> : ""}
                </div>
                
            );
        case "list":
            return (
                <div className={style.element}>
                    <h3 className={style.label}>list</h3>
                    <Button type="btn" text={"+"} vis={vis} handler={()=>{
                        setVis(true);
                    }}/>
                    <span className={style.text}>properties</span>
                    {vis ? <ul className={style.properties}>
                        <li>
                            <span className={style.text}>value</span>
                            <div className={style.possibleVariant}>
                                <span className={style.text}>your value</span>
                            </div>
                        </li>
                        <li>
                            <span className={style.text}>color</span>
                            <div className={`${style.possibleVariant} ${style.white}`}>
                                <span className={`${style.text} ${style.dark}`}>white</span>
                            </div>
                            <div className={`${style.possibleVariant} ${style.dark}`}>
                                <span className={`${style.text} ${style.white}`}>dark</span>
                            </div>
                            <div className={`${style.possibleVariant} ${style.blue}`}>
                                <span className={`${style.text} ${style.dark}`}>blue</span>
                            </div>
                            <div className={`${style.possibleVariant} ${style.pink}`}>
                                <span className={`${style.text} ${style.dark}`}>pink</span>
                            </div>
                            <div className={`${style.possibleVariant} ${style.gray}`}>
                                <span className={`${style.text} ${style.dark}`}>gray</span>
                            </div>
                        </li>
                        <li>
                            <span className={style.text}>text size</span>
                            <div className={style.possibleVariant}>
                                <span className={style.text}>your value</span>
                            </div>
                        </li>
                        <li>
                            <span className={style.text}>list mark</span>
                            <div className={style.possibleVariant}>
                                <span className={`${style.text} ${style.dotted}`}>dotted</span>
                            </div>
                            <div className={style.possibleVariant}>
                                <span className={`${style.text} ${style.number}`}>number</span>
                            </div>
                            <div className={style.possibleVariant}>
                                <span className={`${style.text} ${style.georgian}`}>custom</span>
                            </div>
                        </li>
                        <li>
                        <Button type="btn" text="-" vis={!vis} handler={()=>{
                                setVis(false);
                            }}/>
                        </li>
                        
                    </ul> : ""}
                </div>
            );
        case "line":
            return (
                <div className={style.element}>
                    <h3 className={style.label}>line</h3>
                    <Button type="btn" text={"+"} vis={vis} handler={()=>{
                        setVis(true);
                    }}/>
                    <span className={style.text}>properties</span>
                    {vis ? <ul className={style.properties}>
                        <li>
                            <span className={style.text}>color</span>
                            <div className={`${style.possibleVariant} ${style.white}`}>
                                <span className={`${style.text} ${style.dark}`}>white</span>
                            </div>
                            <div className={`${style.possibleVariant} ${style.dark}`}>
                                <span className={`${style.text} ${style.white}`}>dark</span>
                            </div>
                            <div className={`${style.possibleVariant} ${style.blue}`}>
                                <span className={`${style.text} ${style.dark}`}>blue</span>
                            </div>
                            <div className={`${style.possibleVariant} ${style.pink}`}>
                                <span className={`${style.text} ${style.dark}`}>pink</span>
                            </div>
                            <div className={`${style.possibleVariant} ${style.gray}`}>
                                <span className={`${style.text} ${style.dark}`}>gray</span>
                            </div>
                        </li>
                        <li>
                            <span className={style.text}>height</span>
                            <div className={style.possibleVariant}>
                                <span className={style.text}>your value</span>
                            </div>
                        </li>
                        <li>
                        <Button type="btn" text="-" vis={!vis} handler={()=>{
                                setVis(false);
                            }}/>
                        </li>
                        
                    </ul> : ""}
                </div>
            );
        case "image":
            return (
                <div className={style.element}>
                    <h3 className={style.label}>image</h3>
                    <Button type="btn" text={"+"} vis={vis} handler={()=>{
                        setVis(true);
                    }}/>
                    <span className={style.text}>properties</span>
                    {vis ? <ul className={style.properties}>
                        <li>
                            <span className={style.text}>image</span>
                            <div className={style.possibleVariant}>
                                <span className={style.text}>your image</span>
                            </div>
                        </li>
                        <li>
                            <span className={style.text}>size</span>
                            <div className={style.possibleVariant}>
                                <span className={style.text}>your width</span>
                            </div>
                            <div className={style.possibleVariant}>
                                <span className={style.text}>your height</span>
                            </div>
                        </li>                        <li>
                        <Button type="btn" text="-" vis={!vis} handler={()=>{
                                setVis(false);
                            }}/>
                        </li>
                        
                    </ul> : ""}
                </div>
            );
        case "video":
            return (
                <div className={style.element}>
                    <h3 className={style.label}>video</h3>
                    <Button type="btn" text={"+"} vis={vis} handler={()=>{
                        setVis(true);
                    }}/>
                    <span className={style.text}>properties</span>
                    {vis ? <ul className={style.properties}>
                        <li>
                            <span className={style.text}>video</span>
                            <div className={style.possibleVariant}>
                                <span className={style.text}>youtube link</span>
                            </div>
                        </li>
                        <li>
                            <span className={style.text}>size</span>
                            <div className={style.possibleVariant}>
                                <span className={style.text}>your width</span>
                            </div>
                            <div className={style.possibleVariant}>
                                <span className={style.text}>your height</span>
                            </div>
                        </li>
                        <li>
                        <Button type="btn" text="-" vis={!vis} handler={()=>{
                                setVis(false);
                            }}/>
                        </li>
                        
                    </ul> : ""}
                </div>
            );
        case "link":
            return (
                <div className={style.element}>
                    <h3 className={style.label}>link</h3>
                    <Button type="btn" text={"+"} vis={vis} handler={()=>{
                        setVis(true);
                    }}/>
                    <span className={style.text}>properties</span>
                    {vis ? <ul className={style.properties}>
                        <li>
                            <span className={style.text}>link</span>
                            <div className={style.possibleVariant}>
                                <span className={style.text}>your link</span>
                            </div>
                        </li>
                        <li>
                            <span className={style.text}>value</span>
                            <div className={style.possibleVariant}>
                                <span className={style.text}>your text</span>
                            </div>
                        </li>
                        <li>
                            <span className={style.text}>color</span>
                            <div className={`${style.possibleVariant} ${style.white}`}>
                                <span className={`${style.text} ${style.dark}`}>white</span>
                            </div>
                            <div className={`${style.possibleVariant} ${style.dark}`}>
                                <span className={`${style.text} ${style.white}`}>dark</span>
                            </div>
                            <div className={`${style.possibleVariant} ${style.blue}`}>
                                <span className={`${style.text} ${style.dark}`}>blue</span>
                            </div>
                            <div className={`${style.possibleVariant} ${style.pink}`}>
                                <span className={`${style.text} ${style.dark}`}>pink</span>
                            </div>
                            <div className={`${style.possibleVariant} ${style.gray}`}>
                                <span className={`${style.text} ${style.dark}`}>gray</span>
                            </div>
                        </li>
                        <li>
                            <span className={style.text}>text size</span>
                            <div className={style.possibleVariant}>
                                <span className={style.text}>your value</span>
                            </div>
                        </li>
                        <li>
                        <Button type="btn" text="-" vis={!vis} handler={()=>{
                                setVis(false);
                            }}/>
                        </li>
                        
                    </ul> : ""}
                </div>
            );
        default:
            return(
                ""
            );
    }
}
export const Color = (props) => {
        return(
            <div className={`${style.possibleVariant} ${style[props.text]}`} style={{cursor: 'pointer', margin: "15px 0"}} onClick={props.handler}>
                <span className={props.text==="dark" ? `${style.text} ${style.white}` :`${style.text} ${style.dark}`}>{props.text}</span>
            </div>
        )
}
export const Palette = (props) => {
    return(
        <div className={style.line}>
            <Color text="white" handler={(e)=>{
                props.styleE.color = "white";
            }}/>
            <Color text="dark" handler={(e)=>{
                props.styleE.color = "dark"
            }}/>
            <Color text="blue" handler={(e)=>{
                props.styleE.color = "blue";
            }}/>
            <Color text="pink" handler={(e)=>{
                props.styleE.color = "pink";
            }}/>
            <Color text="gray" handler={(e)=>{
                props.styleE.color = "gray";
            }}/>
    </div>
    );
}