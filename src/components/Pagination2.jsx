import { Container, Button} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { pallet3,pallet4 } from "./Color";
import { ARTICLE } from "../router";

const Pageart2 = () => {


  return (
    <>
    <Container className="d-flex justify-content-center py-3">
    <NavLink to={ARTICLE}><Button style={pallet4} className="mx-2">Sebelumnya</Button></NavLink>
    <NavLink to={ARTICLE}><Button style={pallet4} className="mx-2">1</Button></NavLink>
      <Button style={pallet3} className="mx-2">2</Button>
      <Button style={pallet4} className="mx-2">3</Button>
      <NavLink to={ARTICLE}><Button style={pallet4} className="mx-2">Selanjutnya</Button></NavLink>
    </Container>
    </>
  );
}

export default Pageart2;