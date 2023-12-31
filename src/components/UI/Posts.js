import style from './../../sassModules/Posts.module.scss';
import { Article } from './Article';
import { Button } from './Button';
import {Input} from './Input';
import {useState, useEffect} from 'react';
import { Http } from '../../http';
import axios from 'axios';
import { Loader } from './Loader';
const http = new Http();

export const Posts = () => {
    const requiredAddress = "https://trykutnykserver.onrender.com/";
    let date = new Date();
    date = date.toDateString().replace(/^.{4}/, '');
    const [Vis, setVis] = useState(false);
    const [Header,setHeader] = useState("");
    const [dis, setDis] = useState(false);
    const [normalImg, setNormalImage] = useState("");
    const [description, setDes] = useState("");


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
    
    const addHandler = () => {
        let elements = document.getElementById("form");
        setVis(true);
        elements.style.display = "block";
    }
    if(empty===false&&data.length===0){
        return (
            <div className={style.wrapper}>
                <span className={style.header}>All Posts</span>
                <Loader />
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
                    <Input type="textarea" name="description" onChange={(e)=>{
                        setDes(e.target.value);
                    }}/> 
                    <span className={style.label}>Load preview</span>
                    <Input type="file" name="file" onChange={(e)=>{
                        const file = e.target.files[0];
                        const reader = new FileReader();

                        reader.addEventListener('load', ()=>{
                            setNormalImage(reader.result);
                        })
                        reader.readAsDataURL(file);
                    }}/>
                    <span className={style.label} style={{margin: "0 10px"}}>Date: {` ${date}`} </span>
                    <Button text="Create" type="btn" typeE = "submit" dis={dis} handler={(e)=>{
                        e.preventDefault();
                        setDis(true);
                        http.newPost(
                            {
                                header: Header,
                                description: description,
                                date: date,
                                url: `/${Header}`,
                                img: normalImg
                            }
                        );
                        // document.location.reload();
                    }}/>
                </form>
            </div>
        );
    }else if(empty===true){
        return (
            <div className={style.wrapper}>
                <span className={style.header}>All Posts</span>
                <span>There are no posts</span>
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
                    <Input type="textarea" name="description" onChange={(e)=>{
                        setDes(e.target.value);
                    }}/> 
                    <span className={style.label}>Load preview</span>
                    <Input type="file" name="file" onChange={(e)=>{
                        const file = e.target.files[0];
                        const reader = new FileReader();

                        reader.addEventListener('load', ()=>{
                            setNormalImage(reader.result);
                        })
                        reader.readAsDataURL(file);
                    }}/>
                    <span className={style.label} style={{margin: "0 10px"}}>Date: {` ${date}`} </span>
                    <Button text="Create" type="btn" typeE = "submit" dis={dis} handler={(e)=>{
                        e.preventDefault();
                        setDis(true);
                        http.newPost(
                            {
                                header: Header,
                                description: description,
                                date: date,
                                url: `/${Header}`,
                                img: normalImg
                            }
                        );
                        // document.location.reload();
                    }}/>
                </form>
            </div>
        );
    }else{
        return (
            <div className={style.wrapper}>
                <span className={style.header}>All Posts</span>
                <ul>
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
                </ul>
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
                    <Input type="textarea" name="description" onChange={(e)=>{
                        setDes(e.target.value);
                    }}/> 
                    <span className={style.label}>Load preview</span>
                    <Input type="file" name="file" onChange={(e)=>{
                        const file = e.target.files[0];
                        const reader = new FileReader();

                        reader.addEventListener('load', ()=>{
                            setNormalImage(reader.result);
                        })
                        reader.readAsDataURL(file);
                    }}/>
                    <span className={style.label} style={{margin: "0 10px"}}>Date: {` ${date}`} </span>
                    <Button text="Create" type="btn" dis={dis} typeE = "submit" handler={(e)=>{
                        e.preventDefault();
                        setDis(true);
                        http.newPost(
                            {
                                header: Header,
                                description: description,
                                date: date,
                                url: `/${Header}`,
                                img: normalImg
                            }
                        );
                        // document.location.reload();
                    }}/>
                </form>
            </div>
        );
    }
}