import React, {Component} from 'react';

class Inventory extends Component {
    render(){
        return(
            <div className='inventory'>
                {this.props.inventory.map((element, i) => (
                    <div key={i} className='inventory-item' onClick={element.category === 'ball' ? () => this.props.catchFn(this.props.rewardFn, element.name) : () => this.props.baitFn(element.name)}>
                        <img src={element.image} alt={element.name}/>
                        <span>{element.name} x {element.qty}</span>
                    </div>
                ))}
            </div>
        )
    }
}

export default Inventory;