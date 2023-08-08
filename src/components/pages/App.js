import {Header} from '../UI/Header.js';
import style from '../../sassModules/main.module.scss';
import { Download } from './Download.js';
import { Home } from './Home.js';
import { Footer } from '../UI/Footer.js';
import { Routes, Route } from 'react-router-dom';
import { Notes } from './Notes.js';
import { Admin } from './Admin.js';
import { Members } from '../UI/Members.js';
import { Posts } from '../UI/Posts.js';
import { Http } from '../../http/index.js';
import { useLocation } from 'react-router-dom';
import { Support } from './Support.js';
const http = new Http();

// 5jxeta6gnq

function App() {
  const location = useLocation();
  window.onload = function () {
      if(location.pathname === "/admin/allmembers" || location.pathname === "/admin/posts" || location.pathname === "/admin/"){
        window.location = "/admin";
      }
      if(location.pathname === "/admin"){
        const pass = prompt("password:", "");
        pass === "" || pass === undefined || pass === null ? window.location = "/" : http.login({password: pass});
      }
      if(location.pathname === "/LifeRoot.bat"){
        window.location = "/";
      }
  }
  
  return (
    <div className={style.page}>
      <Header/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/download' element={<Download />} />
          <Route path='/patches' element={<Notes />} />
          <Route path='/support' element={<Support />}/>
          <Route path='/admin' element={<Admin />}>
            <Route path='allmembers' element={<Members />}/>
            <Route path='posts' element={<Posts />}/>
          </Route>
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
