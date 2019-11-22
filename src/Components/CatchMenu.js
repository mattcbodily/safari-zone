import React, {Component} from 'react';
import axios from 'axios';

class CatchMenu extends Component {
    catchPokemon = () => {
        console.log('hit')
        const {pokemon, shinyNum, pokedexFn} = this.props;
        const body = {
            name: pokemon.name,
            image: shinyNum > 97 ? pokemon.sprites.front_shiny : pokemon.sprites.front_default
        }
        axios.post('/api/pokemon', body).then(res => {
            pokedexFn()
        })
        .catch(err => console.log(err))
    }

    render(){
        return(
            <div className='catch-menu'>
                <p className='catch-menu-prompt'>Bait</p>
                <p className='catch-menu-prompt' onClick={this.catchPokemon}>Pokéball</p>
                <p className='catch-menu-prompt' onClick={this.props.findFn}>Next</p>
            </div>
        )
    }
}

export default CatchMenu;