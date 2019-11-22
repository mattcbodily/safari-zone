import React, {Component} from 'react';
import Pokedex from './Pokedex';
import pokedex from '../assets/pokedex-icon.png';
import pokeball from '../assets/pokeball-icon-17.png';

class TrainerMenu extends Component {
    constructor(){
        super();
        this.state = {
            togglePokedex: false
        }
    }

    togglePokedexView = () => {
        this.setState(prevState => ({togglePokedex: !prevState.togglePokedex}))
    }

    render(){
        const {togglePokedex} = this.state;
        return (
            <div className='trainer-menu'>
                <img src={pokedex} alt='pokedex' className='menu-icon' onClick={this.togglePokedexView}/>
                <img src={pokeball} alt='pokeball' className='menu-icon'/>
                {togglePokedex ? <Pokedex pokedex={this.props.pokedex}/> : null}
            </div>
        )
    }
}

export default TrainerMenu;