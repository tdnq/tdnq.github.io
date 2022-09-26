"use strict";(globalThis.webpackChunktdnq_github_io=globalThis.webpackChunktdnq_github_io||[]).push([[5265,7289,134,9637],{7885:(t,e,n)=>{n.d(e,{pn:()=>i,cn:()=>a,J9:()=>s});const i=[0,0,0,.1],a=[0,0,0,.1],s="#d8dadd"},9637:(t,e,n)=>{function i(t){var e;null===(e=t.querySelectorAll("canvas"))||void 0===e||e.forEach((t=>t.remove()))}n.d(e,{e:()=>i})},9852:(t,e,n)=>{n.r(e),n.d(e,{default:()=>o});var i=n(7885);const a={vshader:"\n            attribute vec4 a_position;\n            attribute vec4 a_color;\n            varying vec4 f_color;\n            void main(){\n                gl_Position = a_position;\n                f_color = a_color;\n                gl_PointSize = 3.0;\n            }\n        ",fshader:"\n            precision mediump float;\n            varying vec4 f_color;\n            void main(){\n                gl_FragColor = f_color;\n            }\n        "};var s=n(9637);class r{constructor(...t){[this.x,this.y,this.z]=t}}function o(t,e){this.canvasContainer=t.current,this._points=[new r(-.2,0,0),new r(0,.5,0),new r(.4,-.5,0),new r(.4,.5,0)],(0,s.e)(this.canvasContainer),this.createCanvas(this.canvasContainer.clientWidth,this.canvasContainer.clientHeight).appendCanvas().getWebglContext(),this.gl.clearColor(...i.pn),this.initShader(a),this.gl.clear(this.gl.DEPTH_BUFFER_BIT|this.gl.COLOR_BUFFER_BIT),c.call(this,this._points,{frequence:.001,...e}),this.ele.addEventListener("click",(t=>{const n=t.target.getBoundingClientRect(),i=(t.clientX-n.x-t.target.width/2)/(t.target.width/2),a=-(t.clientY-n.y-t.target.height/2)/(t.target.height/2);this.gl.clear(this.gl.DEPTH_BUFFER_BIT|this.gl.COLOR_BUFFER_BIT),this._points.push(new r(i,a,0)),c.call(this,this._points,{frequence:.001,...e})}))}function c(t,e={frequence:.01}){for(let n=0;n<1;n+=e.frequence){const e=h(t,n),i=new Float32Array([e.x,e.y,e.z]),a=i.length/3,s=this.getRandomArray(4*a);s[3]=1;const r=new Float32Array(s);this.fillShaderAttribution(i,"a_position",3),this.fillShaderAttribution(r,"a_color",4),l.call(this,a)}}function l(t){this.gl.drawArrays(this.gl.POINTS,0,t)}function h(t,e){if(1===t.length)return t[0];const n=[];for(let i=0;i<t.length-1;i++)n.push(new r((1-e)*t[i].x+e*t[i+1].x,(1-e)*t[i].y+e*t[i+1].y,(1-e)*t[i].z+e*t[i+1].z));return h(n,e)}},5265:(t,e,n)=>{n.r(e),n.d(e,{default:()=>r});var i=n(6418),a=n(134),s=n(9852);class r extends i.Z{shading(){a.default.call(this,...arguments)}bezierCurve(){s.default.call(this,...arguments)}get_shader_info(t){const e={shading:{name:"shading",describe:"phong shader, bump shader, texture shader,displacement shader, ",source:"course games 101",time:"2021/12/05",showPriority:90},bezierCurve:{name:"\u8d1d\u585e\u5c14\u66f2\u7ebf",describe:"draw a bezier curve",source:"course games 101",isHidden:/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),time:"2021/12/07",showPriority:50}};return"*"===t?e:e[t]}}},134:(t,e,n)=>{n.r(e),n.d(e,{default:()=>l});var i=n(7885),a=n(3612),s=n(7829),r=n(5695),o=n(6970);const c={phong_png:a,bump_png:s,texture_png:r,displacement_png:o};function l(t,e={path:"phong"}){this.canvasContainer=t.current,this.gl||this.createCanvas(this.canvasContainer.clientWidth,this.canvasContainer.clientHeight).appendCanvas().getWebglContext("2d"),this.gl.clearRect(0,0,this.canvasContainer.clientWidth,this.canvasContainer.clientHeight),this.gl.fillStyle=i.J9,this.gl.fillRect(0,0,this.canvasContainer.clientWidth,this.canvasContainer.clientHeight),function(t,e,n){let i=null;i=c[`${e}_png`]?c[`${e}_png`]:a;const s=new Image;s.onload=()=>{t.drawImage(s,n.clientWidth/2-350,n.clientHeight/2-350)},s.src=i}(this.gl,e.path,this.canvasContainer)}},7829:(t,e,n)=>{t.exports=n.p+"static/media/bump.a12b2ddaed3526edf283.png"},6970:(t,e,n)=>{t.exports=n.p+"static/media/displacement.f43225e3960b672ea76e.png"},3612:(t,e,n)=>{t.exports=n.p+"static/media/phong.a0d1516d19e126dc9783.png"},5695:(t,e,n)=>{t.exports=n.p+"static/media/texture.40b88ae6ebab68746eed.png"}}]);