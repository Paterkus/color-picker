import React from 'react';

const Header = (props) => (
  <div className="header">
    <div className="container">
      <h1 className="header-title">{props.title}</h1>
      {props.description && <h2 className="header-description">{props.description}</h2>}
    </div>
  </div>
);

Header.defaultProps = {
  title: 'Color picker'
};

export default Header;