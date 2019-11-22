import React, {Component} from 'react';

class CatchMenu extends Component {
    render(){
        return(
            <div className='catch-menu'>
                <p className='catch-menu-prompt'>Bait</p>
                <p className='catch-menu-prompt'>Pokéball</p>
                <p className='catch-menu-prompt' onClick={this.props.findFn}>Next</p>
            </div>
        )
    }
}

export default CatchMenu;