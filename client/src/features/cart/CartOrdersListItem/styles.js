import styled from "styled-components";


export const StyledCartOrdersListItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  @media (max-width: ${props => props.theme.breakpoints.medium}) {
    flex-direction: column;
    align-items: start;
    gap: 1rem;
  }
`

export const CartOrdersListItemInfoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`

export const CartOrdersListItemImageContainer = styled.div`
  border-radius: 1.66667rem;
  background: #F9F8F8;
  mix-blend-mode: multiply;
  min-width: 300px;
  width: 300px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center; 

  img {
    max-width: 100%;
    max-height: 100%;
    height: 100%;
    width: auto;
  }

  @media (max-width: 1200px) {
    min-width: 200px;
    width: 200px;
    height: 200px;
  }
  @media (max-width: 550px) {
    min-width: 125px;
    width: 125px;
    height: 125px;
  }
`

export const CartOrdersListItemTitleAndPrice = styled.div`
  text-align: left;
  display: flex;
  align-items: end;
  flex-wrap: wrap;
  gap: 0.5rem;
  font-size: 2.22222rem;
  font-weight: 600;
  @media (max-width: 1200px) {
    font-size: 1.7rem;
  }
  @media (max-width: 550px) {
    font-size: 1.4rem;
  }

`
export const CartOrdersListItemPriceWrapper = styled.div`
  display: flex;
  align-items: end;
  gap: 1rem;
  @media (max-width: 550px) {
    flex-direction: column;
    align-items: start;
    gap: 0;
  }
`

export const CartOrdersListItemBeforeDiscount = styled.div`
  color: #B8B8B8;
  font-size: 1.33333rem;
  font-weight: 700;
  @media (max-width: 1200px) {
    font-size: 1.1rem;
  }
`

export const CartOrdersListItemQuantityContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  position: relative;
  @media (max-width: 1200px) {
    font-size: 1.5rem;
    gap: 1rem;
  }
  @media (max-width: 550px) {
    font-size: 1.2rem;
    gap: 0.5rem;
  }
`

export const CartOrdersListItemQuantityInput = styled.input`
  text-align: center;
  display: flex;
  padding: 1.5rem 1rem;
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