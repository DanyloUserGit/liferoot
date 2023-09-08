import {Header} from '../UI/Header.js';
import style from '../../sassModules/main.module.scss';
import { Download } from './Download.js';
import { Home } from './Home.js';
import { Footer } from '../UI/Footer.js';
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
const http = new Http();

// 5jxeta6gnq

function App() {
  const location = useLocation();
  const [load, setLoad] = useState(false);
  useEffect(() => {
    (()=>{
      if(location.pathname === "/LifeRoot.bat"){
        setLoad(true);
      }
    })()
  }, [])
  
  return (
    <div className={style.page}>
      {load === true ? <Navigate to="/"/> : ""}
      <Header/>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/*' element={<PageNotFound />} />
          <Route exact path='/download' element={<Download />} />
          <Route exact path='/patches' element={<Notes />} />
          <Route exact path='/support' element={<Support />}/>
          <Route exact path='/admin' element={<Admin />}>
            <Route exact path='posts' element={<Posts />}/>
            <Route exact path='pages' element={<PagesAdm />}/>
          </Route>
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
