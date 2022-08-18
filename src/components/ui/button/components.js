import styled from 'styled-components';

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 600;
  color: ${props => props.color};
  width: ${props => (props.fullWidth ? '100%' : 'auto')};
  border-radius: 4px;
  position: relative;
  line-height: 18px;
  text-transform: ${props => props.textTransform};
  background-color: ${props => props.backgroundColor};
  border: 1px solid ${props => props.borderColor};

  &:hover {
    cursor: pointer;
  }

  &:hover,
  &:focus {
    outline: none;
  }

  &.sm {
    padding: 5px 10px;
  }

  &.md {
    padding: 10px 15px;
  }

  &.lg {
    padding: 15px 20px;
  }
`;

export const LoadingBackground = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  border-radius: 4px;
  background-color: ${props => props.backgroundColor};
`;
