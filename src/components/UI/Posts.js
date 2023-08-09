import style from './../../sassModules/Posts.module.scss';
import { Article } from './Article';
import { Button } from './Button';
import {Input} from './Input';
import {useState, useEffect} from 'react';
import { Http } from '../../http';
import axios from 'axios';
const http = new Http();

export const Posts = () => {
    const requiredAddress = "https://trykutnykserver-8fc5c4b665c4.herokuapp.com/";
    let date = new Date();
    date = date.toDateString().replace(/^.{4}/, '');
    const [Vis, setVis] = useState(false);
    const [Header,setHeader] = useState("");

    //get Posts
    // const [data, setData] = useState([]);
    // useEffect(() => {
    //     (async ()=>{
    //         const result =  await axios.get(`${requiredAddress}admin/allposts`);

    //         setData(result.data);
    //     })();
    // }, [])
    
    const addHandler = () => {
        let elements = document.getElementById("form");
        setVis(true);
        elements.style.display = "block";
    }
    return (
        <div className={style.wrapper}>
            <span className={style.header}>All Posts</span>
            {/* <ul>
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
                                    type="admin"
                                />
                            </li>
                        );
                    })
                }
            </ul> */}
            <span className={style.header}>New posts</span>
            <Button text="+" type="btn" vis={Vis} handler={addHandler}/>
            <form className={style.form} id="form">
                <span className={style.label}>Header </span>
                <Input type="text" name="header" onChange={
                    (e)=>{
                        setHeader(e.target.value);
                    }
                }/> 
                <span className={style.label}>Description </span>
                <Input type="textarea" name="description"/> 
                <span className={style.label}>Load preview</span>
                <Input type="file" name="file"/>
                <span className={style.label} style={{margin: "0 10px"}}>Date: {` ${date}`} </span>
                <Button text="Create" type="btn" typeE = "submit" handler={()=>{
                    const formData = new FormData(document.getElementById("form"));
                    formData.append('date', date);
                    formData.append('url', `/${Header}`);
                    http.newPost(
                        formData
                    );
                    document.location.reload();
                }}/>
            </form>
        </div>
    );
}