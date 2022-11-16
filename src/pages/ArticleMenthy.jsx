import { Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { pallet3 } from "../components/Color";
import { ARTICLE } from "../router";
import Caros from "../components/Carousel";
import SearchInput from "../components/Search";
import Bigcard from "../components/BigCard";
import ArticleCard from "../components/ArticleCard";
import Pageart from "../components/Pagination";
import FooterFix from "../components/FooterFix";

const ArticleM = () =>{
    return(
        <>
        <section style={pallet3}>  
            <Container className="py-3">
                <NavLink to={ARTICLE} className="nav-link dark"><h4>Artikel Populer</h4></NavLink>
            </Container>
        </section>
        <Caros/>
        <SearchInput/>
        <Bigcard 
        title="Cara berbicara mengenai bullying dengan Anak"
        textBody="Beberapa orang tua tidak yakin bagaimana cara untuk memulai melindungi
        anak-anak mereka dari bullying dan kekerasan lainnya."/>
        <ArticleCard title="Cara berbicara mengenai bullying dengan Anak"
        textBody="Beberapa orang tua tidak yakin bagaimana cara untuk memulai melindungi
        anak-anak mereka dari bullying dan kekerasan lainnya."/>
        <ArticleCard title="Cara berbicara mengenai bullying dengan Anak"
        textBody="Beberapa orang tua tidak yakin bagaimana cara untuk memulai melindungi
        anak-anak mereka dari bullying dan kekerasan lainnya."/>
        <ArticleCard title="Cara berbicara mengenai bullying dengan Anak"
        textBody="Beberapa orang tua tidak yakin bagaimana cara untuk memulai melindungi
        anak-anak mereka dari bullying dan kekerasan lainnya."/>
        <Pageart/>
        <FooterFix/>
        </>

    )
}

export default ArticleM;