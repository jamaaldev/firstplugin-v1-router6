!function(){"use strict";var e,t=window.wp.element,n=window.React;function a(){return a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},a.apply(this,arguments)}!function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"}(e||(e={}));var r="beforeunload";function l(e){e.preventDefault(),e.returnValue=""}function i(){var e=[];return{get length(){return e.length},push:function(t){return e.push(t),function(){e=e.filter((function(e){return e!==t}))}},call:function(t){e.forEach((function(e){return e&&e(t)}))}}}function c(e){var t=e.pathname,n=void 0===t?"/":t,a=e.search,r=void 0===a?"":a,l=e.hash,i=void 0===l?"":l;return r&&"?"!==r&&(n+="?"===r.charAt(0)?r:"?"+r),i&&"#"!==i&&(n+="#"===i.charAt(0)?i:"#"+i),n}function o(e){var t={};if(e){var n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));var a=e.indexOf("?");a>=0&&(t.search=e.substr(a),e=e.substr(0,a)),e&&(t.pathname=e)}return t}const s=(0,n.createContext)(null),u=(0,n.createContext)(null),h=(0,n.createContext)({outlet:null,matches:[]});function p(e,t){if(!e)throw new Error(t)}function m(e,t,n){void 0===n&&(n="/");let a=x(("string"==typeof t?o(t):t).pathname||"/",n);if(null==a)return null;let r=f(e);!function(e){e.sort(((e,t)=>e.score!==t.score?t.score-e.score:function(e,t){return e.length===t.length&&e.slice(0,-1).every(((e,n)=>e===t[n]))?e[e.length-1]-t[t.length-1]:0}(e.routesMeta.map((e=>e.childrenIndex)),t.routesMeta.map((e=>e.childrenIndex)))))}(r);let l=null;for(let e=0;null==l&&e<r.length;++e)l=E(r[e],a);return l}function f(e,t,n,a){return void 0===t&&(t=[]),void 0===n&&(n=[]),void 0===a&&(a=""),e.forEach(((e,r)=>{let l={relativePath:e.path||"",caseSensitive:!0===e.caseSensitive,childrenIndex:r,route:e};l.relativePath.startsWith("/")&&(l.relativePath.startsWith(a)||p(!1),l.relativePath=l.relativePath.slice(a.length));let i=S([a,l.relativePath]),c=n.concat(l);e.children&&e.children.length>0&&(!0===e.index&&p(!1),f(e.children,t,c,i)),(null!=e.path||e.index)&&t.push({path:i,score:g(i,e.index),routesMeta:c})})),t}const d=/^:\w+$/,v=e=>"*"===e;function g(e,t){let n=e.split("/"),a=n.length;return n.some(v)&&(a+=-2),t&&(a+=2),n.filter((e=>!v(e))).reduce(((e,t)=>e+(d.test(t)?3:""===t?1:10)),a)}function E(e,t){let{routesMeta:n}=e,a={},r="/",l=[];for(let e=0;e<n.length;++e){let i=n[e],c=e===n.length-1,o="/"===r?t:t.slice(r.length)||"/",s=y({path:i.relativePath,caseSensitive:i.caseSensitive,end:c},o);if(!s)return null;Object.assign(a,s.params);let u=i.route;l.push({params:a,pathname:S([r,s.pathname]),pathnameBase:w(S([r,s.pathnameBase])),route:u}),"/"!==s.pathnameBase&&(r=S([r,s.pathnameBase]))}return l}function y(e,t){"string"==typeof e&&(e={path:e,caseSensitive:!1,end:!0});let[n,a]=function(e,t,n){void 0===t&&(t=!1),void 0===n&&(n=!0);let a=[],r="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/:(\w+)/g,((e,t)=>(a.push(t),"([^\\/]+)")));return e.endsWith("*")?(a.push("*"),r+="*"===e||"/*"===e?"(.*)$":"(?:\\/(.+)|\\/*)$"):r+=n?"\\/*$":"(?:(?=[.~-]|%[0-9A-F]{2})|\\b|\\/|$)",[new RegExp(r,t?void 0:"i"),a]}(e.path,e.caseSensitive,e.end),r=t.match(n);if(!r)return null;let l=r[0],i=l.replace(/(.)\/+$/,"$1"),c=r.slice(1);return{params:a.reduce(((e,t,n)=>{if("*"===t){let e=c[n]||"";i=l.slice(0,l.length-e.length).replace(/(.)\/+$/,"$1")}return e[t]=function(e,t){try{return decodeURIComponent(e)}catch(t){return e}}(c[n]||""),e}),{}),pathname:l,pathnameBase:i,pattern:e}}function b(e,t,n){let a,r="string"==typeof e?o(e):e,l=""===e||""===r.pathname?"/":r.pathname;if(null==l)a=n;else{let e=t.length-1;if(l.startsWith("..")){let t=l.split("/");for(;".."===t[0];)t.shift(),e-=1;r.pathname=t.join("/")}a=e>=0?t[e]:"/"}let i=function(e,t){void 0===t&&(t="/");let{pathname:n,search:a="",hash:r=""}="string"==typeof e?o(e):e,l=n?n.startsWith("/")?n:function(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach((e=>{".."===e?n.length>1&&n.pop():"."!==e&&n.push(e)})),n.length>1?n.join("/"):"/"}(n,t):t;return{pathname:l,search:C(a),hash:P(r)}}(r,a);return l&&"/"!==l&&l.endsWith("/")&&!i.pathname.endsWith("/")&&(i.pathname+="/"),i}function x(e,t){if("/"===t)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=e.charAt(t.length);return n&&"/"!==n?null:e.slice(t.length)||"/"}const S=e=>e.join("/").replace(/\/\/+/g,"/"),w=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),C=e=>e&&"?"!==e?e.startsWith("?")?e:"?"+e:"",P=e=>e&&"#"!==e?e.startsWith("#")?e:"#"+e:"";function N(){return null!=(0,n.useContext)(u)}function O(){return N()||p(!1),(0,n.useContext)(u).location}const k=(0,n.createContext)(null);function $(e){let{matches:t}=(0,n.useContext)(h),{pathname:a}=O(),r=JSON.stringify(t.map((e=>e.pathnameBase)));return(0,n.useMemo)((()=>b(e,JSON.parse(r),a)),[e,r,a])}function j(e){return function(e){let t=(0,n.useContext)(h).outlet;return t?(0,n.createElement)(k.Provider,{value:e},t):t}(e.context)}function B(e){p(!1)}function W(t){let{basename:a="/",children:r=null,location:l,navigationType:i=e.Pop,navigator:c,static:h=!1}=t;N()&&p(!1);let m=w(a),f=(0,n.useMemo)((()=>({basename:m,navigator:c,static:h})),[m,c,h]);"string"==typeof l&&(l=o(l));let{pathname:d="/",search:v="",hash:g="",state:E=null,key:y="default"}=l,b=(0,n.useMemo)((()=>{let e=x(d,m);return null==e?null:{pathname:e,search:v,hash:g,state:E,key:y}}),[m,d,v,g,E,y]);return null==b?null:(0,n.createElement)(s.Provider,{value:f},(0,n.createElement)(u.Provider,{children:r,value:{location:b,navigationType:i}}))}function D(e){let{children:t,location:a}=e;return function(e,t){N()||p(!1);let{matches:a}=(0,n.useContext)(h),r=a[a.length-1],l=r?r.params:{},i=(r&&r.pathname,r?r.pathnameBase:"/");r&&r.route;let c,s=O();if(t){var u;let e="string"==typeof t?o(t):t;"/"===i||(null==(u=e.pathname)?void 0:u.startsWith(i))||p(!1),c=e}else c=s;let f=c.pathname||"/",d=m(e,{pathname:"/"===i?f:f.slice(i.length)||"/"});return function(e,t){return void 0===t&&(t=[]),null==e?null:e.reduceRight(((a,r,l)=>(0,n.createElement)(h.Provider,{children:void 0!==r.route.element?r.route.element:a,value:{outlet:a,matches:t.concat(e.slice(0,l+1))}})),null)}(d&&d.map((e=>Object.assign({},e,{params:Object.assign({},l,e.params),pathname:S([i,e.pathname]),pathnameBase:"/"===e.pathnameBase?i:S([i,e.pathnameBase])}))),a)}(L(t),a)}function L(e){let t=[];return n.Children.forEach(e,(e=>{if(!(0,n.isValidElement)(e))return;if(e.type===n.Fragment)return void t.push.apply(t,L(e.props.children));e.type!==B&&p(!1);let a={caseSensitive:e.props.caseSensitive,element:e.props.element,index:e.props.index,path:e.props.path};e.props.children&&(a.children=L(e.props.children)),t.push(a)})),t}function R(){return R=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},R.apply(this,arguments)}function A(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}const M=["onClick","reloadDocument","replace","state","target","to"],F=["aria-current","caseSensitive","className","end","style","to","children"];function T(t){let{basename:s,children:u,window:h}=t,p=(0,n.useRef)();null==p.current&&(p.current=function(t){void 0===t&&(t={});var n=t.window,s=void 0===n?document.defaultView:n,u=s.history;function h(){var e=o(s.location.hash.substr(1)),t=e.pathname,n=void 0===t?"/":t,a=e.search,r=void 0===a?"":a,l=e.hash,i=void 0===l?"":l,c=u.state||{};return[c.idx,{pathname:n,search:r,hash:i,state:c.usr||null,key:c.key||"default"}]}var p=null;function m(){if(p)y.call(p),p=null;else{var t=e.Pop,n=h(),a=n[0],r=n[1];if(y.length){if(null!=a){var l=v-a;l&&(p={action:t,location:r,retry:function(){P(-1*l)}},P(l))}}else C(t)}}s.addEventListener("popstate",m),s.addEventListener("hashchange",(function(){c(h()[1])!==c(g)&&m()}));var f=e.Pop,d=h(),v=d[0],g=d[1],E=i(),y=i();function b(e){return function(){var e=document.querySelector("base"),t="";if(e&&e.getAttribute("href")){var n=s.location.href,a=n.indexOf("#");t=-1===a?n:n.slice(0,a)}return t}()+"#"+("string"==typeof e?e:c(e))}function x(e,t){return void 0===t&&(t=null),a({pathname:g.pathname,hash:"",search:""},"string"==typeof e?o(e):e,{state:t,key:Math.random().toString(36).substr(2,8)})}function S(e,t){return[{usr:e.state,key:e.key,idx:t},b(e)]}function w(e,t,n){return!y.length||(y.call({action:e,location:t,retry:n}),!1)}function C(e){f=e;var t=h();v=t[0],g=t[1],E.call({action:f,location:g})}function P(e){u.go(e)}return null==v&&(v=0,u.replaceState(a({},u.state,{idx:v}),"")),{get action(){return f},get location(){return g},createHref:b,push:function t(n,a){var r=e.Push,l=x(n,a);if(w(r,l,(function(){t(n,a)}))){var i=S(l,v+1),c=i[0],o=i[1];try{u.pushState(c,"",o)}catch(e){s.location.assign(o)}C(r)}},replace:function t(n,a){var r=e.Replace,l=x(n,a);if(w(r,l,(function(){t(n,a)}))){var i=S(l,v),c=i[0],o=i[1];u.replaceState(c,"",o),C(r)}},go:P,back:function(){P(-1)},forward:function(){P(1)},listen:function(e){return E.push(e)},block:function(e){var t=y.push(e);return 1===y.length&&s.addEventListener(r,l),function(){t(),y.length||s.removeEventListener(r,l)}}}}({window:h}));let m=p.current,[f,d]=(0,n.useState)({action:m.action,location:m.location});return(0,n.useLayoutEffect)((()=>m.listen(d)),[m]),(0,n.createElement)(W,{basename:s,children:u,location:f.location,navigationType:f.action,navigator:m})}const I=(0,n.forwardRef)((function(e,t){let{onClick:a,reloadDocument:r,replace:l=!1,state:i,target:u,to:m}=e,f=A(e,M),d=function(e){N()||p(!1);let{basename:t,navigator:a}=(0,n.useContext)(s),{hash:r,pathname:l,search:i}=$(e),c=l;if("/"!==t){let n=function(e){return""===e||""===e.pathname?"/":"string"==typeof e?o(e).pathname:e.pathname}(e),a=null!=n&&n.endsWith("/");c="/"===l?t+(a?"/":""):S([t,l])}return a.createHref({pathname:c,search:i,hash:r})}(m),v=function(e,t){let{target:a,replace:r,state:l}=void 0===t?{}:t,i=function(){N()||p(!1);let{basename:e,navigator:t}=(0,n.useContext)(s),{matches:a}=(0,n.useContext)(h),{pathname:r}=O(),l=JSON.stringify(a.map((e=>e.pathnameBase))),i=(0,n.useRef)(!1);return(0,n.useEffect)((()=>{i.current=!0})),(0,n.useCallback)((function(n,a){if(void 0===a&&(a={}),!i.current)return;if("number"==typeof n)return void t.go(n);let c=b(n,JSON.parse(l),r);"/"!==e&&(c.pathname=S([e,c.pathname])),(a.replace?t.replace:t.push)(c,a.state)}),[e,t,l,r])}(),o=O(),u=$(e);return(0,n.useCallback)((t=>{if(!(0!==t.button||a&&"_self"!==a||function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(t))){t.preventDefault();let n=!!r||c(o)===c(u);i(e,{replace:n,state:l})}}),[o,i,u,r,l,a,e])}(m,{replace:l,state:i,target:u});return(0,n.createElement)("a",R({},f,{href:d,onClick:function(e){a&&a(e),e.defaultPrevented||r||v(e)},ref:t,target:u}))})),J=(0,n.forwardRef)((function(e,t){let{"aria-current":a="page",caseSensitive:r=!1,className:l="",end:i=!1,style:c,to:o,children:s}=e,u=A(e,F),h=O(),p=$(o),m=h.pathname,f=p.pathname;r||(m=m.toLowerCase(),f=f.toLowerCase());let d,v=m===f||!i&&m.startsWith(f)&&"/"===m.charAt(f.length),g=v?a:void 0;d="function"==typeof l?l({isActive:v}):[l,v?"active":null].filter(Boolean).join(" ");let E="function"==typeof c?c({isActive:v}):c;return(0,n.createElement)(I,R({},u,{"aria-current":g,className:d,ref:t,style:E,to:o}),"function"==typeof s?s({isActive:v}):s)}));var K=()=>(0,t.createElement)(t.Fragment,null,(0,t.createElement)("div",{id:"Dashboard",className:"tabcontent"},(0,t.createElement)("p",{className:"pheadline"},"Dashboard"),(0,t.createElement)("p",null,"Dashboard is the capital city of England."))),H=()=>(0,t.createElement)(t.Fragment,null,(0,t.createElement)("div",{className:"tab"},(0,t.createElement)("div",{className:"logo"},(0,t.createElement)("h3",null,"Your Logo")),(0,t.createElement)(J,{to:"/"},(0,t.createElement)("button",{className:"tablinks dashboard"},"Dashboard")),(0,t.createElement)(J,{to:"support"},(0,t.createElement)("button",{className:"tablinks support"},"Support")),(0,t.createElement)(J,{to:"settings"},(0,t.createElement)("button",{className:"tablinks settings"},"Settings")),(0,t.createElement)(J,{to:"templates"},(0,t.createElement)("button",{className:"tablinks templates"},"Templates")))),V=function(){return(0,t.createElement)(t.Fragment,null,(0,t.createElement)("div",{id:"Dashboard",className:"tabcontent"},(0,t.createElement)("p",{className:"pheadline"},"Settings"),(0,t.createElement)("p",null,"Settings is the capital city of England.")))},U=function(e){let{idcontent:n,classcontent:a}=e;return(0,t.createElement)(t.Fragment,null,(0,t.createElement)("div",{id:"Dashboard",className:"tabcontent"},(0,t.createElement)("p",{className:"pheadline"},"Support"),(0,t.createElement)("p",null,"Support is the capital city of England.")))},q=function(e){let{idcontent:n,classcontent:a}=e;return(0,t.createElement)(t.Fragment,null,(0,t.createElement)("div",{id:"Dashboard",className:"tabcontent"},(0,t.createElement)("p",{className:"pheadline"},"Templates"),(0,t.createElement)("p",null,"Templates is the capital city of England.")))},Y=()=>(0,t.createElement)(j,null);(0,t.render)((0,t.createElement)((()=>(0,t.createElement)("div",null,(0,t.createElement)(T,null,(0,t.createElement)(H,null),(0,t.createElement)(D,null,(0,t.createElement)(B,{element:(0,t.createElement)(Y,null)},(0,t.createElement)(B,{path:"/support",element:(0,t.createElement)(U,null)}),(0,t.createElement)(B,{path:"/",element:(0,t.createElement)(K,null)}),(0,t.createElement)(B,{path:"/settings",element:(0,t.createElement)(V,null)}),(0,t.createElement)(B,{path:"/templates",element:(0,t.createElement)(q,null)})))))),null),document.getElementById("firstplugin"))}();