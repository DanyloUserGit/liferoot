// 5jxeta6gnq
import style from './../../sassModules/element.module.scss';
import imgLoad from './../../media/admin/imageLoad.jpg';
import { Button } from '../../../components/UI/Button';
import {Input} from '../../../components/UI/Input';
import { useState } from 'react';
import { Pages } from '../pages/Pages';
import { Color, Palette } from './ElementGuide';
import { Http } from '../../http';
const http = new Http();

export const Element = (props) => {
    
}
export const ElementSection = (props) => {
    const [showVariants, setShowVariants] = useState(false);
    if(showVariants===false){
        return (
            <div className={style.section}>
                <span className={style.label}>new Element</span>
                <div className={style.sectioncontent} onClick={()=>{
                    setShowVariants(true);
                    // order ++
                }}>
                    <img src={imgLoad} alt="image"/>
                </div>
            </div>
        );
    }else{
        return(
            <ElementButtons order={1} var={()=>{
                setShowVariants(false);
            }}/>
        );
    }
}
export const ElementButtons = (props) => {
    const [type, setType] = useState("");
    const [onStyle, setOnStyle] = useState(false);
    const [element, setElement] = useState({});
    const [value, setValue] = useState("");
    const [status, setStatus] = useState("");
    const styleE = {
    };
    const Alldefault = () => {
        setType("");
        setOnStyle(false);
        setElement({});
        setValue("");
        setStatus("");
        props.var();
    }
    if(type === ""){
        return(
            <div className={style.line}>
                <Button text="text" type="btn" handler={()=>{setType("text")}}/>
                <Button text="list" type="btn" handler={()=>{setType("list")}}/>
                <Button text="line" type="btn" handler={()=>{setType("line")}}/>
                <Button text="image" type="btn" handler={()=>{setType("image")}}/>
                <Button text="video" type="btn" handler={()=>{setType("video")}}/>
                <Button text="link" type="btn" handler={()=>{setType("link")}}/>
            </div>
        );
    }else{
       switch(type){
        case "text":
                if(onStyle==false){
                    if(status === ""){
                        return(
                            <div>
                                <Button type="btn" text="title" handler={(e)=>{
                                    setStatus(e.target.text);
                                }}/>
                                <Button type="btn" text="text" handler={(e)=>{
                                    setStatus(e.target.text);
                                }}/>
                            </div>
                        );
                    }
                    if(status === "title"){
                        return(
                            <form className={style.form} id="form">
                                <span className={style.label}>Title </span>
                                <Input type="text" name="title" onChange={
                                    (e)=>{
                                        setValue(e.target.value);
                                    }
                                }/> 
                                <Button text="Create" type="btn" typeE = "submit" handler={(e)=>{
                                    // setType("");
                                    setOnStyle(true);
                                }}/>
                            </form>
                        );
                    }else{
                        return(
                            <form className={style.form} id="form">
                                <span className={style.label}>Text </span>
                                <Input type="textarea" name="text" onChange={
                                    (e)=>{
                                        value.push(e.target.value);
                                    }}/> 
                                <Button text="Create" type="btn" typeE = "submit" handler={(e)=>{
                                    // setType("");
                                    setOnStyle(true);
                                }}/>
                            </form>
                        );
                    }
                }else{
                    return(
                        <div>
                            <span className={style.label}>Choose your color </span>
                            <Palette styleE={styleE} />
                            <Button type="btn" text="next" handler={(e)=>{
                                    setElement(
                                        {
                                            name: "Text",
                                            order: props.order,
                                            status: status,
                                            value: value,
                                            style: styleE
                                        }
                                    );
                                    http.addElement({
                                        toPage: props.page, 
                                        element:element
                                    }, Alldefault);
                            }}/>
                        </div>
                    );
                }
        default:
            return"";
       }
    }
}
// export const ElementButton = (props) => {
    
// }
// export const ElementPopApp = (props) => {

// }