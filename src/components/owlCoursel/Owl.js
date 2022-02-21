import React from 'react'
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css'; 
import React,{Component} from 'react';  
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';  
import './owl.css'; 

function Owl() {
  return (
    <div>

<div class='container-fluid' >      
           <div className="row title" style={{marginBottom: "20px"}} >      
           <div class="col-sm-12 btn btn-info">      
           Owl Carousel In React Application   
           </div>      
           </div>  
       </div>  
       <div class='container-fluid' >            
        <OwlCarousel items={3}  
          className="owl-theme"  
          loop  
          nav  
          margin={8} >  
           <div ><img  className="img" src= {'assets/img/Group3.png'}/></div>  
           <div><img  className="img" src= {'assets/img/Group3.png'}/></div>  
           <div><img  className="img" src= {'assets/img/Group3.png'}/></div>  
           <div><img  className="img" src= {'assets/img/Group3.png'}/></div>  
           <div><img className="img" src= {'assets/img/Group3.png'}/></div>  
           <div><img className="img" src= {'assets/img/Group3.png'}/></div>  
           <div><img className="img" src= {'assets/img/Group3.png'}/></div>  
      </OwlCarousel>  
      </div>  
    </div>
  )
}

export default Owl