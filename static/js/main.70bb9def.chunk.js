(this.webpackJsonpproject2=this.webpackJsonpproject2||[]).push([[0],{27:function(e,t,c){},28:function(e,t,c){},29:function(e,t,c){},30:function(e,t,c){},31:function(e,t,c){},32:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),i=c(15),r=c.n(i),a=c(0),l=function(){return Object(a.jsxs)("footer",{className:"page-footer blue darken-1",children:[Object(a.jsx)("div",{className:"container",children:Object(a.jsxs)("div",{className:"row",children:[Object(a.jsxs)("div",{className:"col l6 s12",children:[Object(a.jsx)("h5",{className:"white-text",children:"Footer Content"}),Object(a.jsx)("p",{className:"grey-text text-lighten-4",children:"You can use rows and columns here to organize your footer content."})]}),Object(a.jsxs)("div",{className:"col l4 offset-l2 s12",children:[Object(a.jsx)("h5",{className:"white-text",children:"Links"}),Object(a.jsxs)("ul",{children:[Object(a.jsx)("li",{children:Object(a.jsx)("a",{className:"grey-text text-lighten-3",href:"#!",children:"Link 1"})}),Object(a.jsx)("li",{children:Object(a.jsx)("a",{className:"grey-text text-lighten-3",href:"#!",children:"Link 2"})}),Object(a.jsx)("li",{children:Object(a.jsx)("a",{className:"grey-text text-lighten-3",href:"#!",children:"Link 3"})}),Object(a.jsx)("li",{children:Object(a.jsx)("a",{className:"grey-text text-lighten-3",href:"#!",children:"Link 4"})})]})]})]})}),Object(a.jsx)("div",{className:"footer-copyright",children:Object(a.jsxs)("p",{className:"container",children:["\xa9",(new Date).getFullYear()," Copyright Text"]})})]})},j=c(4),d=function(){return Object(a.jsx)("nav",{className:"blue darken-1",children:Object(a.jsxs)("div",{className:"nav-wrapper",children:[Object(a.jsx)(j.b,{to:"/movie/",className:"brand-logo",children:"\u041a\u0438\u043d\u043e\u043c\u0430\u043d\u0438\u044f"}),Object(a.jsxs)("ul",{id:"nav-mobile",className:"right hide-on-med-and-down",children:[Object(a.jsx)("li",{children:Object(a.jsx)(j.b,{to:"/movie/",children:"\u0421\u0435\u0440\u0438\u0430\u043b\u044b"})}),Object(a.jsx)("li",{children:Object(a.jsx)(j.b,{to:"/movie/",children:"\u0424\u0438\u043b\u044c\u043c\u044b"})}),Object(a.jsx)("li",{children:Object(a.jsx)(j.b,{to:"/about/",children:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b"})})]})]})})},o=c(5),b=c(3),h=c(6),u=Object(n.createContext)(),x=function(e){var t=Object(n.useState)([]),c=Object(o.a)(t,2),s=c[0],i=c[1],r=Object(n.useState)(!1),l=Object(o.a)(r,2),j=l[0],d=l[1],x=Object(n.useState)(""),O=Object(o.a)(x,2),m=O[0],f=O[1],p={cardItem:s,showAlert:m,showCard:j,addCard:function(e){var t=s.findIndex((function(t){return t.id===e.id}));if(f(e.name),t<0)return i([].concat(Object(h.a)(s),[Object(b.a)(Object(b.a)({},e),{},{count:1})]));var c=s.find((function(t){return t.id===e.id}));i([].concat(Object(h.a)(s.slice(0,t)),[Object(b.a)(Object(b.a)({},c),{},{count:c.count+1})],Object(h.a)(s.slice(t+1))))},edtiCard:function(e,t){var c=s.findIndex((function(t){return t.id===e.id}));if(e.count+t<=0)return i(s.filter((function(t){return t.id!==e.id})));var n=s.find((function(t){return t.id===e.id}));i([].concat(Object(h.a)(s.slice(0,c)),[Object(b.a)(Object(b.a)({},n),{},{count:n.count+t})],Object(h.a)(s.slice(c+1))))},SetshowCard:d,SetshowAlert:f};return Object(a.jsx)(u.Provider,{value:p,children:e.children})},O=(c(27),function(e){var t=e.id,c=e.name,s=e.image,i=e.price,r=e.description,l=Object(n.useContext)(u).addCard;return Object(a.jsx)("div",{className:"col s12 m7",children:Object(a.jsxs)("div",{className:"card",children:[Object(a.jsx)("div",{className:"card-image",children:Object(a.jsx)("img",{alt:c,src:s})}),Object(a.jsxs)("div",{style:{height:150},className:"card-content",children:[Object(a.jsx)("span",{className:"card-title",children:c}),Object(a.jsx)("p",{children:r})]}),Object(a.jsxs)("div",{className:"card-action",children:[Object(a.jsx)("button",{onClick:function(){return l({id:t,name:c,price:i,description:r,image:s})},className:"btn blue darken-1",children:"\u041a\u0443\u043f\u0438\u0442\u044c"}),Object(a.jsxs)("span",{className:"right",children:["\u0426\u0435\u043d\u0430: ",i," \u0440\u0443\u0431."]})]})]})})}),m=(c(28),function(e){var t=e.items;return Object(a.jsx)("div",{className:"shop-items",children:t.map((function(e,t){return Object(a.jsx)(O,Object(b.a)({},e),t)}))})}),f=function(){return Object(a.jsx)("div",{className:"progress",children:Object(a.jsx)("div",{className:"indeterminate"})})},p=(c(29),function(e){var t=e.cardItem,c=Object(n.useContext)(u),s=c.SetshowCard,i=c.showCard;return Object(a.jsxs)("div",{onClick:function(){return s(!i)},style:{display:"flex"},className:"cart blue darket-4 white-text",children:[Object(a.jsx)("i",{style:{lineHeight:"unset"},className:"material-icons",children:"shopping_cart"}),Object(a.jsx)("span",{style:{fontSize:"23px"},children:t.length?t.length:null})]})}),g=(c(30),function(){var e=Object(n.useContext)(u),t=e.SetshowCard,c=e.showCard,s=e.cardItem,i=e.edtiCard,r=s.reduce((function(e,t){return e+t.price*t.count}),0);return Object(a.jsxs)("ul",{style:{padding:10},className:"collection with-header backed",children:[Object(a.jsx)("li",{className:"collection-item active blue darken-3",children:Object(a.jsx)("h6",{children:"\u041a\u043e\u0440\u0437\u0438\u043d\u0430"})}),s.length>0?s.map((function(e,t){return Object(a.jsxs)("li",{style:{paddingLeft:10},className:"collection-item",children:[Object(a.jsxs)("span",{className:"edit-button",children:[Object(a.jsx)("button",{className:"btn blue darken-3",onClick:function(){return i(e,1)},children:Object(a.jsx)("i",{className:"material-icons",children:"add"})}),Object(a.jsx)("button",{style:{marginLeft:3},className:"btn blue darken-3",onClick:function(){return i(e,-1)},children:Object(a.jsx)("i",{className:"material-icons",children:"remove"})}),Object(a.jsx)("button",{style:{marginLeft:3},className:"btn blue darken-3",onClick:function(){return i(e,-999)},children:Object(a.jsx)("i",{className:"material-icons",children:"clear"})})]}),Object(a.jsxs)("div",{style:{display:"flex"},children:[Object(a.jsxs)("p",{style:{margin:"25px 0px"},children:["\u2116",t+1]}),Object(a.jsx)("img",{style:{width:70,height:70,color:"white"},src:e.image,alt:"\u041a\u043e\u0440\u0437\u0438\u043d\u0430"}),Object(a.jsxs)("div",{children:[Object(a.jsxs)("p",{style:{margin:"8px 0px"},children:["\u0422\u043e\u0432\u0430\u0440: ",e.name]}),Object(a.jsxs)("p",{style:{position:"absolute",right:"3rem"},children:["\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e: ",e.count]}),Object(a.jsxs)("p",{children:["\u0426\u0435\u043d\u0430: ",e.price," \u0440\u0443\u0431."]})]})]})]},t)})):Object(a.jsx)("div",{style:{margin:0},className:"row",children:Object(a.jsx)("div",{style:{margin:0,padding:0,width:"100%"},className:"col s12 m6",children:Object(a.jsx)("div",{className:"card blue-grey darken-1",children:Object(a.jsxs)("div",{className:"card-content white-text",children:[Object(a.jsx)("span",{className:"card-title",children:"\u0412\u0430\u0448\u0430 \u043a\u043e\u0440\u0437\u0438\u043d\u0430 \u043f\u0443\u0441\u0442\u0430 :("}),Object(a.jsxs)("div",{style:{display:"flex"},children:[Object(a.jsx)("img",{style:{width:130,height:130,color:"white"},src:"https://pngimg.com/uploads/shopping_cart/shopping_cart_PNG40.png",alt:"\u041a\u043e\u0440\u0437\u0438\u043d\u0430"}),Object(a.jsxs)("div",{children:[Object(a.jsx)("p",{style:{padding:15},children:"\u0412\u0430\u0448\u0430 \u043a\u043e\u0440\u0437\u0438\u043d\u0430 \u043f\u0443\u0441\u0442\u0430, \u043d\u043e \u0432\u044b \u0435\u0435 \u043c\u043e\u0436\u0435\u0442\u0435 \u043b\u0435\u0433\u043a\u043e \u043f\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u044c \u043f\u043e\u043b\u043e\u0436\u0438\u0432 \u0442\u0443\u0434\u0430 \u043b\u044e\u0431\u043e\u0439 \u0442\u043e\u0432\u0430\u0440, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0412\u0430\u043c \u043f\u043e\u043d\u0440\u0430\u0432\u0438\u0442\u0441\u044f! \u041f\u0440\u0438\u044f\u0442\u043d\u044b\u0445 \u043f\u043e\u043a\u0443\u043f\u043e\u043a!"}),Object(a.jsx)("button",{onClick:function(){return t(!c)},className:"btn orange darken-3",style:{margin:"0px 15px"},children:"\u041d\u0430\u0447\u0430\u0442\u044c \u043f\u043e\u043a\u0443\u043f\u043a\u0438"})]})]})]})})})}),Object(a.jsx)("i",{onClick:function(){return t(!c)},className:"material-icons close-backed white-text",children:"close"}),Object(a.jsx)("li",{className:"collection-item active blue darken-3",children:Object(a.jsx)("p",{style:{margin:"10px 0px"},children:s.length>0?"\u041e\u0431\u0449\u0430\u044f \u0441\u0442\u043e\u0439\u043c\u043e\u0441\u0442\u044c:"+r+" \u0440\u0443\u0431.":"\u0416\u0435\u043b\u0430\u0435\u043c \u0432\u0430\u043c \u043f\u0440\u0438\u0442\u043d\u044b\u0445 \u043f\u043e\u043a\u0443\u043f\u043e\u043a!"})})]})}),v=(c(31),function(){var e=Object(n.useContext)(u),t=e.showAlert,c=e.SetshowAlert;return Object(n.useEffect)((function(){var e=setInterval((function(){c("")}),900);return function(){return clearInterval(e)}}),[t]),Object(a.jsx)("div",{id:"toast-container",children:Object(a.jsxs)("div",{className:"toast alert-block",style:{borderRadius:5},children:[Object(a.jsx)("i",{className:"material-icons alert-info",children:"info_outline"}),t,"\u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d \u0432 \u043a\u043e\u0440\u0437\u0438\u043d\u0443"]})})}),N=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),c=t[0],s=t[1],i=Object(n.useState)(!0),r=Object(o.a)(i,2),l=r[0],j=r[1],d=Object(n.useContext)(u),b=d.cardItem,h=d.showCard,x=d.showAlert;return Object(n.useEffect)((function(){fetch("https://fortniteapi.io/v1/shop?lang=ru",{headers:{Authorization:"9b25e26a-d1cad31b-87459407-e2d140bc"}}).then((function(e){return e.json()})).then((function(e){e.featured&&s(e.featured),j(!1)}))}),[]),Object(a.jsxs)("div",{style:{padding:"1rem"},children:[Object(a.jsx)(p,{cardItem:b}),l?Object(a.jsx)(f,{}):Object(a.jsx)(m,{items:c}),h?Object(a.jsx)(g,{}):null,x?Object(a.jsx)(v,{}):null]})};var y=function(){return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)(j.a,{children:[Object(a.jsx)(d,{}),Object(a.jsx)(N,{}),Object(a.jsx)(l,{})]})})};r.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(x,{children:Object(a.jsx)(y,{})})}),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.70bb9def.chunk.js.map