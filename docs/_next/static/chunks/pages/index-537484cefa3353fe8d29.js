_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[16],{"+q6A":function(e,t,n){"use strict";var c=n("mBgD"),a=n("ey9+");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n("q1tI")),i=(0,c(n("8/g6")).default)(o.createElement("path",{d:"M18 4H6v2l6.5 6L6 18v2h12v-3h-7l5-5-5-5h7z"}),"Functions");t.default=i},"+rmZ":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=[],c=0,a=!0;function i(e){function c(){t&&t(e,n)}a?o.default.nextTick(c):c()}e.length>0?e[0]((function t(a,o){n.push(o),++c>=e.length||a?i(a):e[c](t)})):i(null);a=!1};var c,a=n("8oxB"),o=(c=a)&&c.__esModule?c:{default:c}},"/EDR":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("QeBL")}])},"08/Q":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){return c++};var c=0},"0cth":function(e,t,n){"use strict";var c=n("mBgD"),a=n("ey9+");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n("q1tI")),i=(0,c(n("8/g6")).default)(o.createElement("path",{d:"M4 11h5V5H4v6zm0 7h5v-6H4v6zm6 0h5v-6h-5v6zm6 0h5v-6h-5v6zm-6-7h5V5h-5v6zm6-6v6h5V5h-5z"}),"ViewModule");t.default=i},"4HzQ":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Textfit=void 0;var c,a=n("oYXE"),o=(c=a)&&c.__esModule?c:{default:c};t.Textfit=o.default,t.default=o.default},"5CdP":function(e,t,n){"use strict";var c=n("mBgD"),a=n("ey9+");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n("q1tI")),i=(0,c(n("8/g6")).default)(o.createElement("path",{d:"M5 17v2h14v-2H5zm4.5-4.2h5l.9 2.2h2.1L12.75 4h-1.5L6.5 15h2.1l.9-2.2zM12 5.98L13.87 11h-3.74L12 5.98z"}),"TextFormat");t.default=i},"7Nqq":function(e,t,n){"use strict";var c=n("mBgD"),a=n("ey9+");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n("q1tI")),i=(0,c(n("8/g6")).default)(o.createElement("path",{d:"M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"}),"Event");t.default=i},"8Koj":function(e,t,n){"use strict";var c=n("mBgD"),a=n("ey9+");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n("q1tI")),i=(0,c(n("8/g6")).default)(o.createElement("path",{d:"M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"}),"Code");t.default=i},"8oxB":function(e,t){var n,c,a=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function r(e){if(n===setTimeout)return setTimeout(e,0);if((n===o||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"===typeof setTimeout?setTimeout:o}catch(e){n=o}try{c="function"===typeof clearTimeout?clearTimeout:i}catch(e){c=i}}();var l,s=[],u=!1,d=-1;function p(){u&&l&&(u=!1,l.length?s=l.concat(s):d=-1,s.length&&f())}function f(){if(!u){var e=r(p);u=!0;for(var t=s.length;t;){for(l=s,s=[];++d<t;)l&&l[d].run();d=-1,t=s.length}l=null,u=!1,function(e){if(c===clearTimeout)return clearTimeout(e);if((c===i||!c)&&clearTimeout)return c=clearTimeout,clearTimeout(e);try{c(e)}catch(t){try{return c.call(null,e)}catch(t){return c.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function m(){}a.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];s.push(new h(e,t)),1!==s.length||u||r(f)},h.prototype.run=function(){this.fun.apply(null,this.array)},a.title="browser",a.browser=!0,a.env={},a.argv=[],a.version="",a.versions={},a.on=m,a.addListener=m,a.once=m,a.off=m,a.removeListener=m,a.removeAllListeners=m,a.emit=m,a.prependListener=m,a.prependOnceListener=m,a.listeners=function(e){return[]},a.binding=function(e){throw new Error("process.binding is not supported")},a.cwd=function(){return"/"},a.chdir=function(e){throw new Error("process.chdir is not supported")},a.umask=function(){return 0}},DHJd:function(e,t,n){"use strict";var c=n("mBgD"),a=n("ey9+");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n("q1tI")),i=(0,c(n("8/g6")).default)(o.createElement(o.Fragment,null,o.createElement("path",{d:"M21 5c-1.11-.35-2.33-.5-3.5-.5-1.95 0-4.05.4-5.5 1.5-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6v14.65c0 .25.25.5.5.5.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5 1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.1.05.15.05.25.05.25 0 .5-.25.5-.5V6c-.6-.45-1.25-.75-2-1zm0 13.5c-1.1-.35-2.3-.5-3.5-.5-1.7 0-4.15.65-5.5 1.5V8c1.35-.85 3.8-1.5 5.5-1.5 1.2 0 2.4.15 3.5.5v11.5z"}),o.createElement("path",{d:"M17.5 10.5c.88 0 1.73.09 2.5.26V9.24c-.79-.15-1.64-.24-2.5-.24-1.7 0-3.24.29-4.5.83v1.66c1.13-.64 2.7-.99 4.5-.99zM13 12.49v1.66c1.13-.64 2.7-.99 4.5-.99.88 0 1.73.09 2.5.26V11.9c-.79-.15-1.64-.24-2.5-.24-1.7 0-3.24.3-4.5.83zM17.5 14.33c-1.7 0-3.24.29-4.5.83v1.66c1.13-.64 2.7-.99 4.5-.99.88 0 1.73.09 2.5.26v-1.52c-.79-.16-1.64-.24-2.5-.24z"})),"MenuBook");t.default=i},DqEY:function(e,t,n){"use strict";var c=n("mBgD"),a=n("ey9+");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n("q1tI")),i=(0,c(n("8/g6")).default)(o.createElement("path",{d:"M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM17 13l-5 5-5-5h3V9h4v4h3z"}),"CloudDownload");t.default=i},GqYB:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=void 0,c=void 0,a=void 0,o=void 0,i=0;function r(){o=0,i=+new Date,a=e.apply(n,c),n=null,c=null}return function(){n=this,c=arguments;var e=new Date-i;return o||(e>=t?r():o=setTimeout(r,t-e)),a}}},GsPj:function(e,t,n){"use strict";var c=n("mBgD"),a=n("ey9+");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n("q1tI")),i=(0,c(n("8/g6")).default)(o.createElement(o.Fragment,null,o.createElement("path",{d:"M8 8H6v7c0 1.1.9 2 2 2h9v-2H8V8z"}),o.createElement("path",{d:"M20 3h-8c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 8h-8V7h8v4zM4 12H2v7c0 1.1.9 2 2 2h9v-2H4v-7z"})),"DynamicFeed");t.default=i},H27s:function(e,t,n){"use strict";var c=n("mBgD"),a=n("ey9+");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n("q1tI")),i=(0,c(n("8/g6")).default)(o.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"}),"Help");t.default=i},IiIx:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){if(e===t)return!0;var n=Object.keys(e),c=Object.keys(t);if(n.length!==c.length)return!1;for(var a=Object.prototype.hasOwnProperty,o=0;o<n.length;o++)if(!a.call(t,n[o])||e[n[o]]!==t[n[o]])return!1;return!0}},P9z7:function(e,t,n){"use strict";var c=n("mBgD"),a=n("ey9+");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n("q1tI")),i=(0,c(n("8/g6")).default)(o.createElement("path",{d:"M19 4H5c-1.11 0-2 .9-2 2v12c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.89-2-2-2zm0 14H5V8h14v10z"}),"WebAsset");t.default=i},QeBL:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return Qe}));var c=n("Ji2X"),a=n("YFqc"),o=n.n(a),i=n("q1tI"),r=n("wx14"),l=n("Ff2n"),s=(n("17x9"),n("iuhU")),u=n("H2TA"),d=n("VD++"),p=i.forwardRef((function(e,t){var n=e.children,c=e.classes,a=e.className,o=e.focusVisibleClassName,u=Object(l.a)(e,["children","classes","className","focusVisibleClassName"]);return i.createElement(d.a,Object(r.a)({className:Object(s.a)(c.root,a),focusVisibleClassName:Object(s.a)(o,c.focusVisible),ref:t},u),n,i.createElement("span",{className:c.focusHighlight}))})),f=Object(u.a)((function(e){return{root:{display:"block",textAlign:"inherit",width:"100%","&:hover $focusHighlight":{opacity:e.palette.action.hoverOpacity},"&$focusVisible $focusHighlight":{opacity:.12}},focusVisible:{},focusHighlight:{overflow:"hidden",pointerEvents:"none",position:"absolute",top:0,right:0,bottom:0,left:0,borderRadius:"inherit",opacity:0,backgroundColor:"currentcolor",transition:e.transitions.create("opacity",{duration:e.transitions.duration.short})}}}),{name:"MuiCardActionArea"})(p),h=n("hlFM"),m=n("wCtz"),b=n("HALo"),g=n("dhJC"),v=n("ofer"),O=n("AeFk");var y={name:"cb8r04",styles:"font-weight:500;font-size:18px;color:rgba(0, 0, 0, 0.8)"},j=function(e){e.color;var t=Object(g.a)(e,["color"]);return Object(O.c)(v.a,Object(b.a)({variant:"h3",css:y},t))},w=n("kC8x"),x=n("TPYD");var M={name:"1nwlvhq",styles:"svg{font-size:inherit;vertical-align:bottom;}"},T=function(e){var t=e.name,n=e.category,c=e.description,a=e.icon,o=e.status;return Object(O.c)(m.a,{href:"/applets/".concat((n?n+"/":"")+t.replace(/\s/g,"-").toLowerCase()),css:function(e){return{margin:e.spacing(1),display:"flex",flexDirection:"column",backgroundColor:e.palette.background.default,borderRadius:8,opacity:"longTerm"==z(o)?.5:1}}},Object(O.c)(f,{css:function(e){return{justifyContent:"start",flexGrow:1,display:"flex",flexDirection:"column",padding:e.spacing(2)}}},Object(O.c)(h.a,{display:"flex",flexDirection:"column",textAlign:"center",alignItems:"center"},Object(O.c)(h.a,{display:"inline",fontSize:70,css:M},a),Object(O.c)(j,{css:function(e){return{display:"inline-block",marginRight:e.spacing(4)}}},Object(O.c)(x.a,{status:o},t)),Object(O.c)(h.a,{my:2},Object(O.c)(w.a,null,c)),Object(O.c)(h.a,{flexGrow:1}))))},z=function(e){return"object"==typeof e?e.type:e},S=n("cpVT"),k=n("1fmr"),_=function(e){e.color;var t=Object(g.a)(e,["color"]);return Object(O.c)(v.a,Object(b.a)({variant:"h2",css:function(e){return{fontWeight:800,fontSize:e.typography.pxToRem(30),color:"rgba(0, 0, 0, 0.8)"}}},t))},E=function(e){var t=e.title,n=e.description,c=e.children,a=Object(k.a)(t);return Object(O.c)("section",{ref:a},Object(O.c)(_,{css:function(e){return{marginTop:e.spacing(4),marginBottom:e.spacing(2)}}},t),Object(O.c)(h.a,{mt:2},Object(O.c)(w.a,null,n)),Object(O.c)(h.a,{display:"grid",css:function(e){var t;return t={gridTemplateColumns:"repeat(4, 1fr)"},Object(S.a)(t,e.breakpoints.down("md"),{gridTemplateColumns:"repeat(3, 1fr)"}),Object(S.a)(t,e.breakpoints.down("sm"),{gridTemplateColumns:"repeat(2, 1fr)"}),Object(S.a)(t,e.breakpoints.down("xs"),{gridTemplateColumns:"repeat(1, 1fr)"}),t}},c))},C=n("axvM"),L=n("tr08");var P={name:"18nns55",styles:"display:inline-block;width:100%"},I=function(e){var t=e.color,n=void 0===t?"#EEEEEE":t,c=e.backgroundColor,a=void 0===c?"#fff":c,o=e.children,i=Object(g.a)(e,["color","backgroundColor","children"]),r=Object(C.a)(),l=r.ref,s=r.height,u=void 0===s?1e3:s,d=Object(L.a)(),p=100;return Object(O.c)("div",i,Object(O.c)("div",{css:Object(O.b)({backgroundColor:n,height:u+d.spacing(2),left:0,right:0,position:"absolute",zIndex:-1},"","")},Object(O.c)("div",{css:Object(O.b)({backgroundColor:n,height:p,left:0,right:0,zIndex:1,top:-100,position:"absolute",":after":{content:'""',backgroundColor:a,height:p,borderBottomLeftRadius:p,left:0,right:0,zIndex:1,position:"absolute"}},"","")}),Object(O.c)("div",{css:Object(O.b)({backgroundColor:n,height:p,left:0,right:0,zIndex:1,bottom:-100,position:"absolute",":after":{content:'""',backgroundColor:a,height:p,borderTopRightRadius:p,left:0,right:0,zIndex:1,position:"absolute"}},"","")})),Object(O.c)("div",{ref:l,css:P},o))},D=n("Z3vd");var H={name:"1r5gb7q",styles:"display:inline-block"},q={name:"g65o95",styles:"text-decoration:none"},W={name:"1082qq3",styles:"display:block;width:100%"},B=function(e){var t=e.title,n=e.status,c=e.icon,a=e.description,o=e.download;return Object(O.c)(h.a,{flexGrow:1,p:2,m:1,display:"flex",flexDirection:"column",boxSizing:"border-box",flexBasis:1,borderRadius:8,css:function(e){return{backgroundColor:e.palette.background.default,minWidth:"min(100% - ".concat(2*e.spacing(1),"px, 300px)")}}},Object(O.c)("span",null,Object(O.c)(x.a,{status:n},Object(O.c)(j,{css:H},t))),Object(O.c)(h.a,{mt:2,display:"flex",justifyContent:"center"},Object(O.c)(h.a,{flexGrow:1,maxWidth:200},c)),Object(O.c)(h.a,{my:2},Object(O.c)(w.a,null,a)),Object(O.c)(h.a,{flexGrow:1}),Object(O.c)("a",{href:o,css:q},Object(O.c)(D.a,{variant:"contained",css:W,disableElevation:!0},"Download")))},V=n("tRbT"),A=function(e){var t=e.children,n=e.margin,c=void 0===n?0:n,a=Object(g.a)(e,["children","margin"]);return Object(O.c)(V.a,Object(b.a)({container:!0,justify:"space-between",direction:"row",css:function(e){return{marginTop:e.spacing(c),marginBottom:e.spacing(c)}}},a),t)},R=function(e){var t=e.children,n=Object(k.a)("downloads");return Object(O.c)("section",{ref:n},Object(O.c)(_,{css:function(e){return{marginTop:e.spacing(4),marginBottom:e.spacing(2)}}},"Downloads"),Object(O.c)(A,null,t),Object(O.c)(h.a,{mt:2},Object(O.c)(w.a,null,"Previous releases of LaunchMenu can be found on"," ",Object(O.c)("a",{href:"https://github.com/LaunchMenu/LaunchMenu/releases"},"our github page"))))},N=n("JQEk"),F=n("Rwad");var U=Object(i.createContext)({selected:"",select:function(){}}),Y=function(e){var t=e.title,n=e.ID,c=void 0===n?t.replace(/\s/,"-"):n,a=e.time,o=e.children,r=e.status,l=void 0===r?"supported":r,s=function(e){var t=e.startTime,n=e.endTime,c=e.endMargin,a=void 0===c?.2:c,o=Object(i.useContext)(F.a),r=o.registerTimeListener,l=o.setPauseTime,s=o.controls,u=Object(i.useState)(!1),d=u[0],p=u[1];return Object(i.useEffect)((function(){var e=!1;return r((function(c){var o=c>=t&&c<=n+a;o!=e&&(p(o),e=o)}))}),[t,n]),{inSection:d,play:Object(i.useCallback)((function(e){s&&(e||l(n),s.setTime(t),s.play())}),[t,n,s])}}({startTime:a.start,endTime:a.end}),u=s.inSection,d=s.play,p=Object(i.useCallback)((function(){try{history.replaceState(null,null,"#".concat(c))}catch(e){window.location.hash=c}d()}),[d]),f=Object(i.useContext)(U),h=f.selected,m=f.select;Object(i.useEffect)((function(){u&&m(c)}),[u]);var b=Object(i.useRef)(Date.now()),g=Object(i.useRef)(null);return Object(i.useEffect)((function(){if(b.current+1e3>Date.now()&&window.location.hash=="#".concat(c)&&(d(),g.current)){var e=g.current.getBoundingClientRect().top+window.pageYOffset-300;window.scrollTo({top:e,behavior:"smooth"})}}),[d]),Object(O.c)("li",{ref:g,onClick:p,css:function(e){return{listStyleType:"none",marginBottom:e.spacing(1)}}},Object(O.c)(j,{css:function(e){return{display:"inline",cursor:"pointer",fontSize:e.typography.pxToRem(20)}}},Object(O.c)(x.a,{status:l},t)),Object(O.c)(N.a,{in:h==c},Object(O.c)(w.a,{css:function(e){return{paddingLeft:e.spacing(4)}}},o)))},G=n("xyb1"),J=n.n(G),K=n("V1Mc"),Q=n("BK7H"),X=n("rTBv"),Z=function(e){var t=e.category,n=e.video,c=e.children,a=e.videoPlaceholder,o=Object(i.useState)(""),r=o[0],l=o[1],s=Object(K.a)(),u=Object(O.c)(h.a,{marginLeft:2,marginBottom:2,css:function(e){return Object(S.a)({width:"40%"},e.breakpoints.down("md"),{width:"min(100%, ".concat(X.c,"px)")})}},Object(O.c)(_,null,t),Object(O.c)(h.a,{mt:1},c));return Object(O.c)(h.a,{mt:"25vh"},Object(O.c)(J.a,null,(function(e){var t=e.isVisible;return Object(O.c)(Q.a,{src:n,enabled:t},Object(O.c)("section",{css:function(e){return Object(S.a)({paddingBottom:s?void 0:"25vh",display:"flex",flexDirection:"row-reverse",flexWrap:"wrap"},e.breakpoints.down("md"),{flexDirection:"column",alignItems:"center"})}},Object(O.c)(U.Provider,{value:{selected:r,select:l}},u),Object(O.c)($,{videoPlaceholder:a})))})))},$=function(e){var t=e.videoPlaceholder,n=Object(i.useContext)(F.a).Video;return Object(O.c)(h.a,{marginBottom:2,css:function(e){return Object(S.a)({width:"60%"},e.breakpoints.down("md"),{width:"inherit"})}},n&&Object(O.c)(X.b,{VideoComp:n,backgroundSrc:t}))},ee=n("DqEY"),te=n.n(ee),ne=n("8Koj"),ce=n.n(ne),ae=n("4HzQ"),oe=n.n(ae),ie=n("Ff27");var re={name:"dt6o0p",styles:"max-width:min(400px, 100%)"},le=function(e){var t=e.children;return Object(O.c)(h.a,{display:"flex",my:8,flexWrap:"wrap",css:Object(O.b)({flexDirection:"row-reverse",justifyContent:"center"},"","")},Object(O.c)(h.a,{css:re,mb:2},Object(O.c)(se,null),Object(O.c)(w.a,{css:function(e){return{alignSelf:"center",fontWeight:800,fontSize:18,marginBottom:e.spacing(2)}}},"Do it. Do it now."),Object(O.c)(o.a,{href:"#downloads"},Object(O.c)(D.a,{variant:"contained",color:"primary",startIcon:Object(O.c)(te.a,null)},"Download")),Object(O.c)(h.a,{mt:4,mb:2},Object(O.c)(w.a,null,"LaunchMenu is an open platform, learn about all the features that applets can take advantage of:")),Object(O.c)(o.a,{href:"/dev"},Object(O.c)(D.a,{variant:"contained",color:"default",startIcon:Object(O.c)(ce.a,null),disableElevation:!0},"Applet development"))),Object(O.c)(h.a,{flex:1},t))},se=function(){return Object(ie.a)(),Object(O.c)(v.a,{variant:"h1",color:"primary",css:function(e){return{alignSelf:"center",fontSize:60,marginBottom:e.spacing(2)}}},Object(O.c)(oe.a,null,"LaunchMenu"))},ue=n("a3/W"),de=n("kKAo"),pe=function(e){var t=e.name,n=e.quote,c=e.role;return Object(O.c)(h.a,{flexBasis:1,flexGrow:1,p:2,m:1,component:fe,maxWidth:700,flexDirection:"column",display:"flex",boxSizing:"border-box",css:function(e){return{minWidth:"min(100% - ".concat(2*e.spacing(1),"px, 250px)")}}},Object(O.c)(h.a,{mb:2},Object(O.c)(w.a,null,n)),Object(O.c)(h.a,{flexGrow:1}),Object(O.c)(h.a,null,Object(O.c)(w.a,null,Object(O.c)(h.a,{display:"inline",fontWeight:800,css:function(e){return{color:e.palette.primary.main}}},t),", ",Object(O.c)(h.a,{display:"inline"},c))))},fe=function(e){return Object(O.c)(de.a,Object(b.a)({variant:"outlined"},e))},he=function(e){var t=e.children,n=Object(k.a)("reviews"),c=Object(i.useRef)((function(e){return Object(O.c)("section",Object(b.a)({ref:n},e))}));return Object(O.c)(h.a,{component:c.current,mt:4,"aria-label":"reviews"},Object(O.c)(h.a,{mb:4},Object(O.c)(_,null,"Reviews")),Object(O.c)(w.a,{css:function(e){return{fontSize:24,marginBottom:e.spacing(2)}}},"Here's what people have to say about LaunchMenu."),Object(O.c)(A,null,t))},me=function(e){var t=e.title,n=e.body;return Object(O.c)(h.a,{flexGrow:1,p:1,flexBasis:1,minWidth:"min(100%, 300px)",mb:4},Object(O.c)(j,{css:function(e){return{marginBottom:e.spacing(2)}}},t),Object(O.c)(w.a,null,n))},be=n("Rx5u"),ge=function(e){var t=e.amount,n=Object(g.a)(e,["amount"]);return Object(O.c)(h.a,Object(b.a)({height:t},n))},ve=n("DHJd"),Oe=n.n(ve),ye=n("H27s"),je=n.n(ye),we=n("qSYY"),xe=n.n(we),Me=n("P9z7"),Te=n.n(Me),ze=n("WElE"),Se=n.n(ze),ke=n("0cth"),_e=n.n(ke),Ee=n("GsPj"),Ce=n.n(Ee),Le=n("mYW3"),Pe=n.n(Le),Ie=n("bSwy"),De=n.n(Ie),He=n("+q6A"),qe=n.n(He),We=n("WHoZ"),Be=n.n(We),Ve=n("5CdP"),Ae=n.n(Ve),Re=n("WB8x"),Ne=n.n(Re),Fe=n("7Nqq"),Ue=n.n(Fe),Ye=n("YDDb"),Ge=n.n(Ye),Je=n("UD+h"),Ke=n.n(Je);function Qe(){return Object(O.c)(c.a,null,Object(O.c)(be.a,null,Object(O.c)(le,null,Object(O.c)(X.a,{initVideo:"videoTest4.mp4",videoPlaceholder:"videoTest2.png"})),Object(O.c)(A,{margin:2},Object(O.c)(me,{title:"What is LaunchMenu?",body:Object(O.c)(i.Fragment,null,"LaunchMenu is an Open Source, cross-platform application which brings utilities (applets) to your fingertips. Open it at a press of a button, with LaunchMenu's keyboard centric design!")}),Object(O.c)(me,{title:"Why LaunchMenu?",body:Object(O.c)(i.Fragment,null,"LaunchMenu is easy to use, free and allows you to increase your productivity. Customise the application to your needs with"," ",Object(O.c)(o.a,{href:"#theming"},"advanced theming")," ","and"," ",Object(O.c)(o.a,{href:"#settings"},"applet settings"),".")}),Object(O.c)(me,{title:"Extendable with Applets",body:Object(O.c)(i.Fragment,null,Object(O.c)(o.a,{href:"#applets"},"Some applets")," come preinstalled but additional 3rd party applets"," ",Object(O.c)(o.a,{href:"#thirdPartyApplets"},"will be available"),". LaunchMenu relies on applets to serve users, and doesn't limit developers in providing their desired user experience.")})),Object(O.c)(I,null,Object(O.c)(Z,{category:"Actively developed",video:"videoTest2.mp4",videoPlaceholder:"videoTest2.png"},Object(O.c)(w.a,null,"LaunchMenu is actively developed. Some features are only partially supported, we will use this legend to indicate what features are supported and what features are planned. You can hover your mouse over the symbol for more information:",Object(O.c)("ul",{css:function(e){return{listStyleType:"none",paddingLeft:0,">*":{marginBottom:e.spacing(1)}}}},Object(O.c)("li",null,Object(O.c)(x.a,{status:"supported",childrenInTooltip:!0},"Supported")),Object(O.c)("li",null,Object(O.c)(x.a,{status:"comingSoon",childrenInTooltip:!0},"Coming Soon")),Object(O.c)("li",null,Object(O.c)(x.a,{status:"longTerm",childrenInTooltip:!0},"Long Term")))))),Object(O.c)(Z,{category:"Keyboard centric",video:"videoTest3.mp4",videoPlaceholder:"videoTest2.png"},Object(O.c)(Y,{title:"Select items",time:{start:0,end:1}},"Use the arrow keys to navigate the menu."),Object(O.c)(Y,{title:"Execute item actions",time:{start:1.3,end:2}},"Hit ",Object(O.c)(ue.a,null,"Enter \u21b5")," to perform the primary action of the selected item."),Object(O.c)(Y,{title:"Step in and out of menus",time:{start:2.3,end:3}},"Press the ",Object(O.c)(ue.a,null,"Tab \u21b9")," key to hop into a context menu and ",Object(O.c)(ue.a,null,"Escape")," to exit out of it again."),Object(O.c)(Y,{title:"Customise any controls",time:{start:3.3,end:4}},"All controls are customisable to fit your needs! Join the ijkl-master race."),Object(O.c)(Y,{title:"Mnemonics",time:{start:4.3,end:5},status:"longTerm"},"Navigate menus even faster by making use of Mnemonics."),Object(O.c)(Y,{title:"Native VIM keys mode",time:{start:5.3,end:6},status:{type:"longTerm",tooltip:"An applet will have to be created to manage settings in bulk."}},"LaunchMenu will have toggle-able custom keyboard layouts, including VIM as standard.")),Object(O.c)(I,null,Object(O.c)(Z,{category:"Search anywhere",video:"videoTest4.mp4",videoPlaceholder:"videoTest2.png"},Object(O.c)(Y,{title:"All menus are searchable",time:{start:0,end:1}},"No matter where you are, simply start typing to start searching!"),Object(O.c)(Y,{title:"Searches are recursive",time:{start:1.3,end:2}},"Searches look through the selected menu as well as all sub-menus."),Object(O.c)(Y,{title:"Filters",time:{start:2.3,end:3}},"Searches can use patterns to automatically filter results."),Object(O.c)(Y,{title:"Fuzzy Search",time:{start:3.3,end:4}},"By default all searches use a fuzzy matching algorithm."),Object(O.c)(Y,{title:"Prioritised searches",time:{start:4.3,end:5},status:{type:"longTerm",tooltip:"This is something we ideally want, but have no infrastructure for."}},"All searches will be tracked and prioritised intelligently, bringing frequently used items closer to the top of the list."))),Object(O.c)(Z,{category:"Context menus",video:"videoTest3.mp4",videoPlaceholder:"videoTest2.png"},Object(O.c)(Y,{title:"Item actions",time:{start:0,end:1}},"Items can have multiple actions, the primary action is executed on ",Object(O.c)(ue.a,null,"Enter \u21b5"),"."),Object(O.c)(Y,{title:"Opening",time:{start:1.3,end:2}},"A context menu can be opened, by pressing"," ",Object(O.c)(ue.a,null,"Tab \u21b9"),", to show these actions."),Object(O.c)(Y,{title:"Searching",time:{start:2.3,end:3}},"Context menus, like all menus, can be searched in order to quickly find actions."),Object(O.c)(Y,{title:"Sub-menus",time:{start:3.3,end:4}},"Context menus can contain sub-menus, which hide additional actions which are rarely used."),Object(O.c)(Y,{title:"UI Path",time:{start:4.3,end:5}},"The path shows where you are in the application.")),Object(O.c)(I,null,Object(O.c)(Z,{category:"Multi-select",video:"videoTest4.mp4",videoPlaceholder:"videoTest2.png"},Object(O.c)(Y,{title:"Select and execute multiple items",time:{start:0,end:1}},"You can select multiple items by pressing or holding the ",Object(O.c)(ue.a,null,"\u21e7 Shift"),". Press ",Object(O.c)(ue.a,null," Enter \u21b5")," to execute the primary action."),Object(O.c)(Y,{title:"Shared context menu",time:{start:1.3,end:2}},"Opening a context menu will list actions from all the selected items. Actions executed will operate on all compatible items."))),Object(O.c)(Z,{category:"Customise",video:"videoTest3.mp4",videoPlaceholder:"videoTest2.png"},Object(O.c)(Y,{title:"Settings",time:{start:0,end:1}},"Like all other items, settings can be searched, and altered easily."),Object(O.c)(Y,{title:"Keyboard Shortcuts",time:{start:1.3,end:2}},"All keyboard shortcuts / controls can be fully customised to suit your needs."),Object(O.c)(Y,{title:"Customise applets",time:{start:2.3,end:3}},"Like native LaunchMenu features, all applets - including 3rd party applets, will be customisable."),Object(O.c)(Y,{title:"Settings portability",time:{start:3.3,end:4},status:{type:"comingSoon",tooltip:"Settings are saved as json, but no UI is present yet."}},"Settings will be portable, allowing you to import and export settings."),Object(O.c)(Y,{title:"Applets",time:{start:4.3,end:5},status:{type:"comingSoon",tooltip:"An applet infrastructure is present, but no UI yet."}},"LaunchMenu will have an applet manager, which allows the installation and removal of both official and 3rd party applets."),Object(O.c)(Y,{title:"Themes",time:{start:5.3,end:6},status:{type:"comingSoon",tooltip:"A theme infrastructure is present, but no UI yet."}},"Colour and Style of the LaunchMenu app and applets will be customisable through themes."))),Object(O.c)(I,null,Object(O.c)(R,null,Object(O.c)(B,{title:"Windows",status:"supported",icon:Object(O.c)("img",{src:"/icons/windows.svg"}),description:"LaunchMenu is primarily being developed and tested on Windows, so this platform has smallest chance of containing bugs.",download:"https://google.com"}),Object(O.c)(B,{title:"Linux",status:"longTerm",icon:Object(O.c)("img",{src:"/icons/linux.svg"}),description:"Linux support is planned, but not yet worked on. Help from Linux users will be needed to test the software, and fix OS specific issues.",download:"https://google.com"}),Object(O.c)(B,{title:"Mac",status:"comingSoon",icon:Object(O.c)("img",{src:"/icons/apple.svg"}),description:"Most features have been tested and adjusted to work on Mac, but this testing has been less extensive than on Windows.",download:"https://google.com"}))),Object(O.c)(ge,{amount:200}),Object(O.c)(he,null,Object(O.c)(pe,{quote:"LaunchMenu is very convenient to use, and super fast to interact with. It unfortunately doesn't have many applets yet, but there's a lot of potential!",name:"Tar van Krieken",role:"Cofounder of LaunchMenu"}),Object(O.c)(pe,{quote:"Exactly what I wanted.",name:"Sancarn",role:"Founder of LaunchMenu"}),Object(O.c)(pe,{quote:"We don't really have any users yet.",name:"Tar van Krieken",role:"Cofounder of LaunchMenu"})),Object(O.c)(ge,{amount:200}),Object(O.c)(I,null,Object(O.c)(E,{title:"Utility applets"},Object(O.c)(T,{name:"Dictionary",description:"A dictionary powered by Wiktionary, to quickly lookup word definitions",status:"supported",icon:Object(O.c)(Oe.a,null),category:"utility"}),Object(O.c)(T,{name:"Notes",description:"A simple notes manager that supports markdown content rendering",status:"supported",icon:Object(O.c)(xe.a,null),category:"utility"}),Object(O.c)(T,{name:"File manager",description:"An advanced file manager to find and manipulate files",status:"longTerm",icon:Object(O.c)(Pe.a,null),category:"utility"}),Object(O.c)(T,{name:"Internet search",description:"A general purpose internet search to quickly lookup facts",status:"longTerm",icon:Object(O.c)(De.a,null),category:"utility"}),Object(O.c)(T,{name:"Calculator",description:"A simple calculator for quick arithmetic",status:"longTerm",icon:Object(O.c)(qe.a,null),category:"utility"}),Object(O.c)(T,{name:"Translator",description:"A basic translator",status:"longTerm",icon:Object(O.c)(Be.a,null),category:"utility"}),Object(O.c)(T,{name:"Snippets",description:"An applet to easily insert often used text sequences",status:"longTerm",icon:Object(O.c)(Ae.a,null),category:"utility"}),Object(O.c)(T,{name:"Time tracker",description:"An applet to keep track of how much time you spend on certain tasks",status:"longTerm",icon:Object(O.c)(Ne.a,null),category:"utility"}),Object(O.c)(T,{name:"Calendar",description:"An advanced calendar to show and plan events",status:"longTerm",icon:Object(O.c)(Ue.a,null),category:"utility"})),Object(O.c)(E,{title:"Core applets",description:"LaunchMenu itself doesn't contain any menus or items. Instead, dedicated 'core-applets' are used to manage the core functionalities."},Object(O.c)(T,{name:"Help",description:"Provides simple quickstart information",status:"supported",icon:Object(O.c)(je.a,null),category:"core"}),Object(O.c)(T,{name:"Applet manager",description:"Used to manage other applets",status:{type:"comingSoon",tooltip:"Installation of applets isn't yet supported"},icon:Object(O.c)(_e.a,null),category:"core"}),Object(O.c)(T,{name:"Settings manager",description:"Used to change any settings within LaunchMenu and applets",status:"supported",icon:Object(O.c)(Se.a,null),category:"core"}),Object(O.c)(T,{name:"Window manager",description:"Takes care of launching, opening and positioning LaunchMenu",status:{type:"comingSoon",tooltip:"Doesn't support all planned OSes yet"},icon:Object(O.c)(Te.a,null),category:"core"}),Object(O.c)(T,{name:"Session manager",description:"Used to create new parallel sessions within LaunchMenu",status:"supported",icon:Object(O.c)(Ce.a,null),category:"core"}),Object(O.c)(T,{name:"Theme manager",description:"Used to customize the appearance of LaunchMenu",status:"longTerm",icon:Object(O.c)(Ke.a,null),category:"core"}),Object(O.c)(T,{name:"Undo-redo manager",description:"Used to control and visualize the undo facility",status:"longTerm",icon:Object(O.c)(Ge.a,null),category:"core"}),Object(O.c)(T,{name:"User Scripts",description:"Used for simple LaunchMenu automation",status:{type:"longTerm",tooltip:"This applet could however be developed rather quickly"},icon:Object(O.c)(ce.a,null),category:"core"}))),Object(O.c)(ge,{amount:400}))}},"UD+h":function(e,t,n){"use strict";var c=n("mBgD"),a=n("ey9+");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n("q1tI")),i=(0,c(n("8/g6")).default)(o.createElement("path",{d:"M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-.99 0-.83.67-1.5 1.5-1.5H16c2.76 0 5-2.24 5-5 0-4.42-4.03-8-9-8zm-5.5 9c-.83 0-1.5-.67-1.5-1.5S5.67 9 6.5 9 8 9.67 8 10.5 7.33 12 6.5 12zm3-4C8.67 8 8 7.33 8 6.5S8.67 5 9.5 5s1.5.67 1.5 1.5S10.33 8 9.5 8zm5 0c-.83 0-1.5-.67-1.5-1.5S13.67 5 14.5 5s1.5.67 1.5 1.5S15.33 8 14.5 8zm3 4c-.83 0-1.5-.67-1.5-1.5S16.67 9 17.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"}),"Palette");t.default=i},WB8x:function(e,t,n){"use strict";var c=n("mBgD"),a=n("ey9+");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n("q1tI")),i=(0,c(n("8/g6")).default)(o.createElement(o.Fragment,null,o.createElement("path",{d:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),o.createElement("path",{d:"M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"})),"Schedule");t.default=i},WElE:function(e,t,n){"use strict";var c=n("mBgD"),a=n("ey9+");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n("q1tI")),i=(0,c(n("8/g6")).default)(o.createElement("path",{d:"M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"}),"Settings");t.default=i},WHoZ:function(e,t,n){"use strict";var c=n("mBgD"),a=n("ey9+");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n("q1tI")),i=(0,c(n("8/g6")).default)(o.createElement("path",{d:"M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z"}),"Translate");t.default=i},WIyv:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.innerHeight=function(e){var t=window.getComputedStyle(e,null);return t?e.clientHeight-parseInt(t.getPropertyValue("padding-top"),10)-parseInt(t.getPropertyValue("padding-bottom"),10):e.clientHeight},t.innerWidth=function(e){var t=window.getComputedStyle(e,null);return t?e.clientWidth-parseInt(t.getPropertyValue("padding-left"),10)-parseInt(t.getPropertyValue("padding-right"),10):e.clientWidth}},XOh4:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:c;e()?t((function c(a){for(var o=arguments.length,i=Array(o>1?o-1:0),r=1;r<o;r++)i[r-1]=arguments[r];a?n(a):e.apply(this,i)?t(c):n(null)})):n(null)};var c=function(){}},YDDb:function(e,t,n){"use strict";var c=n("mBgD"),a=n("ey9+");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n("q1tI")),i=(0,c(n("8/g6")).default)(o.createElement("path",{d:"M12.5 8c-2.65 0-5.05.99-6.9 2.6L2 7v9h9l-3.62-3.62c1.39-1.16 3.16-1.88 5.12-1.88 3.54 0 6.55 2.31 7.6 5.5l2.37-.78C21.08 11.03 17.15 8 12.5 8z"}),"Undo");t.default=i},bSwy:function(e,t,n){"use strict";var c=n("mBgD"),a=n("ey9+");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n("q1tI")),i=(0,c(n("8/g6")).default)(o.createElement("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),"Search");t.default=i},mYW3:function(e,t,n){"use strict";var c=n("mBgD"),a=n("ey9+");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n("q1tI")),i=(0,c(n("8/g6")).default)(o.createElement("path",{d:"M6 2c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6H6zm7 7V3.5L18.5 9H13z"}),"InsertDriveFile");t.default=i},oYXE:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var c in n)Object.prototype.hasOwnProperty.call(n,c)&&(e[c]=n[c])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var c=t[n];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(e,c.key,c)}}return function(t,n,c){return n&&e(t.prototype,n),c&&e(t,c),t}}(),o=f(n("q1tI")),i=f(n("17x9")),r=f(n("IiIx")),l=f(n("+rmZ")),s=f(n("XOh4")),u=f(n("GqYB")),d=f(n("08/Q")),p=n("WIyv");function f(e){return e&&e.__esModule?e:{default:e}}function h(e,t){return e.scrollWidth-1<=t}function m(e,t){return e.scrollHeight-1<=t}var b=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={fontSize:null,ready:!1},n.handleWindowResize=function(){n.process()},"perfectFit"in e&&console.warn("TextFit property perfectFit has been removed."),n.handleWindowResize=(0,u.default)(n.handleWindowResize,e.throttle),n}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,[{key:"componentDidMount",value:function(){this.props.autoResize&&window.addEventListener("resize",this.handleWindowResize),this.process()}},{key:"componentDidUpdate",value:function(e){this.state.ready&&((0,r.default)(this.props,e)||this.process())}},{key:"componentWillUnmount",value:function(){this.props.autoResize&&window.removeEventListener("resize",this.handleWindowResize),this.pid=(0,d.default)()}},{key:"process",value:function(){var e=this,t=this.props,n=t.min,c=t.max,a=t.mode,o=t.forceSingleModeWidth,i=t.onReady,r=this._parent,u=this._child,f=(0,p.innerWidth)(r),b=(0,p.innerHeight)(r);if(b<=0||isNaN(b))console.warn("Can not process element without height. Make sure the element is displayed and has a static height.");else if(f<=0||isNaN(f))console.warn("Can not process element without width. Make sure the element is displayed and has a static width.");else{var g=(0,d.default)();this.pid=g;var v=function(){return g!==e.pid},O="multi"===a?function(){return m(u,b)}:function(){return h(u,f)},y="multi"===a?function(){return h(u,f)}:function(){return m(u,b)},j=void 0,w=n,x=c;this.setState({ready:!1}),(0,l.default)([function(t){return(0,s.default)((function(){return w<=x}),(function(t){if(v())return t(!0);j=parseInt((w+x)/2,10),e.setState({fontSize:j},(function(){return v()?t(!0):(O()?w=j+1:x=j-1,t())}))}),t)},function(t){return"single"===a&&o||y()?t():(w=n,x=j,(0,s.default)((function(){return w<x}),(function(t){if(v())return t(!0);j=parseInt((w+x)/2,10),e.setState({fontSize:j},(function(){return g!==e.pid?t(!0):(y()?w=j+1:x=j-1,t())}))}),t))},function(t){if(j=Math.min(w,x),j=Math.max(j,n),j=Math.min(j,c),j=Math.max(j,0),v())return t(!0);e.setState({fontSize:j},t)}],(function(t){t||v()||e.setState({ready:!0},(function(){return i(j)}))}))}}},{key:"render",value:function(){var e=this,t=this.props,n=t.children,a=t.text,i=t.style,r=(t.min,t.max,t.mode),l=(t.forceWidth,t.forceSingleModeWidth,t.throttle,t.autoResize,t.onReady,function(e,t){var n={};for(var c in e)t.indexOf(c)>=0||Object.prototype.hasOwnProperty.call(e,c)&&(n[c]=e[c]);return n}(t,["children","text","style","min","max","mode","forceWidth","forceSingleModeWidth","throttle","autoResize","onReady"])),s=this.state,u=s.fontSize,d=s.ready,p=c({},i,{fontSize:u}),f={display:d?"block":"inline-block"};return"single"===r&&(f.whiteSpace="nowrap"),o.default.createElement("div",c({ref:function(t){return e._parent=t},style:p},l),o.default.createElement("div",{ref:function(t){return e._child=t},style:f},a&&"function"===typeof n?d?n(a):a:n))}}]),t}(o.default.Component);b.propTypes={children:i.default.node,text:i.default.string,min:i.default.number,max:i.default.number,mode:i.default.oneOf(["single","multi"]),forceSingleModeWidth:i.default.bool,throttle:i.default.number,onReady:i.default.func},b.defaultProps={min:1,max:100,mode:"multi",forceSingleModeWidth:!0,throttle:50,autoResize:!0,onReady:function(){}},t.default=b},qSYY:function(e,t,n){"use strict";var c=n("mBgD"),a=n("ey9+");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n("q1tI")),i=(0,c(n("8/g6")).default)(o.createElement("path",{d:"M22 10l-6-6H4c-1.1 0-2 .9-2 2v12.01c0 1.1.9 1.99 2 1.99l16-.01c1.1 0 2-.89 2-1.99v-8zm-7-4.5l5.5 5.5H15V5.5z"}),"Note");t.default=i}},[["/EDR",0,1,2,3,4,6,8]]]);