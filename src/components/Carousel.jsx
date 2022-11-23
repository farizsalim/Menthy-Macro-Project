import {Carousel, Container,Button} from "react-bootstrap";
import {Artikel1,Artikel2,Artikel3} from "./Imagesrc";
import {pallet3,pallet4} from "./Color"
const Caros = ()=>{

    return(
            <Container className="py-2">
                    <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100 rounded"
                    src={Artikel1}
                    alt="First slide"
                    style={
                        {
                            filter: 'brightness(60%)'
                        }
                    }
                    />
                    <Carousel.Caption>
                    <h3 className="d-flex justify-content-start text-start">Gejala Depresi, Ketahui di Antaranya</h3>
                    <p className="d-flex justify-content-start text-start">Banyak orang yang sebenarnya sedang mengalami depresi, tapi tidak menyadarinya. Hal itu mungkin terjadi karena kurangnya pemahaman bahwa gejala depresi tidak hanya sebatas rasa sedih yang mendalam. Gejala depresi bisa dikenali secara psikologis, fisik, bahkan dalam interaksi</p>
                    <Button style={pallet4} className="px-5 py-2 d-flex justify-content-start btn-app">Baca Selengkapnya</Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100 rounded"
                    src={Artikel2}
                    alt="Second slide"
                    style={
                        {
                            filter: 'brightness(60%)'
                        }
                    }
                    />

                    <Carousel.Caption>
                    <h3 className="d-flex justify-content-start text-start">6 tips remaja bisa menjaga kesehatan mental selama coronavirus (COVID-19)</h3>
                    <p className="d-flex justify-content-start text-start">Menjadi seorang remaja adalah hal yang tidak mudah, dan penyakit coronavirus (COVID-19) bisa membuatnya semakin sulit. Dengan ditutupnya sekolah dan dibatalkannya berbagai acara, banyak remaja kehilangan beberapa momen besar di kehidupan mereka — dan juga momen keseharian seperti mengobrol dengan teman dan berpartisipasi di kelas.</p>
                    <Button style={pallet4} className="px-5 py-2 d-flex justify-content-start btn-app">Baca Selengkapnya</Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100 rounded"
                    src={Artikel3}
                    alt="Third slide"
                    style={
                        {
                            filter: 'brightness(60%)'
                        }
                    }
                    />

                    <Carousel.Caption>
                    <h3 className="d-flex justify-content-start text-start">Cara Membicarakan Bullying dengan Anak Anda</h3>
                    <p className="d-flex justify-content-start text-start">Beberapa orang tua tidak yakin bagaimana cara untuk memulai melindungi anak-anak mereka dari bullying dan kekerasan lainnya. Bahkan, beberapa orang tua mungkin tidak tahu apakah anak-anak mereka adalah korban, saksi, atau bahkan pelaku dari perbuatan berbahaya ini.</p>
                    <Button style={pallet4} className="px-5 py-2 d-flex justify-content-start btn-app">Baca Selengkapnya</Button>
                    </Carousel.Caption>
                </Carousel.Item>
                </Carousel>
            </Container>
    )
}

export default Caros;