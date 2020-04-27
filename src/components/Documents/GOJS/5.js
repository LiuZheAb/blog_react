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
let node1 = $(go.Node, "Auto",
    $(go.Shape, {
        figure: "RoundedRectangle",
        fill: "lightblue"
    }),
    $(go.TextBlock, {
        text: "Alpha",
        margin: 5
    })
);
myDiagram.add(node1);
let node2 = $(go.Node, "Auto",
    $(go.Shape, {
        figure: "RoundedRectangle",
        fill: "pink"
    }),
    $(go.TextBlock, {
        text: "Beta",
        margin: 5
    })
);
myDiagram.add(node2);
let link = $(go.Link, {
    fromNode: node1,
    toNode: node2
}, $(go.Shape))
myDiagram.add(link);`;
let code2 = `let myDiagram = $(go.Diagram, "myDiagramDiv");
myDiagram.nodeTemplate =
    $(go.Node, "Auto",
        $(go.Shape, "RoundedRectangle", {
                strokeWidth: 0
            },
            new go.Binding("fill", "color")),
        $(go.TextBlock, {
                margin: 8
            },
            new go.Binding("text", "key"))
    )
myDiagram.model = $(go.Model, {
    nodeDataArray: [{
            key: "Alpha",
            color: "orange"
        },
        {
            key: "Beta",
            color: "lime"
        }
    ]
})`;
let code3 = `let myDiagram = $(go.Diagram, "myDiagramDiv");
myDiagram.nodeTemplate =
    $(go.Node, "Auto",
        $(go.Shape, "RoundedRectangle", {
                strokeWidth: 0
            },
            new go.Binding("fill", "color")),
        $(go.TextBlock, {
                margin: 8
            },
            new go.Binding("text", "key"))
    )
myDiagram.model = new go.GraphLinksModel(
    [{
        key: "Alpha",
        color: "orange"
    }, {
        key: "Beta",
        color: "lime"
    }], [{
        from: "Alpha",
        to: "Beta"
    }]
)`;
let code4 = `let myDiagram = $(go.Diagram, "myDiagramDiv");
myDiagram.nodeTemplate =
    $(go.Node, "Auto",
        $(go.Shape, "RoundedRectangle", {
                strokeWidth: 0
            },
            new go.Binding("fill", "color")),
        $(go.TextBlock, {
                margin: 8
            },
            new go.Binding("text", "key"))
    )
myDiagram.model = new go.TreeModel(
    [{
        key: "Alpha",
        color: "orange"
    }, {
        key: "Beta",
        color: "lime",
        parent: "Alpha"
    }, {
        key: "Delta",
        color: "pink",
        parent: "Alpha"
    }, {
        key: "Gamma",
        color: "cyan",
        parent: "Alpha"
    }]
)`;
let code5 = `let data = {
    key: "Zeta",
    color: "beige"
};
myDiagram.model.addNodeData(data);`;
let code6 = `let dataObj = myDiagram.model.findNodeDataForKey("Zeta");
myDiagram.model.set(dataObj, "color", "red");`;
let code7 = `let file;
function save() {
    file = myDiagram6.model.toJson();
}
function load() {
    myDiagram6.model = go.Model.fromJson(file)
}`;
let myDiagram7, file;
export default class index extends Component {
    componentDidMount() {
        this.diagramRender1();
        this.diagramRender2();
        this.diagramRender3();
        this.diagramRender4();
        this.diagramRender5();
        this.diagramRender6();
        this.diagramRender7();
    }
    diagramRender1() {
        let $ = go.GraphObject.make;

        let myDiagram = $(go.Diagram, "myDiagramDiv1");
        let node1 = $(go.Node, "Auto",
            $(go.Shape, {
                figure: "RoundedRectangle",
                fill: "lightblue"
            }),
            $(go.TextBlock, {
                text: "Alpha",
                margin: 5
            })
        );
        myDiagram.add(node1);
        let node2 = $(go.Node, "Auto",
            $(go.Shape, {
                figure: "RoundedRectangle",
                fill: "pink"
            }),
            $(go.TextBlock, {
                text: "Beta",
                margin: 5
            })
        );
        myDiagram.add(node2);
        let link = $(go.Link, {
            fromNode: node1,
            toNode: node2
        }, $(go.Shape))
        myDiagram.add(link);
    }
    diagramRender2() {
        let myDiagram = $(go.Diagram, "myDiagramDiv2");
        myDiagram.nodeTemplate =
            $(go.Node, "Auto",
                $(go.Shape, "RoundedRectangle", {
                    strokeWidth: 0
                },
                    new go.Binding("fill", "color")),
                $(go.TextBlock, {
                    margin: 8
                },
                    new go.Binding("text", "key"))
            )
        myDiagram.model = $(go.Model, {
            nodeDataArray: [{
                key: "Alpha",
                color: "orange"
            },
            {
                key: "Beta",
                color: "lime"
            }
            ]
        })
    }
    diagramRender3() {
        let myDiagram = $(go.Diagram, "myDiagramDiv3");
        myDiagram.nodeTemplate =
            $(go.Node, "Auto",
                $(go.Shape, "RoundedRectangle", {
                    strokeWidth: 0
                },
                    new go.Binding("fill", "color")),
                $(go.TextBlock, {
                    margin: 8
                },
                    new go.Binding("text", "key"))
            )
        myDiagram.model = new go.GraphLinksModel(
            [{
                key: "Alpha",
                color: "orange"
            }, {
                key: "Beta",
                color: "lime"
            }], [{
                from: "Alpha",
                to: "Beta"
            }]
        )
    }
    diagramRender4() {
        let myDiagram = $(go.Diagram, "myDiagramDiv4");
        myDiagram.nodeTemplate =
            $(go.Node, "Auto",
                $(go.Shape, "RoundedRectangle", {
                    strokeWidth: 0
                },
                    new go.Binding("fill", "color")),
                $(go.TextBlock, {
                    margin: 8
                },
                    new go.Binding("text", "key"))
            )
        myDiagram.model = new go.TreeModel(
            [{
                key: "Alpha",
                color: "orange"
            }, {
                key: "Beta",
                color: "lime",
                parent: "Alpha"
            }, {
                key: "Delta",
                color: "pink",
                parent: "Alpha"
            }, {
                key: "Gamma",
                color: "cyan",
                parent: "Alpha"
            }]
        )
    }
    diagramRender5() {
        let myDiagram = $(go.Diagram, "myDiagramDiv5");
        myDiagram.nodeTemplate =
            $(go.Node, "Auto",
                $(go.Shape, "RoundedRectangle", {
                    strokeWidth: 0
                },
                    new go.Binding("fill", "color")),
                $(go.TextBlock, {
                    margin: 8
                },
                    new go.Binding("text", "key"))
            )
        myDiagram.model = new go.TreeModel(
            [{
                key: "Alpha",
                color: "orange"
            }, {
                key: "Beta",
                color: "lime",
                parent: "Alpha"
            }, {
                key: "Delta",
                color: "pink",
                parent: "Alpha"
            }, {
                key: "Gamma",
                color: "cyan",
                parent: "Alpha"
            }]
        )
        let data = {
            key: "Zeta",
            color: "beige"
        };
        myDiagram.model.addNodeData(data);
    }
    diagramRender6() {
        let myDiagram = $(go.Diagram, "myDiagramDiv6");
        myDiagram.nodeTemplate =
            $(go.Node, "Auto",
                $(go.Shape, "RoundedRectangle", {
                    strokeWidth: 0
                },
                    new go.Binding("fill", "color")),
                $(go.TextBlock, {
                    margin: 8
                },
                    new go.Binding("text", "key"))
            )
        myDiagram.model = new go.TreeModel(
            [{
                key: "Alpha",
                color: "orange"
            }, {
                key: "Beta",
                color: "lime",
                parent: "Alpha"
            }, {
                key: "Delta",
                color: "pink",
                parent: "Alpha"
            }, {
                key: "Gamma",
                color: "cyan",
                parent: "Alpha"
            }]
        )
        let data = {
            key: "Zeta",
            color: "beige"
        };
        myDiagram.model.addNodeData(data);
        let dataObj = myDiagram.model.findNodeDataForKey("Zeta");
        myDiagram.model.set(dataObj, "color", "red");
    }
    diagramRender7() {
        myDiagram7 = $(go.Diagram, "myDiagramDiv7");
        myDiagram7.nodeTemplate =
            $(go.Node, "Auto",
                $(go.Shape, "RoundedRectangle", {
                    strokeWidth: 0
                },
                    new go.Binding("fill", "color")),
                $(go.TextBlock, {
                    margin: 8
                },
                    new go.Binding("text", "key"))
            )
        myDiagram7.model = new go.TreeModel(
            [{
                key: "Alpha",
                color: "orange"
            }, {
                key: "Beta",
                color: "lime",
                parent: "Alpha"
            }, {
                key: "Delta",
                color: "pink",
                parent: "Alpha"
            }, {
                key: "Gamma",
                color: "cyan",
                parent: "Alpha"
            }]
        )
        let data = {
            key: "Zeta",
            color: "beige"
        };
        myDiagram7.model.addNodeData(data);
        let dataObj = myDiagram7.model.findNodeDataForKey("Zeta");
        myDiagram7.model.set(dataObj, "color", "red");
    }
    save() {
        file = myDiagram7.model.toJson();
    }
    check() {
        let json = myDiagram7.model.toJson();
        let elementA = document.createElement('a');
        elementA.download = +new Date() + ".json";//文件名
        //隐藏dom点不显示
        elementA.style.display = 'none';
        var blob = new Blob([json]);//二进制
        elementA.href = URL.createObjectURL(blob);
        document.body.appendChild(elementA);
        elementA.click();
        document.body.removeChild(elementA);
    }
    load() {
        if (file) { myDiagram7.model = go.Model.fromJson(file) } else {
            alert("你还没有保存数据,请先 Save")
        }
    }
    render() {
        return (
            <div className="page-content">
                <div className="article">
                    <div className="article-title">
                        <h1>GoJS入门教程——第四节 GoJS Diatram Model</h1>
                    </div>
                    <div className="article-content">
                        <h2>Diagram.add()</h2>
                        <p>先看下面的代码及效果：</p>
                        <CodeMirror value={code1} options={codeMirrorOptions} />
                        <div id="myDiagramDiv1" className="diagram"></div>
                        <h2>为什么要用 Diagram Model？</h2>
                        <ul>
                            <li>清晰地分离 Part 数据与 Part 外观</li>
                        </ul>
                        <ul data-lake-indent="1">
                            <li>Diagram Model 管理 Part 数据(JavaScript Obiects)</li>
                            <li>Diagram templates 管理 Part 样式</li>
                        </ul>
                        <ul>
                            <li>便于保存/加载/更新 Diagram components</li>
                            <li>便于 Node/Link 的序列化</li>
                        </ul>
                        <h2>建立一个 Diagram Model</h2>
                        <ul>
                            <li>方法 1</li>
                        </ul>
                        <ul data-lake-indent="1">
                            <li>{`myDiagram.model=$(go.Model,{<key/value pairs for Model properties>})`}</li>
                        </ul>
                        <ul>
                            <li>方法 2</li>
                        </ul>
                        <ul data-lake-indent="1">
                            <li>{`myDiagram.model=new go.Model(<nodeDataArray>,<linkDataArray(if GraphLinksModel)>)`}</li>
                        </ul>
                        <h2>Model</h2>
                        <ul>
                            <li>在 nodeDataArray 中管理 Node 数据</li>
                            <li>不支持 Link 数据</li>
                            <li>Node 数据有两个默认属性："key"和"category"</li>
                        </ul>
                        <ul data-lake-indent="1">
                            <li>所有 Model 类都是如此</li>
                            <li>如果“key”为空，则会自动生成一个唯一的 key</li>
                            <li>如果“category”留空，GoJS 使用以下中的一种</li>
                        </ul>
                        <ol data-lake-indent="2">
                            <li>nodeTemplateMap 值在 key 为""时(与 nodeTemplateMap 相同)</li>
                            <li>默认节点模板(使用 TextBlock 作为 key)</li>
                        </ol>
                        <CodeMirror value={code2} options={codeMirrorOptions} />
                        <div id="myDiagramDiv2" className="diagram"></div>
                        <h2>GraphLinksModel</h2>
                        <ul>
                            <li>支持使用 nodeDataArray / linkDataArray 管理 Node 和 Link 数据</li>
                            <li>链接数据有预定义的属性。"to","from"和"category"</li>
                            <li>支持 Ports 使用 Links 连接 obiects</li>
                        </ul>
                        <CodeMirror value={code3} options={codeMirrorOptions} />
                        <div id="myDiagramDiv3" className="diagram"></div>
                        <h2>TreeModel</h2>
                        <ul>
                            <li>在 nodeDataArray 中管理 Node 数据</li>
                            <li>不支持 Link 数据</li>
                            <li>支持 Node 数据的"parent"属性</li>
                        </ul>
                        <ul data-lake-indent="1">
                            <li>parent 值必须设置为 Node 数据的 key</li>
                            <li>生成从指定 key 的父节点画出指向此节点的链接</li>
                        </ul>
                        <CodeMirror value={code4} options={codeMirrorOptions} />
                        <div id="myDiagramDiv4" className="diagram"></div>
                        <h2>修改 Model</h2>
                        <ul>
                            <li>{`添加Node数据:Model.addNodeData(<node data object>)`}</li>
                            <li>{`删除Node数据:Model.removeNodeData(<node data object>)`}</li>
                        </ul>
                        <CodeMirror value={code5} options={codeMirrorOptions} />
                        <div id="myDiagramDiv5" className="diagram"></div>
                        <ul>
                            <li>{`查找 Node 数据对象:Model.findNodeDataForKey(<key>)`}</li>
                            <li>{`设置数据属性:Model.set(<data obiect>,<target property>,<property value>)`}</li>
                        </ul>
                        <ul data-lake-indent="1">
                            <li>不能使用<span style={{ textDecoration: "line-through" }}>Node.data.color = "red"</span></li>
                        </ul>
                        <CodeMirror value={code6} options={codeMirrorOptions} />
                        <div id="myDiagramDiv6" className="diagram"></div>
                        <h2>保存/加载 Model</h2>
                        <ul>
                            <li>{`获取模型 JSON: model.toJson()`}</li>
                            <li>{`从 JSON 加载模型:Model.fromJson(<有效的 JSON Model 字符串>)`}</li>
                        </ul>
                        <CodeMirror value={code7} options={codeMirrorOptions} />
                        <div id="myDiagramDiv7" className="diagram"></div>
                        <div className="text-center"><button onClick={this.save} style={{ marginRight: 20 }}>Save</button><button onClick={this.load} style={{ marginRight: 20 }}>Load</button><button onClick={this.check}>下载查看 JSON 数据</button></div>
                        <div className="tip">
                            <div className="tip-content">
                                <p><em>选中节点后，按 delete 键可删除组件</em></p>
                                <p><em>在触摸设备上,长按元素将弹出 command 菜单</em></p>
                                <p><em>更多交互命令请看 <a target="_blank" rel="noopener noreferrer" href="https://gojs.net/latest/intro/commands.html">GoJS_Intro_Commands</a></em></p>
                            </div>
                        </div>
                        <br />
                        <br />
                        <p>相关代码：</p>
                        <p><a href="https://github.com/LiuZheAb/GoJS_Demo/blob/master/04diagramModel.html" target="_blank" rel="noopener noreferrer">https://github.com/LiuZheAb/GoJS_Demo/blob/master/04diagramModel.html</a></p>
                    </div>
                </div>
                <Directory />
            </div>
        )
    }
}
