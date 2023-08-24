import React from 'react';
import styled from "styled-components";
import {Container, Subtitle, Text, Title} from "../../../assets/styles/common";
import customerPhoto from "../../../assets/img/home/testimonials/customer-photo.jpg"
import stars from "../../../assets/img/common/stars.svg"

const StyledTestimonials = styled.div`
  background-image: url("../../img/testimonials/background.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  padding: 9rem 0;
  display: flex;
  @media (max-width: ${props => props.theme.breakpoints.medium}) {
    padding: 3rem 0;
  }
`

const TestimonialsInner = styled(Container)`
  text-align: center;
`

const TestimonialReview = styled.div`
  max-width: 780px;
  margin: 2.8rem auto 5.5rem auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: ${props => props.theme.breakpoints.medium}) {
    margin-bottom: 2.5rem;
  }
`

const TestimonialReviewImg = styled.img`
  border-radius: 50%;
  width: 115px;
  height: 115px;
  margin-bottom: 1rem;
`

const TestimonialsPersonName = styled(Title)`
  font-size: 1.38889rem;
  font-weight: 600;
`

const TestimonialsPersonRole = styled(Text)`
  font-size: 0.83333rem;
  margin-bottom: 1rem;
`

const TestimonialsDots = styled.div`
  display: flex;
  gap: 0.3rem;
`

const TestimonialsDot = styled.div`
  border-radius: 50%;
  background: #C4C4C4;
  width: 8px;
  height: 8px;
`

const TestimonialsDotColorize = styled(TestimonialsDot)`
  background: #7EB693;
`

const TestimonialsLine = styled.div`
  border-top: 1px solid #E0E0E0;
`

const TestimonialsCounters = styled.div`
  margin-top: 5.5rem;
  display: flex;
  gap: 2rem;
  justify-content: center;
  flex-wrap: wrap;
  @media (max-width: ${props => props.theme.breakpoints.medium}) {
    margin-top: 2.5rem;
    gap: 1rem;
  }
`

const TestimonialsCounter = styled.div`
  border-radius: 50%;
  border: 4px solid #7EB693;
`

const TestimonialsCounterInner = styled.div`
  border-radius: 50%;
  border: 4px solid #FFFFFF;
  background: #F1F1F1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 12rem;
  width: 12rem;
  @media (max-width: ${props => props.theme.breakpoints.medium}) {
    height: 8rem;
    width: 8rem;
  }
`

const TestimonialsCounterText = styled(Text)`
  color: #274C5B;
  font-weight: 600;
`

function Testimonials() {
  return (
    <StyledTestimonials>
      <TestimonialsInner>
        <Subtitle>Testimonial</Subtitle>
        <Title>What Our Customer Saying?</Title>
        <TestimonialReview>
          <TestimonialReviewImg src={customerPhoto} alt="Client" />
          <img src={stars} alt="5 stars"/>
          <Text $marginTop="1.3rem" $marginBottom="1.1rem">Simply dummy text of the printing and typesetting industry. Lorem Ipsum simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.</Text>
          <TestimonialsPersonName>Sara Taylor</TestimonialsPersonName>
          <TestimonialsPersonRole>Consumer</TestimonialsPersonRole>
          <TestimonialsDots>
            <TestimonialsDot/>
            <TestimonialsDotColorize/>
            <TestimonialsDot/>
          </TestimonialsDots>
        </TestimonialReview>
        <TestimonialsLine/>
        <TestimonialsCounters>
          <TestimonialsCounter>
            <TestimonialsCounterInner>
              <Title>100%</Title>
              <TestimonialsCounterText>Organic</TestimonialsCounterText>
            </TestimonialsCounterInner>
          </TestimonialsCounter>
          <TestimonialsCounter>
            <TestimonialsCounterInner>
              <Title>285</Title>
              <TestimonialsCounterText>Active Product</TestimonialsCounterText>
            </TestimonialsCounterInner>
          </TestimonialsCounter>
          <TestimonialsCounter>
            <TestimonialsCounterInner>
              <Title>350+</Title>
              <TestimonialsCounterText>Organic Orchads</TestimonialsCounterText>
            </TestimonialsCounterInner>
          </TestimonialsCounter>
          <TestimonialsCounter>
            <TestimonialsCounterInner>
              <Title>25+</Title>
              <TestimonialsCounterText>Years of Farming</TestimonialsCounterText>
            </TestimonialsCounterInner>
          </TestimonialsCounter>
        </TestimonialsCounters>
      </TestimonialsInner>
    </StyledTestimonials>
  );
}

export default Testimonials;