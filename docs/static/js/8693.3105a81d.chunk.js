(globalThis.webpackChunktdnq_github_io=globalThis.webpackChunktdnq_github_io||[]).push([[8693,9439,9637],{9637:(e,r,t)=>{"use strict";function a(e){var r;null===(r=e.querySelectorAll("canvas"))||void 0===r||r.forEach((e=>e.remove()))}t.d(r,{e:()=>a})},8693:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>s});var a=t(3562),n=t(5690),l=t(9637);async function s(e,r={}){const t=new a.xsS,s=new a.iKG,o=new a.CP7({antialias:!0});o.setSize(e.current.clientWidth,e.current.clientHeight);const i=new n.default(e.current);await i.add(t,"flower"),(0,l.e)(e.current),e.current.appendChild(o.domElement),o.render(t,s)}},5690:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>n});var a=t(3562);class n{constructor(e){this.ele=e,this.fileLoader=new a.hH6}generate(e,r={}){const t=(this[e]||this.commonShader.bind(this,e))(r);return t||(console.error(`no ${e} shape in shader/shapes`),null)}async add(e,r,t){const a=await this.generate(r,t);return a?(e.add(a),!0):(console.error(`no ${r} shape in shader/shapes`),!1)}async commonShader(e){const r=new a.BKK(2,2),n=new a.jyz({uniforms:{u_resolution:{value:{x:this.ele.clientWidth,y:this.ele.clientHeight}},u_time:{value:0},u_mouse:{value:{x:0,y:0}}},vertexShader:await this.fileLoader.loadAsync((await t(676)(`./${e}.vert.glsl`)).default),fragmentShader:await this.fileLoader.loadAsync((await t(9149)(`./${e}.frag.glsl`)).default)});this.transformMaterial=n;return new a.Kj0(r,n)}}},9149:(e,r,t)=>{var a={"./cellsVoronoi.frag.glsl":[5248,5248],"./flower.frag.glsl":[1114,1114],"./lavaLamp.frag.glsl":[5983,5983],"./random.frag.glsl":[3772,3772],"./translate.frag.glsl":[486,486]};function n(e){if(!t.o(a,e))return Promise.resolve().then((()=>{var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}));var r=a[e],n=r[0];return t.e(r[1]).then((()=>t.t(n,17)))}n.keys=()=>Object.keys(a),n.id=9149,e.exports=n},676:(e,r,t)=>{var a={"./cellsVoronoi.vert.glsl":[5952,5952],"./flower.vert.glsl":[9890,9890],"./lavaLamp.vert.glsl":[1430,1430],"./random.vert.glsl":[3953,8745],"./translate.vert.glsl":[3093,3093]};function n(e){if(!t.o(a,e))return Promise.resolve().then((()=>{var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}));var r=a[e],n=r[0];return t.e(r[1]).then((()=>t.t(n,17)))}n.keys=()=>Object.keys(a),n.id=676,e.exports=n}}]);