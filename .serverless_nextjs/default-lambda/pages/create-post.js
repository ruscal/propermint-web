/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 94054:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ create_post),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: ./node_modules/@aws-amplify/ui-react/lib/index.js
var lib = __webpack_require__(67635);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/aws-amplify/lib/index.js
var aws_amplify_lib = __webpack_require__(31650);
// EXTERNAL MODULE: ./node_modules/uuid/dist/esm-node/v4.js
var v4 = __webpack_require__(9568);
// EXTERNAL MODULE: ./node_modules/next/router.js
var next_router = __webpack_require__(11163);
;// CONCATENATED MODULE: ./src/graphql.ts
const getPostById =
/* GraphQL */
(/* unused pure expression or super */ null && (`
    query getPostById($postId: ID!) {
        getPostById(postId: $postId) {
            postId
            title
            content
            imagePath
            author
            channelId
            status
        }
    }
`));
const listPosts =
/* GraphQL */
(/* unused pure expression or super */ null && (`
    query ListPosts($channelId: ID!) {
        listPosts(channelId: $channelId) {
            postId
            title
            content
            imagePath
            author
            channelId
            status
        }
    }
`));
const postsByUser =
/* GraphQL */
(/* unused pure expression or super */ null && (`
    query PostsByUsername($channelId: ID!) {
        postsByUsername(channelId: $channelId) {
            postId
            title
            content
            imagePath
            author
            channelId
            status
        }
    }
`));
const createPost =
/* GraphQL */
`
    mutation CreatePost($post: PostInput!) {
        createPost(post: $post) {
            postId
            title
            content
            imagePath
            author
            channelId
            status
        }
    }
`;
const updatePost =
/* GraphQL */
(/* unused pure expression or super */ null && (`
    mutation UpdatePost($post: UpdatePostInput!) {
        updatePost(post: $post) {
            postId
            title
            content
            imagePath
            author
            channelId
            status
        }
    }
`));
const deletePost =
/* GraphQL */
(/* unused pure expression or super */ null && (`
    mutation DeletePost($postId: ID!) {
        deletePost(postId: $postId)
    }
`));
// EXTERNAL MODULE: ./node_modules/next/dynamic.js
var dynamic = __webpack_require__(5152);
;// CONCATENATED MODULE: ./src/utilities/getCurrentChannel.ts
const CHANNEL_SUB_DOMAIN_REGEX = /([a-zA-Z0-9 -_.]+).propermint.life/i;
function getCurrentChannel(hostname) {
  console.log({
    hostname
  });
  const match = hostname.match(CHANNEL_SUB_DOMAIN_REGEX);
  return match && match[1] || 'test';
}
;// CONCATENATED MODULE: ./src/utilities/getChannelProps.ts

function getChannelProps(context) {
  return {
    channelId: getCurrentChannel(context.req.headers.host)
  };
}
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./src/pages/create-post.tsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












const SimpleMDE = (0,dynamic.default)(() => __webpack_require__.e(/* import() */ 634).then(__webpack_require__.bind(__webpack_require__, 81634)), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(81634)],
    modules: ["create-post.tsx -> " + 'react-simplemde-editor']
  }
});

const newPost = channelId => ({
  postId: (0,v4/* default */.Z)(),
  title: '',
  content: '',
  imagePath: '',
  channelId
});

function CreatePost({
  channelId
}) {
  const {
    0: post,
    1: setPost
  } = (0,react.useState)(() => newPost(channelId));
  const {
    0: file,
    1: setFile
  } = (0,react.useState)(null);
  const {
    0: error,
    1: setError
  } = (0,react.useState)('');
  const {
    0: submitting,
    1: setSubmitting
  } = (0,react.useState)(false);
  const {
    title
  } = post;
  const router = (0,next_router.useRouter)();

  function onChange(e) {
    setPost(() => _objectSpread(_objectSpread({}, post), {}, {
      [e.target.name]: e.target.value
    }));
  }

  function onFileChange(event) {
    const {
      target: {
        value,
        files
      }
    } = event;
    const fileForUpload = files[0];
    setFile(fileForUpload || value);
    const extension = fileForUpload.name.split('.')[1];
    const imagePath = `original.${extension}`;
    setPost(() => _objectSpread(_objectSpread({}, post), {}, {
      imagePath
    }));
  }

  function isFormValid() {
    return title && file;
  }

  async function createNewPost() {
    if (!isFormValid()) {
      setError('Please complete all fields');
      return;
    }

    try {
      const {
        type: mimeType
      } = file;
      const key = `images/${post.channelId}/${post.postId}/${post.imagePath}`;
      setSubmitting(true);
      await aws_amplify_lib.Storage.put(key, file, {
        contentType: mimeType
      });
      await aws_amplify_lib.API.graphql({
        query: createPost,
        variables: {
          post
        },
        authMode: 'AMAZON_COGNITO_USER_POOLS'
      });
      setTimeout(() => {
        setPost(newPost(channelId));
        router.push('/');
      }, 1000); //router.push(`/posts/${post.id}`);
    } catch (err) {
      console.log('error: ', err);
      setSubmitting(false);
    }
  }

  if (!SimpleMDE) {
    return null;
  }

  if (submitting) {
    return /*#__PURE__*/jsx_runtime.jsx("p", {
      children: "Submitting ..."
    });
  }

  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: "grid grid-cols-1 gap-y-1",
    children: [/*#__PURE__*/jsx_runtime.jsx("h2", {
      children: "Add memory"
    }), error && /*#__PURE__*/jsx_runtime.jsx("p", {
      children: error
    }), /*#__PURE__*/jsx_runtime.jsx("input", {
      onChange: onChange,
      name: "title",
      placeholder: "Title",
      value: post.title,
      type: "text"
    }), /*#__PURE__*/jsx_runtime.jsx("input", {
      type: "file",
      onChange: onFileChange
    }), /*#__PURE__*/jsx_runtime.jsx("button", {
      className: "btn btn-primary",
      onClick: createNewPost,
      children: "Submit"
    })]
  });
}

function getServerSideProps(context) {
  return {
    props: getChannelProps(context)
  };
}
/* harmony default export */ const create_post = ((0,lib.withAuthenticator)(CreatePost));

/***/ }),

/***/ 82333:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps),
/* harmony export */   "unstable_getStaticParams": () => (/* binding */ unstable_getStaticParams),
/* harmony export */   "unstable_getStaticProps": () => (/* binding */ unstable_getStaticProps),
/* harmony export */   "unstable_getStaticPaths": () => (/* binding */ unstable_getStaticPaths),
/* harmony export */   "unstable_getServerProps": () => (/* binding */ unstable_getServerProps),
/* harmony export */   "config": () => (/* binding */ config),
/* harmony export */   "_app": () => (/* binding */ _app),
/* harmony export */   "renderReqToHTML": () => (/* binding */ renderReqToHTML),
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var next_dist_server_node_polyfill_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70607);
/* harmony import */ var next_dist_server_node_polyfill_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_node_polyfill_fetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59450);
/* harmony import */ var private_dot_next_build_manifest_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(97020);
/* harmony import */ var private_dot_next_react_loadable_manifest_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(73978);
/* harmony import */ var next_dist_build_webpack_loaders_next_serverless_loader_page_handler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(99436);

      
      
      
      

      
      const { processEnv } = __webpack_require__(72333)
      processEnv([])
    
      
      const runtimeConfig = {}
      ;

      const documentModule = __webpack_require__(88881)

      const appMod = __webpack_require__(38841)
      let App = appMod.default || appMod.then && appMod.then(mod => mod.default);

      const compMod = __webpack_require__(94054)

      const Component = compMod.default || compMod.then && compMod.then(mod => mod.default)
      /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Component);
      const getStaticProps = compMod['getStaticProp' + 's'] || compMod.then && compMod.then(mod => mod['getStaticProp' + 's'])
      const getStaticPaths = compMod['getStaticPath' + 's'] || compMod.then && compMod.then(mod => mod['getStaticPath' + 's'])
      const getServerSideProps = compMod['getServerSideProp' + 's'] || compMod.then && compMod.then(mod => mod['getServerSideProp' + 's'])

      // kept for detecting legacy exports
      const unstable_getStaticParams = compMod['unstable_getStaticParam' + 's'] || compMod.then && compMod.then(mod => mod['unstable_getStaticParam' + 's'])
      const unstable_getStaticProps = compMod['unstable_getStaticProp' + 's'] || compMod.then && compMod.then(mod => mod['unstable_getStaticProp' + 's'])
      const unstable_getStaticPaths = compMod['unstable_getStaticPath' + 's'] || compMod.then && compMod.then(mod => mod['unstable_getStaticPath' + 's'])
      const unstable_getServerProps = compMod['unstable_getServerProp' + 's'] || compMod.then && compMod.then(mod => mod['unstable_getServerProp' + 's'])

      let config = compMod['confi' + 'g'] || (compMod.then && compMod.then(mod => mod['confi' + 'g'])) || {}
      const _app = App

      const combinedRewrites = Array.isArray(private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__/* .rewrites */ .Dg)
        ? private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__/* .rewrites */ .Dg
        : []

      if (!Array.isArray(private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__/* .rewrites */ .Dg)) {
        combinedRewrites.push(...private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__/* .rewrites.beforeFiles */ .Dg.beforeFiles)
        combinedRewrites.push(...private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__/* .rewrites.afterFiles */ .Dg.afterFiles)
        combinedRewrites.push(...private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__/* .rewrites.fallback */ .Dg.fallback)
      }

      const { renderReqToHTML, render } = (0,next_dist_build_webpack_loaders_next_serverless_loader_page_handler__WEBPACK_IMPORTED_MODULE_4__/* .getPageHandler */ .u)({
        pageModule: compMod,
        pageComponent: Component,
        pageConfig: config,
        appModule: App,
        documentModule: documentModule,
        errorModule: __webpack_require__(3359),
        notFoundModule: undefined,
        pageGetStaticProps: getStaticProps,
        pageGetStaticPaths: getStaticPaths,
        pageGetServerSideProps: getServerSideProps,

        assetPrefix: "",
        canonicalBase: "",
        generateEtags: true,
        poweredByHeader: true,

        runtimeConfig,
        buildManifest: private_dot_next_build_manifest_json__WEBPACK_IMPORTED_MODULE_2__,
        reactLoadableManifest: private_dot_next_react_loadable_manifest_json__WEBPACK_IMPORTED_MODULE_3__,

        rewrites: combinedRewrites,
        i18n: undefined,
        page: "/create-post",
        buildId: "uKQUohlDWSNfevlhB-gHr",
        escapedBuildId: "uKQUohlDWSNfevlhB\-gHr",
        basePath: "",
        pageIsDynamic: false,
        encodedPreviewProps: {previewModeId:"13ff278e3adfa9da938f3927be285af7",previewModeSigningKey:"182349ab14e70a659e8807e6ba76ebbcd9f9676639532bb50a6c5a985b34d78d",previewModeEncryptionKey:"ab0e16887a9535e4d7ba080ddb033360f03504d905dd498b1cb125921d3a1800"}
      })
      
    

/***/ }),

/***/ 42357:
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ 64293:
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ 63129:
/***/ ((module) => {

module.exports = require("child_process");

/***/ }),

/***/ 45532:
/***/ ((module) => {

module.exports = require("critters");

/***/ }),

/***/ 76417:
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ 28614:
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ 35747:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 98605:
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ 97565:
/***/ ((module) => {

module.exports = require("http2");

/***/ }),

/***/ 57211:
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ 11631:
/***/ ((module) => {

module.exports = require("net");

/***/ }),

/***/ 33700:
/***/ ((module) => {

module.exports = require("next/dist/compiled/@ampproject/toolbox-optimizer");

/***/ }),

/***/ 12087:
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ 85622:
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ 61765:
/***/ ((module) => {

module.exports = require("process");

/***/ }),

/***/ 71191:
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ 92413:
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ 24304:
/***/ ((module) => {

module.exports = require("string_decoder");

/***/ }),

/***/ 33867:
/***/ ((module) => {

module.exports = require("tty");

/***/ }),

/***/ 78835:
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ 31669:
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ 78761:
/***/ ((module) => {

module.exports = require("zlib");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// the startup function
/******/ 	__webpack_require__.x = () => {
/******/ 		// Load entry module and return exports
/******/ 		// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 		var __webpack_exports__ = __webpack_require__.O(undefined, [48,188,375,163,309,152,874,589,873], () => (__webpack_require__(82333)))
/******/ 		__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 		return __webpack_exports__;
/******/ 	};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks and sibling chunks for the entrypoint
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	                // Font manifest declaration
/******/ 	                __webpack_require__.__NEXT_FONT_MANIFEST__ = [];
/******/ 	            // Enable feature:
/******/ 	            process.env.__NEXT_OPTIMIZE_FONTS = JSON.stringify(true);
/******/ 	
/******/ 	/* webpack/runtime/require chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded chunks
/******/ 		// "1" means "loaded", otherwise not loaded yet
/******/ 		var installedChunks = {
/******/ 			25: 1
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.O.require = (chunkId) => (installedChunks[chunkId]);
/******/ 		
/******/ 		var installChunk = (chunk) => {
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids, runtime = chunk.runtime;
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 1;
/******/ 			__webpack_require__.O();
/******/ 		};
/******/ 		
/******/ 		// require() chunk loading for javascript
/******/ 		__webpack_require__.f.require = (chunkId, promises) => {
/******/ 			// "1" is the signal for "already loaded"
/******/ 			if(!installedChunks[chunkId]) {
/******/ 				if(true) { // all chunks have JS
/******/ 					installChunk(require("../chunks/" + __webpack_require__.u(chunkId)));
/******/ 				} else installedChunks[chunkId] = 1;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		// no external install chunk
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/startup chunk dependencies */
/******/ 	(() => {
/******/ 		var next = __webpack_require__.x;
/******/ 		__webpack_require__.x = () => {
/******/ 			__webpack_require__.e(48);
/******/ 			__webpack_require__.e(188);
/******/ 			__webpack_require__.e(375);
/******/ 			__webpack_require__.e(163);
/******/ 			__webpack_require__.e(309);
/******/ 			__webpack_require__.e(152);
/******/ 			__webpack_require__.e(874);
/******/ 			__webpack_require__.e(589);
/******/ 			__webpack_require__.e(873);
/******/ 			return next();
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// run startup
/******/ 	var __webpack_exports__ = __webpack_require__.x();
/******/ 	module.exports = __webpack_exports__;
/******/ 	
/******/ })()
;