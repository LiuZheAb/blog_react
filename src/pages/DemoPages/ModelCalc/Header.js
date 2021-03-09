/*
 *文件名 : Header.js
 *作者 : 刘哲
 *创建时间 : 2020/11/11
 *文件描述 : 页面头部组件
 */
import React, { Component } from 'react';

export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="header-content">
                    <div className="title">地磁模型计算器</div>
                </div>
            </div>
        )
    }
}