 import { InputGroup,Form, Container, Button } from "react-bootstrap";
 import {pallet4} from "./Color"
 
 const Searchinput = () =>{
    return(
        <Container className="py-1">
            <InputGroup className="mb-3">
                <InputGroup.Text id="inputGroup-sizing-default" style={pallet4}>
                <Button style={pallet4}>Search</Button>
                </InputGroup.Text>
                <Form.Control
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                />
            </InputGroup>
        </Container>
    )
 }

 export default Searchinput;