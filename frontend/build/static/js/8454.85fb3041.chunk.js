"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[8454],{1432:function(e,t,n){n.r(t);var r=n(1413),a=n(3433),i=n(9439),o=n(2791),s=n(9078),l=n(5077),c=n(2987),u=n(6408),g=n(2784),f=n(7584),d=n(9434),h=n(2106),y=n(4232),v=n(1295),m=n(2230),p=n(7689),Z=n(3168),x=n(763),k=n(184);t.default=function(){var e=(0,Z.$)(["common"]).t,t=[{styles:"w-[10%]",filter:"",title:"\u2116"},{styles:"w-[10%]",filter:"category.code",title:e("Kategoriyasi")},{styles:"w-[10%]",filter:"productdata.code",title:e("Kodi")},{styles:"w-[20%]",filter:"productdata.name",title:e("Nomi")},{styles:"w-[10%] text-center",title:e("Dastlabki")},{styles:"w-[10%] text-center",filter:"",title:e("Sanoq")},{styles:"w-[10%] text-center",filter:"",title:e("Farq")},{styles:"",filter:"",title:e("Izoh")},{styles:"",filter:"",title:" "}],n=(0,d.I0)(),S=(0,d.v9)((function(e){return e.inventories})),C=S.inventories,P=S.total,I=S.searchedInventories,j=S.totalSearched,w=S.errorInventories,B=S.loading,E=S.successUpdateInventory,b=S.successComplateInventory,z=(0,p.s0)(),N=(0,o.useState)(C),q=(0,i.Z)(N,2),K=q[0],U=q[1],D=(0,o.useState)(I),M=(0,i.Z)(D,2),T=M[0],A=M[1],F=(0,o.useState)(""),H=(0,i.Z)(F,2),L=H[0],$=H[1],G=(0,o.useState)(P),O=(0,i.Z)(G,2),W=O[0],J=O[1],Q=(0,o.useState)("10"),R=(0,i.Z)(Q,2),V=R[0],X=R[1],Y=(0,o.useState)(0),_=(0,i.Z)(Y,2),ee=_[0],te=_[1],ne=(0,o.useState)(""),re=(0,i.Z)(ne,2),ae=re[0],ie=re[1],oe=(0,o.useState)(""),se=(0,i.Z)(oe,2),le=se[0],ce=se[1],ue=(0,o.useState)(!1),ge=(0,i.Z)(ue,2),fe=ge[0],de=ge[1],he=(0,o.useState)({filter:"",sort:"",count:0}),ye=(0,i.Z)(he,2),ve=ye[0],me=ye[1],pe=function(){return de(!fe)},Ze=function(e){var t={inventory:T.length?(0,r.Z)({},T[e].inventory):(0,r.Z)({},K[e].inventory),currentPage:0,countPage:V,search:{name:le.replace(/\s+/g," ").trim(),code:ae.replace(/\s+/g," ").trim(),category:L.replace(/\s+/g," ").trim()}};n((0,g.e9)(t))};return(0,o.useEffect)((function(){w&&((0,h.Ug)(w,"error"),n((0,g.h8)())),E&&((0,h.fU)(),n((0,g.sB)())),b&&((0,h.KG)(),n((0,g.$E)()),z("/maxsulotlar/inventarizatsiya/inventarizatsiyalar"))}),[w,n,E,b,z]),(0,o.useEffect)((function(){var e={currentPage:ee,countPage:V,search:{name:le.replace(/\s+/g," ").trim(),code:ae.replace(/\s+/g," ").trim(),category:L.replace(/\s+/g," ").trim()}};n((0,g.Ze)(e))}),[ee,V,n]),(0,o.useEffect)((function(){U(C)}),[C]),(0,o.useEffect)((function(){J(P)}),[P]),(0,o.useEffect)((function(){A(I)}),[I]),(0,k.jsxs)(u.E.section,{initial:"collapsed",animate:"open",exit:"collapsed",variants:{open:{opacity:1,height:"auto"},collapsed:{opacity:0,height:0}},transition:{duration:.8,ease:[.04,.62,.23,.98]},children:[(0,k.jsx)(m.Z,{body:"complete",toggleModal:pe,closeModal:pe,isOpen:fe,headerText:e("Diqqat! Inventarizatsiya yakunlanishini tasdiqlaysizmi?"),approveFunction:function(){n((0,g.rv)())}}),(0,k.jsxs)("div",{className:"inverterizationHead mainPadding",children:[(0,k.jsx)("div",{className:"inverterizationText",children:e("Inventarizatsiya")}),(0,k.jsx)("div",{children:(0!==W||0!==j)&&(0,k.jsx)(l.Z,{countPage:Number(V),totalDatas:j||W,currentPage:ee,setCurrentPage:te})})]}),(0,k.jsx)(c.Z,{filterBy:["total","category","code","name","confirmBtn"],searchByCategory:L,filterByCategory:function(e){var t=e.target.value,r=t.replace(/\s+/g," ").trim();if($(t),(T.length>0||j>0)&&n((0,g.I0)()),""===r)U(C),J(P);else{var a=(0,x.filter)(C,(function(e){return e.category.code.includes(r)}));U(a),J(a.length)}},filterByCode:function(e){var t=e.target.value,r=t.replace(/\s+/g," ").trim();if(ie(t),(T.length>0||j>0)&&n((0,g.I0)()),""===r)U(C),J(P);else{var a=(0,x.filter)(C,(function(e){return e.productdata.code.includes(r)}));U(a),J(a.length)}},filterByName:function(e){var t=e.target.value,r=t.toLowerCase().replace(/\s+/g," ").trim();if(ce(t),(T.length>0||j>0)&&n((0,g.I0)()),""===r)U(C),J(P);else{var a=(0,x.filter)(C,(function(e){return e.productdata.name.toLowerCase().includes(r)}));U(a),J(a.length)}},searchByCode:ae,searchByName:le,filterByTotal:function(e){var t=e.value;X(t),te(0)},filterByCodeAndNameAndCategoryWhenPressEnter:function(e){if("Enter"===e.key){te(0);var t={currentPage:0,countPage:V,search:{name:le.replace(/\s+/g," ").trim(),code:ae.replace(/\s+/g," ").trim(),category:L.replace(/\s+/g," ").trim()}};n((0,g.oS)(t))}},clickConfirmBtn:pe}),(0,k.jsx)("div",{className:"tableContainerPadding",children:B?(0,k.jsx)(y.Z,{}):0===K.length&&0===T.length?(0,k.jsx)(v.Z,{text:"Maxsulotlar mavjud emas"}):(0,k.jsx)(s.Z,{sortItem:ve,Sort:function(e){if(e===ve.filter)switch(ve.count){case 1:me({filter:e,sort:"1",count:2}),(0,f.ki)(T.length>0?T:K,T.length>0?A:U,e,1,T.length>0?I:C);break;case 2:me({filter:e,sort:"",count:0}),(0,f.ki)(T.length>0?T:K,T.length>0?A:U,e,"",T.length>0?I:C);break;default:me({filter:e,sort:"-1",count:1}),(0,f.ki)(T.length>0?T:K,T.length>0?A:U,e,-1,T.length>0?I:C)}else me({filter:e,sort:"-1",count:1}),(0,f.ki)(T.length>0?T:K,T.length>0?A:U,e,-1,T?I:C,T.length>0)},page:"inventory",currentPage:ee,countPage:V,data:T.length>0?T:K,headers:t,changeHandler:function(e,t,n,i){var o=T.length?(0,a.Z)(T):(0,a.Z)(K),s=e.target.value,l=(0,r.Z)({},o[t]);l.inventory="count"===i?(0,r.Z)((0,r.Z)({},l.inventory),{},{inventorycount:parseInt(s),productcount:n.total}):(0,r.Z)((0,r.Z)({},l.inventory),{},{comment:s}),o[t]=(0,r.Z)({},l),T.length?A((0,a.Z)(o)):U((0,a.Z)(o))},Save:Ze,onKeyUp:function(e,t){"Enter"===e.key&&Ze(t)}})})]},"content")}}}]);
//# sourceMappingURL=8454.85fb3041.chunk.js.map