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
  color: ${props => props.color || '#68A47F'};
`

export const Title = styled.div`
  color: ${props => props.theme.colors.title};
  font-family: Roboto, sans-serif;
  font-size: 3.88889rem;
  font-weight: 800;
`

export const Button = styled.div`
  color: #68A47F;
  font-family: Yellowtail, sans-serif;
  font-size: 2rem;
  font-weight: 400;
`