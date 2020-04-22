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
myDiagram.layout = $(go.GridLayout);
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
        }, ],
        linkDataArray: []
    })`;
let code2 = `myDiagram.layout = $(go.GridLayout, {
    wrappingColumn: 3
});`;
let code3 = `myDiagram.layout = $(go.GridLayout, {
    wrappingColumn: 3,
    wrappingWidth: 1
});`;
let code4 = `myDiagram.layout = $(go.GridLayout, {
    wrappingColumn: 3,
    wrappingWidth: NaN,
    cellSize: new go.Size(150, 150)
});`;
let code5 = `myDiagram.layout = $(go.GridLayout, {
    wrappingColumn: 3,
    wrappingWidth: NaN,
    cellSize: new go.Size(NaN, NaN),
    spacing: new go.Size(50, 10)
});`;
let code6 = `myDiagram.nodeTemplate =
    $(go.Node, "Auto", {
            locationSpot: go.Spot.Center
        },
        $(go.Shape, "RoundedRectangle", {
            fill: "lightblue"
        }),
        $(go.TextBlock, {
                margin: 8
            },
            new go.Binding("text", "key"))
    );
    myDiagram.layout = $(go.GridLayout, {
    wrappingColumn: 3,
    wrappingWidth: NaN,
    cellSize: new go.Size(NaN, NaN),
    spacing: new go.Size(50, 10),
    alignment: go.GridLayout.location
});`;
let code7 = `myDiagram.layout = $(go.GridLayout, {
    wrappingColumn: 3,
    wrappingWidth: NaN,
    cellSize: new go.Size(NaN, NaN),
    spacing: new go.Size(50, 10),
    alignment: go.GridLayout.location,
    sorting: go.GridLayout.Reverse
});`;
let code8 = `nodeDataArray: [{
        key: "Zeta",
    }, {
        key: "Delta",
    }, {
        key: "Beta"
    }, {
        key: "Gamma"
    }, {
        key: "Epsilon"
    }, {
        key: "Alpha"
}, ],`;
let code9 = `myDiagram.layout = $(go.GridLayout, {
    wrappingColumn: 3,
    wrappingWidth: NaN,
    cellSize: new go.Size(NaN, NaN),
    spacing: new go.Size(50, 10),
    alignment: go.GridLayout.location,
    sorting: go.GridLayout.Ascending,
    comparer: function (a, b) {
        if (a.data.key < b.data.key) return -1;
        if (a.data.key > b.data.key) return 1;
        return 0;
    }
});`;
let code10 = `myDiagram.layout = $(go.GridLayout, {
    wrappingColumn: 3,
    wrappingWidth: NaN,
    cellSize: new go.Size(NaN, NaN),
    spacing: new go.Size(50, 10),
    alignment: go.GridLayout.location,
    sorting: go.GridLayout.Ascending,
    comparer: function (a, b) {
        if (a.data.key < b.data.key) return -1;
        if (a.data.key > b.data.key) return 1;
        return 0;
    },
    arrangement: go.GridLayout.RightToLeft,
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
        this.diagramRender9();
        this.diagramRender10();
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
        myDiagram.layout = $(go.GridLayout);
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
                },],
                linkDataArray: []
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
        myDiagram.layout = $(go.GridLayout, {
            wrappingColumn: 3
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
                },],
                linkDataArray: []
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
        myDiagram.layout = $(go.GridLayout, {
            wrappingColumn: 3,
            wrappingWidth: 1
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
                },],
                linkDataArray: []
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
        myDiagram.layout = $(go.GridLayout, {
            wrappingColumn: 3,
            wrappingWidth: NaN,
            cellSize: new go.Size(150, 150)
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
                },],
                linkDataArray: []
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
        myDiagram.layout = $(go.GridLayout, {
            wrappingColumn: 3,
            wrappingWidth: NaN,
            cellSize: new go.Size(NaN, NaN),
            spacing: new go.Size(50, 10)
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
                },],
                linkDataArray: []
            })
    }
    diagramRender6() {
        let myDiagram = $(go.Diagram, "myDiagramDiv6");

        myDiagram.nodeTemplate =
            $(go.Node, "Auto", {
                locationSpot: go.Spot.Center
            },
                $(go.Shape, "RoundedRectangle", {
                    fill: "lightblue"
                }),
                $(go.TextBlock, {
                    margin: 8
                },
                    new go.Binding("text", "key"))
            );
        myDiagram.layout = $(go.GridLayout, {
            wrappingColumn: 3,
            wrappingWidth: NaN,
            cellSize: new go.Size(NaN, NaN),
            spacing: new go.Size(50, 10),
            alignment: go.GridLayout.location
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
                },],
                linkDataArray: []
            })
    }
    diagramRender7() {
        let myDiagram = $(go.Diagram, "myDiagramDiv7");

        myDiagram.nodeTemplate =
            $(go.Node, "Auto", {
                locationSpot: go.Spot.Center
            },
                $(go.Shape, "RoundedRectangle", {
                    fill: "lightblue"
                }),
                $(go.TextBlock, {
                    margin: 8
                },
                    new go.Binding("text", "key"))
            );
        myDiagram.layout = $(go.GridLayout, {
            wrappingColumn: 3,
            wrappingWidth: NaN,
            cellSize: new go.Size(NaN, NaN),
            spacing: new go.Size(50, 10),
            alignment: go.GridLayout.location,
            sorting: go.GridLayout.Reverse
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
                },],
                linkDataArray: []
            })
    }
    diagramRender8() {
        let myDiagram = $(go.Diagram, "myDiagramDiv8");

        myDiagram.nodeTemplate =
            $(go.Node, "Auto", {
                locationSpot: go.Spot.Center
            },
                $(go.Shape, "RoundedRectangle", {
                    fill: "lightblue"
                }),
                $(go.TextBlock, {
                    margin: 8
                },
                    new go.Binding("text", "key"))
            );
        myDiagram.layout = $(go.GridLayout, {
            wrappingColumn: 3,
            wrappingWidth: NaN,
            cellSize: new go.Size(NaN, NaN),
            spacing: new go.Size(50, 10),
            alignment: go.GridLayout.location,
            sorting: go.GridLayout.Ascending,
        });
        myDiagram.model =
            $(go.GraphLinksModel, {
                nodeDataArray: [{
                    key: "Zeta",
                }, {
                    key: "Delta",
                }, {
                    key: "Beta"
                }, {
                    key: "Gamma"
                }, {
                    key: "Epsilon"
                }, {
                    key: "Alpha"
                },],
                linkDataArray: []
            })
    }
    diagramRender9() {
        let myDiagram = $(go.Diagram, "myDiagramDiv9");

        myDiagram.nodeTemplate =
            $(go.Node, "Auto", {
                locationSpot: go.Spot.Center
            },
                $(go.Shape, "RoundedRectangle", {
                    fill: "lightblue"
                }),
                $(go.TextBlock, {
                    margin: 8
                },
                    new go.Binding("text", "key"))
            );
        myDiagram.layout = $(go.GridLayout, {
            wrappingColumn: 3,
            wrappingWidth: NaN,
            cellSize: new go.Size(NaN, NaN),
            spacing: new go.Size(50, 10),
            alignment: go.GridLayout.location,
            sorting: go.GridLayout.Ascending,
            comparer: function (a, b) {
                if (a.data.key < b.data.key) return -1;
                if (a.data.key > b.data.key) return 1;
                return 0;
            }
        });
        myDiagram.model =
            $(go.GraphLinksModel, {
                nodeDataArray: [{
                    key: "Zeta",
                }, {
                    key: "Delta",
                }, {
                    key: "Beta"
                }, {
                    key: "Gamma"
                }, {
                    key: "Epsilon"
                }, {
                    key: "Alpha"
                },],
                linkDataArray: []
            })
    }
    diagramRender10() {
        let myDiagram = $(go.Diagram, "myDiagramDiv10");

        myDiagram.nodeTemplate =
            $(go.Node, "Auto", {
                locationSpot: go.Spot.Center
            },
                $(go.Shape, "RoundedRectangle", {
                    fill: "lightblue"
                }),
                $(go.TextBlock, {
                    margin: 8
                },
                    new go.Binding("text", "key"))
            );
        myDiagram.layout = $(go.GridLayout, {
            wrappingColumn: 3,
            wrappingWidth: NaN,
            cellSize: new go.Size(NaN, NaN),
            spacing: new go.Size(50, 10),
            alignment: go.GridLayout.location,
            sorting: go.GridLayout.Ascending,
            comparer: function (a, b) {
                if (a.data.key < b.data.key) return -1;
                if (a.data.key > b.data.key) return 1;
                return 0;
            },
            arrangement: go.GridLayout.RightToLeft,
        });
        myDiagram.model =
            $(go.GraphLinksModel, {
                nodeDataArray: [{
                    key: "Zeta",
                }, {
                    key: "Delta",
                }, {
                    key: "Beta"
                }, {
                    key: "Gamma"
                }, {
                    key: "Epsilon"
                }, {
                    key: "Alpha"
                },],
                linkDataArray: []
            })
    }
    render() {
        return (
            <div className="page-content">
                <div className="article">
                    <div className="article-title">
                        <h1>GoJS 布局——第二节 网格布局(GridLayout)</h1>
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
                        <h2>wrappingColumn</h2>
                        <CodeMirror
                            value={code2}
                            options={{
                                theme: 'monokai',
                                mode: 'JSX',
                                readOnly: true
                            }}
                        />
                        <div id="myDiagramDiv2" className="diagram" style={{ maxWidth: 600 }}></div>
                        <h2>wrappingWidth</h2>
                        <p>确定 GridLayout 的宽度，若使适合 wrappingwidth 的最大列数小于 wrappingColumn, 则 wrappingWidth 优先</p>
                        <CodeMirror
                            value={code3}
                            options={{
                                theme: 'monokai',
                                mode: 'JSX',
                                readOnly: true
                            }}
                        />
                        <div id="myDiagramDiv3" className="diagram" style={{ maxWidth: 600 }}></div>
                        <h2>cellSize</h2>
                        <p>确定每个 Part 在网格中所占位置的最小 Part 大小</p>
                        <p>默认值::NaN x NaN(使用最大的部件作为 cellSize)</p>
                        <CodeMirror
                            value={code4}
                            options={{
                                theme: 'monokai',
                                mode: 'JSX',
                                readOnly: true
                            }}
                        />
                        <div id="myDiagramDiv4" className="diagram" style={{ maxWidth: 600 }}></div>
                        <h2>spacing</h2>
                        <p>确定 Node 之间的空间</p>
                        <p>默认值:10x10</p>
                        <CodeMirror
                            value={code5}
                            options={{
                                theme: 'monokai',
                                mode: 'JSX',
                                readOnly: true
                            }}
                        />
                        <div id="myDiagramDiv5" className="diagram" style={{ maxWidth: 600 }}></div>
                        <h2>alignment</h2>
                        <p>决定使用 Part.location 还是 Part.position 来安排每个 part</p>
                        <div className="tip">
                            <div className="tip-content">
                                <em>默认的排列基准是 Node 的左上角,Node 的 locationSpot 决定此属性</em>
                            </div>
                        </div>
                        <CodeMirror
                            value={code6}
                            options={{
                                theme: 'monokai',
                                mode: 'JSX',
                                readOnly: true
                            }}
                        />
                        <div id="myDiagramDiv6" className="diagram" style={{ maxWidth: 600 }}></div>
                        <h2>sorting</h2>
                        <ul>
                            <li>决定 Part 的顺序</li>
                        </ul>
                        <ul data-lake-indent="1">
                            <li>可以是 Forward(正向),Reverse(反向),Ascending(升序)或Descending(降序)</li>
                        </ul>
                        <ul>
                            <li>Forward / Reverse 取决于元素数据被检索的顺序</li>
                            <li>Ascending / Descending 取决于"comparer"属性函数</li>
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
                        <p>改变 Node 数据的顺序</p>
                        <CodeMirror
                            value={code8}
                            options={{
                                theme: 'monokai',
                                mode: 'JSX',
                                readOnly: true
                            }}
                        />
                        <p>设置 layout 的 sorting 属性为: go.GridLayout.Ascending</p>
                        <div id="myDiagramDiv8" className="diagram" style={{ maxWidth: 600 }}></div>
                        <p>设置 layout 的 comparer 属性为</p>
                        <CodeMirror
                            value={code9}
                            options={{
                                theme: 'monokai',
                                mode: 'JSX',
                                readOnly: true
                            }}
                        />
                        <div id="myDiagramDiv9" className="diagram" style={{ maxWidth: 600 }}></div>
                        <h2>arrangement</h2>
                        <p>决定 Node 排序的方式</p>
                        <CodeMirror
                            value={code10}
                            options={{
                                theme: 'monokai',
                                mode: 'JSX',
                                readOnly: true
                            }}
                        />
                        <div id="myDiagramDiv10" className="diagram" style={{ maxWidth: 600 }}></div>
                        <br />
                        <br />
                        <p>相关代码：</p>
                        <p><a href="https://github.com/LiuZheAb/GoJS_Demo/blob/master/08gridLayout.html" target="_blank" rel="noopener noreferrer">https://github.com/LiuZheAb/GoJS_Demo/blob/master/08gridLayout.html</a></p>
                    </div>
                </div>
                <Directory />
            </div>
        )
    }
}
