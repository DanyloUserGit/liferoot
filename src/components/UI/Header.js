import style from '../../sassModules/Header.module.scss';
import logo from '../../media/Logo.svg';
import {useState, useEffect} from 'react';



export function Header(props){
    const [Menu, setMenu] = useState(false);
    const [Open, setOpen] = useState(false);
    useEffect(() => {
        let handler = () => {
            setOpen(false);
        }
        document.addEventListener("mousedown", handler);
    })
    
    return(
    <div className={style.header}>
        <div className={style.logo__wrapper}>
            <img src={logo} alt='Trikutnyk' />
        </div>
        <ul className={Menu ? `${style.active} ${style.header__menu}` : `${style.header__menu}`} onClick={(e)=>{setMenu(!Menu)}}>
                <li><a href="/" className={style.link} onClick={e=>e.stopPropagation()}>LifeRoot.bat</a></li>
                <li><a href="patches" className={style.link} onClick={e=>e.stopPropagation()}>Patch Notes</a></li>
                {/* <li><a role="button" style={{userSelect:"none"}} onClick={(e)=>{
                    e.stopPropagation();
                    setOpen(!Open);
                }} className={style.link}>Trikutnyk</a></li> */}
                <li><a href="Download" className={style.link} onClick={e=>e.stopPropagation()}>Download</a></li>
        </ul>
        <a href="support" className={Menu ? `${style.active} ${style.link} ${style.linkSolo}` : `${style.link} ${style.linkSolo}`}>Support Us</a>
        <div className={Menu ? `${style.active} ${style.burger__menu}` : `${style.burger__menu}`} onClick={(e)=>{setMenu(!Menu)}}>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div className={Open ? `${style.dropdown} ${style.active}` : `${style.dropdown}`}>
            <i className={style.arrow}>

            </i>
            <ul>
                <li>
                    <div className={style.logo__wrapper}>
                        <a href="/"><img src={logo} alt='Trikutnyk' /></a>
                    </div>
                </li>
                <li>
                    <div className={style.logo__wrapper}>
                        <a href="/"><img src={logo} alt='Trikutnyk' /></a>
                    </div>
                </li>
                <li>
                    <div className={style.logo__wrapper}>
                        <a href="/"><img src={logo} alt='Trikutnyk' /></a>
                    </div>
                </li>
                <li>
                    <div className={style.logo__wrapper}>
                        <a href="/"><img src={logo} alt='Trikutnyk' /></a>
                    </div>
                </li>
                <li>
                    <div className={style.logo__wrapper}>
                        <a href="/"><img src={logo} alt='Trikutnyk' /></a>
                    </div>
                </li>
            </ul>
        </div>
    </div> 
    );
}

