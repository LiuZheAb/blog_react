(this.webpackJsonpblog=this.webpackJsonpblog||[]).push([[26],{38:function(e,a,t){"use strict";t.d(a,"a",(function(){return m}));var l=t(8),n=t(9),i=t(10),r=t(11),s=t(0),o=t.n(s),m=(t(39),function(e){Object(r.a)(t,e);var a=Object(i.a)(t);function t(e){var n;return Object(l.a)(this,t),(n=a.call(this,e)).bindHandleScroll=function(e){var a=!!e.srcElement&&e.srcElement.documentElement.scrollTop||window.pageYOffset||(e.srcElement?e.srcElement.body.scrollTop:0);n.setState({scrollTop:a})},n.scrollToAnchor=function(e){if(e){var a=document.getElementById(e);a&&a.scrollIntoView()}},n.state={articleTree:n.props.articleTree,scrollTop:null},n}return Object(n.a)(t,[{key:"componentDidMount",value:function(){var e=document.getElementById("header"),a=window.scrollY,t=document.getElementsByClassName("directory-list")[0],l=t.offsetTop;window.addEventListener("scroll",this.bindHandleScroll),window.onscroll=function(){for(var n=document.getElementsByClassName("page-footer")[0],i=0;n;)i+=n.offsetTop,n=n.offsetParent;var r=document.body.scrollTop||document.documentElement.scrollTop;if((r+=l+t.offsetHeight)>i)t.style="position:fixed;top:".concat(l-r+i-e.offsetHeight,"px;transition:none");else{var s=window.scrollY;t&&(s>e.offsetHeight&&(a<s&&(e.className="ant-layout-header header header-affixed",t.className="directory-list directory-affixed directory-list2",a=s),a>s&&(e.className="ant-layout-header header header-visible",t.className="directory-list directory-list2",a=s)),t.style="")}}}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.bindHandleScroll),this.setState({articleTree:this.props.articleTree})}},{key:"render",value:function(){var e=this,a=this.state,t=a.articleTree,l=a.scrollTop,n=t.length;if(document.getElementById("tree-num-0")&&n>0){for(var i=[],r=0;r<n;r++){var s=document.getElementById(t[r].name);i.push(s.offsetTop)}for(var m=i.findIndex((function(e){return e>l}))-1,d=0;d<n;d++)document.getElementById("tree-num-".concat(d)).className=d===m?"tree-num directory-item-active":"tree-num";-2===m&&(document.getElementById("tree-num-".concat(n-1)).className="tree-num directory-item-active")}return o.a.createElement("ul",{className:"directory-list"},t.map((function(a,t){return o.a.createElement("li",{key:t,id:"tree-num-".concat(t),className:"tree-num",style:{paddingLeft:"H2"===a.tag?"10px":"22px"},onClick:function(){e.scrollToAnchor("".concat(a.name))}},a.name)})))}}],[{key:"getDerivedStateFromProps",value:function(e,a){var t=e.articleTree;return t!==a.articleTree?{articleTree:t}:null}}]),t}(s.Component))},39:function(e,a,t){},419:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return u}));var l=t(8),n=t(9),i=t(15),r=t(10),s=t(11),o=t(0),m=t.n(o),d=t(165),c=(t(60),t(38)),g=t(58),h=t.n(g),p=h.a.GraphObject.make,u=function(e){Object(s.a)(t,e);var a=Object(r.a)(t);function t(e){var n;return Object(l.a)(this,t),(n=a.call(this,e)).state={articleTree:[]},n.getArticleTree=n.getArticleTree.bind(Object(i.a)(n)),n}return Object(n.a)(t,[{key:"getArticleTree",value:function(){for(var e=document.getElementsByClassName("article-content")[0].children,a=[],t=0;t<e.length-1;t++){var l=e[t].nodeName;"H2"!==l&&"H3"!==l||(e[t].id=e[t].innerText,a.push({name:e[t].innerText,tag:e[t].nodeName}))}this.setState({articleTree:a})}},{key:"componentDidMount",value:function(){this.getArticleTree(),this.diagramRender1(),this.diagramRender2(),this.diagramRender3(),this.diagramRender4(),this.diagramRender5()}},{key:"diagramRender1",value:function(){var e=p(h.a.Diagram,"myDiagramDiv1");e.grid.visible=!0,e.nodeTemplate=p(h.a.Node,"Auto",{resizable:!0},p(h.a.Shape,"Rectangle",{fill:"lightgray"}),p(h.a.TextBlock,{margin:5},new h.a.Binding("text","key")));e.model=new h.a.GraphLinksModel([{key:"Alpha"},{key:"Beta"},{key:"Gamma"}]),e.toolManager.draggingTool.isGridSnapEnabled=!0,e.toolManager.resizingTool.isGridSnapEnabled=!0,e.grid.gridCellSize=new h.a.Size(50,50)}},{key:"diagramRender2",value:function(){var e=p(h.a.Diagram,"myDiagramDiv2");e.grid.visible=!0,e.nodeTemplate=p(h.a.Node,"Auto",{resizable:!0},p(h.a.Shape,"Rectangle",{fill:"lightgray"}),p(h.a.TextBlock,{margin:5},new h.a.Binding("text","key")));e.model=new h.a.GraphLinksModel([{key:"Alpha"},{key:"Beta"},{key:"Gamma"}]),e.toolManager.draggingTool.isGridSnapEnabled=!0,e.toolManager.resizingTool.isGridSnapEnabled=!0,e.grid.gridCellSize=new h.a.Size(50,50),e.grid=p(h.a.Panel,"Grid",{gridCellSize:new h.a.Size(10,10)},p(h.a.Shape,"lineH",{stroke:"blue"}),p(h.a.Shape,"lineV",{stroke:"green"}))}},{key:"diagramRender3",value:function(){var e=p(h.a.Diagram,"myDiagramDiv3");e.grid.visible=!0,e.nodeTemplate=p(h.a.Node,"Auto",{resizable:!0},p(h.a.Shape,"Rectangle",{fill:"lightgray"}),p(h.a.TextBlock,{margin:5},new h.a.Binding("text","key")));e.model=new h.a.GraphLinksModel([{key:"Alpha"},{key:"Beta"},{key:"Gamma"}]),e.toolManager.draggingTool.isGridSnapEnabled=!0,e.toolManager.resizingTool.isGridSnapEnabled=!0,e.grid.gridCellSize=new h.a.Size(50,50),e.grid=p(h.a.Panel,"Grid",{gridCellSize:new h.a.Size(10,10)},p(h.a.Shape,"lineH",{stroke:"blue",interval:5}),p(h.a.Shape,"lineV",{stroke:"green",interval:5}),p(h.a.Shape,"lineH",{stroke:"lightblue"}),p(h.a.Shape,"lineV",{stroke:"lightgreen"}))}},{key:"diagramRender4",value:function(){var e=p(h.a.Diagram,"myDiagramDiv4");e.grid.visible=!0,e.nodeTemplate=p(h.a.Node,"Auto",{resizable:!0},p(h.a.Shape,"Rectangle",{fill:"lightgray"}),p(h.a.TextBlock,{margin:5},new h.a.Binding("text","key")));e.model=new h.a.GraphLinksModel([{key:"Alpha"},{key:"Beta"},{key:"Gamma"}]),e.toolManager.draggingTool.isGridSnapEnabled=!0,e.toolManager.resizingTool.isGridSnapEnabled=!0,e.grid.gridCellSize=new h.a.Size(50,50),e.grid=p(h.a.Panel,"Grid",{gridCellSize:new h.a.Size(50,50)},p(h.a.Shape,"BarH",{fill:"lime",height:50,interval:2}))}},{key:"diagramRender5",value:function(){var e=p(h.a.Diagram,"myDiagramDiv5");e.grid.visible=!0,e.nodeTemplate=p(h.a.Node,"Auto",{resizable:!0},p(h.a.Shape,"Rectangle",{fill:"lightgray"}),p(h.a.TextBlock,{margin:5},new h.a.Binding("text","key")));e.model=new h.a.GraphLinksModel([{key:"Alpha"},{key:"Beta"},{key:"Gamma"}]),e.toolManager.draggingTool.isGridSnapEnabled=!0,e.toolManager.resizingTool.isGridSnapEnabled=!0,e.grid.gridCellSize=new h.a.Size(50,50),e.grid=p(h.a.Panel,"Grid",{gridCellSize:new h.a.Size(50,50)},p(h.a.Shape,"BarH",{fill:"lime",height:50,interval:2,opacity:.25}),p(h.a.Shape,"BarV",{fill:"lime",height:50,interval:2,opacity:.25}))}},{key:"render",value:function(){return m.a.createElement("div",{className:"page-content"},m.a.createElement("div",{className:"article"},m.a.createElement("div",{className:"article-title"},m.a.createElement("h1",null,"GoJS\u9762\u677f\u2014\u2014\u7b2c\u4e8c\u8282 \u7f51\u683c\u9762\u677f(Grid Panel)")),m.a.createElement("div",{className:"article-content"},m.a.createElement("h2",null,"Grid Panels"),m.a.createElement("ul",null,m.a.createElement("li",null,"\u663e\u793a\u6309\u4e00\u5b9a\u95f4\u9694\u7ed8\u5236\u7684\u7ebf\u6761\u7f51\u683c"),m.a.createElement("li",null,"Diagram.grid\u662f\u4e00\u4e2aGrid Panel"),m.a.createElement("li",null,"\u8bbe\u7f6e\u4e86Diagram.grid\u540e,Part\u53ef\u4ee5\u6839\u636e\u7f51\u683c\u5bf9\u9f50\u6216\u8c03\u6574\u5927\u5c0f"),m.a.createElement("li",null,"Grid Panel\u4e2d\u7684\u5143\u7d20\u5fc5\u987b\u662fShape")),m.a.createElement("p",null,"\u4ee3\u7801\u53ca\u6548\u679c\u5982\u4e0b:"),m.a.createElement(d.a,{value:'let $ = go.GraphObject.make;\nlet myDiagram = $(go.Diagram, "myDiagramDiv");\nmyDiagram.grid.visible = true;\nmyDiagram.nodeTemplate = $(go.Node, "Auto", {\n        resizable: true\n    },\n    $(go.Shape, "Rectangle", {\n        fill: "lightgray"\n    }),\n    $(go.TextBlock, {\n        margin: 5\n    }, new go.Binding("text", "key")));\nlet nodeDataArray = [{\n    key: "Alpha"\n}, {\n    key: "Beta"\n}, {\n    key: "Gamma"\n}];\nmyDiagram.model = new go.GraphLinksModel(nodeDataArray);\nmyDiagram.toolManager.draggingTool.isGridSnapEnabled = true;\nmyDiagram.toolManager.resizingTool.isGridSnapEnabled = true;\nmyDiagram.grid.gridCellSize = new go.Size(50, 50);',options:{theme:"monokai",mode:"JSX",readOnly:!0}}),m.a.createElement("div",{id:"myDiagramDiv1",className:"diagram",style:{width:"100%",maxWidth:"600px",height:"400px"}}),m.a.createElement("h2",null,"\u8bbe\u7f6e\u7f51\u683c\u6837\u5f0f"),m.a.createElement(d.a,{value:'myDiagram.grid =\n    $(go.Panel, "Grid", {\n            gridCellSize: new go.Size(10, 10)\n        },\n        $(go.Shape, "lineH", {\n            stroke: "blue"\n        }),\n        $(go.Shape, "lineV", {\n            stroke: "green"\n        })\n    );',options:{theme:"monokai",mode:"JSX",readOnly:!0}}),m.a.createElement("div",{id:"myDiagramDiv2",className:"diagram",style:{width:"100%",maxWidth:"600px",height:"400px"}}),m.a.createElement("h2",null,"Shape.Interval"),m.a.createElement("ul",null,m.a.createElement("li",null,"\u6307\u5b9a\u5728\u7f51\u683c\u4e2d\u7ed8\u5236Shape\u7684\u9891\u7387(\u4ee5gridCellSize\u7684\u500d\u6570\u8ba1\u7b97)"),m.a.createElement("li",null,"\u9ed8\u8ba4\u503c:1"),m.a.createElement("li",null,"\u5141\u8bb8\u503c:\u6b63\u6574\u6570")),m.a.createElement(d.a,{value:'myDiagram.grid =\n    $(go.Panel, "Grid", {\n            gridCellSize: new go.Size(10, 10)\n        },\n        $(go.Shape, "lineH", {\n            stroke: "blue",\n            interval: 5\n        }),\n        $(go.Shape, "lineV", {\n            stroke: "green",\n            interval: 5\n        }),\n        $(go.Shape, "lineH", {\n            stroke: "lightblue"\n        }),\n        $(go.Shape, "lineV", {\n            stroke: "lightgreen"\n        }),\n    );',options:{theme:"monokai",mode:"JSX",readOnly:!0}}),m.a.createElement("div",{id:"myDiagramDiv3",className:"diagram",style:{width:"100%",maxWidth:"600px",height:"400px"}}),m.a.createElement("h3",null,"\u8bbe\u7f6e\u4e3a\u6761\u5e26\u72b6"),m.a.createElement(d.a,{value:'myDiagram.grid =\n    $(go.Panel, "Grid", {\n            gridCellSize: new go.Size(50, 50)\n        },\n        $(go.Shape, "BarH", {\n            fill: "lime",\n            height: 50,\n            interval: 2\n        })\n    );',options:{theme:"monokai",mode:"JSX",readOnly:!0}}),m.a.createElement("div",{id:"myDiagramDiv4",className:"diagram",style:{width:"100%",maxWidth:"600px",height:"400px"}}),m.a.createElement("h3",null,"\u652f\u6301\u900f\u660e\u5ea6\u5c5e\u6027"),m.a.createElement(d.a,{value:'myDiagram.grid =\n    $(go.Panel, "Grid", {\n            gridCellSize: new go.Size(50, 50)\n        },\n        $(go.Shape, "BarH", {\n            fill: "lime",\n            height: 50,\n            interval: 2,\n            opacity: .25\n        }),\n        $(go.Shape, "BarV", {\n            fill: "lime",\n            height: 50,\n            interval: 2,\n            opacity: .25\n        })\n    );',options:{theme:"monokai",mode:"JSX",readOnly:!0}}),m.a.createElement("div",{id:"myDiagramDiv5",className:"diagram",style:{width:"100%",maxWidth:"600px",height:"400px"}}),m.a.createElement("p",null,m.a.createElement("br",null)),m.a.createElement("p",null,m.a.createElement("br",null)),m.a.createElement("p",null,"\u76f8\u5173\u4ee3\u7801\uff1a"),m.a.createElement("p",null,m.a.createElement("a",{href:"https://github.com/LiuZheAb/GoJS_Demo/blob/master/14gridPanel.html",target:"_blank",rel:"noopener noreferrer"},"https://github.com/LiuZheAb/GoJS_Demo/blob/master/14gridPanel.html")))),m.a.createElement("div",{className:"directory"},m.a.createElement(c.a,{articleTree:this.state.articleTree})))}}]),t}(o.Component)},59:function(e,a,t){var l={"./apl/apl.js":[61,54],"./asciiarmor/asciiarmor.js":[62,55],"./asn.1/asn.1.js":[63,56],"./asterisk/asterisk.js":[64,57],"./brainfuck/brainfuck.js":[65,58],"./clike/clike.js":[46,3],"./clojure/clojure.js":[66,59],"./cmake/cmake.js":[67,60],"./cobol/cobol.js":[68,61],"./coffeescript/coffeescript.js":[47,62],"./commonlisp/commonlisp.js":[69,63],"./crystal/crystal.js":[70,64],"./css/css.js":[42,2],"./cypher/cypher.js":[71,65],"./d/d.js":[72,66],"./dart/dart.js":[73,3,67],"./diff/diff.js":[74,68],"./django/django.js":[75,1,2,33],"./dockerfile/dockerfile.js":[76,46],"./dtd/dtd.js":[77,69],"./dylan/dylan.js":[78,70],"./ebnf/ebnf.js":[79,71],"./ecl/ecl.js":[80,72],"./eiffel/eiffel.js":[81,73],"./elm/elm.js":[82,74],"./erlang/erlang.js":[83,75],"./factor/factor.js":[84,47],"./fcl/fcl.js":[85,76],"./forth/forth.js":[86,77],"./fortran/fortran.js":[87,78],"./gas/gas.js":[88,79],"./gfm/gfm.js":[89,5,45],"./gherkin/gherkin.js":[90,80],"./go/go.js":[91,81],"./groovy/groovy.js":[92,82],"./haml/haml.js":[93,1,2,36],"./handlebars/handlebars.js":[48,41],"./haskell-literate/haskell-literate.js":[94,50],"./haskell/haskell.js":[49,83],"./haxe/haxe.js":[95,84],"./htmlembedded/htmlembedded.js":[96,1,2,32],"./htmlmixed/htmlmixed.js":[41,1,2,51],"./http/http.js":[97,85],"./idl/idl.js":[98,86],"./javascript/javascript.js":[43,1],"./jinja2/jinja2.js":[99,87],"./jsx/jsx.js":[100,1,52],"./julia/julia.js":[101,88],"./livescript/livescript.js":[102,89],"./lua/lua.js":[103,90],"./markdown/markdown.js":[54,5],"./mathematica/mathematica.js":[104,91],"./mbox/mbox.js":[105,92],"./meta.js":[45],"./mirc/mirc.js":[106,93],"./mllike/mllike.js":[107,94],"./modelica/modelica.js":[108,95],"./mscgen/mscgen.js":[109,96],"./mumps/mumps.js":[110,97],"./nginx/nginx.js":[111,98],"./nsis/nsis.js":[112,48],"./ntriples/ntriples.js":[113,99],"./octave/octave.js":[114,100],"./oz/oz.js":[115,101],"./pascal/pascal.js":[116,102],"./pegjs/pegjs.js":[117,1,103],"./perl/perl.js":[118,104],"./php/php.js":[119,1,2,3,42],"./pig/pig.js":[120,105],"./powershell/powershell.js":[121,106],"./properties/properties.js":[122,107],"./protobuf/protobuf.js":[123,108],"./pug/pug.js":[55,1,2,4],"./puppet/puppet.js":[124,109],"./python/python.js":[50,110],"./q/q.js":[125,111],"./r/r.js":[126,112],"./rpm/rpm.js":[127,113],"./rst/rst.js":[128,35],"./ruby/ruby.js":[44,114],"./rust/rust.js":[129,49],"./sas/sas.js":[130,115],"./sass/sass.js":[52,2,116],"./scheme/scheme.js":[131,117],"./shell/shell.js":[132,118],"./sieve/sieve.js":[133,119],"./slim/slim.js":[134,1,2,37],"./smalltalk/smalltalk.js":[135,120],"./smarty/smarty.js":[136,121],"./solr/solr.js":[137,122],"./soy/soy.js":[138,1,2,43],"./sparql/sparql.js":[139,123],"./spreadsheet/spreadsheet.js":[140,124],"./sql/sql.js":[141,125],"./stex/stex.js":[51,126],"./stylus/stylus.js":[56,6],"./swift/swift.js":[142,127],"./tcl/tcl.js":[143,128],"./textile/textile.js":[144,129],"./tiddlywiki/tiddlywiki.js":[145,130],"./tiki/tiki.js":[146,131],"./toml/toml.js":[147,132],"./tornado/tornado.js":[148,1,2,34],"./troff/troff.js":[149,133],"./ttcn-cfg/ttcn-cfg.js":[151,134],"./ttcn/ttcn.js":[150,135],"./turtle/turtle.js":[152,136],"./twig/twig.js":[153,44],"./vb/vb.js":[154,137],"./vbscript/vbscript.js":[155,138],"./velocity/velocity.js":[156,139],"./verilog/verilog.js":[157,140],"./vhdl/vhdl.js":[158,141],"./vue/vue.js":[159,1,2,6,4,12],"./webidl/webidl.js":[160,142],"./xml/xml.js":[37,143],"./xquery/xquery.js":[161,144],"./yacas/yacas.js":[162,145],"./yaml-frontmatter/yaml-frontmatter.js":[163,53],"./yaml/yaml.js":[53,146],"./z80/z80.js":[164,147]};function n(e){if(!t.o(l,e))return Promise.resolve().then((function(){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}));var a=l[e],n=a[0];return Promise.all(a.slice(1).map(t.e)).then((function(){return t.t(n,7)}))}n.keys=function(){return Object.keys(l)},n.id=59,e.exports=n}}]);
//# sourceMappingURL=26.466f3a5f.chunk.js.map