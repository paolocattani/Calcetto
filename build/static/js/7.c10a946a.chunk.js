(this.webpackJsonpcalcetto=this.webpackJsonpcalcetto||[]).push([[7],{249:function(e,t,n){"use strict";n.d(t,"g",(function(){return l})),n.d(t,"d",(function(){return s})),n.d(t,"c",(function(){return u})),n.d(t,"f",(function(){return p})),n.d(t,"e",(function(){return d})),n.d(t,"b",(function(){return f})),n.d(t,"a",(function(){return m}));var a=n(0),r=n.n(a),o=n(250),i=n(118),c=function(e){var t=e.size,n=e.prefix,a=e.iconName,c=e.color;return r.a.createElement(o.a,{color:c,size:t,icon:Object(i.a)({prefix:n,iconName:a})})},l=function(e){var t=e.size,n=e.color;return r.a.createElement(c,{size:t,color:n,prefix:"far",iconName:"trash-alt"})},s=function(e){var t=e.size,n=e.color;return r.a.createElement(c,{size:t,color:n,prefix:"far",iconName:"save"})},u=function(e){var t=e.size;e.color;return r.a.createElement(c,{size:t,prefix:"fas",iconName:"arrow-alt-circle-right"})},p=function(e){var t=e.size,n=e.color;return r.a.createElement(c,{size:t,color:n,prefix:"fas",iconName:"toggle-on"})},d=function(e){var t=e.size,n=e.color;return r.a.createElement(c,{size:t,color:n,prefix:"fas",iconName:"toggle-off"})},f=function(e){var t=e.size,n=e.color;return r.a.createElement(c,{size:t,color:n,prefix:"fas",iconName:"angle-double-right"})},m=function(e){var t=e.size,n=e.color;return r.a.createElement(c,{size:t,color:n,prefix:"fas",iconName:"ban"})}},251:function(e,t,n){"use strict";n.d(t,"d",(function(){return r})),n.d(t,"f",(function(){return o})),n.d(t,"b",(function(){return i})),n.d(t,"e",(function(){return c})),n.d(t,"a",(function(){return l})),n.d(t,"c",(function(){return s}));var a=n(119),r=function(){return i(new Date)};function o(e){switch(e){case a.a.New:return"Nuovo";case a.a.PairsSelection:return"Selezione Coppie";case a.a.Stage1:return"Fase 1";case a.a.Stage2:return"Fase 2";default:return""}}function i(e){var t=new Date(e),n=""+(t.getMonth()+1),a=""+t.getDate(),r=t.getFullYear();return n.length<2&&(n="0"+n),a.length<2&&(a="0"+a),[r,n,a].join("/")}new RegExp("^d{10}$");var c=new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,16})"),l=new RegExp("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$");function s(e,t){return Math.log(t)/Math.log(e)}},257:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var a={isLoading:function(e){var t=e.tournamentState.isLoading;return t},getTournament:function(e){return e.tournamentState.tournament},getTournamentsList:function(e){return e.tournamentState.tournamentsList}}},262:function(e,t,n){"use strict";n.d(t,"d",(function(){return s})),n.d(t,"c",(function(){return u})),n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var a=n(57),r=n(14),o=n(11),i=n.n(o),c=n(28),l=n(120);function s(){return{id:null,tId:0,rowNumber:0,player1:Object(l.b)(),player2:Object(l.b)(),alias:"",stage1Name:"",paid1:!1,paid2:!1}}var u=function(e,t){Object(c.a)(i.a.mark((function n(){var a,r;return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("/api/v1/pair/list/?tId=".concat(t),{method:"GET",headers:{"Content-Type":"application/json"}});case 2:return a=n.sent,n.next=5,a.json();case 5:r=n.sent,e(r);case 7:case"end":return n.stop()}}),n)})))()};var p={option:function(e,t){return Object(r.a)({},e,{backgroundColor:"white",color:"black","&:hover":{backgroundColor:"#64bd9c",color:"white"}})},input:function(e){return Object(r.a)({},e,{backgroundColor:"#64bd9c"})},control:function(e){return Object(r.a)({},e,{height:"3vmin",marginBottom:"auto"})},singleValue:function(e){return Object(r.a)({},e)},valueContainer:function(e){return Object(r.a)({},e,{height:"100%",fontSize:"larger"})}},d=function(){var e=Object(c.a)(i.a.mark((function e(t){var n,r,o,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/v1/pair/list/?tId=".concat(t),{method:"GET",headers:{"Content-Type":"application/json"}});case 2:return n=e.sent,e.next=5,n.json();case 5:return r=e.sent,e.next=8,fetch(t?"/api/v1/player/list/".concat(t):"/api/v1/player/list",{method:"GET",headers:{"Content-Type":"application/json"}});case 8:return n=e.sent,e.next=11,n.json();case 11:return o=e.sent,c=[].concat(Object(a.a)(o),[Object(l.b)("Nessun Giocatore")]),console.log("rows : ",r),e.abrupt("return",{rows:r,players:c});case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},270:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"c",(function(){return f}));n(11),n(57),n(28),n(0),n(143);var a,r,o,i,c,l,s=n(268),u=n(256),p=(n(120),{Portiere:"Portiere",Attaccante:"Attaccante",Master:"Master"});function d(){a(""),r(""),o(""),i(""),c(""),l("")}t.b=function(e){return[{dataField:"id",text:"ID",editable:!1,headerStyle:function(e,t){return{width:"3%"}}},{dataField:"name",text:"Nome",headerClasses:"player-table-header-element",autoSelectText:!0,headerStyle:function(t,n){return{width:e?"16%":"25%"}},filter:Object(s.textFilter)({placeholder:"Filtra...",getFilter:function(e){return a=e}})},{dataField:"surname",text:"Cognome",headerClasses:"player-table-header-element",autoSelectText:!0,headerStyle:function(t,n){return{width:e?"16%":"25%"}},filter:Object(s.textFilter)({placeholder:"Filtra...",getFilter:function(e){return r=e}})},{dataField:"alias",text:"Alias",headerClasses:"player-table-header-element",headerStyle:function(t,n){return{width:e?"17%":"25%"}},autoSelectText:!0,filter:Object(s.textFilter)({placeholder:"Filtra...",getFilter:function(e){return o=e}})},{dataField:"role",text:"Roulo",headerClasses:"player-table-header-element",headerStyle:function(t,n){return{width:"".concat(e?"11":"15","%")}},filter:Object(s.selectFilter)({placeholder:"Filtra...",options:p,getFilter:function(e){return i=e}}),editor:{type:u.Type.SELECT,getOptions:function(e){return[{value:"Portiere",label:"Portiere"},{value:"Attaccante",label:"Attaccante"},{value:"Master",label:"Master"}]}}},{dataField:"email",text:"Email",headerStyle:function(e,t){return{width:"20%"}},headerClasses:"player-table-header-element",autoSelectText:!0,hidden:!e,filter:Object(s.textFilter)({placeholder:"Filtra...",getFilter:function(e){return c=e}})},{dataField:"phone",headerStyle:function(e,t){return{width:"10%"}},text:"Telefono",headerClasses:"player-table-header-element",autoSelectText:!0,hidden:!e,filter:Object(s.textFilter)({placeholder:"Filtra...",getFilter:function(e){return l=e}})},{dataField:"match_played",text:"Partite Giocate",hidden:!0},{dataField:"match_won",text:"Vittorie",hidden:!0},{dataField:"total_score",text:"Punteggio",hidden:!0}]};function f(e){return e?e.alias?e.alias:e.surname?"".concat(e.name," - ").concat(e.surname):e.name:""}},337:function(e,t,n){},350:function(e,t,n){"use strict";n.r(t);var a=n(57),r=n(11),o=n.n(r),i=n(28),c=n(117),l=n(0),s=n.n(l),u=n(143),p=n(279),d=n(254),f=n(338),m=n(255),g=n(354),h=n(352),b=n(345),y=n(263),v=n.n(y),w=n(262),E=n(25),x=n(251),j=n(29),O=n(257),S=function(){var e=Object(j.d)(O.a.getTournament);return e?s.a.createElement("h3",null,s.a.createElement("p",null,s.a.createElement("b",null,'"',s.a.createElement("strong",null,null===e||void 0===e?void 0:e.name.toUpperCase()),'"',s.a.createElement("small",null," @ ",Object(x.f)(e.progress))))):null},C=n(50),N=function(e){var t=e.addRow,n=e.optionsLength,a=e.isEditable,r=n-1,o=r<8?8-r:0;return n?r>=8?s.a.createElement(s.a.Fragment,null,s.a.createElement("p",null," Aggiungi le coppie per questo torneo..."),s.a.createElement(u.a,{variant:"success",onClick:t,disabled:!a},"Aggiungi Coppia")):s.a.createElement(s.a.Fragment,null,s.a.createElement("p",null,"Ci sono solo ",r," giocatori definiti ma devono essercene almeno 8 per poter formare un torneo."),s.a.createElement("p",null,1===o?"Devi creare un altro giocatore...":"Devi creare almeno altri ".concat(o)),s.a.createElement(C.b,{to:"/player"},s.a.createElement(u.a,{variant:"success"},"Gestione Giocatori"))):null},k=n(122),F=(n(337),n(249)),T=n(119),z=n(120),A=n(256),I=n.n(A),P=n(271),M=n(270),R=s.a.forwardRef((function(e,t){var n=Object(l.useState)(),a=Object(c.a)(n,2),r=a[0],o=a[1],i=e.styles,u=e.row,p=e.columnIndex,d=e.onUpdate,f=e.onSelect,m=e.options;return s.a.createElement(P.a,{styles:i,options:m,onChange:function(e,t){o(e);var n=Object(M.c)(e);d(n),f(e,u.id,p)},value:r,placeholder:"Cerca...",isSearchable:!0,isClearable:!0})})),D=function(e,t){return[{dataField:"id",text:"ID",editable:!1,hidden:!0,align:function(){return"center"}},{dataField:"rowNumber",text:"ID",editable:!1,align:function(){return"center"}},{dataField:"player1.alias",text:"Giocatore 1",align:function(){return"center"},editorRenderer:function(n,a,r,o,i,c){return s.a.createElement(R,Object.assign({},n,{id:c,row:r,rowIndex:i,columnIndex:c,value:a,onSelect:e,options:t,styles:w.a}))},headerStyle:function(e,t){return{width:"20%"}}},{dataField:"player2.alias",text:"Giocatore 2",align:function(){return"center"},editorRenderer:function(n,a,r,o,i,c){return s.a.createElement(R,Object.assign({},n,{id:c,row:r,rowIndex:i,columnIndex:c,value:a,onSelect:e,options:t,styles:w.a}))},headerStyle:function(e,t){return{width:"20%"}}},{dataField:"alias",text:"Alias Coppia",headerStyle:function(e,t){return{width:"25%"}}},{dataField:"stage1Name",text:"Nome girone",align:function(){return"center"},headerStyle:function(e,t){return{width:"10%"}},editor:{type:A.Type.SELECT,options:"abcdefghijklmnopqrstuvwxyz".toUpperCase().split("").map((function(e){return{value:e,label:e}}))}},{dataField:"paid1",text:"Pagato 1",align:function(){return"center"},headerStyle:function(e,t){return{width:"7,5%"}},editor:{type:A.Type.CHECKBOX,value:"Si:No"},style:function(e,t,n,a){if("Si"!==e)return{backgroundColor:"#ffbf47"}}},{dataField:"paid2",text:"Pagato 2",align:function(){return"center"},headerStyle:function(e,t){return{width:"7,5%"}},editor:{type:A.Type.CHECKBOX,value:"Si:No"},style:function(e,t,n,a){if("Si"!==e)return{backgroundColor:"#ffbf47"}}}]},G=n(58);t.default=Object(E.i)((function(){var e=Object(j.d)(G.a.getSession),t=Object(j.d)(O.a.getTournament),n=Object(E.g)(),r=Object(l.useState)({state:!1,message:"Caricamento"}),y=Object(c.a)(r,2),x=y[0],C=y[1],A={message:"",type:"success"},P=Object(l.useState)(A),M=Object(c.a)(P,2),R=M[0],L=M[1],J=Object(l.useState)({rows:[],players:[]}),Z=Object(c.a)(J,2),U=Z[0],q=Z[1],_=Object(l.useState)([]),B=Object(c.a)(_,2),H=B[0],V=B[1],$=Object(l.useState)(0),K=Object(c.a)($,2),X=K[0],W=K[1],Y=Object(l.useState)(0),Q=Object(c.a)(Y,2),ee=Q[0],te=Q[1];function ne(e){C({state:!1,message:e}),L({message:e,type:"danger"}),setTimeout((function(){return L(A)}),5e3)}function ae(e){C({state:!1,message:e}),L({message:e,type:"success"}),setTimeout((function(){return L(A)}),5e3)}function re(e){return oe.apply(this,arguments)}function oe(){return(oe=Object(i.a)(o.a.mark((function e(n){var r,i,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,C({state:!0,message:"Aggiunta riga in corso"}),(r=Object(w.d)()).tId=t.id,e.next=6,fetch("/api/v1/pair",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)});case 6:return i=e.sent,e.next=9,i.json();case 9:c=e.sent,r.id=c.id,r.rowNumber=n||U.rows.length+1,q((function(e){return{rows:[r].concat(Object(a.a)(e.rows)),players:e.players}})),ae("Riga aggiunta"),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),ne("Errore aggiunta riga");case 19:case"end":return e.stop()}}),e,null,[[0,16]])})))).apply(this,arguments)}function ie(){return ce.apply(this,arguments)}function ce(){return(ce=Object(i.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=U.rows.length+1,n=0;case 2:if(!(n<ee)){e.next=9;break}return e.next=5,re(t);case 5:t++;case 6:n++,e.next=2;break;case 9:te(0);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function le(){return se.apply(this,arguments)}function se(){return(se=Object(i.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,C({state:!0,message:H.length>1?"Cancellazione righe in corso":"Cancellazione riga in corso"}),t=[],H.forEach((function(e){e.player1.id&&t.push(e.player1),e.player2.id&&t.push(e.player2)})),t&&q((function(e){return{rows:e.rows,players:[].concat(t,Object(a.a)(e.players)).sort((function(e,t){return e.alias.localeCompare(t.alias)}))}})),e.next=7,fetch("/api/v1/pair",{method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify(H)});case 7:return n=e.sent,e.next=10,n.json();case 10:q((function(e){return{rows:e.rows.filter((function(e){return!H.find((function(t){return t.id===e.id}))})),players:e.players}})),ae(H.length>1?"Righe cancellate":"Riga cancellata"),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),ne("Errore cancellazione riga");case 17:V([]);case 18:case"end":return e.stop()}}),e,null,[[0,14]])})))).apply(this,arguments)}function ue(e,t){e&&e.id?t.id?q((function(n){return{rows:n.rows,players:[].concat(Object(a.a)(n.players.filter((function(e){return e.id!==t.id}))),[e]).sort((function(e,t){return e.alias.localeCompare(t.alias)}))}})):q((function(t){return{rows:t.rows,players:[].concat(Object(a.a)(t.players),[e]).sort((function(e,t){return e.alias.localeCompare(t.alias)}))}})):t.id&&q((function(e){return{rows:e.rows,players:e.players.filter((function(e){return e.id!==t.id}))}}))}Object(l.useEffect)((function(){Object(i.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=q,e.next=3,Object(w.b)(t.id);case 3:return e.t1=e.sent,e.abrupt("return",(0,e.t0)(e.t1));case 5:case"end":return e.stop()}}),e)})))()}),[t.id]);var pe=function(e,t,n){var a=U.rows.map((function(a){if(a.id===t){var r=a;return 1===n?e.id&&r.player2&&r.player2.id===e.id?(r.player1=Object(z.b)(),ne("Attenzione : Non puoi selezionare lo stesso giocare ! ")):(ue(r.player1,e),r.player1=e):e.id&&r.player1&&r.player1.id===e.id?(r.player2=Object(z.b)(),ne("Attenzione : Non puoi selezionare lo stesso giocare ! ")):(ue(r.player2,e),r.player2=e),fetch("/api/v1/pair",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)}),r}return a}));q((function(e){return{rows:a,players:e.players}}))},de=function(e,t){V((function(n){var r=!!n.find((function(t){return t.id===e.id}));return t?r?n:[e].concat(Object(a.a)(n)):r?n.filter((function(t){return t.id!==e.id})):n}))},fe=function(){var e=Object(i.a)(o.a.mark((function e(){var a,r,i,c,l;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.id||(ne("Id torneo mancante. Verrai inviato alla Home tra 5 secondi...."),setTimeout((function(){return n.push("/")}),5e3)),!(U.rows.length<4)){e.next=4;break}return ne("Numero di coppie insufficente. Devi formare almeno 4 coppie"),e.abrupt("return");case 4:if(0===(a=U.rows.filter((function(e){return!e.stage1Name||""===e.stage1Name})).map((function(e){return e.rowNumber}))).length){e.next=8;break}return ne("Assegna  ".concat(1===a.length?"la riga ":"le righe "," ").concat(a," ad un girone per procedere ")),e.abrupt("return");case 8:if(0===(r=U.rows.filter((function(e){return null===e.player1.id||null===e.player2.id})).map((function(e){return e.rowNumber}))).length){e.next=12;break}return ne("Assegna  i giocatori ".concat(1===r.length?"alla riga ":"alle righe "," ").concat(r," per procedere ")),e.abrupt("return");case 12:for(l in 3,i=[],c=U.rows.reduce((function(e,t){return t.stage1Name in e?e[t.stage1Name]++:e[t.stage1Name]=1,e}),{}))c[l]<=3&&i.push(l);if(!(i.length>0)){e.next=19;break}return ne(1===i.length?"Il torneo ".concat(i," deve contenere almeno ").concat(4," coppie"):"I torneI ".concat(i," devono contenere almeno ").concat(4," coppie")),e.abrupt("return");case 19:return t.progress=T.a.Stage1,e.prev=20,e.next=23,fetch("/api/v1/tournament/",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});case 23:e.next=28;break;case 25:e.prev=25,e.t0=e.catch(20),console.log("errororroror :",e.t0);case 28:n.push("/stage1/".concat(t.id));case 29:case"end":return e.stop()}}),e,null,[[20,25]])})));return function(){return e.apply(this,arguments)}}(),me={mode:"checkbox",onSelect:de,onSelectAll:function(e,t){return t.forEach((function(t){return de(t,e)}))},style:{backgroundColor:"#c8e6c9"}};function ge(){return he.apply(this,arguments)}function he(){return(he=Object(i.a)(o.a.mark((function e(){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,C({state:!0,message:"Cancellazione in corso"}),e.next=4,fetch("/api/v1/stage1",{method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify({tId:t.id})});case 4:return n=e.sent,e.next=7,n.json();case 7:t.progress=T.a.PairsSelection,fetch("/api/v1/tournament",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}),ae("Cancellazione completata"),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),ne("Errore cancellazione Fase 1");case 15:case"end":return e.stop()}}),e,null,[[0,12]])})))).apply(this,arguments)}function be(){return ye.apply(this,arguments)}function ye(){return(ye=Object(i.a)(o.a.mark((function e(){var n,a,r,i,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(X){e.next=3;break}return ne("Specificare il numero di gironi da assegnare"),e.abrupt("return");case 3:if("Stage1"!==t.progress&&"Stage2"!==t.progress){e.next=6;break}return ne("Non riassegnare i gironi in quanto le coppie sono gia state confermate per la fase successiva"),e.abrupt("return");case 6:for(i in C({state:!0,message:"Aggiornamento in corso "}),n=0,a="abcdefghijklmnopqrstuvwxyz".toUpperCase().split(""),r=[],U.rows){c=U.rows[i],n==X&&(n=0),c.stage1Name=a[n],n++;try{fetch("/api/v1/pair",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(c)}),r.push(c)}catch(o){ne("Errore"),r.push(c)}}ae("Gironi assegnati correttamente"),q((function(e){return{rows:r,players:e.players}}));case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var ve=Math.floor(Math.floor((U.players.length-1)/2)-(0===U.rows.length?0:U.rows.reduce((function(e,t){return!t.player1&&!t.player2||!t.player1.id&&!t.player2.id?e+1:t.player1&&t.player1.id&&t.player2&&t.player2.id?e:e+.5}),0))),we=!(H.length>0)||"Stage1"===t.progress||"Stage2"===t.progress,Ee="";Ee=H.length>0?"Stage1"===t.progress||"Stage2"===t.progress?"Devi prima resettare i gironi per poter cancellare delle coppie":"Cancella le coppie selezionate":"Seleziona almeno una riga";var xe=s.a.createElement(s.a.Fragment,null,s.a.createElement(u.a,{type:"button",onClick:fe,size:"lg",variant:"outline-warning",className:"default-color-white"},s.a.createElement("span",{style:{fontSize:"larger",fontWeight:"bolder",padding:"1vw"}},"Prosegui"),s.a.createElement(F.c,{size:"lg"})),s.a.createElement(k.GenericToast,{message:R.message,type:R.type}));return s.a.createElement(p.a,null,s.a.createElement(k.LoadingModal,{show:x.state,message:x.message}),s.a.createElement(d.a,{md:"10",sm:"12"},function(e){return s.a.createElement(s.a.Fragment,null,e?s.a.createElement(p.a,{style:{margin:"0px"}},s.a.createElement(d.a,{md:"6",sm:"12"},s.a.createElement(f.a,null,s.a.createElement(f.a.Prepend,null,s.a.createElement(f.a.Text,null,"Assegna gironi automaticamente")),s.a.createElement(m.a,{placeholder:U.rows.length<4?"Inserisci almeno 4 coppie":"Numero di gironi ( max ".concat(Math.floor(U.rows.length/4)," )"),"aria-label":"Numero di gironi",type:"number",step:1,min:0,max:Math.floor(U.rows.length/4),value:X,onChange:function(e){return W(Number(e.currentTarget.value))},disabled:U.rows.length<4||t.progress===T.a.Stage1||t.progress===T.a.Stage2}),s.a.createElement(f.a.Append,null,s.a.createElement(u.a,{variant:"primary",onClick:be,disabled:!X||X>Math.floor(U.rows.length/4)||U.rows.length<4},"Esegui")))),s.a.createElement(d.a,{md:"6",sm:"12"},s.a.createElement(f.a,null,s.a.createElement(f.a.Prepend,null,s.a.createElement(f.a.Text,null,"Aggiungi coppie")),s.a.createElement(m.a,{disabled:ve<=0,type:"number",step:1,min:1,max:ve,placeholder:ve<=0?"Numero massimo di coppie gia creato":"Numero di coppie da aggiungere ( max ".concat(ve," )"),"aria-label":"Numero di coppie",onChange:function(e){return te(Number(e.currentTarget.value))},value:ee||""}),s.a.createElement(f.a.Append,null,s.a.createElement(u.a,{variant:"primary",onClick:function(e){return te(ve)},disabled:ee>ve},"Max"),s.a.createElement(u.a,{variant:"primary",onClick:ie,disabled:!ee||ee>ve},"Esegui"))))):null,s.a.createElement(p.a,{style:{margin:"5vh 0vh"}},s.a.createElement(d.a,{md:"2",sm:"12"},s.a.createElement(g.a,null,s.a.createElement(g.a.Item,{action:!0,variant:"success",onClick:function(){return re()},disabled:ve<=0||!e},"Aggiungi Coppia"),s.a.createElement(h.a,{placement:"right",key:"right",overlay:s.a.createElement(b.a,{id:"tooltip-pair"},Ee)},s.a.createElement("span",{className:"d-inline-block",onClick:le},s.a.createElement(g.a.Item,{action:!0,variant:"danger",style:{pointerEvents:"none"},disabled:we||!e},"Elimina Coppia ",we))),s.a.createElement(g.a.Item,{action:!0,variant:"danger",onClick:ge,disabled:!e},"Reset gironi"))),s.a.createElement(d.a,{md:"10",sm:"12"},U.rows&&U.players?s.a.createElement(v.a,{bootstrap4:!0,keyField:"id",data:U.rows,columns:D(pe,U.players),cellEdit:(n=e,I()({mode:n?"click":"none",blurToSave:!0,afterSaveCell:function(e,t,n,a){"player1.alias"!==a.dataField&&"player2.alias"!==a.dataField&&Object(i.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/v1/pair",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});case 2:return t=e.sent,e.next=5,t.json();case 5:case"end":return e.stop()}}),e)})))()}})),selectRow:me,noDataIndication:function(){return s.a.createElement(N,{isEditable:e||!1,addRow:function(){return re()},optionsLength:U.players.length})},caption:s.a.createElement(S,null),headerClasses:"default-background default-color-yellow",striped:!0,hover:!0}):null)));var n}(e.isAdmin)),s.a.createElement(d.a,{md:"2",sm:"12"},xe))}))}}]);
//# sourceMappingURL=7.c10a946a.chunk.js.map