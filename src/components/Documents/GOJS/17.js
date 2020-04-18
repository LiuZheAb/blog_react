import React, { Component } from 'react'
import CodeMirror from '@uiw/react-codemirror';
import 'codemirror/theme/monokai.css';
import Directory from "../../Directory";
import go from "gojs";

let $ = go.GraphObject.make;
let code1 = `let $ = go.GraphObject.make;
let myDiagram = $(go.Diagram, "myDiagramDiv", {
    "undoManager.isEnabled": true
});

myDiagram.nodeTemplate = $(go.Node, "Vertical", {
        resizable: true
    },
    $(go.Shape, "RoundedRectangle", {
        fill: "cyan"
    }),
    $(go.TextBlock, {
        margin: 8
    }, new go.Binding("text", "key"))
);
myDiagram.model = $(go.GraphLinksModel, {
    nodeDataArray: [{
        key: "Alpha"
    }]
});`;
let code2 = `let myDiagram = $(go.Diagram, "myDiagramDiv", {
    "undoManager.isEnabled": true
});

myDiagram.nodeTemplate = $(go.Node, "Vertical", {
        resizable: true,
        resizeObjectName: "SHAPE"
    },
    $(go.Shape, "RoundedRectangle", {
        fill: "cyan",
        name: "SHAPE"
    }),
    $(go.TextBlock, {
        margin: 8
    }, new go.Binding("text", "key"))
);
myDiagram.model = $(go.GraphLinksModel, {
    nodeDataArray: [{
        key: "Alpha"
    }]
})`;
let code3 = `myDiagram.nodeTemplate = $(go.Node, "Vertical", {
        resizable: true,
        resizeObjectName: "SHAPE"
    },
    $(go.Shape, "RoundedRectangle", {
        fill: "cyan",
        name: "SHAPE",
        maxSize: new go.Size(100, 300),
        minSize: new go.Size(20, 20),
    }),
    $(go.TextBlock, {
        margin: 8
    }, new go.Binding("text", "key"))
);`;
let code4 = `myDiagram.nodeTemplate = $(go.Node, "Vertical", {
    resizable: true,
    resizeObjectName: "SHAPE",
    resizeCellSize: new go.Size(10, 10)
},
$(go.Shape, "RoundedRectangle", {
    fill: "cyan",
    name: "SHAPE",
    maxSize: new go.Size(100, 300),
    minSize: new go.Size(20, 20),
}),
$(go.TextBlock, {
    margin: 8
}, new go.Binding("text", "key"))
);`;
let code5 = `myDiagram.nodeTemplate = $(go.Node, "Vertical", {
    resizable: true,
    resizeObjectName: "SHAPE",
    resizeCellSize: new go.Size(10, 10),
    resizeAdornmentTemplate: $(go.Adornment, "Spot",
        $(go.Placeholder),
        $(go.Shape, {
            alignment: go.Spot.Right,
            stroke: "dodgerblue",
            fill: "lightblue",
            desiredSize: new go.Size(9, 9),
            cursor: "col-resize"
        }),
        $(go.Shape, {
            alignment: go.Spot.Left,
            stroke: "dodgerblue",
            fill: "lightblue",
            desiredSize: new go.Size(9, 9),
            cursor: "col-resize"
        }),
    )
},
$(go.Shape, "RoundedRectangle", {
    fill: "cyan",
    name: "SHAPE",
    maxSize: new go.Size(100, 300),
    minSize: new go.Size(20, 20),
}),
$(go.TextBlock, {
    margin: 8
}, new go.Binding("text", "key"))
);`;
let code6 = `myDiagram.nodeTemplate = $(go.Node, "Vertical", {
    resizable: true,
    resizeObjectName: "SHAPE",
    resizeCellSize: new go.Size(10, 10),
    selectionAdorned: false,
    ·
    ·
    ·`;
let code7 = `let myDiagram = $(go.Diagram, "myDiagramDiv", {
    "undoManager.isEnabled": true
});
myDiagram.nodeTemplate = $(go.Node, "Auto", {
        rotatable: true
    },
    $(go.Shape, "RoundedRectangle", {
        fill: "cyan"
    }),
    $(go.TextBlock, {
        margin: 8
    }, new go.Binding("text", "key"))
);
myDiagram.model = $(go.GraphLinksModel, {
    nodeDataArray: [{
        key: "Alpha"
    }]
})`;
let code8 = `myDiagram.nodeTemplate = $(go.Node, "Auto", {
        rotatable: true,
        locationSpot: go.Spot.Center
    },
    $(go.Shape, "RoundedRectangle", {
        fill: "cyan"
    }),
    $(go.TextBlock, {
        margin: 8
    }, new go.Binding("text", "key"))
);`;
let code9 = `myDiagram.nodeTemplate = $(go.Node, "Vertical", {
    rotatable: true,
    locationSpot: go.Spot.Center,
    rotateObjectName: "SHAPE"
},
$(go.Shape, "RoundedRectangle", {
    fill: "cyan",
    name: "SHAPE"
}),
$(go.TextBlock, {
    margin: 8
}, new go.Binding("text", "key"))
);`;
let code10 = `myDiagram.toolManager.rotatingTool.snapAngleEpsilon=45;`;

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
        let myDiagram = $(go.Diagram, "myDiagramDiv1", {
            "undoManager.isEnabled": true
        });

        myDiagram.nodeTemplate = $(go.Node, "Vertical", {
            resizable: true
        },
            $(go.Shape, "RoundedRectangle", {
                fill: "cyan"
            }),
            $(go.TextBlock, {
                margin: 8
            }, new go.Binding("text", "key"))
        );
        myDiagram.model = $(go.GraphLinksModel, {
            nodeDataArray: [{
                key: "Alpha"
            }]
        })
    }
    diagramRender2() {
        let myDiagram = $(go.Diagram, "myDiagramDiv2", {
            "undoManager.isEnabled": true
        });

        myDiagram.nodeTemplate = $(go.Node, "Vertical", {
            resizable: true,
            resizeObjectName: "SHAPE"
        },
            $(go.Shape, "RoundedRectangle", {
                fill: "cyan",
                name: "SHAPE"
            }),
            $(go.TextBlock, {
                margin: 8
            }, new go.Binding("text", "key"))
        );
        myDiagram.model = $(go.GraphLinksModel, {
            nodeDataArray: [{
                key: "Alpha"
            }]
        })
    }
    diagramRender3() {
        let myDiagram = $(go.Diagram, "myDiagramDiv3", {
            "undoManager.isEnabled": true
        });

        myDiagram.nodeTemplate = $(go.Node, "Vertical", {
            resizable: true,
            resizeObjectName: "SHAPE"
        },
            $(go.Shape, "RoundedRectangle", {
                fill: "cyan",
                name: "SHAPE",
                maxSize: new go.Size(100, 300),
                minSize: new go.Size(20, 20),
            }),
            $(go.TextBlock, {
                margin: 8
            }, new go.Binding("text", "key"))
        );
        myDiagram.model = $(go.GraphLinksModel, {
            nodeDataArray: [{
                key: "Alpha"
            }]
        })
    }
    diagramRender4() {
        let myDiagram = $(go.Diagram, "myDiagramDiv4", {
            "undoManager.isEnabled": true
        });

        myDiagram.nodeTemplate = $(go.Node, "Vertical", {
            resizable: true,
            resizeObjectName: "SHAPE",
            resizeCellSize: new go.Size(10, 10)
        },
            $(go.Shape, "RoundedRectangle", {
                fill: "cyan",
                name: "SHAPE",
                maxSize: new go.Size(100, 300),
                minSize: new go.Size(20, 20),
            }),
            $(go.TextBlock, {
                margin: 8
            }, new go.Binding("text", "key"))
        );
        myDiagram.model = $(go.GraphLinksModel, {
            nodeDataArray: [{
                key: "Alpha"
            }]
        })
    }
    diagramRender5() {
        let myDiagram = $(go.Diagram, "myDiagramDiv5", {
            "undoManager.isEnabled": true
        });

        myDiagram.nodeTemplate = $(go.Node, "Vertical", {
            resizable: true,
            resizeObjectName: "SHAPE",
            resizeCellSize: new go.Size(10, 10),
            resizeAdornmentTemplate: $(go.Adornment, "Spot",
                $(go.Placeholder),
                $(go.Shape, {
                    alignment: go.Spot.Right,
                    stroke: "dodgerblue",
                    fill: "lightblue",
                    desiredSize: new go.Size(9, 9),
                    cursor: "col-resize"
                }),
                $(go.Shape, {
                    alignment: go.Spot.Left,
                    stroke: "dodgerblue",
                    fill: "lightblue",
                    desiredSize: new go.Size(9, 9),
                    cursor: "col-resize"
                }),
            )
        },
            $(go.Shape, "RoundedRectangle", {
                fill: "cyan",
                name: "SHAPE",
                maxSize: new go.Size(100, 300),
                minSize: new go.Size(20, 20),
            }),
            $(go.TextBlock, {
                margin: 8
            }, new go.Binding("text", "key"))
        );
        myDiagram.model = $(go.GraphLinksModel, {
            nodeDataArray: [{
                key: "Alpha"
            }]
        })
    }
    diagramRender6() {
        let myDiagram = $(go.Diagram, "myDiagramDiv6", {
            "undoManager.isEnabled": true
        });

        myDiagram.nodeTemplate = $(go.Node, "Vertical", {
            resizable: true,
            resizeObjectName: "SHAPE",
            resizeCellSize: new go.Size(10, 10),
            selectionAdorned: false,
            resizeAdornmentTemplate: $(go.Adornment, "Spot",
                $(go.Placeholder),
                $(go.Shape, {
                    alignment: go.Spot.Right,
                    stroke: "dodgerblue",
                    fill: "lightblue",
                    desiredSize: new go.Size(9, 9),
                    cursor: "col-resize"
                }),
                $(go.Shape, {
                    alignment: go.Spot.Left,
                    stroke: "dodgerblue",
                    fill: "lightblue",
                    desiredSize: new go.Size(9, 9),
                    cursor: "col-resize"
                }),
            )
        },
            $(go.Shape, "RoundedRectangle", {
                fill: "cyan",
                name: "SHAPE",
                maxSize: new go.Size(100, 300),
                minSize: new go.Size(20, 20),
            }),
            $(go.TextBlock, {
                margin: 8
            }, new go.Binding("text", "key"))
        );
        myDiagram.model = $(go.GraphLinksModel, {
            nodeDataArray: [{
                key: "Alpha"
            }]
        })
    }
    diagramRender7() {
        let myDiagram = $(go.Diagram, "myDiagramDiv7", {
            "undoManager.isEnabled": true
        });

        myDiagram.nodeTemplate = $(go.Node, "Auto", {
            rotatable: true
        },
            $(go.Shape, "RoundedRectangle", {
                fill: "cyan"
            }),
            $(go.TextBlock, {
                margin: 8
            }, new go.Binding("text", "key"))
        );
        myDiagram.model = $(go.GraphLinksModel, {
            nodeDataArray: [{
                key: "Alpha"
            }]
        })
    }
    diagramRender8() {
        let myDiagram = $(go.Diagram, "myDiagramDiv8", {
            "undoManager.isEnabled": true
        });

        myDiagram.nodeTemplate = $(go.Node, "Auto", {
            rotatable: true,
            locationSpot: go.Spot.Center
        },
            $(go.Shape, "RoundedRectangle", {
                fill: "cyan"
            }),
            $(go.TextBlock, {
                margin: 8
            }, new go.Binding("text", "key"))
        );
        myDiagram.model = $(go.GraphLinksModel, {
            nodeDataArray: [{
                key: "Alpha"
            }]
        })
    }
    diagramRender9() {
        let myDiagram = $(go.Diagram, "myDiagramDiv9", {
            "undoManager.isEnabled": true
        });
        myDiagram.nodeTemplate = $(go.Node, "Vertical", {
            rotatable: true,
            locationSpot: go.Spot.Center,
            rotateObjectName: "SHAPE"
        },
            $(go.Shape, "RoundedRectangle", {
                fill: "cyan",
                name: "SHAPE"
            }),
            $(go.TextBlock, {
                margin: 8
            }, new go.Binding("text", "key"))
        );
        myDiagram.model = $(go.GraphLinksModel, {
            nodeDataArray: [{
                key: "Alpha"
            }]
        })
    }
    diagramRender10() {
        let myDiagram = $(go.Diagram, "myDiagramDiv10", {
            "undoManager.isEnabled": true
        });
        myDiagram.nodeTemplate = $(go.Node, "Vertical", {
            rotatable: true,
            locationSpot: go.Spot.Center,
            rotateObjectName: "SHAPE"
        },
            $(go.Shape, "RoundedRectangle", {
                fill: "cyan",
                name: "SHAPE"
            }),
            $(go.TextBlock, {
                margin: 8
            }, new go.Binding("text", "key"))
        );
        myDiagram.toolManager.rotatingTool.snapAngleEpsilon = 45;
        myDiagram.model = $(go.GraphLinksModel, {
            nodeDataArray: [{
                key: "Alpha"
            }]
        })
    }
    render() {
        return (
            <div className="page-content">
                <div className="article">
                    <div className="article-title">
                        <h1>GoJS工具——第一节 调整大小,旋转,装饰</h1>
                    </div>
                    <div className="article-content">
                        <h2>resizable</h2>
                        <ul>
                            <li>设置Part是否可调整大小</li>
                            <li>默认值:false</li>
                        </ul>
                        <CodeMirror
                            value={code1}
                            options={{
                                theme: 'monokai',
                                mode: 'JSX',
                                readOnly: true
                            }}
                        />
                        <div id="myDiagramDiv1" className="diagram"></div>
                        <h3>resizeObjectName</h3>
                        <ul>
                            <li>将想要调整大小的Part设置name,并在Node的resizeObjectName属性中指向该Part即可调整特定Part的大小</li>
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
                        <h3>maxSize、minSize</h3>
                        <ul>
                            <li>设置Part最大最小值</li>
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
                        <h3>resizeCellSize</h3>
                        <ul>
                            <li>设置每次调整大小的最小范围</li>
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
                        <h2>Adornment 装饰</h2>
                        <p>下面的例子是设置调整大小按钮的样式</p>
                        <CodeMirror
                            value={code5}
                            options={{
                                theme: 'monokai',
                                mode: 'JSX',
                                readOnly: true
                            }}
                        />
                        <div id="myDiagramDiv5" className="diagram"></div>
                        <h3>selectionAdorned</h3>
                        <ul>
                            <li>决定Part被选中时是否有装饰</li>
                            <li>默认值:false</li>
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
                        <h2>rotatable</h2>
                        <ul>
                            <li>设置Part是否可旋转</li>
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
                        <h3>locationSpot</h3>
                        <ul>
                            <li>设置Part旋转中心</li>
                            <li>默认值:go.Spot.TopLeft</li>
                        </ul>
                        <CodeMirror
                            value={code8}
                            options={{
                                theme: 'monokai',
                                mode: 'JSX',
                                readOnly: true
                            }}
                        />
                        <div id="myDiagramDiv8" className="diagram"></div>
                        <h3>rotateObjectName</h3>
                        <ul>
                            <li>与resize类似,将想要选转的Part设置name,并在Node的rotateObjectName属性中指向该Part即可旋转特定Part</li>
                        </ul>
                        <CodeMirror
                            value={code9}
                            options={{
                                theme: 'monokai',
                                mode: 'JSX',
                                readOnly: true
                            }}
                        />
                        <div id="myDiagramDiv9" className="diagram"></div>
                        <h3>snapAngleMultiple</h3>
                        <ul>
                            <li>要旋转的首选角度倍数</li>
                            <li>默认值:45(当旋转角度临近45°时,自动停靠在45°上)</li>
                        </ul>
                        <h3>snapAngleEpsilon</h3>
                        <ul>
                            <li>旋转物体的角度必须是"snapAngleEpsilon"的倍数</li>
                        </ul>
                        <CodeMirror
                            value={code10}
                            options={{
                                theme: 'monokai',
                                mode: 'JSX',
                                readOnly: true
                            }}
                        />
                        <div id="myDiagramDiv10" className="diagram"></div>
                        <p><br /></p>
                        <p><br /></p>
                        <p>相关代码：</p>
                        <p><a href="https://github.com/LiuZheAb/GoJS_Demo/blob/master/16toolsResizingRotating.html" target="_blank" rel="noopener noreferrer">https://github.com/LiuZheAb/GoJS_Demo/blob/master/16toolsResizingRotating.html</a></p>
                    </div>
                </div >
                <Directory />
            </div >
        )
    }
}
