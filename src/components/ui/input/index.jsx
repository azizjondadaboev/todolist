import { useEffect, useRef } from 'react';

import {
  InputGroup,
  Label,
  InputBlock,
  InputElement,
  Error,
} from './components';

const Input = ({
  value,
  onChange = () => null,
  onBlur = () => null,
  onClick = () => null,
  onFocus = () => null,
  type = 'text',
  placeholder = null,
  required = false,
  normalize = null,

  label = null,
  borderColor = '#c3d6e8',
  borderRadius = 8,
  boxShadow = false,
  touched = false,
  error = null,
  autoFocus = false,
  overflowHidden = false,
  readOnly = false,
  disabled,
}) => {
  const inputRef = useRef(null);

  useEffect(() => {
    if (autoFocus && inputRef.current) {
      inputRef.current.focus();
    }
  }, [autoFocus]);

  const handleChange = (e) => {
    if (normalize) {
      onChange(normalize(e.target.value));
    } else {
      onChange(e.target.value);
    }
  };

  return (
    <InputGroup>
      <InputBlock
        borderColor={touched && error ? '#d92626' : borderColor}
        borderRadius={borderRadius}
        boxShadow={boxShadow}
      >
        {label && (
          <Label>
            {label} {required && <span>*</span>}
          </Label>
        )}

        <InputElement
          ref={inputRef}
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          type={type}
          onBlur={onBlur}
          onClick={onClick}
          onFocus={onFocus}
          autoFocus={autoFocus}
          disabled={disabled}
          overflowHidden={overflowHidden}
          readOnly={readOnly}
        />
      </InputBlock>
      {touched && error && <Error>{error}</Error>}
    </InputGroup>
  );
};

export default Input;
