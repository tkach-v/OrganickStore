import styled, {css} from "styled-components";

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

const ButtonStyles = css`
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

const StyledLink = styled.a`
  ${ButtonStyles}
`

const LinkContent = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

export function Link({children, href, ...props}) {
  return (
    <StyledLink href={href} {...props}>
      <LinkContent>
        {children}
      </LinkContent>
    </StyledLink>
  );
}

const StyledButton = styled.button`
  ${ButtonStyles}
`

export function Button({children, type, ...props}) {
  return (
    <StyledButton type={type} {...props}>
      <LinkContent>
        {children}
      </LinkContent>
    </StyledButton>
  );
}

export const LinkArrow = styled.div`
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