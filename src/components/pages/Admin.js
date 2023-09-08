import { Link, Outlet } from 'react-router-dom';
import style from './../../sassModules/Admin.module.scss';
import{useState, useEffect} from 'react';
import { Http } from '../../http/index.js';
import {Navigate} from 'react-router-dom';
const http = new Http();

export const Admin = () => {
    const [loadHome, setLoadHome] = useState(false);
      useEffect(() => {
        (()=>{
            let pass = prompt("password:", "");
            pass === "" || pass === undefined || pass === null ? setLoadHome(true) : http.login({password: pass});
        })();
    }, [])
    return (
        <div className={style.page}>
            {loadHome === true ? <Navigate to="/"/> : ""}
            <ul className={style.topNavbar}>
                <li><Link to="posts">posts</Link></li>
                <li><Link to="pages">pages</Link></li>
            </ul>
            <Outlet />
        </div>
    );
}