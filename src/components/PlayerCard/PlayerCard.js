import React from 'react';
import './PlayerCard.css';

function PlayerCard(props) {
    return (
        <div className="card">
            <div className="img-container">
                <img alt={props.name} src={props.image} />
            </div>
            <div className="content">
                    <div>
                        <strong>Name:</strong> {props.name}
                    </div>
                    <div>
                        <strong>Bio: </strong> {props.bio}
                    </div>
            </div>
        </div>
    );
}
                
export default PlayerCard;