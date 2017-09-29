import React, { Component } from 'react';

export default class EnterColor extends Component {
  state = {
    error: undefined
  };
  handleFormSubmit = (e) => {
    e.preventDefault();

    const color = e.target.elements.color.value.replace(/\s+/g, '');
    const error = this.props.handleEnterColor(color);
    
    this.setState(() => ({ error }));

    if (!error) {
      e.target.elements.color.value = '';
    }
  };

  render() {
    return (
      <div>
        <form className="enter-color" onSubmit={this.handleFormSubmit}>
          <input className="enter-color-input" type="text" name="color" />
          <button className="button">Check color</button>
        </form>
        {this.state.error && <p className="enter-color-error">{this.state.error}</p>}
      </div>
    );
  }
}