(this.webpackJsonpcalcetto=this.webpackJsonpcalcetto||[]).push([[0],{124:function(e,t,a){e.exports=a(224)},129:function(e,t,a){},135:function(e,t,a){},213:function(e,t,a){},220:function(e,t,a){},222:function(e,t,a){},223:function(e,t,a){},224:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(14),c=a.n(o),i=(a(129),a(130),a(81)),l=a(11),s=a(16),u={},d=Object(n.createContext)([u,function(){}]),p=function(){return Object(n.useContext)(d)},m=function(e){var t=Object(s.h)(),a=e.redirectPathOnAuthentication;if(console.log("ProtectedRoute...."),e.isAuthenticated||(e.setRedirectPathOnAuthentication(t.pathname),a=e.authenticationPath),a===t.pathname||e.isAuthenticated)return n.createElement(s.b,e);return n.createElement(s.b,Object.assign({},e,{component:function(){return n.createElement(s.a,{to:{pathname:a}})},render:void 0}))},f=(a(135),function(){var e=p(),t=Object(l.a)(e,2),a=t[0],n=t[1],o=Object(s.g)();return r.a.createElement("button",{onClick:function(){n(Object(i.a)({},a,{isAuthenticated:!0})),o.push("/")}},"Login")}),h=a(9),b=a.n(h),g=a(13),v=a(19),y=a(110),E=a(238),w=a(234),O=a(226);function j(){var e=new Date,t=String(e.getDate()).padStart(2,"0"),a=String(e.getMonth()+1).padStart(2,"0"),n=e.getFullYear();return"".concat(n,"-").concat(a,"-").concat(t)}function x(e,t){return{id:null,name:e||"",ownerId:0,progress:t||"New",public:!0,label:e||""}}var C,S,k,N,T="PairsSelection",I="Stage1",F={alignSelf:"stretch",backgroundColor:"green",marginBottom:8,marginTop:8,marginRigth:10,width:1},A=function(e){var t=e.innerProps;return r.a.createElement("span",Object.assign({style:F},t))},P={width:"50%",margin:"auto"},R=function(){var e=Object(n.useState)(j()),t=Object(l.a)(e,2),a=t[0],o=t[1],c=Object(n.useState)([]),i=Object(l.a)(c,2),u=i[0],d=i[1],p=Object(s.g)();Object(n.useEffect)((function(){return e=d,t=o,void Object(g.a)(b.a.mark((function a(){var n,r,o,c;return b.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,fetch("/api/tournament/list",{method:"GET",headers:{"Content-Type":"application/json"}});case 2:return n=a.sent,a.next=5,n.json();case 5:r=a.sent,o=r.find((function(e){return e.name===j()})),(c=o?[o].concat(Object(v.a)(r)):r).sort(),e(c),t&&t(c[0]);case 11:case"end":return a.stop()}}),a)})))();var e,t}),[]);var m=function(){var e=Object(g.a)(b.a.mark((function e(t){var n,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,fetch("/api/tournament",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(x(a.name,T))});case 3:return n=e.sent,e.next=6,n.json();case 6:r=e.sent,p.push("/tournament/".concat(r.id));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(E.a,{style:P},r.a.createElement(E.a.Body,null,r.a.createElement(E.a.Title,null,"Scegli un torneo"),r.a.createElement(w.a,{onSubmit:m},r.a.createElement(y.a,{components:{IndicatorSeparator:A},value:a,options:u,placeholder:"Crea/Cerca un torneo",isSearchable:!0,isClearable:!0,onChange:function(e){return o(e)},onCreateOption:function(e){var t=x(e);o(t),d((function(e){return[].concat(Object(v.a)(e),[t])}))}}),r.a.createElement("br",null),r.a.createElement(O.a,{type:"submit",size:"lg",variant:"outline-warning",disabled:!a},"Continua"))))},z=a(114),L=a(115),D=a(122),G=a(116),J=a(60),B=a(123),M=a(229),H=a(113),W=a(237),_=a(57),U=a.n(_),V=a(53),q=a.n(V),K=a(117),X=a.n(K),Y=a(30),$=a.n(Y);a(213);function Q(){C(""),S(""),k(""),N("")}var Z=[{dataField:"id",text:"ID",editable:!1},{dataField:"name",text:"Nome",headerClasses:"player-table-header-element",autoSelectText:!0,filter:Object(V.textFilter)({placeholder:"Filtra...",getFilter:function(e){return C=e}})},{dataField:"surname",text:"Cognome",headerClasses:"player-table-header-element",autoSelectText:!0,filter:Object(V.textFilter)({placeholder:"Filtra...",getFilter:function(e){return S=e}})},{dataField:"alias",text:"Alias",headerClasses:"player-table-header-element",autoSelectText:!0,filter:Object(V.textFilter)({placeholder:"Filtra...",getFilter:function(e){return k=e}})},{dataField:"role",text:"Roulo",headerClasses:"player-table-header-element",filter:Object(V.selectFilter)({placeholder:"Filtra...",options:{Portiere:"Portiere",Attaccante:"Attaccante",Master:"Master"},getFilter:function(e){return N=e}}),editor:{type:Y.Type.SELECT,getOptions:function(e){return[{value:"Portiere",label:"Portiere"},{value:"Attaccante",label:"Attaccante"},{value:"Master",label:"Master"}]}}},{dataField:"email",text:"Email",headerClasses:"player-table-header-element",autoSelectText:!0},{dataField:"phone",text:"Telefono",headerClasses:"player-table-header-element",autoSelectText:!0},{dataField:"match_played",text:"Partite Giocate",hidden:!0},{dataField:"match_won",text:"Vittorie",hidden:!0},{dataField:"total_score",text:"Punteggio",hidden:!0}];function ee(e){return e?e.alias?e.alias:e.surname?"".concat(e.name," - ").concat(e.surname):e.name:""}function te(e){return{id:null,name:"",surname:"",alias:"",label:e||"",role:"",email:"",phone:"",match_played:0,match_won:0,total_score:0,editable:!1}}var ae=function(e){return r.a.createElement("h3",null,r.a.createElement("b",null,"Gestione giocatori"))},ne=a(233),re=a(227),oe=a(235),ce=a(228),ie=function(e){var t=e.message,a=e.show,n=e.onHide,o=void 0===n?function(){return a=!1}:n;return r.a.createElement(ne.a,{show:a,onHide:o,size:"xl",centered:!0},r.a.createElement(ne.a.Header,{closeButton:!0},r.a.createElement(ne.a.Title,null,"Caricamento....")),r.a.createElement(ne.a.Body,null,t),r.a.createElement(ne.a.Footer,null,r.a.createElement(re.a,{animation:"border",variant:"light"}),r.a.createElement(re.a,{animation:"border",variant:"primary"}),r.a.createElement(re.a,{animation:"border",variant:"secondary"}),r.a.createElement(re.a,{animation:"border",variant:"success"}),r.a.createElement(re.a,{animation:"border",variant:"danger"}),r.a.createElement(re.a,{animation:"border",variant:"warning"}),r.a.createElement(re.a,{animation:"border",variant:"info"}),r.a.createElement(re.a,{animation:"border",variant:"dark"})))},le=function(e){var t=e.message;return t&&""!==t?r.a.createElement(oe.a,{className:"rounded mr-2",key:"success-message",show:""!==t},r.a.createElement(oe.a.Header,{closeButton:!1},r.a.createElement("strong",null,"Operazione completata !")),r.a.createElement(oe.a.Body,null,r.a.createElement(ce.a,{variant:"success"},t))):null},se=function(e){var t=e.message;return t&&""!==t?r.a.createElement(oe.a,{className:"rounded mr-2",key:"warning-message",show:""!==t},r.a.createElement(oe.a.Header,{closeButton:!1},r.a.createElement("strong",null,"Operazione completata !")),r.a.createElement(oe.a.Body,null,r.a.createElement(ce.a,{variant:"warning"},t))):null},ue=function(e){var t=e.message;return t&&""!==t?r.a.createElement(oe.a,{className:"rounded mr-2",key:"error-message",show:""!==t},r.a.createElement(oe.a.Header,{closeButton:!1},r.a.createElement("strong",null,"Operazione completata !")),r.a.createElement(oe.a.Body,null,r.a.createElement(ce.a,{variant:"danger"},t))):null},de=function(e){function t(e){var a;return Object(z.a)(this,t),(a=Object(D.a)(this,Object(G.a)(t).call(this,e))).handleOnSelect=function(e,t){return a.setState((function(a){var n=a.selectedRows,r=!!n.find((function(t){return t.id===e.id}));return t?r?{selectedRows:n}:{selectedRows:[e].concat(Object(v.a)(n))}:r?{selectedRows:n.filter((function(t){return t.id!==e.id}))}:{selectedRows:n}})),!0},a.cellEditProps=$()({mode:"click",blurToSave:!0,autoSelectText:!0,afterSaveCell:function(e,t,a,n){Object(g.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/player",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)});case 2:return t=e.sent,e.next=5,t.json();case 5:case"end":return e.stop()}}),e)})))()}}),a.state={rows:[],selectedRows:[],isLoading:!1},a.handleOnSelect=a.handleOnSelect.bind(Object(J.a)(a)),a.deleteRow=a.deleteRow.bind(Object(J.a)(a)),a.addRow=a.addRow.bind(Object(J.a)(a)),a}return Object(B.a)(t,e),Object(L.a)(t,[{key:"componentDidMount",value:function(){var e=Object(g.a)(b.a.mark((function e(){var t=this;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.setState({isLoading:!0},(function(){return Object(g.a)(b.a.mark((function e(){var a,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/player/list",{method:"GET",headers:{"Content-Type":"application/json"}});case 2:return a=e.sent,e.next=5,a.json();case 5:n=e.sent,t.setState({isLoading:!1,rows:n});case 7:case"end":return e.stop()}}),e)})))()}));case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"addRow",value:function(){var e=this;this.setState({isLoading:!0},(function(){return Object(g.a)(b.a.mark((function t(){var a,n;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("/api/player",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(te())});case 2:return a=t.sent,t.next=5,a.json();case 5:n=t.sent,e.setState((function(e){return{rows:[n].concat(Object(v.a)(e.rows)),isLoading:!1}}));case 7:case"end":return t.stop()}}),t)})))()}))}},{key:"deleteRow",value:function(){var e=this,t=this.state.selectedRows;t&&this.setState({isLoading:!0},(function(){return Object(g.a)(b.a.mark((function a(){var n;return b.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,fetch("/api/player",{method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});case 2:return n=a.sent,a.next=5,n.json();case 5:a.sent,e.setState((function(e){return{rows:e.rows.filter((function(e){return!t.find((function(t){return t.id===e.id}))})),selectedRows:[],isLoading:!1}}));case 7:case"end":return a.stop()}}),a)})))()}))}},{key:"render",value:function(){var e=this,t=this.state,a=this.deleteRow,n=this.addRow,o=t.rows,c=t.isLoading,i={mode:"checkbox",nonSelectable:o.filter((function(e){return!e.editable})).map((function(e){return e.id})),onSelect:this.handleOnSelect,onSelectAll:function(t,a){return a.forEach((function(a){return e.handleOnSelect(a,t)}))},style:{backgroundColor:"#c8e6c9"},selectColumnStyle:function(e){e.checked,e.disabled;var t=e.rowIndex;e.rowKey;return o[t].editable?{backgroundColor:"#28a745"}:{backgroundColor:"#dc3545"}}};return r.a.createElement(r.a.Fragment,null,r.a.createElement(ie,{show:c,message:"Caricamento"}),r.a.createElement(M.a,null,r.a.createElement(H.a,null,r.a.createElement(X.a,{keyField:"id",data:o,columns:Z,exportCSV:!0},(function(t){return r.a.createElement(r.a.Fragment,null,r.a.createElement(W.a,{horizontal:!0},r.a.createElement(O.a,{variant:"success",onClick:n},"Aggiungi giocatore"),r.a.createElement(O.a,{variant:"danger",onClick:a},"Calcella giocatore"),r.a.createElement(O.a,{variant:"dark",onClick:Q.bind(e)},"Pulisci Filtri")),r.a.createElement(U.a,{wrapperClasses:"player-table",keyField:"id",data:o,columns:Z,cellEdit:e.cellEditProps,selectRow:i,caption:r.a.createElement(ae,null),filter:q()(),headerClasses:"player-table-header",noDataIndication:"Nessun dato reperito",striped:!0,hover:!0,bootstrap4:!0}))})))))}}]),t}(r.a.Component),pe=a(239),me=a(230),fe=a(231),he=a(112),be=a(64),ge=a(119),ve=Object(ge.a)(),ye=r.a.forwardRef((function(e,t){var a=Object(n.useState)(),o=Object(l.a)(a,2),c=o[0],i=o[1],s=e.row,u=e.columnIndex,d=e.id,p=(e.onUpdate,e.onSelect),m=e.options;return r.a.createElement(be.a,{components:ve,options:m,onChange:function(e){e.pairId=d,i(e);ee(e);p(e,s.id,u)},value:c,placeholder:"Cerca...",isSearchable:!0,isClearable:!0})})),Ee=function(e,t){return[{dataField:"id",text:"ID",editable:!1,hidden:!0,align:function(){return"center"}},{dataField:"rowNumber",text:"ID",editable:!1,align:function(){return"center"}},{dataField:"player1.alias",text:"Giocatore 1",align:function(){return"center"},editorRenderer:function(a,n,o,c,i,l){return r.a.createElement(ye,Object.assign({},a,{id:l,row:o,rowIndex:i,columnIndex:l,value:n,onSelect:e,options:t}))}},{dataField:"player2.alias",text:"Giocatore 2",align:function(){return"center"},editorRenderer:function(a,n,o,c,i,l){return r.a.createElement(ye,Object.assign({},a,{id:l,row:o,rowIndex:i,columnIndex:l,value:n,onSelect:e,options:t}))}},{dataField:"pairAlias",text:"Alias Coppia"},{dataField:"stage1Name",text:"Nome girone",align:function(){return"center"},editor:{type:Y.Type.SELECT,options:"abcdefghijklmnopqrstuvwxyz".toUpperCase().split("").map((function(e){return{value:e,label:e}}))}},{dataField:"paid1",text:"Pagato 1",align:function(){return"center"},editor:{type:Y.Type.CHECKBOX,value:"Si:No"},style:function(e,t,a,n){if("Si"!==e)return{backgroundColor:"#ffbf47"}}},{dataField:"paid2",text:"Pagato 2",align:function(){return"center"},editor:{type:Y.Type.CHECKBOX,value:"Si:No"},style:function(e,t,a,n){if("Si"!==e)return{backgroundColor:"#ffbf47"}}}]},we=$()({mode:"click",blurToSave:!0,afterSaveCell:function(e,t,a,n){"player1.alias"!==n.dataField&&"player2.alias"!==n.dataField&&Object(g.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/pair",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)});case 2:return t=e.sent,e.next=5,t.json();case 5:case"end":return e.stop()}}),e)})))()}});function Oe(){return{id:null,rowNumber:null,tId:null,player1:te(),player2:te(),pairAlias:"",stage1Name:"",paid1:"No",paid2:"No"}}var je=function(){var e=Object(g.a)(b.a.mark((function e(t){var a,n,r,o,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/pair/list/?tId=".concat(t),{method:"GET",headers:{"Content-Type":"application/json"}});case 2:return a=e.sent,e.next=5,a.json();case 5:return n=e.sent,e.next=8,fetch(t?"/api/player/list/".concat(t):"/api/player/list",{method:"GET",headers:{"Content-Type":"application/json"}});case 8:return a=e.sent,e.next=11,a.json();case 11:return r=e.sent,o=[].concat(Object(v.a)(r),[te("Nessun Giocatore")]),e.next=15,fetch("/api/tournament/".concat(t),{method:"GET",headers:{"Content-Type":"application/json"}});case 15:return a=e.sent,e.next=18,a.json();case 18:return c=e.sent,e.abrupt("return",{rows:n,players:o,tournament:c});case 20:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),xe=function(e,t){Object(g.a)(b.a.mark((function a(){var n,r;return b.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,fetch("/api/pair/list/?tId=".concat(t),{method:"GET",headers:{"Content-Type":"application/json"}});case 2:return n=a.sent,a.next=5,n.json();case 5:r=a.sent,e(r);case 7:case"end":return a.stop()}}),a)})))()};function Ce(e){return console.log("valueFormatter : ",e),e.pairAlias&&""!==e.pairAlias?"".concat(e.pairAlias," ( ").concat(e.id," )"):function(e){console.log("createAlias : ",e);var t="".concat(e.rowNumber," : "),a=e.player1,n=e.player2,r=e.id;return t+=a.alias?a.alias:a.name,t+=n.alias,t+=" ( ".concat(r," )")}(e)}var Se=function(e){var t=e.tournament;return t?r.a.createElement("h3",null,r.a.createElement("p",null,r.a.createElement("b",null,'Torneo "',r.a.createElement("strong",null,null===t||void 0===t?void 0:t.name.toUpperCase()),'" ( ',null===t||void 0===t?void 0:t.id," )",r.a.createElement("small",null," - ",null===t||void 0===t?void 0:t.progress)))):null},ke=a(49),Ne=function(e){var t=e.addRow,a=e.optionsLength,n=a-1,o=n<8?8-n:0;return a?n>=8?r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null," Aggiungi le coppie per questo torneo..."),r.a.createElement(O.a,{variant:"success",onClick:t},"Aggiungi Coppia")):r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"Ci sono solo ",n," giocatori definiti ma devono essercene almeno 8 per poter formare un torneo."),r.a.createElement("p",null,1===o?"Devi creare un altro giocatore...":"Devi creare almeno altri ".concat(o)),r.a.createElement(ke.b,{to:"/player"},r.a.createElement(O.a,{variant:"success"},"Gestione Giocatori"))):null},Te=(a(220),function(e){var t=Object(s.i)().tId,a=Object(s.g)(),o=Object(n.useState)({state:!1,message:"Caricamento"}),c=Object(l.a)(o,2),i=c[0],u=c[1],d=Object(n.useState)(""),p=Object(l.a)(d,2),m=p[0],f=p[1],h=Object(n.useState)(""),y=Object(l.a)(h,2),E=y[0],w=y[1],j=Object(n.useState)(""),x=Object(l.a)(j,2),C=x[0],S=x[1],k=Object(n.useState)({tournament:null,rows:[],players:[]}),N=Object(l.a)(k,2),F=N[0],A=N[1],P=Object(n.useState)([]),R=Object(l.a)(P,2),z=R[0],L=R[1],D=Object(n.useState)(0),G=Object(l.a)(D,2),J=G[0],B=G[1],_=Object(n.useState)(0),V=Object(l.a)(_,2),q=V[0],K=V[1];function X(e){u({state:!1,message:e}),S(e),setTimeout((function(){return S("")}),5e3)}function Y(e){u({state:!1,message:e}),f(e),setTimeout((function(){return f("")}),5e3)}function $(e){return Q.apply(this,arguments)}function Q(){return(Q=Object(g.a)(b.a.mark((function e(a){var n,r,o;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,u({state:!0,message:"Aggiunta riga in corso"}),(n=Oe()).tId=t,e.next=6,fetch("/api/pair",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});case 6:return r=e.sent,e.next=9,r.json();case 9:o=e.sent,n.id=o.id,n.rowNumber=a||F.rows.length+1,A((function(e){return{tournament:e.tournament,rows:[n].concat(Object(v.a)(e.rows)),players:e.players}})),Y("Riga aggiunta"),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),X("Errore aggiunta riga");case 19:case"end":return e.stop()}}),e,null,[[0,16]])})))).apply(this,arguments)}function Z(){return(Z=Object(g.a)(b.a.mark((function e(){var t,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=F.rows.length+1,a=0;case 2:if(!(a<q)){e.next=9;break}return e.next=5,$(t);case 5:t++;case 6:a++,e.next=2;break;case 9:K(0);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ee(){return(ee=Object(g.a)(b.a.mark((function e(){var t,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,u({state:!0,message:z.length>1?"Cancellazione righe in corso":"Cancellazione riga in corso"}),t=[],z.forEach((function(e){e.player1.id&&t.push(e.player1),e.player2.id&&t.push(e.player2)})),t&&A((function(e){return{tournament:e.tournament,rows:e.rows,players:[].concat(t,Object(v.a)(e.players)).sort((function(e,t){return e.alias.localeCompare(t.alias)}))}})),e.next=7,fetch("/api/pair",{method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify(z)});case 7:return a=e.sent,e.next=10,a.json();case 10:A((function(e){return{tournament:e.tournament,rows:e.rows.filter((function(e){return!z.find((function(t){return t.id===e.id}))})),players:e.players}})),Y(z.length>1?"Righe cancellate":"Riga cancellata"),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),X("Errore cancellazione riga");case 17:L([]);case 18:case"end":return e.stop()}}),e,null,[[0,14]])})))).apply(this,arguments)}function ae(e,t){e&&e.id?t.id?A((function(a){return{tournament:a.tournament,rows:a.rows,players:[].concat(Object(v.a)(a.players.filter((function(e){return e.id!==t.id}))),[e]).sort((function(e,t){return e.alias.localeCompare(t.alias)}))}})):A((function(t){return{tournament:t.tournament,rows:t.rows,players:[].concat(Object(v.a)(t.players),[e]).sort((function(e,t){return e.alias.localeCompare(t.alias)}))}})):t.id&&A((function(e){return{tournament:e.tournament,rows:e.rows,players:e.players.filter((function(e){return e.id!==t.id}))}}))}Object(n.useEffect)((function(){Object(g.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=A,e.next=3,je(t);case 3:return e.t1=e.sent,e.abrupt("return",(0,e.t0)(e.t1));case 5:case"end":return e.stop()}}),e)})))()}),[t]);var ne=function(e,t){L((function(a){var n=!!a.find((function(t){return t.id===e.id}));return t?n?a:[e].concat(Object(v.a)(a)):n?a.filter((function(t){return t.id!==e.id})):a}))};var re={mode:"checkbox",onSelect:ne,onSelectAll:function(e,t){return t.forEach((function(t){return ne(t,e)}))},style:{backgroundColor:"#c8e6c9"}};function oe(){return(oe=Object(g.a)(b.a.mark((function e(){var a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,u({state:!0,message:"Cancellazione in corso"}),e.next=4,fetch("/api/stage1",{method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify({tId:t})});case 4:return a=e.sent,e.next=7,a.json();case 7:F.tournament.progress=T,fetch("/api/tournament",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(F.tournament)}),Y("Cancellazione completata"),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),X("Errore cancellazione Fase 1");case 15:case"end":return e.stop()}}),e,null,[[0,12]])})))).apply(this,arguments)}function ce(){return(ce=Object(g.a)(b.a.mark((function e(){var t,a,n,r,o,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(J){e.next=4;break}return S("Specificare il numero di gironi da assegnare"),setTimeout((function(){return S("")}),5e3),e.abrupt("return");case 4:u({state:!0,message:"Aggiornamento in corso"}),t=0,a="abcdefghijklmnopqrstuvwxyz".toUpperCase().split(""),n=[],e.t0=b.a.keys(F.rows);case 9:if((e.t1=e.t0()).done){e.next=30;break}return r=e.t1.value,o=F.rows[r],t==J&&(t=0),o.stage1Name=a[t],t++,e.prev=15,e.next=18,fetch("/api/pair",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)});case 18:return c=e.sent,e.next=21,c.json();case 21:n.push(o),e.next=28;break;case 24:e.prev=24,e.t2=e.catch(15),X("Errore"),n.push(o);case 28:e.next=9;break;case 30:Y("Gironi assegnati correttamente"),A((function(e){return{tournament:e.tournament,rows:n,players:e.players}}));case 32:case"end":return e.stop()}}),e,null,[[15,24]])})))).apply(this,arguments)}var de=Math.floor(F.players.length-1-F.rows.reduce((function(e,t){return t.player1||t.player2?t.player1&&t.player2?t.player1.id||t.player2.id?t.player1.id&&t.player2.id?e:e+1:e+2:e+1:e+2}),0))/2,be=!(z.length>0)||"Stage1"===F.tournament.progress||"Stage2"===F.tournament.progress;return console.log("render table : ",F),r.a.createElement(r.a.Fragment,null,r.a.createElement(M.a,null,r.a.createElement(ie,{show:i.state,message:i.message}),r.a.createElement(H.a,{style:{margin:"10px"},md:{span:1}},r.a.createElement(M.a,null,r.a.createElement(W.a,null,r.a.createElement(W.a.Item,{action:!0,variant:"primary",onClick:function(){if(F.rows.length<4)return S("Numero di coppie insufficente. Devi formare almeno 4 coppie"),void setTimeout((function(){return S("")}),5e3);var e=F.rows.filter((function(e){return!e.stage1Name||""===e.stage1Name})).map((function(e){return e.rowNumber}));if(0!==e.length)return S("Assegna  ".concat(1===e.length?"la riga ":"le righe "," ").concat(e," ad un girone per procedere ")),void setTimeout((function(){return S("")}),5e3);var n=F.rows.filter((function(e){return null===e.player1.id||null===e.player2.id})).map((function(e){return e.rowNumber}));if(0!==n.length)return S("Assegna  i giocatori ".concat(1===n.length?"alla riga ":"alle righe "," ").concat(n," per procedere ")),void setTimeout((function(){return S("")}),5e3);t||(S("Id torneo mancante. Verrai inviato alla Home tra 5 secondi...."),setTimeout((function(){S(""),a.push("/")}),5e3));var r=[],o=F.rows.reduce((function(e,t){return t.stage1Name in e?e[t.stage1Name]++:e[t.stage1Name]=1,e}),{});for(var c in o)o[c]<=3&&r.push(c);if(r.length>0)return S(1===r.length?"Il torneo ".concat(r," deve contenere almeno ").concat(4," coppie"):"I torneI ".concat(r," devono contenere almeno ").concat(4," coppie")),void setTimeout((function(){S("")}),5e3);F.tournament.progress=I,fetch("/api/tournament",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(F.tournament)}),a.push("/stage1/".concat(t))}},"Prosegui"),r.a.createElement(W.a.Item,{action:!0,variant:"secondary",onClick:function(){a.push("/")}},"Home"),r.a.createElement(W.a.Item,{action:!0,variant:"success",onClick:function(){return $()},disabled:de<=0},"Aggiungi Coppia"),r.a.createElement(pe.a,{placement:"right",key:"rigth",overlay:r.a.createElement(me.a,null,be?"Prima devi resettare i gironi":"Elimina le coppie selezionate")},r.a.createElement("span",{className:"d-inline-block"},r.a.createElement(W.a.Item,{action:!0,variant:"danger",onClick:function(){return ee.apply(this,arguments)},style:{pointerEvents:"none"},disabled:be},"Elimina Coppia"))),r.a.createElement(W.a.Item,{action:!0,variant:"danger",onClick:function(){return oe.apply(this,arguments)}},"Reset gironi")))),r.a.createElement(H.a,{style:{margin:"10px"}},r.a.createElement(M.a,null,r.a.createElement(fe.a,{onChange:function(e){return B(e.target.value)}},r.a.createElement(fe.a.Prepend,null,r.a.createElement(fe.a.Text,null,"Assegna gironi automaticamente")),r.a.createElement(he.a,{placeholder:F.rows.length<4?"Inserisci almeno 4 coppie":"Numero di gironi ( max ".concat(Math.floor(F.rows.length/4)," )"),"aria-label":"Numero di gironi",disabled:F.rows.length<4}),r.a.createElement(fe.a.Append,null,r.a.createElement(O.a,{variant:"primary",onClick:function(){return ce.apply(this,arguments)},disabled:!J||J>Math.floor(F.rows.length/4)||F.rows.length<4},"Esegui"))),r.a.createElement(fe.a,{onChange:function(e){return K(e.target.value)}},r.a.createElement(fe.a.Prepend,null,r.a.createElement(fe.a.Text,null,"Aggiunti N nuove coppie")),r.a.createElement(he.a,{disabled:de<=0,placeholder:de<=0?"Numero massimo di coppie gia creato":"Numero di coppie da aggiungere ( max ".concat(de," )"),"aria-label":"Numero di coppie",value:q||""}),r.a.createElement(fe.a.Append,null,r.a.createElement(O.a,{variant:"primary",onClick:function(e){return K(de)},disabled:q>de},"Max"),r.a.createElement(O.a,{variant:"primary",onClick:function(){return Z.apply(this,arguments)},disabled:!q||q>de},"Esegui")))),r.a.createElement(M.a,null,r.a.createElement(U.a,{bootstrap4:!0,keyField:"id",data:F.rows,columns:Ee((function(e,t,a){var n=F.rows.map((function(n){if(n.id===t){var r=n;return 1===a?e.id&&r.player2&&r.player2.id===e.id?(r.player1=te(),w("Attenzione : Non puoi selezionare lo stesso giocare ! "),setTimeout((function(){return w("")}),5e3)):(ae(r.player1,e),r.player1=e):e.id&&r.player1&&r.player1.id===e.id?(r.player2=te(),w("Attenzione : Non puoi selezionare lo stesso giocare ! "),setTimeout((function(){return w("")}),5e3)):(ae(r.player2,e),r.player2=e),fetch("/api/pair",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)}),r}return n}));A((function(e){return{tournament:e.tournament,rows:n,players:e.players}}))}),F.players),cellEdit:we,selectRow:re,noDataIndication:r.a.createElement(Ne,{addRow:function(){return $()},optionsLength:F.players.length}),caption:r.a.createElement(Se,{tournament:F.tournament}),wrapperClasses:"player-table",headerClasses:"player-table-header",striped:!0,hover:!0}))),r.a.createElement(H.a,{style:{margin:"10px"},md:2},r.a.createElement(le,{message:m}),r.a.createElement(se,{message:E}),r.a.createElement(ue,{message:C}))))}),Ie=function(e){var t=e.title,a=e.saved,n={color:a?"#4feb34":void 0};return r.a.createElement("h3",null,r.a.createElement("b",{style:n},"Girone - ",r.a.createElement("strong",null,t)),a?r.a.createElement("small",null," - Salvataggio in corso..."):null)},Fe=r.a.forwardRef((function(e,t){var a=Object(n.useState)([]),o=Object(l.a)(a,2),c=o[0],i=o[1],s=Object(n.useState)(),u=Object(l.a)(s,2),d=u[0],p=u[1],m=e.row,f=e.columnIndex,h=e.id,b=e.onUpdate,g=e.onSelect,v=e.tId;return Object(n.useEffect)((function(){return xe(i,v)}),[v]),r.a.createElement(be.a,{options:c,onChange:function(e){e.pairId=h,p(e);var t=Ce(e);b(t),g(e,m.id,f)},value:d,placeholder:"Cerca...",isSearchable:!0,isClearable:!0})}));var Ae=function(e,t){for(var a,n=[{id:"pairLabel",dataField:"pair.label",text:"Nome Coppia",editable:!1,align:function(e,t,a,n){return"center"},headerAlign:function(e,t){return"center"},editorRenderer:function(a,n,o,c,i,l){return r.a.createElement(Fe,Object.assign({},a,{id:l,row:o,rowIndex:i,columnIndex:l,value:n,onSelect:e,tId:t[0].tId}))}},{id:"rowNumber",dataField:"rowNumber",text:"ID",editable:!1,type:"number",headerAlign:function(e,t){return"center"},style:function(e,t,a,n){return{backgroundColor:"#f9ffdb"}}}],o=0;o<t.length;o++)n.push({id:"col".concat(a=o+1),dataField:"col".concat(a),text:a.toString(),type:"number",headerAlign:function(e,t){return"center"},editable:function(e,t,a,n){return a!==n-2},align:function(e,t,a,n){return"center"},style:function(e,t,a,n){return a===n-2?{backgroundColor:"#6d706e"}:3===parseInt(e,10)||2===parseInt(e,10)?{backgroundColor:"rgb(196, 247, 160)"}:1===parseInt(e,10)||0===parseInt(e,10)?{backgroundColor:"rgb(255, 147, 147)"}:null},editor:{type:Y.Type.SELECT,options:[{value:"3",label:"3"},{value:"2",label:"2"},{value:"1",label:"1"},{value:"0",label:"0"},{value:null,label:""}]}});return n.push({id:"totale",dataField:"total",text:"Totale",editable:!1,type:"number",headerAlign:function(e,t){return"center"}},{id:"place",dataField:"place",text:"Posizione",editable:!0,type:"number",headerAlign:function(e,t){return"center"}}),n};function Pe(e,t){return e.total===t.total?3===e["col".concat(t.rowNumber)]||2===e["col".concat(t.rowNumber)]?-1:1:t.total-e.total}a(222);var Re=function(e){var t=e.rows,a=e.columns,o=e.tableName,c=e.updateCellValue,i=e.saved,s=Object(n.useState)([]),u=Object(l.a)(s,2),d=u[0],p=u[1],m=$()({mode:"click",blurToSave:!0,beforeSaveCell:function(e,a,n,r){r.id.startsWith("col")&&(t[parseInt(r.text)-1]["col".concat(n.rowNumber)]=function(e){if(null===e)return null;switch(e){case 3:return 0;case 2:return 1;case 1:return 2;case 0:return 3;default:return null}}(a),Object(v.a)(t).sort((function(e,t){return Pe(e,t)})).forEach((function(e,a){return t[e.rowNumber-1].place=a+1})))},afterSaveCell:function(e,a,n,r){if(r.id.startsWith("col")){c(e,a,n,r);var o=0;for(var i in n)i.startsWith("col")&&(o+=n[i]);for(var l in t[n.rowNumber-1].total=o||null,o=0,t[parseInt(r.text)-1])l.startsWith("col")&&(o+=t[parseInt(r.text)-1][l]);t[parseInt(r.text)-1].total=o||null}}}),f=function(e,t){return p((function(){var a=!!d.find((function(t){return t.rowNumber===e.rowNumber}));return t?a?d:[e].concat(Object(v.a)(d)):a?d.filter((function(t){return t.rowNumber!==e.rowNumber})):d})),!0},h={mode:"checkbox",onSelect:f,onSelectAll:function(e,t){return t.forEach((function(t){return f(t,e)}))},style:{backgroundColor:"#c8e6c9"}};return r.a.createElement(r.a.Fragment,null,r.a.createElement(U.a,{bootstrap4:!0,keyField:"id",data:t,columns:a,selectRow:h,cellEdit:m,noDataIndication:"Nessun dato reperito",wrapperClasses:"player-table",headerClasses:"player-table-header",caption:r.a.createElement(Ie,{title:o,saved:i}),striped:!0,hover:!0}))},ze=function(e){var t,a,o=e.pairsList,c=Object(n.useState)(!1),i=Object(l.a)(c,2),s=i[0],u=i[1],d=Object(n.useState)(!1),p=Object(l.a)(d,2),m=p[0],f=p[1],h=Object(n.useState)(function(e){for(var t=[],a=0;a<e.length;a++){t.push({pair:e[a],rowNumber:a+1});for(var n=1;n<=e.length;n++)t[a]["col".concat(n)]=null;t[a].total=0,t[a].place=0,t[a].id="row-".concat(e[0].tId,"-").concat(a)}return t}(o)),y=Object(l.a)(h,2),E=y[0],w=y[1],O=null!==(t=null===(a=o[0])||void 0===a?void 0:a.stage1Name)&&void 0!==t?t:"Not found",j=function(){var e=Object(g.a)(b.a.mark((function e(t,a,n,r){var o,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o={tId:n.pair.tId,tableName:O,score:a,pair1Id:n.pair.id,pair2Id:E[parseInt(r.text)-1].pair.id},e.next=3,fetch("/api/stage1/cell",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)});case 3:return c=e.sent,e.next=6,c.json();case 6:c.ok&&(f(!0),setTimeout((function(){return f(!1)}),3e3));case 7:case"end":return e.stop()}}),e)})));return function(t,a,n,r){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){(function(){var e=Object(g.a)(b.a.mark((function e(){var t,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u(!0),e.next=3,fetch("/api/stage1",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({rows:E,stageName:O})});case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,Object(v.a)(a).sort((function(e,t){return Pe(e,t)})).forEach((function(e,t){return a[e.rowNumber-1].place=t+1})),w(a),u(!1);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);return r.a.createElement(r.a.Fragment,null,s?r.a.createElement("h3",null,"Caricamento girone ",r.a.createElement("b",null,O)," in corso...."):r.a.createElement(Re,{rows:E,columns:Ae((function(){"1"===O&&console.log("onSelect ")}),o),tableName:O,updateCellValue:j,saved:m}))};var Le=[{path:"/",label:"Home",exact:!0,component:R,visible:!0,index:0},{path:"/tournament/:tId",label:"Selezione Coppie",exact:!0,component:Te,visible:!1,index:10},{path:"/stage1/:tId",label:"Torneo fase 1",exact:!0,component:function(e){var t=Object(s.i)().tId,a=Object(n.useState)([]),o=Object(l.a)(a,2),c=o[0],i=o[1],u=Object(s.g)();return Object(n.useEffect)((function(){return xe(i,t)}),[t]),c.sort((function(e,t){return e.stage1Name.localeCompare(t.stage1Name)})),r.a.createElement(r.a.Fragment,null,r.a.createElement(W.a.Item,{key:"stage-button"},r.a.createElement(O.a,{variant:"secondary",onClick:function(){u.push("/tournament/".concat(t))}},"Gestione Coppie")),function(e,t){var a="",n=[],o=[];e.forEach((function(e,t){""===a&&(a=e.stage1Name),a!==e.stage1Name&&(o.push(r.a.createElement(W.a.Item,{key:"stage-".concat(a)},r.a.createElement(ze,{pairsList:n}))),a=e.stage1Name,n=[]),n.push(e)})),n.length>0&&o.push(r.a.createElement(W.a.Item,{key:"stage-".concat(a)},r.a.createElement(ze,{pairsList:n})));return r.a.createElement(W.a,{variant:"flush"},o)}(c))},visible:!1,index:20},{path:"/player",label:"Gestione Giocatori",exact:!0,component:de,visible:!0,index:30},{path:"/stage2/:tId",label:"Torneo fase 2",exact:!0,component:function(e){for(var t={flexDirection:"column",alignItems:"stretch"},a={display:"flex",flexDirection:"column",justifyContent:"center",alignContent:"space-around"},n=[],o=0;o<=4;o++){for(var c=[],i=0;i<Math.pow(2,o);i++)c.push(r.a.createElement(W.a.Item,{key:"item-".concat(o,"-").concat(i),style:t},r.a.createElement(fe.a,null,r.a.createElement(he.a,{placeholder:"".concat(o,"-").concat(i)}))));n.push(r.a.createElement(W.a.Item,{key:"col-".concat(o),style:a},r.a.createElement(W.a,{variant:"flush"},c)))}return r.a.createElement(W.a,{variant:"flush",id:"outer-container",style:{flexDirection:"row-reverse"}},n)},visible:!1,index:40},{path:"*",label:"Not Found",exact:!1,component:function(e){var t=Object(s.h)();return r.a.createElement("div",null,r.a.createElement("h1",null,"Current Ruote : ",r.a.createElement("code",null,t.pathname)))},visible:!1,index:1e3}],De=Le;a(223);var Ge=a(236),Je=function(){return r.a.createElement(Ge.a,{bg:"ligth",variant:"light",className:"navbar-container"},r.a.createElement("ul",{className:"navbar-list"},De.map((function(e){return e.visible?r.a.createElement("li",{key:"li-".concat(e.index),className:"navbar-list-item"},r.a.createElement(ke.b,{key:"link-".concat(e.index),to:e.path},e.label)):null}))))},Be=a(232),Me=function(e){var t=p(),a=Object(l.a)(t,2),n=a[0],o=a[1],c={isAuthenticated:!!n.isAuthenticated,authenticationPath:"/login",redirectPathOnAuthentication:n.redirectPathOnAuthentication||"",setRedirectPathOnAuthentication:function(e){o(Object(i.a)({},n,{redirectPathOnAuthentication:e}))}};return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"app-header"},r.a.createElement("p",null,"Calcetto C.S.M"),r.a.createElement(Je,null)),r.a.createElement("br",null),r.a.createElement(Be.a,{fluid:!0},r.a.createElement(s.d,null,r.a.createElement(s.b,{path:"/login",component:f}),De.map((function(e){return r.a.createElement(m,Object.assign({},e,c,{key:e.index}))})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(ke.a,null,r.a.createElement((function(e){var t=Object(n.useState)(u),a=Object(l.a)(t,2),o=[a[0],a[1]];return r.a.createElement(d.Provider,{value:o},e.children)}),null,r.a.createElement(Me,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[124,1,2]]]);
//# sourceMappingURL=main.68ae0d8a.chunk.js.map