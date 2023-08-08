import style from './../../sassModules/Download.module.scss';
import { Button } from '../UI/Button';

export function Download(){
    return(
        <div className={style.page}>
            <div className={style.Textline}>
            <div className={style.textSector}>
                    <span className={style.heading}>SYSTEM REQUIRMENTS</span>
                    <ul className={style.textList}>
                        <li><span>OS: </span><span>Windows 7+</span></li>
                        <li><span>Processor: </span><span>Intel Core i5 or better</span></li>
                        <li><span>Ram: </span><span>8 GB RAM</span></li>                  
                        <li><span>Video card: </span><span>A video card with 4 GB of memory or more<br />(NVIDIA GeForce 1050 or better). </span></li>
                        <li><span>DirectX: </span><span>version 9.0c</span></li>
                        <li><span>Disk space: </span><span>1 GB available space</span></li>
                        <li><span>Sound card: </span><span>Compatible with DirectX 9.0c</span></li>
                    </ul>
                </div>
                <div className={style.textSector}>
                    <span className={style.heading}>GAME: LifeRoot.bat</span>
                    <ul className={style.textList}>
                        <li><span>STATUS: </span><a href="https://itch.io/games/in-development">In development</a></li>
                        <li><span>PLATFORMS: </span><a href="https://itch.io/games/platform-windows">Windows</a></li>
                        <li><span>DEVELOPER: </span><a href="https://trykutnyk-entertainment.itch.io/">Trykutnyk Entertainment</a></li>
                        <li><span>GENRE: </span><a href="https://itch.io/games/genre-action">Action</a>,<a href="https://itch.io/games/genre-platformer">Platformer</a>,<a href="https://itch.io/games/genre-puzzle">Puzzle</a>,<a href="https://itch.io/games/genre-shooter">Shooter</a></li>
                        <li><span>TAGS: </span><a href="https://itch.io/games/tag-3d">3D</a>,<a href="https://itch.io/games/tag-bullet-hell">Bullet Hell</a>,<a href="https://itch.io/games/tag-first-person">First-Person</a>,<a href="https://itch.io/games/tag-indie">Indie</a>,<a href="https://itch.io/games/tag-parkour">Parkour</a>,<a href="https://itch.io/games/tag-singleplayer">Singleplayer</a></li>
                        <li><span>AVARAGE SESSION: </span><a href="https://itch.io/games/duration-minutes">A few minutes</a></li>
                        <li><span>LANGUAGES: </span><a href="https://itch.io/games/lang-en">English</a></li>
                        <li><span>INPUTS: </span><a href="https://itch.io/games/input-keyboard">Keyboard</a>,<a href="https://itch.io/games/input-mouse">Mouse</a></li>
                        <li><span>ACCESSABILITY: </span><a href="https://itch.io/games/accessibility-configurable-controls">Configurable controls</a></li>
                    </ul>
                </div>
            </div>
            <hr></hr>
            <div className={style.Textline}>
                <div className={style.longText}>
                    <span className={style.heading}>ABOUT GAME</span>
                    <ul className={`${style.textList} ${style.longText}`}>
                        <li>
                            <span>
                            In this game, you play as a person searching for the meaning of life. To do so, you enter the World Tree of Life, a place where all information is stored as if in a computer. As you dive into the root file system of the tree, you'll feel like a mole, as you navigate through the rabbit holes. To reach the root folder that contains the answers to your questions, you must pass through a defensive system, symbolized by rabbits. In ancient Greek mythology, rabbits represent life and fertility. To make your way through the rabbits, you'll need to use various tools such as the hook, which enables you to move quickly, the dash, which lets you control your flight, the sword, which helps you kill the rabbits, and the pistol, which allows you to kill them at a distance. Between levels, you'll also encounter puzzles that open up access to root directories.
                            </span>
                        </li>
                    </ul>
                </div>
                <iframe  width="100%" height="530" src="https://www.youtube.com/embed/FZcaMSzKZYU" title="LIFEROOT.bat" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
            </div>
            <div className={style.Textline}>
            <div className={style.textSector}>
                    <span className={`${style.heading} ${style.blue}`} >KEY FEATURES:</span>
                    <ul className={`${style.textList} ${style.dList} ${style.blue}`}>
                        <li><span>Explore a mystical world in the World Tree of Life.</span></li>
                        <li><span>Navigate through a root file system as a mole-like creature.</span></li>
                        <li><span>Use various tools such as the hook, dash, sword, and pistol <br /> to defeat rabbit-like enemies.</span></li>  
                        <li><span>Solve puzzles to unlock access to root directories.</span></li>                
                        <li><span>Discover the meaning of life in an engaging and challenging adventure.</span></li>
                    </ul>
                </div>
                <div className={`${style.textSector} ${style.btnsGroup}`}>
                    <div>
                        <span className={style.heading}>Download game</span>
                        <ul className={style.btnList}>
                            <li><Button text="steam" href="#" type="link"/></li>
                            <li><Button text="ITCH.IO" href="#" type="link"/></li>
                            <li><Button text="EPIC GAMES" href="#" unique={54} type="link"/></li>
                        </ul>
                    </div>
                    <div>
                        <span className={style.heading}>listen ost</span>
                        <ul className={style.btnList}>
                            <li><Button text="spotify" href="#" type="link"/></li>
                            <li><Button text="youtube" href="#" unique={66} type="link"/></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
