import{Navbar, Container, Nav, Button} from "react-bootstrap"
import { LANDPAGE,ARTICLE,MENTALTYPE,MENTALTEST } from "../router";
import { NavLink } from "react-router-dom"
import {pallet3,fontpallet1} from "./Color"
import mainLogo from "../images/Logo.png"
import "../App.css"
const Navs = ()=>{
    
    return(
    <Navbar className="fixed-top navbar" bg="light" expand="lg">
        <Container>
            <NavLink className="nav-brand" to={LANDPAGE}><img
              alt=""
              src={mainLogo}
              width="150"
              height="50"
              className="d-inline-block align-top"
            /></NavLink>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto justify-content-center flex-grow-1 px-5">
                <NavLink to={MENTALTEST} className="nav-link"><h6 className="nav-text">Tes Kesehatan Mental</h6></NavLink>
                <NavLink to={MENTALTYPE} className="nav-link"><h6 className="nav-text">Tipe Permasalahan Mental</h6></NavLink>
                <NavLink to={ARTICLE} className="nav-link"><h6 className="nav-text">Artikel</h6></NavLink>
            </Nav>
            <Button className="btn-app" variant="justify-content-end flex-grow-2" 
            style={pallet3}
            > <h6 style={fontpallet1} className="m-1">Masuk</h6></Button>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    )
}

export default Navs;