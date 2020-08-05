(this.webpackJsonpcalcetto=this.webpackJsonpcalcetto||[]).push([[6],{267:function(e,a,t){"use strict";var r=t(0),l=t.n(r).a.createContext({controlId:void 0});a.a=l},270:function(e,a,t){"use strict";var r=t(2),l=t(6),n=t(9),c=t.n(n),i=t(0),o=t.n(i),s=t(5),m=t.n(s),u={type:m.a.string,tooltip:m.a.bool,as:m.a.elementType},d=o.a.forwardRef((function(e,a){var t=e.as,n=void 0===t?"div":t,i=e.className,s=e.type,m=void 0===s?"valid":s,u=e.tooltip,d=void 0!==u&&u,b=Object(l.a)(e,["as","className","type","tooltip"]);return o.a.createElement(n,Object(r.a)({},b,{ref:a,className:c()(i,m+"-"+(d?"tooltip":"feedback"))}))}));d.displayName="Feedback",d.propTypes=u,a.a=d},275:function(e,a,t){"use strict";var r=t(2),l=t(6),n=t(9),c=t.n(n),i=(t(168),t(0)),o=t.n(i),s=(t(63),t(270)),m=t(267),u=t(12),d=o.a.forwardRef((function(e,a){var t,n,s=e.bsPrefix,d=e.bsCustomPrefix,b=e.type,f=e.size,v=e.htmlSize,p=e.id,O=e.className,j=e.isValid,E=void 0!==j&&j,h=e.isInvalid,y=void 0!==h&&h,x=e.plaintext,N=e.readOnly,g=e.custom,C=e.as,P=void 0===C?"input":C,w=Object(l.a)(e,["bsPrefix","bsCustomPrefix","type","size","htmlSize","id","className","isValid","isInvalid","plaintext","readOnly","custom","as"]),I=Object(i.useContext)(m.a).controlId,F=g?[d,"custom"]:[s,"form-control"],k=F[0],S=F[1];if(s=Object(u.a)(k,S),x)(n={})[s+"-plaintext"]=!0,t=n;else if("file"===b){var R;(R={})[s+"-file"]=!0,t=R}else if("range"===b){var T;(T={})[s+"-range"]=!0,t=T}else if("select"===P&&g){var L;(L={})[s+"-select"]=!0,L[s+"-select-"+f]=f,t=L}else{var V;(V={})[s]=!0,V[s+"-"+f]=f,t=V}return o.a.createElement(P,Object(r.a)({},w,{type:b,size:v,ref:a,readOnly:N,id:p||I,className:c()(O,t,E&&"is-valid",y&&"is-invalid")}))}));d.displayName="FormControl",a.a=Object.assign(d,{Feedback:s.a})},277:function(e,a,t){"use strict";t.d(a,"a",(function(){return n}));var r=t(125),l=t(0),n=function(e){var a=Object(l.useState)(e),t=Object(r.a)(a,2),n=t[0],c=t[1];return{value:n,setValue:c,reset:function(){return c(e)},bind:{value:n,onChange:function(e){return c(e.currentTarget.value)}}}}},291:function(e,a,t){"use strict";var r=t(2),l=t(6),n=t(9),c=t.n(n),i=t(0),o=t.n(i),s=(t(168),t(270)),m=t(267),u=t(12),d=o.a.forwardRef((function(e,a){var t=e.id,n=e.bsPrefix,s=e.bsCustomPrefix,d=e.className,b=e.type,f=void 0===b?"checkbox":b,v=e.isValid,p=void 0!==v&&v,O=e.isInvalid,j=void 0!==O&&O,E=e.isStatic,h=e.as,y=void 0===h?"input":h,x=Object(l.a)(e,["id","bsPrefix","bsCustomPrefix","className","type","isValid","isInvalid","isStatic","as"]),N=Object(i.useContext)(m.a),g=N.controlId,C=N.custom?[s,"custom-control-input"]:[n,"form-check-input"],P=C[0],w=C[1];return n=Object(u.a)(P,w),o.a.createElement(y,Object(r.a)({},x,{ref:a,type:f,id:t||g,className:c()(d,n,p&&"is-valid",j&&"is-invalid",E&&"position-static")}))}));d.displayName="FormCheckInput";var b=d,f=o.a.forwardRef((function(e,a){var t=e.bsPrefix,n=e.bsCustomPrefix,s=e.className,d=e.htmlFor,b=Object(l.a)(e,["bsPrefix","bsCustomPrefix","className","htmlFor"]),f=Object(i.useContext)(m.a),v=f.controlId,p=f.custom?[n,"custom-control-label"]:[t,"form-check-label"],O=p[0],j=p[1];return t=Object(u.a)(O,j),o.a.createElement("label",Object(r.a)({},b,{ref:a,htmlFor:d||v,className:c()(s,t)}))}));f.displayName="FormCheckLabel";var v=f,p=o.a.forwardRef((function(e,a){var t=e.id,n=e.bsPrefix,d=e.bsCustomPrefix,f=e.inline,p=void 0!==f&&f,O=e.disabled,j=void 0!==O&&O,E=e.isValid,h=void 0!==E&&E,y=e.isInvalid,x=void 0!==y&&y,N=e.feedbackTooltip,g=void 0!==N&&N,C=e.feedback,P=e.className,w=e.style,I=e.title,F=void 0===I?"":I,k=e.type,S=void 0===k?"checkbox":k,R=e.label,T=e.children,L=e.custom,V=e.as,G=void 0===V?"input":V,z=Object(l.a)(e,["id","bsPrefix","bsCustomPrefix","inline","disabled","isValid","isInvalid","feedbackTooltip","feedback","className","style","title","type","label","children","custom","as"]),M="switch"===S||L,A=M?[d,"custom-control"]:[n,"form-check"],D=A[0],H=A[1];n=Object(u.a)(D,H);var q=Object(i.useContext)(m.a).controlId,B=Object(i.useMemo)((function(){return{controlId:t||q,custom:M}}),[q,M,t]),J=null!=R&&!1!==R&&!T,W=o.a.createElement(b,Object(r.a)({},z,{type:"switch"===S?"checkbox":S,ref:a,isValid:h,isInvalid:x,isStatic:!J,disabled:j,as:G}));return o.a.createElement(m.a.Provider,{value:B},o.a.createElement("div",{style:w,className:c()(P,n,M&&"custom-"+S,p&&n+"-inline")},T||o.a.createElement(o.a.Fragment,null,W,J&&o.a.createElement(v,{title:F},R),(h||x)&&o.a.createElement(s.a,{type:h?"valid":"invalid",tooltip:g},C))))}));p.displayName="FormCheck",p.Input=b,p.Label=v;var O=p,j=o.a.forwardRef((function(e,a){var t=e.id,n=e.bsPrefix,s=e.bsCustomPrefix,d=e.className,b=e.isValid,f=e.isInvalid,v=e.lang,p=e.as,O=void 0===p?"input":p,j=Object(l.a)(e,["id","bsPrefix","bsCustomPrefix","className","isValid","isInvalid","lang","as"]),E=Object(i.useContext)(m.a),h=E.controlId,y=E.custom?[s,"custom-file-input"]:[n,"form-control-file"],x=y[0],N=y[1];return n=Object(u.a)(x,N),o.a.createElement(O,Object(r.a)({},j,{ref:a,id:t||h,type:"file",lang:v,className:c()(d,n,b&&"is-valid",f&&"is-invalid")}))}));j.displayName="FormFileInput";var E=j,h=o.a.forwardRef((function(e,a){var t=e.bsPrefix,n=e.bsCustomPrefix,s=e.className,d=e.htmlFor,b=Object(l.a)(e,["bsPrefix","bsCustomPrefix","className","htmlFor"]),f=Object(i.useContext)(m.a),v=f.controlId,p=f.custom?[n,"custom-file-label"]:[t,"form-file-label"],O=p[0],j=p[1];return t=Object(u.a)(O,j),o.a.createElement("label",Object(r.a)({},b,{ref:a,htmlFor:d||v,className:c()(s,t),"data-browse":b["data-browse"]}))}));h.displayName="FormFileLabel";var y=h,x=o.a.forwardRef((function(e,a){var t=e.id,n=e.bsPrefix,d=e.bsCustomPrefix,b=e.disabled,f=void 0!==b&&b,v=e.isValid,p=void 0!==v&&v,O=e.isInvalid,j=void 0!==O&&O,h=e.feedbackTooltip,x=void 0!==h&&h,N=e.feedback,g=e.className,C=e.style,P=e.label,w=e.children,I=e.custom,F=e.lang,k=e["data-browse"],S=e.as,R=void 0===S?"div":S,T=e.inputAs,L=void 0===T?"input":T,V=Object(l.a)(e,["id","bsPrefix","bsCustomPrefix","disabled","isValid","isInvalid","feedbackTooltip","feedback","className","style","label","children","custom","lang","data-browse","as","inputAs"]),G=I?[d,"custom"]:[n,"form-file"],z=G[0],M=G[1];n=Object(u.a)(z,M);var A=Object(i.useContext)(m.a).controlId,D=Object(i.useMemo)((function(){return{controlId:t||A,custom:I}}),[A,I,t]),H=null!=P&&!1!==P&&!w,q=o.a.createElement(E,Object(r.a)({},V,{ref:a,isValid:p,isInvalid:j,disabled:f,as:L,lang:F}));return o.a.createElement(m.a.Provider,{value:D},o.a.createElement(R,{style:C,className:c()(g,n,I&&"custom-file")},w||o.a.createElement(o.a.Fragment,null,I?o.a.createElement(o.a.Fragment,null,q,H&&o.a.createElement(y,{"data-browse":k},P)):o.a.createElement(o.a.Fragment,null,H&&o.a.createElement(y,null,P),q),(p||j)&&o.a.createElement(s.a,{type:p?"valid":"invalid",tooltip:x},N))))}));x.displayName="FormFile",x.Input=E,x.Label=y;var N=x,g=t(275),C=o.a.forwardRef((function(e,a){var t=e.bsPrefix,n=e.className,s=e.children,d=e.controlId,b=e.as,f=void 0===b?"div":b,v=Object(l.a)(e,["bsPrefix","className","children","controlId","as"]);t=Object(u.a)(t,"form-group");var p=Object(i.useMemo)((function(){return{controlId:d}}),[d]);return o.a.createElement(m.a.Provider,{value:p},o.a.createElement(f,Object(r.a)({},v,{ref:a,className:c()(n,t)}),s))}));C.displayName="FormGroup";var P=C,w=(t(63),t(131)),I=o.a.forwardRef((function(e,a){var t=e.as,n=void 0===t?"label":t,s=e.bsPrefix,d=e.column,b=e.srOnly,f=e.className,v=e.htmlFor,p=Object(l.a)(e,["as","bsPrefix","column","srOnly","className","htmlFor"]),O=Object(i.useContext)(m.a).controlId;s=Object(u.a)(s,"form-label");var j="col-form-label";"string"===typeof d&&(j=j+"-"+d);var E=c()(f,s,b&&"sr-only",d&&j);return v=v||O,d?o.a.createElement(w.a,Object(r.a)({as:"label",className:E,htmlFor:v},p)):o.a.createElement(n,Object(r.a)({ref:a,className:E,htmlFor:v},p))}));I.displayName="FormLabel",I.defaultProps={column:!1,srOnly:!1};var F=I,k=o.a.forwardRef((function(e,a){var t=e.bsPrefix,n=e.className,i=e.as,s=void 0===i?"small":i,m=e.muted,d=Object(l.a)(e,["bsPrefix","className","as","muted"]);return t=Object(u.a)(t,"form-text"),o.a.createElement(s,Object(r.a)({},d,{ref:a,className:c()(n,t,m&&"text-muted")}))}));k.displayName="FormText";var S=k,R=o.a.forwardRef((function(e,a){return o.a.createElement(O,Object(r.a)({},e,{ref:a,type:"switch"}))}));R.displayName="Switch",R.Input=O.Input,R.Label=O.Label;var T=R,L=t(28),V=Object(L.a)("form-row"),G=o.a.forwardRef((function(e,a){var t=e.bsPrefix,n=e.inline,i=e.className,s=e.validated,m=e.as,d=void 0===m?"form":m,b=Object(l.a)(e,["bsPrefix","inline","className","validated","as"]);return t=Object(u.a)(t,"form"),o.a.createElement(d,Object(r.a)({},b,{ref:a,className:c()(i,s&&"was-validated",n&&t+"-inline")}))}));G.displayName="Form",G.defaultProps={inline:!1},G.Row=V,G.Group=P,G.Control=g.a,G.Check=O,G.File=N,G.Switch=T,G.Label=F,G.Text=S;a.a=G},305:function(e,a,t){"use strict";var r=t(2),l=t(6),n=t(9),c=t.n(n),i=t(0),o=t.n(i),s=t(12),m=t(28),u=t(87),d=t(129),b=o.a.forwardRef((function(e,a){var t=e.bsPrefix,n=e.className,i=e.variant,m=e.as,u=void 0===m?"img":m,d=Object(l.a)(e,["bsPrefix","className","variant","as"]),b=Object(s.a)(t,"card-img");return o.a.createElement(u,Object(r.a)({ref:a,className:c()(i?b+"-"+i:b,n)},d))}));b.displayName="CardImg",b.defaultProps={variant:null};var f=b,v=Object(u.a)("h5"),p=Object(u.a)("h6"),O=Object(m.a)("card-body"),j=Object(m.a)("card-title",{Component:v}),E=Object(m.a)("card-subtitle",{Component:p}),h=Object(m.a)("card-link",{Component:"a"}),y=Object(m.a)("card-text",{Component:"p"}),x=Object(m.a)("card-header"),N=Object(m.a)("card-footer"),g=Object(m.a)("card-img-overlay"),C=o.a.forwardRef((function(e,a){var t=e.bsPrefix,n=e.className,m=e.bg,u=e.text,b=e.border,f=e.body,v=e.children,p=e.as,j=void 0===p?"div":p,E=Object(l.a)(e,["bsPrefix","className","bg","text","border","body","children","as"]),h=Object(s.a)(t,"card"),y=Object(i.useMemo)((function(){return{cardHeaderBsPrefix:h+"-header"}}),[h]);return o.a.createElement(d.a.Provider,{value:y},o.a.createElement(j,Object(r.a)({ref:a},E,{className:c()(n,h,m&&"bg-"+m,u&&"text-"+u,b&&"border-"+b)}),f?o.a.createElement(O,null,v):v))}));C.displayName="Card",C.defaultProps={body:!1},C.Img=f,C.Title=j,C.Subtitle=E,C.Body=O,C.Link=h,C.Text=y,C.Header=x,C.Footer=N,C.ImgOverlay=g;a.a=C},369:function(e,a,t){"use strict";t.r(a);var r=t(8),l=t.n(r),n=t(14),c=t(20),i=t(125),o=t(0),s=t.n(o),m=t(131),u=t(305),d=t(291),b=t(167),f=t(106),v=t(254),p=t(255),O=t(277),j=t(108),E=t.n(j),h=t(126),y=t(54),x=t(17),N=t(19),g=t(37),C=Object(o.lazy)((function(){return t.e(15).then(t.bind(null,366))}));a.default=function(){var e=Object(g.b)(),a=Object(N.g)(),t=Object(g.c)(y.a.getSession),r=Object(o.useState)(!1),j=Object(i.a)(r,2),P=j[0],w=j[1],I=Object(O.a)(t.user.name),F=I.value,k=I.bind,S=Object(O.a)(t.user.surname),R=S.value,T=S.bind,L=Object(O.a)(t.user.phone),V=L.value,G=L.bind,z=Object(O.a)(t.user.birthday),M=z.value,A=z.setValue,D=Object(o.useState)(""),H=Object(i.a)(D,2),q=H[0],B=H[1],J=Object(o.useState)(""),W=Object(i.a)(J,2),U=W[0],K=W[1],Q=function(e){B(e),setTimeout((function(){return B("")}),3e3)},X=function(){var r=Object(c.a)(l.a.mark((function r(c){var i,o,s;return l.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return c.preventDefault(),r.prev=1,i=t.user,o=Object(n.a)(Object(n.a)({},i),{},{name:F,surname:R,phone:V,birthday:M}),r.next=6,fetch("/api/v1/auth/update",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)});case 6:return s=r.sent,r.next=9,s.json();case 9:s.ok?(e(x.c.updateSession({user:o})),K("Aggiornamento effettuato ... "),setTimeout((function(){return K("")}),3e3),setTimeout((function(){return a.push("/")}),3e3)):Q("Errore durante aggiornamento dati"),r.next=15;break;case 12:r.prev=12,r.t0=r.catch(1),Q("Errore durante aggiornamento dati");case 15:case"end":return r.stop()}}),r,null,[[1,12]])})));return function(e){return r.apply(this,arguments)}}();return s.a.createElement(m.a,{md:{span:"6",offset:"3"},sm:"12"},s.a.createElement(u.a,{style:{textAlign:"left",width:"100%",height:"auto",margin:"auto",color:"white"},className:"default-background"},s.a.createElement(d.a,{onSubmit:X},s.a.createElement(u.a.Header,{as:"h2"},s.a.createElement(b.a,null,s.a.createElement(m.a,{md:"9"},"Gestione dati utente"),s.a.createElement(m.a,{md:"3"},s.a.createElement(f.a,{variant:"outline-warning",className:"float-right",onClick:function(){return a.push("/")}},s.a.createElement(h.i,null)," Chiudi")))),s.a.createElement(u.a.Body,null,s.a.createElement(v.a,null,q?s.a.createElement(p.a,{key:"auth-alert-error",variant:"danger"},q):null,U?s.a.createElement(p.a,{key:"auth-alert-success",variant:"success"},U):null,s.a.createElement(d.a.Group,{as:b.a,controlId:"username"},s.a.createElement(d.a.Label,{column:!0},"Username"),s.a.createElement(m.a,{sm:"9"},s.a.createElement(d.a.Control,{plaintext:!0,value:t.user.username,readOnly:!0,style:{fontSize:"larger",fontWeight:"bolder"},className:"default-color-white "}))),s.a.createElement(d.a.Group,{as:b.a,controlId:"email"},s.a.createElement(d.a.Label,{column:!0},"Email"),s.a.createElement(m.a,{sm:"9"},s.a.createElement(d.a.Control,{plaintext:!0,value:t.user.email,readOnly:!0,style:{fontSize:"larger",fontWeight:"bolder"},className:"default-color-white"}))),s.a.createElement(d.a.Group,{as:b.a,controlId:"role"},s.a.createElement(d.a.Label,{column:!0},"Ruolo"),s.a.createElement(m.a,{sm:"9"},s.a.createElement(d.a.Control,{plaintext:!0,value:t.user.role,readOnly:!0,style:{fontSize:"larger",fontWeight:"bolder"},className:"default-color-white"}))),s.a.createElement(d.a.Row,null,s.a.createElement(m.a,null,s.a.createElement(d.a.Group,{controlId:"name"},s.a.createElement(d.a.Label,null,"Nome"),s.a.createElement(d.a.Control,Object.assign({required:!0,type:"text",placeholder:"Nome"},k)))),s.a.createElement(m.a,null,s.a.createElement(d.a.Group,{controlId:"surname"},s.a.createElement(d.a.Label,null,"Cognome"),s.a.createElement(d.a.Control,Object.assign({required:!0,type:"text",placeholder:"Cognome"},T))))),s.a.createElement(d.a.Row,null,s.a.createElement(m.a,null,s.a.createElement(d.a.Group,{controlId:"phone"},s.a.createElement(d.a.Label,null,"Telefono"),s.a.createElement(d.a.Control,Object.assign({required:!0,type:"text",placeholder:"Telefono"},G)))),s.a.createElement(m.a,null,s.a.createElement(d.a.Group,{controlId:"birthday"},s.a.createElement(d.a.Label,null,"Data di Nascita"),s.a.createElement(d.a.Control,{as:function(){return s.a.createElement(E.a,{selected:new Date(M),locale:"it-IT",dateFormat:"dd/MM/yyyy",onChange:function(e){return A(e||new Date)}})}})))))),s.a.createElement(u.a.Footer,{style:{height:"10vh"}},s.a.createElement(f.a,{variant:"outline-success",type:"submit",className:"float-right"},s.a.createElement(h.h,null)," Salva"),s.a.createElement(f.a,{variant:"outline-danger",className:"float-left",onClick:function(){return w(!0)}},s.a.createElement(h.l,null)," Elimina Utente"))),s.a.createElement(C,{show:P,onHide:function(){return w(!1)}})))}}}]);
//# sourceMappingURL=6.e5b4ac02.chunk.js.map