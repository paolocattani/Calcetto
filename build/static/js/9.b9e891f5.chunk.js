(this.webpackJsonpcalcetto=this.webpackJsonpcalcetto||[]).push([[9],{272:function(e,a,t){"use strict";var r=t(0),l=t.n(r).a.createContext({controlId:void 0});a.a=l},275:function(e,a,t){"use strict";var r=t(2),l=t(7),i=t(11),s=t.n(i),n=t(0),o=t.n(n),c=t(8),d=t.n(c),m={type:d.a.string,tooltip:d.a.bool,as:d.a.elementType},u=o.a.forwardRef((function(e,a){var t=e.as,i=void 0===t?"div":t,n=e.className,c=e.type,d=void 0===c?"valid":c,m=e.tooltip,u=void 0!==m&&m,b=Object(l.a)(e,["as","className","type","tooltip"]);return o.a.createElement(i,Object(r.a)({},b,{ref:a,className:s()(n,d+"-"+(u?"tooltip":"feedback"))}))}));u.displayName="Feedback",u.propTypes=m,a.a=u},280:function(e,a,t){"use strict";var r=t(2),l=t(7),i=t(11),s=t.n(i),n=(t(172),t(0)),o=t.n(n),c=(t(66),t(275)),d=t(272),m=t(13),u=o.a.forwardRef((function(e,a){var t,i,c=e.bsPrefix,u=e.bsCustomPrefix,b=e.type,f=e.size,v=e.htmlSize,p=e.id,O=e.className,j=e.isValid,x=void 0!==j&&j,y=e.isInvalid,N=void 0!==y&&y,h=e.plaintext,P=e.readOnly,E=e.custom,I=e.as,w=void 0===I?"input":I,C=Object(l.a)(e,["bsPrefix","bsCustomPrefix","type","size","htmlSize","id","className","isValid","isInvalid","plaintext","readOnly","custom","as"]),F=Object(n.useContext)(d.a).controlId,k=E?[u,"custom"]:[c,"form-control"],g=k[0],R=k[1];if(c=Object(m.a)(g,R),h)(i={})[c+"-plaintext"]=!0,t=i;else if("file"===b){var V;(V={})[c+"-file"]=!0,t=V}else if("range"===b){var S;(S={})[c+"-range"]=!0,t=S}else if("select"===w&&E){var L;(L={})[c+"-select"]=!0,L[c+"-select-"+f]=f,t=L}else{var T;(T={})[c]=!0,T[c+"-"+f]=f,t=T}return o.a.createElement(w,Object(r.a)({},C,{type:b,size:v,ref:a,readOnly:P,id:p||F,className:s()(O,t,x&&"is-valid",N&&"is-invalid")}))}));u.displayName="FormControl",a.a=Object.assign(u,{Feedback:c.a})},282:function(e,a,t){"use strict";t.d(a,"a",(function(){return i}));var r=t(131),l=t(0),i=function(e){var a=Object(l.useState)(e),t=Object(r.a)(a,2),i=t[0],s=t[1];return{value:i,setValue:s,reset:function(){return s(e)},bind:{value:i,onChange:function(e){return s(e.currentTarget.value.trim())}}}}},297:function(e,a,t){"use strict";var r=t(2),l=t(7),i=t(11),s=t.n(i),n=t(0),o=t.n(n),c=(t(172),t(275)),d=t(272),m=t(13),u=o.a.forwardRef((function(e,a){var t=e.id,i=e.bsPrefix,c=e.bsCustomPrefix,u=e.className,b=e.type,f=void 0===b?"checkbox":b,v=e.isValid,p=void 0!==v&&v,O=e.isInvalid,j=void 0!==O&&O,x=e.isStatic,y=e.as,N=void 0===y?"input":y,h=Object(l.a)(e,["id","bsPrefix","bsCustomPrefix","className","type","isValid","isInvalid","isStatic","as"]),P=Object(n.useContext)(d.a),E=P.controlId,I=P.custom?[c,"custom-control-input"]:[i,"form-check-input"],w=I[0],C=I[1];return i=Object(m.a)(w,C),o.a.createElement(N,Object(r.a)({},h,{ref:a,type:f,id:t||E,className:s()(u,i,p&&"is-valid",j&&"is-invalid",x&&"position-static")}))}));u.displayName="FormCheckInput";var b=u,f=o.a.forwardRef((function(e,a){var t=e.bsPrefix,i=e.bsCustomPrefix,c=e.className,u=e.htmlFor,b=Object(l.a)(e,["bsPrefix","bsCustomPrefix","className","htmlFor"]),f=Object(n.useContext)(d.a),v=f.controlId,p=f.custom?[i,"custom-control-label"]:[t,"form-check-label"],O=p[0],j=p[1];return t=Object(m.a)(O,j),o.a.createElement("label",Object(r.a)({},b,{ref:a,htmlFor:u||v,className:s()(c,t)}))}));f.displayName="FormCheckLabel";var v=f,p=o.a.forwardRef((function(e,a){var t=e.id,i=e.bsPrefix,u=e.bsCustomPrefix,f=e.inline,p=void 0!==f&&f,O=e.disabled,j=void 0!==O&&O,x=e.isValid,y=void 0!==x&&x,N=e.isInvalid,h=void 0!==N&&N,P=e.feedbackTooltip,E=void 0!==P&&P,I=e.feedback,w=e.className,C=e.style,F=e.title,k=void 0===F?"":F,g=e.type,R=void 0===g?"checkbox":g,V=e.label,S=e.children,L=e.custom,T=e.as,z=void 0===T?"input":T,q=Object(l.a)(e,["id","bsPrefix","bsCustomPrefix","inline","disabled","isValid","isInvalid","feedbackTooltip","feedback","className","style","title","type","label","children","custom","as"]),G="switch"===R||L,M=G?[u,"custom-control"]:[i,"form-check"],A=M[0],J=M[1];i=Object(m.a)(A,J);var B=Object(n.useContext)(d.a).controlId,D=Object(n.useMemo)((function(){return{controlId:t||B,custom:G}}),[B,G,t]),U=null!=V&&!1!==V&&!S,H=o.a.createElement(b,Object(r.a)({},q,{type:"switch"===R?"checkbox":R,ref:a,isValid:y,isInvalid:h,isStatic:!U,disabled:j,as:z}));return o.a.createElement(d.a.Provider,{value:D},o.a.createElement("div",{style:C,className:s()(w,i,G&&"custom-"+R,p&&i+"-inline")},S||o.a.createElement(o.a.Fragment,null,H,U&&o.a.createElement(v,{title:k},V),(y||h)&&o.a.createElement(c.a,{type:y?"valid":"invalid",tooltip:E},I))))}));p.displayName="FormCheck",p.Input=b,p.Label=v;var O=p,j=o.a.forwardRef((function(e,a){var t=e.id,i=e.bsPrefix,c=e.bsCustomPrefix,u=e.className,b=e.isValid,f=e.isInvalid,v=e.lang,p=e.as,O=void 0===p?"input":p,j=Object(l.a)(e,["id","bsPrefix","bsCustomPrefix","className","isValid","isInvalid","lang","as"]),x=Object(n.useContext)(d.a),y=x.controlId,N=x.custom?[c,"custom-file-input"]:[i,"form-control-file"],h=N[0],P=N[1];return i=Object(m.a)(h,P),o.a.createElement(O,Object(r.a)({},j,{ref:a,id:t||y,type:"file",lang:v,className:s()(u,i,b&&"is-valid",f&&"is-invalid")}))}));j.displayName="FormFileInput";var x=j,y=o.a.forwardRef((function(e,a){var t=e.bsPrefix,i=e.bsCustomPrefix,c=e.className,u=e.htmlFor,b=Object(l.a)(e,["bsPrefix","bsCustomPrefix","className","htmlFor"]),f=Object(n.useContext)(d.a),v=f.controlId,p=f.custom?[i,"custom-file-label"]:[t,"form-file-label"],O=p[0],j=p[1];return t=Object(m.a)(O,j),o.a.createElement("label",Object(r.a)({},b,{ref:a,htmlFor:u||v,className:s()(c,t),"data-browse":b["data-browse"]}))}));y.displayName="FormFileLabel";var N=y,h=o.a.forwardRef((function(e,a){var t=e.id,i=e.bsPrefix,u=e.bsCustomPrefix,b=e.disabled,f=void 0!==b&&b,v=e.isValid,p=void 0!==v&&v,O=e.isInvalid,j=void 0!==O&&O,y=e.feedbackTooltip,h=void 0!==y&&y,P=e.feedback,E=e.className,I=e.style,w=e.label,C=e.children,F=e.custom,k=e.lang,g=e["data-browse"],R=e.as,V=void 0===R?"div":R,S=e.inputAs,L=void 0===S?"input":S,T=Object(l.a)(e,["id","bsPrefix","bsCustomPrefix","disabled","isValid","isInvalid","feedbackTooltip","feedback","className","style","label","children","custom","lang","data-browse","as","inputAs"]),z=F?[u,"custom"]:[i,"form-file"],q=z[0],G=z[1];i=Object(m.a)(q,G);var M=Object(n.useContext)(d.a).controlId,A=Object(n.useMemo)((function(){return{controlId:t||M,custom:F}}),[M,F,t]),J=null!=w&&!1!==w&&!C,B=o.a.createElement(x,Object(r.a)({},T,{ref:a,isValid:p,isInvalid:j,disabled:f,as:L,lang:k}));return o.a.createElement(d.a.Provider,{value:A},o.a.createElement(V,{style:I,className:s()(E,i,F&&"custom-file")},C||o.a.createElement(o.a.Fragment,null,F?o.a.createElement(o.a.Fragment,null,B,J&&o.a.createElement(N,{"data-browse":g},w)):o.a.createElement(o.a.Fragment,null,J&&o.a.createElement(N,null,w),B),(p||j)&&o.a.createElement(c.a,{type:p?"valid":"invalid",tooltip:h},P))))}));h.displayName="FormFile",h.Input=x,h.Label=N;var P=h,E=t(280),I=o.a.forwardRef((function(e,a){var t=e.bsPrefix,i=e.className,c=e.children,u=e.controlId,b=e.as,f=void 0===b?"div":b,v=Object(l.a)(e,["bsPrefix","className","children","controlId","as"]);t=Object(m.a)(t,"form-group");var p=Object(n.useMemo)((function(){return{controlId:u}}),[u]);return o.a.createElement(d.a.Provider,{value:p},o.a.createElement(f,Object(r.a)({},v,{ref:a,className:s()(i,t)}),c))}));I.displayName="FormGroup";var w=I,C=(t(66),t(136)),F=o.a.forwardRef((function(e,a){var t=e.as,i=void 0===t?"label":t,c=e.bsPrefix,u=e.column,b=e.srOnly,f=e.className,v=e.htmlFor,p=Object(l.a)(e,["as","bsPrefix","column","srOnly","className","htmlFor"]),O=Object(n.useContext)(d.a).controlId;c=Object(m.a)(c,"form-label");var j="col-form-label";"string"===typeof u&&(j=j+"-"+u);var x=s()(f,c,b&&"sr-only",u&&j);return v=v||O,u?o.a.createElement(C.a,Object(r.a)({as:"label",className:x,htmlFor:v},p)):o.a.createElement(i,Object(r.a)({ref:a,className:x,htmlFor:v},p))}));F.displayName="FormLabel",F.defaultProps={column:!1,srOnly:!1};var k=F,g=o.a.forwardRef((function(e,a){var t=e.bsPrefix,i=e.className,n=e.as,c=void 0===n?"small":n,d=e.muted,u=Object(l.a)(e,["bsPrefix","className","as","muted"]);return t=Object(m.a)(t,"form-text"),o.a.createElement(c,Object(r.a)({},u,{ref:a,className:s()(i,t,d&&"text-muted")}))}));g.displayName="FormText";var R=g,V=o.a.forwardRef((function(e,a){return o.a.createElement(O,Object(r.a)({},e,{ref:a,type:"switch"}))}));V.displayName="Switch",V.Input=O.Input,V.Label=O.Label;var S=V,L=t(32),T=Object(L.a)("form-row"),z=o.a.forwardRef((function(e,a){var t=e.bsPrefix,i=e.inline,n=e.className,c=e.validated,d=e.as,u=void 0===d?"form":d,b=Object(l.a)(e,["bsPrefix","inline","className","validated","as"]);return t=Object(m.a)(t,"form"),o.a.createElement(u,Object(r.a)({},b,{ref:a,className:s()(n,c&&"was-validated",i&&t+"-inline")}))}));z.displayName="Form",z.defaultProps={inline:!1},z.Row=T,z.Group=w,z.Control=E.a,z.Check=O,z.File=P,z.Switch=S,z.Label=k,z.Text=R;a.a=z},373:function(e,a,t){"use strict";t.r(a);var r=t(5),l=t.n(r),i=t(19),s=t(131),n=t(282),o=t(297),c=t(171),d=t(136),m=t(102),u=t(0),b=t.n(u),f=t(23),v=t(12),p=t(35),O=t(18),j=function(e){var a=e.controlId,t=e.label,r=e.placeholder,l=e.type,i=e.required,s=e.value,n=e.onChange,c=e.validFeedback,d=e.invalidFeedback;return b.a.createElement(o.a.Group,{controlId:a},t?b.a.createElement(o.a.Label,null,t):null,b.a.createElement(o.a.Control,{required:i,type:l||"text",placeholder:r,value:s,onChange:n}),c?b.a.createElement(o.a.Control.Feedback,null,c):null,d?b.a.createElement(o.a.Control.Feedback,{type:"invalid"},d):null)};a.default=Object(f.i)((function(){var e=Object(p.c)(),a=Object(f.g)(),t=Object(u.useState)(!1),r=Object(s.a)(t,2),x=r[0],y=r[1],N=Object(n.a)(""),h=N.value,P=N.bind,E=Object(n.a)(""),I=E.value,w=E.bind,C=function(){var t=Object(i.a)(l.a.mark((function t(r){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r.preventDefault(),h&&""!==h){t.next=4;break}return O.b.error("Inserire username o password"),t.abrupt("return");case 4:if(I&&""!==I){t.next=7;break}return O.b.error("Inserire la password"),t.abrupt("return");case 7:y(!0),e(v.c.login.request({username:h,password:I,history:a}));case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return b.a.createElement(o.a,{onSubmit:C,noValidate:!0,validated:x},b.a.createElement(j,Object.assign({controlId:"username",label:"Username o Email",required:!0,type:"text",placeholder:"username o email"},P)),b.a.createElement(j,Object.assign({controlId:"password",label:"Password",required:!0,type:"password",placeholder:"Password",invalidFeedback:"Inserire la password"},w)),b.a.createElement(c.a,null,b.a.createElement(d.a,null,b.a.createElement(m.a,{id:"loginButton",size:"lg",variant:"outline-success",className:"float-right",type:"submit",disabled:!h||!I},"Conferma"))))}))}}]);
//# sourceMappingURL=9.b9e891f5.chunk.js.map