import React from 'react';
import styled from "styled-components";
import {Container, Subtitle, Title} from "../../styles/common";

const StyledBanners = styled(Container)`
  padding-top: 9rem;
  padding-bottom: 9rem;
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  @media (max-width: ${props => props.theme.breakpoints.medium}) {
    flex-direction: column;
    padding-top: 4rem;
    padding-bottom: 4rem;
  }
`

const Banner = styled.div`
  background-image: url("../../img/banners/${props => props.$backgroundImage}");
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  padding-left: 3rem;
  padding-top: 5.3rem;
  padding-bottom: 7rem;
  transition: all 0.2s ease-in-out;
`

const BannerContent = styled.div`
  max-width: 275px;
`

function Banners() {
  return (
    <StyledBanners>
      <Banner $backgroundImage="banner-1.jpg">
        <BannerContent>
          <Subtitle $color="#FFFFFF">Natural!!</Subtitle>
          <Title $color="#FFFFFF" $fontSize="2.22222rem">Get Garden Fresh Fruits</Title>
        </BannerContent>
      </Banner>
      <Banner $backgroundImage="banner-2.jpg">
        <BannerContent>
          <Subtitle>Offer!!</Subtitle>
          <Title $fontSize="2.22222rem">Get 10% off on Vegetables</Title>
        </BannerContent>
      </Banner>
    </StyledBanners>
  );
}

export default Banners;