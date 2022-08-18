import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  
  to {
    opacity: 0;
  }
`;

export const Wrapper = styled.div`
  display: ${(props) => (props.active ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 150;
`;

export const Backdrop = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 151;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  animation-name: ${(props) => (props.active ? fadeIn : fadeOut)};
  animation-duration: 0.3s;
  animation-fill-mode: forwards;
  overflow: hidden;
`;

export const ModalComponent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: auto;
  background-color: #fff;
  width: ${(props) => (props.fixedWidth ? `${props.maxWidth}px` : 'auto')};
  max-width: ${(props) => props.maxWidth}px;
  min-width: 320px;
  position: relative;
  border-radius: 8px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 15px 0;
`;

export const Title = styled.div`
  font-weight: bold;
  font-size: 18px;
  color: #404b5a;
`;

export const CloseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  color: #d92626;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
  padding: 15px;
`;
