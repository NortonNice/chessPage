import React from 'react';
import './Alekhine.css';
import alex from '../../assets/alekhine.jpg';

function Alekhine() {
    return (
        <div className='alekhineCard'>
        <img className='alekhinePhoto' src={alex} alt="alexander"/>
        <p className="cardText">Born in Moscow in 1892, Alexander Alekhine has long been considered
            to be one of the greatest chess players of all time. He became
            world chess champion in 1927 by defeating the legendary Jose Raul Capablanca.
            Alekhine lost this title in 1935, and then regained it in 1937. Alexander 
            Alekhine passed away in 1946, and remains the only World Chess Champion 
            to die while holding the title.</p>
        </div>
    )
}

export default Alekhine;