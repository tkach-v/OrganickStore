import React from 'react';
import styled from "styled-components";

export const StyledCartOrdersList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  @media (max-width: ${props => props.theme.breakpoints.medium}) {
    flex-direction: column;
    align-items: start;
  }
`

export const CartSummaries = styled.div`
  font-size: 2.22222rem;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  text-align: right;
  gap: 1.5rem;
  @media (max-width: 1200px) {
    font-size: 1.7rem;
  }
  @media (max-width: 550px) {
    font-size: 1.4rem;
  }
`

function CartOrdersList(props) {
  const total = 26;
  const discount = 14;
  return (
    <div>
      <StyledCartOrdersList>

      </StyledCartOrdersList>
      <CartSummaries>
        <div>Total Cost {total}$</div>
        <div>Discount {discount}$</div>
      </CartSummaries>
    </div>
  );
}

export default CartOrdersList;