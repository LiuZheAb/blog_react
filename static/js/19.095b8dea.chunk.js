(this.webpackJsonpblog=this.webpackJsonpblog||[]).push([[19],{38:function(e,a,t){"use strict";t.d(a,"a",(function(){return c}));var l=t(8),r=t(9),n=t(10),i=t(11),s=t(0),o=t.n(s),c=(t(39),function(e){Object(i.a)(t,e);var a=Object(n.a)(t);function t(e){var r;return Object(l.a)(this,t),(r=a.call(this,e)).bindHandleScroll=function(e){var a=!!e.srcElement&&e.srcElement.documentElement.scrollTop||window.pageYOffset||(e.srcElement?e.srcElement.body.scrollTop:0);r.setState({scrollTop:a})},r.scrollToAnchor=function(e){if(e){var a=document.getElementById(e);a&&a.scrollIntoView()}},r.state={articleTree:r.props.articleTree,scrollTop:null},r}return Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=document.getElementById("header"),a=window.scrollY,t=document.getElementsByClassName("directory-list")[0],l=t.offsetTop;window.addEventListener("scroll",this.bindHandleScroll),window.onscroll=function(){for(var r=document.getElementsByClassName("page-footer")[0],n=0;r;)n+=r.offsetTop,r=r.offsetParent;var i=document.body.scrollTop||document.documentElement.scrollTop;if((i+=l+t.offsetHeight)>n)t.style="position:fixed;top:".concat(l-i+n-e.offsetHeight,"px;transition:none");else{var s=window.scrollY;t&&(s>e.offsetHeight&&(a<s&&(e.className="ant-layout-header header header-affixed",t.className="directory-list directory-affixed",a=s),a>s&&(e.className="ant-layout-header header header-visible",t.className="directory-list",a=s)),t.style="")}}}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.bindHandleScroll),this.setState({articleTree:this.props.articleTree})}},{key:"render",value:function(){var e=this,a=this.state,t=a.articleTree,l=a.scrollTop,r=t.length;if(document.getElementById("tree-num-0")&&r>0){for(var n=[],i=0;i<r;i++){var s=document.getElementById(t[i].name);n.push(s.offsetTop)}for(var c=n.findIndex((function(e){return e>l}))-1,m=0;m<r;m++)document.getElementById("tree-num-".concat(m)).className=m===c?"tree-num directory-item-active":"tree-num";-2===c&&(document.getElementById("tree-num-".concat(r-1)).className="tree-num directory-item-active")}return o.a.createElement("ul",{className:"directory-list"},t.map((function(a,t){return o.a.createElement("li",{key:t,id:"tree-num-".concat(t),className:"tree-num",title:a.name,style:{paddingLeft:"H2"===a.tag?"10px":"22px"},onClick:function(){e.scrollToAnchor("".concat(a.name))}},a.name)})))}}],[{key:"getDerivedStateFromProps",value:function(e,a){var t=e.articleTree;return t!==a.articleTree?{articleTree:t}:null}}]),t}(s.Component))},39:function(e,a,t){},438:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return j}));var l=t(8),r=t(9),n=t(15),i=t(10),s=t(11),o=t(0),c=t.n(o),m=t(165),d=(t(60),t(38)),u=t(58),p=t.n(u),g=p.a.GraphObject.make,j=function(e){Object(s.a)(o,e);var a=Object(i.a)(o);function o(e){var t;return Object(l.a)(this,o),(t=a.call(this,e)).state={articleTree:[]},t.getArticleTree=t.getArticleTree.bind(Object(n.a)(t)),t}return Object(r.a)(o,[{key:"getArticleTree",value:function(){for(var e=document.getElementsByClassName("article-content")[0].children,a=[],t=0;t<e.length-1;t++){var l=e[t].nodeName;"H2"!==l&&"H3"!==l||(e[t].id=e[t].innerText,a.push({name:e[t].innerText,tag:e[t].nodeName}))}this.setState({articleTree:a})}},{key:"componentDidMount",value:function(){document.title="GoJS\u6559\u7a0b\u2014\u2014\u7b2c\u516d\u8282 GoJS GraphObject\u5c5e\u6027",this.getArticleTree(),this.diagramRender1(),this.diagramRender2(),this.diagramRender3(),this.diagramRender4(),this.diagramRender5(),this.diagramRender6(),this.diagramRender7()}},{key:"diagramRender1",value:function(){var e=g(p.a.Diagram,"myDiagramDiv1");e.nodeTemplate=g(p.a.Node,"Vertical",g(p.a.TextBlock,"text",{text:"Example"}),g(p.a.Panel,"Auto",g(p.a.Shape,"RoundedRectangle"),g(p.a.Shape))),e.model=new p.a.GraphLinksModel([{key:"Alpha"}])}},{key:"diagramRender2",value:function(){var e=g(p.a.Diagram,"myDiagramDiv2");e.nodeTemplate=g(p.a.Node,"Vertical",g(p.a.TextBlock,"text",{text:"Example",font:"Italic small-caps bold 12pt Georgia,Serif",stroke:"purple",editable:!0}),g(p.a.Panel,"Auto",g(p.a.Shape,"RoundedRectangle"),g(p.a.Shape))),e.model=new p.a.GraphLinksModel([{key:"Alpha"}])}},{key:"diagramRender3",value:function(){var e=g(p.a.Diagram,"myDiagramDiv3");e.nodeTemplate=g(p.a.Node,"Vertical",g(p.a.TextBlock,"text",{text:"Example",font:"Italic small-caps bold 12pt Georgia,Serif",stroke:"purple",editable:!0}),g(p.a.Panel,"Auto",g(p.a.Shape,"RoundedRectangle",{figure:"Ellipse"}),g(p.a.Shape))),e.model=new p.a.GraphLinksModel([{key:"Alpha"}])}},{key:"diagramRender4",value:function(){var e=g(p.a.Diagram,"myDiagramDiv4");e.nodeTemplate=g(p.a.Node,"Vertical",g(p.a.TextBlock,"text",{text:"Example",font:"Italic small-caps bold 12pt Georgia,Serif",stroke:"purple",editable:!0}),g(p.a.Panel,"Auto",g(p.a.Shape,"RoundedRectangle",{figure:"Ellipse",fill:"pink",stroke:"purple",strokeWidth:10}),g(p.a.Shape))),e.model=new p.a.GraphLinksModel([{key:"Alpha"}])}},{key:"diagramRender5",value:function(){var e=g(p.a.Diagram,"myDiagramDiv5");e.nodeTemplate=g(p.a.Node,"Vertical",g(p.a.TextBlock,"text",{text:"Example",font:"Italic small-caps bold 12pt Georgia,Serif",stroke:"purple",editable:!0}),g(p.a.Panel,"Auto",g(p.a.Shape,"RoundedRectangle",{figure:"Ellipse",fill:"pink",stroke:"purple",strokeWidth:10}),g(p.a.Picture,t(193),{desiredSize:new p.a.Size(150,100),margin:new p.a.Margin(25,0,0,0)}))),e.model=new p.a.GraphLinksModel([{key:"Alpha"}])}},{key:"diagramRender6",value:function(){var e=g(p.a.Diagram,"myDiagramDiv6");e.nodeTemplate=g(p.a.Node,"Vertical",{selectable:!0,deletable:!0,resizable:!0,rotatable:!0},g(p.a.TextBlock,"text",{text:"Example",font:"Italic small-caps bold 12pt Georgia,Serif",stroke:"purple",editable:!0}),g(p.a.Panel,"Auto",g(p.a.Shape,"RoundedRectangle",{figure:"Ellipse",fill:"pink",stroke:"purple",strokeWidth:10}),g(p.a.Picture,t(193),{desiredSize:new p.a.Size(150,100),margin:new p.a.Margin(25,0,0,0)}))),e.model=new p.a.GraphLinksModel([{key:"Alpha"}])}},{key:"diagramRender7",value:function(){var e=g(p.a.Diagram,"myDiagramDiv7");e.nodeTemplate=g(p.a.Node,"Vertical",{selectable:!0,deletable:!0,resizable:!0,rotatable:!0,resizeObjectName:"PANEL",rotateObjectName:"PANEL"},g(p.a.TextBlock,"text",{text:"Example",font:"Italic small-caps bold 12pt Georgia,Serif",stroke:"purple",editable:!0}),g(p.a.Panel,"Auto",{name:"PANEL"},g(p.a.Shape,"RoundedRectangle",{figure:"Ellipse",fill:"pink",stroke:"purple",strokeWidth:10}),g(p.a.Picture,t(193),{desiredSize:new p.a.Size(150,100),margin:new p.a.Margin(25,0,0,0)}))),e.model=new p.a.GraphLinksModel([{key:"Alpha"}])}},{key:"render",value:function(){return c.a.createElement("div",{className:"page-content"},c.a.createElement("div",{className:"article"},c.a.createElement("div",{className:"article-title"},c.a.createElement("h1",null,"GoJS\u5165\u95e8\u6559\u7a0b\u2014\u2014\u7b2c\u516d\u8282 GoJS GraphObject\u5c5e\u6027")),c.a.createElement("div",{className:"article-content"},c.a.createElement("h2",null,"GraphObject\u5c5e\u6027"),c.a.createElement("ul",null,c.a.createElement("li",null,"GraphObject(\u4f8b\u5982 Shapes,TextBlocks,Pictures)\u652f\u6301\u591a\u79cd\u5c5e\u6027\u6765\u8bbe\u7f6e\u5b83\u4eec\u6837\u5f0f\u548c\u8868\u73b0"),c.a.createElement("li",null,"\u6709\u5173\u8fd9\u4e9b\u5c5e\u6027\u7684\u5b8c\u6574\u8bb0\u5f55\uff0c\u8bf7\u53c2\u9605",c.a.createElement("a",{href:"https://gojs.net/latest/api/index.html",target:"_blank",rel:"noopener noreferrer"},"API\u6587\u6863"))),c.a.createElement("h3",null,"TextBlock\u7684\u5c5e\u6027"),c.a.createElement("p",null,"\u4ee3\u7801\u53ca\u6548\u679c\u5982\u4e0b\uff1a"),c.a.createElement("div",{className:"text-center"},c.a.createElement("img",{src:t(266),alt:""})),c.a.createElement("div",{id:"myDiagramDiv1",className:"diagram"}),c.a.createElement("ul",null,c.a.createElement("li",null,'"font"\u5c5e\u6027\u503c\u5fc5\u987b\u662f\u6b63\u786e\u683c\u5f0f\u7684\u5b57\u7b26\u4e32,',"<font-style font-variant fong-weight font-size font-family>"),c.a.createElement("li",null,'"stroke"\u5c5e\u6027\u503c\u53ef\u4ee5\u662f\u4efb\u610fcss color\u5b57\u7b26\u4e32')),c.a.createElement("ul",{"data-lake-indent":"1"},c.a.createElement("li",null,"\u6307\u5b9a\u540d\u79f0\u7684\u989c\u8272\uff0c\u5982red\u3001blue"),c.a.createElement("li",null,"\u5341\u516d\u8fdb\u5236"),c.a.createElement("li",null,"RGB"),c.a.createElement("li",null,"HSL")),c.a.createElement("ul",null,c.a.createElement("li",null,'"editable"\u5e03\u5c14\u5c5e\u6027\u51b3\u5b9a\u6587\u672c\u5757\u7684\u6587\u672c\u662f\u5426\u53ef\u4ee5\u7f16\u8f91')),c.a.createElement("p",null),c.a.createElement("p",null,"\u4ee3\u7801\u53ca\u6548\u679c\u5982\u4e0b\uff1a"),c.a.createElement(m.a,{value:'$(go.TextBlock, "text",{\n    text:"Example",\n    font:"Italic small-caps bold 12pt Georgia,Serif",\n    stroke:"purple",\n    editable:true\n})',options:{theme:"monokai",mode:"JSX",readOnly:!0}}),c.a.createElement("div",{id:"myDiagramDiv2",className:"diagram"}),c.a.createElement("h3",null,"Shape\u7684\u5c5e\u6027"),c.a.createElement("div",{className:"text-center"},c.a.createElement("img",{src:t(267),alt:""})),c.a.createElement(m.a,{value:'$(go.Panel, "Auto",\n    $(go.Shape, "RoundedRectangle", {\n        figure: "Ellipse"\n    }),\n    $(go.Shape)\n)',options:{theme:"monokai",mode:"JSX",readOnly:!0}}),c.a.createElement("div",{id:"myDiagramDiv3",className:"diagram"}),c.a.createElement("ul",null,c.a.createElement("li",null,'"figure"\u5c5e\u6027\u51b3\u5b9a\u5f62\u72b6'),c.a.createElement("li",null,'"fill"\u5c5e\u6027\u51b3\u5b9a\u989c\u8272'),c.a.createElement("li",null,'"stroke"\u5c5e\u6027\u503c\u53ef\u4ee5\u662f\u4efb\u610fcss color\u5b57\u7b26\u4e32'),c.a.createElement("li",null,'"strokeWidth"\u5c5e\u6027\u503c\u662f\u6570\u5b57\uff0c\u51b3\u5b9a\u8fb9\u6846\u5bbd\u5ea6')),c.a.createElement(m.a,{value:'$(go.Panel, "Auto",\n    $(go.Shape, "RoundedRectangle", {\n        figure: "Ellipse",\n        fill:"pink",\n        stroke:"purple",\n        strokeWith:10\n    }),\n    $(go.Shape)\n)',options:{theme:"monokai",mode:"JSX",readOnly:!0}}),c.a.createElement("div",{id:"myDiagramDiv4",className:"diagram"}),c.a.createElement("h3",null,"Picture\u7684\u5c5e\u6027"),c.a.createElement("ul",null,c.a.createElement("li",null,'"Source"\u5c5e\u6027\u51b3\u5b9a\u56fe\u7247\u7684\u8def\u5f84,\u5728\u9009\u9879\u5bf9\u8c61\u4e2d\u8bbe\u7f6e\u6216\u4f5c\u4e3a\u53ef\u9009\u5b57\u7b26\u4e32\u53c2\u6570'),c.a.createElement("li",null,'"desiredSize"\u5c5e\u6027\u901a\u8fc7new go.Size(width,height)\u51b3\u5b9a\u56fe\u7247\u5927\u5c0f'),c.a.createElement("li",null,'"margin"\u5c5e\u6027\u901a\u8fc7new go.Margin(top,right,bottom,left)\u51b3\u5b9a\u56fe\u7247\u7684margin')),c.a.createElement(m.a,{value:'$(go.Picture,"./avatar.54d15c2f.jpg",\n    {\n        desiredSize:new go.Size(150,100),\n        margin:new go.Margin(25,0,0,0)\n    }\n)',options:{theme:"monokai",mode:"JSX",readOnly:!0}}),c.a.createElement("div",{id:"myDiagramDiv5",className:"diagram"}),c.a.createElement("h3",null,"Node\u7684\u5c5e\u6027"),c.a.createElement("ul",null,c.a.createElement("li",null,'"selectable"\u5c5e\u6027\u51b3\u5b9a\u8282\u70b9\u662f\u5426\u53ef\u9009'),c.a.createElement("li",null,'"deletable"\u5c5e\u6027\u51b3\u5b9a\u8282\u70b9\u662f\u5426\u53ef\u5220\u9664'),c.a.createElement("li",null,'"resizable"\u5c5e\u6027\u51b3\u5b9a\u8282\u70b9\u662f\u5426\u53ef\u6539\u53d8\u5927\u5c0f'),c.a.createElement("li",null,'"rotatable"\u5c5e\u6027\u51b3\u5b9a\u8282\u70b9\u662f\u5426\u53ef\u65cb\u8f6c')),c.a.createElement(m.a,{value:'$(go.Node, "Vertical", {\n    selectable:true,\n    deletable:true,\n    resizable:true,\n    rotatable:true\n},',options:{theme:"monokai",mode:"JSX",readOnly:!0}}),c.a.createElement("div",{id:"myDiagramDiv6",className:"diagram"}),c.a.createElement("ul",null,c.a.createElement("li",null,"resizeObjectName:\u8981\u8c03\u6574\u5927\u5c0f\u7684GraphObject\u7684\u540d\u79f0"),c.a.createElement("li",null,"rotateobjectName:\u8981\u65cb\u8f6c\u7684GraphObiect\u7684\u540d\u79f0"),c.a.createElement("li",null,"\u503c\u5fc5\u987b\u4e0e\u90e8\u4ef6\u4e2d\u7684\u547d\u540d\u5143\u7d20\u76f8\u5bf9\u5e94")),c.a.createElement(m.a,{value:'$(go.Node, "Vertical", {\n    selectable: true,\n    deletable: true,\n    resizable: true,\n    rotatable: true,\n    resizeObjectName: "PANEL",\n    rotateObjectName: "PANEL"\n},\n$(go.TextBlock, "text", {\n    text: "Example",\n    font: "Italic small-caps bold 12pt Georgia,Serif",\n    stroke: "purple",\n    editable: true\n}),\n$(go.Panel, "Auto", {\n        name: "PANEL"\n    },\n    $(go.Shape, "RoundedRectangle", {\n        figure: "Ellipse",\n        fill: "pink",\n        stroke: "purple",\n        strokeWidth: 10\n    }),\n    $(go.Picture, "./avatar.54d15c2f.jpg", {\n        desiredSize: new go.Size(150, 100),\n        margin: new go.Margin(25, 0, 0, 0)\n    })\n)\n);',options:{theme:"monokai",mode:"JSX",readOnly:!0}}),c.a.createElement("div",{id:"myDiagramDiv7",className:"diagram"}),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement("p",null,"\u76f8\u5173\u4ee3\u7801\uff1a"),c.a.createElement("p",null,c.a.createElement("a",{href:"https://github.com/LiuZheAb/GoJS_Demo/blob/master/06graphObjectProperties.html",target:"_blank",rel:"noopener noreferrer"},"https://github.com/LiuZheAb/GoJS_Demo/blob/master/06graphObjectProperties.html")))),c.a.createElement("div",{className:"directory"},c.a.createElement(d.a,{articleTree:this.state.articleTree})))}}]),o}(o.Component)},59:function(e,a,t){var l={"./apl/apl.js":[61,58],"./asciiarmor/asciiarmor.js":[62,59],"./asn.1/asn.1.js":[63,60],"./asterisk/asterisk.js":[64,61],"./brainfuck/brainfuck.js":[65,62],"./clike/clike.js":[47,3],"./clojure/clojure.js":[66,63],"./cmake/cmake.js":[67,64],"./cobol/cobol.js":[68,65],"./coffeescript/coffeescript.js":[48,66],"./commonlisp/commonlisp.js":[69,67],"./crystal/crystal.js":[70,68],"./css/css.js":[42,2],"./cypher/cypher.js":[71,69],"./d/d.js":[72,70],"./dart/dart.js":[73,3,71],"./diff/diff.js":[74,72],"./django/django.js":[75,1,2,37],"./dockerfile/dockerfile.js":[76,50],"./dtd/dtd.js":[77,73],"./dylan/dylan.js":[78,74],"./ebnf/ebnf.js":[79,75],"./ecl/ecl.js":[80,76],"./eiffel/eiffel.js":[81,77],"./elm/elm.js":[82,78],"./erlang/erlang.js":[83,79],"./factor/factor.js":[84,51],"./fcl/fcl.js":[85,80],"./forth/forth.js":[86,81],"./fortran/fortran.js":[87,82],"./gas/gas.js":[88,83],"./gfm/gfm.js":[89,5,49],"./gherkin/gherkin.js":[90,84],"./go/go.js":[91,85],"./groovy/groovy.js":[92,86],"./haml/haml.js":[93,1,2,40],"./handlebars/handlebars.js":[49,45],"./haskell-literate/haskell-literate.js":[94,54],"./haskell/haskell.js":[50,87],"./haxe/haxe.js":[95,88],"./htmlembedded/htmlembedded.js":[96,1,2,36],"./htmlmixed/htmlmixed.js":[41,1,2,55],"./http/http.js":[97,89],"./idl/idl.js":[98,90],"./javascript/javascript.js":[43,1],"./jinja2/jinja2.js":[99,91],"./jsx/jsx.js":[100,1,56],"./julia/julia.js":[101,92],"./livescript/livescript.js":[102,93],"./lua/lua.js":[103,94],"./markdown/markdown.js":[55,5],"./mathematica/mathematica.js":[104,95],"./mbox/mbox.js":[105,96],"./meta.js":[46],"./mirc/mirc.js":[106,97],"./mllike/mllike.js":[107,98],"./modelica/modelica.js":[108,99],"./mscgen/mscgen.js":[109,100],"./mumps/mumps.js":[110,101],"./nginx/nginx.js":[111,102],"./nsis/nsis.js":[112,52],"./ntriples/ntriples.js":[113,103],"./octave/octave.js":[114,104],"./oz/oz.js":[115,105],"./pascal/pascal.js":[116,106],"./pegjs/pegjs.js":[117,1,107],"./perl/perl.js":[118,108],"./php/php.js":[119,1,2,3,46],"./pig/pig.js":[120,109],"./powershell/powershell.js":[121,110],"./properties/properties.js":[122,111],"./protobuf/protobuf.js":[123,112],"./pug/pug.js":[56,1,2,4],"./puppet/puppet.js":[124,113],"./python/python.js":[51,114],"./q/q.js":[125,115],"./r/r.js":[126,116],"./rpm/rpm.js":[127,117],"./rst/rst.js":[128,39],"./ruby/ruby.js":[44,118],"./rust/rust.js":[129,53],"./sas/sas.js":[130,119],"./sass/sass.js":[53,2,120],"./scheme/scheme.js":[131,121],"./shell/shell.js":[132,122],"./sieve/sieve.js":[133,123],"./slim/slim.js":[134,1,2,41],"./smalltalk/smalltalk.js":[135,124],"./smarty/smarty.js":[136,125],"./solr/solr.js":[137,126],"./soy/soy.js":[138,1,2,47],"./sparql/sparql.js":[139,127],"./spreadsheet/spreadsheet.js":[140,128],"./sql/sql.js":[141,129],"./stex/stex.js":[52,130],"./stylus/stylus.js":[57,6],"./swift/swift.js":[142,131],"./tcl/tcl.js":[143,132],"./textile/textile.js":[144,133],"./tiddlywiki/tiddlywiki.js":[145,134],"./tiki/tiki.js":[146,135],"./toml/toml.js":[147,136],"./tornado/tornado.js":[148,1,2,38],"./troff/troff.js":[149,137],"./ttcn-cfg/ttcn-cfg.js":[151,138],"./ttcn/ttcn.js":[150,139],"./turtle/turtle.js":[152,140],"./twig/twig.js":[153,48],"./vb/vb.js":[154,141],"./vbscript/vbscript.js":[155,142],"./velocity/velocity.js":[156,143],"./verilog/verilog.js":[157,144],"./vhdl/vhdl.js":[158,145],"./vue/vue.js":[159,1,2,6,4,13],"./webidl/webidl.js":[160,146],"./xml/xml.js":[40,147],"./xquery/xquery.js":[161,148],"./yacas/yacas.js":[162,149],"./yaml-frontmatter/yaml-frontmatter.js":[163,57],"./yaml/yaml.js":[54,150],"./z80/z80.js":[164,151]};function r(e){if(!t.o(l,e))return Promise.resolve().then((function(){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}));var a=l[e],r=a[0];return Promise.all(a.slice(1).map(t.e)).then((function(){return t.t(r,7)}))}r.keys=function(){return Object.keys(l)},r.id=59,e.exports=r}}]);
//# sourceMappingURL=19.095b8dea.chunk.js.map