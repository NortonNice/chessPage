import React from 'react';
import './Alekhine.css';
import alex from '../../assets/alekhine.jpg';

function Alekhine() {
    return (
        <div className='alekhineCard'>
        <img className='alekhinePhoto' src={alex} alt="alexander"/>
        <p>Spicy jalapeno bacon ipsum dolor amet turkey kevin t-bone ham hock nisi eu.
         Commodo veniam jowl consequat, id culpa kielbasa shank. Cow bresaola aute ribeye
          t-bone, flank ut nulla et corned beef ad commodo laboris aliqua porchetta. 
          Buffalo picanha ad, short ribs eiusmod ham incididunt adipisicing jowl cupim.
           Jerky ball tip ex ground round.</p>
        </div>
    )
}

export default Alekhine;