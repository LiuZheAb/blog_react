(this.webpackJsonpblog=this.webpackJsonpblog||[]).push([[31],{37:function(e,a,t){"use strict";t.d(a,"a",(function(){return d}));var n=t(11),r=t(12),i=t(13),l=t(14),s=t(0),o=t.n(s),d=(t(38),function(e){Object(l.a)(t,e);var a=Object(i.a)(t);function t(e){var r;return Object(n.a)(this,t),(r=a.call(this,e)).bindHandleScroll=function(e){var a=!!e.srcElement&&e.srcElement.documentElement.scrollTop||window.pageYOffset||(e.srcElement?e.srcElement.body.scrollTop:0);r.setState({scrollTop:a})},r.scrollToAnchor=function(e){if(e){var a=document.getElementById(e);a&&a.scrollIntoView({block:"start",behavior:"smooth"})}},r.state={articleTree:r.props.articleTree,scrollTop:null},r}return Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=document.getElementById("header"),a=window.scrollY,t=document.getElementsByClassName("directory-list")[0],n=t.offsetTop;window.addEventListener("scroll",this.bindHandleScroll),window.onscroll=function(){for(var r=document.getElementsByClassName("page-footer")[0],i=0;r;)i+=r.offsetTop,r=r.offsetParent;var l=document.body.scrollTop||document.documentElement.scrollTop;if((l+=n+t.offsetHeight)>i+e.offsetHeight)t.style="position:fixed;top:".concat(n-l+i,"px;transition:none");else{var s=window.scrollY;s>e.offsetHeight&&(a<s&&(e.className="ant-layout-header header header-affixed",t.className="directory-list directory-affixed",a=s),a>s&&(e.className="ant-layout-header header header-visible",t.className="directory-list",a=s)),t.style=""}}}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.bindHandleScroll)}},{key:"render",value:function(){var e=this,a=this.state,t=a.articleTree,n=a.scrollTop,r=t.length;if(document.getElementById("tree-num-0")&&r>0){for(var i=[],l=0;l<r;l++){var s=document.getElementById(t[l].name);i.push(s.offsetTop)}for(var d=i.findIndex((function(e){return e>n}))-1,c=0;c<r;c++)document.getElementById("tree-num-".concat(c)).className=c===d?"tree-num directory-item-active":"tree-num";-2===d&&(document.getElementById("tree-num-".concat(r-1)).className="tree-num directory-item-active")}return o.a.createElement("ul",{className:"directory-list"},t.map((function(a,t){return o.a.createElement("li",{key:t,id:"tree-num-".concat(t),className:"tree-num",title:a.name,style:{paddingLeft:"H2"===a.tag?10:22},onClick:function(){e.scrollToAnchor("".concat(a.name))}},a.name)})))}}],[{key:"getDerivedStateFromProps",value:function(e,a){var t=e.articleTree;return t!==a.articleTree?{articleTree:t}:null}}]),t}(s.Component))},38:function(e,a,t){},41:function(e,a,t){},464:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return f}));var n=t(11),r=t(12),i=t(15),l=t(13),s=t(14),o=t(0),d=t.n(o),c=t(164),m=(t(41),t(37)),u=t(165),g=t.n(u),h=g.a.GraphObject.make,f=function(e){Object(s.a)(t,e);var a=Object(l.a)(t);function t(e){var r;return Object(n.a)(this,t),(r=a.call(this,e)).state={articleTree:[]},r.getArticleTree=r.getArticleTree.bind(Object(i.a)(r)),r}return Object(r.a)(t,[{key:"getArticleTree",value:function(){for(var e=document.getElementsByClassName("article-content")[0].children,a=[],t=0;t<e.length-1;t++){var n=e[t].nodeName;"H2"!==n&&"H3"!==n||(e[t].id=e[t].innerText,a.push({name:e[t].innerText,tag:e[t].nodeName}))}this.setState({articleTree:a})}},{key:"componentDidMount",value:function(){document.title="GoJS\u6559\u7a0b\u2014\u2014\u7b2c\u4e09\u8282 \u523b\u5ea6\u9762\u677f(Graduated Panel)",this.getArticleTree(),this.diagramRender1(),this.diagramRender2(),this.diagramRender3(),this.diagramRender4(),this.diagramRender5(),this.diagramRender6()}},{key:"diagramRender1",value:function(){h(g.a.Diagram,"myDiagramDiv1").add(h(g.a.Part,"Graduated",{background:"white"},h(g.a.Shape,"LineH",{width:300}),h(g.a.Shape,"LineV",{height:10})))}},{key:"diagramRender2",value:function(){h(g.a.Diagram,"myDiagramDiv2").add(h(g.a.Part,"Graduated",{background:"white"},h(g.a.Shape,"LineH",{width:300}),h(g.a.Shape,"LineV",{height:10}),h(g.a.TextBlock,{segmentOffset:new g.a.Point(0,20)})))}},{key:"diagramRender3",value:function(){h(g.a.Diagram,"myDiagramDiv3").add(h(g.a.Part,"Graduated",{background:"white",graduatedMin:0,graduatedMax:200,graduatedTickUnit:20},h(g.a.Shape,"LineH",{width:300}),h(g.a.Shape,"LineV",{height:10}),h(g.a.TextBlock,{segmentOffset:new g.a.Point(0,20)})))}},{key:"diagramRender4",value:function(){h(g.a.Diagram,"myDiagramDiv4").add(h(g.a.Part,"Graduated",{background:"white",graduatedMin:0,graduatedMax:200,graduatedTickUnit:20,graduatedTickBase:15},h(g.a.Shape,"LineH",{width:300}),h(g.a.Shape,"LineV",{height:10}),h(g.a.TextBlock,{segmentOffset:new g.a.Point(0,20)})))}},{key:"diagramRender5",value:function(){h(g.a.Diagram,"myDiagramDiv5").add(h(g.a.Part,"Graduated",{background:"white",graduatedMin:0,graduatedMax:200,graduatedTickUnit:10,graduatedTickBase:0},h(g.a.Shape,"LineH",{width:300}),h(g.a.Shape,"LineV",{height:10,interval:2}),h(g.a.TextBlock,{segmentOffset:new g.a.Point(0,10),interval:2,stroke:"blue",font:"10px sans-serif"})))}},{key:"diagramRender6",value:function(){h(g.a.Diagram,"myDiagramDiv6").add(h(g.a.Part,"Graduated",{background:"white",graduatedMin:0,graduatedMax:200,graduatedTickUnit:10,graduatedTickBase:0},h(g.a.Shape,"LineH",{width:300}),h(g.a.Shape,"LineV",{height:10,interval:2}),h(g.a.TextBlock,{segmentOffset:new g.a.Point(0,10),interval:2,stroke:"blue",font:"10px sans-serif"}),h(g.a.TextBlock,{segmentOffset:new g.a.Point(0,20),interval:4,font:"bold 12px sans-serif"})))}},{key:"render",value:function(){return d.a.createElement("div",{className:"page-content"},d.a.createElement("div",{className:"article"},d.a.createElement("div",{className:"article-title"},d.a.createElement("h1",null,"GoJS\u9762\u677f\u2014\u2014\u7b2c\u4e09\u8282 \u523b\u5ea6\u9762\u677f(Graduated Panel)")),d.a.createElement("div",{className:"article-content"},d.a.createElement("h2",null,"Graduated Panels"),d.a.createElement("ul",null,d.a.createElement("li",null,"\u7528\u4e8e\u6cbf\u7740\u4e3b\u8981Shape\u7684\u8fb9\u7ed8\u5236\u89c4\u5219\u7684\u6807\u8bb0\u6216\u6587\u672c\u6807\u7b7e"),d.a.createElement("li",null,"\u5fc5\u987b\u67092\u4e2a\u610f\u601d\u5143\u7d20"),d.a.createElement("li",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u4e3bShape\u5143\u7d20\u662f\u7b2c\u4e00\u4e2a\u5143\u7d20\u2014\u2014\u53ef\u4ee5\u66f4\u6539")),d.a.createElement(c.a,{value:'let $ = go.GraphObject.make;\nlet myDiagram = $(go.Diagram, "myDiagramDiv");\nmyDiagram.add(\n    $(go.Part, "Graduated", {\n            background: "white"\n        },\n        $(go.Shape, "LineH", {\n            width: 300\n        }),\n        $(go.Shape, "LineV", {\n            height: 10\n        })\n    )\n);',options:{theme:"monokai",mode:"JSX",readOnly:!0}}),d.a.createElement("div",{id:"myDiagramDiv1",className:"diagram",style:{maxWidth:400}}),d.a.createElement("h2",null,"Graduated Panel Properties"),d.a.createElement("h3",null,"graduatedMin\u3001graduatedMax"),d.a.createElement("ul",null,d.a.createElement("li",null,'Graduated Panel\u8303\u56f4\u5305\u62ec\u5176"graduatedMin"\u548c"graduatedMax"\u4e4b\u95f4\u7684\u503c')),d.a.createElement("ul",{"data-lake-indent":"1"},d.a.createElement("li",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u5b83\u4eec\u5206\u522b\u662fO\u548c100")),d.a.createElement("h3",null,"graduatedTickUnit"),d.a.createElement("ul",null,d.a.createElement("li",null,'"graduatedTickUnit"\u2014\u2014\u751f\u6210\u6807\u8bb0\u7684\u9891\u7387')),d.a.createElement("ul",{"data-lake-indent":"1"},d.a.createElement("li",null,"\u9ed8\u8ba4\u503c\u662f10\u2014\u2014\u6bcf10\u4e2a\u5355\u4f4d\uff0c\u751f\u6210\u4e00\u4e2a\u6807\u8bb0")),d.a.createElement(c.a,{value:'myDiagram.add(\n    $(go.Part, "Graduated", {\n            background: "white"\n        },\n        $(go.Shape, "LineH", {\n            width: 300\n        }),\n        $(go.Shape, "LineV", {\n            height: 10\n        }),\n        $(go.TextBlock, {\n            segmentOffset: new go.Point(0, 20)\n        })\n    )\n);',options:{theme:"monokai",mode:"JSX",readOnly:!0}}),d.a.createElement("div",{id:"myDiagramDiv2",className:"diagram",style:{maxWidth:400}}),d.a.createElement("h3",null,"segmentOffset"),d.a.createElement("ul",null,d.a.createElement("li",null,"segmentOffset\u51b3\u5b9a\u4e86\u523b\u5ea6\u7684\u504f\u79fb\u91cf")),d.a.createElement(c.a,{value:'myDiagram.add(\n    $(go.Part, "Graduated", {\n            background: "white",\n            graduatedMin: 0,\n            graduatedMax: 200,\n            graduatedTickUnit: 20\n        },\n        $(go.Shape, "LineH", {\n            width: 300\n        }),\n        $(go.Shape, "LineV", {\n            height: 10\n        }),\n        $(go.TextBlock, {\n            segmentOffset: new go.Point(0, 20)\n        })\n    )\n);',options:{theme:"monokai",mode:"JSX",readOnly:!0}}),d.a.createElement("div",{id:"myDiagramDiv3",className:"diagram",style:{maxWidth:400}}),d.a.createElement("h3",null,"graduatedTickBase"),d.a.createElement("ul",null,d.a.createElement("li",null,"graduatedTickBase\u51b3\u5b9a\u4e86\u6807\u8bb0\u7684\u8d77\u59cb\u503c")),d.a.createElement(c.a,{value:'myDiagram.add(\n    $(go.Part, "Graduated", {\n            background: "white",\n            graduatedMin: 0,\n            graduatedMax: 200,\n            graduatedTickUnit: 20,\n            graduatedTickBase: 15\n        },\n        $(go.Shape, "LineH", {\n            width: 300\n        }),\n        $(go.Shape, "LineV", {\n            height: 10\n        }),\n        $(go.TextBlock, {\n            segmentOffset: new go.Point(0, 20)\n        })\n    )\n);',options:{theme:"monokai",mode:"JSX",readOnly:!0}}),d.a.createElement("div",{id:"myDiagramDiv4",className:"diagram",style:{maxWidth:400}}),d.a.createElement("h3",null,"interval"),d.a.createElement("ul",null,d.a.createElement("li",null,"interval\u5c5e\u6027\u51b3\u5b9a\u4e86\u523b\u5ea6\u6216\u6807\u7b7e\u51fa\u73b0\u7684\u9891\u7387")),d.a.createElement(c.a,{value:'myDiagram.add(\n    $(go.Part, "Graduated", {\n            background: "white",\n            graduatedMin: 0,\n            graduatedMax: 200,\n            graduatedTickUnit: 10,\n            graduatedTickBase: 0\n        },\n        $(go.Shape, "LineH", {\n            width: 300\n        }),\n        $(go.Shape, "LineV", {\n            height: 10,\n            interval: 2,\n        }),\n        $(go.TextBlock, {\n            segmentOffset: new go.Point(0, 10),\n            interval: 2,\n            stroke: "blue",\n            font: "10px sans-serif"\n        })\n    )\n);',options:{theme:"monokai",mode:"JSX",readOnly:!0}}),d.a.createElement("div",{id:"myDiagramDiv5",className:"diagram",style:{maxWidth:400}}),d.a.createElement("h3",null,"\u4e24\u7ec4\u6807\u7b7e"),d.a.createElement("p",null,"\u6dfb\u52a0\u7b2c\u4e8c\u7ec4\u6807\u7b7e"),d.a.createElement(c.a,{value:'myDiagram.add(\n    $(go.Part, "Graduated", {\n            background: "white",\n            graduatedMin: 0,\n            graduatedMax: 200,\n            graduatedTickUnit: 10,\n            graduatedTickBase: 0\n        },\n        $(go.Shape, "LineH", {\n            width: 300\n        }),\n        $(go.Shape, "LineV", {\n            height: 10,\n            interval: 2,\n        }),\n        $(go.TextBlock, {\n            segmentOffset: new go.Point(0, 10),\n            interval: 2,\n            stroke: "blue",\n            font: "10px sans-serif"\n        }),\n        $(go.TextBlock, {\n            segmentOffset: new go.Point(0, 20),\n            interval: 4,\n            font: "bold 12px sans-serif"\n        }),\n    )\n);',options:{theme:"monokai",mode:"JSX",readOnly:!0}}),d.a.createElement("div",{id:"myDiagramDiv6",className:"diagram",style:{maxWidth:400}}),d.a.createElement("p",null,d.a.createElement("br",null)),d.a.createElement("p",null,d.a.createElement("br",null)),d.a.createElement("p",null,"\u76f8\u5173\u4ee3\u7801\uff1a"),d.a.createElement("p",null,d.a.createElement("a",{href:"https://github.com/LiuZheAb/GoJS_Demo/blob/master/15graduatedPanel.html",target:"_blank",rel:"noopener noreferrer"},"https://github.com/LiuZheAb/GoJS_Demo/blob/master/15graduatedPanel.html")))),d.a.createElement("div",{className:"directory"},d.a.createElement(m.a,{articleTree:this.state.articleTree})))}}]),t}(o.Component)},59:function(e,a,t){var n={"./apl/apl.js":[60,78],"./asciiarmor/asciiarmor.js":[61,79],"./asn.1/asn.1.js":[62,80],"./asterisk/asterisk.js":[63,81],"./brainfuck/brainfuck.js":[64,82],"./clike/clike.js":[47,4],"./clojure/clojure.js":[65,83],"./cmake/cmake.js":[66,84],"./cobol/cobol.js":[67,85],"./coffeescript/coffeescript.js":[48,86],"./commonlisp/commonlisp.js":[68,87],"./crystal/crystal.js":[69,88],"./css/css.js":[43,3],"./cypher/cypher.js":[70,89],"./d/d.js":[71,90],"./dart/dart.js":[72,4,91],"./diff/diff.js":[73,92],"./django/django.js":[74,2,3,54],"./dockerfile/dockerfile.js":[75,65],"./dtd/dtd.js":[76,93],"./dylan/dylan.js":[77,94],"./ebnf/ebnf.js":[78,95],"./ecl/ecl.js":[79,96],"./eiffel/eiffel.js":[80,97],"./elm/elm.js":[81,98],"./erlang/erlang.js":[82,99],"./factor/factor.js":[83,66],"./fcl/fcl.js":[84,100],"./forth/forth.js":[85,101],"./fortran/fortran.js":[86,102],"./gas/gas.js":[87,103],"./gfm/gfm.js":[88,6,64],"./gherkin/gherkin.js":[89,104],"./go/go.js":[90,105],"./groovy/groovy.js":[91,106],"./haml/haml.js":[92,2,3,57],"./handlebars/handlebars.js":[49,60],"./haskell-literate/haskell-literate.js":[93,69],"./haskell/haskell.js":[50,107],"./haxe/haxe.js":[94,108],"./htmlembedded/htmlembedded.js":[95,2,3,53],"./htmlmixed/htmlmixed.js":[42,2,3,70],"./http/http.js":[96,109],"./idl/idl.js":[97,110],"./javascript/javascript.js":[44,2],"./jinja2/jinja2.js":[98,111],"./jsx/jsx.js":[99,2,71],"./julia/julia.js":[100,112],"./livescript/livescript.js":[101,113],"./lua/lua.js":[102,114],"./markdown/markdown.js":[56,6],"./mathematica/mathematica.js":[103,115],"./mbox/mbox.js":[104,116],"./meta.js":[46],"./mirc/mirc.js":[105,117],"./mllike/mllike.js":[106,118],"./modelica/modelica.js":[107,119],"./mscgen/mscgen.js":[108,120],"./mumps/mumps.js":[109,121],"./nginx/nginx.js":[110,122],"./nsis/nsis.js":[111,67],"./ntriples/ntriples.js":[112,123],"./octave/octave.js":[113,124],"./oz/oz.js":[114,125],"./pascal/pascal.js":[115,126],"./pegjs/pegjs.js":[116,2,127],"./perl/perl.js":[117,128],"./php/php.js":[118,2,3,4,61],"./pig/pig.js":[119,129],"./powershell/powershell.js":[120,130],"./properties/properties.js":[121,131],"./protobuf/protobuf.js":[122,132],"./pug/pug.js":[57,2,3,5],"./puppet/puppet.js":[123,133],"./python/python.js":[51,134],"./q/q.js":[124,135],"./r/r.js":[125,136],"./rpm/rpm.js":[126,137],"./rst/rst.js":[127,56],"./ruby/ruby.js":[45,138],"./rust/rust.js":[128,68],"./sas/sas.js":[129,139],"./sass/sass.js":[53,3,140],"./scheme/scheme.js":[130,141],"./shell/shell.js":[131,142],"./sieve/sieve.js":[132,143],"./slim/slim.js":[133,2,3,58],"./smalltalk/smalltalk.js":[134,144],"./smarty/smarty.js":[135,145],"./solr/solr.js":[136,146],"./soy/soy.js":[137,2,3,62],"./sparql/sparql.js":[138,147],"./spreadsheet/spreadsheet.js":[139,148],"./sql/sql.js":[140,149],"./stex/stex.js":[52,150],"./stylus/stylus.js":[58,7],"./swift/swift.js":[141,151],"./tcl/tcl.js":[142,152],"./textile/textile.js":[143,153],"./tiddlywiki/tiddlywiki.js":[144,154],"./tiki/tiki.js":[145,155],"./toml/toml.js":[146,156],"./tornado/tornado.js":[147,2,3,55],"./troff/troff.js":[148,157],"./ttcn-cfg/ttcn-cfg.js":[150,158],"./ttcn/ttcn.js":[149,159],"./turtle/turtle.js":[151,160],"./twig/twig.js":[152,63],"./vb/vb.js":[153,161],"./vbscript/vbscript.js":[154,162],"./velocity/velocity.js":[155,163],"./verilog/verilog.js":[156,164],"./vhdl/vhdl.js":[157,165],"./vue/vue.js":[158,2,3,7,5,37],"./webidl/webidl.js":[159,166],"./xml/xml.js":[40,167],"./xquery/xquery.js":[160,168],"./yacas/yacas.js":[161,169],"./yaml-frontmatter/yaml-frontmatter.js":[162,72],"./yaml/yaml.js":[54,170],"./z80/z80.js":[163,171]};function r(e){if(!t.o(n,e))return Promise.resolve().then((function(){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}));var a=n[e],r=a[0];return Promise.all(a.slice(1).map(t.e)).then((function(){return t.t(r,7)}))}r.keys=function(){return Object.keys(n)},r.id=59,e.exports=r}}]);
//# sourceMappingURL=31.c5dd9b8b.chunk.js.map