import{Card, Container, Button} from "react-bootstrap"
import {pallet3,pallet4} from "./Color"
import { Artikel2 } from "./Imagesrc"

const Bigcard = ({title,textBody}) =>{
    return(
        <>
        <Container className="py-2">

            <Card style={pallet3} className="card flex-row flex-wrap">
                <Card.Img src={Artikel2} className="rounded-top" width={1000} height={300}/>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {textBody}
                    </Card.Text>
                    <Button className="btn-app" style={pallet4}>Baca Selengkapnya</Button>
                </Card.Body>
            </Card>
        </Container>
        </>
    )
}

export default Bigcard;