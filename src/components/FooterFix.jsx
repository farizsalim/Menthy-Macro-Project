import { Container, Nav } from "react-bootstrap";
import { defaultpallet } from "./Color";
import { MediaLogo } from "./Imagesrc";

const FooterFix = () => {
    return(
        <section style={defaultpallet}>
            <Container>
                <section className="d-flex justify-content-center pb-5 pt-3">
                    <h6>@Copyright 2022</h6>
                </section>
                <section className="d-flex justify-content-center p-1" style={{color: "#256D85"}}>
                    <Nav.Link className="px-2">Hubungi Kami</Nav.Link>
                    <Nav.Link className="px-2">Syarat Ketentuan</Nav.Link>
                    <Nav.Link className="px-2">Kebijakan Privasi</Nav.Link>
                </section>
                <section className="d-flex justify-content-center p-5">
                    <img src={MediaLogo} alt="" width={250}/>
                </section>
                <section className="d-flex justify-content-center pb-3">
                    <p className="text-center"><b>Pernyataan:</b> Semua versi non-bahasa Indonesia dari situs web berisi terjemahan otomatis atau terjemahan yang dikirimkan oleh pengguna kami. Mereka tidak mengikat dengan cara apa pun, tidak dijamin akurat, dan tidak memiliki efek hukum. Teks resmi dari situs web adalah versi bahasa Indonesia. Harap pertimbangkan untuk melaporkan ketidakakuratan ke support@menthy.com atau bergabunglah dengan proyek terjemahan kami!</p>
                </section>
            </Container>
        </section>
    )
}

export default FooterFix;