(this.webpackJsonpblog=this.webpackJsonpblog||[]).push([[31],{338:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return y}));var r=a(11),o=a(12),n=a(13),l=a(14),i=a(0),m=a.n(i),s=a(163),d=(a(46),a(36)),c=a(165),p=a.n(c),g=p.a.GraphObject.make,u={theme:"monokai",mode:"JSX",readOnly:!0},y=function(e){Object(l.a)(a,e);var t=Object(n.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.diagramRender1(),this.diagramRender2(),this.diagramRender3(),this.diagramRender4(),this.diagramRender5(),this.diagramRender6()}},{key:"diagramRender1",value:function(){var e=p.a.GraphObject.make,t=e(p.a.Diagram,"myDiagramDiv1");t.nodeTemplate=e(p.a.Node,"Vertical",new p.a.Binding("itemArray","items")),t.model=new p.a.GraphLinksModel([{key:1,items:["Alpha","Beta","Gamma"]}])}},{key:"diagramRender2",value:function(){var e=g(p.a.Diagram,"myDiagramDiv2");e.nodeTemplate=g(p.a.Node,"Spot",g(p.a.Panel,"Auto",g(p.a.Shape,"RoundedRectangle",{fill:"lightblue"}),g(p.a.TextBlock,{margin:10},new p.a.Binding("text","key")))),e.model=new p.a.GraphLinksModel,e.model.linkFromPortIdProperty="fromPort",e.model.linkToPortIdProperty="toPort",e.model.nodeDataArray=[{key:"Alpha"},{key:"Beta"},{key:"Delta"}]}},{key:"diagramRender3",value:function(){var e=g(p.a.Diagram,"myDiagramDiv3");e.nodeTemplate=g(p.a.Node,"Spot",g(p.a.Panel,"Auto",g(p.a.Shape,"RoundedRectangle",{fill:"lightblue"}),g(p.a.TextBlock,{margin:10},new p.a.Binding("text","key"))),g(p.a.Panel,"Horizontal",{alignment:p.a.Spot.Top},new p.a.Binding("itemArray","ports"),{itemTemplate:g(p.a.Panel,{portId:"",fromSpot:p.a.Spot.Top,toSpot:p.a.Spot.Top,fromLinkable:!0,toLinkable:!0},new p.a.Binding("portId","portID"),g(p.a.Shape,"Ellipse",{desiredSize:new p.a.Size(10,10),fill:"green"},new p.a.Binding("fill","color")))})),e.model=new p.a.GraphLinksModel,e.model.linkFromPortIdProperty="fromPort",e.model.linkToPortIdProperty="toPort",e.model.nodeDataArray=[{key:"Alpha",ports:[{portId:"left",color:"red"},{portId:"middle",color:"yellow"},{portId:"right",color:"green"},{portId:"farright",color:"pink"}]},{key:"Beta",ports:[{portId:"left",color:"purple"}]},{key:"Delta"}]}},{key:"diagramRender4",value:function(){var e=g(p.a.Diagram,"myDiagramDiv4");e.nodeTemplate=g(p.a.Node,"Spot",g(p.a.Panel,"Auto",g(p.a.Shape,"RoundedRectangle",{fill:"lightblue"}),g(p.a.TextBlock,{margin:10},new p.a.Binding("text","key"))),g(p.a.Panel,"Horizontal",{alignment:p.a.Spot.Top},new p.a.Binding("itemArray","ports"),{itemTemplate:g(p.a.Panel,{portId:"",fromSpot:p.a.Spot.Top,toSpot:p.a.Spot.Top,fromLinkable:!0,toLinkable:!0},new p.a.Binding("portId","portID"),g(p.a.Shape,"Ellipse",{desiredSize:new p.a.Size(10,10),fill:"green"},new p.a.Binding("fill","color")))})),e.model=new p.a.GraphLinksModel,e.model.linkFromPortIdProperty="fromPort",e.model.linkToPortIdProperty="toPort",e.model.nodeDataArray=[{key:"Alpha",ports:[{portId:"left",color:"red"},{portId:"middle",color:"yellow"},{portId:"right",color:"green"},{portId:"farright",color:"pink"}]},{key:"Beta",ports:[{portId:"left",color:"purple"}]},{key:"Delta"}];var t=e.findNodeForKey("Alpha");e.model.removeArrayItem(t.data.ports,0)}},{key:"diagramRender5",value:function(){var e=g(p.a.Diagram,"myDiagramDiv5");e.nodeTemplate=g(p.a.Node,"Spot",g(p.a.Panel,"Auto",g(p.a.Shape,"RoundedRectangle",{fill:"lightblue"}),g(p.a.TextBlock,{margin:10},new p.a.Binding("text","key"))),g(p.a.Panel,"Horizontal",{alignment:p.a.Spot.Top},new p.a.Binding("itemArray","ports"),{itemTemplate:g(p.a.Panel,{portId:"",fromSpot:p.a.Spot.Top,toSpot:p.a.Spot.Top,fromLinkable:!0,toLinkable:!0},new p.a.Binding("portId","portID"),g(p.a.Shape,"Ellipse",{desiredSize:new p.a.Size(10,10),fill:"green"},new p.a.Binding("fill","color")))})),e.model=new p.a.GraphLinksModel,e.model.linkFromPortIdProperty="fromPort",e.model.linkToPortIdProperty="toPort",e.model.nodeDataArray=[{key:"Alpha",ports:[{portId:"left",color:"red"},{portId:"middle",color:"yellow"},{portId:"right",color:"green"},{portId:"farright",color:"pink"}]},{key:"Beta",ports:[{portId:"left",color:"purple"}]},{key:"Delta"}];var t=e.findNodeForKey("Alpha");e.model.removeArrayItem(t.data.ports,0),e.model.addArrayItem(t.data.ports,{portID:"right2",color:"white"})}},{key:"diagramRender6",value:function(){var e=g(p.a.Diagram,"myDiagramDiv6");e.nodeTemplate=g(p.a.Node,"Spot",g(p.a.Panel,"Auto",g(p.a.Shape,"RoundedRectangle",{fill:"lightblue"}),g(p.a.TextBlock,{margin:10},new p.a.Binding("text","key"))),g(p.a.Panel,"Horizontal",{alignment:p.a.Spot.Top},new p.a.Binding("itemArray","ports"),{itemTemplate:g(p.a.Panel,{portId:"",fromSpot:p.a.Spot.Top,toSpot:p.a.Spot.Top,fromLinkable:!0,toLinkable:!0},new p.a.Binding("portId","portID"),g(p.a.Shape,"Ellipse",{desiredSize:new p.a.Size(10,10),fill:"green"},new p.a.Binding("fill","color")))})),e.model=new p.a.GraphLinksModel,e.model.linkFromPortIdProperty="fromPort",e.model.linkToPortIdProperty="toPort",e.model.nodeDataArray=[{key:"Alpha",ports:[{portId:"left",color:"red"},{portId:"middle",color:"yellow"},{portId:"right",color:"green"},{portId:"farright",color:"pink"}]},{key:"Beta",ports:[{portId:"left",color:"purple"}]},{key:"Delta"}];var t=e.findNodeForKey("Alpha");e.model.removeArrayItem(t.data.ports,0),e.model.addArrayItem(t.data.ports,{portID:"right2",color:"white"}),e.model.insertArrayItem(t.data.ports,1,{portID:"middleleft",color:"pink"})}},{key:"render",value:function(){return m.a.createElement("div",{className:"page-content"},m.a.createElement("div",{className:"article"},m.a.createElement("div",{className:"article-title"},m.a.createElement("h1",null,"GoJS Item Arrays")),m.a.createElement("div",{className:"article-content"},m.a.createElement("h2",null,"Item Arrays \u6982\u8ff0"),m.a.createElement("ul",null,m.a.createElement("li",null,"\u5141\u8bb8\u5728\u4e00\u4e2a Node \u4e2d\u663e\u793a\u53ef\u53d8\u6570\u91cf\u7684\u5143\u7d20"),m.a.createElement("li",null,"\u901a\u8fc7\u8bbe\u7f6e Panel.itemArray \u5b9e\u73b0\uff0c\u901a\u5e38\u901a\u8fc7\u6570\u636e\u7ed1\u5b9a")),m.a.createElement("ul",{"data-lake-indent":"1"},m.a.createElement("li",null,"Panel \u5c06\u5305\u542b\u4e0e\u7ed1\u5b9a Array \u4e2d\u7684\u503c\u76f8\u540c\u591a\u7684\u5143\u7d20")),m.a.createElement(s.a,{value:'let $ = go.GraphObject.make;\nlet myDiagram = $(go.Diagram, "myDiagramDiv");\n\nmyDiagram.nodeTemplate =\n    $(go.Node, "Vertical", new go.Binding("itemArray", "items"));\n\nmyDiagram.model = new go.GraphLinksModel(\n    [{\n        key: 1,\n        items: ["Alpha", "Beta", "Gamma"]\n    }, ]\n);',options:u}),m.a.createElement("div",{id:"myDiagramDiv1",className:"diagram"}),m.a.createElement("h2",null,"Item \u6a21\u677f"),m.a.createElement("ul",null,m.a.createElement("li",null,"\u7528\u4e8e\u5b9a\u4e49\u9879 item array \u4e2d\u6bcf\u4e2a item \u7684\u5916\u89c2"),m.a.createElement("li",null,"\u5fc5\u987b\u662f\u4e00\u4e2a Panel")),m.a.createElement("ul",{"data-lake-indent":"1"},m.a.createElement("li",null,"Panel.data \u5c06\u662f\u6b64\u5143\u7d20 item array \u4e2d\u7684\u9879")),m.a.createElement(s.a,{value:'myDiagram.nodeTemplate =\n    $(go.Node, "Spot",\n        $(go.Panel, "Auto",\n            $(go.Shape, "RoundedRectangle", {\n                fill: "lightblue"\n            }),\n            $(go.TextBlock, {\n                margin: 10\n            }, new go.Binding("text", "key"))\n        )\n    );\n\nmyDiagram.model = new go.GraphLinksModel();\nmyDiagram.model.linkFromPortIdProperty = "fromPort";\nmyDiagram.model.linkToPortIdProperty = "toPort";\nmyDiagram.model.nodeDataArray = [{\n        key: "Alpha"\n    }, {\n        key: "Beta"\n    }, {\n        key: "Delta"\n    }, ]',options:u}),m.a.createElement("div",{id:"myDiagramDiv2",className:"diagram"}),m.a.createElement(s.a,{value:'myDiagram.nodeTemplate =\n    $(go.Node, "Spot",\n        $(go.Panel, "Auto",\n            $(go.Shape, "RoundedRectangle", {\n                fill: "lightblue"\n            }),\n            $(go.TextBlock, {\n                margin: 10\n            }, new go.Binding("text", "key"))\n        ),\n        $(go.Panel, "Horizontal", {\n            alignment: go.Spot.Top\n        },\n            new go.Binding("itemArray", "ports"), {\n                itemTemplate: $(go.Panel, {\n                        portId: "",\n                        fromSpot: go.Spot.Top,\n                        toSpot: go.Spot.Top,\n                        fromLinkable: true,\n                        toLinkable: true\n                    }, new go.Binding("portId", "portID"),\n                    $(go.Shape, "Ellipse", {\n                            desiredSize: new go.Size(10, 10),\n                            fill: "green"\n                        },\n                        new go.Binding("fill", "color")\n                    ))\n            }\n        )\n    );\n\nmyDiagram.model = new go.GraphLinksModel();\nmyDiagram.model.linkFromPortIdProperty = "fromPort";\nmyDiagram.model.linkToPortIdProperty = "toPort";\nmyDiagram.model.nodeDataArray = [{\n    key: "Alpha",\n    ports: [{\n        portId: "left",\n        color: "red"\n    }, {\n        portId: "middle",\n        color: "yellow"\n    }, {\n        portId: "right",\n        color: "green"\n    }, {\n        portId: "farright",\n        color: "pink"\n    }]\n}, {\n    key: "Beta",\n    ports: [{\n        portId: "left",\n        color: "purple"\n    }]\n}, {\n    key: "Delta"\n}, ]',options:u}),m.a.createElement("div",{id:"myDiagramDiv3",className:"diagram"}),m.a.createElement("p",null,"\u8981\u52a8\u6001\u66f4\u65b0\u9879\u76ee\u6570\u7ec4\uff0c\u8bf7\u4f7f\u7528\u7279\u5b9a\u7684\u6a21\u578b\u65b9\u6cd5:"),m.a.createElement("ul",null,m.a.createElement("li",null,"addArrayItem"),m.a.createElement("li",null,"removeArrayItem"),m.a.createElement("li",null,"insertArrayItem")),m.a.createElement("h3",null,"removeArrayItem(array,index)"),m.a.createElement("p",null,"index \u4e3a item \u5728\u6570\u7ec4\u4e2d\u7684\u5e8f\u53f7"),m.a.createElement(s.a,{value:'let alphaNode = myDiagram.findNodeForKey("Alpha");\nmyDiagram.model.removeArrayItem(alphaNode.data.ports, 0);',options:u}),m.a.createElement("div",{id:"myDiagramDiv4",className:"diagram"}),m.a.createElement("h3",null,"addArrayItem(array,value)"),m.a.createElement(s.a,{value:'myDiagram.model.addArrayItem(alphaNode.data.ports, {\n    portID: "right2",\n    color: "white"\n});',options:u}),m.a.createElement("div",{id:"myDiagramDiv5",className:"diagram"}),m.a.createElement("h3",null,"insertArrayItem(array,index,value)"),m.a.createElement("p",null,"index \u4e3a\u63d2\u5165 item \u540e\u5728\u6570\u7ec4\u4e2d\u7684\u5e8f\u53f7"),m.a.createElement(s.a,{value:'myDiagram.model.insertArrayItem(alphaNode.data.ports, 1,{\n    portID: "middleleft",\n    color: "pink"\n});',options:u}),m.a.createElement("div",{id:"myDiagramDiv6",className:"diagram"}),m.a.createElement("p",null,m.a.createElement("br",null)),m.a.createElement("p",null,m.a.createElement("br",null)),m.a.createElement("p",null,"\u76f8\u5173\u4ee3\u7801\uff1a"),m.a.createElement("p",null,m.a.createElement("a",{href:"https://github.com/LiuZheAb/GoJS_Demo/blob/master/20gojsItemArrays.html",target:"_blank",rel:"noopener noreferrer"},"https://github.com/LiuZheAb/GoJS_Demo/blob/master/20gojsItemArrays.html")))),m.a.createElement(d.a,null))}}]),a}(i.Component)},36:function(e,t,a){"use strict";var r=a(11),o=a(12),n=a(16),l=a(13),i=a(14),m=a(0),s=a.n(m),d=a(5),c=a(39),p=(a(37),function(e){Object(i.a)(a,e);var t=Object(l.a)(a);function a(e){var o;return Object(r.a)(this,a),(o=t.call(this,e)).bindHandleScroll=function(e){var t=!!e.srcElement&&e.srcElement.documentElement.scrollTop||window.pageYOffset||(e.srcElement?e.srcElement.body.scrollTop:0);o.setState({scrollTop:t})},o.scrollToAnchor=function(e){if(e){var t=document.getElementById(e);t&&t.scrollIntoView({block:"start",behavior:"smooth"})}},o.state={articleTree:[],scrollTop:null},o.getArticleTree=o.getArticleTree.bind(Object(n.a)(o)),o}return Object(o.a)(a,[{key:"getArticleTree",value:function(){for(var e=document.getElementsByClassName("article-content")[0].children,t=[],a=0;a<e.length-1;a++){var r=e[a].nodeName;"H2"!==r&&"H3"!==r||(e[a].id=e[a].innerText,t.push({name:e[a].innerText,tag:e[a].nodeName}))}this.setState({articleTree:t})}},{key:"setTitle",value:function(){for(var e=this.props.location.pathname.split("/").filter((function(e){return e})),t=[],a=0;a<c.a.length;a++)e[0]===c.a[a].name&&(t=c.a[a].section[e[1]]);document.getElementsByTagName("h1")[0]&&(document.getElementsByTagName("h1")[0].innerHTML=t)}},{key:"componentDidMount",value:function(){this.getArticleTree(),this.setTitle();var e=document.getElementById("header"),t=window.scrollY,a=document.getElementsByClassName("directory-list")[0],r=a.offsetTop;window.addEventListener("scroll",this.bindHandleScroll),window.onscroll=function(){for(var o=document.getElementsByClassName("page-footer")[0],n=0;o;)n+=o.offsetTop,o=o.offsetParent;var l=document.body.scrollTop||document.documentElement.scrollTop;if((l+=r+a.offsetHeight)>n+e.offsetHeight)a.style="position:fixed;top:".concat(r-l+n,"px;transition:none");else{var i=window.scrollY;i>e.offsetHeight&&(t<i&&(e.className="ant-layout-header header header-affixed",a.className="directory-list directory-affixed",t=i),t>i&&(e.className="ant-layout-header header header-visible",a.className="directory-list",t=i)),a.style=""}}}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.bindHandleScroll)}},{key:"render",value:function(){var e=this,t=this.state,a=t.articleTree,r=t.scrollTop,o=a.length;if(document.getElementById("tree-num-0")&&o>0){for(var n=[],l=0;l<o;l++){var i=document.getElementById(a[l].name);n.push(i.offsetTop)}for(var m=n.findIndex((function(e){return e>r}))-1,d=0;d<o;d++)document.getElementById("tree-num-".concat(d)).className=d===m?"tree-num directory-item-active":"tree-num";-2===m&&(document.getElementById("tree-num-".concat(o-1)).className="tree-num directory-item-active")}return s.a.createElement("div",{className:"directory"},s.a.createElement("ul",{className:"directory-list"},a.map((function(t,a){return s.a.createElement("li",{key:a,id:"tree-num-".concat(a),className:"tree-num",title:t.name,style:{paddingLeft:"H2"===t.tag?10:22},onClick:function(){e.scrollToAnchor("".concat(t.name))}},t.name)}))))}}]),a}(m.Component));t.a=Object(d.f)(p)},37:function(e,t,a){},58:function(e,t,a){var r={"./apl/apl.js":[59,90],"./asciiarmor/asciiarmor.js":[60,91],"./asn.1/asn.1.js":[61,92],"./asterisk/asterisk.js":[62,93],"./brainfuck/brainfuck.js":[63,94],"./clike/clike.js":[47,5],"./clojure/clojure.js":[64,95],"./cmake/cmake.js":[65,96],"./cobol/cobol.js":[66,97],"./coffeescript/coffeescript.js":[48,98],"./commonlisp/commonlisp.js":[67,99],"./crystal/crystal.js":[68,100],"./css/css.js":[42,3],"./cypher/cypher.js":[69,101],"./d/d.js":[70,102],"./dart/dart.js":[71,5,103],"./diff/diff.js":[72,104],"./django/django.js":[73,2,3,67],"./dockerfile/dockerfile.js":[74,79],"./dtd/dtd.js":[75,105],"./dylan/dylan.js":[76,106],"./ebnf/ebnf.js":[77,107],"./ecl/ecl.js":[78,108],"./eiffel/eiffel.js":[79,109],"./elm/elm.js":[80,110],"./erlang/erlang.js":[81,111],"./factor/factor.js":[82,80],"./fcl/fcl.js":[83,112],"./forth/forth.js":[84,113],"./fortran/fortran.js":[85,114],"./gas/gas.js":[86,115],"./gfm/gfm.js":[87,56,78],"./gherkin/gherkin.js":[88,116],"./go/go.js":[89,117],"./groovy/groovy.js":[90,118],"./haml/haml.js":[91,2,3,70],"./handlebars/handlebars.js":[49,74],"./haskell-literate/haskell-literate.js":[92,83],"./haskell/haskell.js":[50,119],"./haxe/haxe.js":[93,120],"./htmlembedded/htmlembedded.js":[94,2,3,66],"./htmlmixed/htmlmixed.js":[40,2,3,84],"./http/http.js":[95,121],"./idl/idl.js":[96,122],"./javascript/javascript.js":[43,2],"./jinja2/jinja2.js":[97,123],"./jsx/jsx.js":[98,2,85],"./julia/julia.js":[99,124],"./livescript/livescript.js":[100,125],"./lua/lua.js":[101,126],"./markdown/markdown.js":[55,56],"./mathematica/mathematica.js":[102,127],"./mbox/mbox.js":[103,128],"./meta.js":[45],"./mirc/mirc.js":[104,129],"./mllike/mllike.js":[105,130],"./modelica/modelica.js":[106,131],"./mscgen/mscgen.js":[107,132],"./mumps/mumps.js":[108,133],"./nginx/nginx.js":[109,134],"./nsis/nsis.js":[110,81],"./ntriples/ntriples.js":[111,135],"./octave/octave.js":[112,136],"./oz/oz.js":[113,137],"./pascal/pascal.js":[114,138],"./pegjs/pegjs.js":[115,2,139],"./perl/perl.js":[116,140],"./php/php.js":[117,2,3,5,75],"./pig/pig.js":[118,141],"./powershell/powershell.js":[119,142],"./properties/properties.js":[120,143],"./protobuf/protobuf.js":[121,144],"./pug/pug.js":[56,2,3,55],"./puppet/puppet.js":[122,145],"./python/python.js":[51,146],"./q/q.js":[123,147],"./r/r.js":[124,148],"./rpm/rpm.js":[125,149],"./rst/rst.js":[126,69],"./ruby/ruby.js":[44,150],"./rust/rust.js":[127,82],"./sas/sas.js":[128,151],"./sass/sass.js":[53,3,152],"./scheme/scheme.js":[129,153],"./shell/shell.js":[130,154],"./sieve/sieve.js":[131,155],"./slim/slim.js":[132,2,3,71],"./smalltalk/smalltalk.js":[133,156],"./smarty/smarty.js":[134,157],"./solr/solr.js":[135,158],"./soy/soy.js":[136,2,3,76],"./sparql/sparql.js":[137,159],"./spreadsheet/spreadsheet.js":[138,160],"./sql/sql.js":[139,161],"./stex/stex.js":[52,162],"./stylus/stylus.js":[57,57],"./swift/swift.js":[140,163],"./tcl/tcl.js":[141,164],"./textile/textile.js":[142,165],"./tiddlywiki/tiddlywiki.js":[143,166],"./tiki/tiki.js":[144,167],"./toml/toml.js":[145,168],"./tornado/tornado.js":[146,2,3,68],"./troff/troff.js":[147,169],"./ttcn-cfg/ttcn-cfg.js":[149,170],"./ttcn/ttcn.js":[148,171],"./turtle/turtle.js":[150,172],"./twig/twig.js":[151,77],"./vb/vb.js":[152,173],"./vbscript/vbscript.js":[153,174],"./velocity/velocity.js":[154,175],"./verilog/verilog.js":[155,176],"./vhdl/vhdl.js":[156,177],"./vue/vue.js":[157,2,3,57,55,64],"./webidl/webidl.js":[158,178],"./xml/xml.js":[38,179],"./xquery/xquery.js":[159,180],"./yacas/yacas.js":[160,181],"./yaml-frontmatter/yaml-frontmatter.js":[161,86],"./yaml/yaml.js":[54,182],"./z80/z80.js":[162,183]};function o(e){if(!a.o(r,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],o=t[0];return Promise.all(t.slice(1).map(a.e)).then((function(){return a.t(o,7)}))}o.keys=function(){return Object.keys(r)},o.id=58,e.exports=o}}]);
//# sourceMappingURL=31.83f6c2f0.chunk.js.map