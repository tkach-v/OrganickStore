import React, {useState} from 'react';
import Logo from "../Logo/Logo";
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
import dropdownIcon from "../../assets/img/header/dropdown-icon.svg"
import searchIcon from "../../assets/img/header/search-icon.svg"
import cartIcon from "../../assets/img/header/cart-icon.svg"
import useBodyOverflow from "../../hooks/useBodyOverflow";
import {useSelector} from "react-redux";

function HeaderMenu({setShowNav}) {
  const menuItems = [
    {'title': 'Home', 'href': '/'},
    {'title': 'About', 'href': '/About'},
    {'title': 'Pages', 'href': [
      {'title': 'Page 1', 'href': '/page/1'},
      {'title': 'Page 2', 'href': '/page/2'},
      {'title': 'Page 3', 'href': '/page/3'},
      ]},
    {'title': 'Shop', 'href': '/Shop'},
    {'title': 'Projects', 'href': '/projects'},
    {'title': 'News', 'href': '/News'},
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
                  <DropdownBtnIcon src={dropdownIcon} alt=""/>
                </DropdownBtn>
                <DropdownContent $opened={isDropdownOpen}>
                  {item.href.map((innerItem, innerIndex) =>
                    <DropdownLink
                      key={innerIndex}
                      to={innerItem.href}
                      onClick={() => {
                        setShowNav(false);
                        setIsDropdownOpen(false)
                      }}
                    >{innerItem.title}</DropdownLink>
                  )}
                </DropdownContent>
              </MenuItem>
            )
          }
          return (
            <MenuItem key={index}>
              <MenuLink
                to={item.href}
                onClick={() => setShowNav(false)}
              >{item.title}</MenuLink>
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
        <img src={searchIcon} alt="Search"/>
      </SearchBtn>
    </StyledSearch>
  )
}

function Cart({setShowNav}) {
  const count = useSelector(state => state.cart.items.length);

  return (
    <StyledCart
      to="/cart"
      onClick={() => setShowNav(false)}
    >
      <CartIcon>
        <img src={cartIcon} alt=""/>
      </CartIcon>
      <CartText>
        Cart (<span style={{color: (count > 0 ? '#F00' : 'inherit')}}>{count}</span>)</CartText>
    </StyledCart>
  )
}

function Header() {
  const [showNav, setShowNav] = useState(false);
  useBodyOverflow(showNav);
  return (
    <header>
      <StyledHeader>
        <Logo zIndex="2"/>
        <NavigationWrapper $opened={showNav}>
          <HeaderMenu setShowNav={setShowNav} />
          <SearchAndCartWrapper>
            <Search/>
            <Cart setShowNav={setShowNav} />
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
    </header>
  );
}

export default Header;