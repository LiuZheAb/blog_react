import React, { Component } from 'react';
import Directory from "../../Directory";
import { Link } from "react-router-dom";
export default class index extends Component {
    render() {
        return (
            <div className="page-content">
                <div className="article">
                    <div className="article-title">
                        <h1>自定义表单</h1>
                    </div>
                    <div className="article-content">
                        <h2>简介</h2>
                        <p>使用antd v4版本Form组件实现了下列功能，</p>
                        <ul>
                            <li>自定义表单验证</li>
                            <li>自定义表单内容</li>
                            <li>表单数据保存为本地json文件</li>
                            <li>读取json文件并转为dom元素</li>
                            <li>两个表单的数据绑定</li>
                            <li>……其他</li>
                        </ul>
                        <p>详情请点击下方demo地址查看。</p>
                        <Link to="/customform" target="_blank">demo预览</Link>
                    </div>
                </div>
                <Directory />
            </div>
        )
    }
}
