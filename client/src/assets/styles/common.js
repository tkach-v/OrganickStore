import styled from "styled-components";
import React, {useState} from "react";

export const Container = styled.div`
  max-width: ${props => props.theme.container.maxWidth};
  padding: 0 ${props => props.theme.container.paddingX};
  margin: 0 auto;
  position: relative;
`;

export const Subtitle = styled.div`
  font-family: Yellowtail, cursive;
  font-size: 2rem;
  font-weight: 400;
  color: ${props => props.$color || '#68A47F'};
  padding-bottom: 0.44rem;
`

export const Title = styled.div`
  color: ${props => (props.$color || props.theme.colors.title)};
  font-family: Roboto, sans-serif;
  font-size: ${props => (props.$fontSize || '3.88889rem')};
  font-weight: 800;

  @media (max-width: ${props => props.theme.breakpoints.medium}) {
    font-size: ${props => (props.$fontSize || '2rem')};
  }
`

export const Text = styled.div`
  line-height: 1.654em;
  margin-top: ${props => props.$marginTop};
  margin-bottom: ${props => props.$marginBottom};
`

export const CorrectedImage = styled.img`
  width: 100%;
  height: auto;
  mix-blend-mode: multiply;
`

export const ProductCategory = styled.div`
  padding: 0.33rem 0.66rem;
  border-radius: 0.44444rem;
  background: ${props => props.theme.colors.title};
  color: #FFFFFF;
  font-size: 0.83333rem;
  font-weight: 600;
  margin-bottom: 0.72rem;
`

// todo fix styled below

export const CartOrdersListItemQuantityContainer = styled(Title)`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  position: relative;
  font-size: 1.11111rem;
  font-weight: 700;
  @media (max-width: 1200px) {
    
  }
`

export const CartOrdersListItemQuantityInput = styled.input`
  text-align: center;
  padding: 1.4rem 1rem;
  border-radius: 0.88889rem;
  border: 2px solid #274C5B;
  background: #FFF;
  color: rgba(39, 76, 91, 0.4);
  font-family: Roboto, sans-serif;
  font-size: 1.11111rem;
  font-weight: 700;
  max-width: 7rem;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &[type=number] {
    -moz-appearance: textfield;
  }

  @media (max-width: 550px) {
    max-width: 5rem;
    font-size: 1rem;
    padding: 1rem 0.2rem;
  }
`

export function ProductQuantity({amount}) {
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
    <CartOrdersListItemQuantityInput
      type="number"
      value={quantity}
      onChange={handleQuantityChange}
    />
  );
}