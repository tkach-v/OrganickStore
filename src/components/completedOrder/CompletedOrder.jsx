import React from 'react';
import {Title} from "../../styles/common";
import styled from "styled-components";

const StyledCompletedOrder = styled.div`
  text-align: center;
  padding: 5rem 0;
`

const CompletedOrderTitle = styled(Title)`
  padding-bottom: 2rem;
`

const CompletedOrderImage = styled.img`
  width: 100%;
  height: 450px;
  background: #FAFAFA;
  object-fit: cover;
`

function CompletedOrder() {
  return (
    <StyledCompletedOrder>
      <CompletedOrderTitle>Thank you for your order</CompletedOrderTitle>
      <CompletedOrderImage src="./img/completed-order/image.png" alt="" />
    </StyledCompletedOrder>
  );
}

export default CompletedOrder;