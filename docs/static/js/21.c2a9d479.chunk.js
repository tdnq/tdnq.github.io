(this["webpackJsonptdnq.github.io"]=this["webpackJsonptdnq.github.io"]||[]).push([[21],{103:function(e,t,n){"use strict";n.r(t);n(189);var r=n(194),o=(n(70),n(259),n(0)),a=n.n(o),c=n(3),u=n.n(c),l=n(69),i=n(2),s=n.n(i),f=n(71),p=n.n(f),d=n(6),y=n.n(d),h=n(30),b=n.n(h),v=n(66),m=n.n(v),g=n(67),O=n.n(g),x=function(e){function t(n){b()(this,t);var r=m()(this,e.call(this,n));r.handleChange=function(e){var t=r.props,n=t.disabled,o=t.onChange;n||("checked"in r.props||r.setState({checked:e.target.checked}),o&&o({target:y()({},r.props,{checked:e.target.checked}),stopPropagation:function(){e.stopPropagation()},preventDefault:function(){e.preventDefault()},nativeEvent:e.nativeEvent}))},r.saveInput=function(e){r.input=e};var o="checked"in n?n.checked:n.defaultChecked;return r.state={checked:o},r}return O()(t,e),t.getDerivedStateFromProps=function(e,t){return"checked"in e?y()({},t,{checked:e.checked}):null},t.prototype.focus=function(){this.input.focus()},t.prototype.blur=function(){this.input.blur()},t.prototype.render=function(){var e,t=this.props,n=t.prefixCls,r=t.className,o=t.style,c=t.name,u=t.id,l=t.type,i=t.disabled,f=t.readOnly,d=t.tabIndex,h=t.onClick,b=t.onFocus,v=t.onBlur,m=t.autoFocus,g=t.value,O=p()(t,["prefixCls","className","style","name","id","type","disabled","readOnly","tabIndex","onClick","onFocus","onBlur","autoFocus","value"]),x=Object.keys(O).reduce((function(e,t){return"aria-"!==t.substr(0,5)&&"data-"!==t.substr(0,5)&&"role"!==t||(e[t]=O[t]),e}),{}),k=this.state.checked,C=s()(n,r,((e={})[n+"-checked"]=k,e[n+"-disabled"]=i,e));return a.a.createElement("span",{className:C,style:o},a.a.createElement("input",y()({name:c,id:u,type:l,readOnly:f,disabled:i,tabIndex:d,className:n+"-input",checked:!!k,onClick:h,onFocus:b,onBlur:v,onChange:this.handleChange,autoFocus:m,ref:this.saveInput,value:g},x)),a.a.createElement("span",{className:n+"-inner"}))},t}(o.Component);x.propTypes={prefixCls:u.a.string,className:u.a.string,style:u.a.object,name:u.a.string,id:u.a.string,type:u.a.string,defaultChecked:u.a.oneOfType([u.a.number,u.a.bool]),checked:u.a.oneOfType([u.a.number,u.a.bool]),disabled:u.a.bool,onFocus:u.a.func,onBlur:u.a.func,onChange:u.a.func,onClick:u.a.func,tabIndex:u.a.oneOfType([u.a.string,u.a.number]),readOnly:u.a.bool,autoFocus:u.a.bool,value:u.a.any},x.defaultProps={prefixCls:"rc-checkbox",className:"",style:{},type:"checkbox",defaultChecked:!1,onFocus:function(){},onBlur:function(){},onChange:function(){}},Object(l.polyfill)(x);var k=x,C=n(185),E=n.n(C),j=n(177),w=n(9);function S(e){return(S="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function P(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function V(){return(V=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function N(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _(e,t){return(_=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function T(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=F(e);if(t){var o=F(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return A(this,n)}}function A(e,t){return!t||"object"!==S(t)&&"function"!==typeof t?G(e):t}function G(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function F(e){return(F=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var I=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},R=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_(e,t)}(c,e);var t,n,r,a=T(c);function c(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),(e=a.apply(this,arguments)).saveCheckbox=function(t){e.rcCheckbox=t},e.renderCheckbox=function(t){var n,r=t.getPrefixCls,a=G(e),c=a.props,u=a.context,l=c.prefixCls,i=c.className,f=c.children,p=c.indeterminate,d=c.style,y=c.onMouseEnter,h=c.onMouseLeave,b=I(c,["prefixCls","className","children","indeterminate","style","onMouseEnter","onMouseLeave"]),v=u.checkboxGroup,m=r("checkbox",l),g=V({},b);v&&(g.onChange=function(){b.onChange&&b.onChange.apply(b,arguments),v.toggleOption({label:f,value:c.value})},g.name=v.name,g.checked=-1!==v.value.indexOf(c.value),g.disabled=c.disabled||v.disabled);var O=s()(i,(P(n={},"".concat(m,"-wrapper"),!0),P(n,"".concat(m,"-wrapper-checked"),g.checked),P(n,"".concat(m,"-wrapper-disabled"),g.disabled),n)),x=s()(P({},"".concat(m,"-indeterminate"),p));return o.createElement("label",{className:O,style:d,onMouseEnter:y,onMouseLeave:h},o.createElement(k,V({},g,{prefixCls:m,className:x,ref:e.saveCheckbox})),void 0!==f&&o.createElement("span",null,f))},e}return t=c,(n=[{key:"componentDidMount",value:function(){var e=this.props.value,t=(this.context||{}).checkboxGroup,n=void 0===t?{}:t;n.registerValue&&n.registerValue(e),Object(w.a)("checked"in this.props||(this.context||{}).checkboxGroup||!("value"in this.props),"Checkbox","`value` is not validate prop, do you mean `checked`?")}},{key:"shouldComponentUpdate",value:function(e,t,n){return!E()(this.props,e)||!E()(this.state,t)||!E()(this.context.checkboxGroup,n.checkboxGroup)}},{key:"componentDidUpdate",value:function(e){var t=e.value,n=this.props.value,r=(this.context||{}).checkboxGroup,o=void 0===r?{}:r;n!==t&&o.registerValue&&o.cancelValue&&(o.cancelValue(t),o.registerValue(n))}},{key:"componentWillUnmount",value:function(){var e=this.props.value,t=(this.context||{}).checkboxGroup,n=void 0===t?{}:t;n.cancelValue&&n.cancelValue(e)}},{key:"focus",value:function(){this.rcCheckbox.focus()}},{key:"blur",value:function(){this.rcCheckbox.blur()}},{key:"render",value:function(){return o.createElement(j.a,null,this.renderCheckbox)}}])&&N(t.prototype,n),r&&N(t,r),c}(o.Component);R.__ANT_CHECKBOX=!0,R.defaultProps={indeterminate:!1},R.contextTypes={checkboxGroup:c.any},Object(l.polyfill)(R);var D=R,M=n(33);function H(e){return(H="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function L(){return(L=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function B(e){return function(e){if(Array.isArray(e))return U(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"===typeof e)return U(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return U(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function U(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function q(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function J(e,t){return(J=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function K(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=$(e);if(t){var o=$(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return W(this,n)}}function W(e,t){return!t||"object"!==H(t)&&"function"!==typeof t?X(e):t}function X(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function $(e){return($=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var z=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},Q=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&J(e,t)}(c,e);var t,n,r,a=K(c);function c(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),(t=a.call(this,e)).cancelValue=function(e){t.setState((function(t){return{registeredValues:t.registeredValues.filter((function(t){return t!==e}))}}))},t.registerValue=function(e){t.setState((function(t){var n=t.registeredValues;return{registeredValues:[].concat(B(n),[e])}}))},t.toggleOption=function(e){var n=t.state.registeredValues,r=t.state.value.indexOf(e.value),o=B(t.state.value);-1===r?o.push(e.value):o.splice(r,1),"value"in t.props||t.setState({value:o});var a=t.props.onChange;if(a){var c=t.getOptions();a(o.filter((function(e){return-1!==n.indexOf(e)})).sort((function(e,t){return c.findIndex((function(t){return t.value===e}))-c.findIndex((function(e){return e.value===t}))})))}},t.renderGroup=function(e){var n=e.getPrefixCls,r=X(t),a=r.props,c=r.state,u=a.prefixCls,l=a.className,i=a.style,f=a.options,p=z(a,["prefixCls","className","style","options"]),d=n("checkbox",u),y="".concat(d,"-group"),h=Object(M.a)(p,["children","defaultValue","value","onChange","disabled"]),b=a.children;f&&f.length>0&&(b=t.getOptions().map((function(e){return o.createElement(D,{prefixCls:d,key:e.value.toString(),disabled:"disabled"in e?e.disabled:a.disabled,value:e.value,checked:-1!==c.value.indexOf(e.value),onChange:e.onChange,className:"".concat(y,"-item")},e.label)})));var v=s()(y,l);return(o.createElement("div",L({className:v,style:i},h),b))},t.state={value:e.value||e.defaultValue||[],registeredValues:[]},t}return t=c,r=[{key:"getDerivedStateFromProps",value:function(e){return"value"in e?{value:e.value||[]}:null}}],(n=[{key:"getChildContext",value:function(){return{checkboxGroup:{toggleOption:this.toggleOption,value:this.state.value,disabled:this.props.disabled,name:this.props.name,registerValue:this.registerValue,cancelValue:this.cancelValue}}}},{key:"shouldComponentUpdate",value:function(e,t){return!E()(this.props,e)||!E()(this.state,t)}},{key:"getOptions",value:function(){return this.props.options.map((function(e){return"string"===typeof e?{label:e,value:e}:e}))}},{key:"render",value:function(){return o.createElement(j.a,null,this.renderGroup)}}])&&q(t.prototype,n),r&&q(t,r),c}(o.Component);Q.defaultProps={options:[]},Q.propTypes={defaultValue:c.array,value:c.array,options:c.array.isRequired,onChange:c.func},Q.childContextTypes={checkboxGroup:c.any},Object(l.polyfill)(Q);var Y=Q;D.Group=Y;var Z=D,ee=n(180),te=(n(190),n(195)),ne=n(193),re=(n(207),n(203)),oe=re.a.Option;t.default=function(e){var t=a.a.useState(2),n=Object(ne.a)(t,2),o=n[0],c=n[1],u=[{label:"\u5e42\u51fd\u6570",value:"power",index:0},{label:"\u5706",value:"circle",index:1},{label:"\u5fc3\u578b\u7ebf",value:"dcrHeart",index:2},{label:"\u53cc\u66f2\u7ebf",value:"hyperbola",index:3}],l=[{label:"\u7403",value:"sphere",index:u.length+0}];return a.a.createElement(a.a.Fragment,null,a.a.createElement(r.a,null,a.a.createElement(te.a,null,a.a.createElement("label",{className:"controlLabel"},a.a.createElement("strong",null,"\u5750\u6807\u7cfb\u7ef4\u5ea6:")),a.a.createElement(re.a,{defaultValue:o,style:{marginLeft:"0.5rem"},onChange:function(t){e((function(e){return[{position:"dimension",value:t}]})),c(t)}},a.a.createElement(oe,{value:2},"\u4e8c\u7ef4"),a.a.createElement(oe,{value:3},"\u4e09\u7ef4"))),2===o&&a.a.createElement(a.a.Fragment,null,a.a.createElement(te.a,null,a.a.createElement("label",{className:"controlLabel"},a.a.createElement("strong",null,"\u66f2\u7ebf\u7c7b\u578b:"))),a.a.createElement(te.a,null,a.a.createElement(Z.Group,{options:u,defaultValue:["dcrHeart","hyperbola"],onChange:function(t){e((function(e){e=Array.isArray(e)?e:[];var n=[];return u.forEach((function(e,t){n.push({position:"lineType.".concat(e.index,".isHidden"),value:!0})})),t.forEach((function(e){n.push({position:"lineType.".concat(u.find((function(t){return t.value===e})).index,".isHidden"),value:!1})})),[].concat(Object(ee.a)(e),n)}))}}))),3===o&&a.a.createElement(a.a.Fragment,null,a.a.createElement(te.a,null,a.a.createElement("label",{className:"controlLabel"},a.a.createElement("strong",null,"\u66f2\u7ebf\u7c7b\u578b:"))),a.a.createElement(te.a,null,a.a.createElement(Z.Group,{options:l,defaultValue:["sphere"],onChange:function(t){e((function(e){e=Array.isArray(e)?e:[];var n=[];return l.forEach((function(e,t){n.push({position:"lineType.".concat(e.index,".isHidden"),value:!0})})),t.forEach((function(e){n.push({position:"lineType.".concat(l.find((function(t){return t.value===e})).index,".isHidden"),value:!1})})),[].concat(Object(ee.a)(e),n)}))}})))))}},180:function(e,t,n){"use strict";function r(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}n.d(t,"a",(function(){return r}))},259:function(e,t,n){}}]);