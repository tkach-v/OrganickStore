import React, {useState} from 'react';
import {CartContent, CartContentInner, CartOrdersList, CartSummaries, CartTitle} from "./styles";
import {CustomArrowButton} from "../../components/CustomButtonLink/CustomButtonLink";

function Cart(props) {
  const [visibleForm, setVisibleForm] = useState(false);
  const total = 26;
  const discount = 14;

  return (
    <div>
      <CartTitle>Cart</CartTitle>
      <CartContent>
        <CartContentInner>
          <CartOrdersList>

          </CartOrdersList>
          <CartSummaries>
            <div>Total Cost {total}$</div>
            <div>Discount {discount}$</div>
          </CartSummaries>
          {visibleForm ? null : (
            <CustomArrowButton type="Button"
                               $paddingX="3.2rem"
                               $marginTop="4rem"
                               $color="#FFFFFF"
                               $backgroundColor={props => props.theme.colors.title}
                               onClick={(e) => setVisibleForm(true)}
            >To order</CustomArrowButton>
          )}
          {/*<CartForm visible={visibleForm}/>*/}
        </CartContentInner>
      </CartContent>
    </div>
  );
}

export default Cart;