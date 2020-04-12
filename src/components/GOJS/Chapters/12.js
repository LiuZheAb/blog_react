import React, { Component } from 'react'
import CodeMirror from '@uiw/react-codemirror';
import 'codemirror/theme/monokai.css';
import Directory from "../../Directory";
import go from "gojs";

let $ = go.GraphObject.make;
let code1 = `let myDiagram = $(go.Diagram, "myDiagramDiv");

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
myDiagram.layout = $(go.LayeredDigraphLayout);
myDiagram.model =$(go.GraphLinksModel, {
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
    }],
    linkDataArray: [{
        from: "Alpha",
        to: "Beta"
    },
    {
        from: "Alpha",
        to: "Gamma"
    },
    {
        from: "Beta",
        to: "Delta"
    },
    {
        from: "Delta",
        to: "Epsilon"
    },
    {
        from: "Zeta",
        to: "Epsilon"
    }]
})`;
let code2 = `myDiagram.layout = $(go.LayeredDigraphLayout,{
    direction:90
});`;
let code3 = `myDiagram.layout = $(go.LayeredDigraphLayout,{
    direction:90,
    layerSpacing: 50,
    columnSpacing: 100
});`;
let code4 = `myDiagram.layout = $(go.LayeredDigraphLayout, {
    direction: 90,
    layerSpacing: 25,
    columnSpacing: 25,
    layeringOption:go.LayeredDigraphLayout.LayerLongestPathSink
});`;
let code5 = `myDiagram.layout = $(go.LayeredDigraphLayout, {
    direction: 90,
    layerSpacing: 25,
    columnSpacing: 25,
    layeringOption: go.LayeredDigraphLayout.LayerLongestPathSource
});`;
let code6 = `myDiagram.layout = $(go.LayeredDigraphLayout, {
    direction: 90,
    layerSpacing: 25,
    columnSpacing: 25,
    layeringOption: go.LayeredDigraphLayout.LayerOptimalLinkLength
});`;

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
        document.title="GoJS教程——第五节 层次布局(LayeredDigraphLayout)";
        this.getArticleTree();
        this.diagramRender1();
        this.diagramRender2();
        this.diagramRender3();
        this.diagramRender4();
        this.diagramRender5();
        this.diagramRender6();
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
        myDiagram.layout = $(go.LayeredDigraphLayout);
        myDiagram.model = $(go.GraphLinksModel, {
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
            }],
            linkDataArray: [{
                from: "Alpha",
                to: "Beta"
            },
            {
                from: "Alpha",
                to: "Gamma"
            },
            {
                from: "Beta",
                to: "Delta"
            },
            {
                from: "Delta",
                to: "Epsilon"
            },
            {
                from: "Zeta",
                to: "Epsilon"
            }
            ]
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
        myDiagram.layout = $(go.LayeredDigraphLayout, {
            direction: 90
        });
        myDiagram.model = $(go.GraphLinksModel, {
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
            }],
            linkDataArray: [{
                from: "Alpha",
                to: "Beta"
            },
            {
                from: "Alpha",
                to: "Gamma"
            },
            {
                from: "Beta",
                to: "Delta"
            },
            {
                from: "Delta",
                to: "Epsilon"
            },
            {
                from: "Zeta",
                to: "Epsilon"
            }
            ]
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
        myDiagram.layout = $(go.LayeredDigraphLayout, {
            direction: 90,
            layerSpacing: 50,
            columnSpacing: 100
        });
        myDiagram.model = $(go.GraphLinksModel, {
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
            }],
            linkDataArray: [{
                from: "Alpha",
                to: "Beta"
            },
            {
                from: "Alpha",
                to: "Gamma"
            },
            {
                from: "Beta",
                to: "Delta"
            },
            {
                from: "Delta",
                to: "Epsilon"
            },
            {
                from: "Zeta",
                to: "Epsilon"
            }
            ]
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
        myDiagram.layout = $(go.LayeredDigraphLayout, {
            direction: 90,
            layerSpacing: 25,
            columnSpacing: 25,
            layeringOption: go.LayeredDigraphLayout.LayerLongestPathSink
        });
        myDiagram.model = $(go.GraphLinksModel, {
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
            }],
            linkDataArray: [{
                from: "Alpha",
                to: "Beta"
            },
            {
                from: "Alpha",
                to: "Gamma"
            },
            {
                from: "Beta",
                to: "Delta"
            },
            {
                from: "Delta",
                to: "Epsilon"
            },
            {
                from: "Zeta",
                to: "Epsilon"
            }
            ]
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
        myDiagram.layout = $(go.LayeredDigraphLayout, {
            direction: 90,
            layerSpacing: 25,
            columnSpacing: 25,
            layeringOption: go.LayeredDigraphLayout.LayerLongestPathSource
        });
        myDiagram.model = $(go.GraphLinksModel, {
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
            }],
            linkDataArray: [{
                from: "Alpha",
                to: "Beta"
            },
            {
                from: "Alpha",
                to: "Gamma"
            },
            {
                from: "Beta",
                to: "Delta"
            },
            {
                from: "Delta",
                to: "Epsilon"
            },
            {
                from: "Zeta",
                to: "Epsilon"
            }
            ]
        })
    }
    diagramRender6() {
        let myDiagram = $(go.Diagram, "myDiagramDiv6");

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
        myDiagram.layout = $(go.LayeredDigraphLayout, {
            direction: 90,
            layerSpacing: 25,
            columnSpacing: 25,
            layeringOption: go.LayeredDigraphLayout.LayerOptimalLinkLength
        });
        myDiagram.model = $(go.GraphLinksModel, {
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
            }],
            linkDataArray: [{
                from: "Alpha",
                to: "Beta"
            },
            {
                from: "Alpha",
                to: "Gamma"
            },
            {
                from: "Beta",
                to: "Delta"
            },
            {
                from: "Delta",
                to: "Epsilon"
            },
            {
                from: "Zeta",
                to: "Epsilon"
            }
            ]
        })
    }
    render() {
        return (
            <div className="page-content">
                <div className="article">
                    <div className="article-title">
                        <h1>GoJS布局——第五节 层次布局(LayeredDigraphLayout)</h1>
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
                        <div id="myDiagramDiv1" className="diagram" style={{ width: "100%", maxWidth: "600px" }}></div>
                        <h2>direction</h2>
                        <ul>
                            <li>决定展开的方向</li>
                            <li>默认值:0</li>
                            <li>允许值:0 | 90 | 180 | 270</li>
                        </ul>
                        <CodeMirror
                            value={code2}
                            options={{
                                theme: 'monokai',
                                mode: 'JSX',
                                readOnly: true
                            }}
                        />
                        <div id="myDiagramDiv2" className="diagram" style={{ width: "100%", maxWidth: "600px", height: "350px" }}></div>
                        <h2>layerSpacing</h2>
                        <ul>
                            <li>决定层间距</li>
                            <li>默认值:25</li>
                        </ul>
                        <h2>columnSpacing</h2>
                        <ul>
                            <li>决定列间距</li>
                            <li>默认值:25</li>
                        </ul>
                        <CodeMirror
                            value={code3}
                            options={{
                                theme: 'monokai',
                                mode: 'JSX',
                                readOnly: true
                            }}
                        />
                        <div id="myDiagramDiv3" className="diagram" style={{ width: "100%", maxWidth: "600px", height: "400px" }}></div>
                        <h2>layingOption</h2>
                        <ul>
                            <li>决定布局中的Node如何分配到不同的layer中</li>
                            <li>可能的值:</li>
                        </ul>
                        <ul data-lake-indent="1">
                            <li>LayerLongestPathSink</li>
                            <li>LayerLongestPathSource</li>
                            <li>LayerOptimalLinkLength</li>
                        </ul>
                        <h3>LayerLongestPathSink</h3>
                        <p>sink = 没有Link离开的Node</p>
                        <CodeMirror
                            value={code4}
                            options={{
                                theme: 'monokai',
                                mode: 'JSX',
                                readOnly: true
                            }}
                        />
                        <div id="myDiagramDiv4" className="diagram" style={{ width: "100%", maxWidth: "600px", height: "350px" }}></div>
                        <p>其中，Epsilon和Gamma为sink</p>
                        <h3>LaverLongestPathSource</h3>
                        <p>source = 没有Link进入的Node</p>
                        <CodeMirror
                            value={code5}
                            options={{
                                theme: 'monokai',
                                mode: 'JSX',
                                readOnly: true
                            }}
                        />
                        <div id="myDiagramDiv5" className="diagram" style={{ width: "100%", maxWidth: "600px", height: "350px" }}></div>
                        <p>其中，Alpha和Zeta为source</p>
                        <h3>LayerOptimalLinkLength</h3>
                        <ul>
                            <li>Node以最小化总加权Link长度分层</li>
                            <li>linkLength = layer(fromNode) - layer(toNode)</li>
                        </ul>
                        <CodeMirror
                            value={code6}
                            options={{
                                theme: 'monokai',
                                mode: 'JSX',
                                readOnly: true
                            }}
                        />
                        <div id="myDiagramDiv6" className="diagram" style={{ width: "100%", maxWidth: "600px", height: "350px" }}></div>
                        <p>其中,由下向上,Episilon为第一层,Delta和Zeta为第二层,Beta和Gamma为第三层,Alpha为第四层</p>
                        <p>共有5条Link,每条Link的linkLength均为1,共计5,是最小方案</p>
                        <p><br /></p>
                        <p><br /></p>
                        <p>相关代码：</p>
                        <p><a href="https://github.com/LiuZheAb/GoJS_Demo/blob/master/11layeredDigraphLayout.html" target="_blank" rel="noopener noreferrer">https://github.com/LiuZheAb/GoJS_Demo/blob/master/11layeredDigraphLayout.html</a></p>
                    </div>
                </div>
                <div className="directory">
                    <Directory articleTree={this.state.articleTree}></Directory>
                </div>
            </div>
        )
    }
}
