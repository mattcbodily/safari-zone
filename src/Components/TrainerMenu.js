import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getInventory} from '../redux/inventoryReducer';
import Pokedex from './Pokedex';
import Inventory from './Inventory';
import pokedex from '../assets/pokedex-icon.png';
import pokeball from '../assets/pokeball-icon-17.png';

class TrainerMenu extends Component {
    constructor(){
        super();
        this.state = {
            togglePokedex: false,
            toggleInventory: false
        }
    }

    componentDidMount = () => {
        this.props.getInventory()
    }

    togglePokedexView = () => {
        this.setState(prevState => ({togglePokedex: !prevState.togglePokedex}))
    }

    toggleInventoryView = () => {
        this.setState(prevState => ({toggleInventory: !prevState.toggleInventory}))
    }

    render(){
        const {togglePokedex, toggleInventory} = this.state;
        return (
            <div className='trainer-menu'>
                <img src={pokedex} alt='pokedex' className='menu-icon' onClick={this.togglePokedexView}/>
                <img src={pokeball} alt='pokeball' className='menu-icon' onClick={this.toggleInventoryView}/>
                {togglePokedex ? <Pokedex pokedex={this.props.pokedex}/> : null}
                {toggleInventory ? <Inventory inventory={this.props.inventory}/> : null}
            </div>
        )
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

export default connect(mapStateToProps, {getInventory})(TrainerMenu);