import React, { useState } from 'react';
import { CompassOutlined, TeamOutlined, TrophyOutlined, BellOutlined, CaretDownOutlined, ReadOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import './index.scss';

const Nav = ({ children }) => {
  return <div className='navbar'>
    <div className='nav-content'>
      <div className='logo'>
        <img src='https://serverless-learn-blog-file.oss-cn-shanghai.aliyuncs.com/logo.png' alt='logo' />
      </div >
      <div className='container'>
        <ul className="navbar-nav">
          <li className='tab'><a className='active'><CompassOutlined />发现</a></li>
          <li className='tab'><a><TeamOutlined />IT技术</a></li>
          <li className='tab'><a><TrophyOutlined />关注</a></li>
          <li className='tab'><a><BellOutlined />消息</a></li>
        </ul>
      </div>
      <div className='user'>
        <div className='author'>
          <img src='https://serverless-learn-blog-file.oss-cn-shanghai.aliyuncs.com/me.jpg' alt='logo' />
          <CaretDownOutlined />
        </div>
        <div className='write'>
          <Button danger type="primary" danger shape="round" icon={<ReadOutlined />} size='large'>写文章</Button >
        </div>
      </div>
    </div>
  </div>
}

export default Nav;