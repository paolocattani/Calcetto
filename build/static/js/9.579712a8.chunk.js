(this.webpackJsonpcalcetto=this.webpackJsonpcalcetto||[]).push([[9],{1271:function(e,t,a){"use strict";var r=a(2),n=a(6),o=a(11),c=a.n(o),l=a(0),i=a.n(l),s=a(103),u=function(){},p=i.a.forwardRef((function(e,t){var a=e.children,o=e.name,p=e.className,d=e.checked,m=e.type,f=e.onChange,g=e.value,b=e.disabled,h=e.inputRef,y=Object(n.a)(e,["children","name","className","checked","type","onChange","value","disabled","inputRef"]),v=Object(l.useState)(!1),O=v[0],w=v[1],j=Object(l.useCallback)((function(e){"INPUT"===e.target.tagName&&w(!0)}),[]),E=Object(l.useCallback)((function(e){"INPUT"===e.target.tagName&&w(!1)}),[]);return i.a.createElement(s.a,Object(r.a)({},y,{ref:t,className:c()(p,O&&"focus",b&&"disabled"),type:void 0,active:!!d,as:"label"}),i.a.createElement("input",{name:o,type:m,value:g,ref:h,autoComplete:"off",checked:!!d,disabled:!!b,onFocus:j,onBlur:E,onChange:f||u}),a)}));p.displayName="ToggleButton",t.a=p},1272:function(e,t,a){},1273:function(e,t,a){"use strict";var r=a(6),n=a(2),o=a(11),c=a.n(o),l=a(0),i=a.n(l),s=a(33),u=a(13),p=Object(s.a)("input-group-append"),d=Object(s.a)("input-group-prepend"),m=Object(s.a)("input-group-text",{Component:"span"}),f=i.a.forwardRef((function(e,t){var a=e.bsPrefix,o=e.size,l=e.className,s=e.as,p=void 0===s?"div":s,d=Object(r.a)(e,["bsPrefix","size","className","as"]);return a=Object(u.a)(a,"input-group"),i.a.createElement(p,Object(n.a)({ref:t},d,{className:c()(l,a,o&&a+"-"+o)}))}));f.displayName="InputGroup";var g=Object(n.a)({},f,{Text:m,Radio:function(e){return i.a.createElement(m,null,i.a.createElement("input",Object(n.a)({type:"radio"},e)))},Checkbox:function(e){return i.a.createElement(m,null,i.a.createElement("input",Object(n.a)({type:"checkbox"},e)))},Append:p,Prepend:d});t.a=g},1285:function(e,t,a){"use strict";a.r(t);var r=a(10),n=a(14),o=a(3),c=a.n(o),l=a(19),i=a(294),s=a(0),u=a.n(s),p=a(1273),d=a(315),m=a(103),f=a(187),g=a(143),b=a(399),h=a.n(b),y=a(23),v=a(38),O=a(21),w=a(63),j=a(291),E=function(e){var t=e.addRow,a=e.optionsLength,r=e.isEditable,n=Object(j.a)(["common","pair"]).t,o=a-1,c=o<8?8-o:0;return a?o>=8?u.a.createElement(u.a.Fragment,null,u.a.createElement("p",null,"".concat(n("pair:missing.1"),"...")),u.a.createElement(m.a,{variant:"success",onClick:t,disabled:!r},n("pair:add.one"))):u.a.createElement(u.a.Fragment,null,u.a.createElement("p",null,n("pair:missing.2",{current:o,min:8})),u.a.createElement("p",null,"".concat(1===c?n("pair:missing.3"):n("pair:missing.4",{diff:c}),"...")),u.a.createElement(w.b,{to:"/player"},u.a.createElement(m.a,{variant:"success"},n("common:root.player")))):null},x=a(78),k=a(52),C=a(363),S=a.n(C),N=a(366),P=u.a.forwardRef((function(e,t){var a=e.styles,r=e.row,n=e.columnIndex,o=(e.onUpdate,e.onSelect),c=e.options,l=Object(s.useState)(),p=Object(i.a)(l,2),d=p[0],m=p[1];return u.a.createElement(N.a,{styles:a,options:c,onChange:function(e,t){m(e),o(e,r.id,n)},getOptionLabel:function(e){return e.alias},getOptionValue:function(e){var t;return null===(t=e.id)||void 0===t?void 0:t.toString(10)},value:d,placeholder:"Cerca...",isSearchable:!0,isClearable:!0})}));var T={option:function(e,t){return Object(r.a)(Object(r.a)({},e),{},{backgroundColor:"white",color:"black","&:hover":{backgroundColor:"#64bd9c",color:"white"}})},input:function(e){return Object(r.a)(Object(r.a)({},e),{},{backgroundColor:"#64bd9c"})},control:function(e){return Object(r.a)(Object(r.a)({},e),{},{height:"3vmin",marginBottom:"auto"})},singleValue:function(e){return Object(r.a)({},e)},valueContainer:function(e){return Object(r.a)(Object(r.a)({},e),{},{height:"100%",fontSize:"larger"})}},I=a(286),F=a(1271),R=function(e,t,a,r,n,o,c){return u.a.createElement(P,Object.assign({},e,{id:n,row:a,rowIndex:r,columnIndex:n,value:t,onSelect:o,options:c,styles:T}))},B={align:function(){return"center"},headerStyle:function(e,t){return{width:"7,5%"}},editor:{type:C.Type.CHECKBOX,value:"".concat("Si",":").concat("No")},formatter:function(e,t,a,r){return u.a.createElement(I.a,{toggle:!0,className:"mb-2"},u.a.createElement(F.a,{variant:e?"success":"danger",checked:e,value:"1",type:"checkbox"},e?"Pagato":"Non Pagato"))}},L=function(e,t,a){return[{dataField:"id",text:"ID",editable:!1,hidden:!0,align:function(){return"center"}},{dataField:"rowNumber",text:"ID",editable:!1,align:function(){return"center"}},{dataField:"player1.alias",text:a.player1,align:function(){return"center"},editorRenderer:function(a,r,n,o,c,l){return R(a,r,n,c,l,e,t)},headerStyle:function(e,t){return{width:"20%"}}},{dataField:"player2.alias",text:a.player2,align:function(){return"center"},editorRenderer:function(a,r,n,o,c,l){return R(a,r,n,c,l,e,t)},headerStyle:function(e,t){return{width:"20%"}}},{dataField:"alias",text:a.alias,headerStyle:function(e,t){return{width:"25%"}}},{dataField:"stage1Name",text:a.stage1,align:function(){return"center"},headerStyle:function(e,t){return{width:"10%"}},editor:{type:C.Type.SELECT,options:"abcdefghijklmnopqrstuvwxyz".toUpperCase().split("").map((function(e){return{value:e,label:e}}))}},Object(r.a)({dataField:"paid1",text:"Pagato 1"},B),Object(r.a)({dataField:"paid2",text:"Pagato 2"},B)]},_=(a(1272),a(327)),M=a.n(_),q=a(65),U=a(73),A=a(144),z=a(12),D=a(347),J=a(60),H=a(64),K=a(31),V={message:"",onClick:function(){return console.log("")},show:!1,title:""};t.default=Object(y.i)((function(){var e=Object(y.g)(),t=Object(v.c)(),a=Object(j.a)(["common","pair"]).t,o=Object(v.d)(U.a.isAdmin),b=Object(v.d)(A.a.getTournament),w=Object(s.useState)({state:!1,message:a("common:loading")}),C=Object(i.a)(w,2),N=C[0],P=C[1],T=Object(s.useState)(V),I=Object(i.a)(T,2),F=I[0],R=I[1],B=Object(s.useState)({rows:[],players:[]}),_=Object(i.a)(B,2),G=_[0],X=_[1],Y=Object(s.useState)([]),Q=Object(i.a)(Y,2),W=Q[0],Z=Q[1],$=Object(s.useState)(0),ee=Object(i.a)($,2),te=ee[0],ae=ee[1],re=Object(s.useState)(0),ne=Object(i.a)(re,2),oe=ne[0],ce=ne[1];function le(e){P({state:!1,message:e}),O.b.error(e,{autoClose:1e4})}function ie(e){P({state:!1,message:e}),O.b.success(e)}function se(e){return ue.apply(this,arguments)}function ue(){return(ue=Object(l.a)(c.a.mark((function e(t){var o,l;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,P({state:!0,message:a("common:loading")}),(o=Object(H.d)()).tournamentId=b.id||0,e.next=6,Object(H.e)({pair:o});case 6:l=e.sent,o.id=l.pair.id,o.rowNumber=t||G.rows.length+1,X((function(e){return{rows:[o].concat(Object(n.a)(e.rows)).map((function(e,t){return Object(r.a)(Object(r.a)({},e),{},{rowNumber:t+1})})),players:e.players}})),ie(a("pair:success.add")),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),le(a("pair:error.19"));case 16:case"end":return e.stop()}}),e,null,[[0,13]])})))).apply(this,arguments)}function pe(){return(pe=Object(l.a)(c.a.mark((function e(){var t,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=G.rows.length+1,a=0;case 2:if(!(a<oe)){e.next=9;break}return e.next=5,se(t);case 5:t++;case 6:a++,e.next=2;break;case 9:ce(0);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function de(){return(de=Object(l.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,P({state:!0,message:a("common:loading")}),t=[],W.forEach((function(e){e.player1&&e.player1.id&&t.push(e.player1),e.player2&&e.player2.id&&t.push(e.player2)})),e.next=6,Object(H.a)({pairsList:W});case 6:X((function(e){return{rows:e.rows.filter((function(e){return!W.find((function(t){return t.id===e.id}))})),players:t?[].concat(t,Object(n.a)(e.players)).sort((function(e,t){return e.alias.localeCompare(t.alias)})):e.players}})),ie(a("pair:success.".concat(W.length>1?"deleteMulti":"deleteOne"))),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),le(a("pair:error.18"));case 13:Z([]);case 14:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}function me(e,t){e&&e.id?t.id?X((function(a){return{rows:a.rows,players:[].concat(Object(n.a)(a.players.filter((function(e){return e.id!==t.id}))),[e]).sort((function(e,t){return e.alias.localeCompare(t.alias)}))}})):X((function(t){return{rows:t.rows,players:[].concat(Object(n.a)(t.players),[e]).sort((function(e,t){return e.alias.localeCompare(t.alias)}))}})):t.id&&X((function(e){return{rows:e.rows,players:e.players.filter((function(e){return e.id!==t.id}))}}))}Object(s.useEffect)((function(){b&&Object(l.a)(c.a.mark((function e(){var t,a,r,n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(H.b)({tId:b.id});case 2:return t=e.sent,a=t.pairsList,e.next=6,Object(q.b)({addEmpty:!0,tId:b.id});case 6:r=e.sent,n=r.playersList,X({rows:a,players:n});case 9:case"end":return e.stop()}}),e)})))()}),[b]);var fe=function(){var e=Object(l.a)(c.a.mark((function e(t,r,n){var o;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all(G.rows.map(function(){var e=Object(l.a)(c.a.mark((function e(o){var l,i;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o.id!==r){e.next=12;break}if(l=o,1===n?t.id&&l.player2&&l.player2.id===t.id?(l.player1=Object(q.c)(),le(a("pair:error.17"))):(me(l.player1,t),l.player1=t):t.id&&l.player1&&l.player1.id===t.id?(l.player2=Object(q.c)(),le(a("pair:error.17"))):(me(l.player2,t),l.player2=t),!(!l.alias&&l.player1&&l.player1.id&&l.player2&&l.player2.id)){e.next=8;break}return e.next=6,Object(H.c)({player1Id:l.player1.id,player2Id:l.player2.id});case 6:i=e.sent,l.alias=i.code===K.a.OK&&i.alias?i.alias:"";case 8:return Object(H.g)({pair:l}),e.abrupt("return",l);case 12:return e.abrupt("return",o);case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 2:o=e.sent,X((function(e){return{rows:o,players:e.players}}));case 4:case"end":return e.stop()}}),e)})));return function(t,a,r){return e.apply(this,arguments)}}(),ge=function(){var r=Object(l.a)(c.a.mark((function r(){var n,l,i,s,u;return c.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(b.id||(le("".concat(a("pair:error.16"),"...")),setTimeout((function(){return e.push("/")}),5e3)),!(G.rows.length<4)){r.next=4;break}return le(a("pair:error.15")),r.abrupt("return");case 4:if(0===(n=G.rows.filter((function(e){return!e.stage1Name||""===e.stage1Name})).map((function(e){return e.rowNumber}))).length){r.next=8;break}return le(a("pair:error.".concat(1===n.length?"13":"14"),{missingStage1Name:n})),r.abrupt("return");case 8:if(0===(l=G.rows.filter((function(e){return!e.player1||!e.player1.id||!e.player2||!e.player2.id})).map((function(e){return e.rowNumber}))).length){r.next=12;break}return le(a("pair:error.".concat(1===l.length?"11":"12"),{missingPairs:l})),r.abrupt("return");case 12:for(u in 3,i=[],s=G.rows.reduce((function(e,t){return t.stage1Name in e?e[t.stage1Name]++:e[t.stage1Name]=1,e}),{}))s[u]<=3&&i.push(u);if(!(i.length>0)){r.next=19;break}return le(a("pair:error.".concat(1===i.length?"9":"10"),{invalidStage:i,min:4})),r.abrupt("return");case 19:o&&b.progress<J.TournamentProgress.Stage1&&(b.progress=J.TournamentProgress.Stage1,t(z.f.update.request({tournament:b}))),t(z.b.fetch.request({tId:b.id})),e.push("/stage1");case 22:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}();var be={mode:"checkbox",onSelect:function(e,t){return Z((function(a){var r=!!a.find((function(t){return t.id===e.id}));return t?r?a:[e].concat(Object(n.a)(a)):r?a.filter((function(t){return t.id!==e.id})):a})),!0},onSelectAll:function(e,t){return Z(e?t:[])},style:{backgroundColor:"#c8e6c9"},hideSelectColumn:!o||b.progress>J.TournamentProgress.PairsSelection},he=function(){var e=Object(l.a)(c.a.mark((function e(){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,P({state:!0,message:a("common:loading")}),e.next=4,fetch("/api/v1/stage1",{method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify({tId:b.id})});case 4:return n=e.sent,e.next=7,n.json();case 7:o&&t(z.f.update.request({tournament:Object(r.a)(Object(r.a)({},b),{},{progress:J.TournamentProgress.PairsSelection})})),ie(a("pair:success.delete")),R(V),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),le(a("pair:error.8"));case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}();function ye(){return(ye=Object(l.a)(c.a.mark((function e(){var t,r,n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(te){e.next=3;break}return le(a("pair:error.6")),e.abrupt("return");case 3:if(!(b.progress>J.TournamentProgress.PairsSelection)){e.next=6;break}return le(a("pair:error.5")),e.abrupt("return");case 6:P({state:!0,message:a("common:loading")}),t="abcdefghijklmnopqrstuvwxyz".toUpperCase().split(""),r=0,n=G.rows.map((function(e){return r===te&&(r=0),e.stage1Name=t[r],r++,Object(H.e)({pair:e}),e})),ie(a("pair:success.stage1Name")),X((function(e){return{rows:n,players:e.players}}));case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var ve,Oe=Math.floor(Math.floor((G.players.length-1)/2)-(0===G.rows.length?0:G.rows.reduce((function(e,t){var a,r;return!t.player1&&!t.player2||!(null===(a=t.player1)||void 0===a?void 0:a.id)&&!(null===(r=t.player2)||void 0===r?void 0:r.id)?e+1:t.player1&&t.player1.id&&t.player2&&t.player2.id?e:e+.5}),0))),we=W.length<=0||b.progress>J.TournamentProgress.PairsSelection,je=u.a.createElement(p.a,null,u.a.createElement(p.a.Prepend,null,u.a.createElement(p.a.Text,null,a("pair:stage1.set"))),u.a.createElement(d.a,{placeholder:G.rows.length<4?a("pair:error.3"):a("pair:error.4",{max:Math.floor(G.rows.length/4)}),type:"number",step:1,min:0,max:Math.floor(G.rows.length/4),value:0!==te?te:void 0,onChange:function(e){return ae(Number(e.currentTarget.value))},disabled:G.rows.length<4||b.progress===J.TournamentProgress.Stage1||b.progress===J.TournamentProgress.Stage2}),u.a.createElement(p.a.Append,null,u.a.createElement(m.a,{variant:"primary",onClick:function(){return ye.apply(this,arguments)},disabled:!te||te>Math.floor(G.rows.length/4)||G.rows.length<4},a("common:exec")))),Ee=u.a.createElement(p.a,null,u.a.createElement(p.a.Prepend,null,u.a.createElement(p.a.Text,null,a("pair:add.multi"))),u.a.createElement(d.a,{disabled:Oe<=0,type:"number",step:1,min:1,max:Oe,placeholder:Oe<=0?a("pair:error.1"):a("pair:error.2",{max:Oe}),onChange:function(e){return ce(Number(e.currentTarget.value))},value:oe||""}),u.a.createElement(p.a.Append,null,u.a.createElement(m.a,{variant:"primary",onClick:function(e){return ce(Oe)},disabled:oe>Oe},a("common:max")),u.a.createElement(m.a,{variant:"primary",onClick:function(){return pe.apply(this,arguments)},disabled:!oe||oe>Oe},a("common:exec")))),xe=u.a.createElement("div",{className:M.a.toolsBarContainer},u.a.createElement(f.a,{className:M.a.toolsBar},u.a.createElement(g.a,null,u.a.createElement(m.a,{variant:"secondary",className:"float-left align-middle",onClick:function(){e.push("/")}},u.a.createElement(k.f,null)," ",a("common:route.home"))),b.progress>J.TournamentProgress.PairsSelection?null:u.a.createElement(g.a,null,u.a.createElement(m.a,{variant:"success",className:"align-middle",onClick:function(){return se()},disabled:Oe<=0||!o},u.a.createElement(k.k,null)," ",a("pair:add.one"))),b.progress>J.TournamentProgress.PairsSelection?null:u.a.createElement(g.a,null,u.a.createElement(m.a,{variant:"danger",className:"align-middle",onClick:function(){return de.apply(this,arguments)},disabled:we||!o},u.a.createElement(k.q,null)," ",1===W.length?a("pair:delete.one"):a("pair:delete.multi"))),b.progress!==J.TournamentProgress.Stage1?null:u.a.createElement(g.a,null,u.a.createElement(m.a,{variant:"danger",className:"align-middle",onClick:function(){b.progress>J.TournamentProgress.Stage1?le(a("pair:error.7")):R({message:"".concat(a("pair:stage1.resetConfirm")," ?"),onClick:function(){return he()},onHide:function(){return R(V)},show:!0,title:a("pair:stage1.reset")})},disabled:!o},a("stage1:reset"))),u.a.createElement(g.a,null,u.a.createElement(m.a,{variant:"outline-warning",className:"default-color-white float-right align-middle",onClick:ge,disabled:!o},u.a.createElement("b",null,a("common:continue")," ")," ",u.a.createElement(k.l,null)))),o&&b.progress<=J.TournamentProgress.PairsSelection?u.a.createElement(u.a.Fragment,null,je,Ee):null),ke={player1:a("pair:field.player1"),player2:a("pair:field.player2"),alias:a("pair:field.alias"),stage1:a("pair:field.stage1"),paid1:a("pair:field.paid1"),paid2:a("pair:field.paid2")};return u.a.createElement("div",null,u.a.createElement(x.YesNoModal,{message:F.message,title:F.title,onClick:F.onClick,show:F.show}),u.a.createElement(x.LoadingModal,{show:N.state,message:N.message}),u.a.createElement(g.a,null,xe,u.a.createElement(f.a,null,u.a.createElement(g.a,null,G.rows&&G.players?u.a.createElement(h.a,{bootstrap4:!0,keyField:"id",data:G.rows,columns:L(fe,G.players,ke),cellEdit:(ve=o&&b.progress<J.TournamentProgress.Stage1,S()({mode:ve?"click":"none",blurToSave:!0,afterSaveCell:function(e,t,a,r){"player1.alias"!==r.dataField&&"player2.alias"!==r.dataField&&Object(l.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/v1/pair",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)});case 2:return t=e.sent,e.next=5,t.json();case 5:case"end":return e.stop()}}),e)})))()}})),selectRow:be,noDataIndication:function(){return u.a.createElement(E,{isEditable:o||!1,addRow:function(){return se()},optionsLength:G.players.length})},caption:u.a.createElement(D.a,null),headerClasses:"default-background default-color-yellow",striped:!0,hover:!0}):null))))}))},327:function(e,t,a){e.exports={functionsList:"common_functionsList__3B3UB",toolsBarContainer:"common_toolsBarContainer__1nanA",toolsBarRow:"common_toolsBarRow__r8q12"}},347:function(e,t,a){"use strict";var r=a(0),n=a.n(r),o=a(77),c=a(38),l=a(187),i=a(143),s=a(287),u=a(140),p=a(291);t.a=function(){var e=Object(c.d)(o.f.getTournament),t=Object(p.a)(["tournament"]).t;return n.a.createElement(l.a,null,n.a.createElement(i.a,null,n.a.createElement("h2",{className:"float-left"},n.a.createElement(s.a,{variant:"info"},n.a.createElement("span",null,t("tournament:tournament")," "),n.a.createElement("strong",null,'"',e.name.toUpperCase(),'"'),n.a.createElement("span",null,n.a.createElement("i",null," - ".concat(Object(u.a)(e.date)," "),n.a.createElement("small",null," @ ",t("tournament:progress.".concat(e.progress)))))))))}}}]);
//# sourceMappingURL=9.579712a8.chunk.js.map