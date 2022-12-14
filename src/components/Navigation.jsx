import{Navbar, Container, Nav, Button} from "react-bootstrap"
import { LANDPAGE,ARTICLE,MENTALTYPE,MENTALTEST, LOGIN } from "../router";
import { NavLink } from "react-router-dom"
import {pallet4,fontpallet1,fontpallet2} from "./Color"
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
                <NavLink to={MENTALTEST} className="nav-link" ><h6 style={fontpallet2} >Tes Kesehatan Mental</h6></NavLink>
                <NavLink to={MENTALTYPE} className="nav-link"><h6 style={fontpallet2} >Tipe Permasalahan Mental</h6></NavLink>
                <NavLink to={ARTICLE} className="nav-link"><h6 style={fontpallet2} >Artikel</h6></NavLink>
            </Nav>
            <NavLink to={LOGIN} className="nav-link"><Button className="btn-app" variant="justify-content-end flex-grow-2" style={pallet4}>
                <h6 style={fontpallet1} className="m-1">Masuk</h6></Button></NavLink>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    )
}

export default Navs;