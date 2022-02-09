import React from 'react';
import footfall from '../images/Footfall.svg'
import dollar_svg from '../images/Dollar-Svg.svg' 
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';  
import './Crousel.css';  

        const Crowsel =() =>{  
          return (  
            <div>  
          <div class='container-fluid'>      
           <div className="row title" style={{marginBottom: "20px"}} >      
           <div class="col-sm-12 btn btn-info">  
           </div>      
           </div>  
       </div>  
       <div class='container-fluid' >            
        <OwlCarousel items={3}  
          className="owl-theme" margin={8} autoplay ={true}  
          >  
           <div ><img  className="img" src= {footfall}/></div>  
           <div><img  className="img" src= {footfall}/></div>  
           <div><img  className="img" src= {footfall}/></div>  
           <div><img  className="img" src= {dollar_svg}/></div>  
           <div><img className="img" src= {dollar_svg}/></div>  
           <div><img className="img" src= {dollar_svg}/></div>  
           <div><img className="img" src= {dollar_svg}/></div>  
      </OwlCarousel>  
      </div>  
  
      </div>  
          );  
        }  
    
        
  
export default Crowsel;

