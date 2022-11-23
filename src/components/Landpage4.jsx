import { Container, Nav , Table} from "react-bootstrap";   
import { MediaLogo } from "./Imagesrc";
import CardSign from "./CardSignIn";
import { NavLink } from "react-router-dom";
import { fontpallet2 } from "./Color";
import { SYARAT_KETENTUAN,KEBIJAKAN_PRIVASI } from "../router"; 

const Landpage4 = () =>{
    return(
        <section>
            <Container className="py-3 d-flex justify-content-center">
                <CardSign/>
                <Table>
                <section className="align-middle">
                    <section className="d-flex justify-content-center pt-3">
                        <h6>@Copyright 2022</h6>
                    </section>
                    <section className="d-flex justify-content-center p-1" style={{color: "#256D85"}}>
                        <Nav.Link className="px-2">Hubungi Kami</Nav.Link>
                        <NavLink to={SYARAT_KETENTUAN} className="px-2 nav-link" style={fontpallet2}>Syarat Ketentuan</NavLink>
                        <NavLink to={KEBIJAKAN_PRIVASI} className="px-2 nav-link" style={fontpallet2}>Kebijakan Privasi</NavLink>
                    </section>
                    <section className="d-flex justify-content-center p-5">
                        <img src={MediaLogo} alt="" width={250}/>
                    </section>
                </section>
                </Table>
            </Container>
        </section>
    )
}

export default Landpage4;