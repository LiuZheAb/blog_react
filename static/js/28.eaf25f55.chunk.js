(this.webpackJsonpblog=this.webpackJsonpblog||[]).push([[28],{335:function(e,a,n){"use strict";n.r(a),n.d(a,"default",(function(){return k}));var t=n(11),l=n(12),r=n(13),o=n(14),i=n(0),s=n.n(i),m=n(163),d=(n(46),n(36)),c=n(165),g=n.n(c),u=g.a.GraphObject.make,p={theme:"monokai",mode:"JSX",readOnly:!0},k=function(e){Object(o.a)(n,e);var a=Object(r.a)(n);function n(){return Object(t.a)(this,n),a.apply(this,arguments)}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.diagramRender1(),this.diagramRender2(),this.diagramRender3(),this.diagramRender4(),this.diagramRender5(),this.diagramRender6(),this.diagramRender7()}},{key:"diagramRender1",value:function(){var e=u(g.a.Diagram,"myDiagramDiv1",{"undoManager.isEnabled":!0});e.nodeTemplate=u(g.a.Node,"Auto",u(g.a.Shape,"RoundedRectangle",{fill:"cyan",portId:"",fromLinkable:!0,toLinkable:!0}),u(g.a.TextBlock,{margin:8},new g.a.Binding("text","key"))),e.linkTemplate=u(g.a.Link,{relinkableFrom:!0,relinkableTo:!0},u(g.a.Shape),u(g.a.Shape,{toArrow:"standard"})),e.model=u(g.a.GraphLinksModel,{nodeDataArray:[{key:"Alpha"},{key:"Beta"},{key:"Gamma"},{key:"Delta"}],linkDataArray:[{from:"Alpha",to:"Beta"}]})}},{key:"diagramRender2",value:function(){var e=u(g.a.Diagram,"myDiagramDiv2",{"undoManager.isEnabled":!0});e.nodeTemplate=u(g.a.Node,"Auto",u(g.a.Shape,"RoundedRectangle",{fill:"cyan",portId:"",fromLinkable:!0,toLinkable:!0}),u(g.a.TextBlock,{margin:8},new g.a.Binding("text","key"))),e.linkTemplate=u(g.a.Link,{relinkableFrom:!0,relinkableTo:!0},u(g.a.Shape),u(g.a.Shape,{toArrow:"standard"})),e.toolManager.relinkingTool.fromHandleArchetype=u(g.a.Shape,"Diamond",{desiredSize:new g.a.Size(9,9),stroke:"green",fill:"lime",segmentIndex:0}),e.toolManager.relinkingTool.toHandleArchetype=u(g.a.Shape,"Diamond",{desiredSize:new g.a.Size(9,9),stroke:"red",fill:"pink",segmentIndex:-1}),e.model=u(g.a.GraphLinksModel,{nodeDataArray:[{key:"Alpha"},{key:"Beta"},{key:"Gamma"},{key:"Delta"}],linkDataArray:[{from:"Alpha",to:"Beta"}]})}},{key:"diagramRender3",value:function(){var e=u(g.a.Diagram,"myDiagramDiv3",{"undoManager.isEnabled":!0});e.nodeTemplate=u(g.a.Node,"Auto",u(g.a.Shape,"RoundedRectangle",{fill:"cyan",portId:"",fromLinkable:!0,toLinkable:!0}),u(g.a.TextBlock,{margin:8},new g.a.Binding("text","key"))),e.linkTemplate=u(g.a.Link,{relinkableFrom:!0,relinkableTo:!0},u(g.a.Shape),u(g.a.Shape,{toArrow:"standard"})),e.toolManager.relinkingTool.fromHandleArchetype=u(g.a.Shape,"Diamond",{desiredSize:new g.a.Size(9,9),stroke:"green",fill:"lime",segmentIndex:0}),e.toolManager.relinkingTool.toHandleArchetype=u(g.a.Shape,"Diamond",{desiredSize:new g.a.Size(9,9),stroke:"red",fill:"pink",segmentIndex:-1}),e.toolManager.relinkingTool.linkValidation=function(e,a,n,t,l){return"Alpha"===e.data.key},e.model=u(g.a.GraphLinksModel,{nodeDataArray:[{key:"Alpha"},{key:"Beta"},{key:"Gamma"},{key:"Delta"}],linkDataArray:[{from:"Alpha",to:"Beta"}]})}},{key:"diagramRender4",value:function(){var e=u(g.a.Diagram,"myDiagramDiv4",{"undoManager.isEnabled":!0});e.nodeTemplate=u(g.a.Node,"Auto",u(g.a.Shape,"RoundedRectangle",{fill:"cyan"}),u(g.a.TextBlock,{margin:8},new g.a.Binding("text","key"))),e.linkTemplate=u(g.a.Link,{reshapable:!0,routing:g.a.Link.Orthogonal},u(g.a.Shape),u(g.a.Shape,{toArrow:"standard"})),e.model=u(g.a.GraphLinksModel,{nodeDataArray:[{key:"Alpha"},{key:"Beta"}],linkDataArray:[{from:"Alpha",to:"Beta"}]})}},{key:"diagramRender5",value:function(){var e=u(g.a.Diagram,"myDiagramDiv5",{"undoManager.isEnabled":!0});e.nodeTemplate=u(g.a.Node,"Auto",u(g.a.Shape,"RoundedRectangle",{fill:"cyan"}),u(g.a.TextBlock,{margin:8},new g.a.Binding("text","key"))),e.linkTemplate=u(g.a.Link,{reshapable:!0,routing:g.a.Link.Orthogonal,resegmentable:!0},u(g.a.Shape),u(g.a.Shape,{toArrow:"standard"})),e.model=u(g.a.GraphLinksModel,{nodeDataArray:[{key:"Alpha"},{key:"Beta"}],linkDataArray:[{from:"Alpha",to:"Beta"}]})}},{key:"diagramRender6",value:function(){var e=u(g.a.Diagram,"myDiagramDiv6",{"undoManager.isEnabled":!0});e.nodeTemplate=u(g.a.Node,"Auto",u(g.a.Shape,"RoundedRectangle",{fill:"cyan",portId:"",fromLinkable:!0,toLinkable:!0}),u(g.a.TextBlock,{margin:8},new g.a.Binding("text","key"))),e.toolManager.dragSelectingTool.box=u(g.a.Part,{layerName:"Tool"},u(g.a.Shape,"RoundedRectangle",{fill:null,strokeWidth:5,stroke:"lime"})),e.model=new g.a.GraphLinksModel([{key:"Alpha"},{key:"Beta"}])}},{key:"diagramRender7",value:function(){var e=u(g.a.Diagram,"myDiagramDiv7",{"undoManager.isEnabled":!0});e.nodeTemplate=u(g.a.Node,"Auto",u(g.a.Shape,"RoundedRectangle",{fill:"cyan",portId:"",fromLinkable:!0,toLinkable:!0}),u(g.a.TextBlock,{margin:8},new g.a.Binding("text","key"))),e.toolManager.dragSelectingTool.box=u(g.a.Part,{layerName:"Tool"},u(g.a.Shape,"RoundedRectangle",{fill:null,strokeWidth:5,stroke:"lime"})),e.toolManager.linkingTool.temporaryLink=u(g.a.Link,{layerName:"Tool"},u(g.a.Shape,{stroke:"red",strokeWidth:2,strokeDashArray:[4,2]})),e.model=new g.a.GraphLinksModel([{key:"Alpha"},{key:"Beta"}])}},{key:"render",value:function(){return s.a.createElement("div",{className:"page-content"},s.a.createElement("div",{className:"article"},s.a.createElement("div",{className:"article-title"},s.a.createElement("h1",null,"GoJS \u5de5\u5177\u2014\u2014\u7b2c\u4e09\u8282 \u91cd\u65b0\u94fe\u63a5,\u94fe\u63a5\u91cd\u5851,\u96f6\u4ef6")),s.a.createElement("div",{className:"article-content"},s.a.createElement("h2",null,"Relinking Tool"),s.a.createElement("h3",null,"\u793a\u4f8b"),s.a.createElement("ul",null,s.a.createElement("li",null,'\u7528\u4e8e\u91cd\u65b0\u5206\u914d Link \u8fde\u63a5\u7684"to"\u548c"from"Node'),s.a.createElement("li",null,'\u4ec5\u7528\u4e8e"toRelinkable"\u548c\u6216"fromRelinkable"\u5c5e\u6027\u4e3a true \u7684 Link'),s.a.createElement("li",null,"\u81ea\u52a8\u66f4\u65b0 Diagram \u548c Model \u4e2d\u7684\u5173\u7cfb")),s.a.createElement("p",null,"\u4ee3\u7801\u53ca\u6548\u679c\u5982\u4e0b:"),s.a.createElement(m.a,{value:'let myDiagram = $(go.Diagram, "myDiagramDiv", {\n    "undoManager.isEnabled": true\n});\n\nmyDiagram.nodeTemplate =\n    $(go.Node, "Auto",\n        $(go.Shape, "RoundedRectangle", {\n            fill: "cyan",\n            portId: "",\n            fromLinkable: true,\n            toLinkable: true\n        }),\n        $(go.TextBlock, {\n                margin: 8\n            },\n            new go.Binding("text", "key")\n        )\n    );\nmyDiagram.linkTemplate =\n    $(go.Link, {\n            relinkableFrom: true,\n            relinkableTo: true\n        },\n        $(go.Shape),\n        $(go.Shape, {\n            toArrow: "standard",\n        }),\n    );\nmyDiagram.model =\n    $(go.GraphLinksModel, {\n        nodeDataArray: [{\n            key: "Alpha"\n        }, {\n            key: "Beta"\n        }, {\n            key: "Gamma"\n        }, {\n            key: "Delta"\n        }],\n        linkDataArray: [{\n            from: "Alpha",\n            to: "Beta"\n        }]\n    });',options:p}),s.a.createElement("div",{id:"myDiagramDiv1",className:"diagram"}),s.a.createElement("h3",null,"\u81ea\u5b9a\u4e49\u6837\u5f0f"),s.a.createElement(m.a,{value:'myDiagram.toolManager.relinkingTool.fromHandleArchetype =\n    $(go.Shape, "Diamond", {\n        desiredSize: new go.Size(9, 9),\n        stroke: "green",\n        fill: "lime",\n        segmentIndex: 0\n    });\nmyDiagram.toolManager.relinkingTool.toHandleArchetype =\n    $(go.Shape, "Diamond", {\n        desiredSize: new go.Size(9, 9),\n        stroke: "red",\n        fill: "pink",\n        segmentIndex: -1\n    });',options:p}),s.a.createElement("ul",null,s.a.createElement("li",null,"segmentIndex \u51b3\u5b9a\u4e86\u5b9a\u4e49\u5185\u5bb9\u5728 Link \u4e0a\u7684\u4f4d\u7f6e"),s.a.createElement("li",null,"\u9ed8\u8ba4\u503c:-infinity,\u4f4d\u4e8e Link \u4e2d\u95f4"),s.a.createElement("li",null,"0:\u4f4d\u4e8e Link \u7684 from\u7aef"),s.a.createElement("li",null,"-1:\u4f4d\u4e8e Link \u7684 to\u7aef")),s.a.createElement("div",{id:"myDiagramDiv2",className:"diagram"}),s.a.createElement("h3",null,"linkValidation"),s.a.createElement("p",null,"\u81ea\u5b9a\u4e49 Link \u91cd\u65b0\u94fe\u63a5\u6761\u4ef6"),s.a.createElement(m.a,{value:'myDiagram.toolManager.relinkingTool.linkValidation = function (fromnode, fromport, tonode, toport, link) {\n    return fromnode.data.key === "Alpha";\n}',options:p}),s.a.createElement("div",{id:"myDiagramDiv3",className:"diagram"}),s.a.createElement("h2",null,"LinkReshaping Tool"),s.a.createElement("ul",null,s.a.createElement("li",null,"\u7528\u6765\u6539\u53d8 Link \u7684\u8def\u5f84"),s.a.createElement("li",null,'\u4ec5\u7528\u4e8e"reshapable"\u5c5e\u6027\u503c\u4e3a true \u7684 Link')),s.a.createElement(m.a,{value:'let myDiagram = $(go.Diagram, "myDiagramDiv", {\n    "undoManager.isEnabled": true\n});\n\nmyDiagram.nodeTemplate =\n    $(go.Node, "Auto",\n        $(go.Shape, "RoundedRectangle", {\n            fill: "cyan",\n        }),\n        $(go.TextBlock, {\n                margin: 8\n            },\n            new go.Binding("text", "key")\n        )\n    );\nmyDiagram.linkTemplate =\n    $(go.Link, {\n            reshapable: true,\n            routing: go.Link.Orthogonal\n        },\n        $(go.Shape),\n        $(go.Shape, {\n            toArrow: "standard",\n        }),\n    );\n\nmyDiagram.model =\n    $(go.GraphLinksModel, {\n        nodeDataArray: [{\n            key: "Alpha"\n        }, {\n            key: "Beta"\n        }],\n        linkDataArray: [{\n            from: "Alpha",\n            to: "Beta"\n        }]\n    })',options:p}),s.a.createElement("div",{id:"myDiagramDiv4",className:"diagram"}),s.a.createElement("p",null,"\u4e0a\u4e0b\u79fb\u52a8 Node \u540e\u70b9\u51fb Link,\u6ed1\u52a8\u65b9\u5757\u67e5\u770b\u6548\u679c"),s.a.createElement("h3",null,"resegmentable"),s.a.createElement("p",null,"\u51b3\u5b9a Link \u662f\u5426\u53ef\u91cd\u65b0\u5206\u5272"),s.a.createElement(m.a,{value:'myDiagram.linkTemplate =\n    $(go.Link, {\n            reshapable: true,\n            routing: go.Link.Orthogonal,\n            resegmentable: true\n        },\n        $(go.Shape),\n        $(go.Shape, {\n            toArrow: "standard",\n        }),\n    );',options:p}),s.a.createElement("div",{id:"myDiagramDiv5",className:"diagram"}),s.a.createElement("p",null,"\u4e0a\u4e0b\u79fb\u52a8 Node \u540e\u70b9\u51fb Link,\u6ed1\u52a8\u83f1\u5f62\u5757\u67e5\u770b\u6548\u679c"),s.a.createElement("h2",null,"Tool Parts"),s.a.createElement("ul",null,s.a.createElement("li",null,"\u7528\u6765\u5728\u64cd\u4f5c\u8fc7\u7a0b\u4e2d\u53cd\u9988\u7684\u7279\u6b8a\u7684 Part \u5de5\u5177")),s.a.createElement("ul",{"data-lake-indent":"1"},s.a.createElement("li",null,"\u5728 Diagram \u957f\u6309\u5e76\u6ed1\u52a8\u9f20\u6807\u53ef\u7528\u6765\u9009\u4e2d Part"),s.a.createElement("li",null,"toolManager.dragSelectingTool.box \u51b3\u5b9a\u9009\u62e9\u6846\u7684\u6837\u5f0f")),s.a.createElement(m.a,{value:'let myDiagram = $(go.Diagram, "myDiagramDiv", {\n    "undoManager.isEnabled": true\n});\n\nmyDiagram.nodeTemplate =\n    $(go.Node, "Auto",\n        $(go.Shape, "RoundedRectangle", {\n            fill: "cyan",\n            portId: "",\n            fromLinkable: true,\n            toLinkable: true\n        }),\n        $(go.TextBlock, {\n                margin: 8\n            },\n            new go.Binding("text", "key")\n        )\n    );\n\nmyDiagram.toolManager.dragSelectingTool.box =\n    $(go.Part, {\n            layerName: "Tool"\n        },\n        $(go.Shape, "RoundedRectangle", {\n            fill: null,\n            strokeWidth: 5,\n            stroke: "lime"\n        })\n    )\n\nmyDiagram.model = new go.GraphLinksModel(\n    [{\n            key: "Alpha"\n        },\n        {\n            key: "Beta"\n        }\n    ]\n);',options:p}),s.a.createElement("div",{id:"myDiagramDiv6",className:"diagram"}),s.a.createElement("ul",{"data-lake-indent":"1"},s.a.createElement("li",null,"\u5728 Node \u8fb9\u6846\u957f\u6309\u5e76\u6ed1\u52a8\u9f20\u6807\u53ef\u91cd\u65b0\u94fe\u63a5,\u6b64\u65f6\u4f1a\u663e\u793a\u5f53\u524d\u62d6\u62fd\u7684 Link"),s.a.createElement("li",null,"toolManager.linkingTool.temporaryLink \u51b3\u5b9a\u6b64\u6837\u5f0f")),s.a.createElement(m.a,{value:'myDiagram.toolManager.linkingTool.temporaryLink =\n    $(go.Link, {\n            layerName: "Tool"\n        },\n        $(go.Shape, {\n            stroke: "red",\n            strokeWidth: 2,\n            strokeDashArray: [4, 2]\n        })\n    )',options:p}),s.a.createElement("div",{id:"myDiagramDiv7",className:"diagram"}),s.a.createElement("p",null,s.a.createElement("br",null)),s.a.createElement("p",null,s.a.createElement("br",null)),s.a.createElement("p",null,"\u76f8\u5173\u4ee3\u7801\uff1a"),s.a.createElement("p",null,s.a.createElement("a",{href:"https://github.com/LiuZheAb/GoJS_Demo/blob/master/18relinkingReshapingToolPars.html",target:"_blank",rel:"noopener noreferrer"},"https://github.com/LiuZheAb/GoJS_Demo/blob/master/18relinkingReshapingToolPars.html")))),s.a.createElement(d.a,null))}}]),n}(i.Component)},36:function(e,a,n){"use strict";var t=n(11),l=n(12),r=n(16),o=n(13),i=n(14),s=n(0),m=n.n(s),d=n(5),c=n(39),g=(n(37),function(e){Object(i.a)(n,e);var a=Object(o.a)(n);function n(e){var l;return Object(t.a)(this,n),(l=a.call(this,e)).bindHandleScroll=function(e){var a=!!e.srcElement&&e.srcElement.documentElement.scrollTop||window.pageYOffset||(e.srcElement?e.srcElement.body.scrollTop:0);l.setState({scrollTop:a})},l.scrollToAnchor=function(e){if(e){var a=document.getElementById(e);a&&a.scrollIntoView({block:"start",behavior:"smooth"})}},l.state={articleTree:[],scrollTop:null},l.getArticleTree=l.getArticleTree.bind(Object(r.a)(l)),l}return Object(l.a)(n,[{key:"getArticleTree",value:function(){for(var e=document.getElementsByClassName("article-content")[0].children,a=[],n=0;n<e.length-1;n++){var t=e[n].nodeName;"H2"!==t&&"H3"!==t||(e[n].id=e[n].innerText,a.push({name:e[n].innerText,tag:e[n].nodeName}))}this.setState({articleTree:a})}},{key:"setTitle",value:function(){for(var e=this.props.location.pathname.split("/").filter((function(e){return e})),a=[],n=0;n<c.a.length;n++)e[0]===c.a[n].name&&(a=c.a[n].section[e[1]]);document.getElementsByTagName("h1")[0]&&(document.getElementsByTagName("h1")[0].innerHTML=a)}},{key:"componentDidMount",value:function(){this.getArticleTree(),this.setTitle();var e=document.getElementById("header"),a=window.scrollY,n=document.getElementsByClassName("directory-list")[0],t=n.offsetTop;window.addEventListener("scroll",this.bindHandleScroll),window.onscroll=function(){for(var l=document.getElementsByClassName("page-footer")[0],r=0;l;)r+=l.offsetTop,l=l.offsetParent;var o=document.body.scrollTop||document.documentElement.scrollTop;if((o+=t+n.offsetHeight)>r+e.offsetHeight)n.style="position:fixed;top:".concat(t-o+r,"px;transition:none");else{var i=window.scrollY;i>e.offsetHeight&&(a<i&&(e.className="ant-layout-header header header-affixed",n.className="directory-list directory-affixed",a=i),a>i&&(e.className="ant-layout-header header header-visible",n.className="directory-list",a=i)),n.style=""}}}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.bindHandleScroll)}},{key:"render",value:function(){var e=this,a=this.state,n=a.articleTree,t=a.scrollTop,l=n.length;if(document.getElementById("tree-num-0")&&l>0){for(var r=[],o=0;o<l;o++){var i=document.getElementById(n[o].name);r.push(i.offsetTop)}for(var s=r.findIndex((function(e){return e>t}))-1,d=0;d<l;d++)document.getElementById("tree-num-".concat(d)).className=d===s?"tree-num directory-item-active":"tree-num";-2===s&&(document.getElementById("tree-num-".concat(l-1)).className="tree-num directory-item-active")}return m.a.createElement("div",{className:"directory"},m.a.createElement("ul",{className:"directory-list"},n.map((function(a,n){return m.a.createElement("li",{key:n,id:"tree-num-".concat(n),className:"tree-num",title:a.name,style:{paddingLeft:"H2"===a.tag?10:22},onClick:function(){e.scrollToAnchor("".concat(a.name))}},a.name)}))))}}]),n}(s.Component));a.a=Object(d.f)(g)},37:function(e,a,n){},58:function(e,a,n){var t={"./apl/apl.js":[59,90],"./asciiarmor/asciiarmor.js":[60,91],"./asn.1/asn.1.js":[61,92],"./asterisk/asterisk.js":[62,93],"./brainfuck/brainfuck.js":[63,94],"./clike/clike.js":[47,5],"./clojure/clojure.js":[64,95],"./cmake/cmake.js":[65,96],"./cobol/cobol.js":[66,97],"./coffeescript/coffeescript.js":[48,98],"./commonlisp/commonlisp.js":[67,99],"./crystal/crystal.js":[68,100],"./css/css.js":[42,3],"./cypher/cypher.js":[69,101],"./d/d.js":[70,102],"./dart/dart.js":[71,5,103],"./diff/diff.js":[72,104],"./django/django.js":[73,2,3,67],"./dockerfile/dockerfile.js":[74,79],"./dtd/dtd.js":[75,105],"./dylan/dylan.js":[76,106],"./ebnf/ebnf.js":[77,107],"./ecl/ecl.js":[78,108],"./eiffel/eiffel.js":[79,109],"./elm/elm.js":[80,110],"./erlang/erlang.js":[81,111],"./factor/factor.js":[82,80],"./fcl/fcl.js":[83,112],"./forth/forth.js":[84,113],"./fortran/fortran.js":[85,114],"./gas/gas.js":[86,115],"./gfm/gfm.js":[87,56,78],"./gherkin/gherkin.js":[88,116],"./go/go.js":[89,117],"./groovy/groovy.js":[90,118],"./haml/haml.js":[91,2,3,70],"./handlebars/handlebars.js":[49,74],"./haskell-literate/haskell-literate.js":[92,83],"./haskell/haskell.js":[50,119],"./haxe/haxe.js":[93,120],"./htmlembedded/htmlembedded.js":[94,2,3,66],"./htmlmixed/htmlmixed.js":[40,2,3,84],"./http/http.js":[95,121],"./idl/idl.js":[96,122],"./javascript/javascript.js":[43,2],"./jinja2/jinja2.js":[97,123],"./jsx/jsx.js":[98,2,85],"./julia/julia.js":[99,124],"./livescript/livescript.js":[100,125],"./lua/lua.js":[101,126],"./markdown/markdown.js":[55,56],"./mathematica/mathematica.js":[102,127],"./mbox/mbox.js":[103,128],"./meta.js":[45],"./mirc/mirc.js":[104,129],"./mllike/mllike.js":[105,130],"./modelica/modelica.js":[106,131],"./mscgen/mscgen.js":[107,132],"./mumps/mumps.js":[108,133],"./nginx/nginx.js":[109,134],"./nsis/nsis.js":[110,81],"./ntriples/ntriples.js":[111,135],"./octave/octave.js":[112,136],"./oz/oz.js":[113,137],"./pascal/pascal.js":[114,138],"./pegjs/pegjs.js":[115,2,139],"./perl/perl.js":[116,140],"./php/php.js":[117,2,3,5,75],"./pig/pig.js":[118,141],"./powershell/powershell.js":[119,142],"./properties/properties.js":[120,143],"./protobuf/protobuf.js":[121,144],"./pug/pug.js":[56,2,3,55],"./puppet/puppet.js":[122,145],"./python/python.js":[51,146],"./q/q.js":[123,147],"./r/r.js":[124,148],"./rpm/rpm.js":[125,149],"./rst/rst.js":[126,69],"./ruby/ruby.js":[44,150],"./rust/rust.js":[127,82],"./sas/sas.js":[128,151],"./sass/sass.js":[53,3,152],"./scheme/scheme.js":[129,153],"./shell/shell.js":[130,154],"./sieve/sieve.js":[131,155],"./slim/slim.js":[132,2,3,71],"./smalltalk/smalltalk.js":[133,156],"./smarty/smarty.js":[134,157],"./solr/solr.js":[135,158],"./soy/soy.js":[136,2,3,76],"./sparql/sparql.js":[137,159],"./spreadsheet/spreadsheet.js":[138,160],"./sql/sql.js":[139,161],"./stex/stex.js":[52,162],"./stylus/stylus.js":[57,57],"./swift/swift.js":[140,163],"./tcl/tcl.js":[141,164],"./textile/textile.js":[142,165],"./tiddlywiki/tiddlywiki.js":[143,166],"./tiki/tiki.js":[144,167],"./toml/toml.js":[145,168],"./tornado/tornado.js":[146,2,3,68],"./troff/troff.js":[147,169],"./ttcn-cfg/ttcn-cfg.js":[149,170],"./ttcn/ttcn.js":[148,171],"./turtle/turtle.js":[150,172],"./twig/twig.js":[151,77],"./vb/vb.js":[152,173],"./vbscript/vbscript.js":[153,174],"./velocity/velocity.js":[154,175],"./verilog/verilog.js":[155,176],"./vhdl/vhdl.js":[156,177],"./vue/vue.js":[157,2,3,57,55,64],"./webidl/webidl.js":[158,178],"./xml/xml.js":[38,179],"./xquery/xquery.js":[159,180],"./yacas/yacas.js":[160,181],"./yaml-frontmatter/yaml-frontmatter.js":[161,86],"./yaml/yaml.js":[54,182],"./z80/z80.js":[162,183]};function l(e){if(!n.o(t,e))return Promise.resolve().then((function(){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}));var a=t[e],l=a[0];return Promise.all(a.slice(1).map(n.e)).then((function(){return n.t(l,7)}))}l.keys=function(){return Object.keys(t)},l.id=58,e.exports=l}}]);
//# sourceMappingURL=28.eaf25f55.chunk.js.map