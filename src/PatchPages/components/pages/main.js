// 5jxeta6gnq
import {Pages} from './Pages';
import {Button} from './../../../components/UI/Button';
import {useState, useEffect} from 'react';
import style from './../../sassModules/main.module.scss';
import { ElementGuide } from '../ui/ElementGuide';
import { Header } from '../../../components/UI/Header';
import { Footer } from '../../../components/UI/Footer';
import { ElementSection } from '../ui/Element';

export const PagesAdm = () => {
    const pages = new Pages("new patch", [
        {
            name: "Text",
            status: "title",
            order: 1,
            value: "134",
            style: {
                color: "#000",
                margin: '10% 0%'
            }
        },
        {
            name: "Text",
            status: "text",
            order: 2,
            value: "asifj",
            style: {
                color: "#000",
                margin: '20% 0%'
            }
        }
    ]);
    const [devPage, setDevPage] = useState(false);
    if(!devPage){return(
        <div className={style.page}>
            <Button text="new page" type="btn" handler={
                    ()=>{
                        setDevPage(true);
                    }
            }/>
        </div>
    )}else{
        return(
            <div className={style.page}>
                <div className={style.field}>
                    <Header 
                        type="pages"
                        downloadLink="#"
                        patchesLink="#"
                        pageName="new page"
                    />
                    <div className={style.main}>
                        <ElementSection />
                    </div>
                    <Footer/>
                </div>
                <div className={style.Guidemenu}>
                    <h2 className={style.label}>elements (guide)</h2>
                    <div className={style.guideElements}>
                        <ElementGuide element="text"/>
                        <ElementGuide element="list"/>
                        <ElementGuide element="line"/>
                        <ElementGuide element="image"/>
                        <ElementGuide element="video"/>
                        <ElementGuide element="link"/>
                    </div>
                </div>
            </div>
        );
    }
}