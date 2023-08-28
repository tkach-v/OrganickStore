import styled from "styled-components";
import React from "react";

export const ProductPrices = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  align-items: end;
`

export const ProductPrice = styled.div`
  color: ${props => props.theme.colors.title};
  font-family: "Open Sans", sans-serif;
  font-size: ${props => (props.$fontSize || '1rem')};
  font-weight: 700;
`

export const ProductBeforeDiscountPrice = styled(ProductPrice)`
  display: ${props => (props.$isVisible ? 'block' : 'none')};
  color: #B8B8B8;
  font-size: ${props => (props.$fontSize || '0.83333rem')};
  font-weight: 600;
  text-decoration: line-through;
`

export function Prices({price, discount, $priceCurrentFontSize, $priceBeforeFontSize}) {
  return (
    <ProductPrices>
      <ProductBeforeDiscountPrice $isVisible={discount > 0} $fontSize={$priceBeforeFontSize}>${parseFloat(price).toFixed(2)}</ProductBeforeDiscountPrice>
      <ProductPrice $fontSize={$priceCurrentFontSize}>${(price - price * discount / 100).toFixed(2)}</ProductPrice>
    </ProductPrices>
  );
}