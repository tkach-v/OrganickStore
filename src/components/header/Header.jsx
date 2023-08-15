import React from 'react';
import Logo from "../common/Logo";
import {
  StyledHeader,
  MenuItem,
  MenuLink,
  MenuList,
  SearchAndCartWrapper,
  StyledSearch,
  SearchInput,
  SearchBtn, StyledCart, CartIcon, CartText
} from "./styles";

function Menu() {
  const menuItems = [
    {'title': 'Home', 'href': '/'},
    {'title': 'About', 'href': '/about'},
    {'title': 'Pages', 'href': '/pages'},
    {'title': 'Shop', 'href': '/shop'},
    {'title': 'Projects', 'href': '/projects'},
    {'title': 'News', 'href': '/news'},
  ];

  return (
    <div>
      <MenuList>
        {menuItems.map(item =>
          <MenuItem>
            <MenuLink href={item.href}>{item.title}</MenuLink>
          </MenuItem>
        )}
      </MenuList>
    </div>
  )
}

function Search() {
  return (
    <StyledSearch>
      <SearchInput/>
      <SearchBtn>
        <img src="./img/header/search-icon.svg" alt="Search"/>
      </SearchBtn>
    </StyledSearch>
  )
}

function Cart() {
  const counter = 0;

  return (
    <StyledCart>
      <CartIcon>
        <img src="./img/header/cart-icon.svg" alt="Cart"/>
      </CartIcon>
      <CartText>Cart ({counter})</CartText>
    </StyledCart>
  )
}


function Header() {
  return (
    <>
      <StyledHeader>
        <Logo/>
        <Menu/>
        <SearchAndCartWrapper>
          <Search/>
          <Cart/>
        </SearchAndCartWrapper>
      </StyledHeader>
    </>
  );
}

export default Header;