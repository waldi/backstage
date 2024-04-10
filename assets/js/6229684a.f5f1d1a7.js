/*! For license information please see 6229684a.f5f1d1a7.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[529526],{407151:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>c,metadata:()=>a,toc:()=>d});var o=t(824246),r=t(511151);const c={id:"getting-started",title:"Getting Started",description:"Getting Started Documentation"},s=void 0,a={id:"features/techdocs/getting-started",title:"Getting Started",description:"Getting Started Documentation",source:"@site/../docs/features/techdocs/getting-started.md",sourceDirName:"features/techdocs",slug:"/features/techdocs/getting-started",permalink:"/docs/features/techdocs/getting-started",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/features/techdocs/getting-started.md",tags:[],version:"current",frontMatter:{id:"getting-started",title:"Getting Started",description:"Getting Started Documentation"},sidebar:"docs",previous:{title:"Overview",permalink:"/docs/features/techdocs/"},next:{title:"Concepts",permalink:"/docs/features/techdocs/concepts"}},i={},d=[{value:"Adding TechDocs frontend plugin",id:"adding-techdocs-frontend-plugin",level:2},{value:"Adding TechDocs Backend plugin",id:"adding-techdocs-backend-plugin",level:2},{value:"New Backend System",id:"new-backend-system",level:3},{value:"Setting the configuration",id:"setting-the-configuration",level:2},{value:"Should TechDocs Backend generate docs?",id:"should-techdocs-backend-generate-docs",level:3},{value:"Choosing storage (publisher)",id:"choosing-storage-publisher",level:3},{value:"Disabling Docker in Docker situation (Optional)",id:"disabling-docker-in-docker-situation-optional",level:3},{value:"Additional reading",id:"additional-reading",level:2}];function l(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"TechDocs functions as a plugin to Backstage, so you will need to use Backstage\nto use TechDocs."}),"\n",(0,o.jsxs)(n.p,{children:["If you haven't setup Backstage already, start\n",(0,o.jsx)(n.a,{href:"/docs/getting-started/",children:"here"}),"."]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:["If you used ",(0,o.jsx)(n.code,{children:"npx @backstage/create-app"}),", TechDocs may already be present."]}),"\n",(0,o.jsxs)(n.p,{children:["You should skip to ",(0,o.jsx)(n.a,{href:"#setting-the-configuration",children:(0,o.jsx)(n.code,{children:"Setting the Configuration"})}),"\nbelow."]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"adding-techdocs-frontend-plugin",children:"Adding TechDocs frontend plugin"}),"\n",(0,o.jsxs)(n.p,{children:["The first step is to add the TechDocs plugin to your Backstage application.\nNavigate to your new Backstage application directory. And then to your\n",(0,o.jsx)(n.code,{children:"packages/app"})," directory, and install the ",(0,o.jsx)(n.code,{children:"@backstage/plugin-techdocs"})," package."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"# From your Backstage root directory\nyarn --cwd packages/app add @backstage/plugin-techdocs\n"})}),"\n",(0,o.jsx)(n.p,{children:"Once the package has been installed, you need to import the plugin in your app."}),"\n",(0,o.jsxs)(n.p,{children:["In ",(0,o.jsx)(n.code,{children:"packages/app/src/App.tsx"}),", import ",(0,o.jsx)(n.code,{children:"TechDocsPage"})," and add the following to\n",(0,o.jsx)(n.code,{children:"FlatRoutes"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",metastring:'title="packages/app/src/App.tsx"',children:'import {\n  DefaultTechDocsHome,\n  TechDocsIndexPage,\n  TechDocsReaderPage,\n} from \'@backstage/plugin-techdocs\';\n\nconst AppRoutes = () => {\n  <FlatRoutes>\n    {/* ... other plugin routes */}\n    <Route path="/docs" element={<TechDocsIndexPage />}>\n      <DefaultTechDocsHome />\n    </Route>\n    <Route\n      path="/docs/:namespace/:kind/:name/*"\n      element={<TechDocsReaderPage />}\n    />\n  </FlatRoutes>;\n};\n'})}),"\n",(0,o.jsx)(n.p,{children:"It would be nice to decorate your pages with something else... Having a link that redirects you to a new issue page when you highlight text in your documentation would be really cool, right? Let's learn how to do this using the TechDocs Addon Framework!"}),"\n",(0,o.jsxs)(n.p,{children:["With the ",(0,o.jsx)(n.a,{href:"https://backstage.io/docs/features/techdocs/addons#installing-and-using-addons",children:"TechDocs Addon framework"}),", you can render React components in documentation pages and these Addons can be provided by any Backstage plugin. The framework is exported by the ",(0,o.jsx)(n.a,{href:"https://www.npmjs.com/package/@backstage/plugin-techdocs-react",children:"@backstage/plugin-techdocs-react"})," package and there is a ",(0,o.jsx)(n.code,{children:"<ReportIssue />"})," Addon in the ",(0,o.jsx)(n.a,{href:"https://www.npmjs.com/package/@backstage/plugin-techdocs-module-addons-contrib",children:"@backstage/plugin-techdocs-module-addons-contrib"})," package for you to use once you have these two dependencies installed:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"import {\n  DefaultTechDocsHome,\n  TechDocsIndexPage,\n  TechDocsReaderPage,\n} from '@backstage/plugin-techdocs';\n/* highlight-add-start */\nimport { TechDocsAddons } from '@backstage/plugin-techdocs-react';\nimport { ReportIssue } from '@backstage/plugin-techdocs-module-addons-contrib';\n/* highlight-add-end */\n\nconst AppRoutes = () => {\n  <FlatRoutes>\n    {/* ... other plugin routes */}\n    <Route path=\"/docs\" element={<TechDocsIndexPage />}>\n      <DefaultTechDocsHome />\n    </Route>\n    <Route\n      path=\"/docs/:namespace/:kind/:name/*\"\n      element={<TechDocsReaderPage />}\n    >\n      {/* highlight-add-start */}\n      <TechDocsAddons>\n        <ReportIssue />\n      </TechDocsAddons>\n      {/* highlight-add-end */}\n    </Route>\n  </FlatRoutes>;\n};\n"})}),"\n",(0,o.jsx)(n.p,{children:"I know, you're curious to see how it looks, aren't you? See the image below:"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"TechDocs Report Issue Add-on",src:t(155385).Z+"",width:"666",height:"115"})}),"\n",(0,o.jsx)(n.p,{children:"By clicking the open new issue button, you will be redirected to the new issue page according to the source code provider you are using:"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"TechDocs Report Issue Template",src:t(124973).Z+"",width:"738",height:"514"})}),"\n",(0,o.jsx)(n.p,{children:"That's it! Now, we need the TechDocs Backend plugin for the frontend to work."}),"\n",(0,o.jsx)(n.h2,{id:"adding-techdocs-backend-plugin",children:"Adding TechDocs Backend plugin"}),"\n",(0,o.jsxs)(n.p,{children:["Navigate to ",(0,o.jsx)(n.code,{children:"packages/backend"})," of your Backstage app, and install the\n",(0,o.jsx)(n.code,{children:"@backstage/plugin-techdocs-backend"})," package."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"# From your Backstage root directory\nyarn --cwd packages/backend add @backstage/plugin-techdocs-backend\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Create a file called ",(0,o.jsx)(n.code,{children:"techdocs.ts"})," inside ",(0,o.jsx)(n.code,{children:"packages/backend/src/plugins/"})," and\nadd the following"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-typescript",children:"import { DockerContainerRunner } from '@backstage/backend-common';\nimport {\n  createRouter,\n  Generators,\n  Preparers,\n  Publisher,\n} from '@backstage/plugin-techdocs-backend';\nimport Docker from 'dockerode';\nimport { Router } from 'express';\nimport { PluginEnvironment } from '../types';\n\nexport default async function createPlugin(\n  env: PluginEnvironment,\n): Promise<Router> {\n  // Preparers are responsible for fetching source files for documentation.\n  const preparers = await Preparers.fromConfig(env.config, {\n    logger: env.logger,\n    reader: env.reader,\n  });\n\n  // Docker client (conditionally) used by the generators, based on techdocs.generators config.\n  const dockerClient = new Docker();\n  const containerRunner = new DockerContainerRunner({ dockerClient });\n\n  // Generators are used for generating documentation sites.\n  const generators = await Generators.fromConfig(env.config, {\n    logger: env.logger,\n    containerRunner,\n  });\n\n  // Publisher is used for\n  // 1. Publishing generated files to storage\n  // 2. Fetching files from storage and passing them to TechDocs frontend.\n  const publisher = await Publisher.fromConfig(env.config, {\n    logger: env.logger,\n    discovery: env.discovery,\n  });\n\n  // checks if the publisher is working and logs the result\n  await publisher.getReadiness();\n\n  return await createRouter({\n    preparers,\n    generators,\n    publisher,\n    logger: env.logger,\n    config: env.config,\n    discovery: env.discovery,\n    cache: env.cache,\n  });\n}\n"})}),"\n",(0,o.jsxs)(n.p,{children:["You may need to install the ",(0,o.jsx)(n.code,{children:"dockerode"})," package. But you may already have it in\nyour backend since ",(0,o.jsx)(n.a,{href:"/docs/features/software-templates/",children:"Scaffolder plugin"})," also uses\nit."]}),"\n",(0,o.jsxs)(n.p,{children:["See ",(0,o.jsx)(n.a,{href:"/docs/features/techdocs/concepts",children:"Concepts"})," and ",(0,o.jsx)(n.a,{href:"/docs/features/techdocs/architecture",children:"TechDocs Architecture"})," to\nlearn more about how preparers, generators and publishers work."]}),"\n",(0,o.jsxs)(n.p,{children:["The final step is to import the techdocs backend plugin in Backstage app\nbackend. Add the following to your ",(0,o.jsx)(n.code,{children:"packages/backend/src/index.ts"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-typescript",children:"import techdocs from './plugins/techdocs';\n\n// .... main should already be present.\nasync function main() {\n  // ... other backend plugin envs\n  const techdocsEnv = useHotMemoize(module, () => createEnv('techdocs'));\n\n  // ... other backend plugin routes\n  apiRouter.use('/techdocs', await techdocs(techdocsEnv));\n}\n"})}),"\n",(0,o.jsx)(n.p,{children:"That's it! TechDocs frontend and backend have now been added to your Backstage\napp. Now let us tweak some configurations to suit your needs."}),"\n",(0,o.jsx)(n.h3,{id:"new-backend-system",children:"New Backend System"}),"\n",(0,o.jsx)(n.p,{children:"To install TechDocs when using the New Backend system you will need to do the following."}),"\n",(0,o.jsxs)(n.p,{children:["Navigate to ",(0,o.jsx)(n.code,{children:"packages/backend"})," of your Backstage app, and install the ",(0,o.jsx)(n.code,{children:"@backstage/plugin-techdocs-backend"})," package."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"# From your Backstage root directory\nyarn --cwd packages/backend add @backstage/plugin-techdocs-backend\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Then in your backend ",(0,o.jsx)(n.code,{children:"index.ts"})," you will add the following line."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",metastring:'title="packages/backend/src/index.ts"',children:"const backend = createBackend();\n\n// Other plugins...\n\n/* highlight-add-start */\nbackend.add(import('@backstage/plugin-search-backend-module-catalog/alpha'));\n/* highlight-add-end */\n\nbackend.start();\n"})}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"Note: The above is a very simplified example, you may have more content then this in your version."}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"setting-the-configuration",children:"Setting the configuration"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsxs)(n.strong,{children:["See ",(0,o.jsx)(n.a,{href:"/docs/features/techdocs/configuration",children:"TechDocs Configuration Options"})," for complete\nconfiguration reference."]})}),"\n",(0,o.jsx)(n.h3,{id:"should-techdocs-backend-generate-docs",children:"Should TechDocs Backend generate docs?"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:"techdocs:\n  builder: 'local'\n"})}),"\n",(0,o.jsxs)(n.p,{children:['Note that we recommend generating docs on CI/CD instead. Read more in the\n"Basic" and "Recommended" sections of the\n',(0,o.jsx)(n.a,{href:"/docs/features/techdocs/architecture",children:"TechDocs Architecture"}),". But if you want to get started quickly\nset ",(0,o.jsx)(n.code,{children:"techdocs.builder"})," to ",(0,o.jsx)(n.code,{children:"'local'"})," so that TechDocs Backend is responsible for\ngenerating documentation sites. If set to ",(0,o.jsx)(n.code,{children:"'external'"}),", Backstage will assume\nthat the sites are being generated on each entity's CI/CD pipeline, and are\nbeing stored in a storage somewhere."]}),"\n",(0,o.jsxs)(n.p,{children:["When ",(0,o.jsx)(n.code,{children:"techdocs.builder"})," is set to ",(0,o.jsx)(n.code,{children:"'external'"}),", TechDocs becomes more or less a\nread-only experience where it serves static files from a storage containing all\nthe generated documentation."]}),"\n",(0,o.jsx)(n.h3,{id:"choosing-storage-publisher",children:"Choosing storage (publisher)"}),"\n",(0,o.jsxs)(n.p,{children:["TechDocs needs to know where to store generated documentation sites and where to\nfetch the sites from. This is managed by a\n",(0,o.jsx)(n.a,{href:"/docs/features/techdocs/concepts#techdocs-publisher",children:"Publisher"}),". Examples: Google Cloud Storage,\nAmazon S3, or local filesystem of Backstage server."]}),"\n",(0,o.jsxs)(n.p,{children:['It is okay to use the local filesystem in a "basic" setup when you are trying\nout Backstage for the first time. At a later time, review\n',(0,o.jsx)(n.a,{href:"/docs/features/techdocs/using-cloud-storage",children:"Using Cloud Storage"}),"."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:"techdocs:\n  builder: 'local'\n  publisher:\n    type: 'local'\n"})}),"\n",(0,o.jsx)(n.h3,{id:"disabling-docker-in-docker-situation-optional",children:"Disabling Docker in Docker situation (Optional)"}),"\n",(0,o.jsxs)(n.p,{children:["You can skip this if your ",(0,o.jsx)(n.code,{children:"techdocs.builder"})," is set to ",(0,o.jsx)(n.code,{children:"'external'"}),"."]}),"\n",(0,o.jsx)(n.p,{children:"The TechDocs Backend plugin runs a docker container with mkdocs installed to\ngenerate the frontend of the docs from source files (Markdown). If you are\ndeploying Backstage using Docker, this will mean that your Backstage Docker\ncontainer will try to run another Docker container for TechDocs Backend."}),"\n",(0,o.jsxs)(n.p,{children:["To avoid this problem, we have a configuration available. You can set a value in\nyour ",(0,o.jsx)(n.code,{children:"app-config.yaml"})," that tells the techdocs generator if it should run the\n",(0,o.jsx)(n.code,{children:"local"})," mkdocs or run it from ",(0,o.jsx)(n.code,{children:"docker"}),". This defaults to running as ",(0,o.jsx)(n.code,{children:"docker"})," if\nno config is provided."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:"techdocs:\n  builder: 'local'\n  publisher:\n    type: 'local'\n  generator:\n    runIn: local\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Setting ",(0,o.jsx)(n.code,{children:"generator.runIn"})," to ",(0,o.jsx)(n.code,{children:"local"})," means you will have to make sure your\nenvironment is compatible with techdocs."]}),"\n",(0,o.jsxs)(n.p,{children:["You will have to install the ",(0,o.jsx)(n.code,{children:"mkdocs"})," and ",(0,o.jsx)(n.code,{children:"mkdocs-techdocs-core"})," package from\npip, optionally also ",(0,o.jsx)(n.code,{children:"graphviz"})," and ",(0,o.jsx)(n.code,{children:"plantuml"})," from your OS package manager (e.g.\napt)."]}),"\n",(0,o.jsxs)(n.p,{children:["You can do so by including the following lines right above ",(0,o.jsx)(n.code,{children:"USER node"})," of your\n",(0,o.jsx)(n.code,{children:"Dockerfile"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-Dockerfile",children:'RUN apt-get update && apt-get install -y python3 python3-pip python3-venv\n\nENV VIRTUAL_ENV=/opt/venv\nRUN python3 -m venv $VIRTUAL_ENV\nENV PATH="$VIRTUAL_ENV/bin:$PATH"\n\nRUN pip3 install mkdocs-techdocs-core\n'})}),"\n",(0,o.jsxs)(n.p,{children:["Please be aware that the version requirement could change, you need to check our\n",(0,o.jsx)(n.a,{href:"https://github.com/backstage/techdocs-container/blob/main/Dockerfile",children:(0,o.jsx)(n.code,{children:"Dockerfile"})}),"\nand make sure to match with it."]}),"\n",(0,o.jsxs)(n.p,{children:["On a Debian-based Docker container, Python packages must be either installed using\nthe OS package manager or within a virtual environment (see the\n",(0,o.jsx)(n.a,{href:"https://peps.python.org/pep-0668/",children:"related PEP"}),"). Alternative is to use e.g.\n",(0,o.jsx)(n.a,{href:"https://pypa.github.io/pipx/",children:"pipx"})," for installing Python packages in an isolated\nenvironment."]}),"\n",(0,o.jsxs)(n.p,{children:["The above Dockerfile snippet installs the latest ",(0,o.jsx)(n.code,{children:"mkdocs-techdoc-core"})," package.\nVersion numbers can be found in the corresponding\n",(0,o.jsx)(n.a,{href:"https://github.com/backstage/mkdocs-techdocs-core#changelog",children:"changelog"}),". In\ncase you want to pin the version, use the example below:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-Dockerfile",children:"RUN pip3 install mkdocs-techdocs-core==1.2.3\n"})}),"\n",(0,o.jsx)(n.p,{children:"Note: We recommend Python version 3.11 or higher."}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:["Caveat: Please install the ",(0,o.jsx)(n.code,{children:"mkdocs-techdocs-core"})," package after all other\nPython packages. The order is important to make sure we get correct version of\nsome of the dependencies."]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"additional-reading",children:"Additional reading"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"/docs/features/techdocs/creating-and-publishing",children:"Creating and publishing your docs"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"/docs/features/techdocs/",children:"Back to README"})}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},155385:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/report-issue-addon-8aa52607fc0b839c9e4188d18d70e31a.png"},124973:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/report-issue-template-ec7a2c568334e94d2f8ce6d0a8c9d5d9.png"},371426:(e,n,t)=>{var o=t(827378),r=Symbol.for("react.element"),c=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,a=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function d(e,n,t){var o,c={},d=null,l=null;for(o in void 0!==t&&(d=""+t),void 0!==n.key&&(d=""+n.key),void 0!==n.ref&&(l=n.ref),n)s.call(n,o)&&!i.hasOwnProperty(o)&&(c[o]=n[o]);if(e&&e.defaultProps)for(o in n=e.defaultProps)void 0===c[o]&&(c[o]=n[o]);return{$$typeof:r,type:e,key:d,ref:l,props:c,_owner:a.current}}n.Fragment=c,n.jsx=d,n.jsxs=d},541535:(e,n)=>{var t=Symbol.for("react.element"),o=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),i=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),l=Symbol.for("react.suspense"),u=Symbol.for("react.memo"),h=Symbol.for("react.lazy"),p=Symbol.iterator;var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},f=Object.assign,m={};function y(e,n,t){this.props=e,this.context=n,this.refs=m,this.updater=t||g}function k(){}function b(e,n,t){this.props=e,this.context=n,this.refs=m,this.updater=t||g}y.prototype.isReactComponent={},y.prototype.setState=function(e,n){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},k.prototype=y.prototype;var x=b.prototype=new k;x.constructor=b,f(x,y.prototype),x.isPureReactComponent=!0;var j=Array.isArray,v=Object.prototype.hasOwnProperty,w={current:null},D={key:!0,ref:!0,__self:!0,__source:!0};function T(e,n,o){var r,c={},s=null,a=null;if(null!=n)for(r in void 0!==n.ref&&(a=n.ref),void 0!==n.key&&(s=""+n.key),n)v.call(n,r)&&!D.hasOwnProperty(r)&&(c[r]=n[r]);var i=arguments.length-2;if(1===i)c.children=o;else if(1<i){for(var d=Array(i),l=0;l<i;l++)d[l]=arguments[l+2];c.children=d}if(e&&e.defaultProps)for(r in i=e.defaultProps)void 0===c[r]&&(c[r]=i[r]);return{$$typeof:t,type:e,key:s,ref:a,props:c,_owner:w.current}}function R(e){return"object"==typeof e&&null!==e&&e.$$typeof===t}var _=/\/+/g;function S(e,n){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return n[e]}))}(""+e.key):n.toString(36)}function P(e,n,r,c,s){var a=typeof e;"undefined"!==a&&"boolean"!==a||(e=null);var i=!1;if(null===e)i=!0;else switch(a){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case t:case o:i=!0}}if(i)return s=s(i=e),e=""===c?"."+S(i,0):c,j(s)?(r="",null!=e&&(r=e.replace(_,"$&/")+"/"),P(s,n,r,"",(function(e){return e}))):null!=s&&(R(s)&&(s=function(e,n){return{$$typeof:t,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}(s,r+(!s.key||i&&i.key===s.key?"":(""+s.key).replace(_,"$&/")+"/")+e)),n.push(s)),1;if(i=0,c=""===c?".":c+":",j(e))for(var d=0;d<e.length;d++){var l=c+S(a=e[d],d);i+=P(a,n,r,l,s)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof l)for(e=l.call(e),d=0;!(a=e.next()).done;)i+=P(a=a.value,n,r,l=c+S(a,d++),s);else if("object"===a)throw n=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===n?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return i}function C(e,n,t){if(null==e)return e;var o=[],r=0;return P(e,o,"","",(function(e){return n.call(t,e,r++)})),o}function E(e){if(-1===e._status){var n=e._result;(n=n()).then((function(n){0!==e._status&&-1!==e._status||(e._status=1,e._result=n)}),(function(n){0!==e._status&&-1!==e._status||(e._status=2,e._result=n)})),-1===e._status&&(e._status=0,e._result=n)}if(1===e._status)return e._result.default;throw e._result}var N={current:null},A={transition:null},B={ReactCurrentDispatcher:N,ReactCurrentBatchConfig:A,ReactCurrentOwner:w};n.Children={map:C,forEach:function(e,n,t){C(e,(function(){n.apply(this,arguments)}),t)},count:function(e){var n=0;return C(e,(function(){n++})),n},toArray:function(e){return C(e,(function(e){return e}))||[]},only:function(e){if(!R(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},n.Component=y,n.Fragment=r,n.Profiler=s,n.PureComponent=b,n.StrictMode=c,n.Suspense=l,n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=B,n.cloneElement=function(e,n,o){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=f({},e.props),c=e.key,s=e.ref,a=e._owner;if(null!=n){if(void 0!==n.ref&&(s=n.ref,a=w.current),void 0!==n.key&&(c=""+n.key),e.type&&e.type.defaultProps)var i=e.type.defaultProps;for(d in n)v.call(n,d)&&!D.hasOwnProperty(d)&&(r[d]=void 0===n[d]&&void 0!==i?i[d]:n[d])}var d=arguments.length-2;if(1===d)r.children=o;else if(1<d){i=Array(d);for(var l=0;l<d;l++)i[l]=arguments[l+2];r.children=i}return{$$typeof:t,type:e.type,key:c,ref:s,props:r,_owner:a}},n.createContext=function(e){return(e={$$typeof:i,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:a,_context:e},e.Consumer=e},n.createElement=T,n.createFactory=function(e){var n=T.bind(null,e);return n.type=e,n},n.createRef=function(){return{current:null}},n.forwardRef=function(e){return{$$typeof:d,render:e}},n.isValidElement=R,n.lazy=function(e){return{$$typeof:h,_payload:{_status:-1,_result:e},_init:E}},n.memo=function(e,n){return{$$typeof:u,type:e,compare:void 0===n?null:n}},n.startTransition=function(e){var n=A.transition;A.transition={};try{e()}finally{A.transition=n}},n.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},n.useCallback=function(e,n){return N.current.useCallback(e,n)},n.useContext=function(e){return N.current.useContext(e)},n.useDebugValue=function(){},n.useDeferredValue=function(e){return N.current.useDeferredValue(e)},n.useEffect=function(e,n){return N.current.useEffect(e,n)},n.useId=function(){return N.current.useId()},n.useImperativeHandle=function(e,n,t){return N.current.useImperativeHandle(e,n,t)},n.useInsertionEffect=function(e,n){return N.current.useInsertionEffect(e,n)},n.useLayoutEffect=function(e,n){return N.current.useLayoutEffect(e,n)},n.useMemo=function(e,n){return N.current.useMemo(e,n)},n.useReducer=function(e,n,t){return N.current.useReducer(e,n,t)},n.useRef=function(e){return N.current.useRef(e)},n.useState=function(e){return N.current.useState(e)},n.useSyncExternalStore=function(e,n,t){return N.current.useSyncExternalStore(e,n,t)},n.useTransition=function(){return N.current.useTransition()},n.version="18.2.0"},827378:(e,n,t)=>{e.exports=t(541535)},824246:(e,n,t)=>{e.exports=t(371426)},511151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>s});var o=t(667294);const r={},c=o.createContext(r);function s(e){const n=o.useContext(c);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),o.createElement(c.Provider,{value:n},e.children)}}}]);