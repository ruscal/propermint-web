exports.id = 900;
exports.ids = [900];
exports.modules = {

/***/ 17270:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";

// EXTERNAL MODULE: ./node_modules/aws-amplify/lib/index.js
var lib = __webpack_require__(31650);
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);
;// CONCATENATED MODULE: ./cdk-exports.json
const cdk_exports_namespaceObject = JSON.parse('{"n":{"ze":"37cs2rrf0vjif7c5lclfk628s2","RS":"da2-zfjkzqounna5bidojue4zlf54a","m$":"us-east-1_HYyB8iB7X","GX":"https://vp772rbkg5c7lgbpnigljn2w74.appsync-api.us-east-1.amazonaws.com/graphql","FP":"us-east-1","BW":"us-east-1:ed8d9e2f-240e-4106-9386-b94a9f23ff9c","X_":"propermintcdkstack-imagerepository5c425389-1qvggomc29pru"}}');
;// CONCATENATED MODULE: ./src/aws-exports.ts

const config = {
  aws_project_region: cdk_exports_namespaceObject.n.FP,
  aws_cognito_region: cdk_exports_namespaceObject.n.FP,
  aws_user_pools_id: cdk_exports_namespaceObject.n.m$,
  aws_user_pools_web_client_id: cdk_exports_namespaceObject.n.ze,
  aws_cognito_identity_pool_id: cdk_exports_namespaceObject.n.BW,
  aws_appsync_graphqlEndpoint: cdk_exports_namespaceObject.n.GX,
  aws_appsync_apiKey: cdk_exports_namespaceObject.n.RS,
  aws_appsync_authenticationType: 'API_KEY',
  Storage: {
    AWSS3: {
      bucket: cdk_exports_namespaceObject.n.X_,
      region: cdk_exports_namespaceObject.n.FP
    }
  }
};
/* harmony default export */ const aws_exports = (config);
;// CONCATENATED MODULE: ./src/configureAmplify.ts


lib_default().configure(aws_exports);

/***/ }),

/***/ 49064:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var aws_amplify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(31650);
/* harmony import */ var aws_amplify__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(aws_amplify__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _configureAmplify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17270);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(41664);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(85893);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









function MyApp({
  Component,
  pageProps
}) {
  const {
    0: signedInUser,
    1: setSignedInUser
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    authListener();
  });

  async function authListener() {
    aws_amplify__WEBPACK_IMPORTED_MODULE_4__.Hub.listen('auth', data => {
      switch (data.payload.event) {
        case 'signIn':
          return setSignedInUser(true);

        case 'signOut':
          return setSignedInUser(false);
      }
    });

    try {
      await aws_amplify__WEBPACK_IMPORTED_MODULE_4__.Auth.currentAuthenticatedUser();
      setSignedInUser(true);
    } catch (err) {}
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("nav", {
      style: navStyle,
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__.default, {
        href: "/",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("span", {
          style: linkStyle,
          children: "Home"
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__.default, {
        href: "/create-post",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("span", {
          style: linkStyle,
          children: "Create Post"
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__.default, {
        href: "/profile",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("span", {
          style: linkStyle,
          children: "Profile"
        })
      }), signedInUser && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__.default, {
        href: "/my-posts",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("span", {
          style: linkStyle,
          children: "My Posts"
        })
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
      className: "container mx-auto px-4",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(Component, _objectSpread({}, pageProps))
    })]
  });
}

const navStyle = {
  padding: 20,
  borderBottom: '1px solid #ddd'
};
const linkStyle = {
  marginRight: 20,
  cursor: 'pointer'
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);

/***/ }),

/***/ 72431:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 97020:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"polyfillFiles":["static/chunks/polyfills-a40ef1678bae11e696dba45124eadd70.js"],"devFiles":[],"ampDevFiles":[],"lowPriorityFiles":["static/J_HaL6Gd_ZiW4C47bcIbS/_buildManifest.js","static/J_HaL6Gd_ZiW4C47bcIbS/_ssgManifest.js"],"pages":{"/":["static/chunks/webpack-466dd828d4fd40ce3632.js","static/chunks/framework-c93ed74a065331c4bd75.js","static/chunks/main-62b8caa3ccc47893b147.js","static/chunks/388-95945f5af9f4026df035.js","static/chunks/828-3e4650773d9dd4bd497a.js","static/chunks/pages/index-9bbbf8fbfcd432a1c90b.js"],"/_app":["static/chunks/webpack-466dd828d4fd40ce3632.js","static/chunks/framework-c93ed74a065331c4bd75.js","static/chunks/main-62b8caa3ccc47893b147.js","static/css/31c521a819cfdc58ad6b.css","static/chunks/pages/_app-5bf379ebf72952d1aaee.js"],"/_error":["static/chunks/webpack-466dd828d4fd40ce3632.js","static/chunks/framework-c93ed74a065331c4bd75.js","static/chunks/main-62b8caa3ccc47893b147.js","static/chunks/pages/_error-737a04e9a0da63c9d162.js"],"/create-post":["static/chunks/webpack-466dd828d4fd40ce3632.js","static/chunks/framework-c93ed74a065331c4bd75.js","static/chunks/main-62b8caa3ccc47893b147.js","static/chunks/388-95945f5af9f4026df035.js","static/chunks/735-259086b5bc687284a40b.js","static/css/728569105b86c2f848d4.css","static/chunks/pages/create-post-3b68caedc90e58e39da1.js"],"/edit-post/[id]":["static/chunks/webpack-466dd828d4fd40ce3632.js","static/chunks/framework-c93ed74a065331c4bd75.js","static/chunks/main-62b8caa3ccc47893b147.js","static/chunks/388-95945f5af9f4026df035.js","static/css/728569105b86c2f848d4.css","static/chunks/pages/edit-post/[id]-503246bb11a3d6e5a4ba.js"],"/my-posts":["static/chunks/webpack-466dd828d4fd40ce3632.js","static/chunks/framework-c93ed74a065331c4bd75.js","static/chunks/main-62b8caa3ccc47893b147.js","static/chunks/388-95945f5af9f4026df035.js","static/chunks/828-3e4650773d9dd4bd497a.js","static/chunks/pages/my-posts-6af87600a0a10f5e6d43.js"],"/posts/[id]":["static/chunks/webpack-466dd828d4fd40ce3632.js","static/chunks/framework-c93ed74a065331c4bd75.js","static/chunks/main-62b8caa3ccc47893b147.js","static/chunks/pages/posts/[id]-8368d581569a24a3d409.js"],"/profile":["static/chunks/webpack-466dd828d4fd40ce3632.js","static/chunks/framework-c93ed74a065331c4bd75.js","static/chunks/main-62b8caa3ccc47893b147.js","static/chunks/735-259086b5bc687284a40b.js","static/chunks/pages/profile-73b94b66da57ceb9ad5d.js"]},"ampFirstPages":[]}');

/***/ }),

/***/ 73978:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"../../node_modules/@aws-amplify/ui-components/dist/esm-es5/index-83f2275b.js -> ./shadow-css-360bb6da.js":{"id":5315,"files":["static/chunks/315.7b7e36e1b97ede7af967.js"]},"../../node_modules/@aws-amplify/ui-components/dist/esm-es5/theme-19a9209a.js -> ./css-shim-3b0ed064.js":{"id":1041,"files":["static/chunks/polyfills-css-shim.b11e816e89f4e4d555c9.js"]},"../../node_modules/@aws-amplify/ui-components/dist/esm-es5/theme-19a9209a.js -> ./dom-3fa9e65e.js":{"id":421,"files":["static/chunks/polyfills-dom.678ca1021f3306e69e46.js"]},"../../node_modules/@aws-amplify/ui-components/dist/esm/polyfills/index.js -> ./core-js.js":{"id":261,"files":["static/chunks/polyfills-core-js.2b044b88924010dad54f.js"]},"../../node_modules/@aws-amplify/ui-components/dist/esm/polyfills/index.js -> ./dom.js":{"id":5378,"files":["static/chunks/polyfills-dom.678ca1021f3306e69e46.js"]},"create-post.tsx -> react-simplemde-editor":{"id":1634,"files":["static/chunks/f65a48b9.b2458ce45c6bfb79f4d8.js","static/chunks/634.83b4ec1436acbefb0c2d.js","static/chunks/562.8373e5d11e43b210c985.js"]},"edit-post/[id].tsx -> react-simplemde-editor":{"id":1634,"files":["static/chunks/f65a48b9.b2458ce45c6bfb79f4d8.js","static/chunks/634.83b4ec1436acbefb0c2d.js","static/chunks/562.8373e5d11e43b210c985.js"]}}');

/***/ })

};
;