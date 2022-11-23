import { Container, Row , Col} from "react-bootstrap";
import Caros from "../components/Carousel";
import { pallet3 } from "../components/Color";
import { Depresi, Disosiatif, Kecemasan, Kepribadian, Panik, Stres } from "../components/Imagesrc";
import MentalCard from "../components/MentalCard";
import Searchinput from "../components/Search";
import { MENTALTYPE } from "../router";
import { NavLink } from "react-router-dom";
import FooterFix from "../components/FooterFix";

const MentalType = () => {
    return(
        <>
        <section style={{paddingTop: "5rem"}}>  
            <Caros/>
            <Searchinput/>
            <Container>
                <Row xs={1} md={4} className="g-3">
                    <Col md={4} className="mb-4">
                        <MentalCard image={Kecemasan} textBody="Keluhan pertama yang dialami adalah rasa cemas berlebihan, dimana penderitanya merasa khawatir dan ketakutan secara terus menerus. Kondisi ini bisa terjadi kapan saja, terutama bagi wanita diatas 30 tahun." title="Apa itu Kecemasan ?"/>
                    </Col>
                    <Col md={4} >
                        <MentalCard image={Depresi} textBody="Depresi merupakan sebuah penyakit yang di tandain dengan rasa sedih yang berkepanjangan dan kehilangan minat terhadap kegiatan-kegiatan yang biasanya kita lakukan dengan senang hati." title="Apa itu depresi ?"/>
                    </Col>
                    <Col md={4} className="mb-4">
                        <MentalCard image={Panik} textBody="Panik Attack adalah suatu serangan ketakutan yang intens atau kuat, yang akan memicu berbagai gejala fisik yang parah padahal tidak ada bahaya yang nyata atau penyebab yang jelas" title="Apa itu Serangan Panik ?"/>
                    </Col>
                    <Col md={4} className="mb-4">
                        <MentalCard image={Stres} textBody="Stres adalah reaksi seseorang baik secara fisik maupun emosional (mental/psikis) apabila ada perubahan dari lingkungan yang mengharuskan seseorang menyesuaikan diri." title="Apa itu Stres ?"/>
                    </Col>
                    <Col md={4} className="mb-4">
                        <MentalCard image={Disosiatif} textBody="Jenis gangguan mental yang menghilangkan kesinambungan antara pikiran, tindakan, ingatan, hingga identitas. Gangguan ini sering dialami seseorang dengan pengalaman traumatis yang mendalam sebagai bentuk pertahanan diri dari trauma tersebut." title="Apa itu Disosiatif ?"/>
                    </Col>
                    <Col md={4} className="mb-4">
                        <MentalCard image={Kepribadian} textBody="Gangguan kepribadian (Personality disorder) merupakan kondisi ketika seseorang memiliki pola pikir dan perilaku yang tidak sehat. Saat mengalami gangguan kepribadian, Seseorang akan merasa kesulitan untuk berhubungan dengan orang lain." title="Apa itu Gangguan Kepribadian ?"/>
                    </Col>
                </Row>
            </Container>
        </section>
        <section style={{paddingTop: '5cm'}}>

<FooterFix/>        
</section>
        </>
    )
}

export default MentalType;