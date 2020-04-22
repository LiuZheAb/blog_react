import React, { Component } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import 'codemirror/theme/monokai.css';
import Directory from "../../Directory";
import go from "gojs";

let $ = go.GraphObject.make;
let code1 = `let $ = go.GraphObject.make;
let myDiagram = $(go.Diagram, "myDiagramDiv");

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
myDiagram.layout = $(go.CircularLayout);
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
    });`;
let code2 = `myDiagram.layout = $(go.CircularLayout,{
    spacing:50
});`;
let code3 = `myDiagram.layout = $(go.CircularLayout,{
    spacing:50,
    radius:150
});`;
let code4 = `myDiagram.layout = $(go.CircularLayout,{
    spacing:50,
    radius:50,
    startAngle:90
});`;
let code5 = `myDiagram.layout = $(go.CircularLayout,{
    spacing:50,
    radius:50,
    startAngle:90,
    sweepAngle:180
});`;
let code6 = `myDiagram.layout = $(go.CircularLayout, {
    spacing: 50,
    radius: 50,
    startAngle: 90,
    sweepAngle: 360,
    aspectRatio: 1.5
});`;
let code7 = `myDiagram.layout = $(go.CircularLayout, {
    spacing: 50,
    radius: 50,
    startAngle: 90,
    sweepAngle: 360,
    aspectRatio: 1.5,
    direction:go.CircularLayout.Counterclockwise
});`;
let code8 = `myDiagram.layout = $(go.CircularLayout, {
    spacing: 50,
    radius: 50,
    startAngle: 90,
    sweepAngle: 360,
    aspectRatio: 1.5,
    direction: go.CircularLayout.Clockwise,
    sorting: go.CircularLayout.Forwards
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
        myDiagram.layout = $(go.CircularLayout);
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
        myDiagram.layout = $(go.CircularLayout, {
            spacing: 50
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
        myDiagram.layout = $(go.CircularLayout, {
            spacing: 50,
            radius: 150
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
        myDiagram.layout = $(go.CircularLayout, {
            spacing: 50,
            radius: 50,
            startAngle: 90
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
        myDiagram.layout = $(go.CircularLayout, {
            spacing: 50,
            radius: 50,
            startAngle: 90,
            sweepAngle: 180
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
        myDiagram.layout = $(go.CircularLayout, {
            spacing: 50,
            radius: 50,
            startAngle: 90,
            sweepAngle: 360,
            aspectRatio: 1.5
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
        myDiagram.layout = $(go.CircularLayout, {
            spacing: 50,
            radius: 50,
            startAngle: 90,
            sweepAngle: 360,
            aspectRatio: 1.5,
            direction: go.CircularLayout.Counterclockwise
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
        myDiagram.layout = $(go.CircularLayout, {
            spacing: 50,
            radius: 50,
            startAngle: 90,
            sweepAngle: 360,
            aspectRatio: 1.5,
            direction: go.CircularLayout.Clockwise,
            sorting: go.CircularLayout.Forwards
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
                        <h1>GoJS 布局——第六节 环状布局(CircularLayout)</h1>
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
                        <div id="myDiagramDiv1" className="diagram" style={{ maxWidth: 600, height: 350 }}></div>
                        <h2>spacing</h2>
                        <ul>
                            <li>决定 Node 间的距离</li>
                            <li>默认值:6</li>
                            <li>可能的值:Number|NaN</li>
                        </ul>
                        <CodeMirror
                            value={code2}
                            options={{
                                theme: 'monokai',
                                mode: 'JSX',
                                readOnly: true
                            }}
                        />
                        <div id="myDiagramDiv2" className="diagram" style={{ maxWidth: 600, height: 350 }}></div>
                        <h2>radius</h2>
                        <ul>
                            <li>确定布局的椭圆的水平半径</li>
                            <li>默认值:NaN(半径由"spacing"决定)</li>
                        </ul>
                        <p>特殊:如果"spacing"和"radius"都有定义，则有效半径可以大于"radius"属性(以容纳"spacing")</p>
                        <CodeMirror
                            value={code3}
                            options={{
                                theme: 'monokai',
                                mode: 'JSX',
                                readOnly: true
                            }}
                        />
                        <div id="myDiagramDiv3" className="diagram" style={{ maxWidth: 600, height: 350 }}></div>
                        <div className="text-center">
                            <img src={require("../../../assets/images/20200407213951.png")} alt="" />
                        </div>
                        <p>radius:150,spacing:50(但实际的 spacing 更大,因为要适应更大的 radius)</p>
                        <div className="text-center">
                            <img src={require("../../../assets/images/20200407214315.png")} alt="" />
                        </div>
                        <p>radius:50(但实际的 radius 更大,因为要适应的 spacing),spacing:50</p>
                        <h2>startAngle</h2>
                        <ul>
                            <li>决定第一个元素的角度</li>
                            <li>默认值:0</li>
                        </ul>
                        <CodeMirror
                            value={code4}
                            options={{
                                theme: 'monokai',
                                mode: 'JSX',
                                readOnly: true
                            }}
                        />
                        <div id="myDiagramDiv4" className="diagram" style={{ maxWidth: 600, height: 350 }}></div>
                        <div className="text-center">
                            <img src={require("../../../assets/images/20200407215235.png")} alt="" />
                        </div>
                        <p>如图所示,Zeta 从 0 顺时针旋转 90° 到 90 的位置</p>
                        <h2>sweepAngle</h2>
                        <ul>
                            <li>决定布局中第一个/最后一个节点之间的绝对角度</li>
                            <li>默认值:360(满圆)</li>
                            <li>允许的值:{"0 < value <= 360"}</li>
                        </ul>
                        <CodeMirror
                            value={code5}
                            options={{
                                theme: 'monokai',
                                mode: 'JSX',
                                readOnly: true
                            }}
                        />
                        <div id="myDiagramDiv5" className="diagram" style={{ maxWidth: 600, height: 500 }}></div>
                        <div className="text-center">
                            <img src={require("../../../assets/images/20200407220047.png")} alt="" />
                        </div>
                        <h2>aspectRatio</h2>
                        <ul>
                            <li>决定 CircularLayout 高度:宽度的比例</li>
                            <li>默认值:1(正圆)</li>
                        </ul>
                        <CodeMirror
                            value={code6}
                            options={{
                                theme: 'monokai',
                                mode: 'JSX',
                                readOnly: true
                            }}
                        />
                        <div id="myDiagramDiv6" className="diagram" style={{ maxWidth: 600, height: 350 }}></div>
                        <h2>direction</h2>
                        <ul>
                            <li>决定 Node 是顺时针还是逆时针排列</li>
                            <li>默认值:CircularLayout.Clockwise(顺时针)</li>
                        </ul>
                        <CodeMirror
                            value={code7}
                            options={{
                                theme: 'monokai',
                                mode: 'JSX',
                                readOnly: true
                            }}
                        />
                        <div id="myDiagramDiv7" className="diagram" style={{ maxWidth: 600, height: 350 }}></div>
                        <h2>sorting</h2>
                        <ul>
                            <li>确定如何对 CircularLayout 中的 Node 排序</li>
                            <li>可能的值:</li>
                        </ul>
                        <ul data-lake-indent="1">
                            <li>CircularLayout.Ascending 升序</li>
                            <li>CircularLayout.Descending 降序</li>
                            <li>CircularLayout.Forwards 正向</li>
                            <li>CircularLayout.Optimized 最优化</li>
                            <li>CircularLayout.Reverse 反向</li>
                        </ul>
                        <CodeMirror
                            value={code8}
                            options={{
                                theme: 'monokai',
                                mode: 'JSX',
                                readOnly: true
                            }}
                        />
                        <div id="myDiagramDiv8" className="diagram" style={{ maxWidth: 600, height: 350 }}></div>
                        <p>设置为 Forwards 后,可以看到,Node 按照 Alpha、Beta、Gamma、Delta、Epsilon、Zeta(希腊字母顺序)的顺序排列</p>
                        <br />
                        <br />
                        <p>相关代码：</p>
                        <p><a href="https://github.com/LiuZheAb/GoJS_Demo/blob/master/12circularLayout.html" target="_blank" rel="noopener noreferrer">https://github.com/LiuZheAb/GoJS_Demo/blob/master/12circularLayout.html</a></p>
                    </div>
                </div>
                <Directory />
            </div>
        )
    }
}
