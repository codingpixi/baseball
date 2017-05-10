import React, { Component } from 'react';
import { BindActionCreators } from 'redux';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    {console.log(this.props.state)}

    const state = this.props.state;
    const count = state.count;
    return (
      <div className="App">
        <p>Balls: {count.balls}</p>
        <p>You're Out Almost: {count.strikes}</p>
        <button onClick={this.props.miss}>You Missed</button>
        <button onClick={this.props.hit}>Hit</button>
        <button onClick={this.props.ball}>Ball</button>
        <button onClick={this.props.strike}>Strike</button>
      </div>
    );
  }
}


export default App;
