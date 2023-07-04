import Navs from "./components/Navigation";
import {Routes, Route} from "react-router-dom";
import { LANDPAGE,ARTICLE, MENTALTYPE, SIGNUP, ARTICLE2, LOGIN, KEBIJAKAN_PRIVASI, SYARAT_KETENTUAN, MENTALTEST, MASUK_MENTALTEST } from "./router";
import Landpage from "./pages/Landpage";
import ArticleM from "./pages/ArticleMenthy";
import MentalType from "./pages/MentalType";
import "./App.css";
import {pallet1} from "./components/Color"
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import ArticleM2 from "./pages/ArticleMenthy2";
import KebijakanPrivasi from "./pages/Kebijakan_Privasi";
import SyaratKetentuan from "./pages/Syarat_Ketentuan"
import Testpsikologi from "./pages/TestPsikologi";
import MasukTes from "./pages/MasukTes";

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
          <Route element={<Testpsikologi/>} path={MENTALTEST}/>
          <Route element={<KebijakanPrivasi/>} path={KEBIJAKAN_PRIVASI}/>
          <Route element={<SyaratKetentuan/>} path={SYARAT_KETENTUAN}/>
          <Route element={<MasukTes/>} path={MASUK_MENTALTEST}/>

        </Routes>
      </section>
  );
}

export default App;
