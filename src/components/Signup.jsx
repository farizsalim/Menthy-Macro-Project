import{Container, Row, Col, Card, Form, Button} from "react-bootstrap"
import {pallet3,pallet2,fontpallet2} from "./Color"
import { Imgsignup } from "./Imagesrc"
import mainLogo from "../images/Logo.png"

const Signup = ({}) =>{
    return(
        <>
        <section>
            <Container className="py-5">
                <Row xs={1} md={2} className="g-3">
                    <Col>
                        <img src={Imgsignup} alt="" width={700} className="px-5" style={{paddingTop: '5rem'}}/>
                    </Col>
                    <Col className="d-flex justify-content-center">
                        <Card className="m-4" style={{width: "30rem"}}>
                            <Card.Body style={{backgroundColor: "#F8FAFC"}}>
                                <Card.Title className="text-center"><img
                                alt=""
                                src={mainLogo}
                                width="250"
                                className="d-inline-block align-top"
                                />
                                </Card.Title>
                                <Card.Text className="text-center"><b>DAFTAR</b></Card.Text>
                                <Form>
                                    <Form.Group className="mb-3" controlId="formBasicusername">
                                        <Form.Label>Nama</Form.Label>
                                        <Form.Control type="username" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicNumber">
                                        <Form.Label>Ponsel</Form.Label>
                                        <Form.Control type="number" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control type="email" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>Kata Sandi</Form.Label>
                                        <Form.Control type="password" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>Konfirmasi Kata Sandi</Form.Label>
                                        <Form.Control type="password" />
                                    </Form.Group>
                                </Form>
                                <section className="d-flex justify-content-center py-2">
                                <Button style={pallet2}><b className="m-0" style={fontpallet2}>DAFTAR</b></Button>
                                </section>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
        </>
    )
}

export default Signup;