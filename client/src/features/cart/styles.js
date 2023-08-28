import styled, {css} from "styled-components";
import {Container, Title} from "../../assets/styles/common";
import titleBackground from "../../assets/img/cart/title-background.jpg"

export const CartTitle = styled(Title)`
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

export const CartContent = styled.div`
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

export const CartContentInner = styled(Container)`
  max-width: 1600px;
`

export const CartOrdersList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  @media (max-width: ${props => props.theme.breakpoints.medium}) {
    flex-direction: column;
    align-items: start;
  }
`

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

export const InputError = styled.div`
  font-style: italic;
  color: ${props => props.theme.colors.error};
  font-weight: 400;
  font-size: 0.9rem;
  position: absolute;
  left: 0;
  bottom: 0;
  transform: translateY(110%);
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

export const CartFormWrapper = styled(Title)`
  max-width: 1400px;
  margin: 5rem auto 0;
  font-size: 1rem;
  font-weight: 600;
  transition: all 0.5s ease-in-out;
  height: ${props => (props.$visible ? 'auto': '0')};
  opacity: ${props => (props.$visible ? '1': '0')};
`

export const CartFormFieldsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto;
  gap: 2.5rem;
  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
`

export const CartFormField = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 0.8rem;
  
`

export const CartFormFieldWide = styled(CartFormField)`
  grid-column: span 2;
`

export const CartFormInputStyles = css`
  color: ${props => props.theme.colors.title};
  font-family: Roboto, sans-serif;
  font-size: 1rem;
  font-style: italic;
  font-weight: 400;
  border-radius: 0.88889rem;
  border: 1px solid ${props => (props.$isError ? props.theme.colors.error : '#7EB693')} ;
  background: #FFF;
  padding: 1.5rem 1.2rem;
  width: 100%;
  &::placeholder {
    color: #ABABAB;
  }
`

export const CartFormInput = styled.input`
  ${CartFormInputStyles}
`

export const CartFormText = styled.textarea`
  resize: none;
  ${CartFormInputStyles}
`