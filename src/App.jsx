import Navs from "./components/Navigation";
import {Routes, Route} from "react-router-dom";
import { LANDPAGE,ARTICLE, MENTALTYPE, SIGNUP } from "./router";
import Landpage from "./pages/Landpage";
import ArticleM from "./pages/ArticleMenthy";
import MentalType from "./pages/MentalType";
import "./App.css";
import {pallet1} from "./components/Color"
import SignupPage from "./pages/SignupPage";

const App = () => {
  return (
      <div style={pallet1}>
        <Navs/>
        <Routes>
          <Route element={<Landpage/>} path={LANDPAGE}/>
          <Route element={<ArticleM/>} path={ARTICLE}/>
          <Route element={<MentalType/>} path={MENTALTYPE}/>
          <Route element={<SignupPage/>} path={SIGNUP}/>
        </Routes>
      </div>
  );
}

export default App;
