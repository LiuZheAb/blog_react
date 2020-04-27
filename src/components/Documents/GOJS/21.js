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

myDiagram.nodeTemplate =
    $(go.Node, "Vertical", new go.Binding("itemArray", "items"));

myDiagram.model = new go.GraphLinksModel(
    [{
        key: 1,
        items: ["Alpha", "Beta", "Gamma"]
    }, ]
);`;
let code2 = `myDiagram.nodeTemplate =
    $(go.Node, "Spot",
        $(go.Panel, "Auto",
            $(go.Shape, "RoundedRectangle", {
                fill: "lightblue"
            }),
            $(go.TextBlock, {
                margin: 10
            }, new go.Binding("text", "key"))
        )
    );

myDiagram.model = new go.GraphLinksModel();
myDiagram.model.linkFromPortIdProperty = "fromPort";
myDiagram.model.linkToPortIdProperty = "toPort";
myDiagram.model.nodeDataArray = [{
        key: "Alpha"
    }, {
        key: "Beta"
    }, {
        key: "Delta"
    }, ]`;
let code3 = `myDiagram.nodeTemplate =
    $(go.Node, "Spot",
        $(go.Panel, "Auto",
            $(go.Shape, "RoundedRectangle", {
                fill: "lightblue"
            }),
            $(go.TextBlock, {
                margin: 10
            }, new go.Binding("text", "key"))
        ),
        $(go.Panel, "Horizontal", {
            alignment: go.Spot.Top
        },
            new go.Binding("itemArray", "ports"), {
                itemTemplate: $(go.Panel, {
                        portId: "",
                        fromSpot: go.Spot.Top,
                        toSpot: go.Spot.Top,
                        fromLinkable: true,
                        toLinkable: true
                    }, new go.Binding("portId", "portID"),
                    $(go.Shape, "Ellipse", {
                            desiredSize: new go.Size(10, 10),
                            fill: "green"
                        },
                        new go.Binding("fill", "color")
                    ))
            }
        )
    );

myDiagram.model = new go.GraphLinksModel();
myDiagram.model.linkFromPortIdProperty = "fromPort";
myDiagram.model.linkToPortIdProperty = "toPort";
myDiagram.model.nodeDataArray = [{
    key: "Alpha",
    ports: [{
        portId: "left",
        color: "red"
    }, {
        portId: "middle",
        color: "yellow"
    }, {
        portId: "right",
        color: "green"
    }, {
        portId: "farright",
        color: "pink"
    }]
}, {
    key: "Beta",
    ports: [{
        portId: "left",
        color: "purple"
    }]
}, {
    key: "Delta"
}, ]`
let code4 = `let alphaNode = myDiagram.findNodeForKey("Alpha");
myDiagram.model.removeArrayItem(alphaNode.data.ports, 0);`;
let code5 = `myDiagram.model.addArrayItem(alphaNode.data.ports, {
    portID: "right2",
    color: "white"
});`;
let code6 = `myDiagram.model.insertArrayItem(alphaNode.data.ports, 1,{
    portID: "middleleft",
    color: "pink"
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
        let $ = go.GraphObject.make;
        let myDiagram = $(go.Diagram, "myDiagramDiv1");

        myDiagram.nodeTemplate =
            $(go.Node, "Vertical", new go.Binding("itemArray", "items"));

        myDiagram.model = new go.GraphLinksModel(
            [{
                key: 1,
                items: ["Alpha", "Beta", "Gamma"],
            },]
        )
    }
    diagramRender2() {
        let myDiagram = $(go.Diagram, "myDiagramDiv2");

        myDiagram.nodeTemplate =
            $(go.Node, "Spot",
                $(go.Panel, "Auto",
                    $(go.Shape, "RoundedRectangle", {
                        fill: "lightblue"
                    }),
                    $(go.TextBlock, {
                        margin: 10
                    }, new go.Binding("text", "key"))
                )
            );

        myDiagram.model = new go.GraphLinksModel();
        myDiagram.model.linkFromPortIdProperty = "fromPort";
        myDiagram.model.linkToPortIdProperty = "toPort";
        myDiagram.model.nodeDataArray = [{
            key: "Alpha"
        }, {
            key: "Beta"
        }, {
            key: "Delta"
        },]
    }
    diagramRender3() {
        let myDiagram = $(go.Diagram, "myDiagramDiv3");

        myDiagram.nodeTemplate =
            $(go.Node, "Spot",
                $(go.Panel, "Auto",
                    $(go.Shape, "RoundedRectangle", {
                        fill: "lightblue"
                    }),
                    $(go.TextBlock, {
                        margin: 10
                    }, new go.Binding("text", "key"))
                ),
                $(go.Panel, "Horizontal", {
                    alignment: go.Spot.Top
                },
                    new go.Binding("itemArray", "ports"), {
                    itemTemplate: $(go.Panel, {
                        portId: "",
                        fromSpot: go.Spot.Top,
                        toSpot: go.Spot.Top,
                        fromLinkable: true,
                        toLinkable: true
                    }, new go.Binding("portId", "portID"),
                        $(go.Shape, "Ellipse", {
                            desiredSize: new go.Size(10, 10),
                            fill: "green"
                        },
                            new go.Binding("fill", "color")
                        ))
                }
                )
            );

        myDiagram.model = new go.GraphLinksModel();
        myDiagram.model.linkFromPortIdProperty = "fromPort";
        myDiagram.model.linkToPortIdProperty = "toPort";
        myDiagram.model.nodeDataArray = [{
            key: "Alpha",
            ports: [{
                portId: "left",
                color: "red"
            }, {
                portId: "middle",
                color: "yellow"
            }, {
                portId: "right",
                color: "green"
            }, {
                portId: "farright",
                color: "pink"
            }]
        }, {
            key: "Beta",
            ports: [{
                portId: "left",
                color: "purple"
            }]
        }, {
            key: "Delta"
        },]
    }
    diagramRender4() {
        let myDiagram = $(go.Diagram, "myDiagramDiv4");

        myDiagram.nodeTemplate =
            $(go.Node, "Spot",
                $(go.Panel, "Auto",
                    $(go.Shape, "RoundedRectangle", {
                        fill: "lightblue"
                    }),
                    $(go.TextBlock, {
                        margin: 10
                    }, new go.Binding("text", "key"))
                ),
                $(go.Panel, "Horizontal", {
                    alignment: go.Spot.Top
                },
                    new go.Binding("itemArray", "ports"), {
                    itemTemplate: $(go.Panel, {
                        portId: "",
                        fromSpot: go.Spot.Top,
                        toSpot: go.Spot.Top,
                        fromLinkable: true,
                        toLinkable: true
                    }, new go.Binding("portId", "portID"),
                        $(go.Shape, "Ellipse", {
                            desiredSize: new go.Size(10, 10),
                            fill: "green"
                        },
                            new go.Binding("fill", "color")
                        ))
                }
                )
            );

        myDiagram.model = new go.GraphLinksModel();
        myDiagram.model.linkFromPortIdProperty = "fromPort";
        myDiagram.model.linkToPortIdProperty = "toPort";
        myDiagram.model.nodeDataArray = [{
            key: "Alpha",
            ports: [{
                portId: "left",
                color: "red"
            }, {
                portId: "middle",
                color: "yellow"
            }, {
                portId: "right",
                color: "green"
            }, {
                portId: "farright",
                color: "pink"
            }]
        }, {
            key: "Beta",
            ports: [{
                portId: "left",
                color: "purple"
            }]
        }, {
            key: "Delta"
        },]

        let alphaNode = myDiagram.findNodeForKey("Alpha");
        myDiagram.model.removeArrayItem(alphaNode.data.ports, 0);
    }
    diagramRender5() {
        let myDiagram = $(go.Diagram, "myDiagramDiv5");

        myDiagram.nodeTemplate =
            $(go.Node, "Spot",
                $(go.Panel, "Auto",
                    $(go.Shape, "RoundedRectangle", {
                        fill: "lightblue"
                    }),
                    $(go.TextBlock, {
                        margin: 10
                    }, new go.Binding("text", "key"))
                ),
                $(go.Panel, "Horizontal", {
                    alignment: go.Spot.Top
                },
                    new go.Binding("itemArray", "ports"), {
                    itemTemplate: $(go.Panel, {
                        portId: "",
                        fromSpot: go.Spot.Top,
                        toSpot: go.Spot.Top,
                        fromLinkable: true,
                        toLinkable: true
                    }, new go.Binding("portId", "portID"),
                        $(go.Shape, "Ellipse", {
                            desiredSize: new go.Size(10, 10),
                            fill: "green"
                        },
                            new go.Binding("fill", "color")
                        ))
                }
                )
            );

        myDiagram.model = new go.GraphLinksModel();
        myDiagram.model.linkFromPortIdProperty = "fromPort";
        myDiagram.model.linkToPortIdProperty = "toPort";
        myDiagram.model.nodeDataArray = [{
            key: "Alpha",
            ports: [{
                portId: "left",
                color: "red"
            }, {
                portId: "middle",
                color: "yellow"
            }, {
                portId: "right",
                color: "green"
            }, {
                portId: "farright",
                color: "pink"
            }]
        }, {
            key: "Beta",
            ports: [{
                portId: "left",
                color: "purple"
            }]
        }, {
            key: "Delta"
        },]

        let alphaNode = myDiagram.findNodeForKey("Alpha");
        myDiagram.model.removeArrayItem(alphaNode.data.ports, 0);
        myDiagram.model.addArrayItem(alphaNode.data.ports, {
            portID: "right2",
            color: "white"
        });
    }
    diagramRender6() {
        let myDiagram = $(go.Diagram, "myDiagramDiv6");

        myDiagram.nodeTemplate =
            $(go.Node, "Spot",
                $(go.Panel, "Auto",
                    $(go.Shape, "RoundedRectangle", {
                        fill: "lightblue"
                    }),
                    $(go.TextBlock, {
                        margin: 10
                    }, new go.Binding("text", "key"))
                ),
                $(go.Panel, "Horizontal", {
                    alignment: go.Spot.Top
                },
                    new go.Binding("itemArray", "ports"), {
                    itemTemplate: $(go.Panel, {
                        portId: "",
                        fromSpot: go.Spot.Top,
                        toSpot: go.Spot.Top,
                        fromLinkable: true,
                        toLinkable: true
                    }, new go.Binding("portId", "portID"),
                        $(go.Shape, "Ellipse", {
                            desiredSize: new go.Size(10, 10),
                            fill: "green"
                        },
                            new go.Binding("fill", "color")
                        ))
                }
                )
            );

        myDiagram.model = new go.GraphLinksModel();
        myDiagram.model.linkFromPortIdProperty = "fromPort";
        myDiagram.model.linkToPortIdProperty = "toPort";
        myDiagram.model.nodeDataArray = [{
            key: "Alpha",
            ports: [{
                portId: "left",
                color: "red"
            }, {
                portId: "middle",
                color: "yellow"
            }, {
                portId: "right",
                color: "green"
            }, {
                portId: "farright",
                color: "pink"
            }]
        }, {
            key: "Beta",
            ports: [{
                portId: "left",
                color: "purple"
            }]
        }, {
            key: "Delta"
        },]

        let alphaNode = myDiagram.findNodeForKey("Alpha");
        myDiagram.model.removeArrayItem(alphaNode.data.ports, 0);
        myDiagram.model.addArrayItem(alphaNode.data.ports, {
            portID: "right2",
            color: "white"
        });
        myDiagram.model.insertArrayItem(alphaNode.data.ports, 1, {
            portID: "middleleft",
            color: "pink"
        });
    }
    render() {
        return (
            <div className="page-content">
                <div className="article">
                    <div className="article-title">
                        <h1>GoJS Item Arrays</h1>
                    </div>
                    <div className="article-content">
                        <h2>Item Arrays 概述</h2>
                        <ul>
                            <li>允许在一个 Node 中显示可变数量的元素</li>
                            <li>通过设置 Panel.itemArray 实现，通常通过数据绑定</li>
                        </ul>
                        <ul data-lake-indent="1">
                            <li>Panel 将包含与绑定 Array 中的值相同多的元素</li>
                        </ul>
                        <CodeMirror 
                            value={code1} options={codeMirrorOptions} />
                        <div id="myDiagramDiv1" className="diagram"></div>
                        <h2>Item 模板</h2>
                        <ul>
                            <li>用于定义项 item array 中每个 item 的外观</li>
                            <li>必须是一个 Panel</li>
                        </ul>
                        <ul data-lake-indent="1">
                            <li>Panel.data 将是此元素 item array 中的项</li>
                        </ul>
                        <CodeMirror 
                            value={code2} options={codeMirrorOptions} />
                        <div id="myDiagramDiv2" className="diagram"></div>
                        <CodeMirror 
                            value={code3} options={codeMirrorOptions} />
                        <div id="myDiagramDiv3" className="diagram"></div>
                        <p>要动态更新项目数组，请使用特定的模型方法:</p>
                        <ul>
                            <li>addArrayItem</li>
                            <li>removeArrayItem</li>
                            <li>insertArrayItem</li>
                        </ul>
                        <h3>removeArrayItem(array,index)</h3>
                        <p>index 为 item 在数组中的序号</p>
                        <CodeMirror 
                            value={code4} options={codeMirrorOptions} />
                        <div id="myDiagramDiv4" className="diagram"></div>
                        <h3>addArrayItem(array,value)</h3>
                        <CodeMirror 
                            value={code5} options={codeMirrorOptions} />
                        <div id="myDiagramDiv5" className="diagram"></div>
                        <h3>insertArrayItem(array,index,value)</h3>
                        <p>index 为插入 item 后在数组中的序号</p>
                        <CodeMirror 
                            value={code6} options={codeMirrorOptions} />
                        <div id="myDiagramDiv6" className="diagram"></div>
                        <p><br /></p>
                        <p><br /></p>
                        <p>相关代码：</p>
                        <p><a href="https://github.com/LiuZheAb/GoJS_Demo/blob/master/20gojsItemArrays.html" target="_blank" rel="noopener noreferrer">https://github.com/LiuZheAb/GoJS_Demo/blob/master/20gojsItemArrays.html</a></p>
                    </div>
                </div>
                <Directory />
            </div>
        )
    }
}
