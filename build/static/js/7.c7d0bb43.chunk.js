(this.webpackJsonpcalcetto=this.webpackJsonpcalcetto||[]).push([[7],{1281:function(e,a,t){"use strict";t.r(a);var r=t(3),l=t.n(r),n=t(10),i=t(19),c=t(294),o=t(0),s=t.n(o),d=t(143),m=t(408),u=t(365),b=t(187),f=t(103),v=t(278),p=t(314),y=t(52),O=t(23),j=t(38),h=t(12),E=t(291),x=t(346),N=t(77),P=t(78),g={textAlign:"left",width:"100%",height:"auto",margin:"auto",color:"white"};a.default=function(){var e=Object(j.c)(),a=Object(O.g)(),t=Object(E.a)(["common","player"]).t,r=Object(j.d)(N.c.getPlayer),C=Object(o.useState)(!1),I=Object(c.a)(C,2),w=I[0],F=I[1],k=Object(p.a)(r.name),R=k.value,S=k.bind,T=Object(p.a)(r.surname),V=T.value,q=T.bind,L=Object(p.a)(r.alias),A=L.value,z=L.bind,M=Object(p.a)(r.phone),G=M.value,H=M.bind,B=Object(p.a)(r.email),J=B.value,D=B.bind,Y=function(){var t=Object(i.a)(l.a.mark((function t(i){var c,o;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:i.preventDefault(),c={player:Object(n.a)(Object(n.a)({},r),{},{name:R,surname:V,alias:A,phone:G,email:J}),history:a},o=K?h.c.updatePlayer:h.c.savePlayer,e(o.request(c));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();if(!r)return setTimeout((function(){return a.push("/player")}),3e3),s.a.createElement("div",null,"Giocatore non trovato");var K=!!r.id;return s.a.createElement(d.a,{md:{span:"6",offset:"3"},sm:"12"},s.a.createElement(P.YesNoModal,{message:t("player:delete.message"),title:t("player:delete.title"),onClick:function(){return e(h.c.deletePlayers.request({players:[r]}))},onHide:function(){return F(!1)},show:w}),s.a.createElement(m.a,{style:g,className:"default-background"},s.a.createElement(u.a,{onSubmit:Y},s.a.createElement(m.a.Header,{as:"h2"},s.a.createElement(b.a,null,s.a.createElement(d.a,{md:"9"},t(K?"player:edit":"player:add")),s.a.createElement(d.a,{md:"3"},s.a.createElement(f.a,{variant:"outline-warning",className:"float-right",onClick:function(){return a.push("/player")}},s.a.createElement(y.n,null)," ",t("common:close"))))),s.a.createElement(m.a.Body,null,s.a.createElement(v.a,null,s.a.createElement(b.a,null,s.a.createElement(d.a,null,s.a.createElement(x.a,Object.assign({controlId:"playerName",label:t("player:field.name"),placeholder:t("player:field.name"),required:!0},S))),s.a.createElement(d.a,null,s.a.createElement(x.a,Object.assign({controlId:"playerSurname",label:t("player:field.surname"),placeholder:t("player:field.surname"),required:!0},q)))),s.a.createElement(b.a,null,s.a.createElement(d.a,null,s.a.createElement(x.a,Object.assign({controlId:"playerAlias",label:t("player:field.alias"),placeholder:t("player:field.alias"),required:!0},z)))),s.a.createElement(b.a,null,s.a.createElement(d.a,null,s.a.createElement(x.a,Object.assign({controlId:"playerEmail",label:t("player:field.email"),placeholder:t("player:field.email"),required:!0},D))),s.a.createElement(d.a,null,s.a.createElement(x.a,Object.assign({controlId:"playerPhone",label:t("player:field.phone"),placeholder:t("player:field.phone"),required:!0},H)))))),s.a.createElement(m.a.Footer,{style:{height:"10vh"}},s.a.createElement(f.a,{variant:"outline-success",type:"submit",className:"float-right"},s.a.createElement(y.m,null)," ",t("common:save")),r.editable?s.a.createElement(f.a,{variant:"outline-danger",className:"float-left",onClick:function(){return F(!0)}},s.a.createElement(y.q,null)," ",t("player:delete.one")):null))))}},292:function(e,a,t){"use strict";var r=t(0),l=t.n(r).a.createContext({controlId:void 0});a.a=l},294:function(e,a,t){"use strict";t.d(a,"a",(function(){return l}));var r=t(139);function l(e,a){return function(e){if(Array.isArray(e))return e}(e)||function(e,a){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var t=[],r=!0,l=!1,n=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(t.push(i.value),!a||t.length!==a);r=!0);}catch(o){l=!0,n=o}finally{try{r||null==c.return||c.return()}finally{if(l)throw n}}return t}}(e,a)||Object(r.a)(e,a)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},297:function(e,a,t){"use strict";var r=t(2),l=t(6),n=t(11),i=t.n(n),c=t(0),o=t.n(c),s=t(7),d=t.n(s),m={type:d.a.string,tooltip:d.a.bool,as:d.a.elementType},u=o.a.forwardRef((function(e,a){var t=e.as,n=void 0===t?"div":t,c=e.className,s=e.type,d=void 0===s?"valid":s,m=e.tooltip,u=void 0!==m&&m,b=Object(l.a)(e,["as","className","type","tooltip"]);return o.a.createElement(n,Object(r.a)({},b,{ref:a,className:i()(c,d+"-"+(u?"tooltip":"feedback"))}))}));u.displayName="Feedback",u.propTypes=m,a.a=u},314:function(e,a,t){"use strict";t.d(a,"a",(function(){return n}));var r=t(294),l=t(0),n=function(e){var a=Object(l.useState)(e),t=Object(r.a)(a,2),n=t[0],i=t[1];return{value:n,setValue:i,reset:function(){return i(e)},bind:{value:n,onChange:function(e){return i(e.currentTarget.value)}}}}},315:function(e,a,t){"use strict";var r=t(2),l=t(6),n=t(11),i=t.n(n),c=(t(189),t(0)),o=t.n(c),s=(t(72),t(297)),d=t(292),m=t(13),u=o.a.forwardRef((function(e,a){var t,n,s=e.bsPrefix,u=e.bsCustomPrefix,b=e.type,f=e.size,v=e.htmlSize,p=e.id,y=e.className,O=e.isValid,j=void 0!==O&&O,h=e.isInvalid,E=void 0!==h&&h,x=e.plaintext,N=e.readOnly,P=e.custom,g=e.as,C=void 0===g?"input":g,I=Object(l.a)(e,["bsPrefix","bsCustomPrefix","type","size","htmlSize","id","className","isValid","isInvalid","plaintext","readOnly","custom","as"]),w=Object(c.useContext)(d.a).controlId,F=P?[u,"custom"]:[s,"form-control"],k=F[0],R=F[1];if(s=Object(m.a)(k,R),x)(n={})[s+"-plaintext"]=!0,t=n;else if("file"===b){var S;(S={})[s+"-file"]=!0,t=S}else if("range"===b){var T;(T={})[s+"-range"]=!0,t=T}else if("select"===C&&P){var V;(V={})[s+"-select"]=!0,V[s+"-select-"+f]=f,t=V}else{var q;(q={})[s]=!0,q[s+"-"+f]=f,t=q}return o.a.createElement(C,Object(r.a)({},I,{type:b,size:v,ref:a,readOnly:N,id:p||w,className:i()(y,t,j&&"is-valid",E&&"is-invalid")}))}));u.displayName="FormControl",a.a=Object.assign(u,{Feedback:s.a})},346:function(e,a,t){"use strict";t.d(a,"a",(function(){return i}));var r=t(0),l=t.n(r),n=t(365),i=function(e){var a=e.controlId,t=e.label,r=e.placeholder,i=e.type,c=void 0===i?"text":i,o=e.required,s=e.value,d=e.onChange,m=e.validFeedback,u=e.invalidFeedback;return l.a.createElement(n.a.Group,{controlId:a},t?l.a.createElement(n.a.Label,null,t):null,l.a.createElement(n.a.Control,{required:o,type:c,placeholder:r,value:s,onChange:d}),m?l.a.createElement(n.a.Control.Feedback,null,m):null,u?l.a.createElement(n.a.Control.Feedback,{type:"invalid"},u):null)}},365:function(e,a,t){"use strict";var r=t(2),l=t(6),n=t(11),i=t.n(n),c=t(0),o=t.n(c),s=(t(189),t(297)),d=t(292),m=t(13),u=o.a.forwardRef((function(e,a){var t=e.id,n=e.bsPrefix,s=e.bsCustomPrefix,u=e.className,b=e.type,f=void 0===b?"checkbox":b,v=e.isValid,p=void 0!==v&&v,y=e.isInvalid,O=void 0!==y&&y,j=e.isStatic,h=e.as,E=void 0===h?"input":h,x=Object(l.a)(e,["id","bsPrefix","bsCustomPrefix","className","type","isValid","isInvalid","isStatic","as"]),N=Object(c.useContext)(d.a),P=N.controlId,g=N.custom?[s,"custom-control-input"]:[n,"form-check-input"],C=g[0],I=g[1];return n=Object(m.a)(C,I),o.a.createElement(E,Object(r.a)({},x,{ref:a,type:f,id:t||P,className:i()(u,n,p&&"is-valid",O&&"is-invalid",j&&"position-static")}))}));u.displayName="FormCheckInput";var b=u,f=o.a.forwardRef((function(e,a){var t=e.bsPrefix,n=e.bsCustomPrefix,s=e.className,u=e.htmlFor,b=Object(l.a)(e,["bsPrefix","bsCustomPrefix","className","htmlFor"]),f=Object(c.useContext)(d.a),v=f.controlId,p=f.custom?[n,"custom-control-label"]:[t,"form-check-label"],y=p[0],O=p[1];return t=Object(m.a)(y,O),o.a.createElement("label",Object(r.a)({},b,{ref:a,htmlFor:u||v,className:i()(s,t)}))}));f.displayName="FormCheckLabel";var v=f,p=o.a.forwardRef((function(e,a){var t=e.id,n=e.bsPrefix,u=e.bsCustomPrefix,f=e.inline,p=void 0!==f&&f,y=e.disabled,O=void 0!==y&&y,j=e.isValid,h=void 0!==j&&j,E=e.isInvalid,x=void 0!==E&&E,N=e.feedbackTooltip,P=void 0!==N&&N,g=e.feedback,C=e.className,I=e.style,w=e.title,F=void 0===w?"":w,k=e.type,R=void 0===k?"checkbox":k,S=e.label,T=e.children,V=e.custom,q=e.as,L=void 0===q?"input":q,A=Object(l.a)(e,["id","bsPrefix","bsCustomPrefix","inline","disabled","isValid","isInvalid","feedbackTooltip","feedback","className","style","title","type","label","children","custom","as"]),z="switch"===R||V,M=z?[u,"custom-control"]:[n,"form-check"],G=M[0],H=M[1];n=Object(m.a)(G,H);var B=Object(c.useContext)(d.a).controlId,J=Object(c.useMemo)((function(){return{controlId:t||B,custom:z}}),[B,z,t]),D=null!=S&&!1!==S&&!T,Y=o.a.createElement(b,Object(r.a)({},A,{type:"switch"===R?"checkbox":R,ref:a,isValid:h,isInvalid:x,isStatic:!D,disabled:O,as:L}));return o.a.createElement(d.a.Provider,{value:J},o.a.createElement("div",{style:I,className:i()(C,n,z&&"custom-"+R,p&&n+"-inline")},T||o.a.createElement(o.a.Fragment,null,Y,D&&o.a.createElement(v,{title:F},S),(h||x)&&o.a.createElement(s.a,{type:h?"valid":"invalid",tooltip:P},g))))}));p.displayName="FormCheck",p.Input=b,p.Label=v;var y=p,O=o.a.forwardRef((function(e,a){var t=e.id,n=e.bsPrefix,s=e.bsCustomPrefix,u=e.className,b=e.isValid,f=e.isInvalid,v=e.lang,p=e.as,y=void 0===p?"input":p,O=Object(l.a)(e,["id","bsPrefix","bsCustomPrefix","className","isValid","isInvalid","lang","as"]),j=Object(c.useContext)(d.a),h=j.controlId,E=j.custom?[s,"custom-file-input"]:[n,"form-control-file"],x=E[0],N=E[1];return n=Object(m.a)(x,N),o.a.createElement(y,Object(r.a)({},O,{ref:a,id:t||h,type:"file",lang:v,className:i()(u,n,b&&"is-valid",f&&"is-invalid")}))}));O.displayName="FormFileInput";var j=O,h=o.a.forwardRef((function(e,a){var t=e.bsPrefix,n=e.bsCustomPrefix,s=e.className,u=e.htmlFor,b=Object(l.a)(e,["bsPrefix","bsCustomPrefix","className","htmlFor"]),f=Object(c.useContext)(d.a),v=f.controlId,p=f.custom?[n,"custom-file-label"]:[t,"form-file-label"],y=p[0],O=p[1];return t=Object(m.a)(y,O),o.a.createElement("label",Object(r.a)({},b,{ref:a,htmlFor:u||v,className:i()(s,t),"data-browse":b["data-browse"]}))}));h.displayName="FormFileLabel";var E=h,x=o.a.forwardRef((function(e,a){var t=e.id,n=e.bsPrefix,u=e.bsCustomPrefix,b=e.disabled,f=void 0!==b&&b,v=e.isValid,p=void 0!==v&&v,y=e.isInvalid,O=void 0!==y&&y,h=e.feedbackTooltip,x=void 0!==h&&h,N=e.feedback,P=e.className,g=e.style,C=e.label,I=e.children,w=e.custom,F=e.lang,k=e["data-browse"],R=e.as,S=void 0===R?"div":R,T=e.inputAs,V=void 0===T?"input":T,q=Object(l.a)(e,["id","bsPrefix","bsCustomPrefix","disabled","isValid","isInvalid","feedbackTooltip","feedback","className","style","label","children","custom","lang","data-browse","as","inputAs"]),L=w?[u,"custom"]:[n,"form-file"],A=L[0],z=L[1];n=Object(m.a)(A,z);var M=Object(c.useContext)(d.a).controlId,G=Object(c.useMemo)((function(){return{controlId:t||M,custom:w}}),[M,w,t]),H=null!=C&&!1!==C&&!I,B=o.a.createElement(j,Object(r.a)({},q,{ref:a,isValid:p,isInvalid:O,disabled:f,as:V,lang:F}));return o.a.createElement(d.a.Provider,{value:G},o.a.createElement(S,{style:g,className:i()(P,n,w&&"custom-file")},I||o.a.createElement(o.a.Fragment,null,w?o.a.createElement(o.a.Fragment,null,B,H&&o.a.createElement(E,{"data-browse":k},C)):o.a.createElement(o.a.Fragment,null,H&&o.a.createElement(E,null,C),B),(p||O)&&o.a.createElement(s.a,{type:p?"valid":"invalid",tooltip:x},N))))}));x.displayName="FormFile",x.Input=j,x.Label=E;var N=x,P=t(315),g=o.a.forwardRef((function(e,a){var t=e.bsPrefix,n=e.className,s=e.children,u=e.controlId,b=e.as,f=void 0===b?"div":b,v=Object(l.a)(e,["bsPrefix","className","children","controlId","as"]);t=Object(m.a)(t,"form-group");var p=Object(c.useMemo)((function(){return{controlId:u}}),[u]);return o.a.createElement(d.a.Provider,{value:p},o.a.createElement(f,Object(r.a)({},v,{ref:a,className:i()(n,t)}),s))}));g.displayName="FormGroup";var C=g,I=(t(72),t(143)),w=o.a.forwardRef((function(e,a){var t=e.as,n=void 0===t?"label":t,s=e.bsPrefix,u=e.column,b=e.srOnly,f=e.className,v=e.htmlFor,p=Object(l.a)(e,["as","bsPrefix","column","srOnly","className","htmlFor"]),y=Object(c.useContext)(d.a).controlId;s=Object(m.a)(s,"form-label");var O="col-form-label";"string"===typeof u&&(O=O+"-"+u);var j=i()(f,s,b&&"sr-only",u&&O);return v=v||y,u?o.a.createElement(I.a,Object(r.a)({as:"label",className:j,htmlFor:v},p)):o.a.createElement(n,Object(r.a)({ref:a,className:j,htmlFor:v},p))}));w.displayName="FormLabel",w.defaultProps={column:!1,srOnly:!1};var F=w,k=o.a.forwardRef((function(e,a){var t=e.bsPrefix,n=e.className,c=e.as,s=void 0===c?"small":c,d=e.muted,u=Object(l.a)(e,["bsPrefix","className","as","muted"]);return t=Object(m.a)(t,"form-text"),o.a.createElement(s,Object(r.a)({},u,{ref:a,className:i()(n,t,d&&"text-muted")}))}));k.displayName="FormText";var R=k,S=o.a.forwardRef((function(e,a){return o.a.createElement(y,Object(r.a)({},e,{ref:a,type:"switch"}))}));S.displayName="Switch",S.Input=y.Input,S.Label=y.Label;var T=S,V=t(33),q=Object(V.a)("form-row"),L=o.a.forwardRef((function(e,a){var t=e.bsPrefix,n=e.inline,c=e.className,s=e.validated,d=e.as,u=void 0===d?"form":d,b=Object(l.a)(e,["bsPrefix","inline","className","validated","as"]);return t=Object(m.a)(t,"form"),o.a.createElement(u,Object(r.a)({},b,{ref:a,className:i()(c,s&&"was-validated",n&&t+"-inline")}))}));L.displayName="Form",L.defaultProps={inline:!1},L.Row=q,L.Group=C,L.Control=P.a,L.Check=y,L.File=N,L.Switch=T,L.Label=F,L.Text=R;a.a=L},408:function(e,a,t){"use strict";var r=t(2),l=t(6),n=t(11),i=t.n(n),c=t(0),o=t.n(c),s=t(13),d=t(33),m=t(100),u=t(142),b=o.a.forwardRef((function(e,a){var t=e.bsPrefix,n=e.className,c=e.variant,d=e.as,m=void 0===d?"img":d,u=Object(l.a)(e,["bsPrefix","className","variant","as"]),b=Object(s.a)(t,"card-img");return o.a.createElement(m,Object(r.a)({ref:a,className:i()(c?b+"-"+c:b,n)},u))}));b.displayName="CardImg",b.defaultProps={variant:null};var f=b,v=Object(m.a)("h5"),p=Object(m.a)("h6"),y=Object(d.a)("card-body"),O=Object(d.a)("card-title",{Component:v}),j=Object(d.a)("card-subtitle",{Component:p}),h=Object(d.a)("card-link",{Component:"a"}),E=Object(d.a)("card-text",{Component:"p"}),x=Object(d.a)("card-header"),N=Object(d.a)("card-footer"),P=Object(d.a)("card-img-overlay"),g=o.a.forwardRef((function(e,a){var t=e.bsPrefix,n=e.className,d=e.bg,m=e.text,b=e.border,f=e.body,v=e.children,p=e.as,O=void 0===p?"div":p,j=Object(l.a)(e,["bsPrefix","className","bg","text","border","body","children","as"]),h=Object(s.a)(t,"card"),E=Object(c.useMemo)((function(){return{cardHeaderBsPrefix:h+"-header"}}),[h]);return o.a.createElement(u.a.Provider,{value:E},o.a.createElement(O,Object(r.a)({ref:a},j,{className:i()(n,h,d&&"bg-"+d,m&&"text-"+m,b&&"border-"+b)}),f?o.a.createElement(y,null,v):v))}));g.displayName="Card",g.defaultProps={body:!1},g.Img=f,g.Title=O,g.Subtitle=j,g.Body=y,g.Link=h,g.Text=E,g.Header=x,g.Footer=N,g.ImgOverlay=P;a.a=g}}]);
//# sourceMappingURL=7.c7d0bb43.chunk.js.map