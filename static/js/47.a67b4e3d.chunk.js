(this.webpackJsonpblog=this.webpackJsonpblog||[]).push([[47],{303:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return m}));var a=n(11),r=n(12),l=n(13),o=n(14),c=n(0),i=n.n(c),s=n(36),m=function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return i.a.createElement("div",{className:"page-content"},i.a.createElement("div",{className:"article"},i.a.createElement("div",{className:"article-title"},i.a.createElement("h1",null,"\u7b80\u4ecb")),i.a.createElement("div",{className:"article-content"},i.a.createElement("h2",null,"\u5199\u5728\u524d\u9762"),i.a.createElement("p",{className:"indent-2"},"FreeCodeCamp \u662f Github \u4e0a star \u6700\u591a\u7684\u9879\u76ee,\u514d\u8d39\u7f16\u7801\u5b66\u4e60\u793e\u533a\u3002\u5b98\u65b9\u5730\u5740: ",i.a.createElement("a",{href:"https://www.freecodecamp.org",target:"_blank",rel:"noopener noreferrer"},"https://www.freecodecamp.org")),i.a.createElement("p",{className:"indent-2"},"\u672c\u6587\u6863\u4e3b\u8981\u662f\u8bb0\u5f55\u5b66\u5230\u7684\u5185\u5bb9\u3002"),i.a.createElement("h2",null,"\u6848\u4f8b"),i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement("a",{href:"https://www.freecodecamp.org/learn/responsive-web-design/applied-visual-design/create-a-graphic-using-css",target:"_blank",rel:"noopener noreferrer"},"\u6708\u7259\u5f62\u72b6")),i.a.createElement("li",null,i.a.createElement("a",{href:"https://www.freecodecamp.org/learn/responsive-web-design/applied-visual-design/create-a-more-complex-shape-using-css-and-html",target:"_blank",rel:"noopener noreferrer"},"\u5fc3\u5f62")),i.a.createElement("li",null,i.a.createElement("a",{href:"https://www.freecodecamp.org/learn/responsive-web-design/applied-visual-design/make-a-css-heartbeat-using-an-infinite-animation-count",target:"_blank",rel:"noopener noreferrer"},"\u5fc3\u8df3"))))),i.a.createElement(s.a,null))}}]),n}(c.Component)},36:function(e,t,n){"use strict";var a=n(11),r=n(12),l=n(16),o=n(13),c=n(14),i=n(0),s=n.n(i),m=n(5),d=n(39),u=(n(37),function(e){Object(c.a)(n,e);var t=Object(o.a)(n);function n(e){var r;return Object(a.a)(this,n),(r=t.call(this,e)).bindHandleScroll=function(e){var t=!!e.srcElement&&e.srcElement.documentElement.scrollTop||window.pageYOffset||(e.srcElement?e.srcElement.body.scrollTop:0);r.setState({scrollTop:t})},r.scrollToAnchor=function(e){if(e){var t=document.getElementById(e);t&&t.scrollIntoView({block:"start",behavior:"smooth"})}},r.state={articleTree:[],scrollTop:null},r.getArticleTree=r.getArticleTree.bind(Object(l.a)(r)),r}return Object(r.a)(n,[{key:"getArticleTree",value:function(){for(var e=document.getElementsByClassName("article-content")[0].children,t=[],n=0;n<e.length-1;n++){var a=e[n].nodeName;"H2"!==a&&"H3"!==a||(e[n].id=e[n].innerText,t.push({name:e[n].innerText,tag:e[n].nodeName}))}this.setState({articleTree:t})}},{key:"setTitle",value:function(){for(var e=this.props.location.pathname.split("/").filter((function(e){return e})),t=[],n=0;n<d.a.length;n++)e[0]===d.a[n].name&&(t=d.a[n].section[e[1]]);document.getElementsByTagName("h1")[0]&&(document.getElementsByTagName("h1")[0].innerHTML=t)}},{key:"componentDidMount",value:function(){this.getArticleTree(),this.setTitle();var e=document.getElementById("header"),t=window.scrollY,n=document.getElementsByClassName("directory-list")[0],a=n.offsetTop;window.addEventListener("scroll",this.bindHandleScroll),window.onscroll=function(){for(var r=document.getElementsByClassName("page-footer")[0],l=0;r;)l+=r.offsetTop,r=r.offsetParent;var o=document.body.scrollTop||document.documentElement.scrollTop;if((o+=a+n.offsetHeight)>l+e.offsetHeight)n.style="position:fixed;top:".concat(a-o+l,"px;transition:none");else{var c=window.scrollY;c>e.offsetHeight&&(t<c&&(e.className="ant-layout-header header header-affixed",n.className="directory-list directory-affixed",t=c),t>c&&(e.className="ant-layout-header header header-visible",n.className="directory-list",t=c)),n.style=""}}}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.bindHandleScroll)}},{key:"render",value:function(){var e=this,t=this.state,n=t.articleTree,a=t.scrollTop,r=n.length;if(document.getElementById("tree-num-0")&&r>0){for(var l=[],o=0;o<r;o++){var c=document.getElementById(n[o].name);l.push(c.offsetTop)}for(var i=l.findIndex((function(e){return e>a}))-1,m=0;m<r;m++)document.getElementById("tree-num-".concat(m)).className=m===i?"tree-num directory-item-active":"tree-num";-2===i&&(document.getElementById("tree-num-".concat(r-1)).className="tree-num directory-item-active")}return s.a.createElement("div",{className:"directory"},s.a.createElement("ul",{className:"directory-list"},n.map((function(t,n){return s.a.createElement("li",{key:n,id:"tree-num-".concat(n),className:"tree-num",title:t.name,style:{paddingLeft:"H2"===t.tag?10:22},onClick:function(){e.scrollToAnchor("".concat(t.name))}},t.name)}))))}}]),n}(i.Component));t.a=Object(m.f)(u)},37:function(e,t,n){}}]);
//# sourceMappingURL=47.a67b4e3d.chunk.js.map