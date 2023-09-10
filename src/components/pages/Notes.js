import { Article } from '../UI/Article';
import style from './../../sassModules/Notes.module.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Loader } from '../UI/Loader';


export const Notes = () => {
    const requiredAddress = "https://trykutnykserver.onrender.com/";
    //get Posts
    const [data, setData] = useState([]);
    const [empty, setEmpty] = useState(false);
    useEffect(() => {
        (async ()=>{
            const result =  await axios.get(`${requiredAddress}admin/allposts`);
            if(result.data === []){
                setEmpty(true);
            }else{
                setData(result.data);
            }
        })();
    }, [])
    
    if(empty===true){
        return (
            <div className={style.page}> 
                <div className={style.lastNews}>
                    <span className={style.name}>
                        latest patches
                        <hr />
                    </span>
                        <span>There are no posts</span>
                    <hr />
                </div>
            </div>
        );  
    }else if(empty === false & data.length === 0){
        return (
            <div className={style.page}> 
                <div className={style.lastNews}>
                    <span className={style.name}>
                        latest patches
                        <hr />
                    </span>
                        <Loader />
                    <hr />
                </div>
            </div>
        );  
    }else{
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
                                        img={el.img}
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
}

{/* <div className={style.recomendation}>
    <img className={style.recomendationImage} alt="News"/>
    <img className={style.recomendationImage} alt="News"/>
</div> */}