import React, {Component} from 'react';
import Pokedex from './Pokedex';
import Inventory from './Inventory';
import pokedex from '../assets/pokedex-icon.png';
import pokeball from '../assets/pokeball-icon-17.png';

class TrainerMenu extends Component {
    constructor(){
        super();
        this.state = {
            togglePokedex: false,
            toggleInventory: false
        }
    }

    togglePokedexView = () => {
        this.setState(prevState => ({togglePokedex: !prevState.togglePokedex}))
    }

    toggleInventoryView = () => {
        this.setState(prevState => ({toggleInventory: !prevState.toggleInventory}))
    }

    render(){
        const {togglePokedex, toggleInventory} = this.state;
        return (
            <div className='trainer-menu'>
                <img src={pokedex} alt='pokedex' className='menu-icon' onClick={this.togglePokedexView}/>
                <img src={pokeball} alt='pokeball' className='menu-icon' onClick={this.toggleInventoryView}/>
                {togglePokedex ? <Pokedex pokedex={this.props.pokedex}/> : null}
                {toggleInventory ? <Inventory /> : null}
            </div>
        )
    }
}

export default TrainerMenu;