import React, { Component } from 'react'
import CodeMirror from '@uiw/react-codemirror';
import 'codemirror/theme/monokai.css';
import Directory from "../../../Directory";
import { Link } from "react-router-dom";
import go from "gojs";

let $ = go.GraphObject.make;
let code1 = `<div id="myDiagramDiv" style="height: 400px;width: 400px;border: 1px solid #000;"></div>

let $ = go.GraphObject.make;
let myDiagram = $(go.Diagram, "myDiagramDiv");`;
let code2 = `myDiagram.model = $(go.Model);
myDiagram.model.nodeDataArray = [{
    key: "Alpha"
}, {
    key: "Beta"
}, {
    key: "Gamma"
}, {
    key: "Delta"
}, {
    key: "Epsilon"
}];`
let code3 = `myDiagram.model = $(go.GraphLinksModel);
myDiagram.model.nodeDataArray = [{
    key: "Alpha"
}, {
    key: "Beta"
}, {
    key: "Gamma"
}, {
    key: "Delta"
}, {
    key: "Epsilon"
}];
myDiagram.model.linkDataArray = [{
    from: "Alpha",
    to: "Beta"
}];`
let code4 = `myDiagram.model = $(go.GraphLinksModel);
myDiagram.model.nodeDataArray = [{
    key: "Alpha"
}, {
    key: "Beta"
}, {
    key: "Gamma"
}, {
    key: "Delta"
}, {
    key: "Epsilon"
}];
myDiagram.model.linkDataArray = [{
    from: "Alpha",
    to: "Beta"
}];
myDiagram.layout = $(go.CircularLayout);`;

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
        document.title = "GoJS教程——第二节 GoJS应用中有什么";
        this.getArticleTree();
        this.diagramRender1();
        this.diagramRender2();
        this.diagramRender3();
        this.diagramRender4();
    }
    diagramRender1() {
        // eslint-disable-next-line
        let myDiagram = $(go.Diagram, "myDiagramDiv1");
    }
    diagramRender2() {
        let myDiagram = $(go.Diagram, "myDiagramDiv2");
        myDiagram.model = $(go.Model);
        myDiagram.model.nodeDataArray = [{
            key: "Alpha"
        }, {
            key: "Beta"
        }, {
            key: "Gamma"
        }, {
            key: "Delta"
        }, {
            key: "Epsilon"
        }];
    }
    diagramRender3() {
        let myDiagram = $(go.Diagram, "myDiagramDiv3");
        myDiagram.model = $(go.GraphLinksModel);
        myDiagram.model.nodeDataArray = [{
            key: "Alpha"
        }, {
            key: "Beta"
        }, {
            key: "Gamma"
        }, {
            key: "Delta"
        }, {
            key: "Epsilon"
        }];
        myDiagram.model.linkDataArray = [{
            from: "Alpha",
            to: "Beta"
        }];
    }
    diagramRender4() {
        let myDiagram = $(go.Diagram, "myDiagramDiv4");
        myDiagram.model = $(go.GraphLinksModel);
        myDiagram.model.nodeDataArray = [{
            key: "Alpha"
        }, {
            key: "Beta"
        }, {
            key: "Gamma"
        }, {
            key: "Delta"
        }, {
            key: "Epsilon"
        }];
        myDiagram.model.linkDataArray = [{
            from: "Alpha",
            to: "Beta"
        }];
        myDiagram.layout = $(go.CircularLayout);
    }
    render() {
        return (
            <div className="page-content">
                <div className="article">
                    <div className="article-title">
                        <h1>GoJS入门教程——第二节 GoJS应用中有什么</h1>
                    </div>
                    <div className="article-content">
                        <h2>(Model-View)模型-视图体系结构</h2>
                        <ul>
                            <li>Diagram保存并显示Parts</li>
                        </ul>
                        <ul data-lake-indent="1">
                            <li>Parts是Nodes、Links、Groups和Adornments</li>
                        </ul>
                        <ul>
                            <li>Model存储描述Diagram Parts的数据</li>
                        </ul>
                        <p>如图所示：</p>
                        <div className="text-center">
                            <img src={require("../../../../assets/images/1585126990498-9287a82e-b7bd-4a6c-85e0-8805577ef2ce.png")} style={{ width: 300 }} alt="" />
                        </div>
                        <p>数据双向绑定的例子请看<a target="_blank" rel="noopener noreferrer" href="https://gojs.net/latest/samples/updateDemo.html">GoJS_updateDemo</a></p>
                        <h2>构建一个Diagram</h2>
                        <ul>
                            <li>"View"——将Model中的节点和链接数据可视化到GoJS Node/Link对象中</li>
                            <li>go.GraphObject.make(go.Diagram,{`<DIV element | DIV id>`})</li>
                        </ul>
                        <CodeMirror
                            value={code1}
                            options={{
                                theme: 'monokai',
                                mode: 'JSX',
                                readOnly: true
                            }}
                        />
                        <p>下面就是构建出的Diagram,没有定义任何Node和Link,所以显示为空白</p>
                        <div id="myDiagramDiv1" className="diagram"></div>
                        <h2>构建一个Model</h2>
                        <ul>
                            <li>存储稍后将在Diagram中显示的数据</li>
                        </ul>
                        <ul data-lake-indent="1">
                            <li>nodeDataArray存储节点数据</li>
                            <li>linkDataArray存储链接数据</li>
                        </ul>
                        <ul>
                            <li>go.GraphObject.make(go.Model)</li>
                        </ul>
                        <CodeMirror
                            value={code2}
                            options={{
                                theme: 'monokai',
                                mode: 'JSX',
                                readOnly: true
                            }}
                        />
                        <div id="myDiagramDiv2" className="diagram"></div>
                        <div className="tip">
                            <div className="tip-content">
                                <p><em>Tool和CommandHandler默认可用，例如：你可以使用delete键删除元素，Ctrl-C、Ctrl-V复制粘贴元素</em></p>
                                <p><em>在触摸设备上,长按元素将弹出command菜单</em></p>
                                <p><em>更多详情请看<a target="_blank" rel="noopener noreferrer" href="https://gojs.net/latest/intro/commands.html">GoJS_Intro_Commands</a></em></p>
                            </div>
                        </div>
                        <h2>Model的种类</h2>
                        <ul>
                            <li>GoJS Model有3种类型</li>
                        </ul>
                        <ul data-lake-indent="1">
                            <li>Model(默认)</li>
                            <li>GraphLinksModel</li>
                            <li>TreeModel</li>
                        </ul>
                        <p><em>每种Model的详情请看<Link to="/gojs/4">GoJS入门教程——第四节 GoJS Diatram Model</Link></em></p>
                        <CodeMirror
                            value={code3}
                            options={{
                                theme: 'monokai',
                                mode: 'JSX',
                                readOnly: true
                            }}
                        />
                        <div id="myDiagramDiv3" className="diagram"></div>
                        <h2>Layouts</h2>
                        <ul>
                            <li>可以应用于Diagram或Group</li>
                            <li>排列其元素的Node</li>
                        </ul>
                        <CodeMirror
                            value={code4}
                            options={{
                                theme: 'monokai',
                                mode: 'JSX',
                                readOnly: true
                            }}
                        />
                        <div id="myDiagramDiv4" className="diagram"></div>
                        <p><em>更多详情请看<a href="https://gojs.net/latest/intro/layouts.html">GoJS_Intro_Layouts</a></em></p>
                        <h2>总结</h2>
                        <ul>
                            <li>GoJS有一个model-view架构</li>
                        </ul>
                        <ul data-lake-indent="1">
                            <li>Diagram ≈ View</li>
                            <li>Diagram.model ≈ Model</li>
                        </ul>
                        <ul>
                            <li>GoJS交互由Tools和CommandHandler控制</li>
                            <li>Layouts可以应用于Diagram或Groups来安排它们的内容自适应</li>
                        </ul>
                        <br />
                        <br />
                        <p>相关代码：</p>
                        <p><a href="https://github.com/LiuZheAb/GoJS_Demo/blob/master/02whatIsInGojsApp.html" target="_blank" rel="noopener noreferrer">https://github.com/LiuZheAb/GoJS_Demo/blob/master/02whatIsInGojsApp.html</a></p>
                    </div>
                </div>
                <div className="directory">
                    <Directory articleTree={this.state.articleTree}></Directory>
                </div>
            </div>
        )
    }
}
