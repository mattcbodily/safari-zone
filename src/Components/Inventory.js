import React, {Component} from 'react';

class Inventory extends Component {
    render(){
        console.log(this.props)
        return(
            <div className='inventory'>
                {this.props.inventory.map((element, i) => (
                    <div key={i} className='inventory-item'>
                        <img src={element.image} alt={element.name}/>
                        <span>{element.name} x {element.qty}</span>
                    </div>
                ))}
            </div>
        )
    }
}

export default Inventory;