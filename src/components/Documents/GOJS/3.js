import React, { Component } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import 'codemirror/theme/monokai.css';
import Directory from "../../Directory";
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
    componentDidMount() {
        this.diagramRender1();
        this.diagramRender2();
        this.diagramRender3();
        this.diagramRender4();
    }
    diagramRender1() {
        $(go.Diagram, "myDiagramDiv1");
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
                        <h1>GoJS 入门教程——第二节 GoJS 应用中有什么</h1>
                    </div>
                    <div className="article-content">
                        <h2>(Model-View)模型-视图体系结构</h2>
                        <ul>
                            <li>Diagram 保存并显示 Parts</li>
                        </ul>
                        <ul data-lake-indent="1">
                            <li>Parts是 Nodes、Links、Groups 和 Adornments</li>
                        </ul>
                        <ul>
                            <li>Model 存储描述 Diagram Parts 的数据</li>
                        </ul>
                        <p>如图所示：</p>
                        <div className="text-center">
                            <img src={require("../../../assets/images/1585126990498-9287a82e-b7bd-4a6c-85e0-8805577ef2ce.png")} style={{ width: 300 }} alt="" />
                        </div>
                        <p>数据双向绑定的例子请看 <a target="_blank" rel="noopener noreferrer" href="https://gojs.net/latest/samples/updateDemo.html">GoJS_updateDemo</a></p>
                        <h2>构建一个 Diagram</h2>
                        <ul>
                            <li>"View"——将 Model 中的节点和链接数据可视化到 GoJS Node/Link 对象中</li>
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
                        <p>下面就是构建出的 Diagram,没有定义任何 Node 和 Link,所以显示为空白</p>
                        <div id="myDiagramDiv1" className="diagram"></div>
                        <h2>构建一个 Model</h2>
                        <ul>
                            <li>存储稍后将在 Diagram 中显示的数据</li>
                        </ul>
                        <ul data-lake-indent="1">
                            <li>nodeDataArray 存储节点数据</li>
                            <li>linkDataArray 存储链接数据</li>
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
                                <p><em>Tool 和 CommandHandler 默认可用，例如：你可以使用 delete 键删除元素，Ctrl-C、Ctrl-V 复制粘贴元素</em></p>
                                <p><em>在触摸设备上,长按元素将弹出 command 菜单</em></p>
                                <p><em>更多详情请看 <a target="_blank" rel="noopener noreferrer" href="https://gojs.net/latest/intro/commands.html">GoJS_Intro_Commands</a></em></p>
                            </div>
                        </div>
                        <h2>Model 的种类</h2>
                        <ul>
                            <li>GoJS Model 有 3 种类型</li>
                        </ul>
                        <ul data-lake-indent="1">
                            <li>Model(默认)</li>
                            <li>GraphLinksModel</li>
                            <li>TreeModel</li>
                        </ul>
                        <p><em>每种 Model 的详情请看 <Link to="/gojs/4">GoJS入门教程——第四节 GoJS Diatram Model</Link></em></p>
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
                            <li>可以应用于 Diagram 或 Group</li>
                            <li>排列其元素的 Node</li>
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
                        <p><em>更多详情请看 <a href="https://gojs.net/latest/intro/layouts.html">GoJS_Intro_Layouts</a></em></p>
                        <h2>总结</h2>
                        <ul>
                            <li>GoJS 有一个 model-view 架构</li>
                        </ul>
                        <ul data-lake-indent="1">
                            <li>Diagram ≈ View</li>
                            <li>Diagram.model ≈ Model</li>
                        </ul>
                        <ul>
                            <li>GoJS 交互由 Tools 和 CommandHandler 控制</li>
                            <li>Layouts 可以应用于 Diagram 或 Groups 来安排它们的内容自适应</li>
                        </ul>
                        <br />
                        <br />
                        <p>相关代码：</p>
                        <p><a href="https://github.com/LiuZheAb/GoJS_Demo/blob/master/02whatIsInGojsApp.html" target="_blank" rel="noopener noreferrer">https://github.com/LiuZheAb/GoJS_Demo/blob/master/02whatIsInGojsApp.html</a></p>
                    </div>
                </div>
                <Directory />
            </div>
        )
    }
}
