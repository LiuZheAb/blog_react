/*
 *文件名 : index.js
 *作者 : 刘哲
 *创建时间 : 2020/11/2
 *文件描述 : 主体框架文件
 */
import React, { Component } from 'react';
import Header from './Header';
import Calculate from './Calculate';
import './index.less';

export default class App extends Component {
  render() {
    return (
      <div className="main">
        <Header />
        <Calculate />
      </div >
    )
  }
}