(this.webpackJsonpblog=this.webpackJsonpblog||[]).push([[34],{37:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var a=n(11),o=n(12),l=n(13),r=n(14),i=n(0),s=n.n(i),m=(n(38),function(e){Object(r.a)(n,e);var t=Object(l.a)(n);function n(e){var o;return Object(a.a)(this,n),(o=t.call(this,e)).bindHandleScroll=function(e){var t=!!e.srcElement&&e.srcElement.documentElement.scrollTop||window.pageYOffset||(e.srcElement?e.srcElement.body.scrollTop:0);o.setState({scrollTop:t})},o.scrollToAnchor=function(e){if(e){var t=document.getElementById(e);t&&t.scrollIntoView({block:"start",behavior:"smooth"})}},o.state={articleTree:o.props.articleTree,scrollTop:null},o}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=document.getElementById("header"),t=window.scrollY,n=document.getElementsByClassName("directory-list")[0],a=n.offsetTop;window.addEventListener("scroll",this.bindHandleScroll),window.onscroll=function(){for(var o=document.getElementsByClassName("page-footer")[0],l=0;o;)l+=o.offsetTop,o=o.offsetParent;var r=document.body.scrollTop||document.documentElement.scrollTop;if((r+=a+n.offsetHeight)>l+e.offsetHeight)n.style="position:fixed;top:".concat(a-r+l,"px;transition:none");else{var i=window.scrollY;i>e.offsetHeight&&(t<i&&(e.className="ant-layout-header header header-affixed",n.className="directory-list directory-affixed",t=i),t>i&&(e.className="ant-layout-header header header-visible",n.className="directory-list",t=i)),n.style=""}}}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.bindHandleScroll)}},{key:"render",value:function(){var e=this,t=this.state,n=t.articleTree,a=t.scrollTop,o=n.length;if(document.getElementById("tree-num-0")&&o>0){for(var l=[],r=0;r<o;r++){var i=document.getElementById(n[r].name);l.push(i.offsetTop)}for(var m=l.findIndex((function(e){return e>a}))-1,p=0;p<o;p++)document.getElementById("tree-num-".concat(p)).className=p===m?"tree-num directory-item-active":"tree-num";-2===m&&(document.getElementById("tree-num-".concat(o-1)).className="tree-num directory-item-active")}return s.a.createElement("ul",{className:"directory-list"},n.map((function(t,n){return s.a.createElement("li",{key:n,id:"tree-num-".concat(n),className:"tree-num",title:t.name,style:{paddingLeft:"H2"===t.tag?10:22},onClick:function(){e.scrollToAnchor("".concat(t.name))}},t.name)})))}}],[{key:"getDerivedStateFromProps",value:function(e,t){var n=e.articleTree;return n!==t.articleTree?{articleTree:n}:null}}]),n}(i.Component))},38:function(e,t,n){},464:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return u}));var a=n(11),o=n(12),l=n(15),r=n(13),i=n(14),s=n(0),m=n.n(s),p=n(165),d=(n(48),n(37)),c=n(46),g=n.n(c),f=g.a.GraphObject.make,u=function(e){Object(i.a)(n,e);var t=Object(r.a)(n);function n(e){var o;return Object(a.a)(this,n),(o=t.call(this,e)).state={articleTree:[]},o.getArticleTree=o.getArticleTree.bind(Object(l.a)(o)),o}return Object(o.a)(n,[{key:"getArticleTree",value:function(){for(var e=document.getElementsByClassName("article-content")[0].children,t=[],n=0;n<e.length-1;n++){var a=e[n].nodeName;"H2"!==a&&"H3"!==a||(e[n].id=e[n].innerText,t.push({name:e[n].innerText,tag:e[n].nodeName}))}this.setState({articleTree:t})}},{key:"componentDidMount",value:function(){document.title="GoJS \u7aef\u53e3(Ports)",this.getArticleTree(),this.diagramRender1(),this.diagramRender2(),this.diagramRender3(),this.diagramRender4(),this.diagramRender5()}},{key:"diagramRender1",value:function(){var e=f(g.a.Diagram,"myDiagramDiv1");e.nodeTemplate=f(g.a.Node,"Vertical",{fromSpot:g.a.Spot.Right,toSpot:g.a.Spot.Left},f(g.a.Shape,"Ellipse",{fill:"green",width:30,height:30}),f(g.a.TextBlock,{font:"20px sans-serif"},new g.a.Binding("text","key"))),e.model=new g.a.GraphLinksModel([{key:"Alpha"},{key:"Beta"}],[{from:"Alpha",to:"Beta"}])}},{key:"diagramRender2",value:function(){var e=f(g.a.Diagram,"myDiagramDiv2");e.nodeTemplate=f(g.a.Node,"Vertical",{},f(g.a.Shape,"Ellipse",{fill:"green",width:30,height:30,portId:"",fromSpot:g.a.Spot.Right,toSpot:g.a.Spot.Left}),f(g.a.TextBlock,{font:"20px sans-serif"},new g.a.Binding("text","key"))),e.model=new g.a.GraphLinksModel([{key:"Alpha"},{key:"Beta"}],[{from:"Alpha",to:"Beta"}])}},{key:"diagramRender3",value:function(){var e=f(g.a.Diagram,"myDiagramDiv3");e.nodeTemplate=f(g.a.Node,"Spot",f(g.a.Panel,"Auto",f(g.a.Shape,"RoundedRectangle",{fill:"lightblue"}),f(g.a.TextBlock,{margin:10},new g.a.Binding("text","key"))),f(g.a.Shape,"Ellipse",{fill:"pink",desiredSize:new g.a.Size(10,10),alignment:g.a.Spot.Left,portId:"l",fromSpot:g.a.Spot.Left,toSpot:g.a.Spot.Left}),f(g.a.Shape,"Ellipse",{fill:"green",desiredSize:new g.a.Size(10,10),alignment:g.a.Spot.Right,portId:"r",fromSpot:g.a.Spot.Right,toSpot:g.a.Spot.Right})),e.model=new g.a.GraphLinksModel([{key:"Alpha"},{key:"Beta"}],[{from:"Alpha",to:"Beta",fromPort:"r",toPort:"l"}]),e.model.linkFromPortIdProperty="fromPort",e.model.linkToPortIdProperty="toPort"}},{key:"diagramRender4",value:function(){var e=f(g.a.Diagram,"myDiagramDiv4");e.nodeTemplate=f(g.a.Node,"Spot",f(g.a.Panel,"Auto",f(g.a.Shape,"RoundedRectangle",{fill:"lightblue"}),f(g.a.TextBlock,{margin:10},new g.a.Binding("text","key"))),f(g.a.Shape,"Ellipse",{fill:"pink",desiredSize:new g.a.Size(10,10),alignment:g.a.Spot.Left,portId:"l",fromSpot:g.a.Spot.Left,toSpot:g.a.Spot.Left,fromLinkable:!0,toLinkable:!0}),f(g.a.Shape,"Ellipse",{fill:"green",desiredSize:new g.a.Size(10,10),alignment:g.a.Spot.Right,portId:"r",fromSpot:g.a.Spot.Right,toSpot:g.a.Spot.Right,fromLinkable:!0,toLinkable:!0})),e.model=new g.a.GraphLinksModel([{key:"Alpha"},{key:"Beta"}]),e.model.linkFromPortIdProperty="fromPort",e.model.linkToPortIdProperty="toPort"}},{key:"diagramRender5",value:function(){var e=f(g.a.Diagram,"myDiagramDiv5");e.nodeTemplate=f(g.a.Node,"Spot",f(g.a.Panel,"Auto",f(g.a.Shape,"RoundedRectangle",{fill:"lightblue"}),f(g.a.TextBlock,{margin:10},new g.a.Binding("text","key"))),f(g.a.Shape,"Ellipse",{fill:"pink",desiredSize:new g.a.Size(10,10),alignment:g.a.Spot.Left,portId:"l",fromSpot:g.a.Spot.Left,toSpot:g.a.Spot.Left,fromLinkable:!0,toLinkable:!0,fromLinkableDuplicates:!0,fromLinkableSelfNode:!0,toLinkableSelfNode:!0}),f(g.a.Shape,"Ellipse",{fill:"green",desiredSize:new g.a.Size(10,10),alignment:g.a.Spot.Right,portId:"r",fromSpot:g.a.Spot.Right,toSpot:g.a.Spot.Right,fromLinkable:!0,toLinkable:!0,fromLinkableDuplicates:!0,fromLinkableSelfNode:!0,toLinkableSelfNode:!0})),e.model=new g.a.GraphLinksModel([{key:"Alpha"},{key:"Beta"}]),e.model.linkFromPortIdProperty="fromPort",e.model.linkToPortIdProperty="toPort"}},{key:"render",value:function(){return m.a.createElement("div",{className:"page-content"},m.a.createElement("div",{className:"article"},m.a.createElement("div",{className:"article-title"},m.a.createElement("h1",null,"GoJS Ports")),m.a.createElement("div",{className:"article-content"},m.a.createElement("h2",null,"GoJS Ports\u6982\u8ff0"),m.a.createElement("ul",null,m.a.createElement("li",null,"\u5728Node\u4e0a\u63d0\u4f9bLink\u8fde\u63a5\u7684\u7279\u5b9a\u56fe\u5f62\u4f4d\u7f6e"),m.a.createElement("li",null,"\u53ef\u4ee5\u662f\u4efb\u610f\u6570\u91cf\u7684port/Node"),m.a.createElement("li",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u6574\u4e2aNode\u662f\u552f\u4e00\u7684\u7aef\u53e3"),m.a.createElement("li",null,"\u8981\u5728nodeTemplate\u4e2d\u7684GraphObject\u751f\u6210\u4e00\u4e2a\u7aef\u53e3\uff0c\u8bbe\u7f6e\u201cportId\u201d\u5c5e\u6027"),m.a.createElement("li",null,"port\u53ea\u80fd\u5b58\u5728\u4e8eNode/Group\u4e0a")),m.a.createElement("p",null,"\u5148\u770b\u4e00\u4e2a\u8bbe\u7f6e\u7aef\u53e3\u7684\u4f8b\u5b50:"),m.a.createElement(p.a,{value:'let $ = go.GraphObject.make;\nlet myDiagram = $(go.Diagram, "myDiagramDiv");\n\nmyDiagram.nodeTemplate =\n    $(go.Node, "Vertical", {\n            fromSpot: go.Spot.Right,\n            toSpot: go.Spot.Left\n        },\n        $(go.Shape, "Ellipse", {\n            fill: "green",\n            width: 30,\n            height: 30\n        }),\n        $(go.TextBlock, {\n                font: "20px sans-serif"\n            },\n            new go.Binding("text", "key"))\n    );\n\nmyDiagram.model = new go.GraphLinksModel(\n    [{\n        key: "Alpha"\n    }, {\n        key: "Beta"\n    }], [{\n        from: "Alpha",\n        to: "Beta"\n    }]\n)',options:{theme:"monokai",mode:"JSX",readOnly:!0}}),m.a.createElement("div",{id:"myDiagramDiv1",className:"diagram"}),m.a.createElement("p",null,"Link\u5728Node\u4e0a\u94fe\u63a5\u7684\u4f4d\u7f6e\u662f\u56fa\u5b9a\u7684"),m.a.createElement("h3",null,"GraphObject.portld"),m.a.createElement("ul",null,m.a.createElement("li",null,"\u5b9a\u4e49\u4ee5GraphObject\u4e3a\u7aef\u53e3")),m.a.createElement(p.a,{value:'myDiagram.nodeTemplate =\n    $(go.Node, "Vertical", {},\n        $(go.Shape, "Ellipse", {\n            fill: "green",\n            width: 30,\n            height: 30,\n            portId: "",\n            fromSpot: go.Spot.Right,\n            toSpot: go.Spot.Left\n        }),\n        $(go.TextBlock, {\n                font: "20px sans-serif"\n            },\n            new go.Binding("text", "key")\n        )\n    );',options:{theme:"monokai",mode:"JSX",readOnly:!0}}),m.a.createElement("div",{id:"myDiagramDiv2",className:"diagram"}),m.a.createElement("h2",null,"Multiple Ports"),m.a.createElement("ul",null,m.a.createElement("li",null,"\u6709\u591a\u4e2a\u7aef\u53e3\u65f6\uff0cLink\u6570\u636e\u9700\u8981\u4e00\u79cd\u65b9\u6cd5\u6765\u77e5\u9053\u5b83\u6765\u81ea\u6216\u5c06\u8981\u8bbf\u95ee\u54ea\u4e2a\u7aef\u53e3")),m.a.createElement("ul",{"data-lake-indent":"1"},m.a.createElement("li",null,"\u8bbe\u7f6eGraphLinksModel.linkToPortldProperty / GraphLinksModel.linkFromPortldProperty\u4e3a\u4efb\u4f55\u975e\u7a7a\u5b57\u7b26\u4e32\u503c"),m.a.createElement("li",null,"\u7136\u540e\uff0c\u5728Link\u6570\u636e\u4e0a\u8bbe\u7f6e\u8fd9\u4e9b\u5c5e\u6027")),m.a.createElement(p.a,{value:'myDiagram.nodeTemplate =\n    $(go.Node, "Spot",\n        $(go.Panel, "Auto", $(go.Shape, "RoundedRectangle", {\n                fill: "lightblue"\n            }),\n            $(go.TextBlock, {\n                    margin: 10\n                },\n                new go.Binding("text", "key")\n            )\n        ),\n        //left port\n        $(go.Shape, "Ellipse", {\n            fill: "pink",\n            desiredSize: new go.Size(10, 10),\n            alignment: go.Spot.Left,\n            portId: "l",\n            fromSpot: go.Spot.Left,\n            toSpot: go.Spot.Left\n        }),\n        //right port\n        $(go.Shape, "Ellipse", {\n            fill: "green",\n            desiredSize: new go.Size(10, 10),\n            alignment: go.Spot.Right,\n            portId: "r",\n            fromSpot: go.Spot.Right,\n            toSpot: go.Spot.Right\n        }),\n    );\n\nmyDiagram.model = new go.GraphLinksModel(\n[{\n    key: "Alpha"\n}, {\n    key: "Beta"\n}], [{\n    from: "Alpha",\n    to: "Beta",\n    fromPort: "r",\n    toPort: "l"\n}]\n)\n\nmyDiagram.model.linkFromPortIdProperty = "fromPort";\nmyDiagram.model.linkToPortIdProperty = "toPort";',options:{theme:"monokai",mode:"JSX",readOnly:!0}}),m.a.createElement("div",{id:"myDiagramDiv3",className:"diagram"}),m.a.createElement(p.a,{value:'myDiagram.nodeTemplate =\n    $(go.Node, "Spot",\n        $(go.Panel, "Auto", $(go.Shape, "RoundedRectangle", {\n                fill: "lightblue"\n            }),\n            $(go.TextBlock, {\n                    margin: 10\n                },\n                new go.Binding("text", "key")\n            )\n        ),\n        //left port\n        $(go.Shape, "Ellipse", {\n            fill: "pink",\n            desiredSize: new go.Size(10, 10),\n            alignment: go.Spot.Left,\n            portId: "l",\n            fromSpot: go.Spot.Left,\n            toSpot: go.Spot.Left,\n            fromLinkable: true,\n            toLinkable: true\n        }),\n        //right port\n        $(go.Shape, "Ellipse", {\n            fill: "green",\n            desiredSize: new go.Size(10, 10),\n            alignment: go.Spot.Right,\n            portId: "r",\n            fromSpot: go.Spot.Right,\n            toSpot: go.Spot.Right,\n            fromLinkable: true,\n            toLinkable: true\n        }),\n    );\nmyDiagram.model = new go.GraphLinksModel(\n    [{\n        key: "Alpha"\n    }, {\n        key: "Beta"\n    }], \n)\nmyDiagram.model.linkFromPortIdProperty = "fromPort";\nmyDiagram.model.linkToPortIdProperty = "toPort";',options:{theme:"monokai",mode:"JSX",readOnly:!0}}),m.a.createElement("div",{id:"myDiagramDiv4",className:"diagram"}),m.a.createElement("h3",null,"fromLinkableDuplicates / toLinkableDuplicates"),m.a.createElement("ul",null,m.a.createElement("li",null,"\u4e00\u4e2aport\u662f\u5426\u53ef\u80fd\u6709\u591a\u4e2aLink\u5230\u5b83\u6216\u4ece\u5b83\u6765")),m.a.createElement("p",null,"\u540c\u65f6\u5c06fromLinkableSelfNode/toLinkableSelfNode\u8bbe\u7f6e\u4e3atrue,Node\u5373\u53ef\u94fe\u63a5\u81ea\u8eab"),m.a.createElement(p.a,{value:'//left port\n$(go.Shape, "Ellipse", {\n    fill: "pink",\n    desiredSize: new go.Size(10, 10),\n    alignment: go.Spot.Left,\n    portId: "l",\n    fromSpot: go.Spot.Left,\n    toSpot: go.Spot.Left,\n    fromLinkable: true,\n    toLinkable: true,\n    fromLinkableDuplicates: true,\n    fromLinkableSelfNode: true,\n    toLinkableSelfNode: true\n}),\n//right port\n$(go.Shape, "Ellipse", {\n    fill: "green",\n    desiredSize: new go.Size(10, 10),\n    alignment: go.Spot.Right,\n    portId: "r",\n    fromSpot: go.Spot.Right,\n    toSpot: go.Spot.Right,\n    fromLinkable: true,\n    toLinkable: true,\n    fromLinkableDuplicates: true,\n    fromLinkableSelfNode: true,\n    toLinkableSelfNode: true\n}),',options:{theme:"monokai",mode:"JSX",readOnly:!0}}),m.a.createElement("div",{id:"myDiagramDiv5",className:"diagram"}),m.a.createElement("p",null,m.a.createElement("br",null)),m.a.createElement("p",null,m.a.createElement("br",null)),m.a.createElement("p",null,"\u76f8\u5173\u4ee3\u7801\uff1a"),m.a.createElement("p",null,m.a.createElement("a",{href:"https://github.com/LiuZheAb/GoJS_Demo/blob/master/19gojsPorts.html",target:"_blank",rel:"noopener noreferrer"},"https://github.com/LiuZheAb/GoJS_Demo/blob/master/19gojsPorts.html")))),m.a.createElement("div",{className:"directory"},m.a.createElement(d.a,{articleTree:this.state.articleTree})))}}]),n}(s.Component)},60:function(e,t,n){var a={"./apl/apl.js":[61,71],"./asciiarmor/asciiarmor.js":[62,72],"./asn.1/asn.1.js":[63,73],"./asterisk/asterisk.js":[64,74],"./brainfuck/brainfuck.js":[65,75],"./clike/clike.js":[49,4],"./clojure/clojure.js":[66,76],"./cmake/cmake.js":[67,77],"./cobol/cobol.js":[68,78],"./coffeescript/coffeescript.js":[50,79],"./commonlisp/commonlisp.js":[69,80],"./crystal/crystal.js":[70,81],"./css/css.js":[42,3],"./cypher/cypher.js":[71,82],"./d/d.js":[72,83],"./dart/dart.js":[73,4,84],"./diff/diff.js":[74,85],"./django/django.js":[75,2,3,49],"./dockerfile/dockerfile.js":[76,60],"./dtd/dtd.js":[77,86],"./dylan/dylan.js":[78,87],"./ebnf/ebnf.js":[79,88],"./ecl/ecl.js":[80,89],"./eiffel/eiffel.js":[81,90],"./elm/elm.js":[82,91],"./erlang/erlang.js":[83,92],"./factor/factor.js":[84,61],"./fcl/fcl.js":[85,93],"./forth/forth.js":[86,94],"./fortran/fortran.js":[87,95],"./gas/gas.js":[88,96],"./gfm/gfm.js":[89,6,59],"./gherkin/gherkin.js":[90,97],"./go/go.js":[91,98],"./groovy/groovy.js":[92,99],"./haml/haml.js":[93,2,3,52],"./handlebars/handlebars.js":[51,55],"./haskell-literate/haskell-literate.js":[94,64],"./haskell/haskell.js":[52,100],"./haxe/haxe.js":[95,101],"./htmlembedded/htmlembedded.js":[96,2,3,48],"./htmlmixed/htmlmixed.js":[41,2,3,65],"./http/http.js":[97,102],"./idl/idl.js":[98,103],"./javascript/javascript.js":[43,2],"./jinja2/jinja2.js":[99,104],"./jsx/jsx.js":[100,2,66],"./julia/julia.js":[101,105],"./livescript/livescript.js":[102,106],"./lua/lua.js":[103,107],"./markdown/markdown.js":[57,6],"./mathematica/mathematica.js":[104,108],"./mbox/mbox.js":[105,109],"./meta.js":[47],"./mirc/mirc.js":[106,110],"./mllike/mllike.js":[107,111],"./modelica/modelica.js":[108,112],"./mscgen/mscgen.js":[109,113],"./mumps/mumps.js":[110,114],"./nginx/nginx.js":[111,115],"./nsis/nsis.js":[112,62],"./ntriples/ntriples.js":[113,116],"./octave/octave.js":[114,117],"./oz/oz.js":[115,118],"./pascal/pascal.js":[116,119],"./pegjs/pegjs.js":[117,2,120],"./perl/perl.js":[118,121],"./php/php.js":[119,2,3,4,56],"./pig/pig.js":[120,122],"./powershell/powershell.js":[121,123],"./properties/properties.js":[122,124],"./protobuf/protobuf.js":[123,125],"./pug/pug.js":[58,2,3,5],"./puppet/puppet.js":[124,126],"./python/python.js":[53,127],"./q/q.js":[125,128],"./r/r.js":[126,129],"./rpm/rpm.js":[127,130],"./rst/rst.js":[128,51],"./ruby/ruby.js":[45,131],"./rust/rust.js":[129,63],"./sas/sas.js":[130,132],"./sass/sass.js":[55,3,133],"./scheme/scheme.js":[131,134],"./shell/shell.js":[132,135],"./sieve/sieve.js":[133,136],"./slim/slim.js":[134,2,3,53],"./smalltalk/smalltalk.js":[135,137],"./smarty/smarty.js":[136,138],"./solr/solr.js":[137,139],"./soy/soy.js":[138,2,3,57],"./sparql/sparql.js":[139,140],"./spreadsheet/spreadsheet.js":[140,141],"./sql/sql.js":[141,142],"./stex/stex.js":[54,143],"./stylus/stylus.js":[59,7],"./swift/swift.js":[142,144],"./tcl/tcl.js":[143,145],"./textile/textile.js":[144,146],"./tiddlywiki/tiddlywiki.js":[145,147],"./tiki/tiki.js":[146,148],"./toml/toml.js":[147,149],"./tornado/tornado.js":[148,2,3,50],"./troff/troff.js":[149,150],"./ttcn-cfg/ttcn-cfg.js":[151,151],"./ttcn/ttcn.js":[150,152],"./turtle/turtle.js":[152,153],"./twig/twig.js":[153,58],"./vb/vb.js":[154,154],"./vbscript/vbscript.js":[155,155],"./velocity/velocity.js":[156,156],"./verilog/verilog.js":[157,157],"./vhdl/vhdl.js":[158,158],"./vue/vue.js":[159,2,3,7,5,15],"./webidl/webidl.js":[160,159],"./xml/xml.js":[40,160],"./xquery/xquery.js":[161,161],"./yacas/yacas.js":[162,162],"./yaml-frontmatter/yaml-frontmatter.js":[163,67],"./yaml/yaml.js":[56,163],"./z80/z80.js":[164,164]};function o(e){if(!n.o(a,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=a[e],o=t[0];return Promise.all(t.slice(1).map(n.e)).then((function(){return n.t(o,7)}))}o.keys=function(){return Object.keys(a)},o.id=60,e.exports=o}}]);
//# sourceMappingURL=34.4110d2f6.chunk.js.map