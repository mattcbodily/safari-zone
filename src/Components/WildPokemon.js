import React, {Component} from 'react';

class WildPokemon extends Component {
    render(){
        const {pokemon, shinyNum} = this.props;
        return(
            <div className='wild-pokemon'>
                {pokemon.sprites ? <img src={shinyNum > 97 ? pokemon.sprites.front_shiny : pokemon.sprites.front_default} alt={pokemon.name} className='wild-pokemon-image'/> : null}
            </div>
        )
    }
}

export default WildPokemon;