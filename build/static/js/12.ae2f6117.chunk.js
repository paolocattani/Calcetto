(this.webpackJsonpcalcetto=this.webpackJsonpcalcetto||[]).push([[12],{1275:function(e,a,t){"use strict";t.r(a);var r=t(10),l=t(3),n=t.n(l),i=t(19),s=t(314),c=t(365),o=t(143),u=t(103),m=t(0),d=t.n(m),b=t(121),f=t.n(b),p=t(366),h=(t(1276),t(141)),v=t(12),O=t(38),j=t(23),y=t(21),E=t(346),x=t(291),w=t(60);a.default=Object(j.i)((function(){var e=Object(O.c)(),a=Object(j.g)(),t=Object(x.a)(["common","auth","player"]).t,r=[{value:w.PlayerRole.NotAPlayer,label:t("player:role.none")},{value:w.PlayerRole.GoalKeeper,label:t("player:role.goalKeeper")},{value:w.PlayerRole.Striker,label:t("player:role.striker")},{value:w.PlayerRole.Master,label:t("player:role.master")}],l=Object(s.a)(""),m=l.value,b=l.bind,P=l.reset,g=Object(s.a)(""),I=g.value,k=g.bind,F=g.reset,C=Object(s.a)(""),R=C.value,V=C.bind,q=C.reset,L=Object(s.a)(""),S=L.value,T=L.bind,G=L.reset,M=Object(s.a)(""),A=M.value,D=M.bind,B=M.reset,J=Object(s.a)(""),K=J.value,z=J.bind,H=J.reset,Q=Object(s.a)(""),U=Q.value,W=Q.bind,X=Q.reset,Y=Object(s.a)(""),Z=Y.value,$=Y.bind,_=Y.reset,ee=Object(s.a)(new Date),ae=ee.value,te=ee.setValue,re=ee.reset,le=Object(s.a)(r[0]),ne=le.value,ie=le.setValue,se=le.reset,ce=function(){var e=[];return m||e.push(t("auth:error.username")),I||e.push(t("auth:error.name")),R||e.push(t("auth:error.surname")),S||e.push(t("auth:error.email.email")),h.a.test(S)||e.push(t("auth:error.email.validation")),A||e.push(t("auth:error.email.confirm")),h.a.test(A)||e.push(t("auth:error.email.validation")),S!==A&&e.push(t("auth:error.email.match")),K||e.push(t("auth:error.password.password")),h.c.test(K)||e.push(t("auth:error.password.validation")),U||e.push(t("auth:error.password.confirm")),h.c.test(U)||e.push(t("auth:error.password.validation")),K!==U&&e.push(t("auth:error.password.match")),0===e.length||(e.forEach((function(e){return y.b.error(e)})),!1)},oe=function(){var t=Object(i.a)(n.a.mark((function t(r){return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r.preventDefault(),ce()){t.next=3;break}return t.abrupt("return");case 3:e(v.a.registration.request({username:m.trim(),name:I.trim(),surname:R.trim(),email:S.trim(),cEmail:A.trim(),password:K.trim(),cPassword:U.trim(),phone:Z.trim(),birthday:ae,playerRole:ne.value,history:a}));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return d.a.createElement(c.a,{onSubmit:oe},d.a.createElement(c.a.Row,null,d.a.createElement(o.a,null,d.a.createElement(E.a,Object.assign({controlId:"username",label:t("auth:username"),required:!0,placeholder:t("auth:username")},b))),d.a.createElement(o.a,null,d.a.createElement(E.a,Object.assign({controlId:"name",label:t("auth:name"),required:!0,placeholder:t("auth:name")},k))),d.a.createElement(o.a,null,d.a.createElement(E.a,Object.assign({controlId:"surname",label:t("auth:surname"),required:!0,placeholder:t("auth:surname")},V)))),d.a.createElement(c.a.Row,null,d.a.createElement(o.a,null,d.a.createElement(E.a,Object.assign({controlId:"email",label:t("auth:email.email"),required:!0,type:"email",placeholder:t("auth:email.email")},T))),d.a.createElement(o.a,null,d.a.createElement(E.a,Object.assign({controlId:"cemail",label:t("auth:email.confirm"),required:!0,type:"email",placeholder:t("auth:email.confirm")},D)))),d.a.createElement(c.a.Row,null,d.a.createElement(o.a,null,d.a.createElement(E.a,Object.assign({controlId:"password",label:t("auth:password.password"),required:!0,type:"password",placeholder:t("auth:password.password")},z)),d.a.createElement(E.a,Object.assign({controlId:"cpassword",label:t("auth:password.confirm"),required:!0,type:"password",placeholder:t("auth:password.password")},W))),d.a.createElement(o.a,{md:6,style:{display:"flex",alignItems:"center"}},d.a.createElement("ul",null,d.a.createElement("strong",null,t("auth:password.criteria.title")," :"),d.a.createElement("li",{key:"pass-1"},t("auth:password.criteria.c1")),d.a.createElement("li",{key:"pass-2"},t("auth:password.criteria.c2")),d.a.createElement("li",{key:"pass-3"},t("auth:password.criteria.c3")),d.a.createElement("li",{key:"pass-4"},t("auth:password.criteria.c4"))))),d.a.createElement(c.a.Row,null,d.a.createElement(o.a,{md:3},d.a.createElement(E.a,Object.assign({controlId:"phone",label:t("auth:mobile"),placeholder:t("auth:mobile")},$))),d.a.createElement(o.a,{md:3},d.a.createElement(c.a.Group,{controlId:"birthday"},d.a.createElement(c.a.Label,null,t("auth:birthday")),d.a.createElement(f.a,{id:"birthday",className:"datepicker",dateFormat:"dd/MM/yyyy",required:!0,selected:ae,onChange:function(e){return te(e)}}))),d.a.createElement(o.a,{md:6},d.a.createElement(c.a.Group,null,d.a.createElement(c.a.Label,null,t("player:role.role")),d.a.createElement(p.a,{id:"playerRole",textFieldProps:{label:"Ruolo"},value:ne,onChange:function(e){var a;(a=e)&&ie(a)},options:r,styles:N}),d.a.createElement(c.a.Text,{className:"text-muted default-color-green"},t("auth:player"))))),d.a.createElement(u.a,{id:"registerButton",variant:"outline-success",className:"float-right",type:"submit",size:"lg"},t("common:confirm")),d.a.createElement(u.a,{id:"resetButton",variant:"outline-danger",className:"float-left",onClick:function(){P(),F(),q(),G(),B(),H(),X(),_(),re(),se()},type:"submit"},t("common:reset")))}));var N={control:function(e){return Object(r.a)(Object(r.a)({},e),{},{height:"38px"})},input:function(e){return Object(r.a)(Object(r.a)({},e),{},{height:"38px"})},option:function(e,a){a.data,a.isDisabled,a.isFocused,a.isSelected;return Object(r.a)(Object(r.a)({},e),{},{color:"black"})},placeholder:function(e){return Object(r.a)(Object(r.a)({},e),{},{height:"38px"})},singleValue:function(e,a){a.data;return Object(r.a)(Object(r.a)({},e),{},{height:"38px"})},clearIndicator:function(e){return Object(r.a)(Object(r.a)({},e),{},{height:"38px"})},indicatorSeparator:function(e){return Object(r.a)({},e)}}},1276:function(e,a,t){},314:function(e,a,t){"use strict";t.d(a,"a",(function(){return n}));var r=t(294),l=t(0),n=function(e){var a=Object(l.useState)(e),t=Object(r.a)(a,2),n=t[0],i=t[1];return{value:n,setValue:i,reset:function(){return i(e)},bind:{value:n,onChange:function(e){return i(e.currentTarget.value)}}}}},346:function(e,a,t){"use strict";t.d(a,"a",(function(){return i}));var r=t(0),l=t.n(r),n=t(365),i=function(e){var a=e.controlId,t=e.label,r=e.placeholder,i=e.type,s=void 0===i?"text":i,c=e.required,o=e.value,u=e.onChange,m=e.validFeedback,d=e.invalidFeedback;return l.a.createElement(n.a.Group,{controlId:a},t?l.a.createElement(n.a.Label,null,t):null,l.a.createElement(n.a.Control,{required:c,type:s,placeholder:r,value:o,onChange:u}),m?l.a.createElement(n.a.Control.Feedback,null,m):null,d?l.a.createElement(n.a.Control.Feedback,{type:"invalid"},d):null)}},365:function(e,a,t){"use strict";var r=t(2),l=t(6),n=t(11),i=t.n(n),s=t(0),c=t.n(s),o=(t(189),t(297)),u=t(292),m=t(13),d=c.a.forwardRef((function(e,a){var t=e.id,n=e.bsPrefix,o=e.bsCustomPrefix,d=e.className,b=e.type,f=void 0===b?"checkbox":b,p=e.isValid,h=void 0!==p&&p,v=e.isInvalid,O=void 0!==v&&v,j=e.isStatic,y=e.as,E=void 0===y?"input":y,x=Object(l.a)(e,["id","bsPrefix","bsCustomPrefix","className","type","isValid","isInvalid","isStatic","as"]),w=Object(s.useContext)(u.a),N=w.controlId,P=w.custom?[o,"custom-control-input"]:[n,"form-check-input"],g=P[0],I=P[1];return n=Object(m.a)(g,I),c.a.createElement(E,Object(r.a)({},x,{ref:a,type:f,id:t||N,className:i()(d,n,h&&"is-valid",O&&"is-invalid",j&&"position-static")}))}));d.displayName="FormCheckInput";var b=d,f=c.a.forwardRef((function(e,a){var t=e.bsPrefix,n=e.bsCustomPrefix,o=e.className,d=e.htmlFor,b=Object(l.a)(e,["bsPrefix","bsCustomPrefix","className","htmlFor"]),f=Object(s.useContext)(u.a),p=f.controlId,h=f.custom?[n,"custom-control-label"]:[t,"form-check-label"],v=h[0],O=h[1];return t=Object(m.a)(v,O),c.a.createElement("label",Object(r.a)({},b,{ref:a,htmlFor:d||p,className:i()(o,t)}))}));f.displayName="FormCheckLabel";var p=f,h=c.a.forwardRef((function(e,a){var t=e.id,n=e.bsPrefix,d=e.bsCustomPrefix,f=e.inline,h=void 0!==f&&f,v=e.disabled,O=void 0!==v&&v,j=e.isValid,y=void 0!==j&&j,E=e.isInvalid,x=void 0!==E&&E,w=e.feedbackTooltip,N=void 0!==w&&w,P=e.feedback,g=e.className,I=e.style,k=e.title,F=void 0===k?"":k,C=e.type,R=void 0===C?"checkbox":C,V=e.label,q=e.children,L=e.custom,S=e.as,T=void 0===S?"input":S,G=Object(l.a)(e,["id","bsPrefix","bsCustomPrefix","inline","disabled","isValid","isInvalid","feedbackTooltip","feedback","className","style","title","type","label","children","custom","as"]),M="switch"===R||L,A=M?[d,"custom-control"]:[n,"form-check"],D=A[0],B=A[1];n=Object(m.a)(D,B);var J=Object(s.useContext)(u.a).controlId,K=Object(s.useMemo)((function(){return{controlId:t||J,custom:M}}),[J,M,t]),z=null!=V&&!1!==V&&!q,H=c.a.createElement(b,Object(r.a)({},G,{type:"switch"===R?"checkbox":R,ref:a,isValid:y,isInvalid:x,isStatic:!z,disabled:O,as:T}));return c.a.createElement(u.a.Provider,{value:K},c.a.createElement("div",{style:I,className:i()(g,n,M&&"custom-"+R,h&&n+"-inline")},q||c.a.createElement(c.a.Fragment,null,H,z&&c.a.createElement(p,{title:F},V),(y||x)&&c.a.createElement(o.a,{type:y?"valid":"invalid",tooltip:N},P))))}));h.displayName="FormCheck",h.Input=b,h.Label=p;var v=h,O=c.a.forwardRef((function(e,a){var t=e.id,n=e.bsPrefix,o=e.bsCustomPrefix,d=e.className,b=e.isValid,f=e.isInvalid,p=e.lang,h=e.as,v=void 0===h?"input":h,O=Object(l.a)(e,["id","bsPrefix","bsCustomPrefix","className","isValid","isInvalid","lang","as"]),j=Object(s.useContext)(u.a),y=j.controlId,E=j.custom?[o,"custom-file-input"]:[n,"form-control-file"],x=E[0],w=E[1];return n=Object(m.a)(x,w),c.a.createElement(v,Object(r.a)({},O,{ref:a,id:t||y,type:"file",lang:p,className:i()(d,n,b&&"is-valid",f&&"is-invalid")}))}));O.displayName="FormFileInput";var j=O,y=c.a.forwardRef((function(e,a){var t=e.bsPrefix,n=e.bsCustomPrefix,o=e.className,d=e.htmlFor,b=Object(l.a)(e,["bsPrefix","bsCustomPrefix","className","htmlFor"]),f=Object(s.useContext)(u.a),p=f.controlId,h=f.custom?[n,"custom-file-label"]:[t,"form-file-label"],v=h[0],O=h[1];return t=Object(m.a)(v,O),c.a.createElement("label",Object(r.a)({},b,{ref:a,htmlFor:d||p,className:i()(o,t),"data-browse":b["data-browse"]}))}));y.displayName="FormFileLabel";var E=y,x=c.a.forwardRef((function(e,a){var t=e.id,n=e.bsPrefix,d=e.bsCustomPrefix,b=e.disabled,f=void 0!==b&&b,p=e.isValid,h=void 0!==p&&p,v=e.isInvalid,O=void 0!==v&&v,y=e.feedbackTooltip,x=void 0!==y&&y,w=e.feedback,N=e.className,P=e.style,g=e.label,I=e.children,k=e.custom,F=e.lang,C=e["data-browse"],R=e.as,V=void 0===R?"div":R,q=e.inputAs,L=void 0===q?"input":q,S=Object(l.a)(e,["id","bsPrefix","bsCustomPrefix","disabled","isValid","isInvalid","feedbackTooltip","feedback","className","style","label","children","custom","lang","data-browse","as","inputAs"]),T=k?[d,"custom"]:[n,"form-file"],G=T[0],M=T[1];n=Object(m.a)(G,M);var A=Object(s.useContext)(u.a).controlId,D=Object(s.useMemo)((function(){return{controlId:t||A,custom:k}}),[A,k,t]),B=null!=g&&!1!==g&&!I,J=c.a.createElement(j,Object(r.a)({},S,{ref:a,isValid:h,isInvalid:O,disabled:f,as:L,lang:F}));return c.a.createElement(u.a.Provider,{value:D},c.a.createElement(V,{style:P,className:i()(N,n,k&&"custom-file")},I||c.a.createElement(c.a.Fragment,null,k?c.a.createElement(c.a.Fragment,null,J,B&&c.a.createElement(E,{"data-browse":C},g)):c.a.createElement(c.a.Fragment,null,B&&c.a.createElement(E,null,g),J),(h||O)&&c.a.createElement(o.a,{type:h?"valid":"invalid",tooltip:x},w))))}));x.displayName="FormFile",x.Input=j,x.Label=E;var w=x,N=t(315),P=c.a.forwardRef((function(e,a){var t=e.bsPrefix,n=e.className,o=e.children,d=e.controlId,b=e.as,f=void 0===b?"div":b,p=Object(l.a)(e,["bsPrefix","className","children","controlId","as"]);t=Object(m.a)(t,"form-group");var h=Object(s.useMemo)((function(){return{controlId:d}}),[d]);return c.a.createElement(u.a.Provider,{value:h},c.a.createElement(f,Object(r.a)({},p,{ref:a,className:i()(n,t)}),o))}));P.displayName="FormGroup";var g=P,I=(t(72),t(143)),k=c.a.forwardRef((function(e,a){var t=e.as,n=void 0===t?"label":t,o=e.bsPrefix,d=e.column,b=e.srOnly,f=e.className,p=e.htmlFor,h=Object(l.a)(e,["as","bsPrefix","column","srOnly","className","htmlFor"]),v=Object(s.useContext)(u.a).controlId;o=Object(m.a)(o,"form-label");var O="col-form-label";"string"===typeof d&&(O=O+"-"+d);var j=i()(f,o,b&&"sr-only",d&&O);return p=p||v,d?c.a.createElement(I.a,Object(r.a)({as:"label",className:j,htmlFor:p},h)):c.a.createElement(n,Object(r.a)({ref:a,className:j,htmlFor:p},h))}));k.displayName="FormLabel",k.defaultProps={column:!1,srOnly:!1};var F=k,C=c.a.forwardRef((function(e,a){var t=e.bsPrefix,n=e.className,s=e.as,o=void 0===s?"small":s,u=e.muted,d=Object(l.a)(e,["bsPrefix","className","as","muted"]);return t=Object(m.a)(t,"form-text"),c.a.createElement(o,Object(r.a)({},d,{ref:a,className:i()(n,t,u&&"text-muted")}))}));C.displayName="FormText";var R=C,V=c.a.forwardRef((function(e,a){return c.a.createElement(v,Object(r.a)({},e,{ref:a,type:"switch"}))}));V.displayName="Switch",V.Input=v.Input,V.Label=v.Label;var q=V,L=t(33),S=Object(L.a)("form-row"),T=c.a.forwardRef((function(e,a){var t=e.bsPrefix,n=e.inline,s=e.className,o=e.validated,u=e.as,d=void 0===u?"form":u,b=Object(l.a)(e,["bsPrefix","inline","className","validated","as"]);return t=Object(m.a)(t,"form"),c.a.createElement(d,Object(r.a)({},b,{ref:a,className:i()(s,o&&"was-validated",n&&t+"-inline")}))}));T.displayName="Form",T.defaultProps={inline:!1},T.Row=S,T.Group=g,T.Control=N.a,T.Check=v,T.File=w,T.Switch=q,T.Label=F,T.Text=R;a.a=T}}]);
//# sourceMappingURL=12.ae2f6117.chunk.js.map