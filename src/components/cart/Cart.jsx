import React from 'react';
import styled from "styled-components";
import {Title} from "../../styles/common";

const CartTitle = styled(Title)`
  text-align: center;
  background-image: url("../../img/cart/title-background.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  padding: 10rem 0;
  margin-bottom: 6rem;
  @media (max-width: ${props => props.theme.breakpoints.medium}) {
    padding: 3rem 0;
    margin-bottom: 2rem;
  }
`

const CartContent = styled.div`
  background: rgba(253, 176, 45, 0.16);;
  padding: 10rem 0;
  margin-bottom: 7rem;
  @media (max-width: ${props => props.theme.breakpoints.medium}) {
    padding: 3rem 0;
    margin-bottom: 2rem;
  }
`


function Cart() {
  return (
    <div>
      <CartTitle>Cart</CartTitle>
      <CartContent>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci asperiores autem blanditiis commodi consectetur consequuntur culpa delectus distinctio dolore doloremque, error iste molestias mollitia nemo nesciunt optio possimus veritatis!</CartContent>
    </div>
  );
}

export default Cart;