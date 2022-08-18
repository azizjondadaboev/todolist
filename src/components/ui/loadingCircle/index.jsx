import { Wrapper } from './components';

const LoadingCircle = ({ color = '#404b5a', size = 16 }) => {
  return (
    <Wrapper color={color} size={size}>
      <div />
      <div />
      <div />
      <div />
    </Wrapper>
  );
};

export default LoadingCircle;
