(globalThis.webpackChunktdnq_github_io=globalThis.webpackChunktdnq_github_io||[]).push([[1496,9495,9439,6033,597,2897],{3116:(e,t,i)=>{"use strict";i.d(t,{Z:()=>n});const n={vertex:[-1,-1,1,1,-1,1,1,1,1,-1,1,1,-1,-1,-1,1,-1,-1,1,1,-1,-1,1,-1],indices:[0,3,2,0,1,2,1,2,5,2,5,6,2,3,6,3,6,7,0,3,4,3,4,7,0,1,4,1,4,5,4,5,6,4,6,7],unit:3}},9852:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>l});var n=i(7885);const a={vshader:"\n            attribute vec4 a_position;\n            attribute vec4 a_color;\n            varying vec4 f_color;\n            void main(){\n                gl_Position = a_position;\n                f_color = a_color;\n                gl_PointSize = 3.0;\n            }\n        ",fshader:"\n            precision mediump float;\n            varying vec4 f_color;\n            void main(){\n                gl_FragColor = f_color;\n            }\n        "};var s=i(9637);class r{constructor(...e){[this.x,this.y,this.z]=e}}function l(e,t){this.canvasContainer=e.current,this._points=[new r(-.2,0,0),new r(0,.5,0),new r(.4,-.5,0),new r(.4,.5,0)],(0,s.e)(this.canvasContainer),this.createCanvas(this.canvasContainer.clientWidth,this.canvasContainer.clientHeight).appendCanvas().getWebglContext(),this.gl.clearColor(...n.pn),this.initShader(a),this.gl.clear(this.gl.DEPTH_BUFFER_BIT|this.gl.COLOR_BUFFER_BIT),o.call(this,this._points,{frequence:.001,...t}),this.ele.addEventListener("click",(e=>{const i=e.target.getBoundingClientRect(),n=(e.clientX-i.x-e.target.width/2)/(e.target.width/2),a=-(e.clientY-i.y-e.target.height/2)/(e.target.height/2);this.gl.clear(this.gl.DEPTH_BUFFER_BIT|this.gl.COLOR_BUFFER_BIT),this._points.push(new r(n,a,0)),o.call(this,this._points,{frequence:.001,...t})}))}function o(e,t={frequence:.01}){for(let i=0;i<1;i+=t.frequence){const t=c(e,i),n=new Float32Array([t.x,t.y,t.z]),a=n.length/3,s=this.getRandomArray(4*a);s[3]=1;const r=new Float32Array(s);this.fillShaderAttribution(n,"a_position",3),this.fillShaderAttribution(r,"a_color",4),h.call(this,a)}}function h(e){this.gl.drawArrays(this.gl.POINTS,0,e)}function c(e,t){if(1===e.length)return e[0];const i=[];for(let n=0;n<e.length-1;n++)i.push(new r((1-t)*e[n].x+t*e[n+1].x,(1-t)*e[n].y+t*e[n+1].y,(1-t)*e[n].z+t*e[n+1].z));return c(i,t)}},5265:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>r});var n=i(6418),a=i(134),s=i(9852);class r extends n.Z{shading(){a.default.call(this,...arguments)}bezierCurve(){s.default.call(this,...arguments)}get_shader_info(e){const t={shading:{name:"shading",describe:"phong shader, bump shader, texture shader,displacement shader, ",source:"course games 101",time:"2021/12/05",showPriority:90},bezierCurve:{name:"\u8d1d\u585e\u5c14\u66f2\u7ebf",describe:"draw a bezier curve",source:"course games 101",isHidden:/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),time:"2021/12/07",showPriority:50}};return"*"===e?t:t[e]}}},134:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>h});var n=i(7885),a=i(3612),s=i(7829),r=i(5695),l=i(6970);const o={phong_png:a,bump_png:s,texture_png:r,displacement_png:l};function h(e,t={path:"phong"}){this.canvasContainer=e.current,this.gl||this.createCanvas(this.canvasContainer.clientWidth,this.canvasContainer.clientHeight).appendCanvas().getWebglContext("2d"),this.gl.clearRect(0,0,this.canvasContainer.clientWidth,this.canvasContainer.clientHeight),this.gl.fillStyle=n.J9,this.gl.fillRect(0,0,this.canvasContainer.clientWidth,this.canvasContainer.clientHeight),function(e,t,i){let n=null;n=o[`${t}_png`]?o[`${t}_png`]:a;const s=new Image;s.onload=()=>{e.drawImage(s,i.clientWidth/2-350,i.clientHeight/2-350)},s.src=n}(this.gl,t.path,this.canvasContainer)}},3037:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>s});var n=i(9681),a=i(8988);class s{constructor(){this.info={},this.leaveCallback=[];let e={repeatAndRandom:n.default,Pixels:a.default};for(let t of Object.keys(e))if(e[t].toString().startsWith("class")){let i=new e[t];this.info[t]=i.info,i.leaveCallback&&(this.leaveCallback=[i.leaveCallback]),this[t]=function(){var e;null!==(e=arguments[1])&&void 0!==e&&e.length?i.update(...arguments.slice(1)):i.init(...arguments)}}else this[t]=function(){e[t].call(this,...arguments)}}get_shader_info(e){const t=this.info;return"*"===e?t:t[e]}}},8988:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>l});var n=i(3562),a=i(9637),s=i(5165),r=i(9495);class l{constructor(){this.leaveCallback=()=>{var e;null===(e=this.gui)||void 0===e||e.destroy(),cancelAnimationFrame(this.animationId)},this.render=()=>{this.renderer.render(this.scene,this.camera)},this.animate=e=>{this.render(e),this.animationId=requestAnimationFrame(this.animate)},this.animationId,this.scene=null,this.objects={},this.light=[],this.camera=null,this.renderer=null,this.helper=[],this.textureLoader=new n.dpR,this.fileLoader=new n.hH6,this.data={isHideHelper:"/"===window.location.pathname},this.info={name:"pixels",describe:"\u50cf\u7d20\u5904\u7406",source:"\u6781\u5ba2\u65f6\u95f4 \u8ddf\u6708\u5f71\u5b66\u53ef\u89c6\u5316",time:"2022/09/14",showPriority:55}}async init(e){this.canvasContainer=null===e||void 0===e?void 0:e.current,(0,a.e)(this.canvasContainer),this.initThree(),this.initCamera(),this.initControl(),await this.initObjects(),this.initLight(),this.initHelper(),await this.initScene(),requestAnimationFrame(this.animate)}initControl(){}initThree(){this.renderer=new n.CP7,this.renderer.setSize(this.canvasContainer.clientWidth,this.canvasContainer.clientHeight),this.canvasContainer.appendChild(this.renderer.domElement)}async initScene(){this.scene=new n.xsS,this.scene.add(...Object.values(this.objects)),this.helper.length&&this.scene.add(...this.helper),this.light.length&&this.scene.add(...this.light)}initHelper(){if(this.data.isHideHelper)return;this.gui=new s.XS;let e=new n.Rki(this.camera);this.gui.add(e,"visible").name("cameraHelper").listen(),this.helper.push(e),this.helper.forEach((e=>{e.material&&(e.material.depthTest=!1,e.renderOrder=2),void 0!==e.visible&&(e.visible=!1)}))}async initObjects(){{let e=new n._12(2,2),t=new n.jyz({uniforms:{textureUv:{value:this.textureLoader.load(r)},u_resolution:{value:new n.FM8(this.renderer.domElement.clientWidth,this.renderer.domElement.clientHeight)}},vertexShader:await this.fileLoader.loadAsync((await i(7028)(`./${this.info.name}.vert.glsl`)).default),fragmentShader:await this.fileLoader.loadAsync((await i(7063)(`./${this.info.name}.frag.glsl`)).default)}),a=new n.Kj0(e,t);this.objects.plane=a}}initCamera(){this.camera=new n.iKG,this.camera.position.set(0,0,.5),this.camera.lookAt(0,0,0)}initLight(){{let e=new n.Mig(16777215,.6);this.light.push(e)}}}},9681:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>l});var n=i(3562),a=i(9637),s=i(5165),r=i(2518);class l{constructor(){this.leaveCallback=()=>{var e;null===(e=this.gui)||void 0===e||e.destroy(),cancelAnimationFrame(this.animationId)},this.render=()=>{this.renderer.render(this.scene,this.camera)},this.animate=e=>{this.render(e),this.animationId=requestAnimationFrame(this.animate)},this.animationId,this.scene=null,this.objects={},this.light=[],this.camera=null,this.renderer=null,this.helper=[],this.fileLoader=new n.hH6,this.data={isHideHelper:"/"===window.location.pathname},this.info={name:"repeatAndRandom",describe:"\u5206\u5f62",source:"\u6781\u5ba2\u65f6\u95f4 \u8ddf\u6708\u5f71\u5b66\u53ef\u89c6\u5316",time:"2022/09/11",showPriority:55}}async init(e){this.canvasContainer=null===e||void 0===e?void 0:e.current,(0,a.e)(this.canvasContainer),this.initThree(),this.initCamera(),this.initControl(),await this.initObjects(),this.initLight(),this.initHelper(),await this.initScene(),requestAnimationFrame(this.animate)}initControl(){this.control=new r.z(this.camera,this.renderer.domElement)}initThree(){this.renderer=new n.CP7,this.renderer.setSize(this.canvasContainer.clientWidth,this.canvasContainer.clientHeight),this.canvasContainer.appendChild(this.renderer.domElement)}async initScene(){this.scene=new n.xsS,this.scene.add(...Object.values(this.objects)),this.helper.length&&this.scene.add(...this.helper),this.light.length&&this.scene.add(...this.light)}initHelper(){if(this.data.isHideHelper)return;this.gui=new s.XS;let e=new n.Rki(this.camera);this.gui.add(e,"visible").name("cameraHelper").listen(),this.helper.push(e),this.helper.forEach((e=>{e.material&&(e.material.depthTest=!1,e.renderOrder=2),void 0!==e.visible&&(e.visible=!1)}))}async initObjects(){{let e=new n._12(2,2),t=new n.jyz({vertexShader:await this.fileLoader.loadAsync((await i(7028)(`./${this.info.name}.vert.glsl`)).default),fragmentShader:await this.fileLoader.loadAsync((await i(7063)(`./${this.info.name}.frag.glsl`)).default),uniforms:{u_resolution:{value:new n.FM8(this.renderer.domElement.clientWidth,this.renderer.domElement.clientHeight)}}}),a=new n.Kj0(e,t);this.objects.plane=a}}rand(e,t){return void 0===t&&(t=e,e=0),e+(t-e)*Math.random()}initCamera(){this.camera=new n.iKG,this.camera.position.set(0,0,.5),this.camera.lookAt(0,0,0)}initLight(){{let e=new n.Mig(16777215,.6);this.light.push(e)}}}},1496:(e,t,i)=>{"use strict";i.r(t),i.d(t,{webglGuide:()=>n.default,threejs:()=>a.default,games101:()=>s.default,thebookofshaders:()=>r.default,geekbang:()=>l.default});var n=i(6033),a=i(6210),s=i(5265),r=i(4690),l=i(3037)},3756:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>r});var n=i(3562),a=i(5690),s=i(9637);async function r(e,t={}){const i=new n.xsS,r=new n.iKG,l=new n.CP7({antialias:!0}),o=new n.SUY;l.setSize(e.current.clientWidth,e.current.clientHeight);const h=new a.default(e.current);await h.add(i,"cellsVoronoi"),(0,s.e)(e.current),e.current.appendChild(l.domElement);const c=()=>{const e=requestAnimationFrame(c);this.animationId.set("cellsVoronoi",e),h.transformMaterial.uniforms.u_time.value=o.getElapsedTime(),l.render(i,r)};l.domElement.addEventListener("mousemove",(t=>{const i=t.target.getBoundingClientRect(),n=t.clientX-i.x,a=e.current.clientHeight-(t.clientY-i.y);h.transformMaterial.uniforms.u_mouse.value={x:n,y:a}})),c()}},143:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>r});var n=i(3562),a=i(5690),s=i(9637);async function r(e,t={}){const i=new n.xsS,r=new n.iKG,l=new n.CP7({antialias:!0}),o=new n.SUY;l.setSize(e.current.clientWidth,e.current.clientHeight);const h=new a.default(e.current);await h.add(i,"random"),(0,s.e)(e.current),e.current.appendChild(l.domElement);const c=()=>{const e=requestAnimationFrame(c);this.animationId.set("random",e),h.transformMaterial.uniforms.u_time.value=o.getElapsedTime(),l.render(i,r)};c()}},4690:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>o});var n=i(8941),a=i(8693),s=i(143),r=i(2501),l=i(3756);class o{constructor(){this.animationId=new Map;let e={shapes:a.default,transform:n.default,random:s.default,laveLamp:r.default,voronoiAlgorithm:l.default};for(let t of Object.keys(e))this[t]=function(){e[t].call(this,...arguments)}}get_shader_info(e){const t={transform:{name:"\u77e9\u9635\u8f6c\u6362",describe:"glsl transformation ",source:"thebookofshaders",time:"2022/01/13"},shapes:{name:"\u9020\u578b\u51fd\u6570",describe:"glsl shape functions",source:"thebookofshaders",time:"2022/01/29"},random:{name:"\u751f\u6210\u8bbe\u8ba1\uff1a2D\u968f\u673a",describe:"\u968f\u673a\u751f\u6210\u5c55\u793a\u6548\u679c",source:"thebookofshaders",time:"2022/02/08"},laveLamp:{name:"\u566a\u58f0\uff1a\u5ca9\u6d46",describe:"\u566a\u58f0\u6548\u679c",source:"thebookofshaders",time:"2022/02/10"},voronoiAlgorithm:{name:"4 cells voronoi",describe:"",source:"thebookofshaders",time:"2022/02/13"}};return"*"===e?t:t[e]}}},2501:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>r});var n=i(3562),a=i(5690),s=i(9637);async function r(e,t={}){const i=new n.xsS,r=new n.iKG,l=new n.CP7({antialias:!0}),o=new n.SUY;l.setSize(e.current.clientWidth,e.current.clientHeight);const h=new a.default(e.current);await h.add(i,"lavaLamp"),(0,s.e)(e.current),e.current.appendChild(l.domElement);const c=()=>{const e=requestAnimationFrame(c);this.animationId.set("lavaLamp",e),h.transformMaterial.uniforms.u_time.value=o.getElapsedTime(),l.render(i,r)};c()}},8693:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>r});var n=i(3562),a=i(5690),s=i(9637);async function r(e,t={}){const i=new n.xsS,r=new n.iKG,l=new n.CP7({antialias:!0});l.setSize(e.current.clientWidth,e.current.clientHeight);const o=new a.default(e.current);await o.add(i,"flower"),(0,s.e)(e.current),e.current.appendChild(l.domElement),l.render(i,r)}},8941:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>r});var n=i(3562),a=i(5690),s=i(9637);async function r(e,t={}){const i=new n.xsS,r=new n.iKG,l=new n.CP7({antialias:!0}),o=new n.SUY;l.setSize(e.current.clientWidth,e.current.clientHeight);const h=new a.default(e.current);await h.add(i,"translate"),(0,s.e)(e.current),e.current.appendChild(l.domElement);const c=()=>{const e=requestAnimationFrame(c);this.animationId.set("transform",e),h.transformMaterial.uniforms.u_time.value=o.getElapsedTime(),l.render(i,r)};c()}},5690:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>a});var n=i(3562);class a{constructor(e){this.ele=e,this.fileLoader=new n.hH6}generate(e,t={}){const i=(this[e]||this.commonShader.bind(this,e))(t);return i||(console.error(`no ${e} shape in shader/shapes`),null)}async add(e,t,i){const n=await this.generate(t,i);return n?(e.add(n),!0):(console.error(`no ${t} shape in shader/shapes`),!1)}async commonShader(e){const t=new n.BKK(2,2),a=new n.jyz({uniforms:{u_resolution:{value:{x:this.ele.clientWidth,y:this.ele.clientHeight}},u_time:{value:0},u_mouse:{value:{x:0,y:0}}},vertexShader:await this.fileLoader.loadAsync((await i(676)(`./${e}.vert.glsl`)).default),fragmentShader:await this.fileLoader.loadAsync((await i(9149)(`./${e}.frag.glsl`)).default)});this.transformMaterial=a;return new n.Kj0(t,a)}}},597:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>o});var n=i(7885),a=i(3116),s=i(8789),r=i(6057),l=i(9637);function o(e){this.canvasContainer=e.current,(0,l.e)(this.canvasContainer),this.createCanvas(this.canvasContainer.clientWidth,this.canvasContainer.clientHeight).appendCanvas().getWebglContext(),this.gl.clearColor(...n.pn),this.gl.enable(this.gl.DEPTH_TEST),this.initShader(s.Le),h.call(this);const t=new r.y;t.setScale(10,10,10),this.fillUniformData(t.elements,"u_modelMatrix",4,"Matrix");const i=new Float32Array(this.getRandomArray(4)),o=new Float32Array([55,80]),d=new Float32Array([25,65,35,1]);this.fillUniformData(i,"u_fogColor",4),this.fillUniformData(o,"u_fogDist",2),this.fillUniformData(d,"u_eye",4);const u=new r.y;u.setPerspective(30,this.ele.width/this.ele.height,1,1e3),u.lookAt(d[0],d[1],d[2],0,2,0,0,1,0),u.multiply(t),this.fillUniformData(u.elements,"u_mvpMatrix",4,"Matrix"),this.gl.clear(this.gl.DEPTH_BUFFER_BIT|this.gl.COLOR_BUFFER_BIT),this.gl.drawElements(this.gl.TRIANGLES,a.Z.indices.length,this.gl.UNSIGNED_BYTE,0),document.addEventListener("keydown",c.bind(this,o))}function h(){const e=new Float32Array(a.Z.vertex),t=e.length/a.Z.unit,i=new Uint8Array(a.Z.indices),n=new Float32Array(this.getRandomArray(4*t));this.fillShaderAttribution(e,"a_position",a.Z.unit),this.fillShaderAttribution(n,"a_color",4),this.fillElementsIndex(i)}function c(e,t){switch(t.keyCode){case 38:e[1]+=1;break;case 40:e[0]<e[1]&&(e[1]-=1)}this.fillUniformData(e,"u_fogDist",2),this.gl.clear(this.gl.DEPTH_BUFFER_BIT|this.gl.COLOR_BUFFER_BIT),this.gl.drawElements(this.gl.TRIANGLES,a.Z.indices.length,this.gl.UNSIGNED_BYTE,0)}},6033:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>u});var n=i(6418),a=i(3116);const s={vshader:"\n            attribute vec4 a_position;\n            attribute vec4 a_color;\n            varying vec4 f_color;\n            uniform mat4 u_transformMatrix;\n            void main(){\n                gl_Position = u_transformMatrix * a_position;\n                f_color = a_color;\n                gl_PointSize = 10.0;\n            }\n        ",fshader:"\n            precision mediump float;\n            varying vec4 f_color;\n            void main(){\n                gl_FragColor = f_color;\n            }\n        "};var r=i(6057),l=i(7885),o=i(9637),h=i(597),c=i(8393),d=i(2897);class u extends n.Z{constructor(...e){super(...e)}rotateCubeUseMouse(e){this.canvasContainer=e.current,(0,o.e)(this.canvasContainer),this.createCanvas(this.canvasContainer.clientWidth,this.canvasContainer.clientHeight).appendCanvas().getWebglContext(),this.gl.clearColor(...l.cn),this.gl.enable(this.gl.BLEND),this.gl.blendFunc(this.gl.SRC_ALPHA,this.gl.ONE_MINUS_CONSTANT_ALPHA),this.initShader(s),this.rotateCubeUseMouse_model();const t=new r.y;t.setPerspective(30,this.ele.width/this.ele.height,1,100),t.lookAt(6,4,6,0,0,0,0,1,0);const i=this.gl.getUniformLocation(this.gl._program,"u_transformMatrix");this.rotateCubeUseMouse_bind(t,i)}rotateCubeUseMouse_model(){const e=new Float32Array(a.Z.vertex),t=e.length/a.Z.unit,i=new Uint8Array(a.Z.indices),n=new Float32Array(this.getRandomArray(4*t));this.fillShaderAttribution(e,"a_position",a.Z.unit),this.fillShaderAttribution(n,"a_color",4),this.fillElementsIndex(i)}rotateCubeUseMouse_bind(e,t){let i=!1;const n={x:0,y:0};let s=0,l=0;const o=new r.y;this.ele.addEventListener("mousedown",(e=>{const t=e.target.getBoundingClientRect();s=e.clientX-t.x,l=e.clientY-t.y,i=!0})),this.ele.addEventListener("mouseup",(()=>{i=!1})),this.ele.addEventListener("mousemove",(e=>{if(i){const t=e.target.getBoundingClientRect(),i=e.clientX-t.x,a=e.clientY-t.y;n.y+=(i-s)/e.target.width*180,n.x+=(a-l)/e.target.height*180,n.y=Math.max(Math.min(n.y,90),-90),s=i,l=a}}));let h=function(){o.set(e),o.rotate(n.x,1,0,0),o.rotate(n.y,0,1,0),this.gl.uniformMatrix4fv(t,!1,o.elements),this.gl.clear(this.gl.DEPTH_BUFFER_BIT|this.gl.COLOR_BUFFER_BIT),this.gl.drawElements(this.gl.TRIANGLES,a.Z.indices.length,this.gl.UNSIGNED_BYTE,0),window.requestAnimationFrame(h)}.bind(this);h()}fog(){h.default.call(this,...arguments)}shadow(){d.default.call(this,...arguments)}roundedPoint(){c.default.call(this,...arguments)}get_shader_info(e){const t={rotateCubeUseMouse:{name:"\u9f20\u6807\u63a7\u5236\u6b63\u65b9\u4f53\u65cb\u8f6c",describe:"",source:"<<webgl\u7f16\u7a0b\u6307\u5357>>",time:"2021/10/07"},fog:{name:"\u96fe\u5316\u6548\u679c",describe:"\u2191\u2193:\u589e\u5927/\u51cf\u5c0f \u96fe\u5316\u7684\u8ddd\u79bb",source:"<<webgl\u7f16\u7a0b\u6307\u5357>>",time:"2021/10/31"},roundedPoint:{name:"\u5706\u70b9",describe:"\u4f7f\u7528GLSL ES\u753b\u51fa\u5706\u70b9",source:"<<webgl\u7f16\u7a0b\u6307\u5357>>",time:"2021/11/07"},shadow:{name:"\u9634\u5f71",describe:"webgl \u9634\u5f71\u6548\u679c",source:"<<webgl\u7f16\u7a0b\u6307\u5357>>",time:"2021/11/13"}};return"*"===e?t:t[e]}}},8393:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>r});var n=i(7885),a=i(8789),s=i(9637);function r(e){this.canvasContainer=e.current,(0,s.e)(this.canvasContainer),this.createCanvas(this.canvasContainer.clientWidth,this.canvasContainer.clientHeight).appendCanvas().getWebglContext(),this.gl.clearColor(...n.pn),this.gl.enable(this.gl.DEPTH_TEST),this.initShader(a.e3);const t=l.call(this);this.gl.clear(this.gl.DEPTH_BUFFER_BIT|this.gl.COLOR_BUFFER_BIT),this.gl.drawArrays(this.gl.POINTS,0,t)}function l(){const e=new Float32Array([0,0,0,0,.5,0,.5,0,0,-.5,0,0,0,-.5,0]),t=new Float32Array(this.getRandomArray(e.length/3*4));return this.fillShaderAttribution(e,"a_position",3),this.fillShaderAttribution(t,"a_color",4),e.length/3}},2897:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>l});var n=i(7885),a=i(8789),s=i(9637),r=i(6057);function l(e){this.canvasContainer=e.current,(0,s.e)(this.canvasContainer),this.createCanvas(this.canvasContainer.clientWidth,this.canvasContainer.clientHeight).appendCanvas().getWebglContext(),this.gl.clearColor(...n.cn),this.gl.enable(this.gl.DEPTH_TEST);this.createShaderProgram(a.HJ);const t=this.createShaderProgram(a.t$);this.gl.useProgram(t),this.gl._program=t;const i=h.call(this),l=new r.y;l.setPerspective(70,this.ele.width/this.ele.height,1,100),l.lookAt(0,7,2,0,0,0,0,1,0);const c=new r.y;c.setPerspective(15,this.ele.width/this.ele.height,1,100),c.lookAt(0,7,9,0,0,0,0,1,0),c.translate(0,.8,0),o.call(this,{vertexNum:i,count:0,angle:0,mvpMatrix:c}),this.gl.clear(this.gl.DEPTH_BUFFER_BIT|this.gl.COLOR_BUFFER_BIT)}function o(e){return this.gl.clear(this.gl.DEPTH_BUFFER_BIT|this.gl.COLOR_BUFFER_BIT),this.fillUniformData(new r.y(e.mvpMatrix).rotate(e.angle,0,1,0).elements,"u_mvpMatrix",4,"Matrix"),this.gl.drawArrays(this.gl.TRIANGLES,0,3),this.fillUniformData(new r.y(e.mvpMatrix).elements,"u_mvpMatrix",4,"Matrix"),this.gl.drawArrays(this.gl.TRIANGLES,3,e.vertexNum-3),e.angle+=.1,e.angle%=360,requestAnimationFrame((()=>{o.call(this,e)}))}function h(){const e=new Float32Array([0,0,0,0,0,.5,.5,0,0].concat(...[-1,-1,1,1,-1,1,1,-1,-1,-1,-1,1,-1,-1,-1,1,-1,-1])),t=new Array(24).fill(1),i=new Float32Array(this.getRandomArray(12).concat(t));return this.fillShaderAttribution(e,"a_position",3),this.fillShaderAttribution(i,"a_color",4),e.length/3}},7063:(e,t,i)=>{var n={"./pixels.frag.glsl":[6732,6732],"./repeatAndRandom.frag.glsl":[1867,1867]};function a(e){if(!i.o(n,e))return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=n[e],a=t[0];return i.e(t[1]).then((()=>i.t(a,17)))}a.keys=()=>Object.keys(n),a.id=7063,e.exports=a},7028:(e,t,i)=>{var n={"./pixels.vert.glsl":[4456,4456],"./repeatAndRandom.vert.glsl":[968,968]};function a(e){if(!i.o(n,e))return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=n[e],a=t[0];return i.e(t[1]).then((()=>i.t(a,17)))}a.keys=()=>Object.keys(n),a.id=7028,e.exports=a},9149:(e,t,i)=>{var n={"./cellsVoronoi.frag.glsl":[5248,5248],"./flower.frag.glsl":[1114,1114],"./lavaLamp.frag.glsl":[5983,5983],"./random.frag.glsl":[3772,3772],"./translate.frag.glsl":[486,486]};function a(e){if(!i.o(n,e))return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=n[e],a=t[0];return i.e(t[1]).then((()=>i.t(a,17)))}a.keys=()=>Object.keys(n),a.id=9149,e.exports=a},676:(e,t,i)=>{var n={"./cellsVoronoi.vert.glsl":[5952,5952],"./flower.vert.glsl":[9890,9890],"./lavaLamp.vert.glsl":[1430,1430],"./random.vert.glsl":[3953,8745],"./translate.vert.glsl":[3093,3093]};function a(e){if(!i.o(n,e))return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=n[e],a=t[0];return i.e(t[1]).then((()=>i.t(a,17)))}a.keys=()=>Object.keys(n),a.id=676,e.exports=a},9495:(e,t,i)=>{"use strict";e.exports=i.p+"static/media/d22c3ff49fd473b4cb6b52f036542a36.20f4924365d1d15eb2a9.webp"},7829:(e,t,i)=>{"use strict";e.exports=i.p+"static/media/bump.a12b2ddaed3526edf283.png"},6970:(e,t,i)=>{"use strict";e.exports=i.p+"static/media/displacement.f43225e3960b672ea76e.png"},3612:(e,t,i)=>{"use strict";e.exports=i.p+"static/media/phong.a0d1516d19e126dc9783.png"},5695:(e,t,i)=>{"use strict";e.exports=i.p+"static/media/texture.40b88ae6ebab68746eed.png"}}]);