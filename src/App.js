import React, {Component} from 'react';
import WildPokemon from './Components/WildPokemon';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
        wildPokemon: {}
    }
}

componentDidMount(){
    this.findPokemon()
}

findPokemon = () => {
    const randNum = Math.ceil(Math.random() * 151);
    axios.get(`https://pokeapi.co/api/v2/pokemon/${randNum}`)
    .then(res => {this.setState({wildPokemon: res.data})})
    .catch(err => console.log(err));
}

  render(){
    return (
      <div className="App">
        <WildPokemon pokemon={this.state.wildPokemon}/>
      </div>
    );
  }
}

export default App;
