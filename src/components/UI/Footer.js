import style from './../../sassModules/Footer.module.scss';
import logo from './../../media/Logo.svg';
import telegram from './../../media/tg.svg';
import tiktok from './../../media/tiktok.svg';
import instagram from './../../media/instagram.svg';

export const Footer = () => {
    return (
        <div className={style.footer}>
            <div className={style.logo__wrapper}>
                <img src={logo} alt='Trikutnyk' />
            </div>
            <div className={style.footerMenu}>
                <a href="terms">terms</a>
                <span></span>
                <a href="legal">legal</a>
                <span></span>
                <a href="privacy">privacy</a>
            </div>
            <div className={style.socialmediaMenu}>
                <a href='telegram'><img src={telegram} alt='telegram'/></a>
                <a href='tiktok'><img src={tiktok} alt='tiktok'/></a>
                <a href='instagram'><img src={instagram} alt='instagram'/></a>
            </div>
            <span>©2023 TRYKUTNYK ENTERTAINMENT, ALL RIGHTS RESERVED</span>
        </div>
    );
}