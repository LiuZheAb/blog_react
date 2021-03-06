import React, { Component } from 'react';
import go from "gojs";
import CodeMirror from '@uiw/react-codemirror';
import 'codemirror/theme/monokai.css';
import Directory from "../../Directory";

let $ = go.GraphObject.make;
let codeMirrorOptions = {
    theme: 'monokai',
    mode: 'JSX',
    readOnly: true,
};
let code1 = `let myDiagram = $(go.Diagram, "myDiagramDiv");
myDiagram.add(
    $(go.Part, "Position",
        $(go.Shape, "RoundedRectangle", {
            fill: "white",
            position: new go.Point(-50, 20)
        }),
        $(go.TextBlock, "some text", {
            position: new go.Point(50, 20)
        })
    )
)`;
let code2 = `let myDiagram = $(go.Diagram, "myDiagramDiv");
myDiagram.add(
    $(go.Part, "Vertical",
        $(go.Shape, "RoundedRectangle", {
            fill: "white",
        }),
        $(go.TextBlock, "some text", {
            background: "lightgray",
        })
    )
)`;
let code3 = `$(go.TextBlock, "some text", {
    background: "lightgray",
    alignment: go.Spot.Right,
})`;
let code4 = `$(go.TextBlock, "some text", {
    background: "lightgray",
    alignment: go.Spot.Right,
    stretch: go.GraphObject.Fill,
})`;
let code5 = `$(go.TextBlock, "some text", {
    background: "lightgray",
    alignment: go.Spot.Right,
    stretch: go.GraphObject.Fill,
    textAlign: "right"
})`;
let code6 = `let myDiagram = $(go.Diagram, "myDiagramDiv");
myDiagram.add(
    $(go.Part, "Horizontal",
        $(go.Shape, "RoundedRectangle", {
            fill: "white",
        }),
        $(go.TextBlock, "some text", {
            background: "lightgray",
        })
    )
)`;
let code7 = `$(go.TextBlock, "some text", {
    background: "lightgray",
    alignment: go.Spot.Bottom,
})`;
let code8 = `$(go.TextBlock, "some text", {
    background: "lightgray",
    alignment: go.Spot.Bottom,
    stretch: go.GraphObject.Fill,
})`;
let code9 = `$(go.TextBlock, "some text", {
    background: "lightgray",
    alignment: go.Spot.Bottom,
    stretch: go.GraphObject.Fill,
    verticalAlignment: go.Spot.Bottom
})`;
let code10 = `let myDiagram = $(go.Diagram, "myDiagramDiv");
myDiagram.add(
    $(go.Part, "Spot",
        $(go.Shape, "RoundedRectangle", {
            fill: "white",
        }),
        $(go.TextBlock, "some text", {
            alignment: go.Spot.TopLeft,
            //alignment: new go.Spot(0, 0)
        })
    )
)`
let code11 = `$(go.TextBlock, "some text", {
    alignment: new go.Spot(1, 0,-20,20)
})`
let code12 = `$(go.TextBlock, "some text", {
            alignment: go.Spot.TopLeft,
            alignmentFocus: go.Spot.TopLeft
        })
    )
)`
let code13 = `let myDiagram = $(go.Diagram, "myDiagramDiv");
myDiagram.add(
    $(go.Part, "Auto",
        $(go.Shape, "RoundedRectangle", {
            fill: "white",
        }),
        $(go.TextBlock, "some text")
    )
)`
let code14 = `let myDiagram = $(go.Diagram, "myDiagramDiv");
myDiagram.add(
    $(go.Part, "Auto",{
        desiredSize: new go.Size(250,250)
        },
        $(go.Shape, "RoundedRectangle", {
            fill: "white",
        }),
        $(go.TextBlock, "some text")
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
        this.diagramRender7();
        this.diagramRender8();
        this.diagramRender9();
        this.diagramRender10();
        this.diagramRender11();
        this.diagramRender12();
        this.diagramRender13();
        this.diagramRender14();
    }
    diagramRender1() {
        let myDiagram = $(go.Diagram, "myDiagramDiv1");
        myDiagram.add(
            $(go.Part, "Position",
                $(go.Shape, "RoundedRectangle", {
                    fill: "white",
                    position: new go.Point(-50, 20)
                }),
                $(go.TextBlock, "some text", {
                    position: new go.Point(50, 20)
                })
            )
        )
    }
    diagramRender2() {
        let myDiagram = $(go.Diagram, "myDiagramDiv2");
        myDiagram.add(
            $(go.Part, "Vertical",
                $(go.Shape, "RoundedRectangle", {
                    fill: "white",
                }),
                $(go.TextBlock, "some text", {
                    background: "lightgray",
                })
            )
        )
    }
    diagramRender3() {
        let myDiagram = $(go.Diagram, "myDiagramDiv3");
        myDiagram.add(
            $(go.Part, "Vertical",
                $(go.Shape, "RoundedRectangle", {
                    fill: "white",
                }),
                $(go.TextBlock, "some text", {
                    background: "lightgray",
                    alignment: go.Spot.Right,
                })
            )
        )
    }
    diagramRender4() {
        let myDiagram = $(go.Diagram, "myDiagramDiv4");
        myDiagram.add(
            $(go.Part, "Vertical",
                $(go.Shape, "RoundedRectangle", {
                    fill: "white",
                }),
                $(go.TextBlock, "some text", {
                    background: "lightgray",
                    alignment: go.Spot.Right,
                    stretch: go.GraphObject.Fill,
                })
            )
        )
    }
    diagramRender5() {
        let myDiagram = $(go.Diagram, "myDiagramDiv5");
        myDiagram.add(
            $(go.Part, "Vertical",
                $(go.Shape, "RoundedRectangle", {
                    fill: "white",
                }),
                $(go.TextBlock, "some text", {
                    background: "lightgray",
                    alignment: go.Spot.Right,
                    stretch: go.GraphObject.Fill,
                    textAlign: "right"
                })
            )
        )
    }
    diagramRender6() {
        let myDiagram = $(go.Diagram, "myDiagramDiv6");
        myDiagram.add(
            $(go.Part, "Horizontal",
                $(go.Shape, "RoundedRectangle", {
                    fill: "white",
                }),
                $(go.TextBlock, "some text", {
                    background: "lightgray",
                })
            )
        )
    }
    diagramRender7() {
        let myDiagram = $(go.Diagram, "myDiagramDiv7");
        myDiagram.add(
            $(go.Part, "Horizontal",
                $(go.Shape, "RoundedRectangle", {
                    fill: "white",
                }),
                $(go.TextBlock, "some text", {
                    background: "lightgray",
                    alignment: go.Spot.Bottom,
                })
            )
        )
    }
    diagramRender8() {
        let myDiagram = $(go.Diagram, "myDiagramDiv8");
        myDiagram.add(
            $(go.Part, "Horizontal",
                $(go.Shape, "RoundedRectangle", {
                    fill: "white",
                }),
                $(go.TextBlock, "some text", {
                    background: "lightgray",
                    alignment: go.Spot.Bottom,
                    stretch: go.GraphObject.Fill,
                })
            )
        )
    }
    diagramRender9() {
        let myDiagram = $(go.Diagram, "myDiagramDiv9");
        myDiagram.add(
            $(go.Part, "Horizontal",
                $(go.Shape, "RoundedRectangle", {
                    fill: "white",
                }),
                $(go.TextBlock, "some text", {
                    background: "lightgray",
                    alignment: go.Spot.Bottom,
                    stretch: go.GraphObject.Fill,
                    verticalAlignment: go.Spot.Bottom
                })
            )
        )
    }
    diagramRender10() {
        let myDiagram = $(go.Diagram, "myDiagramDiv10");
        myDiagram.add(
            $(go.Part, "Spot",
                $(go.Shape, "RoundedRectangle", {
                    fill: "white",
                }),
                $(go.TextBlock, "some text", {
                    alignment: go.Spot.TopLeft,
                    //alignment: new go.Spot(0, 0)
                })
            )
        )
    }
    diagramRender11() {
        let myDiagram = $(go.Diagram, "myDiagramDiv11");
        myDiagram.add(
            $(go.Part, "Spot",
                $(go.Shape, "RoundedRectangle", {
                    fill: "white",
                }),
                $(go.TextBlock, "some text", {
                    alignment: new go.Spot(1, 0, -20, 20)
                })
            )
        )
    }
    diagramRender12() {
        let myDiagram = $(go.Diagram, "myDiagramDiv12");
        myDiagram.add(
            $(go.Part, "Spot",
                $(go.Shape, "RoundedRectangle", {
                    fill: "white",
                }),
                $(go.TextBlock, "some text", {
                    alignment: go.Spot.TopLeft,
                    alignmentFocus: go.Spot.TopLeft
                })
            )
        )
    }
    diagramRender13() {
        let myDiagram = $(go.Diagram, "myDiagramDiv13");
        myDiagram.add(
            $(go.Part, "Auto",
                $(go.Shape, "RoundedRectangle", {
                    fill: "white",
                }),
                $(go.TextBlock, "some text")
            )
        )
    }
    diagramRender14() {
        let myDiagram = $(go.Diagram, "myDiagramDiv14");
        myDiagram.add(
            $(go.Part, "Auto", {
                desiredSize: new go.Size(250, 250)
            },
                $(go.Shape, "RoundedRectangle", {
                    fill: "white",
                }),
                $(go.TextBlock, "some text")
            )
        )
    }
    render() {
        return (
            <div className="page-content">
                <div className="article">
                    <div className="article-title">
                        <h1>GoJS 入门教程——第三节 使用 GoJS 构建 Parts(Parts 和 Panels)</h1>
                    </div>
                    <div className="article-content">
                        <h2>Part 是什么</h2>
                        <ul>
                            <li>Part 是 GraphObject 的一个子类</li>
                        </ul>
                        <ul data-lake-indent="1">
                            <li>第 1 个 Panel（也是 GraphObject 的一个子类）</li>
                        </ul>
                        <ul data-lake-indent="2">
                            <li>第 1 个 GraphObject</li>
                            <li>第 2 个 GraphObject</li>
                            <li>...</li>
                            <li>第 n 个 GraphObject</li>
                        </ul>
                        <ul data-lake-indent="1">
                            <li>第 2 个 Panel</li>
                            <li>...</li>
                            <li>第 n 个 Panel</li>
                        </ul>
                        <ul>
                            <li>Node,Link,Group 和 Adornment 都是 GoJS Part</li>
                        </ul>
                        <p>如下图所示：</p>
                        <div className="text-center">
                            <img src={require("../../../assets/images/1585146074836-5d244c42-8534-4c61-8bc9-be81702110b7.png")} alt="" />
                        </div>
                        <h2>GraphObject 是什么</h2>
                        <ul>
                            <li>{`$(go.<GraphObject Type>),`}</li>
                        </ul>
                        <ul data-lake-indent="1">
                            <li>{`"<optional type-specific property>" 可以是特定类型属性`}</li>
                            <li>{"{<optional key/value parirs for properties>} 也可以是几组属性键值对"}</li>
                        </ul>
                        <h2>Panel 是什么</h2>
                        <ul>
                            <li>Panel 保存或组织 GraphObject(它的元素)</li>
                            <li>Part(Node、Link、Group、Adornment)是 Panel 的子类</li>
                            <li>Panel 类型决定其元素的组织方式。常见类型:</li>
                        </ul>
                        <ul data-lake-indent="1">
                            <li>Position</li>
                            <li>Vertical / Horizontal</li>
                            <li>Spot</li>
                            <li>Auto</li>
                        </ul>
                        <div className="text-center">
                            <img src={require("../../../assets/images/1585146820036-10d71ce5-2edd-4573-9b5a-132548554409.png")} alt="" />
                        </div>
                        <h2>Position Panels</h2>
                        <ul>
                            <li>Position Panels 中的元素：</li>
                        </ul>
                        <ul data-lake-indent="1">
                            <li>根据指定的“position”属性定位</li>
                            <li>默认将 position 设为(0,0)</li>
                            <li>定位在面板坐标系中</li>
                            <li>定位可能为负值-如(-20,50)</li>
                        </ul>
                        <p>代码及效果如下图所示：</p>
                        <CodeMirror value={code1} options={codeMirrorOptions} />
                        <div id="myDiagramDiv1" className="diagram"></div>
                        <h2>Veitical Panels</h2>
                        <p>Vertical Panels 中的元素：</p>
                        <ul>
                            <li>从上到下垂直排列</li>
                            <li>给定它们的标准高度/宽度，除非设置了它们的“stretch”属性</li>
                            <li>如果它们的宽度不等于 Panel 的宽度，则根据“alignment”属性对齐</li>
                        </ul>
                        <p>代码及效果如下所示：</p>
                        <CodeMirror value={code2} options={codeMirrorOptions} />
                        <div id="myDiagramDiv2" className="diagram"></div>
                        <p>TextBlock 在 Shape 下方，且默认水平居中对齐。这一属性由 alignment 控制。</p>
                        <CodeMirror value={code3} options={codeMirrorOptions} />
                        <div id="myDiagramDiv3" className="diagram"></div>
                        <p>默认情况下，Vertical Panel 中的元素只占用它们需要的空间。这一属性由 stretch 控制。</p>
                        <CodeMirror value={code4} options={codeMirrorOptions} />
                        <div id="myDiagramDiv4" className="diagram"></div>
                        <p>元素的 alignment 属性只有在元素的宽度不等于 Panel 的宽度时才有效，对于 TextBlocks，可以通过设置 textAlign 属性来修复。</p>
                        <CodeMirror value={code5} options={codeMirrorOptions} />
                        <div id="myDiagramDiv5" className="diagram"></div>
                        <h2>Horizontal Panels</h2>
                        <p>Horizontal Panels 中的元素:</p>
                        <ul>
                            <li>从左到右水平排列</li>
                            <li>垂直拉伸以适应 Panel 的高度与“stretch”属性</li>
                        </ul>
                        <p>代码及效果如图所示：</p>
                        <CodeMirror value={code6} options={codeMirrorOptions} />
                        <div id="myDiagramDiv6" className="diagram"></div>
                        <p>同样的，alignment 属性控制对齐方式。</p>
                        <CodeMirror value={code7} options={codeMirrorOptions} />
                        <div id="myDiagramDiv7" className="diagram"></div>
                        <p>stretch 属性控制元素所占空间。</p>
                        <CodeMirror value={code8} options={codeMirrorOptions} />
                        <div id="myDiagramDiv8" className="diagram"></div>
                        <p>为 Horizontal Panels 中的元素设置 stretch 属性会“覆盖”alignment，此时，修改 TextBlock 的对齐方式要用 verticalAlignment 属性。</p>
                        <CodeMirror value={code9} options={codeMirrorOptions} />
                        <div id="myDiagramDiv9" className="diagram"></div>
                        <h2>Spot/Auto Panels</h2>
                        <ul>
                            <li>默认情况下，Panel 中的第一个元素是主元素“main element”</li>
                            <li>将“isPanelMain”属性设置为 true，可以指定一个元素作为主元素</li>
                            <li>Panel 中所有其他元素围绕主元素排列</li>
                        </ul>
                        <h3>Spots</h3>
                        <ul>
                            <li>Spots 包含从 0 到 1 的 X/Y 值</li>
                        </ul>
                        <ul data-lake-indent="1">
                            <li>表示从矩形左上角到 X/Y 轴的分数距离</li>
                        </ul>
                        <p>如图所示：</p>
                        <div className="text-center">
                            <img src={require("../../../assets/images/1585187909595-5fb53263-9973-41c6-a159-703293b91af0.png")} alt="" />
                        </div>
                        <p>代码及效果如下所示：</p>
                        <CodeMirror value={code10} options={codeMirrorOptions} />
                        <div id="myDiagramDiv10" className="diagram"></div>
                        <p>new go.Spot(x,y,xOffset,yOffset)</p>
                        <p>x,y 为 0~1 的小数，</p>
                        <p>xOffset，yOffset 为在(x,y)位置的基础上在横纵坐标的偏移量，例如：</p>
                        <CodeMirror value={code11} options={codeMirrorOptions} />
                        <div id="myDiagramDiv11" className="diagram"></div>
                        <p>alignmentFocus 属性默认使用 go.Spot.Center 来定位元素。</p>
                        <p>例如，在上面的例子中，是以 TextBlock 的中心为基准来定位 TextBlock 的</p>
                        <p>设置 alignmentFocus 属性可修改定位基准</p>
                        <CodeMirror value={code12} options={codeMirrorOptions} />
                        <div id="myDiagramDiv12" className="diagram"></div>
                        <h3>Auto Panels</h3>
                        <ul>
                            <li>将主要元素适应周围的所有其他 Panel 元素</li>
                            <li>从本质上讲，Auto Panels 是实现围绕某些对象的边框的方式</li>
                        </ul>
                        <p>代码及效果如下所示：</p>
                        <CodeMirror value={code13} options={codeMirrorOptions} />
                        <div id="myDiagramDiv13" className="diagram"></div>
                        <p>主元素(Shape)的大小适应其他非主元素(TextBlock)。</p>
                        <p>desiredSize 属性控制主元素的默认大小。</p>
                        <CodeMirror value={code14} options={codeMirrorOptions} />
                        <div id="myDiagramDiv14" className="diagram"></div>
                        <h2>任意复杂 Parts</h2>
                        <p>Panels 可以组合创建复杂 Parts</p>
                        <div className="text-center">
                            <img src={require("../../../assets/images/20200408093848.png")} alt="" />
                        </div>
                        <br />
                        <br />
                        <p>相关代码：</p>
                        <p><a href="https://github.com/LiuZheAb/GoJS_Demo/blob/master/03buildingParts.html" target="_blank" rel="noopener noreferrer">https://github.com/LiuZheAb/GoJS_Demo/blob/master/03buildingParts.html</a></p>
                    </div>
                </div>
                <Directory />
            </div>
        )
    }
}
