(self.webpackChunktdnq_github_io=self.webpackChunktdnq_github_io||[]).push([[143,9439,9637],{9637:function(e,t,n){"use strict";function r(e){var t;null===(t=e.querySelectorAll("canvas"))||void 0===t||t.forEach((function(e){return e.remove()}))}n.d(t,{e:function(){return r}})},143:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return c}});var r=n(5861),a=n(7757),u=n.n(a),o=n(3562),i=n(5690),s=n(9637);function c(e){return l.apply(this,arguments)}function l(){return l=(0,r.Z)(u().mark((function e(t){var n,r,a,c,l,f=this,d=arguments;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return d.length>1&&void 0!==d[1]?d[1]:{},n=new o.xsS,r=new o.iKG,a=new o.CP7({antialias:!0}),c=new o.SUY,a.setSize(t.current.clientWidth,t.current.clientHeight),l=new i.default(t.current),e.next=9,l.add(n,"random");case 9:(0,s.e)(t.current),t.current.appendChild(a.domElement),function e(){var t=requestAnimationFrame(e);f.animationId.set("random",t),l.transformMaterial.uniforms.u_time.value=c.getElapsedTime(),a.render(n,r)}();case 13:case"end":return e.stop()}}),e)}))),l.apply(this,arguments)}},5690:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return c}});var r=n(5861),a=n(5671),u=n(3144),o=n(7757),i=n.n(o),s=n(3562),c=function(){function e(t){(0,a.Z)(this,e),this.ele=t,this.fileLoader=new s.hH6}return(0,u.Z)(e,[{key:"generate",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=this[e]||this.commonShader.bind(this,e),r=n(t);return r||(console.error("no ".concat(e," shape in shader/shapes")),null)}},{key:"add",value:function(){var e=(0,r.Z)(i().mark((function e(t,n,r){var a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.generate(n,r);case 2:if(a=e.sent){e.next=6;break}return console.error("no ".concat(n," shape in shader/shapes")),e.abrupt("return",!1);case 6:return t.add(a),e.abrupt("return",!0);case 8:case"end":return e.stop()}}),e,this)})));return function(t,n,r){return e.apply(this,arguments)}}()},{key:"commonShader",value:function(){var e=(0,r.Z)(i().mark((function e(t){var r,a,u;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=new s.BKK(2,2),e.t0=s.jyz,e.t1={u_resolution:{value:{x:this.ele.clientWidth,y:this.ele.clientHeight}},u_time:{value:0},u_mouse:{value:{x:0,y:0}}},e.t2=this.fileLoader,e.next=6,n(676)("./".concat(t,".vert.glsl"));case 6:return e.t3=e.sent.default,e.next=9,e.t2.loadAsync.call(e.t2,e.t3);case 9:return e.t4=e.sent,e.t5=this.fileLoader,e.next=13,n(9149)("./".concat(t,".frag.glsl"));case 13:return e.t6=e.sent.default,e.next=16,e.t5.loadAsync.call(e.t5,e.t6);case 16:return e.t7=e.sent,e.t8={uniforms:e.t1,vertexShader:e.t4,fragmentShader:e.t7},a=new e.t0(e.t8),this.transformMaterial=a,u=new s.Kj0(r,a),e.abrupt("return",u);case 22:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),e}()},9149:function(e,t,n){var r={"./cellsVoronoi.frag.glsl":[5248,5248],"./flower.frag.glsl":[1114,1114],"./lavaLamp.frag.glsl":[5983,5983],"./random.frag.glsl":[3772,3772],"./translate.frag.glsl":[486,486]};function a(e){if(!n.o(r,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],a=t[0];return n.e(t[1]).then((function(){return n.t(a,17)}))}a.keys=function(){return Object.keys(r)},a.id=9149,e.exports=a},676:function(e,t,n){var r={"./cellsVoronoi.vert.glsl":[5952,5952],"./flower.vert.glsl":[9890,9890],"./lavaLamp.vert.glsl":[1430,1430],"./random.vert.glsl":[8745,8745],"./translate.vert.glsl":[3093,3093]};function a(e){if(!n.o(r,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],a=t[0];return n.e(t[1]).then((function(){return n.t(a,17)}))}a.keys=function(){return Object.keys(r)},a.id=676,e.exports=a}}]);