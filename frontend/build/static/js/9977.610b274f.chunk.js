"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[9977],{960:function(e,t,n){n.r(t);var a=n(9439),i=n(2791),r=n(8063),l=n(7799),s=n(4339),u=n(9434),o=n(6408),c=n(9894),d=n(2230),f=n(4232),h=n(1295),x=n(7584),g=n(2106),m=n(3168),p=n(184);t.default=function(){var e=(0,m.$)(["common"]).t,t=(0,u.I0)(),n=(0,u.v9)((function(e){return e.currency})),v=n.currencies,y=n.getCurrenciesLoading,k=[{title:"\u2116",styles:"w-[8%] text-left"},{title:e("Sana"),styles:"w-[17%] text-center"},{title:e("Kurs"),styles:"w-[67%] text-center"},{title:"",styles:"w-[8%] text-center"}],j=(0,i.useState)(v),Z=(0,a.Z)(j,2),b=Z[0],w=Z[1],S=(0,i.useState)(""),C=(0,a.Z)(S,2),D=C[0],E=C[1],N=(0,i.useState)(""),q=(0,a.Z)(N,2),z=q[0],K=q[1],P=(0,i.useState)(null),_=(0,a.Z)(P,2),F=_[0],U=_[1],V=(0,i.useState)(!1),M=(0,a.Z)(V,2),O=M[0],T=M[1],B=(0,i.useState)(!1),I=(0,a.Z)(B,2),L=I[0],W=I[1],Y=(0,i.useState)(!1),$=(0,a.Z)(Y,2),A=$[0],G=$[1],H=(0,i.useState)(null),J=(0,a.Z)(H,2),Q=J[0],R=J[1],X=function(){return T(!O)},ee=function(){T(!1),U(null),R(null)},te=function(n){n.preventDefault();var a={exchangerate:D};if((0,x.lj)([{value:D,message:"Kurs narxi"}]).failed)return(0,g.Ug)(e("Valyuta kursini kiriting!"),"error");t((0,c._N)(a)).then((function(e){e.error||(ne(),G(!0),T(!0),R("complete"))}))},ne=function(e){e&&e.preventDefault(),E(""),K(null),W(!1)};return(0,i.useEffect)((function(){t((0,c.DE)())}),[t]),(0,i.useEffect)((function(){w(v)}),[v]),(0,p.jsxs)(o.E.section,{initial:"collapsed",animate:"open",exit:"collapsed",variants:{open:{opacity:1,height:"auto"},collapsed:{opacity:0,height:0}},transition:{duration:.8,ease:[.04,.62,.23,.98]},children:[y&&(0,p.jsx)("div",{className:"fixed backdrop-blur-[2px] z-[100] left-0 top-0 right-0 bottom-0 bg-white-700 flex flex-col items-center justify-center w-full h-full",children:(0,p.jsx)(f.Z,{})}),(0,p.jsx)(d.Z,{headerText:A?"Diqqat! Barcha mahsulotlar narxi valyuta kursiga nisbatan o'zgarishini xohlaysizmi?":"".concat(F&&F.exchangerate," ").concat(e("kurs narxini o'chirishni tasdiqlaysizmi?")),title:A?"":e("O'chirilgan kurs narxini tiklashning imkoni mavjud emas!"),toggleModal:X,body:Q,approveFunction:A?function(){t((0,c.N2)()).then((function(e){e.error||(R(null),T(!1),G(!1))}))}:function(){var e={_id:F._id};t((0,c.bd)(e)),ee()},closeModal:ee,isOpen:O}),(0,p.jsx)("form",{className:"unitFormStyle ".concat(L&&"stickyForm"," flex gap-[1.25rem] bg-background flex-col mainPadding transition ease-linear duration-200"),children:(0,p.jsxs)("div",{className:"exchangerate-style",children:[(0,p.jsx)(r.Z,{value:D,onChange:function(e){E(e.target.value)},label:e("Kurs narxi"),placeholder:e("misol: 11 000 UZS"),maxWidth:"w-[30.75rem]",type:"number",border:!0,onKeyPress:function(e){e.preventDefault(),"Enter"===e.key&&te()}}),(0,p.jsxs)("div",{className:"w-full flex gap-[1.25rem] grow w-[33.2rem]",children:[(0,p.jsx)(l.Z,{onClick:L?function(n){if(n.preventDefault(),(0,x.lj)([{value:D,message:"Kurs narxi"}]).failed)return(0,g.Ug)(e("Valyuta kursini kiriting!"),"error");var a={exchangerate:D,_id:z._id};t((0,c.CE)(a)).then((function(e){e.error||(ne(),G(!0),T(!0),R("complete"))}))}:te,add:!L,edit:L,text:e(L?"Saqlash":"Yangi o'lchov qo'shish")}),(0,p.jsx)(l.Z,{onClick:ne,text:e("Tozalash")})]})]})}),(0,p.jsx)("div",{className:"tableContainerPadding",children:y?(0,p.jsx)(f.Z,{}):0===v.length?(0,p.jsx)(h.Z,{text:e("Valyuta kursi mavjud emas")}):(0,p.jsx)(s.Z,{page:"exchange",data:b,currentPage:0,countPage:10,headers:k,Edit:function(e){K(e),E(e.exchangerate),W(!0)},Delete:function(e){U(e),R("approve"),X()}})})]},"content")}}}]);
//# sourceMappingURL=9977.610b274f.chunk.js.map