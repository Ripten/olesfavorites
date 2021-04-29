import React from 'react';
import star from '../../images/star.png';
import '../../styles/Media.css';


export function getTitle(element) {
    if (element.star === true) {
        return (
            <td className="title-td">
                <div className="stars">
                    {element.title} <img className="star-icon" src={star} alt="star" />
                </div>
            </td>
        )
    }
    else {
        return ( <td className="title-td">{element.title}</td> )
    }
}