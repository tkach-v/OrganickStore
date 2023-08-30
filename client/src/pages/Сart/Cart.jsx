import React, {useState} from 'react';
import CartOrdersList from "../../features/cart/CartOrdersList/CartOrdersList";
import CartForm from "../../features/cart/CartForm/CartForm";
import {CustomArrowButton} from "../../components/CustomButtonLink/CustomButtonLink";
import styled from "styled-components";
import {Title, Container} from "../../assets/styles/common";
import titleBackground from "../../assets/img/cart/title-background.jpg"
import {useSelector} from "react-redux";

const CartTitle = styled(Title)`
  text-align: center;
  background-image: url("${titleBackground}");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  padding: 9rem ${props => props.theme.container.paddingX};
  margin-bottom: 5rem;
  @media (max-width: ${props => props.theme.breakpoints.medium}) {
    padding: 3rem ${props => props.theme.container.paddingX};
    margin-bottom: 2rem;
  }
`

const CartContent = styled.div`
  text-align: center;
  background: rgba(253, 176, 45, 0.16);;
  padding: 8rem 0 3rem 0;
  @media (max-width: ${props => props.theme.breakpoints.medium}) {
    padding: 3rem 0 2rem 0;
  }
  color: ${props => props.theme.colors.title};
  font-family: Roboto, sans-serif;
  font-size: 1.77778rem;
  font-weight: 700;
`

const CartContentInner = styled(Container)`
  max-width: 1600px;
`

const CartEmptyTitle = styled(Title)`
  padding-bottom: 5rem;
  @media (max-width: ${props => props.theme.breakpoints.medium}) {
    padding-bottom: 1rem;
  }
`

function Cart(props) {
  const [visibleForm, setVisibleForm] = useState(false);
  const itemsList = useSelector(state => state.cart.items);

  return (
    <>
      <CartTitle>Cart</CartTitle>
      <CartContent>
        <CartContentInner>
          {itemsList.length < 1 ? (
            <CartEmptyTitle>Cart is empty</CartEmptyTitle>
          ) : (
            <>
              <CartOrdersList ordersItems={itemsList}/>
              {visibleForm ? null : (
                <CustomArrowButton
                  type="button"
                  $paddingX="3.2rem"
                  $marginTop="4rem"
                  $color="#FFFFFF"
                  $backgroundColor={props => props.theme.colors.title}
                  onClick={() => {
                    setVisibleForm(true);
                  }}
                >To order</CustomArrowButton>
              )}
              {visibleForm &&
                <CartForm/>
              }
            </>
          )}

        </CartContentInner>
      </CartContent>
    </>
  );
}

export default Cart;