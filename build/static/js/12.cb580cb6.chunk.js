(this.webpackJsonpcalcetto=this.webpackJsonpcalcetto||[]).push([[12],{258:function(e,t,r){"use strict";r.d(t,"g",(function(){return l})),r.d(t,"d",(function(){return s})),r.d(t,"c",(function(){return u})),r.d(t,"f",(function(){return f})),r.d(t,"e",(function(){return b})),r.d(t,"h",(function(){return p})),r.d(t,"b",(function(){return m})),r.d(t,"a",(function(){return d}));var n=r(0),a=r.n(n),o=r(259),i=r(123),c=function(e){var t=e.size,r=e.prefix,n=e.iconName,c=e.color;return a.a.createElement(o.a,{color:c,size:t,icon:Object(i.a)({prefix:r,iconName:n})})},l=function(e){var t=e.size,r=e.color;return a.a.createElement(c,{size:t,color:r,prefix:"far",iconName:"trash-alt"})},s=function(e){var t=e.size,r=e.color;return a.a.createElement(c,{size:t,color:r,prefix:"far",iconName:"save"})},u=function(e){var t=e.size;e.color;return a.a.createElement(c,{size:t,prefix:"fas",iconName:"arrow-alt-circle-right"})},f=function(e){var t=e.size,r=e.color;return a.a.createElement(c,{size:t,color:r,prefix:"fas",iconName:"toggle-on"})},b=function(e){var t=e.size,r=e.color;return a.a.createElement(c,{size:t,color:r,prefix:"fas",iconName:"toggle-off"})},p=function(e){var t=e.size,r=e.color;return a.a.createElement(c,{size:t,color:r,prefix:"fas",iconName:"trophy"})},m=function(e){var t=e.size,r=e.color;return a.a.createElement(c,{size:t,color:r,prefix:"fas",iconName:"angle-double-right"})},d=function(e){var t=e.size,r=e.color;return a.a.createElement(c,{size:t,color:r,prefix:"fas",iconName:"ban"})}},259:function(e,t,r){"use strict";r.d(t,"a",(function(){return v}));var n=r(123),a=r(9),o=r.n(a),i=r(0),c=r.n(i);function l(e){return(l="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function b(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function p(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function m(e){return t=e,(t-=0)===t?e:(e=e.replace(/[\-_\s]+(.)?/g,(function(e,t){return t?t.toUpperCase():""}))).substr(0,1).toLowerCase()+e.substr(1);var t}function d(e){return e.split(";").map((function(e){return e.trim()})).filter((function(e){return e})).reduce((function(e,t){var r,n=t.indexOf(":"),a=m(t.slice(0,n)),o=t.slice(n+1).trim();return a.startsWith("webkit")?e[(r=a,r.charAt(0).toUpperCase()+r.slice(1))]=o:e[a]=o,e}),{})}var y=!1;try{y=!0}catch(h){}function O(e){return null===e?null:"object"===l(e)&&e.prefix&&e.iconName?e:Array.isArray(e)&&2===e.length?{prefix:e[0],iconName:e[1]}:"string"===typeof e?{prefix:"fas",iconName:e}:void 0}function g(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?s({},e,t):{}}function v(e){var t=e.icon,r=e.mask,a=e.symbol,o=e.className,i=e.title,c=O(t),l=g("classes",[].concat(p(function(e){var t,r=e.spin,n=e.pulse,a=e.fixedWidth,o=e.inverse,i=e.border,c=e.listItem,l=e.flip,u=e.size,f=e.rotation,b=e.pull,p=(s(t={"fa-spin":r,"fa-pulse":n,"fa-fw":a,"fa-inverse":o,"fa-border":i,"fa-li":c,"fa-flip-horizontal":"horizontal"===l||"both"===l,"fa-flip-vertical":"vertical"===l||"both"===l},"fa-".concat(u),"undefined"!==typeof u&&null!==u),s(t,"fa-rotate-".concat(f),"undefined"!==typeof f&&null!==f),s(t,"fa-pull-".concat(b),"undefined"!==typeof b&&null!==b),s(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(p).map((function(e){return p[e]?e:null})).filter((function(e){return e}))}(e)),p(o.split(" ")))),u=g("transform","string"===typeof e.transform?n.d.transform(e.transform):e.transform),b=g("mask",O(r)),m=Object(n.b)(c,f({},l,{},u,{},b,{symbol:a,title:i}));if(!m)return function(){var e;!y&&console&&"function"===typeof console.error&&(e=console).error.apply(e,arguments)}("Could not find icon",c),null;var d=m.abstract,h={};return Object.keys(e).forEach((function(t){v.defaultProps.hasOwnProperty(t)||(h[t]=e[t])})),j(d[0],h)}v.displayName="FontAwesomeIcon",v.propTypes={border:o.a.bool,className:o.a.string,mask:o.a.oneOfType([o.a.object,o.a.array,o.a.string]),fixedWidth:o.a.bool,inverse:o.a.bool,flip:o.a.oneOf(["horizontal","vertical","both"]),icon:o.a.oneOfType([o.a.object,o.a.array,o.a.string]),listItem:o.a.bool,pull:o.a.oneOf(["right","left"]),pulse:o.a.bool,rotation:o.a.oneOf([90,180,270]),size:o.a.oneOf(["lg","xs","sm","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:o.a.bool,symbol:o.a.oneOfType([o.a.bool,o.a.string]),title:o.a.string,transform:o.a.oneOfType([o.a.string,o.a.object]),swapOpacity:o.a.bool},v.defaultProps={border:!1,className:"",mask:null,fixedWidth:!1,inverse:!1,flip:null,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,symbol:!1,title:"",transform:null,swapOpacity:!1};var j=function e(t,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"===typeof r)return r;var a=(r.children||[]).map((function(r){return e(t,r)})),o=Object.keys(r.attributes||{}).reduce((function(e,t){var n=r.attributes[t];switch(t){case"class":e.attrs.className=n,delete r.attributes.class;break;case"style":e.attrs.style=d(n);break;default:0===t.indexOf("aria-")||0===t.indexOf("data-")?e.attrs[t.toLowerCase()]=n:e.attrs[m(t)]=n}return e}),{attrs:{}}),i=n.style,c=void 0===i?{}:i,l=b(n,["style"]);return o.attrs.style=f({},o.attrs.style,{},c),t.apply(void 0,[r.tag,f({},o.attrs,{},l)].concat(p(a)))}.bind(null,c.a.createElement)},296:function(e,t,r){"use strict";var n=r(2),a=r(5),o=r(8),i=r.n(o),c=r(0),l=r.n(c),s=r(11),u=r(26),f=r(80),b=r(125),p=l.a.forwardRef((function(e,t){var r=e.bsPrefix,o=e.className,c=e.variant,u=e.as,f=void 0===u?"img":u,b=Object(a.a)(e,["bsPrefix","className","variant","as"]),p=Object(s.b)(r,"card-img");return l.a.createElement(f,Object(n.a)({ref:t,className:i()(c?p+"-"+c:p,o)},b))}));p.displayName="CardImg",p.defaultProps={variant:null};var m=p,d=Object(f.a)("h5"),y=Object(f.a)("h6"),O=Object(u.a)("card-body"),g=l.a.forwardRef((function(e,t){var r=e.bsPrefix,o=e.className,u=e.bg,f=e.text,p=e.border,m=e.body,d=e.children,y=e.as,g=void 0===y?"div":y,v=Object(a.a)(e,["bsPrefix","className","bg","text","border","body","children","as"]),j=Object(s.b)(r,"card"),h=Object(c.useMemo)((function(){return{cardHeaderBsPrefix:j+"-header"}}),[j]);return l.a.createElement(b.a.Provider,{value:h},l.a.createElement(g,Object(n.a)({ref:t},v,{className:i()(o,j,u&&"bg-"+u,f&&"text-"+f,p&&"border-"+p)}),m?l.a.createElement(O,null,d):d))}));g.displayName="Card",g.defaultProps={body:!1},g.Img=m,g.Title=Object(u.a)("card-title",{Component:d}),g.Subtitle=Object(u.a)("card-subtitle",{Component:y}),g.Body=O,g.Link=Object(u.a)("card-link",{Component:"a"}),g.Text=Object(u.a)("card-text",{Component:"p"}),g.Header=Object(u.a)("card-header"),g.Footer=Object(u.a)("card-footer"),g.ImgOverlay=Object(u.a)("card-img-overlay");t.a=g},360:function(e,t,r){"use strict";r.r(t);var n=r(122),a=r(0),o=r.n(a),i=r(126),c=r(296),l=r(243),s=r(244),u=r(101),f=r(258),b=Object(a.lazy)((function(){return r.e(7).then(r.bind(null,353))})),p=Object(a.lazy)((function(){return Promise.all([r.e(0),r.e(10)]).then(r.bind(null,354))}));t.default=function(){var e=Object(a.useState)(!1),t=Object(n.a)(e,2),r=t[0],m=t[1],d=Object(a.useState)(""),y=Object(n.a)(d,2),O=y[0],g=y[1],v=r?"Registrati":"Login",j=r?o.a.createElement(p,{setErrorMessage:g}):o.a.createElement(b,{setErrorMessage:g}),h=r?o.a.createElement(o.a.Fragment,null,o.a.createElement(f.f,null)," ",o.a.createElement("strong",null,"Login")):o.a.createElement(o.a.Fragment,null,o.a.createElement(f.e,null)," ",o.a.createElement("strong",null,"Registrati"));return o.a.createElement(i.a,{md:{span:"6",offset:"3"},sm:"12"},o.a.createElement(c.a,{style:{textAlign:"left",color:"white"},className:"default-background"},o.a.createElement(c.a.Header,{as:"h2"},v),o.a.createElement(c.a.Body,null,o.a.createElement(l.a,null,O?o.a.createElement(s.a,{key:"auth-alert",variant:"danger"},O):null,j)),o.a.createElement(c.a.Footer,null,o.a.createElement(u.a,{size:"lg",variant:"outline-warning",onClick:function(){return m(!r)}},h))))}}}]);
//# sourceMappingURL=12.cb580cb6.chunk.js.map