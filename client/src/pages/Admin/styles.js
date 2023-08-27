import {Container} from "../../assets/styles/common";
import styled, {css} from "styled-components";

export const StyledAdmin = styled(Container)`
  text-align: center;
  padding-top: 2rem;
  padding-bottom: 2rem;
  max-width: 1600px;
`

export const AdminTable = styled.table`
  border-collapse: collapse;
  width: 100%;
  margin-top: 2rem;
  font-family: Roboto, sans-serif;
`

const AdminTableCell = css`
  border: 2px solid ${props => props.theme.colors.title};
  padding: 0.8rem 5px;
`

export const AdminTableTh = styled.th`
  color: ${props => props.theme.colors.title};
  font-weight: 800;
  font-size: 1.2rem;
  ${AdminTableCell}
`

export const AdminTableTd = styled.td`
  ${AdminTableCell}
`