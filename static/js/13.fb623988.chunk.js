(this.webpackJsonpblog=this.webpackJsonpblog||[]).push([[13],{388:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return h}));var l=t(8),n=t(9),r=t(16),i=t(10),o=t(11),m=t(0),s=t.n(m),c=t(186),d=t.n(c),g=t(182),u=(t(77),t(43)),p=d.a.GraphObject.make,h=function(e){Object(o.a)(m,e);var a=Object(i.a)(m);function m(e){var t;return Object(l.a)(this,m),(t=a.call(this,e)).state={articleTree:[]},t.getArticleTree=t.getArticleTree.bind(Object(r.a)(t)),t}return Object(n.a)(m,[{key:"getArticleTree",value:function(){for(var e=document.getElementsByClassName("article-content")[0].children,a=[],t=0;t<e.length-1;t++){var l=e[t].nodeName;"H2"!==l&&"H3"!==l||(e[t].id=e[t].innerText,a.push({name:e[t].innerText,tag:e[t].nodeName}))}this.setState({articleTree:a})}},{key:"componentDidMount",value:function(){this.diagramRender1(),this.diagramRender2(),this.diagramRender3(),this.diagramRender4(),this.diagramRender5(),this.diagramRender6(),this.diagramRender7(),this.diagramRender8(),this.diagramRender9(),this.diagramRender10(),this.diagramRender11(),this.diagramRender12(),this.diagramRender13(),this.diagramRender14(),this.getArticleTree()}},{key:"diagramRender1",value:function(){p(d.a.Diagram,"myDiagramDiv1").add(p(d.a.Part,"Position",p(d.a.Shape,"RoundedRectangle",{fill:"white",position:new d.a.Point(-50,20)}),p(d.a.TextBlock,"some text",{position:new d.a.Point(50,20)})))}},{key:"diagramRender2",value:function(){p(d.a.Diagram,"myDiagramDiv2").add(p(d.a.Part,"Vertical",p(d.a.Shape,"RoundedRectangle",{fill:"white"}),p(d.a.TextBlock,"some text",{background:"lightgray"})))}},{key:"diagramRender3",value:function(){p(d.a.Diagram,"myDiagramDiv3").add(p(d.a.Part,"Vertical",p(d.a.Shape,"RoundedRectangle",{fill:"white"}),p(d.a.TextBlock,"some text",{background:"lightgray",alignment:d.a.Spot.Right})))}},{key:"diagramRender4",value:function(){p(d.a.Diagram,"myDiagramDiv4").add(p(d.a.Part,"Vertical",p(d.a.Shape,"RoundedRectangle",{fill:"white"}),p(d.a.TextBlock,"some text",{background:"lightgray",alignment:d.a.Spot.Right,stretch:d.a.GraphObject.Fill})))}},{key:"diagramRender5",value:function(){p(d.a.Diagram,"myDiagramDiv5").add(p(d.a.Part,"Vertical",p(d.a.Shape,"RoundedRectangle",{fill:"white"}),p(d.a.TextBlock,"some text",{background:"lightgray",alignment:d.a.Spot.Right,stretch:d.a.GraphObject.Fill,textAlign:"right"})))}},{key:"diagramRender6",value:function(){p(d.a.Diagram,"myDiagramDiv6").add(p(d.a.Part,"Horizontal",p(d.a.Shape,"RoundedRectangle",{fill:"white"}),p(d.a.TextBlock,"some text",{background:"lightgray"})))}},{key:"diagramRender7",value:function(){p(d.a.Diagram,"myDiagramDiv7").add(p(d.a.Part,"Horizontal",p(d.a.Shape,"RoundedRectangle",{fill:"white"}),p(d.a.TextBlock,"some text",{background:"lightgray",alignment:d.a.Spot.Bottom})))}},{key:"diagramRender8",value:function(){p(d.a.Diagram,"myDiagramDiv8").add(p(d.a.Part,"Horizontal",p(d.a.Shape,"RoundedRectangle",{fill:"white"}),p(d.a.TextBlock,"some text",{background:"lightgray",alignment:d.a.Spot.Bottom,stretch:d.a.GraphObject.Fill})))}},{key:"diagramRender9",value:function(){p(d.a.Diagram,"myDiagramDiv9").add(p(d.a.Part,"Horizontal",p(d.a.Shape,"RoundedRectangle",{fill:"white"}),p(d.a.TextBlock,"some text",{background:"lightgray",alignment:d.a.Spot.Bottom,stretch:d.a.GraphObject.Fill,verticalAlignment:d.a.Spot.Bottom})))}},{key:"diagramRender10",value:function(){p(d.a.Diagram,"myDiagramDiv10").add(p(d.a.Part,"Spot",p(d.a.Shape,"RoundedRectangle",{fill:"white"}),p(d.a.TextBlock,"some text",{alignment:d.a.Spot.TopLeft})))}},{key:"diagramRender11",value:function(){p(d.a.Diagram,"myDiagramDiv11").add(p(d.a.Part,"Spot",p(d.a.Shape,"RoundedRectangle",{fill:"white"}),p(d.a.TextBlock,"some text",{alignment:new d.a.Spot(1,0,-20,20)})))}},{key:"diagramRender12",value:function(){p(d.a.Diagram,"myDiagramDiv12").add(p(d.a.Part,"Spot",p(d.a.Shape,"RoundedRectangle",{fill:"white"}),p(d.a.TextBlock,"some text",{alignment:d.a.Spot.TopLeft,alignmentFocus:d.a.Spot.TopLeft})))}},{key:"diagramRender13",value:function(){p(d.a.Diagram,"myDiagramDiv13").add(p(d.a.Part,"Auto",p(d.a.Shape,"RoundedRectangle",{fill:"white"}),p(d.a.TextBlock,"some text")))}},{key:"diagramRender14",value:function(){p(d.a.Diagram,"myDiagramDiv14").add(p(d.a.Part,"Auto",{desiredSize:new d.a.Size(250,250)},p(d.a.Shape,"RoundedRectangle",{fill:"white"}),p(d.a.TextBlock,"some text")))}},{key:"render",value:function(){return s.a.createElement("div",{className:"page-content"},s.a.createElement("div",{className:"article"},s.a.createElement("div",{className:"article-title"},s.a.createElement("h1",null,"GoJS\u5165\u95e8\u6559\u7a0b\u2014\u2014\u7b2c\u4e09\u8282 \u4f7f\u7528GoJS\u6784\u5efaParts(Parts \u548c Panels)")),s.a.createElement("div",{className:"article-content"},s.a.createElement("h2",null,"Part\u662f\u4ec0\u4e48"),s.a.createElement("ul",null,s.a.createElement("li",null,"Part\u662fGraphObject\u7684\u4e00\u4e2a\u5b50\u7c7b")),s.a.createElement("ul",{"data-lake-indent":"1"},s.a.createElement("li",null,"\u7b2c1\u4e2aPanel\uff08\u4e5f\u662fGraphObject\u7684\u4e00\u4e2a\u5b50\u7c7b\uff09")),s.a.createElement("ul",{"data-lake-indent":"2"},s.a.createElement("li",null,"\u7b2c1\u4e2aGraphObject"),s.a.createElement("li",null,"\u7b2c2\u4e2aGraphObject"),s.a.createElement("li",null,"..."),s.a.createElement("li",null,"\u7b2cn\u4e2aGraphObject")),s.a.createElement("ul",{"data-lake-indent":"1"},s.a.createElement("li",null,"\u7b2c2\u4e2aPanel"),s.a.createElement("li",null,"..."),s.a.createElement("li",null,"\u7b2cn\u4e2aPanel")),s.a.createElement("ul",null,s.a.createElement("li",null,"Nodes,Links,Groups \u548c Adornments \u90fd\u662f GoJS Part")),s.a.createElement("p",null,"\u5982\u4e0b\u56fe\u6240\u793a\uff1a"),s.a.createElement("div",{className:"text-center"},s.a.createElement("img",{src:t(389),alt:""})),s.a.createElement("h2",null,"GraphObject\u662f\u4ec0\u4e48"),s.a.createElement("ul",null,s.a.createElement("li",null,"$(go.<GraphObject Type>),")),s.a.createElement("ul",{"data-lake-indent":"1"},s.a.createElement("li",null,'"<optional type-specific property>"    \u53ef\u4ee5\u662f\u7279\u5b9a\u7c7b\u578b\u5c5e\u6027'),s.a.createElement("li",null,"{<optional key/value parirs for properties>}    \u4e5f\u53ef\u4ee5\u662f\u51e0\u7ec4\u5c5e\u6027\u952e\u503c\u5bf9")),s.a.createElement("h2",null,"Panel\u662f\u4ec0\u4e48"),s.a.createElement("ul",null,s.a.createElement("li",null,"Panel\u4fdd\u5b58\u6216\u7ec4\u7ec7GraphObject(\u5b83\u7684\u5143\u7d20)"),s.a.createElement("li",null,"Parts(Nodes\u3001Links\u3001Groups\u3001Adornments)\u662fPanel\u7684\u5b50\u7c7b"),s.a.createElement("li",null,"Panel\u7c7b\u578b\u51b3\u5b9a\u5176\u5143\u7d20\u7684\u7ec4\u7ec7\u65b9\u5f0f\u3002\u5e38\u89c1\u7c7b\u578b:")),s.a.createElement("ul",{"data-lake-indent":"1"},s.a.createElement("li",null,"Position"),s.a.createElement("li",null,"Vertical/ Horizonta"),s.a.createElement("li",null,"Spot"),s.a.createElement("li",null,"Auto")),s.a.createElement("div",{className:"text-center"},s.a.createElement("img",{src:t(390),alt:""})),s.a.createElement("h2",{style:{position:"relative",top:"-1px"}},"Position Panels"),s.a.createElement("ul",null,s.a.createElement("li",null,"Position Panels\u4e2d\u7684\u5143\u7d20\uff1a")),s.a.createElement("ul",{"data-lake-indent":"1"},s.a.createElement("li",null,"\u6839\u636e\u6307\u5b9a\u7684\u201cposition\u201d\u5c5e\u6027\u5b9a\u4f4d"),s.a.createElement("li",null,"\u9ed8\u8ba4\u5c06position\u8bbe\u4e3a(0,0)"),s.a.createElement("li",null,"\u5b9a\u4f4d\u5728\u9762\u677f\u5750\u6807\u7cfb\u4e2d"),s.a.createElement("li",null,"\u5b9a\u4f4d\u53ef\u80fd\u4e3a\u8d1f\u503c-\u5982(-20,50)")),s.a.createElement("p",null,"\u4ee3\u7801\u53ca\u6548\u679c\u5982\u4e0b\u56fe\u6240\u793a\uff1a"),s.a.createElement(g.a,{value:'let myDiagram = $(go.Diagram, "myDiagramDiv");\nmyDiagram.add(\n    $(go.Part, "Position",\n        $(go.Shape, "RoundedRectangle", {\n            fill: "white",\n            position: new go.Point(-50, 20)\n        }),\n        $(go.TextBlock, "some text", {\n            position: new go.Point(50, 20)\n        })\n    )\n)',options:{theme:"monokai",mode:"JSX",readOnly:!0}}),s.a.createElement("div",{id:"myDiagramDiv1",className:"diagram"}),s.a.createElement("h2",null,"Veitical Panels"),s.a.createElement("p",null,"Vertical Panels\u4e2d\u7684\u5143\u7d20\uff1a"),s.a.createElement("ul",null,s.a.createElement("li",null,"\u4ece\u4e0a\u5230\u4e0b\u5782\u76f4\u6392\u5217"),s.a.createElement("li",null,"\u7ed9\u5b9a\u5b83\u4eec\u7684\u6807\u51c6\u9ad8\u5ea6/\u5bbd\u5ea6\uff0c\u9664\u975e\u8bbe\u7f6e\u4e86\u5b83\u4eec\u7684\u201cstretch\u201d\u5c5e\u6027"),s.a.createElement("li",null,"\u5982\u679c\u5b83\u4eec\u7684\u5bbd\u5ea6\u4e0d\u7b49\u4e8ePanel\u7684\u5bbd\u5ea6\uff0c\u5219\u6839\u636e\u201calignment\u201d\u5c5e\u6027\u5bf9\u9f50")),s.a.createElement("p",null,"\u4ee3\u7801\u53ca\u6548\u679c\u5982\u4e0b\u6240\u793a\uff1a"),s.a.createElement(g.a,{value:'let myDiagram = $(go.Diagram, "myDiagramDiv");\nmyDiagram.add(\n    $(go.Part, "Vertical",\n        $(go.Shape, "RoundedRectangle", {\n            fill: "white",\n        }),\n        $(go.TextBlock, "some text", {\n            background: "lightgray",\n        })\n    )\n)',options:{theme:"monokai",mode:"JSX",readOnly:!0}}),s.a.createElement("div",{id:"myDiagramDiv2",className:"diagram"}),s.a.createElement("p",null,"TextBlock\u5728Shape\u4e0b\u65b9\uff0c\u4e14\u9ed8\u8ba4\u6c34\u5e73\u5c45\u4e2d\u5bf9\u9f50\u3002\u8fd9\u4e00\u5c5e\u6027\u7531alignment\u63a7\u5236\u3002"),s.a.createElement(g.a,{value:'$(go.TextBlock, "some text", {\n    background: "lightgray",\n    alignment: go.Spot.Right,\n})',options:{theme:"monokai",mode:"JSX",readOnly:!0}}),s.a.createElement("div",{id:"myDiagramDiv3",className:"diagram"}),s.a.createElement("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cVertical Panel\u4e2d\u7684\u5143\u7d20\u53ea\u5360\u7528\u5b83\u4eec\u9700\u8981\u7684\u7a7a\u95f4\u3002\u8fd9\u4e00\u5c5e\u6027\u7531stretch\u63a7\u5236\u3002"),s.a.createElement(g.a,{value:'$(go.TextBlock, "some text", {\n    background: "lightgray",\n    alignment: go.Spot.Right,\n    stretch: go.GraphObject.Fill,\n})',options:{theme:"monokai",mode:"JSX",readOnly:!0}}),s.a.createElement("div",{id:"myDiagramDiv4",className:"diagram"}),s.a.createElement("p",null,"\u5143\u7d20\u7684alignment\u5c5e\u6027\u53ea\u6709\u5728\u5143\u7d20\u7684\u5bbd\u5ea6\u4e0d\u7b49\u4e8ePanel\u7684\u5bbd\u5ea6\u65f6\u624d\u6709\u6548\uff0c\u5bf9\u4e8eTextBlocks\uff0c\u53ef\u4ee5\u901a\u8fc7\u8bbe\u7f6etextAlign\u5c5e\u6027\u6765\u4fee\u590d\u3002"),s.a.createElement(g.a,{value:'$(go.TextBlock, "some text", {\n    background: "lightgray",\n    alignment: go.Spot.Right,\n    stretch: go.GraphObject.Fill,\n    textAlign: "right"\n})',options:{theme:"monokai",mode:"JSX",readOnly:!0}}),s.a.createElement("div",{id:"myDiagramDiv5",className:"diagram"}),s.a.createElement("h2",null,"Horizontal Panels"),s.a.createElement("p",null,"Horizontal Panels\u4e2d\u7684\u5143\u7d20:"),s.a.createElement("ul",null,s.a.createElement("li",null,"\u4ece\u5de6\u5230\u53f3\u6c34\u5e73\u6392\u5217"),s.a.createElement("li",null,"\u5782\u76f4\u62c9\u4f38\u4ee5\u9002\u5e94Panel\u7684\u9ad8\u5ea6\u4e0e\u201cstretch\u201d\u5c5e\u6027")),s.a.createElement("p",null,"\u4ee3\u7801\u53ca\u6548\u679c\u5982\u56fe\u6240\u793a\uff1a"),s.a.createElement(g.a,{value:'let myDiagram = $(go.Diagram, "myDiagramDiv");\nmyDiagram.add(\n    $(go.Part, "Horizontal",\n        $(go.Shape, "RoundedRectangle", {\n            fill: "white",\n        }),\n        $(go.TextBlock, "some text", {\n            background: "lightgray",\n        })\n    )\n)',options:{theme:"monokai",mode:"JSX",readOnly:!0}}),s.a.createElement("div",{id:"myDiagramDiv6",className:"diagram"}),s.a.createElement("p",null,"\u540c\u6837\u7684\uff0calignment\u5c5e\u6027\u63a7\u5236\u5bf9\u9f50\u65b9\u5f0f\u3002"),s.a.createElement(g.a,{value:'$(go.TextBlock, "some text", {\n    background: "lightgray",\n    alignment: go.Spot.Bottom,\n})',options:{theme:"monokai",mode:"JSX",readOnly:!0}}),s.a.createElement("div",{id:"myDiagramDiv7",className:"diagram"}),s.a.createElement("p",null,"stretch\u5c5e\u6027\u63a7\u5236\u5143\u7d20\u6240\u5360\u7a7a\u95f4\u3002"),s.a.createElement(g.a,{value:'$(go.TextBlock, "some text", {\n    background: "lightgray",\n    alignment: go.Spot.Bottom,\n    stretch: go.GraphObject.Fill,\n})',options:{theme:"monokai",mode:"JSX",readOnly:!0}}),s.a.createElement("div",{id:"myDiagramDiv8",className:"diagram"}),s.a.createElement("p",null,"\u4e3aHorizontal Panels\u4e2d\u7684\u5143\u7d20\u8bbe\u7f6estretch\u5c5e\u6027\u4f1a\u201c\u8986\u76d6\u201dalignment\uff0c\u6b64\u65f6\uff0c\u4fee\u6539TextBlock\u7684\u5bf9\u9f50\u65b9\u5f0f\u8981\u7528verticalAlignment\u5c5e\u6027\u3002"),s.a.createElement(g.a,{value:'$(go.TextBlock, "some text", {\n    background: "lightgray",\n    alignment: go.Spot.Bottom,\n    stretch: go.GraphObject.Fill,\n    verticalAlignment: go.Spot.Bottom\n})',options:{theme:"monokai",mode:"JSX",readOnly:!0}}),s.a.createElement("div",{id:"myDiagramDiv9",className:"diagram"}),s.a.createElement("h2",null,"Spot/Auto Panels"),s.a.createElement("ul",null,s.a.createElement("li",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cPanel\u4e2d\u7684\u7b2c\u4e00\u4e2a\u5143\u7d20\u662f\u4e3b\u5143\u7d20\u201cmain element\u201d"),s.a.createElement("li",null,"\u5c06\u201cisPanelMain\u201d\u5c5e\u6027\u8bbe\u7f6e\u4e3atrue\uff0c\u53ef\u4ee5\u6307\u5b9a\u4e00\u4e2a\u5143\u7d20\u4f5c\u4e3a\u4e3b\u5143\u7d20"),s.a.createElement("li",null,"Panel\u4e2d\u6240\u6709\u5176\u4ed6\u5143\u7d20\u56f4\u7ed5\u4e3b\u5143\u7d20\u6392\u5217")),s.a.createElement("h3",null,"Spots"),s.a.createElement("ul",null,s.a.createElement("li",null,"Spots\u5305\u542b\u4ece0\u52301\u7684X/Y\u503c")),s.a.createElement("ul",{"data-lake-indent":"1"},s.a.createElement("li",null,"\u8868\u793a\u4ece\u77e9\u5f62\u5de6\u4e0a\u89d2\u5230X/Y\u8f74\u7684\u5206\u6570\u8ddd\u79bb")),s.a.createElement("p",null,"\u5982\u56fe\u6240\u793a\uff1a"),s.a.createElement("div",{className:"text-center"},s.a.createElement("img",{src:t(391),alt:""})),s.a.createElement("p",null,"\u4ee3\u7801\u53ca\u6548\u679c\u5982\u4e0b\u6240\u793a\uff1a"),s.a.createElement(g.a,{value:'let myDiagram = $(go.Diagram, "myDiagramDiv");\nmyDiagram.add(\n    $(go.Part, "Spot",\n        $(go.Shape, "RoundedRectangle", {\n            fill: "white",\n        }),\n        $(go.TextBlock, "some text", {\n            alignment: go.Spot.TopLeft,\n            //alignment: new go.Spot(0, 0)\n        })\n    )\n)',options:{theme:"monokai",mode:"JSX",readOnly:!0}}),s.a.createElement("div",{id:"myDiagramDiv10",className:"diagram"}),s.a.createElement("p",null,"new go.Spot(x,y,xOffset,yOffset)"),s.a.createElement("p",null,"x,y\u4e3a0~1\u7684\u5c0f\u6570\uff0c"),s.a.createElement("p",null,"xOffset\uff0cyOffset\u4e3a\u5728(x,y)\u4f4d\u7f6e\u7684\u57fa\u7840\u4e0a\u5728\u6a2a\u7eb5\u5750\u6807\u7684\u504f\u79fb\u91cf\uff0c\u4f8b\u5982\uff1a"),s.a.createElement(g.a,{value:'$(go.TextBlock, "some text", {\n    alignment: new go.Spot(1, 0,-20,20)\n})',options:{theme:"monokai",mode:"JSX",readOnly:!0}}),s.a.createElement("div",{id:"myDiagramDiv11",className:"diagram"}),s.a.createElement("p",null,"\u9ed8\u8ba4\u7684alignmentFocus\u5c5e\u6027\u4f7f\u7528go.Spot.Center\u6765\u5b9a\u4f4d\u5143\u7d20\u3002"),s.a.createElement("p",null,"\u4f8b\u5982\uff0c\u5728\u4e0a\u9762\u7684\u4f8b\u5b50\u4e2d\uff0c\u662f\u4ee5TextBlock\u7684\u4e2d\u5fc3\u4e3a\u57fa\u51c6\u6765\u5b9a\u4f4dTextBlock\u7684"),s.a.createElement("p",null,"\u8bbe\u7f6ealignmentFocus\u5c5e\u6027\u53ef\u4fee\u6539"),s.a.createElement(g.a,{value:'$(go.TextBlock, "some text", {\n            alignment: go.Spot.TopLeft,\n            alignmentFocus: go.Spot.TopLeft\n        })\n    )\n)',options:{theme:"monokai",mode:"JSX",readOnly:!0}}),s.a.createElement("div",{id:"myDiagramDiv12",className:"diagram"}),s.a.createElement("h2",null,"Auto Panels"),s.a.createElement("ul",null,s.a.createElement("li",null,"\u5c06\u4e3b\u8981\u5143\u7d20\u9002\u5e94\u5468\u56f4\u7684\u6240\u6709\u5176\u4ed6Panel\u5143\u7d20"),s.a.createElement("li",null,"\u4ece\u672c\u8d28\u4e0a\u8bb2\uff0cAuto Panels\u662f\u5b9e\u73b0\u56f4\u7ed5\u67d0\u4e9b\u5bf9\u8c61\u7684\u8fb9\u6846\u7684\u65b9\u5f0f")),s.a.createElement("p",null,"\u4ee3\u7801\u53ca\u6548\u679c\u5982\u4e0b\u6240\u793a\uff1a"),s.a.createElement(g.a,{value:'let myDiagram = $(go.Diagram, "myDiagramDiv");\nmyDiagram.add(\n    $(go.Part, "Auto",\n        $(go.Shape, "RoundedRectangle", {\n            fill: "white",\n        }),\n        $(go.TextBlock, "some text")\n    )\n)',options:{theme:"monokai",mode:"JSX",readOnly:!0}}),s.a.createElement("div",{id:"myDiagramDiv13",className:"diagram"}),s.a.createElement("p",null,"\u4e3b\u5143\u7d20(Shape)\u7684\u5927\u5c0f\u9002\u5e94\u5176\u4ed6\u975e\u4e3b\u5143\u7d20(TextBlock)\u3002"),s.a.createElement("p",null,"desiredSize\u5c5e\u6027\u63a7\u5236\u4e3b\u5143\u7d20\u7684\u9ed8\u8ba4\u5927\u5c0f\u3002"),s.a.createElement(g.a,{value:'let myDiagram = $(go.Diagram, "myDiagramDiv");\nmyDiagram.add(\n    $(go.Part, "Auto",{\n        desiredSize: new go.Size(250,250)\n        },\n        $(go.Shape, "RoundedRectangle", {\n            fill: "white",\n        }),\n        $(go.TextBlock, "some text")\n    )\n)',options:{theme:"monokai",mode:"JSX",readOnly:!0}}),s.a.createElement("div",{id:"myDiagramDiv14",className:"diagram"}),s.a.createElement("h2",null,"\u4efb\u610f\u590d\u6742Parts"),s.a.createElement("p",null,"Panels\u53ef\u4ee5\u7ec4\u5408\u521b\u5efa\u590d\u6742Parts"),s.a.createElement("p",null,s.a.createElement("em",null,"\u66f4\u591a\u5173\u4e8eGoJS\u6784\u5efaparts\u7684\u8be6\u60c5\u8bf7\u770b",s.a.createElement("a",{href:"https://gojs.net/latest/intro/buildingObjects.html"},"GoJS_Intro_Building Parts"))),s.a.createElement("p",null,s.a.createElement("em",null,"\u66f4\u591a\u5173\u4e8ePanels/Panels types\u7684\u8be6\u60c5\u8bf7\u770b",s.a.createElement("a",{href:"https://gojs.net/latest/intro/panels.html"},"GoJS_Intro_Building Parts"))),s.a.createElement("p",null,s.a.createElement("br",null)),s.a.createElement("p",null,s.a.createElement("br",null)),s.a.createElement("p",null,"\u76f8\u5173\u4ee3\u7801\uff1a"),s.a.createElement("p",null,s.a.createElement("a",{href:"https://github.com/LiuZheAb/GoJS_Demo/blob/master/03buildingParts.html"},"https://github.com/LiuZheAb/GoJS_Demo/blob/master/03buildingParts.html")))),s.a.createElement("div",{className:"directory"},s.a.createElement(u.a,{articleTree:this.state.articleTree})))}}]),m}(m.Component)},389:function(e,a,t){e.exports=t.p+"static/media/1585146074836-5d244c42-8534-4c61-8bc9-be81702110b7.365376c3.png"},390:function(e,a,t){e.exports=t.p+"static/media/1585146820036-10d71ce5-2edd-4573-9b5a-132548554409.40a1f713.png"},391:function(e,a,t){e.exports=t.p+"static/media/1585187909595-5fb53263-9973-41c6-a159-703293b91af0.c793469e.png"},43:function(e,a,t){"use strict";t.d(a,"a",(function(){return s}));var l=t(8),n=t(9),r=t(10),i=t(11),o=t(0),m=t.n(o),s=(t(44),function(e){Object(i.a)(t,e);var a=Object(r.a)(t);function t(e){var n;return Object(l.a)(this,t),(n=a.call(this,e)).bindHandleScroll=function(e){var a=!!e.srcElement&&e.srcElement.documentElement.scrollTop||window.pageYOffset||(e.srcElement?e.srcElement.body.scrollTop:0);n.setState({scrollTop:a})},n.scrollToAnchor=function(e){if(e){var a=document.getElementById(e);a&&a.scrollIntoView()}},n.state={articleTree:n.props.articleTree,scrollTop:null},n}return Object(n.a)(t,[{key:"componentDidMount",value:function(){var e=document.getElementById("header"),a=window.scrollY,t=document.getElementsByClassName("directory-list")[0],l=t.offsetTop;window.addEventListener("scroll",this.bindHandleScroll),window.onscroll=function(){for(var n=document.getElementsByClassName("page-footer")[0],r=0;n;)r+=n.offsetTop,n=n.offsetParent;var i=document.body.scrollTop||document.documentElement.scrollTop;if((i+=l+t.offsetHeight)>r)t.style="position:fixed;top:".concat(l-i+r-e.offsetHeight,"px;transition:none");else{var o=window.scrollY;t&&(o>e.offsetHeight&&(a<o&&(e.className="ant-layout-header header header-affixed",t.className="directory-list directory-affixed directory-list2",a=o),a>o&&(e.className="ant-layout-header header header-visible",t.className="directory-list directory-list2",a=o)),t.style="")}}}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.bindHandleScroll),this.setState({articleTree:"this.props.articleTree"})}},{key:"render",value:function(){var e=this,a=this.state,t=a.articleTree,l=a.scrollTop,n=t.length;if(document.getElementById("tree-num-0")&&n>0){for(var r=[],i=0;i<n;i++){var o=document.getElementById(t[i].name);r.push(o.offsetTop)}for(var s=r.findIndex((function(e){return e>l}))-1,c=0;c<n;c++)document.getElementById("tree-num-".concat(c)).className=c===s?"tree-num directory-item-active":"tree-num";-2===s&&(document.getElementById("tree-num-".concat(n-1)).className="tree-num directory-item-active")}return m.a.createElement("ul",{className:"directory-list"},t.map((function(a,t){return m.a.createElement("li",{key:t,id:"tree-num-".concat(t),className:"tree-num",style:{paddingLeft:"H2"===a.tag?"10px":"22px"},onClick:function(){e.scrollToAnchor("".concat(a.name))}},a.name)})))}}],[{key:"getDerivedStateFromProps",value:function(e,a){var t=e.articleTree;return t!==a.articleTree?{articleTree:t}:null}}]),t}(o.Component))},44:function(e,a,t){},76:function(e,a,t){var l={"./apl/apl.js":[78,42],"./asciiarmor/asciiarmor.js":[79,43],"./asn.1/asn.1.js":[80,44],"./asterisk/asterisk.js":[81,45],"./brainfuck/brainfuck.js":[82,46],"./clike/clike.js":[54,4],"./clojure/clojure.js":[83,47],"./cmake/cmake.js":[84,48],"./cobol/cobol.js":[85,49],"./coffeescript/coffeescript.js":[55,50],"./commonlisp/commonlisp.js":[86,51],"./crystal/crystal.js":[87,52],"./css/css.js":[40,1],"./cypher/cypher.js":[88,53],"./d/d.js":[89,54],"./dart/dart.js":[90,4,55],"./diff/diff.js":[91,56],"./django/django.js":[92,0,1,22],"./dockerfile/dockerfile.js":[93,34],"./dtd/dtd.js":[94,57],"./dylan/dylan.js":[95,58],"./ebnf/ebnf.js":[96,59],"./ecl/ecl.js":[97,60],"./eiffel/eiffel.js":[98,61],"./elm/elm.js":[99,62],"./erlang/erlang.js":[100,63],"./factor/factor.js":[101,35],"./fcl/fcl.js":[102,64],"./forth/forth.js":[103,65],"./fortran/fortran.js":[104,66],"./gas/gas.js":[105,67],"./gfm/gfm.js":[106,6,33],"./gherkin/gherkin.js":[107,68],"./go/go.js":[108,69],"./groovy/groovy.js":[109,70],"./haml/haml.js":[110,0,1,25],"./handlebars/handlebars.js":[56,29],"./haskell-literate/haskell-literate.js":[111,38],"./haskell/haskell.js":[57,71],"./haxe/haxe.js":[112,72],"./htmlembedded/htmlembedded.js":[113,0,1,21],"./htmlmixed/htmlmixed.js":[39,0,1,39],"./http/http.js":[114,73],"./idl/idl.js":[115,74],"./javascript/javascript.js":[41,0],"./jinja2/jinja2.js":[116,75],"./jsx/jsx.js":[117,0,40],"./julia/julia.js":[118,76],"./livescript/livescript.js":[119,77],"./lua/lua.js":[120,78],"./markdown/markdown.js":[65,6],"./mathematica/mathematica.js":[121,79],"./mbox/mbox.js":[122,80],"./meta.js":[53],"./mirc/mirc.js":[123,81],"./mllike/mllike.js":[124,82],"./modelica/modelica.js":[125,83],"./mscgen/mscgen.js":[126,84],"./mumps/mumps.js":[127,85],"./nginx/nginx.js":[128,86],"./nsis/nsis.js":[129,36],"./ntriples/ntriples.js":[130,87],"./octave/octave.js":[131,88],"./oz/oz.js":[132,89],"./pascal/pascal.js":[133,90],"./pegjs/pegjs.js":[134,0,91],"./perl/perl.js":[135,92],"./php/php.js":[136,0,1,4,30],"./pig/pig.js":[137,93],"./powershell/powershell.js":[138,94],"./properties/properties.js":[139,95],"./protobuf/protobuf.js":[140,96],"./pug/pug.js":[67,0,1,5],"./puppet/puppet.js":[141,97],"./python/python.js":[58,98],"./q/q.js":[142,99],"./r/r.js":[143,100],"./rpm/rpm.js":[144,101],"./rst/rst.js":[145,24],"./ruby/ruby.js":[48,102],"./rust/rust.js":[146,37],"./sas/sas.js":[147,103],"./sass/sass.js":[60,1,104],"./scheme/scheme.js":[148,105],"./shell/shell.js":[149,106],"./sieve/sieve.js":[150,107],"./slim/slim.js":[151,0,1,26],"./smalltalk/smalltalk.js":[152,108],"./smarty/smarty.js":[153,109],"./solr/solr.js":[154,110],"./soy/soy.js":[155,0,1,31],"./sparql/sparql.js":[156,111],"./spreadsheet/spreadsheet.js":[157,112],"./sql/sql.js":[158,113],"./stex/stex.js":[59,114],"./stylus/stylus.js":[68,7],"./swift/swift.js":[159,115],"./tcl/tcl.js":[160,116],"./textile/textile.js":[161,117],"./tiddlywiki/tiddlywiki.js":[162,118],"./tiki/tiki.js":[163,119],"./toml/toml.js":[164,120],"./tornado/tornado.js":[165,0,1,23],"./troff/troff.js":[166,121],"./ttcn-cfg/ttcn-cfg.js":[168,122],"./ttcn/ttcn.js":[167,123],"./turtle/turtle.js":[169,124],"./twig/twig.js":[170,32],"./vb/vb.js":[171,125],"./vbscript/vbscript.js":[172,126],"./velocity/velocity.js":[173,127],"./verilog/verilog.js":[174,128],"./vhdl/vhdl.js":[175,129],"./vue/vue.js":[176,0,1,7,5,14],"./webidl/webidl.js":[177,130],"./xml/xml.js":[38,131],"./xquery/xquery.js":[178,132],"./yacas/yacas.js":[179,133],"./yaml-frontmatter/yaml-frontmatter.js":[180,41],"./yaml/yaml.js":[61,134],"./z80/z80.js":[181,135]};function n(e){if(!t.o(l,e))return Promise.resolve().then((function(){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}));var a=l[e],n=a[0];return Promise.all(a.slice(1).map(t.e)).then((function(){return t.t(n,7)}))}n.keys=function(){return Object.keys(l)},n.id=76,e.exports=n}}]);
//# sourceMappingURL=13.fb623988.chunk.js.map