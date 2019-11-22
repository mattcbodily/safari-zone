import React from 'react';
import pokedex from '../assets/pokedex-icon.png';
import pokeball from '../assets/pokeball-icon-17.png';

const TrainerMenu = () => (
    <div className='trainer-menu'>
        <img src={pokedex} alt='pokedex' className='menu-icon'/>
        <img src={pokeball} alt='pokeball' className='menu-icon'/>
    </div>
)

export default TrainerMenu;