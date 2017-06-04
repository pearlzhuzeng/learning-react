import React from 'react';

function FancyBorderParent(props) {
  return (
    <div className={'FancyBorder FancyBorder-' + props.color}>
      {props.children}
    </div>
  );
}

function FancyBorder() {
  return (
    <FancyBorderParent color="blue">
      <h2 className="Border-title">
        Welcome!
      </h2>
      <p className="Border-message">
        Thank you for visiting this site!
      </p>
    </FancyBorderParent>
  );
}

export default FancyBorder;
