import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {Container, Subtitle, Title} from "../../../assets/styles/common";
import ProductsList from "../../../features/products/ProductList/ProductsList";
import axios from "axios";

const StyledOffer = styled.div`
  background: #274C5B;
  padding: 10rem 0;
`

const OfferList = styled.div`
  margin-top: 2.5rem;
`

function Offer() {
  // shows the 4 newest products from the database
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/products?limit=4&ordering=id+desc')
      .then(response => {
        setProducts(response.data.sort((a, b) => a.id - b.id));
      })
      .catch(error => {
        console.error('Error while getting products:', error);
      });
  }, []);

  return (
    <StyledOffer>
      <Container>
        <Subtitle>Offer</Subtitle>
        <Title $color="#FFFFFF">We Offer Organic For You</Title>
        <OfferList>
          <ProductsList products={products} />
        </OfferList>
      </Container>
    </StyledOffer>
  );
}

export default Offer;