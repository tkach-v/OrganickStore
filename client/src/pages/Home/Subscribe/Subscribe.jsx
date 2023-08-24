import React from 'react';
import styled from "styled-components";
import {Container, Title} from "../../../assets/styles/common";
import {CustomButton} from "../../../components/CustomButtonLink/CustomButtonLink";
import background from "../../../assets/img/subscribe/background.jpg"

const StyledSubscribe = styled(Container)`
  border-radius: 1.66667rem;
  background-image: url("${background}");
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  padding: 5.8rem 3.9rem;
  @media (max-width: ${props => props.theme.breakpoints.large}) {
    gap: 1rem;
    flex-direction: column;
    align-items: start;
    padding-left: ${props => props.theme.container.paddingX};
    padding-right: ${props => props.theme.container.paddingX};
  }
`

const SubscribeTitle = styled(Title)`
  color: #FFFFFF;
  max-width: 500px;
  @media (max-width: ${props => props.theme.breakpoints.large}) {
    max-width: none;
  }
`

const SubscribeForm = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: right;
  gap: 0.33rem;
  @media (max-width: ${props => props.theme.breakpoints.large}) {
    justify-content: start;
  }
  @media (max-width: 450px) {
    flex-direction: column;
    align-items: start;
  }
`

const SubscribeFormInput = styled.input`
  width: 100%;
  max-width: 350px;
  border-radius: 0.88889rem;
  height: 4.5rem;
  padding: 0 1.5rem;
  color: ${props => (props.$color || props.theme.colors.title)};
  font-family: Roboto, sans-serif;
  font-size: 1rem;
  font-style: italic;
  font-weight: 400;

  &::placeholder {
    color: #ABABAB;
  }

  @media (max-width: 450px) {
    max-width: none;
  }
`


function Subscribe(props) {
  return (
    <StyledSubscribe>
      <SubscribeTitle>Subscribe to our Newsletter</SubscribeTitle>
      <SubscribeForm>
        <SubscribeFormInput type="email" required placeholder="Your Email Address" />
        <CustomButton
          type="submit"
          $backgroundColor={props => props.theme.colors.title}
          $color="#FFFFFF"
        >Subscribe</CustomButton>
      </SubscribeForm>
    </StyledSubscribe>
  );
}

export default Subscribe;