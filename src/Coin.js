import React, { Component } from 'react';
import './Coin.css';

class Coin extends Component {
  render(){
    return(
      <div class="Coin">
          <img src= {`https://tinyurl.com/react-coin-${this.props.face}-jpg`} alt={`${this.props.coinFace}`}/>
      </div>
    )
  }
}

export default Coin;