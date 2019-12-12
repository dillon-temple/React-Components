import React from 'react';
import './square.css';



const Square = (props) => {

  const divStyle = {
    backgroundColor: props.blockColor,
    color: props.textColor,
  };

  return (
    <div className="Square" style={divStyle}>
    {props.message}
    </div>
  );
}

export default Square;
