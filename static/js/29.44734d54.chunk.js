(this.webpackJsonpblog=this.webpackJsonpblog||[]).push([[29],{336:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return h}));var n=t(11),l=t(12),r=t(13),o=t(14),i=t(0),s=t.n(i),m=t(165),c=t.n(m),d=t(163),u=(t(46),t(36)),p=c.a.GraphObject.make,g={theme:"monokai",mode:"JSX",readOnly:!0},h=function(e){Object(o.a)(t,e);var a=Object(r.a)(t);function t(){return Object(n.a)(this,t),a.apply(this,arguments)}return Object(l.a)(t,[{key:"componentDidMount",value:function(){this.diagramRender1(),this.diagramRender2(),this.diagramRender3(),this.diagramRender4()}},{key:"diagramRender1",value:function(){p(c.a.Diagram,"myDiagramDiv1").model=new c.a.GraphLinksModel([{key:"Alpha"},{key:"Beta"}],[{from:"Alpha",to:"Beta"}])}},{key:"diagramRender2",value:function(){var e=p(c.a.Diagram,"myDiagramDiv2");e.model=new c.a.GraphLinksModel([{key:"Alpha",color:"lime"},{key:"Beta",color:"cyan"}],[{from:"Alpha",to:"Beta"}]),e.nodeTemplate=p(c.a.Node,"Auto",p(c.a.Shape,"RoundedRectangle",{fill:"#999"},new c.a.Binding("fill","color")),p(c.a.TextBlock,"text",new c.a.Binding("text","key")))}},{key:"diagramRender3",value:function(){var e=p(c.a.Diagram,"myDiagramDiv3");e.model=new c.a.GraphLinksModel([{key:"Alpha",color:"lime"},{key:"Beta",color:"cyan"}],[{from:"Alpha",to:"Beta",color:"red"}]),e.nodeTemplate=p(c.a.Node,"Auto",p(c.a.Shape,"RoundedRectangle",{fill:"#999"},new c.a.Binding("fill","color")),p(c.a.TextBlock,"text",{margin:10},new c.a.Binding("text","key"))),e.linkTemplate=p(c.a.Link,p(c.a.Shape,{strokeWidth:3},new c.a.Binding("stroke","color")),p(c.a.Shape,{toArrow:"Standard",stroke:null},new c.a.Binding("fill","color")))}},{key:"diagramRender4",value:function(){var e=p(c.a.Diagram,"myDiagramDiv4");e.model=new c.a.GraphLinksModel([{key:"Alpha",color:"lime"},{key:"Beta",color:"cyan"},{key:"Zeta",isGroup:!0},{key:"Delta",color:"pink",group:"Zeta"},{key:"Gamma",color:"maroom",group:"Zeta"}],[{from:"Alpha",to:"Beta",color:"red"},{from:"Alpha",to:"Zeta"}]),e.nodeTemplate=p(c.a.Node,"Auto",p(c.a.Shape,"RoundedRectangle",{fill:"#999"},new c.a.Binding("fill","color")),p(c.a.TextBlock,"text",{margin:10},new c.a.Binding("text","key"))),e.linkTemplate=p(c.a.Link,p(c.a.Shape,{strokeWidth:3},new c.a.Binding("stroke","color")),p(c.a.Shape,{toArrow:"Standard",stroke:null},new c.a.Binding("fill","color")))}},{key:"render",value:function(){return s.a.createElement("div",{className:"page-content"},s.a.createElement("div",{className:"article"},s.a.createElement("div",{className:"article-title"},s.a.createElement("h1",null,"GoJS \u5165\u95e8\u6559\u7a0b\u2014\u2014\u7b2c\u4e00\u8282 \u7b80\u5355\u7684 GoJS demo")),s.a.createElement("div",{className:"article-content"},s.a.createElement("h2",null,"\u51c6\u5907\u73af\u5883"),s.a.createElement("ol",null,s.a.createElement("li",null,"\u521b\u5efa\u4e00\u4e2a\u65b0\u7684 HTML \u6587\u4ef6\uff1b"),s.a.createElement("li",null,"\u5f15\u7528 GoJS \u811a\u672c\u6587\u4ef6\uff1b"),s.a.createElement("li",null,"\u4e3a GoJS Diagram \u521b\u5efa\u4e00\u4e2a div \u5143\u7d20\uff1b"),s.a.createElement("li",null,"\u5b9a\u4e49 body onload \u51fd\u6570\u3002")),s.a.createElement("p",null,"\u4ee3\u7801\u5982\u4e0b\u6240\u793a\uff1a"),s.a.createElement(d.a,{value:'<!DOCTYPE html>\n<html lang="en">\n<head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>GoJS\u5165\u95e8\u6559\u7a0b\u2014\u2014\u7b2c\u4e00\u8282</title>\n    <script src="go.js"><\/script>\n    <script>\n        function init() {\n            \n        }\n    <\/script>\n</head>\n<body onload="init()">\n    <div id="myDiagramDiv"></div>\n</body>\n</html>',options:{theme:"monokai",mode:"HTML",readOnly:!0}}),s.a.createElement("h2",null,"\u521b\u5efa Diagram\u3001Model \u548c Model Data"),s.a.createElement("ol",null,s.a.createElement("li",null,"\u5c06 go.GraphObject.make \u5b9a\u4e49\u4e3a\u7b80\u5355\u53d8\u91cf(\u4f8b\u5982$)\uff1b"),s.a.createElement("li",null,"\u5b9a\u4e49\u4e00\u4e2a\u65b0\u7684 Diagram\uff1b"),s.a.createElement("li",null,"\u7ed9 Diagram \u8bbe\u7f6e height\uff0cwidth\u548cborder\uff1b"),s.a.createElement("li",null,"\u521b\u5efa nodeDataArray \u548c linkDataArray\uff1b"),s.a.createElement("li",null,"\u8bbe\u7f6e Diagram.model\u3002")),s.a.createElement("p",null,"\u4ee3\u7801\u5982\u4e0b\u6240\u793a\uff1a"),s.a.createElement(d.a,{value:'<!DOCTYPE html>\n<html lang="en">\n<head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>GoJS\u5165\u95e8\u6559\u7a0b\u2014\u2014\u7b2c\u4e00\u8282</title>\n    <script src="go.js"><\/script>\n    <script>\n        function init() {\n            let $ = go.GraphObject.make;\n            let myDiagram = $(go.Diagram, "myDiagramDiv");\n            let nodeDataArray = [\n                { key: "Alpha" }, \n                { key: "Beta" }\n            ];\n            let linkDataArray = [\n                { from: "Alpha",to: "Beta"}\n            ];\n            myDiagram.model = new go.GraphLinksModel(nodeDataArray, linkDataArray);\n        }\n    <\/script>\n</head>\n<body onload="init()">\n    <div id="myDiagramDiv" style="width: 300px;height: 300px;border: 1px solid #000;"></div>\n</body>\n</html>',options:{theme:"monokai",mode:"HTML",readOnly:!0}}),s.a.createElement("p",null,"\u5982\u679c\u6ca1\u6709\u9519\u8bef\u7684\u8bdd\uff0c\u4f60\u4f1a\u5728\u6d4f\u89c8\u5668\u770b\u5230"),s.a.createElement("div",{id:"myDiagramDiv1",className:"diagram"}),s.a.createElement("h2",null,"\u4fee\u6539\u6837\u5f0f"),s.a.createElement("p",null,"\u73b0\u5728\uff0cnode \u548c link \u90fd\u53ef\u4ee5\u770b\u5230\u4e86\uff0c\u63a5\u4e0b\u6765\u5c31\u8981\u601d\u8003\u5982\u4f55\u4fee\u6539\u5b83\u4eec\u7684\u6837\u5f0f\u4e86\u3002"),s.a.createElement("p",null,"GoJS \u662f\u8fd9\u6837\u505a\u7684\uff1a\u4f7f\u7528\u6a21\u677f\u6539\u53d8 Diagram \u7ec4\u4ef6\u7684\u6837\u5f0f\u3002"),s.a.createElement("ul",null,s.a.createElement("li",null,"\u4f7f\u7528 nodeTemplate \u4fee\u6539 node \u7684\u6837\u5f0f\uff1b",s.a.createElement("div",{className:""})),s.a.createElement("li",null,"\u4f7f\u7528 linkTemplate \u4fee\u6539 link \u7684\u6837\u5f0f\u3002")),s.a.createElement("h3",null,"\u8282\u70b9\u6a21\u677f"),s.a.createElement("ol",null,s.a.createElement("li",null,"\u5c06\u8282\u70b9\u6a21\u677f\u5b9a\u4e49\u4e3a\u5355\u4e2a\u201cAuto\u201d\u9762\u677f\uff1b"),s.a.createElement("li",null,"\u5b9a\u4e49\u8282\u70b9\u6a21\u677f\u5143\u7d20(Shape\u548cTextBlock)\uff1b"),s.a.createElement("li",null,"\u5411 nodeDataArray \u4e2d\u7684\u8282\u70b9\u6dfb\u52a0\u989c\u8272\u6570\u636e\u5c5e\u6027\uff1b"),s.a.createElement("li",null,"\u6dfb\u52a0\u8282\u70b9\u6570\u636e\u7ed1\u5b9a\u3002")),s.a.createElement("div",{className:"tip"},s.a.createElement("div",{className:"tip-content"},s.a.createElement("em",null,'go.Binding()\u5b9e\u73b0\u4e86\u5c5e\u6027\u548c\u6570\u636e\u7684\u7ed1\u5b9a\uff0c\u4f8b\u5982 new go.Binding("fill", "color"))\uff0c\u7ed1\u5b9a\u4e86 go.Shape \u7684 fill \u5c5e\u6027\u548c nodeDataArray \u4e2d\u7684 color\u3002'))),s.a.createElement("p",null,"\u4ee3\u7801\u53ca\u6548\u679c\u5982\u4e0b\u6240\u793a\uff1a"),s.a.createElement(d.a,{value:'function init() {\n    let $ = go.GraphObject.make;\n    let myDiagram = $(go.Diagram, "myDiagramDiv");\n    let nodeDataArray = [{\n        key: "Alpha",\n        color: "lime"\n    }, {\n        key: "Beta",\n        color: "cyan"\n    }\n    ];\n    let linkDataArray = [{\n        from: "Alpha",\n        to: "Beta",\n    }];\n    myDiagram.model = new go.GraphLinksModel(nodeDataArray, linkDataArray);\n    myDiagram.nodeTemplate =\n        $(go.Node, "Auto",\n            $(go.Shape, "RoundedRectangle", {\n                fill: "#999"\n            }, new go.Binding("fill", "color")),\n            $(go.TextBlock, "text", new go.Binding("text", "key"))\n        );\n}',options:g}),s.a.createElement("div",{id:"myDiagramDiv2",className:"diagram"}),s.a.createElement("h3",null,"\u94fe\u63a5\u6a21\u677f"),s.a.createElement("ul",null,s.a.createElement("li",null,"\u5b9a\u4e49\u4e24\u4e2a\u5f62\u72b6\u5143\u7d20\u7684\u94fe\u63a5\u6a21\u677f"),s.a.createElement("li",null,"\u6dfb\u52a0\u94fe\u63a5\u6570\u636e\u7ed1\u5b9a")),s.a.createElement("h3",null,"\u7f16\u8f91\u8282\u70b9/\u94fe\u63a5\u5c5e\u6027"),s.a.createElement("ul",null,s.a.createElement("li",null,"\u5728 nodeTemplate \u7684 TextBlock \u5143\u7d20\u4e0a\u8bbe\u7f6e margin \u5c5e\u6027"),s.a.createElement("li",null,"\u4e3a linkTemplate \u7684\u7b2c\u4e00\u4e2a Shape \u5143\u7d20\u8bbe\u7f6e strokeWidth \u5c5e\u6027")),s.a.createElement("p",null,"\u4ee3\u7801\u53ca\u6548\u679c\u5982\u4e0b\u6240\u793a\uff1a"),s.a.createElement(d.a,{value:'function init() {\nlet $ = go.GraphObject.make;\nlet myDiagram = $(go.Diagram, "myDiagramDiv");\nlet nodeDataArray = [{\n    key: "Alpha",\n    color: "lime"\n}, {\n    key: "Beta",\n    color: "cyan"\n}\n];\nlet linkDataArray = [{\n    from: "Alpha",\n    to: "Beta",\n    color: "red"\n}];\nmyDiagram.model = new go.GraphLinksModel(nodeDataArray, linkDataArray);\nmyDiagram.nodeTemplate =\n    $(go.Node, "Auto",\n        $(go.Shape, "RoundedRectangle", {\n            fill: "#999"\n        }, new go.Binding("fill", "color")),\n        $(go.TextBlock, "text", {\n            margin: 10\n        }, new go.Binding("text", "key"))\n    );\nmyDiagram.linkTemplate =\n    $(go.Link,\n        $(go.Shape, {\n                strokeWidth: 3,\n            },\n            new go.Binding("stroke", "color")\n        ),\n        $(go.Shape, {\n                toArrow: "Standard",\n                stroke: null\n            },\n            new go.Binding("fill", "color")\n        )\n    )\n}',options:g}),s.a.createElement("div",{id:"myDiagramDiv3",className:"diagram"}),s.a.createElement("h3",null,"\u521b\u5efa\u7ec4"),s.a.createElement("ul",null,s.a.createElement("li",null,"\u5728 nodeDataArray \u4e2d\u6dfb\u52a0\u7ec4\u6570\u636e"),s.a.createElement("li",null,"\u5728 nodeDataArray \u4e2d\u6dfb\u52a0\u65b0\u8282\u70b9\uff0c\u5e76\u8bbe\u7f6e group \u5c5e\u6027"),s.a.createElement("li",null,"\u5728 linkDataArray \u4e2d\u6dfb\u52a0\u94fe\u63a5\u5230\u7ec4")),s.a.createElement("p",null,"\u4ee3\u7801\u53ca\u6548\u679c\u5982\u4e0b\u6240\u793a\uff1a"),s.a.createElement(d.a,{value:'let nodeDataArray = [{\n    key: "Alpha",\n    color: "lime"\n}, {\n    key: "Beta",\n    color: "cyan"\n}, {\n    key: "Zeta",\n    isGroup: true\n}, {\n    key: "Delta",\n    color: "pink",\n    group: "Zeta"\n}, {\n    key: "Gamma",\n    color: "maroom",\n    group: "Zeta"\n}];\nlet linkDataArray = [{\n    from: "Alpha",\n    to: "Beta",\n    color: "red"\n}, {\n    from: "Alpha",\n    to: "Zeta",\n}];',options:g}),s.a.createElement("div",{id:"myDiagramDiv4",className:"diagram"}),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("p",null,"\u76f8\u5173\u4ee3\u7801\uff1a"),s.a.createElement("p",null,s.a.createElement("a",{href:"https://github.com/LiuZheAb/GoJS_Demo/blob/master/01simpleDemo.html",target:"_blank",rel:"noopener noreferrer"},"https://github.com/LiuZheAb/GoJS_Demo/blob/master/01simpleDemo.html")))),s.a.createElement(u.a,null))}}]),t}(i.Component)},36:function(e,a,t){"use strict";var n=t(11),l=t(12),r=t(16),o=t(13),i=t(14),s=t(0),m=t.n(s),c=t(5),d=t(39),u=(t(37),function(e){Object(i.a)(t,e);var a=Object(o.a)(t);function t(e){var l;return Object(n.a)(this,t),(l=a.call(this,e)).bindHandleScroll=function(e){var a=!!e.srcElement&&e.srcElement.documentElement.scrollTop||window.pageYOffset||(e.srcElement?e.srcElement.body.scrollTop:0);l.setState({scrollTop:a})},l.scrollToAnchor=function(e){if(e){var a=document.getElementById(e);a&&a.scrollIntoView({block:"start",behavior:"smooth"})}},l.state={articleTree:[],scrollTop:null},l.getArticleTree=l.getArticleTree.bind(Object(r.a)(l)),l}return Object(l.a)(t,[{key:"getArticleTree",value:function(){for(var e=document.getElementsByClassName("article-content")[0].children,a=[],t=0;t<e.length-1;t++){var n=e[t].nodeName;"H2"!==n&&"H3"!==n||(e[t].id=e[t].innerText,a.push({name:e[t].innerText,tag:e[t].nodeName}))}this.setState({articleTree:a})}},{key:"setTitle",value:function(){for(var e=this.props.location.pathname.split("/").filter((function(e){return e})),a=[],t=0;t<d.a.length;t++)e[0]===d.a[t].name&&(a=d.a[t].section[e[1]]);document.getElementsByTagName("h1")[0]&&(document.getElementsByTagName("h1")[0].innerHTML=a)}},{key:"componentDidMount",value:function(){this.getArticleTree(),this.setTitle();var e=document.getElementById("header"),a=window.scrollY,t=document.getElementsByClassName("directory-list")[0],n=t.offsetTop;window.addEventListener("scroll",this.bindHandleScroll),window.onscroll=function(){for(var l=document.getElementsByClassName("page-footer")[0],r=0;l;)r+=l.offsetTop,l=l.offsetParent;var o=document.body.scrollTop||document.documentElement.scrollTop;if((o+=n+t.offsetHeight)>r+e.offsetHeight)t.style="position:fixed;top:".concat(n-o+r,"px;transition:none");else{var i=window.scrollY;i>e.offsetHeight&&(a<i&&(e.className="ant-layout-header header header-affixed",t.className="directory-list directory-affixed",a=i),a>i&&(e.className="ant-layout-header header header-visible",t.className="directory-list",a=i)),t.style=""}}}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.bindHandleScroll)}},{key:"render",value:function(){var e=this,a=this.state,t=a.articleTree,n=a.scrollTop,l=t.length;if(document.getElementById("tree-num-0")&&l>0){for(var r=[],o=0;o<l;o++){var i=document.getElementById(t[o].name);r.push(i.offsetTop)}for(var s=r.findIndex((function(e){return e>n}))-1,c=0;c<l;c++)document.getElementById("tree-num-".concat(c)).className=c===s?"tree-num directory-item-active":"tree-num";-2===s&&(document.getElementById("tree-num-".concat(l-1)).className="tree-num directory-item-active")}return m.a.createElement("div",{className:"directory"},m.a.createElement("ul",{className:"directory-list"},t.map((function(a,t){return m.a.createElement("li",{key:t,id:"tree-num-".concat(t),className:"tree-num",title:a.name,style:{paddingLeft:"H2"===a.tag?10:22},onClick:function(){e.scrollToAnchor("".concat(a.name))}},a.name)}))))}}]),t}(s.Component));a.a=Object(c.f)(u)},37:function(e,a,t){},58:function(e,a,t){var n={"./apl/apl.js":[59,90],"./asciiarmor/asciiarmor.js":[60,91],"./asn.1/asn.1.js":[61,92],"./asterisk/asterisk.js":[62,93],"./brainfuck/brainfuck.js":[63,94],"./clike/clike.js":[47,5],"./clojure/clojure.js":[64,95],"./cmake/cmake.js":[65,96],"./cobol/cobol.js":[66,97],"./coffeescript/coffeescript.js":[48,98],"./commonlisp/commonlisp.js":[67,99],"./crystal/crystal.js":[68,100],"./css/css.js":[42,3],"./cypher/cypher.js":[69,101],"./d/d.js":[70,102],"./dart/dart.js":[71,5,103],"./diff/diff.js":[72,104],"./django/django.js":[73,2,3,67],"./dockerfile/dockerfile.js":[74,79],"./dtd/dtd.js":[75,105],"./dylan/dylan.js":[76,106],"./ebnf/ebnf.js":[77,107],"./ecl/ecl.js":[78,108],"./eiffel/eiffel.js":[79,109],"./elm/elm.js":[80,110],"./erlang/erlang.js":[81,111],"./factor/factor.js":[82,80],"./fcl/fcl.js":[83,112],"./forth/forth.js":[84,113],"./fortran/fortran.js":[85,114],"./gas/gas.js":[86,115],"./gfm/gfm.js":[87,56,78],"./gherkin/gherkin.js":[88,116],"./go/go.js":[89,117],"./groovy/groovy.js":[90,118],"./haml/haml.js":[91,2,3,70],"./handlebars/handlebars.js":[49,74],"./haskell-literate/haskell-literate.js":[92,83],"./haskell/haskell.js":[50,119],"./haxe/haxe.js":[93,120],"./htmlembedded/htmlembedded.js":[94,2,3,66],"./htmlmixed/htmlmixed.js":[40,2,3,84],"./http/http.js":[95,121],"./idl/idl.js":[96,122],"./javascript/javascript.js":[43,2],"./jinja2/jinja2.js":[97,123],"./jsx/jsx.js":[98,2,85],"./julia/julia.js":[99,124],"./livescript/livescript.js":[100,125],"./lua/lua.js":[101,126],"./markdown/markdown.js":[55,56],"./mathematica/mathematica.js":[102,127],"./mbox/mbox.js":[103,128],"./meta.js":[45],"./mirc/mirc.js":[104,129],"./mllike/mllike.js":[105,130],"./modelica/modelica.js":[106,131],"./mscgen/mscgen.js":[107,132],"./mumps/mumps.js":[108,133],"./nginx/nginx.js":[109,134],"./nsis/nsis.js":[110,81],"./ntriples/ntriples.js":[111,135],"./octave/octave.js":[112,136],"./oz/oz.js":[113,137],"./pascal/pascal.js":[114,138],"./pegjs/pegjs.js":[115,2,139],"./perl/perl.js":[116,140],"./php/php.js":[117,2,3,5,75],"./pig/pig.js":[118,141],"./powershell/powershell.js":[119,142],"./properties/properties.js":[120,143],"./protobuf/protobuf.js":[121,144],"./pug/pug.js":[56,2,3,55],"./puppet/puppet.js":[122,145],"./python/python.js":[51,146],"./q/q.js":[123,147],"./r/r.js":[124,148],"./rpm/rpm.js":[125,149],"./rst/rst.js":[126,69],"./ruby/ruby.js":[44,150],"./rust/rust.js":[127,82],"./sas/sas.js":[128,151],"./sass/sass.js":[53,3,152],"./scheme/scheme.js":[129,153],"./shell/shell.js":[130,154],"./sieve/sieve.js":[131,155],"./slim/slim.js":[132,2,3,71],"./smalltalk/smalltalk.js":[133,156],"./smarty/smarty.js":[134,157],"./solr/solr.js":[135,158],"./soy/soy.js":[136,2,3,76],"./sparql/sparql.js":[137,159],"./spreadsheet/spreadsheet.js":[138,160],"./sql/sql.js":[139,161],"./stex/stex.js":[52,162],"./stylus/stylus.js":[57,57],"./swift/swift.js":[140,163],"./tcl/tcl.js":[141,164],"./textile/textile.js":[142,165],"./tiddlywiki/tiddlywiki.js":[143,166],"./tiki/tiki.js":[144,167],"./toml/toml.js":[145,168],"./tornado/tornado.js":[146,2,3,68],"./troff/troff.js":[147,169],"./ttcn-cfg/ttcn-cfg.js":[149,170],"./ttcn/ttcn.js":[148,171],"./turtle/turtle.js":[150,172],"./twig/twig.js":[151,77],"./vb/vb.js":[152,173],"./vbscript/vbscript.js":[153,174],"./velocity/velocity.js":[154,175],"./verilog/verilog.js":[155,176],"./vhdl/vhdl.js":[156,177],"./vue/vue.js":[157,2,3,57,55,64],"./webidl/webidl.js":[158,178],"./xml/xml.js":[38,179],"./xquery/xquery.js":[159,180],"./yacas/yacas.js":[160,181],"./yaml-frontmatter/yaml-frontmatter.js":[161,86],"./yaml/yaml.js":[54,182],"./z80/z80.js":[162,183]};function l(e){if(!t.o(n,e))return Promise.resolve().then((function(){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}));var a=n[e],l=a[0];return Promise.all(a.slice(1).map(t.e)).then((function(){return t.t(l,7)}))}l.keys=function(){return Object.keys(n)},l.id=58,e.exports=l}}]);
//# sourceMappingURL=29.44734d54.chunk.js.map