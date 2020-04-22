import React, { Component } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import 'codemirror/theme/monokai.css';
import Directory from "../../Directory";
import go from "gojs";

let $ = go.GraphObject.make;
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
myDiagram.layout = $(go.TreeLayout);
myDiagram.model =
    $(go.GraphLinksModel, {
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
        },{
            key: "Omega"
        },{
            key: "Phi"
        },{
            key: "Kappa"
        }, ],
        linkDataArray: [
            {from:"Alpha",to:"Beta"},
            {from:"Alpha",to:"Gamma"},
            {from:"Delta",to:"Alpha"},
            {from:"Delta",to:"Epsilon"},
            {from:"Gamma",to:"Zeta"},
            {from:"Gamma",to:"Omega"},
            {from:"Epsilon",to:"Kappa"},
            {from:"Gamma",to:"Phi"},
        ]
    })`;
let code2 = `myDiagram.layout = $(go.TreeLayout, {
    angle: 90
});`;
let code3 = `myDiagram.layout = $(go.TreeLayout, {
    angle: 90,
    layerSpacing:20
});`;
let code4 = `myDiagram.layout = $(go.TreeLayout, {
    angle: 90,
    layerSpacing:20,
    nodeSpacing: 100
});`;
let code5 = `myDiagram.layout = $(go.TreeLayout, {
    angle: 90,
    layerSpacing: 20,
    nodeSpacing: 100,
    alignment: go.TreeLayout.AlignmentStart
});`;
let code6 = `myDiagram.layout = $(go.TreeLayout, {
    angle: 90,
    layerSpacing: 20,
    nodeSpacing: 100,
    alignment: go.TreeLayout.AlignmentStart,
    sorting: go.TreeLayout.SortingAscending,
    comparer: function (a, b) {
        a = a.node;
        b = b.node;
        if (a.data.key < b.data.key) return -1;
        if (a.data.key > b.data.key) return 1;
        return 0;
    }
});`;
let code7 = `myDiagram.layout = $(go.TreeLayout, {
    angle: 90,
    layerSpacing: 20,
    nodeSpacing: 100,
    alignment: go.TreeLayout.AlignmentStart,
    sorting: go.TreeLayout.SortingAscending,
    comparer: function (a, b) {
        a = a.node;
        b = b.node;
        if (a.data.key < b.data.key) return -1;
        if (a.data.key > b.data.key) return 1;
        return 0;
    },
    treeStyle:go.TreeLayout.StyleRootOnly
});`;
let code8 = `myDiagram.layout = $(go.TreeLayout, {
    angle: 90,
    layerSpacing: 20,
    nodeSpacing: 100,
    alignment: go.TreeLayout.AlignmentStart,
    sorting: go.TreeLayout.SortingAscending,
    comparer: function (a, b) {
        a = a.node;
        b = b.node;
        if (a.data.key < b.data.key) return -1;
        if (a.data.key > b.data.key) return 1;
        return 0;
    },
    treeStyle: go.TreeLayout.StyleRootOnly,
    alternateAngle: 270
});`;

export default class index extends Component {
    componentDidMount() {
        this.diagramRender1();
        this.diagramRender2();
        this.diagramRender3();
        this.diagramRender4();
        this.diagramRender5();
        this.diagramRender6();
        this.diagramRender7();
        this.diagramRender8();
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
        myDiagram.layout = $(go.TreeLayout);
        myDiagram.model =
            $(go.GraphLinksModel, {
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
                }, {
                    key: "Omega"
                }, {
                    key: "Phi"
                }, {
                    key: "Kappa"
                },],
                linkDataArray: [
                    { from: "Alpha", to: "Beta" },
                    { from: "Alpha", to: "Gamma" },
                    { from: "Delta", to: "Alpha" },
                    { from: "Delta", to: "Epsilon" },
                    { from: "Gamma", to: "Zeta" },
                    { from: "Gamma", to: "Omega" },
                    { from: "Epsilon", to: "Kappa" },
                    { from: "Gamma", to: "Phi" },
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
        myDiagram.layout = $(go.TreeLayout, {
            angle: 90
        });
        myDiagram.model =
            $(go.GraphLinksModel, {
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
                }, {
                    key: "Omega"
                }, {
                    key: "Phi"
                }, {
                    key: "Kappa"
                },],
                linkDataArray: [
                    { from: "Alpha", to: "Beta" },
                    { from: "Alpha", to: "Gamma" },
                    { from: "Delta", to: "Alpha" },
                    { from: "Delta", to: "Epsilon" },
                    { from: "Gamma", to: "Zeta" },
                    { from: "Gamma", to: "Omega" },
                    { from: "Epsilon", to: "Kappa" },
                    { from: "Gamma", to: "Phi" },
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
        myDiagram.layout = $(go.TreeLayout, {
            angle: 90,
            layerSpacing: 20
        });
        myDiagram.model =
            $(go.GraphLinksModel, {
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
                }, {
                    key: "Omega"
                }, {
                    key: "Phi"
                }, {
                    key: "Kappa"
                },],
                linkDataArray: [
                    { from: "Alpha", to: "Beta" },
                    { from: "Alpha", to: "Gamma" },
                    { from: "Delta", to: "Alpha" },
                    { from: "Delta", to: "Epsilon" },
                    { from: "Gamma", to: "Zeta" },
                    { from: "Gamma", to: "Omega" },
                    { from: "Epsilon", to: "Kappa" },
                    { from: "Gamma", to: "Phi" },
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
        myDiagram.layout = $(go.TreeLayout, {
            angle: 90,
            layerSpacing: 20,
            nodeSpacing: 100
        });
        myDiagram.model =
            $(go.GraphLinksModel, {
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
                }, {
                    key: "Omega"
                }, {
                    key: "Phi"
                }, {
                    key: "Kappa"
                },],
                linkDataArray: [
                    { from: "Alpha", to: "Beta" },
                    { from: "Alpha", to: "Gamma" },
                    { from: "Delta", to: "Alpha" },
                    { from: "Delta", to: "Epsilon" },
                    { from: "Gamma", to: "Zeta" },
                    { from: "Gamma", to: "Omega" },
                    { from: "Epsilon", to: "Kappa" },
                    { from: "Gamma", to: "Phi" },
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
        myDiagram.layout = $(go.TreeLayout, {
            angle: 90,
            layerSpacing: 20,
            nodeSpacing: 100,
            alignment: go.TreeLayout.AlignmentStart
        });
        myDiagram.model =
            $(go.GraphLinksModel, {
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
                }, {
                    key: "Omega"
                }, {
                    key: "Phi"
                }, {
                    key: "Kappa"
                },],
                linkDataArray: [
                    { from: "Alpha", to: "Beta" },
                    { from: "Alpha", to: "Gamma" },
                    { from: "Delta", to: "Alpha" },
                    { from: "Delta", to: "Epsilon" },
                    { from: "Gamma", to: "Zeta" },
                    { from: "Gamma", to: "Omega" },
                    { from: "Epsilon", to: "Kappa" },
                    { from: "Gamma", to: "Phi" },
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
        myDiagram.layout = $(go.TreeLayout, {
            angle: 90,
            layerSpacing: 20,
            nodeSpacing: 100,
            alignment: go.TreeLayout.AlignmentStart,
            sorting: go.TreeLayout.SortingAscending,
            comparer: function (a, b) {
                a = a.node;
                b = b.node;
                if (a.data.key < b.data.key) return -1;
                if (a.data.key > b.data.key) return 1;
                return 0;
            }
        });
        myDiagram.model =
            $(go.GraphLinksModel, {
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
                }, {
                    key: "Omega"
                }, {
                    key: "Phi"
                }, {
                    key: "Kappa"
                },],
                linkDataArray: [
                    { from: "Alpha", to: "Beta" },
                    { from: "Alpha", to: "Gamma" },
                    { from: "Delta", to: "Alpha" },
                    { from: "Delta", to: "Epsilon" },
                    { from: "Gamma", to: "Zeta" },
                    { from: "Gamma", to: "Omega" },
                    { from: "Epsilon", to: "Kappa" },
                    { from: "Gamma", to: "Phi" },
                ]
            })
    }
    diagramRender7() {
        let myDiagram = $(go.Diagram, "myDiagramDiv7");

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
        myDiagram.layout = $(go.TreeLayout, {
            angle: 90,
            layerSpacing: 20,
            nodeSpacing: 100,
            alignment: go.TreeLayout.AlignmentStart,
            sorting: go.TreeLayout.SortingAscending,
            comparer: function (a, b) {
                a = a.node;
                b = b.node;
                if (a.data.key < b.data.key) return -1;
                if (a.data.key > b.data.key) return 1;
                return 0;
            },
            treeStyle: go.TreeLayout.StyleRootOnly
        });
        myDiagram.model =
            $(go.GraphLinksModel, {
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
                }, {
                    key: "Omega"
                }, {
                    key: "Phi"
                }, {
                    key: "Kappa"
                },],
                linkDataArray: [
                    { from: "Alpha", to: "Beta" },
                    { from: "Alpha", to: "Gamma" },
                    { from: "Delta", to: "Alpha" },
                    { from: "Delta", to: "Epsilon" },
                    { from: "Gamma", to: "Zeta" },
                    { from: "Gamma", to: "Omega" },
                    { from: "Epsilon", to: "Kappa" },
                    { from: "Gamma", to: "Phi" },
                ]
            })
    }
    diagramRender8() {
        let myDiagram = $(go.Diagram, "myDiagramDiv8");

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
        myDiagram.layout = $(go.TreeLayout, {
            angle: 90,
            layerSpacing: 20,
            nodeSpacing: 100,
            alignment: go.TreeLayout.AlignmentStart,
            sorting: go.TreeLayout.SortingAscending,
            comparer: function (a, b) {
                a = a.node;
                b = b.node;
                if (a.data.key < b.data.key) return -1;
                if (a.data.key > b.data.key) return 1;
                return 0;
            },
            treeStyle: go.TreeLayout.StyleRootOnly,
            alternateAngle: 270
        });
        myDiagram.model =
            $(go.GraphLinksModel, {
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
                }, {
                    key: "Omega"
                }, {
                    key: "Phi"
                }, {
                    key: "Kappa"
                },],
                linkDataArray: [
                    { from: "Alpha", to: "Beta" },
                    { from: "Alpha", to: "Gamma" },
                    { from: "Delta", to: "Alpha" },
                    { from: "Delta", to: "Epsilon" },
                    { from: "Gamma", to: "Zeta" },
                    { from: "Gamma", to: "Omega" },
                    { from: "Epsilon", to: "Kappa" },
                    { from: "Gamma", to: "Phi" },
                ]
            })
    }
    render() {
        return (
            <div className="page-content">
                <div className="article">
                    <div className="article-title">
                        <h1>GoJS 布局——第三节 树形布局(TreeLayout)</h1>
                    </div>
                    <div className="article-content">
                        <h2>示例</h2>
                        <CodeMirror
                            value={code1}
                            options={{
                                theme: 'monokai',
                                mode: 'JSX',
                                readOnly: true
                            }}
                        />
                        <div id="myDiagramDiv1" className="diagram" style={{ maxWidth: 600 }}></div>
                        <h2>angle</h2>
                        <ul>
                            <li>决定 Tree 展开的方向</li>
                            <li>默认值:0</li>
                            <li>允许值:0 | 90 | 180 | 270</li>
                        </ul>
                        <CodeMirror
                            value={code2}
                            options={{
                                theme: 'monokai',
                                mode: 'JSX',
                                readOnly: true
                            }}
                        />
                        <div id="myDiagramDiv2" className="diagram" style={{ height: 400, maxWidth: 600 }}></div>
                        <h2>layerSpacing</h2>
                        <ul>
                            <li>决定父/子 Node 间的距离</li>
                            <li>默认值:50</li>
                        </ul>
                        <CodeMirror
                            value={code3}
                            options={{
                                theme: 'monokai',
                                mode: 'JSX',
                                readOnly: true
                            }}
                        />
                        <div id="myDiagramDiv3" className="diagram" style={{ maxWidth: 600 }}></div>
                        <h2>nodeSpacing</h2>
                        <ul>
                            <li>决定兄弟 Node 间的距离</li>
                            <li>默认值:20</li>
                        </ul>
                        <CodeMirror
                            value={code4}
                            options={{
                                theme: 'monokai',
                                mode: 'JSX',
                                readOnly: true
                            }}
                        />
                        <div id="myDiagramDiv4" className="diagram" style={{ maxWidth: 600 }}></div>
                        <h2>alignment</h2>
                        <ul>
                            <li>决定父 Node 相对于其子 Node 的默认对齐方式</li>
                            <li>默认值:TreeLayout.AlinmentCenterChildrer</li>
                            <li>更多可选值请参考 <a href="https://gojs.net/latest/api/symbols/TreeLayout.html" target="_blank" rel="noopener noreferrer">TreeLayout-alignment</a></li>
                        </ul>
                        <CodeMirror
                            value={code5}
                            options={{
                                theme: 'monokai',
                                mode: 'JSX',
                                readOnly: true
                            }}
                        />
                        <div id="myDiagramDiv5" className="diagram" style={{ maxWidth: 600 }}></div>
                        <p>TreeLayout.AlignmentStart 将父 Node 定位在第一个子 Node 附近</p>
                        <h2>sorting</h2>
                        <ul>
                            <li>决定子 Node 的排序顺序</li>
                            <li>默认值:TreeLayout.SortingForwards</li>
                            <li>更多可选值请参考 <a href="https://gojs.net/latest/api/symbols/TreeLayout.html" target="_blank" rel="noopener noreferrer">TreeLayout-sorting</a></li>
                        </ul>
                        <CodeMirror
                            value={code6}
                            options={{
                                theme: 'monokai',
                                mode: 'JSX',
                                readOnly: true
                            }}
                        />
                        <div id="myDiagramDiv6" className="diagram" style={{ maxWidth: 600 }}></div>
                        <h2>treeStyle</h2>
                        <ul>
                            <li>决定哪些子 Tree 受默认属性影响</li>
                            <li>默认值:TreeLayout.StyleLayered</li>
                            <li>更多可选值请参考 <a href="https://gojs.net/latest/api/symbols/TreeLayout.html" target="_blank" rel="noopener noreferrer">TreeLayout-treeStyle</a></li>
                        </ul>
                        <CodeMirror
                            value={code7}
                            options={{
                                theme: 'monokai',
                                mode: 'JSX',
                                readOnly: true
                            }}
                        />
                        <div id="myDiagramDiv7" className="diagram" style={{ maxWidth: 600 }}></div>
                        <h2>alternateAngle</h2>
                        <ul>
                            <li>alternate{`<Style>`}决定哪些子 Tree 受 alternate 属性影响</li>
                            <li>alternateAngle 决定除 treeStyle 规定外的子 Tree 的展开方向</li>
                            <li>默认值:TreeLayout.StyleLayered</li>
                            <li>更多可选值请参考 <a href="https://gojs.net/latest/api/symbols/TreeLayout.html" target="_blank" rel="noopener noreferrer">TreeLayout-alternateAngle</a></li>
                        </ul>
                        <div className="tip">
                            <div className="tip-content">
                                <em>上面的 treeStyle 设置为 TreeLayout.StyleRootOnly,则"alternate"子树为除 root 节点外的子树</em>
                            </div>
                        </div>
                        <CodeMirror
                            value={code8}
                            options={{
                                theme: 'monokai',
                                mode: 'JSX',
                                readOnly: true
                            }}
                        />
                        <div id="myDiagramDiv8" className="diagram" style={{ maxWidth: 600 }}></div>
                        <br />
                        <br />
                        <p>相关代码：</p>
                        <p><a href="https://github.com/LiuZheAb/GoJS_Demo/blob/master/09treeLayout.html" target="_blank" rel="noopener noreferrer">https://github.com/LiuZheAb/GoJS_Demo/blob/master/09treeLayout.html</a></p>
                    </div>
                </div>
                <Directory />
            </div>
        )
    }
}
