import React, { Component } from 'react';
import Directory from "../../Directory";

export default class index extends Component {
    render() {
        return (
            <div className="page-content">
                <div className="article">
                    <div className="article-title">
                        <h1>GoJS 介绍</h1>
                    </div>
                    <div className="article-content">
                        <h2>GoJS 是什么</h2>
                        <h3>纯 JavaScript 库</h3>
                        <ul>
                            <li>实现自定义交互式关系图和复杂的数据可视化</li>
                            <li>复杂部件的模板化</li>
                            <li>定义图形对象属性与模型数据的数据绑定</li>
                        </ul>
                        <h3>完全在浏览器中运行</h3>
                        <ul>
                            <li>不需要与服务器联系</li>
                            <li>没有第三方依赖——与其他库(Angular、React、Node)可交互操作</li>
                        </ul>
                        <h3>一个宝贵的投资</h3>
                        <ul>
                            <li>节省几周或几个月的开发时间</li>
                            <li>预先加载了几十个常见的功能(复制/粘贴/撤消/重做等)</li>
                            <li>自动处理平台/浏览器差异</li>
                        </ul>
                        <h2>GoJS 特性</h2>
                        <ul>
                            <li>基本的 HTML</li>
                            <li>原生 JavaScript</li>
                            <li>直观的拖放和复制粘贴</li>
                            <li>无限制的 Undo 和 Redo</li>
                            <li>有可定制的工具支持鼠标和触摸</li>
                            <li>正交和贝塞尔连线——可“躲避”和“越过”节点</li>
                            <li>图形自动排版</li>
                            <li>缩略图</li>
                        </ul>
                        <h2>如何获得 GoJS</h2>
                        <ul>
                            <li>gojs.net</li>
                        </ul>
                        <ul data-lake-indent="1">
                            <li>数以百计的样品</li>
                            <li>几十个介绍页面</li>
                            <li>完整的 API 文档</li>
                            <li>免费注册试用并获得支持 30 天免费支持</li>
                        </ul>
                        <ul>
                            <li>npm/NuGet/GitHub</li>
                        </ul>
                        <h2>特点总结</h2>
                        <ul>
                            <li>简单</li>
                            <li>灵活</li>
                            <li>可扩展</li>
                            <li>快速</li>
                        </ul>
                    </div>
                </div>
                <Directory />
            </div>
        )
    }
}
