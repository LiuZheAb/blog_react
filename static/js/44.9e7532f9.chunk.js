(this.webpackJsonpblog=this.webpackJsonpblog||[]).push([[44],{352:function(e,t,s){"use strict";s.r(t),s.d(t,"default",(function(){return j}));var a=s(11),l=s(12),n=s(13),r=s(14),o=s(0),c=s.n(o),i=s(36),m=s(163),j=(s(46),function(e){Object(r.a)(s,e);var t=Object(n.a)(s);function s(){return Object(a.a)(this,s),t.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){return c.a.createElement("div",{className:"page-content"},c.a.createElement("div",{className:"article"},c.a.createElement("div",{className:"article-title"},c.a.createElement("h1",null,"React-router Warning")),c.a.createElement("div",{className:"article-content"},c.a.createElement("h2",null,"\u95ee\u9898"),c.a.createElement("p",{style:{color:"#ce1126",fontSize:18,fontWeight:600}},"Warning: Failed prop type: Invalid prop 'component' supplied to 'Route': the prop is not a valid React component"),c.a.createElement("h2",null,"\u95ee\u9898\u80cc\u666f"),c.a.createElement("p",null,"2020-04-17 \u665a"),c.a.createElement("p",null,"\u5c06\u6587\u6863\u5165\u53e3\u6587\u4ef6\u7684\u8def\u7531\u914d\u7f6e\u6539\u4e3a map \u904d\u5386\u540e,\u5f15\u5165\u6587\u6863\u76ee\u5f55\u7ec4\u4ef6\u9047\u5230\u6b64\u95ee\u9898"),c.a.createElement("h2",null,"\u95ee\u9898\u63cf\u8ff0"),c.a.createElement("p",null,"\u672a\u89e3\u51b3\u524d\u4ee3\u7801\u5982\u4e0b"),c.a.createElement(m.a,{value:"<Route exact path={GOJS_DATA.baseHref} component={<Catalog dataSource={GOJS_DATA} />} />",options:{theme:"monokai",mode:"JSX",readOnly:!0,lineNumbers:!0}}),c.a.createElement("p",null,"\u95ee\u9898\u7ffb\u8bd1\u5982\u4e0b"),c.a.createElement("p",null,"\u8b66\u544a\uff1a\u5931\u8d25\u7684\u5c5e\u6027\u7c7b\u578b\uff1a\u63d0\u4f9b\u7ed9\u201croute\u201d\u7684\u201cobject\u201d\u7c7b\u578b\u7684\u201ccomponent\u201d\u65e0\u6548\uff0c\u5e94\u4e3a\u201cfunction\u201d"),c.a.createElement("h2",null,"\u89e3\u51b3\u65b9\u6848"),c.a.createElement("p",null,"\u5c31\u662f\u9700\u8981\u901a\u8fc7\u51fd\u6570\u8fd4\u56de\u800c\u4e0d\u662f\u5bf9\u8c61\u3002\u6240\u4ee5\u8981\u5199\u6210\u51fd\u6570\u7684\u5f62\u5f0f\u3002"),c.a.createElement("p",null,"\u5199\u6cd5\u5982\u4e0b"),c.a.createElement(m.a,{value:"<Route exact path={GOJS_DATA.baseHref} compontent={() => <Catalog dataSource={GOJS_DATA} />} />",options:{theme:"monokai",mode:"JSX",readOnly:!0,lineNumbers:!0}}))),c.a.createElement(i.a,null))}}]),s}(o.Component))},36:function(e,t,s){"use strict";var a=s(11),l=s(12),n=s(16),r=s(13),o=s(14),c=s(0),i=s.n(c),m=s(5),j=s(39),u=(s(37),function(e){Object(o.a)(s,e);var t=Object(r.a)(s);function s(e){var l;return Object(a.a)(this,s),(l=t.call(this,e)).bindHandleScroll=function(e){var t=!!e.srcElement&&e.srcElement.documentElement.scrollTop||window.pageYOffset||(e.srcElement?e.srcElement.body.scrollTop:0);l.setState({scrollTop:t})},l.scrollToAnchor=function(e){if(e){var t=document.getElementById(e);t&&t.scrollIntoView({block:"start",behavior:"smooth"})}},l.state={articleTree:[],scrollTop:null},l.getArticleTree=l.getArticleTree.bind(Object(n.a)(l)),l}return Object(l.a)(s,[{key:"getArticleTree",value:function(){for(var e=document.getElementsByClassName("article-content")[0].children,t=[],s=0;s<e.length-1;s++){var a=e[s].nodeName;"H2"!==a&&"H3"!==a||(e[s].id=e[s].innerText,t.push({name:e[s].innerText,tag:e[s].nodeName}))}this.setState({articleTree:t})}},{key:"setTitle",value:function(){for(var e=this.props.location.pathname.split("/").filter((function(e){return e})),t=0;t<j.a.length;t++)e[0]===j.a[t].name&&(document.getElementsByTagName("h1")[0].innerHTML=j.a[t].section.length>0?j.a[t].section[e[e.length-1]]:j.a[t].title)}},{key:"componentDidMount",value:function(){this.getArticleTree(),this.setTitle();var e=document.getElementById("header"),t=window.scrollY,s=document.getElementsByClassName("directory-list")[0],a=s.offsetTop;window.addEventListener("scroll",this.bindHandleScroll),window.onscroll=function(){for(var l=document.getElementsByClassName("page-footer")[0],n=0;l;)n+=l.offsetTop,l=l.offsetParent;var r=document.body.scrollTop||document.documentElement.scrollTop;if((r+=a+s.offsetHeight)>n+e.offsetHeight)s.style="position:fixed;top:".concat(a-r+n,"px;transition:none");else{var o=window.scrollY;o>e.offsetHeight&&(t<o&&(e.className="ant-layout-header header header-affixed",s.className="directory-list directory-affixed",t=o),t>o&&(e.className="ant-layout-header header header-visible",s.className="directory-list",t=o)),s.style=""}}}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.bindHandleScroll)}},{key:"render",value:function(){var e=this,t=this.state,s=t.articleTree,a=t.scrollTop,l=s.length;if(document.getElementById("tree-num-0")&&l>0){for(var n=[],r=0;r<l;r++){var o=document.getElementById(s[r].name);n.push(o.offsetTop)}for(var c=n.findIndex((function(e){return e>a}))-1,m=0;m<l;m++)document.getElementById("tree-num-".concat(m)).className=m===c?"tree-num directory-item-active":"tree-num";-2===c&&(document.getElementById("tree-num-".concat(l-1)).className="tree-num directory-item-active")}return i.a.createElement("div",{className:"directory"},i.a.createElement("ul",{className:"directory-list"},s.map((function(t,s){return i.a.createElement("li",{key:s,id:"tree-num-".concat(s),className:"tree-num",title:t.name,style:{paddingLeft:"H2"===t.tag?10:22},onClick:function(){e.scrollToAnchor("".concat(t.name))}},t.name)}))))}}]),s}(c.Component));t.a=Object(m.f)(u)},37:function(e,t,s){},58:function(e,t,s){var a={"./apl/apl.js":[59,95],"./asciiarmor/asciiarmor.js":[60,96],"./asn.1/asn.1.js":[61,97],"./asterisk/asterisk.js":[62,98],"./brainfuck/brainfuck.js":[63,99],"./clike/clike.js":[47,5],"./clojure/clojure.js":[64,100],"./cmake/cmake.js":[65,101],"./cobol/cobol.js":[66,102],"./coffeescript/coffeescript.js":[48,103],"./commonlisp/commonlisp.js":[67,104],"./crystal/crystal.js":[68,105],"./css/css.js":[41,3],"./cypher/cypher.js":[69,106],"./d/d.js":[70,107],"./dart/dart.js":[71,5,108],"./diff/diff.js":[72,109],"./django/django.js":[73,2,3,72],"./dockerfile/dockerfile.js":[74,84],"./dtd/dtd.js":[75,110],"./dylan/dylan.js":[76,111],"./ebnf/ebnf.js":[77,112],"./ecl/ecl.js":[78,113],"./eiffel/eiffel.js":[79,114],"./elm/elm.js":[80,115],"./erlang/erlang.js":[81,116],"./factor/factor.js":[82,85],"./fcl/fcl.js":[83,117],"./forth/forth.js":[84,118],"./fortran/fortran.js":[85,119],"./gas/gas.js":[86,120],"./gfm/gfm.js":[87,61,83],"./gherkin/gherkin.js":[88,121],"./go/go.js":[89,122],"./groovy/groovy.js":[90,123],"./haml/haml.js":[91,2,3,75],"./handlebars/handlebars.js":[49,79],"./haskell-literate/haskell-literate.js":[92,88],"./haskell/haskell.js":[50,124],"./haxe/haxe.js":[93,125],"./htmlembedded/htmlembedded.js":[94,2,3,71],"./htmlmixed/htmlmixed.js":[40,2,3,89],"./http/http.js":[95,126],"./idl/idl.js":[96,127],"./javascript/javascript.js":[42,2],"./jinja2/jinja2.js":[97,128],"./jsx/jsx.js":[98,2,90],"./julia/julia.js":[99,129],"./livescript/livescript.js":[100,130],"./lua/lua.js":[101,131],"./markdown/markdown.js":[55,61],"./mathematica/mathematica.js":[102,132],"./mbox/mbox.js":[103,133],"./meta.js":[45],"./mirc/mirc.js":[104,134],"./mllike/mllike.js":[105,135],"./modelica/modelica.js":[106,136],"./mscgen/mscgen.js":[107,137],"./mumps/mumps.js":[108,138],"./nginx/nginx.js":[109,139],"./nsis/nsis.js":[110,86],"./ntriples/ntriples.js":[111,140],"./octave/octave.js":[112,141],"./oz/oz.js":[113,142],"./pascal/pascal.js":[114,143],"./pegjs/pegjs.js":[115,2,144],"./perl/perl.js":[116,145],"./php/php.js":[117,2,3,5,80],"./pig/pig.js":[118,146],"./powershell/powershell.js":[119,147],"./properties/properties.js":[120,148],"./protobuf/protobuf.js":[121,149],"./pug/pug.js":[56,2,3,60],"./puppet/puppet.js":[122,150],"./python/python.js":[51,151],"./q/q.js":[123,152],"./r/r.js":[124,153],"./rpm/rpm.js":[125,154],"./rst/rst.js":[126,74],"./ruby/ruby.js":[44,155],"./rust/rust.js":[127,87],"./sas/sas.js":[128,156],"./sass/sass.js":[53,3,157],"./scheme/scheme.js":[129,158],"./shell/shell.js":[130,159],"./sieve/sieve.js":[131,160],"./slim/slim.js":[132,2,3,76],"./smalltalk/smalltalk.js":[133,161],"./smarty/smarty.js":[134,162],"./solr/solr.js":[135,163],"./soy/soy.js":[136,2,3,81],"./sparql/sparql.js":[137,164],"./spreadsheet/spreadsheet.js":[138,165],"./sql/sql.js":[139,166],"./stex/stex.js":[52,167],"./stylus/stylus.js":[57,62],"./swift/swift.js":[140,168],"./tcl/tcl.js":[141,169],"./textile/textile.js":[142,170],"./tiddlywiki/tiddlywiki.js":[143,171],"./tiki/tiki.js":[144,172],"./toml/toml.js":[145,173],"./tornado/tornado.js":[146,2,3,73],"./troff/troff.js":[147,174],"./ttcn-cfg/ttcn-cfg.js":[149,175],"./ttcn/ttcn.js":[148,176],"./turtle/turtle.js":[150,177],"./twig/twig.js":[151,82],"./vb/vb.js":[152,178],"./vbscript/vbscript.js":[153,179],"./velocity/velocity.js":[154,180],"./verilog/verilog.js":[155,181],"./vhdl/vhdl.js":[156,182],"./vue/vue.js":[157,2,3,62,60,69],"./webidl/webidl.js":[158,183],"./xml/xml.js":[38,184],"./xquery/xquery.js":[159,185],"./yacas/yacas.js":[160,186],"./yaml-frontmatter/yaml-frontmatter.js":[161,91],"./yaml/yaml.js":[54,187],"./z80/z80.js":[162,188]};function l(e){if(!s.o(a,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=a[e],l=t[0];return Promise.all(t.slice(1).map(s.e)).then((function(){return s.t(l,7)}))}l.keys=function(){return Object.keys(a)},l.id=58,e.exports=l}}]);
//# sourceMappingURL=44.9e7532f9.chunk.js.map