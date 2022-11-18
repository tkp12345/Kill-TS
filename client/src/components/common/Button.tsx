import React from 'react';
import styled from '@emotion/styled';
import { MAIN_COLOR } from './Color';

interface ButtonProps {
  children?: React.ReactChild;
  type?: 'button' | 'submit';
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  backgroundColor?: string;
  margin?: string | number;
}

const StyledButton = styled.button<ButtonProps>`
  font-size: 18px;
  font-weight: 700;
  line-height: 50px;
  display: block;
  width: 100%;
  min-width: 400px;
  height: 50px;
  margin: ${(props) => props.margin};
  cursor: pointer;
  text-align: center;
  color: #fff;
  border: none;
  border-radius: 0;
  background-color: ${(props) => props.backgroundColor};
`;

const Button = ({
  children,
  type = 'button',
  onClick,
  backgroundColor = MAIN_COLOR,
  margin,
}: ButtonProps): JSX.Element => {
  return (
    <StyledButton
      type={type}
      onClick={onClick}
      backgroundColor={backgroundColor}
      margin={margin}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
