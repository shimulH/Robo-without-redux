import React from 'react';
import Card from './Card'

const CardList = ({robots}) => {
    return (
        <div>
            {
                robots.map((robot, i) => {
                    return(
                        <Card 
                            key={i}
                            name={robots[i].name}
                            id = {robots[i].id}
                            email={robots[i].email}
                        />
                    )    
                })
            }
        </div>
    );
};

export default CardList;