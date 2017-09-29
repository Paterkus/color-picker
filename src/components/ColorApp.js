import React, { Component } from 'react';
import convert from 'color-convert';
import Header from './Header';
import EnterColor from './EnterColor';
import ShowColor from './ShowColor';

class ColorApp extends Component {
  state = {
    color: []
  };
  handleEnterColor = (color) => {
    const reghex = /^#?([A-Fa-f\d]{3}|[A-Fa-f\d]{6})$/;
    const regrgb = /^rgb\((0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d),(0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d),(0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d)\)$/;
    const reghsl = /^hsl\((0|360|35\d|3[0-4]\d|[12]\d\d|0?\d?\d),(0|100|\d{1,2})%,(0|100|\d{1,2})%\)$/;
    if (reghex.test(color)) {
      const rgbValue = convert.hex.rgb(color);
      const hexValue = convert.rgb.hex(rgbValue);
			const hexString = `#${hexValue}`;
      const rgbString = `rgb(${rgbValue.join(', ')})`;
      const hslValue = convert.rgb.hsl(rgbValue);
      const [num1, num2, num3] = hslValue;
      const hslString = `hsl(${num1}, ${num2}%, ${num3}%)`;
      this.setState(() => ({color: [hexString, rgbString, hslString]}));
    } else if (regrgb.test(color)) {
      const slicedCol = color.slice(4, -1);
			const arrValue = JSON.parse("[" + slicedCol + "]");
			const rgbString = `rgb(${arrValue.join(', ')})`;
			const hexValue = convert.rgb.hex(arrValue);
			const hexString = `#${hexValue}`;
			const hslValue = convert.rgb.hsl(arrValue);
			const [num1, num2, num3] = hslValue;
      const hslString = `hsl(${num1}, ${num2}%, ${num3}%)`;
      this.setState(() => ({color: [hexString, rgbString, hslString]}));
    } else if (reghsl.test(color)) {
      const slicedCol = color.slice(4, -1);
			const replacedCol = slicedCol.replace(/%/g, '');
			const arrValue = JSON.parse("[" + replacedCol + "]");
			const [num1, num2, num3] = arrValue;
			const hslString = `hsl(${num1}, ${num2}%, ${num3}%)`;
			const rgbValue = convert.hsl.rgb(arrValue);
			const rgbString = `rgb(${rgbValue.join(', ')})`;
			const hexValue = convert.hsl.hex(arrValue);
      const hexString = `#${hexValue}`;
      this.setState(() => ({color: [hexString, rgbString, hslString]}));
    } else {
      return 'Invalid color format';
    }
  };
  render() {
    const description = 'Type a color in hex, rgb or hsl format to see it on the screen';

    return (
      <div>
        <Header description={description} />
        <div className="container">
          <div className="show-app">
            <EnterColor handleEnterColor={this.handleEnterColor} />
            <ShowColor color={this.state.color} />
          </div>
        </div>  
      </div>
    );
  }
}

export default ColorApp;