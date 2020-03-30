import React, { Component } from 'react'
import go from "gojs";
import CodeMirror from '@uiw/react-codemirror';
import 'codemirror/theme/monokai.css';

let $ = go.GraphObject.make;

let code1 = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GoJS入门教程——第一节</title>
    <script src="go.js"></script>
    <script>
        function init() {
            
        }
    </script>
</head>
<body onload="init()">
    <div id="myDiagramDiv"></div>
</body>
</html>`;
let code2 = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GoJS入门教程——第一节</title>
    <script src="go.js"></script>
    <script>
        function init() {
            let $ = go.GraphObject.make;
            let myDiagram = $(go.Diagram, "myDiagramDiv");
            let nodeDataArray = [
                { key: "Alpha" }, 
                { key: "Beta" }
            ];
            let linkDataArray = [
                { from: "Alpha",to: "Beta"}
            ];
            myDiagram.model = new go.GraphLinksModel(nodeDataArray, linkDataArray);
        }
    </script>
</head>
<body onload="init()">
    <div id="myDiagramDiv" style="width: 300px;height: 300px;border: 1px solid #000;"></div>
</body>
</html>`;
let code3 = `function init() {
    let $ = go.GraphObject.make;
    let myDiagram = $(go.Diagram, "myDiagramDiv");
    let nodeDataArray = [{
        key: "Alpha",
        color: "lime"
    }, {
        key: "Beta",
        color: "cyan"
    }
    ];
    let linkDataArray = [{
        from: "Alpha",
        to: "Beta",
    }];
    myDiagram.model = new go.GraphLinksModel(nodeDataArray, linkDataArray);
    myDiagram.nodeTemplate =
        $(go.Node, "Auto",
            $(go.Shape, "RoundedRectangle", {
                fill: "#999"
            }, new go.Binding("fill", "color")),
            $(go.TextBlock, "text", new go.Binding("text", "key"))
        );
}`;
let code4 = `function init() {
let $ = go.GraphObject.make;
let myDiagram = $(go.Diagram, "myDiagramDiv");
let nodeDataArray = [{
    key: "Alpha",
    color: "lime"
}, {
    key: "Beta",
    color: "cyan"
}
];
let linkDataArray = [{
    from: "Alpha",
    to: "Beta",
    color: "red"
}];
myDiagram.model = new go.GraphLinksModel(nodeDataArray, linkDataArray);
myDiagram.nodeTemplate =
    $(go.Node, "Auto",
        $(go.Shape, "RoundedRectangle", {
            fill: "#999"
        }, new go.Binding("fill", "color")),
        $(go.TextBlock, "text", {
            margin: 10
        }, new go.Binding("text", "key"))
    );
myDiagram.linkTemplate =
    $(go.Link,
        $(go.Shape, {
                strokeWidth: 3,
            },
            new go.Binding("stroke", "color")
        ),
        $(go.Shape, {
                toArrow: "Standard",
                stroke: null
            },
            new go.Binding("fill", "color")
        )
    )
}`;
let code5 = `let nodeDataArray = [{
    key: "Alpha",
    color: "lime"
}, {
    key: "Beta",
    color: "cyan"
}, {
    key: "Zeta",
    isGroup: true
}, {
    key: "Delta",
    color: "pink",
    group: "Zeta"
}, {
    key: "Gamma",
    color: "maroom",
    group: "Zeta"
}];
let linkDataArray = [{
    from: "Alpha",
    to: "Beta",
    color: "red"
}, {
    from: "Alpha",
    to: "Zeta",
}];`;

export default class index extends Component {
    componentDidMount() {
        this.diagramRender1();
        this.diagramRender2();
        this.diagramRender3();
        this.diagramRender4();
    }
    diagramRender1() {
        let myDiagram1 = $(go.Diagram, "myDiagramDiv1");
        let nodeDataArray1 = [
            { key: "Alpha" },
            { key: "Beta" }
        ];
        let linkDataArray1 = [
            { from: "Alpha", to: "Beta" }
        ];
        myDiagram1.model = new go.GraphLinksModel(nodeDataArray1, linkDataArray1);
    }
    diagramRender2() {
        let myDiagram2 = $(go.Diagram, "myDiagramDiv2");
        let nodeDataArray2 = [{
            key: "Alpha",
            color: "lime"
        }, {
            key: "Beta",
            color: "cyan"
        }];
        let linkDataArray2 = [{
            from: "Alpha",
            to: "Beta",
        }];
        myDiagram2.model = new go.GraphLinksModel(nodeDataArray2, linkDataArray2);
        myDiagram2.nodeTemplate =
            $(go.Node, "Auto",
                $(go.Shape, "RoundedRectangle", {
                    fill: "#999"
                }, new go.Binding("fill", "color")),
                $(go.TextBlock, "text", new go.Binding("text", "key"))
            );
    }
    diagramRender3() {
        let myDiagram3 = $(go.Diagram, "myDiagramDiv3");
        let nodeDataArray3 = [{
            key: "Alpha",
            color: "lime"
        }, {
            key: "Beta",
            color: "cyan"
        }
        ];
        let linkDataArray3 = [{
            from: "Alpha",
            to: "Beta",
            color: "red"
        }];
        myDiagram3.model = new go.GraphLinksModel(nodeDataArray3, linkDataArray3);
        myDiagram3.nodeTemplate =
            $(go.Node, "Auto",
                $(go.Shape, "RoundedRectangle", {
                    fill: "#999"
                }, new go.Binding("fill", "color")),
                $(go.TextBlock, "text", {
                    margin: 10
                }, new go.Binding("text", "key"))
            );
        myDiagram3.linkTemplate =
            $(go.Link,
                $(go.Shape, {
                    strokeWidth: 3,
                },
                    new go.Binding("stroke", "color")
                ),
                $(go.Shape, {
                    toArrow: "Standard",
                    stroke: null
                },
                    new go.Binding("fill", "color")
                )
            )
    }
    diagramRender4() {
        let myDiagram = $(go.Diagram, "myDiagramDiv4");
        let nodeDataArray = [{
            key: "Alpha",
            color: "lime"
        }, {
            key: "Beta",
            color: "cyan"
        }, {
            key: "Zeta",
            isGroup: true
        }, {
            key: "Delta",
            color: "pink",
            group: "Zeta"
        }, {
            key: "Gamma",
            color: "maroom",
            group: "Zeta"
        }];
        let linkDataArray = [{
            from: "Alpha",
            to: "Beta",
            color: "red"
        }, {
            from: "Alpha",
            to: "Zeta",
        }];
        myDiagram.model = new go.GraphLinksModel(nodeDataArray, linkDataArray);
        myDiagram.nodeTemplate =
            $(go.Node, "Auto",
                $(go.Shape, "RoundedRectangle", {
                    fill: "#999"
                }, new go.Binding("fill", "color")),
                $(go.TextBlock, "text", {
                    margin: 10
                }, new go.Binding("text", "key"))
            );
        myDiagram.linkTemplate =
            $(go.Link,
                $(go.Shape, {
                    strokeWidth: 3,
                },
                    new go.Binding("stroke", "color")
                ),
                $(go.Shape, {
                    toArrow: "Standard",
                    stroke: null
                },
                    new go.Binding("fill", "color")
                )
            )
    }
    render() {
        return (
            <article>
                <div className="article-title">
                    <h1>GoJS入门教程——第一节 简单的GoJS demo</h1>
                </div>
                <div className="article-content">
                    <h2>准备环境</h2>
                    <ol>
                        <li>创建一个新的HTML页；</li>
                        <li>引用GoJS脚本文件；</li>
                        <li>为GoJS Diagram创建一个div元素；</li>
                        <li>定义body onload函数。</li>
                    </ol>
                    <p>代码如下所示：</p>
                    <CodeMirror
                        value={code1}
                        options={{
                            theme: 'monokai',
                            mode: 'HTML',
                            readOnly: true
                        }}
                    />
                    <h2>创建Diagram、Model和Model Data</h2>
                    <ol>
                        <li>将go.GraphObject.make定义为简单变量(例如$)；</li>
                        <li>定义一个新的Diagram；</li>
                        <li>给Diagram设置height，width和border；</li>
                        <li>创建nodeDataArray和linkDataArray；</li>
                        <li>设置Diagram.model。</li>
                    </ol>
                    <p>代码如下所示：</p>
                    <CodeMirror
                        value={code2}
                        options={{
                            theme: 'monokai',
                            mode: 'HTML',
                            readOnly: true,
                        }}
                    />
                    <p>如果没有错误的话，你会在浏览器看到</p>
                    <div id="myDiagramDiv1" className="diagram"></div>
                    <h2>修改样式</h2>
                    <p>现在，node和link都可以看到了，接下来就要思考如何修改它们的样式了。</p>
                    <p>GoJS是这样做的：使用模板改变Diagram组件的样式。</p>
                    <ul>
                        <li>使用nodeTemplate修改node的样式；<div className=""></div></li>
                        <li>使用linkTemplate修改link的样式。</li>
                    </ul>
                    <h3>节点模板</h3>
                    <ol>
                        <li>将节点模板定义为单个“Auto”面板；</li>
                        <li>定义节点模板元素(Shape和TextBlock)；</li>
                        <li>向nodeDataArray中的节点添加颜色数据属性；</li>
                        <li>添加节点数据绑定。</li>
                    </ol>
                    <p className="indent-2">
                        <em>go.Binding()实现了属性和数据的绑定，例如new go.Binding("fill", "color"))，绑定了go.Shape的fill属性和nodeDataArray中的color。</em>
                    </p>
                    <p>代码及效果如下所示：</p>
                    <CodeMirror
                        value={code3}
                        options={{
                            theme: 'monokai',
                            mode: 'JSX',
                            readOnly: true,
                        }}
                    />
                    <div id="myDiagramDiv2" className="diagram"></div>
                    <h3>链接模板</h3>
                    <ul>
                        <li>定义两个形状元素的链接模板</li>
                        <li>添加链接数据绑定</li>
                    </ul>
                    <h3>编辑节点/链接属性</h3>
                    <ul>
                        <li>在nodeTemplate的TextBlock元素上设置margin属性</li>
                        <li>为linkTemplate的第一个Shape元素设置strokeWidth属性</li>
                    </ul>
                    <p>代码及效果如下所示：</p>
                    <CodeMirror
                        value={code4}
                        options={{
                            theme: 'monokai',
                            mode: 'JSX',
                            readOnly: true,
                        }}
                    />
                    <div id="myDiagramDiv3" className="diagram"></div>
                    <h3>创建组</h3>
                    <ul>
                        <li>在nodeDataArray中添加组数据</li>
                        <li>在nodeDataArray中添加新节点，并设置group属性</li>
                        <li>在linkDataArray中添加链接到组</li>
                    </ul>
                    <p>代码及效果如下所示：</p>
                    <CodeMirror
                        value={code5}
                        options={{
                            theme: 'monokai',
                            mode: 'JSX',
                            readOnly: true,
                        }}
                    />
                    <div id="myDiagramDiv4" className="diagram"></div>
                    <p><br /></p>
                    <p><br /></p>
                    <p>相关代码<a href="https://github.com/LiuZheAb/GoJS_Demo/blob/master/01simpleDemo.html">https://github.com/LiuZheAb/GoJS_Demo/blob/master/01simpleDemo.html</a></p>
                </div>
            </article>
        )
    }
}
