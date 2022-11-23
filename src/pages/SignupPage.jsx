import { Row,Col,Container } from "react-bootstrap";
import {Imgsignup} from "../components/Imagesrc"
import { pallet3 } from "../components/Color";
import Signup from "../components/Signup";

const SignupPage = () => {
    return(
    <>
    <section style={{paddingTop: "3rem"}}>
        <Signup/>
    </section>
    </>
    )
}

export default SignupPage;