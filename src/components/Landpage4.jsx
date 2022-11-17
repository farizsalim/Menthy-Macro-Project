import { Container, Nav , Table} from "react-bootstrap";   
import { MediaLogo } from "./Imagesrc";
import CardSign from "./CardSignIn";

const Landpage4 = () =>{
    return(
        <>
        <section>
            <Container className="py-3 d-flex justify-content-center">
                <CardSign/>
                <Table>
                <td className="align-middle">
                    <section className="d-flex justify-content-center pt-3">
                        <h6>@Copyright 2022</h6>
                    </section>
                    <section className="d-flex justify-content-center p-1" style={{color: "#256D85"}}>
                        <Nav.Link className="px-2">Hubungi Kami</Nav.Link>
                        <Nav.Link className="px-2">Syarat Ketentuan</Nav.Link>
                        <Nav.Link className="px-2">Kebijakan Privasi</Nav.Link>
                    </section>
                    <section className="d-flex justify-content-center p-5">
                        <img src={MediaLogo} alt="" width={250}/>
                    </section>
                </td>
                </Table>
            </Container>
        </section>
        </>
    )
}

export default Landpage4;