import {Slider, Slide} from "../UI/Slider";
import style from './../../sassModules/TrykutnykHome.module.scss';
import slide_1 from './../../media/slide_1.png';
import slide_2 from './../../media/slide_2.png';
import slide_3 from './../../media/slide_3.png';
import { Gamecard } from "../UI/Gamecard";
export const TrykutnykHome = () => {
    return(
        <div className={style.page}>
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
                <div className={style.ourGames}>
                    <span>OUR GAMES</span>
                    <div className={style.line}>
                        <Gamecard data={{   
                            img: "https://i3.ytimg.com/vi/QH2-TGUlwu4/hqdefault.jpg",
                            game: "LifeRoot.bat",
                            description: "new game 2023",
                            gif:"https://i0.wp.com/www.printmag.com/wp-content/uploads/2021/02/4cbe8d_f1ed2800a49649848102c68fc5a66e53mv2.gif?fit=476%2C280&ssl=1"
                        }}/>
                        <Gamecard data={{   
                            img: "https://i3.ytimg.com/vi/QH2-TGUlwu4/hqdefault.jpg",
                            game: "LifeRoot.bat",
                            description: "new game 2023",
                            gif:"https://i0.wp.com/www.printmag.com/wp-content/uploads/2021/02/4cbe8d_f1ed2800a49649848102c68fc5a66e53mv2.gif?fit=476%2C280&ssl=1"
                        }}/>
                        <Gamecard data={{   
                            img: "https://i3.ytimg.com/vi/QH2-TGUlwu4/hqdefault.jpg",
                            game: "LifeRoot.bat",
                            description: "new game 2023",
                            gif:"https://i0.wp.com/www.printmag.com/wp-content/uploads/2021/02/4cbe8d_f1ed2800a49649848102c68fc5a66e53mv2.gif?fit=476%2C280&ssl=1"
                        }}/>
                    </div>
                </div>
            </div>
    );
}