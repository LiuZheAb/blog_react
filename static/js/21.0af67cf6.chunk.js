(this.webpackJsonpblog=this.webpackJsonpblog||[]).push([[21],{325:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return u}));var n=t(11),l=t(12),i=t(13),r=t(14),s=t(0),o=t.n(s),m=t(163),d=(t(46),t(36)),c=t(165),g=t.n(c),h=g.a.GraphObject.make,u=function(e){Object(r.a)(t,e);var a=Object(i.a)(t);function t(){return Object(n.a)(this,t),a.apply(this,arguments)}return Object(l.a)(t,[{key:"componentDidMount",value:function(){this.diagramRender1(),this.diagramRender2(),this.diagramRender3(),this.diagramRender4(),this.diagramRender5()}},{key:"diagramRender1",value:function(){var e=h(g.a.Diagram,"myDiagramDiv1");e.grid.visible=!0,e.nodeTemplate=h(g.a.Node,"Auto",{resizable:!0},h(g.a.Shape,"Rectangle",{fill:"lightgray"}),h(g.a.TextBlock,{margin:5},new g.a.Binding("text","key")));e.model=new g.a.GraphLinksModel([{key:"Alpha"},{key:"Beta"},{key:"Gamma"}]),e.toolManager.draggingTool.isGridSnapEnabled=!0,e.toolManager.resizingTool.isGridSnapEnabled=!0,e.grid.gridCellSize=new g.a.Size(50,50)}},{key:"diagramRender2",value:function(){var e=h(g.a.Diagram,"myDiagramDiv2");e.grid.visible=!0,e.nodeTemplate=h(g.a.Node,"Auto",{resizable:!0},h(g.a.Shape,"Rectangle",{fill:"lightgray"}),h(g.a.TextBlock,{margin:5},new g.a.Binding("text","key")));e.model=new g.a.GraphLinksModel([{key:"Alpha"},{key:"Beta"},{key:"Gamma"}]),e.toolManager.draggingTool.isGridSnapEnabled=!0,e.toolManager.resizingTool.isGridSnapEnabled=!0,e.grid.gridCellSize=new g.a.Size(50,50),e.grid=h(g.a.Panel,"Grid",{gridCellSize:new g.a.Size(10,10)},h(g.a.Shape,"lineH",{stroke:"blue"}),h(g.a.Shape,"lineV",{stroke:"green"}))}},{key:"diagramRender3",value:function(){var e=h(g.a.Diagram,"myDiagramDiv3");e.grid.visible=!0,e.nodeTemplate=h(g.a.Node,"Auto",{resizable:!0},h(g.a.Shape,"Rectangle",{fill:"lightgray"}),h(g.a.TextBlock,{margin:5},new g.a.Binding("text","key")));e.model=new g.a.GraphLinksModel([{key:"Alpha"},{key:"Beta"},{key:"Gamma"}]),e.toolManager.draggingTool.isGridSnapEnabled=!0,e.toolManager.resizingTool.isGridSnapEnabled=!0,e.grid.gridCellSize=new g.a.Size(50,50),e.grid=h(g.a.Panel,"Grid",{gridCellSize:new g.a.Size(10,10)},h(g.a.Shape,"lineH",{stroke:"blue",interval:5}),h(g.a.Shape,"lineV",{stroke:"green",interval:5}),h(g.a.Shape,"lineH",{stroke:"lightblue"}),h(g.a.Shape,"lineV",{stroke:"lightgreen"}))}},{key:"diagramRender4",value:function(){var e=h(g.a.Diagram,"myDiagramDiv4");e.grid.visible=!0,e.nodeTemplate=h(g.a.Node,"Auto",{resizable:!0},h(g.a.Shape,"Rectangle",{fill:"lightgray"}),h(g.a.TextBlock,{margin:5},new g.a.Binding("text","key")));e.model=new g.a.GraphLinksModel([{key:"Alpha"},{key:"Beta"},{key:"Gamma"}]),e.toolManager.draggingTool.isGridSnapEnabled=!0,e.toolManager.resizingTool.isGridSnapEnabled=!0,e.grid.gridCellSize=new g.a.Size(50,50),e.grid=h(g.a.Panel,"Grid",{gridCellSize:new g.a.Size(50,50)},h(g.a.Shape,"BarH",{fill:"lime",height:50,interval:2}))}},{key:"diagramRender5",value:function(){var e=h(g.a.Diagram,"myDiagramDiv5");e.grid.visible=!0,e.nodeTemplate=h(g.a.Node,"Auto",{resizable:!0},h(g.a.Shape,"Rectangle",{fill:"lightgray"}),h(g.a.TextBlock,{margin:5},new g.a.Binding("text","key")));e.model=new g.a.GraphLinksModel([{key:"Alpha"},{key:"Beta"},{key:"Gamma"}]),e.toolManager.draggingTool.isGridSnapEnabled=!0,e.toolManager.resizingTool.isGridSnapEnabled=!0,e.grid.gridCellSize=new g.a.Size(50,50),e.grid=h(g.a.Panel,"Grid",{gridCellSize:new g.a.Size(50,50)},h(g.a.Shape,"BarH",{fill:"lime",height:50,interval:2,opacity:.25}),h(g.a.Shape,"BarV",{fill:"lime",height:50,interval:2,opacity:.25}))}},{key:"render",value:function(){return o.a.createElement("div",{className:"page-content"},o.a.createElement("div",{className:"article"},o.a.createElement("div",{className:"article-title"},o.a.createElement("h1",null,"GoJS \u9762\u677f\u2014\u2014\u7b2c\u4e8c\u8282 \u7f51\u683c\u9762\u677f(Grid Panel)")),o.a.createElement("div",{className:"article-content"},o.a.createElement("h2",null,"Grid Panels"),o.a.createElement("ul",null,o.a.createElement("li",null,"\u663e\u793a\u6309\u4e00\u5b9a\u95f4\u9694\u7ed8\u5236\u7684\u7ebf\u6761\u7f51\u683c"),o.a.createElement("li",null,"Diagram.grid \u662f\u4e00\u4e2a Grid Panel"),o.a.createElement("li",null,"\u8bbe\u7f6e\u4e86 Diagram.grid \u540e,Part \u53ef\u4ee5\u6839\u636e\u7f51\u683c\u5bf9\u9f50\u6216\u8c03\u6574\u5927\u5c0f"),o.a.createElement("li",null,"Grid Panel \u4e2d\u7684\u5143\u7d20\u5fc5\u987b\u662f Shape")),o.a.createElement("p",null,"\u4ee3\u7801\u53ca\u6548\u679c\u5982\u4e0b:"),o.a.createElement(m.a,{value:'let $ = go.GraphObject.make;\nlet myDiagram = $(go.Diagram, "myDiagramDiv");\nmyDiagram.grid.visible = true;\nmyDiagram.nodeTemplate = $(go.Node, "Auto", {\n        resizable: true\n    },\n    $(go.Shape, "Rectangle", {\n        fill: "lightgray"\n    }),\n    $(go.TextBlock, {\n        margin: 5\n    }, new go.Binding("text", "key")));\nlet nodeDataArray = [{\n    key: "Alpha"\n}, {\n    key: "Beta"\n}, {\n    key: "Gamma"\n}];\nmyDiagram.model = new go.GraphLinksModel(nodeDataArray);\nmyDiagram.toolManager.draggingTool.isGridSnapEnabled = true;\nmyDiagram.toolManager.resizingTool.isGridSnapEnabled = true;\nmyDiagram.grid.gridCellSize = new go.Size(50, 50);',options:{theme:"monokai",mode:"JSX",readOnly:!0}}),o.a.createElement("div",{id:"myDiagramDiv1",className:"diagram",style:{maxWidth:600,height:400}}),o.a.createElement("h2",null,"\u8bbe\u7f6e\u7f51\u683c\u6837\u5f0f"),o.a.createElement(m.a,{value:'myDiagram.grid =\n    $(go.Panel, "Grid", {\n            gridCellSize: new go.Size(10, 10)\n        },\n        $(go.Shape, "lineH", {\n            stroke: "blue"\n        }),\n        $(go.Shape, "lineV", {\n            stroke: "green"\n        })\n    );',options:{theme:"monokai",mode:"JSX",readOnly:!0}}),o.a.createElement("div",{id:"myDiagramDiv2",className:"diagram",style:{maxWidth:600,height:400}}),o.a.createElement("h2",null,"Shape.Interval"),o.a.createElement("ul",null,o.a.createElement("li",null,"\u6307\u5b9a\u5728\u7f51\u683c\u4e2d\u7ed8\u5236 Shape \u7684\u9891\u7387(\u4ee5 gridCellSize \u7684\u500d\u6570\u8ba1\u7b97)"),o.a.createElement("li",null,"\u9ed8\u8ba4\u503c:1"),o.a.createElement("li",null,"\u5141\u8bb8\u503c:\u6b63\u6574\u6570")),o.a.createElement(m.a,{value:'myDiagram.grid =\n    $(go.Panel, "Grid", {\n            gridCellSize: new go.Size(10, 10)\n        },\n        $(go.Shape, "lineH", {\n            stroke: "blue",\n            interval: 5\n        }),\n        $(go.Shape, "lineV", {\n            stroke: "green",\n            interval: 5\n        }),\n        $(go.Shape, "lineH", {\n            stroke: "lightblue"\n        }),\n        $(go.Shape, "lineV", {\n            stroke: "lightgreen"\n        }),\n    );',options:{theme:"monokai",mode:"JSX",readOnly:!0}}),o.a.createElement("div",{id:"myDiagramDiv3",className:"diagram",style:{maxWidth:600,height:400}}),o.a.createElement("h3",null,"\u8bbe\u7f6e\u4e3a\u6761\u5e26\u72b6"),o.a.createElement(m.a,{value:'myDiagram.grid =\n    $(go.Panel, "Grid", {\n            gridCellSize: new go.Size(50, 50)\n        },\n        $(go.Shape, "BarH", {\n            fill: "lime",\n            height: 50,\n            interval: 2\n        })\n    );',options:{theme:"monokai",mode:"JSX",readOnly:!0}}),o.a.createElement("div",{id:"myDiagramDiv4",className:"diagram",style:{maxWidth:600,height:400}}),o.a.createElement("h3",null,"\u652f\u6301\u900f\u660e\u5ea6\u5c5e\u6027"),o.a.createElement(m.a,{value:'myDiagram.grid =\n    $(go.Panel, "Grid", {\n            gridCellSize: new go.Size(50, 50)\n        },\n        $(go.Shape, "BarH", {\n            fill: "lime",\n            height: 50,\n            interval: 2,\n            opacity: .25\n        }),\n        $(go.Shape, "BarV", {\n            fill: "lime",\n            height: 50,\n            interval: 2,\n            opacity: .25\n        })\n    );',options:{theme:"monokai",mode:"JSX",readOnly:!0}}),o.a.createElement("div",{id:"myDiagramDiv5",className:"diagram",style:{maxWidth:600,height:400}}),o.a.createElement("p",null,o.a.createElement("br",null)),o.a.createElement("p",null,o.a.createElement("br",null)),o.a.createElement("p",null,"\u76f8\u5173\u4ee3\u7801\uff1a"),o.a.createElement("p",null,o.a.createElement("a",{href:"https://github.com/LiuZheAb/GoJS_Demo/blob/master/14gridPanel.html",target:"_blank",rel:"noopener noreferrer"},"https://github.com/LiuZheAb/GoJS_Demo/blob/master/14gridPanel.html")))),o.a.createElement(d.a,null))}}]),t}(s.Component)},36:function(e,a,t){"use strict";var n=t(11),l=t(12),i=t(16),r=t(13),s=t(14),o=t(0),m=t.n(o),d=t(5),c=t(39),g=(t(37),function(e){Object(s.a)(t,e);var a=Object(r.a)(t);function t(e){var l;return Object(n.a)(this,t),(l=a.call(this,e)).bindHandleScroll=function(e){var a=!!e.srcElement&&e.srcElement.documentElement.scrollTop||window.pageYOffset||(e.srcElement?e.srcElement.body.scrollTop:0);l.setState({scrollTop:a})},l.scrollToAnchor=function(e){if(e){var a=document.getElementById(e);a&&a.scrollIntoView({block:"start",behavior:"smooth"})}},l.state={articleTree:[],scrollTop:null},l.getArticleTree=l.getArticleTree.bind(Object(i.a)(l)),l}return Object(l.a)(t,[{key:"getArticleTree",value:function(){for(var e=document.getElementsByClassName("article-content")[0].children,a=[],t=0;t<e.length-1;t++){var n=e[t].nodeName;"H2"!==n&&"H3"!==n||(e[t].id=e[t].innerText,a.push({name:e[t].innerText,tag:e[t].nodeName}))}this.setState({articleTree:a})}},{key:"setTitle",value:function(){for(var e=this.props.location.pathname.split("/").filter((function(e){return e})),a=[],t=0;t<c.a.length;t++)e[0]===c.a[t].name&&(a=c.a[t].section[e[1]]);document.getElementsByTagName("h1")[0]&&(document.getElementsByTagName("h1")[0].innerHTML=a)}},{key:"componentDidMount",value:function(){this.getArticleTree(),this.setTitle();var e=document.getElementById("header"),a=window.scrollY,t=document.getElementsByClassName("directory-list")[0],n=t.offsetTop;window.addEventListener("scroll",this.bindHandleScroll),window.onscroll=function(){for(var l=document.getElementsByClassName("page-footer")[0],i=0;l;)i+=l.offsetTop,l=l.offsetParent;var r=document.body.scrollTop||document.documentElement.scrollTop;if((r+=n+t.offsetHeight)>i+e.offsetHeight)t.style="position:fixed;top:".concat(n-r+i,"px;transition:none");else{var s=window.scrollY;s>e.offsetHeight&&(a<s&&(e.className="ant-layout-header header header-affixed",t.className="directory-list directory-affixed",a=s),a>s&&(e.className="ant-layout-header header header-visible",t.className="directory-list",a=s)),t.style=""}}}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.bindHandleScroll)}},{key:"render",value:function(){var e=this,a=this.state,t=a.articleTree,n=a.scrollTop,l=t.length;if(document.getElementById("tree-num-0")&&l>0){for(var i=[],r=0;r<l;r++){var s=document.getElementById(t[r].name);i.push(s.offsetTop)}for(var o=i.findIndex((function(e){return e>n}))-1,d=0;d<l;d++)document.getElementById("tree-num-".concat(d)).className=d===o?"tree-num directory-item-active":"tree-num";-2===o&&(document.getElementById("tree-num-".concat(l-1)).className="tree-num directory-item-active")}return m.a.createElement("div",{className:"directory"},m.a.createElement("ul",{className:"directory-list"},t.map((function(a,t){return m.a.createElement("li",{key:t,id:"tree-num-".concat(t),className:"tree-num",title:a.name,style:{paddingLeft:"H2"===a.tag?10:22},onClick:function(){e.scrollToAnchor("".concat(a.name))}},a.name)}))))}}]),t}(o.Component));a.a=Object(d.f)(g)},37:function(e,a,t){},58:function(e,a,t){var n={"./apl/apl.js":[59,84],"./asciiarmor/asciiarmor.js":[60,85],"./asn.1/asn.1.js":[61,86],"./asterisk/asterisk.js":[62,87],"./brainfuck/brainfuck.js":[63,88],"./clike/clike.js":[47,5],"./clojure/clojure.js":[64,89],"./cmake/cmake.js":[65,90],"./cobol/cobol.js":[66,91],"./coffeescript/coffeescript.js":[48,92],"./commonlisp/commonlisp.js":[67,93],"./crystal/crystal.js":[68,94],"./css/css.js":[42,3],"./cypher/cypher.js":[69,95],"./d/d.js":[70,96],"./dart/dart.js":[71,5,97],"./diff/diff.js":[72,98],"./django/django.js":[73,2,3,62],"./dockerfile/dockerfile.js":[74,74],"./dtd/dtd.js":[75,99],"./dylan/dylan.js":[76,100],"./ebnf/ebnf.js":[77,101],"./ecl/ecl.js":[78,102],"./eiffel/eiffel.js":[79,103],"./elm/elm.js":[80,104],"./erlang/erlang.js":[81,105],"./factor/factor.js":[82,75],"./fcl/fcl.js":[83,106],"./forth/forth.js":[84,107],"./fortran/fortran.js":[85,108],"./gas/gas.js":[86,109],"./gfm/gfm.js":[87,51,73],"./gherkin/gherkin.js":[88,110],"./go/go.js":[89,111],"./groovy/groovy.js":[90,112],"./haml/haml.js":[91,2,3,65],"./handlebars/handlebars.js":[49,69],"./haskell-literate/haskell-literate.js":[92,78],"./haskell/haskell.js":[50,113],"./haxe/haxe.js":[93,114],"./htmlembedded/htmlembedded.js":[94,2,3,61],"./htmlmixed/htmlmixed.js":[41,2,3,79],"./http/http.js":[95,115],"./idl/idl.js":[96,116],"./javascript/javascript.js":[43,2],"./jinja2/jinja2.js":[97,117],"./jsx/jsx.js":[98,2,80],"./julia/julia.js":[99,118],"./livescript/livescript.js":[100,119],"./lua/lua.js":[101,120],"./markdown/markdown.js":[55,51],"./mathematica/mathematica.js":[102,121],"./mbox/mbox.js":[103,122],"./meta.js":[45],"./mirc/mirc.js":[104,123],"./mllike/mllike.js":[105,124],"./modelica/modelica.js":[106,125],"./mscgen/mscgen.js":[107,126],"./mumps/mumps.js":[108,127],"./nginx/nginx.js":[109,128],"./nsis/nsis.js":[110,76],"./ntriples/ntriples.js":[111,129],"./octave/octave.js":[112,130],"./oz/oz.js":[113,131],"./pascal/pascal.js":[114,132],"./pegjs/pegjs.js":[115,2,133],"./perl/perl.js":[116,134],"./php/php.js":[117,2,3,5,70],"./pig/pig.js":[118,135],"./powershell/powershell.js":[119,136],"./properties/properties.js":[120,137],"./protobuf/protobuf.js":[121,138],"./pug/pug.js":[56,2,3,50],"./puppet/puppet.js":[122,139],"./python/python.js":[51,140],"./q/q.js":[123,141],"./r/r.js":[124,142],"./rpm/rpm.js":[125,143],"./rst/rst.js":[126,64],"./ruby/ruby.js":[44,144],"./rust/rust.js":[127,77],"./sas/sas.js":[128,145],"./sass/sass.js":[53,3,146],"./scheme/scheme.js":[129,147],"./shell/shell.js":[130,148],"./sieve/sieve.js":[131,149],"./slim/slim.js":[132,2,3,66],"./smalltalk/smalltalk.js":[133,150],"./smarty/smarty.js":[134,151],"./solr/solr.js":[135,152],"./soy/soy.js":[136,2,3,71],"./sparql/sparql.js":[137,153],"./spreadsheet/spreadsheet.js":[138,154],"./sql/sql.js":[139,155],"./stex/stex.js":[52,156],"./stylus/stylus.js":[57,52],"./swift/swift.js":[140,157],"./tcl/tcl.js":[141,158],"./textile/textile.js":[142,159],"./tiddlywiki/tiddlywiki.js":[143,160],"./tiki/tiki.js":[144,161],"./toml/toml.js":[145,162],"./tornado/tornado.js":[146,2,3,63],"./troff/troff.js":[147,163],"./ttcn-cfg/ttcn-cfg.js":[149,164],"./ttcn/ttcn.js":[148,165],"./turtle/turtle.js":[150,166],"./twig/twig.js":[151,72],"./vb/vb.js":[152,167],"./vbscript/vbscript.js":[153,168],"./velocity/velocity.js":[154,169],"./verilog/verilog.js":[155,170],"./vhdl/vhdl.js":[156,171],"./vue/vue.js":[157,2,3,52,50,59],"./webidl/webidl.js":[158,172],"./xml/xml.js":[38,173],"./xquery/xquery.js":[159,174],"./yacas/yacas.js":[160,175],"./yaml-frontmatter/yaml-frontmatter.js":[161,81],"./yaml/yaml.js":[54,176],"./z80/z80.js":[162,177]};function l(e){if(!t.o(n,e))return Promise.resolve().then((function(){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}));var a=n[e],l=a[0];return Promise.all(a.slice(1).map(t.e)).then((function(){return t.t(l,7)}))}l.keys=function(){return Object.keys(n)},l.id=58,e.exports=l}}]);
//# sourceMappingURL=21.0af67cf6.chunk.js.map