(this["webpackJsonptdnq.github.io"]=this["webpackJsonptdnq.github.io"]||[]).push([[9],{103:function(t,e,n){},155:function(t,e,n){var a={"./common/404":[42,9,2,5],"./common/404/":[42,9,2,5],"./common/404/index":[42,9,2,5],"./common/404/index.jsx":[42,9,2,5],"./frontPage":[44,9,0,1,3],"./frontPage/":[44,9,0,1,3],"./frontPage/index":[44,9,0,1,3],"./frontPage/index.jsx":[44,9,0,1,3],"./shader":[43,9,0,4],"./shader/":[43,9,0,4],"./shader/index":[43,9,0,4],"./shader/index.jsx":[43,9,0,4],"./shader/index.module.scss":[167,7,12]};function r(t){if(!n.o(a,t))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=a[t],r=e[0];return Promise.all(e.slice(2).map(n.e)).then((function(){return n.t(r,e[1])}))}r.keys=function(){return Object.keys(a)},r.id=155,t.exports=r},164:function(t,e,n){},165:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),o=n(67),i=n.n(o),l=(n(103),n(33)),c=n(1),s=["basicLayouts"],h=[{path:"/",component:"frontPage/index.jsx",layout:s[0]},{path:"/shader/:shaderClass/:shaderName",component:"shader/index.jsx",layout:s[0]},{path:"/404",component:"common/404/index.jsx",layout:s[0]}],u=n(8),f=n(12),d=n(18),g=n(17),m=n(19),v=(n(104),n(29)),E=n(88),p=n.n(E),_=function(t){function e(){var t;Object(u.a)(this,e);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return Object(d.a)(this,(t=Object(g.a)(e)).call.apply(t,[this].concat(a)))}return Object(m.a)(e,t),Object(f.a)(e,[{key:"createTextureCanvas",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{width:50,height:50,font_family:"monospace",fontSize:"24px",x_axis:0,y_axis:0},n=document.createElement("canvas"),a=n.getContext("2d");a.font="".concat(e.fontSize," ").concat(e.font_family);var r=a.measureText(t);return n.width=r.width,n.height=r.height,n.style.width=r.width+"px",n.style.height=r.height+"px",a.font="".concat(e.fontSize," ").concat(e.font_family),a.textAlign=e.align||"center",a.textBaseline=e.baseline||"middle",a.fillStyle="transparent",a.fillRect(0,0,a.canvas.width,a.canvas.height),a.fillStyle=e.color||"white",a.fillText(t,r.width/2,r.height/2),n}},{key:"handleLoadedTexture",value:function(t,e,n){t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!0),t.bindTexture(t.TEXTURE_2D,e),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,t.RGBA,t.UNSIGNED_BYTE,n),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR_MIPMAP_NEAREST),t.generateMipmap(t.TEXTURE_2D),t.bindTexture(t.TEXTURE_2D,null)}}]),e}(n(65).a),x=(n(94),function(t){function e(){var t;Object(u.a)(this,e);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return Object(d.a)(this,(t=Object(g.a)(e)).call.apply(t,[this].concat(a)))}return Object(m.a)(e,t),Object(f.a)(e,[{key:"drawLogo",value:function(t){this.canvasContainer=t.current,this.createCanvas(40,60).appendCanvas(),this.drawTexture("TD'blog")}},{key:"drawLogo_initBuffer",value:function(){var t=new Float32Array([0,0,0,.8,0,0,0,1,0]),e=new Float32Array(this.getRandomArray(4*t.length/3));return this.fillShaderAttribution(t,"a_position",t.length/3),this.fillShaderAttribution(e,"a_color",4),t.length/3}},{key:"drawTexture",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{width:144,height:64,font_family:"monospace",fontSize:"24px",x_axis:0,y_axis:0},n=this.ele,a=this.ele.getContext("2d");a.font="".concat(e.fontSize," ").concat(e.font_family),n.width=e.width,n.height=e.height;var r=a.measureText(t).width;return a.fillStyle="transparent",a.fillRect(0,0,a.canvas.width,a.canvas.height),a.translate(e.width/2,e.height/2),a.font="".concat(e.fontSize," ").concat(e.font_family),a.textBaseline="bottom",a.fillStyle=e.color||"white",a.textAlign=e.align||"center",a.shadowColor="#588fbfed",a.shadowOffsetX=2,a.shadowOffsetY=1,a.shadowBlur=4,a.fillText(t,0,r/5),a.shadowColor="#3c424845",a.shadowOffsetX=2,a.shadowOffsetY=1,a.shadowBlur=4,a.strokeStyle="#d9dbdc9e",a.lineWidth=1,a.globalCompositeOperation="source-over",a.scale(1,-1),a.strokeText(t,0,0),!0}}]),e}(_)),y=v.a.Header,T=v.a.Content,b=v.a.Footer,w=function(t){function e(t){var n;return Object(u.a)(this,e),(n=Object(d.a)(this,Object(g.a)(e).call(this,t))).logoRef=r.a.createRef(),n}return Object(m.a)(e,t),Object(f.a)(e,[{key:"componentDidMount",value:function(){(new x).drawLogo(this.logoRef)}},{key:"render",value:function(){return r.a.createElement(v.a,{className:"layout"},r.a.createElement(y,null,r.a.createElement(l.b,{exact:!0,to:"/"},r.a.createElement("span",{ref:this.logoRef,className:p.a.logo}))),r.a.createElement(T,null,this.props.children),r.a.createElement(b,{style:{textAlign:"center"}},"Copyright\xa9",(new Date).getFullYear(),".TD"))}}]),e}(r.a.Component);function A(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=(arguments.length>1?arguments[1]:void 0)(t.component);return t.layout?function(){return r.a.createElement(w,null,r.a.createElement(e,null))}:e}w.defaultProps={navKey:3};n(153);var R=n(93),S=n(92),C=n.n(S),O=function(t){return C()({loader:function(){return n(155)("./".concat(t))},loading:function(){return r.a.createElement("div",{className:"loading"},r.a.createElement(R.a,null))}})};n(164);var k=function(){return r.a.createElement(l.a,null,r.a.createElement(c.d,null,h.map((function(t,e){return r.a.createElement(c.b,{path:t.path,exact:!0,component:A(t,O),key:t.component})})),r.a.createElement(c.a,{to:"/404"})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))},65:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var a=n(8),r=n(12),o=function(){function t(e){Object(a.a)(this,t),this.canvasContainer=e||document.getElementById("canvasContainer"),this.ele=null,this.gl=null}return Object(r.a)(t,[{key:"createCanvas",value:function(t,e){var n=document.createElement("canvas");return n.width=t,n.height=e,this.ele=n,this}},{key:"appendCanvas",value:function(){if(this.ele)return this.canvasContainer.appendChild(this.ele),this;console.error("no canvas element")}},{key:"getWebglContext",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"webgl";if(!this.ele.getContext(t))return console.error("no ".concat(t," context")),null;this.gl=this.ele.getContext(t)}},{key:"getRandomArray",value:function(t,e){var n=[];if(e)for(var a=function(e){var a=new Array(t);a.forEach((function(t,e){a[e]=Math.random()})),n.push(a)},r=0;r<e;r++)a();else for(var o=0;o<t;o++)n.push(Math.random());return n}},{key:"initShader",value:function(t){var e=this.loadShader(this.gl.VERTEX_SHADER,t.vshader),n=this.loadShader(this.gl.FRAGMENT_SHADER,t.fshader);if(!e||!n)return!1;var a=this.gl.createProgram();return this.gl.attachShader(a,e),this.gl.attachShader(a,n),this.gl.linkProgram(a),!!this.gl.getProgramParameter(a,this.gl.LINK_STATUS)&&(this.gl.useProgram(a),this.gl._program=a,!0)}},{key:"loadShader",value:function(t,e){var n=this.gl.createShader(t);return this.gl.shaderSource(n,e),this.gl.compileShader(n),this.gl.getShaderParameter(n,this.gl.COMPILE_STATUS)?n:null}},{key:"fillShaderAttribution",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:4,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:this.gl.FLOAT,r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0,i=this.gl.getAttribLocation(this.gl._program,e),l=this.gl.createBuffer();if(!l)return!1;this.gl.bindBuffer(this.gl.ARRAY_BUFFER,l),this.gl.bufferData(this.gl.ARRAY_BUFFER,t,this.gl.STATIC_DRAW);var c=t.BYTES_PER_ELEMENT;return this.gl.vertexAttribPointer(i,n,a,!1,c*r,c*o),this.gl.enableVertexAttribArray(i),!0}},{key:"fillElementsIndex",value:function(t){var e=this.gl.createBuffer();return!!e&&(this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER,e),this.gl.bufferData(this.gl.ELEMENT_ARRAY_BUFFER,t,this.gl.STATIC_DRAW),!0)}},{key:"fillUniformData",value:function(t,e){var n,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:4,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",o=this.gl.getUniformLocation(this.gl._program,e);if(!o)return!1;var i="Matrix"===r?[o,!1,t]:[o,t];(n=this.gl)["uniform".concat(r).concat(a,"fv")].apply(n,i)}}]),t}()},88:function(t,e,n){t.exports={logo:"layouts_logo__1JSrc"}},94:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var a={vshader:"\n            attribute vec4 a_position;\n            attribute vec4 a_color;\n            varying vec4 f_color;\n            uniform mat4 u_transformMatrix;\n            void main(){\n                gl_Position = u_transformMatrix * a_position;\n                f_color = a_color;\n                gl_PointSize = 10.0;\n            }\n        ",fshader:"\n            precision mediump float;\n            varying vec4 f_color;\n            void main(){\n                gl_FragColor = f_color;\n            }\n        "}},98:function(t,e,n){t.exports=n(165)}},[[98,10,11]]]);
//# sourceMappingURL=main.aeba18a4.chunk.js.map