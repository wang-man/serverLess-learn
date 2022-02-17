import React from 'react'
import { AuthingGuard } from '@authing/react-ui-components';
import { setLoginData } from '../util/login';

import '@authing/react-ui-components/lib/index.min.css'

const Login = () => {
  const appId = '61594a7fe2c7753c9b4da6cd'
  const onLogin = (userInfo) => {
    const { token, tokenExpiredAt, photo } = userInfo;
    setLoginData(token, tokenExpiredAt, photo);
    window.location.reload();
  }
  return <AuthingGuard appId={appId} onLogin={onLogin} />
}

export default Login;