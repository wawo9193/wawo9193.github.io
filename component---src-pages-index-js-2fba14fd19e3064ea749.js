(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"9+L3":function(d,e,u){},"9HVx":function(d,e,u){},"9eSz":function(d,e,u){"use strict";var t=u("TqRt");e.__esModule=!0,e.default=void 0;var a,n=t(u("PJYZ")),r=t(u("VbXa")),c=t(u("8OQS")),f=t(u("pVnL")),i=t(u("q1tI")),l=t(u("17x9")),o=function(d){var e=(0,f.default)({},d),u=e.resolutions,t=e.sizes,a=e.critical;return u&&(e.fixed=u,delete e.resolutions),t&&(e.fluid=t,delete e.sizes),a&&(e.loading="eager"),e.fluid&&(e.fluid=S([].concat(e.fluid))),e.fixed&&(e.fixed=S([].concat(e.fixed))),e},s=function(d){var e=d.media;return!!e&&(y&&!!window.matchMedia(e).matches)},m=function(d){var e=d.fluid,u=d.fixed,t=p(e||u||[]);return t&&t.src},p=function(d){if(y&&function(d){return!!d&&Array.isArray(d)&&d.some((function(d){return void 0!==d.media}))}(d)){var e=d.findIndex(s);if(-1!==e)return d[e];var u=d.findIndex((function(d){return void 0===d.media}));if(-1!==u)return d[u]}return d[0]},b=Object.create({}),h=function(d){var e=o(d),u=m(e);return b[u]||!1},g="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,y="undefined"!=typeof window,v=y&&window.IntersectionObserver,E=new WeakMap;function w(d){return d.map((function(d){var e=d.src,u=d.srcSet,t=d.srcSetWebp,a=d.media,n=d.sizes;return i.default.createElement(i.default.Fragment,{key:e},t&&i.default.createElement("source",{type:"image/webp",media:a,srcSet:t,sizes:n}),i.default.createElement("source",{media:a,srcSet:u,sizes:n}))}))}function S(d){var e=[],u=[];return d.forEach((function(d){return(d.media?e:u).push(d)})),[].concat(e,u)}function k(d){return d.map((function(d){var e=d.src,u=d.media,t=d.tracedSVG;return i.default.createElement("source",{key:e,media:u,srcSet:t})}))}function j(d){return d.map((function(d){var e=d.src,u=d.media,t=d.base64;return i.default.createElement("source",{key:e,media:u,srcSet:t})}))}function C(d,e){var u=d.srcSet,t=d.srcSetWebp,a=d.media,n=d.sizes;return"<source "+(e?"type='image/webp' ":"")+(a?'media="'+a+'" ':"")+'srcset="'+(e?t:u)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var x=function(d,e){var u=(void 0===a&&"undefined"!=typeof window&&window.IntersectionObserver&&(a=new window.IntersectionObserver((function(d){d.forEach((function(d){if(E.has(d.target)){var e=E.get(d.target);(d.isIntersecting||d.intersectionRatio>0)&&(a.unobserve(d.target),E.delete(d.target),e())}}))}),{rootMargin:"200px"})),a);return u&&(u.observe(d),E.set(d,e)),function(){u.unobserve(d),E.delete(d)}},I=function(d){var e=d.src?'src="'+d.src+'" ':'src="" ',u=d.sizes?'sizes="'+d.sizes+'" ':"",t=d.srcSet?'srcset="'+d.srcSet+'" ':"",a=d.title?'title="'+d.title+'" ':"",n=d.alt?'alt="'+d.alt+'" ':'alt="" ',r=d.width?'width="'+d.width+'" ':"",c=d.height?'height="'+d.height+'" ':"",f=d.crossOrigin?'crossorigin="'+d.crossOrigin+'" ':"",i=d.loading?'loading="'+d.loading+'" ':"",l=d.draggable?'draggable="'+d.draggable+'" ':"";return"<picture>"+d.imageVariants.map((function(d){return(d.srcSetWebp?C(d,!0):"")+C(d)})).join("")+"<img "+i+r+c+u+t+e+n+a+f+l+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},L=i.default.forwardRef((function(d,e){var u=d.src,t=d.imageVariants,a=d.generateSources,n=d.spreadProps,r=d.ariaHidden,c=i.default.createElement(O,(0,f.default)({ref:e,src:u},n,{ariaHidden:r}));return t.length>1?i.default.createElement("picture",null,a(t),c):c})),O=i.default.forwardRef((function(d,e){var u=d.sizes,t=d.srcSet,a=d.src,n=d.style,r=d.onLoad,l=d.onError,o=d.loading,s=d.draggable,m=d.ariaHidden,p=(0,c.default)(d,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return i.default.createElement("img",(0,f.default)({"aria-hidden":m,sizes:u,srcSet:t,src:a},p,{onLoad:r,onError:l,ref:e,loading:o,draggable:s,style:(0,f.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));O.propTypes={style:l.default.object,onError:l.default.func,onLoad:l.default.func};var R=function(d){function e(e){var u;(u=d.call(this,e)||this).seenBefore=y&&h(e),u.isCritical="eager"===e.loading||e.critical,u.addNoScript=!(u.isCritical&&!e.fadeIn),u.useIOSupport=!g&&v&&!u.isCritical&&!u.seenBefore;var t=u.isCritical||y&&(g||!u.useIOSupport);return u.state={isVisible:t,imgLoaded:!1,imgCached:!1,fadeIn:!u.seenBefore&&e.fadeIn},u.imageRef=i.default.createRef(),u.placeholderRef=e.placeholderRef||i.default.createRef(),u.handleImageLoaded=u.handleImageLoaded.bind((0,n.default)(u)),u.handleRef=u.handleRef.bind((0,n.default)(u)),u}(0,r.default)(e,d);var u=e.prototype;return u.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:h(this.props)}),this.isCritical){var d=this.imageRef.current;d&&d.complete&&this.handleImageLoaded()}},u.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},u.handleRef=function(d){var e=this;this.useIOSupport&&d&&(this.cleanUpListeners=x(d,(function(){var d=h(e.props);e.state.isVisible||"function"!=typeof e.props.onStartLoad||e.props.onStartLoad({wasCached:d}),e.setState({isVisible:!0},(function(){e.setState({imgLoaded:d,imgCached:!(!e.imageRef.current||!e.imageRef.current.currentSrc)})}))})))},u.handleImageLoaded=function(){var d,e,u;d=this.props,e=o(d),(u=m(e))&&(b[u]=!0),this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},u.render=function(){var d=o(this.props),e=d.title,u=d.alt,t=d.className,a=d.style,n=void 0===a?{}:a,r=d.imgStyle,c=void 0===r?{}:r,l=d.placeholderStyle,s=void 0===l?{}:l,m=d.placeholderClassName,b=d.fluid,h=d.fixed,g=d.backgroundColor,y=d.durationFadeIn,v=d.Tag,E=d.itemProp,S=d.loading,C=d.draggable,x=!1===this.state.fadeIn||this.state.imgLoaded,R=!0===this.state.fadeIn&&!this.state.imgCached,N=(0,f.default)({opacity:x?1:0,transition:R?"opacity "+y+"ms":"none"},c),z="boolean"==typeof g?"lightgray":g,P={transitionDelay:y+"ms"},A=(0,f.default)({opacity:this.state.imgLoaded?0:1},R&&P,c,s),V={title:e,alt:this.state.isVisible?"":u,style:A,className:m,itemProp:E};if(b){var H=b,F=p(b);return i.default.createElement(v,{className:(t||"")+" gatsby-image-wrapper",style:(0,f.default)({position:"relative",overflow:"hidden",maxWidth:F.maxWidth?F.maxWidth+"px":null,maxHeight:F.maxHeight?F.maxHeight+"px":null},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(F.srcSet)},i.default.createElement(v,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/F.aspectRatio+"%"}}),z&&i.default.createElement(v,{"aria-hidden":!0,title:e,style:(0,f.default)({backgroundColor:z,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},R&&P)}),F.base64&&i.default.createElement(L,{ariaHidden:!0,ref:this.placeholderRef,src:F.base64,spreadProps:V,imageVariants:H,generateSources:j}),F.tracedSVG&&i.default.createElement(L,{ariaHidden:!0,ref:this.placeholderRef,src:F.tracedSVG,spreadProps:V,imageVariants:H,generateSources:k}),this.state.isVisible&&i.default.createElement("picture",null,w(H),i.default.createElement(O,{alt:u,title:e,sizes:F.sizes,src:F.src,crossOrigin:this.props.crossOrigin,srcSet:F.srcSet,style:N,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E,loading:S,draggable:C})),this.addNoScript&&i.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:I((0,f.default)({alt:u,title:e,loading:S},F,{imageVariants:H}))}}))}if(h){var T=h,M=p(h),q=(0,f.default)({position:"relative",overflow:"hidden",display:"inline-block",width:M.width,height:M.height},n);return"inherit"===n.display&&delete q.display,i.default.createElement(v,{className:(t||"")+" gatsby-image-wrapper",style:q,ref:this.handleRef,key:"fixed-"+JSON.stringify(M.srcSet)},z&&i.default.createElement(v,{"aria-hidden":!0,title:e,style:(0,f.default)({backgroundColor:z,width:M.width,opacity:this.state.imgLoaded?0:1,height:M.height},R&&P)}),M.base64&&i.default.createElement(L,{ariaHidden:!0,ref:this.placeholderRef,src:M.base64,spreadProps:V,imageVariants:T,generateSources:j}),M.tracedSVG&&i.default.createElement(L,{ariaHidden:!0,ref:this.placeholderRef,src:M.tracedSVG,spreadProps:V,imageVariants:T,generateSources:k}),this.state.isVisible&&i.default.createElement("picture",null,w(T),i.default.createElement(O,{alt:u,title:e,width:M.width,height:M.height,sizes:M.sizes,src:M.src,crossOrigin:this.props.crossOrigin,srcSet:M.srcSet,style:N,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E,loading:S,draggable:C})),this.addNoScript&&i.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:I((0,f.default)({alt:u,title:e,loading:S},M,{imageVariants:T}))}}))}return null},e}(i.default.Component);R.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var N=l.default.shape({width:l.default.number.isRequired,height:l.default.number.isRequired,src:l.default.string.isRequired,srcSet:l.default.string.isRequired,base64:l.default.string,tracedSVG:l.default.string,srcWebp:l.default.string,srcSetWebp:l.default.string,media:l.default.string}),z=l.default.shape({aspectRatio:l.default.number.isRequired,src:l.default.string.isRequired,srcSet:l.default.string.isRequired,sizes:l.default.string.isRequired,base64:l.default.string,tracedSVG:l.default.string,srcWebp:l.default.string,srcSetWebp:l.default.string,media:l.default.string,maxWidth:l.default.number,maxHeight:l.default.number});function P(d){return function(e,u,t){var a;if(!e.fixed&&!e.fluid)throw new Error("The prop `fluid` or `fixed` is marked as required in `"+t+"`, but their values are both `undefined`.");l.default.checkPropTypes(((a={})[u]=d,a),e,"prop",t)}}R.propTypes={resolutions:N,sizes:z,fixed:P(l.default.oneOfType([N,l.default.arrayOf(N)])),fluid:P(l.default.oneOfType([z,l.default.arrayOf(z)])),fadeIn:l.default.bool,durationFadeIn:l.default.number,title:l.default.string,alt:l.default.string,className:l.default.oneOfType([l.default.string,l.default.object]),critical:l.default.bool,crossOrigin:l.default.oneOfType([l.default.string,l.default.bool]),style:l.default.object,imgStyle:l.default.object,placeholderStyle:l.default.object,placeholderClassName:l.default.string,backgroundColor:l.default.oneOfType([l.default.string,l.default.bool]),onLoad:l.default.func,onError:l.default.func,onStartLoad:l.default.func,Tag:l.default.string,itemProp:l.default.string,loading:l.default.oneOf(["auto","lazy","eager"]),draggable:l.default.bool};var A=R;e.default=A},EDuE:function(d,e,u){},FfUf:function(d,e,u){},L7TZ:function(d,e,u){(function(e){var u="object"==typeof e&&e&&e.Object===Object&&e,t="object"==typeof self&&self&&self.Object===Object&&self,a=u||t||Function("return this")();function n(d,e){for(var u=-1,t=e.length,a=d.length;++u<t;)d[a+u]=e[u];return d}var r=Object.prototype,c=r.hasOwnProperty,f=r.toString,i=a.Symbol,l=r.propertyIsEnumerable,o=i?i.isConcatSpreadable:void 0;function s(d){return m(d)||function(d){return function(d){return function(d){return!!d&&"object"==typeof d}(d)&&function(d){return null!=d&&function(d){return"number"==typeof d&&d>-1&&d%1==0&&d<=9007199254740991}(d.length)&&!function(d){var e=function(d){var e=typeof d;return!!d&&("object"==e||"function"==e)}(d)?f.call(d):"";return"[object Function]"==e||"[object GeneratorFunction]"==e}(d)}(d)}(d)&&c.call(d,"callee")&&(!l.call(d,"callee")||"[object Arguments]"==f.call(d))}(d)||!!(o&&d&&d[o])}var m=Array.isArray;d.exports=function(d){return(d?d.length:0)?function d(e,u,t,a,r){var c=-1,f=e.length;for(t||(t=s),r||(r=[]);++c<f;){var i=e[c];u>0&&t(i)?u>1?d(i,u-1,t,a,r):n(r,i):a||(r[r.length]=i)}return r}(d,1):[]}}).call(this,u("yLpj"))},LfKb:function(d,e,u){var t=u("q1tI"),a=u("QqA1"),n="undefined"==typeof location?"":"https:"===location.protocol?"https:":"http:",r={height:"1em",width:"1em",margin:"0 .05em 0 .1em",verticalAlign:"-0.1em"};d.exports=function(d){return d=a({},{protocol:n,baseUrl:"//twemoji.maxcdn.com/2/",size:"72x72",ext:".png",props:null},d),function(e,u,n){var c,f="";return 0!==d.baseUrl.indexOf("http")&&(f+=(c=d.protocol)&&c.length>0&&":"!==c.charAt(c.length-1)?c+":":c),f+=d.baseUrl+d.size+"/"+e+d.ext,t.createElement("img",a({key:n,alt:u,draggable:!1,src:f,style:r},d.props))}}},QqA1:function(d,e){var u=/^(?:0|[1-9]\d*)$/;function t(d,e,u){switch(u.length){case 0:return d.call(e);case 1:return d.call(e,u[0]);case 2:return d.call(e,u[0],u[1]);case 3:return d.call(e,u[0],u[1],u[2])}return d.apply(e,u)}var a,n,r=Object.prototype,c=r.hasOwnProperty,f=r.toString,i=r.propertyIsEnumerable,l=(a=Object.keys,n=Object,function(d){return a(n(d))}),o=Math.max,s=!i.call({valueOf:1},"valueOf");function m(d,e){var u=y(d)||function(d){return function(d){return function(d){return!!d&&"object"==typeof d}(d)&&v(d)}(d)&&c.call(d,"callee")&&(!i.call(d,"callee")||"[object Arguments]"==f.call(d))}(d)?function(d,e){for(var u=-1,t=Array(d);++u<d;)t[u]=e(u);return t}(d.length,String):[],t=u.length,a=!!t;for(var n in d)!e&&!c.call(d,n)||a&&("length"==n||b(n,t))||u.push(n);return u}function p(d,e,u){var t=d[e];c.call(d,e)&&g(t,u)&&(void 0!==u||e in d)||(d[e]=u)}function b(d,e){return!!(e=null==e?9007199254740991:e)&&("number"==typeof d||u.test(d))&&d>-1&&d%1==0&&d<e}function h(d){var e=d&&d.constructor;return d===("function"==typeof e&&e.prototype||r)}function g(d,e){return d===e||d!=d&&e!=e}var y=Array.isArray;function v(d){return null!=d&&function(d){return"number"==typeof d&&d>-1&&d%1==0&&d<=9007199254740991}(d.length)&&!function(d){var e=E(d)?f.call(d):"";return"[object Function]"==e||"[object GeneratorFunction]"==e}(d)}function E(d){var e=typeof d;return!!d&&("object"==e||"function"==e)}var w,S=(w=function(d,e){if(s||h(e)||v(e))!function(d,e,u,t){u||(u={});for(var a=-1,n=e.length;++a<n;){var r=e[a],c=t?t(u[r],d[r],r,u,d):void 0;p(u,r,void 0===c?d[r]:c)}}(e,function(d){return v(d)?m(d):function(d){if(!h(d))return l(d);var e=[];for(var u in Object(d))c.call(d,u)&&"constructor"!=u&&e.push(u);return e}(d)}(e),d);else for(var u in e)c.call(e,u)&&p(d,u,e[u])},function(d,e){return e=o(void 0===e?d.length-1:e,0),function(){for(var u=arguments,a=-1,n=o(u.length-e,0),r=Array(n);++a<n;)r[a]=u[e+a];a=-1;for(var c=Array(e+1);++a<e;)c[a]=u[a];return c[e]=r,t(d,this,c)}}((function(d,e){var u=-1,t=e.length,a=t>1?e[t-1]:void 0,n=t>2?e[2]:void 0;for(a=w.length>3&&"function"==typeof a?(t--,a):void 0,n&&function(d,e,u){if(!E(u))return!1;var t=typeof e;return!!("number"==t?v(u)&&b(e,u.length):"string"==t&&e in u)&&g(u[e],d)}(e[0],e[1],n)&&(a=t<3?void 0:a,t=1),d=Object(d);++u<t;){var r=e[u];r&&w(d,r,u,a)}return d})));d.exports=S},RXBc:function(d,e,u){"use strict";u.r(e);var t=u("dI71"),a=u("q1tI"),n=u.n(a),r=u("oE+H"),c=u.n(r),f=u("Bl7J"),i=u("Wbzz"),l=u("9eSz"),o=u.n(l),s=function(){var d=Object(i.useStaticQuery)("2270213217");return n.a.createElement(o.a,{style:{borderRadius:"20%"},fluid:d.placeholderImage.childImageSharp.fluid})},m=u("vrFN");u("9HVx");function p(d){window.open(d)}var b=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("table",null,n.a.createElement("tr",null,n.a.createElement("th",null,"Project name"),n.a.createElement("th",null,"Stack used"),n.a.createElement("th",null,"Description"),n.a.createElement("th",null,"Date")),n.a.createElement("tr",{className:"rowBtn",type:"submit",onClick:function(){return p("https://www.github.com/wawo9193/dunjin")}},n.a.createElement("td",null,"dunjin"),n.a.createElement("td",null,"NodeJS, React, MySQL, HTML/CSS"),n.a.createElement("td",null,"Personal budget dashboard using Plaid API endpoints to retrieve connection/information. Learned about Authentication/Authorization, interacting with API endpoints, and how state and props work in the React framework."),n.a.createElement("td",null,"May 2020-Present")),n.a.createElement("tr",{className:"rowBtn",type:"submit",onClick:function(){return p("https://github.com/jphouminh71/csci3308_fall19")}},n.a.createElement("td",null,"Fittrack"),n.a.createElement("td",null,"NodeJS, MongoDB, HTML/CSS"),n.a.createElement("td",null,"Fitness tracker dashboard with a profile page to help personalize the experience. Learned how to handle requests on the backend and how to interact with a database."),n.a.createElement("td",null,"Sept. 2019-Dec. 2019")),n.a.createElement("tr",{className:"rowBtn",type:"submit",onClick:function(){return p("https://www.github.com/wawo9193/ufly")}},n.a.createElement("td",null,"Ufly"),n.a.createElement("td",null,"C++, Qt"),n.a.createElement("td",null,"Student version of Uber for private jets with rudimentary frontend to showcase knowledge of graphs. Learned more modern C++ techniques and also found a neat way to calculate distance accurately with the Haversine formula."),n.a.createElement("td",null,"Feb. 2019-April 2019"))))},h="https://www.github.com/wawo9193/",g="https://www.linkedin.com/in/wayne-wood/",y=(u("FfUf"),u("9+L3"),function(d){return n.a.createElement("div",null,n.a.createElement("div",{className:"listBtn"},n.a.createElement("button",{value:"about",onClick:function(e){return d.handleClick(e)}},"About Me"),n.a.createElement("button",{value:"projects",onClick:function(e){return d.handleClick(e)}},"Recent Projects"),n.a.createElement("button",{value:"skills",onClick:function(e){return d.handleClick(e)}},"Skills"),n.a.createElement("button",{value:"contact",onClick:function(e){return d.handleClick(e)}},"Contact/Urls")),n.a.createElement("a",{href:h,className:"iconBtn github"},n.a.createElement("i",{className:"fab fa-github"}),n.a.createElement("span",null)),n.a.createElement("a",{href:g,className:"iconBtn linkedin"},n.a.createElement("i",{className:"fab fa-linkedin"}),n.a.createElement("span",null)))}),v=(u("EDuE"),function(d){function e(){var e;return(e=d.call(this)||this).handleClick=function(d){var u=d.target.value;"about"===u?e.setState({about:!0,projects:!1,skills:!1,contact:!1}):"projects"===u?e.setState({about:!1,projects:!0,skills:!1,contact:!1}):"skills"===u?e.setState({about:!1,projects:!1,skills:!0,contact:!1}):"contact"===u&&e.setState({about:!1,projects:!1,skills:!1,contact:!0})},e.state={about:!0,projects:!1,skills:!1,contact:!1},e.handleClick=e.handleClick.bind(function(d){if(void 0===d)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return d}(e)),e}return Object(t.a)(e,d),e.prototype.render=function(){var d=this.state.about?"":"hideComponent",e=this.state.projects?"":"hideComponent",u=this.state.skills?"":"hideComponent",t=this.state.contact?"":"hideComponent";return n.a.createElement(f.a,null,n.a.createElement(m.a,{title:"Home"}),n.a.createElement("h1",null,c()("Hello 👋🏼")),n.a.createElement("p",null,"Welcome to my portfolio page."),n.a.createElement("div",{className:"backgroundMain"},n.a.createElement("div",{className:"backgroundCard"},n.a.createElement(s,null),n.a.createElement("h3",null,"Wayne Wood"),n.a.createElement("small",{style:{marginBottom:"-3px"}},"Student, University of Colorado Boulder"),n.a.createElement("small",{style:{marginBottom:"30px"}},"May 2021 (Expected)"),n.a.createElement(y,{handleClick:this.handleClick})),n.a.createElement("div",{className:"backgroundBody"},n.a.createElement("div",{className:d},n.a.createElement("h3",null,"About Me"),n.a.createElement("p",null,"Hi, my name is Wayne and I am a rising senior at CU Boulder. I have interned as a Software Engineer at Panasonic and worked as a Data Structures Course Assistant at CU Boulder's Computer Science Department. I am currently trying to expand my knowledge on object oriented programming, and full-stack development. I enjoy optimizing code runtime, coding in general and in my spare time I enjoy movies, food, star-gazing, basketball, frisbee, cycling, and hiking."),n.a.createElement("br",null),n.a.createElement("p",null,"I am most adept at C++, Python, and the React/Node Javascript frameworks. I have recently taken a Udemy course in Golang basics and am currently in a course where I will learn Java more in-depth."),n.a.createElement("br",null),n.a.createElement("p",null,"I am looking for a new grad opportunity for the Summer of 2021, so please reach out if you would like a resume and/or are hiring!")),n.a.createElement("div",{className:e},n.a.createElement("h3",null,"Recent Projects"),n.a.createElement(b,null)),n.a.createElement("div",{className:u},n.a.createElement("h3",null,"About Me"),n.a.createElement("h5",null,"Languages:"),n.a.createElement("ul",null,n.a.createElement("li",null,"C++"),n.a.createElement("li",null,"Python"),n.a.createElement("li",null,"Javascript"),n.a.createElement("li",null,"Go"),n.a.createElement("li",null,"Scala"),n.a.createElement("li",null,"Java (In Progress)")),n.a.createElement("h5",null,"Frameworks:"),n.a.createElement("ul",null,n.a.createElement("li",null,"React"),n.a.createElement("li",null,"Node"),n.a.createElement("li",null,"Express"))),n.a.createElement("div",{className:t},n.a.createElement("div",{className:"contactLinks"},n.a.createElement("h3",null,"Contact"),n.a.createElement("i",{className:"far fa-envelope"},": wayne.wood@colorado.edu"),n.a.createElement("br",null),n.a.createElement("h3",null,"Project Links"),n.a.createElement("a",{href:"https://www.github.com/wawo9193"},n.a.createElement("i",{className:"far fa-compass"},": https://fittrack.herokuapp.com")),n.a.createElement("a",{href:"https://www.github.com/wawo9193"},n.a.createElement("i",{className:"far fa-compass"},": https://dunjin-app.herokuapp.com (in progress)")),n.a.createElement("br",null),n.a.createElement("h3",null,"Links"),n.a.createElement("a",{href:"https://www.github.com/wawo9193"},n.a.createElement("i",{className:"fab fa-github"},": https://www.github.com/wawo9193")),n.a.createElement("a",{href:"https://www.github.com/wawo9193"},n.a.createElement("i",{className:"fab fa-linkedin"},": https://www.linkedin.com/wayne-wood")))))))},e}(a.Component));e.default=v},VrqS:function(d,e,u){var t=u("tp12"),a=/(?:\ud83d\udc68\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffc-\udfff]|\ud83d\udc68\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffd-\udfff]|\ud83d\udc68\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffc\udffe\udfff]|\ud83d\udc68\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffd\udfff]|\ud83d\udc68\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffe]|\ud83d\udc69\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffc-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffc-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffd-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb\udffd-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffc\udffe\udfff]|\ud83d\udc69\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb\udffc\udffe\udfff]|\ud83d\udc69\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffd\udfff]|\ud83d\udc69\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb-\udffd\udfff]|\ud83d\udc69\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffe]|\ud83d\udc69\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb-\udffe]|\ud83e\uddd1\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\u200d\ud83e\udd1d\u200d\ud83e\uddd1|\ud83d\udc6b\ud83c[\udffb-\udfff]|\ud83d\udc6c\ud83c[\udffb-\udfff]|\ud83d\udc6d\ud83c[\udffb-\udfff]|\ud83d[\udc6b-\udc6d])|(?:\ud83d[\udc68\udc69]|\ud83e\uddd1)(?:\ud83c[\udffb-\udfff])?\u200d(?:\u2695\ufe0f|\u2696\ufe0f|\u2708\ufe0f|\ud83c[\udf3e\udf73\udf93\udfa4\udfa8\udfeb\udfed]|\ud83d[\udcbb\udcbc\udd27\udd2c\ude80\ude92]|\ud83e[\uddaf-\uddb3\uddbc\uddbd])|(?:\ud83c[\udfcb\udfcc]|\ud83d[\udd74\udd75]|\u26f9)((?:\ud83c[\udffb-\udfff]|\ufe0f)\u200d[\u2640\u2642]\ufe0f)|(?:\ud83c[\udfc3\udfc4\udfca]|\ud83d[\udc6e\udc71\udc73\udc77\udc81\udc82\udc86\udc87\ude45-\ude47\ude4b\ude4d\ude4e\udea3\udeb4-\udeb6]|\ud83e[\udd26\udd35\udd37-\udd39\udd3d\udd3e\uddb8\uddb9\uddcd-\uddcf\uddd6-\udddd])(?:\ud83c[\udffb-\udfff])?\u200d[\u2640\u2642]\ufe0f|(?:\ud83d\udc68\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68|\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d[\udc68\udc69]|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\u2764\ufe0f\u200d\ud83d\udc68|\ud83d\udc68\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\u2764\ufe0f\u200d\ud83d[\udc68\udc69]|\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83c\udff3\ufe0f\u200d\u26a7\ufe0f|\ud83c\udff3\ufe0f\u200d\ud83c\udf08|\ud83c\udff4\u200d\u2620\ufe0f|\ud83d\udc15\u200d\ud83e\uddba|\ud83d\udc41\u200d\ud83d\udde8|\ud83d\udc68\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83d\udc6f\u200d\u2640\ufe0f|\ud83d\udc6f\u200d\u2642\ufe0f|\ud83e\udd3c\u200d\u2640\ufe0f|\ud83e\udd3c\u200d\u2642\ufe0f|\ud83e\uddde\u200d\u2640\ufe0f|\ud83e\uddde\u200d\u2642\ufe0f|\ud83e\udddf\u200d\u2640\ufe0f|\ud83e\udddf\u200d\u2642\ufe0f)|[#*0-9]\ufe0f?\u20e3|(?:[©®\u2122\u265f]\ufe0f)|(?:\ud83c[\udc04\udd70\udd71\udd7e\udd7f\ude02\ude1a\ude2f\ude37\udf21\udf24-\udf2c\udf36\udf7d\udf96\udf97\udf99-\udf9b\udf9e\udf9f\udfcd\udfce\udfd4-\udfdf\udff3\udff5\udff7]|\ud83d[\udc3f\udc41\udcfd\udd49\udd4a\udd6f\udd70\udd73\udd76-\udd79\udd87\udd8a-\udd8d\udda5\udda8\uddb1\uddb2\uddbc\uddc2-\uddc4\uddd1-\uddd3\udddc-\uddde\udde1\udde3\udde8\uddef\uddf3\uddfa\udecb\udecd-\udecf\udee0-\udee5\udee9\udef0\udef3]|[\u203c\u2049\u2139\u2194-\u2199\u21a9\u21aa\u231a\u231b\u2328\u23cf\u23ed-\u23ef\u23f1\u23f2\u23f8-\u23fa\u24c2\u25aa\u25ab\u25b6\u25c0\u25fb-\u25fe\u2600-\u2604\u260e\u2611\u2614\u2615\u2618\u2620\u2622\u2623\u2626\u262a\u262e\u262f\u2638-\u263a\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267b\u267f\u2692-\u2697\u2699\u269b\u269c\u26a0\u26a1\u26a7\u26aa\u26ab\u26b0\u26b1\u26bd\u26be\u26c4\u26c5\u26c8\u26cf\u26d1\u26d3\u26d4\u26e9\u26ea\u26f0-\u26f5\u26f8\u26fa\u26fd\u2702\u2708\u2709\u270f\u2712\u2714\u2716\u271d\u2721\u2733\u2734\u2744\u2747\u2757\u2763\u2764\u27a1\u2934\u2935\u2b05-\u2b07\u2b1b\u2b1c\u2b50\u2b55\u3030\u303d\u3297\u3299])(?:\ufe0f|(?!\ufe0e))|(?:(?:\ud83c[\udfcb\udfcc]|\ud83d[\udd74\udd75\udd90]|[\u261d\u26f7\u26f9\u270c\u270d])(?:\ufe0f|(?!\ufe0e))|(?:\ud83c[\udf85\udfc2-\udfc4\udfc7\udfca]|\ud83d[\udc42\udc43\udc46-\udc50\udc66-\udc69\udc6e\udc70-\udc78\udc7c\udc81-\udc83\udc85-\udc87\udcaa\udd7a\udd95\udd96\ude45-\ude47\ude4b-\ude4f\udea3\udeb4-\udeb6\udec0\udecc]|\ud83e[\udd0f\udd18-\udd1c\udd1e\udd1f\udd26\udd30-\udd39\udd3d\udd3e\uddb5\uddb6\uddb8\uddb9\uddbb\uddcd-\uddcf\uddd1-\udddd]|[\u270a\u270b]))(?:\ud83c[\udffb-\udfff])?|(?:\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc65\udb40\udc6e\udb40\udc67\udb40\udc7f|\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc73\udb40\udc63\udb40\udc74\udb40\udc7f|\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc77\udb40\udc6c\udb40\udc73\udb40\udc7f|\ud83c\udde6\ud83c[\udde8-\uddec\uddee\uddf1\uddf2\uddf4\uddf6-\uddfa\uddfc\uddfd\uddff]|\ud83c\udde7\ud83c[\udde6\udde7\udde9-\uddef\uddf1-\uddf4\uddf6-\uddf9\uddfb\uddfc\uddfe\uddff]|\ud83c\udde8\ud83c[\udde6\udde8\udde9\uddeb-\uddee\uddf0-\uddf5\uddf7\uddfa-\uddff]|\ud83c\udde9\ud83c[\uddea\uddec\uddef\uddf0\uddf2\uddf4\uddff]|\ud83c\uddea\ud83c[\udde6\udde8\uddea\uddec\udded\uddf7-\uddfa]|\ud83c\uddeb\ud83c[\uddee-\uddf0\uddf2\uddf4\uddf7]|\ud83c\uddec\ud83c[\udde6\udde7\udde9-\uddee\uddf1-\uddf3\uddf5-\uddfa\uddfc\uddfe]|\ud83c\udded\ud83c[\uddf0\uddf2\uddf3\uddf7\uddf9\uddfa]|\ud83c\uddee\ud83c[\udde8-\uddea\uddf1-\uddf4\uddf6-\uddf9]|\ud83c\uddef\ud83c[\uddea\uddf2\uddf4\uddf5]|\ud83c\uddf0\ud83c[\uddea\uddec-\uddee\uddf2\uddf3\uddf5\uddf7\uddfc\uddfe\uddff]|\ud83c\uddf1\ud83c[\udde6-\udde8\uddee\uddf0\uddf7-\uddfb\uddfe]|\ud83c\uddf2\ud83c[\udde6\udde8-\udded\uddf0-\uddff]|\ud83c\uddf3\ud83c[\udde6\udde8\uddea-\uddec\uddee\uddf1\uddf4\uddf5\uddf7\uddfa\uddff]|\ud83c\uddf4\ud83c\uddf2|\ud83c\uddf5\ud83c[\udde6\uddea-\udded\uddf0-\uddf3\uddf7-\uddf9\uddfc\uddfe]|\ud83c\uddf6\ud83c\udde6|\ud83c\uddf7\ud83c[\uddea\uddf4\uddf8\uddfa\uddfc]|\ud83c\uddf8\ud83c[\udde6-\uddea\uddec-\uddf4\uddf7-\uddf9\uddfb\uddfd-\uddff]|\ud83c\uddf9\ud83c[\udde6\udde8\udde9\uddeb-\udded\uddef-\uddf4\uddf7\uddf9\uddfb\uddfc\uddff]|\ud83c\uddfa\ud83c[\udde6\uddec\uddf2\uddf3\uddf8\uddfe\uddff]|\ud83c\uddfb\ud83c[\udde6\udde8\uddea\uddec\uddee\uddf3\uddfa]|\ud83c\uddfc\ud83c[\uddeb\uddf8]|\ud83c\uddfd\ud83c\uddf0|\ud83c\uddfe\ud83c[\uddea\uddf9]|\ud83c\uddff\ud83c[\udde6\uddf2\uddfc]|\ud83c[\udccf\udd8e\udd91-\udd9a\udde6-\uddff\ude01\ude32-\ude36\ude38-\ude3a\ude50\ude51\udf00-\udf20\udf2d-\udf35\udf37-\udf7c\udf7e-\udf84\udf86-\udf93\udfa0-\udfc1\udfc5\udfc6\udfc8\udfc9\udfcf-\udfd3\udfe0-\udff0\udff4\udff8-\udfff]|\ud83d[\udc00-\udc3e\udc40\udc44\udc45\udc51-\udc65\udc6a\udc6f\udc79-\udc7b\udc7d-\udc80\udc84\udc88-\udca9\udcab-\udcfc\udcff-\udd3d\udd4b-\udd4e\udd50-\udd67\udda4\uddfb-\ude44\ude48-\ude4a\ude80-\udea2\udea4-\udeb3\udeb7-\udebf\udec1-\udec5\uded0-\uded2\uded5\udeeb\udeec\udef4-\udefa\udfe0-\udfeb]|\ud83e[\udd0d\udd0e\udd10-\udd17\udd1d\udd20-\udd25\udd27-\udd2f\udd3a\udd3c\udd3f-\udd45\udd47-\udd71\udd73-\udd76\udd7a-\udda2\udda5-\uddaa\uddae-\uddb4\uddb7\uddba\uddbc-\uddca\uddd0\uddde-\uddff\ude70-\ude73\ude78-\ude7a\ude80-\ude82\ude90-\ude95]|[\u23e9-\u23ec\u23f0\u23f3\u267e\u26ce\u2705\u2728\u274c\u274e\u2753-\u2755\u2795-\u2797\u27b0\u27bf\ue50a])|\ufe0f/g;var n=/\uFE0F/g,r=String.fromCharCode(8205);d.exports=function(d,e){return t(d,a,(function(d,u,t){var a,c=function(d,e){for(var u=[],t=0,a=0,n=0;n<d.length;)t=d.charCodeAt(n++),a?(u.push((65536+(a-55296<<10)+(t-56320)).toString(16)),a=0):55296<=t&&t<=56319?a=t:u.push(t.toString(16));return u.join(e||"-")}((a=d).indexOf(r)<0?a.replace(n,""):a);return e(c,d,t)}))}},mfmY:function(d,e){var u=Object.prototype.toString,t=Array.isArray;d.exports=function(d){return"string"==typeof d||!t(d)&&function(d){return!!d&&"object"==typeof d}(d)&&"[object String]"==u.call(d)}},"oE+H":function(d,e,u){var t=u("VrqS"),a=u("LfKb");d.exports=function(d,e){var u="function"==typeof e?e:a(e);return t(d,u)}},tp12:function(d,e,u){var t=u("QLaP"),a=u("mfmY"),n=u("L7TZ");function r(d,e,u){return t("string"==typeof d,"First param must be a string"),t("string"==typeof e||e instanceof RegExp,"Second param must be a string pattern or a regular expression"),("string"==typeof e?c:f)(d,e,u)}function c(d,e,u){var t=d.indexOf(e);if(t>=0){var a=[],n=t+e.length;return t>0&&a.push(d.substring(0,t)),a.push("function"==typeof u?u(d.substring(t,n),t,d):u),n<d.length&&a.push(d.substring(n)),a}return[d]}function f(d,e,u){var t,a=[],n="function"==typeof u,r=e.lastIndex;e.lastIndex=0;for(var c=0;t=e.exec(d);){var f=t.index;""===t[0]&&e.lastIndex++,f!==c&&a.push(d.substring(c,f)),c=f+t[0].length;var i=n?u.apply(this,t.concat(f,t.input)):u;if(a.push(i),!e.global)break}return c<d.length&&a.push(d.substring(c)),e.lastIndex=r,a}d.exports=function(d,e,u){if(a(d))return r(d,e,u);if(Array.isArray(d)&&d[0])return n(d.map((function(d){return a(d)?r(d,e,u):d})));throw new TypeError("First argument must be an array or non-empty string")}}}]);
//# sourceMappingURL=component---src-pages-index-js-2fba14fd19e3064ea749.js.map