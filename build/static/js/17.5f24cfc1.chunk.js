(this.webpackJsonpcalcetto=this.webpackJsonpcalcetto||[]).push([[17],{226:function(e,t,a){"use strict";a.d(t,"e",(function(){return o})),a.d(t,"b",(function(){return u})),a.d(t,"d",(function(){return i})),a.d(t,"c",(function(){return s})),a.d(t,"a",(function(){return m}));var n=a(0),r=a.n(n),l=a(231),c=a(99),o=function(e){var t=e.size;return r.a.createElement(l.a,{size:t||void 0,icon:Object(c.a)({prefix:"far",iconName:"trash-alt"})})},u=function(e){var t=e.size;return r.a.createElement(l.a,{size:t||void 0,icon:Object(c.a)({prefix:"far",iconName:"save"})})},i=function(e){var t=e.size;return r.a.createElement(l.a,{size:t||void 0,icon:Object(c.a)({prefix:"fas",iconName:"toggle-on"})})},s=function(e){var t=e.size;return r.a.createElement(l.a,{size:t||void 0,icon:Object(c.a)({prefix:"fas",iconName:"toggle-off"})})},m=function(e){var t=e.size;return r.a.createElement(l.a,{size:t||void 0,icon:Object(c.a)({prefix:"far",iconName:"arrow-alt-circle-right"})})}},232:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a(34),r=a(0),l=function(e){var t=Object(r.useState)(e),a=Object(n.a)(t,2),l=a[0],c=a[1];return{value:l,setValue:c,reset:function(){return c("")},bind:{value:l,onChange:function(e){c(e.currentTarget.value)}}}}},360:function(e,t,a){"use strict";a.r(t);var n=a(47),r=a.n(n),l=a(61),c=a(34),o=a(0),u=a.n(o),i=a(222),s=a(269),m=a(250),d=a(212),f=a(205),E=a(249),b=a(118),p=a(232),h=a(36),v=a(82),g=a.n(v),O=a(226),j=Object(o.lazy)((function(){return a.e(18).then(a.bind(null,354))}));t.default=function(){var e=Object(h.c)(),t=Object(c.a)(e,1)[0],a=Object(o.useState)(!1),n=Object(c.a)(a,2),v=n[0],y=n[1],x=Object(p.a)(t.name),w=x.value,N=x.bind,z=Object(p.a)(t.surname),C=z.value,S=z.bind,k=Object(p.a)(t.phone),G=k.value,T=k.bind,I=Object(p.a)(t.birthday),L=I.value,q=I.setValue,D=Object(o.useState)(""),J=Object(c.a)(D,2),R=J[0],A=J[1],F=Object(o.useState)(""),H=Object(c.a)(F,2),M=H[0],U=H[1],V=function(e){A(e),setTimeout((function(){return A("")}),3e3)},W=function(){var e=Object(l.a)(r.a.mark((function e(a){var n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("onSubmit "),e.prev=1,e.next=4,fetch("/api/v1/auth/update",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:t.username,name:w,surname:C,email:t.email,phone:G,birthday:L})});case 4:return n=e.sent,e.next=7,n.json();case 7:n.ok?(U("Aggiornamento effettuato ... "),setTimeout((function(){return U("")}),3e3)):V("Errore durante aggiornamento dati"),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),V("Errore durante aggiornamento dati");case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}();return console.log("Rendere Edit : ",L),u.a.createElement(i.a,{md:{span:"6",offset:"3"},sm:"12"},u.a.createElement(s.a,{style:{textAlign:"left",width:"100%",height:"auto",margin:"auto",color:"white"},className:"default-background"},u.a.createElement(m.a,{onSubmit:W},u.a.createElement(s.a.Header,{as:"h2"},"Gestione dati utente"),u.a.createElement(s.a.Body,null,u.a.createElement(d.a,null,R?u.a.createElement(f.a,{key:"auth-alert-error",variant:"danger"},R):null,M?u.a.createElement(f.a,{key:"auth-alert-success",variant:"success"},M):null,u.a.createElement(m.a.Group,{as:E.a,controlId:"username"},u.a.createElement(m.a.Label,{column:!0},"Username"),u.a.createElement(i.a,{sm:"9"},u.a.createElement(m.a.Control,{plaintext:!0,value:t.username,readOnly:!0,style:{fontSize:"larger",fontWeight:"bolder"},className:"default-color-white "}))),u.a.createElement(m.a.Group,{as:E.a,controlId:"email"},u.a.createElement(m.a.Label,{column:!0},"Email"),u.a.createElement(i.a,{sm:"9"},u.a.createElement(m.a.Control,{plaintext:!0,value:t.email,readOnly:!0,style:{fontSize:"larger",fontWeight:"bolder"},className:"default-color-white"}))),u.a.createElement(m.a.Row,null,u.a.createElement(i.a,null,u.a.createElement(m.a.Group,{controlId:"name"},u.a.createElement(m.a.Label,null,"Nome"),u.a.createElement(m.a.Control,Object.assign({required:!0,type:"text",placeholder:"Nome"},N)))),u.a.createElement(i.a,null,u.a.createElement(m.a.Group,{controlId:"surname"},u.a.createElement(m.a.Label,null,"Cognome"),u.a.createElement(m.a.Control,Object.assign({required:!0,type:"text",placeholder:"Cognome"},S))))),u.a.createElement(m.a.Row,null,u.a.createElement(i.a,null,u.a.createElement(m.a.Group,{controlId:"phone"},u.a.createElement(m.a.Label,null,"Telefono"),u.a.createElement(m.a.Control,Object.assign({required:!0,type:"text",placeholder:"Telefono"},T)))),u.a.createElement(i.a,null,u.a.createElement(m.a.Group,{controlId:"birthday"},u.a.createElement(m.a.Label,null,"Data di Nascita"),u.a.createElement(m.a.Control,{as:function(){return u.a.createElement(g.a,{selected:new Date(L),locale:"it",dateFormat:"dd/MM/yyyy",onChange:function(e){return q(e||new Date)}})}})))))),u.a.createElement(s.a.Footer,{style:{height:"10vh"}},u.a.createElement(b.a,{variant:"outline-success",type:"submit",className:"float-right"},u.a.createElement(O.b,null)," Salva"),u.a.createElement(b.a,{variant:"outline-danger",className:"float-left",onClick:function(){return y(!0)}},u.a.createElement(O.e,null)," Elimina Utente"))),u.a.createElement(j,{show:v,onHide:function(){return y(!1)}})))}}}]);
//# sourceMappingURL=17.5f24cfc1.chunk.js.map