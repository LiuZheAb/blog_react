(this.webpackJsonpblog=this.webpackJsonpblog||[]).push([[100],{72:function(e,n,i){!function(e){"use strict";e.defineMode("diff",(function(){var e={"+":"positive","-":"negative","@":"meta"};return{token:function(n){var i=n.string.search(/[\t ]+?$/);if(!n.sol()||0===i)return n.skipToEnd(),("error "+(e[n.string.charAt(0)]||"")).replace(/ $/,"");var t=e[n.peek()]||n.skipToEnd();return-1===i?n.skipToEnd():n.pos=i,t}}})),e.defineMIME("text/x-diff","diff")}(i(35))}}]);
//# sourceMappingURL=100.906668d9.chunk.js.map