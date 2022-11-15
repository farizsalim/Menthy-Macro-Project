import Navs from "./components/Navigation";
import {Routes, Route} from "react-router-dom";
import Landpage from "./pages/Landpage";
import ArticleM from "./pages/ArticleMenthy";
import "./App.css";
import {pallet1} from "./components/Color"

const App = () => {
  return (
      <div style={pallet1}>
        <Navs/>
        <Routes>
          <Route element={<Landpage/>} path="/"/>
          <Route element={<ArticleM/>} path="/ArticleM"/>
        </Routes>
      </div>
  );
}

export default App;
