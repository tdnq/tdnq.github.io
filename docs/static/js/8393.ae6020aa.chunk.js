"use strict";(self.webpackChunktdnq_github_io=self.webpackChunktdnq_github_io||[]).push([[8393,9637],{7885:function(n,o,i){i.d(o,{pn:function(){return t},cn:function(){return r},J9:function(){return a}});var t=[0,0,0,.1],r=[0,0,0,.1],a="#d8dadd"},9637:function(n,o,i){function t(n){n.querySelectorAll("canvas").forEach((function(n){return n.remove()}))}i.d(o,{e:function(){return t}})},8393:function(n,o,i){i.r(o),i.d(o,{default:function(){return c}});var t=i(3433),r=i(7885),a=i(8789),e=i(9637);function c(n){var o;this.canvasContainer=n.current,(0,e.e)(this.canvasContainer),this.createCanvas(this.canvasContainer.clientWidth,this.canvasContainer.clientHeight).appendCanvas().getWebglContext(),(o=this.gl).clearColor.apply(o,(0,t.Z)(r.pn)),this.gl.enable(this.gl.DEPTH_TEST),this.initShader(a.e3);var i=l.call(this);this.gl.clear(this.gl.DEPTH_BUFFER_BIT|this.gl.COLOR_BUFFER_BIT),this.gl.drawArrays(this.gl.POINTS,0,i)}function l(){var n=new Float32Array([0,0,0,0,.5,0,.5,0,0,-.5,0,0,0,-.5,0]),o=new Float32Array(this.getRandomArray(n.length/3*4));return this.fillShaderAttribution(n,"a_position",3),this.fillShaderAttribution(o,"a_color",4),n.length/3}},8789:function(n,o,i){i.d(o,{Le:function(){return t},e3:function(){return r},HJ:function(){return a},t$:function(){return e}});var t={vshader:"\n            attribute vec4 a_position;\n            attribute vec4 a_color;\n            varying vec4 f_color;\n            uniform mat4 u_modelMatrix;\n            uniform vec4 u_eye;\n            uniform mat4 u_mvpMatrix; \n            varying float v_dist;\n            void main(){\n                gl_Position = u_mvpMatrix * a_position;\n                f_color = a_color;\n                v_dist = gl_Position.w;\n            }\n        ",fshader:"\n            precision mediump float;\n            varying vec4 f_color;\n            varying float v_dist;\n            uniform vec4 u_fogColor;\n            uniform vec2 u_fogDist;\n            void main(){\n                float fogFactor = clamp((u_fogDist.y - v_dist) / (u_fogDist.y - u_fogDist.x), 0.0, 1.0);\n                vec4 color = mix(u_fogColor, f_color, fogFactor);\n                gl_FragColor = color;\n            }\n        "},r={vshader:"\n            attribute vec4 a_position;\n            attribute vec4 a_color;\n            varying vec4 f_color;\n            void main(){\n                gl_Position = a_position;\n                f_color = a_color;\n                gl_PointSize = 100.0;\n            }\n        ",fshader:"\n            precision mediump float;\n            varying vec4 f_color;\n            void main(){\n                gl_FragColor = f_color;\n                float d = distance(gl_PointCoord, vec2(0.5, 0.5));\n                if(d < 0.5) {\n                        gl_FragColor = vec4(f_color); \n                     } else { discard; }\n                }\n        "},a={vshader:"\n            attribute vec4 a_position;\n            uniform mat4 u_mvpMatrix;\n            void main(){\n                gl_Position = u_mvpMatrix * a_position;\n            }\n        ",fshader:"\n            precision mediump float;\n            void main(){\n                gl_FragColor = vec4(gl_FragCoord.z, 0, 0, 0);\n            }\n        "},e={vshader:"\n        attribute vec4 a_position;\n        attribute vec4 a_color;\n        uniform mat4 u_mvpMatrix;\n        uniform mat4 u_mvpMatrixFromLight;\n        varying vec4 v_positionFromLight;\n        varying vec4 v_color;\n        void main(){\n            gl_Position = u_mvpMatrix * a_position;\n            v_positionFromLight = u_mvpMatrixFromLight * a_position;\n            v_color = a_color;\n        }\n    ",fshader:"\n        precision mediump float;\n        uniform sampler2D u_shadowMap;\n        varying vec4 v_positionFromLight;\n        varying vec4 v_color;\n        void main(){\n            vec3 shadowCoord = (v_positionFromLight.xyz / v_positionFromLight.w)/2.0 + 0.5;\n            vec4 rgbaDepth = texture2D(u_shadowMap, shadowCoord.xy);\n            float depth = rgbaDepth.r;\n            float visibility = (shadowCoord.z > depth + 0.005) ? 0.7: 1.0;\n            gl_FragColor = vec4(v_color.rgb * visibility, v_color.a);\n        }\n    "}}}]);