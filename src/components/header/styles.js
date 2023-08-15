import styled from "styled-components";
import {Container} from "../../styles/common";

export const MenuList = styled.ul`
  font-family: Roboto, sans-serif;
  font-size: 1.11111rem;
  font-weight: 700;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2em;
`

export const MenuItem = styled.li`
  transition: all 0.3s ease-in-out;
  
  &:hover {
    scale: 1.2;
  }
`

export const MenuLink = styled.a`
  color: #274C5B;
`

export const SearchAndCartWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.7rem;
`

export const StyledSearch = styled.div`
  display: flex;
  align-items: center;
  border-radius: 2rem;
  background: #FAFAFA;
  padding: 0.25rem;
`

export const SearchInput = styled.input`
  width: 100%;
  max-width: 250px;
  background-color: inherit;
  color: #274C5B;
  font-family: Roboto, sans-serif;
  font-size: 1rem;
  font-weight: 600;
  padding: 0 1rem;
`

export const SearchBtn = styled.button`
  background-color: #7EB693;
  border-radius: 50%;
  padding: 0.8rem;
  transition: all 0.3s ease-in-out;
  
  &:hover {
    background-color: #274C5B;
  }
`

export const StyledCart = styled.button`
  display: flex;
  align-items: center;
  background-color: #FFFFFF;
  border-radius: 1.83333rem;
  border: 1px solid #E0E0E0;
  padding: 0.25rem;
  transition: all 0.3s ease-in-out;
  
  &:hover {
    background-color: #E0E0E0;
  }
`

export const CartIcon = styled.div`
  background-color: #274C5B;
  border-radius: 50%;
  padding: 0.8rem;
  transition: all 0.3s ease-in-out;
`

export const CartText = styled.div`
  color: #274C5B;
  font-family: Roboto, sans-serif;
  font-size: 1rem;
  font-weight: 600;
  padding: 0 0.6rem;
`

export const StyledHeader = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 3.8rem;
  padding-bottom: 3.8rem;
  max-width: 1600px;
`