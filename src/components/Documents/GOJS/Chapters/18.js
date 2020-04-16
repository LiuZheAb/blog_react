import React, { Component } from 'react'
import 'codemirror/theme/monokai.css';
import Directory from "../../../Directory";
import go from "gojs";

let $ = go.GraphObject.make;

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
        document.title = "GoJS教程——第二节 概述";
        this.getArticleTree();
        this.diagramRender1();
        this.diagramRender2();
    }
    diagramRender1() {
        let myDiagram = $(go.Diagram, "myDiagramDiv1");
        myDiagram.layout = $(go.TreeLayout, { angle: 90, layerSpacing: 80, nodeSpacing: 30, layerStyle: go.TreeLayout.LayerSiblings });

        myDiagram.nodeTemplate =
            $(go.Node, "Auto",
                new go.Binding("location", "loc"),
                {
                    locationSpot: go.Spot.TopLeft,
                },
                $(go.Shape, "RoundedRectangle", {
                    fill: "#00e8ff",
                }),
                $(go.TextBlock, {
                    margin: 8
                },
                    new go.Binding("text", "text"))
            );
        myDiagram.linkTemplate =
            $(go.Link,
                $(go.Shape),
                $(go.Shape, {
                    toArrow: "standard",
                }),
            );
        myDiagram.model =
            $(go.GraphLinksModel, {
                nodeDataArray: [{
                    key: 0,
                    text: "ToolManager",
                }, {
                    key: 1,
                    text: "MouseDownTools",
                    isGroup: true,
                }, {
                    key: 2,
                    text: "MouseUpTools",
                    isGroup: true,
                }, {
                    key: 3,
                    text: "MouseMoveTools",
                    isGroup: true,
                }, {
                    key: 4,
                    text: "Action Tool",
                    loc: new go.Point(0, 0),
                    group: 1
                }, {
                    key: 5,
                    text: "Relinking Tool",
                    loc: new go.Point(0, 50),
                    group: 1
                }, {
                    key: 6,
                    text: "LinkReshaping Tool",
                    loc: new go.Point(0, 100),
                    group: 1
                }, {
                    key: 7,
                    text: "Resizing Tool",
                    loc: new go.Point(0, 150),
                    group: 1
                }, {
                    key: 8,
                    text: "Rotating Tool",
                    loc: new go.Point(0, 200),
                    group: 1
                }, {
                    key: 9,
                    text: "ContextMenu Tool",
                    loc: new go.Point(0, 0),
                    group: 2
                }, {
                    key: 10,
                    text: "TextEditing Tool",
                    loc: new go.Point(0, 50),
                    group: 2
                }, {
                    key: 11,
                    text: "ClickCreating Tool",
                    loc: new go.Point(0, 100),
                    group: 2
                }, {
                    key: 12,
                    text: "ClickSelecting Tool",
                    loc: new go.Point(0, 150),
                    group: 2
                }, {
                    key: 13,
                    text: "Linking Tool",
                    loc: new go.Point(0, 0),
                    group: 3
                }, {
                    key: 14,
                    text: "Dragging Tool",
                    loc: new go.Point(0, 50),
                    group: 3
                }, {
                    key: 15,
                    text: "DragSelecting Tool",
                    loc: new go.Point(0, 100),
                    group: 3
                }, {
                    key: 16,
                    text: "Panning Tool",
                    loc: new go.Point(0, 150),
                    group: 3
                }],
                linkDataArray: [
                    { from: 0, to: 1, },
                    { from: 0, to: 2, },
                    { from: 0, to: 3 },
                ]
            })
    }
    diagramRender2() {
        let myDiagram = $(go.Diagram, "myDiagramDiv2");
        myDiagram.nodeTemplate =
            $(go.Node, "Auto",
                new go.Binding("location", "loc"),
                {
                    locationSpot: go.Spot.Center,
                },
                $(go.Shape, "RoundedRectangle", {
                    fill: "lightblue",
                    strokeWidth: 0
                }),
                $(go.TextBlock, {
                    margin: 8
                },
                    new go.Binding("text", "text"))
            );
        myDiagram.linkTemplate =
            $(go.Link,
                new go.Binding("curve", "curve"),
                $(go.Shape),
                $(go.Shape, {
                    toArrow: "OpenTriangle",
                }),
                $(go.TextBlock,
                    new go.Binding("text", "text"),
                    new go.Binding("segmentOrientation", "segmentOrientation"),
                    new go.Binding("segmentOffset", "segmentOffset"),
                    new go.Binding("alignmentFocus", "alignmentFocus")),

            );
        myDiagram.model =
            $(go.GraphLinksModel, {
                nodeDataArray: [{
                    key: 0,
                    text: "toolManager searches\n tool list (i.e.\n mouseDownTools)",
                    loc: new go.Point(0, 0)
                }, {
                    key: 1,
                    text: "canStart()",
                    loc: new go.Point(0, 100)
                }, {
                    key: 2,
                    text: "toolManager.currentTool\n = this.tool",
                    loc: new go.Point(0, 200)
                }, {
                    key: 3,
                    text: "doActivate()",
                    loc: new go.Point(0, 280)
                }, {
                    key: 4,
                    text: "doStart()",
                    loc: new go.Point(0, 360)
                }, {
                    key: 5,
                    text: "Tool is active",
                    loc: new go.Point(0, 440)
                }, {
                    key: 6,
                    text: "doMouseDown()\ndoMouseUp()\ndoMouseMove()\ndoKeyDown()\ndoKeyUp()",
                    loc: new go.Point(-250, 540)
                }, {
                    key: 7,
                    text: "doCancel()",
                    loc: new go.Point(250, 540)
                }, {
                    key: 8,
                    text: "stopTool()",
                    loc: new go.Point(0, 640)
                }, {
                    key: 9,
                    text: "toolManager.currentTool\n = toolManager.defaultTool",
                    loc: new go.Point(0, 720)
                }, {
                    key: 10,
                    text: "doDeactivate()",
                    loc: new go.Point(0, 800)
                }, {
                    key: 11,
                    text: "doStop()",
                    loc: new go.Point(0, 880)
                }],
                linkDataArray: [
                    {
                        from: 0, to: 1,
                        text: "Finds this tool",
                        alignmentFocus: go.Spot.Left,
                        segmentOffset: new go.Point(0, -8)
                    },
                    {
                        from: 1, to: 2,
                        text: "Returns true",
                        alignmentFocus: go.Spot.Left,
                        segmentOffset: new go.Point(0, -8)
                    },
                    { from: 2, to: 3 },
                    { from: 3, to: 4 },
                    { from: 4, to: 5 },
                    {
                        from: 5, to: 6, text: "Receives input",
                        curve: go.Link.Bezier,
                        segmentOrientation: go.Link.OrientUpright,
                        alignmentFocus: go.Spot.Top,
                    },
                    {
                        from: 5, to: 7,
                        text: "User cancels tool",
                        segmentOrientation: go.Link.OrientUpright,
                        alignmentFocus: go.Spot.Bottom,
                    },
                    {
                        from: 6, to: 5, text: "Input is not terminal",
                        curve: go.Link.Bezier,
                        segmentOrientation: go.Link.OrientUpright,
                        alignmentFocus: go.Spot.Top,
                    },
                    {
                        from: 6, to: 8,
                        text: "input is terminal",
                        segmentOrientation: go.Link.OrientUpright,
                        alignmentFocus: go.Spot.Top,
                    },
                    { from: 7, to: 8 },
                    { from: 8, to: 9 },
                    { from: 9, to: 10 },
                    { from: 10, to: 11 },
                ]
            })
    }
    render() {
        return (
            <div className="page-content">
                <div className="article">
                    <div className="article-title">
                        <h1>GoJS工具——第二节 概述</h1>
                    </div>
                    <div className="article-content">
                        <h2>ToolManager</h2>
                        <ul>
                            <li>工具处理输入事件</li>
                            <li>在Diagram.currentTool中使用(默认是ToolManager)</li>
                            <li>ToolManager有每个工具类的一个实例</li>
                        </ul>
                        <ul data-lake-indent="1">
                            <li>ToolManager根据InputEvent(即MouseDown，MouseMove…)来决定使用哪个工具来创建currentTool</li>
                        </ul>
                        <p>鼠标事件类型如下所示:</p>
                        <div id="myDiagramDiv1" className="diagram" style={{ maxWidth: 700, height: 400, border: "none" }}></div>
                        <p>ToolManager处理InputEvent的流程如下所示:</p>
                        <div id="myDiagramDiv2" className="diagram" style={{ maxWidth: 700, height: 1000, border: "none" }}></div>
                        <ul>
                            <li>isActive:Tool是启动还是已经在工作了</li>
                            <li>isEnabled:判断是否可以通过鼠标事件启动Tool</li>
                            <li>canStart():查看Tool是否可以通过鼠标或触摸事件启动</li>
                            <li>doActivate():将isActive设置为true</li>
                        </ul>
                        <h2>CommandHandler</h2>
                        <ul>
                            <li>实现诸如deleteselection()或redo()之类的命令</li>
                            <li>包括键盘事件处理(如Ctrl-C用于复制，Ctrl-V用于粘贴…)</li>
                            <li>可以子类化或扩展</li>
                        </ul>
                        <h2>修改Tool</h2>
                        <ul>
                            <li>Tool行为可以通过改变Diagram Part或单个GraphObject的属性来修改</li>
                            <li>还可以覆盖Tool方法或子类化Tool</li>
                        </ul>
                        <h2>Adornment</h2>
                        <ul>
                            <li>Tool经常使用Adornment</li>
                            <li>这是一种与另一Part(Adornment.adornedPart)相关联的特殊Part</li>
                        </ul>
                        <p>如图所示</p>
                        <div className="text-center">
                            <img src={require("../../../../assets/images/20200409132838.png")} alt="" />
                        </div>
                        <p><br /></p>
                        <p><br /></p>
                        <p>相关代码：</p>
                        <p><a href="https://github.com/LiuZheAb/GoJS_Demo/blob/master/17toolsOverview.html" target="_blank" rel="noopener noreferrer">https://github.com/LiuZheAb/GoJS_Demo/blob/master/17toolsOverview.html</a></p>
                    </div>
                </div>
                <div className="directory">
                    <Directory articleTree={this.state.articleTree}></Directory>
                </div>
            </div>
        )
    }
}
