"use strict";(self.webpackChunktdnq_github_io=self.webpackChunktdnq_github_io||[]).push([[5124,648],{5124:function(e,n,t){t.r(n),t.d(n,{threejs:function(){return l}});var a=t(648),r=t(7366),l={sprite_rain:a.default,math_curve:r.default}},7366:function(e,n,t){t.r(n),t.d(n,{default:function(){return D}});t(9017);var a=t(3471),r=(t(5365),t(4942)),l=t(7462),c=t(7313),o=t(6123),i=t.n(o),s=t(5987),u=t(1413),d=t(5671),f=t(3144),p=t(136),h=t(4062),v=function(e){(0,p.Z)(t,e);var n=(0,h.Z)(t);function t(e){var a;(0,d.Z)(this,t),(a=n.call(this,e)).handleChange=function(e){var n=a.props,t=n.disabled,r=n.onChange;t||("checked"in a.props||a.setState({checked:e.target.checked}),r&&r({target:(0,u.Z)((0,u.Z)({},a.props),{},{checked:e.target.checked}),stopPropagation:function(){e.stopPropagation()},preventDefault:function(){e.preventDefault()},nativeEvent:e.nativeEvent}))},a.saveInput=function(e){a.input=e};var r="checked"in e?e.checked:e.defaultChecked;return a.state={checked:r},a}return(0,f.Z)(t,[{key:"focus",value:function(){this.input.focus()}},{key:"blur",value:function(){this.input.blur()}},{key:"render",value:function(){var e,n=this.props,t=n.prefixCls,a=n.className,o=n.style,u=n.name,d=n.id,f=n.type,p=n.disabled,h=n.readOnly,v=n.tabIndex,x=n.onClick,b=n.onFocus,m=n.onBlur,y=n.onKeyDown,Z=n.onKeyPress,g=n.onKeyUp,j=n.autoFocus,C=n.value,k=n.required,O=(0,s.Z)(n,["prefixCls","className","style","name","id","type","disabled","readOnly","tabIndex","onClick","onFocus","onBlur","onKeyDown","onKeyPress","onKeyUp","autoFocus","value","required"]),E=Object.keys(O).reduce((function(e,n){return"aria-"!==n.substr(0,5)&&"data-"!==n.substr(0,5)&&"role"!==n||(e[n]=O[n]),e}),{}),N=this.state.checked,w=i()(t,a,(e={},(0,r.Z)(e,"".concat(t,"-checked"),N),(0,r.Z)(e,"".concat(t,"-disabled"),p),e));return c.createElement("span",{className:w,style:o},c.createElement("input",(0,l.Z)({name:u,id:d,type:f,required:k,readOnly:h,disabled:p,tabIndex:v,className:"".concat(t,"-input"),checked:!!N,onClick:x,onFocus:b,onBlur:m,onKeyUp:g,onKeyDown:y,onKeyPress:Z,onChange:this.handleChange,autoFocus:j,ref:this.saveInput,value:C},E)),c.createElement("span",{className:"".concat(t,"-inner")}))}}],[{key:"getDerivedStateFromProps",value:function(e,n){return"checked"in e?(0,u.Z)((0,u.Z)({},n),{},{checked:e.checked}):null}}]),t}(c.Component);v.defaultProps={prefixCls:"rc-checkbox",className:"",style:{},type:"checkbox",defaultChecked:!1,onFocus:function(){},onBlur:function(){},onChange:function(){},onKeyDown:function(){},onKeyPress:function(){},onKeyUp:function(){}};var x=v,b=t(3433),m=t(9439),y=t(205),Z=t(1211),g=function(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)n.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(t[a[r]]=e[a[r]])}return t},j=c.createContext(null),C=function(e,n){var t=e.defaultValue,a=e.children,o=e.options,s=void 0===o?[]:o,u=e.prefixCls,d=e.className,f=e.style,p=e.onChange,h=g(e,["defaultValue","children","options","prefixCls","className","style","onChange"]),v=c.useContext(Z.E_),x=v.getPrefixCls,C=v.direction,k=c.useState(h.value||t||[]),O=(0,m.Z)(k,2),E=O[0],N=O[1],w=c.useState([]),P=(0,m.Z)(w,2),K=P[0],F=P[1];c.useEffect((function(){"value"in h&&N(h.value||[])}),[h.value]);var V=function(){return s.map((function(e){return"string"===typeof e?{label:e,value:e}:e}))},_=x("checkbox",u),L="".concat(_,"-group"),I=(0,y.Z)(h,["value","disabled"]);s&&s.length>0&&(a=V().map((function(e){return c.createElement(S,{prefixCls:_,key:e.value.toString(),disabled:"disabled"in e?e.disabled:h.disabled,value:e.value,checked:-1!==E.indexOf(e.value),onChange:e.onChange,className:"".concat(L,"-item"),style:e.style},e.label)})));var D={toggleOption:function(e){var n=E.indexOf(e.value),t=(0,b.Z)(E);-1===n?t.push(e.value):t.splice(n,1),"value"in h||N(t);var a=V();null===p||void 0===p||p(t.filter((function(e){return-1!==K.indexOf(e)})).sort((function(e,n){return a.findIndex((function(n){return n.value===e}))-a.findIndex((function(e){return e.value===n}))})))},value:E,disabled:h.disabled,name:h.name,registerValue:function(e){F((function(n){return[].concat((0,b.Z)(n),[e])}))},cancelValue:function(e){F((function(n){return n.filter((function(n){return n!==e}))}))}},H=i()(L,(0,r.Z)({},"".concat(L,"-rtl"),"rtl"===C),d);return c.createElement("div",(0,l.Z)({className:H,style:f},I,{ref:n}),c.createElement(j.Provider,{value:D},a))},k=c.forwardRef(C),O=c.memo(k),E=t(9178),N=function(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)n.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(t[a[r]]=e[a[r]])}return t},w=function(e,n){var t,a=e.prefixCls,o=e.className,s=e.children,u=e.indeterminate,d=void 0!==u&&u,f=e.style,p=e.onMouseEnter,h=e.onMouseLeave,v=e.skipGroup,b=void 0!==v&&v,m=N(e,["prefixCls","className","children","indeterminate","style","onMouseEnter","onMouseLeave","skipGroup"]),y=c.useContext(Z.E_),g=y.getPrefixCls,C=y.direction,k=c.useContext(j),O=c.useRef(m.value);c.useEffect((function(){null===k||void 0===k||k.registerValue(m.value),(0,E.Z)("checked"in m||!!k||!("value"in m),"Checkbox","`value` is not a valid prop, do you mean `checked`?")}),[]),c.useEffect((function(){if(!b)return m.value!==O.current&&(null===k||void 0===k||k.cancelValue(O.current),null===k||void 0===k||k.registerValue(m.value)),function(){return null===k||void 0===k?void 0:k.cancelValue(m.value)}}),[m.value]);var w=g("checkbox",a),P=(0,l.Z)({},m);k&&!b&&(P.onChange=function(){m.onChange&&m.onChange.apply(m,arguments),k.toggleOption&&k.toggleOption({label:s,value:m.value})},P.name=k.name,P.checked=-1!==k.value.indexOf(m.value),P.disabled=m.disabled||k.disabled);var S=i()((t={},(0,r.Z)(t,"".concat(w,"-wrapper"),!0),(0,r.Z)(t,"".concat(w,"-rtl"),"rtl"===C),(0,r.Z)(t,"".concat(w,"-wrapper-checked"),P.checked),(0,r.Z)(t,"".concat(w,"-wrapper-disabled"),P.disabled),t),o),K=i()((0,r.Z)({},"".concat(w,"-indeterminate"),d));return c.createElement("label",{className:S,style:f,onMouseEnter:p,onMouseLeave:h},c.createElement(x,(0,l.Z)({},P,{prefixCls:w,className:K,ref:n})),void 0!==s&&c.createElement("span",null,s))},P=c.forwardRef(w);P.displayName="Checkbox";var S=P,K=S;K.Group=O,K.__ANT_CHECKBOX=!0;var F=K,V=(t(6273),t(5821)),_=(t(5148),t(9015)),L=t(6417),I=_.Z.Option;function D(e){var n=c.useState(2),t=(0,m.Z)(n,2),r=t[0],l=t[1],o=[{label:"\u5e42\u51fd\u6570",value:"power",index:0},{label:"\u5706",value:"circle",index:1},{label:"\u5fc3\u578b\u7ebf",value:"dcrHeart",index:2},{label:"\u53cc\u66f2\u7ebf",value:"hyperbola",index:3}],i=[{label:"\u7403",value:"sphere",index:o.length+0}];return(0,L.jsxs)(a.Z,{children:[(0,L.jsxs)(V.Z,{children:[(0,L.jsx)("label",{className:"controlLabel",children:(0,L.jsx)("strong",{children:"\u5750\u6807\u7cfb\u7ef4\u5ea6:"})}),(0,L.jsxs)(_.Z,{defaultValue:r,style:{marginLeft:"0.5rem"},onChange:function(n){e((function(){return[{position:"dimension",value:n}]})),l(n)},children:[(0,L.jsx)(I,{value:2,children:"\u4e8c\u7ef4"}),(0,L.jsx)(I,{value:3,children:"\u4e09\u7ef4"})]})]}),2===r&&(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(V.Z,{span:24,children:(0,L.jsx)("label",{className:"controlLabel",children:(0,L.jsx)("strong",{children:"\u66f2\u7ebf\u7c7b\u578b:"})})}),(0,L.jsx)(V.Z,{children:(0,L.jsx)(F.Group,{options:o,defaultValue:["dcrHeart","hyperbola"],onChange:function(n){e((function(e){e=Array.isArray(e)?e:[];var t=[];return o.forEach((function(e){t.push({position:"lineType.".concat(e.index,".isHidden"),value:!0})})),n.forEach((function(e){t.push({position:"lineType.".concat(o.find((function(n){return n.value===e})).index,".isHidden"),value:!1})})),[].concat((0,b.Z)(e),t)}))}})})]}),3===r&&(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(V.Z,{span:24,children:(0,L.jsx)("label",{className:"controlLabel",children:(0,L.jsx)("strong",{children:"\u66f2\u7ebf\u7c7b\u578b:"})})}),(0,L.jsx)(V.Z,{children:(0,L.jsx)(F.Group,{options:i,defaultValue:["sphere"],onChange:function(n){e((function(e){e=Array.isArray(e)?e:[];var t=[];return i.forEach((function(e){t.push({position:"lineType.".concat(e.index,".isHidden"),value:!0})})),n.forEach((function(e){t.push({position:"lineType.".concat(i.find((function(n){return n.value===e})).index,".isHidden"),value:!1})})),[].concat((0,b.Z)(e),t)}))}})})]})]})}},648:function(e,n,t){t.r(n),t.d(n,{default:function(){return h}});t(9017);var a=t(3471),r=(t(1102),t(6124)),l=(t(8814),t(9071)),c=(t(6273),t(5821)),o=t(4942),i=t(1413),s=t(9439),u=t(7313),d=t(6031),f=t.n(d),p=t(6417);function h(e,n){var t=(0,u.useState)((0,i.Z)({count:1e3,baseScale:10,speed:.5},n)),d=(0,s.Z)(t,2),h=d[0],v=d[1],x=(0,u.useCallback)(f().debounce((function(n,t){isNaN(n)||(v((function(e){return(0,i.Z)((0,i.Z)({},e),{},(0,o.Z)({},t,n))})),e((function(e){return(0,i.Z)((0,i.Z)({},e),{},(0,o.Z)({},t,n))})))}),100),[]);return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)(a.Z,{children:[(0,p.jsx)(c.Z,{span:6,children:(0,p.jsx)("label",{className:"controlLabel",children:(0,p.jsx)("strong",{children:"\u96e8\u6ef4\u6570\u91cf:"})})}),(0,p.jsx)(c.Z,{span:10,children:(0,p.jsx)(l.Z,{min:100,max:2e4,onChange:function(e){return x(e,"count")},value:"number"===typeof h.count?h.count:0,step:10})}),(0,p.jsx)(c.Z,{span:6,children:(0,p.jsx)(r.Z,{min:10,max:2e4,style:{margin:"0 16px"},step:10,value:h.count,onChange:function(e){return x(e,"count")}})})]}),(0,p.jsxs)(a.Z,{children:[(0,p.jsx)(c.Z,{span:6,children:(0,p.jsx)("label",{className:"controlLabel",children:(0,p.jsx)("strong",{children:"\u4e0b\u843d\u901f\u5ea6:"})})}),(0,p.jsx)(c.Z,{span:10,children:(0,p.jsx)(l.Z,{min:.1,max:2,onChange:function(e){return x(e,"speed")},value:h.speed,step:.2})}),(0,p.jsx)(c.Z,{span:6,children:(0,p.jsx)(r.Z,{min:.1,max:2,step:.2,style:{margin:"0 16px"},value:h.speed,onChange:function(e){return x(e,"speed")}})})]}),(0,p.jsxs)(a.Z,{children:[(0,p.jsx)(c.Z,{span:6,children:(0,p.jsx)("label",{className:"controlLabel",children:(0,p.jsx)("strong",{children:"\u96e8\u6ef4\u5927\u5c0f:"})})}),(0,p.jsx)(c.Z,{span:10,children:(0,p.jsx)(l.Z,{min:5,max:30,onChange:function(e){return x(e,"baseScale")},value:h.baseScale,step:2})}),(0,p.jsx)(c.Z,{span:6,children:(0,p.jsx)(r.Z,{min:5,max:30,step:2,style:{margin:"0 16px"},value:h.baseScale,onChange:function(e){return x(e,"baseScale")}})})]})]})}},9178:function(e,n,t){var a=t(8240);n.Z=function(e,n,t){(0,a.ZP)(e,"[antd: ".concat(n,"] ").concat(t))}}}]);