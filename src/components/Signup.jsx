import{Container, Row, Col, Card, Form, Button} from "react-bootstrap"
import {pallet3,pallet2,fontpallet2} from "./Color"
import { Imgsignup } from "./Imagesrc"
import mainLogo from "../images/Logo.png"
import Swal from "sweetalert2"
import { LANDPAGE } from "../router"
import { useNavigate } from "react-router-dom";

const Signup = ({}) =>{
    const navigate = useNavigate();

    function successalert(){
        Swal.fire({
            icon: 'success',
            title: 'Registrasi Berhasil',
        }).then(() => {
            navigate(LANDPAGE);
          });
          
    }

    function erroralert(){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Lengkapi Data',
          })
    }
    
    function handelSignUp(){
        const username = document.getElementById("formBasicusername").value;
        const number = document.getElementById("formBasicNumber").value;
        const email = document.getElementById("formBasicEmail").value;
        const password = document.getElementById("formBasicPassword").value;

        if (username !== "" && password !== "") {
        successalert();
        } else {
        erroralert();
        }
    }
    return(
        <>
        <section>
            <Container className="mt-5 p-5" style={{height: "50rem"}}>
                <Row xs={1} md={2}>
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
                                <Button style={pallet2} onClick={handelSignUp}><b className="m-0" style={fontpallet2}>DAFTAR</b></Button>
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