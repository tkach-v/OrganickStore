import React from 'react';
import styled from "styled-components";
import {Container} from "../../styles/common";

const StyledSubscribe = styled(Container)`
  background-image: url("../../img/subscribe.background.jpg");
`

function Subscribe() {
  return (
    <StyledSubscribe>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet debitis facilis ipsam labore magni nemo placeat repellendus sit. Earum fugit iste laboriosam libero nam natus nostrum nulla qui reprehenderit vel!
    </StyledSubscribe>
  );
}

export default Subscribe;