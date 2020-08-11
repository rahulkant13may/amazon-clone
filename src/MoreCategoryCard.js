import React from 'react';
import "./MoreCategoryCard.css";
import { Link } from '@material-ui/core';
import { useStateValue } from './context/StateContext';


function MoreCategoryCard({heading, image, anchorTitle}) {
    return (
        <div className="moreCategoryCard">
            <h2>{heading}</h2>
            <img src={image}/>
            <a href="#">{anchorTitle}</a>
        </div>
    )
}

export default MoreCategoryCard
