(this.webpackJsonpcalcetto=this.webpackJsonpcalcetto||[]).push([[0],{120:function(e,t,a){e.exports=a(219)},125:function(e,t,a){},131:function(e,t,a){},209:function(e,t,a){},216:function(e,t,a){},217:function(e,t,a){},218:function(e,t,a){},219:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(22),c=a.n(o),i=(a(125),a(126),a(75)),l=a(11),u=a(15),s={},d=Object(n.createContext)([s,function(){}]),p=function(){return Object(n.useContext)(d)},m=function(e){var t=Object(u.h)(),a=e.redirectPathOnAuthentication;if(console.log("ProtectedRoute...."),e.isAuthenticated||(e.setRedirectPathOnAuthentication(t.pathname),a=e.authenticationPath),a===t.pathname||e.isAuthenticated)return n.createElement(u.b,e);return n.createElement(u.b,Object.assign({},e,{component:function(){return n.createElement(u.a,{to:{pathname:a}})},render:void 0}))},f=(a(131),function(){var e=p(),t=Object(l.a)(e,2),a=t[0],n=t[1],o=Object(u.g)();return r.a.createElement("button",{onClick:function(){n(Object(i.a)({},a,{isAuthenticated:!0})),o.push("/")}},"Login")}),h=a(9),b=a.n(h),g=a(13),v=a(24),y=a(106),E=a(10),w=a(232),O=a(228),j=a(221);function x(){var e=new Date,t=String(e.getDate()).padStart(2,"0"),a=String(e.getMonth()+1).padStart(2,"0"),n=e.getFullYear();return"".concat(n,"-").concat(a,"-").concat(t)}var C,S,k,N,T=function(e){return r.a.createElement("div",null,r.a.createElement(E.z.IndicatorsContainer,e))},I={alignSelf:"stretch",backgroundColor:"green",marginBottom:8,marginTop:8,marginRigth:10,width:1},F=function(e){var t=e.innerProps;return r.a.createElement("span",Object.assign({style:I},t))},A={width:"50%",margin:"auto"},R=function(){var e=Object(n.useState)(x()),t=Object(l.a)(e,2),a=t[0],o=t[1],c=Object(n.useState)([]),i=Object(l.a)(c,2),s=i[0],d=i[1],p=Object(u.g)();Object(n.useEffect)((function(){return e=d,t=o,void Object(g.a)(b.a.mark((function a(){var n,r,o,c;return b.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,fetch("/api/tournament/list",{method:"GET",headers:{"Content-Type":"application/json"}});case 2:return n=a.sent,a.next=5,n.json();case 5:r=a.sent,o=!1,c=r.map((function(e){return e.name===x()&&(o=!0),{id:e.id,value:e.name,label:e.name}})),o||c.unshift({id:null,value:x(),label:x()}),c.sort(),e(c),t&&t(c[0]);case 12:case"end":return a.stop()}}),a)})))();var e,t}),[]);var m=function(){var e=Object(g.a)(b.a.mark((function e(t){var n,r,o;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n={name:a.value,ownerId:1,progress:"WIP",public:!0},e.next=4,fetch("/api/tournament",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});case 4:return r=e.sent,e.next=7,r.json();case 7:(o=e.sent).message&&console.log(o.message),p.push("/tournament/".concat(o.id));case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(w.a,{style:A},r.a.createElement(w.a.Body,null,r.a.createElement(w.a.Title,null,"Scegli un torneo"),r.a.createElement(O.a,{onSubmit:m},r.a.createElement(y.a,{components:{IndicatorSeparator:F,IndicatorsContainer:T},value:a,options:s,placeholder:"Scrivi qualcosa",isSearchable:!0,isClearable:!0,onChange:function(e){return o(e)},onCreateOption:function(e){o({value:e,label:e}),d((function(t){return[].concat(Object(v.a)(t),[{value:e,label:e}])}))}}),r.a.createElement("br",null),r.a.createElement(j.a,{type:"submit",size:"lg",variant:"outline-warning",disabled:!a},"Continua"))))},P=a(110),z=a(111),L=a(118),D=a(112),G=a(57),_=a(119),B=a(224),J=a(109),H=a(230),M=a(54),W=a.n(M),U=a(51),V=a.n(U),q=a(113),K=a.n(q),X=a(29),Y=a.n(X);a(209);function $(){C(""),S(""),k(""),N("")}var Q=[{dataField:"id",text:"ID",editable:!1},{dataField:"name",text:"Nome",headerClasses:"player-table-header-element",autoSelectText:!0,filter:Object(U.textFilter)({placeholder:"Filtra...",getFilter:function(e){return C=e}})},{dataField:"surname",text:"Cognome",headerClasses:"player-table-header-element",autoSelectText:!0,filter:Object(U.textFilter)({placeholder:"Filtra...",getFilter:function(e){return S=e}})},{dataField:"alias",text:"Alias",headerClasses:"player-table-header-element",autoSelectText:!0,filter:Object(U.textFilter)({placeholder:"Filtra...",getFilter:function(e){return k=e}})},{dataField:"role",text:"Roulo",headerClasses:"player-table-header-element",filter:Object(U.selectFilter)({placeholder:"Filtra...",options:{0:"Portiere",1:"Attaccante",2:"Master"},getFilter:function(e){return N=e}}),editor:{type:X.Type.SELECT,getOptions:function(e,t){t.row,t.column;return[{value:0,label:"Portiere"},{value:1,label:"Attaccante"},{value:2,label:"Master"}]}}},{dataField:"match_played",text:"Partite Giocate",hidden:!0},{dataField:"match_won",text:"Vittorie",hidden:!0},{dataField:"total_score",text:"Punteggio",hidden:!0}];function Z(e){return e?e.alias?e.alias:e.surname?"".concat(e.name," - ").concat(e.surname):e.name:""}var ee=function(e){return r.a.createElement("h3",null,r.a.createElement("b",null,"Gestione giocatori"))},te=a(227),ae=a(222),ne=a(229),re=a(223),oe=function(e){var t=e.message,a=e.show,n=e.onHide,o=void 0===n?function(){return a=!1}:n;return r.a.createElement(te.a,{show:a,onHide:o,size:"xl",centered:!0},r.a.createElement(te.a.Header,{closeButton:!0},r.a.createElement(te.a.Title,null,"Caricamento....")),r.a.createElement(te.a.Body,null,t),r.a.createElement(te.a.Footer,null,r.a.createElement(ae.a,{animation:"border",variant:"light"}),r.a.createElement(ae.a,{animation:"border",variant:"primary"}),r.a.createElement(ae.a,{animation:"border",variant:"secondary"}),r.a.createElement(ae.a,{animation:"border",variant:"success"}),r.a.createElement(ae.a,{animation:"border",variant:"danger"}),r.a.createElement(ae.a,{animation:"border",variant:"warning"}),r.a.createElement(ae.a,{animation:"border",variant:"info"}),r.a.createElement(ae.a,{animation:"border",variant:"dark"})))},ce=function(e){var t=e.message;return t&&""!==t?r.a.createElement(ne.a,{className:"rounded mr-2",key:"success-message",show:""!==t},r.a.createElement(ne.a.Header,{closeButton:!1},r.a.createElement("strong",null,"Operazione completata !")),r.a.createElement(ne.a.Body,null,r.a.createElement(re.a,{variant:"success"},t))):null},ie=function(e){var t=e.message;return t&&""!==t?r.a.createElement(ne.a,{className:"rounded mr-2",key:"warning-message",show:""!==t},r.a.createElement(ne.a.Header,{closeButton:!1},r.a.createElement("strong",null,"Operazione completata !")),r.a.createElement(ne.a.Body,null,r.a.createElement(re.a,{variant:"warning"},t))):null},le=function(e){var t=e.message;return t&&""!==t?r.a.createElement(ne.a,{className:"rounded mr-2",key:"error-message",show:""!==t},r.a.createElement(ne.a.Header,{closeButton:!1},r.a.createElement("strong",null,"Operazione completata !")),r.a.createElement(ne.a.Body,null,r.a.createElement(re.a,{variant:"danger"},t))):null},ue=function(e){function t(e){var a;return Object(P.a)(this,t),(a=Object(L.a)(this,Object(D.a)(t).call(this,e))).handleOnSelect=function(e,t){return a.setState((function(a){var n=a.selectedRows,r=!!n.find((function(t){return t.id===e.id}));return t?r?{selectedRows:n}:{selectedRows:[e].concat(Object(v.a)(n))}:r?{selectedRows:n.filter((function(t){return t.id!==e.id}))}:{selectedRows:n}})),!0},a.cellEditProps=Y()({mode:"click",blurToSave:!0,autoSelectText:!0,afterSaveCell:function(e,t,a,n){Object(g.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/player",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)});case 2:return t=e.sent,e.next=5,t.json();case 5:case"end":return e.stop()}}),e)})))()}}),a.state={rows:[],selectedRows:[],isLoading:!1},a.handleOnSelect=a.handleOnSelect.bind(Object(G.a)(a)),a.deleteRow=a.deleteRow.bind(Object(G.a)(a)),a.addRow=a.addRow.bind(Object(G.a)(a)),a}return Object(_.a)(t,e),Object(z.a)(t,[{key:"componentDidMount",value:function(){var e=Object(g.a)(b.a.mark((function e(){var t=this;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.setState({isLoading:!0},(function(){return Object(g.a)(b.a.mark((function e(){var a,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/player/list",{method:"GET",headers:{"Content-Type":"application/json"}});case 2:return a=e.sent,e.next=5,a.json();case 5:n=e.sent,t.setState({isLoading:!1,rows:n});case 7:case"end":return e.stop()}}),e)})))()}));case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"addRow",value:function(){var e=this;this.setState({isLoading:!0},(function(){return Object(g.a)(b.a.mark((function t(){var a,n,r;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a={id:null,name:"",surname:"",alias:"",role:"",match_played:0,match_won:0,total_score:0,editable:!0},t.next=3,fetch("/api/player",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)});case 3:return n=t.sent,t.next=6,n.json();case 6:r=t.sent,e.setState((function(e){return{rows:[r].concat(Object(v.a)(e.rows)),isLoading:!1}}));case 8:case"end":return t.stop()}}),t)})))()}))}},{key:"deleteRow",value:function(){var e=this,t=this.state.selectedRows;t&&this.setState({isLoading:!0},(function(){return Object(g.a)(b.a.mark((function a(){var n;return b.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,fetch("/api/player",{method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});case 2:return n=a.sent,a.next=5,n.json();case 5:a.sent,e.setState((function(e){return{rows:e.rows.filter((function(e){return!t.find((function(t){return t.id===e.id}))})),selectedRows:[],isLoading:!1}}));case 7:case"end":return a.stop()}}),a)})))()}))}},{key:"render",value:function(){var e=this,t=this.state,a=this.deleteRow,n=this.addRow,o=t.rows,c=t.isLoading,i={mode:"checkbox",nonSelectable:o.filter((function(e){return!e.editable})).map((function(e){return e.id})),onSelect:this.handleOnSelect,onSelectAll:function(t,a){return a.forEach((function(a){return e.handleOnSelect(a,t)}))},style:{backgroundColor:"#c8e6c9"},selectColumnStyle:function(e){e.checked,e.disabled;var t=e.rowIndex;e.rowKey;return o[t].editable?{backgroundColor:"#28a745"}:{backgroundColor:"#dc3545"}}};return r.a.createElement(r.a.Fragment,null,r.a.createElement(oe,{show:c,message:"Caricamento"}),r.a.createElement(B.a,null,r.a.createElement(J.a,null,r.a.createElement(K.a,{keyField:"id",data:o,columns:Q,exportCSV:!0},(function(t){return r.a.createElement(r.a.Fragment,null,r.a.createElement(H.a,{horizontal:!0},r.a.createElement(j.a,{variant:"success",onClick:n},"Aggiungi giocatore"),r.a.createElement(j.a,{variant:"danger",onClick:a},"Calcella giocatore"),r.a.createElement(j.a,{variant:"dark",onClick:$.bind(e)},"Pulisci Filtri")),r.a.createElement(W.a,{wrapperClasses:"player-table",keyField:"id",data:o,columns:Q,cellEdit:e.cellEditProps,selectRow:i,caption:r.a.createElement(ee,null),filter:V()(),headerClasses:"player-table-header",noDataIndication:"Nessun dato reperito",striped:!0,hover:!0,bootstrap4:!0}))})))))}}]),t}(r.a.Component),se=a(225),de=a(108),pe=a(62),me=a(117),fe=Object(me.a)(),he=r.a.forwardRef((function(e,t){var a=Object(n.useState)(),o=Object(l.a)(a,2),c=o[0],i=o[1],u=e.row,s=e.columnIndex,d=e.id,p=(e.onUpdate,e.onSelect),m=e.options;return r.a.createElement(pe.a,{components:fe,options:m,onChange:function(e){e.pairId=d,i(e);Z(e);p(e,u.id,s)},value:c,placeholder:"Cerca...",isSearchable:!0,isClearable:!0})})),be=function(e,t){return[{dataField:"id",text:"ID",editable:!1,hidden:!0,align:function(){return"center"}},{dataField:"rowNumber",text:"ID",editable:!1,align:function(){return"center"}},{dataField:"player1.alias",text:"Giocatore 1",align:function(){return"center"},editorRenderer:function(a,n,o,c,i,l){return r.a.createElement(he,Object.assign({},a,{id:l,row:o,rowIndex:i,columnIndex:l,value:n,onSelect:e,options:t}))}},{dataField:"player2.alias",text:"Giocatore 2",align:function(){return"center"},editorRenderer:function(a,n,o,c,i,l){return r.a.createElement(he,Object.assign({},a,{id:l,row:o,rowIndex:i,columnIndex:l,value:n,onSelect:e,options:t}))}},{dataField:"pairAlias",text:"Alias Coppia"},{dataField:"stage1Name",text:"Nome girone",align:function(){return"center"},editor:{type:X.Type.SELECT,options:"abcdefghijklmnopqrstuvwxyz".toUpperCase().split("").map((function(e){return{value:e,label:e}}))}},{dataField:"paid1",text:"Pagato 1",align:function(){return"center"},editor:{type:X.Type.CHECKBOX,value:"Si:No"},style:function(e,t,a,n){if("Si"!==e)return{backgroundColor:"#ffbf47"}}},{dataField:"paid2",text:"Pagato 2",align:function(){return"center"},editor:{type:X.Type.CHECKBOX,value:"Si:No"},style:function(e,t,a,n){if("Si"!==e)return{backgroundColor:"#ffbf47"}}}]},ge=Y()({mode:"click",blurToSave:!0,afterSaveCell:function(e,t,a,n){"player1.alias"!==n.dataField&&"player2.alias"!==n.dataField&&Object(g.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/pair",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)});case 2:return t=e.sent,e.next=5,t.json();case 5:case"end":return e.stop()}}),e)})))()}});var ve=function(){var e=Object(g.a)(b.a.mark((function e(t){var a,n,r,o,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/pair/list/?tId=".concat(t),{method:"GET",headers:{"Content-Type":"application/json"}});case 2:return a=e.sent,e.next=5,a.json();case 5:return n=e.sent,e.next=8,fetch(t?"/api/player/list/".concat(t):"/api/player/list",{method:"GET",headers:{"Content-Type":"application/json"}});case 8:return a=e.sent,e.next=11,a.json();case 11:return r=e.sent,o=[].concat(Object(v.a)(r),[{id:null,name:"",surname:"",alias:"",label:"Nessun Giocatore",role:"",match_played:0,match_won:0,total_score:0,editable:!1}]),e.next=15,fetch("/api/tournament/".concat(t),{method:"GET",headers:{"Content-Type":"application/json"}});case 15:return a=e.sent,e.next=18,a.json();case 18:return c=e.sent,e.abrupt("return",{rows:n,players:o,tournament:c});case 20:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ye=function(e,t){Object(g.a)(b.a.mark((function a(){var n,r;return b.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,fetch("/api/pair/list/?tId=".concat(t),{method:"GET",headers:{"Content-Type":"application/json"}});case 2:return n=a.sent,a.next=5,n.json();case 5:r=a.sent,e(r);case 7:case"end":return a.stop()}}),a)})))()};function Ee(e){return console.log("valueFormatter : ",e),e.pairAlias&&""!==e.pairAlias?"".concat(e.pairAlias," ( ").concat(e.id," )"):function(e){console.log("createAlias : ",e);var t="".concat(e.rowNumber," : "),a=e.player1,n=e.player2,r=e.id;return t+=a.alias?a.alias:a.name,t+=n.alias,t+=" ( ".concat(r," )")}(e)}var we=function(e){var t=e.tournament;return t?r.a.createElement("h3",null,r.a.createElement("p",null,r.a.createElement("b",null,'Torneo "',r.a.createElement("strong",null,null===t||void 0===t?void 0:t.name.toUpperCase()),'" ( ',null===t||void 0===t?void 0:t.id," )"))):null},Oe=a(47),je=function(e){var t=e.addRow,a=e.optionsLength,n=a-1,o=n<8?8-n:0;return a?n>=8?r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null," Aggiungi le coppie per questo torneo..."),r.a.createElement(j.a,{variant:"success",onClick:t},"Aggiungi Coppia")):r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"Ci sono solo ",n," giocatori definiti ma devono essercene almeno 8 per poter formare un torneo."),r.a.createElement("p",null,1===o?"Devi creare un altro giocatore...":"Devi creare almeno altri ".concat(o)),r.a.createElement(Oe.b,{to:"/player"},r.a.createElement(j.a,{variant:"success"},"Gestione Giocatori"))):null},xe=(a(216),function(e){var t=Object(n.useState)({state:!1,message:"Caricamento"}),a=Object(l.a)(t,2),o=a[0],c=a[1],i=Object(n.useState)(""),s=Object(l.a)(i,2),d=s[0],p=s[1],m=Object(n.useState)(""),f=Object(l.a)(m,2),h=f[0],y=f[1],E=Object(n.useState)(""),w=Object(l.a)(E,2),O=w[0],x=w[1],C=Object(n.useState)({tournament:null,rows:[],players:[]}),S=Object(l.a)(C,2),k=S[0],N=S[1],T=Object(n.useState)([]),I=Object(l.a)(T,2),F=I[0],A=I[1],R=Object(n.useState)(0),P=Object(l.a)(R,2),z=P[0],L=P[1],D=Object(n.useState)(0),G=Object(l.a)(D,2),_=G[0],M=G[1],U=Object(u.i)().tId,V=Object(u.g)();function q(e){c({state:!1,message:e}),x(e),setTimeout((function(){return x("")}),5e3)}function K(e){c({state:!1,message:e}),p(e),setTimeout((function(){return p("")}),5e3)}function X(){return Y.apply(this,arguments)}function Y(){return(Y=Object(g.a)(b.a.mark((function e(){var t,a,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,c({state:!0,message:"Aggiunta riga in corso"}),(t={id:null,rowNumber:null,tId:null,player1:{id:null,alias:"",name:"",surname:""},player2:{id:null,alias:"",name:"",surname:""},pairAlias:"",stage1Name:"",paid1:"No",paid2:"No"}).tId=U,e.next=6,fetch("/api/pair",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});case 6:return a=e.sent,e.next=9,a.json();case 9:n=e.sent,t.id=n.id,t.rowNumber=k.rows.length+1,N((function(e){return{tournament:e.tournament,rows:[t].concat(Object(v.a)(e.rows)),players:e.players}})),K("Riga aggiunta"),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),q("Errore aggiunta riga");case 19:case"end":return e.stop()}}),e,null,[[0,16]])})))).apply(this,arguments)}function $(){return($=Object(g.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=0;case 1:if(!(t<_)){e.next=7;break}return e.next=4,X();case 4:t++,e.next=1;break;case 7:M(0);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Q(){return(Q=Object(g.a)(b.a.mark((function e(){var t,a,n,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,c({state:!0,message:F.length>1?"Cancellazione righe in corso":"Cancellazione riga in corso"}),t=[],F.forEach((function(e){e.player1.id&&t.push(e.player1),e.player2.id&&t.push(e.player2)})),t&&N((function(e){return{tournament:e.tournament,rows:e.rows,players:[].concat(t,Object(v.a)(e.players)).sort((function(e,t){return e.alias.localeCompare(t.alias)}))}})),a={id:null,rowNumber:null,tId:null,player1:{id:null,alias:"",name:"",surname:""},player2:{id:null,alias:"",name:"",surname:""},pairAlias:"",stage1Name:"",paid1:"No",paid2:"No"},e.next=8,fetch("/api/pair",{method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify(F)});case 8:return n=e.sent,e.next=11,n.json();case 11:r=e.sent,a.id=r.id,N((function(e){return{tournament:e.tournament,rows:e.rows.filter((function(e){return!F.find((function(t){return t.id===e.id}))})),players:e.players}})),K(F.length>1?"Righe cancellate":"Riga cancellata"),e.next=20;break;case 17:e.prev=17,e.t0=e.catch(0),q("Errore cancellazione riga");case 20:A([]);case 21:case"end":return e.stop()}}),e,null,[[0,17]])})))).apply(this,arguments)}function Z(e,t){e&&e.id?t.id?N((function(a){return{tournament:a.tournament,rows:a.rows,players:[].concat(Object(v.a)(a.players.filter((function(e){return e.id!==t.id}))),[e]).sort((function(e,t){return e.alias.localeCompare(t.alias)}))}})):N((function(t){return{tournament:t.tournament,rows:t.rows,players:[].concat(Object(v.a)(t.players),[e]).sort((function(e,t){return e.alias.localeCompare(t.alias)}))}})):t.id&&N((function(e){return{tournament:e.tournament,rows:e.rows,players:e.players.filter((function(e){return e.id!==t.id}))}}))}Object(n.useEffect)((function(){Object(g.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=N,e.next=3,ve(U);case 3:return e.t1=e.sent,e.abrupt("return",(0,e.t0)(e.t1));case 5:case"end":return e.stop()}}),e)})))()}),[U]);var ee=function(e,t){A((function(a){var n=!!a.find((function(t){return t.id===e.id}));return t?n?a:[e].concat(Object(v.a)(a)):n?a.filter((function(t){return t.id!==e.id})):a}))};var te={mode:"checkbox",onSelect:ee,onSelectAll:function(e,t){return t.forEach((function(t){return ee(t,e)}))},style:{backgroundColor:"#c8e6c9"}};function ae(){return(ae=Object(g.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,c({state:!0,message:"Cancellazione in corso"}),e.next=4,fetch("/api/stage1",{method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify({tId:U})});case 4:return t=e.sent,e.next=7,t.json();case 7:K("Cancellazione completata"),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),q("Errore cancellazione Fase 1");case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}function ne(){return(ne=Object(g.a)(b.a.mark((function e(){var t,a,n,r,o,i;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(z){e.next=4;break}return x("Specificare il numero di gironi da assegnare"),setTimeout((function(){return x("")}),5e3),e.abrupt("return");case 4:c({state:!0,message:"Aggiornamento in corso"}),t=0,a="abcdefghijklmnopqrstuvwxyz".toUpperCase().split(""),n=[],e.t0=b.a.keys(k.rows);case 9:if((e.t1=e.t0()).done){e.next=31;break}return r=e.t1.value,o=k.rows[r],t==z&&(t=0),o.stage1Name=a[t],t++,e.prev=15,e.next=18,fetch("/api/pair",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)});case 18:return i=e.sent,e.next=21,i.json();case 21:e.sent,n.push(o),e.next=29;break;case 25:e.prev=25,e.t2=e.catch(15),q("Errore"),n.push(o);case 29:e.next=9;break;case 31:K("Gironi assegnati correttamente"),N((function(e){return{tournament:e.tournament,rows:n,players:e.players}}));case 33:case"end":return e.stop()}}),e,null,[[15,25]])})))).apply(this,arguments)}var re=Math.floor(k.players.length-1-k.rows.reduce((function(e,t){return t.player1||t.player2?t.player1&&t.player2?t.player1.id||t.player2.id?t.player1.id&&t.player2.id?e:e+1:e+2:e+1:e+2}),0))/2;return console.log("render table : ",k),r.a.createElement(r.a.Fragment,null,r.a.createElement(B.a,null,r.a.createElement(oe,{show:o.state,message:o.message}),r.a.createElement(J.a,{style:{margin:"10px"},md:{span:1}},r.a.createElement(B.a,null,r.a.createElement(H.a,null,r.a.createElement(H.a.Item,{action:!0,variant:"primary",onClick:function(){if(k.rows.length<4)return x("Numero di coppie insufficente"),void setTimeout((function(){return x("")}),5e3);var e=k.rows.filter((function(e){return!e.stage1Name||""===e.stage1Name})).map((function(e){return e.rowNumber}));if(0!==e.length)return x("Assegna  ".concat(1===e.length?"la riga ":"le righe "," ").concat(e," ad un girone per procedere ")),void setTimeout((function(){return x("")}),5e3);var t=k.rows.filter((function(e){return null===e.player1.id||null===e.player2.id})).map((function(e){return e.rowNumber}));if(0!==t.length)return x("Assegna  i giocatori ".concat(1===t.length?"alla riga ":"alle righe "," ").concat(t," per procedere ")),void setTimeout((function(){return x("")}),5e3);U||(x("Id torneo mancante. Verrai inviato alla Home tra 5 secondi...."),setTimeout((function(){x(""),V.push("/")}),5e3));var a=[],n=k.rows.reduce((function(e,t){return t.stage1Name in e?e[t.stage1Name]++:e[t.stage1Name]=1,e}),{});for(var r in n)n[r]<=3&&a.push(r);if(a.length>0)return x(1===a.length?"Il torneo ".concat(a," deve contenere almeno ").concat(4," coppie"):"I torneI ".concat(a," devono contenere almeno ").concat(4," coppie")),void setTimeout((function(){x("")}),5e3);V.push("/stage1/".concat(U))}},"Prosegui"),r.a.createElement(H.a.Item,{action:!0,variant:"secondary",onClick:function(){V.push("/")}},"Home"),r.a.createElement(H.a.Item,{action:!0,variant:"success",onClick:X,disabled:re<=0},"Aggiungi Coppia"),r.a.createElement(H.a.Item,{action:!0,variant:"danger",onClick:function(){return Q.apply(this,arguments)},disabled:!(F.length>0)},"Elimina Coppia"),r.a.createElement(H.a.Item,{action:!0,variant:"danger",onClick:function(){return ae.apply(this,arguments)}},"Reset gironi")))),r.a.createElement(J.a,{style:{margin:"10px"}},r.a.createElement(B.a,null,r.a.createElement(se.a,{onChange:function(e){return L(e.target.value)}},r.a.createElement(se.a.Prepend,null,r.a.createElement(se.a.Text,null,"Assegna gironi automaticamente")),r.a.createElement(de.a,{placeholder:k.rows.length<4?"Inserisci almeno 4 coppie":"Numero di gironi ( max ".concat(Math.floor(k.rows.length/4)," )"),"aria-label":"Numero di gironi",disabled:k.rows.length<4}),r.a.createElement(se.a.Append,null,r.a.createElement(j.a,{variant:"primary",onClick:function(){return ne.apply(this,arguments)},disabled:!z||z>Math.floor(k.rows.length/4)||k.rows.length<4},"Esegui"))),r.a.createElement(se.a,{onChange:function(e){return M(e.target.value)}},r.a.createElement(se.a.Prepend,null,r.a.createElement(se.a.Text,null,"Aggiunti N nuove coppie")),r.a.createElement(de.a,{disabled:re<=0,placeholder:re<=0?"Numero massimo di coppie gia creato":"Numero di coppie da aggiungere ( max ".concat(re," )"),"aria-label":"Numero di coppie",value:_||""}),r.a.createElement(se.a.Append,null,r.a.createElement(j.a,{variant:"primary",onClick:function(e){return M(re)},disabled:_>re},"Max"),r.a.createElement(j.a,{variant:"primary",onClick:function(){return $.apply(this,arguments)},disabled:!_||_>re},"Esegui")))),r.a.createElement(B.a,null,r.a.createElement(W.a,{bootstrap4:!0,keyField:"id",data:k.rows,columns:be((function(e,t,a){var n=k.rows.map((function(n){if(n.id===t){var r=n;return 1===a?e.id&&r.player2&&r.player2.id===e.id?(r.player1={id:null,name:"",surname:"",alias:"",label:"",role:"",match_played:0,match_won:0,total_score:0,editable:!1},y("Attenzione : Non puoi selezionare lo stesso giocare ! "),setTimeout((function(){return y("")}),5e3)):(Z(r.player1,e),r.player1=e):e.id&&r.player1&&r.player1.id===e.id?(r.player2={id:null,name:"",surname:"",alias:"",label:"",role:"",match_played:0,match_won:0,total_score:0,editable:!1},y("Attenzione : Non puoi selezionare lo stesso giocare ! "),setTimeout((function(){return y("")}),5e3)):(Z(r.player2,e),r.player2=e),fetch("/api/pair",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)}),r}return n}));N((function(e){return{tournament:e.tournament,rows:n,players:e.players}}))}),k.players),cellEdit:ge,selectRow:te,noDataIndication:r.a.createElement(je,{addRow:X,optionsLength:k.players.length}),caption:r.a.createElement(we,{tournament:k.tournament}),wrapperClasses:"player-table",headerClasses:"player-table-header",striped:!0,hover:!0}))),r.a.createElement(J.a,{style:{margin:"10px"},md:2},r.a.createElement(ce,{message:d}),r.a.createElement(ie,{message:h}),r.a.createElement(le,{message:O}))))}),Ce=function(e){var t=e.title,a=e.saved,n={color:a?"#4feb34":void 0};return r.a.createElement("h3",null,r.a.createElement("b",{style:n},"Girone - ",r.a.createElement("strong",null,t)),a?r.a.createElement("small",null," - Salvataggio in corso..."):null)},Se=r.a.forwardRef((function(e,t){var a=Object(n.useState)([]),o=Object(l.a)(a,2),c=o[0],i=o[1],u=Object(n.useState)(),s=Object(l.a)(u,2),d=s[0],p=s[1],m=e.row,f=e.columnIndex,h=e.id,b=e.onUpdate,g=e.onSelect,v=e.tId;return Object(n.useEffect)((function(){return ye(i,v)}),[v]),r.a.createElement(pe.a,{options:c,onChange:function(e){e.pairId=h,p(e);var t=Ee(e);b(t),g(e,m.id,f)},value:d,placeholder:"Cerca...",isSearchable:!0,isClearable:!0})}));var ke=function(e,t){for(var a,n=[{id:"pairLabel",dataField:"pair.label",text:"Nome Coppia",editable:!1,align:function(e,t,a,n){return"center"},headerAlign:function(e,t){return"center"},editorRenderer:function(a,n,o,c,i,l){return r.a.createElement(Se,Object.assign({},a,{id:l,row:o,rowIndex:i,columnIndex:l,value:n,onSelect:e,tId:t[0].tId}))}},{id:"rowNumber",dataField:"rowNumber",text:"ID",editable:!1,type:"number",headerAlign:function(e,t){return"center"},style:function(e,t,a,n){return{backgroundColor:"#f9ffdb"}}}],o=0;o<t.length;o++)n.push({id:"col".concat(a=o+1),dataField:"col".concat(a),text:a.toString(),type:"number",headerAlign:function(e,t){return"center"},editable:function(e,t,a,n){return a!==n-2},align:function(e,t,a,n){return"center"},style:function(e,t,a,n){return a===n-2?{backgroundColor:"#6d706e"}:3===parseInt(e,10)||2===parseInt(e,10)?{backgroundColor:"rgb(196, 247, 160)"}:1===parseInt(e,10)||0===parseInt(e,10)?{backgroundColor:"rgb(255, 147, 147)"}:null},editor:{type:X.Type.SELECT,options:[{value:"3",label:"3"},{value:"2",label:"2"},{value:"1",label:"1"},{value:"0",label:"0"},{value:null,label:""}]}});return n.push({id:"totale",dataField:"total",text:"Totale",editable:!1,type:"number",headerAlign:function(e,t){return"center"}},{id:"place",dataField:"place",text:"Posizione",editable:!0,type:"number",headerAlign:function(e,t){return"center"}}),n};function Ne(e,t){return e.total===t.total?3===e["col".concat(t.rowNumber)]||2===e["col".concat(t.rowNumber)]?-1:1:t.total-e.total}a(217);var Te=function(e){var t=e.rows,a=e.columns,o=e.tableName,c=e.updateCellValue,i=e.saved,u=Object(n.useState)([]),s=Object(l.a)(u,2),d=s[0],p=s[1],m=Y()({mode:"click",blurToSave:!0,beforeSaveCell:function(e,a,n,r){r.id.startsWith("col")&&(t[parseInt(r.text)-1]["col".concat(n.rowNumber)]=function(e){if(null===e)return null;switch(e){case 3:return 0;case 2:return 1;case 1:return 2;case 0:return 3;default:return null}}(a),Object(v.a)(t).sort((function(e,t){return Ne(e,t)})).forEach((function(e,a){return t[e.rowNumber-1].place=a+1})))},afterSaveCell:function(e,a,n,r){if(r.id.startsWith("col")){c(e,a,n,r);var o=0;for(var i in n)i.startsWith("col")&&(o+=n[i]);for(var l in t[n.rowNumber-1].total=o||null,o=0,t[parseInt(r.text)-1])l.startsWith("col")&&(o+=t[parseInt(r.text)-1][l]);t[parseInt(r.text)-1].total=o||null}}}),f=function(e,t){return p((function(){var a=!!d.find((function(t){return t.rowNumber===e.rowNumber}));return t?a?d:[e].concat(Object(v.a)(d)):a?d.filter((function(t){return t.rowNumber!==e.rowNumber})):d})),!0},h={mode:"checkbox",onSelect:f,onSelectAll:function(e,t){return t.forEach((function(t){return f(t,e)}))},style:{backgroundColor:"#c8e6c9"}};return r.a.createElement(r.a.Fragment,null,r.a.createElement(W.a,{bootstrap4:!0,keyField:"id",data:t,columns:a,selectRow:h,cellEdit:m,noDataIndication:"Nessun dato reperito",wrapperClasses:"player-table",headerClasses:"player-table-header",caption:r.a.createElement(Ce,{title:o,saved:i}),striped:!0,hover:!0}))},Ie=function(e){var t,a,o=e.pairsList,c=Object(n.useState)(!1),i=Object(l.a)(c,2),u=i[0],s=i[1],d=Object(n.useState)(!1),p=Object(l.a)(d,2),m=p[0],f=p[1],h=Object(n.useState)(function(e){for(var t=[],a=0;a<e.length;a++){t.push({pair:e[a],rowNumber:a+1});for(var n=1;n<=e.length;n++)t[a]["col".concat(n)]=null;t[a].total=0,t[a].place=0,t[a].id="row-".concat(e[0].tId,"-").concat(a)}return t}(o)),y=Object(l.a)(h,2),E=y[0],w=y[1],O=null!==(t=null===(a=o[0])||void 0===a?void 0:a.stage1Name)&&void 0!==t?t:"Not found",j=function(){var e=Object(g.a)(b.a.mark((function e(t,a,n,r){var o,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o={tId:n.pair.tId,tableName:O,score:a,pair1Id:n.pair.id,pair2Id:E[parseInt(r.text)-1].pair.id},e.next=3,fetch("/api/stage1/cell",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)});case 3:return c=e.sent,e.next=6,c.json();case 6:c.ok&&(f(!0),setTimeout((function(){return f(!1)}),3e3));case 7:case"end":return e.stop()}}),e)})));return function(t,a,n,r){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){(function(){var e=Object(g.a)(b.a.mark((function e(){var t,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s(!0),e.next=3,fetch("/api/stage1",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({rows:E,stageName:O})});case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,Object(v.a)(a).sort((function(e,t){return Ne(e,t)})).forEach((function(e,t){return a[e.rowNumber-1].place=t+1})),w(a),s(!1);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);return r.a.createElement(r.a.Fragment,null,u?r.a.createElement("h3",null,"Caricamento girone ",r.a.createElement("b",null,O)," in corso...."):r.a.createElement(Te,{rows:E,columns:ke((function(){"1"===O&&console.log("onSelect ")}),o),tableName:O,updateCellValue:j,saved:m}))};var Fe=[{path:"/",label:"Home",exact:!0,component:R,visible:!0,index:0},{path:"/tournament/:tId",label:"Selezione Coppie",exact:!0,component:xe,visible:!1,index:10},{path:"/stage1/:tId",label:"Torneo fase 1",exact:!0,component:function(e){var t=Object(u.i)().tId,a=Object(n.useState)([]),o=Object(l.a)(a,2),c=o[0],i=o[1],s=Object(u.g)();return Object(n.useEffect)((function(){return ye(i,t)}),[t]),c.sort((function(e,t){return e.stage1Name.localeCompare(t.stage1Name)})),r.a.createElement(r.a.Fragment,null,r.a.createElement(H.a.Item,{key:"stage-button"},r.a.createElement(j.a,{variant:"secondary",onClick:function(){s.push("/tournament/".concat(t))}},"Gestione Coppie")),function(e,t){var a="",n=[],o=[];e.forEach((function(e,t){""===a&&(a=e.stage1Name),a!==e.stage1Name&&(o.push(r.a.createElement(H.a.Item,{key:"stage-".concat(a)},r.a.createElement(Ie,{pairsList:n}))),a=e.stage1Name,n=[]),n.push(e)})),n.length>0&&o.push(r.a.createElement(H.a.Item,{key:"stage-".concat(a)},r.a.createElement(Ie,{pairsList:n})));return r.a.createElement(H.a,{variant:"flush"},o)}(c))},visible:!1,index:20},{path:"/player",label:"Gestione Giocatori",exact:!0,component:ue,visible:!0,index:30},{path:"/stage2/:tId",label:"Torneo fase 2",exact:!0,component:function(e){for(var t={flexDirection:"column",alignItems:"stretch"},a={display:"flex",flexDirection:"column",justifyContent:"center",alignContent:"space-around"},n=[],o=0;o<=4;o++){for(var c=[],i=0;i<Math.pow(2,o);i++)c.push(r.a.createElement(H.a.Item,{key:"item-".concat(o,"-").concat(i),style:t},r.a.createElement(se.a,null,r.a.createElement(de.a,{placeholder:"".concat(o,"-").concat(i)}))));n.push(r.a.createElement(H.a.Item,{key:"col-".concat(o),style:a},r.a.createElement(H.a,{variant:"flush"},c)))}return r.a.createElement(H.a,{variant:"flush",id:"outer-container",style:{flexDirection:"row-reverse"}},n)},visible:!0,index:40},{path:"*",label:"Not Found",exact:!1,component:function(e){var t=Object(u.h)();return r.a.createElement("div",null,r.a.createElement("h1",null,"Current Ruote : ",r.a.createElement("code",null,t.pathname)))},visible:!1,index:1e3}],Ae=Fe;a(218);var Re=a(231),Pe=function(){return r.a.createElement(Re.a,{bg:"ligth",variant:"light",className:"navbar-container"},r.a.createElement("ul",{className:"navbar-list"},Ae.map((function(e){return e.visible?r.a.createElement("li",{key:"li-".concat(e.index),className:"navbar-list-item"},r.a.createElement(Oe.b,{key:"link-".concat(e.index),to:e.path},e.label)):null}))))},ze=a(226),Le=function(e){var t=p(),a=Object(l.a)(t,2),n=a[0],o=a[1],c={isAuthenticated:!!n.isAuthenticated,authenticationPath:"/login",redirectPathOnAuthentication:n.redirectPathOnAuthentication||"",setRedirectPathOnAuthentication:function(e){o(Object(i.a)({},n,{redirectPathOnAuthentication:e}))}};return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"app-header"},r.a.createElement("p",null,"Calcetto C.S.M"),r.a.createElement(Pe,null)),r.a.createElement("br",null),r.a.createElement(ze.a,{fluid:!0},r.a.createElement(u.d,null,r.a.createElement(u.b,{path:"/login",component:f}),Ae.map((function(e){return r.a.createElement(m,Object.assign({},e,c,{key:e.index}))})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(Oe.a,null,r.a.createElement((function(e){var t=Object(n.useState)(s),a=Object(l.a)(t,2),o=[a[0],a[1]];return r.a.createElement(d.Provider,{value:o},e.children)}),null,r.a.createElement(Le,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[120,1,2]]]);
//# sourceMappingURL=main.2d994f65.chunk.js.map