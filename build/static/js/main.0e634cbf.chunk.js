(this["webpackJsonpapplication-api"]=this["webpackJsonpapplication-api"]||[]).push([[0],{56:function(e,t,n){},57:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),s=n(7),i=n.n(s),r=n(9),o=n(12),l=n.n(o),u=n(22),d="ADD_ITEM",j="GET_USERS",b=n(23),p=n.n(b),v=100,O=function(e){return{type:d,payload:{id:++v,contents:e}}},f=function(){return function(){var e=Object(u.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.a.get("https://jsonplaceholder.typicode.com/posts/");case 3:n=e.sent,console.log("res",n),t({type:j,payload:n.data}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log("error",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()},h=n(24),m=n.n(h),g=n(3),x=n(1),L=Object(g.b)(null,(function(e){return{addUserInList:function(){return e(O.apply(void 0,arguments))}}}))((function(e){var t=e.addUserInList,n=Object(a.useState)(""),c=Object(r.a)(n,2),s=c[0],i=c[1],o=function(){t(s),i("")};return Object(x.jsxs)("div",{className:"add-item",children:[Object(x.jsx)("input",{onChange:function(e){return i(e.target.value)},value:s,onKeyDown:function(e){13===e.keyCode&&o()}}),Object(x.jsx)("button",{className:"add-todo",onClick:o,children:"Add Item"})]})})),y=(n(56),{totalPage:0,activePage:0,items:[]}),N=Object(g.b)((function(e){return{userList:e.itemList.userList||[]}}),(function(e){return{callUserListAPT:function(){return e(f.apply(void 0,arguments))}}}))((function(e){var t=e.callUserListAPT,n=e.userList,c=Object(a.useState)(y),s=Object(r.a)(c,2),i=s[0],o=s[1];console.log("userList",n),Object(a.useEffect)((function(){t()}),[]),Object(a.useEffect)((function(){var e=u(),t=l(0);o({totalPage:e,items:t,activePage:0})}),[n]);var l=function(e){return n.slice(10*e,10*(e+1))},u=function(){var e=n&&n.length||0;return e/10+(e%10?1:0)};return Object(x.jsx)("div",{className:"main",children:Object(x.jsxs)("div",{className:"main-container",children:[Object(x.jsx)("div",{className:"heading",children:Object(x.jsx)("h1",{children:"Title"})}),Object(x.jsx)(L,{}),Object(x.jsx)("div",{className:"list",children:i.items.map((function(e){return Object(x.jsxs)("div",{children:[Object(x.jsx)("span",{className:"list-id",children:e.id}),Object(x.jsx)("span",{children:e.title})]})}))}),Object(x.jsx)("div",{className:"pagination-container",children:Object(x.jsx)(m.a,{previousLabel:"Previous",nextLabel:"Next",breakLabel:".......",breakClassName:"break-me",pageCount:i.totalPage,marginPagesDisplayed:1,pageRangeDisplayed:1,onPageChange:function(e){var t=e.selected;console.log("selected",t);var n=l(t);o({items:n,activePage:t})},containerClassName:"pagination",activeClassName:"active"})})]})})})),P=n(5),k=n(25),C=n(26),w=n(6),E={userList:[]},D=Object(P.b)({itemList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d:var n=t.payload,a=n.id,c=n.contents;return Object(w.a)(Object(w.a)({},e),{},{userList:[].concat(Object(C.a)(e.userList),[{title:c,id:a}])});case j:return Object(w.a)(Object(w.a)({},e),{},{userList:t.payload});default:return e}}}),I=Object(P.c)(D,Object(P.a)(k.a)),S=function(){return Object(x.jsx)(g.a,{store:I,children:Object(x.jsx)(N,{})})};i.a.render(Object(x.jsx)(c.a.StrictMode,{children:Object(x.jsx)(S,{})}),document.getElementById("root"))}},[[57,1,2]]]);
//# sourceMappingURL=main.0e634cbf.chunk.js.map