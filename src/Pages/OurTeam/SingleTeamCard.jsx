import React from 'react';
import OurTeam from './OurTeam';
import './OurTeam.css';
const SingleTeamCard = props => {
  console.log(props.team);
  return (
    <div className="row mt-3">
      <div className="pt-1">
        <div className="card ">
          <div className="card-body " style={{ height: '400px' }}>
            <img
              className="img-fouild rounded w-40 mb-3"
              style={{ width: '300px', height: '300px', objectFit: 'cover' }}
              src={props.team.imgSrc}
              alt="Sophie"
            />
            <h4 style={{ color: 'black' }}>{props.team.name}</h4>
            {/* <p>{props.team.phone}</p> */}
            <h5 style={{ color: 'black' }}>{props.team.role}</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleTeamCard;
