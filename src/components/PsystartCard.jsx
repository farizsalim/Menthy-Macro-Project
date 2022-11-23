import { Card, Container } from "react-bootstrap";
import { Teststart } from "./Imagesrc";

const Psystartcard = () =>{
    return(
        <section>
            <Container className="d-flex justify-content-center">
                <Card style={{width: "50rem"}} >
                    <Card.Title className="d-flex justify-content-center">
                        <h1><b>Test Kesehatan Mental</b></h1>
                    </Card.Title>
                    <Card.Text className="mx-5">
                        <h4>Panduan Pengisian</h4>
                        <h4>
                            <ul>
                                <li>Isilah Pertanyaan berikut sejujur-jujurnya !</li>
                                <li>Tidak ada batasan waktu pengerjaan.</li>
                                <li>Jika kamu keluar di tengah tes, maka seluruh proses tes dan jawaban akan hilang.</li>
                                <li>Hasil tes bisa kamu dapatkan setelah mengisi semua pertanyaan dengan lengkap.</li>
                                <li>Selamat Mengerjakan</li>
                            </ul>
                        </h4>
                     </Card.Text>
                </Card>
            </Container>
        </section>
    )
}

export default Psystartcard;