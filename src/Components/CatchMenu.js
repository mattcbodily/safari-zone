import React, {Component} from 'react';
import axios from 'axios';
import pokeball from '../assets/pokeball.png';

class CatchMenu extends Component {
    constructor(props){
        super(props);
        this.state = {
            legendary: ['articuno', 'moltres', 'zapdos', 'mew', 'mewtwo'],
            catchScore: 0
        }
    }

    componentDidUpdate(prevProps){
        const {legendary, catchScore} = this.state;
        const {pokemon} = this.props;
        if(catchScore === 0 || pokemon.name !== prevProps.pokemon.name)
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
        const {catchScore} = this.state;
        const {pokemon, findFn} = this.props;
        let fleeNum = Math.ceil(Math.random() * 10);
        if(fleeNum <= 3){
            alert(`${pokemon.name} fled`)
            findFn();
        } else {
            this.setState({catchScore: catchScore - 5})
        }
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
                this.handleRewards()
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

    handleRewards = () => {
        let rewardNum = Math.ceil(Math.random() * 1000);
        if(rewardNum > 0 && rewardNum < 700){
            axios.get(`/api/reward/${Math.ceil(Math.random() * 3)}`).then(res => {
                console.log(res)
            })
        } else if(rewardNum >= 700 && rewardNum < 900){
            axios.get(`/api/reward/${Math.floor(Math.random() * (8 - 4)) + 4}`).then(res => {
                console.log(res)
            })
        } else if(rewardNum >= 900 && rewardNum < 995){
            axios.get(`/api/reward/${Math.floor(Math.random() * (12 - 9)) + 9}`).then(res => {
                console.log(res)
            })
        } else if(rewardNum >= 995 && rewardNum <= 1000){
            axios.get(`/api/reward/${Math.floor(Math.random() * (14 - 13)) + 13}`).then(res => {
                console.log(res)
            })
        }
    }

    render(){
        return(
            <div className='catch-menu'>
                <p className='catch-menu-prompt' onClick={this.throwBait}>Bait</p>
                <p className='catch-menu-prompt' onClick={this.catchPokemon}>Pokéball</p>
                <p className='catch-menu-prompt' onClick={this.props.findFn}>Next</p>
                <img src={pokeball} alt='pokéball' className='pokeball'/>
            </div>
        )
    }
}

export default CatchMenu;