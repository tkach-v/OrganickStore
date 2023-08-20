import React, {useState, useEffect} from 'react';
import Logo from "../common/Logo";
import {
  StyledHeader,
  MenuItem,
  MenuLink,
  MenuList,
  SearchAndCartWrapper,
  StyledSearch,
  SearchInput,
  SearchBtn,
  StyledCart,
  CartIcon,
  CartText,
  DropdownBtn,
  DropdownBtnIcon,
  DropdownContent,
  DropdownLink,
  BurgerMenuToggler, BurgerMenuLine, NavigationWrapper
} from "./styles";

function HeaderMenu() {
  const menuItems = [
    {'title': 'Home', 'href': '/'},
    {'title': 'About', 'href': '/about'},
    {'title': 'Pages', 'href': [
      {'title': 'Page 1', 'href': '/page/1'},
      {'title': 'Page 2', 'href': '/page/2'},
      {'title': 'Page 3', 'href': '/page/3'},
      ]},
    {'title': 'Shop', 'href': '/shop'},
    {'title': 'Projects', 'href': '/projects'},
    {'title': 'News', 'href': '/news'},
  ];

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div>
      <MenuList>
        {menuItems.map((item, index) => {
          if (item.title === 'Pages') {
            return (
              <MenuItem key={index}>
                <DropdownBtn onClick={() => handleDropdownClick()}>
                  <span>{item.title}</span>
                  <DropdownBtnIcon src="./img/header/dropdown-icon.svg" alt=""/>
                </DropdownBtn>
                <DropdownContent $opened={isDropdownOpen}>
                  {item.href.map((innerItem, innerIndex) =>
                    <DropdownLink key={innerIndex} href={innerItem.href}>{innerItem.title}</DropdownLink>
                  )}
                </DropdownContent>
              </MenuItem>
            )
          }
          return (
            <MenuItem key={index}>
              <MenuLink href={item.href}>{item.title}</MenuLink>
            </MenuItem>
          );
        })}
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
    <StyledCart onClick={() => console.log('go to cart section')}>
      <CartIcon>
        <img src="./img/header/cart-icon.svg" alt=""/>
      </CartIcon>
      <CartText>Cart ({counter})</CartText>
    </StyledCart>
  )
}

function Header() {
  const [showNav, setShowNav] = useState(false);

  // block scrolling when menu opened
  useEffect(() => {
    const body = document.querySelector('body');
    if (showNav) {
      body.style.overflow = 'hidden';
    } else {
      body.style.overflow = 'auto';
    }

    return () => {
      body.style.overflow = 'auto';
    };
  }, [showNav]);
  return (
    <>
      <StyledHeader>
        <Logo zIndex="2"/>
        <NavigationWrapper $opened={showNav}>
          <HeaderMenu/>
          <SearchAndCartWrapper>
            <Search/>
            <Cart/>
          </SearchAndCartWrapper>
        </NavigationWrapper>
        <BurgerMenuToggler
          type="button"
          $opened={showNav}
          onClick={() => setShowNav(!showNav)}
        >
          <BurgerMenuLine $opened={showNav}/>
        </BurgerMenuToggler>
      </StyledHeader>
    </>
  );
}

export default Header;