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
let code1 = `let myDiagram = $(go.Diagram, "myDiagramDiv");
myDiagram.nodeTemplate =
    $(go.Node, "Auto",
        $(go.Shape, "RoundedRectangle", {
            fill: "lightblue"
        }),
        $(go.TextBlock, {
                margin: 8
            },
            new go.Binding("text", "key"))
    );
myDiagram.layout = $(go.LayeredDigraphLayout);
myDiagram.model =$(go.GraphLinksModel, {
    nodeDataArray: [{
        key: "Alpha",
    }, {
        key: "Beta",
    }, {
        key: "Gamma"
    }, {
        key: "Delta"
    }, {
        key: "Epsilon"
    }, {
        key: "Zeta"
    }],
    linkDataArray: [{
        from: "Alpha",
        to: "Beta"
    },
    {
        from: "Alpha",
        to: "Gamma"
    },
    {
        from: "Beta",
        to: "Delta"
    },
    {
        from: "Delta",
        to: "Epsilon"
    },
    {
        from: "Zeta",
        to: "Epsilon"
    }]
})`;
let code2 = `myDiagram.layout = $(go.LayeredDigraphLayout,{
    direction:90
});`;
let code3 = `myDiagram.layout = $(go.LayeredDigraphLayout,{
    direction:90,
    layerSpacing: 50,
    columnSpacing: 100
});`;
let code4 = `myDiagram.layout = $(go.LayeredDigraphLayout, {
    direction: 90,
    layerSpacing: 25,
    columnSpacing: 25,
    layeringOption:go.LayeredDigraphLayout.LayerLongestPathSink
});`;
let code5 = `myDiagram.layout = $(go.LayeredDigraphLayout, {
    direction: 90,
    layerSpacing: 25,
    columnSpacing: 25,
    layeringOption: go.LayeredDigraphLayout.LayerLongestPathSource
});`;
let code6 = `myDiagram.layout = $(go.LayeredDigraphLayout, {
    direction: 90,
    layerSpacing: 25,
    columnSpacing: 25,
    layeringOption: go.LayeredDigraphLayout.LayerOptimalLinkLength
});`;

export default class index extends Component {
    componentDidMount() {
        this.diagramRender1();
        this.diagramRender2();
        this.diagramRender3();
        this.diagramRender4();
        this.diagramRender5();
        this.diagramRender6();
    }
    diagramRender1() {
        let myDiagram = $(go.Diagram, "myDiagramDiv1");

        myDiagram.nodeTemplate =
            $(go.Node, "Auto",
                $(go.Shape, "RoundedRectangle", {
                    fill: "lightblue"
                }),
                $(go.TextBlock, {
                    margin: 8
                },
                    new go.Binding("text", "key"))
            );
        myDiagram.layout = $(go.LayeredDigraphLayout);
        myDiagram.model = $(go.GraphLinksModel, {
            nodeDataArray: [{
                key: "Alpha",
            }, {
                key: "Beta",
            }, {
                key: "Gamma"
            }, {
                key: "Delta"
            }, {
                key: "Epsilon"
            }, {
                key: "Zeta"
            }],
            linkDataArray: [{
                from: "Alpha",
                to: "Beta"
            },
            {
                from: "Alpha",
                to: "Gamma"
            },
            {
                from: "Beta",
                to: "Delta"
            },
            {
                from: "Delta",
                to: "Epsilon"
            },
            {
                from: "Zeta",
                to: "Epsilon"
            }
            ]
        })
    }
    diagramRender2() {
        let myDiagram = $(go.Diagram, "myDiagramDiv2");

        myDiagram.nodeTemplate =
            $(go.Node, "Auto",
                $(go.Shape, "RoundedRectangle", {
                    fill: "lightblue"
                }),
                $(go.TextBlock, {
                    margin: 8
                },
                    new go.Binding("text", "key"))
            );
        myDiagram.layout = $(go.LayeredDigraphLayout, {
            direction: 90
        });
        myDiagram.model = $(go.GraphLinksModel, {
            nodeDataArray: [{
                key: "Alpha",
            }, {
                key: "Beta",
            }, {
                key: "Gamma"
            }, {
                key: "Delta"
            }, {
                key: "Epsilon"
            }, {
                key: "Zeta"
            }],
            linkDataArray: [{
                from: "Alpha",
                to: "Beta"
            },
            {
                from: "Alpha",
                to: "Gamma"
            },
            {
                from: "Beta",
                to: "Delta"
            },
            {
                from: "Delta",
                to: "Epsilon"
            },
            {
                from: "Zeta",
                to: "Epsilon"
            }
            ]
        })
    }
    diagramRender3() {
        let myDiagram = $(go.Diagram, "myDiagramDiv3");

        myDiagram.nodeTemplate =
            $(go.Node, "Auto",
                $(go.Shape, "RoundedRectangle", {
                    fill: "lightblue"
                }),
                $(go.TextBlock, {
                    margin: 8
                },
                    new go.Binding("text", "key"))
            );
        myDiagram.layout = $(go.LayeredDigraphLayout, {
            direction: 90,
            layerSpacing: 50,
            columnSpacing: 100
        });
        myDiagram.model = $(go.GraphLinksModel, {
            nodeDataArray: [{
                key: "Alpha",
            }, {
                key: "Beta",
            }, {
                key: "Gamma"
            }, {
                key: "Delta"
            }, {
                key: "Epsilon"
            }, {
                key: "Zeta"
            }],
            linkDataArray: [{
                from: "Alpha",
                to: "Beta"
            },
            {
                from: "Alpha",
                to: "Gamma"
            },
            {
                from: "Beta",
                to: "Delta"
            },
            {
                from: "Delta",
                to: "Epsilon"
            },
            {
                from: "Zeta",
                to: "Epsilon"
            }
            ]
        })
    }
    diagramRender4() {
        let myDiagram = $(go.Diagram, "myDiagramDiv4");

        myDiagram.nodeTemplate =
            $(go.Node, "Auto",
                $(go.Shape, "RoundedRectangle", {
                    fill: "lightblue"
                }),
                $(go.TextBlock, {
                    margin: 8
                },
                    new go.Binding("text", "key"))
            );
        myDiagram.layout = $(go.LayeredDigraphLayout, {
            direction: 90,
            layerSpacing: 25,
            columnSpacing: 25,
            layeringOption: go.LayeredDigraphLayout.LayerLongestPathSink
        });
        myDiagram.model = $(go.GraphLinksModel, {
            nodeDataArray: [{
                key: "Alpha",
            }, {
                key: "Beta",
            }, {
                key: "Gamma"
            }, {
                key: "Delta"
            }, {
                key: "Epsilon"
            }, {
                key: "Zeta"
            }],
            linkDataArray: [{
                from: "Alpha",
                to: "Beta"
            },
            {
                from: "Alpha",
                to: "Gamma"
            },
            {
                from: "Beta",
                to: "Delta"
            },
            {
                from: "Delta",
                to: "Epsilon"
            },
            {
                from: "Zeta",
                to: "Epsilon"
            }
            ]
        })
    }
    diagramRender5() {
        let myDiagram = $(go.Diagram, "myDiagramDiv5");

        myDiagram.nodeTemplate =
            $(go.Node, "Auto",
                $(go.Shape, "RoundedRectangle", {
                    fill: "lightblue"
                }),
                $(go.TextBlock, {
                    margin: 8
                },
                    new go.Binding("text", "key"))
            );
        myDiagram.layout = $(go.LayeredDigraphLayout, {
            direction: 90,
            layerSpacing: 25,
            columnSpacing: 25,
            layeringOption: go.LayeredDigraphLayout.LayerLongestPathSource
        });
        myDiagram.model = $(go.GraphLinksModel, {
            nodeDataArray: [{
                key: "Alpha",
            }, {
                key: "Beta",
            }, {
                key: "Gamma"
            }, {
                key: "Delta"
            }, {
                key: "Epsilon"
            }, {
                key: "Zeta"
            }],
            linkDataArray: [{
                from: "Alpha",
                to: "Beta"
            },
            {
                from: "Alpha",
                to: "Gamma"
            },
            {
                from: "Beta",
                to: "Delta"
            },
            {
                from: "Delta",
                to: "Epsilon"
            },
            {
                from: "Zeta",
                to: "Epsilon"
            }
            ]
        })
    }
    diagramRender6() {
        let myDiagram = $(go.Diagram, "myDiagramDiv6");

        myDiagram.nodeTemplate =
            $(go.Node, "Auto",
                $(go.Shape, "RoundedRectangle", {
                    fill: "lightblue"
                }),
                $(go.TextBlock, {
                    margin: 8
                },
                    new go.Binding("text", "key"))
            );
        myDiagram.layout = $(go.LayeredDigraphLayout, {
            direction: 90,
            layerSpacing: 25,
            columnSpacing: 25,
            layeringOption: go.LayeredDigraphLayout.LayerOptimalLinkLength
        });
        myDiagram.model = $(go.GraphLinksModel, {
            nodeDataArray: [{
                key: "Alpha",
            }, {
                key: "Beta",
            }, {
                key: "Gamma"
            }, {
                key: "Delta"
            }, {
                key: "Epsilon"
            }, {
                key: "Zeta"
            }],
            linkDataArray: [{
                from: "Alpha",
                to: "Beta"
            },
            {
                from: "Alpha",
                to: "Gamma"
            },
            {
                from: "Beta",
                to: "Delta"
            },
            {
                from: "Delta",
                to: "Epsilon"
            },
            {
                from: "Zeta",
                to: "Epsilon"
            }
            ]
        })
    }
    render() {
        return (
            <div className="page-content">
                <div className="article">
                    <div className="article-title">
                        <h1>GoJS 布局——第五节 层次布局(LayeredDigraphLayout)</h1>
                    </div>
                    <div className="article-content">
                        <h2>示例</h2>
                        <CodeMirror 
                            value={code1} options={codeMirrorOptions} />
                        <div id="myDiagramDiv1" className="diagram" style={{ maxWidth: 600 }}></div>
                        <h2>direction</h2>
                        <ul>
                            <li>决定展开的方向</li>
                            <li>默认值:0</li>
                            <li>允许值:0 | 90 | 180 | 270</li>
                        </ul>
                        <CodeMirror 
                            value={code2} options={codeMirrorOptions} />
                        <div id="myDiagramDiv2" className="diagram" style={{ maxWidth: 600, height: 350 }}></div>
                        <h2>layerSpacing</h2>
                        <ul>
                            <li>决定层间距</li>
                            <li>默认值:25</li>
                        </ul>
                        <h2>columnSpacing</h2>
                        <ul>
                            <li>决定列间距</li>
                            <li>默认值:25</li>
                        </ul>
                        <CodeMirror 
                            value={code3} options={codeMirrorOptions} />
                        <div id="myDiagramDiv3" className="diagram" style={{ maxWidth: 600, height: 400 }}></div>
                        <h2>layingOption</h2>
                        <ul>
                            <li>决定布局中的 Node 如何分配到不同的 layer 中</li>
                            <li>可能的值:</li>
                        </ul>
                        <ul data-lake-indent="1">
                            <li>LayerLongestPathSink</li>
                            <li>LayerLongestPathSource</li>
                            <li>LayerOptimalLinkLength</li>
                        </ul>
                        <h3>LayerLongestPathSink</h3>
                        <p>sink = 没有 Link 离开的 Node</p>
                        <CodeMirror 
                            value={code4} options={codeMirrorOptions} />
                        <div id="myDiagramDiv4" className="diagram" style={{ maxWidth: 600, height: 350 }}></div>
                        <p>其中，Epsilon 和 Gamma 为 sink</p>
                        <h3>LaverLongestPathSource</h3>
                        <p>source = 没有 Link 进入的 Node</p>
                        <CodeMirror 
                            value={code5} options={codeMirrorOptions} />
                        <div id="myDiagramDiv5" className="diagram" style={{ maxWidth: 600, height: 350 }}></div>
                        <p>其中，Alpha 和 Zeta 为 source</p>
                        <h3>LayerOptimalLinkLength</h3>
                        <ul>
                            <li>Node 以最小化总加权 Link 长度分层</li>
                            <li>linkLength = layer(fromNode) - layer(toNode)</li>
                        </ul>
                        <CodeMirror 
                            value={code6} options={codeMirrorOptions} />
                        <div id="myDiagramDiv6" className="diagram" style={{ maxWidth: 600, height: 350 }}></div>
                        <p>其中,由下向上,Episilon 为第一层, Delta 和 Zeta 为第二层, Beta 和 Gamma 为第三层, Alpha 为第四层</p>
                        <p>共有 5 条 Link,每条 Link 的 linkLength 均为 1,共计 5,是最小方案</p>
                        <br />
                        <br />
                        <p>相关代码：</p>
                        <p><a href="https://github.com/LiuZheAb/GoJS_Demo/blob/master/11layeredDigraphLayout.html" target="_blank" rel="noopener noreferrer">https://github.com/LiuZheAb/GoJS_Demo/blob/master/11layeredDigraphLayout.html</a></p>
                    </div>
                </div>
                <Directory />
            </div>
        )
    }
}
