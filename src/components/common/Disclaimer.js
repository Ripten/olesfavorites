import React from 'react';
import '../../styles/Media.css';
import star from '../../images/star.png'


const Disclaimer = () => (
    <div className="disclaimer-container">
      <p className="disclaimer">
        <img className="star-disclaimer" src={star} alt="star"/> = &nbsp;Holds a special place in my heart
      </p>
    </div>
);

export default Disclaimer;