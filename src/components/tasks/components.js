import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  margin: 30px 0;
  gap: 15px;
`;

export const LoadingBlock = styled.div`
  display: flex;
  justify-content: center;
`;

export const EmptyListBlock = styled.div`
  display: flex;
  justify-content: center;
  font-size: 18px;
  font-weight: 600;
  color: #404b5a;
  line-height: 30px;
`;
