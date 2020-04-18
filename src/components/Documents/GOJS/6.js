import React, { Component } from 'react'
import CodeMirror from '@uiw/react-codemirror';
import 'codemirror/theme/monokai.css';
import Directory from "../../Directory";
import go from "gojs";

let $ = go.GraphObject.make;
let code1 = `let $ = go.GraphObject.make;
let myDiagram = $(go.Diagram, "myDiagramDiv");
myDiagram.nodeTemplate =
    $(go.Node, "Auto",
        $(go.Shape, {
            figure: "RoundedRectangle",
            fill: "white"
        }, new go.Binding("fill", "color")),
        $(go.TextBlock, {
            margin: 5
        }, new go.Binding("text", "key"))
    );
let nodeDataArray = [{
    key: "Alpha",
    color: "lightblue"
}, {
    key: "Beta",
    color: "pink"
}];
let linkDataArray = [{
    from: "Alpha",
    to: "Beta"
}];
myDiagram.model = new go.GraphLinksModel(nodeDataArray, linkDataArray);`;
let code2 = `let myDiagram = $(go.Diagram, "myDiagramDiv", {
    initialContentAlignment: go.Spot.Center
});
myDiagram.nodeTemplate =
    $(go.Node, "Auto",
        $(go.Shape, "RoundedRectangle",
            new go.Binding("fill", "color", function (c) {
                if (c === 0) return "red";
                if (c === 1) return "blue";
            })),
        $(go.TextBlock, "Node"))
myDiagram.model = new go.GraphLinksModel([{
    key: "Alpha",
    color: 0
}, {
    key: "Alpha",
    color: 1
}, {
    key: "Alpha",
    color: 42
}]);`;
let code3 = `let myDiagram = $(go.Diagram, "myDiagramDiv", {
    initialContentAlignment: go.Spot.Center
});
myDiagram.nodeTemplateMap.add("SimpleNode",
    $(go.Node, "Spot",
        $(go.Shape, "Rectangle", {
            fill: "white",
            desiredSize: new go.Size(100, 20)
        })
    )
)
myDiagram.model = new go.GraphLinksModel([{
    key: "Alpha",
    category: "SimpleNode"
}]);`;
let code4 = `let myDiagram = $(go.Diagram, "myDiagramDiv", {
    initialContentAlignment: go.Spot.Center
});
myDiagram.nodeTemplateMap.add("SimpleNode",
    $(go.Node, "Spot",
        $(go.Shape, "Rectangle", {
            fill: "white",
            desiredSize: new go.Size(100, 20)
        }),
        $(go.Panel),
        $(go.Shape, "TriangleUp", {
            fill: "white",
            desiredSize: new go.Size(20, 20),
            alignment: go.Spot.Right
        })
    )
)
myDiagram.model = new go.GraphLinksModel([{
    key: "Alpha",
    category: "SimpleNode"
}]);`;
let code5 = `let myDiagram = $(go.Diagram, "myDiagramDiv", {
    initialContentAlignment: go.Spot.Center
});
myDiagram.nodeTemplateMap.add("SimpleNode",
    $(go.Node, "Spot",
        $(go.Shape, "Rectangle", {
            fill: "white",
            desiredSize: new go.Size(100, 20)
        }),
        $(go.Panel, "Auto", {
                alignment: go.Spot.Left
            },
            $(go.Shape, "Ellipse", {
                fill: "white"
            }),
            $(go.TextBlock, "SimpleNode")
        ),
        $(go.Shape, "TriangleUp", {
            fill: "white",
            desiredSize: new go.Size(20, 20),
            alignment: go.Spot.Right
        })
    )
)
myDiagram.model = new go.GraphLinksModel([{
    key: "Alpha",
    category: "SimpleNode"
}]);`;
let code6 = `myDiagram.groupTemplateMap.add("SimpleGroup",
    $(go.Group, "Vertical",
        $(go.TextBlock, "Group"),
        $(go.Panel, "Auto",
            $(go.Shape, "RoundedRectangle", {
                fill: "beige"
            }),
            $(go.Placeholder,{padding:5})
        )
    ))
myDiagram.model = new go.GraphLinksModel([{
    key: "Alpha",
    category: "SimpleNode"
},{
    key: "Beta",
    isGroup:true,
    category: "SimpleGroup"
},{
    key: "Gamma",
    group:"Beta",
    category: "SimpleNode"
},{
    key: "Delta",
    group:"Beta",
    category: "SimpleNode"
}]);
};`;
let code7 = `myDiagram.linkTemplateMap.add("SimpleLink",
    $(go.Link,
        $(go.Shape),
        $(go.Shape, {
            toArrow: "Standard"
        }),
        $(go.TextBlock, "Link", {
            segmentOffset: new go.Point(0, 10)
        }),
    )
)`;
let code8 = `myDiagram.nodeTemplateMap.add("SimpleNode",
    $(go.Node, "Spot",
        $(go.Shape, "Rectangle", {
            fill: "white",
            desiredSize: new go.Size(100, 20)
        }),
        $(go.Panel, "Auto", {
                alignment: go.Spot.Left
            },
            $(go.Shape, "Ellipse", {
                    fill: "white"
                },
                new go.Binding("fill", "color", function (color) {
                    return color === 0 ? "lime" : "cyan";
                })
            ),
            $(go.TextBlock, "SimpleNode",
                new go.Binding("text", "key")
            )
        ),
        $(go.Shape, "TriangleUp", {
            fill: "white",
            desiredSize: new go.Size(20, 20),
            alignment: go.Spot.Right
        })
    )
);

myDiagram3.model = new go.GraphLinksModel([{
    key: "Alpha",
    category: "SimpleNode"
}, {
    key: "Beta",
    isGroup: true,
    category: "SimpleGroup"
}, {
    key: "Gamma",
    group: "Beta",
    category: "SimpleNode",
    color: 0
}, {
    key: "Delta",
    group: "Beta",
    category: "SimpleNode",
    color: 1
}],
[{
    from: "Alpha",
    to: "Beta",
    category: "SimpleLink"
}]);`;
let code9 = `myDiagram.model = new go.GraphLinksModel(
    [
        { key: "Alpha", color: "lightblue", category: "Square" }
    ],[
    ]
)`;
let code10 = `new go.Binding("fill","color"),  //binding to get fill from nodedata.color`

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
                $(go.Shape, {
                    figure: "RoundedRectangle",
                    fill: "white"
                }, new go.Binding("fill", "color")),
                $(go.TextBlock, {
                    margin: 5
                }, new go.Binding("text", "key"))
            );
        let nodeDataArray = [{
            key: "Alpha",
            color: "lightblue"
        }, {
            key: "Beta",
            color: "pink"
        }];
        let linkDataArray = [{
            from: "Alpha",
            to: "Beta"
        }];
        myDiagram.model = new go.GraphLinksModel(nodeDataArray, linkDataArray);
    }
    diagramRender2() {
        let myDiagram = $(go.Diagram, "myDiagramDiv2", {
            initialContentAlignment: go.Spot.Center
        });
        myDiagram.nodeTemplate =
            $(go.Node, "Auto",
                $(go.Shape, "RoundedRectangle",
                    new go.Binding("fill", "color", function (c) {
                        if (c === 0) return "red";
                        if (c === 1) return "blue";
                    })),
                $(go.TextBlock, "Node"))
        myDiagram.model = new go.GraphLinksModel([{
            key: "Alpha",
            color: 0
        }, {
            key: "Alpha",
            color: 1
        }, {
            key: "Alpha",
            color: 42
        }]);
    }
    diagramRender3() {
        let myDiagram = $(go.Diagram, "myDiagramDiv3", {
            initialContentAlignment: go.Spot.Center
        });
        myDiagram.nodeTemplateMap.add("SimpleNode",
            $(go.Node, "Spot",
                $(go.Shape, "Rectangle", {
                    fill: "white",
                    desiredSize: new go.Size(100, 20)
                })
            )
        )
        myDiagram.model = new go.GraphLinksModel([{
            key: "Alpha",
            category: "SimpleNode"
        }]);
    }
    diagramRender4() {
        let myDiagram = $(go.Diagram, "myDiagramDiv4", {
            initialContentAlignment: go.Spot.Center
        });
        myDiagram.nodeTemplateMap.add("SimpleNode",
            $(go.Node, "Spot",
                $(go.Shape, "Rectangle", {
                    fill: "white",
                    desiredSize: new go.Size(100, 20)
                }),
                $(go.Panel),
                $(go.Shape, "TriangleUp", {
                    fill: "white",
                    desiredSize: new go.Size(20, 20),
                    alignment: go.Spot.Right
                })
            )
        )
        myDiagram.model = new go.GraphLinksModel([{
            key: "Alpha",
            category: "SimpleNode"
        }]);
    }
    diagramRender5() {
        let myDiagram = $(go.Diagram, "myDiagramDiv5", {
            initialContentAlignment: go.Spot.Center
        });
        myDiagram.nodeTemplateMap.add("SimpleNode",
            $(go.Node, "Spot",
                $(go.Shape, "Rectangle", {
                    fill: "white",
                    desiredSize: new go.Size(100, 20)
                }),
                $(go.Panel, "Auto", {
                    alignment: go.Spot.Left
                },
                    $(go.Shape, "Ellipse", {
                        fill: "white"
                    }),
                    $(go.TextBlock, "SimpleNode")
                ),
                $(go.Shape, "TriangleUp", {
                    fill: "white",
                    desiredSize: new go.Size(20, 20),
                    alignment: go.Spot.Right
                })
            )
        )
        myDiagram.model = new go.GraphLinksModel([{
            key: "Alpha",
            category: "SimpleNode"
        }]);
    }
    diagramRender6() {
        let myDiagram = $(go.Diagram, "myDiagramDiv6", {
            initialContentAlignment: go.Spot.Center
        });
        myDiagram.nodeTemplateMap.add("SimpleNode",
            $(go.Node, "Spot",
                $(go.Shape, "Rectangle", {
                    fill: "white",
                    desiredSize: new go.Size(100, 20)
                }),
                $(go.Panel, "Auto", {
                    alignment: go.Spot.Left
                },
                    $(go.Shape, "Ellipse", {
                        fill: "white"
                    }),
                    $(go.TextBlock, "SimpleNode")
                ),
                $(go.Shape, "TriangleUp", {
                    fill: "white",
                    desiredSize: new go.Size(20, 20),
                    alignment: go.Spot.Right
                })
            )
        )
        myDiagram.groupTemplateMap.add("SimpleGroup",
            $(go.Group, "Vertical",
                $(go.TextBlock, "Group"),
                $(go.Panel, "Auto",
                    $(go.Shape, "RoundedRectangle", {
                        fill: "beige"
                    }),
                    $(go.Placeholder, { padding: 5 })
                )
            ))
        myDiagram.model = new go.GraphLinksModel([{
            key: "Alpha",
            category: "SimpleNode"
        }, {
            key: "Beta",
            isGroup: true,
            category: "SimpleGroup"
        }, {
            key: "Gamma",
            group: "Beta",
            category: "SimpleNode"
        }, {
            key: "Delta",
            group: "Beta",
            category: "SimpleNode"
        }]);
    }
    diagramRender7() {
        let myDiagram = $(go.Diagram, "myDiagramDiv7", {
            initialContentAlignment: go.Spot.Center
        });
        myDiagram.nodeTemplateMap.add("SimpleNode",
            $(go.Node, "Spot",
                $(go.Shape, "Rectangle", {
                    fill: "white",
                    desiredSize: new go.Size(100, 20)
                }),
                $(go.Panel, "Auto", {
                    alignment: go.Spot.Left
                },
                    $(go.Shape, "Ellipse", {
                        fill: "white"
                    }),
                    $(go.TextBlock, "SimpleNode")
                ),
                $(go.Shape, "TriangleUp", {
                    fill: "white",
                    desiredSize: new go.Size(20, 20),
                    alignment: go.Spot.Right
                })
            )
        )
        myDiagram.linkTemplateMap.add("SimpleLink",
            $(go.Link,
                $(go.Shape),
                $(go.Shape, {
                    toArrow: "Standard"
                }),
                $(go.TextBlock, "Link", {
                    segmentOffset: new go.Point(0, 10)
                }),
            )
        )
        myDiagram.groupTemplateMap.add("SimpleGroup",
            $(go.Group, "Vertical",
                $(go.TextBlock, "Group"),
                $(go.Panel, "Auto",
                    $(go.Shape, "RoundedRectangle", {
                        fill: "beige"
                    }),
                    $(go.Placeholder, { padding: 5 })
                )
            ))
        myDiagram.model = new go.GraphLinksModel([{
            key: "Alpha",
            category: "SimpleNode"
        }, {
            key: "Beta",
            isGroup: true,
            category: "SimpleGroup"
        }, {
            key: "Gamma",
            group: "Beta",
            category: "SimpleNode"
        }, {
            key: "Delta",
            group: "Beta",
            category: "SimpleNode"
        }],
            [{
                from: "Alpha",
                to: "Beta",
                category: "SimpleLink"
            }]);
    }
    diagramRender8() {
        let myDiagram = $(go.Diagram, "myDiagramDiv8", {
            initialContentAlignment: go.Spot.Center
        });
        myDiagram.nodeTemplateMap.add("SimpleNode",
            $(go.Node, "Spot",
                $(go.Shape, "Rectangle", {
                    fill: "white",
                    desiredSize: new go.Size(100, 20)
                }),
                $(go.Panel, "Auto", {
                    alignment: go.Spot.Left
                },
                    $(go.Shape, "Ellipse", {
                        fill: "white"
                    },
                        new go.Binding("fill", "color", function (color) {
                            return color === 0 ? "lime" : "cyan";
                        })
                    ),
                    $(go.TextBlock, "SimpleNode",
                        new go.Binding("text", "key")
                    )
                ),
                $(go.Shape, "TriangleUp", {
                    fill: "white",
                    desiredSize: new go.Size(20, 20),
                    alignment: go.Spot.Right
                })
            )
        )
        myDiagram.linkTemplateMap.add("SimpleLink",
            $(go.Link,
                $(go.Shape),
                $(go.Shape, {
                    toArrow: "Standard"
                }),
                $(go.TextBlock, "Link", {
                    segmentOffset: new go.Point(0, 10)
                }),
            )
        )
        myDiagram.groupTemplateMap.add("SimpleGroup",
            $(go.Group, "Vertical",
                $(go.TextBlock, "Group"),
                $(go.Panel, "Auto",
                    $(go.Shape, "RoundedRectangle", {
                        fill: "beige"
                    }),
                    $(go.Placeholder, {
                        padding: 5
                    })
                )
            ))
        myDiagram.model = new go.GraphLinksModel([{
            key: "Alpha",
            category: "SimpleNode"
        }, {
            key: "Beta",
            isGroup: true,
            category: "SimpleGroup"
        }, {
            key: "Gamma",
            group: "Beta",
            category: "SimpleNode",
            color: 0
        }, {
            key: "Delta",
            group: "Beta",
            category: "SimpleNode",
            color: 1
        }],
            [{
                from: "Alpha",
                to: "Beta",
                category: "SimpleLink"
            }]);
    }
    render() {
        return (
            <div className="page-content">
                <div className="article">
                    <div className="article-title">
                        <h1>第五节 使用GoJS构建Parts(Templates)</h1>
                    </div>
                    <div className="article-content">
                        <p>先看下面的代码：</p>
                        <CodeMirror
                            value={code1}
                            options={{
                                theme: 'monokai',
                                mode: 'JSX',
                                readOnly: true
                            }}
                        />
                        <div id="myDiagramDiv1" className="diagram"></div>
                        <h2>使用Templates</h2>
                        <ul>
                            <li>每个Model数据对象中的“category”数据属性指定用于该对象的模板</li>
                        </ul>
                        <ul data-lake-indent="1">
                            <li>“category”数据属性的值对应于templateMap中某一项的键值(比如nodeTemplateMap)</li>
                        </ul>
                        <ul>
                            <li>GoJS支持nodeTemplateMap、linkTemplateMap和groupTemplateMap</li>
                        </ul>
                        <ul data-lake-indent="1">
                            <li>{`添加到映射:<supported part template map>.add(<key>,<Part>)`}</li>
                        </ul>
                        <p>如下图所示</p>
                        <div className="text-center">
                            <img src={require("../../../assets/images/20200405140043.png")} alt="" />
                        </div>
                        <h2>数据绑定</h2>
                        <CodeMirror
                            value={code9}
                            options={{
                                theme: 'monokai',
                                mode: 'JSX',
                                readOnly: true
                            }}
                        />
                        <p>上面的代码中,"color"是一个客观属性,GoJS并不知道"color"是什么,须使用new go.Binding("fill","color"),将data中的color绑定到fill属性</p>
                        <ul>
                            <li>将Part的样式/表现绑定到Model中的某些数据</li>
                            <li>允许Part的数据和可视化之间的通信</li>
                            <li>{`简单绑定:new go.Binding(target property>,<source data property>)`},例如</li>
                        </ul>
                        <CodeMirror
                            value={code10}
                            options={{
                                theme: 'monokai',
                                mode: 'JSX',
                                readOnly: true
                            }}
                        />
                        <h2>转换函数</h2>
                        <ul>
                            <li>函数作为第三个参数传递给go.Binding</li>
                            <li>接收作为参数绑定的Model数据属性的值</li>
                            <li>返回值作为目标GraphObiect属性</li>
                        </ul>
                        <p>代码及效果如下所示：</p>
                        <CodeMirror
                            value={code2}
                            options={{
                                theme: 'monokai',
                                mode: 'JSX',
                                readOnly: true
                            }}
                        />
                        <div id="myDiagramDiv2" className="diagram"></div>
                        <h2>几个Part template的例子</h2>
                        <h3>初始效果</h3>
                        <CodeMirror
                            value={code3}
                            options={{
                                theme: 'monokai',
                                mode: 'JSX',
                                readOnly: true
                            }}
                        />
                        <div id="myDiagramDiv3" className="diagram"></div>
                        <h3>右侧添加三角形</h3>
                        <CodeMirror
                            value={code4}
                            options={{
                                theme: 'monokai',
                                mode: 'JSX',
                                readOnly: true
                            }}
                        />
                        <div id="myDiagramDiv4" className="diagram"></div>
                        <h3>左侧添加椭圆</h3>
                        <CodeMirror
                            value={code5}
                            options={{
                                theme: 'monokai',
                                mode: 'JSX',
                                readOnly: true
                            }}
                        />
                        <div id="myDiagramDiv5" className="diagram"></div>
                        <h3>添加Group</h3>
                        <CodeMirror
                            value={code6}
                            options={{
                                theme: 'monokai',
                                mode: 'JSX',
                                readOnly: true
                            }}
                        />
                        <div id="myDiagramDiv6" className="diagram" style={{ maxWidth: 600 }}></div>
                        <h3>添加Link</h3>
                        <CodeMirror
                            value={code7}
                            options={{
                                theme: 'monokai',
                                mode: 'JSX',
                                readOnly: true
                            }}
                        />
                        <div id="myDiagramDiv7" className="diagram" style={{ maxWidth: 600 }}></div>
                        <h3>绑定key到text、color到fill</h3>
                        <CodeMirror
                            value={code8}
                            options={{
                                theme: 'monokai',
                                mode: 'JSX',
                                readOnly: true
                            }}
                        />
                        <div id="myDiagramDiv8" className="diagram" style={{ maxWidth: 600 }}></div>
                        <br />
                        <br />
                        <p>相关代码：</p>
                        <p><a href="https://github.com/LiuZheAb/GoJS_Demo/blob/master/05buildingParts(Templates).html" target="_blank" rel="noopener noreferrer">https://github.com/LiuZheAb/GoJS_Demo/blob/master/05buildingParts(Templates).html</a></p>
                    </div>
                </div>
                <Directory />
            </div>
        )
    }
}
