"use strict";(self.webpackChunktdnq_github_io=self.webpackChunktdnq_github_io||[]).push([[6033,597,2897],{3116:function(t,e){var i={vertex:[-1,-1,1,1,-1,1,1,1,1,-1,1,1,-1,-1,-1,1,-1,-1,1,1,-1,-1,1,-1],indices:[0,3,2,0,1,2,1,2,5,2,5,6,2,3,6,3,6,7,0,3,4,3,4,7,0,1,4,1,4,5,4,5,6,4,6,7],unit:3};e.Z=i},597:function(t,e,i){i.r(e),i.d(e,{default:function(){return h}});var n=i(3433),a=i(7885),r=i(3116),l=i(8789),s=i(6057),o=i(9637);function h(t){var e;this.canvasContainer=t.current,(0,o.e)(this.canvasContainer),this.createCanvas(this.canvasContainer.clientWidth,this.canvasContainer.clientHeight).appendCanvas().getWebglContext(),(e=this.gl).clearColor.apply(e,(0,n.Z)(a.pn)),this.gl.enable(this.gl.DEPTH_TEST),this.initShader(l.Le),c.call(this);var i=new s.y;i.setScale(10,10,10),this.fillUniformData(i.elements,"u_modelMatrix",4,"Matrix");var h=new Float32Array(this.getRandomArray(4)),g=new Float32Array([55,80]),d=new Float32Array([25,65,35,1]);this.fillUniformData(h,"u_fogColor",4),this.fillUniformData(g,"u_fogDist",2),this.fillUniformData(d,"u_eye",4);var f=new s.y;f.setPerspective(30,this.ele.width/this.ele.height,1,1e3),f.lookAt(d[0],d[1],d[2],0,2,0,0,1,0),f.multiply(i),this.fillUniformData(f.elements,"u_mvpMatrix",4,"Matrix"),this.gl.clear(this.gl.DEPTH_BUFFER_BIT|this.gl.COLOR_BUFFER_BIT),this.gl.drawElements(this.gl.TRIANGLES,r.Z.indices.length,this.gl.UNSIGNED_BYTE,0),document.addEventListener("keydown",u.bind(this,g))}function c(){var t=new Float32Array(r.Z.vertex),e=t.length/r.Z.unit,i=new Uint8Array(r.Z.indices),n=new Float32Array(this.getRandomArray(4*e));this.fillShaderAttribution(t,"a_position",r.Z.unit),this.fillShaderAttribution(n,"a_color",4),this.fillElementsIndex(i)}function u(t,e){switch(e.keyCode){case 38:t[1]+=1;break;case 40:t[0]<t[1]&&(t[1]-=1)}this.fillUniformData(t,"u_fogDist",2),this.gl.clear(this.gl.DEPTH_BUFFER_BIT|this.gl.COLOR_BUFFER_BIT),this.gl.drawElements(this.gl.TRIANGLES,r.Z.indices.length,this.gl.UNSIGNED_BYTE,0)}},6033:function(t,e,i){i.r(e),i.d(e,{default:function(){return m}});var n=i(3433),a=i(5671),r=i(3144),l=i(136),s=i(4062),o=i(6418),h=i(3116),c={vshader:"\n            attribute vec4 a_position;\n            attribute vec4 a_color;\n            varying vec4 f_color;\n            uniform mat4 u_transformMatrix;\n            void main(){\n                gl_Position = u_transformMatrix * a_position;\n                f_color = a_color;\n                gl_PointSize = 10.0;\n            }\n        ",fshader:"\n            precision mediump float;\n            varying vec4 f_color;\n            void main(){\n                gl_FragColor = f_color;\n            }\n        "},u=i(6057),g=i(7885),d=i(9637),f=i(597),v=i(8393),_=i(2897),m=function(t){(0,l.Z)(i,t);var e=(0,s.Z)(i);function i(){(0,a.Z)(this,i);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return e.call.apply(e,[this].concat(n))}return(0,r.Z)(i,[{key:"rotateCubeUseMouse",value:function(t){var e;this.canvasContainer=t.current,(0,d.e)(this.canvasContainer),this.createCanvas(this.canvasContainer.clientWidth,this.canvasContainer.clientHeight).appendCanvas().getWebglContext(),(e=this.gl).clearColor.apply(e,(0,n.Z)(g.cn)),this.gl.enable(this.gl.BLEND),this.gl.blendFunc(this.gl.SRC_ALPHA,this.gl.ONE_MINUS_CONSTANT_ALPHA),this.initShader(c),this.rotateCubeUseMouse_model();var i=new u.y;i.setPerspective(30,this.ele.width/this.ele.height,1,100),i.lookAt(6,4,6,0,0,0,0,1,0);var a=this.gl.getUniformLocation(this.gl._program,"u_transformMatrix");this.rotateCubeUseMouse_bind(i,a)}},{key:"rotateCubeUseMouse_model",value:function(){var t=new Float32Array(h.Z.vertex),e=t.length/h.Z.unit,i=new Uint8Array(h.Z.indices),n=new Float32Array(this.getRandomArray(4*e));this.fillShaderAttribution(t,"a_position",h.Z.unit),this.fillShaderAttribution(n,"a_color",4),this.fillElementsIndex(i)}},{key:"rotateCubeUseMouse_bind",value:function(t,e){var i=!1,n={x:0,y:0},a=0,r=0,l=new u.y;this.ele.addEventListener("mousedown",(function(t){var e=t.target.getBoundingClientRect();a=t.clientX-e.x,r=t.clientY-e.y,i=!0})),this.ele.addEventListener("mouseup",(function(){i=!1})),this.ele.addEventListener("mousemove",(function(t){if(i){var e=t.target.getBoundingClientRect(),l=t.clientX-e.x,s=t.clientY-e.y;n.y+=(l-a)/t.target.width*180,n.x+=(s-r)/t.target.height*180,n.y=Math.max(Math.min(n.y,90),-90),a=l,r=s}}));var s=function(){l.set(t),l.rotate(n.x,1,0,0),l.rotate(n.y,0,1,0),this.gl.uniformMatrix4fv(e,!1,l.elements),this.gl.clear(this.gl.DEPTH_BUFFER_BIT|this.gl.COLOR_BUFFER_BIT),this.gl.drawElements(this.gl.TRIANGLES,h.Z.indices.length,this.gl.UNSIGNED_BYTE,0),window.requestAnimationFrame(s)}.bind(this);s()}},{key:"fog",value:function(){f.default.call.apply(f.default,[this].concat(Array.prototype.slice.call(arguments)))}},{key:"shadow",value:function(){_.default.call.apply(_.default,[this].concat(Array.prototype.slice.call(arguments)))}},{key:"roundedPoint",value:function(){v.default.call.apply(v.default,[this].concat(Array.prototype.slice.call(arguments)))}},{key:"get_shader_info",value:function(t){var e={rotateCubeUseMouse:{name:"\u9f20\u6807\u63a7\u5236\u6b63\u65b9\u4f53\u65cb\u8f6c",describe:"",source:"<<webgl\u7f16\u7a0b\u6307\u5357>>",time:"2021/10/07"},fog:{name:"\u96fe\u5316\u6548\u679c",describe:"\u2191\u2193:\u589e\u5927/\u51cf\u5c0f \u96fe\u5316\u7684\u8ddd\u79bb",source:"<<webgl\u7f16\u7a0b\u6307\u5357>>",time:"2021/10/31"},roundedPoint:{name:"\u5706\u70b9",describe:"\u4f7f\u7528GLSL ES\u753b\u51fa\u5706\u70b9",source:"<<webgl\u7f16\u7a0b\u6307\u5357>>",time:"2021/11/07"},shadow:{name:"\u9634\u5f71",describe:"webgl \u9634\u5f71\u6548\u679c",source:"<<webgl\u7f16\u7a0b\u6307\u5357>>",time:"2021/11/13"}};return"*"===t?e:e[t]}}]),i}(o.Z)},8393:function(t,e,i){i.r(e),i.d(e,{default:function(){return s}});var n=i(3433),a=i(7885),r=i(8789),l=i(9637);function s(t){var e;this.canvasContainer=t.current,(0,l.e)(this.canvasContainer),this.createCanvas(this.canvasContainer.clientWidth,this.canvasContainer.clientHeight).appendCanvas().getWebglContext(),(e=this.gl).clearColor.apply(e,(0,n.Z)(a.pn)),this.gl.enable(this.gl.DEPTH_TEST),this.initShader(r.e3);var i=o.call(this);this.gl.clear(this.gl.DEPTH_BUFFER_BIT|this.gl.COLOR_BUFFER_BIT),this.gl.drawArrays(this.gl.POINTS,0,i)}function o(){var t=new Float32Array([0,0,0,0,.5,0,.5,0,0,-.5,0,0,0,-.5,0]),e=new Float32Array(this.getRandomArray(t.length/3*4));return this.fillShaderAttribution(t,"a_position",3),this.fillShaderAttribution(e,"a_color",4),t.length/3}},2897:function(t,e,i){i.r(e),i.d(e,{default:function(){return o}});var n=i(3433),a=i(7885),r=i(8789),l=i(9637),s=i(6057);function o(t){var e;this.canvasContainer=t.current,(0,l.e)(this.canvasContainer),this.createCanvas(this.canvasContainer.clientWidth,this.canvasContainer.clientHeight).appendCanvas().getWebglContext(),(e=this.gl).clearColor.apply(e,(0,n.Z)(a.cn)),this.gl.enable(this.gl.DEPTH_TEST);this.createShaderProgram(r.HJ);var i=this.createShaderProgram(r.t$);this.gl.useProgram(i),this.gl._program=i;var o=c.call(this),u=new s.y;u.setPerspective(70,this.ele.width/this.ele.height,1,100),u.lookAt(0,7,2,0,0,0,0,1,0);var g=new s.y;g.setPerspective(15,this.ele.width/this.ele.height,1,100),g.lookAt(0,7,9,0,0,0,0,1,0),g.translate(0,.8,0),h.call(this,{vertexNum:o,count:0,angle:0,mvpMatrix:g}),this.gl.clear(this.gl.DEPTH_BUFFER_BIT|this.gl.COLOR_BUFFER_BIT)}function h(t){var e=this;return this.gl.clear(this.gl.DEPTH_BUFFER_BIT|this.gl.COLOR_BUFFER_BIT),this.fillUniformData(new s.y(t.mvpMatrix).rotate(t.angle,0,1,0).elements,"u_mvpMatrix",4,"Matrix"),this.gl.drawArrays(this.gl.TRIANGLES,0,3),this.fillUniformData(new s.y(t.mvpMatrix).elements,"u_mvpMatrix",4,"Matrix"),this.gl.drawArrays(this.gl.TRIANGLES,3,t.vertexNum-3),t.angle+=.1,t.angle%=360,requestAnimationFrame((function(){h.call(e,t)}))}function c(){var t,e=[-1,-1,1,1,-1,1,1,-1,-1,-1,-1,1,-1,-1,-1,1,-1,-1],i=new Float32Array((t=[0,0,0,0,0,.5,.5,0,0]).concat.apply(t,e)),n=new Array(24).fill(1),a=new Float32Array(this.getRandomArray(12).concat(n));return this.fillShaderAttribution(i,"a_position",3),this.fillShaderAttribution(a,"a_color",4),i.length/3}}}]);