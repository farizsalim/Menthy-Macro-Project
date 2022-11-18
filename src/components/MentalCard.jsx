import { Card } from "react-bootstrap";

const MentalCard = ({image,title,textBody}) => {
    return(
        <>
            <Card className="card-image">
                <Card.Img className="image-container"
                    variant="top"
                    src={image}
                    style={{height: "15rem"}}
                />
                <Card.Body>
                    <h6>{title}</h6>
                    <Card.Text>{textBody}</Card.Text>
                </Card.Body>
            </Card>
        </>
    )
}

export default MentalCard;