import React from "react"
import './Sponsor.css'
import $ from "jquery"
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';


import sponser_img3 from '../../images/sponser_images/Group 3.png'
import sponser_img4 from '../../images/sponser_images/Group 4.png'
import sponser_img11 from '../../images/sponser_images/Group 11.png'
import sponser_img12 from '../../images/sponser_images/Group 12.png'
import sponser_img13 from '../../images/sponser_images/Group 13.png'
import sponser_img17 from '../../images/sponser_images/Group 17.png'
import sponser_img18 from '../../images/sponser_images/Group 18.png'
import sponser_img19 from '../../images/sponser_images/Group 19.png'
import sponser_img23 from '../../images/sponser_images/Group 23.png'
import sponser_img24 from '../../images/sponser_images/Group 24.png'
import sponser_img25 from '../../images/sponser_images/Group 25.png'
import sponser_img26 from '../../images/sponser_images/Group 26.png'
import sponser_img27 from '../../images/sponser_images/Group 27.png'
import sponser_img28 from '../../images/sponser_images/Group 28.png'
import sponser_img29 from '../../images/sponser_images/Group 29.png'




const Sponsor = () => {
  
    return(
        <>
<div className="container sponsors">
<div className="Sponsors_heading ">
    <h1>Sponsors</h1>
</div>
<div className="Sponsors__container ">
    <div className="owl-carousel owl-theme " >
        <div className="Gallery_item ">
            <a href="# ">
                <img src={sponser_img3} alt=" " />
            </a>
        </div>
        <div className="Gallery_item ">
            <a href="# ">
                <img src={sponser_img4} alt=" " srcset=" "/>
            </a>
        </div>
        <div className="Gallery_item ">
            <a href="# ">
                <img src={sponser_img11} alt=" " srcset=" "/>
            </a>
        </div>
        <div className="Gallery_item ">
            <a href="# ">
                <img src={sponser_img12} alt=" " srcset=" "/>
            </a>
        </div>
        <div className="Gallery_item ">
            <a href="# ">
                <img src={sponser_img13} alt=" " srcset=" "/>
            </a>
        </div>
        <div className="Gallery_item ">
            <a href="# ">
                <img src={sponser_img17} alt=" " srcset=" "/>
            </a>
        </div>
        <div className="Gallery_item ">
            <a href="# ">
                <img src={sponser_img18} alt=" " srcset=" "/>
            </a>
        </div>
        <div className="Gallery_item ">
            <a href="# ">
                <img src={sponser_img19} alt=" " srcset=" "/>
            </a>
        </div>
        <div className="Gallery_item ">
            <a href="# ">
                <img src={sponser_img23} alt=" " srcset=" "/>
            </a>
        </div>
        <div className="Gallery_item ">
            <a href="# ">
                <img src={sponser_img24} alt=" " srcset=" "/>
            </a>
        </div>
        <div className="Gallery_item ">
            <a href="# ">
                <img src={sponser_img25} alt=" " srcset=" "/>
            </a>
        </div>
        <div className="Gallery_item ">
            <a href="# ">
                <img src={sponser_img26} alt=" " srcset=" "/>
            </a>
        </div>
        <div className="Gallery_item ">
            <a href="# ">
                <img src={sponser_img27} alt=" " srcset=" "/>
            </a>
        </div>
        <div className="Gallery_item ">
            <a href="# ">
                <img src={sponser_img28} alt=" " srcset=" "/>
            </a>
        </div>
        <div className="Gallery_item ">
            <a href="# ">
                <img src={sponser_img29} alt=" " srcset=" "/>
            </a>
        </div>

    </div>
</div>

</div>
</>
    );
};
export default Sponsor;