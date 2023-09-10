import style from './../../sassModules/Loader.module.scss';

export const Loader = () => {
    return(
        <div style={{textAlign: 'center', margin:"10% 0"}}>
            <span className={style.label}>Loading</span>
            <div className={style.wrapper}>
                <div className={style.round}>
                    <div className={`${style.round} ${style.child}`}>
                        <div className={style.center}>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}