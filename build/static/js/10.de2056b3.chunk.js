(this.webpackJsonpcalcetto=this.webpackJsonpcalcetto||[]).push([[10],{216:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"d",(function(){return p})),n.d(t,"c",(function(){return h}));n(47),n(215),n(62),n(0),n(116);var r,a,i,o,c,l,u=n(230),s=n(219),d={Portiere:"Portiere",Attaccante:"Attaccante",Master:"Master"};function f(){r(""),a(""),i(""),o(""),c(""),l("")}t.b=function(e){return[{dataField:"id",text:"ID",editable:!1,headerStyle:function(e,t){return{width:"3%"}}},{dataField:"name",text:"Nome",headerClasses:"player-table-header-element",autoSelectText:!0,headerStyle:function(t,n){return{width:e?"16%":"25%"}},filter:Object(u.textFilter)({placeholder:"Filtra...",getFilter:function(e){return r=e}})},{dataField:"surname",text:"Cognome",headerClasses:"player-table-header-element",autoSelectText:!0,headerStyle:function(t,n){return{width:e?"16%":"25%"}},filter:Object(u.textFilter)({placeholder:"Filtra...",getFilter:function(e){return a=e}})},{dataField:"alias",text:"Alias",headerClasses:"player-table-header-element",headerStyle:function(t,n){return{width:e?"17%":"25%"}},autoSelectText:!0,filter:Object(u.textFilter)({placeholder:"Filtra...",getFilter:function(e){return i=e}})},{dataField:"role",text:"Roulo",headerClasses:"player-table-header-element",headerStyle:function(t,n){return{width:"".concat(e?"11":"15","%")}},filter:Object(u.selectFilter)({placeholder:"Filtra...",options:d,getFilter:function(e){return o=e}}),editor:{type:s.Type.SELECT,getOptions:function(e){return[{value:"Portiere",label:"Portiere"},{value:"Attaccante",label:"Attaccante"},{value:"Master",label:"Master"}]}}},{dataField:"email",text:"Email",headerStyle:function(e,t){return{width:"20%"}},headerClasses:"player-table-header-element",autoSelectText:!0,hidden:!e,filter:Object(u.textFilter)({placeholder:"Filtra...",getFilter:function(e){return c=e}})},{dataField:"phone",headerStyle:function(e,t){return{width:"10%"}},text:"Telefono",headerClasses:"player-table-header-element",autoSelectText:!0,hidden:!e,filter:Object(u.textFilter)({placeholder:"Filtra...",getFilter:function(e){return l=e}})},{dataField:"match_played",text:"Partite Giocate",hidden:!0},{dataField:"match_won",text:"Vittorie",hidden:!0},{dataField:"total_score",text:"Punteggio",hidden:!0}]};function p(e){return e?e.alias?e.alias:e.surname?"".concat(e.name," - ").concat(e.surname):e.name:""}function h(e){return{id:null,name:"",surname:"",alias:"",label:e||"",role:"Portiere",email:"",phone:"",match_played:0,match_won:0,total_score:0,editable:!1}}},235:function(e,t,n){"use strict";n.d(t,"b",(function(){return v})),n.d(t,"a",(function(){return y})),n.d(t,"e",(function(){return g})),n.d(t,"c",(function(){return O})),n.d(t,"d",(function(){return x})),n.d(t,"f",(function(){return j}));var r=n(215),a=n(47),i=n.n(a),o=n(62),c=n(0),l=n.n(c),u=n(219),s=n.n(u),d=n(34),f=n(227),p=n(216),h=n(243),m=Object(h.a)(),b=l.a.forwardRef((function(e,t){var n=Object(c.useState)(),r=Object(d.a)(n,2),a=r[0],i=r[1],o=e.row,u=e.columnIndex,s=e.id,h=e.onUpdate,b=e.onSelect,v=e.options;return l.a.createElement(f.a,{components:m,options:v,onChange:function(e){e.pairId=s,i(e);var t=Object(p.d)(e);h(t),b(e,o.id,u)},value:a,placeholder:"Cerca...",isSearchable:!0,isClearable:!0})})),v=function(e,t){return[{dataField:"id",text:"ID",editable:!1,hidden:!0,align:function(){return"center"}},{dataField:"rowNumber",text:"ID",editable:!1,align:function(){return"center"}},{dataField:"player1.alias",text:"Giocatore 1",align:function(){return"center"},editorRenderer:function(n,r,a,i,o,c){return l.a.createElement(b,Object.assign({},n,{id:c,row:a,rowIndex:o,columnIndex:c,value:r,onSelect:e,options:t}))},headerStyle:function(e,t){return{width:"20%"}}},{dataField:"player2.alias",text:"Giocatore 2",align:function(){return"center"},editorRenderer:function(n,r,a,i,o,c){return l.a.createElement(b,Object.assign({},n,{id:c,row:a,rowIndex:o,columnIndex:c,value:r,onSelect:e,options:t}))},headerStyle:function(e,t){return{width:"20%"}}},{dataField:"pairAlias",text:"Alias Coppia",headerStyle:function(e,t){return{width:"25%"}}},{dataField:"stage1Name",text:"Nome girone",align:function(){return"center"},headerStyle:function(e,t){return{width:"10%"}},editor:{type:u.Type.SELECT,options:"abcdefghijklmnopqrstuvwxyz".toUpperCase().split("").map((function(e){return{value:e,label:e}}))}},{dataField:"paid1",text:"Pagato 1",align:function(){return"center"},headerStyle:function(e,t){return{width:"7,5%"}},editor:{type:u.Type.CHECKBOX,value:"Si:No"},style:function(e,t,n,r){if("Si"!==e)return{backgroundColor:"#ffbf47"}}},{dataField:"paid2",text:"Pagato 2",align:function(){return"center"},headerStyle:function(e,t){return{width:"7,5%"}},editor:{type:u.Type.CHECKBOX,value:"Si:No"},style:function(e,t,n,r){if("Si"!==e)return{backgroundColor:"#ffbf47"}}}]},y=function(e){return s()({mode:e?"click":"none",blurToSave:!0,afterSaveCell:function(e,t,n,r){"player1.alias"!==r.dataField&&"player2.alias"!==r.dataField&&Object(o.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/v1/pair",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});case 2:return t=e.sent,e.next=5,t.json();case 5:case"end":return e.stop()}}),e)})))()}})};function g(){return{id:null,rowNumber:null,tId:null,player1:Object(p.c)(),player2:Object(p.c)(),pairAlias:"",stage1Name:"",paid1:"No",paid2:"No"}}var O=function(){var e=Object(o.a)(i.a.mark((function e(t){var n,a,o,c,l;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/v1/pair/list/?tId=".concat(t),{method:"GET",headers:{"Content-Type":"application/json"}});case 2:return n=e.sent,e.next=5,n.json();case 5:return a=e.sent,e.next=8,fetch(t?"/api/v1/player/list/".concat(t):"/api/v1/player/list",{method:"GET",headers:{"Content-Type":"application/json"}});case 8:return n=e.sent,e.next=11,n.json();case 11:return o=e.sent,c=[].concat(Object(r.a)(o),[Object(p.c)("Nessun Giocatore")]),e.next=15,fetch("/api/v1/tournament/".concat(t),{method:"GET",headers:{"Content-Type":"application/json"}});case 15:return n=e.sent,e.next=18,n.json();case 18:return l=e.sent,e.abrupt("return",{rows:a,players:c,tournament:l});case 20:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),x=function(e,t){Object(o.a)(i.a.mark((function n(){var r,a;return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("/api/v1/pair/list/?tId=".concat(t),{method:"GET",headers:{"Content-Type":"application/json"}});case 2:return r=n.sent,n.next=5,r.json();case 5:a=n.sent,e(a);case 7:case"end":return n.stop()}}),n)})))()};function j(e){return console.log("valueFormatter : ",e),e.pairAlias&&""!==e.pairAlias?"".concat(e.pairAlias," ( ").concat(e.id," )"):function(e){console.log("createAlias : ",e);var t="".concat(e.rowNumber," : "),n=e.player1,r=e.player2,a=e.id;return t+=n.alias?n.alias:n.name,t+=r.alias,t+=" ( ".concat(a," )")}(e)}},243:function(e,t,n){"use strict";var r=n(0),a=n.n(r),i=n(234),o=(n(228),n(24),n(6),n(224)),c=(n(220),n(233),n(33)),l=n(5),u=n(3),s=n(12),d=n(65),f=n(66);function p(e,t){var n=Object.create(null);return e&&r.Children.map(e,(function(e){return e})).forEach((function(e){n[e.key]=function(e){return t&&Object(r.isValidElement)(e)?t(e):e}(e)})),n}function h(e,t,n){return null!=n[t]?n[t]:e.props[t]}function m(e,t,n){var a=p(e.children),i=function(e,t){function n(n){return n in t?t[n]:e[n]}e=e||{},t=t||{};var r,a=Object.create(null),i=[];for(var o in e)o in t?i.length&&(a[o]=i,i=[]):i.push(o);var c={};for(var l in t){if(a[l])for(r=0;r<a[l].length;r++){var u=a[l][r];c[a[l][r]]=n(u)}c[l]=n(l)}for(r=0;r<i.length;r++)c[i[r]]=n(i[r]);return c}(t,a);return Object.keys(i).forEach((function(o){var c=i[o];if(Object(r.isValidElement)(c)){var l=o in t,u=o in a,s=t[o],d=Object(r.isValidElement)(s)&&!s.props.in;!u||l&&!d?u||!l||d?u&&l&&Object(r.isValidElement)(s)&&(i[o]=Object(r.cloneElement)(c,{onExited:n.bind(null,c),in:s.props.in,exit:h(c,"exit",e),enter:h(c,"enter",e)})):i[o]=Object(r.cloneElement)(c,{in:!1}):i[o]=Object(r.cloneElement)(c,{onExited:n.bind(null,c),in:!0,exit:h(c,"exit",e),enter:h(c,"enter",e)})}})),i}var b=Object.values||function(e){return Object.keys(e).map((function(t){return e[t]}))},v=function(e){function t(t,n){var r,a=(r=e.call(this,t,n)||this).handleExited.bind(Object(d.a)(Object(d.a)(r)));return r.state={contextValue:{isMounting:!0},handleExited:a,firstRender:!0},r}Object(s.a)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},n.componentWillUnmount=function(){this.mounted=!1},t.getDerivedStateFromProps=function(e,t){var n,a,i=t.children,o=t.handleExited;return{children:t.firstRender?(n=e,a=o,p(n.children,(function(e){return Object(r.cloneElement)(e,{onExited:a.bind(null,e),in:!0,appear:h(e,"appear",n),enter:h(e,"enter",n),exit:h(e,"exit",n)})}))):m(e,i,o),firstRender:!1}},n.handleExited=function(e,t){var n=p(this.props.children);e.key in n||(e.props.onExited&&e.props.onExited(t),this.mounted&&this.setState((function(t){var n=Object(u.a)({},t.children);return delete n[e.key],{children:n}})))},n.render=function(){var e=this.props,t=e.component,n=e.childFactory,r=Object(l.a)(e,["component","childFactory"]),i=this.state.contextValue,o=b(this.state.children).map(n);return delete r.appear,delete r.enter,delete r.exit,null===t?a.a.createElement(f.a.Provider,{value:i},o):a.a.createElement(f.a.Provider,{value:i},a.a.createElement(t,r,o))},t}(a.a.Component);v.propTypes={},v.defaultProps={component:"div",childFactory:function(e){return e}};var y=v;var g=function(e){return function(t){t.in,t.onExited,t.appear,t.enter,t.exit;var n=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(t,["in","onExited","appear","enter","exit"]);return a.a.createElement(e,n)}};function O(){return(O=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var x=function(e){var t=e.component,n=e.duration,r=void 0===n?1:n,i=e.in,o=(e.onExited,function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["component","duration","in","onExited"])),l={entering:{opacity:0},entered:{opacity:1,transition:"opacity "+r+"ms"},exiting:{opacity:0},exited:{opacity:0}};return a.a.createElement(c.e,{mountOnEnter:!0,unmountOnExit:!0,in:i,timeout:r},(function(e){var n={style:O({},l[e])};return a.a.createElement(t,O({innerProps:n},o))}))},j=function(e){var t,n;function r(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))||this).duration=260,t.rafID=void 0,t.state={width:"auto"},t.transition={exiting:{width:0,transition:"width "+t.duration+"ms ease-out"},exited:{width:0}},t.getWidth=function(e){e&&isNaN(t.state.width)&&(t.rafID=window.requestAnimationFrame((function(){var n=e.getBoundingClientRect().width;t.setState({width:n})})))},t.getStyle=function(e){return{overflow:"hidden",whiteSpace:"nowrap",width:e}},t.getTransition=function(e){return t.transition[e]},t}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var i=r.prototype;return i.componentWillUnmount=function(){this.rafID&&window.cancelAnimationFrame(this.rafID)},i.render=function(){var e=this,t=this.props,n=t.children,r=t.in,i=this.state.width;return a.a.createElement(c.e,{enter:!1,mountOnEnter:!0,unmountOnExit:!0,in:r,timeout:this.duration},(function(t){var r=O({},e.getStyle(i),e.getTransition(t));return a.a.createElement("div",{ref:e.getWidth,style:r},n)}))},r}(r.Component);function w(){return(w=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var E=function(e){return function(t){var n=t.in,r=t.onExited,i=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(t,["in","onExited"]);return a.a.createElement(j,{in:n,onExited:r},a.a.createElement(e,w({cropWithEllipsis:n},i)))}};function S(){return(S=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function C(){return(C=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var F=function(e){return function(t){return a.a.createElement(x,C({component:e},t))}};function I(){return(I=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var N=function(e){return function(t){return a.a.createElement(y,I({component:e},t))}};function k(){return(k=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var T=function(e){void 0===e&&(e={});var t,n=Object(o.x)({components:e}),r=n.Input,i=n.MultiValue,c=n.Placeholder,l=n.SingleValue,u=n.ValueContainer,s=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(n,["Input","MultiValue","Placeholder","SingleValue","ValueContainer"]);return k({Input:g(r),MultiValue:E(i),Placeholder:(t=c,function(e){return a.a.createElement(x,S({component:t,duration:e.isMulti?260:1},e))}),SingleValue:F(l),ValueContainer:N(u)},s)},P=T(),V=(P.Input,P.MultiValue,P.Placeholder,P.SingleValue,P.ValueContainer,Object(i.a)(T,o.y));t.a=V},324:function(e,t,n){},332:function(e,t,n){"use strict";n.r(t);var r=n(34),a=n(0),i=n.n(a),o=n(17),c=n(235),l=n(215),u=n(47),s=n.n(u),d=n(62),f=n(236),p=n.n(f),h=n(219),m=n.n(h),b=function(e){var t=e.title,n=e.saved,r={color:n?"#4feb34":void 0};return i.a.createElement("h3",null,i.a.createElement("b",{style:r},"Girone - ",i.a.createElement("strong",null,t)),n?i.a.createElement("small",null," - Salvataggio in corso..."):null)},v=n(227),y=i.a.forwardRef((function(e,t){var n=Object(a.useState)([]),o=Object(r.a)(n,2),l=o[0],u=o[1],s=Object(a.useState)(),d=Object(r.a)(s,2),f=d[0],p=d[1],h=e.row,m=e.columnIndex,b=e.id,y=e.onUpdate,g=e.onSelect,O=e.tId;return Object(a.useEffect)((function(){return Object(c.d)(u,O)}),[O]),i.a.createElement(v.a,{options:l,onChange:function(e){e.pairId=b,p(e);var t=Object(c.f)(e);y(t),g(e,h.id,m)},value:f,placeholder:"Cerca...",isSearchable:!0,isClearable:!0})})),g=function(e,t){return{id:"col".concat(e),dataField:"col".concat(e),text:e.toString(),type:"number",headerStyle:function(e,n){return{width:"".concat(75/t,"%")}},headerAlign:function(e,t){return"center"},editable:function(e,t,n,r){return n!==r-2},align:function(e,t,n,r){return"center"},style:function(e,t,n,r){return n===r-2?{backgroundColor:"#6d706e"}:3===parseInt(e,10)||2===parseInt(e,10)?{backgroundColor:"rgb(196, 247, 160)"}:1===parseInt(e,10)||0===parseInt(e,10)?{backgroundColor:"rgb(255, 147, 147)"}:null},editor:{type:h.Type.SELECT,options:[{value:"3",label:"3"},{value:"2",label:"2"},{value:"1",label:"1"},{value:"0",label:"0"},{value:null,label:""}]}}};var O=function(e,t){for(var n=[{id:"pairLabel",dataField:"pair.label",text:"Nome Coppia",editable:!1,headerStyle:function(e,t){return{width:"15%"}},align:function(e,t,n,r){return"center"},headerAlign:function(e,t){return"center"},editorRenderer:function(n,r,a,o,c,l){return i.a.createElement(y,Object.assign({},n,{id:l,row:a,rowIndex:c,columnIndex:l,value:r,onSelect:e,tId:t[0].tId}))}},{id:"rowNumber",dataField:"rowNumber",text:"ID",editable:!1,type:"number",headerStyle:function(e,t){return{width:"5%"}},headerAlign:function(e,t){return"center"},style:function(e,t,n,r){return{backgroundColor:"#f9ffdb"}}}],r=0;r<t.length;r++)n.push(g(r+1,t.length));return n.push({id:"totale",dataField:"total",text:"Totale",editable:!1,type:"number",headerStyle:function(e,t){return{width:"5%"}},headerAlign:function(e,t){return"center"}},{id:"place",dataField:"place",text:"Posizione",editable:!0,type:"number",headerStyle:function(e,t){return{width:"5%"}},headerAlign:function(e,t){return"center"}}),n};function x(e,t){return e.total===t.total?3===e["col".concat(t.rowNumber)]||2===e["col".concat(t.rowNumber)]?-1:1:t.total-e.total}var j=n(36),w=(n(324),function(e){var t=e.rows,n=e.columns,o=e.tableName,c=e.updateCellValue,u=e.saved,s=Object(a.useState)([]),d=Object(r.a)(s,2),f=d[0],h=d[1],v=function(e,t){return h((function(){var n=!!f.find((function(t){return t.rowNumber===e.rowNumber}));return t?n?f:[e].concat(Object(l.a)(f)):n?f.filter((function(t){return t.rowNumber!==e.rowNumber})):f})),!0},y={mode:"checkbox",onSelect:v,onSelectAll:function(e,t){return t.forEach((function(t){return v(t,e)}))},style:{backgroundColor:"#c8e6c9"}};return i.a.createElement(j.a.Consumer,null,(function(e){var a,s=Object(r.a)(e,1)[0];return i.a.createElement(p.a,{bootstrap4:!0,keyField:"id",data:t,columns:n,selectRow:y,cellEdit:(a=Object(j.c)(s),m()({mode:a?"click":"none",blurToSave:!0,beforeSaveCell:function(e,n,r,a){a.id.startsWith("col")&&(t[parseInt(a.text)-1]["col".concat(r.rowNumber)]=function(e){if(null===e)return null;switch(e){case 3:return 0;case 2:return 1;case 1:return 2;case 0:return 3;default:return null}}(n),Object(l.a)(t).sort((function(e,t){return x(e,t)})).forEach((function(e,n){return t[e.rowNumber-1].place=n+1})))},afterSaveCell:function(e,n,r,a){if(a.id.startsWith("col")){c(e,n,r,a);var i=0;for(var o in r)o.startsWith("col")&&(i+=r[o]);for(var l in t[r.rowNumber-1].total=i||null,i=0,t[parseInt(a.text)-1])l.startsWith("col")&&(i+=t[parseInt(a.text)-1][l]);t[parseInt(a.text)-1].total=i||null}}})),noDataIndication:"Nessun dato reperito",wrapperClasses:"player-table",headerClasses:"player-table-header",caption:i.a.createElement(b,{title:o,saved:u}),striped:!0,hover:!0})}))}),E=function(e){var t,n,o=e.pairsList,c=Object(a.useState)(!1),u=Object(r.a)(c,2),f=u[0],p=u[1],h=Object(a.useState)(!1),m=Object(r.a)(h,2),b=m[0],v=m[1],y=Object(a.useState)(function(e){for(var t=[],n=0;n<e.length;n++){t.push({pair:e[n],rowNumber:n+1});for(var r=1;r<=e.length;r++)t[n]["col".concat(r)]=null;t[n].total=0,t[n].place=0,t[n].id="row-".concat(e[0].tId,"-").concat(n)}return t}(o)),g=Object(r.a)(y,2),j=g[0],E=g[1],S=null!==(t=null===(n=o[0])||void 0===n?void 0:n.stage1Name)&&void 0!==t?t:"Not found",C=function(){var e=Object(d.a)(s.a.mark((function e(t,n,r,a){var i,o;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i={tId:r.pair.tId,tableName:S,score:n,pair1Id:r.pair.id,pair2Id:j[parseInt(a.text)-1].pair.id},e.next=3,fetch("/api/v1/stage1/cell",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)});case 3:return o=e.sent,e.next=6,o.json();case 6:o.ok&&(v(!0),setTimeout((function(){return v(!1)}),3e3));case 7:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){(function(){var e=Object(d.a)(s.a.mark((function e(){var t,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return p(!0),e.next=3,fetch("/api/v1/stage1",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({rows:j,stageName:S})});case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,Object(l.a)(n).sort((function(e,t){return x(e,t)})).forEach((function(e,t){return n[e.rowNumber-1].place=t+1})),E(n),p(!1);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);return i.a.createElement(i.a.Fragment,null,f?i.a.createElement("h3",null,"Caricamento girone ",i.a.createElement("b",null,S)," in corso...."):i.a.createElement(w,{rows:j,columns:O((function(){"1"===S&&console.log("onSelect ")}),o),tableName:S,updateCellValue:C,saved:b}))},S=n(327),C=n(116);t.default=function(){var e=Object(o.i)().tId,t=Object(a.useState)([]),n=Object(r.a)(t,2),l=n[0],u=n[1],s=Object(o.g)();return Object(a.useEffect)((function(){return Object(c.d)(u,e)}),[e]),l.sort((function(e,t){return e.stage1Name.localeCompare(t.stage1Name)})),i.a.createElement(i.a.Fragment,null,i.a.createElement(S.a.Item,{className:"inherit-background",key:"stage-button"},i.a.createElement(C.a,{variant:"secondary",onClick:function(){s.push("/tournament/".concat(e))}},"Gestione Coppie")),function(e,t){var n="",r=[],a=[];e.forEach((function(e,t){""===n&&(n=e.stage1Name),n!==e.stage1Name&&(a.push(i.a.createElement(S.a.Item,{className:"inherit-background",key:"stage-".concat(n)},i.a.createElement(E,{pairsList:r}))),n=e.stage1Name,r=[]),r.push(e)})),r.length>0&&a.push(i.a.createElement(S.a.Item,{className:"inherit-background",key:"stage-".concat(n)},i.a.createElement(E,{pairsList:r})));return i.a.createElement(S.a,{variant:"flush"},a)}(l))}}}]);
//# sourceMappingURL=10.de2056b3.chunk.js.map