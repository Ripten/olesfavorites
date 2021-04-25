import React from 'react';
import '../styles/App.css';
import star from '../images/star.png'


const FilmDisclaimer = () => (
    <div className="diclaimer-container">
      <p className="diclaimer">
        <img className="star-disclaimer" src={star} alt="star"/>
        <img className="star-disclaimer" src={star} alt="star"/>
        <img className="star-disclaimer" src={star} alt="star"/> = &nbsp;All-time favorites
      </p>
      <p className="diclaimer">
        <img className="star-disclaimer-left-margin" src={star} alt="star"/>
        <img className="star-disclaimer-right-margin" src={star} alt="star"/>
        = &nbsp;Films that I love
      </p>
      <p className="diclaimer">
        <img className="star-disclaimer-both-margin" src={star} alt="star"/> = &nbsp;Films that I like a lot
      </p>
    </div>
);

export default FilmDisclaimer;