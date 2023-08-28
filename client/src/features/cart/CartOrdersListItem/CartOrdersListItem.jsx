import React, {useState} from "react";
import {
  CartOrdersListItemBeforeDiscount,
  CartOrdersListItemImageContainer,
  CartOrdersListItemInfoContainer,
  CartOrdersListItemPriceWrapper,
  CartOrdersListItemQuantityContainer,
  CartOrdersListItemQuantityInput,
  CartOrdersListItemTitleAndPrice,
  StyledCartOrdersListItem
} from "./styles";
import {CorrectedImage} from "../../../assets/styles/common";
import {CustomButton} from "../../../components/CustomButtonLink/CustomButtonLink";

function CartOrdersListItem({name, imageUrl, currentPrice, beforeDiscountPrice, amount}) {
  const [quantity, setQuantity] = useState(amount);
  const handleQuantityChange = (event) => {
    const inputValue = event.target.value;

    if (inputValue === '' || isNaN(inputValue) || parseInt(inputValue) <= 0) {
      setQuantity('');
    } else {
      setQuantity(inputValue);
    }
  };
  return (
    <StyledCartOrdersListItem>
      <CartOrdersListItemInfoContainer>
        <CartOrdersListItemImageContainer>
          <CorrectedImage src={imageUrl} alt={name + 'image'}/>
        </CartOrdersListItemImageContainer>
        <CartOrdersListItemTitleAndPrice>
          <div>{name}</div>
          <CartOrdersListItemPriceWrapper>
            <CartOrdersListItemBeforeDiscount>
              <span>$</span>
              <span
                style={{textDecoration: 'line-through', textDecorationThickness: '4px'}}>{beforeDiscountPrice}</span>
            </CartOrdersListItemBeforeDiscount>
            <div>${currentPrice}</div>
          </CartOrdersListItemPriceWrapper>
        </CartOrdersListItemTitleAndPrice>
      </CartOrdersListItemInfoContainer>
      <CartOrdersListItemQuantityContainer>
        <div>Quantity:</div>
        <CartOrdersListItemQuantityInput
          type="number"
          value={quantity}
          onChange={handleQuantityChange}
        />
        <CustomButton type="button"
                      $color="#FFFFFF"
                      $backgroundColor={props => props.theme.colors.title}
                      $paddingY="1rem"
                      $paddingX="2rem"
                      onClick={() => console.log(`Remove ${name} from cart`)}
        >X</CustomButton>
      </CartOrdersListItemQuantityContainer>
    </StyledCartOrdersListItem>
  );
}

export default CartOrdersListItem;