import styled from "styled-components";
import {QuantityInput, QuantityFormRowOuter} from "../../../assets/styles/common";


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
  gap: 0.8rem;
  font-size: 2.22222rem;
  font-weight: 600;
  @media (max-width: 1200px) {
    font-size: 1.7rem;
  }
  @media (max-width: 550px) {
    font-size: 1.4rem;
  }
`

export const CartQuantityFormRowOuter = styled(QuantityFormRowOuter)`
  @media (max-width: 600px) {
    flex-direction: row;
    align-items: center;
    gap: 10px;
  }
`

export const CartQuantityInput = styled(QuantityInput)`
  @media (max-width: 550px) {
    padding: 1rem 0.5rem;
    max-width: 4.5rem;
  }
`