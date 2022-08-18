import styled from 'styled-components';

export const Wrapper = styled.header`
  width: 100%;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 100;
  background-color: #f6f9ff;
  height: 80px;
  max-height: 80px;

  @media (max-width: 599px) {
    max-height: 80px;
  }
`;

export const InnerBlock = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

export const LogoLink = styled.a`
  font-size: 24px;
  font-weight: bold;
  color: #0085ff;
  text-decoration: none;
`;
