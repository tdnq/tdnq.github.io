"use strict";(globalThis.webpackChunktdnq_github_io=globalThis.webpackChunktdnq_github_io||[]).push([[8297,9637],{9637:(t,e,i)=>{function a(t){var e;null===(e=t.querySelectorAll("canvas"))||void 0===e||e.forEach((t=>t.remove()))}i.d(e,{e:()=>a})},8297:(t,e,i)=>{i.r(e),i.d(e,{default:()=>r});var a=i(3562),s=i(2518),h=i(9637),n=i(5165);class r{constructor(t){this.leaveCallback=()=>{var t;null===(t=this.gui)||void 0===t||t.destroy()},this.render=t=>{this.objects.sphere.children.forEach(((e,i)=>{const s=i/this.objects.sphere.children.length,h=2e-4*t,n=h+s*Math.PI*2*(i%1?1:-1),r=1*Math.sin(h-i),o=Math.abs(Math.sin(2e-4*t+i));e.position.set(Math.cos(n)*r,a.M8C.lerp(-.5,this.data.srcSphereY[i],o),Math.sin(n)*r)})),this.renderer.render(this.scene,this.camera)},this.animate=t=>{this.render(t),this.animationId.set("shadow",requestAnimationFrame(this.animate))},this.animationId=t,this.scene=null,this.objects={},this.light=[],this.camera=null,this.renderer=null,this.helper=[],this.data={sphereRadius:.1,srcSphereY:[]}}init(t){this.canvasContainer=null===t||void 0===t?void 0:t.current,(0,h.e)(this.canvasContainer),this.initThree(),this.initCamera(),this.initLight(),this.initObjects(),this.initHelper(),this.initScene(),this.initControl(),requestAnimationFrame(this.animate)}initControl(){this.control=new s.z(this.camera,this.renderer.domElement)}initThree(){this.renderer=new a.CP7,this.renderer.shadowMap.enabled=!0,this.renderer.setSize(this.canvasContainer.clientWidth,this.canvasContainer.clientHeight),this.canvasContainer.appendChild(this.renderer.domElement)}initScene(){this.scene=new a.xsS,this.scene.add(...Object.values(this.objects)),this.scene.add(...this.helper,...this.light)}initHelper(){"/"!==window.location.pathname&&(this.gui=new n.XS)}initObjects(){{let t=new a._12(3,3),e=new a.xoR({color:16434323}),i=new a.Kj0(t,e);i.receiveShadow=!0,i.rotateX(-90*Math.PI/180),i.position.y=-.5,this.objects.ground=i}{let t=new a.xo$(this.data.sphereRadius),e=new a.ZAu;for(let i=0;i<20;i++){let i=new a.xoR({color:new a.Ilk(Math.random(),Math.random(),Math.random())}),s=new a.Kj0(t,i);s.position.set(Math.random()>.5?Math.random():-Math.random(),Math.random(),Math.random()>.5?Math.random():-Math.random()),this.data.srcSphereY.push(s.position.y),s.castShadow=!0,e.add(s)}this.objects.sphere=e}}initCamera(){this.camera=new a.cPb(60,this.canvasContainer.clientWidth/this.canvasContainer.clientHeight),this.camera.position.set(1.5,1.5,1.5),this.camera.lookAt(0,0,0)}initLight(){{let t=new a.Mig(16777215,.2);this.light.push(t)}{let t=new a.Ox3(16777130,1);t.position.set(-.1,1.2,0),t.castShadow=!0,t.shadow.mapSize.width=2048,t.shadow.mapSize.height=2048;const e=2;t.shadow.camera.left=-e,t.shadow.camera.right=e,t.shadow.camera.top=e,t.shadow.camera.bottom=-e,t.shadow.camera.near=.1,t.shadow.camera.far=2,t.shadow.bias=.001,t.shadow.radius=1,this.light.push(t)}}}}}]);