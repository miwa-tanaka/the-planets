"use strict";(self.webpackChunkthe_planets=self.webpackChunkthe_planets||[]).push([[698],{4811:function(e){var t=function(e,t){if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");t=Object.assign({pascalCase:!1},t);var a;return e=Array.isArray(e)?e.map((function(e){return e.trim()})).filter((function(e){return e.length})).join("-"):e.trim(),0===e.length?"":1===e.length?t.pascalCase?e.toUpperCase():e.toLowerCase():(e!==e.toLowerCase()&&(e=function(e){for(var t=!1,a=!1,n=!1,r=0;r<e.length;r++){var l=e[r];t&&/[a-zA-Z]/.test(l)&&l.toUpperCase()===l?(e=e.slice(0,r)+"-"+e.slice(r),t=!1,n=a,a=!0,r++):a&&n&&/[a-zA-Z]/.test(l)&&l.toLowerCase()===l?(e=e.slice(0,r-1)+"-"+e.slice(r-1),n=a,a=!1,t=!0):(t=l.toLowerCase()===l&&l.toUpperCase()!==l,n=a,a=l.toUpperCase()===l&&l.toLowerCase()!==l)}return e}(e)),e=e.replace(/^[_.\- ]+/,"").toLowerCase().replace(/[_.\- ]+(\w|$)/g,(function(e,t){return t.toUpperCase()})).replace(/\d+(\w|$)/g,(function(e){return e.toUpperCase()})),a=e,t.pascalCase?a.charAt(0).toUpperCase()+a.slice(1):a)};e.exports=t,e.exports.default=t},7059:function(e,t,a){a.d(t,{G:function(){return I},L:function(){return h},M:function(){return b},P:function(){return C},_:function(){return s},a:function(){return i},b:function(){return m},c:function(){return c},g:function(){return u},h:function(){return o}});var n=a(7294),r=(a(4811),a(5697)),l=a.n(r);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},i.apply(this,arguments)}function s(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t.indexOf(a=l[n])>=0||(r[a]=e[a]);return r}var o=function(){return"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype};var c=function(e){var t;return function(e){var t,a;return Boolean(null==e||null==(t=e.images)||null==(a=t.fallback)?void 0:a.src)}(e)?e:function(e){return Boolean(null==e?void 0:e.gatsbyImageData)}(e)?e.gatsbyImageData:function(e){return Boolean(null==e?void 0:e.gatsbyImage)}(e)?e.gatsbyImage:null==e||null==(t=e.childImageSharp)?void 0:t.gatsbyImageData};function m(e,t,a,n,r){return void 0===r&&(r={}),i({},a,{loading:n,shouldLoad:e,"data-main-image":"",style:i({},r,{opacity:t?1:0})})}function u(e,t,a,n,r,l,s,o){var c={};l&&(c.backgroundColor=l,"fixed"===a?(c.width=n,c.height=r,c.backgroundColor=l,c.position="relative"):("constrained"===a||"fullWidth"===a)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),s&&(c.objectFit=s),o&&(c.objectPosition=o);var m=i({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:i({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return m}var p,d=["children"],g=function(e){var t=e.layout,a=e.width,r=e.height;return"fullWidth"===t?n.createElement("div",{"aria-hidden":!0,style:{paddingTop:r/a*100+"%"}}):"constrained"===t?n.createElement("div",{style:{maxWidth:a,display:"block"}},n.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg height='"+r+"' width='"+a+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},h=function(e){var t=e.children,a=s(e,d);return n.createElement(n.Fragment,null,n.createElement(g,i({},a)),t,null)},v=["src","srcSet","loading","alt","shouldLoad"],E=["fallback","sources","shouldLoad"],f=function(e){var t=e.src,a=e.srcSet,r=e.loading,l=e.alt,o=void 0===l?"":l,c=e.shouldLoad,m=s(e,v);return n.createElement("img",i({},m,{decoding:"async",loading:r,src:c?t:void 0,"data-src":c?void 0:t,srcSet:c?a:void 0,"data-srcset":c?void 0:a,alt:o}))},w=function(e){var t=e.fallback,a=e.sources,r=void 0===a?[]:a,l=e.shouldLoad,o=void 0===l||l,c=s(e,E),m=c.sizes||(null==t?void 0:t.sizes),u=n.createElement(f,i({},c,t,{sizes:m,shouldLoad:o}));return r.length?n.createElement("picture",null,r.map((function(e){var t=e.media,a=e.srcSet,r=e.type;return n.createElement("source",{key:t+"-"+r+"-"+a,type:r,media:t,srcSet:o?a:void 0,"data-srcset":o?void 0:a,sizes:m})})),u):u};f.propTypes={src:r.string.isRequired,alt:r.string.isRequired,sizes:r.string,srcSet:r.string,shouldLoad:r.bool},w.displayName="Picture",w.propTypes={alt:r.string.isRequired,shouldLoad:r.bool,fallback:r.exact({src:r.string.isRequired,srcSet:r.string,sizes:r.string}),sources:r.arrayOf(r.oneOfType([r.exact({media:r.string.isRequired,type:r.string,sizes:r.string,srcSet:r.string.isRequired}),r.exact({media:r.string,type:r.string.isRequired,sizes:r.string,srcSet:r.string.isRequired})]))};var y=["fallback"],C=function(e){var t=e.fallback,a=s(e,y);return t?n.createElement(w,i({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):n.createElement("div",i({},a))};C.displayName="Placeholder",C.propTypes={fallback:r.string,sources:null==(p=w.propTypes)?void 0:p.sources,alt:function(e,t,a){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Validation failed."):null}};var b=function(e){return n.createElement(n.Fragment,null,n.createElement(w,i({},e)),n.createElement("noscript",null,n.createElement(w,i({},e,{shouldLoad:!0}))))};b.displayName="MainImage",b.propTypes=w.propTypes;var N,L,k=function(e,t,a){for(var n=arguments.length,r=new Array(n>3?n-3:0),i=3;i<n;i++)r[i-3]=arguments[i];return e.alt||""===e.alt?l().string.apply(l(),[e,t,a].concat(r)):new Error('The "alt" prop is required in '+a+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},x={image:l().object.isRequired,alt:k},S=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],M=["style","className"],T=new Set,W=function(e){var t=e.as,r=void 0===t?"div":t,l=e.image,c=e.style,m=e.backgroundColor,u=e.className,p=e.class,d=e.onStartLoad,g=e.onLoad,h=e.onError,v=s(e,S),E=l.width,f=l.height,w=l.layout,y=function(e,t,a){var n={},r="gatsby-image-wrapper";return"fixed"===a?(n.width=e,n.height=t):"constrained"===a&&(r="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:r,"data-gatsby-image-wrapper":"",style:n}}(E,f,w),C=y.style,b=y.className,k=s(y,M),x=(0,n.useRef)(),W=(0,n.useMemo)((function(){return JSON.stringify(l.images)}),[l.images]);p&&(u=p);var I=function(e,t,a){var n="";return"fullWidth"===e&&(n='<div aria-hidden="true" style="padding-top: '+a/t*100+'%;"></div>'),"constrained"===e&&(n='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg height=\''+a+"' width='"+t+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),n}(w,E,f);return(0,n.useEffect)((function(){N||(N=Promise.all([a.e(774),a.e(680)]).then(a.bind(a,8680)).then((function(e){var t=e.renderImageToString,a=e.swapPlaceholderImage;return L=t,{renderImageToString:t,swapPlaceholderImage:a}})));var e,t,n=x.current.querySelector("[data-gatsby-image-ssr]");return n&&o()?(n.complete?(null==d||d({wasCached:!0}),null==g||g({wasCached:!0}),setTimeout((function(){n.removeAttribute("data-gatsby-image-ssr")}),0)):document.addEventListener("load",(function e(){document.removeEventListener("load",e),null==d||d({wasCached:!0}),null==g||g({wasCached:!0}),setTimeout((function(){n.removeAttribute("data-gatsby-image-ssr")}),0)})),void T.add(W)):L&&T.has(W)?void 0:(N.then((function(a){var n=a.renderImageToString,r=a.swapPlaceholderImage;x.current&&(x.current.innerHTML=n(i({isLoading:!0,isLoaded:T.has(W),image:l},v)),T.has(W)||(e=requestAnimationFrame((function(){x.current&&(t=r(x.current,W,T,c,d,g,h))}))))})),function(){e&&cancelAnimationFrame(e),t&&t()})}),[l]),(0,n.useLayoutEffect)((function(){T.has(W)&&L&&(x.current.innerHTML=L(i({isLoading:T.has(W),isLoaded:T.has(W),image:l},v)),null==d||d({wasCached:!0}),null==g||g({wasCached:!0}))}),[l]),(0,n.createElement)(r,i({},k,{style:i({},C,c,{backgroundColor:m}),className:b+(u?" "+u:""),ref:x,dangerouslySetInnerHTML:{__html:I},suppressHydrationWarning:!0}))},I=(0,n.memo)((function(e){return e.image?(0,n.createElement)(W,e):null}));I.propTypes=x,I.displayName="GatsbyImage";var G,B=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions"],H=function(e,t){for(var a=arguments.length,n=new Array(a>2?a-2:0),r=2;r<a;r++)n[r-2]=arguments[r];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?l().number.apply(l(),[e,t].concat(n)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},P=new Set(["fixed","fullWidth","constrained"]),R={src:l().string.isRequired,alt:k,width:H,height:H,sizes:l().string,layout:function(e){if(void 0!==e.layout&&!P.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}},_=(G=I,function(e){var t=e.src,a=e.__imageData,r=e.__error,l=s(e,B);return r&&console.warn(r),a?n.createElement(G,i({image:a},l)):(console.warn("Image not loaded",t),null)});_.displayName="StaticImage",_.propTypes=R},7306:function(e,t,a){var n=a(7294),r=a(1597);t.Z=function(){var e=(0,n.useState)(!1),t=e[0],a=e[1];return n.createElement("header",null,n.createElement("div",{className:"ttl"},n.createElement(r.Link,{to:"/","aria-label":"Go to the top page"},"THE PLANETS")),n.createElement("nav",null,n.createElement("div",null,n.createElement(r.Link,{to:"/mercury/","aria-label":"Go to Mercury page"},"mercury")),n.createElement("div",null,n.createElement(r.Link,{to:"/venus/","aria-label":"Go to Venus page"},"venus")),n.createElement("div",null,n.createElement(r.Link,{to:"/earth/","aria-label":"Go to Earth page"},"earth")),n.createElement("div",null,n.createElement(r.Link,{to:"/mars/","aria-label":"Go to Mars page"},"mars")),n.createElement("div",null,n.createElement(r.Link,{to:"/jupiter/","aria-label":"Go to Jupiter page"},"jupiter")),n.createElement("div",null,n.createElement(r.Link,{to:"/saturn/","aria-label":"Go to Saturn page"},"saturn")),n.createElement("div",null,n.createElement(r.Link,{to:"/uranus/","aria-label":"Go to Uranus page"},"uranus")),n.createElement("div",null,n.createElement(r.Link,{to:"/neptune/","aria-label":"Go to Neptune page"},"neptune"))),n.createElement("div",{className:"hamMenuBtn"},n.createElement("button",{onClick:function(){a(!t)},"aria-label":"opne menu"},n.createElement("div",{className:t?"isOpen":"isClose"},n.createElement("span",{className:"hamMenu1"}),n.createElement("span",{className:"hamMenu2"}),n.createElement("span",{className:"hamMenu3"})))),t&&n.createElement("div",{className:"hamMenuWrapper"},n.createElement(r.Link,{to:"/mercury/","aria-label":"Go to Mercury page"},n.createElement("div",{className:"linkContent"},n.createElement("span",{className:"circle mercury"}),n.createElement("span",{className:"pageName"},"mercury"),n.createElement("span",null,n.createElement("svg",{width:"6",height:"10",viewBox:"0 0 6 10",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n.createElement("path",{opacity:"0.4",d:"M1 1L5 5L1 9",stroke:"white"}))))),n.createElement(r.Link,{to:"/venus/","aria-label":"Go to Venus page"},n.createElement("div",{className:"linkContent"},n.createElement("span",{className:"circle venus"}),n.createElement("span",{className:"pageName"},"venus"),n.createElement("span",null,n.createElement("svg",{width:"6",height:"10",viewBox:"0 0 6 10",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n.createElement("path",{opacity:"0.4",d:"M1 1L5 5L1 9",stroke:"white"}))))),n.createElement(r.Link,{to:"/earth/","aria-label":"Go to Earth page"},n.createElement("div",{className:"linkContent"},n.createElement("span",{className:"circle earth"}),n.createElement("span",{className:"pageName"},"earth"),n.createElement("span",null,n.createElement("svg",{width:"6",height:"10",viewBox:"0 0 6 10",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n.createElement("path",{opacity:"0.4",d:"M1 1L5 5L1 9",stroke:"white"}))))),n.createElement(r.Link,{to:"/mars/","aria-label":"Go to Mars page"},n.createElement("div",{className:"linkContent"},n.createElement("span",{className:"circle mars"}),n.createElement("span",{className:"pageName"},"mars"),n.createElement("span",null,n.createElement("svg",{width:"6",height:"10",viewBox:"0 0 6 10",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n.createElement("path",{opacity:"0.4",d:"M1 1L5 5L1 9",stroke:"white"}))))),n.createElement(r.Link,{to:"/jupiter/","aria-label":"Go to Jupiter page"},n.createElement("div",{className:"linkContent"},n.createElement("span",{className:"circle jupiter"}),n.createElement("span",{className:"pageName"},"jupiter"),n.createElement("span",null,n.createElement("svg",{width:"6",height:"10",viewBox:"0 0 6 10",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n.createElement("path",{opacity:"0.4",d:"M1 1L5 5L1 9",stroke:"white"}))))),n.createElement(r.Link,{to:"/saturn/","aria-label":"Go to Saturn page"},n.createElement("div",{className:"linkContent"},n.createElement("span",{className:"circle saturn"}),n.createElement("span",{className:"pageName"},"saturn"),n.createElement("span",null,n.createElement("svg",{width:"6",height:"10",viewBox:"0 0 6 10",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n.createElement("path",{opacity:"0.4",d:"M1 1L5 5L1 9",stroke:"white"}))))),n.createElement(r.Link,{to:"/uranus/","aria-label":"Go to Uranus page"},n.createElement("div",{className:"linkContent"},n.createElement("span",{className:"circle uranus"}),n.createElement("span",{className:"pageName"},"uranus"),n.createElement("span",null,n.createElement("svg",{width:"6",height:"10",viewBox:"0 0 6 10",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n.createElement("path",{opacity:"0.4",d:"M1 1L5 5L1 9",stroke:"white"}))))),n.createElement(r.Link,{to:"/neptune/","aria-label":"Go to Neptune page"},n.createElement("div",{className:"linkContent"},n.createElement("span",{className:"circle neptune"}),n.createElement("span",{className:"pageName"},"neptune"),n.createElement("span",null,n.createElement("svg",{width:"6",height:"10",viewBox:"0 0 6 10",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n.createElement("path",{opacity:"0.4",d:"M1 1L5 5L1 9",stroke:"white"})))))))}},7045:function(e,t,a){a.r(t),a.d(t,{default:function(){return i}});var n=a(7294),r=a(7059),l=a(7306);function i(e){var t=e.data,a=e.location,i=(0,n.useState)(!0),s=i[0],o=i[1],c=(0,n.useState)(!1),m=c[0],u=c[1],p=(0,n.useState)(!1),d=p[0],g=p[1],h=t.allPlanetsJson.nodes[0];"/mercury/"===a.pathname||"/the-planets/mercury/"===a.pathname?h=t.allPlanetsJson.nodes[0]:"/venus/"===a.pathname||"/the-planets/venus/"===a.pathname?h=t.allPlanetsJson.nodes[1]:"/earth/"===a.pathname||"/the-planets/earth/"===a.pathname?h=t.allPlanetsJson.nodes[2]:"/mars/"===a.pathname||"/the-planets/mars/"===a.pathname?h=t.allPlanetsJson.nodes[3]:"/jupiter/"===a.pathname||"/the-planets/jupiter/"===a.pathname?h=t.allPlanetsJson.nodes[4]:"/saturn/"===a.pathname||"/the-planets/saturn/"===a.pathname?h=t.allPlanetsJson.nodes[5]:"/uranus/"===a.pathname||"/the-planets/uranus/"===a.pathname?h=t.allPlanetsJson.nodes[6]:"/neptune/"!==a.pathname&&"/the-planets/neptune/"!==a.pathname||(h=t.allPlanetsJson.nodes[7]);var v=(0,r.c)(h.planetImg),E=(0,r.c)(h.internalImg),f=(0,r.c)(h.geologyImg),w=function(){o(!0),u(!1),g(!1)},y=function(){o(!1),u(!0),g(!1)},C=function(){o(!1),u(!1),g(!0)};return n.createElement(n.Fragment,null,n.createElement("div",{className:"pageWrapper"},n.createElement("title",null,h.name),n.createElement(l.Z,null),n.createElement("main",null,n.createElement("div",{className:"spBtnWrapper"},n.createElement("button",{onClick:w,"aria-label":"show overview image",className:s?h.color:"inactive"},"overview"),n.createElement("button",{onClick:y,"aria-label":"show internal structure image",className:m?h.color:"inactive"},"structure"),n.createElement("button",{onClick:C,"aria-label":"show surface geology image",className:d?h.color:"inactive"},"surface")),n.createElement("div",{className:"datesWrapper"},n.createElement("div",{className:"imgsWrapper"},s&&n.createElement(r.G,{image:v,alt:"overview image"}),m&&n.createElement(r.G,{image:E,alt:"internal structure image"}),d&&n.createElement(r.G,{image:f,alt:"surface geology image"})),n.createElement("div",{className:"contentsWrapper"},n.createElement("h1",null,h.name),s&&n.createElement("div",null,n.createElement("p",null,h.overview.content),n.createElement("a",{href:h.overview.source,target:"_blank",rel:"noopener noreferrer",className:"wiki","aria-label":"check source from Wikipedia"},"Source :",n.createElement("span",null," Wikipedia "),n.createElement("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n.createElement("path",{opacity:"0.5",fillRule:"evenodd",clipRule:"evenodd",d:"M9.75002 0C10.3698 0 10.8998 0.220059 11.3397 0.660095C11.7797 1.10013 11.9998 1.63022 11.9998 2.24998V9.74994C11.9998 10.3697 11.7797 10.8997 11.3396 11.3398C10.8997 11.7799 10.3697 12 9.74994 12H2.24998C1.63025 12 1.10021 11.7799 0.660095 11.3398C0.220059 10.8997 0 10.3696 0 9.74994V2.24998C0 1.63022 0.220059 1.10021 0.660095 0.660095C1.10021 0.220059 1.63025 0 2.24998 0H9.75002ZM9.69524 6.71084C9.89825 6.62224 9.99996 6.46867 9.99996 6.24993H9.99999V2.49998C9.99999 2.36455 9.95051 2.24733 9.85165 2.14843C9.75254 2.04943 9.63531 1.9999 9.49991 1.9999H5.75007C5.53133 1.9999 5.3776 2.10156 5.2891 2.30463C5.20061 2.51825 5.23703 2.70044 5.39853 2.85149L6.52354 3.97647L2.35161 8.14845C2.25264 8.24734 2.20313 8.36459 2.20313 8.49988C2.20313 8.63522 2.25264 8.75264 2.35161 8.85142L3.14847 9.64842C3.24742 9.74731 3.36461 9.79687 3.50012 9.79687C3.63557 9.79687 3.75266 9.74731 3.85174 9.64842L8.02342 5.47649L9.14835 6.60147C9.24218 6.70033 9.3594 6.74989 9.49989 6.74989C9.56228 6.74989 9.62762 6.73686 9.69524 6.71084Z",fill:"white"})))),m&&n.createElement("div",null,n.createElement("p",null,h.structure.content),n.createElement("a",{href:h.structure.source,target:"_blank",rel:"noopener noreferrer",className:"wiki","aria-label":"check source from Wikipedia"},"Source :",n.createElement("span",null," Wikipedia "),n.createElement("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n.createElement("path",{opacity:"0.5",fillRule:"evenodd",clipRule:"evenodd",d:"M9.75002 0C10.3698 0 10.8998 0.220059 11.3397 0.660095C11.7797 1.10013 11.9998 1.63022 11.9998 2.24998V9.74994C11.9998 10.3697 11.7797 10.8997 11.3396 11.3398C10.8997 11.7799 10.3697 12 9.74994 12H2.24998C1.63025 12 1.10021 11.7799 0.660095 11.3398C0.220059 10.8997 0 10.3696 0 9.74994V2.24998C0 1.63022 0.220059 1.10021 0.660095 0.660095C1.10021 0.220059 1.63025 0 2.24998 0H9.75002ZM9.69524 6.71084C9.89825 6.62224 9.99996 6.46867 9.99996 6.24993H9.99999V2.49998C9.99999 2.36455 9.95051 2.24733 9.85165 2.14843C9.75254 2.04943 9.63531 1.9999 9.49991 1.9999H5.75007C5.53133 1.9999 5.3776 2.10156 5.2891 2.30463C5.20061 2.51825 5.23703 2.70044 5.39853 2.85149L6.52354 3.97647L2.35161 8.14845C2.25264 8.24734 2.20313 8.36459 2.20313 8.49988C2.20313 8.63522 2.25264 8.75264 2.35161 8.85142L3.14847 9.64842C3.24742 9.74731 3.36461 9.79687 3.50012 9.79687C3.63557 9.79687 3.75266 9.74731 3.85174 9.64842L8.02342 5.47649L9.14835 6.60147C9.24218 6.70033 9.3594 6.74989 9.49989 6.74989C9.56228 6.74989 9.62762 6.73686 9.69524 6.71084Z",fill:"white"})))),d&&n.createElement("div",null,n.createElement("p",null,h.geology.content),n.createElement("a",{href:h.geology.source,target:"_blank",rel:"noopener noreferrer",className:"wiki","aria-label":"check source from Wikipedia"},"Source :",n.createElement("span",null," Wikipedia "),n.createElement("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n.createElement("path",{opacity:"0.5",fillRule:"evenodd",clipRule:"evenodd",d:"M9.75002 0C10.3698 0 10.8998 0.220059 11.3397 0.660095C11.7797 1.10013 11.9998 1.63022 11.9998 2.24998V9.74994C11.9998 10.3697 11.7797 10.8997 11.3396 11.3398C10.8997 11.7799 10.3697 12 9.74994 12H2.24998C1.63025 12 1.10021 11.7799 0.660095 11.3398C0.220059 10.8997 0 10.3696 0 9.74994V2.24998C0 1.63022 0.220059 1.10021 0.660095 0.660095C1.10021 0.220059 1.63025 0 2.24998 0H9.75002ZM9.69524 6.71084C9.89825 6.62224 9.99996 6.46867 9.99996 6.24993H9.99999V2.49998C9.99999 2.36455 9.95051 2.24733 9.85165 2.14843C9.75254 2.04943 9.63531 1.9999 9.49991 1.9999H5.75007C5.53133 1.9999 5.3776 2.10156 5.2891 2.30463C5.20061 2.51825 5.23703 2.70044 5.39853 2.85149L6.52354 3.97647L2.35161 8.14845C2.25264 8.24734 2.20313 8.36459 2.20313 8.49988C2.20313 8.63522 2.25264 8.75264 2.35161 8.85142L3.14847 9.64842C3.24742 9.74731 3.36461 9.79687 3.50012 9.79687C3.63557 9.79687 3.75266 9.74731 3.85174 9.64842L8.02342 5.47649L9.14835 6.60147C9.24218 6.70033 9.3594 6.74989 9.49989 6.74989C9.56228 6.74989 9.62762 6.73686 9.69524 6.71084Z",fill:"white"})))),n.createElement("div",{className:"pcBtnWrapper overview"},n.createElement("button",{onClick:w,"aria-label":"show overview image",className:s?h.color:"inactive"},n.createElement("span",null,"01"),"overview")),n.createElement("div",{className:"pcBtnWrapper internal"},n.createElement("button",{onClick:y,"aria-label":"show internal structure image",className:m?h.color:"inactive"},n.createElement("span",null,"02"),"internal structure")),n.createElement("div",{className:"pcBtnWrapper surface"},n.createElement("button",{onClick:C,"aria-label":"show surface geology image",className:d?h.color:"inactive"},n.createElement("span",null,"03"),"surface geology")))),n.createElement("div",{className:"detailsWrapper"},n.createElement("div",{className:"box"},n.createElement("span",{className:"boxTtl"},"rotation time"),n.createElement("span",{className:"boxNum"},h.rotation)),n.createElement("div",{className:"box"},n.createElement("span",{className:"boxTtl"},"revolution time"),n.createElement("span",{className:"boxNum"},h.revolution)),n.createElement("div",{className:"box"},n.createElement("span",{className:"boxTtl"},"redius"),n.createElement("span",{className:"boxNum"},h.radius)),n.createElement("div",{className:"box"},n.createElement("span",{className:"boxTtl"},"average temp."),n.createElement("span",{className:"boxNum"},h.temperature))))))}}}]);
//# sourceMappingURL=component---src-templates-planets-js-2be51dc1ea1d21174df9.js.map