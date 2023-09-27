"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[1530],{602:function(e,t,r){var n=r(71),i=r(184);t.Z=function(e){var t=e.id,r=e.title,o=e.code,a=e.products,c=e.activeCategory,l=e.onClick;return(0,i.jsxs)("div",{className:"category-card ".concat(c?"active-category":""),onClick:function(){return l(t)},children:[(0,i.jsx)("h1",{className:"text-black-700 text-base leading-[1.5625rem]",children:r||"Nomsiz kategoriya"}),(0,i.jsxs)("div",{className:"flex justify-between",children:[(0,i.jsxs)("div",{className:"flex gap-[0.3125rem] items-center",children:[(0,i.jsx)("p",{className:"footer-text",children:"Kodi :"}),(0,i.jsx)("span",{className:"block rounded-[3.125rem] bg-warning-500 py-[0.125rem] px-[0.625rem] text-xs leading-[0.875rem] text-white-900",children:o||0})]}),(0,i.jsxs)("div",{className:"flex gap-[0.3125rem] items-center",children:[(0,i.jsx)("p",{className:"footer-text",children:"Maxsulot turlari :"}),(0,i.jsx)("span",{className:"block rounded-[3.125rem] bg-success-400 py-[0.125rem] px-[0.625rem] text-xs leading-[0.875rem] text-white-900",children:a||0})]})]}),(0,i.jsx)("div",{className:"category-card-checkmark",children:(0,i.jsx)(n.jI1,{size:"1rem",className:"check-icon"})})]})}},5668:function(e,t,r){var n=(0,r(1608).ZP)("http://45.81.227.123/"),i=JSON.parse(localStorage.getItem("userData"));n.auth={token:i.token,market:i.market},t.Z=n},4282:function(e,t,r){r.r(t),r.d(t,{default:function(){return L}});var n,i=r(1413),o=r(3433),a=r(9439),c=r(2791),l=r(8063),d=r(9078),u=r(9434),s=r(2594),p=r(4232),v=r(763),m=r(602),g=r(1295),f=r(71),h=r(3168),x=r(5668),Z=r(2106),b=r(334),y=r(7584),j=r(2230),N=r(7689),k=r(4942),w=r(4165),_=r(5861),z=r(9829),S=r(7472),C=(0,z.hg)("savedOrders/createTemporary",(0,_.Z)((0,w.Z)().mark((function e(){var t,r,n,i,o=arguments;return(0,w.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=o.length>0&&void 0!==o[0]?o[0]:{},r=(o.length>1?o[1]:void 0).rejectWithValue,e.prev=2,e.next=5,S.Z.post("/connections/createtemporary",t);case 5:return n=e.sent,i=n.data,e.abrupt("return",i);case 10:return e.prev=10,e.t0=e.catch(2),e.abrupt("return",r(e.t0));case 13:case"end":return e.stop()}}),e,null,[[2,10]])})))),P=(0,z.hg)("savedOrders/deleteSavedOrders",(0,_.Z)((0,w.Z)().mark((function e(){var t,r,n,i,o=arguments;return(0,w.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=o.length>0&&void 0!==o[0]?o[0]:{},r=(o.length>1?o[1]:void 0).rejectWithValue,e.prev=2,e.next=5,S.Z.post("/connections/deletetemporary",t);case 5:return n=e.sent,i=n.data,e.abrupt("return",i);case 10:return e.prev=10,e.t0=e.catch(2),e.abrupt("return",r(e.t0));case 13:case"end":return e.stop()}}),e,null,[[2,10]])})))),U=(0,z.hg)("savedOrders/getSavedOrders",(0,_.Z)((0,w.Z)().mark((function e(){var t,r,n,i,o=arguments;return(0,w.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=o.length>0&&void 0!==o[0]?o[0]:{},r=(o.length>1?o[1]:void 0).rejectWithValue,e.prev=2,e.next=5,S.Z.post("/connections/gettemporaries",t);case 5:return n=e.sent,i=n.data,e.abrupt("return",i);case 10:return e.prev=10,e.t0=e.catch(2),e.abrupt("return",r(e.t0));case 13:case"end":return e.stop()}}),e,null,[[2,10]])})))),O=((0,z.oM)({name:"savedOrders",initialState:{savedOrders:[],getLoading:!0,deleteLoading:!1,deleteError:null,getError:null},extraReducers:(n={},(0,k.Z)(n,C.pending,(function(e){e.getLoading=!0})),(0,k.Z)(n,C.fulfilled,(function(e,t){var r=t.payload;(0,Z.Ug)(r.message,"success"),e.getLoading=!1})),(0,k.Z)(n,C.rejected,(function(e,t){var r=t.payload;(0,Z.Ug)(r.message,"error"),e.getLoading=!1})),(0,k.Z)(n,U.pending,(function(e){e.getLoading=!0})),(0,k.Z)(n,U.fulfilled,(function(e,t){var r=t.payload;e.getLoading=!1,e.savedOrders=r})),(0,k.Z)(n,U.rejected,(function(e,t){var r=t.payload;(0,Z.Ug)(r.message,"error"),e.getLoading=!1})),(0,k.Z)(n,P.pending,(function(e){e.deleteLoading=!0})),(0,k.Z)(n,P.fulfilled,(function(e,t){var r=t.payload;e.deleteLoading=!1,(0,Z.Ug)(r.message,"success")})),(0,k.Z)(n,P.rejected,(function(e,t){var r=t.payload;(0,Z.Ug)(r,"error"),e.deleteLoading=!1,e.deleteError=r,e.deleteError=null})),n)}).reducer,r(184));var L=function(){var e=(0,h.$)(["common"]).t,t=(0,u.I0)(),r=(0,N.TH)(),n=(0,N.s0)(),k=(0,u.v9)((function(e){return e.currency})),w=k.currencyType,_=k.currency,z=(0,u.v9)((function(e){return e.connections})).loading,S=(0,u.v9)((function(e){return e.login})).market,U=(0,u.v9)((function(e){return e.registerIncomingOrders})),L=U.categoriesPartner,E=U.allProductsPartner,I=(0,c.useState)(null),M=(0,a.Z)(I,2),T=M[0],Y=M[1],B=(0,c.useState)(L),q=(0,a.Z)(B,2),D=q[0],K=q[1],V=(0,c.useState)([]),W=(0,a.Z)(V,2),A=W[0],J=W[1],F=(0,c.useState)(null),H=(0,a.Z)(F,2),Q=H[0],R=H[1],$=(0,c.useState)(""),G=(0,a.Z)($,2),X=G[0],ee=G[1],te=(0,c.useState)([]),re=(0,a.Z)(te,2),ne=re[0],ie=re[1],oe=(0,c.useState)(""),ae=(0,a.Z)(oe,2),ce=ae[0],le=ae[1],de=(0,c.useState)(!1),ue=(0,a.Z)(de,2),se=ue[0],pe=ue[1],ve=(0,c.useState)(null),me=(0,a.Z)(ve,2),ge=me[0],fe=me[1],he=(0,c.useState)(null),xe=(0,a.Z)(he,2),Ze=xe[0],be=xe[1],ye=(0,c.useState)(null),je=(0,a.Z)(ye,2),Ne=je[0],ke=je[1],we=(0,c.useState)(null),_e=(0,a.Z)(we,2),ze=_e[0],Se=_e[1],Ce=function(e){Q===e?R(null):(R(e),ee(""),K(L))},Pe=function(){ie([]),Y(null)};return(0,c.useEffect)((function(){var e=[],r=[];S&&T&&(x.Z.emit("getPartnerProducts",{market:T.value,partner:S._id}),x.Z.on("partnerCategories",(function(e){var r=e.id,n=e.categories;r===T.value&&(t((0,b.Aw)(n)),K(n))})),x.Z.on("setPartnerProducts",(function(n){var i=n.id,a=n.products;i===T.value&&(r=[].concat((0,o.Z)(r),(0,o.Z)((0,v.map)(a,(function(e){return{value:e._id,label:"(".concat(e.total,") ").concat(e.category.code).concat(e.productdata.code," - ").concat(e.productdata.name)}})))),J(r),e.push.apply(e,(0,o.Z)(a)),t((0,b.CB)(e)))})),x.Z.on("error",(function(e){var t=e.id,r=e.message;t===S._id&&(0,Z.Ug)(r,"error")})))}),[S,t,T]),(0,c.useEffect)((function(){if(Q){var e=(0,v.filter)(E,(function(e){return e.category._id===Q}));J((0,v.map)(e,(function(e){return{value:e._id,label:"(".concat(e.total,") ").concat(e.category.code).concat(e.productdata.code," - ").concat(e.productdata.name)}})))}else J((0,v.map)(E,(function(e){return{value:e._id,label:"(".concat(e.total,") ").concat(e.category.code).concat(e.productdata.code," - ").concat(e.productdata.name)}})))}),[Q,E]),(0,c.useEffect)((function(){var e=r.state;if(e&&e.order){var t,n,o,a,c,l;"send"===e.position&&Se("incomingOrderSendProduct"),ke(null===e||void 0===e?void 0:e.order),Y({label:(null===e||void 0===e||null===(t=e.order)||void 0===t||null===(n=t.market)||void 0===n?void 0:n.name)+" - "+(null===e||void 0===e||null===(o=e.order)||void 0===o||null===(a=o.market)||void 0===a?void 0:a.inn),value:null===e||void 0===e||null===(c=e.order)||void 0===c||null===(l=c.market)||void 0===l?void 0:l._id});var d=(0,v.map)(e.order.products,(function(e){var t,r,n,o,a,c,l,d,u,s,p,v,m,g,f,h,x,Z,b,y,j=!(null===e||void 0===e||null===(t=e.pieces)||void 0===t||!t.send);return{market:null===e||void 0===e?void 0:e.market,product:{_id:null===e||void 0===e||null===(r=e.product)||void 0===r?void 0:r._id,code:null===e||void 0===e||null===(n=e.product)||void 0===n||null===(o=n.productdata)||void 0===o?void 0:o.code,name:null===e||void 0===e||null===(a=e.product)||void 0===a||null===(c=a.productdata)||void 0===c?void 0:c.name,barcode:null===e||void 0===e||null===(l=e.product)||void 0===l||null===(d=l.productdata)||void 0===d?void 0:d.barcode},productdata:null===(u=e.product)||void 0===u?void 0:u.productdata._id,category:null===(s=e.product)||void 0===s?void 0:s.category._id,totalprice:j?null===e||void 0===e?void 0:e.totalprice:(null===e||void 0===e||null===(p=e.pieces)||void 0===p?void 0:p.recived)*(null===e||void 0===e?void 0:e.unitprice),totalpriceuzs:j?null===e||void 0===e?void 0:e.totalpriceuzs:(null===e||void 0===e||null===(v=e.pieces)||void 0===v?void 0:v.recived)*(null===e||void 0===e?void 0:e.unitpriceuzs),pieces:(0,i.Z)((0,i.Z)({},null===e||void 0===e?void 0:e.pieces),{},{send:j?null===e||void 0===e||null===(m=e.pieces)||void 0===m?void 0:m.send:null===e||void 0===e||null===(g=e.pieces)||void 0===g?void 0:g.recived}),total:null===(f=e.product)||void 0===f?void 0:f.total,unitprice:null===e||void 0===e?void 0:e.unitprice,unitpriceuzs:null===e||void 0===e?void 0:e.unitpriceuzs,incomingprice:null===e||void 0===e||null===(h=e.product)||void 0===h||null===(x=h.price)||void 0===x?void 0:x.incomingprice,incomingpriceuzs:null===e||void 0===e||null===(Z=e.product)||void 0===Z||null===(b=Z.price)||void 0===b?void 0:b.incomingpriceuzs,unit:null===e||void 0===e||null===(y=e.product)||void 0===y?void 0:y.unit}}));ie(d)}window.history.replaceState({},document.title)}),[r.state]),(0,O.jsxs)("section",{className:"flex grow relative overflow-auto",children:[(0,O.jsx)(j.Z,{body:ce,isOpen:se,headerText:"complete"===ce?"Buyurtmani yuborishni tasdiqlaysizmi?":"",toggleModal:function(){pe(!1),setTimeout((function(){le("")}),500)},approveFunction:function(){if(ne.length>0){var r={products:ne,orderId:null===Ne||void 0===Ne?void 0:Ne._id};t((0,b.db)(r)).then((function(e){var r=e.error,n=e.payload;r||(Ne&&ke(null),be(n),setTimeout((function(){le("checkOrder"),pe(!0),Pe()}),500),ge&&(t(P({temporaryId:ge._id})),fe(null)))}))}else(0,Z.Ug)(e("Maxsulotlar ro'yxati bo'sh!"),"warning")},order:Ze}),(0,O.jsxs)("div",{className:"flex flex-col grow gap-[1.25rem] overflow-auto",children:[(0,O.jsxs)("div",{className:"mainPadding flex flex gap-[1.25rem]",children:[(0,O.jsx)(l.Z,{select:!0,placeholder:"misol: Alo24",value:T||"",label:"Do`kon nomi",onChange:function(e){return Y(e)},border:!0,disabled:!0}),(0,O.jsx)(l.Z,{disabled:!T,select:!0,placeholder:"misol: kompyuter",value:"",label:"Maxsulotlar",onChange:function(t){if(t.barcode?(0,v.filter)(ne,(function(e){return e.product.barcode===t.barcode})).length>0:(0,v.filter)(ne,(function(e){return e.product._id===t.value})).length>0)(0,Z.Ug)(e("Maxsulot ro'yxatda mavjud !"),"error");else{var r=t.barcode?E.find((function(e){return e.productdata.barcode===t.barcode})):E.find((function(e){return e._id===t.value})),n={market:T.value,product:{_id:r._id,code:r.productdata.code,name:r.productdata.name,barcode:r.productdata.barcode},productdata:r.productdata._id,category:r.category._id,totalprice:r.price.sellingprice,totalpriceuzs:r.price.sellingpriceuzs,pieces:{revived:0,send:1,delivered:0,returned:0},total:r.total,unitprice:r.price.sellingprice,unitpriceuzs:r.price.sellingpriceuzs,incomingprice:r.price.incomingprice,incomingpriceuzs:r.price.incomingpriceuzs,unit:r.unit};ie([].concat((0,o.Z)(ne),[n]))}},options:A})]}),(0,O.jsx)("div",{className:"tableContainerPadding",children:ne.length?(0,O.jsx)(d.Z,{page:ze,data:ne,headers:[{title:"\u2116"},{title:"Kodi"},{title:"Nomi"},{title:"Soni"},{title:"Buyurtma"},{title:"Yuborish",styles:"w-[15%]"},{title:"Narxi"},{title:"Jami"},{styles:"w-[10%]"},{}],currency:w,increment:function(e){var t=(0,v.map)(ne,(function(t){return t.product._id===e?(0,i.Z)((0,i.Z)({},t),{},{pieces:(0,i.Z)((0,i.Z)({},t.pieces),{},{send:Number(t.pieces.send)+1}),totalprice:(0,y.Y2)((Number(t.pieces.send)+1)*t.unitprice),totalpriceuzs:(0,y.ei)((Number(t.pieces.send)+1)*t.unitpriceuzs)}):t}));ie(t)},decrement:function(e){var t=(0,v.map)(ne,(function(t){return t.product._id===e?(0,i.Z)((0,i.Z)({},t),{},{pieces:(0,i.Z)((0,i.Z)({},t.pieces),{},{send:Number(t.pieces.send)>0?Number(t.pieces.send)-1:0}),totalprice:(0,y.Y2)((Number(t.pieces.send)>0?Number(t.pieces.send)-1:0)*t.unitprice),totalpriceuzs:(0,y.ei)((Number(t.pieces.send)>0?Number(t.pieces.send)-1:0)*t.unitpriceuzs)}):t}));ie(t)},handleDelete:function(e){ne.splice(e,1),ie((0,o.Z)(ne))},footer:"registersale",handleCountProduct:function(e,t){var r=Number(e.target.value),n=(0,v.map)(ne,(function(e){return e.product._id===t?(0,i.Z)((0,i.Z)({},e),{},{pieces:(0,i.Z)((0,i.Z)({},e.pieces),{},{send:r}),totalprice:(0,y.Y2)(r*e.unitprice),totalpriceuzs:(0,y.ei)(r*e.unitpriceuzs)}):e}));ie(n)},handleUnitPrice:function(e,t){var r=Number(e.target.value),n="USD"===w?r:r/_,o="UZS"===w?r:r*_,a=(0,v.map)(ne,(function(e){return e.product._id===t?(0,i.Z)((0,i.Z)({},e),{},{unitprice:n,unitpriceuzs:o,totalprice:(0,y.Y2)(e.pieces.send*n),totalpriceuzs:(0,y.ei)(e.pieces.send*o)}):e}));ie(a)}}):(0,O.jsx)(g.Z,{text:e("Buyurtmaga mahsulotlar qo'shilmagan!")})})]}),(0,O.jsxs)("div",{className:"register-selling-right min-w-[20.25rem] bg-white-400 backdrop-blur-[3.125rem] rounded-[0.25rem] flex flex-col gap-[1.25rem]",children:[(0,O.jsxs)("div",{className:"flex flex-col grow gap-[1.25rem]",children:[(0,O.jsx)(s.Z,{placeholder:e("kategoriyani qidirish..."),value:X,onChange:function(e){var t=e.target.value;ee(t);var r=t.replace(/\s+/g," ").trim(),n=(0,v.filter)(L,(function(e){return e.name&&e.name.toLowerCase().includes(r)||e.code.includes(r)}));K(""!==t?n:L)},onKeyUp:function(){}}),(0,O.jsx)("div",{className:"grow relative overflow-auto",children:(0,O.jsx)("div",{className:"cards-container absolute left-0 right-[0.125rem] top-0 bottom-0",children:z?(0,O.jsx)("div",{className:"tableContainerPadding",children:(0,O.jsx)(p.Z,{})}):D.length>0?(0,v.map)(D,(function(e){return(0,O.jsx)(m.Z,{id:e._id,activeCategory:e._id===Q,title:e.name,code:e.code,products:e.products.length,onClick:Ce},e._id)})):(0,O.jsx)(g.Z,{text:e("Kategoriya mavjud emas")})})})]}),(0,O.jsxs)("div",{className:"flex gap-[0.625rem]",children:[(0,O.jsx)("button",{type:"button",className:"register-selling-right-accept-btn",onClick:function(){ne.length?(pe(!0),le("complete")):_?(0,Z._P)():(0,Z.YQ)()},children:e("Buyurtmani yuborish")}),(0,O.jsx)("button",{type:"button",onClick:function(){if(ne.length>0){var r=ne.reduce((function(e,t){return(0,y.Y2)(e+t.totalprice)}),0),i=ne.reduce((function(e,t){return(0,y.ei)(e+t.totalpriceuzs)}),0);t(C({temporary:{partner:T,tableProducts:ne,totalPrice:r,totalPriceUzs:i}})).then((function(e){e.error||(Pe(),n("/dukonlar/buyurtma_berish/saqlanganlar"))})),ge&&(t(P({temporaryId:ge._id})),fe(null))}else(0,Z.Ug)(e("Maxsulotlar ro'yxati bo'sh!"),"warning")},className:"register-selling-right-deny-btn",children:(0,O.jsx)(f.T24,{size:"1.5rem"})})]})]})]})}}}]);
//# sourceMappingURL=1530.1c5965fb.chunk.js.map