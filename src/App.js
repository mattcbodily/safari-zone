import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getInventory} from './redux/inventoryReducer';
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
  this.props.getInventory()
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
    const {wildPokemon, shinyNum, pokedex} = this.state;
    const {inventory} = this.props;
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

const mapStateToProps = (reduxState) => {
  const {inventory, loading, errorMessage} = reduxState;
  return {
    inventory,
    loading,
    errorMessage
  }
}

export default connect(mapStateToProps, {getInventory})(App);