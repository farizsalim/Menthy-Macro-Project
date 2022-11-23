import { Row,Col,Container } from "react-bootstrap";
import {Imgsignup} from "../components/Imagesrc"
import { pallet3 } from "../components/Color";
import Login from "../components/Login";


const LoginPage = () => {
    return(
    <>
    <section style={{paddingTop: "3rem"}}>
        <Login/>
    </section>
    </>
    )
}

export default LoginPage;