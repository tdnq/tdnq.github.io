(this["webpackJsonptdnq.github.io"]=this["webpackJsonptdnq.github.io"]||[]).push([[34],{107:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var a={vshader:"\n            attribute vec4 a_position;\n            attribute vec4 a_color;\n            varying vec4 f_color;\n            uniform mat4 u_transformMatrix;\n            void main(){\n                gl_Position = u_transformMatrix * a_position;\n                f_color = a_color;\n                gl_PointSize = 10.0;\n            }\n        ",fshader:"\n            precision mediump float;\n            varying vec4 f_color;\n            void main(){\n                gl_FragColor = f_color;\n            }\n        "}},110:function(e,t,n){e.exports=n(176)},115:function(e,t,n){},164:function(e,t,n){var a={"./common/404":[48,9,13,17],"./common/404/":[48,9,13,17],"./common/404/index":[48,9,13,17],"./common/404/index.jsx":[48,9,13,17],"./frontPage":[49,9,4,0,2,3,10],"./frontPage/":[49,9,4,0,2,3,10],"./frontPage/index":[49,9,4,0,2,3,10],"./frontPage/index.jsx":[49,9,4,0,2,3,10],"./frontPage/index.module.scss":[178,7,37],"./shader":[50,9,1,0,2,3,6],"./shader/":[50,9,1,0,2,3,6],"./shader/components":[47,9,1,0,2,3,7],"./shader/components/":[47,9,1,0,2,3,7],"./shader/components/games101":[43,9,1,0,2,3,9],"./shader/components/games101/":[43,9,1,0,2,3,9],"./shader/components/games101/bezierCurve":[100,9,1,0,2,11,29],"./shader/components/games101/bezierCurve.js":[100,9,1,0,2,11,29],"./shader/components/games101/index":[43,9,1,0,2,3,9],"./shader/components/games101/index.js":[43,9,1,0,2,3,9],"./shader/components/games101/shader":[101,9,1,3,12,23],"./shader/components/games101/shader.jsx":[101,9,1,3,12,23],"./shader/components/index":[47,9,1,0,2,3,7],"./shader/components/index.js":[47,9,1,0,2,3,7],"./shader/components/threejs":[44,9,1,0,2,3,8],"./shader/components/threejs/":[44,9,1,0,2,3,8],"./shader/components/threejs/index":[44,9,1,0,2,3,8],"./shader/components/threejs/index.js":[44,9,1,0,2,3,8],"./shader/components/threejs/math_curve":[103,9,1,0,3,12,21],"./shader/components/threejs/math_curve.jsx":[103,9,1,0,3,12,21],"./shader/components/threejs/sprite_rain":[102,9,1,0,2,11,30],"./shader/components/threejs/sprite_rain.js":[102,9,1,0,2,11,30],"./shader/index":[50,9,1,0,2,3,6],"./shader/index.jsx":[50,9,1,0,2,3,6],"./shader/index.module.scss":[179,7,38]};function r(e){if(!n.o(a,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=a[e],r=t[0];return Promise.all(t.slice(2).map(n.e)).then((function(){return n.t(r,t[1])}))}r.keys=function(){return Object.keys(a)},r.id=164,e.exports=r},175:function(e,t,n){},176:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(68),i=n.n(o),l=(n(115),n(35)),s=n(1),h=["basicLayouts"],c=[{path:"/",component:"frontPage/index.jsx",layout:h[0]},{path:"/shader/:shaderClass/:shaderName",component:"shader/index.jsx",layout:h[0]},{path:"/404",component:"common/404/index.jsx",layout:h[0]}],d=n(7),u=n(8),g=n(21),f=n(20),m=n(22),v=(n(116),n(29)),p=n(93),x=n.n(p),y=function(e){function t(){var e;Object(d.a)(this,t);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return Object(g.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(a)))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"createTextureCanvas",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{width:50,height:50,font_family:"monospace",fontSize:"24px",x_axis:0,y_axis:0},n=document.createElement("canvas"),a=n.getContext("2d");a.font="".concat(t.fontSize," ").concat(t.font_family);var r=a.measureText(e);return n.width=r.width,n.height=r.height,n.style.width=r.width+"px",n.style.height=r.height+"px",a.font="".concat(t.fontSize," ").concat(t.font_family),a.textAlign=t.align||"center",a.textBaseline=t.baseline||"middle",a.fillStyle="transparent",a.fillRect(0,0,a.canvas.width,a.canvas.height),a.fillStyle=t.color||"white",a.fillText(e,r.width/2,r.height/2),n}},{key:"handleLoadedTexture",value:function(e,t,n){e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!0),e.bindTexture(e.TEXTURE_2D,t),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,n),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR_MIPMAP_NEAREST),e.generateMipmap(e.TEXTURE_2D),e.bindTexture(e.TEXTURE_2D,null)}}]),t}(n(73).a),E=(n(107),function(e){function t(){var e;Object(d.a)(this,t);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return Object(g.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(a)))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"drawLogo",value:function(e){this.canvasContainer=e.current,this.createCanvas(40,60).appendCanvas(),this.drawTexture("TD'blog")}},{key:"drawLogo_initBuffer",value:function(){var e=new Float32Array([0,0,0,.8,0,0,0,1,0]),t=new Float32Array(this.getRandomArray(4*e.length/3));return this.fillShaderAttribution(e,"a_position",e.length/3),this.fillShaderAttribution(t,"a_color",4),e.length/3}},{key:"drawTexture",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{width:144,height:64,font_family:"monospace",fontSize:"24px",x_axis:0,y_axis:0},n=this.ele,a=this.ele.getContext("2d");a.font="".concat(t.fontSize," ").concat(t.font_family),n.width=t.width,n.height=t.height;var r=a.measureText(e).width;return a.fillStyle="transparent",a.fillRect(0,0,a.canvas.width,a.canvas.height),a.translate(t.width/2,t.height/2),a.font="".concat(t.fontSize," ").concat(t.font_family),a.textBaseline="bottom",a.fillStyle=t.color||"white",a.textAlign=t.align||"center",a.shadowColor="#588fbfed",a.shadowOffsetX=2,a.shadowOffsetY=1,a.shadowBlur=4,a.fillText(e,0,r/5),a.shadowColor="#3c424845",a.shadowOffsetX=2,a.shadowOffsetY=1,a.shadowBlur=4,a.strokeStyle="#d9dbdc9e",a.lineWidth=1,a.globalCompositeOperation="source-over",a.scale(1,-1),a.strokeText(e,0,0),!0}}]),t}(y)),b=v.a.Header,_=v.a.Content,w=v.a.Footer,T=function(e){function t(e){var n;return Object(d.a)(this,t),(n=Object(g.a)(this,Object(f.a)(t).call(this,e))).logoRef=r.a.createRef(),n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){(new E).drawLogo(this.logoRef)}},{key:"render",value:function(){return r.a.createElement(v.a,{style:{minHeight:"100%"}},r.a.createElement(b,null,r.a.createElement(l.b,{exact:!0,to:"/"},r.a.createElement("span",{ref:this.logoRef,className:x.a.logo}))),r.a.createElement(_,null,this.props.children),r.a.createElement(w,{style:{textAlign:"center"}},"Copyright\xa9",(new Date).getFullYear(),".TD"))}}]),t}(r.a.Component);function A(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=(arguments.length>1?arguments[1]:void 0)(e.component);return e.layout?function(){return r.a.createElement(T,null,r.a.createElement(t,null))}:t}T.defaultProps={navKey:3};var S=function(){function e(){Object(d.a)(this,e)}return Object(u.a)(e,null,[{key:"isWebGLAvailable",value:function(){try{var e=document.createElement("canvas");return!(!window.WebGLRenderingContext||!e.getContext("webgl")&&!e.getContext("experimental-webgl"))}catch(t){return!1}}},{key:"isWebGL2Available",value:function(){try{var e=document.createElement("canvas");return!(!window.WebGL2RenderingContext||!e.getContext("webgl2"))}catch(t){return!1}}},{key:"getWebGLErrorMessage",value:function(){return this.getErrorMessage(1)}},{key:"getWebGL2ErrorMessage",value:function(){return this.getErrorMessage(2)}},{key:"getErrorMessage",value:function(e){var t={1:window.WebGLRenderingContext,2:window.WebGL2RenderingContext},n='Your $0 does not seem to support <a href="http://khronos.org/webgl/wiki/Getting_a_WebGL_Implementation" style="color:#000">$1</a>',a=document.createElement("div");return a.id="webglmessage",a.style.fontFamily="monospace",a.style.fontSize="13px",a.style.fontWeight="normal",a.style.textAlign="center",a.style.background="#fff",a.style.color="#000",a.style.padding="1.5em",a.style.width="400px",a.style.margin="5em auto 0",n=(n=t[e]?n.replace("$0","graphics card"):n.replace("$0","browser")).replace("$1",{1:"WebGL",2:"WebGL 2"}[e]),a.innerHTML=n,a}}]),e}(),R=(n(162),n(98)),j=n(97),C=n.n(j),k=function(e){return C()({loader:function(){return n(164)("./".concat(e))},loading:function(){return r.a.createElement("div",{className:"loading",style:{display:"flex",height:"100%"}},r.a.createElement(R.a,{style:{margin:"auto",transform:"translateY(-200%)"}}))}})};n(175);var L=function(){return S.isWebGLAvailable()?r.a.createElement(l.a,null,r.a.createElement(s.d,null,c.map((function(e,t){return r.a.createElement(s.b,{path:e.path,exact:!0,component:A(e,k),key:e.component})})),r.a.createElement(s.a,{to:"/404"}))):r.a.createElement("h1",{style:{textAlign:"center"}},"\u5f53\u524d\u6d4f\u89c8\u5668\u4e0d\u652f\u6301webgl,\u8bf7\u66f4\u6362\u5230Chrome\u6216\u5f53\u524d\u6d4f\u89c8\u5668\u9ad8\u7248\u672c")};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(L,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},73:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(7),r=n(8),o=function(){function e(t){Object(a.a)(this,e),this.canvasContainer=t||document.getElementById("canvasContainer"),this.ele=null,this.gl=null}return Object(r.a)(e,[{key:"createCanvas",value:function(e,t){var n=document.createElement("canvas");return n.width=e,n.height=t,this.ele=n,this}},{key:"appendCanvas",value:function(){if(this.ele)return this.canvasContainer.appendChild(this.ele),this;console.error("no canvas element")}},{key:"getWebglContext",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"webgl";if(!this.ele.getContext(e))return console.error("no ".concat(e," context")),null;this.gl=this.ele.getContext(e)}},{key:"getRandomArray",value:function(e){for(var t=[],n=0;n<e;n++)t.push(Math.random());return t}},{key:"initShader",value:function(e){var t=this.loadShader(this.gl.VERTEX_SHADER,e.vshader),n=this.loadShader(this.gl.FRAGMENT_SHADER,e.fshader);if(!t||!n)return!1;var a=this.gl.createProgram();return this.gl.attachShader(a,t),this.gl.attachShader(a,n),this.gl.linkProgram(a),!!this.gl.getProgramParameter(a,this.gl.LINK_STATUS)&&(this.gl.useProgram(a),this.gl._program=a,!0)}},{key:"createShaderProgram",value:function(e){var t=this.loadShader(this.gl.VERTEX_SHADER,e.vshader),n=this.loadShader(this.gl.FRAGMENT_SHADER,e.fshader);if(!t||!n)return!1;var a=this.gl.createProgram();if(this.gl.attachShader(a,t),this.gl.attachShader(a,n),this.gl.linkProgram(a),!this.gl.getProgramParameter(a,this.gl.LINK_STATUS)){var r=this.gl.getProgramInfoLog(a);return console.error("Failed to link program: "+r),this.gl.deleteProgram(a),this.gl.deleteShader(n),this.gl.deleteShader(t),!1}return a}},{key:"loadShader",value:function(e,t){var n=this.gl.createShader(e);return this.gl.shaderSource(n,t),this.gl.compileShader(n),this.gl.getShaderParameter(n,this.gl.COMPILE_STATUS)?n:(this.gl.deleteShader(n),null)}},{key:"fillShaderAttribution",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:4,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:this.gl.FLOAT,r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0,i=this.gl.getAttribLocation(this.gl._program,t),l=this.gl.createBuffer();if(!l)return!1;this.gl.bindBuffer(this.gl.ARRAY_BUFFER,l),this.gl.bufferData(this.gl.ARRAY_BUFFER,e,this.gl.STATIC_DRAW);var s=e.BYTES_PER_ELEMENT;return this.gl.vertexAttribPointer(i,n,a,!1,s*r,s*o),this.gl.enableVertexAttribArray(i),!0}},{key:"fillElementsIndex",value:function(e){var t=this.gl.createBuffer();return!!t&&(this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER,t),this.gl.bufferData(this.gl.ELEMENT_ARRAY_BUFFER,e,this.gl.STATIC_DRAW),!0)}},{key:"fillUniformData",value:function(e,t){var n,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:4,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",o=this.gl.getUniformLocation(this.gl._program,t);if(!o)return!1;var i="Matrix"===r?[o,!1,e]:[o,e];(n=this.gl)["uniform".concat(r).concat(a,"fv")].apply(n,i)}}]),e}()},93:function(e,t,n){e.exports={logo:"layouts_logo__1JSrc"}}},[[110,35,36]]]);