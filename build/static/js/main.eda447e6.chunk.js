(this.webpackJsonpcalcetto=this.webpackJsonpcalcetto||[]).push([[2],{115:function(e,t,n){e.exports=n.p+"static/media/header.7774471e.jpg"},126:function(e,t,n){e.exports=n(201)},131:function(e,t,n){},140:function(e,t,n){},201:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(24),i=n.n(o),c=(n(131),n(132),n(133),n(47)),l=n.n(c),s=n(61),u=n(34),d=n(115),m=n.n(d),f=n(210),p=n(214),v=n(215),b=n(213),h=n(211),g=n(118),E=Object(a.lazy)((function(){return Promise.all([n.e(1),n.e(13)]).then(n.bind(null,361))})),w=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(11),n.e(16)]).then(n.bind(null,365))})),x=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(7),n.e(9)]).then(n.bind(null,363))})),y=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(12)]).then(n.bind(null,362))})),j=Object(a.lazy)((function(){return Promise.all([n.e(5),n.e(14)]).then(n.bind(null,368))})),O=[{path:"/login",label:"Login",exact:!0,ComponentToRender:Object(a.lazy)((function(){return n.e(15).then(n.bind(null,359))})),visible:!1,private:!1,index:0},{path:"/",label:"Home",exact:!0,ComponentToRender:w,visible:!1,private:!0,index:10},{path:"/tournament/:tId",label:"Selezione Coppie",exact:!0,ComponentToRender:x,visible:!1,private:!0,index:20},{path:"/stage1/:tId",label:"Torneo fase 1",exact:!0,ComponentToRender:y,visible:!1,private:!0,index:30},{path:"/player",label:"Gestione Giocatori",exact:!0,ComponentToRender:E,visible:!0,private:!0,index:40},{path:"/user",label:"Gestione Utente",exact:!0,ComponentToRender:Object(a.lazy)((function(){return Promise.all([n.e(10),n.e(17)]).then(n.bind(null,360))})),visible:!1,private:!0,index:50},{path:"/stage2/:tId",label:"Torneo fase 2",exact:!0,ComponentToRender:j,visible:!1,private:!0,index:100},{path:"*",label:"Not Found",exact:!1,ComponentToRender:Object(a.lazy)((function(){return Promise.resolve().then(n.bind(null,62)).then((function(e){return{default:e.RedirectionControl}}))})),visible:!1,private:!0,index:1e3}],C=O;var k=n(36),R=n(37),T=function(e){var t=Object(k.c)(),n=Object(u.a)(t,2),a=n[0],o=n[1],i=function(){var e=Object(s.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/v1/auth/logout");case 2:e.sent.ok&&o({isAuthenticated:!1});case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),c={backgroundImage:"url(".concat(m.a,")"),backgroundSize:"cover",padding:"60px 0px 10px 0px",minHeight:"28vh"};return r.a.createElement("header",null,r.a.createElement(f.a,{style:c},r.a.createElement("h1",{style:{margin:"5vh"}},r.a.createElement("strong",{style:{color:"white"}},"Calcetto C.S.M")),a.isAuthenticated?r.a.createElement(p.a,{collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark"},r.a.createElement(p.a.Brand,{as:R.b,to:"/"},"Home"),r.a.createElement(p.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),r.a.createElement(p.a.Collapse,{id:"responsive-navbar-nav"},r.a.createElement(v.a,{className:"mr-auto"},C.map((function(e){return e.visible?e.private&&!a.isAuthenticated?null:r.a.createElement(v.a.Link,{as:R.b,key:e.index,to:e.path},e.label):null}))),a.name?r.a.createElement(r.a.Fragment,null,r.a.createElement(b.a,{alignRight:!0,as:h.a},r.a.createElement(g.a,{style:{opacity:1},variant:"outline-warning",size:"lg",disabled:!0},r.a.createElement("strong",{style:{color:"#64bd9c",fontSize:"larger"}},a.username)),r.a.createElement(b.a.Toggle,{split:!0,variant:"outline-warning",id:"dropdown-custom-2"}),r.a.createElement(b.a.Menu,{className:"default-background default-border-yellow"},r.a.createElement(b.a.Item,{className:"default-color-white default-hover-green",as:"button",variant:"warning",onClick:i,eventKey:"1"},"Log out"),r.a.createElement(b.a.Divider,{style:{borderTopColor:"#ffc107"}}),r.a.createElement(b.a.Item,{className:"default-color-white default-hover-green",as:R.b,to:"/user",eventKey:"2"},"Gestione Utente")))):null)):null))},z=n(62),A=n(15),P=n(53),L=function(e){return a.createElement(k.a.Consumer,null,(function(t){var n=Object(u.a)(t,1)[0];return a.createElement(A.b,Object.assign({},e,{render:function(t){var r=t.location;return n.isAuthenticated&&"/login"===r.pathname?(console.log("ProtectedRoute => redirect to Home"),a.createElement(A.a,Object.assign({},e,{to:{pathname:"/",state:{from:r}}}))):e.private?n.isAuthenticated?(console.log("ProtectedRoute => render component : ",function(e){var t=O.find((function(t){return t.path===e}));return t?t.label:"route ".concat(e," not found!")}(r.pathname)),a.createElement(e.ComponentToRender,e)):(console.log("ProtectedRoute => redirect to Login : ",Object(P.a)({},n)),a.createElement(A.a,Object.assign({},e,{to:{pathname:"/login",state:{from:r}}}))):(console.log("ProtectedRoute => public route : ",Object(P.a)({},e)),a.createElement(e.ComponentToRender,e))}}))}))},S=(n(140),n(212)),N=n(99),B=n(119),H=n(120);N.c.add(B.a,H.a);var I=function(e){return r.a.createElement("div",{className:"App"},r.a.createElement(T,null),r.a.createElement(S.a,{fluid:!0,style:{marginBottom:"20vh"}},r.a.createElement(a.Suspense,{fallback:r.a.createElement(z.LoadingModal,{show:!0,message:"....Caricamento"})},r.a.createElement(A.d,null,C.map((function(e){return r.a.createElement(L,Object.assign({},e,{key:e.index}))}))))))},W=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function G(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(n){var a=e.installing;null!=a&&(a.onstatechange=function(n){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var M=n(123),U=n(82);Object(U.setDefaultLocale)("it"),Object(U.registerLocale)("it",M.a),i.a.render(r.a.createElement(R.a,null,r.a.createElement(k.b,null,r.a.createElement(I,null))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");W?(!function(e,t){fetch(e).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):G(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):G(t,e)}))}}()},36:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"c",(function(){return f})),n.d(t,"b",(function(){return p}));var a=n(47),r=n.n(a),o=n(53),i=n(61),c=n(34),l=n(0),s=n.n(l),u=n(62),d={isAuthenticated:!1},m=Object(l.createContext)([d,function(){}]),f=function(){return Object(l.useContext)(m)},p=function(e){var t=e.children,n=Object(l.useState)(d),a=Object(c.a)(n,2),f=a[0],p=a[1],v=[f,p];return Object(l.useEffect)((function(){Object(i.a)(r.a.mark((function e(){var t,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/api/v1/auth/");case 3:return t=e.sent,e.next=6,t.json();case 6:(n=e.sent)&&t.ok?p(Object(o.a)({isAuthenticated:!0,isEditable:"Admin"===n.role},n)):p(d),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(0),console.error("SessionContext.error :",e.t0),p(d);case 14:case"end":return e.stop()}}),e,null,[[0,10]])})))()}),[]),console.log("sessionContext.session: ",f),s.a.createElement(m.Provider,{value:v},f?t:s.a.createElement(u.LoadingModal,{show:!0,message:"....Caricamento"}))}},62:function(e,t,n){"use strict";n.r(t),n.d(t,"LoadingModal",(function(){return m})),n.d(t,"GenericToast",(function(){return f})),n.d(t,"LogSessionContext",(function(){return p})),n.d(t,"RedirectionControl",(function(){return v}));var a=n(34),r=n(0),o=n.n(r),i=n(60),c=n(42),l=n(97),s=n(205),u=n(36),d=n(15),m=function(e){var t=e.message,n=e.show,a=e.onHide,r=void 0===a?function(){return n=!1}:a;return o.a.createElement(i.a,{show:n,onHide:r,size:"xl",centered:!0},o.a.createElement(i.a.Header,{closeButton:!0},o.a.createElement(i.a.Title,null,"Caricamento....")),o.a.createElement(i.a.Body,null,t),o.a.createElement(i.a.Footer,null,o.a.createElement(c.a,{animation:"border",variant:"light"}),o.a.createElement(c.a,{animation:"border",variant:"primary"}),o.a.createElement(c.a,{animation:"border",variant:"secondary"}),o.a.createElement(c.a,{animation:"border",variant:"success"}),o.a.createElement(c.a,{animation:"border",variant:"danger"}),o.a.createElement(c.a,{animation:"border",variant:"warning"}),o.a.createElement(c.a,{animation:"border",variant:"info"}),o.a.createElement(c.a,{animation:"border",variant:"dark"})))},f=function(e){var t=e.message,n=e.type;return t&&""!==t?o.a.createElement(l.a,{className:"rounded mr-2 mx-auto",key:"".concat(n,"-message"),show:""!==t},o.a.createElement(l.a.Header,{closeButton:!1},o.a.createElement("strong",null,"Operazione completata !")),o.a.createElement(l.a.Body,null,o.a.createElement(s.a,{variant:n},t))):null},p=function(e){return o.a.createElement(u.a.Consumer,null,(function(e){var t=Object(a.a)(e,1)[0];return Object.entries(t).map((function(e){var t=Object(a.a)(e,2),n=t[0],r=t[1];return o.a.createElement("p",null,n," : ",r)}))}))};function v(e){var t=Object(d.h)();return o.a.createElement("div",null,o.a.createElement("h1",null,"Current Ruote : ",o.a.createElement("code",null,t.pathname)))}}},[[126,3,4]]]);
//# sourceMappingURL=main.eda447e6.chunk.js.map