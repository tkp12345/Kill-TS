import React, { useState } from 'react';
import styled from '@emotion/styled';
import Button from '../components/common/Button';
import Input from '../components/common/Input';
import { Link } from 'react-router-dom';
import Form from '../components/common/Form';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  height: -webkit-fill-available;
  justify-content: center;
  align-items: center;
  margin: auto;
`;

const SignUp = (): JSX.Element => {
  const [id, setId] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const loginHandler = (): void => {
    console.log('id => ', id);
    console.log('email => ', email);
    console.log('password => ', password);
    console.log('confirmPassword => ', confirmPassword);
  };

  return (
    <Container>
      <Form
        title={'회원가입'}
        onSubmit={(e: React.FormEvent<HTMLFormElement>) => e.preventDefault()}
      >
        <Input
          value={id}
          onChange={(e) => setId(e.target.value)}
          placeholder={'아이디를 입력해주세요.'}
          margin={'0 0 16px 0'}
        />
        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={'이메일을 입력해주세요.'}
          margin={'0 0 16px 0'}
        />
        <Input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder={'비밀번호를 입력해주세요.'}
          margin={'0 0 16px 0'}
        />
        <Input
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder={'비밀번호를 입력해주세요.'}
          margin={'0 0 16px 0'}
        />
        <Button type={'submit'} onClick={loginHandler}>
          회원가입
        </Button>
        <br />
        <Link to={'/signIn'}>로그인</Link>
      </Form>
    </Container>
  );
};

export default SignUp;
