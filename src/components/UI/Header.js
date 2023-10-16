import style from '../../sassModules/Header.module.scss';
import logo from '../../media/Logo.svg';
import {useState, useEffect} from 'react';
import {Link, Outlet} from 'react-router-dom';
import liferoot from './../../media/liferoot.png';



export function Header(props){
    const [Menu, setMenu] = useState(false);
    const [Open, setOpen] = useState(false);
    useEffect(() => {
        let handler = () => {
            setOpen(false);
        }
        document.addEventListener("mousedown", handler);
    })
    if(props.type === "pages"){
        return(
            <div className={style.header}>
            <div className={style.logo__wrapper}>
                <img src={logo} alt='Trikutnyk' />
            </div>
            <ul className={Menu ? `${style.active} ${style.header__menu}` : `${style.header__menu}`} onClick={(e)=>{setMenu(!Menu)}}>
                    <li><Link to="#" className={style.link} onClick={(e)=>{
                        e.stopPropagation();
                        setMenu(false);
                    }}>{props.pageName}</Link></li>
                    <li><Link to={props.patchesLink} className={style.link} onClick={(e)=>{
                        e.stopPropagation();
                        setMenu(false);
                    }}>Patch Notes</Link></li>
                    <li><Link to={props.downloadLink} className={style.link} onClick={(e)=>{
                        e.stopPropagation();
                        setMenu(false);
                    }}>Download</Link></li>
            </ul>
            <Link to="/support" className={Menu ? `${style.active} ${style.link} ${style.linkSolo}` : `${style.link} ${style.linkSolo}`} onClick={(e)=>{
                        e.stopPropagation();
                        setMenu(false);
                    }}>Support Us</Link>
            <div className={Menu ? `${style.active} ${style.burger__menu}` : `${style.burger__menu}`} onClick={(e)=>{setMenu(!Menu)}}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>  
        );
    }else if(props.type==="trykutnyk"){
     return(   <div className={style.header}>
            <div className={style.logo__wrapper}>
                <img src={logo} alt='Trikutnyk' />
            </div>
            <ul className={Menu ? `${style.active} ${style.header__menu}` : `${style.header__menu}`} onClick={(e)=>{setMenu(!Menu)}}>
                    <li><Link to="/" className={style.link} onClick={(e)=>{
                        e.stopPropagation();
                        setMenu(false);
                    }}>Home</Link></li>
                    <li><Link to="News" className={style.link} onClick={(e)=>{
                        e.stopPropagation();
                        setMenu(false);
                    }}>News</Link></li>
                    <li><Link to="#" className={`${style.link} ${style.games}`} onClick={(e)=>{
                        e.stopPropagation();
                        setMenu(false);
                    }}>Games &#x025be;</Link>
                        <ul className={style.dropdown}>
                            <li><Link to="liferoot/Home"><img src={liferoot}/></Link></li>
                        </ul>
                    </li>
                    <li><Link to="About" className={style.link} onClick={(e)=>{
                        e.stopPropagation();
                        setMenu(false);
                    }}>About Us</Link></li>
            </ul>
            <Link to="Support" className={Menu ? `${style.active} ${style.link} ${style.linkSolo}` : `${style.link} ${style.linkSolo}`} onClick={(e)=>{
                        e.stopPropagation();
                        setMenu(false);
                    }}>Support Us</Link>
            <div className={Menu ? `${style.active} ${style.burger__menu}` : `${style.burger__menu}`} onClick={(e)=>{setMenu(!Menu)}}>
                <span></span>
                <span></span>
                <span></span>
            </div>
    </div> );
    }else{
        return(
        <div className={style.header}>
            <div className={style.logo__wrapper}>
                <img src={logo} alt='Trikutnyk' />
            </div>
            <ul className={Menu ? `${style.active} ${style.header__menu}` : `${style.header__menu}`} onClick={(e)=>{setMenu(!Menu)}}>
                    <li><Link to="Home" className={style.link} onClick={(e)=>{
                        e.stopPropagation();
                        setMenu(false);
                    }}>LifeRoot.bat</Link></li>
                    <li><Link to="Patches" className={style.link} onClick={(e)=>{
                        e.stopPropagation();
                        setMenu(false);
                    }}>Patch Notes</Link></li>
                    {/* <li><a role="button" style={{userSelect:"none"}} onClick={(e)=>{
                        e.stopPropagation();
                        setOpen(!Open);
                    }} className={style.link}>Trikutnyk</a></li> */}
                    <li><Link to="Download" className={style.link} onClick={(e)=>{
                        e.stopPropagation();
                        setMenu(false);
                    }}>Download</Link></li>
            </ul>
            <Link to="Support" className={Menu ? `${style.active} ${style.link} ${style.linkSolo}` : `${style.link} ${style.linkSolo}`} onClick={(e)=>{
                        e.stopPropagation();
                        setMenu(false);
                    }}>Support Us</Link>
            <div className={Menu ? `${style.active} ${style.burger__menu}` : `${style.burger__menu}`} onClick={(e)=>{setMenu(!Menu)}}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div> 
        );
    }
}

