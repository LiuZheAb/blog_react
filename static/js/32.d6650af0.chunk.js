(this.webpackJsonpblog=this.webpackJsonpblog||[]).push([[32],{38:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var r=a(8),o=a(9),l=a(10),n=a(11),i=a(0),m=a.n(i),s=(a(39),function(e){Object(n.a)(a,e);var t=Object(l.a)(a);function a(e){var o;return Object(r.a)(this,a),(o=t.call(this,e)).bindHandleScroll=function(e){var t=!!e.srcElement&&e.srcElement.documentElement.scrollTop||window.pageYOffset||(e.srcElement?e.srcElement.body.scrollTop:0);o.setState({scrollTop:t})},o.scrollToAnchor=function(e){if(e){var t=document.getElementById(e);t&&t.scrollIntoView()}},o.state={articleTree:o.props.articleTree,scrollTop:null},o}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=document.getElementById("header"),t=window.scrollY,a=document.getElementsByClassName("directory-list")[0],r=a.offsetTop;window.addEventListener("scroll",this.bindHandleScroll),window.onscroll=function(){for(var o=document.getElementsByClassName("page-footer")[0],l=0;o;)l+=o.offsetTop,o=o.offsetParent;var n=document.body.scrollTop||document.documentElement.scrollTop;if((n+=r+a.offsetHeight)>l)a.style="position:fixed;top:".concat(r-n+l-e.offsetHeight,"px;transition:none");else{var i=window.scrollY;a&&(i>e.offsetHeight&&(t<i&&(e.className="ant-layout-header header header-affixed",a.className="directory-list directory-affixed",t=i),t>i&&(e.className="ant-layout-header header header-visible",a.className="directory-list",t=i)),a.style="")}}}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.bindHandleScroll),this.setState({articleTree:this.props.articleTree})}},{key:"render",value:function(){var e=this,t=this.state,a=t.articleTree,r=t.scrollTop,o=a.length;if(document.getElementById("tree-num-0")&&o>0){for(var l=[],n=0;n<o;n++){var i=document.getElementById(a[n].name);l.push(i.offsetTop)}for(var s=l.findIndex((function(e){return e>r}))-1,d=0;d<o;d++)document.getElementById("tree-num-".concat(d)).className=d===s?"tree-num directory-item-active":"tree-num";-2===s&&(document.getElementById("tree-num-".concat(o-1)).className="tree-num directory-item-active")}return m.a.createElement("ul",{className:"directory-list"},a.map((function(t,a){return m.a.createElement("li",{key:a,id:"tree-num-".concat(a),className:"tree-num",style:{paddingLeft:"H2"===t.tag?"10px":"22px"},onClick:function(){e.scrollToAnchor("".concat(t.name))}},t.name)})))}}],[{key:"getDerivedStateFromProps",value:function(e,t){var a=e.articleTree;return a!==t.articleTree?{articleTree:a}:null}}]),a}(i.Component))},39:function(e,t,a){},425:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return u}));var r=a(8),o=a(9),l=a(15),n=a(10),i=a(11),m=a(0),s=a.n(m),d=a(164),c=(a(59),a(38)),p=a(57),g=a.n(p),y=g.a.GraphObject.make,u=function(e){Object(i.a)(a,e);var t=Object(n.a)(a);function a(e){var o;return Object(r.a)(this,a),(o=t.call(this,e)).state={articleTree:[]},o.getArticleTree=o.getArticleTree.bind(Object(l.a)(o)),o}return Object(o.a)(a,[{key:"getArticleTree",value:function(){for(var e=document.getElementsByClassName("article-content")[0].children,t=[],a=0;a<e.length-1;a++){var r=e[a].nodeName;"H2"!==r&&"H3"!==r||(e[a].id=e[a].innerText,t.push({name:e[a].innerText,tag:e[a].nodeName}))}this.setState({articleTree:t})}},{key:"componentDidMount",value:function(){document.title="GoJS\u6559\u7a0b\u2014\u2014GoJS Item Arrays",this.getArticleTree(),this.diagramRender1(),this.diagramRender2(),this.diagramRender3(),this.diagramRender4(),this.diagramRender5(),this.diagramRender6()}},{key:"diagramRender1",value:function(){var e=g.a.GraphObject.make,t=e(g.a.Diagram,"myDiagramDiv1");t.nodeTemplate=e(g.a.Node,"Vertical",new g.a.Binding("itemArray","items")),t.model=new g.a.GraphLinksModel([{key:1,items:["Alpha","Beta","Gamma"]}])}},{key:"diagramRender2",value:function(){var e=y(g.a.Diagram,"myDiagramDiv2");e.nodeTemplate=y(g.a.Node,"Spot",y(g.a.Panel,"Auto",y(g.a.Shape,"RoundedRectangle",{fill:"lightblue"}),y(g.a.TextBlock,{margin:10},new g.a.Binding("text","key")))),e.model=new g.a.GraphLinksModel,e.model.linkFromPortIdProperty="fromPort",e.model.linkToPortIdProperty="toPort",e.model.nodeDataArray=[{key:"Alpha"},{key:"Beta"},{key:"Delta"}]}},{key:"diagramRender3",value:function(){var e=y(g.a.Diagram,"myDiagramDiv3");e.nodeTemplate=y(g.a.Node,"Spot",y(g.a.Panel,"Auto",y(g.a.Shape,"RoundedRectangle",{fill:"lightblue"}),y(g.a.TextBlock,{margin:10},new g.a.Binding("text","key"))),y(g.a.Panel,"Horizontal",{alignment:g.a.Spot.Top},new g.a.Binding("itemArray","ports"),{itemTemplate:y(g.a.Panel,{portId:"",fromSpot:g.a.Spot.Top,toSpot:g.a.Spot.Top,fromLinkable:!0,toLinkable:!0},new g.a.Binding("portId","portID"),y(g.a.Shape,"Ellipse",{desiredSize:new g.a.Size(10,10),fill:"green"},new g.a.Binding("fill","color")))})),e.model=new g.a.GraphLinksModel,e.model.linkFromPortIdProperty="fromPort",e.model.linkToPortIdProperty="toPort",e.model.nodeDataArray=[{key:"Alpha",ports:[{portId:"left",color:"red"},{portId:"middle",color:"yellow"},{portId:"right",color:"green"},{portId:"farright",color:"pink"}]},{key:"Beta",ports:[{portId:"left",color:"purple"}]},{key:"Delta"}]}},{key:"diagramRender4",value:function(){var e=y(g.a.Diagram,"myDiagramDiv4");e.nodeTemplate=y(g.a.Node,"Spot",y(g.a.Panel,"Auto",y(g.a.Shape,"RoundedRectangle",{fill:"lightblue"}),y(g.a.TextBlock,{margin:10},new g.a.Binding("text","key"))),y(g.a.Panel,"Horizontal",{alignment:g.a.Spot.Top},new g.a.Binding("itemArray","ports"),{itemTemplate:y(g.a.Panel,{portId:"",fromSpot:g.a.Spot.Top,toSpot:g.a.Spot.Top,fromLinkable:!0,toLinkable:!0},new g.a.Binding("portId","portID"),y(g.a.Shape,"Ellipse",{desiredSize:new g.a.Size(10,10),fill:"green"},new g.a.Binding("fill","color")))})),e.model=new g.a.GraphLinksModel,e.model.linkFromPortIdProperty="fromPort",e.model.linkToPortIdProperty="toPort",e.model.nodeDataArray=[{key:"Alpha",ports:[{portId:"left",color:"red"},{portId:"middle",color:"yellow"},{portId:"right",color:"green"},{portId:"farright",color:"pink"}]},{key:"Beta",ports:[{portId:"left",color:"purple"}]},{key:"Delta"}];var t=e.findNodeForKey("Alpha");e.model.removeArrayItem(t.data.ports,0)}},{key:"diagramRender5",value:function(){var e=y(g.a.Diagram,"myDiagramDiv5");e.nodeTemplate=y(g.a.Node,"Spot",y(g.a.Panel,"Auto",y(g.a.Shape,"RoundedRectangle",{fill:"lightblue"}),y(g.a.TextBlock,{margin:10},new g.a.Binding("text","key"))),y(g.a.Panel,"Horizontal",{alignment:g.a.Spot.Top},new g.a.Binding("itemArray","ports"),{itemTemplate:y(g.a.Panel,{portId:"",fromSpot:g.a.Spot.Top,toSpot:g.a.Spot.Top,fromLinkable:!0,toLinkable:!0},new g.a.Binding("portId","portID"),y(g.a.Shape,"Ellipse",{desiredSize:new g.a.Size(10,10),fill:"green"},new g.a.Binding("fill","color")))})),e.model=new g.a.GraphLinksModel,e.model.linkFromPortIdProperty="fromPort",e.model.linkToPortIdProperty="toPort",e.model.nodeDataArray=[{key:"Alpha",ports:[{portId:"left",color:"red"},{portId:"middle",color:"yellow"},{portId:"right",color:"green"},{portId:"farright",color:"pink"}]},{key:"Beta",ports:[{portId:"left",color:"purple"}]},{key:"Delta"}];var t=e.findNodeForKey("Alpha");e.model.removeArrayItem(t.data.ports,0),e.model.addArrayItem(t.data.ports,{portID:"right2",color:"white"})}},{key:"diagramRender6",value:function(){var e=y(g.a.Diagram,"myDiagramDiv6");e.nodeTemplate=y(g.a.Node,"Spot",y(g.a.Panel,"Auto",y(g.a.Shape,"RoundedRectangle",{fill:"lightblue"}),y(g.a.TextBlock,{margin:10},new g.a.Binding("text","key"))),y(g.a.Panel,"Horizontal",{alignment:g.a.Spot.Top},new g.a.Binding("itemArray","ports"),{itemTemplate:y(g.a.Panel,{portId:"",fromSpot:g.a.Spot.Top,toSpot:g.a.Spot.Top,fromLinkable:!0,toLinkable:!0},new g.a.Binding("portId","portID"),y(g.a.Shape,"Ellipse",{desiredSize:new g.a.Size(10,10),fill:"green"},new g.a.Binding("fill","color")))})),e.model=new g.a.GraphLinksModel,e.model.linkFromPortIdProperty="fromPort",e.model.linkToPortIdProperty="toPort",e.model.nodeDataArray=[{key:"Alpha",ports:[{portId:"left",color:"red"},{portId:"middle",color:"yellow"},{portId:"right",color:"green"},{portId:"farright",color:"pink"}]},{key:"Beta",ports:[{portId:"left",color:"purple"}]},{key:"Delta"}];var t=e.findNodeForKey("Alpha");e.model.removeArrayItem(t.data.ports,0),e.model.addArrayItem(t.data.ports,{portID:"right2",color:"white"}),e.model.insertArrayItem(t.data.ports,1,{portID:"middleleft",color:"pink"})}},{key:"render",value:function(){return s.a.createElement("div",{className:"page-content"},s.a.createElement("div",{className:"article"},s.a.createElement("div",{className:"article-title"},s.a.createElement("h1",null,"GoJS Item Arrays")),s.a.createElement("div",{className:"article-content"},s.a.createElement("h2",null,"Item Arrays\u6982\u8ff0"),s.a.createElement("ul",null,s.a.createElement("li",null,"\u5141\u8bb8\u5728\u4e00\u4e2aNode\u4e2d\u663e\u793a\u53ef\u53d8\u6570\u91cf\u7684\u5143\u7d20"),s.a.createElement("li",null,"\u901a\u8fc7\u8bbe\u7f6ePanel.itemArray\u5b9e\u73b0\uff0c\u901a\u5e38\u901a\u8fc7\u6570\u636e\u7ed1\u5b9a")),s.a.createElement("ul",{"data-lake-indent":"1"},s.a.createElement("li",null,"Panel\u5c06\u5305\u542b\u4e0e\u7ed1\u5b9aArray\u4e2d\u7684\u503c\u76f8\u540c\u591a\u7684\u5143\u7d20")),s.a.createElement(d.a,{value:'let $ = go.GraphObject.make;\nlet myDiagram = $(go.Diagram, "myDiagramDiv");\n\nmyDiagram.nodeTemplate =\n    $(go.Node, "Vertical", new go.Binding("itemArray", "items"));\n\nmyDiagram.model = new go.GraphLinksModel(\n    [{\n        key: 1,\n        items: ["Alpha", "Beta", "Gamma"]\n    }, ]\n);',options:{theme:"monokai",mode:"JSX",readOnly:!0}}),s.a.createElement("div",{id:"myDiagramDiv1",className:"diagram"}),s.a.createElement("h2",null,"Item\u6a21\u677f"),s.a.createElement("ul",null,s.a.createElement("li",null,"\u7528\u4e8e\u5b9a\u4e49\u9879item array\u4e2d\u6bcf\u4e2aitem\u7684\u5916\u89c2"),s.a.createElement("li",null,"\u5fc5\u987b\u662f\u4e00\u4e2aPanel")),s.a.createElement("ul",{"data-lake-indent":"1"},s.a.createElement("li",null,"Panel.data\u5c06\u662f\u6b64\u5143\u7d20item array\u4e2d\u7684\u9879")),s.a.createElement(d.a,{value:'myDiagram.nodeTemplate =\n    $(go.Node, "Spot",\n        $(go.Panel, "Auto",\n            $(go.Shape, "RoundedRectangle", {\n                fill: "lightblue"\n            }),\n            $(go.TextBlock, {\n                margin: 10\n            }, new go.Binding("text", "key"))\n        )\n    );\n\nmyDiagram.model = new go.GraphLinksModel();\nmyDiagram.model.linkFromPortIdProperty = "fromPort";\nmyDiagram.model.linkToPortIdProperty = "toPort";\nmyDiagram.model.nodeDataArray = [{\n        key: "Alpha"\n    }, {\n        key: "Beta"\n    }, {\n        key: "Delta"\n    }, ]',options:{theme:"monokai",mode:"JSX",readOnly:!0}}),s.a.createElement("div",{id:"myDiagramDiv2",className:"diagram"}),s.a.createElement(d.a,{value:'myDiagram.nodeTemplate =\n    $(go.Node, "Spot",\n        $(go.Panel, "Auto",\n            $(go.Shape, "RoundedRectangle", {\n                fill: "lightblue"\n            }),\n            $(go.TextBlock, {\n                margin: 10\n            }, new go.Binding("text", "key"))\n        ),\n        $(go.Panel, "Horizontal", {\n            alignment: go.Spot.Top\n        },\n            new go.Binding("itemArray", "ports"), {\n                itemTemplate: $(go.Panel, {\n                        portId: "",\n                        fromSpot: go.Spot.Top,\n                        toSpot: go.Spot.Top,\n                        fromLinkable: true,\n                        toLinkable: true\n                    }, new go.Binding("portId", "portID"),\n                    $(go.Shape, "Ellipse", {\n                            desiredSize: new go.Size(10, 10),\n                            fill: "green"\n                        },\n                        new go.Binding("fill", "color")\n                    ))\n            }\n        )\n    );\n\nmyDiagram.model = new go.GraphLinksModel();\nmyDiagram.model.linkFromPortIdProperty = "fromPort";\nmyDiagram.model.linkToPortIdProperty = "toPort";\nmyDiagram.model.nodeDataArray = [{\n    key: "Alpha",\n    ports: [{\n        portId: "left",\n        color: "red"\n    }, {\n        portId: "middle",\n        color: "yellow"\n    }, {\n        portId: "right",\n        color: "green"\n    }, {\n        portId: "farright",\n        color: "pink"\n    }]\n}, {\n    key: "Beta",\n    ports: [{\n        portId: "left",\n        color: "purple"\n    }]\n}, {\n    key: "Delta"\n}, ]',options:{theme:"monokai",mode:"JSX",readOnly:!0}}),s.a.createElement("div",{id:"myDiagramDiv3",className:"diagram"}),s.a.createElement("p",null,"\u8981\u52a8\u6001\u66f4\u65b0\u9879\u76ee\u6570\u7ec4\uff0c\u8bf7\u4f7f\u7528\u7279\u5b9a\u7684\u6a21\u578b\u65b9\u6cd5:"),s.a.createElement("ul",null,s.a.createElement("li",null,"addArrayItem"),s.a.createElement("li",null,"removeArrayItem"),s.a.createElement("li",null,"insertArrayItem")),s.a.createElement("h3",null,"removeArrayItem(array,index)"),s.a.createElement("p",null,"index\u4e3aitem\u5728\u6570\u7ec4\u4e2d\u7684\u5e8f\u53f7"),s.a.createElement(d.a,{value:'let alphaNode = myDiagram.findNodeForKey("Alpha");\nmyDiagram.model.removeArrayItem(alphaNode.data.ports, 0);',options:{theme:"monokai",mode:"JSX",readOnly:!0}}),s.a.createElement("div",{id:"myDiagramDiv4",className:"diagram"}),s.a.createElement("h3",null,"addArrayItem(array,value)"),s.a.createElement(d.a,{value:'myDiagram.model.addArrayItem(alphaNode.data.ports, {\n    portID: "right2",\n    color: "white"\n});',options:{theme:"monokai",mode:"JSX",readOnly:!0}}),s.a.createElement("div",{id:"myDiagramDiv5",className:"diagram"}),s.a.createElement("h3",null,"insertArrayItem(array,index,value)"),s.a.createElement("p",null,"index\u4e3a\u63d2\u5165item\u540e\u5728\u6570\u7ec4\u4e2d\u7684\u5e8f\u53f7"),s.a.createElement(d.a,{value:'myDiagram.model.insertArrayItem(alphaNode.data.ports, 1,{\n    portID: "middleleft",\n    color: "pink"\n});',options:{theme:"monokai",mode:"JSX",readOnly:!0}}),s.a.createElement("div",{id:"myDiagramDiv6",className:"diagram"}),s.a.createElement("p",null,s.a.createElement("br",null)),s.a.createElement("p",null,s.a.createElement("br",null)),s.a.createElement("p",null,"\u76f8\u5173\u4ee3\u7801\uff1a"),s.a.createElement("p",null,s.a.createElement("a",{href:"https://github.com/LiuZheAb/GoJS_Demo/blob/master/20gojsItemArrays.html",target:"_blank",rel:"noopener noreferrer"},"https://github.com/LiuZheAb/GoJS_Demo/blob/master/20gojsItemArrays.html")))),s.a.createElement("div",{className:"directory"},s.a.createElement(c.a,{articleTree:this.state.articleTree})))}}]),a}(m.Component)},58:function(e,t,a){var r={"./apl/apl.js":[60,56],"./asciiarmor/asciiarmor.js":[61,57],"./asn.1/asn.1.js":[62,58],"./asterisk/asterisk.js":[63,59],"./brainfuck/brainfuck.js":[64,60],"./clike/clike.js":[46,3],"./clojure/clojure.js":[65,61],"./cmake/cmake.js":[66,62],"./cobol/cobol.js":[67,63],"./coffeescript/coffeescript.js":[47,64],"./commonlisp/commonlisp.js":[68,65],"./crystal/crystal.js":[69,66],"./css/css.js":[42,2],"./cypher/cypher.js":[70,67],"./d/d.js":[71,68],"./dart/dart.js":[72,3,69],"./diff/diff.js":[73,70],"./django/django.js":[74,1,2,35],"./dockerfile/dockerfile.js":[75,48],"./dtd/dtd.js":[76,71],"./dylan/dylan.js":[77,72],"./ebnf/ebnf.js":[78,73],"./ecl/ecl.js":[79,74],"./eiffel/eiffel.js":[80,75],"./elm/elm.js":[81,76],"./erlang/erlang.js":[82,77],"./factor/factor.js":[83,49],"./fcl/fcl.js":[84,78],"./forth/forth.js":[85,79],"./fortran/fortran.js":[86,80],"./gas/gas.js":[87,81],"./gfm/gfm.js":[88,5,47],"./gherkin/gherkin.js":[89,82],"./go/go.js":[90,83],"./groovy/groovy.js":[91,84],"./haml/haml.js":[92,1,2,38],"./handlebars/handlebars.js":[48,43],"./haskell-literate/haskell-literate.js":[93,52],"./haskell/haskell.js":[49,85],"./haxe/haxe.js":[94,86],"./htmlembedded/htmlembedded.js":[95,1,2,34],"./htmlmixed/htmlmixed.js":[40,1,2,53],"./http/http.js":[96,87],"./idl/idl.js":[97,88],"./javascript/javascript.js":[43,1],"./jinja2/jinja2.js":[98,89],"./jsx/jsx.js":[99,1,54],"./julia/julia.js":[100,90],"./livescript/livescript.js":[101,91],"./lua/lua.js":[102,92],"./markdown/markdown.js":[54,5],"./mathematica/mathematica.js":[103,93],"./mbox/mbox.js":[104,94],"./meta.js":[45],"./mirc/mirc.js":[105,95],"./mllike/mllike.js":[106,96],"./modelica/modelica.js":[107,97],"./mscgen/mscgen.js":[108,98],"./mumps/mumps.js":[109,99],"./nginx/nginx.js":[110,100],"./nsis/nsis.js":[111,50],"./ntriples/ntriples.js":[112,101],"./octave/octave.js":[113,102],"./oz/oz.js":[114,103],"./pascal/pascal.js":[115,104],"./pegjs/pegjs.js":[116,1,105],"./perl/perl.js":[117,106],"./php/php.js":[118,1,2,3,44],"./pig/pig.js":[119,107],"./powershell/powershell.js":[120,108],"./properties/properties.js":[121,109],"./protobuf/protobuf.js":[122,110],"./pug/pug.js":[55,1,2,4],"./puppet/puppet.js":[123,111],"./python/python.js":[50,112],"./q/q.js":[124,113],"./r/r.js":[125,114],"./rpm/rpm.js":[126,115],"./rst/rst.js":[127,37],"./ruby/ruby.js":[44,116],"./rust/rust.js":[128,51],"./sas/sas.js":[129,117],"./sass/sass.js":[52,2,118],"./scheme/scheme.js":[130,119],"./shell/shell.js":[131,120],"./sieve/sieve.js":[132,121],"./slim/slim.js":[133,1,2,39],"./smalltalk/smalltalk.js":[134,122],"./smarty/smarty.js":[135,123],"./solr/solr.js":[136,124],"./soy/soy.js":[137,1,2,45],"./sparql/sparql.js":[138,125],"./spreadsheet/spreadsheet.js":[139,126],"./sql/sql.js":[140,127],"./stex/stex.js":[51,128],"./stylus/stylus.js":[56,6],"./swift/swift.js":[141,129],"./tcl/tcl.js":[142,130],"./textile/textile.js":[143,131],"./tiddlywiki/tiddlywiki.js":[144,132],"./tiki/tiki.js":[145,133],"./toml/toml.js":[146,134],"./tornado/tornado.js":[147,1,2,36],"./troff/troff.js":[148,135],"./ttcn-cfg/ttcn-cfg.js":[150,136],"./ttcn/ttcn.js":[149,137],"./turtle/turtle.js":[151,138],"./twig/twig.js":[152,46],"./vb/vb.js":[153,139],"./vbscript/vbscript.js":[154,140],"./velocity/velocity.js":[155,141],"./verilog/verilog.js":[156,142],"./vhdl/vhdl.js":[157,143],"./vue/vue.js":[158,1,2,6,4,12],"./webidl/webidl.js":[159,144],"./xml/xml.js":[37,145],"./xquery/xquery.js":[160,146],"./yacas/yacas.js":[161,147],"./yaml-frontmatter/yaml-frontmatter.js":[162,55],"./yaml/yaml.js":[53,148],"./z80/z80.js":[163,149]};function o(e){if(!a.o(r,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],o=t[0];return Promise.all(t.slice(1).map(a.e)).then((function(){return a.t(o,7)}))}o.keys=function(){return Object.keys(r)},o.id=58,e.exports=o}}]);
//# sourceMappingURL=32.d6650af0.chunk.js.map