import Navs from "./components/Navigation";
import {Routes, Route} from "react-router-dom";
import { LANDPAGE,ARTICLE } from "./router";
import Landpage from "./pages/Landpage";
import ArticleM from "./pages/ArticleMenthy";
import "./App.css";
import {pallet1} from "./components/Color"

const App = () => {
  return (
      <div style={pallet1}>
        <Navs/>
        <Routes>
          <Route element={<Landpage/>} path={LANDPAGE}/>
          <Route element={<ArticleM/>} path={ARTICLE}/>
        </Routes>
      </div>
  );
}

export default App;
