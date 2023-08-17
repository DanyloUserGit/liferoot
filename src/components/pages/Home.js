import { Slide, Slider } from '../UI/Slider';
import style from './../../sassModules/Home.module.scss';
import slide_1 from './../../media/slide_1.png';
import slide_2 from './../../media/slide_2.png';
import slide_3 from './../../media/slide_3.png';
import liferoot from './../../media/liferoot.png';
import icon from './../../media/icon.png';

export const Home = () => {
    return(
        <div className={style.page}>
            {/* <span>aaa</span> */}
            <div className={style.gamelogo}>
                <img src={icon} alt="liferoot"/>
                <img src={liferoot} alt="liferoot"/>
            </div>
            <Slider>
                <Slide data={{
                        name: "Trikytnuk",
                        img: slide_1,
                        // text: "new game 2023"
                    }}/>
                <Slide data={{
                        name: "Trikytnuk",
                        img: slide_2,
                        // text: "new game 2023"
                    }}/>
                <Slide data={{
                        name: "Trikytnuk",
                        img: slide_3,
                        // text: "new game 2023"
                    }}/>
            </Slider>
            <div className={style.longText}>
                    <span className={style.heading}>ABOUT GAME</span>
                    <ul className={style.textList}>
                        <li>
                            <span>
                            In this game, you play as a person searching for the meaning of life. To do so, you enter the World Tree of Life, a place where all information is stored as if in a computer. As you dive into the root file system of the tree, you'll feel like a mole, as you navigate through the rabbit holes. To reach the root folder that contains the answers to your questions, you must pass through a defensive system, symbolized by rabbits. In ancient Greek mythology, rabbits represent life and fertility. To make your way through the rabbits, you'll need to use various tools such as the hook, which enables you to move quickly, the dash, which lets you control your flight, the sword, which helps you kill the rabbits, and the pistol, which allows you to kill them at a distance. Between levels, you'll also encounter puzzles that open up access to root directories.
                            </span>
                        </li>
                    </ul>
                    <iframe  width="100%" height="530" src="https://www.youtube.com/embed/FZcaMSzKZYU" title="LIFEROOT.bat" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
            </div>
            <div className={style.textSector}>
                    <span className={`${style.heading} ${style.blue}`} >Controls:</span>
                    <ul className={`${style.textList} ${style.dList} ${style.blue}`}>
                        <li><span>WASD - movement</span></li>
                        <li><span>Shift - dash</span></li>
                        <li><span>Q - hook</span></li>  
                        <li><span>LMB - meelee</span></li>                
                        <li><span>E - ranged attack</span></li>
                    </ul>
                </div>
        </div>
    )
}