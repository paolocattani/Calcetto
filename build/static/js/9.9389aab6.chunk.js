(this.webpackJsonpcalcetto=this.webpackJsonpcalcetto||[]).push([[9],{295:function(e,a,t){e.exports={functionsList:"common_functionsList__3B3UB",toolsBarContainer:"common_toolsBarContainer__1nanA",toolsBarRow:"common_toolsBarRow__r8q12"}},301:function(e,a,t){"use strict";var n=t(0),l=t.n(n),r=t(73),c=t(36),o=t(183),s=t(144),i=t(284),u=t(141);a.a=function(){var e=Object(c.d)(r.f.getTournament);return l.a.createElement(o.a,null,l.a.createElement(s.a,null,l.a.createElement("h2",{className:"float-left"},l.a.createElement(i.a,{variant:"info"},l.a.createElement("span",null,"Torneo "),l.a.createElement("strong",null,'"',e.name.toUpperCase(),'"'),l.a.createElement("span",null,l.a.createElement("i",null," - ".concat(Object(u.b)(e.date)," "),l.a.createElement("small",null," @ ",Object(u.f)(e.progress))))))))}},324:function(e,a,t){e.exports={table:"style_table__2Kzbq",cell:"style_cell__1Tgmm",borderBottom:"style_borderBottom__2eMt1",headerCell:"style_headerCell__2Jwbq",container:"style_container__3mFJG",row:"style_row__3YvC9",prepend:"style_prepend__1aYFO",append:"style_append__1Z8QN",center:"style_center__3xWH5"}},385:function(e,a,t){"use strict";var n=t(7),l=t(2),r=t(11),c=t.n(r),o=t(0),s=t.n(o),i=t(32),u=t(13),m=Object(i.a)("input-group-append"),p=Object(i.a)("input-group-prepend"),d=Object(i.a)("input-group-text",{Component:"span"}),b=s.a.forwardRef((function(e,a){var t=e.bsPrefix,r=e.size,o=e.className,i=e.as,m=void 0===i?"div":i,p=Object(n.a)(e,["bsPrefix","size","className","as"]);return t=Object(u.a)(t,"input-group"),s.a.createElement(m,Object(l.a)({ref:a},p,{className:c()(o,t,r&&t+"-"+r)}))}));b.displayName="InputGroup";var f=Object(l.a)({},b,{Text:d,Radio:function(e){return s.a.createElement(d,null,s.a.createElement("input",Object(l.a)({type:"radio"},e)))},Checkbox:function(e){return s.a.createElement(d,null,s.a.createElement("input",Object(l.a)({type:"checkbox"},e)))},Append:m,Prepend:p});a.a=f},393:function(e,a,t){"use strict";t.r(a);var n=t(14),l=t(5),r=t.n(l),c=t(21),o=t(140),s=t(0),i=t.n(s),u=t(24),m=t(36),p=t(10),d=t(324),b=t.n(d),f=t(141),E=t(385),O=t(296),g=t(108),j=t(58),v=function(e){var a,t,n,l=e.onClick,r=e.name,c=e.isWinner,o=e.span,s=e.rowIndex,u=e.colIndex,m=e.pair,p=e.buttonDisabled,d=e.isLast,f=e.renderCustomComponent;return n=d?i.a.createElement(j.p,{size:"lg",color:"gold"}):c?i.a.createElement(j.c,{size:"lg",color:"green"}):i.a.createElement(j.a,{size:"1x",color:"red"}),i.a.createElement("td",{rowSpan:o,className:s%2===0?[b.a.cell,b.a.borderBottom].join(" "):b.a.cell},i.a.createElement(E.a,{className:b.a.container},i.a.createElement(E.a.Prepend,{className:b.a.prepend},i.a.createElement(E.a.Text,null,s)),f?f(s,u,d,m):i.a.createElement(O.a,{placeholder:"Username"+u,value:m?"".concat(null===(a=m.player1)||void 0===a?void 0:a.name," - ").concat(null===(t=m.player2)||void 0===t?void 0:t.name):r,"aria-label":"Username","aria-describedby":"Username",readOnly:u>1,size:"lg"}),i.a.createElement(E.a.Append,null,i.a.createElement(g.a,{disabled:p,className:b.a.append,onClick:function(e){return l(e,s,u,!c)}},n))))},_=t(304),h=t(311),C=i.a.forwardRef((function(e,a){var t=e.getOptionLabel,n=e.styles,l=e.rowIndex,r=e.options,c=e.onChange,u=e.defaultValue,m=Object(s.useState)(),p=Object(o.a)(m,2),d=p[0],b=p[1];return i.a.createElement(_.a,{defaultValue:u,components:h.z,styles:n,options:r,onChange:function(e,a){b(e),c&&c(e,l,a)},getOptionLabel:t,value:d,placeholder:"Cerca...",isSearchable:!0,isClearable:!0})})),y=function(e){var a=e.onClick,t=e.elements,n=e.pairsSelect,l=e.rowNumber,r=void 0===l?64:l,c=e.onSelectPair,o=Object(f.c)(2,r)+1,s=function(e,a,t,n,l,r){for(var c=[],o=new Array(t).fill(0),s=function(e){for(var a=[NaN,Object(f.c)(2,e)+1],t=1,n=1;n<=e;n++)if(!a[n]){a[n]=t;for(var l=Math.pow(2,t),r=1;n+l*r<e+1;r++)a[n+l*r]=t;t++}return a}(a),u=function(e,a,t,n){var c={container:function(e){return Object(p.a)(Object(p.a)({},e),{},{flex:"1 1 auto"})},option:function(e){return Object(p.a)(Object(p.a)({},e),{},{zIndex:6})},menuList:function(e){return Object(p.a)(Object(p.a)({},e),{},{flex:"1 1 auto",zIndex:5,height:"auto"})}};return console.log("Render stage2 select :",e,a,t,n),i.a.createElement(C,{styles:c,defaultValue:n,options:l,rowIndex:e,onChange:r,getOptionLabel:function(e){var a,t;return e.id?"".concat(e.placement).concat(e.stage1Name," : ").concat(e.alias?e.alias:"".concat(null===(a=e.player1)||void 0===a?void 0:a.name," - ").concat(null===(t=e.player2)||void 0===t?void 0:t.name," ")):"-"}})},m=1;m<=a;m++){for(var d=[],E=0;E<s[m];E++){o[E]+=1;var O=e[E]?e[E][o[E]-1]:{name:"",isWinner:!1,matchId:0,cellRowIndex:0,cellColIndex:0,parentId:0};d.push(i.a.createElement(v,Object.assign({renderCustomComponent:0===E?u:void 0,key:"cell : ".concat(E,"-").concat(o[E]-1),span:Math.pow(2,E),rowIndex:o[E],colIndex:E+1,onClick:n,buttonDisabled:w(o[E],E,e),isLast:1===e[E].length},O)))}c.push(i.a.createElement("tr",{key:"row : ".concat(m),className:b.a.row},d))}return c}(t,r,o,a,n,c),u=function(e){for(var a=[],t=1;t<=e;t++)a.push(i.a.createElement("td",{key:"header ".concat(t),className:b.a.headerCell,style:{width:"".concat(100/e,"%")}},i.a.createElement("strong",null,"Stage-".concat(t))));return a}(o);return i.a.createElement("table",{className:b.a.table},i.a.createElement("thead",null,i.a.createElement("tr",null,u)),i.a.createElement("tbody",{className:b.a.body},s))};var w=function(e,a,t){return 1===t[a].length||(e%2!==0?!t[a][e-1].pair||t[a][e]&&!t[a][e].pair:!t[a][e-1].pair||t[a][e-2]&&!t[a][e-2].pair)},x=t(144),N=t(183),k=t(295),I=t.n(k),L=t(73),B=t(12),z=t(74),R=t(301),S=t(103);a.default=Object(u.i)((function(){var e=Object(u.g)(),a=Object(m.c)(),t=Object(m.d)(L.e.getCells),l=Object(m.d)(L.e.getRowsNumber),p=Object(m.d)(L.e.isLoading),d=Object(m.d)(L.f.getTournament),b=Object(s.useState)(),f=Object(o.a)(b,2),E=f[0],O=f[1];Object(s.useEffect)((function(){Object(c.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a(B.e.setLoading(!0)),e.next=3,Object(S.b)(d.id);case 3:t=e.sent,O(t.pairs),a(B.e.setLoading(!1));case 6:case"end":return e.stop()}}),e)})))()}),[d.id]);return t&&E&&l?i.a.createElement(i.a.Fragment,null,i.a.createElement(x.a,{className:I.a.toolsBarContainer},i.a.createElement(N.a,{className:I.a.toolsBarRow},i.a.createElement(x.a,null,i.a.createElement(g.a,{variant:"secondary",className:"float-left",onClick:function(){e.push("/stage1")}},i.a.createElement(j.f,null)," Indietro")))),i.a.createElement(R.a,null),i.a.createElement(y,{pairsSelect:E,onClick:function(e,l,r,c){var o=Object(n.a)(t),s=null,i=null,u=null;l%2!==0?(s=o[r-1][l-1],i=o[r-1][l]):(s=o[r-1][l-1],i=o[r-1][l-2]),u=o[r][s.matchId-1],console.log(" onClick : ",s,i,u),s.isWinner=c,i.isWinner=!c,u&&(u.pair=c?s.pair:i.pair),a(B.e.updateCell.request({cell1:s,cell2:i})),a(B.e.setCells(o)),1===o[r].length&&a(B.e.updateCell.request({cell1:u,cell2:null}))},rowNumber:l,elements:t,onSelectPair:function(e,l,r){if(E){var c=Object(n.a)(t),o=e,s=c[0][l-1].pair,i=Object(n.a)(E);o&&o.id&&(i=i.filter((function(e){return e.id!==o.id}))),s&&s.id&&(i=[].concat(Object(n.a)(i),[s])),O(i),c[0][l-1].pair=o,a(B.e.setCells(c)),a(B.e.updateCell.request({cell1:c[0][l-1],cell2:null}))}}})):i.a.createElement(z.LoadingModal,{show:p})}))}}]);
//# sourceMappingURL=9.9389aab6.chunk.js.map