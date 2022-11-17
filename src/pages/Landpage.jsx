import {Topland} from "../components/Imagesrc"
import Landpage1 from "../components/Landpage1";
import Landpage2 from "../components/Landpage2";
import Landpage3 from "../components/Landpage3";
import Landpage4 from "../components/Landpage4";
import FooterLand from "../components/FooterLand";

const Landpage = () =>{
    return(
        <>
            <section>
                <img src={Topland} alt="" width="100%"/>
            </section>
            <Landpage1/>
            <Landpage2/>
            <Landpage3/>
            <Landpage4/>
            <FooterLand/>
        </>
    )
}

export default Landpage;