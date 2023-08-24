import React, {useEffect} from 'react';
import {Title} from "../../assets/styles/common";
import styled from "styled-components";
import {useNavigate} from "react-router-dom";
import image from "../../assets/img/completed-order/image.png"

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
  const navigate = useNavigate();

  useEffect(() => {
    const redirectTimer = setTimeout(() => {
      window.scrollTo(0, 0);
      navigate("/");
    }, 5000);

    return () => clearTimeout(redirectTimer);
  }, [navigate]);
  return (
    <StyledCompletedOrder>
      <CompletedOrderTitle>Thank you for your order</CompletedOrderTitle>
      <CompletedOrderImage src={image} alt="" />
    </StyledCompletedOrder>
  );
}

export default CompletedOrder;