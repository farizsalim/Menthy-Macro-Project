import { Button, Container } from "react-bootstrap";
import { pallet2, pallet3 } from "./Color";

const Landpage1 = () =>{
    return(
        <>
            <section>
                <Container className="py-3">
                    <h1>
                        <b>
                        “Pemulihan bukanlah satu dan selesai. 
                        </b>
                    </h1>
                    <h1>
                        <b>
                        Ini adalah perjalanan seumur hidup yang terjadi satu hari, 
                        selangkah demi selangkah.”
                        </b>
                    </h1>
                </Container>
                <Container className="d-flex justify-content-center py-2">
                    <h4 className="text-center">Lakukan Tes Kesehatan Mental dari kami untuk <br/>
                        mengetahui Kesehatan Mental Anda.
                    </h4>
                </Container>
            </section>
            <section className="d-flex justify-content-center py-2">
                <Button style={pallet3} className="rounded-pill p-3"><h2>Lakukan Tes</h2></Button>
            </section>
            <section className="d-flex justify-content-center py-3">
                <Button style={pallet3} className="rounded-circle p-3">Turun</Button>
            </section>
            <section className="d-flex justify-content-center p-2" style={pallet2}>
                    <h1 className="px-3 text-center"><b style={{color:"#00000"}}>100.000+</b><br/><h5 style={{color:"#ffffff"}}>Total Tes</h5></h1>
                    <h1 className="px-3 text-center"><b style={{color:"#00000"}}>95%</b><br/><h5 style={{color:"#ffffff"}}>Hasil Tes Dinilai Akurat</h5></h1>
                </section>
        </>
    )
}

export default Landpage1;