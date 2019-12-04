import React from 'react';
import shopItems from '../assets/store.json';

const PokeShop = (props) => {
    let availableBalance = props.inventory.find(element => element.category === 'money')

    return (
        <div className='pokeshop'>
            <p>Balance: {availableBalance.qty}</p>
            {shopItems.map((item, i) => (
                <div key={i} className='inventory-item'>
                    <img src={item.image} alt={item.name}/>
                    <span>{item.name}</span>
                    <span>{item.price}</span>
                </div>
            ))}
        </div>
    )
}

export default PokeShop;