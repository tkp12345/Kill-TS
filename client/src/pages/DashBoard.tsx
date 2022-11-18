import React, { useState } from 'react';
import { Navigate } from 'react-router';

const DashBoard = (): JSX.Element => {
  const [loggedIn, setLoggedIn] = useState<boolean>(false);

  return loggedIn ? (
    <div>메인 대시보드</div>
  ) : (
    <Navigate replace to="/signIn" />
  );
};

export default DashBoard;
