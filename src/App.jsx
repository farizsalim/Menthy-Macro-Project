import Navs from "./components/Navigation";
import {Routes, Route} from "react-router-dom";
import { LANDPAGE,ARTICLE, MENTALTYPE } from "./router";
import Landpage from "./pages/Landpage";
import ArticleM from "./pages/ArticleMenthy";
import MentalType from "./pages/MentalType";
import "./App.css";
import {pallet1} from "./components/Color"

const App = () => {
  return (
      <div style={pallet1}>
        <Navs/>
        <Routes>
          <Route element={<Landpage/>} path={LANDPAGE}/>
          <Route element={<ArticleM/>} path={ARTICLE}/>
          <Route element={<MentalType/>} path={MENTALTYPE}/>
        </Routes>
      </div>
  );
}

export default App;
