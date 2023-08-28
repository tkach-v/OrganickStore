import styled, {css} from "styled-components";
import {Link} from "react-router-dom";

export const ButtonStyles = css`
  margin-top: ${props => props.$marginTop};
  margin-bottom: ${props => props.$marginBottom};
  color: ${props => (props.$color || props.theme.colors.title)};
  background-color: ${props => (props.$backgroundColor || '#EFD372')};
  padding: ${props => (props.$paddingY || '1.6rem')} ${props => (props.$paddingX || '2.2rem')};
  border: ${props => (props.$border || 'none')};
  font-family: Roboto, sans-serif;
  font-size: 1.11111rem;
  font-weight: 700;
  display: inline-block;
  border-radius: 0.88rem;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  @media (min-width: ${props => props.theme.breakpoints.medium}) {
    &:hover {
      scale: 1.1;
    }
  }
`

export const LinkContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`

export const StyledLink = styled(Link)`
  ${ButtonStyles}
`

export const StyledButton = styled.button`
  ${ButtonStyles}
`

export const Arrow = styled.div`
  background-color: #335B6B;
  border-radius: 50%;
  height: 20px;
  width: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`
