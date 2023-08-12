import { Article } from '../UI/Article';
import style from './../../sassModules/Notes.module.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';


export const Notes = () => {
    const [data, setData] = useState([]);
    const requiredAddress = "https://trykutnykserver.onrender.com/";
    useEffect(() => {
        (async ()=>{
            const result =  await axios.get(`${requiredAddress}admin/allposts`);

            setData(result.data);
        })();
    }, [])
    return (
        <div className={style.page}> 
            <div className={style.lastNews}>
                <span className={style.name}>
                    latest patches
                    <hr />
                </span>
                {
                    data.map((el)=>{
                        return(
                            <li key={el._id}>
                                <Article 
                                    header={el.header}
                                    text={el.description}
                                    date={el.date}
                                    link={el.url}
                                    img={`${requiredAddress}/media/${el.img}`}
                                />
                            </li>
                        );
                    })
                }
                <hr />
            </div>
        </div>
    );  
}

{/* <div className={style.recomendation}>
    <img className={style.recomendationImage} alt="News"/>
    <img className={style.recomendationImage} alt="News"/>
</div> */}