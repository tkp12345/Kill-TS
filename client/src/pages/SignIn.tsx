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

const SignIn = (): JSX.Element => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const loginHandler = (): void => {
    console.log('id => ', id);
    console.log('password => ', password);
  };

  return (
    <Container>
      <Form
        title={'로그인'}
        onSubmit={(e: React.FormEvent<HTMLFormElement>) => e.preventDefault()}
      >
        <Input
          value={id}
          onChange={(e) => setId(e.target.value)}
          placeholder={'아이디를 입력해주세요.'}
          margin={'0 0 16px 0'}
        />
        <Input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder={'비밀번호를 입력해주세요.'}
          margin={'0 0 16px 0'}
        />
        <Button type={'submit'} onClick={loginHandler}>
          로그인
        </Button>
        <br />
        <Link to={'/signUp'}>회원가입</Link>
      </Form>
    </Container>
  );
};

export default SignIn;
