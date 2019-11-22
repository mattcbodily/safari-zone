import React, {Component} from 'react';
import WildPokemon from './Components/WildPokemon';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
        wildPokemon: {},
        shinyNum: 0
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

    const shinyNum = Math.ceil(Math.random() * 100);
    this.setState({shinyNum})
}

  render(){
    console.log(this.state.wildPokemon)
    return (
      <div className="App">
        <WildPokemon pokemon={this.state.wildPokemon} shinyNum={this.state.shinyNum}/>
      </div>
    );
  }
}

export default App;
