import React from 'react';
import styled from "styled-components";
import {Container, Subtitle, Title} from "../../styles/common";

const StyledOffer = styled.div`
  background: #274C5B;
  padding: 10rem 0;
`

const OfferList = styled.div`
  margin-top: 2.5rem;
  display: flex;
`

function Offer() {
  return (
    <StyledOffer>
      <Container>
        <Subtitle>Offer</Subtitle>
        <Title $color="#FFFFFF">We Offer Organic For You</Title>
        <OfferList>

        </OfferList>
      </Container>
    </StyledOffer>
  );
}

export default Offer;