import { Row,Col,Container, Card } from "react-bootstrap";
import { NavLink } from "react-router-dom"
import { pallet3, fontpallet2, fontpallet1 } from "../components/Color";
import {Topland} from "../components/Imagesrc"
import Landpage1 from "../components/Landpage1";
import FooterFix from "../components/FooterFix";


const SyaratKetentuan = () =>{
return(
        <>
            <section>      
            
            
            <Row style={pallet3}>
            <section className = "d-flex justify-content-center" style={{paddingTop: '5rem' }}>
             <p><b style={fontpallet1}> SYARAT DAN KETENTUAN  </b></p>
            </section> 
            </Row>
            <Container>
            <section className = "d-flex justify-content-center " style={{paddingTop: '3rem'}}>
                <Card className="p-5">
                    <Card.Text >
                    <p className="text-justify">MOHON UNTUK MEMBACA SELURUH SYARAT DAN KETENTUAN PENGGUNAAN SERTA KEBIJAKAN PRIVASI MenthyDENGAN CERMAT DAN SAKSAMA SEBELUM MENGGUNAKAN SETIAP FITUR DAN/ATAU LAYANAN YANG TERSEDIA DALAM PLATFORM MENTHY.</p> 
                    <p className="text-justify">Syarat dan Ketentuan Penggunaan Menthy(“Ketentuan Penggunaan”) ini merupakan suatu perjanjian sah terkait tata cara dan persyaratan penggunaan fitur dan/atau layanan (“Layanan”) Platform Menthy(“Platform”) antara Pengguna (“Anda”) dengan pengelola Platform, yaitu PT Media Dokter Investama (“Kami”). Dengan mengunduh dan/atau memasang dan/atau menggunakan Platform dan/atau menikmati Layanan Kami, Anda setuju bahwa Anda telah membaca, memahami, mengetahui, menerima, dan menyetujui seluruh informasi, syarat-syarat, dan ketentuan-ketentuan penggunaan Platform yang terdapat dalam Ketentuan Penggunaan ini.</p>
                    <p>Kami dapat mengubah ketentuan dalam Ketentuan Penggunaan ini kapan saja. Perubahan tersebut akan berlaku setelah ditampilkan di Platform. Adalah tanggung jawab Anda untuk meninjau Ketentuan Penggunaan secara teratur. Keberlanjutan Anda atas penggunaan Platform setelah adanya setiap perubahan tersebut, baik telah Anda tinjau atau tidak, akan merupakan perjanjian Anda untuk terikat oleh setiap perubahan tersebut.</p>
                    <p></p>
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

export default SyaratKetentuan;