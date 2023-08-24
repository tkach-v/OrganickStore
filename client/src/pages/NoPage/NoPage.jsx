import React from 'react';
import styled from "styled-components";
import {Container, Text, Title} from "../../assets/styles/common";
import {CustomArrowLink} from "../../components/CustomButtonLink/CustomButtonLink";
import background from "../../assets/img/no-page/background.jpg"

const StyledError404 = styled.div`
  background-image: url("${background}");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  padding: 10rem 0;
  @media (max-width: ${props => props.theme.breakpoints.medium}) {
    background: #F1EFF0;
    padding: 5rem 0;
  }
`

const Error404Inner = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: end;
  @media (max-width: ${props => props.theme.breakpoints.medium}) {
    align-items: start;
  }
`

const Error404Title = styled(Title)`
  color: #8FA8A8;
  font-size: 14rem;
  @media (max-width: ${props => props.theme.breakpoints.medium}) {
    font-size: 8rem;
  }
`

function NoPage() {
  return (
    <StyledError404>
      <Error404Inner>
        <Error404Title>404</Error404Title>
        <Title>Page not found</Title>
        <Text $marginTop="0.8rem">The page you are looking for doesn't exist or has been moved</Text>
        <CustomArrowLink to="/"
                    $marginTop="1.5rem"
                    $backgroundColor={props => props.theme.colors.title}
                    $color="#FFFFFF"
        >Go to Homepage</CustomArrowLink>
      </Error404Inner>
    </StyledError404>
  );
}

export default NoPage;