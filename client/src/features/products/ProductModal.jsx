import React, {useState} from 'react';
import styled from "styled-components";
import {
  Container,
  CorrectedImage,
  ProductCategory,
  ProductQuantity,
  Text,
  Title,
  CartOrdersListItemQuantityContainer,
} from "../../assets/styles/common";
import {Prices} from "../../components/Prices/Prices";
import {CustomArrowButton, CustomButton} from "../../components/CustomButtonLink/CustomButtonLink";
import useBodyOverflow from "../../hooks/useBodyOverflow";
import stars from "../../assets/img/common/stars.svg"

const StyledModal = styled.div`
  height: 100vh;
  width: 100%;
  background-color: rgba(244, 244, 244, 0.82);
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  transition: 0.3s;
  overflow-y: auto;
`

const ModalInner = styled.div`
  width: 100%;
  padding: 5rem 0;
  border-radius: 12px;
  background: #FFFAFA;
  position: relative;
  @media (max-width: ${props => props.theme.breakpoints.medium}) {
    padding: 3rem 0;
  }
`

const ModalInnerContainer = styled(Container)`
  
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
  text-align: left;
`

const ModalProductTitle = styled(Title)`
  font-size: 2.22222rem;
  font-weight: 600;
  padding-bottom: 0.5rem;
`

const ModalMoreInfo = styled.div`
  margin-top: 4rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ModalMoreInfoButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
`

const ModalMoreInfoText = styled(Text)`
  margin-top: 1.5rem;
  max-width: 1100px;
`


function ProductModal({product, active, setActive}) {
  const [descriptionActive, setDescriptionActive] = useState(true);

  // block scrolling when modal opened
  useBodyOverflow(active)

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
              <CorrectedImage src={product.img_url} alt={product.name}/>
            </ModalImageContainer>
            <ModalShortInfoContent>
              <ModalProductTitle>{product.name}</ModalProductTitle>
              <img style={{maxWidth: "4.6rem", paddingBottom: "0.5rem"}} src={stars} alt="5 stars"/>
              <Prices
                price={product.price}
                discount={product.discount}
                $priceCurrentFontSize="1.38889rem;"
                $priceBeforeFontSize="1.11111rem"
              />
              <Text
                $marginTop="1.5rem"
                $marginBottom="1.8rem"
              >{product.short_description}</Text>
              <CartOrdersListItemQuantityContainer as="form">
                <div>Quantity :</div>
                <ProductQuantity amount={1} required/>
                <CustomArrowButton
                  $color="#FFFFFF"
                  $backgroundColor={props => props.theme.colors.title}
                >Add To Cart</CustomArrowButton>
              </CartOrdersListItemQuantityContainer>
            </ModalShortInfoContent>
          </ModalShortInfo>
          <ModalMoreInfo>
            <ModalMoreInfoButtons>
              <CustomButton
                type="button"
                $paddingX="3rem"
                $backgroundColor={descriptionActive ? '#EFF6F1' : props => props.theme.colors.title}
                $color={descriptionActive ? props => props.theme.colors.title : '#FFFFFF'}
                $border={descriptionActive ? '1px solid #000' : 'none'}
                onClick={() => setDescriptionActive(true)}
              >Product Description</CustomButton>
              <CustomButton
                type="button"
                $paddingX="3rem"
                $backgroundColor={descriptionActive ? props => props.theme.colors.title : '#EFF6F1'}
                $color={descriptionActive ? '#FFFFFF' : props => props.theme.colors.title}
                $border={descriptionActive ? 'none' : '1px solid #000'}
                onClick={() => setDescriptionActive(false)}
              >Additional Info</CustomButton>
            </ModalMoreInfoButtons>
            <ModalMoreInfoText>
              {descriptionActive ? product.long_description : product.additional_info}
            </ModalMoreInfoText>
          </ModalMoreInfo>
        </ModalInnerContainer>
      </ModalInner>
    </StyledModal>
  );
}

export default ProductModal;