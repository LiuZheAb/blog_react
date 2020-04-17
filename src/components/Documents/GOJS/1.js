import React, { Component } from 'react';
import Directory from "../../Directory";

export default class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articleTree: []
        };
        this.getArticleTree = this.getArticleTree.bind(this);
    }
    getArticleTree() {
        let childrens = document.getElementsByClassName("article-content")[0].children;
        let articleTree = [];
        for (let i = 0; i < childrens.length ; i++) {
            let nodeName = childrens[i].nodeName;
            if (nodeName === "H2" || nodeName === "H3") {
                childrens[i].id = childrens[i].innerText;
                articleTree.push({
                    name: childrens[i].innerText,
                    tag: childrens[i].nodeName
                });
            }
        }
        this.setState({ articleTree });
    }
    componentDidMount() {
        this.getArticleTree();
    }
    render() {
        return (
            <div className="page-content">
                <div className="article">
                     <div className="article-title">
                        <h1>GoJS介绍</h1>
                    </div>
                    <div className="article-content">
                        <h2>GoJS是什么</h2>
                        <h3>纯JavaScript库</h3>
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
                        <h2>GoJS特性</h2>
                        <ul>
                            <li>基本的HTML</li>
                            <li>原生JavaScript</li>
                            <li>直观的拖放和复制粘贴</li>
                            <li>无限制的Undo和Redo</li>
                            <li>有可定制的工具支持鼠标和触摸</li>
                            <li>正交和贝塞尔连线——可“躲避”和“越过”节点</li>
                            <li>图形自动排版</li>
                            <li>缩略图</li>
                        </ul>
                        <h2>如何获得GoJS</h2>
                        <ul>
                            <li>gojs.net</li>
                        </ul>
                        <ul data-lake-indent="1">
                            <li>数以百计的样品</li>
                            <li>几十个介绍页面</li>
                            <li>完整的API文档</li>
                            <li>免费注册试用并获得支持30天免费支持</li>
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
                <div className="directory">
                    <Directory articleTree={this.state.articleTree}></Directory>
                </div>
            </div>
        )
    }
}
