import Psystartcard from "../components/PsystartCard";
import { Teststart } from "../components/Imagesrc";
import { defaultpallet, pallet4} from "../components/Color";
import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import FooterFix from "../components/FooterFix";
import { MASUK_MENTALTEST } from "../router";


const Testpsikologi = () => {
    return(
        <section style={defaultpallet}>
            <section style={{paddingTop: "5rem"}} className="d-flex justify-content-center my-5">
                <img src={Teststart} width={400} />
            </section>
                <Psystartcard/>
                <section className="d-flex justify-content-center my-5">
                    <NavLink to={MASUK_MENTALTEST}><Button style={pallet4}><h1 className="px-5">Mulai</h1></Button></NavLink>
                </section>
                <FooterFix/>
        </section>
    )
}

export default Testpsikologi;