(window.webpackJsonp=window.webpackJsonp||[]).push([["npm._dom-align1.12.0@dom-align"],{"01ec":function(t,e,o){"use strict";function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function i(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,n)}return o}function a(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?i(o,!0).forEach((function(e){r(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):i(o).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}var f;o.d(e,"a",(function(){return at})),o.d(e,"b",(function(){return ft}));var u={Webkit:"-webkit-",Moz:"-moz-",ms:"-ms-",O:"-o-"};function l(){if(void 0!==f)return f;f="";var t=document.createElement("p").style;for(var e in u)e+"Transform"in t&&(f=e);return f}function c(){return l()?"".concat(l(),"TransitionProperty"):"transitionProperty"}function s(){return l()?"".concat(l(),"Transform"):"transform"}function p(t,e){var o=c();o&&(t.style[o]=e,"transitionProperty"!==o&&(t.style.transitionProperty=e))}function d(t,e){var o=s();o&&(t.style[o]=e,"transform"!==o&&(t.style.transform=e))}function h(t){return t.style.transitionProperty||t.style[c()]}var g,m=/matrix\((.*)\)/,v=/matrix3d\((.*)\)/;function w(t){var e=t.style.display;t.style.display="none",t.offsetHeight,t.style.display=e}function y(t,e,o){var r=o;if("object"!==n(e))return void 0!==r?("number"==typeof r&&(r="".concat(r,"px")),void(t.style[e]=r)):g(t,e);for(var i in e)e.hasOwnProperty(i)&&y(t,i,e[i])}function b(t,e){var o=t["page".concat(e?"Y":"X","Offset")],n="scroll".concat(e?"Top":"Left");if("number"!=typeof o){var r=t.document;"number"!=typeof(o=r.documentElement[n])&&(o=r.body[n])}return o}function x(t){return b(t)}function W(t){return b(t,!0)}function O(t){var e=function(t){var e,o,n,r=t.ownerDocument,i=r.body,a=r&&r.documentElement;return o=(e=t.getBoundingClientRect()).left,n=e.top,{left:o-=a.clientLeft||i.clientLeft||0,top:n-=a.clientTop||i.clientTop||0}}(t),o=t.ownerDocument,n=o.defaultView||o.parentWindow;return e.left+=x(n),e.top+=W(n),e}function P(t){return null!=t&&t==t.window}function S(t){return P(t)?t.document:9===t.nodeType?t:t.ownerDocument}var j=new RegExp("^(".concat(/[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,")(?!px)[a-z%]+$"),"i"),T=/^(top|right|bottom|left)$/,C="currentStyle",M="runtimeStyle",D="left";function H(t,e){return"left"===t?e.useCssRight?"right":t:e.useCssBottom?"bottom":t}function V(t){return"left"===t?"right":"right"===t?"left":"top"===t?"bottom":"bottom"===t?"top":void 0}function X(t,e,o){"static"===y(t,"position")&&(t.style.position="relative");var n=-999,r=-999,i=H("left",o),a=H("top",o),f=V(i),u=V(a);"left"!==i&&(n=999),"top"!==a&&(r=999);var l="",c=O(t);("left"in e||"top"in e)&&(l=h(t)||"",p(t,"none")),"left"in e&&(t.style[f]="",t.style[i]="".concat(n,"px")),"top"in e&&(t.style[u]="",t.style[a]="".concat(r,"px")),w(t);var s=O(t),d={};for(var g in e)if(e.hasOwnProperty(g)){var m=H(g,o),v="left"===g?n:r,b=c[g]-s[g];d[m]=m===g?v+b:v-b}y(t,d),w(t),("left"in e||"top"in e)&&p(t,l);var x={};for(var W in e)if(e.hasOwnProperty(W)){var P=H(W,o),S=e[W]-c[W];x[P]=W===P?d[P]+S:d[P]-S}y(t,x)}function Y(t,e){var o=O(t),n=function(t){var e=window.getComputedStyle(t,null),o=e.getPropertyValue("transform")||e.getPropertyValue(s());if(o&&"none"!==o){var n=o.replace(/[^0-9\-.,]/g,"").split(",");return{x:parseFloat(n[12]||n[4],0),y:parseFloat(n[13]||n[5],0)}}return{x:0,y:0}}(t),r={x:n.x,y:n.y};"left"in e&&(r.x=n.x+e.left-o.left),"top"in e&&(r.y=n.y+e.top-o.top),function(t,e){var o=window.getComputedStyle(t,null),n=o.getPropertyValue("transform")||o.getPropertyValue(s());if(n&&"none"!==n){var r,i=n.match(m);i?((r=(i=i[1]).split(",").map((function(t){return parseFloat(t,10)})))[4]=e.x,r[5]=e.y,d(t,"matrix(".concat(r.join(","),")"))):((r=n.match(v)[1].split(",").map((function(t){return parseFloat(t,10)})))[12]=e.x,r[13]=e.y,d(t,"matrix3d(".concat(r.join(","),")")))}else d(t,"translateX(".concat(e.x,"px) translateY(").concat(e.y,"px) translateZ(0)"))}(t,r)}function E(t,e){for(var o=0;o<t.length;o++)e(t[o])}function L(t){return"border-box"===g(t,"boxSizing")}"undefined"!=typeof window&&(g=window.getComputedStyle?function(t,e,o){var n=o,r="",i=S(t);return(n=n||i.defaultView.getComputedStyle(t,null))&&(r=n.getPropertyValue(e)||n[e]),r}:function(t,e){var o=t[C]&&t[C][e];if(j.test(o)&&!T.test(e)){var n=t.style,r=n[D],i=t[M][D];t[M][D]=t[C][D],n[D]="fontSize"===e?"1em":o||0,o=n.pixelLeft+"px",n[D]=r,t[M][D]=i}return""===o?"auto":o});var B=["margin","border","padding"];function F(t,e,o){var n,r={},i=t.style;for(n in e)e.hasOwnProperty(n)&&(r[n]=i[n],i[n]=e[n]);for(n in o.call(t),e)e.hasOwnProperty(n)&&(i[n]=r[n])}function R(t,e,o){var n,r,i,a=0;for(r=0;r<e.length;r++)if(n=e[r])for(i=0;i<o.length;i++){var f;f="border"===n?"".concat(n).concat(o[i],"Width"):n+o[i],a+=parseFloat(g(t,f))||0}return a}var k={getParent:function(t){var e=t;do{e=11===e.nodeType&&e.host?e.host:e.parentNode}while(e&&1!==e.nodeType&&9!==e.nodeType);return e}};function z(t,e,o){var n=o;if(P(t))return"width"===e?k.viewportWidth(t):k.viewportHeight(t);if(9===t.nodeType)return"width"===e?k.docWidth(t):k.docHeight(t);var r="width"===e?["Left","Right"]:["Top","Bottom"],i="width"===e?t.getBoundingClientRect().width:t.getBoundingClientRect().height,a=(g(t),L(t)),f=0;(null==i||i<=0)&&(i=void 0,(null==(f=g(t,e))||Number(f)<0)&&(f=t.style[e]||0),f=parseFloat(f)||0),void 0===n&&(n=a?1:-1);var u=void 0!==i||a,l=i||f;return-1===n?u?l-R(t,["border","padding"],r):f:u?1===n?l:l+(2===n?-R(t,["border"],r):R(t,["margin"],r)):f+R(t,B.slice(n),r)}E(["Width","Height"],(function(t){k["doc".concat(t)]=function(e){var o=e.document;return Math.max(o.documentElement["scroll".concat(t)],o.body["scroll".concat(t)],k["viewport".concat(t)](o))},k["viewport".concat(t)]=function(e){var o="client".concat(t),n=e.document,r=n.body,i=n.documentElement[o];return"CSS1Compat"===n.compatMode&&i||r&&r[o]||i}}));var A={position:"absolute",visibility:"hidden",display:"block"};function _(){for(var t=arguments.length,e=new Array(t),o=0;o<t;o++)e[o]=arguments[o];var n,r=e[0];return 0!==r.offsetWidth?n=z.apply(void 0,e):F(r,A,(function(){n=z.apply(void 0,e)})),n}function I(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o]);return t}E(["width","height"],(function(t){var e=t.charAt(0).toUpperCase()+t.slice(1);k["outer".concat(e)]=function(e,o){return e&&_(e,t,o?0:1)};var o="width"===t?["Left","Right"]:["Top","Bottom"];k[t]=function(e,n){var r=n;return void 0===r?e&&_(e,t,-1):e?(g(e),L(e)&&(r+=R(e,["padding","border"],o)),y(e,t,r)):void 0}}));var N={getWindow:function(t){if(t&&t.document&&t.setTimeout)return t;var e=t.ownerDocument||t;return e.defaultView||e.parentWindow},getDocument:S,offset:function(t,e,o){if(void 0===e)return O(t);!function(t,e,o){if(o.ignoreShake){var n=O(t),r=n.left.toFixed(0),i=n.top.toFixed(0),a=e.left.toFixed(0),f=e.top.toFixed(0);if(r===a&&i===f)return}o.useCssRight||o.useCssBottom?X(t,e,o):o.useCssTransform&&s()in document.body.style?Y(t,e):X(t,e,o)}(t,e,o||{})},isWindow:P,each:E,css:y,clone:function(t){var e,o={};for(e in t)t.hasOwnProperty(e)&&(o[e]=t[e]);if(t.overflow)for(e in t)t.hasOwnProperty(e)&&(o.overflow[e]=t.overflow[e]);return o},mix:I,getWindowScrollLeft:function(t){return x(t)},getWindowScrollTop:function(t){return W(t)},merge:function(){for(var t={},e=0;e<arguments.length;e++)N.mix(t,e<0||arguments.length<=e?void 0:arguments[e]);return t},viewportWidth:0,viewportHeight:0};I(N,k);var $=N.getParent;function J(t){if(N.isWindow(t)||9===t.nodeType)return null;var e,o=N.getDocument(t).body,n=N.css(t,"position");if(!("fixed"===n||"absolute"===n))return"html"===t.nodeName.toLowerCase()?null:$(t);for(e=$(t);e&&e!==o&&9!==e.nodeType;e=$(e))if("static"!==(n=N.css(e,"position")))return e;return null}var U=N.getParent;function Z(t,e){for(var o={left:0,right:1/0,top:0,bottom:1/0},n=J(t),r=N.getDocument(t),i=r.defaultView||r.parentWindow,a=r.body,f=r.documentElement;n;){if(-1!==navigator.userAgent.indexOf("MSIE")&&0===n.clientWidth||n===a||n===f||"visible"===N.css(n,"overflow")){if(n===a||n===f)break}else{var u=N.offset(n);u.left+=n.clientLeft,u.top+=n.clientTop,o.top=Math.max(o.top,u.top),o.right=Math.min(o.right,u.left+n.clientWidth),o.bottom=Math.min(o.bottom,u.top+n.clientHeight),o.left=Math.max(o.left,u.left)}n=J(n)}var l=null;N.isWindow(t)||9===t.nodeType||(l=t.style.position,"absolute"===N.css(t,"position")&&(t.style.position="fixed"));var c=N.getWindowScrollLeft(i),s=N.getWindowScrollTop(i),p=N.viewportWidth(i),d=N.viewportHeight(i),h=f.scrollWidth,g=f.scrollHeight,m=window.getComputedStyle(a);if("hidden"===m.overflowX&&(h=i.innerWidth),"hidden"===m.overflowY&&(g=i.innerHeight),t.style&&(t.style.position=l),e||function(t){if(N.isWindow(t)||9===t.nodeType)return!1;var e=N.getDocument(t).body,o=null;for(o=U(t);o&&o!==e;o=U(o))if("fixed"===N.css(o,"position"))return!0;return!1}(t))o.left=Math.max(o.left,c),o.top=Math.max(o.top,s),o.right=Math.min(o.right,c+p),o.bottom=Math.min(o.bottom,s+d);else{var v=Math.max(h,c+p);o.right=Math.min(o.right,v);var w=Math.max(g,s+d);o.bottom=Math.min(o.bottom,w)}return o.top>=0&&o.left>=0&&o.bottom>o.top&&o.right>o.left?o:null}function q(t){var e,o,n;if(N.isWindow(t)||9===t.nodeType){var r=N.getWindow(t);e={left:N.getWindowScrollLeft(r),top:N.getWindowScrollTop(r)},o=N.viewportWidth(r),n=N.viewportHeight(r)}else e=N.offset(t),o=N.outerWidth(t),n=N.outerHeight(t);return e.width=o,e.height=n,e}function G(t,e){var o=e.charAt(0),n=e.charAt(1),r=t.width,i=t.height,a=t.left,f=t.top;return"c"===o?f+=i/2:"b"===o&&(f+=i),"c"===n?a+=r/2:"r"===n&&(a+=r),{left:a,top:f}}function K(t,e,o,n,r){var i=G(e,o[1]),a=G(t,o[0]),f=[a.left-i.left,a.top-i.top];return{left:Math.round(t.left-f[0]+n[0]-r[0]),top:Math.round(t.top-f[1]+n[1]-r[1])}}function Q(t,e,o){return t.left<o.left||t.left+e.width>o.right}function tt(t,e,o){return t.top<o.top||t.top+e.height>o.bottom}function et(t,e,o){var n=[];return N.each(t,(function(t){n.push(t.replace(e,(function(t){return o[t]})))})),n}function ot(t,e){return t[e]=-t[e],t}function nt(t,e){return(/%$/.test(t)?parseInt(t.substring(0,t.length-1),10)/100*e:parseInt(t,10))||0}function rt(t,e){t[0]=nt(t[0],e.width),t[1]=nt(t[1],e.height)}function it(t,e,o,n){var r=o.points,i=o.offset||[0,0],a=o.targetOffset||[0,0],f=o.overflow,u=o.source||t;i=[].concat(i),a=[].concat(a);var l={},c=0,s=Z(u,!(!(f=f||{})||!f.alwaysByViewport)),p=q(u);rt(i,p),rt(a,e);var d=K(p,e,r,i,a),h=N.merge(p,d);if(s&&(f.adjustX||f.adjustY)&&n){if(f.adjustX&&Q(d,p,s)){var g=et(r,/[lr]/gi,{l:"r",r:"l"}),m=ot(i,0),v=ot(a,0);(function(t,e,o){return t.left>o.right||t.left+e.width<o.left})(K(p,e,g,m,v),p,s)||(c=1,r=g,i=m,a=v)}if(f.adjustY&&tt(d,p,s)){var w=et(r,/[tb]/gi,{t:"b",b:"t"}),y=ot(i,1),b=ot(a,1);(function(t,e,o){return t.top>o.bottom||t.top+e.height<o.top})(K(p,e,w,y,b),p,s)||(c=1,r=w,i=y,a=b)}c&&(d=K(p,e,r,i,a),N.mix(h,d));var x=Q(d,p,s),W=tt(d,p,s);if(x||W){var O=r;x&&(O=et(r,/[lr]/gi,{l:"r",r:"l"})),W&&(O=et(r,/[tb]/gi,{t:"b",b:"t"})),r=O,i=o.offset||[0,0],a=o.targetOffset||[0,0]}l.adjustX=f.adjustX&&x,l.adjustY=f.adjustY&&W,(l.adjustX||l.adjustY)&&(h=function(t,e,o,n){var r=N.clone(t),i={width:e.width,height:e.height};return n.adjustX&&r.left<o.left&&(r.left=o.left),n.resizeWidth&&r.left>=o.left&&r.left+i.width>o.right&&(i.width-=r.left+i.width-o.right),n.adjustX&&r.left+i.width>o.right&&(r.left=Math.max(o.right-i.width,o.left)),n.adjustY&&r.top<o.top&&(r.top=o.top),n.resizeHeight&&r.top>=o.top&&r.top+i.height>o.bottom&&(i.height-=r.top+i.height-o.bottom),n.adjustY&&r.top+i.height>o.bottom&&(r.top=Math.max(o.bottom-i.height,o.top)),N.mix(r,i)}(d,p,s,l))}return h.width!==p.width&&N.css(u,"width",N.width(u)+h.width-p.width),h.height!==p.height&&N.css(u,"height",N.height(u)+h.height-p.height),N.offset(u,{left:h.left,top:h.top},{useCssRight:o.useCssRight,useCssBottom:o.useCssBottom,useCssTransform:o.useCssTransform,ignoreShake:o.ignoreShake}),{points:r,offset:i,targetOffset:a,overflow:l}}function at(t,e,o){var n=o.target||e;return it(t,q(n),o,!function(t,e){var o=Z(t,e),n=q(t);return!o||n.left+n.width<=o.left||n.top+n.height<=o.top||n.left>=o.right||n.top>=o.bottom}(n,o.overflow&&o.overflow.alwaysByViewport))}function ft(t,e,o){var n,r,i=N.getDocument(t),f=i.defaultView||i.parentWindow,u=N.getWindowScrollLeft(f),l=N.getWindowScrollTop(f),c=N.viewportWidth(f),s=N.viewportHeight(f);n="pageX"in e?e.pageX:u+e.clientX,r="pageY"in e?e.pageY:l+e.clientY;var p=n>=0&&n<=u+c&&r>=0&&r<=l+s;return it(t,{left:n,top:r,width:0,height:0},a({},o,{points:[o.points[0],"cc"]}),p)}at.__getOffsetParent=J,at.__getVisibleRectForElement=Z}}]);