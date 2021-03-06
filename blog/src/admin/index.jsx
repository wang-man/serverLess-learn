import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import { initAuthClient, getAuthClient } from '@authing/react-ui-components'
import request from '../common/request';
import { useSchemaData } from './hook/useSchemaData';
import { parseJsonByString } from '../common/utils';
import { getLoginStatus } from './util/login';
import store from './store';
import { cleanLoginData } from './util/login';
import HomeManagement from './container/HomeManagement';
import BasicSetting from './container/BasicSetting';
import Login from './container/Login';
import styles from './style.module.scss';

import 'normalize.css';
import './style.scss';

const { Header, Sider, Content } = Layout;

initAuthClient({
  appId: '6216384893f54146ce8ea0ef',
})

const useCollapsed = () => {
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => { setCollapsed(!collapsed) };
  return { collapsed, toggleCollapsed }
}

const Wrapper = () => {
  const handleHomePageRedirect = () => { window.location.href = "http://blogrouterservice-home.serverless-blog.1110945173298580.cn-hangzhou.fc.devsapp.net/" }
  const { collapsed, toggleCollapsed } = useCollapsed();
  const { changeSchema } = useSchemaData();
  const login = getLoginStatus();
  const photo = window.localStorage.photo;

  useEffect(() => {
    request.get('http://bloghttpservice-get.serverless-blog.1110945173298580.cn-hangzhou.fc.devsapp.net/api/schema/getLast').then((response) => {
      const data = response?.data;
      data && changeSchema(parseJsonByString(data.schema, {}));
    });
  }, []);

  const handleLogout = () => {
    getAuthClient().logout();
    cleanLoginData();
    window.location.reload();
  }

  return login ? (
    <Router>
      <Layout>
        <Sider className={styles.sidebar} trigger={null} collapsible collapsed={collapsed}>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['admin-home']}>
            <Menu.Item key="admin-home">
              <Link to="/">
                <span className="iconfont">&#xe64d;</span>??????????????????
              </Link>
            </Menu.Item>
            <Menu.Item key="admin-setting">
              <Link to="/setting">
                <span className="iconfont">&#xe64d;</span>??????????????????
              </Link>
            </Menu.Item>
            <Menu.Item key="admin-back" onClick={handleHomePageRedirect}>
              <span className="iconfont">&#xe601;</span>??????????????????
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header className={styles.header}>
            {
              collapsed
                ? <span className='iconfont' onClick={toggleCollapsed}>&#xe62c;</span>
                : <span className='iconfont' onClick={toggleCollapsed}>&#xe629;</span>
            }
            <img className={styles.avatar} src={photo} alt='avatar' onClick={handleLogout} />
          </Header>
          <Content className={styles.content}>
            <Routes>
              <Route path='/' element={<HomeManagement />} exact />
              <Route path='/setting' element={<BasicSetting />} exact />
            </Routes>
          </Content>
        </Layout>
      </Layout>
    </Router>
  ) : <Login />
}

ReactDOM.render(
  <Provider store={store}>
    <Wrapper />
  </Provider>,
  document.getElementById('root')
);
