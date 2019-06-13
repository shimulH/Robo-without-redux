import React from 'react';
import './Card.css'

const Card = (props) => {
    const { name, id, email } = props;
    return (
        <div className="card dib br3 pa3 ma2 grow bw2 shadow-5">
            <img alt="" src={`https://robohash.org/${id}?200x200`}/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>            
        </div>
    );
};

export default Card;