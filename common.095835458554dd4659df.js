"use strict";(self.webpackChunktimeless_frontend=self.webpackChunktimeless_frontend||[]).push([[8592],{39704:(E,n,i)=>{i.r(n),i.d(n,{detectEnv:()=>S,detectOS:()=>k,formatIOSMobile:()=>ce,formatMobileRegistry:()=>de,formatMobileRegistryEntry:()=>V,getClientMeta:()=>ne,getCrypto:()=>te,getCryptoOrThrow:()=>ee,getDappRegistryUrl:()=>ge,getDocument:()=>Y,getDocumentOrThrow:()=>q,getFromWindow:()=>G,getFromWindowOrThrow:()=>H,getLocal:()=>se,getLocalStorage:()=>A,getLocalStorageOrThrow:()=>oe,getLocation:()=>x,getLocationOrThrow:()=>Z,getMobileLinkRegistry:()=>fe,getMobileRegistryEntry:()=>J,getNavigator:()=>D,getNavigatorOrThrow:()=>z,getWalletRegistryUrl:()=>le,isAndroid:()=>R,isBrowser:()=>Q,isIOS:()=>I,isMobile:()=>X,isNode:()=>P,mobileLinkChoiceKey:()=>U,removeLocal:()=>ae,safeJsonParse:()=>$,safeJsonStringify:()=>F,saveMobileLinkInfo:()=>ue,setLocal:()=>j});var s=i(78359),r=i(37167),f=function(t,o,a){this.name=t,this.version=o,this.os=a,this.type="browser"},g=function(t){this.version=t,this.type="node",this.name="node",this.os=process.platform},y=function(t,o,a,l){this.name=t,this.version=o,this.os=a,this.bot=l,this.type="bot-device"},v=function(){this.type="bot",this.bot=!0,this.name="bot",this.version=null,this.os=null},h=function(){this.type="react-native",this.name="react-native",this.version=null,this.os=null},p=/(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/,w=[["aol",/AOLShield\/([0-9\._]+)/],["edge",/Edge\/([0-9\._]+)/],["edge-ios",/EdgiOS\/([0-9\._]+)/],["yandexbrowser",/YaBrowser\/([0-9\._]+)/],["kakaotalk",/KAKAOTALK\s([0-9\.]+)/],["samsung",/SamsungBrowser\/([0-9\.]+)/],["silk",/\bSilk\/([0-9._-]+)\b/],["miui",/MiuiBrowser\/([0-9\.]+)$/],["beaker",/BeakerBrowser\/([0-9\.]+)/],["edge-chromium",/EdgA?\/([0-9\.]+)/],["chromium-webview",/(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],["chrome",/(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],["phantomjs",/PhantomJS\/([0-9\.]+)(:?\s|$)/],["crios",/CriOS\/([0-9\.]+)(:?\s|$)/],["firefox",/Firefox\/([0-9\.]+)(?:\s|$)/],["fxios",/FxiOS\/([0-9\.]+)/],["opera-mini",/Opera Mini.*Version\/([0-9\.]+)/],["opera",/Opera\/([0-9\.]+)(?:\s|$)/],["opera",/OPR\/([0-9\.]+)(:?\s|$)/],["ie",/Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/],["ie",/MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],["ie",/MSIE\s(7\.0)/],["bb10",/BB10;\sTouch.*Version\/([0-9\.]+)/],["android",/Android\s([0-9\.]+)/],["ios",/Version\/([0-9\._]+).*Mobile.*Safari.*/],["safari",/Version\/([0-9\._]+).*Safari/],["facebook",/FBAV\/([0-9\.]+)/],["instagram",/Instagram\s([0-9\.]+)/],["ios-webview",/AppleWebKit\/([0-9\.]+).*Mobile/],["ios-webview",/AppleWebKit\/([0-9\.]+).*Gecko\)$/],["searchbot",/alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/]],m=[["iOS",/iP(hone|od|ad)/],["Android OS",/Android/],["BlackBerry OS",/BlackBerry|BB10/],["Windows Mobile",/IEMobile/],["Amazon OS",/Kindle/],["Windows 3.11",/Win16/],["Windows 95",/(Windows 95)|(Win95)|(Windows_95)/],["Windows 98",/(Windows 98)|(Win98)/],["Windows 2000",/(Windows NT 5.0)|(Windows 2000)/],["Windows XP",/(Windows NT 5.1)|(Windows XP)/],["Windows Server 2003",/(Windows NT 5.2)/],["Windows Vista",/(Windows NT 6.0)/],["Windows 7",/(Windows NT 6.1)/],["Windows 8",/(Windows NT 6.2)/],["Windows 8.1",/(Windows NT 6.3)/],["Windows 10",/(Windows NT 10.0)/],["Windows ME",/Windows ME/],["Open BSD",/OpenBSD/],["Sun OS",/SunOS/],["Chrome OS",/CrOS/],["Linux",/(Linux)|(X11)/],["Mac OS",/(Mac_PowerPC)|(Macintosh)/],["QNX",/QNX/],["BeOS",/BeOS/],["OS/2",/OS\/2/]];function O(e){var t=function(e){return""!==e&&w.reduce(function(t,o){var a=o[0];if(t)return t;var _=o[1].exec(e);return!!_&&[a,_]},!1)}(e);if(!t)return null;var o=t[0],a=t[1];if("searchbot"===o)return new v;var l=a[1]&&a[1].split(/[._]/).slice(0,3);l?l.length<3&&(l=function(){for(var e=0,t=0,o=arguments.length;t<o;t++)e+=arguments[t].length;var a=Array(e),l=0;for(t=0;t<o;t++)for(var _=arguments[t],W=0,B=_.length;W<B;W++,l++)a[l]=_[W];return a}(l,function(e){for(var t=[],o=0;o<e;o++)t.push("0");return t}(3-l.length))):l=[];var _=l.join("."),W=function(e){for(var t=0,o=m.length;t<o;t++){var a=m[t],l=a[0];if(a[1].exec(e))return l}return null}(e),B=p.exec(e);return B&&B[1]?new y(o,_,W,B[1]):new f(o,_,W)}function S(e){return function(e){return e?O(e):"undefined"==typeof document&&"undefined"!=typeof navigator&&"ReactNative"===navigator.product?new h:"undefined"!=typeof navigator?O(navigator.userAgent):"undefined"!=typeof process&&process.version?new g(process.version.slice(1)):null}(e)}function k(){const e=S();return e&&e.os?e.os:void 0}function R(){const e=k();return!!e&&e.toLowerCase().includes("android")}function I(){const e=k();return!!e&&(e.toLowerCase().includes("ios")||e.toLowerCase().includes("mac")&&navigator.maxTouchPoints>1)}function X(){return!!k()&&(R()||I())}function P(){const e=S();return!(!e||!e.name)&&"node"===e.name.toLowerCase()}function Q(){return!P()&&!!D()}const G=r.getFromWindow,H=r.getFromWindowOrThrow,q=r.getDocumentOrThrow,Y=r.getDocument,z=r.getNavigatorOrThrow,D=r.getNavigator,Z=r.getLocationOrThrow,x=r.getLocation,ee=r.getCryptoOrThrow,te=r.getCrypto,oe=r.getLocalStorageOrThrow,A=r.getLocalStorage;function ne(){return s.D()}const $=function(e){if("string"!=typeof e)throw new Error("Cannot safe json parse value of type "+typeof e);try{return JSON.parse(e)}catch{return e}},F=function(e){return"string"==typeof e?e:JSON.stringify(e)};function j(e,t){const o=F(t),a=A();a&&a.setItem(e,o)}function se(e){let t=null,o=null;const a=A();return a&&(o=a.getItem(e)),t=o&&$(o),t}function ae(e){const t=A();t&&t.removeItem(e)}const U="WALLETCONNECT_DEEPLINK_CHOICE";function ce(e,t){const o=encodeURIComponent(e);return t.universalLink?`${t.universalLink}/wc?uri=${o}`:t.deepLink?`${t.deepLink}${t.deepLink.endsWith(":")?"//":"/"}wc?uri=${o}`:""}function ue(e){const t=e.href.split("?")[0];j(U,Object.assign(Object.assign({},e),{href:t}))}function J(e,t){return e.filter(o=>o.name.toLowerCase().includes(t.toLowerCase()))[0]}function fe(e,t){let o=e;return t&&(o=t.map(a=>J(e,a)).filter(Boolean)),o}const K="https://registry.walletconnect.com";function le(){return K+"/api/v2/wallets"}function ge(){return K+"/api/v2/dapps"}function V(e,t="mobile"){var o;return{name:e.name||"",shortName:e.metadata.shortName||"",color:e.metadata.colors.primary||"",logo:null!==(o=e.image_url.sm)&&void 0!==o?o:"",universalLink:e[t].universal||"",deepLink:e[t].native||""}}function de(e,t="mobile"){return Object.values(e).filter(o=>!!o[t].universal||!!o[t].native).map(o=>V(o,t))}},37167:(E,n)=>{function i(w){let m;return"undefined"!=typeof window&&void 0!==window[w]&&(m=window[w]),m}function s(w){const m=i(w);if(!m)throw new Error(`${w} is not defined in Window`);return m}Object.defineProperty(n,"__esModule",{value:!0}),n.getLocalStorage=n.getLocalStorageOrThrow=n.getCrypto=n.getCryptoOrThrow=n.getLocation=n.getLocationOrThrow=n.getNavigator=n.getNavigatorOrThrow=n.getDocument=n.getDocumentOrThrow=n.getFromWindowOrThrow=n.getFromWindow=void 0,n.getFromWindow=i,n.getFromWindowOrThrow=s,n.getDocumentOrThrow=function(){return s("document")},n.getDocument=function(){return i("document")},n.getNavigatorOrThrow=function(){return s("navigator")},n.getNavigator=function(){return i("navigator")},n.getLocationOrThrow=function(){return s("location")},n.getLocation=function(){return i("location")},n.getCryptoOrThrow=function(){return s("crypto")},n.getCrypto=function(){return i("crypto")},n.getLocalStorageOrThrow=function(){return s("localStorage")},n.getLocalStorage=function(){return i("localStorage")}},78359:(E,n,i)=>{n.D=void 0;const r=i(37167);n.D=function(){let f,g;try{f=r.getDocumentOrThrow(),g=r.getLocationOrThrow()}catch{return null}function v(...d){const T=f.getElementsByTagName("meta");for(let O=0;O<T.length;O++){const C=T[O],N=["itemprop","property","name"].map(u=>C.getAttribute(u)).filter(u=>!!u&&d.includes(u));if(N.length&&N){const u=C.getAttribute("content");if(u)return u}}return""}const p=function(){let d=v("name","og:site_name","og:title","twitter:title");return d||(d=f.title),d}();return{description:v("description","og:description","twitter:description","keywords"),url:g.origin,icons:function(){const d=f.getElementsByTagName("link"),T=[];for(let O=0;O<d.length;O++){const C=d[O],N=C.getAttribute("rel");if(N&&N.toLowerCase().indexOf("icon")>-1){const u=C.getAttribute("href");if(u)if(-1===u.toLowerCase().indexOf("https:")&&-1===u.toLowerCase().indexOf("http:")&&0!==u.indexOf("//")){let S=g.protocol+"//"+g.host;if(0===u.indexOf("/"))S+=u;else{const k=g.pathname.split("/");k.pop(),S+=k.join("/")+"/"+u}T.push(S)}else 0===u.indexOf("//")?T.push(g.protocol+u):T.push(u)}}return T}(),name:p}}},78333:E=>{var n={single_source_shortest_paths:function(i,s,r){var c={},f={};f[s]=0;var y,v,h,L,p,w,g=n.PriorityQueue.make();for(g.push(s,0);!g.empty();)for(h in L=(y=g.pop()).cost,p=i[v=y.value]||{})p.hasOwnProperty(h)&&(w=L+p[h],(void 0===f[h]||f[h]>w)&&(f[h]=w,g.push(h,w),c[h]=v));if(void 0!==r&&void 0===f[r]){var d=["Could not find a path from ",s," to ",r,"."].join("");throw new Error(d)}return c},extract_shortest_path_from_predecessor_list:function(i,s){for(var r=[],c=s;c;)r.push(c),c=i[c];return r.reverse(),r},find_path:function(i,s,r){var c=n.single_source_shortest_paths(i,s,r);return n.extract_shortest_path_from_predecessor_list(c,r)},PriorityQueue:{make:function(i){var c,s=n.PriorityQueue,r={};for(c in i=i||{},s)s.hasOwnProperty(c)&&(r[c]=s[c]);return r.queue=[],r.sorter=i.sorter||s.default_sorter,r},default_sorter:function(i,s){return i.cost-s.cost},push:function(i,s){this.queue.push({value:i,cost:s}),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return 0===this.queue.length}}};E.exports=n}}]);