(this["webpackJsonpreact-compare-products"]=this["webpackJsonpreact-compare-products"]||[]).push([[0],{15:function(e,a,r){},16:function(e,a,r){},17:function(e,a,r){"use strict";r.r(a);var t=r(0),o=r.n(t),c=r(3),n=r.n(c),m=(r(14),r(15),r(1)),i=r(4),l=r(5),p=r(7),s=r(6),d=r(8),u=(r(16),function(e){var a=e.product,r=a.id,t=a.name,c=a.img,n=a.description,m=a.price,i=e.toCompare.filter((function(e){return e.id===r})),l=0!==i.length?"product__thumb product__thumb--compare-remove":"product__thumb",p=o.a.createElement("button",{onClick:function(){return e.remove(r)},className:"product__compare-btn product__compare-btn--remove"},"Usu\u0144"),s=o.a.createElement("button",{onClick:function(){return e.add(e.product)},className:"product__compare-btn"},"Pr\xf3wnaj");return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"col-sm-6 col-lg-4 col-xl-3"},o.a.createElement("div",{className:"product"},o.a.createElement("div",{className:l},o.a.createElement("img",{src:c,alt:t,className:"produc__img"}),0!==i.length?p:s),o.a.createElement("div",{className:"product__text"},o.a.createElement("h3",{className:"product__title"},t),o.a.createElement("p",{className:"product__short-description"},n),o.a.createElement("span",{className:"product__price"},m," z\u0142")))))}),_=function(e){var a=e.data.map((function(a){return o.a.createElement(u,{key:a.id,product:a,toCompare:e.toCompare,add:e.add,remove:e.remove})}));return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"products row mt-5 mb-5"},a))},g=function(e){var a=e.product,r=a.name,t=a.img,c=a.price,n=a.colors,m=a.fresh;n=n.map((function(e,a){return o.a.createElement("div",{key:a,className:"compare__single-color",style:{backgroundColor:e}})}));var i=m?"compare__param compare__param-condition compare__param-condition--fresh":"compare__param compare__param-condition compare__param-condition--frozen";return m=m?"\u015awierze":"Mro\u017cone",o.a.createElement(o.a.Fragment,null,o.a.createElement("ul",{className:"compare__row"},o.a.createElement("li",{className:"compare__param compare__param--name"},o.a.createElement("img",{src:t,alt:"",className:"compare__img"}),o.a.createElement("span",{className:"compare__text"},r)),o.a.createElement("li",{className:"compare__param compare__param--price"},c," z\u0142"),o.a.createElement("li",{className:"compare__param compare__param--color"},n),o.a.createElement("li",{className:i},m)))},h=function(e){var a=e.toCompare.map((function(e){return o.a.createElement(g,{key:e.id,product:e})}));return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"compare"},o.a.createElement("ul",{className:"compare__row"},o.a.createElement("li",{className:"compare__param compare__param--head"},"Produkt"),o.a.createElement("li",{className:"compare__param compare__param--head"},"Cena"),o.a.createElement("li",{className:"compare__param compare__param--head"},"Kolory"),o.a.createElement("li",{className:"compare__param compare__param--head"},"Stan")),a))},f=function(e){function a(){var e,r;Object(i.a)(this,a);for(var t=arguments.length,o=new Array(t),c=0;c<t;c++)o[c]=arguments[c];return(r=Object(p.a)(this,(e=Object(s.a)(a)).call.apply(e,[this].concat(o)))).data=[{id:1,name:"Maliny",img:"/img/image01.jpg",description:"Poprostu maliny",price:"2.49",colors:["orange","black"],fresh:!1},{id:2,name:"Kiwi",img:"/img/image02.jpg",description:"Zwyk\u0142e kiwi",price:"3.29",colors:["yellow","green","red"],fresh:!0},{id:3,name:"Cebula",img:"/img/image03.jpg",description:"Tylko cebula",price:"4.19",colors:["red","blue"],fresh:!1},{id:4,name:"Banany",img:"/img/image04.jpg",description:"Zwyczajne banany",price:"5.34",colors:["yellow","green","red"],fresh:!0},{id:5,name:"Bak\u0142a\u017cany",img:"/img/image05.jpg",description:"Poprostu bak\u0142a\u017cany",price:"6.39",colors:["red","black"],fresh:!1},{id:6,name:"Kokos",img:"/img/image06.jpg",description:"Zwyk\u0142e kokosy",price:"4.19",colors:["red","yellow","orange"],fresh:!0},{id:7,name:"Papryka",img:"/img/image07.jpg",description:"Tylko papryka",price:"2.24",colors:["green","blue"],fresh:!1},{id:8,name:"Ananas",img:"/img/image08.jpg",description:"Zwyczajny ananas",price:"3.55",colors:["green","orange"],fresh:!0},{id:9,name:"Ziemniaki",img:"/img/image09.jpg",description:"Zwyk\u0142e ziemniaki",price:"1.74",colors:["black","blue"],fresh:!1}],r.state={toCompare:[]},r.handleAddToCompare=function(e){if(4===r.state.toCompare.length)return null;var a=[].concat(Object(m.a)(r.state.toCompare),[e]);r.setState({toCompare:a})},r.handleRemoveFromCompare=function(e){var a=Object(m.a)(r.state.toCompare).filter((function(a){return a.id!==e}));r.setState({toCompare:a})},r}return Object(d.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"product-list-page container mt-5"},o.a.createElement("h1",null,"React comapre products"),o.a.createElement(_,{remove:this.handleRemoveFromCompare,add:this.handleAddToCompare,data:this.data,toCompare:this.state.toCompare}),this.state.toCompare.length>=2?o.a.createElement(h,{toCompare:this.state.toCompare}):null)}}]),a}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n.a.render(o.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},9:function(e,a,r){e.exports=r(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.083018ef.chunk.js.map