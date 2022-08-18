import styled, { keyframes } from 'styled-components';

const animation = keyframes`
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
`;

export const Wrapper = styled.div`
  display: inline-block;
  position: relative;
  width: ${props => props.size + 4}px;
  height: ${props => props.size + 4}px;

  & div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: ${props => props.size}px;
    height: ${props => props.size}px;
    margin: 2px;
    border: ${props => props.size / 8}px solid ${props => props.color};
    border-radius: 50%;
    animation: ${animation} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: ${props => props.color} transparent transparent transparent;
  }

  & div:nth-child(1) {
    animation-delay: -0.45s;
  }
  & div:nth-child(2) {
    animation-delay: -0.3s;
  }
  & div:nth-child(3) {
    animation-delay: -0.15s;
  }
`;
