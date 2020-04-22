import React, { Component } from 'react';
import Directory from "../../Directory";

export default class index extends Component {
    render() {
        return (
            <div className="page-content">
                <div className="article">
                    <div className="article-title">
                        <h1>简介</h1>
                    </div>
                    <div className="article-content">
                        <h2>写在前面</h2>
                        <p className="indent-2">FreeCodeCamp 是 Github 上 star 最多的项目,免费编码学习社区。官方地址: <a href="https://www.freecodecamp.org" target="_blank" rel="noopener noreferrer">https://www.freecodecamp.org</a></p>
                        <p className="indent-2">本文档主要是记录学到的内容。</p>
                        <h2>案例</h2>
                        <ul>
                            <li><a href="https://www.freecodecamp.org/learn/responsive-web-design/applied-visual-design/create-a-graphic-using-css" target="_blank" rel="noopener noreferrer">月牙形状</a></li>
                            <li><a href="https://www.freecodecamp.org/learn/responsive-web-design/applied-visual-design/create-a-more-complex-shape-using-css-and-html" target="_blank" rel="noopener noreferrer">心形</a></li>
                            <li><a href="https://www.freecodecamp.org/learn/responsive-web-design/applied-visual-design/make-a-css-heartbeat-using-an-infinite-animation-count" target="_blank" rel="noopener noreferrer">心跳</a></li>
                        </ul>
                    </div>
                </div>
                <Directory />
            </div>
        )
    }
}
