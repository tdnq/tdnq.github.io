"use strict";(self.webpackChunktdnq_github_io=self.webpackChunktdnq_github_io||[]).push([[4885],{1829:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(1413),i=n(7313),o={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"}}]},name:"close",theme:"outlined"},a=n(6023),u=function(e,t){return i.createElement(a.Z,(0,r.Z)((0,r.Z)({},e),{},{ref:t,icon:o}))};u.displayName="CloseOutlined";var c=i.forwardRef(u)},5596:function(e,t,n){n.d(t,{Z:function(){return N}});var r=n(7462),i=n(1413),o=n(9439),a=n(5987),u=n(7313),c=n(6123),l=n.n(c),s=n(5172),f=void 0;function d(e,t){var n=e.prefixCls,o=e.invalidate,c=e.item,d=e.renderItem,v=e.responsive,m=e.registerSize,h=e.itemKey,p=e.className,Z=e.style,g=e.children,y=e.display,E=e.order,R=e.component,C=void 0===R?"div":R,b=(0,a.Z)(e,["prefixCls","invalidate","item","renderItem","responsive","registerSize","itemKey","className","style","children","display","order","component"]),w=v&&!y;function N(e){m(h,e)}u.useEffect((function(){return function(){N(null)}}),[]);var k,x=d&&c!==f?d(c):g;o||(k={opacity:w?0:1,height:w?0:f,overflowY:w?"hidden":f,order:v?E:f,pointerEvents:w?"none":f,position:w?"absolute":f});var M={};w&&(M["aria-hidden"]=!0);var I=u.createElement(C,(0,r.Z)({className:l()(!o&&n,p),style:(0,i.Z)((0,i.Z)({},k),Z)},M,b,{ref:t}),x);return v&&(I=u.createElement(s.Z,{onResize:function(e){N(e.offsetWidth)}},I)),I}var v=u.forwardRef(d);v.displayName="Item";var m=v,h=n(5557);var p=function(e,t){var n=u.useContext(y);if(!n){var i=e.component,o=void 0===i?"div":i,c=(0,a.Z)(e,["component"]);return u.createElement(o,(0,r.Z)({},c,{ref:t}))}var s=n.className,f=(0,a.Z)(n,["className"]),d=e.className,v=(0,a.Z)(e,["className"]);return u.createElement(y.Provider,{value:null},u.createElement(m,(0,r.Z)({ref:t,className:l()(s,d)},f,v)))},Z=u.forwardRef(p);Z.displayName="RawItem";var g=Z,y=u.createContext(null),E="responsive",R="invalidate";function C(e){return"+ ".concat(e.length," ...")}function b(e,t){var n=e.prefixCls,c=void 0===n?"rc-overflow":n,f=e.data,d=void 0===f?[]:f,v=e.renderItem,p=e.renderRawItem,Z=e.itemKey,g=e.itemWidth,b=void 0===g?10:g,w=e.ssr,N=e.style,k=e.className,x=e.maxCount,M=e.renderRest,I=e.renderRawRest,S=e.suffix,z=e.component,A=void 0===z?"div":z,W=e.itemComponent,_=e.onVisibleChange,P=(0,a.Z)(e,["prefixCls","data","renderItem","renderRawItem","itemKey","itemWidth","ssr","style","className","maxCount","renderRest","renderRawRest","suffix","component","itemComponent","onVisibleChange"]),H=function(){var e=(0,u.useState)({}),t=(0,o.Z)(e,2)[1],n=(0,u.useRef)([]),r=(0,u.useRef)(!1),i=0,a=0;return(0,u.useEffect)((function(){return function(){r.current=!0}}),[]),function(e){var o=i;return i+=1,n.current.length<o+1&&(n.current[o]=e),[n.current[o],function(e){n.current[o]="function"===typeof e?e(n.current[o]):e,h.Z.cancel(a),a=(0,h.Z)((function(){r.current||t({})}))}]}}(),K="full"===w,L=H(null),V=(0,o.Z)(L,2),B=V[0],F=V[1],O=B||0,T=H(new Map),q=(0,o.Z)(T,2),G=q[0],X=q[1],Y=H(0),D=(0,o.Z)(Y,2),Q=D[0],j=D[1],J=H(0),U=(0,o.Z)(J,2),$=U[0],ee=U[1],te=H(0),ne=(0,o.Z)(te,2),re=ne[0],ie=ne[1],oe=(0,u.useState)(null),ae=(0,o.Z)(oe,2),ue=ae[0],ce=ae[1],le=(0,u.useState)(null),se=(0,o.Z)(le,2),fe=se[0],de=se[1],ve=u.useMemo((function(){return null===fe&&K?Number.MAX_SAFE_INTEGER:fe||0}),[fe,B]),me=(0,u.useState)(!1),he=(0,o.Z)(me,2),pe=he[0],Ze=he[1],ge="".concat(c,"-item"),ye=Math.max(Q,$),Ee=d.length&&x===E,Re=x===R,Ce=Ee||"number"===typeof x&&d.length>x,be=(0,u.useMemo)((function(){var e=d;return Ee?e=null===B&&K?d:d.slice(0,Math.min(d.length,O/b)):"number"===typeof x&&(e=d.slice(0,x)),e}),[d,b,B,x,Ee]),we=(0,u.useMemo)((function(){return Ee?d.slice(ve+1):d.slice(be.length)}),[d,be,Ee,ve]),Ne=(0,u.useCallback)((function(e,t){var n;return"function"===typeof Z?Z(e):null!==(n=Z&&(null===e||void 0===e?void 0:e[Z]))&&void 0!==n?n:t}),[Z]),ke=(0,u.useCallback)(v||function(e){return e},[v]);function xe(e,t){de(e),t||(Ze(e<d.length-1),null===_||void 0===_||_(e))}function Me(e,t){X((function(n){var r=new Map(n);return null===t?r.delete(e):r.set(e,t),r}))}function Ie(e){return G.get(Ne(be[e],e))}u.useLayoutEffect((function(){if(O&&ye&&be){var e=re,t=be.length,n=t-1;if(!t)return xe(0),void ce(null);for(var r=0;r<t;r+=1){var i=Ie(r);if(void 0===i){xe(r-1,!0);break}if(e+=i,0===n&&e<=O||r===n-1&&e+Ie(n)<=O){xe(n),ce(null);break}if(e+ye>O){xe(r-1),ce(e-i-re+$);break}}S&&Ie(0)+re>O&&ce(null)}}),[O,G,$,re,Ne,be]);var Se=pe&&!!we.length,ze={};null!==ue&&Ee&&(ze={position:"absolute",left:ue,top:0});var Ae,We={prefixCls:ge,responsive:Ee,component:W,invalidate:Re},_e=p?function(e,t){var n=Ne(e,t);return u.createElement(y.Provider,{key:n,value:(0,i.Z)((0,i.Z)({},We),{},{order:t,item:e,itemKey:n,registerSize:Me,display:t<=ve})},p(e,t))}:function(e,t){var n=Ne(e,t);return u.createElement(m,(0,r.Z)({},We,{order:t,key:n,item:e,renderItem:ke,itemKey:n,registerSize:Me,display:t<=ve}))},Pe={order:Se?ve:Number.MAX_SAFE_INTEGER,className:"".concat(ge,"-rest"),registerSize:function(e,t){ee(t),j($)},display:Se};if(I)I&&(Ae=u.createElement(y.Provider,{value:(0,i.Z)((0,i.Z)({},We),Pe)},I(we)));else{var He=M||C;Ae=u.createElement(m,(0,r.Z)({},We,Pe),"function"===typeof He?He(we):He)}var Ke=u.createElement(A,(0,r.Z)({className:l()(!Re&&c,k),style:N,ref:t},P),be.map(_e),Ce?Ae:null,S&&u.createElement(m,(0,r.Z)({},We,{order:ve,className:"".concat(ge,"-suffix"),registerSize:function(e,t){ie(t)},display:!0,style:ze}),S));return Ee&&(Ke=u.createElement(s.Z,{onResize:function(e,t){F(t.clientWidth)}},Ke)),Ke}var w=u.forwardRef(b);w.displayName="Overflow",w.Item=g,w.RESPONSIVE=E,w.INVALIDATE=R;var N=w},5172:function(e,t,n){n.d(t,{Z:function(){return E}});var r=n(7462),i=n(7313),o=n(4903),a=(n(8240),n(1413)),u=n(6945),c=n(3879),l=n(1355),s=new Map;var f=new l.Z((function(e){e.forEach((function(e){var t,n=e.target;null===(t=s.get(n))||void 0===t||t.forEach((function(e){return e(n)}))}))}));var d=n(5671),v=n(3144),m=n(136),h=n(4062),p=function(e){(0,m.Z)(n,e);var t=(0,h.Z)(n);function n(){return(0,d.Z)(this,n),t.apply(this,arguments)}return(0,v.Z)(n,[{key:"render",value:function(){return this.props.children}}]),n}(i.Component),Z=i.createContext(null);function g(e){var t=e.children,n=e.disabled,r=i.useRef(null),o=i.useRef(null),l=i.useContext(Z),d=i.useRef({width:-1,height:-1,offsetWidth:-1,offsetHeight:-1}),v=i.isValidElement(t)&&(0,u.Yr)(t),m=v?t.ref:null,h=i.useMemo((function(){return(0,u.sQ)(m,r)}),[m,r]),g=i.useRef(e);g.current=e;var y=i.useCallback((function(e){var t=g.current,n=t.onResize,r=t.data,i=e.getBoundingClientRect(),o=i.width,u=i.height,c=e.offsetWidth,s=e.offsetHeight,f=Math.floor(o),v=Math.floor(u);if(d.current.width!==f||d.current.height!==v||d.current.offsetWidth!==c||d.current.offsetHeight!==s){var m={width:f,height:v,offsetWidth:c,offsetHeight:s};d.current=m;var h=c===Math.round(o)?o:c,p=s===Math.round(u)?u:s,Z=(0,a.Z)((0,a.Z)({},m),{},{offsetWidth:h,offsetHeight:p});null===l||void 0===l||l(Z,e,r),n&&Promise.resolve().then((function(){n(Z,e)}))}}),[]);return i.useEffect((function(){var e,t,i=(0,c.Z)(r.current)||(0,c.Z)(o.current);return i&&!n&&(e=i,t=y,s.has(e)||(s.set(e,new Set),f.observe(e)),s.get(e).add(t)),function(){return function(e,t){s.has(e)&&(s.get(e).delete(t),s.get(e).size||(f.unobserve(e),s.delete(e)))}(i,y)}}),[r.current,n]),i.createElement(p,{ref:o},v?i.cloneElement(t,{ref:h}):t)}function y(e){var t=e.children;return(0,o.Z)(t).map((function(t,n){var o=(null===t||void 0===t?void 0:t.key)||"".concat("rc-observer-key","-").concat(n);return i.createElement(g,(0,r.Z)({},e,{key:o}),t)}))}y.Collection=function(e){var t=e.children,n=e.onBatchResize,r=i.useRef(0),o=i.useRef([]),a=i.useContext(Z),u=i.useCallback((function(e,t,i){r.current+=1;var u=r.current;o.current.push({size:e,element:t,data:i}),Promise.resolve().then((function(){u===r.current&&(null===n||void 0===n||n(o.current),o.current=[])})),null===a||void 0===a||a(e,t,i)}),[n,a]);return i.createElement(Z.Provider,{value:u},t)};var E=y},4903:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(7313),i=n(6214);function o(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=[];return r.Children.forEach(e,(function(e){(void 0!==e&&null!==e||t.keepEmpty)&&(Array.isArray(e)?n=n.concat(o(e)):(0,i.isFragment)(e)&&e.props?n=n.concat(o(e.props.children,t)):n.push(e))})),n}}}]);