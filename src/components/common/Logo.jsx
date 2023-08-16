import React from 'react';

function Logo(props) {
  return (
    <div style={{'z-index': props.zIndex}}>
      <a href="/">
        <img src="./img/common/logo.svg" alt="Logo"/>
      </a>
    </div>
);
}

export default Logo;