import{Card, Button} from "react-bootstrap"
import {pallet3,pallet4,fontpallet1} from "./Color"


const ArticleCard = ({title,textBody,imageArt}) =>{
    return(
        <>
            <Card style={pallet3}>
                <Card.Img variant="top" src={imageArt}/>
                <Card.Body style={{height: "7rem"}}>
                    <Card.Title style={fontpallet1}>{title}</Card.Title>
                    <Card.Text style={fontpallet1}>
                    {textBody}
                    </Card.Text>
                </Card.Body>
                <Card.Body>
                    <Button style={pallet4} className="px-5 py-2 btn-app">Baca Selengkapnya</Button>
                </Card.Body>
            </Card>
        </>
    )
}

export default ArticleCard;

