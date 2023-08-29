import React, {useState, useEffect} from 'react';
import styled from "styled-components";
import {Container, Subtitle, Title} from "../../../assets/styles/common";
import {CustomArrowButton} from "../../../components/CustomButtonLink/CustomButtonLink";
import ProductsList from "../../../features/products/ProductList/ProductsList";
import axios from "axios";

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
  const [showLess, setShowLess] = useState(true)
  const [products, setProducts] = useState([]);

  // shows the products with the best discount first
  useEffect(() => {
    axios.get(`http://localhost:5000/products?limit=${showLess ? 8 : 16}&ordering=product.discount+desc`)
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('Error while getting products:', error);
      });
  }, [showLess]);

  return (
    <StyledShop>
      <Subtitle>Categories</Subtitle>
      <Title>Our Products</Title>
      <ShopProducts>
        <ProductsList products={products}/>
      </ShopProducts>
      <CustomArrowButton
        type="button"
        $color="#FFFFFF"
        $backgroundColor={showLess ? '#1E1E1E' : '#274C5B'}
        $marginLeft="auto"
        $marginRight="auto"
        onClick={() => (showLess ? setShowLess(false) : setShowLess(true))}
      >{showLess ? 'Load More' : 'Show Less'}</CustomArrowButton>
    </StyledShop>
  );
}

export default Shop;