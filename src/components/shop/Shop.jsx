import React, {useState} from 'react';
import styled from "styled-components";
import {Link, LinkArrow, Container, Subtitle, Title} from "../../styles/common";
import ProductCard from "../common/ProductCard";

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
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`

function Shop(props) {
  // const [products, setProducts] = useState();
  return (
    <StyledShop>
      <Subtitle>Categories</Subtitle>
      <Title>Our Products</Title>
      <ShopProducts>
        <ProductCard
          category="Fresh"
          name="Fresh Banana Fruites"
          imageUrl="./img/shop/fresh-banana-fruites.png"
          price="14.00"
          priceBefore="20.00" />
        <ProductCard
          category="Health"
          name="Brown Hazelnut"
          imageUrl="./img/shop/mung-bean-1.png"
          price="140.00"
          priceBefore="20.00" />
        <ProductCard
          category="Health"
          name="Mung Bean"
          imageUrl="./img/shop/brown-hazelnut.png"
          price="14.00"
          priceBefore="20.00" />
        <ProductCard
          category="Fresh"
          name="Fresh Banana Fruites"
          imageUrl="./img/shop/fresh-banana-fruites.png"
          price="14.00"
          priceBefore="20.00" />
        <ProductCard
          category="Fresh"
          name="Fresh Banana Fruites"
          imageUrl="./img/shop/fresh-banana-fruites.png"
          price="14.00"
          priceBefore="20.00" />
        <ProductCard
          category="Fresh"
          name="Fresh Banana Fruites"
          imageUrl="./img/shop/fresh-banana-fruites.png"
          price="14.00"
          priceBefore="20.00" />
      </ShopProducts>
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