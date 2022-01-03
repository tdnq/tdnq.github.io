"use strict";(self.webpackChunktdnq_github_io=self.webpackChunktdnq_github_io||[]).push([[694,637],{7885:function(t,n,o){o.d(n,{pn:function(){return e},cn:function(){return r},J9:function(){return i}});var e=[0,0,0,.1],r=[0,0,0,.1],i="#d8dadd"},9637:function(t,n,o){function e(t){t.querySelectorAll("canvas").forEach((function(t){return t.remove()}))}o.d(n,{e:function(){return e}})},6057:function(t,n,o){o.d(n,{y:function(){return e}});var e=function(t){var n,o,e;if(t&&"object"===typeof t&&t.hasOwnProperty("elements")){for(o=t.elements,e=new Float32Array(16),n=0;n<16;++n)e[n]=o[n];this.elements=e}else this.elements=new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1])};e.prototype.setIdentity=function(){var t=this.elements;return t[0]=1,t[4]=0,t[8]=0,t[12]=0,t[1]=0,t[5]=1,t[9]=0,t[13]=0,t[2]=0,t[6]=0,t[10]=1,t[14]=0,t[3]=0,t[7]=0,t[11]=0,t[15]=1,this},e.prototype.set=function(t){var n,o,e;if((o=t.elements)!==(e=this.elements)){for(n=0;n<16;++n)e[n]=o[n];return this}},e.prototype.concat=function(t){var n,o,e,r,i,s,a,u;if(o=this.elements,e=this.elements,o===(r=t.elements))for(r=new Float32Array(16),n=0;n<16;++n)r[n]=o[n];for(n=0;n<4;n++)i=e[n],s=e[n+4],a=e[n+8],u=e[n+12],o[n]=i*r[0]+s*r[1]+a*r[2]+u*r[3],o[n+4]=i*r[4]+s*r[5]+a*r[6]+u*r[7],o[n+8]=i*r[8]+s*r[9]+a*r[10]+u*r[11],o[n+12]=i*r[12]+s*r[13]+a*r[14]+u*r[15];return this},e.prototype.multiply=e.prototype.concat,e.prototype.multiplyVector3=function(t){var n=this.elements,o=t.elements,e=new r,i=e.elements;return i[0]=o[0]*n[0]+o[1]*n[4]+o[2]*n[8]+n[12],i[1]=o[0]*n[1]+o[1]*n[5]+o[2]*n[9]+n[13],i[2]=o[0]*n[2]+o[1]*n[6]+o[2]*n[10]+n[14],e},e.prototype.multiplyVector4=function(t){var n=this.elements,o=t.elements,e=new i,r=e.elements;return r[0]=o[0]*n[0]+o[1]*n[4]+o[2]*n[8]+o[3]*n[12],r[1]=o[0]*n[1]+o[1]*n[5]+o[2]*n[9]+o[3]*n[13],r[2]=o[0]*n[2]+o[1]*n[6]+o[2]*n[10]+o[3]*n[14],r[3]=o[0]*n[3]+o[1]*n[7]+o[2]*n[11]+o[3]*n[15],e},e.prototype.transpose=function(){var t,n;return n=(t=this.elements)[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this},e.prototype.setInverseOf=function(t){var n,o,e,r,i;if(o=t.elements,e=this.elements,(r=new Float32Array(16))[0]=o[5]*o[10]*o[15]-o[5]*o[11]*o[14]-o[9]*o[6]*o[15]+o[9]*o[7]*o[14]+o[13]*o[6]*o[11]-o[13]*o[7]*o[10],r[4]=-o[4]*o[10]*o[15]+o[4]*o[11]*o[14]+o[8]*o[6]*o[15]-o[8]*o[7]*o[14]-o[12]*o[6]*o[11]+o[12]*o[7]*o[10],r[8]=o[4]*o[9]*o[15]-o[4]*o[11]*o[13]-o[8]*o[5]*o[15]+o[8]*o[7]*o[13]+o[12]*o[5]*o[11]-o[12]*o[7]*o[9],r[12]=-o[4]*o[9]*o[14]+o[4]*o[10]*o[13]+o[8]*o[5]*o[14]-o[8]*o[6]*o[13]-o[12]*o[5]*o[10]+o[12]*o[6]*o[9],r[1]=-o[1]*o[10]*o[15]+o[1]*o[11]*o[14]+o[9]*o[2]*o[15]-o[9]*o[3]*o[14]-o[13]*o[2]*o[11]+o[13]*o[3]*o[10],r[5]=o[0]*o[10]*o[15]-o[0]*o[11]*o[14]-o[8]*o[2]*o[15]+o[8]*o[3]*o[14]+o[12]*o[2]*o[11]-o[12]*o[3]*o[10],r[9]=-o[0]*o[9]*o[15]+o[0]*o[11]*o[13]+o[8]*o[1]*o[15]-o[8]*o[3]*o[13]-o[12]*o[1]*o[11]+o[12]*o[3]*o[9],r[13]=o[0]*o[9]*o[14]-o[0]*o[10]*o[13]-o[8]*o[1]*o[14]+o[8]*o[2]*o[13]+o[12]*o[1]*o[10]-o[12]*o[2]*o[9],r[2]=o[1]*o[6]*o[15]-o[1]*o[7]*o[14]-o[5]*o[2]*o[15]+o[5]*o[3]*o[14]+o[13]*o[2]*o[7]-o[13]*o[3]*o[6],r[6]=-o[0]*o[6]*o[15]+o[0]*o[7]*o[14]+o[4]*o[2]*o[15]-o[4]*o[3]*o[14]-o[12]*o[2]*o[7]+o[12]*o[3]*o[6],r[10]=o[0]*o[5]*o[15]-o[0]*o[7]*o[13]-o[4]*o[1]*o[15]+o[4]*o[3]*o[13]+o[12]*o[1]*o[7]-o[12]*o[3]*o[5],r[14]=-o[0]*o[5]*o[14]+o[0]*o[6]*o[13]+o[4]*o[1]*o[14]-o[4]*o[2]*o[13]-o[12]*o[1]*o[6]+o[12]*o[2]*o[5],r[3]=-o[1]*o[6]*o[11]+o[1]*o[7]*o[10]+o[5]*o[2]*o[11]-o[5]*o[3]*o[10]-o[9]*o[2]*o[7]+o[9]*o[3]*o[6],r[7]=o[0]*o[6]*o[11]-o[0]*o[7]*o[10]-o[4]*o[2]*o[11]+o[4]*o[3]*o[10]+o[8]*o[2]*o[7]-o[8]*o[3]*o[6],r[11]=-o[0]*o[5]*o[11]+o[0]*o[7]*o[9]+o[4]*o[1]*o[11]-o[4]*o[3]*o[9]-o[8]*o[1]*o[7]+o[8]*o[3]*o[5],r[15]=o[0]*o[5]*o[10]-o[0]*o[6]*o[9]-o[4]*o[1]*o[10]+o[4]*o[2]*o[9]+o[8]*o[1]*o[6]-o[8]*o[2]*o[5],0===(i=o[0]*r[0]+o[1]*r[4]+o[2]*r[8]+o[3]*r[12]))return this;for(i=1/i,n=0;n<16;n++)e[n]=r[n]*i;return this},e.prototype.invert=function(){return this.setInverseOf(this)},e.prototype.setOrtho=function(t,n,o,e,r,i){var s,a,u,c;if(t===n||o===e||r===i)throw"null frustum";return a=1/(n-t),u=1/(e-o),c=1/(i-r),(s=this.elements)[0]=2*a,s[1]=0,s[2]=0,s[3]=0,s[4]=0,s[5]=2*u,s[6]=0,s[7]=0,s[8]=0,s[9]=0,s[10]=-2*c,s[11]=0,s[12]=-(n+t)*a,s[13]=-(e+o)*u,s[14]=-(i+r)*c,s[15]=1,this},e.prototype.ortho=function(t,n,o,r,i,s){return this.concat((new e).setOrtho(t,n,o,r,i,s))},e.prototype.setFrustum=function(t,n,o,e,r,i){var s,a,u,c;if(t===n||e===o||r===i)throw"null frustum";if(r<=0)throw"near <= 0";if(i<=0)throw"far <= 0";return a=1/(n-t),u=1/(e-o),c=1/(i-r),(s=this.elements)[0]=2*r*a,s[1]=0,s[2]=0,s[3]=0,s[4]=0,s[5]=2*r*u,s[6]=0,s[7]=0,s[8]=(n+t)*a,s[9]=(e+o)*u,s[10]=-(i+r)*c,s[11]=-1,s[12]=0,s[13]=0,s[14]=-2*r*i*c,s[15]=0,this},e.prototype.frustum=function(t,n,o,r,i,s){return this.concat((new e).setFrustum(t,n,o,r,i,s))},e.prototype.setPerspective=function(t,n,o,e){var r,i,s,a;if(o===e||0===n)throw"null frustum";if(o<=0)throw"near <= 0";if(e<=0)throw"far <= 0";if(t=Math.PI*t/180/2,0===(s=Math.sin(t)))throw"null frustum";return i=1/(e-o),a=Math.cos(t)/s,(r=this.elements)[0]=a/n,r[1]=0,r[2]=0,r[3]=0,r[4]=0,r[5]=a,r[6]=0,r[7]=0,r[8]=0,r[9]=0,r[10]=-(e+o)*i,r[11]=-1,r[12]=0,r[13]=0,r[14]=-2*o*e*i,r[15]=0,this},e.prototype.perspective=function(t,n,o,r){return this.concat((new e).setPerspective(t,n,o,r))},e.prototype.setScale=function(t,n,o){var e=this.elements;return e[0]=t,e[4]=0,e[8]=0,e[12]=0,e[1]=0,e[5]=n,e[9]=0,e[13]=0,e[2]=0,e[6]=0,e[10]=o,e[14]=0,e[3]=0,e[7]=0,e[11]=0,e[15]=1,this},e.prototype.scale=function(t,n,o){var e=this.elements;return e[0]*=t,e[4]*=n,e[8]*=o,e[1]*=t,e[5]*=n,e[9]*=o,e[2]*=t,e[6]*=n,e[10]*=o,e[3]*=t,e[7]*=n,e[11]*=o,this},e.prototype.setTranslate=function(t,n,o){var e=this.elements;return e[0]=1,e[4]=0,e[8]=0,e[12]=t,e[1]=0,e[5]=1,e[9]=0,e[13]=n,e[2]=0,e[6]=0,e[10]=1,e[14]=o,e[3]=0,e[7]=0,e[11]=0,e[15]=1,this},e.prototype.translate=function(t,n,o){var e=this.elements;return e[12]+=e[0]*t+e[4]*n+e[8]*o,e[13]+=e[1]*t+e[5]*n+e[9]*o,e[14]+=e[2]*t+e[6]*n+e[10]*o,e[15]+=e[3]*t+e[7]*n+e[11]*o,this},e.prototype.setRotate=function(t,n,o,e){var r,i,s,a,u,c,l,f,p,v,h,m;return t=Math.PI*t/180,r=this.elements,i=Math.sin(t),s=Math.cos(t),0!==n&&0===o&&0===e?(n<0&&(i=-i),r[0]=1,r[4]=0,r[8]=0,r[12]=0,r[1]=0,r[5]=s,r[9]=-i,r[13]=0,r[2]=0,r[6]=i,r[10]=s,r[14]=0,r[3]=0,r[7]=0,r[11]=0,r[15]=1):0===n&&0!==o&&0===e?(o<0&&(i=-i),r[0]=s,r[4]=0,r[8]=i,r[12]=0,r[1]=0,r[5]=1,r[9]=0,r[13]=0,r[2]=-i,r[6]=0,r[10]=s,r[14]=0,r[3]=0,r[7]=0,r[11]=0,r[15]=1):0===n&&0===o&&0!==e?(e<0&&(i=-i),r[0]=s,r[4]=-i,r[8]=0,r[12]=0,r[1]=i,r[5]=s,r[9]=0,r[13]=0,r[2]=0,r[6]=0,r[10]=1,r[14]=0,r[3]=0,r[7]=0,r[11]=0,r[15]=1):(1!==(a=Math.sqrt(n*n+o*o+e*e))&&(n*=u=1/a,o*=u,e*=u),c=1-s,l=n*o,f=o*e,p=e*n,v=n*i,h=o*i,m=e*i,r[0]=n*n*c+s,r[1]=l*c+m,r[2]=p*c-h,r[3]=0,r[4]=l*c-m,r[5]=o*o*c+s,r[6]=f*c+v,r[7]=0,r[8]=p*c+h,r[9]=f*c-v,r[10]=e*e*c+s,r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1),this},e.prototype.rotate=function(t,n,o,r){return this.concat((new e).setRotate(t,n,o,r))},e.prototype.setLookAt=function(t,n,o,e,r,i,s,a,u){var c,l,f,p,v,h,m,_,y,d,g,w;return l=e-t,f=r-n,p=i-o,h=(f*=v=1/Math.sqrt(l*l+f*f+p*p))*u-(p*=v)*a,m=p*s-(l*=v)*u,_=l*a-f*s,d=(m*=y=1/Math.sqrt(h*h+m*m+_*_))*p-(_*=y)*f,g=_*l-(h*=y)*p,w=h*f-m*l,(c=this.elements)[0]=h,c[1]=d,c[2]=-l,c[3]=0,c[4]=m,c[5]=g,c[6]=-f,c[7]=0,c[8]=_,c[9]=w,c[10]=-p,c[11]=0,c[12]=0,c[13]=0,c[14]=0,c[15]=1,this.translate(-t,-n,-o)},e.prototype.lookAt=function(t,n,o,r,i,s,a,u,c){return this.concat((new e).setLookAt(t,n,o,r,i,s,a,u,c))},e.prototype.dropShadow=function(t,n){var o=new e,r=o.elements,i=t[0]*n[0]+t[1]*n[1]+t[2]*n[2]+t[3]*n[3];return r[0]=i-n[0]*t[0],r[1]=-n[1]*t[0],r[2]=-n[2]*t[0],r[3]=-n[3]*t[0],r[4]=-n[0]*t[1],r[5]=i-n[1]*t[1],r[6]=-n[2]*t[1],r[7]=-n[3]*t[1],r[8]=-n[0]*t[2],r[9]=-n[1]*t[2],r[10]=i-n[2]*t[2],r[11]=-n[3]*t[2],r[12]=-n[0]*t[3],r[13]=-n[1]*t[3],r[14]=-n[2]*t[3],r[15]=i-n[3]*t[3],this.concat(o)},e.prototype.dropShadowDirectionally=function(t,n,o,e,r,i,s,a,u){var c=e*t+r*n+i*o;return this.dropShadow([t,n,o,-c],[s,a,u,0])};var r=function(t){var n=new Float32Array(3);t&&"object"===typeof t&&(n[0]=t[0],n[1]=t[1],n[2]=t[2]),this.elements=n};r.prototype.normalize=function(){var t=this.elements,n=t[0],o=t[1],e=t[2],r=Math.sqrt(n*n+o*o+e*e);return r?(1==r||(r=1/r,t[0]=n*r,t[1]=o*r,t[2]=e*r),this):(t[0]=0,t[1]=0,t[2]=0,this)};var i=function(t){var n=new Float32Array(4);t&&"object"===typeof t&&(n[0]=t[0],n[1]=t[1],n[2]=t[2],n[3]=t[3]),this.elements=n}},8789:function(t,n,o){o.d(n,{Le:function(){return e},e3:function(){return r},HJ:function(){return i},t$:function(){return s}});var e={vshader:"\n            attribute vec4 a_position;\n            attribute vec4 a_color;\n            varying vec4 f_color;\n            uniform mat4 u_modelMatrix;\n            uniform vec4 u_eye;\n            uniform mat4 u_mvpMatrix; \n            varying float v_dist;\n            void main(){\n                gl_Position = u_mvpMatrix * a_position;\n                f_color = a_color;\n                v_dist = gl_Position.w;\n            }\n        ",fshader:"\n            precision mediump float;\n            varying vec4 f_color;\n            varying float v_dist;\n            uniform vec4 u_fogColor;\n            uniform vec2 u_fogDist;\n            void main(){\n                float fogFactor = clamp((u_fogDist.y - v_dist) / (u_fogDist.y - u_fogDist.x), 0.0, 1.0);\n                vec4 color = mix(u_fogColor, f_color, fogFactor);\n                gl_FragColor = color;\n            }\n        "},r={vshader:"\n            attribute vec4 a_position;\n            attribute vec4 a_color;\n            varying vec4 f_color;\n            void main(){\n                gl_Position = a_position;\n                f_color = a_color;\n                gl_PointSize = 100.0;\n            }\n        ",fshader:"\n            precision mediump float;\n            varying vec4 f_color;\n            void main(){\n                gl_FragColor = f_color;\n                float d = distance(gl_PointCoord, vec2(0.5, 0.5));\n                if(d < 0.5) {\n                        gl_FragColor = vec4(f_color); \n                     } else { discard; }\n                }\n        "},i={vshader:"\n            attribute vec4 a_position;\n            uniform mat4 u_mvpMatrix;\n            void main(){\n                gl_Position = u_mvpMatrix * a_position;\n            }\n        ",fshader:"\n            precision mediump float;\n            void main(){\n                gl_FragColor = vec4(gl_FragCoord.z, 0, 0, 0);\n            }\n        "},s={vshader:"\n        attribute vec4 a_position;\n        attribute vec4 a_color;\n        uniform mat4 u_mvpMatrix;\n        uniform mat4 u_mvpMatrixFromLight;\n        varying vec4 v_positionFromLight;\n        varying vec4 v_color;\n        void main(){\n            gl_Position = u_mvpMatrix * a_position;\n            v_positionFromLight = u_mvpMatrixFromLight * a_position;\n            v_color = a_color;\n        }\n    ",fshader:"\n        precision mediump float;\n        uniform sampler2D u_shadowMap;\n        varying vec4 v_positionFromLight;\n        varying vec4 v_color;\n        void main(){\n            vec3 shadowCoord = (v_positionFromLight.xyz / v_positionFromLight.w)/2.0 + 0.5;\n            vec4 rgbaDepth = texture2D(u_shadowMap, shadowCoord.xy);\n            float depth = rgbaDepth.r;\n            float visibility = (shadowCoord.z > depth + 0.005) ? 0.7: 1.0;\n            gl_FragColor = vec4(v_color.rgb * visibility, v_color.a);\n        }\n    "}}}]);