import styled, {css} from "styled-components";
import {Container} from "../../assets/styles/common";
import {Link} from "react-router-dom";

export const StyledHeader = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  padding-top: 3rem;
  padding-bottom: 3rem;
  max-width: 1600px;
  
  @media (max-width: ${props => props.theme.breakpoints.large}) {
    gap: 1.5rem;
  }
  @media (max-width: ${props => props.theme.breakpoints.medium}) {
    padding-top: 1.2rem;
    padding-bottom: 1.2rem;
  }
`

export const NavigationWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3rem;
  left: -100%;
  transition: all 0.3s ease-in-out;

  @media (max-width: ${props => props.theme.breakpoints.large}) {
    gap: 1.5rem;
  }
  @media (max-width: ${props => props.theme.breakpoints.medium}) {
    flex-direction: column;
    align-items: start;
    justify-content: start;
    position: fixed;
    z-index: 1;
    width: 100%;
    height: 100%;
    top: 0;
    left: ${props => ((props.$opened) ? "0" : "-100%")};
    background: #FFFFFF;
    padding: 100px ${props => props.theme.container.paddingX} 25px ${props => props.theme.container.paddingX};
    overflow-y: auto;
  }
`

export const MenuList = styled.ul`
  font-family: Roboto, sans-serif;
  font-size: 1.11111rem;
  font-weight: 700;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2em;
  @media (max-width: ${props => props.theme.breakpoints.large}) {
    font-size: 1rem;
    gap: 1.5em;
  }
  @media (max-width: ${props => props.theme.breakpoints.medium}) {
    font-size: 1.3rem;
    display: flex;
    flex-direction: column;
    align-items: start;
  }
`

export const MenuItem = styled.li`
  transition: all 0.3s ease-in-out;
  position: relative;
`

export const MenuLink = styled(Link)`
  color: ${props => props.theme.colors.title};
  @media (min-width: ${props => props.theme.breakpoints.medium}) {
    &:hover {
      color: #000000;
    }
  }
`

export const DropdownBtn = styled.button`
  background: none;
  display: flex;
  align-items: center;
  font-family: Roboto, sans-serif;
  font-size: 1.11111rem;
  font-weight: 700;
  color: ${props => props.theme.colors.title};
  @media (max-width: ${props => props.theme.breakpoints.large}) {
    font-size: 1rem;
  }
  @media (max-width: ${props => props.theme.breakpoints.medium}) {
    font-size: 1.3rem;
  }
  @media (min-width: ${props => props.theme.breakpoints.medium}) {
    &:hover {
      color: #000000;
    }
  }
`

export const DropdownBtnIcon = styled.img`
  padding-left: 6px;
  height: 0.4em;
  width: auto;
`

export const DropdownContent = styled.div`
  display: ${props => ((props.$opened) ? "flex" : "none")};
  flex-direction: column;
  position: absolute;
  left: -1rem;
  top: 1.8rem;
  font-family: Roboto, sans-serif;
  font-size: 1.11111rem;
  font-weight: 700;
  color: ${props => props.theme.colors.title};
  min-width: 150px;
  z-index: 1;
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  background-color: #F1EFF0;
  @media (max-width: ${props => props.theme.breakpoints.large}) {
    font-size: 1rem;
  }
  @media (max-width: ${props => props.theme.breakpoints.medium}) {
    font-size: 1.3rem;
  }
`

export const DropdownLink = styled(MenuLink)`
  padding: 1rem;
  @media (min-width: ${props => props.theme.breakpoints.medium}) {
    &:hover {
      background-color: #E2E9E5;;
    }
  }
`

export const SearchAndCartWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.7rem;
  @media (max-width: ${props => props.theme.breakpoints.medium}) {
    flex-direction: column-reverse;
    align-items: start;
  }
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
  max-width: 240px;
  background-color: inherit;
  color: ${props => props.theme.colors.title};
  font-family: Roboto, sans-serif;
  font-size: 1rem;
  font-weight: 600;
  padding: 0 0.8rem;
`

export const SearchBtn = styled.button`
  background-color: #7EB693;
  border-radius: 50%;
  padding: 0.8rem;
  transition: all 0.3s ease-in-out;
  @media (min-width: ${props => props.theme.breakpoints.medium}) {
    &:hover {
      background-color: ${props => props.theme.colors.title};
    }
  }
  @media (max-width: ${props => props.theme.breakpoints.large}) {
    padding: 0.7rem;
  }
`

export const StyledCart = styled(Link)`
  display: flex;
  align-items: center;
  background-color: #FFFFFF;
  border-radius: 1.83333rem;
  border: 1px solid #E0E0E0;
  padding: 0.25rem;
  transition: all 0.3s ease-in-out;
  @media (min-width: ${props => props.theme.breakpoints.medium}) {
    &:hover {
      background-color: #E0E0E0;
    }
  }
`

export const CartIcon = styled.div`
  background-color: ${props => props.theme.colors.title};
  border-radius: 50%;
  padding: 0.7rem;
  transition: all 0.3s ease-in-out;
  @media (max-width: ${props => props.theme.breakpoints.large}) {
    padding: 0.55rem;
  }
`

export const CartText = styled.div`
  color: ${props => props.theme.colors.title};
  font-family: Roboto, sans-serif;
  font-size: 1rem;
  font-weight: 600;
  padding: 0 0.6rem;
`

const BurgerLine = css`
  background-color: ${props => props.theme.colors.title};
  width: 100%;
  height: 5px;
  transition: all 0.2s ease-in-out;
  position: absolute;
  left: 0;
`

export const BurgerMenuLine = styled.div`
  opacity: ${props => ((props.$opened) ? "0" : "1")};
  top: 50%;
  transform: translateY(-50%);
  ${BurgerLine}
`

export const BurgerMenuToggler = styled.button`
  display: none;
  background: none;
  width: 2rem;
  height: 27px;
  position: relative;
  z-index: 2;

  &:before {
    content: "";
    top: ${props => ((props.$opened) ? "calc(50% - 2.5px)" : "0")};
    transform: ${props => ((props.$opened) ? "rotate(45deg)" : "none")};
    ${BurgerLine}
  }

  &:after {
    content: "";
    bottom: ${props => ((props.$opened) ? "calc(50% - 2.5px)" : "0")};
    transform: ${props => ((props.$opened) ? "rotate(-45deg)" : "none")};
    ${BurgerLine}
  }

  @media (max-width: ${props => props.theme.breakpoints.medium}) {
    display: block;
  }
`

