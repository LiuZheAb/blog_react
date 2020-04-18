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
                        <p className="indent-2">FreeCodeCamp是Github上star最多的项目,免费编码学习社区。官方地址:<a href="https://www.freecodecamp.org" target="_blank" rel="noopener noreferrer">https://www.freecodecamp.org</a></p>
                        <p className="indent-2">本文档主要是记录学到的内容。</p>
                    </div>
                </div>
                <Directory />
            </div>
        )
    }
}
