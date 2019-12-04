import React, {Component} from 'react';
import Pokedex from './Pokedex';
import Inventory from './Inventory';
import PokeShop from './PokeShop';
import pokedex from '../assets/pokedex-icon.png';
import pokeball from '../assets/pokeball-icon-17.png';
import pokeshop from '../assets/pokeshop.png';

class TrainerMenu extends Component {
    constructor(){
        super();
        this.state = {
            togglePokedex: false,
            toggleInventory: false,
            togglePokeShop: false,
        }
    }

    componentDidMount = () => {
        this.props.inventoryFn()
    }

    togglePokedexView = () => {
        this.setState(prevState => ({togglePokedex: !prevState.togglePokedex}))
    }

    toggleInventoryView = () => {
        this.setState(prevState => ({toggleInventory: !prevState.toggleInventory}))
    }

    togglePokeShopView = () => {
        this.setState(prevState => ({togglePokeShop: !prevState.togglePokeShop}))
    }

    render(){
        const {togglePokedex, toggleInventory, togglePokeShop} = this.state;
        return (
            <div className='trainer-menu'>
                <img src={pokedex} alt='pokedex' className='menu-icon' onClick={this.togglePokedexView}/>
                <img src={pokeball} alt='pokeball' className='menu-icon' onClick={this.toggleInventoryView}/>
                <img src={pokeshop} alt='pokeshop' className='menu-icon' onClick={this.togglePokeShopView}/>
                {togglePokedex ? <Pokedex pokedex={this.props.pokedex}/> : null}
                {toggleInventory ? <Inventory inventory={this.props.inventory} baitFn={this.props.baitFn} catchFn={this.props.catchFn} rewardFn={this.props.rewardFn}/> : null}
                {togglePokeShop ? <PokeShop inventory={this.props.inventory} /> : null}
            </div>
        )
    }
}

export default TrainerMenu;