import React, { useEffect, useState } from 'react';
import './OurTeam.css';
import Card from './card';
import data from '../../data/data.json';
const OutTeam = () => {
  const [coreTeamData, setcoreTeamData] = useState([]);
  const [webTeamData, setWebTeamData] = useState([]);
  const [supTeamData, setSupTeamData] = useState([]);
  const [domain, setDoaim] = useState([]);
  useEffect(() => {
    const cTeamData = data.teamMember.filter(t => t.stauts === 'core');
    setcoreTeamData(cTeamData);
    const wTeamData = data.teamMember.filter(t => t.stauts === 'web');
    setWebTeamData(wTeamData);
    const supTeamData = data.teamMember.filter(t => t.stauts === 'Supervisory');
    setSupTeamData(supTeamData);
    const domains = data.teamMember.filter(t => t.stauts === 'Domain coordinator');
    setDoaim(domains);
  }, []);

  return (


    <>
      <h2 className="mt-5 pt-5" style={{ textAlign: 'center' }}>
        Core Team
      </h2>
      <div class="body1 mt-5">
        <div class="box">
          {coreTeamData &&
            coreTeamData.map(d => <Card team={d} key={d.name} />)}
        </div>
      </div>
      <h2 className="mt-5 pt-5" style={{ textAlign: 'center' }}>
        Web Team
      </h2>
      <div class="body1 mt-5">
        <div class="box">
          {webTeamData && webTeamData.map(d => <Card team={d} key={d.name} />)}
        </div>
      </div>
      <h2 className="mt-5 pt-5" style={{ textAlign: 'center' }}>
        Supervisory Team
      </h2>
      <div class="body1 mt-5">
        <div class="box">
          {supTeamData && supTeamData.map(d => <Card team={d} key={d.name} />)}
        </div>

      </div>
      <h2 className="mt-5 pt-5" style={{ textAlign: 'center' }}>
      Domain coordinator Team
      </h2>
      <div class="body1 mt-5">
        <div class="box">
          {domain && domain.map(d => <Card team={d} key={d.name} />)}
        </div>

      </div>
    </>
  );
};

export default OutTeam;
