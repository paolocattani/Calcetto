(this.webpackJsonpcalcetto=this.webpackJsonpcalcetto||[]).push([[10],{1313:function(e,t,n){"use strict";var a=n(11),r=n(5),c=n(14),o=n.n(c),l=n(0),s=n.n(l),i=n(32),u=n(16),d=Object(i.a)("input-group-append"),b=Object(i.a)("input-group-prepend"),j=Object(i.a)("input-group-text",{Component:"span"}),p=s.a.forwardRef((function(e,t){var n=e.bsPrefix,c=e.size,l=e.className,i=e.as,d=void 0===i?"div":i,b=Object(a.a)(e,["bsPrefix","size","className","as"]);return n=Object(u.a)(n,"input-group"),s.a.createElement(d,Object(r.a)({ref:t},b,{className:o()(l,n,c&&n+"-"+c)}))}));p.displayName="InputGroup";var O=Object(r.a)({},p,{Text:j,Radio:function(e){return s.a.createElement(j,null,s.a.createElement("input",Object(r.a)({type:"radio"},e)))},Checkbox:function(e){return s.a.createElement(j,null,s.a.createElement("input",Object(r.a)({type:"checkbox"},e)))},Append:d,Prepend:b});t.a=O},1330:function(e,t,n){"use strict";n.r(t);var a=n(15),r=n(8),c=n.n(r),o=n(76),l=n(307),s=n(2),i=n(0),u=n.n(i),d=n(24),b=n(40),j=n(103),p=n(7),O=n(523),f=n.n(O),m=n(65),h=n(1313),x=n(329),v=n(111),g=n(49),y=n(75),_=function(e){var t,n,a,r=e.onClick,c=e.name,o=e.isWinner,l=e.span,i=e.rowIndex,u=e.colIndex,d=e.pair,b=e.buttonDisabled,p=e.isLast,O=e.renderCustomComponent,m=Object(j.a)(y.a.isAdmin);return a=p?Object(s.jsx)(g.v,{size:"lg",color:"gold"}):o?Object(s.jsx)(g.d,{size:"lg",color:"green"}):Object(s.jsx)(g.a,{size:"1x",color:"red"}),Object(s.jsx)("td",{rowSpan:l,className:i%2===0?[f.a.cell,f.a.borderBottom].join(" "):f.a.cell,children:Object(s.jsxs)(h.a,{className:f.a.container,children:[Object(s.jsx)(h.a.Prepend,{className:f.a.prepend,children:Object(s.jsx)(h.a.Text,{children:i})}),m&&O?O(i,u,p,d):Object(s.jsx)(x.a,{placeholder:"Username"+u,value:d?"".concat(null===(t=d.player1)||void 0===t?void 0:t.name," - ").concat(null===(n=d.player2)||void 0===n?void 0:n.name):c,"aria-label":"Username","aria-describedby":"Username",readOnly:u>1||!m,size:"lg"}),m?Object(s.jsx)(h.a.Append,{children:Object(s.jsx)(v.a,{disabled:!m||b,className:f.a.append,onClick:function(e){return r(e,i,u,!o)},children:a})}):null]})})},C=n(154),w=n(381),N=n(436),I=n(50),S=u.a.forwardRef((function(e,t){var n=e.getOptionLabel,a=e.styles,r=e.rowIndex,c=e.options,o=e.onChange,u=e.defaultValue,d=e.tournamentId,b=Object(i.useState)(),j=Object(l.a)(b,2),p=j[0],O=j[1];return Object(s.jsx)(w.a,{defaultValue:u,components:N.f,styles:a,options:c,onChange:function(e,t){var n=e||Object(I.getEmptyPair)("-",d);O(n),o&&o(n,r,t)},getOptionLabel:n,value:p,placeholder:"Cerca...",isSearchable:!0,isClearable:!0})})),k=function(e){var t=e.onClick,n=e.elements,a=e.pairsSelect,r=e.rowNumber,c=void 0===r?64:r,o=e.onSelectPair,l=Object(j.a)(y.f.getTournament),i=Object(C.b)(2,c)+1,u=function(e,t,n,a,r,c,o){for(var l=[],i=new Array(a).fill(0),u=function(e){for(var t=[NaN,Object(m.c)(2,e)+1],n=1,a=1;a<=e;a++)if(!t[a]){t[a]=n;for(var r=Math.pow(2,n),c=1;a+r*c<e+1;c++)t[a+r*c]=n;n++}return t}(n),d=function(t,n,a,r){var l={container:function(e){return Object(p.a)(Object(p.a)({},e),{},{flex:"1 1 auto"})},option:function(e){return Object(p.a)(Object(p.a)({},e),{},{zIndex:6})},menuList:function(e){return Object(p.a)(Object(p.a)({},e),{},{flex:"1 1 auto",zIndex:5,height:"auto"})}},i=function(e){var t,n;return e.id?"".concat(e.placement).concat(e.stage1Name," : ").concat(e.alias?e.alias:"".concat(null===(t=e.player1)||void 0===t?void 0:t.name," - ").concat(null===(n=e.player2)||void 0===n?void 0:n.name," ")):"-"};return console.log("Render stage2 select :",t,n,a,r),Object(s.jsx)(S,{tournamentId:e,styles:l,defaultValue:r,options:c,rowIndex:t,onChange:o,getOptionLabel:i})},b=1;b<=n;b++){for(var j=[],O=0;O<u[b];O++){i[O]+=1;var h=t[O]?t[O][i[O]-1]:{name:"",isWinner:!1,matchId:0,cellRowIndex:0,cellColIndex:0,parentId:0};j.push(Object(s.jsx)(_,Object(p.a)({renderCustomComponent:0===O?d:void 0,span:Math.pow(2,O),rowIndex:i[O],colIndex:O+1,onClick:r,buttonDisabled:L(i[O],O,t),isLast:1===t[O].length},h),"cell : ".concat(O,"-").concat(i[O]-1)))}l.push(Object(s.jsx)("tr",{className:f.a.row,children:j},"row : ".concat(b)))}return l}(l.id,n,c,i,t,a,o),d=function(e){for(var t=[],n=1;n<=e;n++)t.push(Object(s.jsx)("td",{className:f.a.headerCell,style:{width:"".concat(100/e,"%")},children:Object(s.jsx)("strong",{children:"Stage-".concat(n)})},"header ".concat(n)));return t}(i);return Object(s.jsxs)("table",{className:f.a.table,children:[Object(s.jsx)("thead",{children:Object(s.jsx)("tr",{children:d})}),Object(s.jsx)("tbody",{className:f.a.body,children:u})]})};var L=function(e,t,n){return n[t]&&1===n[t].length||(e%2!==0?!n[t][e-1].pair||n[t][e]&&!n[t][e].pair:!n[t][e-1].pair||n[t][e-2]&&!n[t][e-2].pair)},B=n(152),z=n(202),P=n(341),E=n.n(P),R=n(10),A=n(91),T=n(362),q=n(112),U=n(90);t.default=function(){var e=Object(d.g)(),t=Object(b.d)(),n=Object(j.a)(y.e.getCells),r=Object(j.a)(y.e.getCount),u=Object(j.a)(y.e.isLoading),p=Object(j.a)(y.f.getTournament),O=Object(i.useState)(),f=Object(l.a)(O,2),m=f[0],h=f[1];Object(i.useEffect)((function(){Object(o.a)(c.a.mark((function e(){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(R.e.setLoading(!0)),e.next=3,Object(q.b)({tournamentId:p.id});case 3:n=e.sent,U.b.includes(n.code)&&h(n.pairs),t(R.e.setLoading(!1));case 6:case"end":return e.stop()}}),e)})))()}),[p.id]);return n&&m&&r?Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(B.a,{className:E.a.toolsBarContainer,children:Object(s.jsx)(z.a,{className:E.a.toolsBarRow,children:Object(s.jsx)(B.a,{children:Object(s.jsxs)(v.a,{variant:"secondary",className:"float-left",onClick:function(){e.push("/stage1")},children:[Object(s.jsx)(g.j,{})," Indietro"]})})})}),Object(s.jsx)(T.a,{}),Object(s.jsx)(k,{pairsSelect:m,onClick:function(e,r,c,o){var l=Object(a.a)(n),s=null,i=null,u=null;r%2!==0?(s=l[c-1][r-1],i=l[c-1][r]):(s=l[c-1][r-1],i=l[c-1][r-2]),u=l[c][s.matchId-1],console.log(" onClick : ",s,i,u),s.isWinner=o,i.isWinner=!o,u&&(u.pair=o?s.pair:i.pair),t(R.e.updateCell.request({cells:[s,i,u]})),t(R.e.setCells(l))},rowNumber:r,elements:n,onSelectPair:function(e,r,c){if(console.log(" onSelectPair : ",e,r),m){var o=Object(a.a)(n),l=e,s=o[0][r-1].pair,i=Object(a.a)(m);l&&l.id&&(i=i.filter((function(e){return e.id!==l.id}))),s&&s.id&&(i=[].concat(Object(a.a)(i),[s])),h(i),o[0][r-1].pair=l,console.log(" onSelectPair : ",o[0][r-1]),t(R.e.setCells(o)),t(R.e.updateCell.request({cells:[o[0][r-1]]}))}}})]}):Object(s.jsx)(A.LoadingModal,{show:u})}},307:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(148);function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],a=!0,r=!1,c=void 0;try{for(var o,l=e[Symbol.iterator]();!(a=(o=l.next()).done)&&(n.push(o.value),!t||n.length!==t);a=!0);}catch(s){r=!0,c=s}finally{try{a||null==l.return||l.return()}finally{if(r)throw c}}return n}}(e,t)||Object(a.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},341:function(e,t,n){e.exports={functionsList:"common_functionsList__3B3UB",toolsBarContainer:"common_toolsBarContainer__1nanA",toolsBarRow:"common_toolsBarRow__r8q12"}},362:function(e,t,n){"use strict";var a=n(2),r=(n(0),n(75)),c=n(103),o=n(202),l=n(152),s=n(300),i=n(104),u=n(304);t.a=function(){var e=Object(c.a)(r.f.getTournament),t=Object(u.a)(["tournament"]).t;return Object(a.jsx)(o.a,{children:Object(a.jsx)(l.a,{children:Object(a.jsx)("h2",{className:"float-left",children:Object(a.jsxs)(s.a,{variant:"info",children:[Object(a.jsxs)("span",{children:[t("tournament:".concat(e.public?"public":"private","_tournament"))," "]}),Object(a.jsxs)("strong",{children:['"',e.name.toUpperCase(),'"']}),Object(a.jsx)("span",{children:Object(a.jsxs)("i",{children:[" - ".concat(Object(i.a)(e.date)," "),Object(a.jsxs)("small",{children:[" @ ",t("tournament:progress.".concat(e.progress))]}),null]})})]})})})})}},523:function(e,t,n){e.exports={table:"style_table__2Kzbq",cell:"style_cell__1Tgmm",borderBottom:"style_borderBottom__2eMt1",headerCell:"style_headerCell__2Jwbq",container:"style_container__3mFJG",row:"style_row__3YvC9",prepend:"style_prepend__1aYFO",append:"style_append__1Z8QN",center:"style_center__3xWH5"}}}]);
//# sourceMappingURL=10.3f6556e2.chunk.js.map