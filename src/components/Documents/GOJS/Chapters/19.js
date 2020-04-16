import React, { Component } from 'react'
import CodeMirror from '@uiw/react-codemirror';
import 'codemirror/theme/monokai.css';
import Directory from "../../../Directory";
import go from "gojs";

let $ = go.GraphObject.make;
let code1 = `let myDiagram = $(go.Diagram, "myDiagramDiv", {
    "undoManager.isEnabled": true
});

myDiagram.nodeTemplate =
    $(go.Node, "Auto",
        $(go.Shape, "RoundedRectangle", {
            fill: "cyan",
            portId: "",
            fromLinkable: true,
            toLinkable: true
        }),
        $(go.TextBlock, {
                margin: 8
            },
            new go.Binding("text", "key")
        )
    );
myDiagram.linkTemplate =
    $(go.Link, {
            relinkableFrom: true,
            relinkableTo: true
        },
        $(go.Shape),
        $(go.Shape, {
            toArrow: "standard",
        }),
    );
myDiagram.model =
    $(go.GraphLinksModel, {
        nodeDataArray: [{
            key: "Alpha"
        }, {
            key: "Beta"
        }, {
            key: "Gamma"
        }, {
            key: "Delta"
        }],
        linkDataArray: [{
            from: "Alpha",
            to: "Beta"
        }]
    });`;
let code2 = `myDiagram.toolManager.relinkingTool.fromHandleArchetype =
    $(go.Shape, "Diamond", {
        desiredSize: new go.Size(9, 9),
        stroke: "green",
        fill: "lime",
        segmentIndex: 0
    });
myDiagram.toolManager.relinkingTool.toHandleArchetype =
    $(go.Shape, "Diamond", {
        desiredSize: new go.Size(9, 9),
        stroke: "red",
        fill: "pink",
        segmentIndex: -1
    });`;
let code3 = `myDiagram.toolManager.relinkingTool.linkValidation = function (fromnode, fromport, tonode, toport, link) {
    return fromnode.data.key === "Alpha";
}`;
let code4 = `let myDiagram = $(go.Diagram, "myDiagramDiv", {
    "undoManager.isEnabled": true
});

myDiagram.nodeTemplate =
    $(go.Node, "Auto",
        $(go.Shape, "RoundedRectangle", {
            fill: "cyan",
        }),
        $(go.TextBlock, {
                margin: 8
            },
            new go.Binding("text", "key")
        )
    );
myDiagram.linkTemplate =
    $(go.Link, {
            reshapable: true,
            routing: go.Link.Orthogonal
        },
        $(go.Shape),
        $(go.Shape, {
            toArrow: "standard",
        }),
    );

myDiagram.model =
    $(go.GraphLinksModel, {
        nodeDataArray: [{
            key: "Alpha"
        }, {
            key: "Beta"
        }],
        linkDataArray: [{
            from: "Alpha",
            to: "Beta"
        }]
    })`;
let code5 = `myDiagram.linkTemplate =
    $(go.Link, {
            reshapable: true,
            routing: go.Link.Orthogonal,
            resegmentable: true
        },
        $(go.Shape),
        $(go.Shape, {
            toArrow: "standard",
        }),
    );`;
let code6 = `let myDiagram = $(go.Diagram, "myDiagramDiv", {
    "undoManager.isEnabled": true
});

myDiagram.nodeTemplate =
    $(go.Node, "Auto",
        $(go.Shape, "RoundedRectangle", {
            fill: "cyan",
            portId: "",
            fromLinkable: true,
            toLinkable: true
        }),
        $(go.TextBlock, {
                margin: 8
            },
            new go.Binding("text", "key")
        )
    );

myDiagram.toolManager.dragSelectingTool.box =
    $(go.Part, {
            layerName: "Tool"
        },
        $(go.Shape, "RoundedRectangle", {
            fill: null,
            strokeWidth: 5,
            stroke: "lime"
        })
    )

myDiagram.model = new go.GraphLinksModel(
    [{
            key: "Alpha"
        },
        {
            key: "Beta"
        }
    ]
);`;
let code7 = `myDiagram.toolManager.linkingTool.temporaryLink =
    $(go.Link, {
            layerName: "Tool"
        },
        $(go.Shape, {
            stroke: "red",
            strokeWidth: 2,
            strokeDashArray: [4, 2]
        })
    )`;

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
        document.title="GoJS教程——第三节 重新链接,链接重塑,零件";
        this.getArticleTree();
        this.diagramRender1();
        this.diagramRender2();
        this.diagramRender3();
        this.diagramRender4();
        this.diagramRender5();
        this.diagramRender6();
        this.diagramRender7();
    }
    diagramRender1() {
        let myDiagram = $(go.Diagram, "myDiagramDiv1", {
            "undoManager.isEnabled": true
        });

        myDiagram.nodeTemplate =
            $(go.Node, "Auto",
                $(go.Shape, "RoundedRectangle", {
                    fill: "cyan",
                    portId: "",
                    fromLinkable: true,
                    toLinkable: true
                }),
                $(go.TextBlock, {
                    margin: 8
                },
                    new go.Binding("text", "key"))
            );
        myDiagram.linkTemplate =
            $(go.Link, {
                relinkableFrom: true,
                relinkableTo: true
            },
                $(go.Shape),
                $(go.Shape, {
                    toArrow: "standard",
                }),
            );
        myDiagram.model =
            $(go.GraphLinksModel, {
                nodeDataArray: [{
                    key: "Alpha"
                }, {
                    key: "Beta"
                }, {
                    key: "Gamma"
                }, {
                    key: "Delta"
                }],
                linkDataArray: [{
                    from: "Alpha",
                    to: "Beta"
                }]
            })
    }
    diagramRender2() {
        let myDiagram = $(go.Diagram, "myDiagramDiv2", {
            "undoManager.isEnabled": true
        });

        myDiagram.nodeTemplate =
            $(go.Node, "Auto",
                $(go.Shape, "RoundedRectangle", {
                    fill: "cyan",
                    portId: "",
                    fromLinkable: true,
                    toLinkable: true
                }),
                $(go.TextBlock, {
                    margin: 8
                },
                    new go.Binding("text", "key"))
            );
        myDiagram.linkTemplate =
            $(go.Link, {
                relinkableFrom: true,
                relinkableTo: true
            },
                $(go.Shape),
                $(go.Shape, {
                    toArrow: "standard",
                }),
            );
        myDiagram.toolManager.relinkingTool.fromHandleArchetype =
            $(go.Shape, "Diamond", {
                desiredSize: new go.Size(9, 9),
                stroke: "green",
                fill: "lime",
                segmentIndex: 0
            });
        myDiagram.toolManager.relinkingTool.toHandleArchetype =
            $(go.Shape, "Diamond", {
                desiredSize: new go.Size(9, 9),
                stroke: "red",
                fill: "pink",
                segmentIndex: -1
            });
        myDiagram.model =
            $(go.GraphLinksModel, {
                nodeDataArray: [{
                    key: "Alpha"
                }, {
                    key: "Beta"
                }, {
                    key: "Gamma"
                }, {
                    key: "Delta"
                }],
                linkDataArray: [{
                    from: "Alpha",
                    to: "Beta"
                }]
            })
    }
    diagramRender3() {
        let myDiagram = $(go.Diagram, "myDiagramDiv3", {
            "undoManager.isEnabled": true
        });

        myDiagram.nodeTemplate =
            $(go.Node, "Auto",
                $(go.Shape, "RoundedRectangle", {
                    fill: "cyan",
                    portId: "",
                    fromLinkable: true,
                    toLinkable: true
                }),
                $(go.TextBlock, {
                    margin: 8
                },
                    new go.Binding("text", "key"))
            );
        myDiagram.linkTemplate =
            $(go.Link, {
                relinkableFrom: true,
                relinkableTo: true
            },
                $(go.Shape),
                $(go.Shape, {
                    toArrow: "standard",
                }),
            );
        myDiagram.toolManager.relinkingTool.fromHandleArchetype =
            $(go.Shape, "Diamond", {
                desiredSize: new go.Size(9, 9),
                stroke: "green",
                fill: "lime",
                segmentIndex: 0
            });
        myDiagram.toolManager.relinkingTool.toHandleArchetype =
            $(go.Shape, "Diamond", {
                desiredSize: new go.Size(9, 9),
                stroke: "red",
                fill: "pink",
                segmentIndex: -1
            });

        myDiagram.toolManager.relinkingTool.linkValidation = function (fromnode, fromport, tonode, toport, link) {
            return fromnode.data.key === "Alpha";
        }

        myDiagram.model =
            $(go.GraphLinksModel, {
                nodeDataArray: [{
                    key: "Alpha"
                }, {
                    key: "Beta"
                }, {
                    key: "Gamma"
                }, {
                    key: "Delta"
                }],
                linkDataArray: [{
                    from: "Alpha",
                    to: "Beta"
                }]
            })
    }
    diagramRender4() {
        let myDiagram = $(go.Diagram, "myDiagramDiv4", {
            "undoManager.isEnabled": true
        });

        myDiagram.nodeTemplate =
            $(go.Node, "Auto",
                $(go.Shape, "RoundedRectangle", {
                    fill: "cyan",
                }),
                $(go.TextBlock, {
                    margin: 8
                },
                    new go.Binding("text", "key")
                )
            );
        myDiagram.linkTemplate =
            $(go.Link, {
                reshapable: true,
                routing: go.Link.Orthogonal
            },
                $(go.Shape),
                $(go.Shape, {
                    toArrow: "standard",
                }),
            );

        myDiagram.model =
            $(go.GraphLinksModel, {
                nodeDataArray: [{
                    key: "Alpha"
                }, {
                    key: "Beta"
                }],
                linkDataArray: [{
                    from: "Alpha",
                    to: "Beta"
                }]
            })
    }
    diagramRender5() {
        let myDiagram = $(go.Diagram, "myDiagramDiv5", {
            "undoManager.isEnabled": true
        });

        myDiagram.nodeTemplate =
            $(go.Node, "Auto",
                $(go.Shape, "RoundedRectangle", {
                    fill: "cyan",
                }),
                $(go.TextBlock, {
                    margin: 8
                },
                    new go.Binding("text", "key")
                )
            );
        myDiagram.linkTemplate =
            $(go.Link, {
                reshapable: true,
                routing: go.Link.Orthogonal,
                resegmentable: true
            },
                $(go.Shape),
                $(go.Shape, {
                    toArrow: "standard",
                }),
            );

        myDiagram.model =
            $(go.GraphLinksModel, {
                nodeDataArray: [{
                    key: "Alpha"
                }, {
                    key: "Beta"
                }],
                linkDataArray: [{
                    from: "Alpha",
                    to: "Beta"
                }]
            })
    }
    diagramRender6() {
        let myDiagram = $(go.Diagram, "myDiagramDiv6", {
            "undoManager.isEnabled": true
        });

        myDiagram.nodeTemplate =
            $(go.Node, "Auto",
                $(go.Shape, "RoundedRectangle", {
                    fill: "cyan",
                    portId: "",
                    fromLinkable: true,
                    toLinkable: true
                }),
                $(go.TextBlock, {
                    margin: 8
                },
                    new go.Binding("text", "key")
                )
            );

        myDiagram.toolManager.dragSelectingTool.box =
            $(go.Part, {
                layerName: "Tool"
            },
                $(go.Shape, "RoundedRectangle", {
                    fill: null,
                    strokeWidth: 5,
                    stroke: "lime"
                })
            )

        myDiagram.model = new go.GraphLinksModel(
            [{
                key: "Alpha"
            },
            {
                key: "Beta"
            }
            ]
        );
    }
    diagramRender7() {
        let myDiagram = $(go.Diagram, "myDiagramDiv7", {
            "undoManager.isEnabled": true
        });

        myDiagram.nodeTemplate =
            $(go.Node, "Auto",
                $(go.Shape, "RoundedRectangle", {
                    fill: "cyan",
                    portId: "",
                    fromLinkable: true,
                    toLinkable: true
                }),
                $(go.TextBlock, {
                    margin: 8
                },
                    new go.Binding("text", "key")
                )
            );

        myDiagram.toolManager.dragSelectingTool.box =
            $(go.Part, {
                layerName: "Tool"
            },
                $(go.Shape, "RoundedRectangle", {
                    fill: null,
                    strokeWidth: 5,
                    stroke: "lime"
                })
            )
        myDiagram.toolManager.linkingTool.temporaryLink =
            $(go.Link, {
                layerName: "Tool"
            },
                $(go.Shape, {
                    stroke: "red",
                    strokeWidth: 2,
                    strokeDashArray: [4, 2]
                })
            )

        myDiagram.model = new go.GraphLinksModel(
            [{
                key: "Alpha"
            },
            {
                key: "Beta"
            }
            ]
        );
    }
    render() {
        return (
            <div className="page-content">
                <div className="article">
                    <div className="article-title">
                        <h1>GoJS工具——第三节 重新链接,链接重塑,零件</h1>
                    </div>
                    <div className="article-content">
                        <h2>Relinking Tool</h2>
                        <h3>示例</h3>
                        <ul>
                            <li>用于重新分配Link连接的"to"和"from"Node</li>
                            <li>仅用于"toRelinkable"和或"fromRelinkable"属性为true的Link</li>
                            <li>自动更新Diagram和Model中的关系</li>
                        </ul>
                        <p>代码及效果如下:</p>
                        <CodeMirror
                            value={code1}
                            options={{
                                theme: 'monokai',
                                mode: 'JSX',
                                readOnly: true
                            }}
                        />
                        <div id="myDiagramDiv1" className="diagram"></div>
                        <h3>自定义样式</h3>
                        <CodeMirror
                            value={code2}
                            options={{
                                theme: 'monokai',
                                mode: 'JSX',
                                readOnly: true
                            }}
                        />
                        <ul>
                            <li>segmentIndex决定了定义内容在Link上的位置</li>
                            <li>默认值:-infinity,位于Link中间</li>
                            <li>0:位于Link的from端</li>
                            <li>-1:位于Link的to端</li>
                        </ul>
                        <div id="myDiagramDiv2" className="diagram"></div>
                        <h3>linkValidation</h3>
                        <p>自定义Link重新链接条件</p>
                        <CodeMirror
                            value={code3}
                            options={{
                                theme: 'monokai',
                                mode: 'JSX',
                                readOnly: true
                            }}
                        />
                        <div id="myDiagramDiv3" className="diagram"></div>
                        <h2>LinkReshaping Tool</h2>
                        <ul>
                            <li>用来改变Link的路径</li>
                            <li>仅用于"reshapable"属性值为true的Link</li>
                        </ul>
                        <CodeMirror
                            value={code4}
                            options={{
                                theme: 'monokai',
                                mode: 'JSX',
                                readOnly: true
                            }}
                        />
                        <div id="myDiagramDiv4" className="diagram"></div>
                        <p>上下移动Node后点击Link,滑动方块查看效果</p>
                        <h3>resegmentable</h3>
                        <p>决定Link是否可重新分割</p>
                        <CodeMirror
                            value={code5}
                            options={{
                                theme: 'monokai',
                                mode: 'JSX',
                                readOnly: true
                            }}
                        />
                        <div id="myDiagramDiv5" className="diagram"></div>
                        <p>上下移动Node后点击Link,滑动菱形块查看效果</p>
                        <h2>Tool Parts</h2>
                        <ul>
                            <li>用来在操作过程中反馈的特殊的Part工具</li>
                        </ul>
                        <ul data-lake-indent="1">
                            <li>在Diagram长按并滑动鼠标可用来选中Part</li>
                            <li>toolManager.dragSelectingTool.box决定选择框的样式</li>
                        </ul>
                        <CodeMirror
                            value={code6}
                            options={{
                                theme: 'monokai',
                                mode: 'JSX',
                                readOnly: true
                            }}
                        />
                        <div id="myDiagramDiv6" className="diagram"></div>
                        <ul data-lake-indent="1">
                            <li>在Node边框长按并滑动鼠标可重新链接,此时会显示当前拖拽的Link</li>
                            <li>toolManager.linkingTool.temporaryLink决定此样式</li>
                        </ul>
                        <CodeMirror
                            value={code7}
                            options={{
                                theme: 'monokai',
                                mode: 'JSX',
                                readOnly: true
                            }}
                        />
                        <div id="myDiagramDiv7" className="diagram"></div>
                        <p><br /></p>
                        <p><br /></p>
                        <p>相关代码：</p>
                        <p><a href="https://github.com/LiuZheAb/GoJS_Demo/blob/master/18relinkingReshapingToolPars.html" target="_blank" rel="noopener noreferrer">https://github.com/LiuZheAb/GoJS_Demo/blob/master/18relinkingReshapingToolPars.html</a></p>
                    </div>
                </div>
                <div className="directory">
                    <Directory articleTree={this.state.articleTree}></Directory>
                </div>
            </div>
        )
    }
}
