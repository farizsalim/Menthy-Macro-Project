import Navs from "./components/Navigation";
import {Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import ArticleM from "./pages/ArticleMenthy";
import "./App.css";
import {pallet1} from "./components/Color"

const App = () => {
  return (
      <div style={pallet1}>
        <Navs/>
        <Routes>
          <Route element={<Home/>} path="/"/>
          <Route element={<ArticleM/>} path="/ArticleM"/>
        </Routes>
      </div>
  );
}

export default App;
