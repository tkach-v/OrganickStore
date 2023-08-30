import styled from "styled-components";
import {Container, Title} from "../../assets/styles/common";
import {Link} from "react-router-dom";

export const StyledFooterTop = styled(Container)`
  display: flex;
  justify-content: center;
  gap: 2.5rem;
  padding-top: 5rem;
  
  @media(max-width: ${props => props.theme.breakpoints.medium}) {
    flex-direction: column;
    align-items: start;
    padding-top: 3rem;
  }
`

export const FooterNavListItem = styled.div`
  padding-bottom: 1rem;
`

export const FooterNavLink = styled(Link)`
  color: ${props => props.theme.colors.text};
  transition: all 0.2s ease-in-out;
  @media (min-width: ${props => props.theme.breakpoints.medium}) {
    &:hover {
      color: #000e0e;
    }
  }
`

export const FooterTitle = styled(Title)`
  font-size: 1.66667rem;
  font-weight: 700;
  padding-bottom: 1.7rem;
`

export const FooterSubtitle = styled.div`
  font-weight: 700;
  padding-bottom: 0.4em;
`

export const FooterContacts = styled.div`
  order: 1;
  text-align: right;
  @media (max-width: ${props => props.theme.breakpoints.medium}) {
    text-align: left;
    order: 2;
  }
`

export const FooterLogoSection = styled.div`
  order: 2;
  text-align: center;
  border-left: 1px solid #D4D4D4;
  border-right: 1px solid #D4D4D4;
  padding: 0 2.3rem;
  @media (max-width: ${props => props.theme.breakpoints.medium}) {
    border: none;
    text-align: left;
    padding: 0;
    order: 1;
  }
`

export const FooterLogoText = styled.div`
  max-width: 500px;
  margin-top: 1.2rem;
  margin-bottom: 2.7rem;
`

export const FooterLogoSocialLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;

  @media (max-width: ${props => props.theme.breakpoints.medium}) {
    justify-content: left;
  }
`

export const FooterLogoSocialLink = styled.a`
  background-color: #EFF6F1;
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  position: relative;
  transition: all 0.2s ease-in-out;
  @media (min-width: ${props => props.theme.breakpoints.medium}) {
    &:hover {
      background-color: #D4E9E4;
    }
  }
`

export const FooterLogoSocialLinkImg = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

export const FooterUtility = styled.div`
  order: 3;
`

export const StyledFooterBottom = styled(Container)`
  color: #525C60;
  text-align: center;
  gap: 2.5rem;
  padding-top: 0.8rem;
  padding-bottom: 0.8rem;
  border-top: 1px solid #D4D4D4;
  margin-top: 5rem;
  @media(max-width: ${props => props.theme.breakpoints.medium}) {
    margin-top: 3rem;
  }
`

export const StyledFooterBottomBold = styled.span`
  font-weight: 700;
`