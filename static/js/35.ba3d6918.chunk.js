(this.webpackJsonpblog=this.webpackJsonpblog||[]).push([[35],{37:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var r=a(11),o=a(12),l=a(13),n=a(14),i=a(0),m=a.n(i),s=(a(38),function(e){Object(n.a)(a,e);var t=Object(l.a)(a);function a(e){var o;return Object(r.a)(this,a),(o=t.call(this,e)).bindHandleScroll=function(e){var t=!!e.srcElement&&e.srcElement.documentElement.scrollTop||window.pageYOffset||(e.srcElement?e.srcElement.body.scrollTop:0);o.setState({scrollTop:t})},o.scrollToAnchor=function(e){if(e){var t=document.getElementById(e);t&&t.scrollIntoView({block:"start",behavior:"smooth"})}},o.state={articleTree:o.props.articleTree,scrollTop:null},o}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=document.getElementById("header"),t=window.scrollY,a=document.getElementsByClassName("directory-list")[0],r=a.offsetTop;window.addEventListener("scroll",this.bindHandleScroll),window.onscroll=function(){for(var o=document.getElementsByClassName("page-footer")[0],l=0;o;)l+=o.offsetTop,o=o.offsetParent;var n=document.body.scrollTop||document.documentElement.scrollTop;if((n+=r+a.offsetHeight)>l+e.offsetHeight)a.style="position:fixed;top:".concat(r-n+l,"px;transition:none");else{var i=window.scrollY;i>e.offsetHeight&&(t<i&&(e.className="ant-layout-header header header-affixed",a.className="directory-list directory-affixed",t=i),t>i&&(e.className="ant-layout-header header header-visible",a.className="directory-list",t=i)),a.style=""}}}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.bindHandleScroll)}},{key:"render",value:function(){var e=this,t=this.state,a=t.articleTree,r=t.scrollTop,o=a.length;if(document.getElementById("tree-num-0")&&o>0){for(var l=[],n=0;n<o;n++){var i=document.getElementById(a[n].name);l.push(i.offsetTop)}for(var s=l.findIndex((function(e){return e>r}))-1,d=0;d<o;d++)document.getElementById("tree-num-".concat(d)).className=d===s?"tree-num directory-item-active":"tree-num";-2===s&&(document.getElementById("tree-num-".concat(o-1)).className="tree-num directory-item-active")}return m.a.createElement("ul",{className:"directory-list"},a.map((function(t,a){return m.a.createElement("li",{key:a,id:"tree-num-".concat(a),className:"tree-num",title:t.name,style:{paddingLeft:"H2"===t.tag?10:22},onClick:function(){e.scrollToAnchor("".concat(t.name))}},t.name)})))}}],[{key:"getDerivedStateFromProps",value:function(e,t){var a=e.articleTree;return a!==t.articleTree?{articleTree:a}:null}}]),a}(i.Component))},38:function(e,t,a){},41:function(e,t,a){},469:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return u}));var r=a(11),o=a(12),l=a(15),n=a(13),i=a(14),m=a(0),s=a.n(m),d=a(164),c=(a(41),a(37)),p=a(165),g=a.n(p),y=g.a.GraphObject.make,u=function(e){Object(i.a)(a,e);var t=Object(n.a)(a);function a(e){var o;return Object(r.a)(this,a),(o=t.call(this,e)).state={articleTree:[]},o.getArticleTree=o.getArticleTree.bind(Object(l.a)(o)),o}return Object(o.a)(a,[{key:"getArticleTree",value:function(){for(var e=document.getElementsByClassName("article-content")[0].children,t=[],a=0;a<e.length-1;a++){var r=e[a].nodeName;"H2"!==r&&"H3"!==r||(e[a].id=e[a].innerText,t.push({name:e[a].innerText,tag:e[a].nodeName}))}this.setState({articleTree:t})}},{key:"componentDidMount",value:function(){document.title="GoJS\u6559\u7a0b\u2014\u2014GoJS Item Arrays",this.getArticleTree(),this.diagramRender1(),this.diagramRender2(),this.diagramRender3(),this.diagramRender4(),this.diagramRender5(),this.diagramRender6()}},{key:"diagramRender1",value:function(){var e=g.a.GraphObject.make,t=e(g.a.Diagram,"myDiagramDiv1");t.nodeTemplate=e(g.a.Node,"Vertical",new g.a.Binding("itemArray","items")),t.model=new g.a.GraphLinksModel([{key:1,items:["Alpha","Beta","Gamma"]}])}},{key:"diagramRender2",value:function(){var e=y(g.a.Diagram,"myDiagramDiv2");e.nodeTemplate=y(g.a.Node,"Spot",y(g.a.Panel,"Auto",y(g.a.Shape,"RoundedRectangle",{fill:"lightblue"}),y(g.a.TextBlock,{margin:10},new g.a.Binding("text","key")))),e.model=new g.a.GraphLinksModel,e.model.linkFromPortIdProperty="fromPort",e.model.linkToPortIdProperty="toPort",e.model.nodeDataArray=[{key:"Alpha"},{key:"Beta"},{key:"Delta"}]}},{key:"diagramRender3",value:function(){var e=y(g.a.Diagram,"myDiagramDiv3");e.nodeTemplate=y(g.a.Node,"Spot",y(g.a.Panel,"Auto",y(g.a.Shape,"RoundedRectangle",{fill:"lightblue"}),y(g.a.TextBlock,{margin:10},new g.a.Binding("text","key"))),y(g.a.Panel,"Horizontal",{alignment:g.a.Spot.Top},new g.a.Binding("itemArray","ports"),{itemTemplate:y(g.a.Panel,{portId:"",fromSpot:g.a.Spot.Top,toSpot:g.a.Spot.Top,fromLinkable:!0,toLinkable:!0},new g.a.Binding("portId","portID"),y(g.a.Shape,"Ellipse",{desiredSize:new g.a.Size(10,10),fill:"green"},new g.a.Binding("fill","color")))})),e.model=new g.a.GraphLinksModel,e.model.linkFromPortIdProperty="fromPort",e.model.linkToPortIdProperty="toPort",e.model.nodeDataArray=[{key:"Alpha",ports:[{portId:"left",color:"red"},{portId:"middle",color:"yellow"},{portId:"right",color:"green"},{portId:"farright",color:"pink"}]},{key:"Beta",ports:[{portId:"left",color:"purple"}]},{key:"Delta"}]}},{key:"diagramRender4",value:function(){var e=y(g.a.Diagram,"myDiagramDiv4");e.nodeTemplate=y(g.a.Node,"Spot",y(g.a.Panel,"Auto",y(g.a.Shape,"RoundedRectangle",{fill:"lightblue"}),y(g.a.TextBlock,{margin:10},new g.a.Binding("text","key"))),y(g.a.Panel,"Horizontal",{alignment:g.a.Spot.Top},new g.a.Binding("itemArray","ports"),{itemTemplate:y(g.a.Panel,{portId:"",fromSpot:g.a.Spot.Top,toSpot:g.a.Spot.Top,fromLinkable:!0,toLinkable:!0},new g.a.Binding("portId","portID"),y(g.a.Shape,"Ellipse",{desiredSize:new g.a.Size(10,10),fill:"green"},new g.a.Binding("fill","color")))})),e.model=new g.a.GraphLinksModel,e.model.linkFromPortIdProperty="fromPort",e.model.linkToPortIdProperty="toPort",e.model.nodeDataArray=[{key:"Alpha",ports:[{portId:"left",color:"red"},{portId:"middle",color:"yellow"},{portId:"right",color:"green"},{portId:"farright",color:"pink"}]},{key:"Beta",ports:[{portId:"left",color:"purple"}]},{key:"Delta"}];var t=e.findNodeForKey("Alpha");e.model.removeArrayItem(t.data.ports,0)}},{key:"diagramRender5",value:function(){var e=y(g.a.Diagram,"myDiagramDiv5");e.nodeTemplate=y(g.a.Node,"Spot",y(g.a.Panel,"Auto",y(g.a.Shape,"RoundedRectangle",{fill:"lightblue"}),y(g.a.TextBlock,{margin:10},new g.a.Binding("text","key"))),y(g.a.Panel,"Horizontal",{alignment:g.a.Spot.Top},new g.a.Binding("itemArray","ports"),{itemTemplate:y(g.a.Panel,{portId:"",fromSpot:g.a.Spot.Top,toSpot:g.a.Spot.Top,fromLinkable:!0,toLinkable:!0},new g.a.Binding("portId","portID"),y(g.a.Shape,"Ellipse",{desiredSize:new g.a.Size(10,10),fill:"green"},new g.a.Binding("fill","color")))})),e.model=new g.a.GraphLinksModel,e.model.linkFromPortIdProperty="fromPort",e.model.linkToPortIdProperty="toPort",e.model.nodeDataArray=[{key:"Alpha",ports:[{portId:"left",color:"red"},{portId:"middle",color:"yellow"},{portId:"right",color:"green"},{portId:"farright",color:"pink"}]},{key:"Beta",ports:[{portId:"left",color:"purple"}]},{key:"Delta"}];var t=e.findNodeForKey("Alpha");e.model.removeArrayItem(t.data.ports,0),e.model.addArrayItem(t.data.ports,{portID:"right2",color:"white"})}},{key:"diagramRender6",value:function(){var e=y(g.a.Diagram,"myDiagramDiv6");e.nodeTemplate=y(g.a.Node,"Spot",y(g.a.Panel,"Auto",y(g.a.Shape,"RoundedRectangle",{fill:"lightblue"}),y(g.a.TextBlock,{margin:10},new g.a.Binding("text","key"))),y(g.a.Panel,"Horizontal",{alignment:g.a.Spot.Top},new g.a.Binding("itemArray","ports"),{itemTemplate:y(g.a.Panel,{portId:"",fromSpot:g.a.Spot.Top,toSpot:g.a.Spot.Top,fromLinkable:!0,toLinkable:!0},new g.a.Binding("portId","portID"),y(g.a.Shape,"Ellipse",{desiredSize:new g.a.Size(10,10),fill:"green"},new g.a.Binding("fill","color")))})),e.model=new g.a.GraphLinksModel,e.model.linkFromPortIdProperty="fromPort",e.model.linkToPortIdProperty="toPort",e.model.nodeDataArray=[{key:"Alpha",ports:[{portId:"left",color:"red"},{portId:"middle",color:"yellow"},{portId:"right",color:"green"},{portId:"farright",color:"pink"}]},{key:"Beta",ports:[{portId:"left",color:"purple"}]},{key:"Delta"}];var t=e.findNodeForKey("Alpha");e.model.removeArrayItem(t.data.ports,0),e.model.addArrayItem(t.data.ports,{portID:"right2",color:"white"}),e.model.insertArrayItem(t.data.ports,1,{portID:"middleleft",color:"pink"})}},{key:"render",value:function(){return s.a.createElement("div",{className:"page-content"},s.a.createElement("div",{className:"article"},s.a.createElement("div",{className:"article-title"},s.a.createElement("h1",null,"GoJS Item Arrays")),s.a.createElement("div",{className:"article-content"},s.a.createElement("h2",null,"Item Arrays\u6982\u8ff0"),s.a.createElement("ul",null,s.a.createElement("li",null,"\u5141\u8bb8\u5728\u4e00\u4e2aNode\u4e2d\u663e\u793a\u53ef\u53d8\u6570\u91cf\u7684\u5143\u7d20"),s.a.createElement("li",null,"\u901a\u8fc7\u8bbe\u7f6ePanel.itemArray\u5b9e\u73b0\uff0c\u901a\u5e38\u901a\u8fc7\u6570\u636e\u7ed1\u5b9a")),s.a.createElement("ul",{"data-lake-indent":"1"},s.a.createElement("li",null,"Panel\u5c06\u5305\u542b\u4e0e\u7ed1\u5b9aArray\u4e2d\u7684\u503c\u76f8\u540c\u591a\u7684\u5143\u7d20")),s.a.createElement(d.a,{value:'let $ = go.GraphObject.make;\nlet myDiagram = $(go.Diagram, "myDiagramDiv");\n\nmyDiagram.nodeTemplate =\n    $(go.Node, "Vertical", new go.Binding("itemArray", "items"));\n\nmyDiagram.model = new go.GraphLinksModel(\n    [{\n        key: 1,\n        items: ["Alpha", "Beta", "Gamma"]\n    }, ]\n);',options:{theme:"monokai",mode:"JSX",readOnly:!0}}),s.a.createElement("div",{id:"myDiagramDiv1",className:"diagram"}),s.a.createElement("h2",null,"Item\u6a21\u677f"),s.a.createElement("ul",null,s.a.createElement("li",null,"\u7528\u4e8e\u5b9a\u4e49\u9879item array\u4e2d\u6bcf\u4e2aitem\u7684\u5916\u89c2"),s.a.createElement("li",null,"\u5fc5\u987b\u662f\u4e00\u4e2aPanel")),s.a.createElement("ul",{"data-lake-indent":"1"},s.a.createElement("li",null,"Panel.data\u5c06\u662f\u6b64\u5143\u7d20item array\u4e2d\u7684\u9879")),s.a.createElement(d.a,{value:'myDiagram.nodeTemplate =\n    $(go.Node, "Spot",\n        $(go.Panel, "Auto",\n            $(go.Shape, "RoundedRectangle", {\n                fill: "lightblue"\n            }),\n            $(go.TextBlock, {\n                margin: 10\n            }, new go.Binding("text", "key"))\n        )\n    );\n\nmyDiagram.model = new go.GraphLinksModel();\nmyDiagram.model.linkFromPortIdProperty = "fromPort";\nmyDiagram.model.linkToPortIdProperty = "toPort";\nmyDiagram.model.nodeDataArray = [{\n        key: "Alpha"\n    }, {\n        key: "Beta"\n    }, {\n        key: "Delta"\n    }, ]',options:{theme:"monokai",mode:"JSX",readOnly:!0}}),s.a.createElement("div",{id:"myDiagramDiv2",className:"diagram"}),s.a.createElement(d.a,{value:'myDiagram.nodeTemplate =\n    $(go.Node, "Spot",\n        $(go.Panel, "Auto",\n            $(go.Shape, "RoundedRectangle", {\n                fill: "lightblue"\n            }),\n            $(go.TextBlock, {\n                margin: 10\n            }, new go.Binding("text", "key"))\n        ),\n        $(go.Panel, "Horizontal", {\n            alignment: go.Spot.Top\n        },\n            new go.Binding("itemArray", "ports"), {\n                itemTemplate: $(go.Panel, {\n                        portId: "",\n                        fromSpot: go.Spot.Top,\n                        toSpot: go.Spot.Top,\n                        fromLinkable: true,\n                        toLinkable: true\n                    }, new go.Binding("portId", "portID"),\n                    $(go.Shape, "Ellipse", {\n                            desiredSize: new go.Size(10, 10),\n                            fill: "green"\n                        },\n                        new go.Binding("fill", "color")\n                    ))\n            }\n        )\n    );\n\nmyDiagram.model = new go.GraphLinksModel();\nmyDiagram.model.linkFromPortIdProperty = "fromPort";\nmyDiagram.model.linkToPortIdProperty = "toPort";\nmyDiagram.model.nodeDataArray = [{\n    key: "Alpha",\n    ports: [{\n        portId: "left",\n        color: "red"\n    }, {\n        portId: "middle",\n        color: "yellow"\n    }, {\n        portId: "right",\n        color: "green"\n    }, {\n        portId: "farright",\n        color: "pink"\n    }]\n}, {\n    key: "Beta",\n    ports: [{\n        portId: "left",\n        color: "purple"\n    }]\n}, {\n    key: "Delta"\n}, ]',options:{theme:"monokai",mode:"JSX",readOnly:!0}}),s.a.createElement("div",{id:"myDiagramDiv3",className:"diagram"}),s.a.createElement("p",null,"\u8981\u52a8\u6001\u66f4\u65b0\u9879\u76ee\u6570\u7ec4\uff0c\u8bf7\u4f7f\u7528\u7279\u5b9a\u7684\u6a21\u578b\u65b9\u6cd5:"),s.a.createElement("ul",null,s.a.createElement("li",null,"addArrayItem"),s.a.createElement("li",null,"removeArrayItem"),s.a.createElement("li",null,"insertArrayItem")),s.a.createElement("h3",null,"removeArrayItem(array,index)"),s.a.createElement("p",null,"index\u4e3aitem\u5728\u6570\u7ec4\u4e2d\u7684\u5e8f\u53f7"),s.a.createElement(d.a,{value:'let alphaNode = myDiagram.findNodeForKey("Alpha");\nmyDiagram.model.removeArrayItem(alphaNode.data.ports, 0);',options:{theme:"monokai",mode:"JSX",readOnly:!0}}),s.a.createElement("div",{id:"myDiagramDiv4",className:"diagram"}),s.a.createElement("h3",null,"addArrayItem(array,value)"),s.a.createElement(d.a,{value:'myDiagram.model.addArrayItem(alphaNode.data.ports, {\n    portID: "right2",\n    color: "white"\n});',options:{theme:"monokai",mode:"JSX",readOnly:!0}}),s.a.createElement("div",{id:"myDiagramDiv5",className:"diagram"}),s.a.createElement("h3",null,"insertArrayItem(array,index,value)"),s.a.createElement("p",null,"index\u4e3a\u63d2\u5165item\u540e\u5728\u6570\u7ec4\u4e2d\u7684\u5e8f\u53f7"),s.a.createElement(d.a,{value:'myDiagram.model.insertArrayItem(alphaNode.data.ports, 1,{\n    portID: "middleleft",\n    color: "pink"\n});',options:{theme:"monokai",mode:"JSX",readOnly:!0}}),s.a.createElement("div",{id:"myDiagramDiv6",className:"diagram"}),s.a.createElement("p",null,s.a.createElement("br",null)),s.a.createElement("p",null,s.a.createElement("br",null)),s.a.createElement("p",null,"\u76f8\u5173\u4ee3\u7801\uff1a"),s.a.createElement("p",null,s.a.createElement("a",{href:"https://github.com/LiuZheAb/GoJS_Demo/blob/master/20gojsItemArrays.html",target:"_blank",rel:"noopener noreferrer"},"https://github.com/LiuZheAb/GoJS_Demo/blob/master/20gojsItemArrays.html")))),s.a.createElement("div",{className:"directory"},s.a.createElement(c.a,{articleTree:this.state.articleTree})))}}]),a}(m.Component)},59:function(e,t,a){var r={"./apl/apl.js":[60,78],"./asciiarmor/asciiarmor.js":[61,79],"./asn.1/asn.1.js":[62,80],"./asterisk/asterisk.js":[63,81],"./brainfuck/brainfuck.js":[64,82],"./clike/clike.js":[47,4],"./clojure/clojure.js":[65,83],"./cmake/cmake.js":[66,84],"./cobol/cobol.js":[67,85],"./coffeescript/coffeescript.js":[48,86],"./commonlisp/commonlisp.js":[68,87],"./crystal/crystal.js":[69,88],"./css/css.js":[43,3],"./cypher/cypher.js":[70,89],"./d/d.js":[71,90],"./dart/dart.js":[72,4,91],"./diff/diff.js":[73,92],"./django/django.js":[74,2,3,54],"./dockerfile/dockerfile.js":[75,65],"./dtd/dtd.js":[76,93],"./dylan/dylan.js":[77,94],"./ebnf/ebnf.js":[78,95],"./ecl/ecl.js":[79,96],"./eiffel/eiffel.js":[80,97],"./elm/elm.js":[81,98],"./erlang/erlang.js":[82,99],"./factor/factor.js":[83,66],"./fcl/fcl.js":[84,100],"./forth/forth.js":[85,101],"./fortran/fortran.js":[86,102],"./gas/gas.js":[87,103],"./gfm/gfm.js":[88,6,64],"./gherkin/gherkin.js":[89,104],"./go/go.js":[90,105],"./groovy/groovy.js":[91,106],"./haml/haml.js":[92,2,3,57],"./handlebars/handlebars.js":[49,60],"./haskell-literate/haskell-literate.js":[93,69],"./haskell/haskell.js":[50,107],"./haxe/haxe.js":[94,108],"./htmlembedded/htmlembedded.js":[95,2,3,53],"./htmlmixed/htmlmixed.js":[42,2,3,70],"./http/http.js":[96,109],"./idl/idl.js":[97,110],"./javascript/javascript.js":[44,2],"./jinja2/jinja2.js":[98,111],"./jsx/jsx.js":[99,2,71],"./julia/julia.js":[100,112],"./livescript/livescript.js":[101,113],"./lua/lua.js":[102,114],"./markdown/markdown.js":[56,6],"./mathematica/mathematica.js":[103,115],"./mbox/mbox.js":[104,116],"./meta.js":[46],"./mirc/mirc.js":[105,117],"./mllike/mllike.js":[106,118],"./modelica/modelica.js":[107,119],"./mscgen/mscgen.js":[108,120],"./mumps/mumps.js":[109,121],"./nginx/nginx.js":[110,122],"./nsis/nsis.js":[111,67],"./ntriples/ntriples.js":[112,123],"./octave/octave.js":[113,124],"./oz/oz.js":[114,125],"./pascal/pascal.js":[115,126],"./pegjs/pegjs.js":[116,2,127],"./perl/perl.js":[117,128],"./php/php.js":[118,2,3,4,61],"./pig/pig.js":[119,129],"./powershell/powershell.js":[120,130],"./properties/properties.js":[121,131],"./protobuf/protobuf.js":[122,132],"./pug/pug.js":[57,2,3,5],"./puppet/puppet.js":[123,133],"./python/python.js":[51,134],"./q/q.js":[124,135],"./r/r.js":[125,136],"./rpm/rpm.js":[126,137],"./rst/rst.js":[127,56],"./ruby/ruby.js":[45,138],"./rust/rust.js":[128,68],"./sas/sas.js":[129,139],"./sass/sass.js":[53,3,140],"./scheme/scheme.js":[130,141],"./shell/shell.js":[131,142],"./sieve/sieve.js":[132,143],"./slim/slim.js":[133,2,3,58],"./smalltalk/smalltalk.js":[134,144],"./smarty/smarty.js":[135,145],"./solr/solr.js":[136,146],"./soy/soy.js":[137,2,3,62],"./sparql/sparql.js":[138,147],"./spreadsheet/spreadsheet.js":[139,148],"./sql/sql.js":[140,149],"./stex/stex.js":[52,150],"./stylus/stylus.js":[58,7],"./swift/swift.js":[141,151],"./tcl/tcl.js":[142,152],"./textile/textile.js":[143,153],"./tiddlywiki/tiddlywiki.js":[144,154],"./tiki/tiki.js":[145,155],"./toml/toml.js":[146,156],"./tornado/tornado.js":[147,2,3,55],"./troff/troff.js":[148,157],"./ttcn-cfg/ttcn-cfg.js":[150,158],"./ttcn/ttcn.js":[149,159],"./turtle/turtle.js":[151,160],"./twig/twig.js":[152,63],"./vb/vb.js":[153,161],"./vbscript/vbscript.js":[154,162],"./velocity/velocity.js":[155,163],"./verilog/verilog.js":[156,164],"./vhdl/vhdl.js":[157,165],"./vue/vue.js":[158,2,3,7,5,37],"./webidl/webidl.js":[159,166],"./xml/xml.js":[40,167],"./xquery/xquery.js":[160,168],"./yacas/yacas.js":[161,169],"./yaml-frontmatter/yaml-frontmatter.js":[162,72],"./yaml/yaml.js":[54,170],"./z80/z80.js":[163,171]};function o(e){if(!a.o(r,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],o=t[0];return Promise.all(t.slice(1).map(a.e)).then((function(){return a.t(o,7)}))}o.keys=function(){return Object.keys(r)},o.id=59,e.exports=o}}]);
//# sourceMappingURL=35.ba3d6918.chunk.js.map