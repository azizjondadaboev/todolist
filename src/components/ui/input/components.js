import styled from 'styled-components';

export const InputGroup = styled.div`
  width: 100%;
`;

export const InputBlock = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px 16px;
  border-radius: ${props => props.borderRadius}px;
  border: ${props => (props.boxShadow ? 'none' : `1px solid ${props.borderColor}`)};
  background-color: #fff;
  box-shadow: ${props => (props.boxShadow ? '0px 0px 10px #00000033' : 'none')};
`;

export const Label = styled.label`
  font-size: 12px;
  color: #9da8ae;
  display: block;
  margin-bottom: 8px;

  & > span {
    color: #d92626;
  }
`;

export const InputElement = styled.input`
  font-size: 16px;
  border: none;
  line-height: 1;
  background-color: transparent;
  flex-grow: 1;
  overflow: ${props => (props.overflowHidden ? 'hidden' : 'auto')};
  padding: 0;

  &:hover,
  &:active,
  &:focus {
    outline: none;
  }
`;

export const Error = styled.div`
  color: #d92626;
  font-size: 14px;
  margin-top: 4px;
`;
