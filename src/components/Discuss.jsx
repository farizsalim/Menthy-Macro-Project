import { pallet1,pallet4, pallet3, fontpallet1 } from "./Color";
import { Container,Card,Form,InputGroup, Button } from "react-bootstrap";
import { Usertest } from "./Imagesrc";

const Discuss = () => {
    return(
        <>
            <section style={pallet4}>
                <Container className="py-5">
                    <h3 style={fontpallet1}>Diskusi</h3>
                    <Card style={pallet3} className="my-3">
                        <Card.Body>
                            <Card.Title style={fontpallet1}>Aturan Dalam Berdiskusi</Card.Title>
                            <Card.Text style={fontpallet1}>
                            <ol>
                                <li>Usahakan Sesuaikan Topik</li>
                                <li>Dilarang menyinggung SARA</li>
                            </ol>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={pallet1}>
                        <Card.Body>
                            <Card.Title>
                                <InputGroup className="mb-3">
                                    <InputGroup.Text id="inputGroup-sizing-default">
                                        <img src={Usertest} width={100} />
                                    </InputGroup.Text>
                                    <Form.Control
                                    aria-label="Default"
                                    aria-describedby="inputGroup-sizing-default"
                                    />
                                </InputGroup>
                                <section className="d-flex justify-content-end">
                                    <Button className="mx-2" style={pallet4}>Batal</Button>
                                    <Button style={pallet4}>Kirim</Button>
                                </section>
                            </Card.Title>
                            <Card.Text style={fontpallet1}>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Container>
            </section>
        </>
    )
}

export default Discuss;