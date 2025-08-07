import React from 'react';
import './Animation.scss';
import moth from '../../assets/moth_fly.png';

const Animation = () => {
  return (
    <div className="moth-container">
      <img src={moth} alt="flying moth" className="moth" />
    </div>
  );
};

export default Animation;
