import React from 'react';
import styled from "styled-components";
import {Container, Subtitle, Title} from "../../styles/common";
import ProductCard from "../common/ProductCard";

const StyledOffer = styled.div`
  background: #274C5B;
  padding: 10rem 0;
`

const OfferList = styled.div`
  margin-top: 2.5rem;
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`

function Offer() {
  return (
    <StyledOffer>
      <Container>
        <Subtitle>Offer</Subtitle>
        <Title $color="#FFFFFF">We Offer Organic For You</Title>
        <OfferList>
          <ProductCard
            category="Fresh"
            name="Fresh Banana Fruites"
            imageUrl="./img/shop/fresh-banana-fruites.png"
            price="14.00"
            priceBefore="20.00" />
          <ProductCard
            category="Health"
            name="Brown Hazelnut"
            imageUrl="./img/shop/mung-bean-1.png"
            price="140.00"
            priceBefore="20.00" />
          <ProductCard
            category="Health"
            name="Mung Bean"
            imageUrl="./img/shop/brown-hazelnut.png"
            price="14.00"
            priceBefore="20.00" />
          <ProductCard
            category="Fresh"
            name="Fresh Banana Fruites"
            imageUrl="./img/shop/fresh-banana-fruites.png"
            price="14.00"
            priceBefore="20.00" />
        </OfferList>
      </Container>
    </StyledOffer>
  );
}

export default Offer;