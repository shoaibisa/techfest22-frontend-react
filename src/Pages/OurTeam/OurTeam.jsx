import React, { useEffect, useState } from 'react';
 import './OurTeam.css';
  import  SingleCard from './SingleTeamCard';
    import data from '../../data/data.json';
const OurTeam = (props) => {
  const [coreTeamData,setcoreTeamData] = useState([]);
  const [webTeamData,setWebTeamData] = useState([]);
  const [supTeamData,setSupTeamData] = useState([]);
  useEffect(()=>{
    const cTeamData = data.teamMember.filter(t=>t.stauts==="core")
    setcoreTeamData(cTeamData);
    const wTeamData = data.teamMember.filter(t=>t.stauts==="web")
    setWebTeamData(wTeamData);
    const supTeamData = data.teamMember.filter(t=>t.stauts==="Supervisory")
    setSupTeamData(supTeamData);
     
  },[])
    
  return (
   <>
       <section id="team">
        <div className="container-fulid ml-3 pl-3 pr-5 mr-3 text-center">
            <div className="row mt-5 pt-5">
                <div className="col">
                    <h1 style={{color:'white'}}>Core Team</h1>
                </div>
            </div>
            <div  style={{display:'grid', gridTemplateColumns:'repeat(4, 1fr)'}} >
            { coreTeamData  && 
              coreTeamData.map(d=>(
                <SingleCard team={d} key={d.name} />
              )) 
            }
           
            </div>
          
        </div>
    </section>
    <section id="team">
        <div className="container-fulid ml-3 pl-3 pr-5 mr-3 text-center">
            <div className="row mt-5 pt-5">
                <div className="col">
                    <h1 style={{color:'white'}}>Web Team</h1>
                </div>
            </div>
            <div  style={{display:'grid', gridTemplateColumns:'repeat(4, 1fr)'}} >
            {  webTeamData && 
              webTeamData.map(d=>(
                <SingleCard team={d} key={d.name} />
              )) 
            }
           
            </div>
          
        </div>
    </section>
    <section id="team" style={{ marginBottom:'60px' }}>
        <div className="container-fulid ml-3 pl-3 pr-5 mr-3 text-center">
            <div className="row mt-5 pt-5">
                <div className="col">
                    <h1 style={{color:'white'}}>Supervisory Team</h1>
                </div>
            </div>
            <div  style={{display:'grid', gridTemplateColumns:'repeat(4, 1fr)'}} >
            {  supTeamData && 
              supTeamData.map(d=>(
                <SingleCard team={d} key={d.name} />
              )) 
            }
           
            </div>
          
        </div>
    </section>
 
   </>
  )
}

export default OurTeam