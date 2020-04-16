import React, { Component } from 'react';
import Directory from "../../../Directory";
import { List, Card } from 'antd';
import go from "gojs";
const { Meta } = Card;

const data = [
    {
        name: '最简单的例子',
        url: 'minimal.html',
        overview: 'minimal.png',
    }, {
        name: '流程图',
        url: 'flowchart.html',
        overview: 'flowchart.png',
    }, {
        name: '思维导图',
        url: 'mindMap.html',
        overview: 'mindMap.png',
    }, {
        name: '逻辑电路',
        url: 'logicCircuit.html',
        overview: 'logicCircuit.png',
    }, {
        name: '比赛流程图',
        url: 'tournament.html',
        overview: 'tournament.png',
    }, {
        name: '甘特图',
        url: 'gantt.html',
        overview: 'gantt.png',
    }, {
        name: '树形控件',
        url: 'treeView.html',
        overview: 'treeView.png',
    }, {
        name: '树映射器',
        url: 'treeMapper.html',
        overview: 'treeMapper.png',
    }, {
        name: 'DOM 树',
        url: 'DOMTree.html',
        overview: 'DOMTree.png',
    }, {
        name: '仪表控件',
        url: 'controlGauges.html',
        overview: 'controlGauges.png',
    }, {
        name: '词云',
        url: 'wordcloud.html',
        overview: 'wordcloud.png',
    }, {
        name: '数据可视化',
        url: 'dataVisualization.html',
        overview: 'dataVisualization.png',
    }
];

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
        for (let i = 0; i < childrens.length - 1; i++) {
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
        document.title = "GoJS教程——写在前面";
        this.getArticleTree();
        this.diagramRender();
    }
    diagramRender() {
        let $ = go.GraphObject.make;
        let myDiagram = $(go.Diagram, "myDiagramDiv");
        myDiagram.model = new go.GraphLinksModel([{ key: "Hello" }, { key: "World!" }], [{ from: "Hello", to: "World!" }]);
    }
    render() {
        return (
            <div className="page-content">
                <div className="article">
                    <div className="article-title">
                        <h1>写在前面</h1>
                    </div>
                    <div id="myDiagramDiv" className="diagram" style={{ height: 150 }}></div>
                    <div className="article-content">
                        <h2>教程简介</h2>
                        <p className="indent-2">本教程仅供GoJS初学者观看使用。</p>
                        <p className="indent-2">本教程是参考官方文档、教程等资料进行归纳整理,由于资料均为英文,理解可能出现偏差,以官方为准。</p>
                        <p className="indent-2">教程只是将GoJS中常用的功能API做简要概述,更详细的内容还需查看官方的<a href="https://gojs.net/latest/api/index.html" target="_blank" rel="noopener noreferrer">API文档</a>。</p>
                        <h2>GoJS绘图组件介绍</h2>
                        <p className="indent-2">详情请看<a href="https://gojs.net/latest/intro/index.html" target="_blank" rel="noopener noreferrer">GoJS Intro</a></p>
                        <h2>GoJS样例</h2>
                        <p>以下是一些典型样例</p>
                        <List
                            grid={{
                                gutter: 10,
                                xs: 2,
                                sm: 3,
                                md: 3,
                                lg: 3,
                                xl: 4,
                                xxl: 4,
                            }}
                            dataSource={data}
                            renderItem={item => (
                                <List.Item>
                                    <a href={"https://gojs.net/latest/samples/" + item.url} target="_blank" rel="noopener noreferrer">
                                        <Card
                                            hoverable
                                            cover={<img src={require("../../../../assets/images/" + item.overview)} alt="" />}
                                        >
                                            <Meta title={item.name} />
                                        </Card>
                                    </a>
                                </List.Item>
                            )}
                        />
                        <p className="indent-2">更多样例请查看<a href="https://gojs.net/latest/samples/index.html" target="_blank" rel="noopener noreferrer">GoJS Samples</a></p>
                    </div>
                </div>
                <div className="directory">
                    <Directory articleTree={this.state.articleTree}></Directory>
                </div>
            </div>
        )
    }
}
