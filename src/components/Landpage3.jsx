import { Container, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { pallet3, pallet4 } from "./Color";
import { Artpage3 } from "./Imagesrc";
import {ARTICLE} from "../router";
const Landpage3 = () =>{
    return(
        <>
        <section style={pallet3}>
            <Container className="py-5 d-flex justify-content-center">
            <section className="align-middle py-5">
                    <h1 className="text-center py-2"><b>Artikel Kesehatan<br/>Mental</b></h1>
                    <h3 className="text-center py-2">Apa berbagai tipe atau jenis masalah
                    <br /> Kesehatan mental, seperti Stress,
                    <br /> Depresi, Kecemasan, dan
                    <br /> sebagainya...
                    <br /> Pelajari tentang berbagai 
                    <br /> kondisi Kesehatan mental secara 
                    <br /> mendalam.</h3>
                    <section className="d-flex justify-content-center py-2">
                        <Button style={pallet4} className="py-2 rounded-pill"><NavLink className="nav-link" to={ARTICLE}><h3 className="p-2">Telusuri</h3></NavLink></Button>
                    </section>
                </section>
                <img src={Artpage3} alt="" width={700} className="px-5"/>
            </Container>
        </section>
        </>
    )
}

export default Landpage3;