import React, { Component } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import 'codemirror/theme/monokai.css';
import Directory from "../../Directory";
import go from "gojs";

let $ = go.GraphObject.make;
let code1 = `let $ = go.GraphObject.make;
let myDiagram = $(go.Diagram, "myDiagramDiv");
myDiagram.add(
    $(go.Part, "Graduated", {
            background: "white"
        },
        $(go.Shape, "LineH", {
            width: 300
        }),
        $(go.Shape, "LineV", {
            height: 10
        })
    )
);`;
let code2 = `myDiagram.add(
    $(go.Part, "Graduated", {
            background: "white"
        },
        $(go.Shape, "LineH", {
            width: 300
        }),
        $(go.Shape, "LineV", {
            height: 10
        }),
        $(go.TextBlock, {
            segmentOffset: new go.Point(0, 20)
        })
    )
);`;
let code3 = `myDiagram.add(
    $(go.Part, "Graduated", {
            background: "white",
            graduatedMin: 0,
            graduatedMax: 200,
            graduatedTickUnit: 20
        },
        $(go.Shape, "LineH", {
            width: 300
        }),
        $(go.Shape, "LineV", {
            height: 10
        }),
        $(go.TextBlock, {
            segmentOffset: new go.Point(0, 20)
        })
    )
);`;
let code4 = `myDiagram.add(
    $(go.Part, "Graduated", {
            background: "white",
            graduatedMin: 0,
            graduatedMax: 200,
            graduatedTickUnit: 20,
            graduatedTickBase: 15
        },
        $(go.Shape, "LineH", {
            width: 300
        }),
        $(go.Shape, "LineV", {
            height: 10
        }),
        $(go.TextBlock, {
            segmentOffset: new go.Point(0, 20)
        })
    )
);`;
let code5 = `myDiagram.add(
    $(go.Part, "Graduated", {
            background: "white",
            graduatedMin: 0,
            graduatedMax: 200,
            graduatedTickUnit: 10,
            graduatedTickBase: 0
        },
        $(go.Shape, "LineH", {
            width: 300
        }),
        $(go.Shape, "LineV", {
            height: 10,
            interval: 2,
        }),
        $(go.TextBlock, {
            segmentOffset: new go.Point(0, 10),
            interval: 2,
            stroke: "blue",
            font: "10px sans-serif"
        })
    )
);`;
let code6 = `myDiagram.add(
    $(go.Part, "Graduated", {
            background: "white",
            graduatedMin: 0,
            graduatedMax: 200,
            graduatedTickUnit: 10,
            graduatedTickBase: 0
        },
        $(go.Shape, "LineH", {
            width: 300
        }),
        $(go.Shape, "LineV", {
            height: 10,
            interval: 2,
        }),
        $(go.TextBlock, {
            segmentOffset: new go.Point(0, 10),
            interval: 2,
            stroke: "blue",
            font: "10px sans-serif"
        }),
        $(go.TextBlock, {
            segmentOffset: new go.Point(0, 20),
            interval: 4,
            font: "bold 12px sans-serif"
        }),
    )
);`;

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
        myDiagram.add(
            $(go.Part, "Graduated", {
                background: "white"
            },
                $(go.Shape, "LineH", {
                    width: 300
                }),
                $(go.Shape, "LineV", {
                    height: 10
                })
            )
        );
    }
    diagramRender2() {
        let myDiagram = $(go.Diagram, "myDiagramDiv2");
        myDiagram.add(
            $(go.Part, "Graduated", {
                background: "white"
            },
                $(go.Shape, "LineH", {
                    width: 300
                }),
                $(go.Shape, "LineV", {
                    height: 10
                }),
                $(go.TextBlock, {
                    segmentOffset: new go.Point(0, 20)
                })
            )
        );
    }
    diagramRender3() {
        let myDiagram = $(go.Diagram, "myDiagramDiv3");
        myDiagram.add(
            $(go.Part, "Graduated", {
                background: "white",
                graduatedMin: 0,
                graduatedMax: 200,
                graduatedTickUnit: 20
            },
                $(go.Shape, "LineH", {
                    width: 300
                }),
                $(go.Shape, "LineV", {
                    height: 10
                }),
                $(go.TextBlock, {
                    segmentOffset: new go.Point(0, 20)
                })
            )
        );
    }
    diagramRender4() {
        let myDiagram = $(go.Diagram, "myDiagramDiv4");
        myDiagram.add(
            $(go.Part, "Graduated", {
                background: "white",
                graduatedMin: 0,
                graduatedMax: 200,
                graduatedTickUnit: 20,
                graduatedTickBase: 15
            },
                $(go.Shape, "LineH", {
                    width: 300
                }),
                $(go.Shape, "LineV", {
                    height: 10
                }),
                $(go.TextBlock, {
                    segmentOffset: new go.Point(0, 20)
                })
            )
        );
    }
    diagramRender5() {
        let myDiagram = $(go.Diagram, "myDiagramDiv5");
        myDiagram.add(
            $(go.Part, "Graduated", {
                background: "white",
                graduatedMin: 0,
                graduatedMax: 200,
                graduatedTickUnit: 10,
                graduatedTickBase: 0
            },
                $(go.Shape, "LineH", {
                    width: 300
                }),
                $(go.Shape, "LineV", {
                    height: 10,
                    interval: 2,
                }),
                $(go.TextBlock, {
                    segmentOffset: new go.Point(0, 10),
                    interval: 2,
                    stroke: "blue",
                    font: "10px sans-serif"
                })
            )
        );
    }
    diagramRender6() {
        let myDiagram = $(go.Diagram, "myDiagramDiv6");
        myDiagram.add(
            $(go.Part, "Graduated", {
                background: "white",
                graduatedMin: 0,
                graduatedMax: 200,
                graduatedTickUnit: 10,
                graduatedTickBase: 0
            },
                $(go.Shape, "LineH", {
                    width: 300
                }),
                $(go.Shape, "LineV", {
                    height: 10,
                    interval: 2,
                }),
                $(go.TextBlock, {
                    segmentOffset: new go.Point(0, 10),
                    interval: 2,
                    stroke: "blue",
                    font: "10px sans-serif"
                }),
                $(go.TextBlock, {
                    segmentOffset: new go.Point(0, 20),
                    interval: 4,
                    font: "bold 12px sans-serif"
                }),
            )
        );
    }
    render() {
        return (
            <div className="page-content">
                <div className="article">
                    <div className="article-title">
                        <h1>GoJS面板——第三节 刻度面板(Graduated Panel)</h1>
                    </div>
                    <div className="article-content">
                        <h2>Graduated Panels</h2>
                        <ul>
                            <li>用于沿着主要Shape的边绘制规则的标记或文本标签</li>
                            <li>必须有2个意思元素</li>
                            <li>默认情况下，主Shape元素是第一个元素——可以更改</li>
                        </ul>
                        <CodeMirror
                            value={code1}
                            options={{
                                theme: 'monokai',
                                mode: 'JSX',
                                readOnly: true
                            }}
                        />
                        <div id="myDiagramDiv1" className="diagram" style={{ maxWidth: 400 }}></div>
                        <h2>Graduated Panel Properties</h2>
                        <h3>graduatedMin、graduatedMax</h3>
                        <ul>
                            <li>Graduated Panel范围包括其"graduatedMin"和"graduatedMax"之间的值</li>
                        </ul>
                        <ul data-lake-indent="1">
                            <li>默认情况下，它们分别是O和100</li>
                        </ul>
                        <h3>graduatedTickUnit</h3>
                        <ul>
                            <li>"graduatedTickUnit"——生成标记的频率</li>
                        </ul>
                        <ul data-lake-indent="1">
                            <li>默认值是10——每10个单位，生成一个标记</li>
                        </ul>
                        <CodeMirror
                            value={code2}
                            options={{
                                theme: 'monokai',
                                mode: 'JSX',
                                readOnly: true
                            }}
                        />
                        <div id="myDiagramDiv2" className="diagram" style={{ maxWidth: 400 }}></div>
                        <h3>segmentOffset</h3>
                        <ul>
                            <li>segmentOffset决定了刻度的偏移量</li>
                        </ul>
                        <CodeMirror
                            value={code3}
                            options={{
                                theme: 'monokai',
                                mode: 'JSX',
                                readOnly: true
                            }}
                        />
                        <div id="myDiagramDiv3" className="diagram" style={{ maxWidth: 400 }}></div>
                        <h3>graduatedTickBase</h3>
                        <ul>
                            <li>graduatedTickBase决定了标记的起始值</li>
                        </ul>
                        <CodeMirror
                            value={code4}
                            options={{
                                theme: 'monokai',
                                mode: 'JSX',
                                readOnly: true
                            }}
                        />
                        <div id="myDiagramDiv4" className="diagram" style={{ maxWidth: 400 }}></div>
                        <h3>interval</h3>
                        <ul>
                            <li>interval属性决定了刻度或标签出现的频率</li>
                        </ul>
                        <CodeMirror
                            value={code5}
                            options={{
                                theme: 'monokai',
                                mode: 'JSX',
                                readOnly: true
                            }}
                        />
                        <div id="myDiagramDiv5" className="diagram" style={{ maxWidth: 400 }}></div>
                        <h3>两组标签</h3>
                        <p>添加第二组标签</p>
                        <CodeMirror
                            value={code6}
                            options={{
                                theme: 'monokai',
                                mode: 'JSX',
                                readOnly: true
                            }}
                        />
                        <div id="myDiagramDiv6" className="diagram" style={{ maxWidth: 400 }}></div>
                        <p><br /></p>
                        <p><br /></p>
                        <p>相关代码：</p>
                        <p><a href="https://github.com/LiuZheAb/GoJS_Demo/blob/master/15graduatedPanel.html" target="_blank" rel="noopener noreferrer">https://github.com/LiuZheAb/GoJS_Demo/blob/master/15graduatedPanel.html</a></p>
                    </div>
                </div>
                <Directory />
            </div>
        )
    }
}
