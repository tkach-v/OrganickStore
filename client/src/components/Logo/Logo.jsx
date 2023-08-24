import React from 'react';
import logoImage from "../../assets/img/common/logo.svg"

function Logo(props) {
  return (
    <div style={{zIndex: props.zIndex}}>
      <a href="/">
        <img src={logoImage} alt="Logo"/>
      </a>
    </div>
  );
}

export default Logo;