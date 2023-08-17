import styled from "styled-components";

export const Container = styled.div`
  max-width: ${props => props.theme.container.maxWidth};
  padding: 0 ${props => props.theme.container.paddingX};
  margin: 0 auto;
`;

export const Subtitle = styled.div`
  font-family: Yellowtail, cursive;
  font-size: 2rem;
  font-weight: 400;
  color: ${props => props.$color || '#68A47F'};
  padding-bottom: 0.44rem;
`

export const Title = styled.div`
  color: ${props => (props.$color || props.theme.colors.title)};
  font-family: Roboto, sans-serif;
  font-size: ${props => (props.$fontSize || '3.88889rem')};
  font-weight: 800;

  @media (max-width: ${props => props.theme.breakpoints.medium}) {
    font-size: ${props => (props.$fontSize || '2rem')};
  }
`

export const Text = styled.div`
  line-height: 1.654em;
  margin-top: ${props => props.$marginTop};
  margin-bottom: ${props => props.$marginBottom};
`

export const Button = styled.button`
  margin-top: ${props => props.$marginTop};
  margin-bottom: ${props => props.$marginBottom};
  margin-left: ${props => props.$marginLeft};
  margin-right: ${props => props.$marginRight};
  color: ${props => (props.$color || props.theme.colors.title)};
  background-color: ${props => (props.$backgroundColor || '#EFD372')};
  padding: ${props => (props.$paddingY || '1.6rem')} ${props => (props.$paddingX || '2.2rem')};
  border: ${props => (props.$border || 'none')};
  font-family: Roboto, sans-serif;
  font-size: 1.11111rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border-radius: 0.88rem;
  transition: all 0.2s ease-in-out;
  @media (min-width: ${props => props.theme.breakpoints.medium}) {
    &:hover {
      scale: 1.1;
    }
  }
`

export const ButtonArrow = styled.div`
  background-color: #335B6B;
  border-radius: 50%;
  height: 20px;
  width: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const CorrectedImage = styled.img`
  width: 100%;
  height: auto;
  mix-blend-mode: multiply;
`