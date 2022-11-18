import React from 'react';
import styled from '@emotion/styled';

interface FormProps {
  children?: React.ReactNode;
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
  title?: string;
}

const StyledForm = styled.form<FormProps>`
  // display: flex;
  // flex-direction: column;
  // width: 400px;
  // height: -webkit-fill-available;
  // justify-content: center;
  // align-items: center;
  // margin: auto;
`;

const Form = ({ children, title, onSubmit }: FormProps): JSX.Element => {
  return (
    <StyledForm onSubmit={onSubmit}>
      <h2>{title}</h2>
      <br />
      {children}
    </StyledForm>
  );
};

export default Form;
