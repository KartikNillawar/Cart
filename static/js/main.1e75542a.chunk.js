(this.webpackJsonpshopping=this.webpackJsonpshopping||[]).push([[0],{12:function(t,e,c){},14:function(t,e,c){"use strict";c.r(e);var n=c(1),i=c.n(n),a=c(3),s=c.n(a),o=(c(12),c(4)),r=c(5),l=c(7),u=c(6),d=c(0),p={image:{height:110,width:110,borderRadius:4,background:"#ccc"}},h=function(t){var e=t.product,c=e.price,n=e.title,i=e.qty,a=t.product,s=t.onIncreaseQuantity,o=t.onDecreaseQuantity,r=t.onDeleteProduct;return Object(d.jsxs)("div",{className:"cart-item",children:[Object(d.jsx)("div",{className:"left-block",children:Object(d.jsx)("img",{style:p.image,src:a.img})}),Object(d.jsxs)("div",{className:"right-block",children:[Object(d.jsx)("div",{style:{fontSize:25},children:n}),Object(d.jsxs)("div",{style:{color:"#777"},children:["Rs ",c]}),Object(d.jsxs)("div",{style:{color:"#777"},children:["Qty: ",i]}),Object(d.jsxs)("div",{className:"cart-item-actions",children:[Object(d.jsx)("img",{alt:"increase",className:"action-icons",src:"https://image.flaticon.com/icons/png/512/992/992651.png",onClick:function(){return s(a)}}),Object(d.jsx)("img",{alt:"decrease",className:"action-icons",src:"https://image.flaticon.com/icons/png/512/992/992683.png",onClick:function(){return o(a)}}),Object(d.jsx)("img",{alt:"delete",className:"action-icons",src:"https://image.flaticon.com/icons/png/512/3096/3096673.png",onClick:function(){return r(a.id)}})]})]})]})},f=function(t){var e=t.products;return Object(d.jsx)("div",{className:"cart",children:e.map((function(e){return Object(d.jsx)(h,{product:e,onIncreaseQuantity:t.onIncreaseQuantity,onDecreaseQuantity:t.onDecreaseQuantity,onDeleteProduct:t.onDeleteProduct},e.id)}))})},j={cartIcon:{height:32,marginRight:20},nav:{height:70,background:"#4267b2",display:"flex",justifyContent:"flex-end",alignItems:"center"},cartIconContainer:{position:"relative"},cartCount:{background:"yellow",borderRadius:"50%",padding:"4px 8px",position:"absolute",right:0,top:-9}},b=function(t){return Object(d.jsx)("div",{style:j.nav,children:Object(d.jsxs)("div",{style:j.cartIconContainer,children:[Object(d.jsx)("img",{style:j.cartIcon,src:"https://image.flaticon.com/icons/svg/2121/2121815.svg",alt:"cart-icon"}),Object(d.jsx)("span",{style:j.cartCount,children:t.count})]})})},g=function(t){Object(l.a)(c,t);var e=Object(u.a)(c);function c(){var t;return Object(o.a)(this,c),(t=e.call(this)).handleIncreaseQuantity=function(e){console.log("hey please increase the sty of ",e);var c=t.state.products,n=c.indexOf(e);c[n].qty+=1,t.setState({products:c})},t.handleDecreaseQuantity=function(e){console.log("hey please increase the sty of ",e);var c=t.state.products,n=c.indexOf(e);0!==c[n].qty&&(c[n].qty-=1,t.setState({products:c}))},t.handleDeleteProduct=function(e){var c=t.state.products.filter((function(t){return t.id!==e}));t.setState({products:c})},t.getCartCount=function(){var e=t.state.products,c=0;return e.forEach((function(t){c+=t.qty})),c},t.getCartTotal=function(){var e=t.state.products,c=0;return e.forEach((function(t){c+=t.qty*t.price})),c},t.state={products:[{price:19999,title:"Mobile Phone",qty:1,img:"https://images.unsplash.com/photo-1567581935884-3349723552ca?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80",id:1},{price:9999,title:"watch",qty:1,img:"https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=334&q=80",id:2},{price:49999,title:"laptop",qty:1,img:"https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80",id:3}]},t}return Object(r.a)(c,[{key:"render",value:function(){var t=this.state.products;return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(b,{count:this.getCartCount()}),Object(d.jsx)(f,{products:t,onIncreaseQuantity:this.handleIncreaseQuantity,onDecreaseQuantity:this.handleDecreaseQuantity,onDeleteProduct:this.handleDeleteProduct}),Object(d.jsxs)("div",{style:{padding:10,fontSize:20},children:["Total : ",this.getCartTotal()]})]})}}]),c}(i.a.Component);s.a.render(Object(d.jsx)(i.a.StrictMode,{children:Object(d.jsx)(g,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.1e75542a.chunk.js.map