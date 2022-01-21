import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import './index.scss';
const { Header, Sider, Content } = Layout;

const Home = () => {
  const [collapsed, toggleCollapsed] = useState(false);
  const tiggerToggle = () => toggleCollapsed(!collapsed);
  const collapsedIconprops = {
    className: 'trigger',
    onClick: tiggerToggle,
  }
  return (
    <Layout className='home-layout-wrap'>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" >
          <img src='https://pica.zhimg.com/v2-3ef06740a8071837f78f3da27cbe034e_1440w.jpg?source=172ae18b' alt='logo' />
        </div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1" icon={<UserOutlined />}>
            nav 1
          </Menu.Item>
          <Menu.Item key="2" icon={<VideoCameraOutlined />}>
            nav 2
          </Menu.Item>
          <Menu.Item key="3" icon={<UploadOutlined />}>
            nav 3
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          {collapsed ? <MenuUnfoldOutlined {...collapsedIconprops} /> : <MenuFoldOutlined {...collapsedIconprops} />}
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
          }}
        >
          Content
        </Content>
      </Layout>
    </Layout>
  );
}

export default Home;