"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[6131],{2543:function(t,e,n){n.d(e,{Z:function(){return l}});n(2791);var a=n.p+"static/media/Excel.3a5a1731280185e0e4ae99ee0a4eebfc.svg",i=n(3168),r=n(184);var l=function(t){var e=t.onClick,n=(0,i.$)(["common"]).t;return(0,r.jsxs)("button",{className:"exportButton",onClick:e,children:[n("Eksport"),(0,r.jsx)("span",{className:"btn-icon bg-white-900 p-[8px]",children:(0,r.jsx)("img",{src:a,alt:"excel icon"})})]})}},5668:function(t,e,n){var a=(0,n(1608).ZP)("http://45.81.227.123/"),i=JSON.parse(localStorage.getItem("userData"));a.auth={token:i.token,market:i.market},e.Z=a},2432:function(t,e,n){n.r(e);var a=n(3433),i=n(1413),r=n(9439),l=n(2791),o=n(2543),u=n(5077),s=n(9078),c=n(2987),d=n(9434),f=n(4232),g=n(1295),v=n(6408),m=n(3160),S=n(6096),p=n(2230),h=n(3168),Z=n(763),D=n(7584),P=n(2106),y=n(5668),k=n(9732),I=n(184);e.default=function(t){var e=t.id,n=(0,h.$)(["common"]).t,x=[{title:"\u2116"},{title:n("Sana"),filter:"createdAt"},{title:n("ID"),filter:"id"},{title:n("Mijoz")},{title:n("Jami")},{title:n("Qarz")},{title:n("Qarz USD")},{title:n("Izoh")},{title:"",styles:"w-[7rem]"}],C=(0,d.I0)(),j=(0,d.v9)((function(t){return t.currency})).currencyType,b=(0,d.v9)((function(t){return t.login})),w=b.user,O=b.market,E=(0,d.v9)((function(t){return t.sellings})),z=E.sellings,N=E.searchedSellings,B=E.getSellingsLoading,U=E.total,_=E.totalSearched,J=(0,l.useState)(""),L=(0,r.Z)(J,2),M=L[0],Q=L[1],V=(0,l.useState)(z),q=(0,r.Z)(V,2),F=q[0],T=q[1],W=(0,l.useState)(z),$=(0,r.Z)(W,2),A=$[0],R=$[1],X=(0,l.useState)(U),Y=(0,r.Z)(X,2),G=Y[0],H=Y[1],K=(0,l.useState)(N),tt=(0,r.Z)(K,2),et=tt[0],nt=tt[1],at=(0,l.useState)("10"),it=(0,r.Z)(at,2),rt=it[0],lt=it[1],ot=(0,l.useState)(0),ut=(0,r.Z)(ot,2),st=ut[0],ct=ut[1],dt=(0,l.useState)({id:"",client:"",product:""}),ft=(0,r.Z)(dt,2),gt=ft[0],vt=ft[1],mt=(0,l.useState)({filter:"",sort:"",count:0}),St=(0,r.Z)(mt,2),pt=St[0],ht=St[1],Zt=(0,l.useState)(new Date((new Date).getFullYear(),(new Date).getMonth(),(new Date).getDate())),Dt=(0,r.Z)(Zt,2),Pt=Dt[0],yt=Dt[1],kt=(0,l.useState)(new Date),It=(0,r.Z)(kt,2),xt=It[0],Ct=It[1],jt=(0,l.useState)(null),bt=(0,r.Z)(jt,2),wt=bt[0],Ot=bt[1],Et=(0,l.useState)(!1),zt=(0,r.Z)(Et,2),Nt=zt[0],Bt=zt[1],Ut=(0,l.useState)(null),_t=(0,r.Z)(Ut,2),Jt=_t[0],Lt=_t[1],Mt=(0,l.useState)([]),Qt=(0,r.Z)(Mt,2),Vt=Qt[0],qt=Qt[1],Ft=(0,l.useState)(""),Tt=(0,r.Z)(Ft,2),Wt=Tt[0],$t=Tt[1],At=function(t){if("Enter"===t.key){ct(0);var n={filialId:e,currentPage:st,countPage:rt,startDate:Pt.toISOString(),endDate:xt.toISOString(),search:gt};C((0,m.Vi)(n))}},Rt=(0,l.useState)(""),Xt=(0,r.Z)(Rt,2),Yt=Xt[0],Gt=Xt[1],Ht=(0,l.useState)(null),Kt=(0,r.Z)(Ht,2),te=Kt[0],ee=Kt[1];(0,l.useEffect)((function(){T(z),R(z)}),[z]),(0,l.useEffect)((function(){nt(N)}),[N]),(0,l.useEffect)((function(){H(U)}),[U]),(0,l.useEffect)((function(){var t={filialId:e,currentPage:st,countPage:rt,startDate:Pt.toISOString(),endDate:xt.toISOString(),search:{id:"",client:""}};C((0,m.gq)(t))}),[st,rt,Pt,xt,C,e]),(0,l.useEffect)((function(){var t={startDate:Pt,endDate:xt,search:gt};C((0,m.W2)(t))}),[C,Pt,xt,gt]);(0,l.useEffect)((function(){var t=[],e=[{label:"Xammasi",value:""}];O&&y.Z.emit("getProductsOfCount",{market:O._id}),O&&y.Z.on("getProductsOfCount",(function(n){var i=n.id,r=n.products;i===O._id&&(e=[].concat((0,a.Z)(e),(0,a.Z)((0,Z.map)(r,(function(t){return{value:t._id,label:t.productdata.name}})))),qt(e),t.push.apply(t,(0,a.Z)(r)),C((0,k.r5)(t)))})),O&&y.Z.on("error",(function(t){var e=t.id,n=t.message;e===O._id&&(0,P.Ug)(n,"error")}))}),[O,C]);return(0,I.jsxs)(v.E.section,{initial:"collapsed",animate:"open",exit:"collapsed",variants:{open:{opacity:1,height:"auto"},collapsed:{opacity:0,height:0}},transition:{duration:.8,ease:[.04,.62,.23,.98]},children:[(0,I.jsx)(p.Z,{printedSelling:wt,currency:j,body:M,isOpen:Nt,toggleModal:function(){Bt(!Nt),Ot(null);var t={filialId:e,currentPage:st,countPage:rt,startDate:Pt.toISOString(),endDate:xt.toISOString(),search:{id:"",client:"",product:null===Wt||void 0===Wt?void 0:Wt.label}};C((0,m.gq)(t))},approveFunction:function(t){C((0,m.ZF)((0,i.Z)((0,i.Z)({},t),{},{saleconnectorid:Jt}))).then((function(){var t={filialId:e,currentPage:st,countPage:rt,startDate:Pt.toISOString(),endDate:xt.toISOString(),search:{id:"",client:""}};C((0,m.gq)(t))})),Bt(!1)},commentText:Yt,dailyid:te}),(0,I.jsxs)("div",{className:"pagination mainPadding",children:[(0,I.jsx)(o.Z,{onClick:function(){var t="Sotuvlar"-(new Date).toLocaleDateString(),e=["\u2116",n("ID"),n("Mijoz"),n("Jami UZS"),n("Jami USD"),n("Chegirma UZS"),n("Chegirma USD"),n("Qarz UZS"),n("Qarz USD")];if((null===F||void 0===F?void 0:F.length)>0){var a=(0,Z.map)(F,(function(t,e){var n,a,i,r,l,o;return{nth:e+1,id:(null===t||void 0===t?void 0:t.id)||"",client:(null===t||void 0===t||null===(n=t.client)||void 0===n?void 0:n.name)||(null===t||void 0===t||null===(a=t.packman)||void 0===a?void 0:a.name),alluzs:(null===t||void 0===t||null===(i=t.products[0])||void 0===i?void 0:i.totalpriceuzs)||"",allusd:(null===t||void 0===t||null===(r=t.products[0])||void 0===r?void 0:r.totalprice)||"",discount:t.discounts.length>0?t.discounts.map((function(t){return t})):0,discountusd:t.discounts.length>0?t.discounts.map((function(t){return t})):0,debd:(null===t||void 0===t||null===(l=t.products[0])||void 0===l?void 0:l.totalpriceuzs)-(null===t||void 0===t||null===(o=t.payments[0])||void 0===o?void 0:o.paymentuzs)-(null===t||void 0===t?void 0:t.discounts.length)>0?t.discounts.map((function(t){return t.discount})):0,debdusd:t.products[0].totalprice-t.payments[0].payment-t.discounts.length>0?t.discounts.map((function(t){return t.discount})):0}}));(0,D.rD)(a,t,e)}else(0,P.Ug)("Jadvalda ma'lumot mavjud emas !","warning")}}),(0,I.jsx)("p",{className:"flex items-center",children:n("Sotuvlar")}),(0!==G||0!==_)&&(0,I.jsx)(u.Z,{countPage:Number(rt),totalDatas:_||G,currentPage:st,setCurrentPage:ct})]}),(0,I.jsx)(c.Z,{filterBy:["total","startDate","endDate","id","clientName","product_name"],filterByTotal:function(t){var e=t.value;lt(e),ct(0)},startDate:Pt,setStartDate:yt,endDate:xt,setEndDate:Ct,searchById:gt.id,searchByClientName:gt.client,filterByClientName:function(t){var e=t.target.value,n=e.toLowerCase().replace(/\s+/g," ").trim();if(vt((0,i.Z)((0,i.Z)({},gt),{},{client:e})),(et.length>0||_>0)&&C((0,m.Vt)()),""===n)T(z),H(U);else{var a=(0,Z.filter)(z,(function(t){var e,a;return(null===t||void 0===t||null===(e=t.client)||void 0===e?void 0:e.name.toLowerCase().includes(n))||(null===t||void 0===t||null===(a=t.packman)||void 0===a?void 0:a.name.toLowerCase().includes(n))}));T(a),H(a.length)}},filterById:function(t){var e=t.target.value,n=e.replace(/\s+/g," ").trim();if(S.y.test(e)&&vt((0,i.Z)((0,i.Z)({},gt),{},{id:e})),(et.length>0||_>0)&&C((0,m.Vt)()),""===n)T(z),H(U);else{var a=(0,Z.filter)(z,(function(t){return t.id.includes(n)}));T(a),H(a.length)}},filterByClientNameWhenPressEnter:At,filterByIdWhenPressEnter:At,filteredProducts:Vt,handleChangeSelectedProduct:function(t){$t(t);var n={filialId:e,currentPage:st,countPage:rt,startDate:Pt.toISOString(),endDate:xt.toISOString(),search:{id:"",client:"",product:t.label}};C((0,m.Vi)(n))},selectedProduct:Wt}),(0,I.jsx)("div",{className:"tableContainerPadding",children:B?(0,I.jsx)(f.Z,{}):0===F.length&&0===et.length?(0,I.jsx)(g.Z,{text:"Ro'yxat mavjud emas..."}):(0,I.jsx)(s.Z,{data:et.length>0?et:F,currentPage:st,currency:j,countPage:rt,page:"saleslist",headers:x,Print:function(t){Q("allChecks"),Ot(t),Bt(!0)},addPlus:function(t){Q("addPlus"),Bt(!0),Lt(t)},Sort:function(t){if(t===pt.filter)switch(pt.count){case 1:ht({filter:t,sort:"1",count:2}),(0,D.ki)(F,T,t,1,A);break;case 2:ht({filter:t,sort:"",count:0}),(0,D.ki)(F,T,t,"",A);break;default:ht({filter:t,sort:"-1",count:1}),(0,D.ki)(F,T,t,-1,A)}else ht({filter:t,sort:"-1",count:1}),(0,D.ki)(F,T,t,-1,A)},sortItem:pt,sellers:"Seller"===(null===w||void 0===w?void 0:w.type),editComment:function(t,e){Gt(e),ee(t._id),Q("changeComment"),Bt(!0)}})})]},"content")}}}]);
//# sourceMappingURL=6131.ba0097e8.chunk.js.map