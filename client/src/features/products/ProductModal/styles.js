import styled from "styled-components";
import {Text, Title, ProductCategory} from "../../../assets/styles/common";

export const StyledModal = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  background-color: rgba(244, 244, 244, 0.82);
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  transition: 0.3s;
  overflow-y: auto;
  padding: 5rem 0;
  @media (max-width: ${props => props.theme.breakpoints.medium}) {
    padding: 3rem 0;
  }
`

export const ModalInner = styled.div`
  margin: auto;
  width: 100%;
  padding: 5rem 0;
  background: #FFFAFA;
  position: relative;
  @media (max-width: ${props => props.theme.breakpoints.medium}) {
    padding: 3rem 0;
  }
`

export const ModalCloseButtonContainer = styled.div`
  position: absolute;
  z-index: 1;
  top: 0;
  right: 0;
  padding-right: 15px;
`

export const ModalShortInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 4rem;
  @media (max-width: ${props => props.theme.breakpoints.medium}) {
    flex-direction: column;
    gap: 2rem;
  }
`

export const ModalImageContainer = styled.div`
  position: relative;
  border-radius: 1.66667rem;
  background: #F9F8F8;
  padding: 10px;
  width: calc(50% - 4rem);
  @media (max-width: ${props => props.theme.breakpoints.medium}) {
    width: 100%;
  }
`

export const ModalProductCategory = styled(ProductCategory)`
  position: absolute;
  left: 1.6rem;
  top: 1.6rem;
`

export const ModalShortInfoContent = styled.div`
  width: 50%;
  text-align: left;
  @media (max-width: ${props => props.theme.breakpoints.medium}) {
    width: 100%;
  }
`

export const ModalProductTitle = styled(Title)`
  font-size: 2.22222rem;
  font-weight: 600;
  padding-bottom: 0.5rem;
`

export const ModalMoreInfo = styled.div`
  margin-top: 4rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: ${props => props.theme.breakpoints.medium}) {
    text-align: left;
    align-items: start;
    margin-top: 2rem;
  }
`

export const ModalMoreInfoButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  @media (max-width: 600px) {
    width: 100%;
    flex-direction: column;
  }
`

export const ModalMoreInfoText = styled(Text)`
  margin-top: 1.5rem;
  max-width: 1100px;
`