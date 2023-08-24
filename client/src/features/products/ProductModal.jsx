import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {
  CustomButton,
  Container,
  CorrectedImage,
  Prices,
  ProductCategory,
  ProductQuantity,
  Text,
  Title,
  CartOrdersListItemQuantityContainer, LinkArrow, CustomLink
} from "../../assets/styles/common";

const StyledModal = styled.div`
  height: 100%;
  width: 100%;
  background-color: rgba(244, 244, 244, 0.82);
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  align-items: center;
  transition: 0.3s;
  display: ${props => ((props.$active) ? "flex" : "none")};
  overflow-y: auto;
`

const ModalInner = styled.div`
  width: 100%;
  padding: 6rem ${props => props.theme.container.paddingX};
  border-radius: 12px;
  background: #FFFAFA;
  position: relative;
  @media (max-width: ${props => props.theme.breakpoints.medium}) {
    padding: 3rem ${props => props.theme.container.paddingX};
  }
`

const ModalInnerContainer = styled(Container)`
  padding: 0;
`

const ModalCloseButtonContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`

const ModalShortInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 4rem;
`

const ModalImageContainer = styled.div`
  position: relative;
  border-radius: 1.66667rem;
  background: #F9F8F8;
  padding: 10px;
  width: calc(50% - 4rem);
`

const ModalProductCategory = styled(ProductCategory)`
  position: absolute;
  left: 1.6rem;
  top: 1.6rem;
`

const ModalShortInfoContent = styled.div`
  width: 50%;
`

const ModalProductTitle = styled(Title)`
  font-size: 2.22222rem;
  font-weight: 600;
  padding-bottom: 0.5rem;
`


function ProductModal({active, setActive}) {
  // block scrolling when modal opened
  useEffect(() => {
    const body = document.querySelector('body');
    if (active) {
      body.style.overflow = 'hidden';
    } else {
      body.style.overflow = 'auto';
    }
    return () => body.style.overflow = 'auto';
  }, [active]);

  return (
    <StyledModal onClick={() => setActive(false)} $active={active}>
      <ModalInner onClick={e => e.stopPropagation()}>
        <ModalInnerContainer>
          <ModalCloseButtonContainer>
            <CustomButton type="button"
                          $color="#FFFFFF"
                          $backgroundColor={props => props.theme.colors.title}
                          $paddingY="1rem"
                          $paddingX="2rem"
                          onClick={() => setActive(false)}
            >X</CustomButton>
          </ModalCloseButtonContainer>
          <ModalShortInfo>
            <ModalImageContainer>
              <ModalProductCategory>Millets</ModalProductCategory>
              <CorrectedImage src="./img/shop/white-hazelnut.png" alt={"Product Name"}/>
            </ModalImageContainer>
            <ModalShortInfoContent>
              <ModalProductTitle>Health Pistachios</ModalProductTitle>
              <img style={{maxWidth: "4.6rem", paddingBottom: "0.5rem"}} src="../../assets/img/common/stars.svg" alt="5 stars"/>
              <Prices
                priceCurrent={"13.00"}
                priceBefore={"20.00"}
                $priceCurrentFontSize="1.38889rem;"
                $priceBeforeFontSize="1.11111rem"
              />
              <Text $marginTop="1.5rem">Simply dummy text of the printing and typesetting industry. Lorem had ceased to
                been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                galley.</Text>
              <CartOrdersListItemQuantityContainer as="form">
                  <div>Quantity :</div>
                  <ProductQuantity amount={1} required/>
                  <CustomButton
                    $color="#FFFFFF"
                    $backgroundColor={props => props.theme.colors.title}
                  >
                    <div>Add To Cart</div>
                    <LinkArrow>
                      <img src="../../assets/img/common/arrow.svg" alt=""/>
                    </LinkArrow>
                  </CustomButton>
              </CartOrdersListItemQuantityContainer>
            </ModalShortInfoContent>
          </ModalShortInfo>
        </ModalInnerContainer>
      </ModalInner>
    </StyledModal>
  );
}

export default ProductModal;