import { LifeRoot } from './LifeRoot.js';
import style from '../../sassModules/main.module.scss';
import { Download } from './Download.js';
import { Home } from './Home.js';
import { Routes, Route } from 'react-router-dom';
import { Notes } from './Notes.js';
import { Admin } from './Admin.js';
import { Posts } from '../UI/Posts.js';
import { Http } from '../../http/index.js';
import { useLocation } from 'react-router-dom';
import { Support } from './Support.js';
import{useState, useEffect} from 'react';
import {Navigate} from 'react-router-dom';
import { PagesAdm } from '../../PatchPages/components/pages/main.js';
import { PageNotFound } from './404.js';
import { Trykutnyk } from '../Trykutnyk/Trykutnyk.js';
import { TrykutnykHome } from '../Trykutnyk/TrykutnykHome.js';
import { About } from '../Trykutnyk/About.js';
const http = new Http();

// 5jxeta6gnq

function App() {
  const location = useLocation();
  const [load, setLoad] = useState(false);
  const [home, setHome] = useState(false);
  useEffect(() => {
    (()=>{
      if(location.pathname === "/LifeRoot.bat"){
        setLoad(true);
      }
    })()
  }, [])
  useEffect(() => {
    (()=>{
      if(location.pathname === "/"){
        setHome(true);
      }
    })()
  }, [])
  
  return (
    <div className={style.page}>
      {load === true ? <Navigate to="home"/> : ""}
      {location.pathname === "/liferoot/" ? <Navigate to="/liferoot/Home"/> : ""}
        <Routes>
          <Route exact path='/' element={<Trykutnyk />}>
            <Route exact path='/' element={<TrykutnykHome />} />
            <Route exact path='about' element={<About />} />
            <Route exact path='support' element={<Support />}/>
            <Route exact path='news' element={<Notes />}/>
          </Route>
          <Route exact path='/liferoot' element={<LifeRoot />}>
            <Route exact path='home' element={<Home />} />
            <Route exact path='download' element={<Download />} />
            <Route exact path='patches' element={<Notes />} />
            <Route exact path='support' element={<Support />}/>
          </Route>
          <Route exact path='/admin' element={<Admin />}>
            <Route exact path='posts' element={<Posts />}/>
            <Route exact path='pages' element={<PagesAdm />}/>
          </Route>
          <Route path='/*' element={<PageNotFound />} />
        </Routes>
    </div>
  );
}

export default App;
