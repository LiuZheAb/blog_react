(this.webpackJsonpblog=this.webpackJsonpblog||[]).push([[28],{333:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return p}));var n=a(11),l=a(12),r=a(13),o=a(14),s=a(0),i=a.n(s),c=a(162),m=(a(40),a(36)),u=a(164),d=a.n(u),j=d.a.GraphObject.make,p=function(e){Object(o.a)(a,e);var t=Object(r.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.diagramRender1()}},{key:"diagramRender1",value:function(){var e=j(d.a.Diagram,"myDiagramDiv1");e.nodeTemplate=j(d.a.Node,"Auto",{locationSpot:d.a.Spot.Center},new d.a.Binding("location","loc",d.a.Point.parse).makeTwoWay(d.a.Point.stringify),j(d.a.Shape,"RoundedRectangle",{fill:"lightblue"}),j(d.a.TextBlock,{margin:8},new d.a.Binding("text","key"))),e.model=j(d.a.GraphLinksModel,{nodeDataArray:[{key:"Alpha",loc:"100 100"},{key:"Beta",loc:"100 120"},{key:"Delta"},{key:"Gamma"}]})}},{key:"render",value:function(){return i.a.createElement("div",{className:"page-content"},i.a.createElement("div",{className:"article"},i.a.createElement("div",{className:"article-title"},i.a.createElement("h1",null,"GoJS\u5e03\u5c40\u2014\u2014\u7b2c\u4e00\u8282 GoJS\u5e03\u5c40\u6559\u7a0b\u6982\u8ff0")),i.a.createElement("div",{className:"article-content"},i.a.createElement("h2",null,"\u5e03\u5c40Layouts"),i.a.createElement("ul",null,i.a.createElement("li",null,"\u5b9a\u4f4dPart\u96c6\u5408\u7684Node\u6216Link"),i.a.createElement("li",null,"GoJS Layout\u662f\u81ea\u52a8\u5e03\u5c40"),i.a.createElement("li",null,"Diagram.layout\u9ed8\u8ba4\u4e3a\u57fa\u672c\u5e03\u5c40\u7c7b\u7684\u5b9e\u4f8b")),i.a.createElement("ul",{"data-lake-indent":"1"},i.a.createElement("li",null,"\u8bbe\u7f6e\u6ca1\u6709\u5b9a\u4f4d\u7684Node\u7684\u4f4d\u7f6e"),i.a.createElement("li",null,"\u5b8c\u5168\u5ffd\u7565Link")),i.a.createElement(c.a,{value:'let $ = go.GraphObject.make;\nlet myDiagram = $(go.Diagram, "myDiagramDiv");\n\nmyDiagram.nodeTemplate =\n    $(go.Node, "Auto", {\n            locationSpot: go.Spot.Center\n        },\n        new go.Binding("location", "loc", go.Point.parse).makeTwoWay(go.Point.stringify),\n        $(go.Shape, "RoundedRectangle", {\n            fill: "lightblue"\n        }),\n        $(go.TextBlock, {\n                margin: 8\n            },\n            new go.Binding("text", "key"))\n    );\n\nmyDiagram.model =\n    $(go.GraphLinksModel, {\n        nodeDataArray: [{\n                key: "Alpha",\n                loc: "100 100"\n            },\n            {\n                key: "Beta",\n                loc: "100 120"\n            },\n            {\n                key: "Delta"\n            },\n            {\n                key: "Gamma"\n            },\n        ]\n    });',options:{theme:"monokai",mode:"JSX",readOnly:!0}}),i.a.createElement("div",{id:"myDiagramDiv1",className:"diagram"}),i.a.createElement("h2",null,"Layout\u521d\u59cb\u5316"),i.a.createElement("ul",null,i.a.createElement("li",null,"\u7b80\u5355\u7684\u58f0\u660e")),i.a.createElement(c.a,{value:"diagram.layout = new go.ForceDirectedLayout();",options:{theme:"monokai",mode:"JSX",readOnly:!0}}),i.a.createElement("ul",null,i.a.createElement("li",null,"\u4f7f\u7528go.GraphObject.make(",i.a.createElement("em",null,"\u5df2\u5b9a\u4e49\u4e3a$"),")\u521d\u59cb\u5316")),i.a.createElement(c.a,{value:'let diagram = $(go.Diagram, "maDiagramDiv",\n    {\n        initialContentAlignment: go.Spot.Center,\n        layout: $(go.TreeLayout,\n            {angle: 90, nodeSpacing: 10,layerSpacing: 30 })\n    })',options:{theme:"monokai",mode:"JSX",readOnly:!0}}),i.a.createElement("p",null,"\u66f4\u591aLayout\u793a\u4f8b\u8bf7\u53c2\u8003",i.a.createElement("a",{href:"https://gojs.net/latest/samples/gLayout.html",target:"_blank",rel:"noopener noreferrer"},"GridLayout"),"\u3001",i.a.createElement("a",{href:"https://gojs.net/latest/samples/tLayout.html",target:"_blank",rel:"noopener noreferrer"},"Tree Layout"),"\u3001",i.a.createElement("a",{href:"https://gojs.net/latest/intro/extensions.html",target:"_blank",rel:"noopener noreferrer"},"Extending GoJS")),i.a.createElement("h2",null,"Layout\u5931\u6548"),i.a.createElement("ul",null,i.a.createElement("li",null,'Layout\u53ef\u4ee5\u662f"\u6709\u6548\u7684"\u4e5f\u53ef\u4ee5\u662f"\u65e0\u6548\u7684",Layout\u5931\u6548\u7684\u539f\u56e0\u5305\u62ec:')),i.a.createElement("ul",{"data-lake-indent":"1"},i.a.createElement("li",null,"\u4eceLayout\u4e2d\u6dfb\u52a0/\u5220\u9664\u7684Node/Link"),i.a.createElement("li",null,"Node/Link\u6539\u53d8\u4e86\u53ef\u89c1\u6027"),i.a.createElement("li",null,"Node\u6539\u53d8\u4e86\u5927\u5c0f")),i.a.createElement("ul",null,i.a.createElement("li",null,"Layout.isOngoing\u63a7\u5236\u5f53\u8fd9\u4e9b\u6539\u53d8\u53d1\u751f\u65f6Layout\u662f\u5426\u53d1\u751f\u6539\u53d8"),i.a.createElement("li",null,"Layout.isInitial\u63a7\u5236\u5f53Diagram\u7b2c\u4e00\u6b21\u52a0\u8f7d\u65f6Layout\u662f\u5426\u751f\u6548")),i.a.createElement("p",null,"Layout.invalidateLayout()"),i.a.createElement("p",null,"Diagram.layoutDiagram(true)"),i.a.createElement("h3",null,"Layout Invalidation(cont.)"),i.a.createElement("ul",null,i.a.createElement("li",null,"\u5982\u679c\u8bbe\u7f6e\u4e86Part\u7684\u201clayoutConditions\u201d\u5c5e\u6027\uff0c\u5219Layout\u5931\u6548\u53ef\u4ee5\u66f4\u52a0\u5177\u4f53")),i.a.createElement(c.a,{value:"$(go.Node, \xb7 \xb7 \xb7,\n    { layoutConditions: go.Part.LayoutStandard & ~go.Part.LayoutNodeSized },\n    \xb7 \xb7 \xb7\n)",options:{theme:"monokai",mode:"JSX",readOnly:!0}}),i.a.createElement("ul",null,i.a.createElement("li",null,"\u4e34\u65f6layer\u4e2d\u7684Part\u4e0d\u4f1a\u4f7f\u4efb\u4f55Layout\u5931\u6548"),i.a.createElement("li",null,"\u8bbe\u7f6ePart.islayoutposition\u4e3afalse\uff0cLayout\u5c06\u5b8c\u5168\u5ffd\u7565\u8fd9\u4e00Part")),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("p",null,"\u76f8\u5173\u4ee3\u7801\uff1a"),i.a.createElement("p",null,i.a.createElement("a",{href:"https://github.com/LiuZheAb/GoJS_Demo/blob/master/07overviewLayout.html",target:"_blank",rel:"noopener noreferrer"},"https://github.com/LiuZheAb/GoJS_Demo/blob/master/07overviewLayout.html")))),i.a.createElement(m.a,null))}}]),a}(s.Component)},36:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));var n=a(11),l=a(12),r=a(15),o=a(13),s=a(14),i=a(0),c=a.n(i),m=(a(37),function(e){Object(s.a)(a,e);var t=Object(o.a)(a);function a(e){var l;return Object(n.a)(this,a),(l=t.call(this,e)).bindHandleScroll=function(e){var t=!!e.srcElement&&e.srcElement.documentElement.scrollTop||window.pageYOffset||(e.srcElement?e.srcElement.body.scrollTop:0);l.setState({scrollTop:t})},l.scrollToAnchor=function(e){if(e){var t=document.getElementById(e);t&&t.scrollIntoView({block:"start",behavior:"smooth"})}},l.state={articleTree:[],scrollTop:null},l.getArticleTree=l.getArticleTree.bind(Object(r.a)(l)),l}return Object(l.a)(a,[{key:"getArticleTree",value:function(){for(var e=document.getElementsByClassName("article-content")[0].children,t=[],a=0;a<e.length-1;a++){var n=e[a].nodeName;"H2"!==n&&"H3"!==n||(e[a].id=e[a].innerText,t.push({name:e[a].innerText,tag:e[a].nodeName}))}this.setState({articleTree:t})}},{key:"componentDidMount",value:function(){this.getArticleTree();var e=document.getElementById("header"),t=window.scrollY,a=document.getElementsByClassName("directory-list")[0],n=a.offsetTop;window.addEventListener("scroll",this.bindHandleScroll),window.onscroll=function(){for(var l=document.getElementsByClassName("page-footer")[0],r=0;l;)r+=l.offsetTop,l=l.offsetParent;var o=document.body.scrollTop||document.documentElement.scrollTop;if((o+=n+a.offsetHeight)>r+e.offsetHeight)a.style="position:fixed;top:".concat(n-o+r,"px;transition:none");else{var s=window.scrollY;s>e.offsetHeight&&(t<s&&(e.className="ant-layout-header header header-affixed",a.className="directory-list directory-affixed",t=s),t>s&&(e.className="ant-layout-header header header-visible",a.className="directory-list",t=s)),a.style=""}}}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.bindHandleScroll)}},{key:"render",value:function(){var e=this,t=this.state,a=t.articleTree,n=t.scrollTop,l=a.length;if(document.getElementById("tree-num-0")&&l>0){for(var r=[],o=0;o<l;o++){var s=document.getElementById(a[o].name);r.push(s.offsetTop)}for(var i=r.findIndex((function(e){return e>n}))-1,m=0;m<l;m++)document.getElementById("tree-num-".concat(m)).className=m===i?"tree-num directory-item-active":"tree-num";-2===i&&(document.getElementById("tree-num-".concat(l-1)).className="tree-num directory-item-active")}return c.a.createElement("div",{className:"directory"},c.a.createElement("ul",{className:"directory-list"},a.map((function(t,a){return c.a.createElement("li",{key:a,id:"tree-num-".concat(a),className:"tree-num",title:t.name,style:{paddingLeft:"H2"===t.tag?10:22},onClick:function(){e.scrollToAnchor("".concat(t.name))}},t.name)}))))}}]),a}(i.Component))},37:function(e,t,a){},40:function(e,t,a){},57:function(e,t,a){var n={"./apl/apl.js":[58,79],"./asciiarmor/asciiarmor.js":[59,80],"./asn.1/asn.1.js":[60,81],"./asterisk/asterisk.js":[61,82],"./brainfuck/brainfuck.js":[62,83],"./clike/clike.js":[46,5],"./clojure/clojure.js":[63,84],"./cmake/cmake.js":[64,85],"./cobol/cobol.js":[65,86],"./coffeescript/coffeescript.js":[47,87],"./commonlisp/commonlisp.js":[66,88],"./crystal/crystal.js":[67,89],"./css/css.js":[42,3],"./cypher/cypher.js":[68,90],"./d/d.js":[69,91],"./dart/dart.js":[70,5,92],"./diff/diff.js":[71,93],"./django/django.js":[72,2,3,59],"./dockerfile/dockerfile.js":[73,71],"./dtd/dtd.js":[74,94],"./dylan/dylan.js":[75,95],"./ebnf/ebnf.js":[76,96],"./ecl/ecl.js":[77,97],"./eiffel/eiffel.js":[78,98],"./elm/elm.js":[79,99],"./erlang/erlang.js":[80,100],"./factor/factor.js":[81,72],"./fcl/fcl.js":[82,101],"./forth/forth.js":[83,102],"./fortran/fortran.js":[84,103],"./gas/gas.js":[85,104],"./gfm/gfm.js":[86,48,70],"./gherkin/gherkin.js":[87,105],"./go/go.js":[88,106],"./groovy/groovy.js":[89,107],"./haml/haml.js":[90,2,3,62],"./handlebars/handlebars.js":[48,66],"./haskell-literate/haskell-literate.js":[91,75],"./haskell/haskell.js":[49,108],"./haxe/haxe.js":[92,109],"./htmlembedded/htmlembedded.js":[93,2,3,58],"./htmlmixed/htmlmixed.js":[41,2,3,76],"./http/http.js":[94,110],"./idl/idl.js":[95,111],"./javascript/javascript.js":[43,2],"./jinja2/jinja2.js":[96,112],"./jsx/jsx.js":[97,2,77],"./julia/julia.js":[98,113],"./livescript/livescript.js":[99,114],"./lua/lua.js":[100,115],"./markdown/markdown.js":[54,48],"./mathematica/mathematica.js":[101,116],"./mbox/mbox.js":[102,117],"./meta.js":[45],"./mirc/mirc.js":[103,118],"./mllike/mllike.js":[104,119],"./modelica/modelica.js":[105,120],"./mscgen/mscgen.js":[106,121],"./mumps/mumps.js":[107,122],"./nginx/nginx.js":[108,123],"./nsis/nsis.js":[109,73],"./ntriples/ntriples.js":[110,124],"./octave/octave.js":[111,125],"./oz/oz.js":[112,126],"./pascal/pascal.js":[113,127],"./pegjs/pegjs.js":[114,2,128],"./perl/perl.js":[115,129],"./php/php.js":[116,2,3,5,67],"./pig/pig.js":[117,130],"./powershell/powershell.js":[118,131],"./properties/properties.js":[119,132],"./protobuf/protobuf.js":[120,133],"./pug/pug.js":[55,2,3,47],"./puppet/puppet.js":[121,134],"./python/python.js":[50,135],"./q/q.js":[122,136],"./r/r.js":[123,137],"./rpm/rpm.js":[124,138],"./rst/rst.js":[125,61],"./ruby/ruby.js":[44,139],"./rust/rust.js":[126,74],"./sas/sas.js":[127,140],"./sass/sass.js":[52,3,141],"./scheme/scheme.js":[128,142],"./shell/shell.js":[129,143],"./sieve/sieve.js":[130,144],"./slim/slim.js":[131,2,3,63],"./smalltalk/smalltalk.js":[132,145],"./smarty/smarty.js":[133,146],"./solr/solr.js":[134,147],"./soy/soy.js":[135,2,3,68],"./sparql/sparql.js":[136,148],"./spreadsheet/spreadsheet.js":[137,149],"./sql/sql.js":[138,150],"./stex/stex.js":[51,151],"./stylus/stylus.js":[56,49],"./swift/swift.js":[139,152],"./tcl/tcl.js":[140,153],"./textile/textile.js":[141,154],"./tiddlywiki/tiddlywiki.js":[142,155],"./tiki/tiki.js":[143,156],"./toml/toml.js":[144,157],"./tornado/tornado.js":[145,2,3,60],"./troff/troff.js":[146,158],"./ttcn-cfg/ttcn-cfg.js":[148,159],"./ttcn/ttcn.js":[147,160],"./turtle/turtle.js":[149,161],"./twig/twig.js":[150,69],"./vb/vb.js":[151,162],"./vbscript/vbscript.js":[152,163],"./velocity/velocity.js":[153,164],"./verilog/verilog.js":[154,165],"./vhdl/vhdl.js":[155,166],"./vue/vue.js":[156,2,3,49,47,56],"./webidl/webidl.js":[157,167],"./xml/xml.js":[38,168],"./xquery/xquery.js":[158,169],"./yacas/yacas.js":[159,170],"./yaml-frontmatter/yaml-frontmatter.js":[160,78],"./yaml/yaml.js":[53,171],"./z80/z80.js":[161,172]};function l(e){if(!a.o(n,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=n[e],l=t[0];return Promise.all(t.slice(1).map(a.e)).then((function(){return a.t(l,7)}))}l.keys=function(){return Object.keys(n)},l.id=57,e.exports=l}}]);
//# sourceMappingURL=28.bfc2c2d5.chunk.js.map