import React from 'react';
import styled from "styled-components";
import ProductCard from "../ProductCard/ProductCard";

const StyledProductsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`

function ProductsList({products}) {
  return (
    <StyledProductsList>
      {products.map(product => (
        <ProductCard
          key={product.id}
          product={product} />
      ))}
    </StyledProductsList>
  );
}

export default ProductsList;