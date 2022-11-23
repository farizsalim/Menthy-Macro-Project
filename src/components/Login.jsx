import{Container, Row, Col, Card, Form, Button} from "react-bootstrap"
import {pallet3,pallet2,fontpallet2, fontpallet3} from "./Color"
import { Imglogin } from "./Imagesrc"
import mainLogo from "../images/Logo.png"
import { NavLink } from "react-router-dom"
import { SIGNUP } from "../router";

const Login = ({}) =>{
    return(
        <>
        <section>
            <Container className="py-5">
                <Row xs={1} md={2} className="g-3">
                    <Col>
                        <img src={Imglogin} alt="" width={700} lassName="px-5" style={{paddingTop: '5rem'}}/>
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
                                <Card.Text className="text-center"><b></b></Card.Text>
                                <Form>
                                    <Form.Group className="mb-3" controlId="formBasicusername">
                                        <Form.Label>Nama</Form.Label>
                                        <Form.Control type="username" />
                                    </Form.Group>
                                  <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>Kata Sandi</Form.Label>
                                        <Form.Control type="password" />
                                    </Form.Group>
                                </Form>
                                <section className="d-flex justify-content-center py-2">
                                <p><b className="m-0" style={fontpallet2}> Lupa Kata Sandi? </b></p>
                                </section>
                                <Col >
                                <section className = "d-flex justify-content-center">
                                    <p><b className="mx-3" style={fontpallet2}> Belum Punya Akun?  </b></p>
                                    <NavLink  to={SIGNUP} className="nav-link mx-3"><h6 style={fontpallet3} > DAFTAR</h6></NavLink>
                                </section> 
                                </Col>
                                
                                <section className="d-flex justify-content-center py-2">
                                    <Button id="loginuser" style={pallet2}><b className="m-0" style={fontpallet2}>MASUK</b></Button>
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

export default Login;