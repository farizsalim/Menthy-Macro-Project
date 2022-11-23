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
                <Card.Body style={{height: "13rem"}}>
                    <h6 style={fontpallet1}>{title}</h6>
                    <Card.Text style={fontpallet1}>{textBody}</Card.Text>
                </Card.Body>
            </Card>
        </>
    )
}

export default MentalCard;