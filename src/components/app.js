import React, { Component } from 'react';
import Alignment from "./alignment"
import Toggle from "./toggle"
import Counter from "./counter"
import TextResizer from "./textResizer"
import Color from "./color"
import Clock from "./clock"

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <Alignment />
        <hr/>
        <Toggle />
        <hr/>
        <Counter />
        <hr/>
        <TextResizer />
        <hr/>
        <Color />
        <hr/>
        <Clock />
      </div>
    );
  }
}
