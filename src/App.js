import React, {Component} from 'react';
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
        inventory: []
    }
}

componentDidMount(){
  this.getInventory()
  this.getPokedex()
  this.findPokemon()
}

getInventory = () => {
  axios.get('/api/inventory').then(res => {
    this.setState({
      inventory: res.data
    })
  })
  .catch(err => console.log(err))
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
        <WildPokemon 
          pokemon={wildPokemon} 
          shinyNum={shinyNum}/>
        <CatchMenu 
          pokemon={wildPokemon} 
          shinyNum={shinyNum} 
          inventory={inventory}
          pokedex={pokedex}
          findFn={this.findPokemon} 
          pokedexFn={this.getPokedex}
          inventoryFn={this.getInventory}/>
      </div>
    );
  }
}

export default App;