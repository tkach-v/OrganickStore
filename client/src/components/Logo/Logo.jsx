import React from 'react';
import logoImage from "../../assets/img/common/logo.svg"
import {Link} from "react-router-dom";

function Logo(props) {
  return (
    <div style={{zIndex: props.zIndex}}>
      <Link to="/">
        <img src={logoImage} alt="Logo"/>
      </Link>
    </div>
  );
}

export default Logo;