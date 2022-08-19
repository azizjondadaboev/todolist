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
  width: 30%;
`;

export const TaskStatus = styled.div`
  display: flex;
  justify-content: center;
  width: 10%;

  & > span {
    color: #fff;
    font-size: 14px;
    padding: 2px 6px;
    border-radius: 4px;
  }

  &.done > span {
    background-color: #39b980;
  }

  &.not_done > span {
    background-color: #d92626;
  }
`;

export const TaskActions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  width: 30%;
`;
