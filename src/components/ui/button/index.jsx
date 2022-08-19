import LoadingCircle from '../loadingCircle';
import { LoadingBackground, StyledButton } from './components';

const Button = ({
  title = '',
  onClick = () => null,
  type = 'button',
  size = 'md', // sizes: sm, md, lg
  fullWidth = false,
  backgroundColor = '#0085ff',
  borderColor = '#0085ff',
  color = '#fff',
  textTransform = 'uppercase',
  borderRadius = 4,

  loading = false,
  loadingColor = '#fff',
  loadingBackgroundColor = '#0085ff',
  loadingSize = 16,
}) => {
  const Loading = () => (
    <LoadingBackground backgroundColor={loadingBackgroundColor}>
      <LoadingCircle color={loadingColor} size={loadingSize} />
    </LoadingBackground>
  );

  return (
    <StyledButton
      onClick={!loading ? onClick : null}
      backgroundColor={backgroundColor}
      borderColor={borderColor}
      color={color}
      type={type}
      fullWidth={fullWidth ? 1 : 0}
      className={size}
      textTransform={textTransform}
      borderRadius={borderRadius}
    >
      {title}
      {loading && <Loading />}
    </StyledButton>
  );
};

export default Button;
