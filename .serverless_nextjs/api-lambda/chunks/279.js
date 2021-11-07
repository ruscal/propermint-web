"use strict";
exports.id = 279;
exports.ids = [279];
exports.modules = {

/***/ 14887:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "y": () => (/* binding */ PostCard)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(41664);
// EXTERNAL MODULE: ./node_modules/react-markdown/index.js + 126 modules
var react_markdown = __webpack_require__(6012);
// EXTERNAL MODULE: ./node_modules/aws-amplify/lib/index.js
var lib = __webpack_require__(31650);
// EXTERNAL MODULE: ./src/graphql.ts
var graphql = __webpack_require__(53961);
;// CONCATENATED MODULE: ./src/constants.ts
const CDN_BASE = 'https://m.propermint.life';
const CDN_IMAGES_PATH = '/public/images/';
;// CONCATENATED MODULE: ./src/utilities/getSrcSet.ts

const imageSizes = [240, 320, 480, 640, 750, 1080];
function getSrcSet(imageId) {
  return imageSizes.map(width => `${getImagePath(imageId, width)} ${width}w`).join(',');
}
function getSrc(imageId) {
  return getImagePath(imageId, imageSizes[0]);
}
function getImagePath(imageId, size) {
  return `${CDN_BASE}${CDN_IMAGES_PATH}${imageId}/${size}.jpg`;
}
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./src/components/PostImage.tsx


const PostImage = ({
  imageId
}) => /*#__PURE__*/jsx_runtime.jsx("img", {
  className: "object-cover w-full",
  src: getSrc(imageId),
  srcSet: getSrcSet(imageId)
});
;// CONCATENATED MODULE: ./src/components/PostCard.tsx









const PostCard = ({
  post,
  canEdit = false,
  onDeleted
}) => {
  async function deletePost(postId) {
    console.log('postId: ', postId);
    await lib.API.graphql({
      query: graphql/* deletePost */.fR,
      variables: {
        postId
      },
      authMode: 'AMAZON_COGNITO_USER_POOLS'
    });
    onDeleted();
  }

  return /*#__PURE__*/jsx_runtime.jsx(next_link.default, {
    href: `/posts/${post.postId}`,
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      children: [post.imagePath && /*#__PURE__*/jsx_runtime.jsx(PostImage, {
        imageId: post.postId
      }), post.content && /*#__PURE__*/jsx_runtime.jsx(react_markdown/* default */.Z, {
        children: post.content
      }), canEdit && /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [/*#__PURE__*/jsx_runtime.jsx(next_link.default, {
          href: `/edit-post/${post.postId}`,
          children: /*#__PURE__*/jsx_runtime.jsx("a", {
            style: linkStyle,
            children: "Edit Post"
          })
        }), /*#__PURE__*/jsx_runtime.jsx(next_link.default, {
          href: `/posts/${post.postId}`,
          children: /*#__PURE__*/jsx_runtime.jsx("a", {
            style: linkStyle,
            children: "View Post"
          })
        }), /*#__PURE__*/jsx_runtime.jsx("button", {
          style: buttonStyle,
          onClick: () => deletePost(post.postId),
          children: "Delete Post"
        })]
      })]
    })
  }, post.postId);
};
const linkStyle = {
  cursor: 'pointer',
  borderBottom: '1px solid rgba(0, 0, 0 ,.1)',
  padding: '20px 0px'
};
const authorStyle = {
  color: 'rgba(0, 0, 0, .55)',
  fontWeight: 600
};
const buttonStyle = {
  cursor: 'pointer',
  backgroundColor: '#ddd',
  border: 'none',
  padding: '5px 20px'
};

/***/ }),

/***/ 3084:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E": () => (/* binding */ PostsList)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);

const PostsList = ({
  children
}) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
  className: "grid grid-cols-1 gap-4",
  children: children
});

/***/ }),

/***/ 35305:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "p": () => (/* binding */ getChannelProps)
/* harmony export */ });
/* harmony import */ var _getCurrentChannel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29893);

function getChannelProps(context) {
  return {
    channelId: (0,_getCurrentChannel__WEBPACK_IMPORTED_MODULE_0__/* .getCurrentChannel */ .T)(context.req.headers.host)
  };
}

/***/ }),

/***/ 29893:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "T": () => (/* binding */ getCurrentChannel)
/* harmony export */ });
const CHANNEL_SUB_DOMAIN_REGEX = /([a-zA-Z0-9 -_.]+).propermint.life/gi;
function getCurrentChannel(hostname) {
  console.log({
    hostname
  });
  const match = hostname.match(CHANNEL_SUB_DOMAIN_REGEX);
  return match && match[1] || 'test';
}

/***/ })

};
;