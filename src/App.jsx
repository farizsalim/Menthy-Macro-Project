import Navs from "./components/Navigation";
import {Routes, Route} from "react-router-dom";
import { LANDPAGE,ARTICLE, MENTALTYPE, SIGNUP, ARTICLE2, LOGIN , ARTICLEPAGE, MENTALTEST,SYARAT_KETENTUAN} from "./router";
import Landpage from "./pages/Landpage";
import ArticleM from "./pages/ArticleMenthy";
import MentalType from "./pages/MentalType";
import "./App.css";
import {pallet1} from "./components/Color"
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import ArticleM2 from "./pages/ArticleMenthy2";
import NavsTrue from "./components/NavigationLog";
import Articlepage from "./pages/ArticlePage";
import Testpsikologi from "./pages/TestPsikologi";
import SyaratKetentuan from "./pages/Syarat_Ketentuan";

const App = () => {
  return (
      <section style={pallet1}>
        <Navs/>
          <Routes>
            <Route element={<Landpage/>} path={LANDPAGE}/>
            <Route element={<ArticleM/>} path={ARTICLE}/>
            <Route element={<MentalType/>} path={MENTALTYPE}/>
            <Route element={<SignupPage/>} path={SIGNUP}/>
            <Route element={<LoginPage/>} path={LOGIN}/>
            <Route element={<ArticleM2/>} path={ARTICLE2}/>
            <Route element={<Articlepage/>} path={ARTICLEPAGE}/>
            <Route element={<Testpsikologi/>} path={MENTALTEST}/>
            <Route element={<SyaratKetentuan/>} path={SYARAT_KETENTUAN}/>
          </Routes>
      </section>
  );
}

export default App;
