import React, {Component} from 'react';

class WildPokemon extends Component {
    render(){
        const {pokemon} = this.props;
        return(
            <div>
                {pokemon.sprites ? (<img src={pokemon.sprites.front_default} alt={pokemon.name}/>) : (null)}
            </div>
        )
    }
}

export default WildPokemon;