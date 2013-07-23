var k=!0,q=null,v=!1;if(/^u/.test(typeof define)){var K={};this.define=function(y,w){K[y]=w()};this.require=function(y){return K[y]}}define("minified",function(){function y(a){return a!=q?""+a:""}function w(a){return"string"==typeof a}function p(a){return"function"==typeof a&&!a.item}function x(a){return a&&a.nodeType}function s(a){return a&&a.length!=q&&!w(a)&&!x(a)&&!p(a)}function Q(a){return a}function z(a,b){for(var c in a)a.hasOwnProperty(c)&&b(c,a[c]);return a}function f(a,b){for(var c=0;a&&c<a.length;c++)b(a[c],c);return a}function E(a,b){var c=[],d=p(b)?b:function(a){return b!=a};f(a,function(a,b){d(a,b)&&c.push(a)});return c}function A(a,b){var c=[];f(a,function(a,e){s(a=b(a,e))?f(a,function(a){c.push(a)}):a!=q&&c.push(a)});return c}function m(a,b,c){return y(a).replace(b,c||"")}function B(a){return parseFloat(m(a,/^[^\d-]+/))}function I(a){return a.minified=a.minified||++R}function L(a,b){function c(a){if(x(a)&&!e[j=I(a)])d.push(a),e[j]=k}var d=[],e={},j;f(a,function(a){a=b(a);s(a)?f(a,c):c(a)});return d}function M(a){var b={$position:"absolute",$visibility:"hidden",$display:"block",$height:q},c=a.get(b);a.set(b);b=a.get("$height",k);a.set(c);return b}function N(a){a()}function O(a){F?F.push(a):r.setTimeout(a,0)}function P(a,b,c,d){return function(){var e=l(C.createElement(a));s(b)||"object"!=typeof b?e.add(b):e.set(b).add(c);d&&d(e);return e}}function G(){function a(a,e){b==q&&(b=a,c=e,r.setTimeout(function(){f(d,N)},0))}var b,c=[],d=[],e=a.then=function(a,e){function g(){try{var d=b?a:e;if(p(d)){var g=d.apply(q,c);g&&p(g.then)?g.then(function(a){n(k,[a])},function(a){n(v,[a])}):n(k,[g])}else n(b,c)}catch(f){n(v,[f])}}var n=G();b!=q?r.setTimeout(g,0):d.push(g);return n};a.always=function(a){return e(a,a)};a.error=function(a){return e(0,a)};return a}function l(a,b,c){return p(a)?O(a):new u(H(a,b,c))}function H(a,b,c){function d(a){a=function g(a){return s(a)?A(a,g):a}(a);return e?E(a,function(a){for(;a=a.parentNode;){if(a===e)return k;if(c)return v}}):a}var e;if(b&&1!=(b=H(b)).length)return L(b,function(b){return H(a,b,c)});e=b&&b[0];if(!w(a))return d(s(a)?a:[a]);b=(e||C).querySelectorAll(a);return e?d(b):b}function J(a){var b;if(p(a))return a;if(!a||w(a)&&("*"==a||(b=/^([\w-]*)\.([\w-]+)$/.exec(a))||(b=/^([\w-]+)$/.exec(a)))){var c=b&&b[1]&&RegExp(b[1],"i"),d=b&&b[2]&&RegExp("\\b"+b[2]+"\\b","i");return function(a){return 1==x(a)&&(!c||c.test(a.nodeName))&&(!d||d.test(a.className))}}var e={};l(a).each(function(a){e[I(a)]=k});return function(a){return e[I(a)]}}function u(a){for(var b=this.length=a.length,c=0;c<b;c++)this[c]=a[c]}var r=this,C=document,R=1,F=[],D=[],S=r.requestAnimationFrame||function(a){r.setTimeout(a,33)};z({each:function(a){return f(this,a)},filter:function(a){return new u(E(this,a))},collect:function(a){return new u(A(this,a))},sub:function(a,b){var c=0>a?this.length+a:a,d=0<=b?b:this.length+(b||0);return new u(E(this,function(a,b){return b>=c&&b<d}))},find:function(a){for(var b,c=p(a)?a:function(b,c){if(a===b)return c},d=0;d<this.length;d++)if((b=c(this[d],d))!=q)return b},remove:function(){f(this,function(a){a.parentNode.removeChild(a)})},text:function(){function a(b){var c=x(b);return 1==c?A(b.childNodes,a):5>c?b.data:q}return A(this,a).join("")},trav:function(a,b,c){var d=J("number"==typeof b?q:b),e="number"==typeof b?b:c||1e9;return new u(L(this,function(b){for(var c=[];(b=b[a])&&9!=b.nodeType&&c.length<e;)d(b)&&c.push(b);return c}))},select:function(a,b){return l(a,this,b)},is:function(a){var b=J(a);return!this.find(function(a){if(!b(a))return k})},only:function(a){return this.filter(J(a))},get:function(a,b){var c=this,d=c[0];if(d){if(w(a)){var e=m(m(a,/^%/,"data-"),/^[$@]/),j;j="$"==a?d.className:"$$"==a?d.getAttribute("style"):/\$\$/.test(a)&&("hidden"==d.style.visibility||"none"==d.style.display)?0:"$$fade"==a?isNaN(j=B(d.style.opacity))?1:j:"$$slide"==a?c.get("$height"):/^\$/.test(a)?r.getComputedStyle(d,q).getPropertyValue(m(e,/[A-Z]/g,function(a){return"-"+a.toLowerCase()})):/^[@%]/.test(a)?d.getAttribute(e):d[e];return b?B(j):j}var h={};(s(a)?f:z)(a,function(a){h[a]=c.get(a,b)});return h}},set:function(a,b){var c=this,d;void 0!==b?"$$fade"==a||"$$slide"==a?c.set({$visibility:0<(d=B(b))?"visible":"hidden",$display:"block"}).set("$$fade"==a?{$opacity:d}:{$height:/px$/.test(b)?b:function(a,b,c){return d*(d&&M(l(c)))+"px"},$overflow:"hidden"}):f(c,function(c,d){var h=m(m(a,/^%/,"data-"),/^[@$]/),g=c.className||"",n=/^\$/.test(a)?c.style:c,t=p(b)?b(l(c).get(a),d,c):b;"$"==a?t!=q&&(f(t.split(/\s+/),function(a){var b=m(a,/^[+-]/),c=g;g=m(g,RegExp("\\b"+b+"\\b"));if(/^\+/.test(a)||b==a&&c==g)g+=" "+b}),c.className=m(g,/^\s+|\s+(?=\s|$)/g)):"$$"==a?t!=q?c.setAttribute("style",t):c.removeAttribute("style"):/^[@%]/.test(a)?t!=q?n.setAttribute(h,t):n.removeAttribute(h):n[h]=t}):w(a)||p(a)?c.set("$",a):z(a,function(a,b){c.set(a,b)});return c},add:function(a,b){return f(this,function(c,d){var e;(function h(a){s(a)?f(a,h):p(a)?h(a(c,d)):a!=q&&(a=x(a)?a:C.createTextNode(a),e?e.parentNode.insertBefore(a,e.nextSibling):b?b(a,c,c.parentNode):c.appendChild(a),e=a)})(x(a)&&d?q:a)})},fill:function(a){return f(this,function(a){l(a.childNodes).remove()}).add(a)},addBefore:function(a){return this.add(a,function(a,c,d){d.insertBefore(a,c)})},addAfter:function(a){return this.add(a,function(a,c,d){d.insertBefore(a,c.nextSibling)})},addFront:function(a){return this.add(a,function(a,c){c.insertBefore(a,c.firstChild)})},replace:function(a){return this.add(a,function(a,c,d){d.replaceChild(a,c)})},clone:function(a){return new u(A(this,function(b){var c=x(b);if(1==c){var d={};f(b.attributes,function(a){var b=a.name;"id"!=b&&(d["@"+b]=a.value)});return P(b.tagName,d,l(b.childNodes).clone(),a)}return 5>c?b.data:q}))},animate:function(a,b,c,d){var e=this,j=[],h=/-?[\d.]+/,g,n=G(),t=p(c)?c:function(a,b,d){return a+d*(b-a)*(c+(1-c)*d*(3-2*d))};d=d||{};d.time=0;d.stop=function(){g();n(v)};b=b||500;c=c||0;f(e,function(b){var c={a:l(b),c:{}};z(c.b=c.a.get(a),function(b,d){var e=a[b];"$$slide"==b&&(e=e*M(c.a)+"px");c.c[b]=/^[+-]=/.test(e)?m(e.substr(2),h,B(d)+B(m(e,/\+?=/))):e});j.push(c)});g=l.loop(function(a){function c(a,b){return/^#/.test(a)?parseInt(6<a.length?a.substr(1+2*b,2):(a=a.charAt(1+b))+a,16):parseInt(m(a,/[^\d,]+/g).split(",")[b])}d.time=a;a>=b||0>a?(f(j,function(a){a.a.set(a.c)}),g(),d.time=q,n(k,[e])):f(j,function(d){z(d.b,function(e,j){var g="rgb(",f=d.c[e],n=a/b;if(/^#|rgb\(/.test(f))for(var l=0;3>l;l++)g+=Math.round(t(c(j,l),c(f,l),n))+(2>l?",":")");else g=m(f,h,y(t(B(j),B(f),n)));d.a.set(e,g)})})});return n},toggle:function(a,b,c,d){var e=this,j={},h=v,g=/\b(?=\w)/g,f;return b?e.set(a)&&function(g){if(g!==h)return f=(h=g===k||g===v?g:!h)?b:a,p(f)?f(e,c,d):c?e.animate(f,j.stop?j.stop()||j.time:c,d,j):e.set(f)&&void 0}:e.toggle(m(a,g,"-"),m(a,g,"+"))},values:function(a){var b=a||{};this.each(function(a){var d=a.name,e=y(a.value),j=b[d];if(/form/i.test(a.tagName))l(A(a.elements,Q)).values(b);else if(d&&(!/kbox|dio/i.test(a.type)||a.checked))s(j)?j.push(e):b[d]=j==q?e:[j,e]});return b},on:function(a,b,c,d){return this.each(function(e,j){f(a.split(/\s/),function(a){var g=m(a,/\|/),f=d&&c,l=d||c,p=g==a;a=function(a,c){var d=a||r.event,e;if((e=(!b.apply(f||c||d.target,l||[d,j])||l)&&p)&&!c)d.preventDefault(),d.stopPropagation();return e};var s={e:e,h:a,n:g};(b.M=b.M||[]).push(s);e.addEventListener(g,a,k);(e.minified2=e.minified2||[]).push(s)})})},onOver:function(a){var b=this,c=[];return b.on("|mouseover |mouseout",function(d,e){var f="mouseout"!=d.type,h=d.relatedTarget||d.toElement;if(c[e]!==f&&(f||!h||h!=b[e]&&!l(h).trav("parentNode",b[e]).length))c[e]=f,a.call(this,f,e)})},trigger:function(a,b){return this.each(function(c){for(var d,e=c,j=e;e&&!d;)c=e.minified2,f(c,function(c){c.n==a&&(d=d||c.h(b||{},j))}),e=e.parentNode})}},function(a,b){u.prototype[a]=b});z({request:function(a,b,c,d,e,j){var h,g=c,l=0,m=G();try{h=new XMLHttpRequest;if(c!=q){d=d||{};if(!w(c)&&!x(c)){var p=function T(a,b){return s(b)?A(b,function(b){return T(a,b)}):encodeURIComponent(a)+(b!=q?"="+encodeURIComponent(b):"")},r=[];z(c,function(a,b){s(a=p(a,b))?f(a,function(a){r.push(a)}):a!=q&&r.push(a)});g=r.join("&")}/post/i.test(a)?!x(c)&&!w(c)&&!d["Content-Type"]&&(d["Content-Type"]="application/x-www-form-urlencoded"):(b+="?"+g,g=q)}h.open(a,b,k,e,j);z(d,function(a,b){h.setRequestHeader(a,b)});h.onreadystatechange=function(){4==h.readyState&&!l++&&(200==h.status?m(k,[h.responseText,h.responseXML]):m(v,[h.status,h.statusText,h.responseText]))};h.send(g)}catch(u){l||m(v,[0,q,y(u)])}return m},toJSON:r.JSON&&JSON.stringify,parseJSON:r.JSON&&JSON.parse,ready:O,setCookie:function(a,b,c,d,e,f){C.cookie=a+"="+(f?b:escape(b))+(c?"; expires="+("object"==typeof c?c:new Date((new Date).getTime()+864e5*c)).toUTCString():"")+"; path="+(d?escapeURI(d):"/")+(e?"; domain="+escape(e):"")},getCookie:function(a,b){var c,d=(c=RegExp("(^|;)\\s*"+a+"=([^;]*)").exec(C.cookie))&&c[2];return b?d:d&&unescape(d)},loop:function(a){var b={d:a,f:(new Date).getTime(),b:function(){for(var a=0;a<D.length;a++)D[a]===b&&D.splice(a--,1)}};2>D.push(b)&&function d(){f(D,function(a){a.d(Math.max(0,(new Date).getTime()-a.f),a.b)}).length&&S(d)}();return b.b},wait:function(a,b){var c=G();r.setTimeout(function(){c(k,b)},a||0);return c},off:function(a){f(a.M,function(a){a.e.removeEventListener(a.n,a.h,k);a.e.minified2=E(a.e.minified2,a)});a.M=q}},function(a,b){l[a]=b});C.addEventListener("DOMContentLoaded",function(){f(F,N);F=q},v);return{$:l,$$:function(a){return H(a)[0]},EE:P,M:u}});