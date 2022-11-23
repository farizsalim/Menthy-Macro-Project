import { Container } from "react-bootstrap";
import Searchinput from "../components/Search"; 
import {Artikel1} from "../components/Imagesrc";
import FooterFix from "../components/FooterFix";
import Discuss from "../components/Discuss";

const Articlepage =() =>{
    return(
        <>
        <section style={{paddingTop: "5rem"}}>
        <Searchinput/>
        <Container className="pb-5">
            <h1><b>Gejala Depresi, Ketahui di Antaranya</b></h1>
            <img src={Artikel1} style={{width: "100%"}} className="rounded"/>
            <section style={{paddingTop: "1rem"}}>
                <h5><b>Banyak orang yang sebenarnya sedang mengalami depresi, tapi tidak menyadarinya. Hal itu mungkin terjadi karena kurangnya pemahaman bahwa gejala depresi tidak hanya sebatas rasa sedih yang mendalam.</b></h5>
                <h5>Gejala depresi bisa dikenali secara psikologis, fisik, bahkan dalam interaksi sosial. Selain tampak sedih, seseorang yang mengalami depresi dapat mengalami kesulitan tidur, perubahan pola makan, hingga gangguan sosial seperti menarik diri.</h5>
                <h5>
                    <b>Memahami Gejala Depresi dari Berbagai Aspek</b>
                    <br></br>Berikut ini adalah tanda-tanda depresi ditinjau dari berbagai aspek yang memengaruhi kehidupan seseorang:
                    <br />
                </h5>
                <h5>
                    <b>Psikologis</b>
                    <br />Secara garis besar, depresi dapat dikenali melalui perubahan psikologis seseorang. Jika saat ini Anda merasakan hal-hal berikut, bisa jadi Anda sedang mengalami depresi:
                    <ul>
                        <li>Perasaan sedih yang mendalam</li>
                        <li>Cemas dan khawatir terus-menerus</li>
                        <li>Kehilangan minat dan motivasi hidup</li>
                        <li>Menyalahkan diri sendiri atas masalah atau kejadian yang dihadapi</li>
                        <li>Putus asa, merasa rendah diri, dan pesimis secara berkepanjangan.</li>
                        <li>Mudah marah dan tersinggung</li>
                    </ul>
                    Pada tingkatan yang parah, orang dengan depresi memiliki kecenderungan untuk menyakiti diri sendiri, bahkan muncul keinginan untuk bunuh diri.
                </h5>
                <h5>
                    <b>Fisik</b>
                    <br />Penderita depresi juga dapat mengalami perubahan fisik, yang dapat ditandai dengan beberapa gejala berikut:
                    <ul>
                        <li>Adanya perubahan nafsu makan, bisa menurun atau meningkat, sehingga memengaruhi berat badan</li>
                        <li>Mengalami gangguan tidur, misalnya sulit tidur dan/atau sering terbangun dari tidur</li>
                        <li>Bergerak dan berbicara lebih lambat daripada biasanya</li>
                        <li>Merasa sakit, tetapi tidak jelas sakit apa dan di bagian mana</li>
                        <li>Perubahan siklus menstruasi</li>
                        <li>Menurunnya gairah seks</li>
                        <li>Mudah lelah</li>
                        <li>Sering mengalami masalah pencernaan, seperti sakit maag atau sembelit.</li>
                    </ul>
                </h5>
                <h5>
                    <b>Sosial</b>
                    <br />Selain dari aspek psikologis dan fisik di atas, gejala depresi juga dapat dikenali dari interaksi sosial penderitanya, antara lain:
                    <ul>
                        <li>Mengalami kesulitan membina hubungan dengan lingkungan sekitar, baik dalam lingkungan keluarga, teman, maupun rumah tangga</li>
                        <li>Menyendiri, mati rasa, atau menghindari kontak sosial dengan orang-orang di sekitar</li>
                        <li>Mengalami kesulitan menyelesaikan pekerjaan</li>
                        <li>Tidak peduli lagi pada hobi dan minat yang sebelumnya terasa menarik.</li>
                    </ul>
                </h5>
                <h5>
                Depresi tidak hanya dialami oleh orang dewasa atau lanjut usia (lansia) saja, anak-anak dan remaja pun dapat mengalami depresi. Oleh karena itu, penting juga mewaspadai gejala depresi yang dirasakan oleh anak-anak dan remaja.
                    <br />Ciri-ciri depresi pada anak biasanya dikenali dari sikapnya yang mudah marah, sedih berkepanjangan, tidak mau pergi ke sekolah, serta berat badan di bawah normal. Sedangkan remaja yang mengalami depresi biasanya memiliki emosi yang meluap-luap, keinginannya untuk berinteraksi dengan keluarga jadi berkurang, dan prestasinya di sekolah menurun.
                </h5>
                <h5>
                    <b>Cara Menangani Gejala Depresi</b>
                    <br />Gejala depresi memang tidak selalu sama antara satu orang dengan yang lain, begitu pula dengan penanganannya. Secara umum penanganan depresi bisa dilakukan melalui obat-obatan, psikoterapi, atau kombinasi dari keduanya. Anda juga bisa mencoba mandi pagi untuk membantu meredakan gejala depresi.
                    <br />Penanganan dengan obat-obatan sangat baik dalam mengurangi gejala depresi, terutama dari aspek fisik. Sedangkan gejala depresi dari aspek psikologis dan sosial dapat ditangani lebih dalam melalui psikoterapi. Berikut ini beberapa jenis terapi yang dapat diberikan melalui psikoterapi:
                    <ul>
                        <li>Terapi kognitif dan perilaku</li>
                        <li>Terapi kemampuan sosial</li>
                        <li>Terapi pemecahan masalah (problem solving)</li>
                        <li>Terapi interpersonal</li>
                        <li>Terapi psikodinamika.</li>
                    </ul>
                    <br />Jika Anda mengenali gejala depresi pada diri Anda atau seseorang di sekitar Anda, jangan biarkan kondisi ini terjadi berlarut-larut. Coba ceritakan permasalahan ini pada kerabat yang Anda percaya, sebab dukungan dari keluarga dan sahabat memegang peranan penting bagi pemulihan penderita depresi.
                    <br />Bila perlu, kunjungi psikolog atau psikiater untuk mendapatkan penanganan yang aman dan tepat. Psikolog dan psikiater dapat membantu Anda menemukan cara terbaik dalam menghadapi penyebab depresi yang dialami. Tujuannya bukan hanya untuk mengobati depresi, tapi juga untuk memperbaiki kesehatan Anda dalam jangka panjang.
                </h5>
            </section>
        </Container>
        </section>
        <Discuss/>
        <FooterFix/>
        </>
    )
}

export default Articlepage;