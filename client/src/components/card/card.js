import React from 'react';
import "./card.css";
import axios from './axios';





const card = (props) => (
    <div className='cards'>
        {props.cards.map(result =>
            <div class='card'>
            Card data with project info.
            </div>
        )}

    </div>
)
export default bodyContainer;
