(this.webpackJsonpblog=this.webpackJsonpblog||[]).push([[19],{38:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var l=a(8),n=a(9),r=a(10),o=a(11),s=a(0),i=a.n(s),c=(a(39),function(e){Object(o.a)(a,e);var t=Object(r.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).bindHandleScroll=function(e){var t=!!e.srcElement&&e.srcElement.documentElement.scrollTop||window.pageYOffset||(e.srcElement?e.srcElement.body.scrollTop:0);n.setState({scrollTop:t})},n.scrollToAnchor=function(e){if(e){var t=document.getElementById(e);t&&t.scrollIntoView()}},n.state={articleTree:n.props.articleTree,scrollTop:null},n}return Object(n.a)(a,[{key:"componentDidMount",value:function(){var e=document.getElementById("header"),t=window.scrollY,a=document.getElementsByClassName("directory-list")[0],l=a.offsetTop;window.addEventListener("scroll",this.bindHandleScroll),window.onscroll=function(){for(var n=document.getElementsByClassName("page-footer")[0],r=0;n;)r+=n.offsetTop,n=n.offsetParent;var o=document.body.scrollTop||document.documentElement.scrollTop;if((o+=l+a.offsetHeight)>r)a.style="position:fixed;top:".concat(l-o+r-e.offsetHeight,"px;transition:none");else{var s=window.scrollY;a&&(s>e.offsetHeight&&(t<s&&(e.className="ant-layout-header header header-affixed",a.className="directory-list directory-affixed directory-list2",t=s),t>s&&(e.className="ant-layout-header header header-visible",a.className="directory-list directory-list2",t=s)),a.style="")}}}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.bindHandleScroll),this.setState({articleTree:this.props.articleTree})}},{key:"render",value:function(){var e=this,t=this.state,a=t.articleTree,l=t.scrollTop,n=a.length;if(document.getElementById("tree-num-0")&&n>0){for(var r=[],o=0;o<n;o++){var s=document.getElementById(a[o].name);r.push(s.offsetTop)}for(var c=r.findIndex((function(e){return e>l}))-1,m=0;m<n;m++)document.getElementById("tree-num-".concat(m)).className=m===c?"tree-num directory-item-active":"tree-num";-2===c&&(document.getElementById("tree-num-".concat(n-1)).className="tree-num directory-item-active")}return i.a.createElement("ul",{className:"directory-list"},a.map((function(t,a){return i.a.createElement("li",{key:a,id:"tree-num-".concat(a),className:"tree-num",style:{paddingLeft:"H2"===t.tag?"10px":"22px"},onClick:function(){e.scrollToAnchor("".concat(t.name))}},t.name)})))}}],[{key:"getDerivedStateFromProps",value:function(e,t){var a=e.articleTree;return a!==t.articleTree?{articleTree:a}:null}}]),a}(s.Component))},39:function(e,t,a){},412:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return y}));var l=a(8),n=a(9),r=a(15),o=a(10),s=a(11),i=a(0),c=a.n(i),m=a(165),u=(a(60),a(38)),d=a(58),j=a.n(d),p=j.a.GraphObject.make,y=function(e){Object(s.a)(a,e);var t=Object(o.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={articleTree:[]},n.getArticleTree=n.getArticleTree.bind(Object(r.a)(n)),n}return Object(n.a)(a,[{key:"getArticleTree",value:function(){for(var e=document.getElementsByClassName("article-content")[0].children,t=[],a=0;a<e.length-1;a++){var l=e[a].nodeName;"H2"!==l&&"H3"!==l||(e[a].id=e[a].innerText,t.push({name:e[a].innerText,tag:e[a].nodeName}))}this.setState({articleTree:t})}},{key:"componentDidMount",value:function(){this.getArticleTree(),this.diagramRender1()}},{key:"diagramRender1",value:function(){var e=p(j.a.Diagram,"myDiagramDiv1");e.nodeTemplate=p(j.a.Node,"Auto",{locationSpot:j.a.Spot.Center},new j.a.Binding("location","loc",j.a.Point.parse).makeTwoWay(j.a.Point.stringify),p(j.a.Shape,"RoundedRectangle",{fill:"lightblue"}),p(j.a.TextBlock,{margin:8},new j.a.Binding("text","key"))),e.model=p(j.a.GraphLinksModel,{nodeDataArray:[{key:"Alpha",loc:"100 100"},{key:"Beta",loc:"100 120"},{key:"Delta"},{key:"Gamma"}]})}},{key:"render",value:function(){return c.a.createElement("div",{className:"page-content"},c.a.createElement("div",{className:"article"},c.a.createElement("div",{className:"article-title"},c.a.createElement("h1",null,"GoJS\u5e03\u5c40\u2014\u2014\u7b2c\u4e00\u8282 GoJS\u5e03\u5c40\u6559\u7a0b\u6982\u8ff0")),c.a.createElement("div",{className:"article-content"},c.a.createElement("h2",null,"\u5e03\u5c40Layouts"),c.a.createElement("ul",null,c.a.createElement("li",null,"\u5b9a\u4f4dPart\u96c6\u5408\u7684Node\u6216Link"),c.a.createElement("li",null,"GoJS Layout\u662f\u81ea\u52a8\u5e03\u5c40"),c.a.createElement("li",null,"Diagram.layout\u9ed8\u8ba4\u4e3a\u57fa\u672c\u5e03\u5c40\u7c7b\u7684\u5b9e\u4f8b")),c.a.createElement("ul",{"data-lake-indent":"1"},c.a.createElement("li",null,"\u8bbe\u7f6e\u6ca1\u6709\u5b9a\u4f4d\u7684Node\u7684\u4f4d\u7f6e"),c.a.createElement("li",null,"\u5b8c\u5168\u5ffd\u7565Link")),c.a.createElement(m.a,{value:'let $ = go.GraphObject.make;\nlet myDiagram = $(go.Diagram, "myDiagramDiv");\n\nmyDiagram.nodeTemplate =\n    $(go.Node, "Auto", {\n            locationSpot: go.Spot.Center\n        },\n        new go.Binding("location", "loc", go.Point.parse).makeTwoWay(go.Point.stringify),\n        $(go.Shape, "RoundedRectangle", {\n            fill: "lightblue"\n        }),\n        $(go.TextBlock, {\n                margin: 8\n            },\n            new go.Binding("text", "key"))\n    );\n\nmyDiagram.model =\n    $(go.GraphLinksModel, {\n        nodeDataArray: [{\n                key: "Alpha",\n                loc: "100 100"\n            },\n            {\n                key: "Beta",\n                loc: "100 120"\n            },\n            {\n                key: "Delta"\n            },\n            {\n                key: "Gamma"\n            },\n        ]\n    });',options:{theme:"monokai",mode:"JSX",readOnly:!0}}),c.a.createElement("div",{id:"myDiagramDiv1",className:"diagram"}),c.a.createElement("h2",null,"Layout\u521d\u59cb\u5316"),c.a.createElement("ul",null,c.a.createElement("li",null,"\u7b80\u5355\u7684\u58f0\u660e")),c.a.createElement(m.a,{value:"diagram.layout = new go.ForceDirectedLayout();",options:{theme:"monokai",mode:"JSX",readOnly:!0}}),c.a.createElement("ul",null,c.a.createElement("li",null,"\u4f7f\u7528go.GraphObject.make(",c.a.createElement("em",null,"\u5df2\u5b9a\u4e49\u4e3a$"),")\u521d\u59cb\u5316")),c.a.createElement(m.a,{value:'let diagram = $(go.Diagram, "maDiagramDiv",\n    {\n        initialContentAlignment: go.Spot.Center,\n        layout: $(go.TreeLayout,\n            {angle: 90, nodeSpacing: 10,layerSpacing: 30 })\n    })',options:{theme:"monokai",mode:"JSX",readOnly:!0}}),c.a.createElement("p",null,"\u66f4\u591aLayout\u793a\u4f8b\u8bf7\u53c2\u8003",c.a.createElement("a",{href:"https://gojs.net/latest/samples/gLayout.html",target:"_blank",rel:"noopener noreferrer"},"GridLayout"),"\u3001",c.a.createElement("a",{href:"https://gojs.net/latest/samples/tLayout.html",target:"_blank",rel:"noopener noreferrer"},"Tree Layout"),"\u3001",c.a.createElement("a",{href:"https://gojs.net/latest/intro/extensions.html",target:"_blank",rel:"noopener noreferrer"},"Extending GoJS")),c.a.createElement("h2",null,"Layout\u5931\u6548"),c.a.createElement("ul",null,c.a.createElement("li",null,'Layout\u53ef\u4ee5\u662f"\u6709\u6548\u7684"\u4e5f\u53ef\u4ee5\u662f"\u65e0\u6548\u7684",Layout\u5931\u6548\u7684\u539f\u56e0\u5305\u62ec:')),c.a.createElement("ul",{"data-lake-indent":"1"},c.a.createElement("li",null,"\u4eceLayout\u4e2d\u6dfb\u52a0/\u5220\u9664\u7684Node/Link"),c.a.createElement("li",null,"Node/Link\u6539\u53d8\u4e86\u53ef\u89c1\u6027"),c.a.createElement("li",null,"Node\u6539\u53d8\u4e86\u5927\u5c0f")),c.a.createElement("ul",null,c.a.createElement("li",null,"Layout.isOngoing\u63a7\u5236\u5f53\u8fd9\u4e9b\u6539\u53d8\u53d1\u751f\u65f6Layout\u662f\u5426\u53d1\u751f\u6539\u53d8"),c.a.createElement("li",null,"Layout.isInitial\u63a7\u5236\u5f53Diagram\u7b2c\u4e00\u6b21\u52a0\u8f7d\u65f6Layout\u662f\u5426\u751f\u6548")),c.a.createElement("p",null,"Layout.invalidateLayout()"),c.a.createElement("p",null,"Diagram.layoutDiagram(true)"),c.a.createElement("h3",null,"Layout Invalidation(cont.)"),c.a.createElement("ul",null,c.a.createElement("li",null,"\u5982\u679c\u8bbe\u7f6e\u4e86Part\u7684\u201clayoutConditions\u201d\u5c5e\u6027\uff0c\u5219Layout\u5931\u6548\u53ef\u4ee5\u66f4\u52a0\u5177\u4f53")),c.a.createElement(m.a,{value:"$(go.Node, \xb7 \xb7 \xb7,\n    { layoutConditions: go.Part.LayoutStandard & ~go.Part.LayoutNodeSized },\n    \xb7 \xb7 \xb7\n)",options:{theme:"monokai",mode:"JSX",readOnly:!0}}),c.a.createElement("ul",null,c.a.createElement("li",null,"\u4e34\u65f6layer\u4e2d\u7684Part\u4e0d\u4f1a\u4f7f\u4efb\u4f55Layout\u5931\u6548"),c.a.createElement("li",null,"\u8bbe\u7f6ePart.islayoutposition\u4e3afalse\uff0cLayout\u5c06\u5b8c\u5168\u5ffd\u7565\u8fd9\u4e00Part")),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement("p",null,"\u76f8\u5173\u4ee3\u7801\uff1a"),c.a.createElement("p",null,c.a.createElement("a",{href:"https://github.com/LiuZheAb/GoJS_Demo/blob/master/07overviewLayout.html",target:"_blank",rel:"noopener noreferrer"},"https://github.com/LiuZheAb/GoJS_Demo/blob/master/07overviewLayout.html")))),c.a.createElement("div",{className:"directory"},c.a.createElement(u.a,{articleTree:this.state.articleTree})))}}]),a}(i.Component)},59:function(e,t,a){var l={"./apl/apl.js":[61,54],"./asciiarmor/asciiarmor.js":[62,55],"./asn.1/asn.1.js":[63,56],"./asterisk/asterisk.js":[64,57],"./brainfuck/brainfuck.js":[65,58],"./clike/clike.js":[46,3],"./clojure/clojure.js":[66,59],"./cmake/cmake.js":[67,60],"./cobol/cobol.js":[68,61],"./coffeescript/coffeescript.js":[47,62],"./commonlisp/commonlisp.js":[69,63],"./crystal/crystal.js":[70,64],"./css/css.js":[42,2],"./cypher/cypher.js":[71,65],"./d/d.js":[72,66],"./dart/dart.js":[73,3,67],"./diff/diff.js":[74,68],"./django/django.js":[75,1,2,33],"./dockerfile/dockerfile.js":[76,46],"./dtd/dtd.js":[77,69],"./dylan/dylan.js":[78,70],"./ebnf/ebnf.js":[79,71],"./ecl/ecl.js":[80,72],"./eiffel/eiffel.js":[81,73],"./elm/elm.js":[82,74],"./erlang/erlang.js":[83,75],"./factor/factor.js":[84,47],"./fcl/fcl.js":[85,76],"./forth/forth.js":[86,77],"./fortran/fortran.js":[87,78],"./gas/gas.js":[88,79],"./gfm/gfm.js":[89,5,45],"./gherkin/gherkin.js":[90,80],"./go/go.js":[91,81],"./groovy/groovy.js":[92,82],"./haml/haml.js":[93,1,2,36],"./handlebars/handlebars.js":[48,41],"./haskell-literate/haskell-literate.js":[94,50],"./haskell/haskell.js":[49,83],"./haxe/haxe.js":[95,84],"./htmlembedded/htmlembedded.js":[96,1,2,32],"./htmlmixed/htmlmixed.js":[41,1,2,51],"./http/http.js":[97,85],"./idl/idl.js":[98,86],"./javascript/javascript.js":[43,1],"./jinja2/jinja2.js":[99,87],"./jsx/jsx.js":[100,1,52],"./julia/julia.js":[101,88],"./livescript/livescript.js":[102,89],"./lua/lua.js":[103,90],"./markdown/markdown.js":[54,5],"./mathematica/mathematica.js":[104,91],"./mbox/mbox.js":[105,92],"./meta.js":[45],"./mirc/mirc.js":[106,93],"./mllike/mllike.js":[107,94],"./modelica/modelica.js":[108,95],"./mscgen/mscgen.js":[109,96],"./mumps/mumps.js":[110,97],"./nginx/nginx.js":[111,98],"./nsis/nsis.js":[112,48],"./ntriples/ntriples.js":[113,99],"./octave/octave.js":[114,100],"./oz/oz.js":[115,101],"./pascal/pascal.js":[116,102],"./pegjs/pegjs.js":[117,1,103],"./perl/perl.js":[118,104],"./php/php.js":[119,1,2,3,42],"./pig/pig.js":[120,105],"./powershell/powershell.js":[121,106],"./properties/properties.js":[122,107],"./protobuf/protobuf.js":[123,108],"./pug/pug.js":[55,1,2,4],"./puppet/puppet.js":[124,109],"./python/python.js":[50,110],"./q/q.js":[125,111],"./r/r.js":[126,112],"./rpm/rpm.js":[127,113],"./rst/rst.js":[128,35],"./ruby/ruby.js":[44,114],"./rust/rust.js":[129,49],"./sas/sas.js":[130,115],"./sass/sass.js":[52,2,116],"./scheme/scheme.js":[131,117],"./shell/shell.js":[132,118],"./sieve/sieve.js":[133,119],"./slim/slim.js":[134,1,2,37],"./smalltalk/smalltalk.js":[135,120],"./smarty/smarty.js":[136,121],"./solr/solr.js":[137,122],"./soy/soy.js":[138,1,2,43],"./sparql/sparql.js":[139,123],"./spreadsheet/spreadsheet.js":[140,124],"./sql/sql.js":[141,125],"./stex/stex.js":[51,126],"./stylus/stylus.js":[56,6],"./swift/swift.js":[142,127],"./tcl/tcl.js":[143,128],"./textile/textile.js":[144,129],"./tiddlywiki/tiddlywiki.js":[145,130],"./tiki/tiki.js":[146,131],"./toml/toml.js":[147,132],"./tornado/tornado.js":[148,1,2,34],"./troff/troff.js":[149,133],"./ttcn-cfg/ttcn-cfg.js":[151,134],"./ttcn/ttcn.js":[150,135],"./turtle/turtle.js":[152,136],"./twig/twig.js":[153,44],"./vb/vb.js":[154,137],"./vbscript/vbscript.js":[155,138],"./velocity/velocity.js":[156,139],"./verilog/verilog.js":[157,140],"./vhdl/vhdl.js":[158,141],"./vue/vue.js":[159,1,2,6,4,12],"./webidl/webidl.js":[160,142],"./xml/xml.js":[37,143],"./xquery/xquery.js":[161,144],"./yacas/yacas.js":[162,145],"./yaml-frontmatter/yaml-frontmatter.js":[163,53],"./yaml/yaml.js":[53,146],"./z80/z80.js":[164,147]};function n(e){if(!a.o(l,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=l[e],n=t[0];return Promise.all(t.slice(1).map(a.e)).then((function(){return a.t(n,7)}))}n.keys=function(){return Object.keys(l)},n.id=59,e.exports=n}}]);
//# sourceMappingURL=19.5ac803ee.chunk.js.map