"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[918],{4016:function(e,t,n){n.d(t,{C:function(){return u}});n(2791);var r=n(9284),i=n(9434),a=n(184),c=function(e){var t,n=e.product,c=e.currency,l=e.marketName,o=(0,r.t)({value:null===n||void 0===n||null===(t=n.productdata)||void 0===t?void 0:t.barcode,options:{background:"#fff",width:"2cm",height:"40cm"}}).inputRef,u=(0,i.v9)((function(e){return e.currency})).currency;return(0,a.jsx)("div",{className:"w-[40mm] break-after-page font-sans h-[65mm] times ",children:(0,a.jsxs)("div",{className:"w-[65mm] rotate-90 mt-20 -ml-0 text-xl",children:[(0,a.jsxs)("div",{className:"text-[14px] font-medium text-right pb-[10px]",children:["1$ - ",u," UZS"]}),(0,a.jsxs)("div",{className:"text-center font-bold text-2xl p-[1px]",children:[(0,a.jsxs)("span",{children:['"',l,'"']}),(0,a.jsx)("hr",{})]}),(0,a.jsxs)("div",{children:[(0,a.jsxs)("div",{className:"text-center text-lg p-1",children:["\u041d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435:",(0,a.jsx)("br",{})," ",(0,a.jsx)("span",{className:"font-bold",children:n.productdata&&n.productdata.name})]}),(0,a.jsxs)("div",{className:"text-2xl font-bold text-center p-1",children:[(0,a.jsx)("span",{children:n.price?"\u0426\u0435\u043d\u0430:":""})," ",(0,a.jsx)("span",{children:n.price&&("UZS"===c?n.price.sellingpriceuzs.toLocaleString("ru-RU"):n.price.sellingprice.toLocaleString("ru-RU"))+" "+c||""})]}),(0,a.jsx)("div",{children:(0,a.jsx)("canvas",{ref:o})}),(0,a.jsx)("div",{className:"flex justify-center p-1"}),(0,a.jsxs)("div",{className:"flex justify-between text-xl p-1",children:[(0,a.jsxs)("div",{children:["\u041a\u043e\u0434: ",n.category&&n.category.code," ",n.productdata&&n.productdata.code]}),(0,a.jsx)("div",{children:(new Date).toLocaleDateString()})]})]})]})})},l=n(763),o=function(e,t){for(var n=[],r=0;r<e;r++)n.push(t);return n},u=function(e){var t=e.countOfCheques,n=e.productForCheques,r=e.printedData,i=e.componentRef,u=e.currency,s=e.marketName;return(0,a.jsxs)("div",{ref:i,children:[n&&t&&(0,l.map)(n,(function(e){return(0,l.range)(0,t).map((function(){return(0,a.jsx)(c,{currency:u,product:e,marketName:s},(0,l.uniqueId)("barCode"))}))})),(0,l.map)(r,(function(e){return(0,a.jsx)("div",{children:(0,l.map)(o(e.numberOfChecks,e.product),(function(e){return(0,a.jsx)(c,{currency:u,product:e,marketName:s},(0,l.uniqueId)("barCode"))}))},(0,l.uniqueId)("barCodeContainer"))}))]})}},2543:function(e,t,n){n.d(t,{Z:function(){return c}});n(2791);var r=n.p+"static/media/Excel.3a5a1731280185e0e4ae99ee0a4eebfc.svg",i=n(3168),a=n(184);var c=function(e){var t=e.onClick,n=(0,i.$)(["common"]).t;return(0,a.jsxs)("button",{className:"exportButton",onClick:t,children:[n("Eksport"),(0,a.jsx)("span",{className:"btn-icon bg-white-900 p-[8px]",children:(0,a.jsx)("img",{src:r,alt:"excel icon"})})]})}},918:function(e,t,n){n.r(t);var r=n(4165),i=n(5861),a=n(3433),c=n(9439),l=n(2791),o=n(2543),u=n(5077),s=n(4339),d=n(6408),f=n(2987),p=n(9434),m=n(4232),h=n(1295),g=n(4337),v=n(1146),x=n(4016),j=n(7584),k=n(3168),y=n(763),S=n(2106),b=n(184);t.default=function(e){var t=e.id,n=(0,k.$)(["common"]).t,Z=[{title:n("\u2116")},{title:n("Kategoriyasi"),filter:"category.code"},{title:n("Maxsulot kodi"),filter:"productdata.code"},{title:n("Maxsulot nomi"),filter:"productdata.name"},{title:n("Soni(dona)"),filter:"product.total"},{title:n("Olish"),filter:"price.incomingprice"},{title:n("Olish jami")},{title:n("Sotish"),filter:"price.sellingprice"},{title:n("Sotish jami")},{title:n("Cheklar soni")},{title:""}],C=(0,p.I0)(),N=(0,p.v9)((function(e){return e.products})),w=N.products,P=N.total,B=N.loading,E=N.searchedProducts,O=N.totalSearched,U=N.loadingExcel,D=(0,p.v9)((function(e){return e.currency})).currencyType,z=(0,p.v9)((function(e){return e.login})).market.name,R=(0,l.useState)(w),I=(0,c.Z)(R,2),q=I[0],L=I[1],M=(0,l.useState)(E),_=(0,c.Z)(M,2),T=_[0],$=_[1],A=(0,l.useState)(P),F=(0,c.Z)(A,2),G=F[0],H=F[1],J=(0,l.useState)("10"),K=(0,c.Z)(J,2),W=K[0],X=K[1],Q=(0,l.useState)(0),V=(0,c.Z)(Q,2),Y=V[0],ee=V[1],te=(0,l.useState)(""),ne=(0,c.Z)(te,2),re=ne[0],ie=ne[1],ae=(0,l.useState)(""),ce=(0,c.Z)(ae,2),le=ce[0],oe=ce[1],ue=(0,l.useState)(""),se=(0,c.Z)(ue,2),de=se[0],fe=se[1],pe=(0,l.useState)(null),me=(0,c.Z)(pe,2),he=me[0],ge=me[1],ve=(0,l.useState)(""),xe=(0,c.Z)(ve,2),je=xe[0],ke=xe[1],ye=(0,l.useState)({filter:"",sort:"",count:0}),Se=(0,c.Z)(ye,2),be=Se[0],Ze=Se[1],Ce=(0,l.useState)(!1),Ne=(0,c.Z)(Ce,2),we=Ne[0],Pe=Ne[1],Be=(0,l.useState)([]),Ee=(0,c.Z)(Be,2),Oe=Ee[0],Ue=Ee[1],De=(0,l.useRef)(),ze=(0,l.useRef)(),Re=(0,v.useReactToPrint)({content:function(){return De.current},onBeforeGetContent:function(){return Pe(!0),new Promise((function(e){ze.current=e,setTimeout((function(){Pe(!1),e()}),2e3)}))}}),Ie=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(t,n){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n&&Ue((0,a.Z)((0,y.filter)(Oe,(function(e){return e.product._id===t._id})))),e.next=3,Re();case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();return(0,l.useEffect)((function(){var e={filialId:t,currentPage:Y,countPage:W,search:{name:le.replace(/\s+/g," ").trim(),code:re.replace(/\s+/g," ").trim(),category:de.replace(/\s+/g,"")}};C((0,g.Xp)(e))}),[Y,W,C]),(0,l.useEffect)((function(){L(w)}),[w]),(0,l.useEffect)((function(){H(P)}),[P]),(0,l.useEffect)((function(){$(E)}),[E]),(0,l.useEffect)((function(){we&&"function"===typeof ze.current&&ze.current()}),[ze.current,we]),(0,l.useEffect)((function(){we||(Ue([]),ke(""),ge(null))}),[we]),(0,b.jsxs)(d.E.section,{initial:"collapsed",animate:"open",exit:"collapsed",variants:{open:{opacity:1,height:"auto"},collapsed:{opacity:0,height:0}},transition:{duration:.8,ease:[.04,.62,.23,.98]},children:[U||we&&(0,b.jsx)("div",{className:"fixed backdrop-blur-[2px] z-[100] left-0 top-0 right-0 bottom-0 bg-white-700 flex flex-col items-center justify-center w-full h-full",children:(0,b.jsx)(m.Z,{})}),(0,b.jsxs)("div",{className:"pagination mainPadding",children:[(0,b.jsx)(o.Z,{onClick:function(){var e=["\u2116","Mahsulot kodi","Mahsulot nomi","Soni","Olish narxi USD","Olish narxi UZS","Olish narxi jami USD","Olish narxi jami UZS","Sotish narxi USD","Sotish narxi UZS","Sotish narxi jami UZS","Sotish narxi jami USD"];C((0,g.Bd)()).then((function(t){var n=t.error,r=t.payload;if(!n)if((null===r||void 0===r?void 0:r.length)>0){var i=(0,y.map)(r,(function(e,t){var n,r,i,a,c,l,o,u,s,d,f;return{nth:t+1,code:(null===e||void 0===e||null===(n=e.productdata)||void 0===n?void 0:n.code)||"",name:(null===e||void 0===e||null===(r=e.productdata)||void 0===r?void 0:r.name)||"",total:e.total+(null===e||void 0===e||null===(i=e.unit)||void 0===i?void 0:i.name)||"",incomingprice:(null===e||void 0===e||null===(a=e.price)||void 0===a?void 0:a.incomingprice)||"",incomingpriceuzs:(null===e||void 0===e||null===(c=e.price)||void 0===c?void 0:c.incomingpriceuzs)||"",incomingpricealluzs:(null===e||void 0===e||null===(l=e.price)||void 0===l?void 0:l.incomingpriceuzs)*e.total,incomingpriceallusd:(null===e||void 0===e||null===(o=e.price)||void 0===o?void 0:o.incomingprice)*e.total,sellingprice:(null===e||void 0===e||null===(u=e.price)||void 0===u?void 0:u.sellingprice)||"",sellingpriceuzs:(null===e||void 0===e||null===(s=e.price)||void 0===s?void 0:s.sellingpriceuzs)||"",sellingalluzs:(null===e||void 0===e||null===(d=e.price)||void 0===d?void 0:d.sellingpriceuzs)*e.total,sellingallusd:(null===e||void 0===e||null===(f=e.price)||void 0===f?void 0:f.sellingprice)*e.total}}));(0,j.rD)(i,"Etiketka",e)}else(0,S.Ug)("Jadvalda ma'lumot mavjud emas !","warning")}))}}),(0,b.jsx)("p",{className:"product_name",children:n("Etiketka")}),(0!==G||0!==O)&&(0,b.jsx)(u.Z,{countPage:Number(W),totalDatas:O||G,currentPage:Y,setCurrentPage:ee})]}),(0,b.jsx)(f.Z,{filterBy:["total","category","code","name","checks","printBtn"],filterByCode:function(e){var t=e.target.value,n=t.replace(/\s+/g," ").trim();if(ie(t),(T.length>0||O>0)&&C((0,g.rk)()),""===n)L(w),H(P);else{var r=(0,y.filter)(w,(function(e){return e.productdata.code.includes(n)}));L(r),H(r.length)}},filterByName:function(e){var t=e.target.value,n=t.toLowerCase().replace(/\s+/g," ").trim();if(oe(t),(T.length>0||O>0)&&C((0,g.rk)()),""===n)L(w),H(P);else{var r=(0,y.filter)(w,(function(e){return e.productdata.name.toLowerCase().includes(n)}));L(r),H(r.length)}},searchByCode:re,searchByName:le,searchByCategory:de,filterByCategory:function(e){var t=e.target.value,n=t.replace(/\s+/g," ").trim();if(fe(t),(T.length>0||O>0)&&C((0,g.rk)()),""===n)L(w),H(P);else{var r=(0,y.filter)(w,(function(e){return e.category.code.includes(n)}));L(r),H(r.length)}},numberOfChecks:je,filterByTotal:function(e){var t=e.value;X(t),ee(0)},filterByCodeAndNameAndCategoryWhenPressEnter:function(e){if("Enter"===e.key){ee(0);var n={filialId:t,currentPage:0,countPage:W,search:{name:le.replace(/\s+/g," ").trim(),code:re.replace(/\s+/g," ").trim(),category:de.replace(/\s+/g,"")}};C((0,g.aR)(n))}},clickPrintBtn:Ie,setNumberOfChecks:function(e){ke(e.target.value),ge(T.length>0?T:q)}}),(0,b.jsx)("div",{className:"tableContainerPadding",children:B?(0,b.jsx)(m.Z,{}):0===q.length&&0===T.length?(0,b.jsx)(h.Z,{text:n("Maxsulotlar mavjud emas")}):(0,b.jsx)(s.Z,{page:"productreport",data:T.length>0?T:q,currentPage:Y,countPage:W,currency:D,headers:Z,Sort:function(e){if(e===be.filter)switch(be.count){case 1:Ze({filter:e,sort:"1",count:2}),(0,j.ki)(T.length>0?T:q,T.length>0?$:L,e,1,T.length>0?E:w);break;case 2:Ze({filter:e,sort:"",count:0}),(0,j.ki)(T.length>0?T:q,T.length>0?$:L,e,"",T.length>0?E:w);break;default:Ze({filter:e,sort:"-1",count:1}),(0,j.ki)(T.length>0?T:q,T.length>0?$:L,e,-1,T.length>0?E:w)}else Ze({filter:e,sort:"-1",count:1}),(0,j.ki)(T.length>0?T:q,T.length>0?$:L,e,-1,T?E:w,T.length>0)},sortItem:be,placeholder:"misol : 10",changeHandler:function(e,t){var n=Oe.findIndex((function(e){return e.product._id===t._id}));-1!==n?(""!==e.target.value.trim()?Oe[n].numberOfChecks=Number(e.target.value):Oe.splice(n,1),Ue((0,a.Z)(Oe))):Ue([].concat((0,a.Z)(Oe),[{product:t,numberOfChecks:Number(e.target.value)}]))},Print:Ie,printedData:Oe})}),(0,b.jsx)("div",{className:"hidden",children:(0,b.jsx)(x.C,{currency:D,componentRef:De,countOfCheques:je,productForCheques:he,printedData:Oe,marketName:z})})]},"content")}}}]);
//# sourceMappingURL=918.7b1ac7d9.chunk.js.map