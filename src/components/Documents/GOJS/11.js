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
myDiagram.layout = $(go.ForceDirectedLayout);
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
        linkDataArray: [{
            from: "Alpha",
            to: "Beta"
        }, {
            from: "Alpha",
            to: "Gamma"
        }, {
            from: "Alpha",
            to: "Delta"
        }, {
            from: "Alpha",
            to: "Epsilon"
        }, {
            from: "Alpha",
            to: "Zeta"
        }, {
            from: "Alpha",
            to: "Omega"
        }, {
            from: "Alpha",
            to: "Phi"
        }, {
            from: "Alpha",
            to: "Kappa"
        }]
    })`;
let code2 = `myDiagram.layout = $(go.ForceDirectedLayout, {
     defaultElectricalCharge: 300,
     }
});`;
let code3 = `myDiagram.layout = $(go.ForceDirectedLayout, {
    defaultElectricalCharge: 300,
    defaultSpringLength: 100
    }
});`;
let code4 = `myDiagram.layout = $(go.ForceDirectedLayout, {
    defaultElectricalCharge: 300,
    defaultSpringLength: 100,
    defaultSpringStiffness: 0.2,
    }
});`;
let code5 = `myDiagram.layout = $(go.ForceDirectedLayout, {
    defaultElectricalCharge: 300,
    defaultSpringLength: 200,
    defaultSpringStiffness: 0.2,
    defaultGravitationalMass:0,
    isFixed: function (v) {
        let node = v.node;
        if (!node) return false;
        else return node.data.key === "Beta";
    }
});`;

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
        myDiagram.layout = $(go.ForceDirectedLayout);
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
                linkDataArray: [{
                    from: "Alpha",
                    to: "Beta"
                }, {
                    from: "Alpha",
                    to: "Gamma"
                }, {
                    from: "Alpha",
                    to: "Delta"
                }, {
                    from: "Alpha",
                    to: "Epsilon"
                }, {
                    from: "Alpha",
                    to: "Zeta"
                }, {
                    from: "Alpha",
                    to: "Omega"
                }, {
                    from: "Alpha",
                    to: "Phi"
                }, {
                    from: "Alpha",
                    to: "Kappa"
                }]
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
        myDiagram.layout = $(go.ForceDirectedLayout, {
            defaultElectricalCharge: 300,
        });
        myDiagram.model =
            $(go.GraphLinksModel, {
                nodeDataArray: [{
                    key: "Alpha",
                }, {
                    key: "Beta",
                }, {
                    key: "Gamma"
                },],
                linkDataArray: [{
                    from: "Alpha",
                    to: "Beta"
                },
                {
                    from: "Alpha",
                    to: "Gamma"
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
        myDiagram.layout = $(go.ForceDirectedLayout, {
            defaultElectricalCharge: 300,
            defaultSpringLength: 100,
        });
        myDiagram.model =
            $(go.GraphLinksModel, {
                nodeDataArray: [{
                    key: "Alpha",
                }, {
                    key: "Beta",
                }, {
                    key: "Gamma"
                },],
                linkDataArray: [{
                    from: "Alpha",
                    to: "Beta"
                },
                {
                    from: "Alpha",
                    to: "Gamma"
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
        myDiagram.layout = $(go.ForceDirectedLayout, {
            defaultElectricalCharge: 300,
            defaultSpringLength: 100,
            defaultSpringStiffness: 0.2,
        });
        myDiagram.model =
            $(go.GraphLinksModel, {
                nodeDataArray: [{
                    key: "Alpha",
                }, {
                    key: "Beta",
                }, {
                    key: "Gamma"
                },],
                linkDataArray: [{
                    from: "Alpha",
                    to: "Beta"
                },
                {
                    from: "Alpha",
                    to: "Gamma"
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
        myDiagram.layout = $(go.ForceDirectedLayout, {
            defaultElectricalCharge: 300,
            defaultSpringLength: 200,
            defaultSpringStiffness: 0.2,
            defaultGravitationalMass: 0,
            isFixed: function (v) {
                let node = v.node;
                if (!node) return false;
                else return node.data.key === "Beta";
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
                },],
                linkDataArray: [{
                    from: "Alpha",
                    to: "Beta"
                },
                {
                    from: "Alpha",
                    to: "Gamma"
                }
                ]
            })
    }
    render() {
        return (
            <div className="page-content">
                <div className="article">
                    <div className="article-title">
                        <h1>GoJS 布局——第四节 力导向布局(ForceDirectedLayout)</h1>
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
                        <div id="myDiagramDiv1" className="diagram" style={{ height: 500, maxWidth: 600 }}></div>
                        <h2>简介</h2>
                        <p>力导向布局算法是一类绘图算法，它仅仅基于图的结构本身来绘图，而不依赖于上下文信息。</p>
                        <p>GoJS ForceDirected Layout 有三种</p>
                        <ul>
                            <li>电场斥力</li>
                            <li>引力</li>
                            <li>弹簧力</li>
                        </ul>
                        <h2>电场斥力</h2>
                        <p>把每个 Node 看做一个电荷,电荷与电荷之间存在斥力,也就是库仑力,根据库仑定律(Coulomb's law),电荷之间的斥力可以这么计算:</p>
                        <div className="text-center">
                            <img src={require("../../../assets/images/coulomb.png")} alt="" />
                        </div>
                        <p className="text-center">Coulomb's law</p>
                        <ul>
                            <li>k 为库仑常数(静电力常量)</li>
                            <li>q 为电荷带电量</li>
                            <li>r 为电荷间距</li>
                        </ul>
                        <h3>defaultElectricalCharge</h3>
                        <ul>
                            <li>决定 Node 间的距离，即 r</li>
                            <li>默认值：150</li>
                        </ul>
                        <CodeMirror
                            value={code2}
                            options={{
                                theme: 'monokai',
                                mode: 'JSX',
                                readOnly: true
                            }}
                        />
                        <div id="myDiagramDiv2" className="diagram" style={{ height: 500, maxWidth: 600 }}></div>
                        <h2>引力</h2>
                        <h3>defaultGravitationalMass </h3>
                        <ul>
                            <li>决定 Node 间的引力系数</li>
                            <li>默认值：0</li>
                        </ul>
                        <h2>弹簧力</h2>
                        <h3>defaultSpringLength</h3>
                        <ul>
                            <li>决定 Node 间弹簧的长度</li>
                            <li>默认值：50</li>
                        </ul>
                        <CodeMirror
                            value={code3}
                            options={{
                                theme: 'monokai',
                                mode: 'JSX',
                                readOnly: true
                            }}
                        />
                        <div id="myDiagramDiv3" className="diagram" style={{ height: 500, maxWidth: 600 }}></div>
                        <h3>defaultSpringStiffness</h3>
                        <ul>
                            <li>决定 Node 间弹簧的刚度</li>
                            <li>默认值：0.05</li>
                        </ul>
                        <CodeMirror
                            value={code4}
                            options={{
                                theme: 'monokai',
                                mode: 'JSX',
                                readOnly: true
                            }}
                        />
                        <div id="myDiagramDiv4" className="diagram" style={{ height: 500, maxWidth: 600 }}></div>
                        <h2>isFixed</h2>
                        <ul>
                            <li>为 true 时 Node 不会被 Layout 影响，但仍然对附近和连接的 Node 有影响。即 Node 自身被固定</li>
                        </ul>
                        <CodeMirror
                            value={code5}
                            options={{
                                theme: 'monokai',
                                mode: 'JSX',
                                readOnly: true
                            }}
                        />
                        <div id="myDiagramDiv5" className="diagram" style={{ height: 500, maxWidth: 600 }}></div>
                        <br />
                        <br />
                        <p>相关代码：</p>
                        <p><a href="https://github.com/LiuZheAb/GoJS_Demo/blob/master/10forceDirectedLayout.html" target="_blank" rel="noopener noreferrer">https://github.com/LiuZheAb/GoJS_Demo/blob/master/10forceDirectedLayout.html</a></p>
                    </div>
                </div>
                <Directory />
            </div>
        )
    }
}
