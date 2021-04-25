import React from 'react';
import star from '../../images/star.png';
import '../../styles/Media.css';

export function createStars(stars) {
    if (stars === 3) {
        return (
            <div className="stars">
                <img className="star-icon" src={star} alt="star" />
                <img className="star-icon" src={star} alt="star" />
                <img className="star-icon" src={star} alt="star" />
            </div>)
    }
    else if (stars === 2) {
        return (
            <div className="stars">
                <img className="star-icon" src={star} alt="star" />
                <img className="star-icon" src={star} alt="star" />
            </div>)
    }
    else {
        return (
            <div className="stars">
                <img className="star-icon" src={star} alt="star" />
            </div>)
    }
}