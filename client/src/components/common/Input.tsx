import React, { Ref } from 'react';
import styled from '@emotion/styled';

interface InputProps {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  ref?: Ref<HTMLInputElement>;
  margin?: string | number;
}

const StyledInput = styled.input<InputProps>`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 40px;
  margin: 0;
  padding: 4px 16px;
  border: solid 1px #dadada;
  background: #fff;
  box-sizing: border-box;
  margin: ${(props) => props.margin};
`;

const Input = ({
  value,
  onChange,
  placeholder,
  ref,
  margin,
}: InputProps): JSX.Element => {
  return (
    <StyledInput
      ref={ref}
      type={'text'}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      margin={margin}
    />
  );
};

export default Input;
