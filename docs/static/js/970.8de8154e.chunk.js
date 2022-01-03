"use strict";(self.webpackChunktdnq_github_io=self.webpackChunktdnq_github_io||[]).push([[970],{2518:function(e,t,n){n.d(t,{z:function(){return p}});var a=n(3144),i=n(5671),o=n(7326),r=n(136),s=n(4062),u=n(3864),l={type:"change"},c={type:"start"},h={type:"end"},p=function(e){(0,r.Z)(n,e);var t=(0,s.Z)(n);function n(e,a){var r;(0,i.Z)(this,n),r=t.call(this),void 0===a&&console.warn('THREE.OrbitControls: The second parameter "domElement" is now mandatory.'),a===document&&console.error('THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.'),r.object=e,r.domElement=a,r.domElement.style.touchAction="none",r.enabled=!0,r.target=new u.Pa4,r.minDistance=0,r.maxDistance=1/0,r.minZoom=0,r.maxZoom=1/0,r.minPolarAngle=0,r.maxPolarAngle=Math.PI,r.minAzimuthAngle=-1/0,r.maxAzimuthAngle=1/0,r.enableDamping=!1,r.dampingFactor=.05,r.enableZoom=!0,r.zoomSpeed=1,r.enableRotate=!0,r.rotateSpeed=1,r.enablePan=!0,r.panSpeed=1,r.screenSpacePanning=!0,r.keyPanSpeed=7,r.autoRotate=!1,r.autoRotateSpeed=2,r.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},r.mouseButtons={LEFT:u.RsA.ROTATE,MIDDLE:u.RsA.DOLLY,RIGHT:u.RsA.PAN},r.touches={ONE:u.QmN.ROTATE,TWO:u.QmN.DOLLY_PAN},r.target0=r.target.clone(),r.position0=r.object.position.clone(),r.zoom0=r.object.zoom,r._domElementKeyEvents=null,r.getPolarAngle=function(){return v.phi},r.getAzimuthalAngle=function(){return v.theta},r.getDistance=function(){return this.object.position.distanceTo(this.target)},r.listenToKeyEvents=function(e){e.addEventListener("keydown",$),this._domElementKeyEvents=e},r.saveState=function(){s.target0.copy(s.target),s.position0.copy(s.object.position),s.zoom0=s.object.zoom},r.reset=function(){s.target.copy(s.target0),s.object.position.copy(s.position0),s.object.zoom=s.zoom0,s.object.updateProjectionMatrix(),s.dispatchEvent(l),s.update(),d=p.NONE},r.update=function(){var t=new u.Pa4,n=(new u._fP).setFromUnitVectors(e.up,new u.Pa4(0,1,0)),a=n.clone().invert(),i=new u.Pa4,o=new u._fP,r=2*Math.PI;return function(){var e=s.object.position;t.copy(e).sub(s.target),t.applyQuaternion(n),v.setFromVector3(t),s.autoRotate&&d===p.NONE&&R(2*Math.PI/60/60*s.autoRotateSpeed),s.enableDamping?(v.theta+=f.theta*s.dampingFactor,v.phi+=f.phi*s.dampingFactor):(v.theta+=f.theta,v.phi+=f.phi);var u=s.minAzimuthAngle,c=s.maxAzimuthAngle;return isFinite(u)&&isFinite(c)&&(u<-Math.PI?u+=r:u>Math.PI&&(u-=r),c<-Math.PI?c+=r:c>Math.PI&&(c-=r),v.theta=u<=c?Math.max(u,Math.min(c,v.theta)):v.theta>(u+c)/2?Math.max(u,v.theta):Math.min(c,v.theta)),v.phi=Math.max(s.minPolarAngle,Math.min(s.maxPolarAngle,v.phi)),v.makeSafe(),v.radius*=g,v.radius=Math.max(s.minDistance,Math.min(s.maxDistance,v.radius)),!0===s.enableDamping?s.target.addScaledVector(b,s.dampingFactor):s.target.add(b),t.setFromSpherical(v),t.applyQuaternion(a),e.copy(s.target).add(t),s.object.lookAt(s.target),!0===s.enableDamping?(f.theta*=1-s.dampingFactor,f.phi*=1-s.dampingFactor,b.multiplyScalar(1-s.dampingFactor)):(f.set(0,0,0),b.set(0,0,0)),g=1,!!(y||i.distanceToSquared(s.object.position)>m||8*(1-o.dot(s.object.quaternion))>m)&&(s.dispatchEvent(l),i.copy(s.object.position),o.copy(s.object.quaternion),y=!1,!0)}}(),r.dispose=function(){s.domElement.removeEventListener("contextmenu",J),s.domElement.removeEventListener("pointerdown",G),s.domElement.removeEventListener("pointercancel",Q),s.domElement.removeEventListener("wheel",W),s.domElement.removeEventListener("pointermove",K),s.domElement.removeEventListener("pointerup",q),null!==s._domElementKeyEvents&&s._domElementKeyEvents.removeEventListener("keydown",$)};var s=(0,o.Z)(r),p={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},d=p.NONE,m=1e-6,v=new u.$V,f=new u.$V,g=1,b=new u.Pa4,y=!1,E=new u.FM8,x=new u.FM8,w=new u.FM8,T=new u.FM8,P=new u.FM8,k=new u.FM8,A=new u.FM8,O=new u.FM8,M=new u.FM8,N=[],F={};function L(){return Math.pow(.95,s.zoomSpeed)}function R(e){f.theta-=e}function j(e){f.phi-=e}var C=function(){var e=new u.Pa4;return function(t,n){e.setFromMatrixColumn(n,0),e.multiplyScalar(-t),b.add(e)}}(),H=function(){var e=new u.Pa4;return function(t,n){!0===s.screenSpacePanning?e.setFromMatrixColumn(n,1):(e.setFromMatrixColumn(n,0),e.crossVectors(s.object.up,e)),e.multiplyScalar(t),b.add(e)}}(),S=function(){var e=new u.Pa4;return function(t,n){var a=s.domElement;if(s.object.isPerspectiveCamera){var i=s.object.position;e.copy(i).sub(s.target);var o=e.length();o*=Math.tan(s.object.fov/2*Math.PI/180),C(2*t*o/a.clientHeight,s.object.matrix),H(2*n*o/a.clientHeight,s.object.matrix)}else s.object.isOrthographicCamera?(C(t*(s.object.right-s.object.left)/s.object.zoom/a.clientWidth,s.object.matrix),H(n*(s.object.top-s.object.bottom)/s.object.zoom/a.clientHeight,s.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),s.enablePan=!1)}}();function Z(e){s.object.isPerspectiveCamera?g/=e:s.object.isOrthographicCamera?(s.object.zoom=Math.max(s.minZoom,Math.min(s.maxZoom,s.object.zoom*e)),s.object.updateProjectionMatrix(),y=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),s.enableZoom=!1)}function I(e){s.object.isPerspectiveCamera?g*=e:s.object.isOrthographicCamera?(s.object.zoom=Math.max(s.minZoom,Math.min(s.maxZoom,s.object.zoom/e)),s.object.updateProjectionMatrix(),y=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),s.enableZoom=!1)}function z(e){E.set(e.clientX,e.clientY)}function Y(e){T.set(e.clientX,e.clientY)}function D(){if(1===N.length)E.set(N[0].pageX,N[0].pageY);else{var e=.5*(N[0].pageX+N[1].pageX),t=.5*(N[0].pageY+N[1].pageY);E.set(e,t)}}function _(){if(1===N.length)T.set(N[0].pageX,N[0].pageY);else{var e=.5*(N[0].pageX+N[1].pageX),t=.5*(N[0].pageY+N[1].pageY);T.set(e,t)}}function V(){var e=N[0].pageX-N[1].pageX,t=N[0].pageY-N[1].pageY,n=Math.sqrt(e*e+t*t);A.set(0,n)}function X(e){if(1==N.length)x.set(e.pageX,e.pageY);else{var t=ne(e),n=.5*(e.pageX+t.x),a=.5*(e.pageY+t.y);x.set(n,a)}w.subVectors(x,E).multiplyScalar(s.rotateSpeed);var i=s.domElement;R(2*Math.PI*w.x/i.clientHeight),j(2*Math.PI*w.y/i.clientHeight),E.copy(x)}function U(e){if(1===N.length)P.set(e.pageX,e.pageY);else{var t=ne(e),n=.5*(e.pageX+t.x),a=.5*(e.pageY+t.y);P.set(n,a)}k.subVectors(P,T).multiplyScalar(s.panSpeed),S(k.x,k.y),T.copy(P)}function B(e){var t=ne(e),n=e.pageX-t.x,a=e.pageY-t.y,i=Math.sqrt(n*n+a*a);O.set(0,i),M.set(0,Math.pow(O.y/A.y,s.zoomSpeed)),Z(M.y),A.copy(O)}function G(e){!1!==s.enabled&&(0===N.length&&(s.domElement.setPointerCapture(e.pointerId),s.domElement.addEventListener("pointermove",K),s.domElement.addEventListener("pointerup",q)),function(e){N.push(e)}(e),"touch"===e.pointerType?function(e){switch(te(e),N.length){case 1:switch(s.touches.ONE){case u.QmN.ROTATE:if(!1===s.enableRotate)return;D(),d=p.TOUCH_ROTATE;break;case u.QmN.PAN:if(!1===s.enablePan)return;_(),d=p.TOUCH_PAN;break;default:d=p.NONE}break;case 2:switch(s.touches.TWO){case u.QmN.DOLLY_PAN:if(!1===s.enableZoom&&!1===s.enablePan)return;s.enableZoom&&V(),s.enablePan&&_(),d=p.TOUCH_DOLLY_PAN;break;case u.QmN.DOLLY_ROTATE:if(!1===s.enableZoom&&!1===s.enableRotate)return;s.enableZoom&&V(),s.enableRotate&&D(),d=p.TOUCH_DOLLY_ROTATE;break;default:d=p.NONE}break;default:d=p.NONE}d!==p.NONE&&s.dispatchEvent(c)}(e):function(e){var t;switch(e.button){case 0:t=s.mouseButtons.LEFT;break;case 1:t=s.mouseButtons.MIDDLE;break;case 2:t=s.mouseButtons.RIGHT;break;default:t=-1}switch(t){case u.RsA.DOLLY:if(!1===s.enableZoom)return;!function(e){A.set(e.clientX,e.clientY)}(e),d=p.DOLLY;break;case u.RsA.ROTATE:if(e.ctrlKey||e.metaKey||e.shiftKey){if(!1===s.enablePan)return;Y(e),d=p.PAN}else{if(!1===s.enableRotate)return;z(e),d=p.ROTATE}break;case u.RsA.PAN:if(e.ctrlKey||e.metaKey||e.shiftKey){if(!1===s.enableRotate)return;z(e),d=p.ROTATE}else{if(!1===s.enablePan)return;Y(e),d=p.PAN}break;default:d=p.NONE}d!==p.NONE&&s.dispatchEvent(c)}(e))}function K(e){!1!==s.enabled&&("touch"===e.pointerType?function(e){switch(te(e),d){case p.TOUCH_ROTATE:if(!1===s.enableRotate)return;X(e),s.update();break;case p.TOUCH_PAN:if(!1===s.enablePan)return;U(e),s.update();break;case p.TOUCH_DOLLY_PAN:if(!1===s.enableZoom&&!1===s.enablePan)return;!function(e){s.enableZoom&&B(e),s.enablePan&&U(e)}(e),s.update();break;case p.TOUCH_DOLLY_ROTATE:if(!1===s.enableZoom&&!1===s.enableRotate)return;!function(e){s.enableZoom&&B(e),s.enableRotate&&X(e)}(e),s.update();break;default:d=p.NONE}}(e):function(e){if(!1===s.enabled)return;switch(d){case p.ROTATE:if(!1===s.enableRotate)return;!function(e){x.set(e.clientX,e.clientY),w.subVectors(x,E).multiplyScalar(s.rotateSpeed);var t=s.domElement;R(2*Math.PI*w.x/t.clientHeight),j(2*Math.PI*w.y/t.clientHeight),E.copy(x),s.update()}(e);break;case p.DOLLY:if(!1===s.enableZoom)return;!function(e){O.set(e.clientX,e.clientY),M.subVectors(O,A),M.y>0?Z(L()):M.y<0&&I(L()),A.copy(O),s.update()}(e);break;case p.PAN:if(!1===s.enablePan)return;!function(e){P.set(e.clientX,e.clientY),k.subVectors(P,T).multiplyScalar(s.panSpeed),S(k.x,k.y),T.copy(P),s.update()}(e)}}(e))}function q(e){!1!==s.enabled&&(e.pointerType,s.dispatchEvent(h),d=p.NONE,ee(e),0===N.length&&(s.domElement.releasePointerCapture(e.pointerId),s.domElement.removeEventListener("pointermove",K),s.domElement.removeEventListener("pointerup",q)))}function Q(e){ee(e)}function W(e){!1!==s.enabled&&!1!==s.enableZoom&&d===p.NONE&&(e.preventDefault(),s.dispatchEvent(c),function(e){e.deltaY<0?I(L()):e.deltaY>0&&Z(L()),s.update()}(e),s.dispatchEvent(h))}function $(e){!1!==s.enabled&&!1!==s.enablePan&&function(e){var t=!1;switch(e.code){case s.keys.UP:S(0,s.keyPanSpeed),t=!0;break;case s.keys.BOTTOM:S(0,-s.keyPanSpeed),t=!0;break;case s.keys.LEFT:S(s.keyPanSpeed,0),t=!0;break;case s.keys.RIGHT:S(-s.keyPanSpeed,0),t=!0}t&&(e.preventDefault(),s.update())}(e)}function J(e){!1!==s.enabled&&e.preventDefault()}function ee(e){delete F[e.pointerId];for(var t=0;t<N.length;t++)if(N[t].pointerId==e.pointerId)return void N.splice(t,1)}function te(e){var t=F[e.pointerId];void 0===t&&(t=new u.FM8,F[e.pointerId]=t),t.set(e.pageX,e.pageY)}function ne(e){var t=e.pointerId===N[0].pointerId?N[1]:N[0];return F[t.pointerId]}return s.domElement.addEventListener("contextmenu",J),s.domElement.addEventListener("pointerdown",G),s.domElement.addEventListener("pointercancel",Q),s.domElement.addEventListener("wheel",W,{passive:!1}),r.update(),r}return(0,a.Z)(n)}(u.pBf)},7744:function(e,t,n){n.d(t,{u:function(){return b}});var a=n(3144),i=n(5671),o=n(136),r=n(4062),s=n(3864),u=new s.Pa4,l=new s.Zzh,c=new s.JOQ,h=new s.Pa4,p=new s.CJI,d=function(){function e(){(0,i.Z)(this,e),this.tolerance=-1,this.faces=[],this.newFaces=[],this.assigned=new g,this.unassigned=new g,this.vertices=[]}return(0,a.Z)(e,[{key:"setFromPoints",value:function(e){!0!==Array.isArray(e)&&console.error("THREE.ConvexHull: Points parameter is not an array."),e.length<4&&console.error("THREE.ConvexHull: The algorithm needs at least four points."),this.makeEmpty();for(var t=0,n=e.length;t<n;t++)this.vertices.push(new f(e[t]));return this.compute(),this}},{key:"setFromObject",value:function(e){var t=[];return e.updateMatrixWorld(!0),e.traverse((function(e){var n=e.geometry;if(void 0!==n){if(n.isGeometry)return void console.error("THREE.ConvexHull no longer supports Geometry. Use THREE.BufferGeometry instead.");if(n.isBufferGeometry){var a=n.attributes.position;if(void 0!==a)for(var i=0,o=a.count;i<o;i++){var r=new s.Pa4;r.fromBufferAttribute(a,i).applyMatrix4(e.matrixWorld),t.push(r)}}}})),this.setFromPoints(t)}},{key:"containsPoint",value:function(e){for(var t=this.faces,n=0,a=t.length;n<a;n++){if(t[n].distanceToPoint(e)>this.tolerance)return!1}return!0}},{key:"intersectRay",value:function(e,t){for(var n=this.faces,a=-1/0,i=1/0,o=0,r=n.length;o<r;o++){var s=n[o],u=s.distanceToPoint(e.origin),l=s.normal.dot(e.direction);if(u>0&&l>=0)return null;var c=0!==l?-u/l:0;if(!(c<=0)&&(l>0?i=Math.min(c,i):a=Math.max(c,a),a>i))return null}return a!==-1/0?e.at(a,t):e.at(i,t),t}},{key:"intersectsRay",value:function(e){return null!==this.intersectRay(e,u)}},{key:"makeEmpty",value:function(){return this.faces=[],this.vertices=[],this}},{key:"addVertexToFace",value:function(e,t){return e.face=t,null===t.outside?this.assigned.append(e):this.assigned.insertBefore(t.outside,e),t.outside=e,this}},{key:"removeVertexFromFace",value:function(e,t){return e===t.outside&&(null!==e.next&&e.next.face===t?t.outside=e.next:t.outside=null),this.assigned.remove(e),this}},{key:"removeAllVerticesFromFace",value:function(e){if(null!==e.outside){for(var t=e.outside,n=e.outside;null!==n.next&&n.next.face===e;)n=n.next;return this.assigned.removeSubList(t,n),t.prev=n.next=null,e.outside=null,t}}},{key:"deleteFaceVertices",value:function(e,t){var n=this.removeAllVerticesFromFace(e);if(void 0!==n)if(void 0===t)this.unassigned.appendChain(n);else{var a=n;do{var i=a.next;t.distanceToPoint(a.point)>this.tolerance?this.addVertexToFace(a,t):this.unassigned.append(a),a=i}while(null!==a)}return this}},{key:"resolveUnassignedPoints",value:function(e){if(!1===this.unassigned.isEmpty()){var t=this.unassigned.first();do{for(var n=t.next,a=this.tolerance,i=null,o=0;o<e.length;o++){var r=e[o];if(0===r.mark){var s=r.distanceToPoint(t.point);if(s>a&&(a=s,i=r),a>1e3*this.tolerance)break}}null!==i&&this.addVertexToFace(t,i),t=n}while(null!==t)}return this}},{key:"computeExtremes",value:function(){for(var e=new s.Pa4,t=new s.Pa4,n=[],a=[],i=0;i<3;i++)n[i]=a[i]=this.vertices[0];e.copy(this.vertices[0].point),t.copy(this.vertices[0].point);for(var o=0,r=this.vertices.length;o<r;o++){for(var u=this.vertices[o],l=u.point,c=0;c<3;c++)l.getComponent(c)<e.getComponent(c)&&(e.setComponent(c,l.getComponent(c)),n[c]=u);for(var h=0;h<3;h++)l.getComponent(h)>t.getComponent(h)&&(t.setComponent(h,l.getComponent(h)),a[h]=u)}return this.tolerance=3*Number.EPSILON*(Math.max(Math.abs(e.x),Math.abs(t.x))+Math.max(Math.abs(e.y),Math.abs(t.y))+Math.max(Math.abs(e.z),Math.abs(t.z))),{min:n,max:a}}},{key:"computeInitialHull",value:function(){for(var e=this.vertices,t=this.computeExtremes(),n=t.min,a=t.max,i=0,o=0,r=0;r<3;r++){var s=a[r].point.getComponent(r)-n[r].point.getComponent(r);s>i&&(i=s,o=r)}var u,p,d=n[o],v=a[o];i=0,l.set(d.point,v.point);for(var f=0,g=this.vertices.length;f<g;f++){var b=e[f];if(b!==d&&b!==v){l.closestPointToPoint(b.point,!0,h);var y=h.distanceToSquared(b.point);y>i&&(i=y,u=b)}}i=-1,c.setFromCoplanarPoints(d.point,v.point,u.point);for(var E=0,x=this.vertices.length;E<x;E++){var w=e[E];if(w!==d&&w!==v&&w!==u){var T=Math.abs(c.distanceToPoint(w.point));T>i&&(i=T,p=w)}}var P=[];if(c.distanceToPoint(p.point)<0){P.push(m.create(d,v,u),m.create(p,v,d),m.create(p,u,v),m.create(p,d,u));for(var k=0;k<3;k++){var A=(k+1)%3;P[k+1].getEdge(2).setTwin(P[0].getEdge(A)),P[k+1].getEdge(1).setTwin(P[A+1].getEdge(0))}}else{P.push(m.create(d,u,v),m.create(p,d,v),m.create(p,v,u),m.create(p,u,d));for(var O=0;O<3;O++){var M=(O+1)%3;P[O+1].getEdge(2).setTwin(P[0].getEdge((3-O)%3)),P[O+1].getEdge(0).setTwin(P[M+1].getEdge(1))}}for(var N=0;N<4;N++)this.faces.push(P[N]);for(var F=0,L=e.length;F<L;F++){var R=e[F];if(R!==d&&R!==v&&R!==u&&R!==p){i=this.tolerance;for(var j=null,C=0;C<4;C++){var H=this.faces[C].distanceToPoint(R.point);H>i&&(i=H,j=this.faces[C])}null!==j&&this.addVertexToFace(R,j)}}return this}},{key:"reindexFaces",value:function(){for(var e=[],t=0;t<this.faces.length;t++){var n=this.faces[t];0===n.mark&&e.push(n)}return this.faces=e,this}},{key:"nextVertexToAdd",value:function(){if(!1===this.assigned.isEmpty()){var e,t=0,n=this.assigned.first().face,a=n.outside;do{var i=n.distanceToPoint(a.point);i>t&&(t=i,e=a),a=a.next}while(null!==a&&a.face===n);return e}}},{key:"computeHorizon",value:function(e,t,n,a){var i;this.deleteFaceVertices(n),n.mark=1,i=null===t?t=n.getEdge(0):t.next;do{var o=i.twin,r=o.face;0===r.mark&&(r.distanceToPoint(e)>this.tolerance?this.computeHorizon(e,o,r,a):a.push(i)),i=i.next}while(i!==t);return this}},{key:"addAdjoiningFace",value:function(e,t){var n=m.create(e,t.tail(),t.head());return this.faces.push(n),n.getEdge(-1).setTwin(t.twin),n.getEdge(0)}},{key:"addNewFaces",value:function(e,t){this.newFaces=[];for(var n=null,a=null,i=0;i<t.length;i++){var o=t[i],r=this.addAdjoiningFace(e,o);null===n?n=r:r.next.setTwin(a),this.newFaces.push(r.face),a=r}return n.next.setTwin(a),this}},{key:"addVertexToHull",value:function(e){var t=[];return this.unassigned.clear(),this.removeVertexFromFace(e,e.face),this.computeHorizon(e.point,null,e.face,t),this.addNewFaces(e,t),this.resolveUnassignedPoints(this.newFaces),this}},{key:"cleanup",value:function(){return this.assigned.clear(),this.unassigned.clear(),this.newFaces=[],this}},{key:"compute",value:function(){var e;for(this.computeInitialHull();void 0!==(e=this.nextVertexToAdd());)this.addVertexToHull(e);return this.reindexFaces(),this.cleanup(),this}}]),e}(),m=function(){function e(){(0,i.Z)(this,e),this.normal=new s.Pa4,this.midpoint=new s.Pa4,this.area=0,this.constant=0,this.outside=null,this.mark=0,this.edge=null}return(0,a.Z)(e,[{key:"getEdge",value:function(e){for(var t=this.edge;e>0;)t=t.next,e--;for(;e<0;)t=t.prev,e++;return t}},{key:"compute",value:function(){var e=this.edge.tail(),t=this.edge.head(),n=this.edge.next.head();return p.set(e.point,t.point,n.point),p.getNormal(this.normal),p.getMidpoint(this.midpoint),this.area=p.getArea(),this.constant=this.normal.dot(this.midpoint),this}},{key:"distanceToPoint",value:function(e){return this.normal.dot(e)-this.constant}}],[{key:"create",value:function(t,n,a){var i=new e,o=new v(t,i),r=new v(n,i),s=new v(a,i);return o.next=s.prev=r,r.next=o.prev=s,s.next=r.prev=o,i.edge=o,i.compute()}}]),e}(),v=function(){function e(t,n){(0,i.Z)(this,e),this.vertex=t,this.prev=null,this.next=null,this.twin=null,this.face=n}return(0,a.Z)(e,[{key:"head",value:function(){return this.vertex}},{key:"tail",value:function(){return this.prev?this.prev.vertex:null}},{key:"length",value:function(){var e=this.head(),t=this.tail();return null!==t?t.point.distanceTo(e.point):-1}},{key:"lengthSquared",value:function(){var e=this.head(),t=this.tail();return null!==t?t.point.distanceToSquared(e.point):-1}},{key:"setTwin",value:function(e){return this.twin=e,e.twin=this,this}}]),e}(),f=(0,a.Z)((function e(t){(0,i.Z)(this,e),this.point=t,this.prev=null,this.next=null,this.face=null})),g=function(){function e(){(0,i.Z)(this,e),this.head=null,this.tail=null}return(0,a.Z)(e,[{key:"first",value:function(){return this.head}},{key:"last",value:function(){return this.tail}},{key:"clear",value:function(){return this.head=this.tail=null,this}},{key:"insertBefore",value:function(e,t){return t.prev=e.prev,t.next=e,null===t.prev?this.head=t:t.prev.next=t,e.prev=t,this}},{key:"insertAfter",value:function(e,t){return t.prev=e,t.next=e.next,null===t.next?this.tail=t:t.next.prev=t,e.next=t,this}},{key:"append",value:function(e){return null===this.head?this.head=e:this.tail.next=e,e.prev=this.tail,e.next=null,this.tail=e,this}},{key:"appendChain",value:function(e){for(null===this.head?this.head=e:this.tail.next=e,e.prev=this.tail;null!==e.next;)e=e.next;return this.tail=e,this}},{key:"remove",value:function(e){return null===e.prev?this.head=e.next:e.prev.next=e.next,null===e.next?this.tail=e.prev:e.next.prev=e.prev,this}},{key:"removeSubList",value:function(e,t){return null===e.prev?this.head=t.next:e.prev.next=t.next,null===t.next?this.tail=e.prev:t.next.prev=e.prev,this}},{key:"isEmpty",value:function(){return null===this.head}}]),e}(),b=function(e){(0,o.Z)(n,e);var t=(0,r.Z)(n);function n(e){var a;(0,i.Z)(this,n),a=t.call(this);var o=[],r=[];void 0===d&&console.error("THREE.ConvexBufferGeometry: ConvexBufferGeometry relies on ConvexHull");for(var u=(new d).setFromPoints(e).faces,l=0;l<u.length;l++){var c=u[l],h=c.edge;do{var p=h.head().point;o.push(p.x,p.y,p.z),r.push(c.normal.x,c.normal.y,c.normal.z),h=h.next}while(h!==c.edge)}return a.setAttribute("position",new s.a$l(o,3)),a.setAttribute("normal",new s.a$l(r,3)),a}return(0,a.Z)(n)}(s.u9r)},9737:function(e,t,n){n.d(t,{$1:function(){return i}});var a=n(3864);function i(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e-4;t=Math.max(t,Number.EPSILON);for(var n={},i=e.getIndex(),o=e.getAttribute("position"),r=i?i.count:o.count,s=0,u=Object.keys(e.attributes),l={},c={},h=[],p=["getX","getY","getZ","getW"],d=0,m=u.length;d<m;d++){var v=u[d];l[v]=[];var f=e.morphAttributes[v];f&&(c[v]=new Array(f.length).fill().map((function(){return[]})))}for(var g=Math.log10(1/t),b=Math.pow(10,g),y=0;y<r;y++){for(var E=i?i.getX(y):y,x="",w=0,T=u.length;w<T;w++)for(var P=u[w],k=e.getAttribute(P),A=k.itemSize,O=0;O<A;O++)x+="".concat(~~(k[p[O]](E)*b),",");if(x in n)h.push(n[x]);else{for(var M=0,N=u.length;M<N;M++)for(var F=u[M],L=e.getAttribute(F),R=e.morphAttributes[F],j=L.itemSize,C=l[F],H=c[F],S=0;S<j;S++){var Z=p[S];if(C.push(L[Z](E)),R)for(var I=0,z=R.length;I<z;I++)H[I].push(R[I][Z](E))}n[x]=s,h.push(s),s++}}for(var Y=e.clone(),D=0,_=u.length;D<_;D++){var V=u[D],X=e.getAttribute(V),U=new X.array.constructor(l[V]),B=new a.TlE(U,X.itemSize,X.normalized);if(Y.setAttribute(V,B),V in c)for(var G=0;G<c[V].length;G++){var K=e.morphAttributes[V][G],q=new K.array.constructor(c[V][G]),Q=new a.TlE(q,K.itemSize,K.normalized);Y.morphAttributes[V][G]=Q}}return Y.setIndex(h),Y}}}]);