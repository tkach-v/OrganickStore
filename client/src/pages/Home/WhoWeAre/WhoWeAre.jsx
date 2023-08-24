import React from 'react';
import styled from "styled-components";
import {Subtitle, Text, Title} from "../../../assets/styles/common";
import promoImage from "../../../assets/img/home/who-we-are/image.jpg"

const StyledWhoWeAre = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`

const WhoWeAreImgWrapper = styled.div`
  height: 100%;
  overflow: hidden;
  @media (max-width: ${props => props.theme.breakpoints.medium}) {
    display: none;
  }
`

const WhoWeAreImg = styled.img`
  height: 100%;
`

const WhoWeAreContent = styled.div`
  width: 100%;
  max-width: 750px;
  border-radius: 1.7rem;
  padding: 4rem 0 4rem 5rem;
  background: #FFFFFF;
  transform: translateX(-5rem);
  position: relative;
  z-index: 1;
  @media (max-width: ${props => props.theme.breakpoints.medium}) {
    max-width: none;
    transform: none;
    padding: 3rem ${props => props.theme.container.paddingX};
  }
`

const WhoWeAreContentThesis = styled.div`
  margin-top: 1.9rem;
`

const WhoWeAreContentThesisTitle = styled(Title)`
  font-size: 1.38889rem;
  font-weight: 500;
  padding-bottom: 0.35rem;
`

function WhoWeAre() {
  return (
    <StyledWhoWeAre>
      <WhoWeAreImgWrapper>
        <WhoWeAreImg src={promoImage} alt=""/>
      </WhoWeAreImgWrapper>
      <WhoWeAreContent>
        <Subtitle>Eco Friendly</Subtitle>
        <Title>Econis is a Friendly Organic Store</Title>
        <WhoWeAreContentThesis>
          <WhoWeAreContentThesisTitle>Start with Our Company First</WhoWeAreContentThesisTitle>
          <Text>Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis.</Text>
        </WhoWeAreContentThesis>
        <WhoWeAreContentThesis>
          <WhoWeAreContentThesisTitle>Learn How to Grow Yourself</WhoWeAreContentThesisTitle>
          <Text>Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis.</Text>
        </WhoWeAreContentThesis>
        <WhoWeAreContentThesis>
          <WhoWeAreContentThesisTitle>Farming Strategies of Today</WhoWeAreContentThesisTitle>
          <Text>Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis.</Text>
        </WhoWeAreContentThesis>
      </WhoWeAreContent>
    </StyledWhoWeAre>
  );
}

export default WhoWeAre;