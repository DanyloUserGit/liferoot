import style from './../../sassModules/Members.module.scss';
import profile from './../../media/profile.svg';

export const Members = () => {
    return (
        <div className={style.wrapper}>
            <ul className={style.list}>
                <li className={style.profilecard}>
                    <img src={profile} className={style.profileImg} alt="avatar"/>
                    <span className={style.userName}>Danylo (user)</span>
                </li>
                <li className={style.profilecard}>
                    <img src={profile} className={style.profileImg} alt="avatar"/>
                    <span className={style.userName}>Danylo (admin)</span>
                </li>
            </ul>
        </div>
    );
}