import React, { Component } from 'react'
import CodeMirror from '@uiw/react-codemirror';
import 'codemirror/theme/monokai.css';
import Directory from "../../Directory";
import go from "gojs";

let $ = go.GraphObject.make;
let code1 = `let $ = go.GraphObject.make;
let myDiagram = $(go.Diagram, "myDiagramDiv");

myDiagram.nodeTemplate =
    $(go.Node, "Vertical", {
            fromSpot: go.Spot.Right,
            toSpot: go.Spot.Left
        },
        $(go.Shape, "Ellipse", {
            fill: "green",
            width: 30,
            height: 30
        }),
        $(go.TextBlock, {
                font: "20px sans-serif"
            },
            new go.Binding("text", "key"))
    );

myDiagram.model = new go.GraphLinksModel(
    [{
        key: "Alpha"
    }, {
        key: "Beta"
    }], [{
        from: "Alpha",
        to: "Beta"
    }]
)`;
let code2 = `myDiagram.nodeTemplate =
    $(go.Node, "Vertical", {},
        $(go.Shape, "Ellipse", {
            fill: "green",
            width: 30,
            height: 30,
            portId: "",
            fromSpot: go.Spot.Right,
            toSpot: go.Spot.Left
        }),
        $(go.TextBlock, {
                font: "20px sans-serif"
            },
            new go.Binding("text", "key")
        )
    );`;
let code3 = `myDiagram.nodeTemplate =
    $(go.Node, "Spot",
        $(go.Panel, "Auto", $(go.Shape, "RoundedRectangle", {
                fill: "lightblue"
            }),
            $(go.TextBlock, {
                    margin: 10
                },
                new go.Binding("text", "key")
            )
        ),
        //left port
        $(go.Shape, "Ellipse", {
            fill: "pink",
            desiredSize: new go.Size(10, 10),
            alignment: go.Spot.Left,
            portId: "l",
            fromSpot: go.Spot.Left,
            toSpot: go.Spot.Left
        }),
        //right port
        $(go.Shape, "Ellipse", {
            fill: "green",
            desiredSize: new go.Size(10, 10),
            alignment: go.Spot.Right,
            portId: "r",
            fromSpot: go.Spot.Right,
            toSpot: go.Spot.Right
        }),
    );

myDiagram.model = new go.GraphLinksModel(
[{
    key: "Alpha"
}, {
    key: "Beta"
}], [{
    from: "Alpha",
    to: "Beta",
    fromPort: "r",
    toPort: "l"
}]
)

myDiagram.model.linkFromPortIdProperty = "fromPort";
myDiagram.model.linkToPortIdProperty = "toPort";`
let code4 = `myDiagram.nodeTemplate =
    $(go.Node, "Spot",
        $(go.Panel, "Auto", $(go.Shape, "RoundedRectangle", {
                fill: "lightblue"
            }),
            $(go.TextBlock, {
                    margin: 10
                },
                new go.Binding("text", "key")
            )
        ),
        //left port
        $(go.Shape, "Ellipse", {
            fill: "pink",
            desiredSize: new go.Size(10, 10),
            alignment: go.Spot.Left,
            portId: "l",
            fromSpot: go.Spot.Left,
            toSpot: go.Spot.Left,
            fromLinkable: true,
            toLinkable: true
        }),
        //right port
        $(go.Shape, "Ellipse", {
            fill: "green",
            desiredSize: new go.Size(10, 10),
            alignment: go.Spot.Right,
            portId: "r",
            fromSpot: go.Spot.Right,
            toSpot: go.Spot.Right,
            fromLinkable: true,
            toLinkable: true
        }),
    );
myDiagram.model = new go.GraphLinksModel(
    [{
        key: "Alpha"
    }, {
        key: "Beta"
    }], 
)
myDiagram.model.linkFromPortIdProperty = "fromPort";
myDiagram.model.linkToPortIdProperty = "toPort";`;
let code5 = `//left port
$(go.Shape, "Ellipse", {
    fill: "pink",
    desiredSize: new go.Size(10, 10),
    alignment: go.Spot.Left,
    portId: "l",
    fromSpot: go.Spot.Left,
    toSpot: go.Spot.Left,
    fromLinkable: true,
    toLinkable: true,
    fromLinkableDuplicates: true,
    fromLinkableSelfNode: true,
    toLinkableSelfNode: true
}),
//right port
$(go.Shape, "Ellipse", {
    fill: "green",
    desiredSize: new go.Size(10, 10),
    alignment: go.Spot.Right,
    portId: "r",
    fromSpot: go.Spot.Right,
    toSpot: go.Spot.Right,
    fromLinkable: true,
    toLinkable: true,
    fromLinkableDuplicates: true,
    fromLinkableSelfNode: true,
    toLinkableSelfNode: true
}),`;

export default class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articleTree: []
        };
        this.getArticleTree = this.getArticleTree.bind(this);
    }
    getArticleTree() {
        let childrens = document.getElementsByClassName("article-content")[0].children;
        let articleTree = [];
        for (let i = 0; i < childrens.length - 1; i++) {
            let nodeName = childrens[i].nodeName;
            if (nodeName === "H2" || nodeName === "H3") {
                childrens[i].id = childrens[i].innerText;
                articleTree.push({
                    name: childrens[i].innerText,
                    tag: childrens[i].nodeName
                });
            }
        }
        this.setState({ articleTree });
    }
    componentDidMount() {
        this.getArticleTree();
        this.diagramRender1();
        this.diagramRender2();
        this.diagramRender3();
        this.diagramRender4();
        this.diagramRender5();
    }
    diagramRender1() {
        let myDiagram = $(go.Diagram, "myDiagramDiv1");

        myDiagram.nodeTemplate =
            $(go.Node, "Vertical", {
                fromSpot: go.Spot.Right,
                toSpot: go.Spot.Left
            },
                $(go.Shape, "Ellipse", {
                    fill: "green",
                    width: 30,
                    height: 30
                }),
                $(go.TextBlock, {
                    font: "20px sans-serif"
                },
                    new go.Binding("text", "key"))
            );

        myDiagram.model = new go.GraphLinksModel(
            [{
                key: "Alpha"
            }, {
                key: "Beta"
            }], [{
                from: "Alpha",
                to: "Beta"
            }]
        )
    }
    diagramRender2() {
        let myDiagram = $(go.Diagram, "myDiagramDiv2");

        myDiagram.nodeTemplate =
            $(go.Node, "Vertical", {},
                $(go.Shape, "Ellipse", {
                    fill: "green",
                    width: 30,
                    height: 30,
                    portId: "",
                    fromSpot: go.Spot.Right,
                    toSpot: go.Spot.Left
                }),
                $(go.TextBlock, {
                    font: "20px sans-serif"
                },
                    new go.Binding("text", "key")
                )
            );

        myDiagram.model = new go.GraphLinksModel(
            [{
                key: "Alpha"
            }, {
                key: "Beta"
            }], [{
                from: "Alpha",
                to: "Beta"
            }]
        )
    }
    diagramRender3() {
        let myDiagram = $(go.Diagram, "myDiagramDiv3");

        myDiagram.nodeTemplate =
            $(go.Node, "Spot",
                $(go.Panel, "Auto", $(go.Shape, "RoundedRectangle", {
                    fill: "lightblue"
                }),
                    $(go.TextBlock, {
                        margin: 10
                    },
                        new go.Binding("text", "key")
                    )
                ),
                //left port
                $(go.Shape, "Ellipse", {
                    fill: "pink",
                    desiredSize: new go.Size(10, 10),
                    alignment: go.Spot.Left,
                    portId: "l",
                    fromSpot: go.Spot.Left,
                    toSpot: go.Spot.Left
                }),
                //right port
                $(go.Shape, "Ellipse", {
                    fill: "green",
                    desiredSize: new go.Size(10, 10),
                    alignment: go.Spot.Right,
                    portId: "r",
                    fromSpot: go.Spot.Right,
                    toSpot: go.Spot.Right
                }),
            );

        myDiagram.model = new go.GraphLinksModel(
            [{
                key: "Alpha"
            }, {
                key: "Beta"
            }], [{
                from: "Alpha",
                to: "Beta",
                fromPort: "r",
                toPort: "l"
            }]
        )

        myDiagram.model.linkFromPortIdProperty = "fromPort";
        myDiagram.model.linkToPortIdProperty = "toPort";
    }
    diagramRender4() {
        let myDiagram = $(go.Diagram, "myDiagramDiv4");
        myDiagram.nodeTemplate =
            $(go.Node, "Spot",
                $(go.Panel, "Auto", $(go.Shape, "RoundedRectangle", {
                    fill: "lightblue"
                }),
                    $(go.TextBlock, {
                        margin: 10
                    },
                        new go.Binding("text", "key")
                    )
                ),
                //left port
                $(go.Shape, "Ellipse", {
                    fill: "pink",
                    desiredSize: new go.Size(10, 10),
                    alignment: go.Spot.Left,
                    portId: "l",
                    fromSpot: go.Spot.Left,
                    toSpot: go.Spot.Left,
                    fromLinkable: true,
                    toLinkable: true
                }),
                //right port
                $(go.Shape, "Ellipse", {
                    fill: "green",
                    desiredSize: new go.Size(10, 10),
                    alignment: go.Spot.Right,
                    portId: "r",
                    fromSpot: go.Spot.Right,
                    toSpot: go.Spot.Right,
                    fromLinkable: true,
                    toLinkable: true
                }),
            );

        myDiagram.model = new go.GraphLinksModel(
            [{
                key: "Alpha"
            }, {
                key: "Beta"
            }],
        )
        myDiagram.model.linkFromPortIdProperty = "fromPort";
        myDiagram.model.linkToPortIdProperty = "toPort";
    }
    diagramRender5() {
        let myDiagram = $(go.Diagram, "myDiagramDiv5");
        myDiagram.nodeTemplate =
            $(go.Node, "Spot",
                $(go.Panel, "Auto", $(go.Shape, "RoundedRectangle", {
                    fill: "lightblue"
                }),
                    $(go.TextBlock, {
                        margin: 10
                    },
                        new go.Binding("text", "key")
                    )
                ),
                //left port
                $(go.Shape, "Ellipse", {
                    fill: "pink",
                    desiredSize: new go.Size(10, 10),
                    alignment: go.Spot.Left,
                    portId: "l",
                    fromSpot: go.Spot.Left,
                    toSpot: go.Spot.Left,
                    fromLinkable: true,
                    toLinkable: true,
                    fromLinkableDuplicates: true,
                    fromLinkableSelfNode: true,
                    toLinkableSelfNode: true
                }),
                //right port
                $(go.Shape, "Ellipse", {
                    fill: "green",
                    desiredSize: new go.Size(10, 10),
                    alignment: go.Spot.Right,
                    portId: "r",
                    fromSpot: go.Spot.Right,
                    toSpot: go.Spot.Right,
                    fromLinkable: true,
                    toLinkable: true,
                    fromLinkableDuplicates: true,
                    fromLinkableSelfNode: true,
                    toLinkableSelfNode: true
                }),
            );

        myDiagram.model = new go.GraphLinksModel(
            [{
                key: "Alpha"
            }, {
                key: "Beta"
            }],
        )
        myDiagram.model.linkFromPortIdProperty = "fromPort";
        myDiagram.model.linkToPortIdProperty = "toPort";
    }
    render() {
        return (
            <div className="page-content">
                <div className="article">
                    <div className="article-title">
                        <h1>GoJS Ports</h1>
                    </div>
                    <div className="article-content">
                        <h2>GoJS Ports概述</h2>
                        <ul>
                            <li>在Node上提供Link连接的特定图形位置</li>
                            <li>可以是任意数量的port/Node</li>
                            <li>默认情况下，整个Node是唯一的端口</li>
                            <li>要在nodeTemplate中的GraphObject生成一个端口，设置“portId”属性</li>
                            <li>port只能存在于Node/Group上</li>
                        </ul>
                        <p>先看一个设置端口的例子:</p>
                        <CodeMirror
                            value={code1}
                            options={{
                                theme: 'monokai',
                                mode: 'JSX',
                                readOnly: true
                            }}
                        />
                        <div id="myDiagramDiv1" className="diagram"></div>
                        <p>Link在Node上链接的位置是固定的</p>
                        <h3>GraphObject.portld</h3>
                        <ul>
                            <li>定义以GraphObject为端口</li>
                        </ul>
                        <CodeMirror
                            value={code2}
                            options={{
                                theme: 'monokai',
                                mode: 'JSX',
                                readOnly: true
                            }}
                        />
                        <div id="myDiagramDiv2" className="diagram"></div>
                        <h2>Multiple Ports</h2>
                        <ul>
                            <li>有多个端口时，Link数据需要一种方法来知道它来自或将要访问哪个端口</li>
                        </ul>
                        <ul data-lake-indent="1">
                            <li>设置GraphLinksModel.linkToPortldProperty / GraphLinksModel.linkFromPortldProperty为任何非空字符串值</li>
                            <li>然后，在Link数据上设置这些属性</li>
                        </ul>
                        <CodeMirror
                            value={code3}
                            options={{
                                theme: 'monokai',
                                mode: 'JSX',
                                readOnly: true
                            }}
                        />
                        <div id="myDiagramDiv3" className="diagram"></div>
                        <CodeMirror
                            value={code4}
                            options={{
                                theme: 'monokai',
                                mode: 'JSX',
                                readOnly: true
                            }}
                        />
                        <div id="myDiagramDiv4" className="diagram"></div>
                        <h3>fromLinkableDuplicates / toLinkableDuplicates</h3>
                        <ul>
                            <li>一个port是否可能有多个Link到它或从它来</li>
                        </ul>
                        <p>同时将fromLinkableSelfNode/toLinkableSelfNode设置为true,Node即可链接自身</p>
                        <CodeMirror
                            value={code5}
                            options={{
                                theme: 'monokai',
                                mode: 'JSX',
                                readOnly: true
                            }}
                        />
                        <div id="myDiagramDiv5" className="diagram"></div>
                        <p><br /></p>
                        <p><br /></p>
                        <p>相关代码：</p>
                        <p><a href="https://github.com/LiuZheAb/GoJS_Demo/blob/master/19gojsPorts.html" target="_blank" rel="noopener noreferrer">https://github.com/LiuZheAb/GoJS_Demo/blob/master/19gojsPorts.html</a></p>
                    </div>
                </div>
                <div className="directory">
                    <Directory articleTree={this.state.articleTree}></Directory>
                </div>
            </div>
        )
    }
}
