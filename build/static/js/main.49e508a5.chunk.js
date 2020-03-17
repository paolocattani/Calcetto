/*! For license information please see main.49e508a5.chunk.js.LICENSE.txt */
(this.webpackJsonpcalcetto=this.webpackJsonpcalcetto||[]).push([[0],{126:function(e,t,n){e.exports=n(226)},131:function(e,t,n){},137:function(e,t,n){},215:function(e,t,n){},222:function(e,t,n){},224:function(e,t,n){},225:function(e,t,n){},226:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(14),c=n.n(o),i=(n(131),n(132),n(83)),l=n(11),u=n(16),s={},d=Object(a.createContext)([s,function(){}]),p=function(){return Object(a.useContext)(d)},m=function(e){var t=Object(u.h)(),n=e.redirectPathOnAuthentication;if(e.isAuthenticated||(e.setRedirectPathOnAuthentication(t.pathname),n=e.authenticationPath),n===t.pathname||e.isAuthenticated)return a.createElement(u.b,e);return a.createElement(u.b,Object.assign({},e,{component:function(){return a.createElement(u.a,{to:{pathname:n}})},render:void 0}))},f=(n(137),function(e){var t=p(),n=Object(l.a)(t,2),a=n[0],o=n[1],c=Object(u.g)();return r.a.createElement("button",{onClick:function(){o(Object(i.a)({},a,{isAuthenticated:!0})),c.push("/")}},"Login")}),h=n(9),b=n.n(h),g=n(13),v=n(19),y=n(112),E=n(241),w=n(236),O=n(228);function j(){var e=new Date,t=String(e.getDate()).padStart(2,"0"),n=String(e.getMonth()+1).padStart(2,"0"),a=e.getFullYear();return"".concat(a,"-").concat(n,"-").concat(t)}function x(e,t){return{id:null,name:e||"",ownerId:0,progress:t||"New",public:!0,label:e||""}}var S,C,k,N,T="PairsSelection",I="Stage1",F={alignSelf:"stretch",backgroundColor:"green",marginBottom:8,marginTop:8,marginRigth:10,width:1},A=function(e){var t=e.innerProps;return r.a.createElement("span",Object.assign({style:F},t))},P={width:"50%",margin:"auto"},R=function(e){var t=Object(a.useState)(j()),n=Object(l.a)(t,2),o=n[0],c=n[1],i=Object(a.useState)([]),s=Object(l.a)(i,2),d=s[0],p=s[1],m=Object(u.g)();Object(a.useEffect)((function(){return e=p,t=c,void Object(g.a)(b.a.mark((function n(){var a,r,o,c;return b.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("/api/tournament/list",{method:"GET",headers:{"Content-Type":"application/json"}});case 2:return a=n.sent,n.next=5,a.json();case 5:r=n.sent,o=r.find((function(e){return e.name===j()})),(c=o?[o].concat(Object(v.a)(r)):r).sort(),e(c),t&&t(c[0]);case 11:case"end":return n.stop()}}),n)})))();var e,t}),[]);var f=function(){var e=Object(g.a)(b.a.mark((function e(t){var n,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,fetch("/api/tournament",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(x(o.name,T))});case 3:return n=e.sent,e.next=6,n.json();case 6:a=e.sent,m.push("/tournament/".concat(a.id));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(E.a,{style:P},r.a.createElement(E.a.Body,null,r.a.createElement(E.a.Title,null,"Scegli un torneo"),r.a.createElement(w.a,{onSubmit:f},r.a.createElement(y.a,{components:{IndicatorSeparator:A},value:o,options:d,placeholder:"Crea/Cerca un torneo",isSearchable:!0,isClearable:!0,onChange:function(e){return c(e)},onCreateOption:function(e){var t=x(e);c(t),p((function(e){return[].concat(Object(v.a)(e),[t])}))}}),r.a.createElement("br",null),r.a.createElement(O.a,{type:"submit",size:"lg",variant:"outline-warning",disabled:!o},"Continua"))))},z=n(116),D=n(117),L=n(125),G=n(118),J=n(60),B=n(124),M=n(231),H=n(115),W=n(237),_=n(57),U=n.n(_),V=n(53),q=n.n(V),K=n(119),X=n.n(K),Y=n(30),$=n.n(Y);n(215);function Q(){S(""),C(""),k(""),N("")}var Z=[{dataField:"id",text:"ID",editable:!1},{dataField:"name",text:"Nome",headerClasses:"player-table-header-element",autoSelectText:!0,headerStyle:function(e,t){return{width:"20%"}},filter:Object(V.textFilter)({placeholder:"Filtra...",getFilter:function(e){return S=e}})},{dataField:"surname",text:"Cognome",headerClasses:"player-table-header-element",autoSelectText:!0,headerStyle:function(e,t){return{width:"20%"}},filter:Object(V.textFilter)({placeholder:"Filtra...",getFilter:function(e){return C=e}})},{dataField:"alias",text:"Alias",headerClasses:"player-table-header-element",headerStyle:function(e,t){return{width:"15%"}},autoSelectText:!0,filter:Object(V.textFilter)({placeholder:"Filtra...",getFilter:function(e){return k=e}})},{dataField:"role",text:"Roulo",headerClasses:"player-table-header-element",headerStyle:function(e,t){return{width:"15%"}},filter:Object(V.selectFilter)({placeholder:"Filtra...",options:{Portiere:"Portiere",Attaccante:"Attaccante",Master:"Master"},getFilter:function(e){return N=e}}),editor:{type:Y.Type.SELECT,getOptions:function(e){return[{value:"Portiere",label:"Portiere"},{value:"Attaccante",label:"Attaccante"},{value:"Master",label:"Master"}]}}},{dataField:"email",text:"Email",headerStyle:function(e,t){return{width:"15%"}},headerClasses:"player-table-header-element",autoSelectText:!0},{dataField:"phone",headerStyle:function(e,t){return{width:"15%"}},text:"Telefono",headerClasses:"player-table-header-element",autoSelectText:!0},{dataField:"match_played",text:"Partite Giocate",hidden:!0},{dataField:"match_won",text:"Vittorie",hidden:!0},{dataField:"total_score",text:"Punteggio",hidden:!0}];function ee(e){return e?e.alias?e.alias:e.surname?"".concat(e.name," - ").concat(e.surname):e.name:""}function te(e){return{id:null,name:"",surname:"",alias:"",label:e||"",role:"Portiere",email:"",phone:"",match_played:0,match_won:0,total_score:0,editable:!1}}var ne=function(e){return r.a.createElement("h3",null,r.a.createElement("b",null,"Gestione giocatori"))},ae=n(235),re=n(229),oe=n(239),ce=n(230),ie=function(e){var t=e.message,n=e.show,a=e.onHide,o=void 0===a?function(){return n=!1}:a;return r.a.createElement(ae.a,{show:n,onHide:o,size:"xl",centered:!0},r.a.createElement(ae.a.Header,{closeButton:!0},r.a.createElement(ae.a.Title,null,"Caricamento....")),r.a.createElement(ae.a.Body,null,t),r.a.createElement(ae.a.Footer,null,r.a.createElement(re.a,{animation:"border",variant:"light"}),r.a.createElement(re.a,{animation:"border",variant:"primary"}),r.a.createElement(re.a,{animation:"border",variant:"secondary"}),r.a.createElement(re.a,{animation:"border",variant:"success"}),r.a.createElement(re.a,{animation:"border",variant:"danger"}),r.a.createElement(re.a,{animation:"border",variant:"warning"}),r.a.createElement(re.a,{animation:"border",variant:"info"}),r.a.createElement(re.a,{animation:"border",variant:"dark"})))},le=function(e){var t=e.message;return t&&""!==t?r.a.createElement(oe.a,{className:"rounded mr-2",key:"success-message",show:""!==t},r.a.createElement(oe.a.Header,{closeButton:!1},r.a.createElement("strong",null,"Operazione completata !")),r.a.createElement(oe.a.Body,null,r.a.createElement(ce.a,{variant:"success"},t))):null},ue=function(e){var t=e.message;return t&&""!==t?r.a.createElement(oe.a,{className:"rounded mr-2",key:"warning-message",show:""!==t},r.a.createElement(oe.a.Header,{closeButton:!1},r.a.createElement("strong",null,"Operazione completata !")),r.a.createElement(oe.a.Body,null,r.a.createElement(ce.a,{variant:"warning"},t))):null},se=function(e){var t=e.message;return t&&""!==t?r.a.createElement(oe.a,{className:"rounded mr-2",key:"error-message",show:""!==t},r.a.createElement(oe.a.Header,{closeButton:!1},r.a.createElement("strong",null,"Operazione completata !")),r.a.createElement(oe.a.Body,null,r.a.createElement(ce.a,{variant:"danger"},t))):null},de=function(e){function t(e){var n;return Object(z.a)(this,t),(n=Object(L.a)(this,Object(G.a)(t).call(this,e))).handleOnSelect=function(e,t){return n.setState((function(n){var a=n.selectedRows,r=!!a.find((function(t){return t.id===e.id}));return t?r?{selectedRows:a}:{selectedRows:[e].concat(Object(v.a)(a))}:r?{selectedRows:a.filter((function(t){return t.id!==e.id}))}:{selectedRows:a}})),!0},n.cellEditProps=$()({mode:"click",blurToSave:!0,autoSelectText:!0,afterSaveCell:function(e,t,n,a){Object(g.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/player",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});case 2:return t=e.sent,e.next=5,t.json();case 5:case"end":return e.stop()}}),e)})))()}}),n.state={rows:[],selectedRows:[],isLoading:!1},n.handleOnSelect=n.handleOnSelect.bind(Object(J.a)(n)),n.deleteRow=n.deleteRow.bind(Object(J.a)(n)),n.addRow=n.addRow.bind(Object(J.a)(n)),n}return Object(B.a)(t,e),Object(D.a)(t,[{key:"componentDidMount",value:function(){var e=Object(g.a)(b.a.mark((function e(){var t=this;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.setState({isLoading:!0},(function(){return Object(g.a)(b.a.mark((function e(){var n,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/player/list",{method:"GET",headers:{"Content-Type":"application/json"}});case 2:return n=e.sent,e.next=5,n.json();case 5:a=e.sent,t.setState({isLoading:!1,rows:a});case 7:case"end":return e.stop()}}),e)})))()}));case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"addRow",value:function(){var e=this;this.setState({isLoading:!0},(function(){return Object(g.a)(b.a.mark((function t(){var n,a;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("/api/player",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(te())});case 2:return n=t.sent,t.next=5,n.json();case 5:a=t.sent,e.setState((function(e){return{rows:[a].concat(Object(v.a)(e.rows)),isLoading:!1}}));case 7:case"end":return t.stop()}}),t)})))()}))}},{key:"deleteRow",value:function(){var e=this,t=this.state.selectedRows;t&&this.setState({isLoading:!0},(function(){return Object(g.a)(b.a.mark((function n(){var a;return b.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("/api/player",{method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});case 2:return a=n.sent,n.next=5,a.json();case 5:n.sent,e.setState((function(e){return{rows:e.rows.filter((function(e){return!t.find((function(t){return t.id===e.id}))})),selectedRows:[],isLoading:!1}}));case 7:case"end":return n.stop()}}),n)})))()}))}},{key:"render",value:function(){var e=this,t=this.state,n=this.deleteRow,a=this.addRow,o=t.rows,c=t.isLoading,i={mode:"checkbox",nonSelectable:o.filter((function(e){return!e.editable})).map((function(e){return e.id})),onSelect:this.handleOnSelect,onSelectAll:function(t,n){return n.forEach((function(n){return e.handleOnSelect(n,t)}))},style:{backgroundColor:"#c8e6c9"},selectColumnStyle:function(e){e.checked,e.disabled;var t=e.rowIndex;e.rowKey;return o[t].editable?{backgroundColor:"#28a745"}:{backgroundColor:"#dc3545"}}};return r.a.createElement(r.a.Fragment,null,r.a.createElement(ie,{show:c,message:"Caricamento"}),r.a.createElement(M.a,null,r.a.createElement(H.a,null,r.a.createElement(X.a,{keyField:"id",data:o,columns:Z,exportCSV:!0},(function(t){return r.a.createElement(r.a.Fragment,null,r.a.createElement(W.a,{horizontal:!0},r.a.createElement(O.a,{variant:"success",onClick:a},"Aggiungi giocatore"),r.a.createElement(O.a,{variant:"danger",onClick:n},"Calcella giocatore"),r.a.createElement(O.a,{variant:"dark",onClick:Q.bind(e)},"Pulisci Filtri")),r.a.createElement(U.a,{wrapperClasses:"player-table",keyField:"id",data:o,columns:Z,cellEdit:e.cellEditProps,selectRow:i,caption:r.a.createElement(ne,null),filter:q()(),headerClasses:"player-table-header",noDataIndication:"Nessun dato reperito",striped:!0,hover:!0,bootstrap4:!0}))})))))}}]),t}(r.a.Component),pe=n(240),me=n(232),fe=n(233),he=n(114),be=n(64),ge=n(121),ve=Object(ge.a)(),ye=r.a.forwardRef((function(e,t){var n=Object(a.useState)(),o=Object(l.a)(n,2),c=o[0],i=o[1],u=e.row,s=e.columnIndex,d=e.id,p=(e.onUpdate,e.onSelect),m=e.options;return r.a.createElement(be.a,{components:ve,options:m,onChange:function(e){e.pairId=d,i(e);ee(e);p(e,u.id,s)},value:c,placeholder:"Cerca...",isSearchable:!0,isClearable:!0})})),Ee=function(e,t){return[{dataField:"id",text:"ID",editable:!1,hidden:!0,align:function(){return"center"}},{dataField:"rowNumber",text:"ID",editable:!1,align:function(){return"center"}},{dataField:"player1.alias",text:"Giocatore 1",align:function(){return"center"},editorRenderer:function(n,a,o,c,i,l){return r.a.createElement(ye,Object.assign({},n,{id:l,row:o,rowIndex:i,columnIndex:l,value:a,onSelect:e,options:t}))},headerStyle:function(e,t){return{width:"20%"}}},{dataField:"player2.alias",text:"Giocatore 2",align:function(){return"center"},editorRenderer:function(n,a,o,c,i,l){return r.a.createElement(ye,Object.assign({},n,{id:l,row:o,rowIndex:i,columnIndex:l,value:a,onSelect:e,options:t}))},headerStyle:function(e,t){return{width:"20%"}}},{dataField:"pairAlias",text:"Alias Coppia",headerStyle:function(e,t){return{width:"25%"}}},{dataField:"stage1Name",text:"Nome girone",align:function(){return"center"},headerStyle:function(e,t){return{width:"10%"}},editor:{type:Y.Type.SELECT,options:"abcdefghijklmnopqrstuvwxyz".toUpperCase().split("").map((function(e){return{value:e,label:e}}))}},{dataField:"paid1",text:"Pagato 1",align:function(){return"center"},headerStyle:function(e,t){return{width:"7,5%"}},editor:{type:Y.Type.CHECKBOX,value:"Si:No"},style:function(e,t,n,a){if("Si"!==e)return{backgroundColor:"#ffbf47"}}},{dataField:"paid2",text:"Pagato 2",align:function(){return"center"},headerStyle:function(e,t){return{width:"7,5%"}},editor:{type:Y.Type.CHECKBOX,value:"Si:No"},style:function(e,t,n,a){if("Si"!==e)return{backgroundColor:"#ffbf47"}}}]},we=$()({mode:"click",blurToSave:!0,afterSaveCell:function(e,t,n,a){"player1.alias"!==a.dataField&&"player2.alias"!==a.dataField&&Object(g.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/pair",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});case 2:return t=e.sent,e.next=5,t.json();case 5:case"end":return e.stop()}}),e)})))()}});function Oe(){return{id:null,rowNumber:null,tId:null,player1:te(),player2:te(),pairAlias:"",stage1Name:"",paid1:"No",paid2:"No"}}var je=function(){var e=Object(g.a)(b.a.mark((function e(t){var n,a,r,o,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/pair/list/?tId=".concat(t),{method:"GET",headers:{"Content-Type":"application/json"}});case 2:return n=e.sent,e.next=5,n.json();case 5:return a=e.sent,e.next=8,fetch(t?"/api/player/list/".concat(t):"/api/player/list",{method:"GET",headers:{"Content-Type":"application/json"}});case 8:return n=e.sent,e.next=11,n.json();case 11:return r=e.sent,o=[].concat(Object(v.a)(r),[te("Nessun Giocatore")]),e.next=15,fetch("/api/tournament/".concat(t),{method:"GET",headers:{"Content-Type":"application/json"}});case 15:return n=e.sent,e.next=18,n.json();case 18:return c=e.sent,e.abrupt("return",{rows:a,players:o,tournament:c});case 20:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),xe=function(e,t){Object(g.a)(b.a.mark((function n(){var a,r;return b.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("/api/pair/list/?tId=".concat(t),{method:"GET",headers:{"Content-Type":"application/json"}});case 2:return a=n.sent,n.next=5,a.json();case 5:r=n.sent,e(r);case 7:case"end":return n.stop()}}),n)})))()};function Se(e){return console.log("valueFormatter : ",e),e.pairAlias&&""!==e.pairAlias?"".concat(e.pairAlias," ( ").concat(e.id," )"):function(e){console.log("createAlias : ",e);var t="".concat(e.rowNumber," : "),n=e.player1,a=e.player2,r=e.id;return t+=n.alias?n.alias:n.name,t+=a.alias,t+=" ( ".concat(r," )")}(e)}var Ce=function(e){var t=e.tournament;return t?r.a.createElement("h3",null,r.a.createElement("p",null,r.a.createElement("b",null,'Torneo "',r.a.createElement("strong",null,null===t||void 0===t?void 0:t.name.toUpperCase()),'" ( ',null===t||void 0===t?void 0:t.id," )",r.a.createElement("small",null," - ",null===t||void 0===t?void 0:t.progress)))):null},ke=n(49),Ne=function(e){var t=e.addRow,n=e.optionsLength,a=n-1,o=a<8?8-a:0;return n?a>=8?r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null," Aggiungi le coppie per questo torneo..."),r.a.createElement(O.a,{variant:"success",onClick:t},"Aggiungi Coppia")):r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"Ci sono solo ",a," giocatori definiti ma devono essercene almeno 8 per poter formare un torneo."),r.a.createElement("p",null,1===o?"Devi creare un altro giocatore...":"Devi creare almeno altri ".concat(o)),r.a.createElement(ke.b,{to:"/player"},r.a.createElement(O.a,{variant:"success"},"Gestione Giocatori"))):null},Te=(n(222),function(e){var t=Object(u.i)().tId,n=Object(u.g)(),o=Object(a.useState)({state:!1,message:"Caricamento"}),c=Object(l.a)(o,2),i=c[0],s=c[1],d=Object(a.useState)(""),p=Object(l.a)(d,2),m=p[0],f=p[1],h=Object(a.useState)(""),y=Object(l.a)(h,2),E=y[0],w=y[1],j=Object(a.useState)(""),x=Object(l.a)(j,2),S=x[0],C=x[1],k=Object(a.useState)({tournament:null,rows:[],players:[]}),N=Object(l.a)(k,2),F=N[0],A=N[1],P=Object(a.useState)([]),R=Object(l.a)(P,2),z=R[0],D=R[1],L=Object(a.useState)(0),G=Object(l.a)(L,2),J=G[0],B=G[1],_=Object(a.useState)(0),V=Object(l.a)(_,2),q=V[0],K=V[1];function X(e){s({state:!1,message:e}),C(e),setTimeout((function(){return C("")}),5e3)}function Y(e){s({state:!1,message:e}),f(e),setTimeout((function(){return f("")}),5e3)}function $(e){return Q.apply(this,arguments)}function Q(){return(Q=Object(g.a)(b.a.mark((function e(n){var a,r,o;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,s({state:!0,message:"Aggiunta riga in corso"}),(a=Oe()).tId=t,e.next=6,fetch("/api/pair",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)});case 6:return r=e.sent,e.next=9,r.json();case 9:o=e.sent,a.id=o.id,a.rowNumber=n||F.rows.length+1,A((function(e){return{tournament:e.tournament,rows:[a].concat(Object(v.a)(e.rows)),players:e.players}})),Y("Riga aggiunta"),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),X("Errore aggiunta riga");case 19:case"end":return e.stop()}}),e,null,[[0,16]])})))).apply(this,arguments)}function Z(){return(Z=Object(g.a)(b.a.mark((function e(){var t,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=F.rows.length+1,n=0;case 2:if(!(n<q)){e.next=9;break}return e.next=5,$(t);case 5:t++;case 6:n++,e.next=2;break;case 9:K(0);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ee(){return(ee=Object(g.a)(b.a.mark((function e(){var t,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,s({state:!0,message:z.length>1?"Cancellazione righe in corso":"Cancellazione riga in corso"}),t=[],z.forEach((function(e){e.player1.id&&t.push(e.player1),e.player2.id&&t.push(e.player2)})),t&&A((function(e){return{tournament:e.tournament,rows:e.rows,players:[].concat(t,Object(v.a)(e.players)).sort((function(e,t){return e.alias.localeCompare(t.alias)}))}})),e.next=7,fetch("/api/pair",{method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify(z)});case 7:return n=e.sent,e.next=10,n.json();case 10:A((function(e){return{tournament:e.tournament,rows:e.rows.filter((function(e){return!z.find((function(t){return t.id===e.id}))})),players:e.players}})),Y(z.length>1?"Righe cancellate":"Riga cancellata"),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),X("Errore cancellazione riga");case 17:D([]);case 18:case"end":return e.stop()}}),e,null,[[0,14]])})))).apply(this,arguments)}function ne(e,t){e&&e.id?t.id?A((function(n){return{tournament:n.tournament,rows:n.rows,players:[].concat(Object(v.a)(n.players.filter((function(e){return e.id!==t.id}))),[e]).sort((function(e,t){return e.alias.localeCompare(t.alias)}))}})):A((function(t){return{tournament:t.tournament,rows:t.rows,players:[].concat(Object(v.a)(t.players),[e]).sort((function(e,t){return e.alias.localeCompare(t.alias)}))}})):t.id&&A((function(e){return{tournament:e.tournament,rows:e.rows,players:e.players.filter((function(e){return e.id!==t.id}))}}))}Object(a.useEffect)((function(){Object(g.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=A,e.next=3,je(t);case 3:return e.t1=e.sent,e.abrupt("return",(0,e.t0)(e.t1));case 5:case"end":return e.stop()}}),e)})))()}),[t]);var ae=function(e,t){D((function(n){var a=!!n.find((function(t){return t.id===e.id}));return t?a?n:[e].concat(Object(v.a)(n)):a?n.filter((function(t){return t.id!==e.id})):n}))};var re={mode:"checkbox",onSelect:ae,onSelectAll:function(e,t){return t.forEach((function(t){return ae(t,e)}))},style:{backgroundColor:"#c8e6c9"}};function oe(){return(oe=Object(g.a)(b.a.mark((function e(){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,s({state:!0,message:"Cancellazione in corso"}),e.next=4,fetch("/api/stage1",{method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify({tId:t})});case 4:return n=e.sent,e.next=7,n.json();case 7:F.tournament.progress=T,fetch("/api/tournament",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(F.tournament)}),Y("Cancellazione completata"),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),X("Errore cancellazione Fase 1");case 15:case"end":return e.stop()}}),e,null,[[0,12]])})))).apply(this,arguments)}function ce(){return(ce=Object(g.a)(b.a.mark((function e(){var t,n,a,r,o,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(J){e.next=4;break}return C("Specificare il numero di gironi da assegnare"),setTimeout((function(){return C("")}),5e3),e.abrupt("return");case 4:s({state:!0,message:"Aggiornamento in corso"}),t=0,n="abcdefghijklmnopqrstuvwxyz".toUpperCase().split(""),a=[],e.t0=b.a.keys(F.rows);case 9:if((e.t1=e.t0()).done){e.next=30;break}return r=e.t1.value,o=F.rows[r],t==J&&(t=0),o.stage1Name=n[t],t++,e.prev=15,e.next=18,fetch("/api/pair",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)});case 18:return c=e.sent,e.next=21,c.json();case 21:a.push(o),e.next=28;break;case 24:e.prev=24,e.t2=e.catch(15),X("Errore"),a.push(o);case 28:e.next=9;break;case 30:Y("Gironi assegnati correttamente"),A((function(e){return{tournament:e.tournament,rows:a,players:e.players}}));case 32:case"end":return e.stop()}}),e,null,[[15,24]])})))).apply(this,arguments)}var de=Math.floor(F.players.length-1-F.rows.reduce((function(e,t){return t.player1||t.player2?t.player1&&t.player2?t.player1.id||t.player2.id?t.player1.id&&t.player2.id?e:e+1:e+2:e+1:e+2}),0))/2,be=!(z.length>0)||"Stage1"===F.tournament.progress||"Stage2"===F.tournament.progress,ge="";return ge=z.length>0?"Stage1"===F.tournament.progress||"Stage2"===F.tournament.progress?"Devi prima resettare i gironi per poter cancellare delle coppie":"Cancella le coppie selezionate":"Seleziona almeno una riga",r.a.createElement(r.a.Fragment,null,r.a.createElement(M.a,null,r.a.createElement(ie,{show:i.state,message:i.message}),r.a.createElement(H.a,{style:{margin:"10px"},md:{span:1}},r.a.createElement(M.a,null,r.a.createElement(W.a,null,r.a.createElement(W.a.Item,{action:!0,variant:"primary",onClick:function(e){if(F.rows.length<4)return C("Numero di coppie insufficente. Devi formare almeno 4 coppie"),void setTimeout((function(){return C("")}),5e3);var a=F.rows.filter((function(e){return!e.stage1Name||""===e.stage1Name})).map((function(e){return e.rowNumber}));if(0!==a.length)return C("Assegna  ".concat(1===a.length?"la riga ":"le righe "," ").concat(a," ad un girone per procedere ")),void setTimeout((function(){return C("")}),5e3);var r=F.rows.filter((function(e){return null===e.player1.id||null===e.player2.id})).map((function(e){return e.rowNumber}));if(0!==r.length)return C("Assegna  i giocatori ".concat(1===r.length?"alla riga ":"alle righe "," ").concat(r," per procedere ")),void setTimeout((function(){return C("")}),5e3);t||(C("Id torneo mancante. Verrai inviato alla Home tra 5 secondi...."),setTimeout((function(){C(""),n.push("/")}),5e3));var o=[],c=F.rows.reduce((function(e,t){return t.stage1Name in e?e[t.stage1Name]++:e[t.stage1Name]=1,e}),{});for(var i in c)c[i]<=3&&o.push(i);if(o.length>0)return C(1===o.length?"Il torneo ".concat(o," deve contenere almeno ").concat(4," coppie"):"I torneI ".concat(o," devono contenere almeno ").concat(4," coppie")),void setTimeout((function(){C("")}),5e3);F.tournament.progress=I,fetch("/api/tournament",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(F.tournament)}),n.push("/stage1/".concat(t))}},"Prosegui"),r.a.createElement(W.a.Item,{action:!0,variant:"secondary",onClick:function(){n.push("/")}},"Home"),r.a.createElement(W.a.Item,{action:!0,variant:"success",onClick:function(){return $()},disabled:de<=0},"Aggiungi Coppia"),r.a.createElement(pe.a,{placement:"right",key:"rigth",overlay:r.a.createElement(me.a,null,ge)},r.a.createElement("span",{className:"d-inline-block",onClick:function(){return ee.apply(this,arguments)}},r.a.createElement(W.a.Item,{action:!0,variant:"danger",style:{pointerEvents:"none"},disabled:be},"Elimina Coppia ",be))),r.a.createElement(W.a.Item,{action:!0,variant:"danger",onClick:function(){return oe.apply(this,arguments)}},"Reset gironi")))),r.a.createElement(H.a,{style:{margin:"10px"}},r.a.createElement(M.a,null,r.a.createElement(fe.a,{onChange:function(e){return B(e.target.value)}},r.a.createElement(fe.a.Prepend,null,r.a.createElement(fe.a.Text,null,"Assegna gironi automaticamente")),r.a.createElement(he.a,{placeholder:F.rows.length<4?"Inserisci almeno 4 coppie":"Numero di gironi ( max ".concat(Math.floor(F.rows.length/4)," )"),"aria-label":"Numero di gironi",disabled:F.rows.length<4}),r.a.createElement(fe.a.Append,null,r.a.createElement(O.a,{variant:"primary",onClick:function(){return ce.apply(this,arguments)},disabled:!J||J>Math.floor(F.rows.length/4)||F.rows.length<4},"Esegui"))),r.a.createElement(fe.a,{onChange:function(e){return K(e.target.value)}},r.a.createElement(fe.a.Prepend,null,r.a.createElement(fe.a.Text,null,"Aggiunti N nuove coppie")),r.a.createElement(he.a,{disabled:de<=0,placeholder:de<=0?"Numero massimo di coppie gia creato sulla base del numero di giocatori disponibili":"Numero di coppie da aggiungere ( max ".concat(de," )"),"aria-label":"Numero di coppie",value:q||""}),r.a.createElement(fe.a.Append,null,r.a.createElement(O.a,{variant:"primary",onClick:function(e){return K(de)},disabled:q>de},"Max"),r.a.createElement(O.a,{variant:"primary",onClick:function(){return Z.apply(this,arguments)},disabled:!q||q>de},"Esegui")))),r.a.createElement(M.a,null,r.a.createElement(U.a,{bootstrap4:!0,keyField:"id",data:F.rows,columns:Ee((function(e,t,n){var a=F.rows.map((function(a){if(a.id===t){var r=a;return 1===n?e.id&&r.player2&&r.player2.id===e.id?(r.player1=te(),w("Attenzione : Non puoi selezionare lo stesso giocare ! "),setTimeout((function(){return w("")}),5e3)):(ne(r.player1,e),r.player1=e):e.id&&r.player1&&r.player1.id===e.id?(r.player2=te(),w("Attenzione : Non puoi selezionare lo stesso giocare ! "),setTimeout((function(){return w("")}),5e3)):(ne(r.player2,e),r.player2=e),fetch("/api/pair",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)}),r}return a}));A((function(e){return{tournament:e.tournament,rows:a,players:e.players}}))}),F.players),cellEdit:we,selectRow:re,noDataIndication:r.a.createElement(Ne,{addRow:function(){return $()},optionsLength:F.players.length}),caption:r.a.createElement(Ce,{tournament:F.tournament}),wrapperClasses:"player-table",headerClasses:"player-table-header",striped:!0,hover:!0}))),r.a.createElement(H.a,{style:{margin:"10px"},md:2},r.a.createElement(le,{message:m}),r.a.createElement(ue,{message:E}),r.a.createElement(se,{message:S}))))}),Ie=function(e){var t=e.title,n=e.saved,a={color:n?"#4feb34":void 0};return r.a.createElement("h3",null,r.a.createElement("b",{style:a},"Girone - ",r.a.createElement("strong",null,t)),n?r.a.createElement("small",null," - Salvataggio in corso..."):null)},Fe=r.a.forwardRef((function(e,t){var n=Object(a.useState)([]),o=Object(l.a)(n,2),c=o[0],i=o[1],u=Object(a.useState)(),s=Object(l.a)(u,2),d=s[0],p=s[1],m=e.row,f=e.columnIndex,h=e.id,b=e.onUpdate,g=e.onSelect,v=e.tId;return Object(a.useEffect)((function(){return xe(i,v)}),[v]),r.a.createElement(be.a,{options:c,onChange:function(e){e.pairId=h,p(e);var t=Se(e);b(t),g(e,m.id,f)},value:d,placeholder:"Cerca...",isSearchable:!0,isClearable:!0})})),Ae=function(e,t){return{id:"col".concat(e),dataField:"col".concat(e),text:e.toString(),type:"number",headerStyle:function(e,n){return{width:"".concat(75/t,"%")}},headerAlign:function(e,t){return"center"},editable:function(e,t,n,a){return n!==a-2},align:function(e,t,n,a){return"center"},style:function(e,t,n,a){return n===a-2?{backgroundColor:"#6d706e"}:3===parseInt(e,10)||2===parseInt(e,10)?{backgroundColor:"rgb(196, 247, 160)"}:1===parseInt(e,10)||0===parseInt(e,10)?{backgroundColor:"rgb(255, 147, 147)"}:null},editor:{type:Y.Type.SELECT,options:[{value:"3",label:"3"},{value:"2",label:"2"},{value:"1",label:"1"},{value:"0",label:"0"},{value:null,label:""}]}}};var Pe=function(e,t){for(var n=[{id:"pairLabel",dataField:"pair.label",text:"Nome Coppia",editable:!1,headerStyle:function(e,t){return{width:"15%"}},align:function(e,t,n,a){return"center"},headerAlign:function(e,t){return"center"},editorRenderer:function(n,a,o,c,i,l){return r.a.createElement(Fe,Object.assign({},n,{id:l,row:o,rowIndex:i,columnIndex:l,value:a,onSelect:e,tId:t[0].tId}))}},{id:"rowNumber",dataField:"rowNumber",text:"ID",editable:!1,type:"number",headerStyle:function(e,t){return{width:"5%"}},headerAlign:function(e,t){return"center"},style:function(e,t,n,a){return{backgroundColor:"#f9ffdb"}}}],a=0;a<t.length;a++)n.push(Ae(a+1,t.length));return n.push({id:"totale",dataField:"total",text:"Totale",editable:!1,type:"number",headerStyle:function(e,t){return{width:"5%"}},headerAlign:function(e,t){return"center"}},{id:"place",dataField:"place",text:"Posizione",editable:!0,type:"number",headerStyle:function(e,t){return{width:"5%"}},headerAlign:function(e,t){return"center"}}),n};function Re(e,t){return e.total===t.total?3===e["col".concat(t.rowNumber)]||2===e["col".concat(t.rowNumber)]?-1:1:t.total-e.total}n(224);var ze=function(e){var t=e.rows,n=e.columns,o=e.tableName,c=e.updateCellValue,i=e.saved,u=Object(a.useState)([]),s=Object(l.a)(u,2),d=s[0],p=s[1],m=$()({mode:"click",blurToSave:!0,beforeSaveCell:function(e,n,a,r){r.id.startsWith("col")&&(t[parseInt(r.text)-1]["col".concat(a.rowNumber)]=function(e){if(null===e)return null;switch(e){case 3:return 0;case 2:return 1;case 1:return 2;case 0:return 3;default:return null}}(n),Object(v.a)(t).sort((function(e,t){return Re(e,t)})).forEach((function(e,n){return t[e.rowNumber-1].place=n+1})))},afterSaveCell:function(e,n,a,r){if(r.id.startsWith("col")){c(e,n,a,r);var o=0;for(var i in a)i.startsWith("col")&&(o+=a[i]);for(var l in t[a.rowNumber-1].total=o||null,o=0,t[parseInt(r.text)-1])l.startsWith("col")&&(o+=t[parseInt(r.text)-1][l]);t[parseInt(r.text)-1].total=o||null}}}),f=function(e,t){return p((function(){var n=!!d.find((function(t){return t.rowNumber===e.rowNumber}));return t?n?d:[e].concat(Object(v.a)(d)):n?d.filter((function(t){return t.rowNumber!==e.rowNumber})):d})),!0},h={mode:"checkbox",onSelect:f,onSelectAll:function(e,t){return t.forEach((function(t){return f(t,e)}))},style:{backgroundColor:"#c8e6c9"}};return r.a.createElement(r.a.Fragment,null,r.a.createElement(U.a,{bootstrap4:!0,keyField:"id",data:t,columns:n,selectRow:h,cellEdit:m,noDataIndication:"Nessun dato reperito",wrapperClasses:"player-table",headerClasses:"player-table-header",caption:r.a.createElement(Ie,{title:o,saved:i}),striped:!0,hover:!0}))},De=function(e){var t,n,o=e.pairsList,c=Object(a.useState)(!1),i=Object(l.a)(c,2),u=i[0],s=i[1],d=Object(a.useState)(!1),p=Object(l.a)(d,2),m=p[0],f=p[1],h=Object(a.useState)(function(e){for(var t=[],n=0;n<e.length;n++){t.push({pair:e[n],rowNumber:n+1});for(var a=1;a<=e.length;a++)t[n]["col".concat(a)]=null;t[n].total=0,t[n].place=0,t[n].id="row-".concat(e[0].tId,"-").concat(n)}return t}(o)),y=Object(l.a)(h,2),E=y[0],w=y[1],O=null!==(t=null===(n=o[0])||void 0===n?void 0:n.stage1Name)&&void 0!==t?t:"Not found",j=function(){var e=Object(g.a)(b.a.mark((function e(t,n,a,r){var o,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o={tId:a.pair.tId,tableName:O,score:n,pair1Id:a.pair.id,pair2Id:E[parseInt(r.text)-1].pair.id},e.next=3,fetch("/api/stage1/cell",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)});case 3:return c=e.sent,e.next=6,c.json();case 6:c.ok&&(f(!0),setTimeout((function(){return f(!1)}),3e3));case 7:case"end":return e.stop()}}),e)})));return function(t,n,a,r){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){(function(){var e=Object(g.a)(b.a.mark((function e(){var t,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s(!0),e.next=3,fetch("/api/stage1",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({rows:E,stageName:O})});case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,Object(v.a)(n).sort((function(e,t){return Re(e,t)})).forEach((function(e,t){return n[e.rowNumber-1].place=t+1})),w(n),s(!1);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);return r.a.createElement(r.a.Fragment,null,u?r.a.createElement("h3",null,"Caricamento girone ",r.a.createElement("b",null,O)," in corso...."):r.a.createElement(ze,{rows:E,columns:Pe((function(){"1"===O&&console.log("onSelect ")}),o),tableName:O,updateCellValue:j,saved:m}))};var Le=[{path:"/",label:"Home",exact:!0,component:R,visible:!0,index:0},{path:"/tournament/:tId",label:"Selezione Coppie",exact:!0,component:Te,visible:!1,index:10},{path:"/stage1/:tId",label:"Torneo fase 1",exact:!0,component:function(e){var t=Object(u.i)().tId,n=Object(a.useState)([]),o=Object(l.a)(n,2),c=o[0],i=o[1],s=Object(u.g)();return Object(a.useEffect)((function(){return xe(i,t)}),[t]),c.sort((function(e,t){return e.stage1Name.localeCompare(t.stage1Name)})),r.a.createElement(r.a.Fragment,null,r.a.createElement(W.a.Item,{key:"stage-button"},r.a.createElement(O.a,{variant:"secondary",onClick:function(){s.push("/tournament/".concat(t))}},"Gestione Coppie")),function(e,t){var n="",a=[],o=[];e.forEach((function(e,t){""===n&&(n=e.stage1Name),n!==e.stage1Name&&(o.push(r.a.createElement(W.a.Item,{key:"stage-".concat(n)},r.a.createElement(De,{pairsList:a}))),n=e.stage1Name,a=[]),a.push(e)})),a.length>0&&o.push(r.a.createElement(W.a.Item,{key:"stage-".concat(n)},r.a.createElement(De,{pairsList:a})));return r.a.createElement(W.a,{variant:"flush"},o)}(c))},visible:!1,index:20},{path:"/player",label:"Gestione Giocatori",exact:!0,component:de,visible:!0,index:30},{path:"/stage2/:tId",label:"Torneo fase 2",exact:!0,component:function(e){for(var t={flexDirection:"column",alignItems:"stretch"},n={display:"flex",flexDirection:"column",justifyContent:"center",alignContent:"space-around"},a=[],o=0;o<=4;o++){for(var c=[],i=0;i<Math.pow(2,o);i++)c.push(r.a.createElement(W.a.Item,{key:"item-".concat(o,"-").concat(i),style:t},r.a.createElement(fe.a,null,r.a.createElement(he.a,{placeholder:"".concat(o,"-").concat(i)}))));a.push(r.a.createElement(W.a.Item,{key:"col-".concat(o),style:n},r.a.createElement(W.a,{variant:"flush"},c)))}return r.a.createElement(W.a,{variant:"flush",id:"outer-container",style:{flexDirection:"row-reverse"}},a)},visible:!1,index:40},{path:"*",label:"Not Found",exact:!1,component:function(e){var t=Object(u.h)();return r.a.createElement("div",null,r.a.createElement("h1",null,"Current Ruote : ",r.a.createElement("code",null,t.pathname)))},visible:!1,index:1e3}],Ge=Le;n(225);var Je=n(238),Be=function(e){return r.a.createElement(Je.a,{bg:"ligth",variant:"light",className:"navbar-container"},r.a.createElement("ul",{className:"navbar-list"},Ge.map((function(e){return e.visible?r.a.createElement("li",{key:"li-".concat(e.index),className:"navbar-list-item"},r.a.createElement(ke.b,{key:"link-".concat(e.index),to:e.path},e.label)):null}))))},Me=n(234),He=function(e){var t=p(),n=Object(l.a)(t,2),a=n[0],o=n[1],c={isAuthenticated:!1,authenticationPath:"/login",redirectPathOnAuthentication:a.redirectPathOnAuthentication||"",setRedirectPathOnAuthentication:function(e){o(Object(i.a)({},a,{redirectPathOnAuthentication:e}))}};return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"app-header"},r.a.createElement("p",null,"Calcetto C.S.M"),r.a.createElement(Be,null)),r.a.createElement("br",null),r.a.createElement(Me.a,{fluid:!0},r.a.createElement(u.d,null,r.a.createElement(u.b,{path:"/login",component:f}),Ge.map((function(e){return r.a.createElement(m,Object.assign({},e,c,{key:e.index}))})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(ke.a,null,r.a.createElement((function(e){var t=e.children,n=Object(a.useState)(s),o=Object(l.a)(n,2),c=[o[0],o[1]];return r.a.createElement(d.Provider,{value:c},t)}),null,r.a.createElement(He,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[126,1,2]]]);
//# sourceMappingURL=main.49e508a5.chunk.js.map