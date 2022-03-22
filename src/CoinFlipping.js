import React, { Component } from 'react';
import Coin from './Coin';
import './FlipCoin.css'

class CoinFlipping extends Component {
  static defaultProps = {
    face: ['heads', 'tail'],
  };
  constructor(props) {
    super(props);
    this.state = { face: null, flips: 0, heads : 0, tails : 0 };
  }
  roll = () => {
    const coinFace =
    this.props.face[Math.floor(Math.random() * this.props.face.length)];
    this.setState( st => {
      return {
        face: coinFace,
        flips: st.flips + 1,
        heads: st.heads + (coinFace === "heads" ? 1 : 0),
        tails: st.tails + (coinFace === "tail" ? 1 : 0),
      }
    });
  };

  render() {
    return (
      <div class="">
        <h1>Let's flip a coin!</h1>
        <Coin face={this.state.face} />
        <button onClick={this.roll}>Flip Meee!</button>
        <p>Out of {this.state.flips} flips, there have been {this.state.heads} heads and {this.state.tails} tails </p>
      </div>
    );
  }
}

export default CoinFlipping;
