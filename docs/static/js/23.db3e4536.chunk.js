(this["webpackJsonptdnq.github.io"]=this["webpackJsonptdnq.github.io"]||[]).push([[23,33],{198:function(e,n,t){e.exports=t.p+"static/media/rain.f2f0f24d.png"},206:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return u}));var i=t(231),a=t.n(i),r=t(184),o=t(212),c=t(198),s=t.n(c);function u(e){var n,t,i,c,s,u,p,h=arguments;return a.a.async((function(l){for(;;)switch(l.prev=l.next){case 0:return p=function(){s.children.forEach((function(e){e.position.y-=n.speed,e.position.x+=.1,e.position.y<-t.clientHeight/2&&(e.position.y=t.clientHeight/2),e.position.x>t.clientWidth/2&&(e.position.x=-t.clientWidth/2)})),u.render(i,c),requestAnimationFrame(p)},n=h.length>1&&void 0!==h[1]?h[1]:{},n=Object(r.a)({count:1e3,baseScale:10,speed:.5},n),t=e.current,i=new o.f,(c=new o.e(100,t.clientWidth/t.clientHeight,1,1e3)).position.set(0,0,100),l.next=9,a.a.awrap(d(t,n));case 9:s=l.sent,i.add(s),(u=new o.k).setSize(t.clientWidth,t.clientHeight),t.querySelectorAll("canvas").forEach((function(e){return e.remove()})),t.appendChild(u.domElement),p();case 16:case"end":return l.stop()}}))}function d(e,n){var t,i,r,c,u,d,p,h,l,f;return a.a.async((function(w){for(;;)switch(w.prev=w.next){case 0:return t=new o.b,i=new o.i,w.next=4,a.a.awrap(i.loadAsync(s.a));case 4:for(r=w.sent,c=0;c<n.count;c++)u=new o.h({map:r}),d=new o.g(u),t.add(d),p=Math.random()*n.baseScale,d.scale.set(p,p,p),h=(Math.random()-.5)*e.clientWidth*2,l=(Math.random()-.5)*e.clientHeight,f=100*(Math.random()-.5),d.position.set(h,l,f);return w.abrupt("return",t);case 7:case"end":return w.stop()}}))}}}]);