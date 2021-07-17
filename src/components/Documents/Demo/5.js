import React, { Component } from 'react';
import Directory from "../../Directory";
import { Link } from "react-router-dom";

export default class index extends Component {
    render() {
        return (
            <div className="page-content">
                <div className="article">
                    <div className="article-title">
                        <h1>重磁计算界面</h1>
                    </div>
                    <div className="article-content">
                        <h2>简介</h2>
                        <p>基于react-amap实现了下列功能：</p>
                        <ul>
                            <li>地图搜索功能</li>
                            <li>根据搜索结果定位经纬度功能；</li>
                            <li>点击地图获取经纬度及地名功能；</li>
                            <li>计算结果展示功能；</li>
                            <li>计算结果缓存功能；</li>
                            <li>查看计算记录功能；</li>
                            <li>其他......</li>
                        </ul>
                        <p>详情请点击下方demo地址查看。</p>
                        <Link to="/demo/5/preview" target="_blank">demo预览</Link>
                    </div>
                </div>
                <Directory />
            </div>
        )
    }
}