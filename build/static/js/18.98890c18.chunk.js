(this.webpackJsonpcalcetto=this.webpackJsonpcalcetto||[]).push([[18],{356:function(e,a,t){"use strict";t.r(a);var r=t(7),n=t.n(r),l=t(23),o=t(122),s=t(0),c=t.n(s),i=t(18),u=t(244),m=t(283),d=t(158),p=t(126),E=t(101),f=t(51),b=t(243),h=t(266),g=t(258),w=t(43),v=t(29),y=t(17);a.default=function(e){var a=e.show,t=e.onHide,r=Object(v.c)(),O=Object(i.g)(),j=Object(v.d)(w.a.getSession),k=Object(s.useState)(""),C=Object(o.a)(k,2),S=C[0],z=C[1],x=Object(h.a)(""),N=x.value,L=x.bind,T=function(e){z(e),setTimeout((function(){return z("")}),3e3)},A=function(){var e=Object(l.a)(n.a.mark((function e(a,l,o){var s,c;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.prev=1,e.next=4,fetch("/api/v1/auth/",{method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:l,username:o,password:N})});case 4:return s=e.sent,e.next=7,s.json();case 7:c=e.sent,s.ok&&c?(r(y.b.updateSession({})),t(),O.push("/")):401===s.status?T("Utente o Password errata"):T("Errore durante il processo di registrazione. Riprovare piu tardi"),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(1),console.log("onSubmitLogin : ",e.t0),T("Errore durante il processo di registrazione. Riprovare piu tardi");case 15:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(a,t,r){return e.apply(this,arguments)}}(),G=S?c.a.createElement(u.a,{key:"auth-alert",variant:"danger"},S," "):null,H=c.a.createElement(m.a,{onSubmit:function(e){return A(e,j.user.email,j.user.username)}},c.a.createElement(m.a.Group,{as:d.a,controlId:"email"},c.a.createElement(m.a.Label,{column:!0,sm:"2"},"Email"),c.a.createElement(p.a,{sm:"10"},c.a.createElement(m.a.Control,{style:{fontSize:"larger",fontWeight:"bolder"},className:"default-color-white",plaintext:!0,readOnly:!0,defaultValue:j.user.email}))),c.a.createElement(m.a.Group,{as:d.a,controlId:"username"},c.a.createElement(m.a.Label,{column:!0,sm:"2"},"Username"),c.a.createElement(p.a,{sm:"10"},c.a.createElement(m.a.Control,{style:{fontSize:"larger",fontWeight:"bolder"},className:"default-color-white",plaintext:!0,readOnly:!0,defaultValue:j.user.username}))),c.a.createElement(m.a.Group,{as:d.a,controlId:"password"},c.a.createElement(m.a.Label,{column:!0,sm:"2"},"Password"),c.a.createElement(p.a,{sm:"10"},c.a.createElement(m.a.Control,Object.assign({type:"password",placeholder:"Password"},L)))),c.a.createElement(E.a,{size:"lg",className:"float-left",onClick:t,variant:"outline-success",type:"button"},"Annulla"),c.a.createElement(E.a,{size:"lg",className:"float-right",variant:"outline-danger",type:"submit"},c.a.createElement(g.g,null)," Conferma"));return c.a.createElement(f.a,{show:a,onHide:t,size:"lg",centered:!0},c.a.createElement(f.a.Header,{style:{backgroundColor:"#343A40",color:"white"},closeButton:!0},c.a.createElement(f.a.Title,{className:"default-color-red"},"Elimina Utente")),c.a.createElement(f.a.Body,{style:{backgroundColor:"#343A40",color:"white"}},c.a.createElement(b.a,{fluid:!0},G,H)))}}}]);
//# sourceMappingURL=18.98890c18.chunk.js.map