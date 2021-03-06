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
myDiagram.grid.visible = true;
myDiagram.nodeTemplate = $(go.Node, "Auto", {
        resizable: true
    },
    $(go.Shape, "Rectangle", {
        fill: "lightgray"
    }),
    $(go.TextBlock, {
        margin: 5
    }, new go.Binding("text", "key")));
let nodeDataArray = [{
    key: "Alpha"
}, {
    key: "Beta"
}, {
    key: "Gamma"
}];
myDiagram.model = new go.GraphLinksModel(nodeDataArray);
myDiagram.toolManager.draggingTool.isGridSnapEnabled = true;
myDiagram.toolManager.resizingTool.isGridSnapEnabled = true;
myDiagram.grid.gridCellSize = new go.Size(50, 50);`;
let code2 = `myDiagram.grid =
    $(go.Panel, "Grid", {
            gridCellSize: new go.Size(10, 10)
        },
        $(go.Shape, "lineH", {
            stroke: "blue"
        }),
        $(go.Shape, "lineV", {
            stroke: "green"
        })
    );`;
let code3 = `myDiagram.grid =
    $(go.Panel, "Grid", {
            gridCellSize: new go.Size(10, 10)
        },
        $(go.Shape, "lineH", {
            stroke: "blue",
            interval: 5
        }),
        $(go.Shape, "lineV", {
            stroke: "green",
            interval: 5
        }),
        $(go.Shape, "lineH", {
            stroke: "lightblue"
        }),
        $(go.Shape, "lineV", {
            stroke: "lightgreen"
        }),
    );`
let code4 = `myDiagram.grid =
    $(go.Panel, "Grid", {
            gridCellSize: new go.Size(50, 50)
        },
        $(go.Shape, "BarH", {
            fill: "lime",
            height: 50,
            interval: 2
        })
    );`;
let code5 = `myDiagram.grid =
    $(go.Panel, "Grid", {
            gridCellSize: new go.Size(50, 50)
        },
        $(go.Shape, "BarH", {
            fill: "lime",
            height: 50,
            interval: 2,
            opacity: .25
        }),
        $(go.Shape, "BarV", {
            fill: "lime",
            height: 50,
            interval: 2,
            opacity: .25
        })
    );`;

export default class index extends Component {
    componentDidMount() {
        this.diagramRender1();
        this.diagramRender2();
        this.diagramRender3();
        this.diagramRender4();
        this.diagramRender5();
    }
    diagramRender1() {
        let myDiagram = $(go.Diagram, "myDiagramDiv1");
        myDiagram.grid.visible = true;
        myDiagram.nodeTemplate = $(go.Node, "Auto", {
            resizable: true
        },
            $(go.Shape, "Rectangle", {
                fill: "lightgray"
            }),
            $(go.TextBlock, {
                margin: 5
            }, new go.Binding("text", "key")));
        let nodeDataArray = [{
            key: "Alpha"
        }, {
            key: "Beta"
        }, {
            key: "Gamma"
        }];
        myDiagram.model = new go.GraphLinksModel(nodeDataArray);
        myDiagram.toolManager.draggingTool.isGridSnapEnabled = true;
        myDiagram.toolManager.resizingTool.isGridSnapEnabled = true;
        myDiagram.grid.gridCellSize = new go.Size(50, 50);
    }
    diagramRender2() {
        let myDiagram = $(go.Diagram, "myDiagramDiv2");
        myDiagram.grid.visible = true;
        myDiagram.nodeTemplate = $(go.Node, "Auto", {
            resizable: true
        },
            $(go.Shape, "Rectangle", {
                fill: "lightgray"
            }),
            $(go.TextBlock, {
                margin: 5
            }, new go.Binding("text", "key")));
        let nodeDataArray = [{
            key: "Alpha"
        }, {
            key: "Beta"
        }, {
            key: "Gamma"
        }];
        myDiagram.model = new go.GraphLinksModel(nodeDataArray);
        myDiagram.toolManager.draggingTool.isGridSnapEnabled = true;
        myDiagram.toolManager.resizingTool.isGridSnapEnabled = true;
        myDiagram.grid.gridCellSize = new go.Size(50, 50);
        myDiagram.grid =
            $(go.Panel, "Grid", {
                gridCellSize: new go.Size(10, 10)
            },
                $(go.Shape, "lineH", {
                    stroke: "blue"
                }),
                $(go.Shape, "lineV", {
                    stroke: "green"
                })
            );
    }
    diagramRender3() {
        let myDiagram = $(go.Diagram, "myDiagramDiv3");
        myDiagram.grid.visible = true;
        myDiagram.nodeTemplate = $(go.Node, "Auto", {
            resizable: true
        },
            $(go.Shape, "Rectangle", {
                fill: "lightgray"
            }),
            $(go.TextBlock, {
                margin: 5
            }, new go.Binding("text", "key")));
        let nodeDataArray = [{
            key: "Alpha"
        }, {
            key: "Beta"
        }, {
            key: "Gamma"
        }];
        myDiagram.model = new go.GraphLinksModel(nodeDataArray);
        myDiagram.toolManager.draggingTool.isGridSnapEnabled = true;
        myDiagram.toolManager.resizingTool.isGridSnapEnabled = true;
        myDiagram.grid.gridCellSize = new go.Size(50, 50);
        myDiagram.grid =
            $(go.Panel, "Grid", {
                gridCellSize: new go.Size(10, 10)
            },
                $(go.Shape, "lineH", {
                    stroke: "blue",
                    interval: 5
                }),
                $(go.Shape, "lineV", {
                    stroke: "green",
                    interval: 5
                }),
                $(go.Shape, "lineH", {
                    stroke: "lightblue"
                }),
                $(go.Shape, "lineV", {
                    stroke: "lightgreen"
                }),
            );
    }
    diagramRender4() {
        let myDiagram = $(go.Diagram, "myDiagramDiv4");
        myDiagram.grid.visible = true;
        myDiagram.nodeTemplate = $(go.Node, "Auto", {
            resizable: true
        },
            $(go.Shape, "Rectangle", {
                fill: "lightgray"
            }),
            $(go.TextBlock, {
                margin: 5
            }, new go.Binding("text", "key")));
        let nodeDataArray = [{
            key: "Alpha"
        }, {
            key: "Beta"
        }, {
            key: "Gamma"
        }];
        myDiagram.model = new go.GraphLinksModel(nodeDataArray);
        myDiagram.toolManager.draggingTool.isGridSnapEnabled = true;
        myDiagram.toolManager.resizingTool.isGridSnapEnabled = true;
        myDiagram.grid.gridCellSize = new go.Size(50, 50);
        myDiagram.grid =
            $(go.Panel, "Grid", {
                gridCellSize: new go.Size(50, 50)
            },
                $(go.Shape, "BarH", {
                    fill: "lime",
                    height: 50,
                    interval: 2
                })
            );
    }
    diagramRender5() {
        let myDiagram = $(go.Diagram, "myDiagramDiv5");
        myDiagram.grid.visible = true;
        myDiagram.nodeTemplate = $(go.Node, "Auto", {
            resizable: true
        },
            $(go.Shape, "Rectangle", {
                fill: "lightgray"
            }),
            $(go.TextBlock, {
                margin: 5
            }, new go.Binding("text", "key")));
        let nodeDataArray = [{
            key: "Alpha"
        }, {
            key: "Beta"
        }, {
            key: "Gamma"
        }];
        myDiagram.model = new go.GraphLinksModel(nodeDataArray);
        myDiagram.toolManager.draggingTool.isGridSnapEnabled = true;
        myDiagram.toolManager.resizingTool.isGridSnapEnabled = true;
        myDiagram.grid.gridCellSize = new go.Size(50, 50);
        myDiagram.grid =
            $(go.Panel, "Grid", {
                gridCellSize: new go.Size(50, 50)
            },
                $(go.Shape, "BarH", {
                    fill: "lime",
                    height: 50,
                    interval: 2,
                    opacity: .25
                }),
                $(go.Shape, "BarV", {
                    fill: "lime",
                    height: 50,
                    interval: 2,
                    opacity: .25
                })
            );
    }
    render() {
        return (
            <div className="page-content">
                <div className="article">
                    <div className="article-title">
                        <h1>GoJS 面板——第二节 网格面板(Grid Panel)</h1>
                    </div>
                    <div className="article-content">
                        <h2>Grid Panels</h2>
                        <ul>
                            <li>显示按一定间隔绘制的线条网格</li>
                            <li>Diagram.grid 是一个 Grid Panel</li>
                            <li>设置了 Diagram.grid 后,Part 可以根据网格对齐或调整大小</li>
                            <li>Grid Panel 中的元素必须是 Shape</li>
                        </ul>
                        <p>代码及效果如下:</p>
                        <CodeMirror value={code1} options={codeMirrorOptions} />
                        <div id="myDiagramDiv1" className="diagram" style={{ maxWidth: 600, height: 400 }}></div>
                        <h2>设置网格样式</h2>
                        <CodeMirror value={code2} options={codeMirrorOptions} />
                        <div id="myDiagramDiv2" className="diagram" style={{ maxWidth: 600, height: 400 }}></div>
                        <h2>Shape.Interval</h2>
                        <ul>
                            <li>指定在网格中绘制 Shape 的频率(以 gridCellSize 的倍数计算)</li>
                            <li>默认值:1</li>
                            <li>允许值:正整数</li>
                        </ul>
                        <CodeMirror value={code3} options={codeMirrorOptions} />
                        <div id="myDiagramDiv3" className="diagram" style={{ maxWidth: 600, height: 400 }}></div>
                        <h3>设置为条带状</h3>
                        <CodeMirror value={code4} options={codeMirrorOptions} />
                        <div id="myDiagramDiv4" className="diagram" style={{ maxWidth: 600, height: 400 }}></div>
                        <h3>支持透明度属性</h3>
                        <CodeMirror value={code5} options={codeMirrorOptions} />
                        <div id="myDiagramDiv5" className="diagram" style={{ maxWidth: 600, height: 400 }}></div>
                        <p><br /></p>
                        <p><br /></p>
                        <p>相关代码：</p>
                        <p><a href="https://github.com/LiuZheAb/GoJS_Demo/blob/master/14gridPanel.html" target="_blank" rel="noopener noreferrer">https://github.com/LiuZheAb/GoJS_Demo/blob/master/14gridPanel.html</a></p>
                    </div>
                </div>
                <Directory />
            </div>
        )
    }
}
