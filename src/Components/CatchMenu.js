import React, {Component} from 'react';
import axios from 'axios';

class CatchMenu extends Component {
    constructor(props){
        super(props);
        this.state = {
            legendary: ['Articuno', 'Moltres', 'Zapdos', 'Mew', 'Mewtwo']
        }
    }

    catchPokemon = () => {
        const {legendary} = this.state;
        const {pokemon} = this.props;
        let catchScore = 0;

        if(legendary.includes(pokemon.name)){
            catchScore = 100;
        } else if(pokemon.base_experience > 200 && pokemon.base_experience <= 300) {
            catchScore = 80;
        } else if(pokemon.base_experience > 150 && pokemon.base_experience <= 200){
            catchScore = 60;
        } else if(pokemon.base_experience > 100 && pokemon.base_experience <= 150){
            catchScore = 40;
        } else if(pokemon.base_experience <= 100){
            catchScore = 20
        }

        this.catchCallback(catchScore)
    }

    catchCallback = (catchScore) => {
        const {pokemon, shinyNum, pokedexFn} = this.props;
        let catchNum = Math.ceil(Math.random() * 100);
        if(catchNum >= catchScore){
            const body = {
                name: pokemon.name,
                image: shinyNum > 97 ? pokemon.sprites.front_shiny : pokemon.sprites.front_default
            }
            axios.post('/api/pokemon', body).then(res => {
                pokedexFn()
            })
            .catch(err => console.log(err))
       } else {
           alert('So close!')
       }
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