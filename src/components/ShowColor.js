import React from 'react';

const ShowColor = ({color}) => {
  return (
    <div>
      {color.length === 0 ? <p className="show-color-message">Please type a color to get started!</p> : 
        <div>
          <h3 className="show-color-title">Selected color</h3>
          <div style={{background: color[0]}} className="show-color"></div>
          <p className="show-color-message">Hex: {color[0].toLowerCase()}</p>
          <p className="show-color-message">Rgb: {color[1]}</p>
          <p className="show-color-message">Hsl: {color[2]}</p>
        </div>}
    </div>
  );
};

export default ShowColor;