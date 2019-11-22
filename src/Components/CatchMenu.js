import React, {Component} from 'react';
import axios from 'axios';

class CatchMenu extends Component {
    constructor(props){
        super(props);
        this.state = {
            legendary: ['Articuno', 'Moltres', 'Zapdos', 'Mew', 'Mewtwo'],
            catchScore: 0
        }
    }

    componentDidUpdate(){
        const {legendary, catchScore} = this.state;
        const {pokemon} = this.props;
        if(catchScore === 0)
            if(legendary.includes(pokemon.name)){
                this.setState({catchScore: 100})
            } else if(pokemon.base_experience > 200 && pokemon.base_experience <= 300) {
                this.setState({catchScore: 80})
            } else if(pokemon.base_experience > 150 && pokemon.base_experience <= 200){
                this.setState({catchScore: 60})
            } else if(pokemon.base_experience > 100 && pokemon.base_experience <= 150){
                this.setState({catchScore: 40})
            } else if(pokemon.base_experience <= 100){
                this.setState({catchScore: 20})
            }
    }

    throwBait = () => {

    }

    catchPokemon = () => {
        const {catchScore} = this.state;
        const {pokemon, shinyNum, pokedexFn, findFn} = this.props;
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
            findFn();
       } else {
           let fleeNum = Math.ceil(Math.random() * 10)
           if(fleeNum <= 4){
               alert(`${pokemon.name} fled`)
               findFn()
           } else {
               alert(`So Close`)
           }
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