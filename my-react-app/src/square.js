import React, { Component } from 'react';

export default class Square extends Component {

    constructor(props){
      super(props);
      this.handleClick = this.handleClick.bind(this);
    } 

    render() {
      return (
        <button className="square" onClick={this.handleClick}>
          {this.props.value}
        </button>
      );
    }

    handleClick() {
      this.props.onClick();
    }
  }
  