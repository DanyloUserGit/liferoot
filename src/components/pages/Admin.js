import { Link, Outlet } from 'react-router-dom';
import { Members } from '../UI/Members';
import style from './../../sassModules/Admin.module.scss';

export const Admin = () => {
    return (
        <div className={style.page}>
            <ul className={style.topNavbar}>
                {/* <li><Link to="allmembers">members</Link></li> */}
                <li><Link to="posts">posts</Link></li>
            </ul>
            <Outlet />
        </div>
    );
}