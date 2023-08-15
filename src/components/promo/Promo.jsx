import React from 'react';
import styled from "styled-components";
import {Button, Container, Subtitle, Title} from "../../styles/common";

const StyledPromo = styled.div`
  background-color: #F1EFF0;
  background-image: url("../../img/promo/background.svg");
  background-repeat: no-repeat;
  background-size: cover;
`

const PromoInner = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
`

const PromoContent = styled.div`
  max-width: 530px;
`

function Promo() {
  return (
    <StyledPromo>
      <PromoInner>
        <PromoContent>
          <Subtitle>100% Natural Food</Subtitle>
          <Title>Choose the best healthier way of life</Title>
          <Button>Explore Now</Button>
        </PromoContent>
        <div>
          {/*<img src="./img/promo/image.png" alt="Promo image"/>*/}
        </div>
      </PromoInner>
    </StyledPromo>
  );
}

export default Promo;