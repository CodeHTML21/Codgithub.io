(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2],{8418:function(e,n,t){"use strict";function r(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=[],r=!0,a=!1,o=void 0;try{for(var i,l=e[Symbol.iterator]();!(r=(i=l.next()).done)&&(t.push(i.value),!n||t.length!==n);r=!0);}catch(u){a=!0,o=u}finally{try{r||null==l.return||l.return()}finally{if(a)throw o}}return t}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}n.default=void 0;var a,o=(a=t(7294))&&a.__esModule?a:{default:a},i=t(6273),l=t(387),u=t(7190);var c={};function s(e,n,t,r){if(e&&i.isLocalURL(n)){e.prefetch(n,t,r).catch((function(e){0}));var a=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;c[n+"%"+t+(a?"%"+a:"")]=!0}}var f=function(e){var n,t=!1!==e.prefetch,a=l.useRouter(),f=o.default.useMemo((function(){var n=r(i.resolveHref(a,e.href,!0),2),t=n[0],o=n[1];return{href:t,as:e.as?i.resolveHref(a,e.as):o||t}}),[a,e.href,e.as]),d=f.href,v=f.as,p=e.children,y=e.replace,h=e.shallow,m=e.scroll,g=e.locale;"string"===typeof p&&(p=o.default.createElement("a",null,p));var w=(n=o.default.Children.only(p))&&"object"===typeof n&&n.ref,b=r(u.useIntersection({rootMargin:"200px"}),2),E=b[0],C=b[1],k=o.default.useCallback((function(e){E(e),w&&("function"===typeof w?w(e):"object"===typeof w&&(w.current=e))}),[w,E]);o.default.useEffect((function(){var e=C&&t&&i.isLocalURL(d),n="undefined"!==typeof g?g:a&&a.locale,r=c[d+"%"+v+(n?"%"+n:"")];e&&!r&&s(a,d,v,{locale:n})}),[v,d,C,g,t,a]);var x={ref:k,onClick:function(e){n.props&&"function"===typeof n.props.onClick&&n.props.onClick(e),e.defaultPrevented||function(e,n,t,r,a,o,l,u){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&i.isLocalURL(t))&&(e.preventDefault(),null==l&&r.indexOf("#")>=0&&(l=!1),n[a?"replace":"push"](t,r,{shallow:o,locale:u,scroll:l}))}(e,a,d,v,y,h,m,g)},onMouseEnter:function(e){n.props&&"function"===typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),i.isLocalURL(d)&&s(a,d,v,{priority:!0})}};if(e.passHref||"a"===n.type&&!("href"in n.props)){var L="undefined"!==typeof g?g:a&&a.locale,M=a&&a.isLocaleDomain&&i.getDomainLocale(v,L,a&&a.locales,a&&a.domainLocales);x.href=M||i.addBasePath(i.addLocale(v,L,a&&a.defaultLocale))}return o.default.cloneElement(n,x)};n.default=f},7190:function(e,n,t){"use strict";function r(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=[],r=!0,a=!1,o=void 0;try{for(var i,l=e[Symbol.iterator]();!(r=(i=l.next()).done)&&(t.push(i.value),!n||t.length!==n);r=!0);}catch(u){a=!0,o=u}finally{try{r||null==l.return||l.return()}finally{if(a)throw o}}return t}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}Object.defineProperty(n,"__esModule",{value:!0}),n.useIntersection=function(e){var n=e.rootMargin,t=e.disabled||!i,u=a.useRef(),c=r(a.useState(!1),2),s=c[0],f=c[1],d=a.useCallback((function(e){u.current&&(u.current(),u.current=void 0),t||s||e&&e.tagName&&(u.current=function(e,n,t){var r=function(e){var n=e.rootMargin||"",t=l.get(n);if(t)return t;var r=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var n=r.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return l.set(n,t={id:n,observer:a,elements:r}),t}(t),a=r.id,o=r.observer,i=r.elements;return i.set(e,n),o.observe(e),function(){i.delete(e),o.unobserve(e),0===i.size&&(o.disconnect(),l.delete(a))}}(e,(function(e){return e&&f(e)}),{rootMargin:n}))}),[t,n,s]);return a.useEffect((function(){if(!i&&!s){var e=o.requestIdleCallback((function(){return f(!0)}));return function(){return o.cancelIdleCallback(e)}}}),[s]),[d,s]};var a=t(7294),o=t(9311),i="undefined"!==typeof IntersectionObserver;var l=new Map},9008:function(e,n,t){e.exports=t(5443)},1664:function(e,n,t){e.exports=t(8418)},7005:function(e,n,t){var r=t(7294);function a(e){return e&&"object"===typeof e&&"default"in e?e:{default:e}}var o=a(r),i=function(){return(i=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var a in n=arguments[t])Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a]);return e}).apply(this,arguments)};!function(e){if(!e||"undefined"===typeof window)return;const n=document.createElement("style");n.setAttribute("type","text/css"),n.innerHTML=e,document.head.appendChild(n)}('.marquee-container {\n  overflow-x: hidden !important;\n  display: flex !important;\n  flex-direction: row !important;\n  position: relative;\n  width: 100%;\n}\n.marquee-container:hover div {\n  animation-play-state: var(--pause-on-hover);\n}\n.marquee-container:active div {\n  animation-play-state: var(--pause-on-click);\n}\n\n.overlay {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n.overlay::before, .overlay::after {\n  background: linear-gradient(to right, var(--gradient-color));\n  content: "";\n  height: 100%;\n  position: absolute;\n  width: var(--gradient-width);\n  z-index: 2;\n}\n.overlay::after {\n  right: 0;\n  top: 0;\n  transform: rotateZ(180deg);\n}\n.overlay::before {\n  left: 0;\n  top: 0;\n}\n\n.marquee {\n  flex: 0 0 auto;\n  min-width: 100%;\n  z-index: 1;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  animation: scroll var(--duration) linear var(--delay) var(--iteration-count);\n  animation-play-state: var(--play);\n  animation-delay: var(--delay);\n  animation-direction: var(--direction);\n}\n@keyframes scroll {\n  0% {\n    transform: translateX(0%);\n  }\n  100% {\n    transform: translateX(-100%);\n  }\n}');n.Z=function(e){var n,t,a,l,u=e.style,c=void 0===u?{}:u,s=e.className,f=void 0===s?"":s,d=e.play,v=void 0===d||d,p=e.pauseOnHover,y=void 0!==p&&p,h=e.pauseOnClick,m=void 0!==h&&h,g=e.direction,w=void 0===g?"left":g,b=e.speed,E=void 0===b?20:b,C=e.delay,k=void 0===C?0:C,x=e.loop,L=void 0===x?0:x,M=e.gradient,R=void 0===M||M,I=e.gradientColor,N=void 0===I?[255,255,255]:I,O=e.gradientWidth,_=void 0===O?200:O,q=e.onFinish,A=e.onCycleComplete,S=e.children,j=r.useState(0),z=j[0],H=j[1],T=r.useState(0),K=T[0],P=T[1],U=r.useState(0),B=U[0],D=U[1],F=r.useState(!1),X=F[0],Z=F[1],W=r.useRef(null),G=r.useRef(null),J=function(){G.current&&W.current&&(H(W.current.getBoundingClientRect().width),P(G.current.getBoundingClientRect().width)),D(K<z?z/E:K/E)};r.useEffect((function(){return J(),window.addEventListener("resize",J),function(){window.removeEventListener("resize",J)}})),r.useEffect((function(){Z(!0)}),[]);var Q="rgba("+N[0]+", "+N[1]+", "+N[2];return o.default.createElement(r.Fragment,null,X?o.default.createElement("div",{ref:W,style:i(i({},c),(n={},n["--pause-on-hover"]=y?"paused":"running",n["--pause-on-click"]=m?"paused":"running",n)),className:f+" marquee-container"},R&&o.default.createElement("div",{style:(t={},t["--gradient-color"]=Q+", 1), "+Q+", 0)",t["--gradient-width"]="number"===typeof _?_+"px":_,t),className:"overlay"}),o.default.createElement("div",{ref:G,style:(a={},a["--play"]=v?"running":"paused",a["--direction"]="left"===w?"normal":"reverse",a["--duration"]=B+"s",a["--delay"]=k+"s",a["--iteration-count"]=L?""+L:"infinite",a),className:"marquee",onAnimationIteration:A,onAnimationEnd:q},S),o.default.createElement("div",{style:(l={},l["--play"]=v?"running":"paused",l["--direction"]="left"===w?"normal":"reverse",l["--duration"]=B+"s",l["--delay"]=k+"s",l["--iteration-count"]=L?""+L:"infinite",l),className:"marquee"},S)):null)}}}]);