import style from './../../sassModules/Article.module.scss';
import { Button } from './Button';
import { Http } from '../../http';
import liferoot from './../../media/slide_2.png';
const http = new Http();

export const Article = (props) => {
    const requiredAddress = "https://trykutnykserver.onrender.com/";
    switch (props.type) {
        case 'admin':
            return(
                <div className={style.article}>
                    <img alt='preview' src={props.img}/>
                    <ul>
                        <li><h2 className={style.header}>{props.header}</h2></li>
                        <li><span className={style.description}>{props.text}</span></li>
                        <li><span className={style.date}>{props.date}</span></li>
                        <br />
                        <li><a href={props.link} className={style.moreLink}>Read More</a></li>
                        <Button type="btn" text="-" handler={()=>{
                            http.deletePost({
                                header: props.header,
                                img: props.img,
                            })
                            document.location.reload();
                        }}/>
                    </ul>
                </div>
            );
            default:
                return (
                    <div className={style.article}>
                        <img alt='preview' src={props.img}/>
                        <ul>
                            <li><h2 className={style.header}>{props.header}</h2></li>
                            <li><span className={style.description}>{props.text}</span></li>
                            <li><span className={style.date}>{props.date}</span></li>
                            <br />
                            <li><a href={props.link} className={style.moreLink}>Read More</a></li>
                        </ul>
                    </div>
                );
    }
}