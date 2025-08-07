import React from 'react';
import './Bees.scss';
import bees from '../../assets/bees.png';

const Bees = () => {
  return (
    <div className="bees-container">
      <img src={bees} alt="flying bees" className="bees" />
    </div>
  );
};

export default Bees;
