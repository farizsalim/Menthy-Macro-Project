import Navs from "./components/Navigation";
import {Routes, Route} from "react-router-dom";
import { LANDPAGE,ARTICLE, MENTALTYPE, SIGNUP, LOGIN } from "./router";
import { LANDPAGE,ARTICLE, MENTALTYPE, SIGNUP, ARTICLE2 } from "./router";
import Landpage from "./pages/Landpage";
import ArticleM from "./pages/ArticleMenthy";
import MentalType from "./pages/MentalType";
import "./App.css";
import {pallet1} from "./components/Color"
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import ArticleM2 from "./pages/ArticleMenthy2";

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
        </Routes>
      </section>
  );
}

export default App;
