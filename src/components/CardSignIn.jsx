import { Card, Button, Form} from "react-bootstrap";
import { pallet2,fontpallet2} from "./Color";

const CardSign = () => {
    return(
        <>
        <Card className="m-4" style={{width: "80rem"}}>
            <Card.Body style={{backgroundColor: "#F8FAFC"}}>
                <Card.Title className="text-center">Selamat Datang Di Menthy</Card.Title>
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
        </>
    )
}

export default CardSign;