(this.webpackJsonpcalcetto=this.webpackJsonpcalcetto||[]).push([[14],{252:function(e,t,n){"use strict";n.d(t,"g",(function(){return u})),n.d(t,"d",(function(){return l})),n.d(t,"c",(function(){return s})),n.d(t,"f",(function(){return f})),n.d(t,"e",(function(){return m})),n.d(t,"h",(function(){return g})),n.d(t,"b",(function(){return d})),n.d(t,"a",(function(){return p}));var a=n(0),r=n.n(a),o=n(253),c=n(119),i=function(e){var t=e.size,n=e.prefix,a=e.iconName,i=e.color;return r.a.createElement(o.a,{color:i,size:t,icon:Object(c.a)({prefix:n,iconName:a})})},u=function(e){var t=e.size,n=e.color;return r.a.createElement(i,{size:t,color:n,prefix:"far",iconName:"trash-alt"})},l=function(e){var t=e.size,n=e.color;return r.a.createElement(i,{size:t,color:n,prefix:"far",iconName:"save"})},s=function(e){var t=e.size;e.color;return r.a.createElement(i,{size:t,prefix:"fas",iconName:"arrow-alt-circle-right"})},f=function(e){var t=e.size,n=e.color;return r.a.createElement(i,{size:t,color:n,prefix:"fas",iconName:"toggle-on"})},m=function(e){var t=e.size,n=e.color;return r.a.createElement(i,{size:t,color:n,prefix:"fas",iconName:"toggle-off"})},g=function(e){var t=e.size,n=e.color;return r.a.createElement(i,{size:t,color:n,prefix:"fas",iconName:"trophy"})},d=function(e){var t=e.size,n=e.color;return r.a.createElement(i,{size:t,color:n,prefix:"fas",iconName:"angle-double-right"})},p=function(e){var t=e.size,n=e.color;return r.a.createElement(i,{size:t,color:n,prefix:"fas",iconName:"ban"})}},254:function(e,t,n){"use strict";n.d(t,"d",(function(){return r})),n.d(t,"f",(function(){return o})),n.d(t,"b",(function(){return c})),n.d(t,"e",(function(){return i})),n.d(t,"a",(function(){return u})),n.d(t,"c",(function(){return l}));var a=n(120),r=function(){return c(new Date)};function o(e){switch(e){case a.a.New:return"Nuovo";case a.a.PairsSelection:return"Selezione Coppie";case a.a.Stage1:return"Fase 1";case a.a.Stage2:return"Fase 2";default:return""}}function c(e){var t=new Date(e),n=""+(t.getMonth()+1),a=""+t.getDate(),r=t.getFullYear();return n.length<2&&(n="0"+n),a.length<2&&(a="0"+a),[r,n,a].join("/")}new RegExp("^d{10}$");var i=new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,16})"),u=new RegExp("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$");function l(e,t){return Math.log(t)/Math.log(e)}},255:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var a={isLoading:function(e){var t=e.tournamentState.isLoading;return t},getTournament:function(e){return e.tournamentState.tournament},getTournamentsList:function(e){return e.tournamentState.tournamentsList}}},356:function(e,t,n){"use strict";n.r(t);var a=n(13),r=n(11),o=n.n(r),c=n(24),i=n(118),u=n(0),l=n.n(u),s=n(265),f=n(258),m=n(285),g=n(275),d=n(146),p=n(28),b=n(122),h=n(252),E=(n(27),n(254)),v=n(120);function w(e,t){return{id:null,name:e||"",ownerId:null,date:new Date,progress:t||v.a.New,public:!0,label:e||""}}var z=function(e){var t=e.innerProps;return l.a.createElement("span",Object.assign({style:j},t))},j={alignSelf:"stretch",backgroundColor:"green",marginBottom:8,marginTop:8,marginRight:10,width:1},O={width:"100%",margin:"auto",backgroundColor:"inherit",borderColor:"#ffc107",borderWidth:"3px",textAlign:"left"},S=n(99),y=n.n(S),x=n(31),C=n(21),N=function(e){var t=e.showMessage,n=Object(p.g)(),a=Object(x.c)(),r=Object(u.useState)(""),s=Object(i.a)(r,2),m=s[0],b=s[1],h=Object(u.useState)(new Date),E=Object(i.a)(h,2),v=E[0],z=E[1],j=Object(u.useState)(!0),O=Object(i.a)(j,2),S=O[0],N=O[1],T=function(){var e=Object(c.a)(o.a.mark((function e(r){var c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.preventDefault(),m){e.next=4;break}return t("Inserire un nome per il torneo","danger"),e.abrupt("return");case 4:(c=w(m)).date=v,c.public=S,a(C.a.saveTournament.request({model:c})),n.push("/tournament");case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return l.a.createElement(g.a,{onSubmit:T},l.a.createElement(g.a.Row,null,l.a.createElement(f.a,{md:6},l.a.createElement(g.a.Group,{controlId:"formBasicEmail"},l.a.createElement(g.a.Label,null,"Nome"),l.a.createElement(g.a.Control,{type:"text",required:!0,placeholder:"Nome Torneo",maxLength:30,value:m,onChange:function(e){return b(e.currentTarget.value)}}))),l.a.createElement(f.a,{md:3},l.a.createElement(g.a.Group,null,l.a.createElement(g.a.Label,null,"Data"),l.a.createElement(g.a.Control,{as:function(){return l.a.createElement(y.a,{highlightDates:[new Date],locale:"it",selected:v,dateFormat:"dd/MM/yyyy",onChange:function(e){return z(e||new Date)}})}}))),l.a.createElement(f.a,{md:3},l.a.createElement(g.a.Group,{controlId:"visible"},l.a.createElement(g.a.Label,null,"Visibilit\xe0 "),l.a.createElement(g.a.Control,{as:"select",onChange:function(){return N(!S)}},l.a.createElement("option",null,"Pubblico"),l.a.createElement("option",null,"Privato"))))),l.a.createElement(g.a.Row,null,l.a.createElement(f.a,null,l.a.createElement(d.a,{type:"submit",size:"lg",variant:"outline-warning",className:"float-right default-color-white"},l.a.createElement("span",{style:{fontSize:"larger",fontWeight:"bolder"}},"Prosegui")))))},T=n(255),k=n(58),A=(t.default=Object(p.i)((function(){var e=Object(x.c)(),t=Object(x.d)(k.a.getSession),n=Object(x.d)(T.a.getTournamentsList),a=Object(x.d)(T.a.getTournament),r=Object(u.useState)(!1),E=Object(i.a)(r,2),v=E[0],w=E[1],j={message:"",type:"success"},S=Object(u.useState)(j),y=Object(i.a)(S,2),L=y[0],Z=y[1],F=Object(p.g)();Object(u.useEffect)((function(){n&&0!==n.length||(console.log("useEffect: ",n),e(C.a.getTournaments.request({})))}),[e,n]);var M=function(e,t){Z({message:e,type:t}),setTimeout((function(){return Z(j)}),5e3)},P=function(){var e=Object(c.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),a?F.push("/tournament"):M("Errore, riprovare piu tardi...","danger");case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),R=function(t){e(C.a.setTournament(null)),w(t)};return console.log("render tournament :",a,n),l.a.createElement(l.a.Fragment,null,l.a.createElement(b.GenericToast,{message:L.message,type:L.type}),l.a.createElement(f.a,{md:{span:"6",offset:"3"},sm:"12"},l.a.createElement(m.a,{style:O},l.a.createElement(m.a.Header,{as:"h2"},"Torneo"),l.a.createElement(m.a.Body,null,l.a.createElement(f.a,null,t.isAdmin&&v?l.a.createElement(N,{showMessage:M}):l.a.createElement(g.a,{onSubmit:P},l.a.createElement("label",{htmlFor:"tournamentSelect"},"Selezione Torneo"),l.a.createElement(s.a,{id:"tournamentSelect",components:{IndicatorSeparator:z},styles:D,value:a,options:n,placeholder:"Cerca un torneo",isSearchable:!0,getOptionLabel:A,isClearable:!0,onChange:function(t){return e(C.a.setTournament(t))}}),l.a.createElement(d.a,{type:"submit",size:"lg",variant:"outline-warning",className:"float-right default-color-white",disabled:!a},l.a.createElement("span",{style:{fontSize:"larger",fontWeight:"bolder",padding:"1vw"}},"Prosegui"),l.a.createElement(h.c,{size:"lg"}))))),l.a.createElement(m.a.Footer,null,t.isAdmin?v?l.a.createElement(d.a,{type:"button",size:"lg",variant:"outline-warning",className:"float-left default-color-white",onClick:function(){return R(!1)}},"Seleziona un torneo"):l.a.createElement(d.a,{type:"button",size:"lg",variant:"outline-warning",className:"float-left default-color-white",onClick:function(){return R(!0)}},"Crea un nuovo torneo"):null))))})),function(e){var t=e.name,n=e.date,a=e.progress;return t+" - "+Object(E.b)(n)+"@"+Object(E.f)(a)}),D={option:function(e){return Object(a.a)({},e,{backgroundColor:"white",color:"black","&:hover":{backgroundColor:"#64bd9c",color:"white"}})},control:function(e){return Object(a.a)({},e,{height:"3vmin",marginBottom:"40px"})},singleValue:function(e){return Object(a.a)({},e)},valueContainer:function(e){return Object(a.a)({},e,{height:"100%",fontSize:"larger"})}}}}]);
//# sourceMappingURL=14.66949dba.chunk.js.map