(this.webpackJsonpcalcetto=this.webpackJsonpcalcetto||[]).push([[16],{254:function(e,t,a){"use strict";a.d(t,"g",(function(){return u})),a.d(t,"d",(function(){return i})),a.d(t,"c",(function(){return s})),a.d(t,"f",(function(){return m})),a.d(t,"e",(function(){return f})),a.d(t,"h",(function(){return d})),a.d(t,"b",(function(){return E})),a.d(t,"a",(function(){return p}));var n=a(0),r=a.n(n),l=a(255),o=a(121),c=function(e){var t=e.size,a=e.prefix,n=e.iconName,c=e.color;return r.a.createElement(l.a,{color:c,size:t,icon:Object(o.a)({prefix:a,iconName:n})})},u=function(e){var t=e.size,a=e.color;return r.a.createElement(c,{size:t,color:a,prefix:"far",iconName:"trash-alt"})},i=function(e){var t=e.size,a=e.color;return r.a.createElement(c,{size:t,color:a,prefix:"far",iconName:"save"})},s=function(e){var t=e.size;e.color;return r.a.createElement(c,{size:t,prefix:"fas",iconName:"arrow-alt-circle-right"})},m=function(e){var t=e.size,a=e.color;return r.a.createElement(c,{size:t,color:a,prefix:"fas",iconName:"toggle-on"})},f=function(e){var t=e.size,a=e.color;return r.a.createElement(c,{size:t,color:a,prefix:"fas",iconName:"toggle-off"})},d=function(e){var t=e.size,a=e.color;return r.a.createElement(c,{size:t,color:a,prefix:"fas",iconName:"trophy"})},E=function(e){var t=e.size,a=e.color;return r.a.createElement(c,{size:t,color:a,prefix:"fas",iconName:"angle-double-right"})},p=function(e){var t=e.size,a=e.color;return r.a.createElement(c,{size:t,color:a,prefix:"fas",iconName:"ban"})}},262:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a(120),r=a(0),l=function(e){var t=Object(r.useState)(e),a=Object(n.a)(t,2),l=a[0],o=a[1];return{value:l,setValue:o,reset:function(){return o("")},bind:{value:l,onChange:function(e){o(e.currentTarget.value)}}}}},352:function(e,t,a){"use strict";a.r(t);var n=a(10),r=a.n(n),l=a(13),o=a(22),c=a(120),u=a(0),i=a.n(u),s=a(259),m=a(287),f=a(277),d=a(246),E=a(239),p=a(284),b=a(148),h=a(262),g=a(101),v=a.n(g),y=a(254),O=a(58),j=a(17),z=a(28),x=a(31),N=Object(u.lazy)((function(){return a.e(18).then(a.bind(null,347))}));t.default=function(){var e=Object(x.c)(),t=Object(z.g)(),a=Object(x.d)(O.a.getSession),n=Object(u.useState)(!1),g=Object(c.a)(n,2),w=g[0],C=g[1],S=Object(h.a)(a.user.name),k=S.value,G=S.bind,T=Object(h.a)(a.user.surname),I=T.value,L=T.bind,D=Object(h.a)(a.user.phone),q=D.value,J=D.bind,R=Object(h.a)(a.user.birthday),W=R.value,A=R.setValue,F=Object(u.useState)(""),H=Object(c.a)(F,2),M=H[0],U=H[1],V=Object(u.useState)(""),B=Object(c.a)(V,2),P=B[0],K=B[1],Q=function(e){U(e),setTimeout((function(){return U("")}),3e3)},X=function(){var n=Object(o.a)(r.a.mark((function n(o){var c,u,i;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return o.preventDefault(),n.prev=1,c=a.user,u=Object(l.a)({},c,{name:k,surname:I,phone:q,birthday:W}),n.next=6,fetch("/api/v1/auth/update",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(u)});case 6:return i=n.sent,n.next=9,i.json();case 9:i.ok?(e(j.b.updateSession(u)),K("Aggiornamento effettuato ... "),setTimeout((function(){return K("")}),3e3),setTimeout((function(){return t.push("/")}),3e3)):Q("Errore durante aggiornamento dati"),n.next=15;break;case 12:n.prev=12,n.t0=n.catch(1),Q("Errore durante aggiornamento dati");case 15:case"end":return n.stop()}}),n,null,[[1,12]])})));return function(e){return n.apply(this,arguments)}}();return i.a.createElement(s.a,{md:{span:"6",offset:"3"},sm:"12"},i.a.createElement(m.a,{style:{textAlign:"left",width:"100%",height:"auto",margin:"auto",color:"white"},className:"default-background"},i.a.createElement(f.a,{onSubmit:X},i.a.createElement(m.a.Header,{as:"h2"},"Gestione dati utente"),i.a.createElement(m.a.Body,null,i.a.createElement(d.a,null,M?i.a.createElement(E.a,{key:"auth-alert-error",variant:"danger"},M):null,P?i.a.createElement(E.a,{key:"auth-alert-success",variant:"success"},P):null,i.a.createElement(f.a.Group,{as:p.a,controlId:"username"},i.a.createElement(f.a.Label,{column:!0},"Username"),i.a.createElement(s.a,{sm:"9"},i.a.createElement(f.a.Control,{plaintext:!0,value:a.user.username,readOnly:!0,style:{fontSize:"larger",fontWeight:"bolder"},className:"default-color-white "}))),i.a.createElement(f.a.Group,{as:p.a,controlId:"email"},i.a.createElement(f.a.Label,{column:!0},"Email"),i.a.createElement(s.a,{sm:"9"},i.a.createElement(f.a.Control,{plaintext:!0,value:a.user.email,readOnly:!0,style:{fontSize:"larger",fontWeight:"bolder"},className:"default-color-white"}))),i.a.createElement(f.a.Group,{as:p.a,controlId:"role"},i.a.createElement(f.a.Label,{column:!0},"Ruolo"),i.a.createElement(s.a,{sm:"9"},i.a.createElement(f.a.Control,{plaintext:!0,value:a.user.role,readOnly:!0,style:{fontSize:"larger",fontWeight:"bolder"},className:"default-color-white"}))),i.a.createElement(f.a.Row,null,i.a.createElement(s.a,null,i.a.createElement(f.a.Group,{controlId:"name"},i.a.createElement(f.a.Label,null,"Nome"),i.a.createElement(f.a.Control,Object.assign({required:!0,type:"text",placeholder:"Nome"},G)))),i.a.createElement(s.a,null,i.a.createElement(f.a.Group,{controlId:"surname"},i.a.createElement(f.a.Label,null,"Cognome"),i.a.createElement(f.a.Control,Object.assign({required:!0,type:"text",placeholder:"Cognome"},L))))),i.a.createElement(f.a.Row,null,i.a.createElement(s.a,null,i.a.createElement(f.a.Group,{controlId:"phone"},i.a.createElement(f.a.Label,null,"Telefono"),i.a.createElement(f.a.Control,Object.assign({required:!0,type:"text",placeholder:"Telefono"},J)))),i.a.createElement(s.a,null,i.a.createElement(f.a.Group,{controlId:"birthday"},i.a.createElement(f.a.Label,null,"Data di Nascita"),i.a.createElement(f.a.Control,{as:function(){return i.a.createElement(v.a,{selected:new Date(W),locale:"it",dateFormat:"dd/MM/yyyy",onChange:function(e){return A(e||new Date)}})}})))))),i.a.createElement(m.a.Footer,{style:{height:"10vh"}},i.a.createElement(b.a,{variant:"outline-success",type:"submit",className:"float-right"},i.a.createElement(y.d,null)," Salva"),i.a.createElement(b.a,{variant:"outline-danger",className:"float-left",onClick:function(){return C(!0)}},i.a.createElement(y.g,null)," Elimina Utente"))),i.a.createElement(N,{show:w,onHide:function(){return C(!1)}})))}}}]);
//# sourceMappingURL=16.8ecfad48.chunk.js.map