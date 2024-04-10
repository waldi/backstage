/*! For license information please see 6d4c5430.78db7126.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[923633],{890820:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=t(824246),i=t(511151);const o={id:"reading",title:"Reading Backstage Configuration",description:"Documentation on Reading Backstage Configuration"},a=void 0,s={id:"conf/reading",title:"Reading Backstage Configuration",description:"Documentation on Reading Backstage Configuration",source:"@site/../docs/conf/reading.md",sourceDirName:"conf",slug:"/conf/reading",permalink:"/docs/conf/reading",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/conf/reading.md",tags:[],version:"current",frontMatter:{id:"reading",title:"Reading Backstage Configuration",description:"Documentation on Reading Backstage Configuration"},sidebar:"docs",previous:{title:"Static Configuration in Backstage",permalink:"/docs/conf/"},next:{title:"Writing Backstage Configuration Files",permalink:"/docs/conf/writing"}},c={},l=[{value:"Config API",id:"config-api",level:2},{value:"Type Safety",id:"type-safety",level:3},{value:"Reading Nested Configuration",id:"reading-nested-configuration",level:3},{value:"Required vs Optional Configuration",id:"required-vs-optional-configuration",level:3},{value:"Accessing ConfigApi in Frontend Plugins",id:"accessing-configapi-in-frontend-plugins",level:2},{value:"Accessing ConfigApi in Backend Plugins",id:"accessing-configapi-in-backend-plugins",level:2},{value:"Old Backend System",id:"old-backend-system",level:3},{value:"New Backend System",id:"new-backend-system",level:3}];function u(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"config-api",children:"Config API"}),"\n",(0,r.jsxs)(n.p,{children:["There's a common configuration API for by both frontend and backend plugins. An\nAPI reference can be found ",(0,r.jsx)(n.a,{href:"/docs/reference/config.config",children:"here"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"The configuration API is tailored towards failing fast in case of missing or bad\nconfig. That's because configuration errors can always be considered programming\nmistakes, and will fail deterministically."}),"\n",(0,r.jsx)(n.h3,{id:"type-safety",children:"Type Safety"}),"\n",(0,r.jsxs)(n.p,{children:["The methods for reading primitive values are typed, and validate that type at\nruntime. For example ",(0,r.jsx)(n.code,{children:"getNumber()"})," requires the underlying value to be a number,\nand there will be no attempt to coerce other types into the desired one. If\n",(0,r.jsx)(n.code,{children:"getNumber()"})," receives a string value, it will throw an error, explaining where\nthe bad config came from, and what the desired and actual types where."]}),"\n",(0,r.jsx)(n.h3,{id:"reading-nested-configuration",children:"Reading Nested Configuration"}),"\n",(0,r.jsx)(n.p,{children:"The backing configuration data is a nested JSON structure, meaning there will be\nobject, within objects, arrays within objects, and so on. There are a couple of\ndifferent ways to access nested values when reading configuration, but the\nprimary one is to use dot-separated paths."}),"\n",(0,r.jsx)(n.p,{children:"For example, given the following configuration:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"app:\n  baseUrl: http://localhost:3000\n"})}),"\n",(0,r.jsxs)(n.p,{children:["We can access the ",(0,r.jsx)(n.code,{children:"baseUrl"})," using ",(0,r.jsx)(n.code,{children:"config.getString('app.baseUrl')"}),". Because of\nthis syntax, configuration keys are not allowed to contain dots. In fact,\nconfiguration keys are validated using the following regular expression:\n",(0,r.jsx)(n.code,{children:"/^[a-z][a-z0-9]*(?:[-_][a-z][a-z0-9]*)*$/i"}),". This basically means that keys\nmust only contain the letters ",(0,r.jsx)(n.code,{children:"a"})," through ",(0,r.jsx)(n.code,{children:"z"})," and digits, in groups separated by\ndashes or underscores. Additionally, the very first character of each such group\nmust be a letter, not a digit."]}),"\n",(0,r.jsxs)(n.p,{children:["Another option of accessing the ",(0,r.jsx)(n.code,{children:"baseUrl"})," value is to create a sub-view of the\nconfiguration, ",(0,r.jsx)(n.code,{children:"config.getConfig('app').getString('baseUrl')"}),". When reading out\nsingle values the dot-path pattern is preferred, but creating sub-views can be\nuseful for when you want to pass on parts of configuration to be read out by a\nseparate function. For example, given something like"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"my-plugin:\n  items:\n    a:\n      title: Item A\n      path: /a\n    b:\n      title: Item B\n      path: /b\n"})}),"\n",(0,r.jsxs)(n.p,{children:["You can get the list of all items using the ",(0,r.jsx)(n.code,{children:".keys()"})," method, and then pass on\neach sub-view to be handled individually."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"for (const itemKey of config.keys('my-plugin.items')) {\n  const itemConfig = config.getConfig(`my-plugin.items`).getConfig(itemKey);\n  const title = itemConfig.getString('title');\n  // ...\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Another option for iterating through configuration keys is to call\n",(0,r.jsx)(n.code,{children:"config.get('my-plugin.items')"}),", which simply returns the JSON structure for\nthat position without any validation. This can be handy to use sometimes,\nespecially if you're passing on config to an external library. There's a clear\nbenefit to the sub-view approach though, which is that the user will receive\nmuch more detailed and relevant error messages. For example, if\n",(0,r.jsx)(n.code,{children:"itemConfig.getString('title')"})," fails in the above example because a boolean was\nsupplied, the user will receive an error message with the full path, e.g.\n",(0,r.jsx)(n.code,{children:"my-plugin.items.b.title"}),", as well as the name of the config file with the bad\nvalue. Conversely, if you try to access missing fields in raw JSON, you tend to\nend up with very technical and hard-to-understand type errors from javascript."]}),"\n",(0,r.jsx)(n.p,{children:"Note that no matter what method is used for reading out nested config, the same\nmerging rules apply. You will always get the same value for any way of accessing\nnested config:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"// Equivalent as long as a.b.c exists and is a string\nconfig.getString('a.b.c');\nconfig.getConfig('a.b').getString('c');\nconfig.get('a').b.c;\n"})}),"\n",(0,r.jsx)(n.h3,{id:"required-vs-optional-configuration",children:"Required vs Optional Configuration"}),"\n",(0,r.jsxs)(n.p,{children:["Reading configuration can be divided into two categories: required, and\noptional. When reading optional configuration you use the optional methods such\nas ",(0,r.jsx)(n.code,{children:"getOptionalString"}),". These methods will simply return ",(0,r.jsx)(n.code,{children:"undefined"})," if\nconfiguration values are missing, allowing the called to fall back to default\nvalues. The optional methods still validate types however, so receiving a string\nin a call to ",(0,r.jsx)(n.code,{children:"config.getOptionalNumber"})," will still throw an error."]}),"\n",(0,r.jsxs)(n.p,{children:["A good pattern for reading optional configuration values is to use the ",(0,r.jsx)(n.code,{children:"??"}),"\noperator. For example:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"const title = config.getOptionalString('my-plugin.title') ?? 'My Plugin';\n"})}),"\n",(0,r.jsxs)(n.p,{children:["To read required configuration, simply use the methods without ",(0,r.jsx)(n.code,{children:"Optional"}),", for\nexample ",(0,r.jsx)(n.code,{children:"getString"}),". These will throw an error if there is no value available."]}),"\n",(0,r.jsx)(n.h2,{id:"accessing-configapi-in-frontend-plugins",children:"Accessing ConfigApi in Frontend Plugins"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.a,{href:"/docs/reference/core-plugin-api.configapi",children:"ConfigApi"})," in the frontend is a\n",(0,r.jsx)(n.a,{href:"/docs/api/utility-apis",children:"UtilityApi"}),". It's accessible as usual via the\n",(0,r.jsx)(n.code,{children:"configApiRef"})," exported from ",(0,r.jsx)(n.code,{children:"@backstage/core-plugin-api"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"import { useApi, configApiRef } from '@backstage/core-plugin-api';\n...\nconst MyReactComponent = (...) => {\n  const config = useApi(configApiRef);\n  ...\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Depending on the config api in another API is slightly different though, as the\n",(0,r.jsx)(n.code,{children:"ConfigApi"})," implementation is supplied via the App itself and not instantiated\nlike other APIs. See\n",(0,r.jsx)(n.a,{href:"https://github.com/backstage/backstage/blob/244eef851f5aa19f91c7c9b5c12d5df95cf482ca/packages/app/src/apis.ts#L66",children:"packages/app/src/apis.ts"}),"\nfor an example of how this wiring is done."]}),"\n",(0,r.jsxs)(n.p,{children:["For standalone plugin setups in ",(0,r.jsx)(n.code,{children:"dev/index.ts"}),", register a factory with a\nstatically mocked implementation of the config API. Use the ",(0,r.jsx)(n.code,{children:"ConfigReader"})," from\n",(0,r.jsx)(n.code,{children:"@backstage/config"})," to create an instance and register it for the ",(0,r.jsx)(n.code,{children:"configApiRef"}),"\nfrom ",(0,r.jsx)(n.code,{children:"@backstage/core-plugin-api"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"accessing-configapi-in-backend-plugins",children:"Accessing ConfigApi in Backend Plugins"}),"\n",(0,r.jsx)(n.h3,{id:"old-backend-system",children:"Old Backend System"}),"\n",(0,r.jsxs)(n.p,{children:["In the old backend system plugins, the configuration is passed in via options from the main\nbackend package. See for example\n",(0,r.jsx)(n.a,{href:"https://github.com/backstage/backstage/blob/244eef851f5aa19f91c7c9b5c12d5df95cf482ca/packages/backend/src/plugins/auth.ts#L23",children:"packages/backend/src/plugins/auth.ts"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"new-backend-system",children:"New Backend System"}),"\n",(0,r.jsx)(n.p,{children:"In the new backend system, plugins are able to directly access config through dependencies. You can access config like so,"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",metastring:'title="plugins/your-plugin-backend/src/plugin.ts"',children:"export const yourPlugin = createBackendPlugin({\n  pluginId: 'yourPlugin',\n  register(env) {\n    env.registerInit({\n      deps: {\n        httpRouter: coreServices.httpRouter,\n        logger: coreServices.logger,\n        // highlight-next-line\n        config: coreServices.rootConfig,\n      },\n      async init({\n        httpRouter,\n        logger,\n        // highlight-next-line\n        config,\n      }) {\n        // highlight-next-line\n        console.log(config.getOptionalString('backend.test.property'));\n      },\n    });\n  },\n});\n"})})]})}function d(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},371426:(e,n,t)=>{var r=t(827378),i=Symbol.for("react.element"),o=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,s=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,t){var r,o={},l=null,u=null;for(r in void 0!==t&&(l=""+t),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(u=n.ref),n)a.call(n,r)&&!c.hasOwnProperty(r)&&(o[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===o[r]&&(o[r]=n[r]);return{$$typeof:i,type:e,key:l,ref:u,props:o,_owner:s.current}}n.Fragment=o,n.jsx=l,n.jsxs=l},541535:(e,n)=>{var t=Symbol.for("react.element"),r=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),c=Symbol.for("react.context"),l=Symbol.for("react.forward_ref"),u=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),f=Symbol.for("react.lazy"),p=Symbol.iterator;var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h=Object.assign,y={};function m(e,n,t){this.props=e,this.context=n,this.refs=y,this.updater=t||g}function b(){}function v(e,n,t){this.props=e,this.context=n,this.refs=y,this.updater=t||g}m.prototype.isReactComponent={},m.prototype.setState=function(e,n){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")},m.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=m.prototype;var x=v.prototype=new b;x.constructor=v,h(x,m.prototype),x.isPureReactComponent=!0;var j=Array.isArray,k=Object.prototype.hasOwnProperty,w={current:null},_={key:!0,ref:!0,__self:!0,__source:!0};function S(e,n,r){var i,o={},a=null,s=null;if(null!=n)for(i in void 0!==n.ref&&(s=n.ref),void 0!==n.key&&(a=""+n.key),n)k.call(n,i)&&!_.hasOwnProperty(i)&&(o[i]=n[i]);var c=arguments.length-2;if(1===c)o.children=r;else if(1<c){for(var l=Array(c),u=0;u<c;u++)l[u]=arguments[u+2];o.children=l}if(e&&e.defaultProps)for(i in c=e.defaultProps)void 0===o[i]&&(o[i]=c[i]);return{$$typeof:t,type:e,key:a,ref:s,props:o,_owner:w.current}}function C(e){return"object"==typeof e&&null!==e&&e.$$typeof===t}var R=/\/+/g;function A(e,n){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return n[e]}))}(""+e.key):n.toString(36)}function P(e,n,i,o,a){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var c=!1;if(null===e)c=!0;else switch(s){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case t:case r:c=!0}}if(c)return a=a(c=e),e=""===o?"."+A(c,0):o,j(a)?(i="",null!=e&&(i=e.replace(R,"$&/")+"/"),P(a,n,i,"",(function(e){return e}))):null!=a&&(C(a)&&(a=function(e,n){return{$$typeof:t,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}(a,i+(!a.key||c&&c.key===a.key?"":(""+a.key).replace(R,"$&/")+"/")+e)),n.push(a)),1;if(c=0,o=""===o?".":o+":",j(e))for(var l=0;l<e.length;l++){var u=o+A(s=e[l],l);c+=P(s,n,i,u,a)}else if(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof u)for(e=u.call(e),l=0;!(s=e.next()).done;)c+=P(s=s.value,n,i,u=o+A(s,l++),a);else if("object"===s)throw n=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===n?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return c}function O(e,n,t){if(null==e)return e;var r=[],i=0;return P(e,r,"","",(function(e){return n.call(t,e,i++)})),r}function E(e){if(-1===e._status){var n=e._result;(n=n()).then((function(n){0!==e._status&&-1!==e._status||(e._status=1,e._result=n)}),(function(n){0!==e._status&&-1!==e._status||(e._status=2,e._result=n)})),-1===e._status&&(e._status=0,e._result=n)}if(1===e._status)return e._result.default;throw e._result}var I={current:null},T={transition:null},$={ReactCurrentDispatcher:I,ReactCurrentBatchConfig:T,ReactCurrentOwner:w};n.Children={map:O,forEach:function(e,n,t){O(e,(function(){n.apply(this,arguments)}),t)},count:function(e){var n=0;return O(e,(function(){n++})),n},toArray:function(e){return O(e,(function(e){return e}))||[]},only:function(e){if(!C(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},n.Component=m,n.Fragment=i,n.Profiler=a,n.PureComponent=v,n.StrictMode=o,n.Suspense=u,n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$,n.cloneElement=function(e,n,r){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var i=h({},e.props),o=e.key,a=e.ref,s=e._owner;if(null!=n){if(void 0!==n.ref&&(a=n.ref,s=w.current),void 0!==n.key&&(o=""+n.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(l in n)k.call(n,l)&&!_.hasOwnProperty(l)&&(i[l]=void 0===n[l]&&void 0!==c?c[l]:n[l])}var l=arguments.length-2;if(1===l)i.children=r;else if(1<l){c=Array(l);for(var u=0;u<l;u++)c[u]=arguments[u+2];i.children=c}return{$$typeof:t,type:e.type,key:o,ref:a,props:i,_owner:s}},n.createContext=function(e){return(e={$$typeof:c,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},n.createElement=S,n.createFactory=function(e){var n=S.bind(null,e);return n.type=e,n},n.createRef=function(){return{current:null}},n.forwardRef=function(e){return{$$typeof:l,render:e}},n.isValidElement=C,n.lazy=function(e){return{$$typeof:f,_payload:{_status:-1,_result:e},_init:E}},n.memo=function(e,n){return{$$typeof:d,type:e,compare:void 0===n?null:n}},n.startTransition=function(e){var n=T.transition;T.transition={};try{e()}finally{T.transition=n}},n.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},n.useCallback=function(e,n){return I.current.useCallback(e,n)},n.useContext=function(e){return I.current.useContext(e)},n.useDebugValue=function(){},n.useDeferredValue=function(e){return I.current.useDeferredValue(e)},n.useEffect=function(e,n){return I.current.useEffect(e,n)},n.useId=function(){return I.current.useId()},n.useImperativeHandle=function(e,n,t){return I.current.useImperativeHandle(e,n,t)},n.useInsertionEffect=function(e,n){return I.current.useInsertionEffect(e,n)},n.useLayoutEffect=function(e,n){return I.current.useLayoutEffect(e,n)},n.useMemo=function(e,n){return I.current.useMemo(e,n)},n.useReducer=function(e,n,t){return I.current.useReducer(e,n,t)},n.useRef=function(e){return I.current.useRef(e)},n.useState=function(e){return I.current.useState(e)},n.useSyncExternalStore=function(e,n,t){return I.current.useSyncExternalStore(e,n,t)},n.useTransition=function(){return I.current.useTransition()},n.version="18.2.0"},827378:(e,n,t)=>{e.exports=t(541535)},824246:(e,n,t)=>{e.exports=t(371426)},511151:(e,n,t)=>{t.d(n,{Z:()=>s,a:()=>a});var r=t(667294);const i={},o=r.createContext(i);function a(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);