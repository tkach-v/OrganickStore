import React from 'react';
import styled from "styled-components";
import {CorrectedImage, Subtitle, Text, Title} from "../../styles/common";

const StyledWhoWeAre = styled.div`
  background-image: url("../../img/who-we-are/image.jpg");
  background-repeat: no-repeat;
  background-size: contain;
`

const WhoWeAreContent = styled.div`
  width: 100%;
  max-width: 790px;
  border-radius: 1.7rem;
  padding: 4rem 0 4rem 5rem;
  background: #FFFFFF;
  transform: translateX(-5rem);
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
      {/*<WhoWeAreImgWrapper>*/}
      {/*  <CorrectedImage src="./img/who-we-are/image.jpg" alt=""/>*/}
      {/*</WhoWeAreImgWrapper>*/}
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