import { Col, Container ,Row} from "react-bootstrap";
import SearchInput from "../components/Search";
import ArticleCard from "../components/ArticleCard";
import FooterFix from "../components/FooterFix";
import { Artikel1 ,Artikel2,Artikel3,Artikel4} from "../components/Imagesrc"
import Pageart2 from "../components/Pagination2";

const ArticleM2 = () =>{
    return(
        <section style={{paddingTop: "5rem"}}>
            <SearchInput/>
            <Container className="py-3">
                <Row xs={1} md={2} className="g-3">
                    <Col>
                        <ArticleCard 
                        imageArt={Artikel1}
                        title="Gejala Depresi, Ketahui di Antaranya"
                        textBody="Banyak orang yang sebenarnya sedang mengalami depresi, tapi tidak menyadarinya. "/>
                    </Col>
                    <Col>
                        <ArticleCard 
                        imageArt={Artikel2}
                        title="6 tips remaja bisa menjaga kesehatan mental selama coronavirus (COVID-19)"
                        textBody="Menjadi seorang remaja adalah hal yang tidak mudah, dan penyakit coronavirus (COVID-19) bisa membuatnya semakin sulit."/>
                    </Col>
                    <Col>
                        <ArticleCard 
                        imageArt={Artikel3}
                        title="Cara Membicarakan Bullying dengan Anak Anda"
                        textBody="Beberapa orang tua tidak yakin bagaimana cara untuk memulai melindungi anak-anak mereka dari bullying dan kekerasan lainnya."/>
                    </Col>
                    <Col>
                        <ArticleCard 
                        imageArt={Artikel4}
                        title="Manfaat Bernyanyi Bagi Kesehatan Mental"
                        textBody="Selain menyenangkan, ternyata ada banyak manfaat bernyanyi bagi kesehatan mental."/>
                    </Col>
                    <Col>
                        <ArticleCard 
                        imageArt={Artikel1}
                        title="Gejala Depresi, Ketahui di Antaranya"
                        textBody="Banyak orang yang sebenarnya sedang mengalami depresi, tapi tidak menyadarinya. "/>
                    </Col>
                    <Col>
                        <ArticleCard 
                        imageArt={Artikel2}
                        title="6 tips remaja bisa menjaga kesehatan mental selama coronavirus (COVID-19)"
                        textBody="Menjadi seorang remaja adalah hal yang tidak mudah, dan penyakit coronavirus (COVID-19) bisa membuatnya semakin sulit."/>
                    </Col>
                    <Col>
                        <ArticleCard 
                        imageArt={Artikel3}
                        title="Cara Membicarakan Bullying dengan Anak Anda"
                        textBody="Beberapa orang tua tidak yakin bagaimana cara untuk memulai melindungi anak-anak mereka dari bullying dan kekerasan lainnya."/>
                    </Col>
                    <Col>
                        <ArticleCard 
                        imageArt={Artikel4}
                        title="Manfaat Bernyanyi Bagi Kesehatan Mental"
                        textBody="Selain menyenangkan, ternyata ada banyak manfaat bernyanyi bagi kesehatan mental."/>
                    </Col>
                </Row>
            </Container>
            <Pageart2/>
            <FooterFix/>
        </section>
    )
}

export default ArticleM2;