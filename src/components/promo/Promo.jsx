import React from 'react';
import styled from "styled-components";
import {Button, ButtonArrow, Container, CorrectedImage, Subtitle, Title} from "../../styles/common";

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
  width: 100%;
  @media (max-width: ${props => props.theme.breakpoints.medium}) {
    padding: 3rem 0;
    text-align: center;
    max-width: none;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

const PromoImgContainer = styled.div`
  @media (max-width: ${props => props.theme.breakpoints.medium}) {
    display: none;
  }
`

function Promo() {
  return (
    <StyledPromo>
      <PromoInner>
        <PromoContent>
          <Subtitle>100% Natural Food</Subtitle>
          <Title>Choose the best healthier way of life</Title>
          <Button $marginTop="1.28rem">
            <div>Explore Now</div>
            <ButtonArrow>
              <img src="./img/common/arrow.svg" alt=""/>
            </ButtonArrow>
          </Button>
        </PromoContent>
        <PromoImgContainer>
          <CorrectedImage src="./img/promo/image.png" alt="Promo image"/>
        </PromoImgContainer>
      </PromoInner>
    </StyledPromo>
  );
}

export default Promo;