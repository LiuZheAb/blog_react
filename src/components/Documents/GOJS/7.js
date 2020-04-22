import React, { Component } from 'react'
import CodeMirror from '@uiw/react-codemirror';
import 'codemirror/theme/monokai.css';
import Directory from "../../Directory";
import go from "gojs";

let $ = go.GraphObject.make;
let code1 = `$(go.TextBlock, "text",{
    text:"Example",
    font:"Italic small-caps bold 12pt Georgia,Serif",
    stroke:"purple",
    editable:true
})`;
let code2 = `$(go.Panel, "Auto",
    $(go.Shape, "RoundedRectangle", {
        figure: "Ellipse"
    }),
    $(go.Shape)
)`;
let code3 = `$(go.Panel, "Auto",
    $(go.Shape, "RoundedRectangle", {
        figure: "Ellipse",
        fill:"pink",
        stroke:"purple",
        strokeWith:10
    }),
    $(go.Shape)
)`;
let code4 = `$(go.Picture,"./avatar.54d15c2f.jpg",
    {
        desiredSize:new go.Size(150,100),
        margin:new go.Margin(25,0,0,0)
    }
)`;
let code5 = `$(go.Node, "Vertical", {
    selectable:true,
    deletable:true,
    resizable:true,
    rotatable:true
},`;
let code6 = `$(go.Node, "Vertical", {
    selectable: true,
    deletable: true,
    resizable: true,
    rotatable: true,
    resizeObjectName: "PANEL",
    rotateObjectName: "PANEL"
},
$(go.TextBlock, "text", {
    text: "Example",
    font: "Italic small-caps bold 12pt Georgia,Serif",
    stroke: "purple",
    editable: true
}),
$(go.Panel, "Auto", {
        name: "PANEL"
    },
    $(go.Shape, "RoundedRectangle", {
        figure: "Ellipse",
        fill: "pink",
        stroke: "purple",
        strokeWidth: 10
    }),
    $(go.Picture, "./avatar.54d15c2f.jpg", {
        desiredSize: new go.Size(150, 100),
        margin: new go.Margin(25, 0, 0, 0)
    })
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
        this.diagramRender7();
    }
    diagramRender1() {
        let myDiagram = $(go.Diagram, "myDiagramDiv1");
        myDiagram.nodeTemplate =
            $(go.Node, "Vertical",
                $(go.TextBlock, "text", {
                    text: "Example"
                }),
                $(go.Panel, "Auto",
                    $(go.Shape, "RoundedRectangle"),
                    $(go.Shape)
                )
            );

        myDiagram.model = new go.GraphLinksModel(
            [
                { key: "Alpha" }
            ]
        );
    }
    diagramRender2() {
        let myDiagram = $(go.Diagram, "myDiagramDiv2");
        myDiagram.nodeTemplate =
            $(go.Node, "Vertical",
                $(go.TextBlock, "text", {
                    text: "Example",
                    font: "Italic small-caps bold 12pt Georgia,Serif",
                    stroke: "purple",
                    editable: true
                }),
                $(go.Panel, "Auto",
                    $(go.Shape, "RoundedRectangle"),
                    $(go.Shape)
                )
            );

        myDiagram.model = new go.GraphLinksModel(
            [
                { key: "Alpha" }
            ]
        );
    }
    diagramRender3() {
        let myDiagram = $(go.Diagram, "myDiagramDiv3");
        myDiagram.nodeTemplate =
            $(go.Node, "Vertical",
                $(go.TextBlock, "text", {
                    text: "Example",
                    font: "Italic small-caps bold 12pt Georgia,Serif",
                    stroke: "purple",
                    editable: true
                }),
                $(go.Panel, "Auto",
                    $(go.Shape, "RoundedRectangle", {
                        figure: "Ellipse"
                    }),
                    $(go.Shape)
                )
            );

        myDiagram.model = new go.GraphLinksModel(
            [
                { key: "Alpha" }
            ]
        );
    }
    diagramRender4() {
        let myDiagram = $(go.Diagram, "myDiagramDiv4");
        myDiagram.nodeTemplate =
            $(go.Node, "Vertical",
                $(go.TextBlock, "text", {
                    text: "Example",
                    font: "Italic small-caps bold 12pt Georgia,Serif",
                    stroke: "purple",
                    editable: true
                }),
                $(go.Panel, "Auto",
                    $(go.Shape, "RoundedRectangle", {
                        figure: "Ellipse",
                        fill: "pink",
                        stroke: "purple",
                        strokeWidth: 10
                    }),
                    $(go.Shape)
                )
            );

        myDiagram.model = new go.GraphLinksModel(
            [
                { key: "Alpha" }
            ]
        );
    }
    diagramRender5() {
        let myDiagram = $(go.Diagram, "myDiagramDiv5");
        myDiagram.nodeTemplate =
            $(go.Node, "Vertical",
                $(go.TextBlock, "text", {
                    text: "Example",
                    font: "Italic small-caps bold 12pt Georgia,Serif",
                    stroke: "purple",
                    editable: true
                }),
                $(go.Panel, "Auto",
                    $(go.Shape, "RoundedRectangle", {
                        figure: "Ellipse",
                        fill: "pink",
                        stroke: "purple",
                        strokeWidth: 10
                    }),
                    $(go.Picture, require("../../../assets/images/avatar.jpg"),
                        {
                            desiredSize: new go.Size(150, 100),
                            margin: new go.Margin(25, 0, 0, 0)
                        }
                    )
                )
            );

        myDiagram.model = new go.GraphLinksModel(
            [
                { key: "Alpha" }
            ]
        );
    }
    diagramRender6() {
        let myDiagram = $(go.Diagram, "myDiagramDiv6");
        myDiagram.nodeTemplate =
            $(go.Node, "Vertical", {
                selectable: true,
                deletable: true,
                resizable: true,
                rotatable: true
            },
                $(go.TextBlock, "text", {
                    text: "Example",
                    font: "Italic small-caps bold 12pt Georgia,Serif",
                    stroke: "purple",
                    editable: true
                }),
                $(go.Panel, "Auto",
                    $(go.Shape, "RoundedRectangle", {
                        figure: "Ellipse",
                        fill: "pink",
                        stroke: "purple",
                        strokeWidth: 10
                    }),
                    $(go.Picture, require("../../../assets/images/avatar.jpg"),
                        {
                            desiredSize: new go.Size(150, 100),
                            margin: new go.Margin(25, 0, 0, 0)
                        }
                    )
                )
            );

        myDiagram.model = new go.GraphLinksModel(
            [
                { key: "Alpha" }
            ]
        );
    }
    diagramRender7() {
        let myDiagram = $(go.Diagram, "myDiagramDiv7");
        myDiagram.nodeTemplate =
            $(go.Node, "Vertical", {
                selectable: true,
                deletable: true,
                resizable: true,
                rotatable: true,
                resizeObjectName: "PANEL",
                rotateObjectName: "PANEL"
            },
                $(go.TextBlock, "text", {
                    text: "Example",
                    font: "Italic small-caps bold 12pt Georgia,Serif",
                    stroke: "purple",
                    editable: true
                }),
                $(go.Panel, "Auto", {
                    name: "PANEL"
                },
                    $(go.Shape, "RoundedRectangle", {
                        figure: "Ellipse",
                        fill: "pink",
                        stroke: "purple",
                        strokeWidth: 10
                    }),
                    $(go.Picture, require("../../../assets/images/avatar.jpg"), {
                        desiredSize: new go.Size(150, 100),
                        margin: new go.Margin(25, 0, 0, 0)
                    })
                )
            );

        myDiagram.model = new go.GraphLinksModel(
            [
                { key: "Alpha" }
            ]
        );
    }
    render() {
        return (
            <div className="page-content">
                <div className="article">
                    <div className="article-title">
                        <h1>GoJS 入门教程——第六节 GoJS GraphObject 属性</h1>
                    </div>
                    <div className="article-content">
                        <h2>GraphObject 属性</h2>
                        <ul>
                            <li>GraphObject(例如 Shapes,TextBlocks,Pictures)支持多种属性来设置它们样式和表现</li>
                            <li>有关这些属性的完整记录，请参阅 <a href="https://gojs.net/latest/api/index.html" target="_blank" rel="noopener noreferrer">API文档</a></li>
                        </ul>
                        <h3>TextBlock 的属性</h3>
                        <p>代码及效果如下：</p>
                        <div className="text-center">
                            <img src={require("../../../assets/images/20200405211225.png")} alt="" />
                        </div>
                        <div id="myDiagramDiv1" className="diagram"></div>
                        <ul>
                            <li>"font"属性值必须是正确格式的字符串,{`<font-style font-variant fong-weight font-size font-family>`}</li>
                            <li>"stroke"属性值可以是任意 css color 字符串</li>
                        </ul>
                        <ul data-lake-indent="1">
                            <li>指定名称的颜色，如 red、blue</li>
                            <li>十六进制</li>
                            <li>RGB</li>
                            <li>HSL</li>
                        </ul>
                        <ul>
                            <li>"editable"布尔属性决定文本块的文本是否可以编辑</li>
                        </ul>
                        <p>代码及效果如下：</p>
                        <CodeMirror
                            value={code1}
                            options={{
                                theme: 'monokai',
                                mode: 'JSX',
                                readOnly: true
                            }}
                        />
                        <div id="myDiagramDiv2" className="diagram"></div>
                        <h3>Shape 的属性</h3>
                        <div className="text-center">
                            <img src={require("../../../assets/images/20200405213635.png")} alt="" />
                        </div>
                        <CodeMirror
                            value={code2}
                            options={{
                                theme: 'monokai',
                                mode: 'JSX',
                                readOnly: true
                            }}
                        />
                        <div id="myDiagramDiv3" className="diagram"></div>
                        <ul>
                            <li>"figure"属性决定形状</li>
                            <li>"fill"属性决定颜色</li>
                            <li>"stroke"属性值可以是任意 css color 字符串</li>
                            <li>"strokeWidth"属性值是数字，决定边框宽度</li>
                        </ul>
                        <CodeMirror
                            value={code3}
                            options={{
                                theme: 'monokai',
                                mode: 'JSX',
                                readOnly: true
                            }}
                        />
                        <div id="myDiagramDiv4" className="diagram"></div>
                        <h3>Picture 的属性</h3>
                        <ul>
                            <li>"Source"属性决定图片的路径,在选项对象中设置或作为可选字符串参数</li>
                            <li>"desiredSize"属性通过 new go.Size(width,height)决定图片大小</li>
                            <li>"margin"属性通过 new go.Margin(top,right,bottom,left)决定图片的 margin</li>
                        </ul>
                        <CodeMirror
                            value={code4}
                            options={{
                                theme: 'monokai',
                                mode: 'JSX',
                                readOnly: true
                            }}
                        />
                        <div id="myDiagramDiv5" className="diagram"></div>
                        <h3>Node 的属性</h3>
                        <ul>
                            <li>"selectable"属性决定节点是否可选</li>
                            <li>"deletable"属性决定节点是否可删除</li>
                            <li>"resizable"属性决定节点是否可改变大小</li>
                            <li>"rotatable"属性决定节点是否可旋转</li>
                        </ul>
                        <CodeMirror
                            value={code5}
                            options={{
                                theme: 'monokai',
                                mode: 'JSX',
                                readOnly: true
                            }}
                        />
                        <div id="myDiagramDiv6" className="diagram"></div>
                        <ul>
                            <li>resizeObjectName:要调整大小的 GraphObject 的名称</li>
                            <li>rotateobjectName:要旋转的 GraphObiect 的名称</li>
                            <li>值必须与部件中的命名元素相对应</li>
                        </ul>
                        <CodeMirror
                            value={code6}
                            options={{
                                theme: 'monokai',
                                mode: 'JSX',
                                readOnly: true
                            }}
                        />
                        <div id="myDiagramDiv7" className="diagram"></div>
                        <br />
                        <br />
                        <p>相关代码：</p>
                        <p><a href="https://github.com/LiuZheAb/GoJS_Demo/blob/master/06graphObjectProperties.html" target="_blank" rel="noopener noreferrer">https://github.com/LiuZheAb/GoJS_Demo/blob/master/06graphObjectProperties.html</a></p>
                    </div>
                </div>
                <Directory />
            </div>
        )
    }
}
