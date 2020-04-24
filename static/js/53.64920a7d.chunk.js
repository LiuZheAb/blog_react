(this.webpackJsonpblog=this.webpackJsonpblog||[]).push([[53],{324:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return v}));n(351);var a=n(348),r=n(11),l=n(12),o=n(13),c=n(14),i=(n(515),n(513)),m=n(0),s=n.n(m),u=n(36),d=n(165),p=n.n(d),h=i.a.Meta,f=[{name:"\u6700\u7b80\u5355\u7684\u4f8b\u5b50",url:"minimal.html",overview:"minimal.png"},{name:"\u6d41\u7a0b\u56fe",url:"flowchart.html",overview:"flowchart.png"},{name:"\u601d\u7ef4\u5bfc\u56fe",url:"mindMap.html",overview:"mindMap.png"},{name:"\u903b\u8f91\u7535\u8def",url:"logicCircuit.html",overview:"logicCircuit.png"},{name:"\u6bd4\u8d5b\u6d41\u7a0b\u56fe",url:"tournament.html",overview:"tournament.png"},{name:"\u7518\u7279\u56fe",url:"gantt.html",overview:"gantt.png"},{name:"\u6811\u5f62\u63a7\u4ef6",url:"treeView.html",overview:"treeView.png"},{name:"\u6811\u6620\u5c04\u5668",url:"treeMapper.html",overview:"treeMapper.png"},{name:"DOM \u6811",url:"DOMTree.html",overview:"DOMTree.png"},{name:"\u4eea\u8868\u63a7\u4ef6",url:"controlGauges.html",overview:"controlGauges.png"},{name:"\u8bcd\u4e91",url:"wordcloud.html",overview:"wordcloud.png"},{name:"\u6570\u636e\u53ef\u89c6\u5316",url:"dataVisualization.html",overview:"dataVisualization.png"}],v=function(e){Object(c.a)(m,e);var t=Object(o.a)(m);function m(){return Object(r.a)(this,m),t.apply(this,arguments)}return Object(l.a)(m,[{key:"componentDidMount",value:function(){this.diagramRender()}},{key:"diagramRender",value:function(){(0,p.a.GraphObject.make)(p.a.Diagram,"myDiagramDiv").model=new p.a.GraphLinksModel([{key:"Hello"},{key:"World!"}],[{from:"Hello",to:"World!"}])}},{key:"render",value:function(){return s.a.createElement("div",{className:"page-content"},s.a.createElement("div",{className:"article"},s.a.createElement("div",{className:"article-title"},s.a.createElement("h1",null,"\u5199\u5728\u524d\u9762")),s.a.createElement("div",{id:"myDiagramDiv",className:"diagram",style:{height:150}}),s.a.createElement("div",{className:"article-content"},s.a.createElement("h2",null,"\u6559\u7a0b\u7b80\u4ecb"),s.a.createElement("p",null,"\u672c\u6559\u7a0b\u4ec5\u4f9b GoJS \u521d\u5b66\u8005\u89c2\u770b\u4f7f\u7528\u3002"),s.a.createElement("p",null,"\u672c\u6559\u7a0b\u662f\u53c2\u8003\u5b98\u65b9\u6587\u6863\u3001\u6559\u7a0b\u7b49\u8d44\u6599\u8fdb\u884c\u5f52\u7eb3\u6574\u7406,\u7531\u4e8e\u8d44\u6599\u5747\u4e3a\u82f1\u6587,\u7406\u89e3\u53ef\u80fd\u51fa\u73b0\u504f\u5dee,\u4ee5\u5b98\u65b9\u4e3a\u51c6\u3002"),s.a.createElement("p",null,"\u6559\u7a0b\u53ea\u662f\u5c06 GoJS \u4e2d\u5e38\u7528\u7684\u529f\u80fd API \u505a\u7b80\u8981\u6982\u8ff0,\u66f4\u8be6\u7ec6\u7684\u5185\u5bb9\u8fd8\u9700\u67e5\u770b\u5b98\u65b9\u7684 ",s.a.createElement("a",{href:"https://gojs.net/latest/api/index.html",target:"_blank",rel:"noopener noreferrer"},"API \u6587\u6863"),"\u3002"),s.a.createElement("h2",null,"GoJS \u7ed8\u56fe\u7ec4\u4ef6\u4ecb\u7ecd"),s.a.createElement("p",null,"\u8be6\u60c5\u8bf7\u770b ",s.a.createElement("a",{href:"https://gojs.net/latest/intro/index.html",target:"_blank",rel:"noopener noreferrer"},"GoJS Intro")),s.a.createElement("h2",null,"GoJS \u6837\u4f8b"),s.a.createElement("p",null,"\u4ee5\u4e0b\u662f\u4e00\u4e9b\u5178\u578b\u6837\u4f8b"),s.a.createElement(a.a,{grid:{gutter:10,xs:2,sm:3,md:3,lg:3,xl:4,xxl:4},dataSource:f,renderItem:function(e){return s.a.createElement(a.a.Item,null,s.a.createElement("a",{href:"https://gojs.net/latest/samples/"+e.url,target:"_blank",rel:"noopener noreferrer"},s.a.createElement(i.a,{hoverable:!0,cover:s.a.createElement("img",{src:n(267)("./"+e.overview),alt:""})},s.a.createElement(h,{title:e.name}))))}}),s.a.createElement("p",null,"\u66f4\u591a\u6837\u4f8b\u8bf7\u67e5\u770b ",s.a.createElement("a",{href:"https://gojs.net/latest/samples/index.html",target:"_blank",rel:"noopener noreferrer"},"GoJS Samples")))),s.a.createElement(u.a,null))}}]),m}(m.Component)},36:function(e,t,n){"use strict";var a=n(11),r=n(12),l=n(16),o=n(13),c=n(14),i=n(0),m=n.n(i),s=n(5),u=n(39),d=(n(37),function(e){Object(c.a)(n,e);var t=Object(o.a)(n);function n(e){var r;return Object(a.a)(this,n),(r=t.call(this,e)).bindHandleScroll=function(e){var t=!!e.srcElement&&e.srcElement.documentElement.scrollTop||window.pageYOffset||(e.srcElement?e.srcElement.body.scrollTop:0);r.setState({scrollTop:t})},r.scrollToAnchor=function(e){if(e){var t=document.getElementById(e);t&&t.scrollIntoView({block:"start",behavior:"smooth"})}},r.state={articleTree:[],scrollTop:null},r.getArticleTree=r.getArticleTree.bind(Object(l.a)(r)),r}return Object(r.a)(n,[{key:"getArticleTree",value:function(){for(var e=document.getElementsByClassName("article-content")[0].children,t=[],n=0;n<e.length-1;n++){var a=e[n].nodeName;"H2"!==a&&"H3"!==a||(e[n].id=e[n].innerText,t.push({name:e[n].innerText,tag:e[n].nodeName}))}this.setState({articleTree:t})}},{key:"setTitle",value:function(){for(var e=this.props.location.pathname.split("/").filter((function(e){return e})),t=[],n=0;n<u.a.length;n++)e[0]===u.a[n].name&&(t=u.a[n].section[e[1]]);document.getElementsByTagName("h1")[0]&&(document.getElementsByTagName("h1")[0].innerHTML=t)}},{key:"componentDidMount",value:function(){this.getArticleTree(),this.setTitle();var e=document.getElementById("header"),t=window.scrollY,n=document.getElementsByClassName("directory-list")[0],a=n.offsetTop;window.addEventListener("scroll",this.bindHandleScroll),window.onscroll=function(){for(var r=document.getElementsByClassName("page-footer")[0],l=0;r;)l+=r.offsetTop,r=r.offsetParent;var o=document.body.scrollTop||document.documentElement.scrollTop;if((o+=a+n.offsetHeight)>l+e.offsetHeight)n.style="position:fixed;top:".concat(a-o+l,"px;transition:none");else{var c=window.scrollY;c>e.offsetHeight&&(t<c&&(e.className="ant-layout-header header header-affixed",n.className="directory-list directory-affixed",t=c),t>c&&(e.className="ant-layout-header header header-visible",n.className="directory-list",t=c)),n.style=""}}}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.bindHandleScroll)}},{key:"render",value:function(){var e=this,t=this.state,n=t.articleTree,a=t.scrollTop,r=n.length;if(document.getElementById("tree-num-0")&&r>0){for(var l=[],o=0;o<r;o++){var c=document.getElementById(n[o].name);l.push(c.offsetTop)}for(var i=l.findIndex((function(e){return e>a}))-1,s=0;s<r;s++)document.getElementById("tree-num-".concat(s)).className=s===i?"tree-num directory-item-active":"tree-num";-2===i&&(document.getElementById("tree-num-".concat(r-1)).className="tree-num directory-item-active")}return m.a.createElement("div",{className:"directory"},m.a.createElement("ul",{className:"directory-list"},n.map((function(t,n){return m.a.createElement("li",{key:n,id:"tree-num-".concat(n),className:"tree-num",title:t.name,style:{paddingLeft:"H2"===t.tag?10:22},onClick:function(){e.scrollToAnchor("".concat(t.name))}},t.name)}))))}}]),n}(i.Component));t.a=Object(s.f)(d)},37:function(e,t,n){}}]);
//# sourceMappingURL=53.64920a7d.chunk.js.map