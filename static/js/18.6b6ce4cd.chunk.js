(this.webpackJsonpblog=this.webpackJsonpblog||[]).push([[18],{322:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return p}));var n=t(11),l=t(12),r=t(13),o=t(14),i=t(0),m=t.n(i),s=t(163),c=(t(46),t(36)),d=t(165),y=t.n(d),u=y.a.GraphObject.make,p=function(e){Object(o.a)(t,e);var a=Object(r.a)(t);function t(){return Object(n.a)(this,t),a.apply(this,arguments)}return Object(l.a)(t,[{key:"componentDidMount",value:function(){this.diagramRender1(),this.diagramRender2(),this.diagramRender3(),this.diagramRender4(),this.diagramRender5(),this.diagramRender6()}},{key:"diagramRender1",value:function(){var e=u(y.a.Diagram,"myDiagramDiv1");e.nodeTemplate=u(y.a.Node,"Auto",u(y.a.Shape,"RoundedRectangle",{fill:"lightblue"}),u(y.a.TextBlock,{margin:8},new y.a.Binding("text","key"))),e.layout=u(y.a.LayeredDigraphLayout),e.model=u(y.a.GraphLinksModel,{nodeDataArray:[{key:"Alpha"},{key:"Beta"},{key:"Gamma"},{key:"Delta"},{key:"Epsilon"},{key:"Zeta"}],linkDataArray:[{from:"Alpha",to:"Beta"},{from:"Alpha",to:"Gamma"},{from:"Beta",to:"Delta"},{from:"Delta",to:"Epsilon"},{from:"Zeta",to:"Epsilon"}]})}},{key:"diagramRender2",value:function(){var e=u(y.a.Diagram,"myDiagramDiv2");e.nodeTemplate=u(y.a.Node,"Auto",u(y.a.Shape,"RoundedRectangle",{fill:"lightblue"}),u(y.a.TextBlock,{margin:8},new y.a.Binding("text","key"))),e.layout=u(y.a.LayeredDigraphLayout,{direction:90}),e.model=u(y.a.GraphLinksModel,{nodeDataArray:[{key:"Alpha"},{key:"Beta"},{key:"Gamma"},{key:"Delta"},{key:"Epsilon"},{key:"Zeta"}],linkDataArray:[{from:"Alpha",to:"Beta"},{from:"Alpha",to:"Gamma"},{from:"Beta",to:"Delta"},{from:"Delta",to:"Epsilon"},{from:"Zeta",to:"Epsilon"}]})}},{key:"diagramRender3",value:function(){var e=u(y.a.Diagram,"myDiagramDiv3");e.nodeTemplate=u(y.a.Node,"Auto",u(y.a.Shape,"RoundedRectangle",{fill:"lightblue"}),u(y.a.TextBlock,{margin:8},new y.a.Binding("text","key"))),e.layout=u(y.a.LayeredDigraphLayout,{direction:90,layerSpacing:50,columnSpacing:100}),e.model=u(y.a.GraphLinksModel,{nodeDataArray:[{key:"Alpha"},{key:"Beta"},{key:"Gamma"},{key:"Delta"},{key:"Epsilon"},{key:"Zeta"}],linkDataArray:[{from:"Alpha",to:"Beta"},{from:"Alpha",to:"Gamma"},{from:"Beta",to:"Delta"},{from:"Delta",to:"Epsilon"},{from:"Zeta",to:"Epsilon"}]})}},{key:"diagramRender4",value:function(){var e=u(y.a.Diagram,"myDiagramDiv4");e.nodeTemplate=u(y.a.Node,"Auto",u(y.a.Shape,"RoundedRectangle",{fill:"lightblue"}),u(y.a.TextBlock,{margin:8},new y.a.Binding("text","key"))),e.layout=u(y.a.LayeredDigraphLayout,{direction:90,layerSpacing:25,columnSpacing:25,layeringOption:y.a.LayeredDigraphLayout.LayerLongestPathSink}),e.model=u(y.a.GraphLinksModel,{nodeDataArray:[{key:"Alpha"},{key:"Beta"},{key:"Gamma"},{key:"Delta"},{key:"Epsilon"},{key:"Zeta"}],linkDataArray:[{from:"Alpha",to:"Beta"},{from:"Alpha",to:"Gamma"},{from:"Beta",to:"Delta"},{from:"Delta",to:"Epsilon"},{from:"Zeta",to:"Epsilon"}]})}},{key:"diagramRender5",value:function(){var e=u(y.a.Diagram,"myDiagramDiv5");e.nodeTemplate=u(y.a.Node,"Auto",u(y.a.Shape,"RoundedRectangle",{fill:"lightblue"}),u(y.a.TextBlock,{margin:8},new y.a.Binding("text","key"))),e.layout=u(y.a.LayeredDigraphLayout,{direction:90,layerSpacing:25,columnSpacing:25,layeringOption:y.a.LayeredDigraphLayout.LayerLongestPathSource}),e.model=u(y.a.GraphLinksModel,{nodeDataArray:[{key:"Alpha"},{key:"Beta"},{key:"Gamma"},{key:"Delta"},{key:"Epsilon"},{key:"Zeta"}],linkDataArray:[{from:"Alpha",to:"Beta"},{from:"Alpha",to:"Gamma"},{from:"Beta",to:"Delta"},{from:"Delta",to:"Epsilon"},{from:"Zeta",to:"Epsilon"}]})}},{key:"diagramRender6",value:function(){var e=u(y.a.Diagram,"myDiagramDiv6");e.nodeTemplate=u(y.a.Node,"Auto",u(y.a.Shape,"RoundedRectangle",{fill:"lightblue"}),u(y.a.TextBlock,{margin:8},new y.a.Binding("text","key"))),e.layout=u(y.a.LayeredDigraphLayout,{direction:90,layerSpacing:25,columnSpacing:25,layeringOption:y.a.LayeredDigraphLayout.LayerOptimalLinkLength}),e.model=u(y.a.GraphLinksModel,{nodeDataArray:[{key:"Alpha"},{key:"Beta"},{key:"Gamma"},{key:"Delta"},{key:"Epsilon"},{key:"Zeta"}],linkDataArray:[{from:"Alpha",to:"Beta"},{from:"Alpha",to:"Gamma"},{from:"Beta",to:"Delta"},{from:"Delta",to:"Epsilon"},{from:"Zeta",to:"Epsilon"}]})}},{key:"render",value:function(){return m.a.createElement("div",{className:"page-content"},m.a.createElement("div",{className:"article"},m.a.createElement("div",{className:"article-title"},m.a.createElement("h1",null,"GoJS \u5e03\u5c40\u2014\u2014\u7b2c\u4e94\u8282 \u5c42\u6b21\u5e03\u5c40(LayeredDigraphLayout)")),m.a.createElement("div",{className:"article-content"},m.a.createElement("h2",null,"\u793a\u4f8b"),m.a.createElement(s.a,{value:'let myDiagram = $(go.Diagram, "myDiagramDiv");\n\nmyDiagram.nodeTemplate =\n    $(go.Node, "Auto",\n        $(go.Shape, "RoundedRectangle", {\n            fill: "lightblue"\n        }),\n        $(go.TextBlock, {\n                margin: 8\n            },\n            new go.Binding("text", "key"))\n    );\nmyDiagram.layout = $(go.LayeredDigraphLayout);\nmyDiagram.model =$(go.GraphLinksModel, {\n    nodeDataArray: [{\n        key: "Alpha",\n    }, {\n        key: "Beta",\n    }, {\n        key: "Gamma"\n    }, {\n        key: "Delta"\n    }, {\n        key: "Epsilon"\n    }, {\n        key: "Zeta"\n    }],\n    linkDataArray: [{\n        from: "Alpha",\n        to: "Beta"\n    },\n    {\n        from: "Alpha",\n        to: "Gamma"\n    },\n    {\n        from: "Beta",\n        to: "Delta"\n    },\n    {\n        from: "Delta",\n        to: "Epsilon"\n    },\n    {\n        from: "Zeta",\n        to: "Epsilon"\n    }]\n})',options:{theme:"monokai",mode:"JSX",readOnly:!0}}),m.a.createElement("div",{id:"myDiagramDiv1",className:"diagram",style:{maxWidth:600}}),m.a.createElement("h2",null,"direction"),m.a.createElement("ul",null,m.a.createElement("li",null,"\u51b3\u5b9a\u5c55\u5f00\u7684\u65b9\u5411"),m.a.createElement("li",null,"\u9ed8\u8ba4\u503c:0"),m.a.createElement("li",null,"\u5141\u8bb8\u503c:0 | 90 | 180 | 270")),m.a.createElement(s.a,{value:"myDiagram.layout = $(go.LayeredDigraphLayout,{\n    direction:90\n});",options:{theme:"monokai",mode:"JSX",readOnly:!0}}),m.a.createElement("div",{id:"myDiagramDiv2",className:"diagram",style:{maxWidth:600,height:350}}),m.a.createElement("h2",null,"layerSpacing"),m.a.createElement("ul",null,m.a.createElement("li",null,"\u51b3\u5b9a\u5c42\u95f4\u8ddd"),m.a.createElement("li",null,"\u9ed8\u8ba4\u503c:25")),m.a.createElement("h2",null,"columnSpacing"),m.a.createElement("ul",null,m.a.createElement("li",null,"\u51b3\u5b9a\u5217\u95f4\u8ddd"),m.a.createElement("li",null,"\u9ed8\u8ba4\u503c:25")),m.a.createElement(s.a,{value:"myDiagram.layout = $(go.LayeredDigraphLayout,{\n    direction:90,\n    layerSpacing: 50,\n    columnSpacing: 100\n});",options:{theme:"monokai",mode:"JSX",readOnly:!0}}),m.a.createElement("div",{id:"myDiagramDiv3",className:"diagram",style:{maxWidth:600,height:400}}),m.a.createElement("h2",null,"layingOption"),m.a.createElement("ul",null,m.a.createElement("li",null,"\u51b3\u5b9a\u5e03\u5c40\u4e2d\u7684 Node \u5982\u4f55\u5206\u914d\u5230\u4e0d\u540c\u7684 layer \u4e2d"),m.a.createElement("li",null,"\u53ef\u80fd\u7684\u503c:")),m.a.createElement("ul",{"data-lake-indent":"1"},m.a.createElement("li",null,"LayerLongestPathSink"),m.a.createElement("li",null,"LayerLongestPathSource"),m.a.createElement("li",null,"LayerOptimalLinkLength")),m.a.createElement("h3",null,"LayerLongestPathSink"),m.a.createElement("p",null,"sink = \u6ca1\u6709 Link \u79bb\u5f00\u7684 Node"),m.a.createElement(s.a,{value:"myDiagram.layout = $(go.LayeredDigraphLayout, {\n    direction: 90,\n    layerSpacing: 25,\n    columnSpacing: 25,\n    layeringOption:go.LayeredDigraphLayout.LayerLongestPathSink\n});",options:{theme:"monokai",mode:"JSX",readOnly:!0}}),m.a.createElement("div",{id:"myDiagramDiv4",className:"diagram",style:{maxWidth:600,height:350}}),m.a.createElement("p",null,"\u5176\u4e2d\uff0cEpsilon \u548c Gamma \u4e3a sink"),m.a.createElement("h3",null,"LaverLongestPathSource"),m.a.createElement("p",null,"source = \u6ca1\u6709 Link \u8fdb\u5165\u7684 Node"),m.a.createElement(s.a,{value:"myDiagram.layout = $(go.LayeredDigraphLayout, {\n    direction: 90,\n    layerSpacing: 25,\n    columnSpacing: 25,\n    layeringOption: go.LayeredDigraphLayout.LayerLongestPathSource\n});",options:{theme:"monokai",mode:"JSX",readOnly:!0}}),m.a.createElement("div",{id:"myDiagramDiv5",className:"diagram",style:{maxWidth:600,height:350}}),m.a.createElement("p",null,"\u5176\u4e2d\uff0cAlpha \u548c Zeta \u4e3a source"),m.a.createElement("h3",null,"LayerOptimalLinkLength"),m.a.createElement("ul",null,m.a.createElement("li",null,"Node \u4ee5\u6700\u5c0f\u5316\u603b\u52a0\u6743 Link \u957f\u5ea6\u5206\u5c42"),m.a.createElement("li",null,"linkLength = layer(fromNode) - layer(toNode)")),m.a.createElement(s.a,{value:"myDiagram.layout = $(go.LayeredDigraphLayout, {\n    direction: 90,\n    layerSpacing: 25,\n    columnSpacing: 25,\n    layeringOption: go.LayeredDigraphLayout.LayerOptimalLinkLength\n});",options:{theme:"monokai",mode:"JSX",readOnly:!0}}),m.a.createElement("div",{id:"myDiagramDiv6",className:"diagram",style:{maxWidth:600,height:350}}),m.a.createElement("p",null,"\u5176\u4e2d,\u7531\u4e0b\u5411\u4e0a,Episilon \u4e3a\u7b2c\u4e00\u5c42, Delta \u548c Zeta \u4e3a\u7b2c\u4e8c\u5c42, Beta \u548c Gamma \u4e3a\u7b2c\u4e09\u5c42, Alpha \u4e3a\u7b2c\u56db\u5c42"),m.a.createElement("p",null,"\u5171\u6709 5 \u6761 Link,\u6bcf\u6761 Link \u7684 linkLength \u5747\u4e3a 1,\u5171\u8ba1 5,\u662f\u6700\u5c0f\u65b9\u6848"),m.a.createElement("br",null),m.a.createElement("br",null),m.a.createElement("p",null,"\u76f8\u5173\u4ee3\u7801\uff1a"),m.a.createElement("p",null,m.a.createElement("a",{href:"https://github.com/LiuZheAb/GoJS_Demo/blob/master/11layeredDigraphLayout.html",target:"_blank",rel:"noopener noreferrer"},"https://github.com/LiuZheAb/GoJS_Demo/blob/master/11layeredDigraphLayout.html")))),m.a.createElement(c.a,null))}}]),t}(i.Component)},36:function(e,a,t){"use strict";var n=t(11),l=t(12),r=t(16),o=t(13),i=t(14),m=t(0),s=t.n(m),c=t(5),d=t(39),y=(t(37),function(e){Object(i.a)(t,e);var a=Object(o.a)(t);function t(e){var l;return Object(n.a)(this,t),(l=a.call(this,e)).bindHandleScroll=function(e){var a=!!e.srcElement&&e.srcElement.documentElement.scrollTop||window.pageYOffset||(e.srcElement?e.srcElement.body.scrollTop:0);l.setState({scrollTop:a})},l.scrollToAnchor=function(e){if(e){var a=document.getElementById(e);a&&a.scrollIntoView({block:"start",behavior:"smooth"})}},l.state={articleTree:[],scrollTop:null},l.getArticleTree=l.getArticleTree.bind(Object(r.a)(l)),l}return Object(l.a)(t,[{key:"getArticleTree",value:function(){for(var e=document.getElementsByClassName("article-content")[0].children,a=[],t=0;t<e.length-1;t++){var n=e[t].nodeName;"H2"!==n&&"H3"!==n||(e[t].id=e[t].innerText,a.push({name:e[t].innerText,tag:e[t].nodeName}))}this.setState({articleTree:a})}},{key:"setTitle",value:function(){for(var e=this.props.location.pathname.split("/").filter((function(e){return e})),a=[],t=0;t<d.a.length;t++)e[0]===d.a[t].name&&(a=d.a[t].section[e[1]]);document.getElementsByTagName("h1")[0]&&(document.getElementsByTagName("h1")[0].innerHTML=a)}},{key:"componentDidMount",value:function(){this.getArticleTree(),this.setTitle();var e=document.getElementById("header"),a=window.scrollY,t=document.getElementsByClassName("directory-list")[0],n=t.offsetTop;window.addEventListener("scroll",this.bindHandleScroll),window.onscroll=function(){for(var l=document.getElementsByClassName("page-footer")[0],r=0;l;)r+=l.offsetTop,l=l.offsetParent;var o=document.body.scrollTop||document.documentElement.scrollTop;if((o+=n+t.offsetHeight)>r+e.offsetHeight)t.style="position:fixed;top:".concat(n-o+r,"px;transition:none");else{var i=window.scrollY;i>e.offsetHeight&&(a<i&&(e.className="ant-layout-header header header-affixed",t.className="directory-list directory-affixed",a=i),a>i&&(e.className="ant-layout-header header header-visible",t.className="directory-list",a=i)),t.style=""}}}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.bindHandleScroll)}},{key:"render",value:function(){var e=this,a=this.state,t=a.articleTree,n=a.scrollTop,l=t.length;if(document.getElementById("tree-num-0")&&l>0){for(var r=[],o=0;o<l;o++){var i=document.getElementById(t[o].name);r.push(i.offsetTop)}for(var m=r.findIndex((function(e){return e>n}))-1,c=0;c<l;c++)document.getElementById("tree-num-".concat(c)).className=c===m?"tree-num directory-item-active":"tree-num";-2===m&&(document.getElementById("tree-num-".concat(l-1)).className="tree-num directory-item-active")}return s.a.createElement("div",{className:"directory"},s.a.createElement("ul",{className:"directory-list"},t.map((function(a,t){return s.a.createElement("li",{key:t,id:"tree-num-".concat(t),className:"tree-num",title:a.name,style:{paddingLeft:"H2"===a.tag?10:22},onClick:function(){e.scrollToAnchor("".concat(a.name))}},a.name)}))))}}]),t}(m.Component));a.a=Object(c.f)(y)},37:function(e,a,t){},58:function(e,a,t){var n={"./apl/apl.js":[59,84],"./asciiarmor/asciiarmor.js":[60,85],"./asn.1/asn.1.js":[61,86],"./asterisk/asterisk.js":[62,87],"./brainfuck/brainfuck.js":[63,88],"./clike/clike.js":[47,5],"./clojure/clojure.js":[64,89],"./cmake/cmake.js":[65,90],"./cobol/cobol.js":[66,91],"./coffeescript/coffeescript.js":[48,92],"./commonlisp/commonlisp.js":[67,93],"./crystal/crystal.js":[68,94],"./css/css.js":[42,3],"./cypher/cypher.js":[69,95],"./d/d.js":[70,96],"./dart/dart.js":[71,5,97],"./diff/diff.js":[72,98],"./django/django.js":[73,2,3,62],"./dockerfile/dockerfile.js":[74,74],"./dtd/dtd.js":[75,99],"./dylan/dylan.js":[76,100],"./ebnf/ebnf.js":[77,101],"./ecl/ecl.js":[78,102],"./eiffel/eiffel.js":[79,103],"./elm/elm.js":[80,104],"./erlang/erlang.js":[81,105],"./factor/factor.js":[82,75],"./fcl/fcl.js":[83,106],"./forth/forth.js":[84,107],"./fortran/fortran.js":[85,108],"./gas/gas.js":[86,109],"./gfm/gfm.js":[87,51,73],"./gherkin/gherkin.js":[88,110],"./go/go.js":[89,111],"./groovy/groovy.js":[90,112],"./haml/haml.js":[91,2,3,65],"./handlebars/handlebars.js":[49,69],"./haskell-literate/haskell-literate.js":[92,78],"./haskell/haskell.js":[50,113],"./haxe/haxe.js":[93,114],"./htmlembedded/htmlembedded.js":[94,2,3,61],"./htmlmixed/htmlmixed.js":[41,2,3,79],"./http/http.js":[95,115],"./idl/idl.js":[96,116],"./javascript/javascript.js":[43,2],"./jinja2/jinja2.js":[97,117],"./jsx/jsx.js":[98,2,80],"./julia/julia.js":[99,118],"./livescript/livescript.js":[100,119],"./lua/lua.js":[101,120],"./markdown/markdown.js":[55,51],"./mathematica/mathematica.js":[102,121],"./mbox/mbox.js":[103,122],"./meta.js":[45],"./mirc/mirc.js":[104,123],"./mllike/mllike.js":[105,124],"./modelica/modelica.js":[106,125],"./mscgen/mscgen.js":[107,126],"./mumps/mumps.js":[108,127],"./nginx/nginx.js":[109,128],"./nsis/nsis.js":[110,76],"./ntriples/ntriples.js":[111,129],"./octave/octave.js":[112,130],"./oz/oz.js":[113,131],"./pascal/pascal.js":[114,132],"./pegjs/pegjs.js":[115,2,133],"./perl/perl.js":[116,134],"./php/php.js":[117,2,3,5,70],"./pig/pig.js":[118,135],"./powershell/powershell.js":[119,136],"./properties/properties.js":[120,137],"./protobuf/protobuf.js":[121,138],"./pug/pug.js":[56,2,3,50],"./puppet/puppet.js":[122,139],"./python/python.js":[51,140],"./q/q.js":[123,141],"./r/r.js":[124,142],"./rpm/rpm.js":[125,143],"./rst/rst.js":[126,64],"./ruby/ruby.js":[44,144],"./rust/rust.js":[127,77],"./sas/sas.js":[128,145],"./sass/sass.js":[53,3,146],"./scheme/scheme.js":[129,147],"./shell/shell.js":[130,148],"./sieve/sieve.js":[131,149],"./slim/slim.js":[132,2,3,66],"./smalltalk/smalltalk.js":[133,150],"./smarty/smarty.js":[134,151],"./solr/solr.js":[135,152],"./soy/soy.js":[136,2,3,71],"./sparql/sparql.js":[137,153],"./spreadsheet/spreadsheet.js":[138,154],"./sql/sql.js":[139,155],"./stex/stex.js":[52,156],"./stylus/stylus.js":[57,52],"./swift/swift.js":[140,157],"./tcl/tcl.js":[141,158],"./textile/textile.js":[142,159],"./tiddlywiki/tiddlywiki.js":[143,160],"./tiki/tiki.js":[144,161],"./toml/toml.js":[145,162],"./tornado/tornado.js":[146,2,3,63],"./troff/troff.js":[147,163],"./ttcn-cfg/ttcn-cfg.js":[149,164],"./ttcn/ttcn.js":[148,165],"./turtle/turtle.js":[150,166],"./twig/twig.js":[151,72],"./vb/vb.js":[152,167],"./vbscript/vbscript.js":[153,168],"./velocity/velocity.js":[154,169],"./verilog/verilog.js":[155,170],"./vhdl/vhdl.js":[156,171],"./vue/vue.js":[157,2,3,52,50,59],"./webidl/webidl.js":[158,172],"./xml/xml.js":[38,173],"./xquery/xquery.js":[159,174],"./yacas/yacas.js":[160,175],"./yaml-frontmatter/yaml-frontmatter.js":[161,81],"./yaml/yaml.js":[54,176],"./z80/z80.js":[162,177]};function l(e){if(!t.o(n,e))return Promise.resolve().then((function(){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}));var a=n[e],l=a[0];return Promise.all(a.slice(1).map(t.e)).then((function(){return t.t(l,7)}))}l.keys=function(){return Object.keys(n)},l.id=58,e.exports=l}}]);
//# sourceMappingURL=18.6b6ce4cd.chunk.js.map