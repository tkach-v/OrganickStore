import React from 'react';

function Logo(props) {
  return (
    <div style={{zIndex: props.zIndex}}>
      <a href="/">
        <img src="./img/common/logo.svg" alt="Logo"/>
      </a>
    </div>
  );
}

export default Logo;