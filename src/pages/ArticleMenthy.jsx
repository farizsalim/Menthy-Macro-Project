import { Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { pallet3 } from "../components/Color";
import Caros from "../components/Carousel";
import Seacrh from "../components/Search";

const ArticleM = () =>{
    return(
        <>
        <section style={pallet3}>  
            <Container className="py-3">
                <NavLink to="/ArticleM" className="nav-link dark"><h4>Artikel Populer</h4></NavLink>
            </Container>
        </section>
        <Caros/>
        <Seacrh/>
        </>
    )
}

export default ArticleM;