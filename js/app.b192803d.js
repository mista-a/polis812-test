(function(){"use strict";var t={7613:function(t,e,n){n.d(e,{h:function(){return u}});var s=n(6265),r=n.n(s);const o=t=>({async get(e){e=e??5;const{data:n}=await t.get(`albums?_limit=${e}`);return n},async getPhotos(e){e=e??300;const{data:n}=await t.get(`photos?_limit=${e}`);return n}}),a=t=>({async get(e){e=e??4;const{data:n}=await t.get(`posts?_limit=${e}`);return n},async create(e){t.post("posts",e)},async update(e,n){t.put(`posts/${e}`,n)}}),i=t=>({async get(){const{data:e}=await t.get("users");return e},async getOne(e){const{data:n}=await t.get(`users/${e}`);return n}}),u=()=>{const t=r().create({baseURL:"https://jsonplaceholder.typicode.com/"});return{user:i(t),album:o(t),post:a(t)}}},8555:function(t,e,n){var s=n(6369),r=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},o=[],a=n(1001),i={},u=(0,a.Z)(i,r,o,!1,null,null,null),c=u.exports,l=n(2631),f=function(){var t=this,e=t._self._c;return e("UsersList")},d=[],p=function(){var t=this,e=t._self._c;return e("div",{staticClass:"users-list"},t._l(t.users,(function(t){return e("UserItem",{key:t.id,attrs:{id:t.id,name:t.name,email:t.email,website:t.website,city:t.address.city,street:t.address.street}})})),1)},m=[],h=function(){var t=this,e=t._self._c;return e("router-link",{staticClass:"user",attrs:{to:`user/${t.id}`}},[e("div",{staticClass:"about-user"},[e("p",{staticClass:"name"},[t._v(t._s(t.name))]),e("p",{staticClass:"email"},[t._v(t._s(t.email))])]),e("div",{staticClass:"website"},[e("span",{staticClass:"website-text"},[t._v(t._s(t.website))])]),e("span",{staticClass:"location"},[t._v(t._s(t.city)+", "+t._s(t.street))])])},v=[],b={name:"UserItem",props:["id","name","email","website","city","phone","street"]},g=b,y=(0,a.Z)(g,h,v,!1,null,"1e94e506",null),w=y.exports,_=n(3822),C={name:"UsersList",components:{UserItem:w},computed:(0,_.Se)(["users"]),methods:(0,_.nv)(["fetchUsers"]),mounted(){this.fetchUsers()}},P=C,k=(0,a.Z)(P,p,m,!1,null,"a5e869a4",null),O=k.exports,U={name:"UsersListView",components:{UsersList:O}},j=U,A=(0,a.Z)(j,f,d,!1,null,null,null),x=A.exports;s["default"].use(l.Z);const E=[{path:"/",name:"users",component:x},{path:"/user/:id",name:"UserView",component:()=>n.e(582).then(n.bind(n,4582))},{path:"/404",name:"404",component:()=>n.e(579).then(n.bind(n,4579))},{path:"*",redirect:"/404"}],S=new l.Z({mode:"history",base:"/polis812-test/",routes:E});var L=S,T=n(7613),Z={state:{users:[]},getters:{users(t){return t.users}},mutations:{updateUsers(t,e){t.users=e}},actions:{async fetchUsers({commit:t}){const e=await(0,T.h)().user.get();t("updateUsers",e)}}},N={state:{posts:[]},getters:{posts(t){return t.posts}},mutations:{updatePosts(t,e){t.posts=e},createPost(t,e){t.posts.push(e)},updatePost(t,e){s["default"].set(t.posts,e.id-1,e)}},actions:{async fetchPosts({commit:t}){const e=await(0,T.h)().post.get();t("updatePosts",e)},async createPost({commit:t,state:e},{title:n,body:s}){try{(0,T.h)().post.create()}catch(o){console.error(o)}const r=e.posts[e.posts.length-1].id+1;t("createPost",{title:n,body:s,id:r})},async updatePost({commit:t},e){try{(0,T.h)().post.update(e.id)}catch(n){console.error(n)}t("updatePost",e)}}},$={state:{albums:[]},getters:{albums(t){return t.albums}},mutations:{updateAlbums(t,e){t.albums=e}},actions:{async fetchAlbums({commit:t}){const e=await(0,T.h)().album.get();t("updateAlbums",e)}}};s["default"].use(_.ZP);var F=new _.ZP.Store({modules:{users:Z,posts:N,albums:$}});s["default"].config.productionTip=!1,new s["default"]({router:L,store:F,render:t=>t(c)}).$mount("#app")}},e={};function n(s){var r=e[s];if(void 0!==r)return r.exports;var o=e[s]={exports:{}};return t[s].call(o.exports,o,o.exports,n),o.exports}n.m=t,function(){var t=[];n.O=function(e,s,r,o){if(!s){var a=1/0;for(l=0;l<t.length;l++){s=t[l][0],r=t[l][1],o=t[l][2];for(var i=!0,u=0;u<s.length;u++)(!1&o||a>=o)&&Object.keys(n.O).every((function(t){return n.O[t](s[u])}))?s.splice(u--,1):(i=!1,o<a&&(a=o));if(i){t.splice(l--,1);var c=r();void 0!==c&&(e=c)}}return e}o=o||0;for(var l=t.length;l>0&&t[l-1][2]>o;l--)t[l]=t[l-1];t[l]=[s,r,o]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var s in e)n.o(e,s)&&!n.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})}}(),function(){n.f={},n.e=function(t){return Promise.all(Object.keys(n.f).reduce((function(e,s){return n.f[s](t,e),e}),[]))}}(),function(){n.u=function(t){return"js/"+t+"."+{579:"6f4b01e3",582:"26b83027"}[t]+".js"}}(),function(){n.miniCssF=function(t){return"css/"+t+"."+{579:"3c911532",582:"e02176e2"}[t]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="polis812-test:";n.l=function(s,r,o,a){if(t[s])t[s].push(r);else{var i,u;if(void 0!==o)for(var c=document.getElementsByTagName("script"),l=0;l<c.length;l++){var f=c[l];if(f.getAttribute("src")==s||f.getAttribute("data-webpack")==e+o){i=f;break}}i||(u=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,n.nc&&i.setAttribute("nonce",n.nc),i.setAttribute("data-webpack",e+o),i.src=s),t[s]=[r];var d=function(e,n){i.onerror=i.onload=null,clearTimeout(p);var r=t[s];if(delete t[s],i.parentNode&&i.parentNode.removeChild(i),r&&r.forEach((function(t){return t(n)})),e)return e(n)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=d.bind(null,i.onerror),i.onload=d.bind(null,i.onload),u&&document.head.appendChild(i)}}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.p="/polis812-test/"}(),function(){var t=function(t,e,n,s){var r=document.createElement("link");r.rel="stylesheet",r.type="text/css";var o=function(o){if(r.onerror=r.onload=null,"load"===o.type)n();else{var a=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.href||e,u=new Error("Loading CSS chunk "+t+" failed.\n("+i+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=a,u.request=i,r.parentNode.removeChild(r),s(u)}};return r.onerror=r.onload=o,r.href=e,document.head.appendChild(r),r},e=function(t,e){for(var n=document.getElementsByTagName("link"),s=0;s<n.length;s++){var r=n[s],o=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(o===t||o===e))return r}var a=document.getElementsByTagName("style");for(s=0;s<a.length;s++){r=a[s],o=r.getAttribute("data-href");if(o===t||o===e)return r}},s=function(s){return new Promise((function(r,o){var a=n.miniCssF(s),i=n.p+a;if(e(a,i))return r();t(s,i,r,o)}))},r={143:0};n.f.miniCss=function(t,e){var n={579:1,582:1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=s(t).then((function(){r[t]=0}),(function(e){throw delete r[t],e})))}}(),function(){var t={143:0};n.f.j=function(e,s){var r=n.o(t,e)?t[e]:void 0;if(0!==r)if(r)s.push(r[2]);else{var o=new Promise((function(n,s){r=t[e]=[n,s]}));s.push(r[2]=o);var a=n.p+n.u(e),i=new Error,u=function(s){if(n.o(t,e)&&(r=t[e],0!==r&&(t[e]=void 0),r)){var o=s&&("load"===s.type?"missing":s.type),a=s&&s.target&&s.target.src;i.message="Loading chunk "+e+" failed.\n("+o+": "+a+")",i.name="ChunkLoadError",i.type=o,i.request=a,r[1](i)}};n.l(a,u,"chunk-"+e,e)}},n.O.j=function(e){return 0===t[e]};var e=function(e,s){var r,o,a=s[0],i=s[1],u=s[2],c=0;if(a.some((function(e){return 0!==t[e]}))){for(r in i)n.o(i,r)&&(n.m[r]=i[r]);if(u)var l=u(n)}for(e&&e(s);c<a.length;c++)o=a[c],n.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return n.O(l)},s=self["webpackChunkpolis812_test"]=self["webpackChunkpolis812_test"]||[];s.forEach(e.bind(null,0)),s.push=e.bind(null,s.push.bind(s))}();var s=n.O(void 0,[998],(function(){return n(8555)}));s=n.O(s)})();
//# sourceMappingURL=app.b192803d.js.map