import { Container, Button } from "react-bootstrap";
import { pallet2, pallet4 } from "./Color";
import { Artpage2 } from "./Imagesrc";
const Landpage2 = () =>{
    return(
        <>
        <section style={pallet2}className="pt-5">
            <Container className="py-5 d-flex justify-content-center">
                <img src={Artpage2} alt="" width={700} className="px-5"/>
                <section className="align-middle py-5">
                    <h1 className="text-center py-2"><b>Tipe Permasalahan<br/>Mental</b></h1>
                    <h3 className="text-center py-2">Apa berbagai tipe atau jenis masalah
                    <br /> Kesehatan mental, seperti Stress,
                    <br /> Depresi, Kecemasan, dan
                    <br /> sebagainya...
                    <br /> Pelajari tentang berbagai 
                    <br /> kondisi Kesehatan mental secara 
                    <br /> mendalam.</h3>
                    <section className="d-flex justify-content-center py-2">
                        <Button style={pallet4} className="p-2"><h3 className="p-2">Telusuri</h3></Button>
                    </section>
                </section>
            </Container>
        </section>
        </>
    )
}

export default Landpage2;