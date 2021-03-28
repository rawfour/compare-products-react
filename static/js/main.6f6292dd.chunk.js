(this["webpackJsonpreact-compare-products"]=this["webpackJsonpreact-compare-products"]||[]).push([[0],{37:function(e,c,a){},42:function(e,c,a){"use strict";a.r(c);var r=a(1),t=a.n(r),o=a(18),n=a.n(o),s=(a(31),a(24)),i=a(25),m=a(5),p=a(11),d=a.n(p);a(32);d.a.initializeApp({apiKey:"AIzaSyBBmE1GxqFMEn0uDEMye9-uBdwE4t31X4g",authDomain:"react-compare-products.firebaseapp.com",databaseURL:"https://react-compare-products.firebaseio.com",projectId:"react-compare-products",storageBucket:"react-compare-products.appspot.com",messagingSenderId:"388380689401",appId:"1:388380689401:web:d27939ab4b47381fa03328",measurementId:"G-E0SR2DCMZB"});var l=d.a.firestore(),u=a(0),j=t.a.createContext(),b=function(e){var c=e.children,a=Object(r.useState)([]),t=Object(m.a)(a,2),o=t[0],n=t[1],p=l.collection("products"),d=function(e){return Object(i.a)({id:e.id},e.data())};Object(r.useEffect)((function(){var e=p.onSnapshot((function(e){var c=e.docs.map(d);n(c)}));return function(){return e}}),[]);var b=Object(r.useState)([]),_=Object(m.a)(b,2),h=_[0],O=_[1],x={toCompare:h,addToCompare:function(e){h.length<4&&O([].concat(Object(s.a)(h),[e]))},removeFromCompare:function(e){var c=h.filter((function(c){return c.id!==e}));O(c)},data:o};return Object(u.jsx)(j.Provider,{value:x,children:c})},_=(a(37),a(54)),h=function(e){var c=e.product,a=Object(r.useState)(!1),t=Object(m.a)(a,2),o=t[0],n=t[1],s=c.id,i=c.name,p=c.img,d=c.description,l=c.price,b=function(){n(!0)};return Object(u.jsx)(j.Consumer,{children:function(e){var a=e.toCompare,r=e.addToCompare,t=e.removeFromCompare,n=a.filter((function(e){return e.id===s})),m=0!==n.length?"product__thumb--compare-remove":"",j=o?"":"product--loading",h=Object(u.jsx)("button",{"data-testid":"remove-btn",onClick:function(){return t(s)},className:"product__compare-btn product__compare-btn--remove",type:"button",children:"Usu\u0144"}),O=Object(u.jsx)("button",{"data-testid":"compare-btn",onClick:function(){return r(c)},className:"product__compare-btn",type:"button",children:"Pr\xf3wnaj"});return Object(u.jsx)("div",{"data-testid":"product",className:"col-sm-6 col-lg-4 col-xl-3",children:Object(u.jsxs)("div",{className:"product ".concat(j),children:[Object(u.jsxs)("div",{className:"product__thumb ".concat(m," ").concat(j),children:[Object(u.jsx)("img",{src:p,alt:i,onLoad:b,className:"product__img"}),o?Object(u.jsx)(u.Fragment,{children:0!==n.length?h:O}):Object(u.jsx)(_.a,{})]}),Object(u.jsxs)("div",{className:"product__text",children:[Object(u.jsx)("h3",{className:"product__title",children:i}),Object(u.jsx)("p",{className:"product__short-description",children:d}),Object(u.jsxs)("span",{className:"product__price",children:[l," z\u0142"]})]})]})})}})},O=function(){return Object(u.jsx)(j.Consumer,{children:function(e){var c=e.data.map((function(e){return Object(u.jsx)(h,{product:e},e.id)}));return Object(u.jsx)("div",{"data-testid":"productsList",className:"products row mt-5 mb-5",children:c})}})},x=function(e){var c=e.product,a=c.name,r=c.img,t=c.price,o=c.colors,n=c.fresh,s=o.map((function(e){return Object(u.jsx)("div",{className:"compare__single-color",style:{backgroundColor:e}},e)})),i=n?"compare__param compare__param-condition compare__param-condition--fresh":"compare__param compare__param-condition compare__param-condition--frozen",m=n?"\u015awierze":"Mro\u017cone";return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("ul",{className:"compare__row",children:[Object(u.jsxs)("li",{className:"compare__param compare__param--name",children:[Object(u.jsx)("img",{src:r,alt:"",className:"compare__img"}),Object(u.jsx)("span",{className:"compare__text",children:a})]}),Object(u.jsxs)("li",{className:"compare__param compare__param--price",children:[t," z\u0142"]}),Object(u.jsx)("li",{className:"compare__param compare__param--color",children:s}),Object(u.jsx)("li",{className:i,children:m})]})})},f=function(){return Object(u.jsx)(j.Consumer,{children:function(e){var c=e.toCompare;if(c.length>=2){var a=c.map((function(e){return Object(u.jsx)(x,{product:e},e.id)}));return Object(u.jsxs)("div",{className:"compare","data-testid":"compare",style:{transform:"translate(-50%, calc(100% - ".concat(74*(c.length+1),"px)")},children:[Object(u.jsxs)("ul",{className:"compare__row",children:[Object(u.jsx)("li",{className:"compare__param compare__param--head",children:"Produkt"}),Object(u.jsx)("li",{className:"compare__param compare__param--head",children:"Cena"}),Object(u.jsx)("li",{className:"compare__param compare__param--head",children:"Kolory"}),Object(u.jsx)("li",{className:"compare__param compare__param--head",children:"Stan"})]}),a]})}return null}})},v=function(){return Object(u.jsx)(b,{children:Object(u.jsxs)("div",{className:"product-list-page container mt-5",children:[Object(u.jsx)("h1",{children:"React comapre products"}),Object(u.jsx)(O,{}),Object(u.jsx)(f,{})]})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n.a.render(Object(u.jsx)(v,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[42,1,2]]]);
//# sourceMappingURL=main.6f6292dd.chunk.js.map