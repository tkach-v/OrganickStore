import React from 'react';
import styled from "styled-components";

const StyledModal = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s;
  opacity: ${props => ((props.$active) ? "1" : "0")};
  pointer-events: ${props => ((props.$active) ? "all" : "none")};
`

const ModalContext = styled.div`
  padding: 20px;
  border-radius: 12px;
  background-color: #FFFFFF;
  position: relative;
`

function Modal({active, setActive}) {
  return (
    <StyledModal onClick={() => setActive(false)} $active={active}>
      <ModalContext onClick={e => e.stopPropagation()}>
        dsfdsfsdf
      </ModalContext>
    </StyledModal>
  );
}

export default Modal;