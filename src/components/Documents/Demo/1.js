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
                        <p>使用react-dnd拖放库实现了下列功能，</p>
                        <ul>
                            <li>表单控件拖拽生成</li>
                            <li>自定义表单控件样式及内容</li>
                            <li>表单控件自由摆放</li>
                            <li>拖拽生成的表单保存为本地json文件</li>
                            <li>读取json文件并转为dom元素</li>
                            <li>……其他</li>
                        </ul>
                        <p>详情请点击下方demo地址查看。</p>
                        <Link to="/webide" target="_blank">demo预览</Link>
                        <p>PC端浏览体验最佳，移动端建议横屏浏览。</p>
                    </div>
                </div>
                <Directory />
            </div>
        )
    }
}