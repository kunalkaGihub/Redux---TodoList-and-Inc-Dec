(this.webpackJsonpreduxapp=this.webpackJsonpreduxapp||[]).push([[0],{11:function(e,t,n){},18:function(e,t,n){},24:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(5),i=n.n(r),s=(n(18),n(11),n(2)),u=n(12),l=n(1),d=function(){var e=Object(c.useState)(""),t=Object(u.a)(e,2),n=t[0],a=t[1],r=Object(s.c)((function(e){return e.todoReducers.list})),i=Object(s.b)();return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{className:"container my-5",children:[Object(l.jsx)("h3",{children:"Add Your List Here"}),Object(l.jsxs)("div",{class:"mb-3 input-group",children:[Object(l.jsx)("input",{type:"text",className:"form-control",placeholder:"\u270d\ufe0f Add Items...",value:n,onChange:function(e){return a(e.target.value)}}),Object(l.jsx)("button",{className:"btn btn-sm btn-success",style:{width:"12%"},onClick:function(){return i((e=n,{type:"ADD_TODO",payload:{id:(new Date).getTime().toString(),data:e}}),a(""));var e},children:Object(l.jsx)("i",{className:"fa fa-plus"})})]}),Object(l.jsx)("div",{className:"container showitems",children:r.map((function(e){return Object(l.jsx)("div",{className:"eactItem",children:Object(l.jsxs)("h3",{children:[e.data,Object(l.jsx)("i",{className:"fa fa-trash mx-5",onClick:function(){return i({type:"DELETE_TODO",id:e.id})}})]})},e.id)}))}),Object(l.jsx)("button",{className:"btn-sm btn-primary",onClick:function(){return i({type:"REMOVE_TODO"})},children:"Remove all"})]})})},j=function(){var e=Object(s.c)((function(e){return e.changeTheNumber})),t=Object(s.b)();return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h1",{className:"text-center",children:"using React and Redux"}),Object(l.jsxs)("div",{className:"container my-5",children:[Object(l.jsx)("h2",{children:"Increment/Decrement Counter"}),Object(l.jsxs)("div",{className:"quantity input-group",children:[Object(l.jsx)("a",{onClick:function(){return t({type:"DECREMENT"})},className:"btn btn-primary",title:"Decrement",children:"-"}),Object(l.jsx)("input",{type:"text",name:"quantity",className:"quantity_input text-center",value:e,readOnly:!0}),Object(l.jsx)("a",{onClick:function(){return t({type:"INCREMENT"})},title:"Increment",className:"btn btn-primary",children:"+"})]})]}),Object(l.jsx)(d,{})]})},o=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,25)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),r(e),i(e)}))},b=n(7),O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INCREMENT":return e+1;case"DECREMENT":return e-1;default:return e}},h=n(13),m=n(3),p={list:[]},x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_TODO":var n=t.payload,c=n.id,a=n.data;return Object(m.a)(Object(m.a)({},e),{},{list:[].concat(Object(h.a)(e.list),[{id:c,data:a}])});case"DELETE_TODO":var r=e.list.filter((function(e){return e.id!==t.id}));return Object(m.a)(Object(m.a)({},e),{},{list:r});case"REMOVE_TODO":return Object(m.a)(Object(m.a)({},e),{},{list:[]});default:return e}},f=Object(b.a)({changeTheNumber:O,todoReducers:x}),v=Object(b.b)(f);i.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(s.a,{store:v,children:Object(l.jsx)(j,{})})}),document.getElementById("root")),o()}},[[24,1,2]]]);
//# sourceMappingURL=main.90715f57.chunk.js.map