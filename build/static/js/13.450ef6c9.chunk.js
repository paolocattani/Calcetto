(this.webpackJsonpcalcetto=this.webpackJsonpcalcetto||[]).push([[13],{221:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"d",(function(){return p})),n.d(t,"c",(function(){return h}));n(47),n(220),n(61),n(0),n(118);var r,a,o,i,l,c,s=n(238),u=n(225),d={Portiere:"Portiere",Attaccante:"Attaccante",Master:"Master"};function f(){r(""),a(""),o(""),i(""),l(""),c("")}t.b=function(e){return[{dataField:"id",text:"ID",editable:!1,headerStyle:function(e,t){return{width:"3%"}}},{dataField:"name",text:"Nome",headerClasses:"player-table-header-element",autoSelectText:!0,headerStyle:function(t,n){return{width:e?"16%":"25%"}},filter:Object(s.textFilter)({placeholder:"Filtra...",getFilter:function(e){return r=e}})},{dataField:"surname",text:"Cognome",headerClasses:"player-table-header-element",autoSelectText:!0,headerStyle:function(t,n){return{width:e?"16%":"25%"}},filter:Object(s.textFilter)({placeholder:"Filtra...",getFilter:function(e){return a=e}})},{dataField:"alias",text:"Alias",headerClasses:"player-table-header-element",headerStyle:function(t,n){return{width:e?"17%":"25%"}},autoSelectText:!0,filter:Object(s.textFilter)({placeholder:"Filtra...",getFilter:function(e){return o=e}})},{dataField:"role",text:"Roulo",headerClasses:"player-table-header-element",headerStyle:function(t,n){return{width:"".concat(e?"11":"15","%")}},filter:Object(s.selectFilter)({placeholder:"Filtra...",options:d,getFilter:function(e){return i=e}}),editor:{type:u.Type.SELECT,getOptions:function(e){return[{value:"Portiere",label:"Portiere"},{value:"Attaccante",label:"Attaccante"},{value:"Master",label:"Master"}]}}},{dataField:"email",text:"Email",headerStyle:function(e,t){return{width:"20%"}},headerClasses:"player-table-header-element",autoSelectText:!0,hidden:!e,filter:Object(s.textFilter)({placeholder:"Filtra...",getFilter:function(e){return l=e}})},{dataField:"phone",headerStyle:function(e,t){return{width:"10%"}},text:"Telefono",headerClasses:"player-table-header-element",autoSelectText:!0,hidden:!e,filter:Object(s.textFilter)({placeholder:"Filtra...",getFilter:function(e){return c=e}})},{dataField:"match_played",text:"Partite Giocate",hidden:!0},{dataField:"match_won",text:"Vittorie",hidden:!0},{dataField:"total_score",text:"Punteggio",hidden:!0}]};function p(e){return e?e.alias?e.alias:e.surname?"".concat(e.name," - ").concat(e.surname):e.name:""}function h(e){return{id:null,name:"",surname:"",alias:"",label:e||"",role:"Portiere",email:"",phone:"",match_played:0,match_won:0,total_score:0,editable:!1}}},222:function(e,t,n){"use strict";var r=n(3),a=n(5),o=n(7),i=n.n(o),l=n(0),c=n.n(l),s=n(8),u=["xl","lg","md","sm","xs"],d=c.a.forwardRef((function(e,t){var n=e.bsPrefix,o=e.className,l=e.as,d=void 0===l?"div":l,f=Object(a.a)(e,["bsPrefix","className","as"]),p=Object(s.b)(n,"col"),h=[],b=[];return u.forEach((function(e){var t,n,r,a=f[e];if(delete f[e],null!=a&&"object"===typeof a){var o=a.span;t=void 0===o||o,n=a.offset,r=a.order}else t=a;var i="xs"!==e?"-"+e:"";null!=t&&h.push(!0===t?""+p+i:""+p+i+"-"+t),null!=r&&b.push("order"+i+"-"+r),null!=n&&b.push("offset"+i+"-"+n)})),h.length||h.push(p),c.a.createElement(d,Object(r.a)({},f,{ref:t,className:i.a.apply(void 0,[o].concat(h,b))}))}));d.displayName="Col",t.a=d},249:function(e,t,n){"use strict";var r=n(3),a=n(5),o=n(7),i=n.n(o),l=n(0),c=n.n(l),s=n(8),u=["xl","lg","md","sm","xs"],d=c.a.forwardRef((function(e,t){var n=e.bsPrefix,o=e.className,l=e.noGutters,d=e.as,f=void 0===d?"div":d,p=Object(a.a)(e,["bsPrefix","className","noGutters","as"]),h=Object(s.b)(n,"row"),b=h+"-cols",m=[];return u.forEach((function(e){var t,n=p[e];delete p[e];var r="xs"!==e?"-"+e:"";null!=(t=null!=n&&"object"===typeof n?n.cols:n)&&m.push(""+b+r+"-"+t)})),c.a.createElement(f,Object(r.a)({ref:t},p,{className:i.a.apply(void 0,[o,h,l&&"no-gutters"].concat(m))}))}));d.displayName="Row",d.defaultProps={noGutters:!1},t.a=d},332:function(e,t,n){},361:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return _}));var r=n(34),a=n(53),o=n(47),i=n.n(o),l=n(61),c=n(220);function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function p(e){return(p="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function h(e,t){return!t||"object"!==p(t)&&"function"!==typeof t?u(e):t}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var m=n(0),y=n.n(m),w=n(249),v=n(222),g=n(367),x=n(118),S=n(243),O=n.n(S),j=n(238),E=n.n(j),F=n(225),R=n.n(F),C=(n(332),n(221)),k=function(e){return y.a.createElement("h3",null,y.a.createElement("b",null,"Gestione giocatori"))},P=n(62),T=n(36),_=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(S,e);var t,n,o,p,m=(t=S,function(){var e,n=d(t);if(f()){var r=d(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return h(this,e)});function S(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,S),(t=m.call(this,e)).handleOnSelect=function(e,n){return t.setState((function(t){var r=t.selectedRows,a=!!r.find((function(t){return t.id===e.id}));return n?a?{selectedRows:r}:{selectedRows:[e].concat(Object(c.a)(r))}:a?{selectedRows:r.filter((function(t){return t.id!==e.id}))}:{selectedRows:r}})),!0},t.cellEditProps=function(e){return R()({mode:e?"click":"none",blurToSave:!0,autoSelectText:!0,afterSaveCell:function(e,t,n,r){Object(l.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/v1/player",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});case 2:return t=e.sent,e.next=5,t.json();case 5:case"end":return e.stop()}}),e)})))()}})},t.state={rows:[],selectedRows:[],isLoading:!1},t.handleOnSelect=t.handleOnSelect.bind(u(t)),t.deleteRow=t.deleteRow.bind(u(t)),t.addRow=t.addRow.bind(u(t)),t}return n=S,(o=[{key:"componentDidMount",value:function(){var e=Object(l.a)(i.a.mark((function e(){var t=this;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.setState({isLoading:!0},(function(){return Object(l.a)(i.a.mark((function e(){var n,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/v1/player/list",{method:"GET",headers:{"Content-Type":"application/json"}});case 2:return n=e.sent,e.next=5,n.json();case 5:r=e.sent,t.setState({isLoading:!1,rows:r.map((function(e,t){return Object(a.a)({},e,{id:t+1})}))});case 7:case"end":return e.stop()}}),e)})))()}));case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"addRow",value:function(){var e=this;this.setState({isLoading:!0},(function(){return Object(l.a)(i.a.mark((function t(){var n,r;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("/api/v1/player",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(Object(C.c)())});case 2:return n=t.sent,t.next=5,n.json();case 5:r=t.sent,e.setState((function(e){return{rows:[r].concat(Object(c.a)(e.rows)),isLoading:!1}}));case 7:case"end":return t.stop()}}),t)})))()}))}},{key:"deleteRow",value:function(){var e=this,t=this.state.selectedRows;t&&this.setState({isLoading:!0},(function(){return Object(l.a)(i.a.mark((function n(){return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:fetch("/api/v1/player",{method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}),e.setState((function(e){return{rows:e.rows.filter((function(e){return!t.find((function(t){return t.id===e.id}))})),selectedRows:[],isLoading:!1}}));case 2:case"end":return n.stop()}}),n)})))()}))}},{key:"render",value:function(){var e=this,t=this.state,n=this.deleteRow,a=this.addRow,o=t.rows,i=t.isLoading,l={mode:"checkbox",nonSelectable:o.filter((function(e){return!e.editable})).map((function(e){return e.id})),onSelect:this.handleOnSelect,onSelectAll:function(t,n){return n.forEach((function(n){return e.handleOnSelect(n,t)}))},style:{backgroundColor:"#c8e6c9"},hideSelectAll:!o.find((function(e){return e.editable})),selectColumnStyle:function(e){e.checked,e.disabled;var t=e.rowIndex;return e.rowKey,o[t].editable?{}:{backgroundColor:"#dc3545"}}},c=this.state,s=(c=void 0===c?[]:c).selectedRows;return y.a.createElement(T.a.Consumer,null,(function(t){var c=Object(r.a)(t,1)[0];return y.a.createElement(y.a.Fragment,null,y.a.createElement(P.LoadingModal,{show:i,message:"Caricamento"}),y.a.createElement(w.a,null,y.a.createElement(v.a,null,y.a.createElement(y.a.Fragment,null,y.a.createElement(g.a,{horizontal:!0},c.isEditable?y.a.createElement(x.a,{variant:"success",onClick:a},"Aggiungi giocatore"):null,c.isEditable?y.a.createElement(x.a,{variant:"danger",onClick:n,disabled:0===s.length},s.length>1?"Elimina giocatori":"Elimina giocatore"):null,y.a.createElement(x.a,{variant:"dark",onClick:C.a.bind(e)},"Pulisci Filtri")),y.a.createElement(O.a,{wrapperClasses:"player-table",keyField:"id",data:o,columns:Object(C.b)(c.isEditable),cellEdit:e.cellEditProps(c.isEditable),selectRow:l,caption:y.a.createElement(k,null),filter:E()(),headerClasses:"default-background default-color-white",noDataIndication:"Nessun dato reperito",striped:!0,hover:!0,bootstrap4:!0})))))}))}}])&&s(n.prototype,o),p&&s(n,p),S}(y.a.Component)}}]);
//# sourceMappingURL=13.450ef6c9.chunk.js.map