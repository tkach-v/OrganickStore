import React from 'react';
import styled from "styled-components";
import {Container, CorrectedImage, Subtitle, Title, Text} from "../../../assets/styles/common";
import {CustomArrowLink} from "../../../components/CustomButtonLink/CustomButtonLink";
import photoImage from "../../../assets/img/home/about/image.png"
import organicFoodIcon from "../../../assets/img/home/about/organic-food-icon.svg"
import qualityIcon from "../../../assets/img/home/about/quality-icon.svg"

const StyledAbout = styled.div`
  background: #F9F8F8;
  padding-top: 5rem;
  padding-bottom: 5rem;
  @media (max-width: ${props => props.theme.breakpoints.medium}) {
    padding-top: 0;
    padding-bottom: 0;
  }
`

const AboutInner = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const AboutImgContainer = styled.div`
  @media (max-width: ${props => props.theme.breakpoints.medium}) {
    display: none;
  }
`

const AboutContent = styled.div`
  position: relative;
  z-index: 1;
  max-width: 650px;
  width: 100%;
  @media (max-width: ${props => props.theme.breakpoints.medium}) {
    padding: 3rem 0;
    text-align: center;
    max-width: none;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

const AboutList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.8rem;
`

const AboutListItem = styled.li`
  display: flex;
  align-items: center;
  gap: 1rem;
  text-align: left;
`

const AboutListItemIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  border-radius: 1.11111rem;
  background: #FFF;
  @media (max-width: 500px) {
    display: none;
  }
`

const AboutListItemTitle = styled(Title)`
  font-size: 1.38889rem;
  padding-bottom: 0.4rem;
`

function About(props) {
  return (
    <StyledAbout>
      <AboutInner>
        <AboutImgContainer>
          <CorrectedImage src={photoImage} alt="About image"/>
        </AboutImgContainer>
        <AboutContent>
          <Subtitle>About Us</Subtitle>
          <Title>We Believe in Working Accredited Farmers</Title>
          <Text $marginTop="0.75rem" $marginBottom="2.5rem">Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</Text>
          <AboutList>
            <AboutListItem>
              <AboutListItemIcon>
                <img src={organicFoodIcon} alt="icon"/>
              </AboutListItemIcon>
              <div>
                <AboutListItemTitle>Organic Foods Only</AboutListItemTitle>
                <Text>Simply dummy text of the printing and typesetting industry. Lorem Ipsum</Text>
              </div>
            </AboutListItem>
            <AboutListItem>
              <AboutListItemIcon>
                <img src={qualityIcon} alt="icon"/>
              </AboutListItemIcon>
              <div>
                <AboutListItemTitle>Quality Standards</AboutListItemTitle>
                <Text>Simply dummy text of the printing and typesetting industry. Lorem Ipsum</Text>
              </div>
            </AboutListItem>
          </AboutList>
          <CustomArrowLink
            href="#"
            $marginTop="2.5rem"
            $color="#FFFFFF"
            $backgroundColor={props => props.theme.colors.title}
          >Shop Now</CustomArrowLink>
        </AboutContent>
      </AboutInner>
    </StyledAbout>
  );
}

export default About;