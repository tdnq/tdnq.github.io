(this["webpackJsonptdnq.github.io"]=this["webpackJsonptdnq.github.io"]||[]).push([[3,4,5],{167:function(t,e,n){"use strict";n.r(e);var r=n(8),i=n(12),o=n(18),s=n(17),a=n(19),u=n(64),l={vertex:[-.8,-.8,.8,.8,-.8,.8,.8,.8,.8,-.8,.8,.8,-.8,-.8,-.8,.8,-.8,-.8,.8,.8,-.8,-.8,.8,-.8],indices:[0,3,2,0,1,2,1,2,5,2,5,6,2,3,6,3,6,7,0,3,4,3,4,7,0,1,4,1,4,5,4,5,6,4,6,7],unit:3},h=n(93),c=function(t){var e,n,r;if(t&&"object"===typeof t&&t.hasOwnProperty("elements")){for(n=t.elements,r=new Float32Array(16),e=0;e<16;++e)r[e]=n[e];this.elements=r}else this.elements=new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1])};c.prototype.setIdentity=function(){var t=this.elements;return t[0]=1,t[4]=0,t[8]=0,t[12]=0,t[1]=0,t[5]=1,t[9]=0,t[13]=0,t[2]=0,t[6]=0,t[10]=1,t[14]=0,t[3]=0,t[7]=0,t[11]=0,t[15]=1,this},c.prototype.set=function(t){var e,n,r;if((n=t.elements)!==(r=this.elements)){for(e=0;e<16;++e)r[e]=n[e];return this}},c.prototype.concat=function(t){var e,n,r,i,o,s,a,u;if(n=this.elements,r=this.elements,n===(i=t.elements))for(i=new Float32Array(16),e=0;e<16;++e)i[e]=n[e];for(e=0;e<4;e++)o=r[e],s=r[e+4],a=r[e+8],u=r[e+12],n[e]=o*i[0]+s*i[1]+a*i[2]+u*i[3],n[e+4]=o*i[4]+s*i[5]+a*i[6]+u*i[7],n[e+8]=o*i[8]+s*i[9]+a*i[10]+u*i[11],n[e+12]=o*i[12]+s*i[13]+a*i[14]+u*i[15];return this},c.prototype.multiply=c.prototype.concat,c.prototype.multiplyVector3=function(t){var e=this.elements,n=t.elements,r=new f,i=r.elements;return i[0]=n[0]*e[0]+n[1]*e[4]+n[2]*e[8]+e[12],i[1]=n[0]*e[1]+n[1]*e[5]+n[2]*e[9]+e[13],i[2]=n[0]*e[2]+n[1]*e[6]+n[2]*e[10]+e[14],r},c.prototype.multiplyVector4=function(t){var e=this.elements,n=t.elements,r=new p,i=r.elements;return i[0]=n[0]*e[0]+n[1]*e[4]+n[2]*e[8]+n[3]*e[12],i[1]=n[0]*e[1]+n[1]*e[5]+n[2]*e[9]+n[3]*e[13],i[2]=n[0]*e[2]+n[1]*e[6]+n[2]*e[10]+n[3]*e[14],i[3]=n[0]*e[3]+n[1]*e[7]+n[2]*e[11]+n[3]*e[15],r},c.prototype.transpose=function(){var t,e;return e=(t=this.elements)[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this},c.prototype.setInverseOf=function(t){var e,n,r,i,o;if(n=t.elements,r=this.elements,(i=new Float32Array(16))[0]=n[5]*n[10]*n[15]-n[5]*n[11]*n[14]-n[9]*n[6]*n[15]+n[9]*n[7]*n[14]+n[13]*n[6]*n[11]-n[13]*n[7]*n[10],i[4]=-n[4]*n[10]*n[15]+n[4]*n[11]*n[14]+n[8]*n[6]*n[15]-n[8]*n[7]*n[14]-n[12]*n[6]*n[11]+n[12]*n[7]*n[10],i[8]=n[4]*n[9]*n[15]-n[4]*n[11]*n[13]-n[8]*n[5]*n[15]+n[8]*n[7]*n[13]+n[12]*n[5]*n[11]-n[12]*n[7]*n[9],i[12]=-n[4]*n[9]*n[14]+n[4]*n[10]*n[13]+n[8]*n[5]*n[14]-n[8]*n[6]*n[13]-n[12]*n[5]*n[10]+n[12]*n[6]*n[9],i[1]=-n[1]*n[10]*n[15]+n[1]*n[11]*n[14]+n[9]*n[2]*n[15]-n[9]*n[3]*n[14]-n[13]*n[2]*n[11]+n[13]*n[3]*n[10],i[5]=n[0]*n[10]*n[15]-n[0]*n[11]*n[14]-n[8]*n[2]*n[15]+n[8]*n[3]*n[14]+n[12]*n[2]*n[11]-n[12]*n[3]*n[10],i[9]=-n[0]*n[9]*n[15]+n[0]*n[11]*n[13]+n[8]*n[1]*n[15]-n[8]*n[3]*n[13]-n[12]*n[1]*n[11]+n[12]*n[3]*n[9],i[13]=n[0]*n[9]*n[14]-n[0]*n[10]*n[13]-n[8]*n[1]*n[14]+n[8]*n[2]*n[13]+n[12]*n[1]*n[10]-n[12]*n[2]*n[9],i[2]=n[1]*n[6]*n[15]-n[1]*n[7]*n[14]-n[5]*n[2]*n[15]+n[5]*n[3]*n[14]+n[13]*n[2]*n[7]-n[13]*n[3]*n[6],i[6]=-n[0]*n[6]*n[15]+n[0]*n[7]*n[14]+n[4]*n[2]*n[15]-n[4]*n[3]*n[14]-n[12]*n[2]*n[7]+n[12]*n[3]*n[6],i[10]=n[0]*n[5]*n[15]-n[0]*n[7]*n[13]-n[4]*n[1]*n[15]+n[4]*n[3]*n[13]+n[12]*n[1]*n[7]-n[12]*n[3]*n[5],i[14]=-n[0]*n[5]*n[14]+n[0]*n[6]*n[13]+n[4]*n[1]*n[14]-n[4]*n[2]*n[13]-n[12]*n[1]*n[6]+n[12]*n[2]*n[5],i[3]=-n[1]*n[6]*n[11]+n[1]*n[7]*n[10]+n[5]*n[2]*n[11]-n[5]*n[3]*n[10]-n[9]*n[2]*n[7]+n[9]*n[3]*n[6],i[7]=n[0]*n[6]*n[11]-n[0]*n[7]*n[10]-n[4]*n[2]*n[11]+n[4]*n[3]*n[10]+n[8]*n[2]*n[7]-n[8]*n[3]*n[6],i[11]=-n[0]*n[5]*n[11]+n[0]*n[7]*n[9]+n[4]*n[1]*n[11]-n[4]*n[3]*n[9]-n[8]*n[1]*n[7]+n[8]*n[3]*n[5],i[15]=n[0]*n[5]*n[10]-n[0]*n[6]*n[9]-n[4]*n[1]*n[10]+n[4]*n[2]*n[9]+n[8]*n[1]*n[6]-n[8]*n[2]*n[5],0===(o=n[0]*i[0]+n[1]*i[4]+n[2]*i[8]+n[3]*i[12]))return this;for(o=1/o,e=0;e<16;e++)r[e]=i[e]*o;return this},c.prototype.invert=function(){return this.setInverseOf(this)},c.prototype.setOrtho=function(t,e,n,r,i,o){var s,a,u,l;if(t===e||n===r||i===o)throw"null frustum";return a=1/(e-t),u=1/(r-n),l=1/(o-i),(s=this.elements)[0]=2*a,s[1]=0,s[2]=0,s[3]=0,s[4]=0,s[5]=2*u,s[6]=0,s[7]=0,s[8]=0,s[9]=0,s[10]=-2*l,s[11]=0,s[12]=-(e+t)*a,s[13]=-(r+n)*u,s[14]=-(o+i)*l,s[15]=1,this},c.prototype.ortho=function(t,e,n,r,i,o){return this.concat((new c).setOrtho(t,e,n,r,i,o))},c.prototype.setFrustum=function(t,e,n,r,i,o){var s,a,u,l;if(t===e||r===n||i===o)throw"null frustum";if(i<=0)throw"near <= 0";if(o<=0)throw"far <= 0";return a=1/(e-t),u=1/(r-n),l=1/(o-i),(s=this.elements)[0]=2*i*a,s[1]=0,s[2]=0,s[3]=0,s[4]=0,s[5]=2*i*u,s[6]=0,s[7]=0,s[8]=(e+t)*a,s[9]=(r+n)*u,s[10]=-(o+i)*l,s[11]=-1,s[12]=0,s[13]=0,s[14]=-2*i*o*l,s[15]=0,this},c.prototype.frustum=function(t,e,n,r,i,o){return this.concat((new c).setFrustum(t,e,n,r,i,o))},c.prototype.setPerspective=function(t,e,n,r){var i,o,s,a;if(n===r||0===e)throw"null frustum";if(n<=0)throw"near <= 0";if(r<=0)throw"far <= 0";if(t=Math.PI*t/180/2,0===(s=Math.sin(t)))throw"null frustum";return o=1/(r-n),a=Math.cos(t)/s,(i=this.elements)[0]=a/e,i[1]=0,i[2]=0,i[3]=0,i[4]=0,i[5]=a,i[6]=0,i[7]=0,i[8]=0,i[9]=0,i[10]=-(r+n)*o,i[11]=-1,i[12]=0,i[13]=0,i[14]=-2*n*r*o,i[15]=0,this},c.prototype.perspective=function(t,e,n,r){return this.concat((new c).setPerspective(t,e,n,r))},c.prototype.setScale=function(t,e,n){var r=this.elements;return r[0]=t,r[4]=0,r[8]=0,r[12]=0,r[1]=0,r[5]=e,r[9]=0,r[13]=0,r[2]=0,r[6]=0,r[10]=n,r[14]=0,r[3]=0,r[7]=0,r[11]=0,r[15]=1,this},c.prototype.scale=function(t,e,n){var r=this.elements;return r[0]*=t,r[4]*=e,r[8]*=n,r[1]*=t,r[5]*=e,r[9]*=n,r[2]*=t,r[6]*=e,r[10]*=n,r[3]*=t,r[7]*=e,r[11]*=n,this},c.prototype.setTranslate=function(t,e,n){var r=this.elements;return r[0]=1,r[4]=0,r[8]=0,r[12]=t,r[1]=0,r[5]=1,r[9]=0,r[13]=e,r[2]=0,r[6]=0,r[10]=1,r[14]=n,r[3]=0,r[7]=0,r[11]=0,r[15]=1,this},c.prototype.translate=function(t,e,n){var r=this.elements;return r[12]+=r[0]*t+r[4]*e+r[8]*n,r[13]+=r[1]*t+r[5]*e+r[9]*n,r[14]+=r[2]*t+r[6]*e+r[10]*n,r[15]+=r[3]*t+r[7]*e+r[11]*n,this},c.prototype.setRotate=function(t,e,n,r){var i,o,s,a,u,l,h,c,f,p,m,v;return t=Math.PI*t/180,i=this.elements,o=Math.sin(t),s=Math.cos(t),0!==e&&0===n&&0===r?(e<0&&(o=-o),i[0]=1,i[4]=0,i[8]=0,i[12]=0,i[1]=0,i[5]=s,i[9]=-o,i[13]=0,i[2]=0,i[6]=o,i[10]=s,i[14]=0,i[3]=0,i[7]=0,i[11]=0,i[15]=1):0===e&&0!==n&&0===r?(n<0&&(o=-o),i[0]=s,i[4]=0,i[8]=o,i[12]=0,i[1]=0,i[5]=1,i[9]=0,i[13]=0,i[2]=-o,i[6]=0,i[10]=s,i[14]=0,i[3]=0,i[7]=0,i[11]=0,i[15]=1):0===e&&0===n&&0!==r?(r<0&&(o=-o),i[0]=s,i[4]=-o,i[8]=0,i[12]=0,i[1]=o,i[5]=s,i[9]=0,i[13]=0,i[2]=0,i[6]=0,i[10]=1,i[14]=0,i[3]=0,i[7]=0,i[11]=0,i[15]=1):(1!==(a=Math.sqrt(e*e+n*n+r*r))&&(e*=u=1/a,n*=u,r*=u),l=1-s,h=e*n,c=n*r,f=r*e,p=e*o,m=n*o,v=r*o,i[0]=e*e*l+s,i[1]=h*l+v,i[2]=f*l-m,i[3]=0,i[4]=h*l-v,i[5]=n*n*l+s,i[6]=c*l+p,i[7]=0,i[8]=f*l+m,i[9]=c*l-p,i[10]=r*r*l+s,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1),this},c.prototype.rotate=function(t,e,n,r){return this.concat((new c).setRotate(t,e,n,r))},c.prototype.setLookAt=function(t,e,n,r,i,o,s,a,u){var l,h,c,f,p,m,v,y,d,w,g,b;return h=r-t,c=i-e,f=o-n,m=(c*=p=1/Math.sqrt(h*h+c*c+f*f))*u-(f*=p)*a,v=f*s-(h*=p)*u,y=h*a-c*s,w=(v*=d=1/Math.sqrt(m*m+v*v+y*y))*f-(y*=d)*c,g=y*h-(m*=d)*f,b=m*c-v*h,(l=this.elements)[0]=m,l[1]=w,l[2]=-h,l[3]=0,l[4]=v,l[5]=g,l[6]=-c,l[7]=0,l[8]=y,l[9]=b,l[10]=-f,l[11]=0,l[12]=0,l[13]=0,l[14]=0,l[15]=1,this.translate(-t,-e,-n)},c.prototype.lookAt=function(t,e,n,r,i,o,s,a,u){return this.concat((new c).setLookAt(t,e,n,r,i,o,s,a,u))},c.prototype.dropShadow=function(t,e){var n=new c,r=n.elements,i=t[0]*e[0]+t[1]*e[1]+t[2]*e[2]+t[3]*e[3];return r[0]=i-e[0]*t[0],r[1]=-e[1]*t[0],r[2]=-e[2]*t[0],r[3]=-e[3]*t[0],r[4]=-e[0]*t[1],r[5]=i-e[1]*t[1],r[6]=-e[2]*t[1],r[7]=-e[3]*t[1],r[8]=-e[0]*t[2],r[9]=-e[1]*t[2],r[10]=i-e[2]*t[2],r[11]=-e[3]*t[2],r[12]=-e[0]*t[3],r[13]=-e[1]*t[3],r[14]=-e[2]*t[3],r[15]=i-e[3]*t[3],this.concat(n)},c.prototype.dropShadowDirectionally=function(t,e,n,r,i,o,s,a,u){var l=r*t+i*e+o*n;return this.dropShadow([t,e,n,-l],[s,a,u,0])};var f=function(t){var e=new Float32Array(3);t&&"object"===typeof t&&(e[0]=t[0],e[1]=t[1],e[2]=t[2]),this.elements=e};f.prototype.normalize=function(){var t=this.elements,e=t[0],n=t[1],r=t[2],i=Math.sqrt(e*e+n*n+r*r);return i?1==i?this:(i=1/i,t[0]=e*i,t[1]=n*i,t[2]=r*i,this):(t[0]=0,t[1]=0,t[2]=0,this)};var p=function(t){var e=new Float32Array(4);t&&"object"===typeof t&&(e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3]),this.elements=e};n.d(e,"default",(function(){return m}));var m=function(t){function e(){var t;Object(r.a)(this,e);for(var n=arguments.length,i=new Array(n),a=0;a<n;a++)i[a]=arguments[a];return Object(o.a)(this,(t=Object(s.a)(e)).call.apply(t,[this].concat(i)))}return Object(a.a)(e,t),Object(i.a)(e,[{key:"rotateCubeUseMouse",value:function(t){this.canvasContainer=t.current,this.createCanvas(this.canvasContainer.clientWidth,this.canvasContainer.clientHeight).appendCanvas().getWebglContext(),this.gl.clearColor(1,1,1,.1),this.gl.enable(this.gl.DEPTH_TEST),this.initShader(h.a),this.rotateCubeUseMouse_model();var e=new c;e.setPerspective(30,this.ele.width/this.ele.height,1,100),e.lookAt(6,4,6,0,0,0,0,1,0);var n=this.gl.getUniformLocation(this.gl._program,"u_transformMatrix");this.rotateCubeUseMouse_bind(e,n)}},{key:"rotateCubeUseMouse_model",value:function(){var t=new Float32Array(l.vertex),e=t.length/l.unit,n=new Uint8Array(l.indices),r=new Float32Array(this.getRandomArray(4*e));this.fillShaderAttribution(t,"a_position",l.unit),this.fillShaderAttribution(r,"a_color",4),this.fillElementsIndex(n)}},{key:"rotateCubeUseMouse_bind",value:function(t,e){var n=!1,r={x:0,y:0},i=0,o=0,s=new c;this.ele.addEventListener("mousedown",(function(t){var e=t.target.getBoundingClientRect();i=t.clientX-e.x,o=t.clientY-e.y,n=!0})),this.ele.addEventListener("mouseup",(function(){n=!1})),this.ele.addEventListener("mousemove",(function(t){if(n){var e=t.target.getBoundingClientRect(),s=t.clientX-e.x,a=t.clientY-e.y;r.y+=(s-i)/t.target.width*180,r.x+=(a-o)/t.target.height*180,r.y=Math.max(Math.min(r.y,90),-90),i=s,o=a}}));var a=function(){s.set(t),s.rotate(r.x,1,0,0),s.rotate(r.y,0,1,0),this.gl.uniformMatrix4fv(e,!1,s.elements),this.gl.clear(this.gl.DEPTH_BUFFER_BIT|this.gl.COLOR_BUFFER_BIT),this.gl.drawElements(this.gl.TRIANGLES,l.indices.length,this.gl.UNSIGNED_BYTE,0),window.requestAnimationFrame(a)}.bind(this);a()}},{key:"get_shader_info",value:function(t){var e={rotateCubeUseMouse:{name:"\u9f20\u6807\u63a7\u5236\u6b63\u65b9\u4f53\u65cb\u8f6c",describe:"",source:"<<webgl\u7f16\u7a0b\u6307\u5357>>",time:"2021/10/07"}};switch(t){case"*":return e;default:return e[t]}}}]),e}(u.a)},168:function(t,e,n){"use strict";n.r(e);var r=n(167);e.default={webglGuide:r.default}},43:function(t,e,n){"use strict";n.r(e);n(169);var r=n(171),i=(n(170),n(172)),o=(n(178),n(26)),s=(n(193),n(191)),a=n(0),u=n.n(a),l=n(192),h=n(8),c=n(18),f=n(17),p=n(19),m=(n(64).a,n(33)),v=n(168);n.d(e,"default",(function(){return d}));var y=s.a.Meta;function d(){u.a.createRef();var t=function(){for(var t=[],e=0,n=Object.keys(v.default);e<n.length;e++)for(var r=n[e],i=new v.default[r],o=i.get_shader_info("*"),s=0,a=Object.keys(o);s<a.length;s++){var u=a[s];t.push({drawName:u,sourceClass:r,info:o[u],draw:i[u].bind(i)})}return t}(),e=[];return u.a.useEffect((function(){e.forEach((function(t){t.fn(t.ref)}))}),[]),u.a.createElement(r.a,{justify:"center",type:"flex",style:{paddingTop:"32px",height:"100%"}},u.a.createElement(i.a,{xl:{span:16},lg:{span:18},xs:{span:24}},t.map((function(t,n){var r=u.a.createRef();return e.push({fn:t.draw,ref:r}),u.a.createElement(s.a,{hoverable:!0,style:{width:320},cover:u.a.createElement("div",{ref:r,style:{height:"240px"}}),key:t.sourceClass+t.drawName},u.a.createElement(y,{description:u.a.createElement(m.b,{to:"/shader/".concat(t.sourceClass,"/").concat(t.drawName)},"go",u.a.createElement(o.a,{type:"arrow-right"})),title:t.info.name}))}))))}}}]);
//# sourceMappingURL=3.d48820b6.chunk.js.map