import styled from "styled-components";
import {Container, Title} from "../../../assets/styles/common";
import {CustomArrowButton} from "../../../components/CustomButtonLink/CustomButtonLink";

export const StyledNews = styled(Container)`
  padding-top: 9rem;
  padding-bottom: 9rem;
  @media (max-width: ${props => props.theme.breakpoints.medium}) {
    padding-top: 3rem;
    padding-bottom: 3rem;
  }
`

export const NewsHeader = styled.div`
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 2rem;
  padding-bottom: 2.5rem;
  @media (max-width: ${props => props.theme.breakpoints.medium}) {
    flex-direction: column;
    align-items: start;
    gap: 1rem;
  }
`

export const NewsHeaderTitleBlock = styled.div`
  max-width: 970px;
`

export const NewsHeaderButton = styled(CustomArrowButton)`
  border: 2px solid #274C5B;
  background: #FFFFFF;
  min-width: 213px;
`

export const NewsContent = styled.div`
  display: flex;
  gap: 2.5rem;
  @media (max-width: ${props => props.theme.breakpoints.medium}) {
    flex-direction: column;
    gap: 1rem;
  }
`

export const StyledNewsItem = styled.div`
  width: 100%;
  position: relative;
  padding-bottom: 3rem;
  @media (max-width: ${props => props.theme.breakpoints.medium}) {
    padding-bottom: 5rem;
  }
  @media (max-width: 768px) {
    padding-bottom: 0;
  }
`

export const NewsItemImage = styled.img`
  border-radius: 1.66667rem;
  width: 100%;
  height: 100%;
  object-fit: cover;
  @media (max-width: 768px) {
    display: none;
  }
`

export const NewsItemDate = styled(Title)`
  width: 82px;
  height: 82px;
  background: #FFFFFF;
  border-radius: 50%;
  text-align: center;
  position: absolute;
  top: 2.5rem;
  left: 2rem;
  font-size: 1.11111rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 768px) {
    display: none;
  }
`

export const NewsItemInfo = styled.div`
  width: calc(100% - 4rem);
  border-radius: 1.8rem;
  background: #FFFFFF;
  box-shadow: 0 20px 35px 0 rgba(167, 167, 167, 0.25);
  padding: 2.56rem 3rem 3.3rem 3rem;
  position: absolute;
  z-index: 1;
  top: calc(55% - 3rem);
  left: 2rem;
  @media (max-width: ${props => props.theme.breakpoints.medium}) {
    top: calc(55% - 5rem);
  }
  @media (max-width: 768px) {
    position: relative;
    width: 100%;
    left: 0;
    top: 0;
  }
  @media (max-width: 500px) {
    padding: 1.5rem;
  }
`

export const NewsItemInfoAuthor = styled(Title)`
  display: flex;
  align-items: center;
  gap: 0.44rem;
  font-size: 1rem;
  font-weight: 400;
`