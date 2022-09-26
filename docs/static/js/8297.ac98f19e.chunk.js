"use strict";(self.webpackChunktdnq_github_io=self.webpackChunktdnq_github_io||[]).push([[8297,9637],{9637:function(e,t,i){function n(e){var t;null===(t=e.querySelectorAll("canvas"))||void 0===t||t.forEach((function(e){return e.remove()}))}i.d(t,{e:function(){return n}})},8297:function(e,t,i){i.r(t),i.d(t,{default:function(){return d}});var n=i(3433),a=i(5671),s=i(3144),h=i(3562),r=i(2518),o=i(9637),c=i(5165),d=function(){function e(t){var i=this;(0,a.Z)(this,e),this.leaveCallback=function(){var e;null===(e=i.gui)||void 0===e||e.destroy()},this.render=function(e){i.objects.sphere.children.forEach((function(t,n){var a=n/i.objects.sphere.children.length,s=2e-4*e,r=s+a*Math.PI*2*(n%1?1:-1),o=1*Math.sin(s-n),c=Math.abs(Math.sin(2e-4*e+n));t.position.set(Math.cos(r)*o,h.M8C.lerp(-.5,i.data.srcSphereY[n],c),Math.sin(r)*o)})),i.renderer.render(i.scene,i.camera)},this.animate=function(e){i.render(e),i.animationId.set("shadow",requestAnimationFrame(i.animate))},this.animationId=t,this.scene=null,this.objects={},this.light=[],this.camera=null,this.renderer=null,this.helper=[],this.data={sphereRadius:.1,srcSphereY:[]}}return(0,s.Z)(e,[{key:"init",value:function(e){this.canvasContainer=null===e||void 0===e?void 0:e.current,(0,o.e)(this.canvasContainer),this.initThree(),this.initCamera(),this.initLight(),this.initObjects(),this.initHelper(),this.initScene(),this.initControl(),requestAnimationFrame(this.animate)}},{key:"initControl",value:function(){this.control=new r.z(this.camera,this.renderer.domElement)}},{key:"initThree",value:function(){this.renderer=new h.CP7,this.renderer.shadowMap.enabled=!0,this.renderer.setSize(this.canvasContainer.clientWidth,this.canvasContainer.clientHeight),this.canvasContainer.appendChild(this.renderer.domElement)}},{key:"initScene",value:function(){var e,t;this.scene=new h.xsS,(e=this.scene).add.apply(e,(0,n.Z)(Object.values(this.objects))),(t=this.scene).add.apply(t,(0,n.Z)(this.helper).concat((0,n.Z)(this.light)))}},{key:"initHelper",value:function(){"/"!==window.location.pathname&&(this.gui=new c.XS)}},{key:"initObjects",value:function(){var e=new h._12(3,3),t=new h.xoR({color:16434323}),i=new h.Kj0(e,t);i.receiveShadow=!0,i.rotateX(-90*Math.PI/180),i.position.y=-.5,this.objects.ground=i;for(var n=new h.xo$(this.data.sphereRadius),a=new h.ZAu,s=0;s<20;s++){var r=new h.xoR({color:new h.Ilk(Math.random(),Math.random(),Math.random())}),o=new h.Kj0(n,r);o.position.set(Math.random()>.5?Math.random():-Math.random(),Math.random(),Math.random()>.5?Math.random():-Math.random()),this.data.srcSphereY.push(o.position.y),o.castShadow=!0,a.add(o)}this.objects.sphere=a}},{key:"initCamera",value:function(){this.camera=new h.cPb(60,this.canvasContainer.clientWidth/this.canvasContainer.clientHeight),this.camera.position.set(1.5,1.5,1.5),this.camera.lookAt(0,0,0)}},{key:"initLight",value:function(){var e=new h.Mig(16777215,.2);this.light.push(e);var t=new h.Ox3(16777130,1);t.position.set(-.1,1.2,0),t.castShadow=!0,t.shadow.mapSize.width=2048,t.shadow.mapSize.height=2048;t.shadow.camera.left=-2,t.shadow.camera.right=2,t.shadow.camera.top=2,t.shadow.camera.bottom=-2,t.shadow.camera.near=.1,t.shadow.camera.far=2,t.shadow.bias=.001,t.shadow.radius=1,this.light.push(t)}}]),e}()}}]);