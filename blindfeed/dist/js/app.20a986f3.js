(function(t){function e(e){for(var r,a,c=e[0],s=e[1],u=e[2],f=0,d=[];f<c.length;f++)a=c[f],o[a]&&d.push(o[a][0]),o[a]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);l&&l(e);while(d.length)d.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,c=1;c<n.length;c++){var s=n[c];0!==o[s]&&(r=!1)}r&&(i.splice(e--,1),t=a(a.s=n[0]))}return t}var r={},o={app:0},i=[];function a(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=r,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(n,r,function(e){return t[e]}.bind(null,r));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var l=s;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},1256:function(t,e,n){},2642:function(t,e,n){"use strict";var r=n("f870"),o=n.n(r);o.a},"3c46":function(t,e,n){"use strict";var r=n("1256"),o=n.n(r);o.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},i=[],a=n("2877"),c={},s=Object(a["a"])(c,o,i,!1,null,null,null);s.options.__file="App.vue";var u=s.exports,l=n("9f7b"),f=(n("f9e3"),n("2dd8"),n("8c4f")),d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",{staticClass:"totalComics"},[t._v("Commics loaded: "+t._s(t.totalComics))]),n("b-container",{staticClass:"bv-example-row"},[n("b-row",t._l(t.totalComics,function(t){return n("index",{key:t,attrs:{comicnum:t}})}))],1)],1)},p=[],m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-col",{attrs:{sm:"6"}},[n("b-alert",{attrs:{show:""}},[t._v("Comics Number "+t._s(t.comicnum))]),null===t.comics?n("img",{attrs:{slot:"aside",src:"https://loading.io/spinners/balls/lg.circle-slack-loading-icon.gif",width:"200",alt:"placeholder"},slot:"aside"}):n("img",{attrs:{slot:"aside",src:t.comics.data.img,width:"200",alt:"placeholder"},slot:"aside"}),n("br"),n("router-link",{attrs:{to:{name:"fullComic",params:{id:t.comicnum}}}},[t._v("See more")])],1)},h=[],v=(n("96cf"),n("3040")),b=n("bc3a"),g=n.n(b),w="https://xkcd.now.sh",_=function(){return g.a.create({baseURL:"".concat(w,"/"),withCredentials:!1})},x=n("2f62"),y=n("0e44");r["a"].use(x["a"]);new x["a"].Store({strict:!0,plugins:[Object(y["a"])()],state:{},mutations:{setToken:function(t,e){}},actions:{setToken:function(t,e){var n=t.commit;n("setToken",e)}},getters:{getToken:function(t){return t.token}}});var C={getComics:function(t){return _().get("".concat(t))}},O={props:["comicnum"],data:function(){return{comics:null}},methods:{goToDetails:function(t){console.log(t),this.$router.push({path:"fullComic/".concat(t)})}},created:function(){var t=Object(v["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,C.getComics(this.comicnum);case 2:this.comics=t.sent;case 3:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},j=O,k=(n("2642"),Object(a["a"])(j,m,h,!1,null,"b97e1f7c",null));k.options.__file="index.vue";var S=k.exports,T={name:"app",data:function(){return{totalComics:10}},methods:{infiniteScroll:function(){var t=this;window.onscroll=function(){var e=document.documentElement.scrollTop+window.innerHeight===document.documentElement.offsetHeight;e&&(t.totalComics+=10)}}},mounted:function(){this.infiniteScroll()},components:{index:S}},$=T,E=(n("7df3"),Object(a["a"])($,d,p,!1,null,null,null));E.options.__file="home.vue";var P=E.exports,R=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-col",{attrs:{sm:"12"}},[t.data?n("b-alert",{attrs:{show:""}},[t._v(t._s(t.data.data.title))]):t._e(),null===t.data?n("img",{attrs:{slot:"aside",src:"https://loading.io/spinners/balls/lg.circle-slack-loading-icon.gif",width:"200",alt:"placeholder"},slot:"aside"}):n("img",{attrs:{slot:"aside",src:t.data.data.img,width:"600",alt:"placeholder"},slot:"aside"})],1)},M=[],H={data:function(){return{data:null}},created:function(){var t=Object(v["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,C.getComics(this.$route.params.id);case 2:this.data=t.sent;case 3:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},J=H,A=(n("3c46"),Object(a["a"])(J,R,M,!1,null,"8c3518b6",null));A.options.__file="fullComic.vue";var D=A.exports;r["a"].use(f["a"]);var L=new f["a"]({mode:"history",routes:[{path:"/",name:"home",component:P},{path:"/fullComic/:id",name:"fullComic",component:D}]});r["a"].use(l["a"]),r["a"].config.productionTip=!1,new r["a"]({router:L,render:function(t){return t(u)}}).$mount("#app")},"7df3":function(t,e,n){"use strict";var r=n("9ff1"),o=n.n(r);o.a},"9ff1":function(t,e,n){},f870:function(t,e,n){}});
//# sourceMappingURL=app.20a986f3.js.map