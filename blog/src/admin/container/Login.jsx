import React from 'react'
import { AuthingGuard } from '@authing/react-ui-components';
import { setLoginData } from '../util/login';

import '@authing/react-ui-components/lib/index.min.css'

const Login = () => {
  const appId = '6216384893f54146ce8ea0ef'
  const onLogin = (userInfo) => {
    const { token, tokenExpiredAt, photo } = userInfo;
    window.localStorage.setItem('userInfo', JSON.stringify(userInfo))
    setLoginData(token, tokenExpiredAt, photo);
    window.location.reload();
  }
  return <AuthingGuard appId={appId} onLogin={onLogin} />
}

export default Login;