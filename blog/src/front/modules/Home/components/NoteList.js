import React, { useState } from 'react';
import { SketchOutlined, MessageOutlined, HeartOutlined } from '@ant-design/icons';

const NoteList = () => {
  return (<div className='note-list'>
    <ul>
      <li className='list'>
        <div className='content'>
          <a className='title'>webpack--初识</a>
          <p className='abstract'>webpack作为前端工程化实现的重要工具，日常开发尤其是mvvm类框架提供的CLI工具，都离不开对webpack的应用，但这些cli工具都...</p>
          <div className='meta'>
            <span className='jsd-meta'><SketchOutlined />0.5</span>
            <a className='nickname'>三岁就会写BUG</a>
            <a className='comments'><MessageOutlined />0</a>
            <span className='like'><HeartOutlined />5</span>
          </div>
        </div>
        <div className='img'>
          <img src='https://serverless-learn-blog-file.oss-cn-shanghai.aliyuncs.com/art1.png' alt='' />
        </div>
      </li>
      <li className='list'>
        <div className='content'>
          <a className='title'>webpack--初识</a>
          <p className='abstract'>webpack作为前端工程化实现的重要工具，日常开发尤其是mvvm类框架提供的CLI工具，都离不开对webpack的应用，但这些cli工具都...</p>
          <div className='meta'>
            <span className='jsd-meta'><SketchOutlined />0.5</span>
            <a className='nickname'>三岁就会写BUG</a>
            <a className='comments'><MessageOutlined />0</a>
            <span className='like'><HeartOutlined />5</span>
          </div>
        </div>
        <div className='img'>
          <img src='https://serverless-learn-blog-file.oss-cn-shanghai.aliyuncs.com/art1.png' alt='' />
        </div>
      </li>
      <li className='list'>
        <div className='content'>
          <a className='title'>webpack--初识</a>
          <p className='abstract'>webpack作为前端工程化实现的重要工具，日常开发尤其是mvvm类框架提供的CLI工具，都离不开对webpack的应用，但这些cli工具都...</p>
          <div className='meta'>
            <span className='jsd-meta'><SketchOutlined />0.5</span>
            <a className='nickname'>三岁就会写BUG</a>
            <a className='comments'><MessageOutlined />0</a>
            <span className='like'><HeartOutlined />5</span>
          </div>
        </div>
        <div className='img'>
          <img src='https://serverless-learn-blog-file.oss-cn-shanghai.aliyuncs.com/art1.png' alt='' />
        </div>
      </li>
      <li className='list'>
        <div className='content'>
          <a className='title'>webpack--初识</a>
          <p className='abstract'>webpack作为前端工程化实现的重要工具，日常开发尤其是mvvm类框架提供的CLI工具，都离不开对webpack的应用，但这些cli工具都...</p>
          <div className='meta'>
            <span className='jsd-meta'><SketchOutlined />0.5</span>
            <a className='nickname'>三岁就会写BUG</a>
            <a className='comments'><MessageOutlined />0</a>
            <span className='like'><HeartOutlined />5</span>
          </div>
        </div>
        <div className='img'>
          <img src='https://serverless-learn-blog-file.oss-cn-shanghai.aliyuncs.com/art1.png' alt='' />
        </div>
      </li>
      <li className='list'>
        <div className='content'>
          <a className='title'>webpack--初识</a>
          <p className='abstract'>webpack作为前端工程化实现的重要工具，日常开发尤其是mvvm类框架提供的CLI工具，都离不开对webpack的应用，但这些cli工具都...</p>
          <div className='meta'>
            <span className='jsd-meta'><SketchOutlined />0.5</span>
            <a className='nickname'>三岁就会写BUG</a>
            <a className='comments'><MessageOutlined />0</a>
            <span className='like'><HeartOutlined />5</span>
          </div>
        </div>
        <div className='img'>
          <img src='https://serverless-learn-blog-file.oss-cn-shanghai.aliyuncs.com/art1.png' alt='' />
        </div>
      </li>
    </ul>
  </div>)
}

export default NoteList;