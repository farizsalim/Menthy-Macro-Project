import { Card } from "react-bootstrap";
import { pallet3,fontpallet1 } from "./Color";

const MentalCard = ({image,title,textBody}) => {
    return(
        <>
            <Card className="card-image" style={pallet3}>
                <Card.Img className="image-container"
                    variant="top"
                    src={image}
                    style={{height: "15rem"}}
                />
                <Card.Body style={fontpallet1}>
                    <h6>{title}</h6>
                    <Card.Text>{textBody}</Card.Text>
                </Card.Body>
            </Card>
        </>
    )
}

export default MentalCard;