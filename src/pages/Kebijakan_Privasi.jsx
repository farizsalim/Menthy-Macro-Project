import { Row,Container, Card } from "react-bootstrap";
import { pallet3, fontpallet1 } from "../components/Color";
import FooterFix from "../components/FooterFix";


const KebijakanPrivasi = () =>{
return(
        <>
            <section>      
            
            
            <Row style={pallet3}>
            <section className = "d-flex justify-content-center" style={{paddingTop: '5rem' }}>
             <p><b style={fontpallet1}> KEBIJAKAN PRIVASI  </b></p>
            </section> 
            </Row>
            <Container>
            <section className = "d-flex justify-content-center " style={{paddingTop: '3rem'}}>
                <Card className="p-5">
                    <Card.Text >
                    <p className="text-justify"></p>
                    <p> KEBIJAKAN PRIVASI MENTHY </p>
                    <p>Selamat datang di Menthy! </p>
                    <p> Harap membaca Kebijakan Privasi ini secara seksama sebelum Anda mulai menggunakan Platform Kami, karena peraturan ini berlaku pada penggunaan Anda terhadap Platform Kami.</p>
                    <p>Kami percaya bahwa Anda harus dapat membuat keputusan yang tepat mengenai data pribadi Anda. </p>
                    <p>Kami membuat kebijakan privasi ini (“Kebijakan Privasi”) untuk memberitahu dan menjelaskan kepada Anda bagaimana kami(“Menthy”, “Kami”, “kita”, “milik Kami”) mengumpulkan, menggunakan, memproses, mengungkapkan, dan melindungi Data Pribadi yang Anda berikan kepada Kami melalui Aplikasi seluler, situs web (Website) Menthy dan/atau platform lainnya (secara bersama-sama disebut “Platform”), sebagaimana diminta maupun pada saat menggunakan Platform.</p>
                    </Card.Text>
                </Card>
            
            </section> 
                </Container>
            </section>
            <section style={{paddingTop: '5cm'}}>

            <FooterFix/>        
            </section>
        </>
    )
}

export default KebijakanPrivasi;