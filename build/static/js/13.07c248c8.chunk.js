(this.webpackJsonpcalcetto=this.webpackJsonpcalcetto||[]).push([[13],{273:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"c",(function(){return h}));n(11),n(27),n(24),n(0),n(146);var r,a,o,i,c,l,u=n(271),s=n(259),d=(n(62),{Portiere:"Portiere",Attaccante:"Attaccante",Master:"Master"});function f(){r(""),a(""),o(""),i(""),c(""),l("")}t.b=function(e){return[{dataField:"id",text:"ID",editable:!1,headerStyle:function(e,t){return{width:"3%"}}},{dataField:"name",text:"Nome",headerClasses:"player-table-header-element",autoSelectText:!0,headerStyle:function(t,n){return{width:e?"16%":"25%"}},filter:Object(u.textFilter)({placeholder:"Filtra...",getFilter:function(e){return r=e}})},{dataField:"surname",text:"Cognome",headerClasses:"player-table-header-element",autoSelectText:!0,headerStyle:function(t,n){return{width:e?"16%":"25%"}},filter:Object(u.textFilter)({placeholder:"Filtra...",getFilter:function(e){return a=e}})},{dataField:"alias",text:"Alias",headerClasses:"player-table-header-element",headerStyle:function(t,n){return{width:e?"17%":"25%"}},autoSelectText:!0,filter:Object(u.textFilter)({placeholder:"Filtra...",getFilter:function(e){return o=e}})},{dataField:"role",text:"Roulo",headerClasses:"player-table-header-element",headerStyle:function(t,n){return{width:"".concat(e?"11":"15","%")}},filter:Object(u.selectFilter)({placeholder:"Filtra...",options:d,getFilter:function(e){return i=e}}),editor:{type:s.Type.SELECT,getOptions:function(e){return[{value:"Portiere",label:"Portiere"},{value:"Attaccante",label:"Attaccante"},{value:"Master",label:"Master"}]}}},{dataField:"email",text:"Email",headerStyle:function(e,t){return{width:"20%"}},headerClasses:"player-table-header-element",autoSelectText:!0,hidden:!e,filter:Object(u.textFilter)({placeholder:"Filtra...",getFilter:function(e){return c=e}})},{dataField:"phone",headerStyle:function(e,t){return{width:"10%"}},text:"Telefono",headerClasses:"player-table-header-element",autoSelectText:!0,hidden:!e,filter:Object(u.textFilter)({placeholder:"Filtra...",getFilter:function(e){return l=e}})},{dataField:"match_played",text:"Partite Giocate",hidden:!0},{dataField:"match_won",text:"Vittorie",hidden:!0},{dataField:"total_score",text:"Punteggio",hidden:!0}]};function h(e){return e?e.alias?e.alias:e.surname?"".concat(e.name," - ").concat(e.surname):e.name:""}},339:function(e,t,n){},351:function(e,t,n){"use strict";n.r(t);var r=n(13),a=n(11),o=n.n(a),i=n(24),c=n(27);function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function f(e){return(f="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function h(e,t){return!t||"object"!==f(t)&&"function"!==typeof t?u(e):t}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var b=n(0),y=n.n(b),m=n(282),w=n(258),S=n(357),v=n(146),g=n(266),O=n.n(g),x=n(271),F=n.n(x),j=n(259),E=n.n(j),R=(n(339),n(273)),C=function(e){return y.a.createElement("h3",null,y.a.createElement("b",null,"Gestione giocatori"))},k=n(122),T=n(62),P=n(31),L=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(g,e);var t,n,a,f,b=(t=g,function(){var e,n=s(t);if(d()){var r=s(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return h(this,e)});function g(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,g),(t=b.call(this,e)).handleOnSelect=function(e,n){return t.setState((function(t){var r=t.selectedRows,a=!!r.find((function(t){return t.id===e.id}));return n?a?{selectedRows:r}:{selectedRows:[e].concat(Object(c.a)(r))}:a?{selectedRows:r.filter((function(t){return t.id!==e.id}))}:{selectedRows:r}})),!0},t.cellEditProps=function(e){return E()({mode:e?"click":"none",blurToSave:!0,autoSelectText:!0,afterSaveCell:function(e,t,n,r){Object(i.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/v1/player",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});case 2:return t=e.sent,e.next=5,t.json();case 5:case"end":return e.stop()}}),e)})))()}})},t.state={rows:[],selectedRows:[],isLoading:!1},t.handleOnSelect=t.handleOnSelect.bind(u(t)),t.deleteRow=t.deleteRow.bind(u(t)),t.addRow=t.addRow.bind(u(t)),t}return n=g,(a=[{key:"componentDidMount",value:function(){var e=Object(i.a)(o.a.mark((function e(){var t=this;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.setState({isLoading:!0},(function(){return Object(i.a)(o.a.mark((function e(){var n,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/v1/player/list",{method:"GET",headers:{"Content-Type":"application/json"}});case 2:return n=e.sent,e.next=5,n.json();case 5:a=e.sent,t.setState({isLoading:!1,rows:a.map((function(e,t){return Object(r.a)({},e,{id:t+1})}))});case 7:case"end":return e.stop()}}),e)})))()}));case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"addRow",value:function(){var e=this;this.setState({isLoading:!0},(function(){return Object(i.a)(o.a.mark((function t(){var n,r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("/api/v1/player",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(Object(T.b)())});case 2:return n=t.sent,t.next=5,n.json();case 5:r=t.sent,e.setState((function(e){return{rows:[r].concat(Object(c.a)(e.rows)),isLoading:!1}}));case 7:case"end":return t.stop()}}),t)})))()}))}},{key:"deleteRow",value:function(){var e=this,t=this.state.selectedRows;t&&this.setState({isLoading:!0},(function(){return Object(i.a)(o.a.mark((function n(){return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:fetch("/api/v1/player",{method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}),e.setState((function(e){return{rows:e.rows.filter((function(e){return!t.find((function(t){return t.id===e.id}))})),selectedRows:[],isLoading:!1}}));case 2:case"end":return n.stop()}}),n)})))()}))}},{key:"render",value:function(){var e=this,t=this.state,n=this.deleteRow,r=this.addRow,a=t.rows,o=t.isLoading,i={mode:"checkbox",nonSelectable:a.filter((function(e){return!e.editable})).map((function(e){return e.id})),onSelect:this.handleOnSelect,onSelectAll:function(t,n){return n.forEach((function(n){return e.handleOnSelect(n,t)}))},style:{backgroundColor:"#c8e6c9"},hideSelectAll:!a.find((function(e){return e.editable})),selectColumnStyle:function(e){e.checked,e.disabled;var t=e.rowIndex;return e.rowKey,a[t].editable?{}:{backgroundColor:"#dc3545"}}},c=this.state,l=(c=void 0===c?[]:c).selectedRows,u=this.props.isEditable;return y.a.createElement(y.a.Fragment,null,y.a.createElement(k.LoadingModal,{show:o,message:"Caricamento"}),y.a.createElement(m.a,null,y.a.createElement(w.a,null,y.a.createElement(y.a.Fragment,null,y.a.createElement(S.a,{horizontal:!0},u?y.a.createElement(v.a,{variant:"success",onClick:r},"Aggiungi giocatore"):null,u?y.a.createElement(v.a,{variant:"danger",onClick:n,disabled:0===l.length},l.length>1?"Elimina giocatori":"Elimina giocatore"):null,y.a.createElement(v.a,{variant:"dark",onClick:R.a.bind(this)},"Pulisci Filtri")),y.a.createElement(O.a,{wrapperClasses:"player-table",keyField:"id",data:a,columns:Object(R.b)(u),cellEdit:this.cellEditProps(u),selectRow:i,caption:y.a.createElement(C,null),filter:F()(),headerClasses:"default-background default-color-white",noDataIndication:"Nessun dato reperito",striped:!0,hover:!0,bootstrap4:!0})))))}}])&&l(n.prototype,a),f&&l(n,f),g}(y.a.Component);t.default=Object(P.b)((function(e){return{isEditable:e.sessionState.isAdmin}}))(L)}}]);
//# sourceMappingURL=13.07c248c8.chunk.js.map