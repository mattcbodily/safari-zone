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
        pokedex: []
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
    return (
      <div className="App">
        <TrainerMenu />
        <WildPokemon pokemon={this.state.wildPokemon} shinyNum={this.state.shinyNum}/>
        <CatchMenu findFn={this.findPokemon}/>
      </div>
    );
  }
}

export default App;
