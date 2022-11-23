import { Container, Button} from "react-bootstrap";
import { pallet3,pallet4 } from "./Color";

const Pageart = () => {


  return (
    <>
    <Container className="d-flex justify-content-center py-3">
      <Button style={pallet3} className="mx-2">1</Button>
      <Button style={pallet4} className="mx-2">2</Button>
      <Button style={pallet4} className="mx-2">3</Button>
      <Button style={pallet4} className="mx-2">Selanjutnya >> </Button>
    </Container>
    </>
  );
}

export default Pageart;