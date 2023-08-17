import React from 'react';
import styled from "styled-components";
import {Button, CorrectedImage} from "../../styles/common";

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

const GalleryItemBtn = styled(Button)`
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
        <CorrectedImage src="./img/gallery/image-1.jpg" alt="" />
        <GalleryItemBtn>Organic Juice</GalleryItemBtn>
      </GalleryItem>
      <GalleryItem>
        <CorrectedImage src="./img/gallery/image-2.jpg" alt="" />
        <GalleryItemBtn>Organic Food</GalleryItemBtn>
      </GalleryItem>
      <GalleryItem>
        <CorrectedImage src="./img/gallery/image-3.jpg" alt="" />
        <GalleryItemBtn>Nuts Cookis</GalleryItemBtn>
      </GalleryItem>
    </StyledGallery>
  );
}

export default Gallery;