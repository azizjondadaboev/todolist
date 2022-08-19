import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 15px 0;
  border-bottom: 1px solid #0000001f;

  &:nth-last-of-type(1) {
    margin-bottom: 0;
    border-bottom: none;
  }
`;

export const TaskName = styled.div`
  width: 20%;
`;

export const TaskDescription = styled.div`
  width: 35%;
`;

export const TaskStatus = styled.div`
  width: 10%;
`;

export const TaskActions = styled.div`
  display: flex;
  gap: 10px;
  width: 26%;
`;
