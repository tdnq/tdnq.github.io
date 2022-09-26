(self.webpackChunktdnq_github_io=self.webpackChunktdnq_github_io||[]).push([[9681,9637],{9637:function(e,t,n){"use strict";function i(e){var t;null===(t=e.querySelectorAll("canvas"))||void 0===t||t.forEach((function(e){return e.remove()}))}n.d(t,{e:function(){return i}})},9681:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return f}});var i=n(3433),r=n(5861),a=n(5671),s=n(3144),o=n(7757),c=n.n(o),u=n(3562),h=n(9637),l=n(5165),d=n(2518),f=function(){function e(){var t=this;(0,a.Z)(this,e),this.leaveCallback=function(){var e;null===(e=t.gui)||void 0===e||e.destroy(),cancelAnimationFrame(t.animationId)},this.render=function(){t.renderer.render(t.scene,t.camera)},this.animate=function(e){t.render(e),t.animationId=requestAnimationFrame(t.animate)},this.animationId,this.scene=null,this.objects={},this.light=[],this.camera=null,this.renderer=null,this.helper=[],this.fileLoader=new u.hH6,this.data={isHideHelper:"/"===window.location.pathname},this.info={name:"repeatAndRandom",describe:"\u5206\u5f62",source:"\u6781\u5ba2\u65f6\u95f4 \u8ddf\u6708\u5f71\u5b66\u53ef\u89c6\u5316",time:"2022/09/11",showPriority:55}}return(0,s.Z)(e,[{key:"init",value:function(){var e=(0,r.Z)(c().mark((function e(t){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.canvasContainer=null===t||void 0===t?void 0:t.current,(0,h.e)(this.canvasContainer),this.initThree(),this.initCamera(),this.initControl(),e.next=7,this.initObjects();case 7:return this.initLight(),this.initHelper(),e.next=11,this.initScene();case 11:requestAnimationFrame(this.animate);case 12:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"initControl",value:function(){this.control=new d.z(this.camera,this.renderer.domElement)}},{key:"initThree",value:function(){this.renderer=new u.CP7,this.renderer.setSize(this.canvasContainer.clientWidth,this.canvasContainer.clientHeight),this.canvasContainer.appendChild(this.renderer.domElement)}},{key:"initScene",value:function(){var e=(0,r.Z)(c().mark((function e(){var t,n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.scene=new u.xsS,(t=this.scene).add.apply(t,(0,i.Z)(Object.values(this.objects))),this.helper.length&&(n=this.scene).add.apply(n,(0,i.Z)(this.helper)),this.light.length&&(r=this.scene).add.apply(r,(0,i.Z)(this.light));case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"initHelper",value:function(){if(!this.data.isHideHelper){this.gui=new l.XS;var e=new u.Rki(this.camera);this.gui.add(e,"visible").name("cameraHelper").listen(),this.helper.push(e),this.helper.forEach((function(e){e.material&&(e.material.depthTest=!1,e.renderOrder=2),void 0!==e.visible&&(e.visible=!1)}))}}},{key:"initObjects",value:function(){var e=(0,r.Z)(c().mark((function e(){var t,i,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new u._12(2,2),e.t0=u.jyz,e.t1=this.fileLoader,e.next=5,n(7028)("./".concat(this.info.name,".vert.glsl"));case 5:return e.t2=e.sent.default,e.next=8,e.t1.loadAsync.call(e.t1,e.t2);case 8:return e.t3=e.sent,e.t4=this.fileLoader,e.next=12,n(7063)("./".concat(this.info.name,".frag.glsl"));case 12:return e.t5=e.sent.default,e.next=15,e.t4.loadAsync.call(e.t4,e.t5);case 15:e.t6=e.sent,e.t7={u_resolution:{value:new u.FM8(this.renderer.domElement.clientWidth,this.renderer.domElement.clientHeight)}},e.t8={vertexShader:e.t3,fragmentShader:e.t6,uniforms:e.t7},i=new e.t0(e.t8),r=new u.Kj0(t,i),this.objects.plane=r;case 21:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"rand",value:function(e,t){return void 0===t&&(t=e,e=0),e+(t-e)*Math.random()}},{key:"initCamera",value:function(){this.camera=new u.iKG,this.camera.position.set(0,0,.5),this.camera.lookAt(0,0,0)}},{key:"initLight",value:function(){var e=new u.Mig(16777215,.6);this.light.push(e)}}]),e}()},7063:function(e,t,n){var i={"./pixels.frag.glsl":[6732,6732],"./repeatAndRandom.frag.glsl":[1867,1867]};function r(e){if(!n.o(i,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=i[e],r=t[0];return n.e(t[1]).then((function(){return n.t(r,17)}))}r.keys=function(){return Object.keys(i)},r.id=7063,e.exports=r},7028:function(e,t,n){var i={"./pixels.vert.glsl":[4456,4456],"./repeatAndRandom.vert.glsl":[968,968]};function r(e){if(!n.o(i,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=i[e],r=t[0];return n.e(t[1]).then((function(){return n.t(r,17)}))}r.keys=function(){return Object.keys(i)},r.id=7028,e.exports=r}}]);