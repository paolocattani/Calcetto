(this.webpackJsonpcalcetto=this.webpackJsonpcalcetto||[]).push([[10],{270:function(e,a,t){"use strict";t.d(a,"e",(function(){return l})),t.d(a,"b",(function(){return n})),t.d(a,"d",(function(){return o})),t.d(a,"a",(function(){return s})),t.d(a,"c",(function(){return c}));var r=t(127);function l(e){switch(e){case r.a.New:return"Nuovo";case r.a.PairsSelection:return"Selezione Coppie";case r.a.Stage1:return"Fase 1";case r.a.Stage2:return"Fase 2";default:return""}}function n(e){var a=new Date(e),t=""+(a.getMonth()+1),r=""+a.getDate(),l=a.getFullYear();return t.length<2&&(t="0"+t),r.length<2&&(r="0"+r),[l,t,r].join("/")}new RegExp("^d{10}$");var o=new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,16})"),s=new RegExp("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$");function c(e,a){return Math.log(a)/Math.log(e)}},276:function(e,a,t){"use strict";t.d(a,"a",(function(){return n}));var r=t(125),l=t(0),n=function(e){var a=Object(l.useState)(e),t=Object(r.a)(a,2),n=t[0],o=t[1];return{value:n,setValue:o,reset:function(){return o(e)},bind:{value:n,onChange:function(e){return o(e.currentTarget.value)}}}}},291:function(e,a,t){"use strict";var r=t(2),l=t(7),n=t(11),o=t.n(n),s=t(0),c=t.n(s),i=(t(167),t(269)),u=t(266),m=t(15),d=c.a.forwardRef((function(e,a){var t=e.id,n=e.bsPrefix,i=e.bsCustomPrefix,d=e.className,b=e.type,f=void 0===b?"checkbox":b,p=e.isValid,v=void 0!==p&&p,E=e.isInvalid,O=void 0!==E&&E,j=e.isStatic,h=e.as,y=void 0===h?"input":h,x=Object(l.a)(e,["id","bsPrefix","bsCustomPrefix","className","type","isValid","isInvalid","isStatic","as"]),g=Object(s.useContext)(u.a),w=g.controlId,P=g.custom?[i,"custom-control-input"]:[n,"form-check-input"],N=P[0],I=P[1];return n=Object(m.a)(N,I),c.a.createElement(y,Object(r.a)({},x,{ref:a,type:f,id:t||w,className:o()(d,n,v&&"is-valid",O&&"is-invalid",j&&"position-static")}))}));d.displayName="FormCheckInput";var b=d,f=c.a.forwardRef((function(e,a){var t=e.bsPrefix,n=e.bsCustomPrefix,i=e.className,d=e.htmlFor,b=Object(l.a)(e,["bsPrefix","bsCustomPrefix","className","htmlFor"]),f=Object(s.useContext)(u.a),p=f.controlId,v=f.custom?[n,"custom-control-label"]:[t,"form-check-label"],E=v[0],O=v[1];return t=Object(m.a)(E,O),c.a.createElement("label",Object(r.a)({},b,{ref:a,htmlFor:d||p,className:o()(i,t)}))}));f.displayName="FormCheckLabel";var p=f,v=c.a.forwardRef((function(e,a){var t=e.id,n=e.bsPrefix,d=e.bsCustomPrefix,f=e.inline,v=void 0!==f&&f,E=e.disabled,O=void 0!==E&&E,j=e.isValid,h=void 0!==j&&j,y=e.isInvalid,x=void 0!==y&&y,g=e.feedbackTooltip,w=void 0!==g&&g,P=e.feedback,N=e.className,I=e.style,C=e.title,k=void 0===C?"":C,F=e.type,R=void 0===F?"checkbox":F,L=e.label,S=e.children,A=e.custom,G=e.as,V=void 0===G?"input":G,T=Object(l.a)(e,["id","bsPrefix","bsCustomPrefix","inline","disabled","isValid","isInvalid","feedbackTooltip","feedback","className","style","title","type","label","children","custom","as"]),q="switch"===R||A,z=q?[d,"custom-control"]:[n,"form-check"],M=z[0],Z=z[1];n=Object(m.a)(M,Z);var D=Object(s.useContext)(u.a).controlId,J=Object(s.useMemo)((function(){return{controlId:t||D,custom:q}}),[D,q,t]),U=null!=L&&!1!==L&&!S,$=c.a.createElement(b,Object(r.a)({},T,{type:"switch"===R?"checkbox":R,ref:a,isValid:h,isInvalid:x,isStatic:!U,disabled:O,as:V}));return c.a.createElement(u.a.Provider,{value:J},c.a.createElement("div",{style:I,className:o()(N,n,q&&"custom-"+R,v&&n+"-inline")},S||c.a.createElement(c.a.Fragment,null,$,U&&c.a.createElement(p,{title:k},L),(h||x)&&c.a.createElement(i.a,{type:h?"valid":"invalid",tooltip:w},P))))}));v.displayName="FormCheck",v.Input=b,v.Label=p;var E=v,O=c.a.forwardRef((function(e,a){var t=e.id,n=e.bsPrefix,i=e.bsCustomPrefix,d=e.className,b=e.isValid,f=e.isInvalid,p=e.lang,v=e.as,E=void 0===v?"input":v,O=Object(l.a)(e,["id","bsPrefix","bsCustomPrefix","className","isValid","isInvalid","lang","as"]),j=Object(s.useContext)(u.a),h=j.controlId,y=j.custom?[i,"custom-file-input"]:[n,"form-control-file"],x=y[0],g=y[1];return n=Object(m.a)(x,g),c.a.createElement(E,Object(r.a)({},O,{ref:a,id:t||h,type:"file",lang:p,className:o()(d,n,b&&"is-valid",f&&"is-invalid")}))}));O.displayName="FormFileInput";var j=O,h=c.a.forwardRef((function(e,a){var t=e.bsPrefix,n=e.bsCustomPrefix,i=e.className,d=e.htmlFor,b=Object(l.a)(e,["bsPrefix","bsCustomPrefix","className","htmlFor"]),f=Object(s.useContext)(u.a),p=f.controlId,v=f.custom?[n,"custom-file-label"]:[t,"form-file-label"],E=v[0],O=v[1];return t=Object(m.a)(E,O),c.a.createElement("label",Object(r.a)({},b,{ref:a,htmlFor:d||p,className:o()(i,t),"data-browse":b["data-browse"]}))}));h.displayName="FormFileLabel";var y=h,x=c.a.forwardRef((function(e,a){var t=e.id,n=e.bsPrefix,d=e.bsCustomPrefix,b=e.disabled,f=void 0!==b&&b,p=e.isValid,v=void 0!==p&&p,E=e.isInvalid,O=void 0!==E&&E,h=e.feedbackTooltip,x=void 0!==h&&h,g=e.feedback,w=e.className,P=e.style,N=e.label,I=e.children,C=e.custom,k=e.lang,F=e["data-browse"],R=e.as,L=void 0===R?"div":R,S=e.inputAs,A=void 0===S?"input":S,G=Object(l.a)(e,["id","bsPrefix","bsCustomPrefix","disabled","isValid","isInvalid","feedbackTooltip","feedback","className","style","label","children","custom","lang","data-browse","as","inputAs"]),V=C?[d,"custom"]:[n,"form-file"],T=V[0],q=V[1];n=Object(m.a)(T,q);var z=Object(s.useContext)(u.a).controlId,M=Object(s.useMemo)((function(){return{controlId:t||z,custom:C}}),[z,C,t]),Z=null!=N&&!1!==N&&!I,D=c.a.createElement(j,Object(r.a)({},G,{ref:a,isValid:v,isInvalid:O,disabled:f,as:A,lang:k}));return c.a.createElement(u.a.Provider,{value:M},c.a.createElement(L,{style:P,className:o()(w,n,C&&"custom-file")},I||c.a.createElement(c.a.Fragment,null,C?c.a.createElement(c.a.Fragment,null,D,Z&&c.a.createElement(y,{"data-browse":F},N)):c.a.createElement(c.a.Fragment,null,Z&&c.a.createElement(y,null,N),D),(v||O)&&c.a.createElement(i.a,{type:v?"valid":"invalid",tooltip:x},g))))}));x.displayName="FormFile",x.Input=j,x.Label=y;var g=x,w=t(274),P=c.a.forwardRef((function(e,a){var t=e.bsPrefix,n=e.className,i=e.children,d=e.controlId,b=e.as,f=void 0===b?"div":b,p=Object(l.a)(e,["bsPrefix","className","children","controlId","as"]);t=Object(m.a)(t,"form-group");var v=Object(s.useMemo)((function(){return{controlId:d}}),[d]);return c.a.createElement(u.a.Provider,{value:v},c.a.createElement(f,Object(r.a)({},p,{ref:a,className:o()(n,t)}),i))}));P.displayName="FormGroup";var N=P,I=(t(64),t(131)),C=c.a.forwardRef((function(e,a){var t=e.as,n=void 0===t?"label":t,i=e.bsPrefix,d=e.column,b=e.srOnly,f=e.className,p=e.htmlFor,v=Object(l.a)(e,["as","bsPrefix","column","srOnly","className","htmlFor"]),E=Object(s.useContext)(u.a).controlId;i=Object(m.a)(i,"form-label");var O="col-form-label";"string"===typeof d&&(O=O+"-"+d);var j=o()(f,i,b&&"sr-only",d&&O);return p=p||E,d?c.a.createElement(I.a,Object(r.a)({as:"label",className:j,htmlFor:p},v)):c.a.createElement(n,Object(r.a)({ref:a,className:j,htmlFor:p},v))}));C.displayName="FormLabel",C.defaultProps={column:!1,srOnly:!1};var k=C,F=c.a.forwardRef((function(e,a){var t=e.bsPrefix,n=e.className,s=e.as,i=void 0===s?"small":s,u=e.muted,d=Object(l.a)(e,["bsPrefix","className","as","muted"]);return t=Object(m.a)(t,"form-text"),c.a.createElement(i,Object(r.a)({},d,{ref:a,className:o()(n,t,u&&"text-muted")}))}));F.displayName="FormText";var R=F,L=c.a.forwardRef((function(e,a){return c.a.createElement(E,Object(r.a)({},e,{ref:a,type:"switch"}))}));L.displayName="Switch",L.Input=E.Input,L.Label=E.Label;var S=L,A=t(30),G=Object(A.a)("form-row"),V=c.a.forwardRef((function(e,a){var t=e.bsPrefix,n=e.inline,s=e.className,i=e.validated,u=e.as,d=void 0===u?"form":u,b=Object(l.a)(e,["bsPrefix","inline","className","validated","as"]);return t=Object(m.a)(t,"form"),c.a.createElement(d,Object(r.a)({},b,{ref:a,className:o()(s,i&&"was-validated",n&&t+"-inline")}))}));V.displayName="Form",V.defaultProps={inline:!1},V.Row=G,V.Group=N,V.Control=w.a,V.Check=E,V.File=g,V.Switch=S,V.Label=k,V.Text=R;a.a=V},364:function(e,a,t){"use strict";t.r(a);var r=t(10),l=t(5),n=t.n(l),o=t(20),s=t(276),c=t(291),i=t(131),u=t(96),m=t(0),d=t.n(m),b=t(108),f=t.n(b),p=t(282),v=(t(365),t(270)),E=t(12),O=t(37),j=t(21),h=t(87),y=t(22),x=[{value:h.PlayerRole.NotAPlayer,label:h.PlayerRole.NotAPlayer},{value:h.PlayerRole.GoalKeeper,label:h.PlayerRole.GoalKeeper},{value:h.PlayerRole.Striker,label:h.PlayerRole.Striker},{value:h.PlayerRole.Master,label:h.PlayerRole.Master}];a.default=Object(j.i)((function(e){e.setErrorMessage;var a=Object(O.b)(),t=Object(j.g)(),r=Object(s.a)(""),l=r.value,m=r.bind,b=r.reset,h=Object(s.a)(""),w=h.value,P=h.bind,N=h.reset,I=Object(s.a)(""),C=I.value,k=I.bind,F=I.reset,R=Object(s.a)(""),L=R.value,S=R.bind,A=R.reset,G=Object(s.a)(""),V=G.value,T=G.bind,q=G.reset,z=Object(s.a)(""),M=z.value,Z=z.bind,D=z.reset,J=Object(s.a)(""),U=J.value,$=J.bind,K=J.reset,B=Object(s.a)(""),Y=B.value,_=B.bind,H=B.reset,Q=Object(s.a)(new Date),W=Q.value,X=Q.setValue,ee=Q.reset,ae=Object(s.a)(x[0]),te=ae.value,re=ae.setValue,le=ae.reset,ne=function(){var e=Object(o.a)(n.a.mark((function e(r){var o,s,c;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.preventDefault(),l?w?C?L?v.a.test(L)?V?v.a.test(V)?L!==V?(y.b.error("Le email non corrispondono"),0):M?v.d.test(M)?U?v.d.test(U)?M===U||(y.b.error("Le password non corrispondono"),0):(y.b.error("La password non rispetta i criteri"),0):(y.b.error("Inserire la conferma password"),0):(y.b.error("La password non rispetta i criteri"),0):(y.b.error("Inserire una password"),0):(y.b.error("Inserire una email valida"),0):(y.b.error("Inserire la conferma email"),0):(y.b.error("Inserire una email valida"),0):(y.b.error("Inserire una email"),0):(y.b.error("Inserire il cognome"),0):(y.b.error("Inserire il nome"),0):(y.b.error("Scegli uno username"),0)){e.next=3;break}return e.abrupt("return");case 3:return e.prev=3,e.next=6,fetch("/api/v1/auth/register",{method:"POST",body:JSON.stringify({username:l,name:w,surname:C,email:L,password:M,phone:Y,birthday:W,playerRole:te}),headers:{"Content-Type":"application/json"}});case 6:return o=e.sent,e.next=9,o.json();case 9:if(s=e.sent,!o.ok||!s){e.next=17;break}c={type:"success",message:"Benvenuto ".concat(s.username," !")},y.b.success(c.message),a(E.d.updateSession({user:s})),a(E.d.sessionControl.request({history:t})),e.next=25;break;case 17:e.t0=o.status,e.next=401===e.t0?20:403===e.t0?22:24;break;case 20:return y.b.error("Utente o Password errata"),e.abrupt("break",25);case 22:return y.b.error("Utente o Email gia registrati"),e.abrupt("break",25);case 24:return e.abrupt("break",25);case 25:e.next=31;break;case 27:e.prev=27,e.t1=e.catch(3),console.error("onSubmitLogin : ",e.t1),y.b.error("Errore durante il processo di registrazione. Riprovare piu tardi");case 31:case"end":return e.stop()}}),e,null,[[3,27]])})));return function(a){return e.apply(this,arguments)}}();return d.a.createElement(c.a,{onSubmit:ne},d.a.createElement(c.a.Row,null,d.a.createElement(i.a,null,d.a.createElement(c.a.Group,{controlId:"username"},d.a.createElement(c.a.Label,null,"Username"),d.a.createElement(c.a.Control,Object.assign({required:!0,type:"text",placeholder:"username"},m)))),d.a.createElement(i.a,null,d.a.createElement(c.a.Group,{controlId:"name"},d.a.createElement(c.a.Label,null,"Nome"),d.a.createElement(c.a.Control,Object.assign({required:!0,type:"text",placeholder:"Nome"},P)))),d.a.createElement(i.a,null,d.a.createElement(c.a.Group,{controlId:"surname"},d.a.createElement(c.a.Label,null,"Cognome"),d.a.createElement(c.a.Control,Object.assign({required:!0,type:"text",placeholder:"Cognome"},k))))),d.a.createElement(c.a.Row,null,d.a.createElement(i.a,null,d.a.createElement(c.a.Group,{controlId:"email"},d.a.createElement(c.a.Label,null,"Email"),d.a.createElement(c.a.Control,Object.assign({required:!0,type:"email",placeholder:"Email"},S)))),d.a.createElement(i.a,null,d.a.createElement(c.a.Group,{controlId:"cemail"},d.a.createElement(c.a.Label,null,"Conferma Email"),d.a.createElement(c.a.Control,Object.assign({required:!0,type:"email",placeholder:"Conferma Email"},T))))),d.a.createElement(c.a.Row,null,d.a.createElement(i.a,null,d.a.createElement(c.a.Group,{controlId:"password"},d.a.createElement(c.a.Label,null,"Password"),d.a.createElement(c.a.Control,Object.assign({required:!0,type:"password",placeholder:"Password"},Z))),d.a.createElement(c.a.Group,{controlId:"cpassword"},d.a.createElement(c.a.Label,null,"Conferma Password"),d.a.createElement(c.a.Control,Object.assign({required:!0,type:"password",placeholder:"Conferma Password"},$)))),d.a.createElement(i.a,{md:6,style:{display:"flex",alignItems:"center"}},d.a.createElement("ul",null,d.a.createElement("strong",null,"La password deve rispettare i sequenti criteri :"),d.a.createElement("li",{key:"pass-1"},"Almeno 1 carattere minuscolo"),d.a.createElement("li",{key:"pass-2"},"Almeno 1 carattere maiuscolo"),d.a.createElement("li",{key:"pass-3"},"Almeno 1 carattere numerico"),d.a.createElement("li",{key:"pass-5"},"Tra 8 e 16 caratteri")))),d.a.createElement(c.a.Row,null,d.a.createElement(i.a,{md:3},d.a.createElement(c.a.Group,{controlId:"phone"},d.a.createElement(c.a.Label,null,"Telefono"),d.a.createElement(c.a.Control,Object.assign({type:"text",placeholder:"Telefono"},_)))),d.a.createElement(i.a,{md:3},d.a.createElement(c.a.Group,{controlId:"birthday"},d.a.createElement(c.a.Label,null,"Data di nascita"),d.a.createElement(f.a,{className:"datepicker",dateFormat:"dd/MM/yyyy",required:!0,selected:W,onChange:function(e){return X(e)}}))),d.a.createElement(i.a,{md:6},d.a.createElement(c.a.Group,null,d.a.createElement(c.a.Label,null,"Ruolo"),d.a.createElement(p.a,{value:te,onChange:function(e){var a;(a=e)&&re(a)},options:x,styles:g}),d.a.createElement(c.a.Text,{className:"text-muted default-color-green"},"Sei un giocatore? Assegna qui il tuo ruolo.")))),d.a.createElement(u.a,{variant:"outline-success",className:"float-right",type:"submit",size:"lg"},"Conferma"),d.a.createElement(u.a,{variant:"outline-danger",className:"float-left",onClick:function(){b(),N(),F(),A(),q(),D(),K(),H(),ee(),le()},type:"submit"},"Reset"))}));var g={control:function(e){return Object(r.a)(Object(r.a)({},e),{},{height:"38px"})},input:function(e){return Object(r.a)(Object(r.a)({},e),{},{height:"38px"})},option:function(e,a){a.data,a.isDisabled,a.isFocused,a.isSelected;return Object(r.a)(Object(r.a)({},e),{},{color:"black"})},placeholder:function(e){return Object(r.a)(Object(r.a)({},e),{},{height:"38px"})},singleValue:function(e,a){a.data;return Object(r.a)(Object(r.a)({},e),{},{height:"38px"})},clearIndicator:function(e){return Object(r.a)(Object(r.a)({},e),{},{height:"38px"})},indicatorSeparator:function(e){return Object(r.a)({},e)}}},365:function(e,a,t){}}]);
//# sourceMappingURL=10.63632bae.chunk.js.map