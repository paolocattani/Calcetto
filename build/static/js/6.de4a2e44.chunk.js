(this.webpackJsonpcalcetto=this.webpackJsonpcalcetto||[]).push([[6],{269:function(e,t,r){"use strict";r.d(t,"j",(function(){return c})),r.d(t,"f",(function(){return s})),r.d(t,"e",(function(){return u})),r.d(t,"c",(function(){return p})),r.d(t,"g",(function(){return f})),r.d(t,"i",(function(){return d})),r.d(t,"h",(function(){return m})),r.d(t,"d",(function(){return b})),r.d(t,"k",(function(){return g})),r.d(t,"b",(function(){return y})),r.d(t,"a",(function(){return h}));var a=r(0),n=r.n(a),o=r(270),i=r(125),l=function(e){var t=e.size,r=e.prefix,a=e.iconName,l=e.color;return n.a.createElement(o.a,{color:l,size:t,icon:Object(i.a)({prefix:r,iconName:a})})},c=function(e){var t=e.size,r=e.color;return n.a.createElement(l,{size:t,color:r,prefix:"far",iconName:"trash-alt"})},s=function(e){var t=e.size,r=e.color;return n.a.createElement(l,{size:t,color:r,prefix:"far",iconName:"save"})},u=function(e){var t=e.size,r=e.color;return n.a.createElement(l,{size:t,color:r,prefix:"fas",iconName:"arrow-alt-circle-right"})},p=function(e){var t=e.size,r=e.color;return n.a.createElement(l,{size:t,color:r,prefix:"fas",iconName:"arrow-alt-circle-left"})},f=function(e){var t=e.size,r=e.color;return n.a.createElement(l,{size:t,color:r,prefix:"fas",iconName:"times"})},d=function(e){var t=e.size,r=e.color;return n.a.createElement(l,{size:t,color:r,prefix:"fas",iconName:"toggle-on"})},m=function(e){var t=e.size,r=e.color;return n.a.createElement(l,{size:t,color:r,prefix:"fas",iconName:"toggle-off"})},b=function(e){var t=e.size,r=e.color;return n.a.createElement(l,{size:t,color:r,prefix:"fas",iconName:"plus"})},g=function(e){var t=e.size,r=e.color;return n.a.createElement(l,{size:t,color:r,prefix:"fas",iconName:"trophy"})},y=function(e){var t=e.size,r=e.color;return n.a.createElement(l,{size:t,color:r,prefix:"fas",iconName:"angle-double-right"})},h=function(e){var t=e.size,r=e.color;return n.a.createElement(l,{size:t,color:r,prefix:"fas",iconName:"ban"})}},270:function(e,t,r){"use strict";r.d(t,"a",(function(){return v}));var a=r(125),n=r(9),o=r.n(n),i=r(0),l=r.n(i);function c(e){return(c="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function f(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function d(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function m(e){return t=e,(t-=0)===t?e:(e=e.replace(/[\-_\s]+(.)?/g,(function(e,t){return t?t.toUpperCase():""}))).substr(0,1).toLowerCase()+e.substr(1);var t}function b(e){return e.split(";").map((function(e){return e.trim()})).filter((function(e){return e})).reduce((function(e,t){var r,a=t.indexOf(":"),n=m(t.slice(0,a)),o=t.slice(a+1).trim();return n.startsWith("webkit")?e[(r=n,r.charAt(0).toUpperCase()+r.slice(1))]=o:e[n]=o,e}),{})}var g=!1;try{g=!0}catch(w){}function y(e){return null===e?null:"object"===c(e)&&e.prefix&&e.iconName?e:Array.isArray(e)&&2===e.length?{prefix:e[0],iconName:e[1]}:"string"===typeof e?{prefix:"fas",iconName:e}:void 0}function h(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?s({},e,t):{}}function v(e){var t=e.forwardedRef,r=f(e,["forwardedRef"]),n=r.icon,o=r.mask,i=r.symbol,l=r.className,c=r.title,u=y(n),m=h("classes",[].concat(d(function(e){var t,r=e.spin,a=e.pulse,n=e.fixedWidth,o=e.inverse,i=e.border,l=e.listItem,c=e.flip,u=e.size,p=e.rotation,f=e.pull,d=(s(t={"fa-spin":r,"fa-pulse":a,"fa-fw":n,"fa-inverse":o,"fa-border":i,"fa-li":l,"fa-flip-horizontal":"horizontal"===c||"both"===c,"fa-flip-vertical":"vertical"===c||"both"===c},"fa-".concat(u),"undefined"!==typeof u&&null!==u),s(t,"fa-rotate-".concat(p),"undefined"!==typeof p&&null!==p&&0!==p),s(t,"fa-pull-".concat(f),"undefined"!==typeof f&&null!==f),s(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(d).map((function(e){return d[e]?e:null})).filter((function(e){return e}))}(r)),d(l.split(" ")))),b=h("transform","string"===typeof r.transform?a.d.transform(r.transform):r.transform),w=h("mask",y(o)),x=Object(a.b)(u,p({},m,{},b,{},w,{symbol:i,title:c}));if(!x)return function(){var e;!g&&console&&"function"===typeof console.error&&(e=console).error.apply(e,arguments)}("Could not find icon",u),null;var j=x.abstract,E={ref:t};return Object.keys(r).forEach((function(e){v.defaultProps.hasOwnProperty(e)||(E[e]=r[e])})),O(j[0],E)}v.displayName="FontAwesomeIcon",v.propTypes={border:o.a.bool,className:o.a.string,mask:o.a.oneOfType([o.a.object,o.a.array,o.a.string]),fixedWidth:o.a.bool,inverse:o.a.bool,flip:o.a.oneOf(["horizontal","vertical","both"]),icon:o.a.oneOfType([o.a.object,o.a.array,o.a.string]),listItem:o.a.bool,pull:o.a.oneOf(["right","left"]),pulse:o.a.bool,rotation:o.a.oneOf([0,90,180,270]),size:o.a.oneOf(["lg","xs","sm","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:o.a.bool,symbol:o.a.oneOfType([o.a.bool,o.a.string]),title:o.a.string,transform:o.a.oneOfType([o.a.string,o.a.object]),swapOpacity:o.a.bool},v.defaultProps={border:!1,className:"",mask:null,fixedWidth:!1,inverse:!1,flip:null,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,symbol:!1,title:"",transform:null,swapOpacity:!1};var O=function e(t,r){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"===typeof r)return r;var n=(r.children||[]).map((function(r){return e(t,r)})),o=Object.keys(r.attributes||{}).reduce((function(e,t){var a=r.attributes[t];switch(t){case"class":e.attrs.className=a,delete r.attributes.class;break;case"style":e.attrs.style=b(a);break;default:0===t.indexOf("aria-")||0===t.indexOf("data-")?e.attrs[t.toLowerCase()]=a:e.attrs[m(t)]=a}return e}),{attrs:{}}),i=a.style,l=void 0===i?{}:i,c=f(a,["style"]);return o.attrs.style=p({},o.attrs.style,{},l),t.apply(void 0,[r.tag,p({},o.attrs,{},c)].concat(d(n)))}.bind(null,l.a.createElement)},273:function(e,t,r){e.exports={functionsList:"common_functionsList__3B3UB",toolsBarContainer:"common_toolsBarContainer__1nanA",toolsBarRow:"common_toolsBarRow__r8q12"}},287:function(e,t,r){"use strict";r.d(t,"b",(function(){return b})),r.d(t,"d",(function(){return g})),r.d(t,"a",(function(){return y})),r.d(t,"e",(function(){return h}));r(7),r(29),r(20);var a,n,o,i,l,c,s=r(132),u=(r(0),r(105),r(299)),p=r.n(u),f=r(274),d=r.n(f),m=(r(58),r(131));function b(){a(""),n(""),o(""),i(""),l(""),c("")}var g=p()(),y=function(e,t){return d()({mode:e?"click":"none",blurToSave:!0,autoSelectText:!0,afterSaveCell:function(e,r,a,n){return t(a)}})};t.c=function(e){var t;return[{dataField:"rowNumber",text:"ID",editable:!1,headerStyle:function(e,t){return{width:"3%"}}},{dataField:"name",text:"Nome",headerClasses:"player-table-header-element",autoSelectText:!0,headerStyle:function(t,r){return{width:e?"16%":"25%"}},filter:Object(u.textFilter)({placeholder:"Filtra...",getFilter:function(e){return a=e}})},{dataField:"surname",text:"Cognome",headerClasses:"player-table-header-element",autoSelectText:!0,headerStyle:function(t,r){return{width:e?"16%":"25%"}},filter:Object(u.textFilter)({placeholder:"Filtra...",getFilter:function(e){return n=e}})},{dataField:"alias",text:"Alias",headerClasses:"player-table-header-element",headerStyle:function(t,r){return{width:e?"17%":"25%"}},autoSelectText:!0,filter:Object(u.textFilter)({placeholder:"Filtra...",getFilter:function(e){return o=e}})},{dataField:"role",text:"Roulo",headerClasses:"player-table-header-element",headerStyle:function(t,r){return{width:"".concat(e?"11":"15","%")}},filter:Object(u.selectFilter)({placeholder:"Filtra...",options:(t={},Object(s.a)(t,m.a.GoalKeeper,m.a.GoalKeeper),Object(s.a)(t,m.a.Striker,m.a.Striker),Object(s.a)(t,m.a.Master,m.a.Master),t),getFilter:function(e){return i=e}}),editor:{type:f.Type.SELECT,getOptions:function(e){return[{value:m.a.GoalKeeper,label:m.a.GoalKeeper},{value:m.a.Striker,label:m.a.Striker},{value:m.a.Master,label:m.a.Master}]}}},{dataField:"email",text:"Email",headerStyle:function(e,t){return{width:"20%"}},headerClasses:"player-table-header-element",autoSelectText:!0,hidden:!e,filter:Object(u.textFilter)({placeholder:"Filtra...",getFilter:function(e){return l=e}})},{dataField:"phone",headerStyle:function(e,t){return{width:"10%"}},text:"Telefono",headerClasses:"player-table-header-element",autoSelectText:!0,hidden:!e,filter:Object(u.textFilter)({placeholder:"Filtra...",getFilter:function(e){return c=e}})},{dataField:"match_played",text:"Partite Giocate",hidden:!0},{dataField:"match_won",text:"Vittorie",hidden:!0},{dataField:"total_score",text:"Punteggio",hidden:!0}]};function h(e){return e?e.alias?e.alias:e.surname?"".concat(e.name," - ").concat(e.surname):e.name:""}},361:function(e,t,r){},362:function(e,t,r){"use strict";var a=r(5),n=r(2),o=r(8),i=r.n(o),l=r(0),c=r.n(l),s=r(28),u=r(12),p=Object(s.a)("input-group-append"),f=Object(s.a)("input-group-prepend"),d=Object(s.a)("input-group-text",{Component:"span"}),m=c.a.forwardRef((function(e,t){var r=e.bsPrefix,o=e.size,l=e.className,s=e.as,p=void 0===s?"div":s,f=Object(a.a)(e,["bsPrefix","size","className","as"]);return r=Object(u.a)(r,"input-group"),c.a.createElement(p,Object(n.a)({ref:t},f,{className:i()(l,r,o&&r+"-"+o)}))}));m.displayName="InputGroup";var b=Object(n.a)({},m,{Text:d,Radio:function(e){return c.a.createElement(d,null,c.a.createElement("input",Object(n.a)({type:"radio"},e)))},Checkbox:function(e){return c.a.createElement(d,null,c.a.createElement("input",Object(n.a)({type:"checkbox"},e)))},Append:p,Prepend:f});t.a=b},371:function(e,t,r){"use strict";r.r(t);var a=r(29),n=r(7),o=r.n(n),i=r(20),l=r(124),c=r(0),s=r.n(c),u=r(362),p=r(275),f=r(105),d=r(130),m=r(165),b=r(282),g=r.n(b),y=r(19),h=r(37),v=r(33),O=r(106),w=r(126),x=function(){var e=Object(h.c)(w.a.getTournament);return e?s.a.createElement("h3",null,s.a.createElement("p",null,s.a.createElement("b",null,'"',s.a.createElement("strong",null,null===e||void 0===e?void 0:e.name.toUpperCase()),'"',s.a.createElement("small",null," @ ",Object(O.e)(e.progress))))):null},j=r(57),E=function(e){var t=e.addRow,r=e.optionsLength,a=e.isEditable,n=r-1,o=n<8?8-n:0;return r?n>=8?s.a.createElement(s.a.Fragment,null,s.a.createElement("p",null," Aggiungi le coppie per questo torneo..."),s.a.createElement(f.a,{variant:"success",onClick:t,disabled:!a},"Aggiungi Coppia")):s.a.createElement(s.a.Fragment,null,s.a.createElement("p",null,"Ci sono solo ",n," giocatori definiti ma devono essercene almeno 8 per poter formare un torneo."),s.a.createElement("p",null,1===o?"Devi creare un altro giocatore...":"Devi creare almeno altri ".concat(o)),s.a.createElement(j.b,{to:"/player"},s.a.createElement(f.a,{variant:"success"},"Gestione Giocatori"))):null},S=r(129),C=r(269),N=r(14),k=r(274),z=r.n(k),F=r(281),T=r(287),A=s.a.forwardRef((function(e,t){var r=e.styles,a=e.row,n=e.columnIndex,o=e.onUpdate,i=e.onSelect,u=e.options,p=Object(c.useState)(),f=Object(l.a)(p,2),d=f[0],m=f[1];return s.a.createElement(F.a,{styles:r,options:u,onChange:function(e,t){m(e);var r=Object(T.e)(e);o(r),i(e,a.id,n)},value:d,placeholder:"Cerca...",isSearchable:!0,isClearable:!0})})),P=r(133),I=function(e,t,r,a,n,o,i){return s.a.createElement(A,Object.assign({},e,{id:n,row:r,rowIndex:a,columnIndex:n,value:t,onSelect:o,options:i,styles:P.a}))},R={align:function(){return"center"},headerStyle:function(e,t){return{width:"7,5%"}},editor:{type:k.Type.CHECKBOX,value:"".concat("Si",":").concat("No")},style:function(e,t,r,a){return"No"!==e?{backgroundColor:"#ffbf47"}:null}},D=function(e,t){return[{dataField:"id",text:"ID",editable:!1,hidden:!0,align:function(){return"center"}},{dataField:"rowNumber",text:"ID",editable:!1,align:function(){return"center"}},{dataField:"player1.alias",text:"Giocatore 1",align:function(){return"center"},editorRenderer:function(r,a,n,o,i,l){return I(r,a,n,i,l,e,t)},headerStyle:function(e,t){return{width:"20%"}}},{dataField:"player2.alias",text:"Giocatore 2",align:function(){return"center"},editorRenderer:function(r,a,n,o,i,l){return I(r,a,n,i,l,e,t)},headerStyle:function(e,t){return{width:"20%"}}},{dataField:"alias",text:"Alias Coppia",headerStyle:function(e,t){return{width:"25%"}}},{dataField:"stage1Name",text:"Nome girone",align:function(){return"center"},headerStyle:function(e,t){return{width:"10%"}},editor:{type:k.Type.SELECT,options:"abcdefghijklmnopqrstuvwxyz".toUpperCase().split("").map((function(e){return{value:e,label:e}}))}},Object(N.a)({dataField:"paid1",text:"Pagato 1"},R),Object(N.a)({dataField:"paid2",text:"Pagato 2"},R)]},_=(r(361),r(273)),G=r.n(_),M=r(58),L=r(54),q=r(64),B=r(17),J={message:"",onClick:function(){return console.log("")},show:!1,title:""};t.default=Object(y.i)((function(){var e=Object(y.g)(),t=Object(h.b)(),r=Object(h.c)(L.a.getSession),n=Object(h.c)(w.a.getTournament),b=Object(c.useState)({state:!1,message:"Caricamento"}),O=Object(l.a)(b,2),j=O[0],N=O[1],k=Object(c.useState)(J),F=Object(l.a)(k,2),T=F[0],A=F[1],I=Object(c.useState)({rows:[],players:[]}),R=Object(l.a)(I,2),_=R[0],U=R[1],K=Object(c.useState)([]),H=Object(l.a)(K,2),W=H[0],V=H[1],X=Object(c.useState)(0),Y=Object(l.a)(X,2),Q=Y[0],Z=Y[1],$=Object(c.useState)(0),ee=Object(l.a)($,2),te=ee[0],re=ee[1];function ae(e){N({state:!1,message:e}),v.b.error(e,{autoClose:1e4})}function ne(e){N({state:!1,message:e}),v.b.success(e)}function oe(e){return ie.apply(this,arguments)}function ie(){return(ie=Object(i.a)(o.a.mark((function e(t){var r,i,l;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,N({state:!0,message:"Aggiunta riga in corso"}),(r=Object(P.c)()).tId=n.id||0,e.next=6,fetch("/api/v1/pair",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)});case 6:return i=e.sent,e.next=9,i.json();case 9:l=e.sent,r.id=l.id,r.rowNumber=t||_.rows.length+1,U((function(e){return{rows:[r].concat(Object(a.a)(e.rows)),players:e.players}})),ne("Riga aggiunta"),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),ae("Errore aggiunta riga");case 19:case"end":return e.stop()}}),e,null,[[0,16]])})))).apply(this,arguments)}function le(){return ce.apply(this,arguments)}function ce(){return(ce=Object(i.a)(o.a.mark((function e(){var t,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=_.rows.length+1,r=0;case 2:if(!(r<te)){e.next=9;break}return e.next=5,oe(t);case 5:t++;case 6:r++,e.next=2;break;case 9:re(0);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function se(){return ue.apply(this,arguments)}function ue(){return(ue=Object(i.a)(o.a.mark((function e(){var t,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,N({state:!0,message:W.length>1?"Cancellazione righe in corso":"Cancellazione riga in corso"}),t=[],W.forEach((function(e){e.player1&&e.player1.id&&t.push(e.player1),e.player2&&e.player2.id&&t.push(e.player2)})),t&&U((function(e){return{rows:e.rows,players:[].concat(t,Object(a.a)(e.players)).sort((function(e,t){return e.alias.localeCompare(t.alias)}))}})),e.next=7,fetch("/api/v1/pair",{method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify(W)});case 7:return r=e.sent,e.next=10,r.json();case 10:U((function(e){return{rows:e.rows.filter((function(e){return!W.find((function(t){return t.id===e.id}))})),players:e.players}})),ne(W.length>1?"Righe cancellate":"Riga cancellata"),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),ae("Errore cancellazione riga");case 17:V([]);case 18:case"end":return e.stop()}}),e,null,[[0,14]])})))).apply(this,arguments)}function pe(e,t){e&&e.id?t.id?U((function(r){return{rows:r.rows,players:[].concat(Object(a.a)(r.players.filter((function(e){return e.id!==t.id}))),[e]).sort((function(e,t){return e.alias.localeCompare(t.alias)}))}})):U((function(t){return{rows:t.rows,players:[].concat(Object(a.a)(t.players),[e]).sort((function(e,t){return e.alias.localeCompare(t.alias)}))}})):t.id&&U((function(e){return{rows:e.rows,players:e.players.filter((function(e){return e.id!==t.id}))}}))}Object(c.useEffect)((function(){n&&Object(i.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=U,e.next=3,Object(P.b)(n.id);case 3:return e.t1=e.sent,e.abrupt("return",(0,e.t0)(e.t1));case 5:case"end":return e.stop()}}),e)})))()}),[n]);var fe=function(){var a=Object(i.a)(o.a.mark((function a(){var i,l,c,s,u;return o.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(n.id||(ae("Id torneo mancante. Verrai inviato alla Home tra 5 secondi...."),setTimeout((function(){return e.push("/")}),5e3)),!(_.rows.length<4)){a.next=4;break}return ae("Numero di coppie insufficente. Devi formare almeno 4 coppie"),a.abrupt("return");case 4:if(0===(i=_.rows.filter((function(e){return!e.stage1Name||""===e.stage1Name})).map((function(e){return e.rowNumber}))).length){a.next=8;break}return ae("Assegna  ".concat(1===i.length?"la riga ":"le righe "," ").concat(i," ad un girone per procedere ")),a.abrupt("return");case 8:if(0===(l=_.rows.filter((function(e){return!e.player1||!e.player1.id||!e.player2||!e.player2.id})).map((function(e){return e.rowNumber}))).length){a.next=12;break}return ae("Assegna  i giocatori ".concat(1===l.length?"alla riga ":"alle righe "," ").concat(l," per procedere ")),a.abrupt("return");case 12:for(u in 3,c=[],s=_.rows.reduce((function(e,t){return t.stage1Name in e?e[t.stage1Name]++:e[t.stage1Name]=1,e}),{}))s[u]<=3&&c.push(u);if(!(c.length>0)){a.next=19;break}return ae(1===c.length?"Il torneo ".concat(c," deve contenere almeno ").concat(4," coppie"):"I torneI ".concat(c," devono contenere almeno ").concat(4," coppie")),a.abrupt("return");case 19:r.isAdmin&&n.progress<q.a.Stage1&&(n.progress=q.a.Stage1,t(B.f.updateTournament.request({model:n}))),t(B.a.getPairs.request({tId:n.id})),e.push("/stage1");case 22:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}}();function de(){e.push("/")}var me={mode:"checkbox",onSelect:function(e,t){V((function(r){var n=!!r.find((function(t){return t.id===e.id}));return t?n?r:[e].concat(Object(a.a)(r)):n?r.filter((function(t){return t.id!==e.id})):r}))},onSelectAll:function(e,t){return V(e?t:[])},style:{backgroundColor:"#c8e6c9"}},be=function(){var e=Object(i.a)(o.a.mark((function e(){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,N({state:!0,message:"Cancellazione in corso"}),e.next=4,fetch("/api/v1/stage1",{method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify({tId:n.id})});case 4:return a=e.sent,e.next=7,a.json();case 7:r.isAdmin&&n.progress<q.a.Stage1&&(n.progress=q.a.PairsSelection,t(B.f.updateTournament.request({model:n}))),ne("Cancellazione completata"),A(J),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),ae("Errore cancellazione Fase 1");case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}();function ge(){n.progress>q.a.Stage1?ae("Non \xe8 possibile cancellare in quanto il torneo \xe8 gia alla fase 2"):A({message:"Vuoi resettare i gironi ? ",onClick:function(){return be()},onHide:function(){return A(J)},show:!0,title:"Reset Gironi"})}function ye(){return he.apply(this,arguments)}function he(){return(he=Object(i.a)(o.a.mark((function e(){var t,r,a,i,l;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(Q){e.next=3;break}return ae("Specificare il numero di gironi da assegnare"),e.abrupt("return");case 3:if(n.progress!==q.a.Stage1&&n.progress!==q.a.Stage2){e.next=6;break}return ae("Non riassegnare i gironi in quanto le coppie sono gia state confermate per la fase successiva"),e.abrupt("return");case 6:for(i in N({state:!0,message:"Aggiornamento in corso "}),t=0,r="abcdefghijklmnopqrstuvwxyz".toUpperCase().split(""),a=[],_.rows){l=_.rows[i],t==Q&&(t=0),l.stage1Name=r[t],t++;try{fetch("/api/v1/pair",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(l)}),a.push(l)}catch(o){ae("Errore"),a.push(l)}}ne("Gironi assegnati correttamente"),U((function(e){return{rows:a,players:e.players}}));case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}console.log("availableRows : ",_.rows);var ve,Oe=Math.floor(Math.floor((_.players.length-1)/2)-(0===_.rows.length?0:_.rows.reduce((function(e,t){var r,a;return!t.player1&&!t.player2||!(null===(r=t.player1)||void 0===r?void 0:r.id)&&!(null===(a=t.player2)||void 0===a?void 0:a.id)?e+1:t.player1&&t.player1.id&&t.player2&&t.player2.id?e:e+.5}),0))),we=!(W.length>0)||"Stage1"===n.progress||"Stage2"===n.progress;return s.a.createElement("div",null,s.a.createElement(S.YesNoModal,{message:T.message,title:T.title,onClick:T.onClick,show:T.show}),s.a.createElement(S.LoadingModal,{show:j.state,message:j.message}),s.a.createElement(d.a,null,s.a.createElement(m.a,null,s.a.createElement(d.a,{className:G.a.toolsBarContainer},s.a.createElement("div",{className:G.a.toolsBar},s.a.createElement(f.a,{variant:"secondary",className:"float-left align-middle",onClick:de},"Home"),s.a.createElement(f.a,{variant:"success",className:"align-middle",onClick:function(){return oe()},disabled:Oe<=0||!r.isAdmin},s.a.createElement(C.d,null)," Aggiungi Coppia"),s.a.createElement(f.a,{variant:"danger",className:"align-middle",onClick:se,disabled:we||!r.isAdmin},s.a.createElement(C.j,null)," Elimina Coppia"),s.a.createElement(f.a,{variant:"danger",className:"align-middle",onClick:ge,disabled:!r.isAdmin},"Reset gironi"),s.a.createElement(f.a,{variant:"outline-warning",className:"default-color-white float-right align-middle",onClick:fe,disabled:!r.isAdmin},s.a.createElement("b",null,"Prosegui ")," ",s.a.createElement(C.e,null))),r.isAdmin?s.a.createElement(s.a.Fragment,null,s.a.createElement(u.a,null,s.a.createElement(u.a.Prepend,null,s.a.createElement(u.a.Text,null,"Assegna gironi")),s.a.createElement(p.a,{placeholder:_.rows.length<4?"Inserisci almeno 4 coppie":"Numero di gironi ( max ".concat(Math.floor(_.rows.length/4)," )"),"aria-label":"Numero di gironi",type:"number",step:1,min:0,max:Math.floor(_.rows.length/4),value:Q,onChange:function(e){return Z(Number(e.currentTarget.value))},disabled:_.rows.length<4||n.progress===q.a.Stage1||n.progress===q.a.Stage2}),s.a.createElement(u.a.Append,null,s.a.createElement(f.a,{variant:"primary",onClick:ye,disabled:!Q||Q>Math.floor(_.rows.length/4)||_.rows.length<4},"Esegui"))),s.a.createElement(u.a,null,s.a.createElement(u.a.Prepend,null,s.a.createElement(u.a.Text,null,"Aggiungi coppie")),s.a.createElement(p.a,{disabled:Oe<=0,type:"number",step:1,min:1,max:Oe,placeholder:Oe<=0?"Numero massimo di coppie gia creato":"Numero di coppie da aggiungere ( max ".concat(Oe," )"),"aria-label":"Numero di coppie",onChange:function(e){return re(Number(e.currentTarget.value))},value:te||""}),s.a.createElement(u.a.Append,null,s.a.createElement(f.a,{variant:"primary",onClick:function(e){return re(Oe)},disabled:te>Oe},"Max"),s.a.createElement(f.a,{variant:"primary",onClick:le,disabled:!te||te>Oe},"Esegui")))):null)),s.a.createElement(m.a,null,s.a.createElement(d.a,null,_.rows&&_.players?s.a.createElement(g.a,{bootstrap4:!0,keyField:"id",data:_.rows,columns:D((function(e,t,r){var a=_.rows.map((function(a){if(a.id===t){var n=a;return 1===r?e.id&&n.player2&&n.player2.id===e.id?(n.player1=Object(M.c)(),ae("Attenzione : Non puoi selezionare lo stesso giocare ! ")):(pe(n.player1,e),n.player1=e):e.id&&n.player1&&n.player1.id===e.id?(n.player2=Object(M.c)(),ae("Attenzione : Non puoi selezionare lo stesso giocare ! ")):(pe(n.player2,e),n.player2=e),fetch("/api/v1/pair",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}),n}return a}));U((function(e){return{rows:a,players:e.players}}))}),_.players),cellEdit:(ve=r.isAdmin,z()({mode:ve?"click":"none",blurToSave:!0,afterSaveCell:function(e,t,r,a){"player1.alias"!==a.dataField&&"player2.alias"!==a.dataField&&Object(i.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/v1/pair",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)});case 2:return t=e.sent,e.next=5,t.json();case 5:case"end":return e.stop()}}),e)})))()}})),selectRow:me,noDataIndication:function(){return s.a.createElement(E,{isEditable:r.isAdmin||!1,addRow:function(){return oe()},optionsLength:_.players.length})},caption:s.a.createElement(x,null),headerClasses:"default-background default-color-yellow",striped:!0,hover:!0}):null))))}))}}]);
//# sourceMappingURL=6.de4a2e44.chunk.js.map