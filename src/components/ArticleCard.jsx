import{Card, Container, Button, Row, Col} from "react-bootstrap"
import {pallet3,pallet4} from "./Color"
import { Artikel1 } from "./Imagesrc"

const ArticleCard = ({title,textBody}) =>{
    return(
        <>
        <Container className="py-3">
                <Card style={pallet3} className="card flex-row flex-wrap">
                    <Row className="g-0">
                        <Col md={2}>
                            <Card.Img src={Artikel1} className="img-fluid rounded-start" width={100} height={100} />
                        </Col>
                        <Col md={10}>
                            <Card.Body>
                                <Card.Title>{title}</Card.Title>
                                <Card.Text>
                                    {textBody}
                                </Card.Text>
                                <Button className="btn-app" style={pallet4}>Baca Selengkapnya</Button>
                            </Card.Body>
                        </Col>
                    </Row>
                </Card>
        </Container>
        </>
    )
}

export default ArticleCard;

