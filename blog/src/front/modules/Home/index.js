import React, { useState } from 'react';
import { Row, Col } from 'antd';
import './index.scss';
import Nav from '../../common/Nav';
import NoteList from './components/NoteList';
import DownloadQrbox from './components/DownloadQrbox';
import Recommend from './components/Recommend';
import Board from './components/Board';
import Footer from '../../common/Footer';

const Home = () => {
  return <div className='home'>
    <Nav />
    <div className='container'>
      <Row>
        <Col span={16} className='main'>
          <NoteList />
        </Col>
        <Col span={7} offset={1} className='aside'>
          <Board />
          <DownloadQrbox />
          <Recommend />
        </Col>
      </Row>
    </div>
    <Footer />
  </div>
}

export default Home;