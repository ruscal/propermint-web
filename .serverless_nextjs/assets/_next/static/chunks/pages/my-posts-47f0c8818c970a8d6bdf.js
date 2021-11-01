(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[997],{2468:function(n,t,e){"use strict";e.d(t,{y:function(){return f}});var r=e(5861),o=e(7757),s=e.n(o),i=(e(7294),e(1664)),c=e(7828),u=e(7388),a=e(3961),d=e(6246),p=e(5893),f=function(n){var t=n.post,e=n.canEdit,o=void 0!==e&&e,f=n.onDeleted;function m(){return(m=(0,r.Z)(s().mark((function n(t){return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return console.log("postId: ",t),n.next=3,u.b.graphql({query:a.fR,variables:{postId:t},authMode:"AMAZON_COGNITO_USER_POOLS"});case 3:f();case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}return(0,p.jsx)(i.default,{href:"/posts/".concat(t.id),children:(0,p.jsxs)("div",{children:[t.imagePath&&(0,p.jsx)(d.N,{imageId:t.id}),t.content&&(0,p.jsx)(c.Z,{children:t.content}),o&&(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(i.default,{href:"/edit-post/".concat(t.id),children:(0,p.jsx)("a",{style:l,children:"Edit Post"})}),(0,p.jsx)(i.default,{href:"/posts/".concat(t.id),children:(0,p.jsx)("a",{style:l,children:"View Post"})}),(0,p.jsx)("button",{style:h,onClick:function(){return function(n){return m.apply(this,arguments)}(t.id)},children:"Delete Post"})]})]})},t.id)},l={cursor:"pointer",borderBottom:"1px solid rgba(0, 0, 0 ,.1)",padding:"20px 0px"},h={cursor:"pointer",backgroundColor:"#ddd",border:"none",padding:"5px 20px"}},6246:function(n,t,e){"use strict";e.d(t,{N:function(){return u}});var r=[240,320,480,640,750,1080];function o(n){return r.map((function(t){return"".concat(i(n,t)," ").concat(t,"w")})).join(",")}function s(n){return i(n,r[0])}function i(n,t){return"".concat("https://m.propermint.life").concat("/public/images/").concat(n,"/").concat(t,".jpg")}var c=e(5893),u=function(n){var t=n.imageId;return(0,c.jsx)("img",{className:"object-cover w-full",src:s(t),srcSet:o(t)})}},3084:function(n,t,e){"use strict";e.d(t,{E:function(){return o}});var r=e(5893),o=function(n){var t=n.children;return(0,r.jsx)("div",{className:"grid grid-cols-1 gap-4",children:t})}},3961:function(n,t,e){"use strict";e.d(t,{u_:function(){return r},aA:function(){return o},zu:function(){return s},qb:function(){return i},CP:function(){return c},fR:function(){return u}});var r="\n    query getPostById($postId: ID!) {\n        getPostById(postId: $postId) {\n            id\n            title\n            content\n            imagePath\n            owner\n        }\n    }\n",o="\n    query ListPosts {\n        listPosts {\n            id\n            title\n            content\n            imagePath\n            owner\n        }\n    }\n",s="\n    query PostsByUsername {\n        postsByUsername {\n            id\n            title\n            content\n            imagePath\n            owner\n        }\n    }\n",i="\n    mutation CreatePost($post: PostInput!) {\n        createPost(post: $post) {\n            id\n            title\n            content\n            imagePath\n            owner\n        }\n    }\n",c="\n    mutation UpdatePost($post: UpdatePostInput!) {\n        updatePost(post: $post) {\n            id\n            title\n            content\n            imagePath\n        }\n    }\n",u="\n    mutation DeletePost($postId: ID!) {\n        deletePost(postId: $postId)\n    }\n"},7126:function(n,t,e){"use strict";e.r(t),e.d(t,{default:function(){return f}});var r=e(5861),o=e(7757),s=e.n(o),i=e(7294),c=e(7388),u=e(3961),a=e(2468),d=e(3084),p=e(5893);function f(){var n=(0,i.useState)([]),t=n[0],e=n[1];function o(){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(s().mark((function n(){var t;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.b.graphql({query:u.zu,authMode:"AMAZON_COGNITO_USER_POOLS"});case 2:t=n.sent,e(t.data.postsByUsername);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}return(0,i.useEffect)((function(){o()}),[]),(0,p.jsx)(d.E,{children:t.map((function(n){return(0,p.jsx)(a.y,{post:n,canEdit:!0,onDeleted:o},n.id)}))})}},2934:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/my-posts",function(){return e(7126)}])}},function(n){n.O(0,[774,388,828,888,179],(function(){return t=2934,n(n.s=t);var t}));var t=n.O();_N_E=t}]);