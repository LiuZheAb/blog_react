import React, { Component } from 'react';
import Directory from "../../Directory";

export default class index extends Component {
    render() {
        return (
            <div className="page-content">
                <div className="article">
                    <div className="article-title">
                        <h1>垂直行业搜索系统</h1>
                    </div>
                    <div className="article-content">
                        <h2>简介</h2>
                        <p>使用React Amap + SandDance + SearchKit实现了下列功能，</p>
                        <ul>
                            <li>对搜索引擎返回的结果进行展示</li>
                            <li>完成PC端、移动端多尺寸的适配</li>
                            <li>SandDance地震数据可视化</li>
                            <li>……其他</li>
                        </ul>
                        <h2>搜索界面概览</h2>
                        <img src={require("../../../assets/images/search1.png")} alt="block" />
                        <img src={require("../../../assets/images/search2.png")} alt="block" />
                        <img src={require("../../../assets/images/search3.png")} alt="block" />
                        <h2>地震报告预览</h2>
                        <img src={require("../../../assets/images/search4.png")} alt="block" />
                        <img src={require("../../../assets/images/search5.png")} alt="block" />
                        <h2>SandDance地震数据可视化</h2>
                        <img src={require("../../../assets/images/search6.png")} alt="block" />
                        <img src={require("../../../assets/images/search7.png")} alt="block" />
                        <h2>视频展示</h2>
                        <video src={require("../../../assets/videos/search.mp4")} controls="controls"></video>
                        <video src={require("../../../assets/videos/mobile.mp4")} controls="controls"></video>
                    </div>
                </div>
                <Directory />
            </div>
        )
    }
}