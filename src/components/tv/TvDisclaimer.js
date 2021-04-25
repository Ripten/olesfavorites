import React from 'react';
import '../../styles/Media.css';
import star from '../../images/star.png'

const TvDisclaimer = () => (
    <div className="disclaimer-container">
      <p className="disclaimer">
        <img className="star-disclaimer" src={star} alt="star"/>
        <img className="star-disclaimer" src={star} alt="star"/>
        <img className="star-disclaimer" src={star} alt="star"/> = &nbsp;All-time favorites
      </p>
      <p className="disclaimer">
        <img className="star-disclaimer-left-margin" src={star} alt="star"/>
        <img className="star-disclaimer-right-margin" src={star} alt="star"/>
        = &nbsp;TV series that I love
      </p>
      <p className="disclaimer">
        <img className="star-disclaimer-both-margin" src={star} alt="star"/> = &nbsp;TV series that I like a lot
      </p>
    </div>
  );
 
export default TvDisclaimer  