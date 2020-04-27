import React, { Component } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import 'codemirror/theme/monokai.css';
import Directory from "../../Directory";
import go from "gojs";

let $ = go.GraphObject.make;
let codeMirrorOptions = {
    theme: 'monokai',
    mode: 'JSX',
    readOnly: true,
};
let code1 = `let $ = go.GraphObject.make;
let myDiagram = $(go.Diagram, "myDiagramDiv");

myDiagram.nodeTemplate =
    $(go.Node, "Auto", {
            locationSpot: go.Spot.Center
        },
        new go.Binding("location", "loc", go.Point.parse).makeTwoWay(go.Point.stringify),
        $(go.Shape, "RoundedRectangle", {
            fill: "lightblue"
        }),
        $(go.TextBlock, {
                margin: 8
            },
            new go.Binding("text", "key"))
    );

myDiagram.model =
    $(go.GraphLinksModel, {
        nodeDataArray: [{
                key: "Alpha",
                loc: "100 100"
            },
            {
                key: "Beta",
                loc: "100 120"
            },
            {
                key: "Delta"
            },
            {
                key: "Gamma"
            },
        ]
    });`;
let code2 = `diagram.layout = new go.ForceDirectedLayout();`;
let code3 = `let diagram = $(go.Diagram, "maDiagramDiv",
    {
        initialContentAlignment: go.Spot.Center,
        layout: $(go.TreeLayout,
            {angle: 90, nodeSpacing: 10,layerSpacing: 30 })
    })`
let code4 = `$(go.Node, · · ·,
    { layoutConditions: go.Part.LayoutStandard & ~go.Part.LayoutNodeSized },
    · · ·
)`;

export default class index extends Component {
    componentDidMount() {
        this.diagramRender1();
    }
    diagramRender1() {
        let myDiagram = $(go.Diagram, "myDiagramDiv1");

        myDiagram.nodeTemplate =
            $(go.Node, "Auto", {
                locationSpot: go.Spot.Center
            },
                new go.Binding("location", "loc", go.Point.parse).makeTwoWay(go.Point.stringify),
                $(go.Shape, "RoundedRectangle", {
                    fill: "lightblue"
                }),
                $(go.TextBlock, {
                    margin: 8
                },
                    new go.Binding("text", "key"))
            );

        myDiagram.model =
            $(go.GraphLinksModel, {
                nodeDataArray: [{
                    key: "Alpha",
                    loc: "100 100"
                },
                {
                    key: "Beta",
                    loc: "100 120"
                },
                {
                    key: "Delta"
                },
                {
                    key: "Gamma"
                },
                ]
            })
    }
    render() {
        return (
            <div className="page-content">
                <div className="article">
                    <div className="article-title">
                        <h1>GoJS 布局——第一节 GoJS 布局教程概述</h1>
                    </div>
                    <div className="article-content">
                        <h2>布局 Layouts</h2>
                        <ul>
                            <li>定位 Part 集合的 Node 或 Link</li>
                            <li>GoJS Layout 是自动布局</li>
                            <li>Diagram.layout 默认为基本布局类的实例</li>
                        </ul>
                        <ul data-lake-indent="1">
                            <li>设置没有定位的 Node 的位置</li>
                            <li>完全忽略 Link</li>
                        </ul>
                        <CodeMirror value={code1} options={codeMirrorOptions} />
                        <div id="myDiagramDiv1" className="diagram"></div>
                        <h2>Layout 初始化</h2>
                        <ul>
                            <li>简单的声明</li>
                        </ul>
                        <CodeMirror value={code2} options={codeMirrorOptions} />
                        <ul>
                            <li>使用 go.GraphObject.make(<em>已定义为$</em>)初始化</li>
                        </ul>
                        <CodeMirror value={code3} options={codeMirrorOptions} />
                        <p>更多 Layout 示例请参考 <a href="https://gojs.net/latest/samples/gLayout.html" target="_blank" rel="noopener noreferrer">GridLayout</a>、<a href="https://gojs.net/latest/samples/tLayout.html" target="_blank" rel="noopener noreferrer">Tree Layout</a>、<a href="https://gojs.net/latest/intro/extensions.html" target="_blank" rel="noopener noreferrer">Extending GoJS</a></p>
                        <h2>Layout 失效</h2>
                        <ul>
                            <li>Layout 可以是"有效的"也可以是"无效的",Layout 失效的原因包括:</li>
                        </ul>
                        <ul data-lake-indent="1">
                            <li>从 Layout 中添加/删除的 Node/Link</li>
                            <li>Node/Link 改变了可见性</li>
                            <li>Node 改变了大小</li>
                        </ul>
                        <ul>
                            <li>Layout.isOngoing 控制当这些改变发生时 Layout 是否发生改变</li>
                            <li>Layout.isInitial 控制当 Diagram 第一次加载时 Layout 是否生效</li>
                        </ul>
                        <p>Layout.invalidateLayout()</p>
                        <p>Diagram.layoutDiagram(true)</p>
                        <h3>Layout Invalidation(cont.)</h3>
                        <ul>
                            <li>如果设置了 Part 的“layoutConditions”属性，则 Layout 失效可以更加具体</li>
                        </ul>
                        <CodeMirror value={code4} options={codeMirrorOptions} />
                        <ul>
                            <li>临时 layer 中的 Part 不会使任何 Layout 失效</li>
                            <li>设置 Part.islayoutposition 为 false，Layout 将完全忽略这一 Part</li>
                        </ul>
                        <br />
                        <br />
                        <p>相关代码：</p>
                        <p><a href="https://github.com/LiuZheAb/GoJS_Demo/blob/master/07overviewLayout.html" target="_blank" rel="noopener noreferrer">https://github.com/LiuZheAb/GoJS_Demo/blob/master/07overviewLayout.html</a></p>
                    </div>
                </div>
                <Directory />
            </div>
        )
    }
}
