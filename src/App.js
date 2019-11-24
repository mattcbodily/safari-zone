import React, {Component} from 'react';
import TrainerMenu from './Components/TrainerMenu';
import WildPokemon from './Components/WildPokemon';
import CatchMenu from './Components/CatchMenu';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
        wildPokemon: {},
        shinyNum: 0,
        pokedex: [],
        inventory: [{name: 'Great Ball', image: 'http://pixelartmaker.com/art/a56a64f1b2b6379.png', qty: 10}]
    }
}

componentDidMount(){
  this.getPokedex()
  this.findPokemon()
}

getPokedex = () => {
  axios.get('/api/pokedex').then(res => {
    this.setState({pokedex: res.data})
  })
  .catch(err => console.log(err))
}

findPokemon = () => {
    const randNum = Math.ceil(Math.random() * 151);
    axios.get(`https://pokeapi.co/api/v2/pokemon/${randNum}`)
    .then(res => {this.setState({wildPokemon: res.data})})
    .catch(err => console.log(err));

    const shinyNum = Math.ceil(Math.random() * 100);
    this.setState({shinyNum})
}

  render(){
    const {wildPokemon, shinyNum, pokedex, inventory} = this.state;
    return (
      <div className="App">
        <TrainerMenu 
          pokedex={pokedex}
          inventory={inventory}/>
        <WildPokemon 
          pokemon={wildPokemon} 
          shinyNum={shinyNum}/>
        <CatchMenu 
          pokemon={wildPokemon} 
          shinyNum={shinyNum} 
          findFn={this.findPokemon} 
          pokedexFn={this.getPokedex}/>
      </div>
    );
  }
}

export default App;