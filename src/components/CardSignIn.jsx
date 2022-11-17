import { Card, Button, Form} from "react-bootstrap";
import { pallet2,fontpallet2} from "./Color";

const CardSign = () => {
    return(
        <>
        <Card className="m-4" style={{width: "80rem"}}>
            <Card.Body>
                <Card.Title className="text-center">Selamat Datang Di Menthy</Card.Title>
                <Card.Text className="text-center"><b>DAFTAR</b></Card.Text>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Nama</Form.Label>
                        <Form.Control type="username" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Ponsel</Form.Label>
                        <Form.Control type="username" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="username" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Kata Sandi</Form.Label>
                        <Form.Control type="username" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Konfirmasi Kata Sandi</Form.Label>
                        <Form.Control type="username" />
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