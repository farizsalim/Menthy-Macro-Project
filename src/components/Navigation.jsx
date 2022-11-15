import{Navbar, Container, Nav, Button} from "react-bootstrap"
import { NavLink } from "react-router-dom"
import {pallet3} from "./Color"
import mainLogo from "../images/Logo.png"
import "../App.css"
const Navs = ()=>{
    
    return(
    <Navbar bg="light" expand="lg">
        <Container>
            <Navbar.Brand href="#home"><img
              alt=""
              src={mainLogo}
              width="150"
              height="50"
              className="d-inline-block align-top"
            /></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto justify-content-center flex-grow-1 px-5">
                <NavLink to="/" className="nav-link"><h6 className="nav-text">Tes Kesehatan Mental</h6></NavLink>
                <NavLink to="/" className="nav-link"><h6 className="nav-text">Tipe Kesehatan Mental</h6></NavLink>
                <NavLink to="/ArticleM" className="nav-link"><h6 className="nav-text">Artikel Kesehatan Mental</h6></NavLink>
            </Nav>
            <Button className="btn-app" variant="justify-content-end flex-grow-2" 
            style={pallet3}
            >Masuk</Button>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    )
}

export default Navs;