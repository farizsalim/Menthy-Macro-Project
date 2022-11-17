import { Container } from "react-bootstrap";
import { defaultpallet } from "./Color";

const FooterLand = () => {
    return(
        <>
        <section style={defaultpallet}>
            <Container>
                <section className="d-flex justify-content-center p-3">
                            <p className="text-center"><b>Pernyataan:</b> Semua versi non-bahasa Indonesia dari situs web berisi terjemahan otomatis atau terjemahan yang dikirimkan oleh pengguna kami. Mereka tidak mengikat dengan cara apa pun, tidak dijamin akurat, dan tidak memiliki efek hukum. Teks resmi dari situs web adalah versi bahasa Indonesia. Harap pertimbangkan untuk melaporkan ketidakakuratan ke support@menthy.com atau bergabunglah dengan proyek terjemahan kami!</p>
                </section>
            </Container>
        </section>
        </>
    )
}

export default FooterLand;