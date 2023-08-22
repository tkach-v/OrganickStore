import React from 'react';
import styled from "styled-components";
import {Link, LinkArrow, Container, Subtitle, Title} from "../../styles/common";

const StyledShop = styled(Container)`
  padding-bottom: 9rem;
  padding-top: 9rem;
  text-align: center;

  @media (max-width: ${props => props.theme.breakpoints.medium}) {
    padding-bottom: 3rem;
    padding-top: 3rem;
  }
`

const ShopProducts = styled.div`
  padding-top: 2rem;
  padding-bottom: 6rem;
`

function Shop(props) {
  return (
    <StyledShop>
      <Subtitle>Categories</Subtitle>
      <Title>Our Products</Title>
      <ShopProducts></ShopProducts>
      <Link href="#" $color="#FFFFFF" $backgroundColor="#1E1E1E" $marginLeft="auto" $marginRight="auto">
        <div>Load More</div>
        <LinkArrow>
          <img src="./img/common/arrow.svg" alt=""/>
        </LinkArrow>
      </Link>
    </StyledShop>
  );
}

export default Shop;