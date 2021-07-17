import React, { Component } from 'react';
import Directory from "../../Directory";
import { Link } from "react-router-dom";

export default class index extends Component {
    render() {
        return (
            <div className="page-content">
                <div className="article">
                    <div className="article-title">
                        <h1>可视化数据操作Demo</h1>
                    </div>
                    <div className="article-content">
                        <h2>简介</h2>
                        <p>基于echarts实现了下列功能：</p>
                        <ul>
                            <li>读取json文件并处理数据；</li>
                            <li>根据数据绘制热力图、线图（紫线为白线插值结果）；</li>
                            <li>通过鼠标在图表上拖动，可修改白线；</li>
                            <li>在图表上Ctrl+左键单机可截断鼠标对应横坐标左侧的白线，Shift+左键单机截断右侧；</li>
                            <li>修改白线后实时插值生成紫线数据并绘制；</li>
                            <li>实时根据紫线生成右侧黑线图；</li>
                            <li>下载插值结果文件；</li>
                            <li>其他......</li>
                        </ul>
                        <p>详情请点击下方demo地址查看。</p>
                        <Link to="/demo/3/preview" target="_blank">demo预览</Link>
                        <p>PC端浏览体验最佳，移动端建议横屏浏览。</p>
                    </div>
                </div>
                <Directory />
            </div>
        )
    }
}