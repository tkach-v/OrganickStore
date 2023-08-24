import React from 'react';
import styled from "styled-components";
import {CorrectedImage} from "../../../assets/styles/common";
import {CustomButton} from "../../../components/CustomButtonLink/CustomButtonLink";
import promoImage1 from "../../../assets/img/home/gallery/image-1.jpg"
import promoImage2 from "../../../assets/img/home/gallery/image-2.jpg"
import promoImage3 from "../../../assets/img/home/gallery/image-3.jpg"

const StyledGallery = styled.div`
  background: #F1F8F4;
  padding: 10rem 0;
  display: flex;
  align-items: center;
  gap: 2.33rem;
  @media (max-width: ${props => props.theme.breakpoints.large}) {
    padding: 6rem 0;
  }
  @media (max-width: ${props => props.theme.breakpoints.medium}) {
    padding: 3rem ${props => props.theme.container.paddingX};
    flex-direction: column;
    gap: 1rem;
  }
`

const GalleryItem = styled.div`
  position: relative;
  width: 100%;
  @media (max-width: ${props => props.theme.breakpoints.medium}) {
    max-width: 500px;
  }
`

const GalleryItemBtn = styled(CustomButton)`
  background: #FFFFFF;
  padding: 1.5rem 4rem;
  font-weight: 500;
  font-size: 1.38889rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

function Gallery() {
  return (
    <StyledGallery>
      <GalleryItem>
        <CorrectedImage src={promoImage1} alt="" />
        <GalleryItemBtn>Organic Juice</GalleryItemBtn>
      </GalleryItem>
      <GalleryItem>
        <CorrectedImage src={promoImage2} alt="" />
        <GalleryItemBtn>Organic Food</GalleryItemBtn>
      </GalleryItem>
      <GalleryItem>
        <CorrectedImage src={promoImage3} alt="" />
        <GalleryItemBtn>Nuts Cookis</GalleryItemBtn>
      </GalleryItem>
    </StyledGallery>
  );
}

export default Gallery;