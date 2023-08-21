import style from './../../sassModules/Button.module.scss';

export const Button = (props) => {
    switch(props.type){
        case 'link':
            return(
                <a href={props.href} className={style.button} style={{padding: "10px" + " " + `${props.unique}px`}} type={props.typeE}> 
                    <span>{props.text}</span>
                </a>
            )
        case 'btn':
            return(
                <a role='button' onClick={(e)=>{
                    e.preventDefault();
                    props.handler
                    }} className={style.button} style={props.vis ? {display: "none"} : {display: "block"}} type={props.typeE}> 
                    <span>{props.text}</span>
                </a>
            );
        default:
            return '';
    }
}