"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[297],{7667:function(e,t,s){s(2791);var n=s(1087),i=s(71),a=s(184);t.Z=function(e){var t=e.link;return(0,a.jsx)(n.rU,{to:t,className:"linktoback",children:(0,a.jsx)(i.dUf,{})})}},1295:function(e,t,s){s(2791);var n=s(184);t.Z=function(e){var t=e.text;return(0,n.jsx)("div",{className:"text-center py-10",children:(0,n.jsxs)("h3",{className:"text-black-300 text-[xl] leading-[1.875rem]",children:[t,"..."]})})}},4232:function(e,t,s){var n=s(184);t.Z=function(){return(0,n.jsx)("div",{className:"flex items-center justify-center mt-14",children:(0,n.jsx)("div",{className:"clock-loader"})})}},297:function(e,t,s){s.r(t);var n=s(2791),i=s(7689),a=s(7667),r=s(9434),l=s(473),c=s(9078),o=s(4232),d=s(1295),m=s(763),u=s(7584),x=s(184),f=function(e,t){return"UZS"===t?(0,m.reduce)(e,(function(e,t){return e+(0,u.ei)(Number(t.price.incomingpriceuzs)*t.total)}),0).toLocaleString("ru-RU"):(0,m.reduce)(e,(function(e,t){return e+(0,u.Y2)(t.price.incomingprice*t.total)}),0).toLocaleString("ru-RU")},h=function(e,t){return"UZS"===t?(0,m.reduce)(e,(function(e,t){return e+(0,u.ei)(t.price.sellingpriceuzs*t.total)}),0).toLocaleString("ru-RU"):(0,m.reduce)(e,(function(e,t){return e+(0,u.Y2)(t.price.sellingprice*t.total)}),0).toLocaleString("ru-RU")};t.default=function(){var e,t,s,u=(0,r.I0)(),j=(0,i.TH)(),p=(0,i.s0)(),g=(0,i.UO)().code,N=(0,r.v9)((function(e){return e.categoryReport})),v=N.products,S=N.loading;return(0,n.useEffect)((function(){j.state?u((0,l.h)({categoryId:j.state.id,startDate:j.state.startDate,endDate:j.state.endDate})):p(-1)}),[u,j.state,p]),(0,x.jsxs)("section",{children:[(0,x.jsxs)("div",{className:"mainPadding flex items-center justify-between pt-12",children:[(0,x.jsx)(a.Z,{link:-1}),(0,x.jsxs)("h2",{className:"text-base text-black-700",children:[(0,x.jsxs)("span",{className:"font-medium text-xl text-blue-400",children:[g," ",(null===j||void 0===j||null===(e=j.state)||void 0===e?void 0:e.name)&&"- ".concat(null===j||void 0===j||null===(t=j.state)||void 0===t?void 0:t.name)]})," - kategoriya bo'yicha hisobot"]})]}),(0,x.jsx)("div",{className:"tableContainerPadding",children:S?(0,x.jsx)(o.Z,{}):v.length>0?(0,x.jsx)(c.Z,{page:"categoryreport",headers:[{title:"\u2116"},{title:"Kodi"},{title:"Nomi"},{title:"Soni"},{title:"Olish "},{title:"Sotish"},{title:"Sotilganlar soni"},{title:"Sotilganlar jami"}],data:v}):(0,x.jsx)(d.Z,{text:"Maxsulot topilmadi d..."})}),(0,x.jsxs)("div",{className:"pl-[2.5rem] pr-[1.25rem] flex items-center justify-end gap-[1rem]",children:[(0,x.jsx)("p",{className:"font-medium",children:"Jami :"}),(0,x.jsxs)("ul",{className:"flex justify-end gap-[1rem]",children:[(0,x.jsxs)("li",{className:"text-sm flex items-center gap-[0.5rem]",children:[(0,x.jsx)("div",{className:"w-[0.5rem] h-[0.5rem] rounded-full bg-primary-700"}),(0,x.jsxs)("span",{className:"font-medium",children:[v.length," ta maxsulot"]})]}),(0,x.jsxs)("li",{className:"text-sm flex items-center gap-[0.5rem]",children:[(0,x.jsx)("div",{className:"w-[0.5rem] h-[0.5rem] rounded-full bg-warning-400"}),(0,x.jsxs)("span",{className:"font-medium",children:["Soni: ",(s=v,(0,m.reduce)(s,(function(e,t){return e+t.total}),0))]})]}),(0,x.jsxs)("li",{className:"text-sm flex items-center gap-[0.5rem]",children:[(0,x.jsx)("div",{className:"w-[0.5rem] h-[0.5rem] rounded-full bg-blue-400"}),(0,x.jsxs)("span",{className:"font-medium",children:["Olish : ",f(v,"UZS")," UZS "," / "," ",f(v,"USD")," USD"]})]}),(0,x.jsxs)("li",{className:"text-sm flex items-center gap-[0.5rem]",children:[(0,x.jsx)("div",{className:"w-[0.5rem] h-[0.5rem] rounded-full bg-success-400"}),(0,x.jsxs)("span",{className:"font-medium",children:["Sotish : ",h(v,"UZS")," UZS "," / "," ",h(v,"USD")," USD"]})]})]})]})]})}}}]);
//# sourceMappingURL=297.64e1d8af.chunk.js.map