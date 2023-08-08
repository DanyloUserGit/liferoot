import style from './../../sassModules/Input.module.scss';

export const Input = (props) => {
    switch (props.type){
        case "text":
            return(
                <input type={props.type} className={style.text}  onChange={props.onChange} name={props.name}/>
            );
        case "file":
            return(
                <input type={props.type} className={style.file} onChange={props.onChange} name={props.name}/>
            );
        case "textarea":
            return(
                <textarea className={style.area} onChange={props.onChange} name={props.name}> 
                    
                </textarea>
            );
        default:
            return '';
    }
};