import { Button, Col, Container, Row } from "react-bootstrap";
import { pallet2, pallet3 } from "./Color";
import {Artpage1} from "./Imagesrc"

const Landpage1 = () =>{
    return(
        <>
            <section>
                <Container>
                    <Row xs={1} md={2} className="g-3">
                        <Col className="my-5">
                            <h1 className="text-center pt-5">
                                <b>
                                "Kesehatan Mental anda adalah Prioritas Kami "
                                </b>
                            </h1>
                            <h3 className="text-center">
                            Lakukan Tes Kesehatan Mental dari kami untuk mengetahui Kesehatan Mental Anda.
                            </h3>
                            <section className="d-flex justify-content-center">
                                <Button className="my-5" style={pallet3}>
                                    <h1 className="p-3">
                                    Lakukan Tes
                                    </h1>
                                </Button>
                            </section>
                            <Row md={2} className="py-5">
                                <Col className="text-center">
                                    <h1><b>100.000+</b></h1>
                                    <h3>Total Test</h3>
                                </Col>
                                <Col className="text-center">
                                    <h1><b>95%</b></h1>
                                    <h3>Hasil Tes Dinilai Akurat</h3>
                                </Col>
                            </Row>
                        </Col>
                        <Col>
                            <img src={Artpage1} alt="" width={700} />
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Landpage1;