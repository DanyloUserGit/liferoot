import style from './../../sassModules/404.module.scss';
export const PageNotFound = () => {
    return(
        <div className={style.wrapper}>
            <div className={style.round}></div>
            <p>
                <span className={style.number}>404</span>
                <span className={style.text}>Sorry, we were unable to find this page</span>
                <div className={style.stickers}>🚨🚨🚨</div>
            </p>
        </div>
    )
}