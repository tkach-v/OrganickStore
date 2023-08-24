import React from 'react';
import styled from "styled-components";
import {
  CorrectedImage,
  Title,
  ProductCategory,
  ProductPrice,
  ProductBeforeDiscountPrice,
  Prices
} from "../../assets/styles/common";

const StyledProductCard = styled.a`
  cursor: pointer;
  width: calc((100% - 3 * 1rem) / 4);
  border-radius: 1.66667rem;
  background: #F9F8F8;
  padding: 1.6rem 1.6rem 0.95rem;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
  @media (max-width: 1200px) {
    width: calc((100% - 2 * 1rem) / 3);
  }
  @media (max-width: 850px) {
    width: calc((100% - 1rem) / 2);
  }
  @media (max-width: 550px) {
    width: 100%;
  }
`

const ProductInfoContainer = styled.div`
  width: 100%;
  text-align: left;
`

const ProductName = styled(Title)`
  font-size: 1.11111rem;
  font-weight: 600;
  margin-top: 0.1rem;
  margin-bottom: 0.72rem;
`

const ProductStats = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;
  padding-top: 0.33rem;
  border-top: 1px solid #DEDDDD;
`

const ProductPrices = styled.div`
  display: flex;
  gap: 0.4rem;
  align-items: end;
`

const ProductStars = styled.img`
  max-width: 4.6rem;
`

function ProductCard({category, imageUrl, name, price, priceBefore}) {

  return (
    <StyledProductCard onClick={(e) => {
      e.preventDefault();
      console.log(`Show ${name} details`);
    }}>
      <ProductCategory>{category}</ProductCategory>
      <CorrectedImage src={imageUrl} alt={name}/>
      <ProductInfoContainer>
        <ProductName>{name}</ProductName>
        <ProductStats>
          <Prices priceBefore={priceBefore} priceCurrent={price} />
          <ProductStars src="./img/common/stars.svg" alt="5 start"/>
        </ProductStats>
      </ProductInfoContainer>
    </StyledProductCard>
  );
}

export default ProductCard;