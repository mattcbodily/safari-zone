import React from 'react';

const Pokedex = (props) => (
    <div className='pokedex'>
        {props.pokedex.map((element, i) => (
            <div key={i} className='caught-pokemon'>
                <img src={element.image} alt={element.name}/>
                <p>{element.name}</p>
            </div>
        ))}
    </div>
)

export default Pokedex;