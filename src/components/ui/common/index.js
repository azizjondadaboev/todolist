import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 15px;
  height: ${(props) => props.height || 'auto'};

  &.wrap {
    flex-wrap: wrap;
  }

  @media screen and (max-width: 1279px) {
    max-width: 960px;
  }

  @media screen and (max-width: 959px) {
    max-width: 600px;
  }

  @media screen and (max-width: 599px) {
    max-width: 100%;
  }
`;
