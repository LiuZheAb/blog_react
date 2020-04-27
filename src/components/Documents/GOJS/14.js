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
myDiagram.add(
    $(go.Part, "Auto",
        $(go.Shape, "Rectangle", {
            fill: "white"
        }),
        $(go.Panel, "Table",
            //Row 0
            $(go.Shape, "Triangle", {
                column: 0,
                desiredSize: new go.Size(10, 10),
                fill: "lime"
            }),
            $(go.TextBlock, "Title", {
                column: 1
            }),
            $(go.Shape, "Rectangle", {
                column: 3,
                desiredSize: new go.Size(10, 10),
                fill: "cyan"
            }),

            //Row 1
            $(go.TextBlock, "(1,0)", {
                row: 1,
                column: 0
            }),
            $(go.TextBlock, "(1,1)", {
                row: 1,
                column: 1
            }),
            $(go.TextBlock, "(1,2)", {
                row: 1,
                column: 2
            }),
            $(go.TextBlock, "(1,3)", {
                row: 1,
                column: 3
            }),
        )
    )
);`;
let code2 = `$(go.Panel, "Table", {
    defaultRowSeparatorStroke: "black",
    defaultColumnSeparatorStroke: "black",
    defaultSeparatorPadding: 10
    },
    ·
    ·
    ·
)`;
let code3 = `//Row 0
$(go.Shape, "Triangle", {
    column: 0,
    desiredSize: new go.Size(10, 10),
    fill: "lime"
}),
$(go.TextBlock, "Title", {
    column: 1,
    columnSpan: 2
}),
$(go.Shape, "Rectangle", {
    column: 3,
    desiredSize: new go.Size(10, 10),
    fill: "cyan"
}),`;
let code4 = `//Row 0
$(go.Shape, "Triangle", {
    column: 0,
    desiredSize: new go.Size(10, 10),
    fill: "lime",
    alignment: go.Spot.Left
}),
$(go.TextBlock, "Title", {
    column: 1,
    columnSpan: 2
}),
$(go.Shape, "Rectangle", {
    column: 3,
    desiredSize: new go.Size(10, 10),
    fill: "cyan",
    alignment: go.Spot.Right
}),`;
let code5 = `$(go.Panel, "Table", {
        defaultSeparatorPadding: 10
    },
    //Row 0
    $(go.RowColumnDefinition, {
        row: 0,
        background: "dodgerblue"
    }),
    $(go.Shape, "Triangle", {
        column: 0,
        desiredSize: new go.Size(10, 10),
        fill: "lime",
        alignment: go.Spot.Left
    }),
    $(go.TextBlock, "Title", {
        column: 1,
        columnSpan: 2
    }),
    $(go.Shape, "Rectangle", {
        column: 3,
        desiredSize: new go.Size(10, 10),
        fill: "cyan",
        alignment: go.Spot.Right
    }),
    ·
    ·
    ·
)`
let code6 = `$(go.Panel, "Table", {
        defaultSeparatorPadding: 10
    },
    //Row 0
    $(go.RowColumnDefinition, {
        row: 0,
        background: "dodgerblue"
    }),
    $(go.Panel, "TableRow", {
            row: 0
        },
        $(go.Shape, "Triangle", {
            column: 0,
            desiredSize: new go.Size(10, 10),
            fill: "lime",
            alignment: go.Spot.Left
        }),
        $(go.TextBlock, "Title", {
            column: 1,
            columnSpan: 2
        }),
        $(go.Shape, "Rectangle", {
            column: 3,
            desiredSize: new go.Size(10, 10),
            fill: "cyan",
            alignment: go.Spot.Right
        }),
    ),

    //Row 1
    $(go.RowColumnDefinition, {
        row: 1,
        separatorStroke: "black"
    }),
    $(go.Panel, "TableRow", {
            row: 1
        },
        $(go.TextBlock, "(1,0)", {
            column: 0
        }),
        $(go.TextBlock, "(1,1)", {
            column: 1
        }),
        $(go.TextBlock, "(1,2)", {
            column: 2
        }),
        $(go.TextBlock, "(1,3)", {
            column: 3
        }),
    )
)`

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
            $(go.Part, "Auto",
                $(go.Shape, "Rectangle", {
                    fill: "white"
                }),
                $(go.Panel, "Table",
                    //Row 0
                    $(go.Shape, "Triangle", {
                        column: 0,
                        desiredSize: new go.Size(10, 10),
                        fill: "lime"
                    }),
                    $(go.TextBlock, "Title", {
                        column: 1
                    }),
                    $(go.Shape, "Rectangle", {
                        column: 3,
                        desiredSize: new go.Size(10, 10),
                        fill: "cyan"
                    }),

                    //Row 1
                    $(go.TextBlock, "(1,0)", {
                        row: 1,
                        column: 0
                    }),
                    $(go.TextBlock, "(1,1)", {
                        row: 1,
                        column: 1
                    }),
                    $(go.TextBlock, "(1,2)", {
                        row: 1,
                        column: 2
                    }),
                    $(go.TextBlock, "(1,3)", {
                        row: 1,
                        column: 3
                    }),
                )
            )
        )
    }
    diagramRender2() {
        let myDiagram = $(go.Diagram, "myDiagramDiv2");

        myDiagram.add(
            $(go.Part, "Auto",
                $(go.Shape, "Rectangle", {
                    fill: "white"
                }),
                $(go.Panel, "Table", {
                    defaultRowSeparatorStroke: "black",
                    defaultColumnSeparatorStroke: "black",
                    defaultSeparatorPadding: 10
                },
                    //Row 0
                    $(go.Shape, "Triangle", {
                        column: 0,
                        desiredSize: new go.Size(10, 10),
                        fill: "lime"
                    }),
                    $(go.TextBlock, "Title", {
                        column: 1
                    }),
                    $(go.Shape, "Rectangle", {
                        column: 3,
                        desiredSize: new go.Size(10, 10),
                        fill: "cyan"
                    }),

                    //Row 1
                    $(go.TextBlock, "(1,0)", {
                        row: 1,
                        column: 0
                    }),
                    $(go.TextBlock, "(1,1)", {
                        row: 1,
                        column: 1
                    }),
                    $(go.TextBlock, "(1,2)", {
                        row: 1,
                        column: 2
                    }),
                    $(go.TextBlock, "(1,3)", {
                        row: 1,
                        column: 3
                    }),
                )
            )
        )
    }
    diagramRender3() {
        let myDiagram = $(go.Diagram, "myDiagramDiv3");

        myDiagram.add(
            $(go.Part, "Auto",
                $(go.Shape, "Rectangle", {
                    fill: "white"
                }),
                $(go.Panel, "Table", {
                    defaultRowSeparatorStroke: "black",
                    defaultColumnSeparatorStroke: "black",
                    defaultSeparatorPadding: 10
                },
                    //Row 0
                    $(go.Shape, "Triangle", {
                        column: 0,
                        desiredSize: new go.Size(10, 10),
                        fill: "lime"
                    }),
                    $(go.TextBlock, "Title", {
                        column: 1, columnSpan: 2
                    }),
                    $(go.Shape, "Rectangle", {
                        column: 3,
                        desiredSize: new go.Size(10, 10),
                        fill: "cyan"
                    }),

                    //Row 1
                    $(go.TextBlock, "(1,0)", {
                        row: 1,
                        column: 0
                    }),
                    $(go.TextBlock, "(1,1)", {
                        row: 1,
                        column: 1
                    }),
                    $(go.TextBlock, "(1,2)", {
                        row: 1,
                        column: 2
                    }),
                    $(go.TextBlock, "(1,3)", {
                        row: 1,
                        column: 3
                    }),
                )
            )
        )
    }
    diagramRender4() {
        let myDiagram = $(go.Diagram, "myDiagramDiv4");

        myDiagram.add(
            $(go.Part, "Auto",
                $(go.Shape, "Rectangle", {
                    fill: "white"
                }),
                $(go.Panel, "Table", {
                    defaultRowSeparatorStroke: "black",
                    defaultColumnSeparatorStroke: "black",
                    defaultSeparatorPadding: 10
                },
                    //Row 0
                    $(go.Shape, "Triangle", {
                        column: 0,
                        desiredSize: new go.Size(10, 10),
                        fill: "lime",
                        alignment: go.Spot.Left
                    }),
                    $(go.TextBlock, "Title", {
                        column: 1, columnSpan: 2
                    }),
                    $(go.Shape, "Rectangle", {
                        column: 3,
                        desiredSize: new go.Size(10, 10),
                        fill: "cyan",
                        alignment: go.Spot.Right
                    }),

                    //Row 1
                    $(go.TextBlock, "(1,0)", {
                        row: 1,
                        column: 0
                    }),
                    $(go.TextBlock, "(1,1)", {
                        row: 1,
                        column: 1
                    }),
                    $(go.TextBlock, "(1,2)", {
                        row: 1,
                        column: 2
                    }),
                    $(go.TextBlock, "(1,3)", {
                        row: 1,
                        column: 3
                    }),
                )
            )
        )
    }
    diagramRender5() {
        let myDiagram = $(go.Diagram, "myDiagramDiv5");

        myDiagram.add(
            $(go.Part, "Auto",
                $(go.Shape, "Rectangle", {
                    fill: "white"
                }),
                $(go.Panel, "Table", {
                    defaultSeparatorPadding: 10
                },
                    //Row 0
                    $(go.RowColumnDefinition, {
                        row: 0,
                        background: "dodgerblue"
                    }),
                    $(go.Shape, "Triangle", {
                        column: 0,
                        desiredSize: new go.Size(10, 10),
                        fill: "lime",
                        alignment: go.Spot.Left
                    }),
                    $(go.TextBlock, "Title", {
                        column: 1,
                        columnSpan: 2
                    }),
                    $(go.Shape, "Rectangle", {
                        column: 3,
                        desiredSize: new go.Size(10, 10),
                        fill: "cyan",
                        alignment: go.Spot.Right
                    }),

                    //Row 1
                    $(go.TextBlock, "(1,0)", {
                        row: 1,
                        column: 0
                    }),
                    $(go.TextBlock, "(1,1)", {
                        row: 1,
                        column: 1
                    }),
                    $(go.TextBlock, "(1,2)", {
                        row: 1,
                        column: 2
                    }),
                    $(go.TextBlock, "(1,3)", {
                        row: 1,
                        column: 3
                    }),
                )
            )
        )
    }
    diagramRender6() {
        let myDiagram = $(go.Diagram, "myDiagramDiv6");

        myDiagram.add(
            $(go.Part, "Auto",
                $(go.Shape, "Rectangle", {
                    fill: "white"
                }),
                $(go.Panel, "Table", {
                    // defaultRowSeparatorStroke: "black",
                    // defaultColumnSeparatorStroke: "black",
                    defaultSeparatorPadding: 10
                },
                    //Row 0
                    $(go.RowColumnDefinition, {
                        row: 0,
                        background: "dodgerblue"
                    }),
                    $(go.Panel, "TableRow", {
                        row: 0
                    },
                        $(go.Shape, "Triangle", {
                            column: 0,
                            desiredSize: new go.Size(10, 10),
                            fill: "lime",
                            alignment: go.Spot.Left
                        }),
                        $(go.TextBlock, "Title", {
                            column: 1,
                            columnSpan: 2
                        }),
                        $(go.Shape, "Rectangle", {
                            column: 3,
                            desiredSize: new go.Size(10, 10),
                            fill: "cyan",
                            alignment: go.Spot.Right
                        }),
                    ),

                    //Row 1
                    $(go.RowColumnDefinition, {
                        row: 1,
                        separatorStroke: "black"
                    }),
                    $(go.Panel, "TableRow", {
                        row: 1
                    },
                        $(go.TextBlock, "(1,0)", {
                            column: 0
                        }),
                        $(go.TextBlock, "(1,1)", {
                            column: 1
                        }),
                        $(go.TextBlock, "(1,2)", {
                            column: 2
                        }),
                        $(go.TextBlock, "(1,3)", {
                            column: 3
                        }),
                    )
                )
            )
        )
    }
    render() {
        return (
            <div className="page-content">
                <div className="article">
                    <div className="article-title">
                        <h1>GoJS 面板——第一节 表格面板(Table Panel)</h1>
                    </div>
                    <div className="article-content">
                        <h2>Table Panels</h2>
                        <ul>
                            <li>按行和列(单元格)排列对象</li>
                            <li>默认情况下，对象在它们的单元格中是中心对齐的</li>
                            <li>不是每个单元格都必须包含一个对象</li>
                        </ul>
                        <p>代码和效果如下所示:</p>
                        <CodeMirror value={code1} options={codeMirrorOptions} />
                        <div id="myDiagramDiv1" className="diagram"></div>
                        <h2>设置表格样式</h2>
                        <ul>
                            <li>defaultRowSeparatorStroke 设置表格行分隔线</li>
                            <li>defaultColumnSeparatorStroke 设置表格列分隔线</li>
                            <li>defaultSeparatorPadding 设置单元格 padding</li>
                        </ul>
                        <CodeMirror value={code2} options={codeMirrorOptions} />
                        <div id="myDiagramDiv2" className="diagram"></div>
                        <h2>设置单元格所占列数</h2>
                        <ul>
                            <li>columnSpan:Number</li>
                        </ul>
                        <CodeMirror value={code3} options={codeMirrorOptions} />
                        <div id="myDiagramDiv3" className="diagram"></div>
                        <h2>设置单元格对齐方式</h2>
                        <ul>
                            <li>columnSpan:go.Spot.{`<position>`}</li>
                        </ul>
                        <CodeMirror value={code4} options={codeMirrorOptions} />
                        <div id="myDiagramDiv4" className="diagram"></div>
                        <h2>RowColumnDefinition</h2>
                        <ul>
                            <li>用于为 Table Panel 的特定行/列设置属性</li>
                        </ul>
                        <CodeMirror value={code5} options={codeMirrorOptions} />
                        <div id="myDiagramDiv5" className="diagram"></div>
                        <h2>TableRow / TableColumn</h2>
                        <ul>
                            <li>特殊面板——只能在 Table Panel 中使用</li>
                            <li>将特定行/列的所有对象放到其中一个面板中</li>
                        </ul>
                        <CodeMirror value={code6} options={codeMirrorOptions} />
                        <div id="myDiagramDiv6" className="diagram"></div>
                        <p><br /></p>
                        <p><br /></p>
                        <p>相关代码：</p>
                        <p><a href="https://github.com/LiuZheAb/GoJS_Demo/blob/master/13tablePanel.html" target="_blank" rel="noopener noreferrer">https://github.com/LiuZheAb/GoJS_Demo/blob/master/13tablePanel.html</a></p>
                    </div>
                </div>
                <Directory />
            </div>
        )
    }
}
