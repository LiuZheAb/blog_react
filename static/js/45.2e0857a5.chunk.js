(this.webpackJsonpblog=this.webpackJsonpblog||[]).push([[45],{422:function(e,t,a){},479:function(e,t,a){"use strict";a.r(t);var n=a(8),l=a(9),c=a(10),r=a(11),i=a(0),o=a.n(i),s=a(16),m=a(5),u=a(18),d=a(190),h=(a(422),Object(i.lazy)((function(){return Promise.all([a.e(5),a.e(6)]).then(a.bind(null,283))}))),E=function(e){Object(r.a)(a,e);var t=Object(c.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"componentDidMount",value:function(){document.title=d.a.title,window.addEventListener("hashchange",(function(){document.getElementsByClassName("header")[0].className="ant-layout-header header header-visible"}))}},{key:"render",value:function(){var e=this;return o.a.createElement(s.a,null,o.a.createElement(i.Suspense,{fallback:o.a.createElement(u.a,null)},o.a.createElement(m.c,null,o.a.createElement(m.a,{exact:!0,path:d.a.baseHref,render:function(){return document.title=d.a.title,o.a.createElement("div",{className:"catalog"},o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"title"},o.a.createElement("h1",null,d.a.title)),o.a.createElement("div",{className:"contents"},"\u5373\u5c06\u4e0a\u7ebf\uff0c\u656c\u8bf7\u671f\u5f85",Object.keys(d.a.section).map((function(t,a){var n=d.a.catalog.slice(d.a.section[t][0],d.a.section[t][1]+1);return o.a.createElement("ul",{key:a},n.length>1?o.a.createElement(o.a.Fragment,null,o.a.createElement("li",{className:"catalog-item-1"},t),n.map((function(e,t){return o.a.createElement("li",{key:t,className:"catalog-item-2"},o.a.createElement(s.b,{to:e.href},e.title))}))):o.a.createElement("li",{className:"catalog-item-1 catalog-item-nochild",onClick:function(){e.props.history.push(n[0].href)}},n[0].title))})))))}})),o.a.createElement(m.a,{path:"/gojs/:id",render:function(){return o.a.createElement(h,{dataSource:d.a})}})))}}]),a}(i.Component);t.default=Object(m.f)(E)}}]);
//# sourceMappingURL=45.2e0857a5.chunk.js.map