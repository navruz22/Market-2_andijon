"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[3194],{3012:function(e,a,n){var t=n(9434),l=n(184);a.Z=function(e){var a=e.border,n=void 0!==a&&a,r=e.navbarExpended,i=e.director,s=void 0===i?null:i,o=(0,t.v9)((function(e){return e.login.user})),u=function(e){return 0===e.indexOf("http://")||0===e.indexOf("https://")};return(0,l.jsx)(l.Fragment,{children:n&&s?(0,l.jsxs)("div",{className:"flex items-center gap-[1.25rem] p-[1.25rem]",children:[(0,l.jsx)("div",{className:"avatar-border rounded-[50%] p-[0.625rem] overflow-hidden",children:(0,l.jsx)("div",{className:"avatar-image flex items-center justify-center w-[50px] h-[50px] rounded-full overflow-hidden",children:s.image&&u(s.image)?(0,l.jsx)("img",{src:s.image,alt:s.firstname,className:"pointer-events-none"}):"".concat(s.firstname[0].toUpperCase()+s.lastname[0].toUpperCase())})}),(0,l.jsxs)("div",{className:"flex flex-col gap-[5px]",children:[(0,l.jsxs)("h4",{className:"text-black-900 leading-[1.4375rem] text-xl",children:[s.firstname," ",s.lastname]}),(0,l.jsx)("p",{className:"text-black-700 text-base leading-[1.1875rem]",children:s.type})]})]}):(0,l.jsxs)("div",{className:"w-full flex items-center gap-[10px]",children:[(0,l.jsx)("div",{className:"avatar-image flex items-center justify-center transition-all ease-linear duration-300 w-[50px] h-[50px] rounded-full overflow-hidden shadow-[0_10px_10px_rgba(0,0,0,0.15)]",children:null!==o&&void 0!==o&&o.image&&u(null===o||void 0===o?void 0:o.image)?(0,l.jsx)("img",{src:null===o||void 0===o?void 0:o.image,alt:null===o||void 0===o?void 0:o.firstname,className:"pointer-events-none"}):"".concat((null===o||void 0===o?void 0:o.firstname[0].toUpperCase())+(null===o||void 0===o?void 0:o.lastname[0].toUpperCase()))}),(0,l.jsxs)("div",{className:"transition-all ease-in duration-200 avatar-info flex flex-col gap-[5px] ".concat(r?"w-0 invisible opacity-0 ml-[10%]":"opacity-100 visible w-max"),children:[(0,l.jsxs)("h4",{className:"text-black-900 font-medium",children:[(null===o||void 0===o?void 0:o.firstname[0].toUpperCase())+(null===o||void 0===o?void 0:o.firstname.slice(1))," ",(null===o||void 0===o?void 0:o.lastname[0].toUpperCase())+(null===o||void 0===o?void 0:o.lastname.slice(1))]}),(0,l.jsx)("p",{className:"text-black-700 text-xs leading-[14px]",children:o.type})]})]})})}},3194:function(e,a,n){n.r(a),n.d(a,{default:function(){return Re}});var t=n(2791),l=n(7689),r=n(9439),i=n(71),s=n(6355),o=n(184),u=[{id:1,label:"Bosh sahifa",icon:(0,o.jsx)(i.wB6,{size:"1.5rem"}),path:"/",submenu:!1},{id:2,label:"Maxsulotlar",path:"maxsulotlar",icon:(0,o.jsx)(i.tqy,{size:"1.5rem"}),submenu:[{id:1,label:"Kategoriyalar",icon:"home",path:"maxsulotlar/kategoriyalar"},{id:2,label:"Maxsulotlar",icon:"home",path:"maxsulotlar/maxsulotlar"},{id:3,label:"Omborxona",icon:"home",path:"maxsulotlar/omborxona"},{id:4,label:"O'lchov birliklari",icon:"home",path:"maxsulotlar/ulchov"},{id:5,label:"Etiketka",icon:"",path:"maxsulotlar/etiketka",submenu:!1},{id:6,label:"Qabul qilish",icon:"",path:"maxsulotlar/qabul/qabulqilish",submenu:!1},{id:7,label:"Maxsulotlar hisoboti",icon:"home",path:"maxsulotlar/hisobot",submenu:[{id:1,label:"Sotilgan mahsulotlar",icon:"home",path:"maxsulotlar/hisobot/sotilganlar"},{id:2,label:"Kam qolganlar",icon:"home",path:"maxsulotlar/hisobot/kamqolganlar"}]},{id:8,label:"Inventarizatsiya",icon:!0,path:"maxsulotlar/inventarizatsiya",submenu:[{id:1,label:"Inventarizatsiya",icon:"home",path:"maxsulotlar/inventarizatsiya/inventarizatsiya"},{id:2,label:"Inventarizatsiyalar",icon:"home",path:"maxsulotlar/inventarizatsiya/inventarizatsiyalar"}]}]},{id:3,label:"Sotuv",path:"sotuv/sotish",icon:(0,o.jsx)(i.yh$,{size:"1.5rem"}),submenu:!1},{id:4,label:"Hamkorlar",path:"hamkorlar",icon:(0,o.jsx)(i.nfT,{size:"1.5rem"}),submenu:[{id:1,label:"Yetkazuvchilar",icon:"",path:"hamkorlar/yetkazuvchilar",submenu:!1},{id:2,label:"Agentlar",icon:"",path:"hamkorlar/agentlar",submenu:!1},{id:3,label:"Mijozlar",icon:"",path:"hamkorlar/mijozlar",submenu:!1},{id:4,label:"Sotuvchilar",icon:"",path:"hamkorlar/sotuvchilar",submenu:!1}]},{id:5,label:"Do'konlar",icon:(0,o.jsx)(i.UQs,{size:"1.5rem"}),path:"dukonlar",submenu:[{id:1,label:"Hamkorlar",path:"dukonlar/hamkorlar",icon:"",submenu:!1},{id:2,label:"Buyurtma berish",path:"dukonlar/buyurtma_berish/buyurtmalar",icon:"",submenu:!1},{id:3,label:"Buyurtma olish",path:"dukonlar/buyurtma_olish/ruyxat",icon:"",submenu:!1},{id:4,label:"Filiallar",path:"dukonlar/filiallar",icon:"",submenu:!1},{id:5,label:"Almashinuv",path:"dukonlar/almashinuv",icon:"",submenu:!1}]},{id:6,label:"Xarajatlar",icon:(0,o.jsx)(s.wHz,{size:"1.5rem"}),path:"xarajatlar",submenu:!1},{id:7,label:"Kassa",icon:(0,o.jsx)(s.rpp,{size:"1.5rem"}),path:"kassa",submenu:!1},{id:8,label:"Valyuta kursi",icon:(0,o.jsx)(i.SG6,{size:"1.5rem"}),path:"valyuta",submenu:!1}],c=[{id:1,label:"Sotuv",path:"/",icon:(0,o.jsx)(i.yh$,{size:"1.5rem"}),submenu:!1},{id:2,label:"Qarzdorlar",path:"qarzdorlar",icon:(0,o.jsx)(i.mKE,{size:"1.5rem"}),submenu:!1},{id:3,label:"Hamkorlar",path:"hamkorlar",icon:(0,o.jsx)(i.nfT,{size:"1.5rem"}),submenu:[{id:1,label:"Agentlar",icon:"",path:"hamkorlar/agentlar",submenu:!1},{id:2,label:"Mijozlar",icon:"",path:"hamkorlar/mijozlar",submenu:!1}]}],m=[{id:1,label:"Bosh sahifa",icon:(0,o.jsx)(i.wB6,{size:"1.5rem"}),path:"/"},{id:2,label:"Shtrix Kodlar",path:"maxsulotlar",icon:(0,o.jsx)(i.eXJ,{size:"1.5rem"})},{id:3,label:"Do'konlar",icon:(0,o.jsx)(i.UQs,{size:"1.5rem"}),path:"dukonlar",submenu:!1}],d=[{id:1,label:"Tahrirlash",path:"shaxsiy/tahrirlash",icon:(0,o.jsx)(i.Fuo,{size:"1rem"})},{id:2,path:"shaxsiy/parol",label:"Parolni o`zgartirish",icon:(0,o.jsx)(i.qYt,{size:"1rem"})},{id:3,label:"Chiqish",icon:(0,o.jsx)(i.wzU,{size:"1rem"})}],h=u;var x=n.p+"static/media/logo-sm.7638193ec5e1540ba6badae127ff0bce.svg",p=n(3012),b=n(1087),f=n(3168);var v=function(e){var a=e.path,n=e.label,t=e.icon,l=(0,f.$)(["common"]).t;return(0,o.jsxs)(b.OL,{className:function(e){var a=e.isActive;return"transition-all ease duration-200 w-full flex px-[20px] py-[10px] gap-[10px] items-center ".concat(a?"text-white-900 bg-primary-800":"text-black-700 hover:bg-black-100")},to:a,children:[(0,o.jsx)("span",{children:t}),(0,o.jsx)("span",{className:"text-xs",children:l(n)})]})},j=n(763);var y=function(e){var a=e.submenu,n=e.id,l=e.path,r=e.label,s=e.activeSecondSubMenuId,u=e.handleClickSecondMenu,c=e.globalPath,m=function(e){var a=e.isActive;return"flex items-center rounded-[4px] gap-[5px] py-[5px] pl-[0.625rem] leading-[1.1875rem] transition-all ease-in-out duration-200 text-base ".concat(a?"text-warning-500":"text-black-700 hover:bg-black-100")};(0,t.useEffect)((function(){c.includes(l.split("/")[1])&&u(n)}),[l,n]);var d=(0,f.$)(["common"]).t;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)("button",{className:"w-full flex items-center transition ease-in-out duration-100 py-[5px] px-[0.9375rem] rounded-[4px] border-b-[1px] gap-x-[5px] ".concat(c.includes(l.split("/")[1])?"bg-primary-700 text-white-900 border-primary-800":"border-transparent text-black-700 hover:bg-black-100"),onClick:function(){return u(n)},children:[(0,o.jsx)("span",{className:"transition ease-in-out duration-200 ".concat(s===n?"rotate-90":""),children:(0,o.jsx)(i.mzm,{size:"0.875rem"})}),(0,o.jsx)("span",{className:"text-base leading-[1.1875rem]",children:d(r)})]}),(0,o.jsx)("div",{className:"transition-all ease-in-out duration-300 overflow-hidden flex flex-col border-b-[1px] border-b-[rgba(184,186,185,1)] pl-[1.875rem] ".concat(s===n?"max-h-screen opacity-100 py-[0.625rem]":"max-h-0 opacity-0"),children:(0,j.map)(a,(function(e){return(0,o.jsx)(b.OL,{to:e.path,className:m,children:(0,o.jsx)("span",{children:d(e.label)})},e.id)}))})]})};var g=function(e){var a=e.label,n=e.icon,r=e.submenu,s=e.id,u=e.path,c=e.handleClickFirstMenu,m=e.activeFirstSubMenuId,d=e.activeSecondSubMenuId,h=e.handleClickSecondMenu,x=e.expanded,p=(0,l.TH)().pathname.split("/").filter((function(e){return""!==e}));(0,t.useEffect)((function(){u.includes(p[0])&&c(s)}),[u,s]);var v=(0,f.$)(["common"]).t;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)("button",{className:"navbar__link w-full flex items-center ".concat(x?"justify-center":"justify-between"," px-[0.9375rem] py-[0.625rem] rounded-[1.875rem] transition ease-in-out duration-200 ").concat(u.includes(p[0])?"text-white-900 bg-primary-800":"text-black-700 hover:bg-black-100"),onClick:function(){return c(s)},children:[(0,o.jsxs)("span",{className:"content flex items-center gap-[0.9375rem]",children:[n&&(0,o.jsx)("span",{className:"nav-link__icon",children:n}),!x&&(0,o.jsx)("span",{className:"nav-link__label text-base leading-[1.1875rem]",children:v("".concat(a))})]}),!x&&(0,o.jsx)(i.CgR,{className:"transition ease-in-out duration-200 ".concat(m===s?"rotate-180":""),size:"1.5rem"})]}),(0,o.jsx)("div",{className:"transition-all ease-in-out duration-300 pl-[1.875rem] flex flex-col gap-[0.625rem] overflow-hidden ".concat(m===s?"max-h-screen opacity-100 mt-[0.625rem]":"max-h-0 opacity-0"),children:(0,j.map)(r,(function(e){return(0,o.jsx)("div",{children:e.submenu?(0,o.jsx)(y,{id:e.id,path:e.path,globalPath:p,submenu:e.submenu,label:v(e.label),handleClickSecondMenu:h,activeSecondSubMenuId:d}):(0,o.jsxs)(b.OL,{to:e.path,onClick:function(){return h(null)},className:function(a){var n=a.isActive;return"flex items-center transition gap-[5px] ease-in-out duration-100 py-[5px] px-[0.9375rem] rounded-[4px] border-b-[1px] ".concat(n||p[1]===e.path.split("/")[1]?"bg-primary-700 text-white-900 border-primary-800 [&>.circle-icon]:text-warning-200":"border-transparent text-black-700 hover:bg-black-100 [&>.circle-icon]:text-black-300")},children:[(0,o.jsx)("span",{className:"circle-icon"}),(0,o.jsx)("span",{className:"text-base leading-[1.1875rem]",children:v(e.label)})]})},e.id)}))})]})};var k=function(e){var a=e.path,n=e.label,t=e.icon,r=e.id,i=e.submenu,s=e.handleClickFirstMenu,u=e.activeFirstSubMenuId,c=e.activeSecondSubMenuId,m=e.handleClickSecondMenu,d=e.expanded,h=(0,f.$)(["common"]).t,x=(0,l.TH)().pathname.split("/")[1];return(0,o.jsx)("div",{className:"mb-[0.9375rem]",children:i?(0,o.jsx)(g,{submenu:i,expanded:d,id:r,path:a,label:h(n),handleClickFirstMenu:s,activeFirstSubMenuId:u,icon:t,activeSecondSubMenuId:c,handleClickSecondMenu:m}):(0,o.jsxs)(b.OL,{to:a,onClick:function(){m(null),s(null)},className:function(e){return function(e,a){var n=e||a.split("/")[0]===x;return"navbar__link flex items-center ".concat(d?"justify-center":""," px-[0.9375rem] py-[0.625rem] gap-[0.9375rem] rounded-[1.875rem] transition ease-in-out duration-200 ").concat(n?"text-white-900 bg-primary-800":"text-black-700 hover:bg-black-100")}(e.isActive,a)},children:[t&&(0,o.jsx)("span",{className:"nav-link__icon",children:t}),!d&&(0,o.jsx)("span",{className:"nav-link__label text-base leading-[1.1875rem]",children:h(n)})]})})},z=n(7756),w=n(9434),N=n(7146),P=n(1413),C=n(1188),S=n(9126),Z=function(e){return(0,o.jsx)(C.c.DropdownIndicator,(0,P.Z)((0,P.Z)({},e),{},{children:(0,o.jsx)(S.fmn,{size:"10px",color:"rgba(28, 28, 28, 0.5)"})}))},_={option:function(e,a){var n=a.isSelected;return(0,P.Z)((0,P.Z)({},e),{},{width:"130px",fontSize:"12px",fontWeight:"300",lineHeight:"14px",borderRadius:"30px",color:n?"#ffffff":"#071F45",backgroundColor:n?"#0090A3":"transparent",padding:"10px 20px",height:"34px",margin:"5px 0",cursor:"pointer","&:hover":{backgroundColor:"#00B4CC"}})},menu:function(e){return(0,P.Z)((0,P.Z)({},e),{},{position:"absolute",width:"150px",left:"115%",top:"auto",bottom:"0",padding:"0 10px",display:"flex",flexDirection:"column",gap:"10px",border:"none",outline:"none",boxShadow:"0px 10px 10px rgba(0, 0, 0, 0.05)",backgroundColor:"rgba(255, 255, 255, 0.7)",backdropFilter:"blur(5px)",borderRadius:"4px"})},control:function(e){return(0,P.Z)((0,P.Z)({},e),{},{with:"100%",padding:".3125rem .625rem",display:"flex",gap:"10px",alignItems:"center",borderRadius:".5rem",backgroundColor:"#EAEAEA",height:"30px",outline:"none",border:"none",cursor:"pointer","&:hover":{backgroundColor:"#D4D4D4"},transition:"all 0.2s ease"})},container:function(e){return(0,P.Z)((0,P.Z)({},e),{},{outline:"none",border:"none"})},singleValue:function(e){return(0,P.Z)((0,P.Z)({},e),{},{padding:"7px 10px",fontSize:".75rem",fontWeight:"300",lineHeight:".875rem",color:"#1C1C1C",marginLeft:"1.1rem","& > span > div ":{display:"none"}})},valueContainer:function(e){return(0,P.Z)((0,P.Z)({},e),{},{display:"flex",alignItems:"center",justifyContent:"center",marginTop:"-2px"})},dropdownIndicator:function(e){return(0,P.Z)((0,P.Z)({},e),{},{padding:0})},indicatorsContainer:function(e){return(0,P.Z)((0,P.Z)({},e),{},{size:"10px",marginTop:"-2px",marginLeft:"-1.1rem"})}};var I=n.p+"static/media/yes.228d1d6c0996aa154f5d0abe144cbcce.svg";var q=n.p+"static/media/Russia.5292364790cc1f642e6a6602ba2b07c9.svg",E=[{value:"lot",label:(0,o.jsxs)("span",{className:"flex items-center gap-[10px] justify-start",children:[(0,o.jsx)("div",{className:"p-[2px] rounded-[2px] bg-white-900",children:(0,o.jsx)("img",{src:I,alt:"uzbekistan"})}),"UZ (Lotin)"]})},{value:"uz",label:(0,o.jsxs)("span",{className:"flex items-center gap-[10px] justify-start",children:[(0,o.jsx)("div",{className:"p-[2px] rounded-[2px] bg-white-900",children:(0,o.jsx)("img",{src:I,alt:"uzbekistan"})}),"UZ (Kiril)"]})},{value:"ru",label:(0,o.jsxs)("span",{className:"flex items-center gap-[10px] justify-start",children:[(0,o.jsx)("div",{className:"p-[2px] rounded-[2px] bg-white-900",children:(0,o.jsx)("img",{src:q,alt:"russian"})}),"RU"]})}],M=function(){var e=(0,f.$)(["common"]).i18n,a=(0,t.useState)(""),n=(0,r.Z)(a,2),l=n[0],i=n[1];return(0,t.useEffect)((function(){var e=localStorage.getItem("i18nextLng");i(E.find((function(a){return a.value===e})))}),[]),(0,o.jsxs)("div",{className:"relative",children:[(0,o.jsx)("div",{children:(0,o.jsx)(S.Za_,{className:"absolute z-10 translate-y-[-50%] top-[50%] ml-[.75rem]",color:"rgba(28, 28, 28, 0.5)",size:"1.25rem"})}),(0,o.jsx)(N.ZP,{options:E,isSearchable:!1,styles:_,onChange:function(a){e.changeLanguage(a.value),i(a)},value:l||E[0],components:{IndicatorSeparator:function(){return null},DropdownIndicator:Z}})]})};var A=function(){var e=(0,f.$)(["common"]).t,a=(0,w.I0)(),n=(0,w.v9)((function(e){return e.login})).user,l=(0,t.useState)(!1),s=(0,r.Z)(l,2),u=s[0],b=s[1],y=(0,t.useState)(!1),g=(0,r.Z)(y,2),N=g[0],P=g[1],C=(0,t.useState)(!1),S=(0,r.Z)(C,2),Z=S[0],_=S[1],I=(0,t.useState)(!1),q=(0,r.Z)(I,2),E=q[0],A=q[1],F=(0,t.useCallback)((function(){b(!u),sessionStorage.setItem("navbarExpended",!u)}),[u]),L=function(e){_(e===Z?null:e),b(!1),sessionStorage.setItem("navbarExpended",!1)},R=function(e){A(e===E?null:e)},U=function(){a((0,z.ni)())},O=(0,t.useCallback)((function(e){e.ctrlKey&&32===e.keyCode&&F()}),[F]);return(0,t.useLayoutEffect)((function(){var e="true"===sessionStorage.getItem("navbarExpended");e&&b(e)}),[]),(0,t.useEffect)((function(){u&&_(null)}),[u]),(0,t.useEffect)((function(){return window.addEventListener("keydown",O),function(){window.removeEventListener("keydown",O)}}),[O]),(0,t.useEffect)((function(){document.addEventListener("click",(function(e){var a=e.target.hasOwnProperty("class"),n=!e.target.classList.contains("toggle-avatar-menu");(a||n)&&P(!1)}))}),[]),(0,o.jsxs)("div",{className:"relative",children:[(0,o.jsxs)("nav",{className:"transition-all ease-in-out duration-200 min-h-screen bg-white-300 flex flex-col justify-between rounded-tr-[8px] rounded-br-[8px] shadow-[5px_0_25px_rgba(0,0,0,0.1),10px_0_50px_rgba(0,0,0,0.05)] ".concat(u?"min-w-[4.375rem] max-w-[4.375rem]":"min-w-[17.625rem] max-w-[17.625rem]"),children:[(0,o.jsx)("div",{className:"navbar-header overflow-hidden",children:(0,o.jsxs)("div",{className:"transition-all ease duration-300 navbar-avatar ".concat(u?"w-[100vw] justify-start":"justify-center"," bg-white-400 border-b-2 border-b-black-100 flex items-center py-[0.9375rem] px-[10px] gap-[30px]"),children:[(0,o.jsx)(p.Z,{navbarExpended:u}),(0,o.jsx)("button",{className:"toggle-avatar-menu transition ease duration-200 ".concat(N?"text-primary-800":"text-black-700 hover:text-primary-800"),onClick:function(){return P(!0)},children:(0,o.jsx)(i.tvF,{size:"20px",className:"pointer-events-none"})})]})}),(0,o.jsx)("div",{className:"navbar-body relative grow overflow-y-auto",children:(0,o.jsx)("div",{className:"absolute left-0 w-full h-full pt-[2.8125rem] pb-[0.75rem] px-[0.75rem] scroll-smooth overflow-y-auto",children:function(){switch(n.type.toLowerCase()){case"seller":return c;case"director":return h;case"admin":return m;default:a((0,z.ni)())}}().map((function(a){return(0,o.jsx)(k,{icon:a.icon,label:e(a.label),path:a.path,submenu:a.submenu,id:a.id,activeFirstSubMenuId:Z,activeSecondSubMenuId:E,expanded:u,handleClickFirstMenu:L,handleClickSecondMenu:R},a.id)}))})}),(0,o.jsxs)("div",{className:"navbar-footer transition-all ease-in-out duration-300 text-center flex flex-col justify-center gap-[10px] bg-white-400 border-t-[2px] border-t-black-100 ".concat(u?"h-0 opacity-0 hidden":"p-[10px] opacity-100"),children:[(0,o.jsx)("div",{className:"w-full flex justify-center items-center",children:(0,o.jsx)(M,{})}),(0,o.jsx)("div",{className:"footer-logo flex items-center justify-center",children:(0,o.jsx)("img",{src:x,alt:"alo24 logo"})}),(0,o.jsx)("p",{className:"text-[0.625rem] text-black-500",children:"Copyright \xa9 2022 Alo 24. All Rights Reserved"})]})]}),(0,o.jsx)("button",{className:"w-[40px] h-[40px] flex items-center justify-center z-[30] rounded-full bg-white-900 text-black-700 shadow-[0_10px_20px_rgba(0,0,0,0.1)] absolute backdrop-blur-[10px] top-[5.3rem] right-[-20px] transition-all ease-linear duration-300 hover:bg-black-100 ".concat(u?"rotate-180":""),onClick:F,children:(0,o.jsx)(i.dUf,{size:"20px"})}),N&&(0,o.jsx)("div",{className:"avatar-config-menu absolute z-[90] w-max left-[17rem] top-[1.375rem] bg-white-700 backdrop-blur-[8px] py-[10px] rounded-[8px]",children:(0,j.map)(d,(function(a,n){return a.path?(0,o.jsx)(v,{path:a.path,icon:a.icon,label:e(a.label)},n+1):(0,o.jsxs)("button",{className:"transition-all ease duration-200 w-full flex px-[20px] py-[10px] gap-[10px] items-center text-black-700 hover:bg-black-100",onClick:U,children:[(0,o.jsx)("span",{children:a.icon}),(0,o.jsx)("span",{className:"text-xs",children:e(a.label)})]},n+1)}))})]})},F=n(9894),L=n(2106),R=(0,t.lazy)((function(){return Promise.all([n.e(4045),n.e(4044),n.e(978),n.e(6048),n.e(2202),n.e(6465),n.e(1146),n.e(4339),n.e(2230),n.e(2987)]).then(n.bind(n,2040))})),U=(0,t.lazy)((function(){return Promise.all([n.e(4045),n.e(4044),n.e(978),n.e(6048),n.e(4339),n.e(639)]).then(n.bind(n,1e3))})),O=(0,t.lazy)((function(){return Promise.all([n.e(4045),n.e(4044),n.e(978),n.e(6048),n.e(2202),n.e(6465),n.e(1146),n.e(4339),n.e(2230),n.e(4819)]).then(n.bind(n,2246))})),T=(0,t.lazy)((function(){return Promise.all([n.e(4045),n.e(4044),n.e(978),n.e(6048),n.e(2202),n.e(6465),n.e(1146),n.e(4339),n.e(2230),n.e(1378)]).then(n.bind(n,7085))})),B=(0,t.lazy)((function(){return Promise.all([n.e(4045),n.e(4044),n.e(978),n.e(6048),n.e(1146),n.e(9284),n.e(4339),n.e(918),n.e(3845)]).then(n.bind(n,918))})),D=(0,t.lazy)((function(){return Promise.all([n.e(4045),n.e(4044),n.e(978),n.e(6048),n.e(2202),n.e(6465),n.e(1146),n.e(4339),n.e(2230),n.e(8454)]).then(n.bind(n,1432))})),H=(0,t.lazy)((function(){return Promise.all([n.e(4045),n.e(4044),n.e(978),n.e(6048),n.e(2202),n.e(6465),n.e(1146),n.e(4339),n.e(2230),n.e(9766)]).then(n.bind(n,3082))})),$=(0,t.lazy)((function(){return Promise.all([n.e(4045),n.e(4044),n.e(978),n.e(6048),n.e(2202),n.e(6465),n.e(1146),n.e(4339),n.e(2230),n.e(1288)]).then(n.bind(n,4668))})),K=(0,t.lazy)((function(){return n.e(2213).then(n.bind(n,4299))})),Q=(0,t.lazy)((function(){return Promise.all([n.e(4045),n.e(4044),n.e(978),n.e(6048),n.e(2202),n.e(6465),n.e(1146),n.e(1608),n.e(7129),n.e(4339),n.e(2230),n.e(7458)]).then(n.bind(n,3940))})),W=(0,t.lazy)((function(){return Promise.all([n.e(4045),n.e(4044),n.e(978),n.e(6048),n.e(2202),n.e(6465),n.e(1146),n.e(4339),n.e(2230),n.e(6806)]).then(n.bind(n,9191))})),Y=(0,t.lazy)((function(){return Promise.all([n.e(4045),n.e(4044),n.e(978),n.e(6048),n.e(2202),n.e(6465),n.e(1146),n.e(1608),n.e(4339),n.e(2230),n.e(6131)]).then(n.bind(n,2432))})),V=(0,t.lazy)((function(){return Promise.all([n.e(4045),n.e(4044),n.e(978),n.e(6048),n.e(2202),n.e(6465),n.e(1146),n.e(4339),n.e(2230),n.e(7536)]).then(n.bind(n,7241))})),X=(0,t.lazy)((function(){return Promise.all([n.e(4045),n.e(4044),n.e(978),n.e(6048),n.e(2202),n.e(6465),n.e(1146),n.e(4339),n.e(2230),n.e(599)]).then(n.bind(n,2856))})),G=(0,t.lazy)((function(){return Promise.all([n.e(4045),n.e(4044),n.e(978),n.e(6048),n.e(2202),n.e(6465),n.e(1146),n.e(1608),n.e(9284),n.e(4339),n.e(2230),n.e(918),n.e(8259)]).then(n.bind(n,7121))})),J=(0,t.lazy)((function(){return Promise.all([n.e(4045),n.e(4044),n.e(6048),n.e(2202),n.e(6465),n.e(1146),n.e(2230),n.e(8729)]).then(n.bind(n,4206))})),ee=(0,t.lazy)((function(){return Promise.all([n.e(4045),n.e(4044),n.e(978),n.e(6048),n.e(2202),n.e(6465),n.e(1146),n.e(4339),n.e(2230),n.e(9977)]).then(n.bind(n,960))})),ae=(0,t.lazy)((function(){return Promise.all([n.e(4045),n.e(4044),n.e(978),n.e(2202),n.e(4339),n.e(9958)]).then(n.bind(n,9958))})),ne=(0,t.lazy)((function(){return Promise.all([n.e(9763),n.e(4051)]).then(n.bind(n,4051))})),te=(0,t.lazy)((function(){return Promise.all([n.e(4045),n.e(4044),n.e(978),n.e(6048),n.e(2202),n.e(6465),n.e(1146),n.e(7129),n.e(4339),n.e(2230),n.e(1981)]).then(n.bind(n,1938))})),le=(0,t.lazy)((function(){return n.e(8312).then(n.bind(n,8312))})),re=(0,t.lazy)((function(){return Promise.all([n.e(4044),n.e(7991)]).then(n.bind(n,7991))})),ie=(0,t.lazy)((function(){return Promise.all([n.e(4045),n.e(4044),n.e(978),n.e(6048),n.e(2202),n.e(6465),n.e(1146),n.e(7129),n.e(4339),n.e(2230),n.e(6987)]).then(n.bind(n,4927))})),se=(0,t.lazy)((function(){return Promise.all([n.e(4045),n.e(4044),n.e(978),n.e(6048),n.e(2202),n.e(6465),n.e(1146),n.e(4339),n.e(2230),n.e(3131)]).then(n.bind(n,8774))})),oe=(0,t.lazy)((function(){return Promise.all([n.e(4045),n.e(4044),n.e(978),n.e(6048),n.e(2202),n.e(6465),n.e(1146),n.e(4339),n.e(2230),n.e(6064)]).then(n.bind(n,4451))})),ue=(0,t.lazy)((function(){return Promise.all([n.e(4045),n.e(4044),n.e(978),n.e(6048),n.e(2202),n.e(6465),n.e(1146),n.e(4339),n.e(2230),n.e(5121)]).then(n.bind(n,8405))})),ce=(0,t.lazy)((function(){return Promise.all([n.e(4045),n.e(4044),n.e(978),n.e(6048),n.e(2202),n.e(6465),n.e(1146),n.e(4339),n.e(2230),n.e(8530)]).then(n.bind(n,5592))})),me=(0,t.lazy)((function(){return Promise.all([n.e(4045),n.e(4044),n.e(978),n.e(6048),n.e(2202),n.e(6465),n.e(1146),n.e(7129),n.e(4339),n.e(2230),n.e(9300)]).then(n.bind(n,3114))})),de=(0,t.lazy)((function(){return Promise.all([n.e(4045),n.e(4044),n.e(978),n.e(6048),n.e(2202),n.e(6465),n.e(1146),n.e(4339),n.e(2230),n.e(8028)]).then(n.bind(n,6999))})),he=(0,t.lazy)((function(){return Promise.all([n.e(4045),n.e(4044),n.e(978),n.e(6048),n.e(2202),n.e(4339),n.e(9151)]).then(n.bind(n,9151))})),xe=(0,t.lazy)((function(){return Promise.all([n.e(4045),n.e(2202),n.e(6465),n.e(9489)]).then(n.bind(n,1551))})),pe=(0,t.lazy)((function(){return Promise.all([n.e(4045),n.e(4044),n.e(978),n.e(6048),n.e(2202),n.e(6465),n.e(1146),n.e(4339),n.e(2230),n.e(906)]).then(n.bind(n,9878))})),be=(0,t.lazy)((function(){return Promise.all([n.e(4045),n.e(4044),n.e(6048),n.e(2202),n.e(6465),n.e(1146),n.e(1608),n.e(2230),n.e(9521)]).then(n.bind(n,5268))})),fe=(0,t.lazy)((function(){return Promise.all([n.e(4045),n.e(978),n.e(4339),n.e(5162)]).then(n.bind(n,5162))})),ve=(0,t.lazy)((function(){return Promise.all([n.e(4045),n.e(4044),n.e(978),n.e(6048),n.e(4339),n.e(6124)]).then(n.bind(n,6124))})),je=(0,t.lazy)((function(){return Promise.all([n.e(4045),n.e(4044),n.e(978),n.e(6048),n.e(2202),n.e(6465),n.e(1146),n.e(4339),n.e(2230),n.e(6656)]).then(n.bind(n,889))})),ye=(0,t.lazy)((function(){return Promise.all([n.e(4045),n.e(978),n.e(4339),n.e(297)]).then(n.bind(n,297))})),ge=(0,t.lazy)((function(){return Promise.all([n.e(4045),n.e(4044),n.e(6048),n.e(2202),n.e(6465),n.e(1146),n.e(2230),n.e(2664)]).then(n.bind(n,3779))})),ke=(0,t.lazy)((function(){return Promise.all([n.e(4045),n.e(4044),n.e(978),n.e(6048),n.e(4339),n.e(6999)]).then(n.bind(n,444))})),ze=(0,t.lazy)((function(){return Promise.all([n.e(4045),n.e(4044),n.e(978),n.e(6048),n.e(4339),n.e(6786)]).then(n.bind(n,6786))})),we=(0,t.lazy)((function(){return n.e(4413).then(n.bind(n,4413))})),Ne=(0,t.lazy)((function(){return n.e(1878).then(n.bind(n,1878))})),Pe=(0,t.lazy)((function(){return Promise.all([n.e(4045),n.e(4044),n.e(978),n.e(6048),n.e(2202),n.e(6465),n.e(1146),n.e(4339),n.e(2230),n.e(8748)]).then(n.bind(n,6240))})),Ce=(0,t.lazy)((function(){return Promise.all([n.e(4045),n.e(978),n.e(4339),n.e(6930)]).then(n.bind(n,6930))})),Se=(0,t.lazy)((function(){return Promise.all([n.e(4045),n.e(4044),n.e(978),n.e(6048),n.e(2202),n.e(6465),n.e(1146),n.e(1608),n.e(4339),n.e(2230),n.e(1530)]).then(n.bind(n,4282))})),Ze=(0,t.lazy)((function(){return Promise.all([n.e(4045),n.e(4044),n.e(978),n.e(6048),n.e(2202),n.e(6465),n.e(1146),n.e(1608),n.e(4339),n.e(2230),n.e(1968)]).then(n.bind(n,2724))})),_e=(0,t.lazy)((function(){return Promise.all([n.e(4045),n.e(4044),n.e(978),n.e(6048),n.e(2202),n.e(6465),n.e(1146),n.e(4339),n.e(2230),n.e(4782)]).then(n.bind(n,2225))})),Ie=(0,t.lazy)((function(){return Promise.all([n.e(4045),n.e(4044),n.e(978),n.e(6048),n.e(2202),n.e(6465),n.e(1146),n.e(4339),n.e(2230),n.e(6779)]).then(n.bind(n,4769))})),qe=(0,t.lazy)((function(){return Promise.all([n.e(4045),n.e(4044),n.e(6048),n.e(8217)]).then(n.bind(n,8217))})),Ee=[{path:"/",element:(0,o.jsx)(ne,{})},{path:"/maxsulotlar/qabul/",element:(0,o.jsx)(le,{}),subRoutes:[{path:"qabulqilish",element:(0,o.jsx)(ie,{})},{path:"qabullar",element:(0,o.jsx)(re,{})},{path:"qabullar/:id",element:(0,o.jsx)(ue,{})},{path:"saqlanganlar",element:(0,o.jsx)(se,{})},{path:"ruyxat",element:(0,o.jsx)(oe,{})}]},{path:"/maxsulotlar/maxsulotlar",element:(0,o.jsx)(te,{})},{path:"/maxsulotlar/omborxona",element:(0,o.jsx)(qe,{})},{path:"/maxsulotlar/hisobot/sotilganlar",element:(0,o.jsx)(U,{})},{path:"/maxsulotlar/hisobot/kamqolganlar",element:(0,o.jsx)(fe,{})},{path:"/maxsulotlar/kategoriyalar",element:(0,o.jsx)(O,{})},{path:"/maxsulotlar/kategoriyalar/:code",element:(0,o.jsx)(ye,{})},{path:"/maxsulotlar/ulchov",element:(0,o.jsx)($,{})},{path:"/maxsulotlar/etiketka",element:(0,o.jsx)(B,{})},{path:"/maxsulotlar/inventarizatsiya/inventarizatsiya",element:(0,o.jsx)(D,{})},{path:"/maxsulotlar/inventarizatsiya/inventarizatsiyalar",element:(0,o.jsx)(H,{})},{path:"/sotuv/",element:(0,o.jsx)(K,{}),subRoutes:[{path:"sotish",element:(0,o.jsx)(Q,{})},{path:"saqlanganlar",element:(0,o.jsx)(W,{})},{path:"ruyxat",element:(0,o.jsx)(Y,{})}]},{path:"/hamkorlar/yetkazuvchilar",element:(0,o.jsx)(T,{})},{path:"/hamkorlar/yetkazuvchilar/:id",element:(0,o.jsx)(je,{})},{path:"/hamkorlar/agentlar",element:(0,o.jsx)(V,{})},{path:"/hamkorlar/mijozlar",element:(0,o.jsx)(X,{})},{path:"/hamkorlar/sotuvchilar",element:(0,o.jsx)(ae,{})},{path:"/hamkorlar/sotuvchilar/:id",element:(0,o.jsx)(R,{})},{path:"/valyuta",element:(0,o.jsx)(ee,{})},{path:"/xarajatlar",element:(0,o.jsx)(he,{})},{path:"/kassa",element:(0,o.jsx)(J,{})},{path:"/kassa/:id",element:(0,o.jsx)(ce,{})},{path:"/dukonlar/filiallar/*",element:(0,o.jsx)(G,{}),subRoutes:[{path:":tablename/:_id",element:(0,o.jsx)(G,{})},{path:"filiallar",element:(0,o.jsx)(G,{})},{path:":tablename/:_id/exchangesId",element:(0,o.jsx)(ve,{})}]},{path:"/dukonlar/almashinuv",element:(0,o.jsx)(be,{})},{path:"/dukonlar/hamkorlar",element:(0,o.jsx)(ge,{})},{path:"/dukonlar/hamkorlar/mahsulotlar/:id",element:(0,o.jsx)(ke,{})},{path:"/dukonlar/hamkorlar/hamkormahsulotlari/:id",element:(0,o.jsx)(ze,{})},{path:"/dukonlar/hamkorlar/buyurtma",element:(0,o.jsx)("div",{children:"buyurtma"})},{path:"/dukonlar/buyurtma_olish",element:(0,o.jsx)(we,{}),subRoutes:[{path:"buyurtmalar",element:(0,o.jsx)(Se,{})},{path:"saqlanganlar",element:(0,o.jsx)(Ce,{})},{path:"ruyxat",element:(0,o.jsx)(Pe,{})}]},{path:"/dukonlar/buyurtma_berish",element:(0,o.jsx)(Ne,{}),subRoutes:[{path:"buyurtmalar",element:(0,o.jsx)(Ze,{})},{path:"saqlanganlar",element:(0,o.jsx)(_e,{})},{path:"ruyxat",element:(0,o.jsx)(Ie,{})}]},{path:"/shaxsiy/parol",element:(0,o.jsx)(xe,{})}],Me=[{path:"/",element:(0,o.jsx)(K,{}),subRoutes:[{path:"/",element:(0,o.jsx)(Q,{})},{path:"saqlanganlar",element:(0,o.jsx)(W,{})},{path:"ruyxat",element:(0,o.jsx)(Y,{})}]},{path:"/qarzdorlar",element:(0,o.jsx)(pe,{})},{path:"/hamkorlar/agentlar",element:(0,o.jsx)(V,{})},{path:"/hamkorlar/mijozlar",element:(0,o.jsx)(X,{})}],Ae=[{path:"/",element:(0,o.jsx)("h1",{className:"text-center text-black-700 p-[1rem]",children:"Bunday sahifa hozircha mavjud emas"})},{path:"/dukonlar/*",element:(0,o.jsx)(de,{})},{path:"/maxsulotlar",element:(0,o.jsx)(me,{})},{path:"/shaxsiy/parol",element:(0,o.jsx)(xe,{})}],Fe=function(e){var a=function(e){switch(e){case"director":return Ee;case"seller":return Me;case"admin":return Ae;default:return[{path:"/",element:(0,o.jsx)("h1",{children:"Sahifa mavjud emas"})}]}}(e.toLowerCase());return(0,j.map)(a,(function(e){return e.subRoutes?(0,o.jsx)(l.AW,{exact:!0,path:e.path,element:e.element,children:(0,j.map)(e.subRoutes,(function(e){return(0,o.jsx)(l.AW,{path:e.path,element:e.element},(0,j.uniqueId)("sub-route"))}))},(0,j.uniqueId)("route")):(0,o.jsx)(l.AW,{exact:!0,path:e.path,element:e.element},(0,j.uniqueId)("route"))}))},Le=n(1338),Re=function(){var e=(0,w.I0)(),a=(0,w.v9)((function(e){return e.currency})),n=a.currency,r=(a.currencyType,a.currencyError),i=a.getCurrencyLoading,s=(0,w.v9)((function(e){return e.login})).user;return(0,t.useEffect)((function(){e((0,F.Zk)({currency:"UZS"}))}),[e]),(0,t.useEffect)((function(){"Admin"!==s.type&&(e((0,F.zC)()),e((0,F.TQ)()))}),[e,null===s||void 0===s?void 0:s.type]),(0,t.useEffect)((function(){n||i||(0,L.YQ)()}),[n,i]),(0,t.useEffect)((function(){r&&((0,L.Ug)(r,"error"),e((0,F.fw)()))}),[r,e]),(0,o.jsxs)("section",{className:"flex bg-background relative overflow-x-hidden",children:[(0,o.jsx)(A,{}),(0,o.jsx)("div",{className:"grow h-screen overflow-y-auto",children:(0,o.jsx)(t.Suspense,{fallback:(0,o.jsx)(Le.Z,{}),children:(0,o.jsxs)(l.Z5,{children:[Fe(s.type),(0,o.jsx)(l.AW,{path:"*",element:(0,o.jsx)(l.Fg,{to:"/",replace:!0})})]})})})]})}}}]);
//# sourceMappingURL=3194.f22f226d.chunk.js.map