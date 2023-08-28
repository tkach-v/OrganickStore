import React, {useState} from 'react';
import styled from "styled-components";
import {
  CorrectedImage,
  Title,
  ProductCategory,
} from "../../../assets/styles/common";
import {Prices} from "../../../components/Prices/Prices";
import stars from "../../../assets/img/common/stars.svg"
import ProductModal from "../ProductModal/ProductModal";


const StyledProductCard = styled.div`
  cursor: pointer;
  width: calc((100% - 3 * 1rem) / 4);
  border-radius: 1.66667rem;
  background: #F9F8F8;
  padding: 1.6rem 1.6rem 0.95rem;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
  @media (max-width: 1200px) {
    width: calc((100% - 2 * 1rem) / 3);
  }
  @media (max-width: 850px) {
    width: calc((100% - 1rem) / 2);
  }
  @media (max-width: 550px) {
    width: 100%;
  }
`

const ProductInfoContainer = styled.div`
  width: 100%;
  text-align: left;
`

const ProductName = styled(Title)`
  font-size: 1.11111rem;
  font-weight: 600;
  margin-top: 0.1rem;
  margin-bottom: 0.72rem;
`

const ProductStats = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;
  padding-top: 0.33rem;
  border-top: 1px solid #DEDDDD;
`

const ProductStars = styled.img`
  max-width: 4.6rem;
`

function ProductCard({product}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {isModalOpen && (
        <ProductModal
          product={product}
          active={isModalOpen}
          setActive={setIsModalOpen}
        />
      )}
      <StyledProductCard
        onClick={() => {
          setIsModalOpen(true);
        }}>
        <ProductCategory>{product.category}</ProductCategory>
        <CorrectedImage src={product.img_url} alt={product.name}/>
        <ProductInfoContainer>
          <ProductName>{product.name}</ProductName>
          <ProductStats>
            <Prices price={product.price} discount={product.discount}/>
            <ProductStars src={stars} alt="5 start"/>
          </ProductStats>
        </ProductInfoContainer>
      </StyledProductCard>
    </>
  );
}

export default ProductCard;