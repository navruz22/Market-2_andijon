"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[2664],{7584:function(e,n,r){r.d(n,{KE:function(){return p},Nt:function(){return l},Ts:function(){return h},Y2:function(){return m},ei:function(){return f},ki:function(){return s},lj:function(){return u},rD:function(){return d},uX:function(){return c}});var t=r(3433),o=r(6096),i=r(763),a=r(4045),s=function(e,n,r,o,a){var s=r.split(".");n(o?(0,i.orderBy)((0,t.Z)(e),(function(e){return 3===s.length?e[s[0]][s[1]][s[2]]:2===s.length?e[s[0]][s[1]]:e[r]}),[-1===o?"desc":"asc"]):a)},c=function(e,n){return Math.round(e*n)},l=function(e,n){return Math.round(e/n*1e4)/1e4},u=function(e){for(var n={failed:!1,message:""},r=0;r<e.length;r++)if(o.S.test(e[r].value)){n={message:e[r].message,failed:!0};break}return n},d=function(e,n,r){var o,i=(o=e,Object.keys(o[0]).map((function(e,n){var i=Math.max.apply(Math,(0,t.Z)(o.map((function(n){return n[e].toString().length}))));return{wch:r[n].length>i?r[n].length+1:i+4}}))),s=a.P6.book_new(),c=a.P6.json_to_sheet([]);c["!cols"]=i,a.P6.sheet_add_aoa(c,[r]),a.P6.sheet_add_json(c,e,{origin:"A2",skipHeader:!0}),a.P6.book_append_sheet(s,c,"Maxsulotlar"),a.NC(s,"".concat(n,"-").concat((new Date).toLocaleDateString(),".xlsx"))},f=function(e){return Math.round(1*e)/1},m=function(e){return Math.round(1e4*e)/1e4},p=function(e,n){return(0,i.reduce)(e,(function(e,r){return e+r[n]}),0)},h=function(e,n){return f(e/n)}},4237:function(e,n,r){r(2791);var t=r(71),o=r(184);n.Z=function(e){var n=e.type,r=e.onClick,i=e.active,a={product:{icon:(0,o.jsx)(t.lkm,{className:"shopIcons"}),bgColor:"bg-[#12B76A]"},selling:{icon:(0,o.jsx)(t.toq,{className:"shopIcons"}),bgColor:"bg-[#F79009]"},payments:{icon:(0,o.jsx)(t.B9Z,{className:"shopIcons"}),bgColor:"bg-[#00B4CC]"},income:{icon:(0,o.jsx)(t.Wem,{className:"shopIcons"}),bgColor:"bg-[#00B4CC]"}};return(0,o.jsx)("button",{onClick:r,className:"".concat(i?"filial-active":a[n].bgColor," shopButton"),children:a[n].icon})}},4952:function(e,n,r){var t=r(184);n.Z=function(e){var n=e.placeholder,r=e.type,o=e.value,i=e.onChange,a=e.label,s=e.disabled,c=e.onKeyUp;return(0,t.jsx)("div",{className:"w-full",children:(0,t.jsxs)("label",{children:[a,(0,t.jsx)("input",{disabled:s,className:"tableInput",placeholder:n,type:r,value:o,onChange:i,onKeyUp:c,onWheel:function(e){return e.target.blur()},min:0})]})})}},6096:function(e,n,r){r.d(n,{S:function(){return o},y:function(){return t}});var t=/^\d*\.?\d*$/,o=/^\s*$/},8309:function(e,n,r){r.d(n,{Z:function(){return u}});r(2791);var t=r(7146),o=r(1413),i=r(1188),a=r(71),s=r(184),c=function(e){return(0,s.jsx)(i.c.DropdownIndicator,(0,o.Z)((0,o.Z)({},e),{},{children:(0,s.jsx)(a.lmx,{size:"0.625rem",color:"#86A7E9"})}))},l={container:function(e){return(0,o.Z)((0,o.Z)({},e),{},{height:"100%"})},control:function(e,n){var r=n.isDisabled;return(0,o.Z)((0,o.Z)({},e),{},{width:"100%",height:"100%",padding:".625rem .58rem",borderRadius:".25rem",fontSize:".875rem",fontWeight:"400",color:"#86A7E9",outline:"none",boxShadow:"0px 10px 10px rgba(0, 0, 0, 0.05)",cursor:"pointer","&:hover":{backgroundColor:"#EAEAEA"},"&:focus-within":{outline:"4px solid #A9C0EF",backgroundColor:"#ffffff"},backgroundColor:r?"rgba(28, 28, 28, 0.2)":"#fff",border:r?"none":"1px solid #86A7E9"})},option:function(e,n){var r=n.isFocused,t=n.isSelected;return(0,o.Z)((0,o.Z)({},e),{},{fontSize:".875rem",fontWeight:"400",color:t||r?"#ffffff":"#071F45",backgroundColor:t?"#0090A3":r?"#00B4CC":"#ffffff",transition:"all 0.2s ease",overflow:"hidden",cursor:"pointer"})},menu:function(e){return(0,o.Z)((0,o.Z)({},e),{},{zIndex:30})},singleValue:function(e){return(0,o.Z)((0,o.Z)({},e),{},{color:"#1c1c1c",fontSize:".875rem",lineHeight:"1.25rem",fontWeight:"400",margin:0})},valueContainer:function(e){return(0,o.Z)((0,o.Z)({},e),{},{padding:0})},dropdownIndicator:function(e,n){var r=n.isFocused;return(0,o.Z)((0,o.Z)({},e),{},{padding:0,paddingRight:".625rem",color:r?"#193F8A":"#071F45"})},placeholder:function(e,n){var r=n.isDisabled;return(0,o.Z)((0,o.Z)({},e),{},{margin:0,color:r?"rgba(28, 28, 28, 0.2)":"#86A7E9"})},input:function(e){return(0,o.Z)((0,o.Z)({},e),{},{padding:0,display:"flex",lineHeight:"1.25rem",margin:0})}},u=function(e){var n=e.onSelect,r=e.options,o=e.isDisabled,i=e.label,a=e.placeholder,u=e.value;return(0,s.jsxs)("div",{className:"grow",children:[i&&(0,s.jsx)("label",{className:"text-blue-700 block leading-[1.125rem] mb-[.625rem]",children:i}),(0,s.jsx)(t.ZP,{onChange:n,styles:l,value:u,defaultValue:"",options:r,isDisabled:o,placeholder:a,components:{IndicatorSeparator:function(){return null},DropdownIndicator:c}})]})}},3779:function(e,n,r){r.r(n),r.d(n,{default:function(){return b}});var t=r(1413),o=r(9439),i=r(2791),a=r(4237),s=r(9434),c=r(184);var l=function(e){var n=e.border,r=void 0!==n&&n,t=(e.navbarExpended,e.director),o=void 0===t?null:t,i=(0,s.v9)((function(e){return e.login.user})),a=function(e){return 0===e.indexOf("http://")||0===e.indexOf("https://")};return(0,c.jsx)(c.Fragment,{children:r&&o?(0,c.jsx)("div",{className:"flex items-center gap-[1.25rem] p-[1.25rem]",children:(0,c.jsx)("div",{className:"avatar-border rounded-[50%] p-[0.625rem] overflow-hidden",children:(0,c.jsx)("div",{className:"avatar-image flex items-center justify-center w-[50px] h-[50px] rounded-full overflow-hidden",children:o.image&&a(o.image)?(0,c.jsx)("img",{src:o.image,alt:o.firstname,className:"pointer-events-none"}):"".concat(o.firstname[0].toUpperCase()+o.lastname[0].toUpperCase())})})}):(0,c.jsx)("div",{className:"w-full flex items-center gap-[10px]",children:(0,c.jsx)("div",{className:"avatar-image flex items-center justify-center transition-all ease-linear duration-300 w-[50px] h-[50px] rounded-full overflow-hidden shadow-[0_10px_10px_rgba(0,0,0,0.15)]",children:null!==i&&void 0!==i&&i.image&&a(null===i||void 0===i?void 0:i.image)?(0,c.jsx)("img",{src:null===i||void 0===i?void 0:i.image,alt:null===i||void 0===i?void 0:i.firstname,className:"pointer-events-none"}):"".concat((null===i||void 0===i?void 0:i.firstname[0].toUpperCase())+(null===i||void 0===i?void 0:i.lastname[0].toUpperCase()))})})})},u=r(1087),d=function(e){var n,r,t=e.active,o=e.market;return(0,c.jsx)("section",{children:(0,c.jsxs)("div",{className:"shops_card flex gap-[1.25rem] ".concat(t?"active_shop":""),children:[(0,c.jsx)(l,{border:!0,director:null===o||void 0===o?void 0:o.director}),(0,c.jsxs)("div",{className:"product-cost",children:[(0,c.jsxs)("div",{className:"flex flex-col items-center justify-center",children:[(0,c.jsx)("p",{className:"product",children:"Do'kon INN"}),(0,c.jsx)("p",{className:"product-number",children:null===o||void 0===o?void 0:o.name})]}),(0,c.jsxs)("div",{className:"flex flex-col items-center justify-center",children:[(0,c.jsx)("p",{className:"product",children:"Direktor"}),(0,c.jsxs)("div",{className:"flex gap-[5px]",children:[(0,c.jsx)("p",{className:"product-number",children:null===o||void 0===o||null===(n=o.director)||void 0===n?void 0:n.firstname}),(0,c.jsx)("p",{className:"product-number",children:null===o||void 0===o||null===(r=o.director)||void 0===r?void 0:r.lastname})]})]}),(0,c.jsxs)("div",{className:"flex flex-col items-center justify-center",children:[(0,c.jsx)("p",{className:"product",children:"Telefon"}),(0,c.jsx)("p",{className:"product-number",children:null===o||void 0===o?void 0:o.phone})]})]}),(0,c.jsxs)("div",{className:"shop-name flex flex-col w-[13.4375rem]",children:[(0,c.jsx)("div",{className:"shop-title",children:(0,c.jsxs)("p",{children:["INN: ",null===o||void 0===o?void 0:o.inn.toLocaleString("ru-RU")]})}),(0,c.jsxs)("div",{className:"filial-btn",children:[(0,c.jsx)(u.rU,{to:"/dukonlar/hamkorlar/mahsulotlar/".concat(o._id),children:(0,c.jsx)(a.Z,{type:"product"})}),(0,c.jsx)(u.rU,{to:"/dukonlar/hamkorlar/hamkormahsulotlari/".concat(o._id),children:(0,c.jsx)(a.Z,{type:"selling"})}),(0,c.jsx)(u.rU,{to:"/dukonlar/hamkorlar/buyurtma",children:(0,c.jsx)(a.Z,{type:"payments"})})]})]})]})})},f=r(8063),m=r(7799),p=r(3168),h=r(2230),v=r(6096),x=r(5023),g=r(2987),j=r(763);var b=function(){var e=(0,p.$)(["common"]).t,n=(0,s.I0)(),r=(0,s.v9)((function(e){return e.connections})),a=r.marketByInn,l=r.connections,u=r.sendingRequests,b=r.incomingRequests,N=r.countOfNewRequests,k=(0,s.v9)((function(e){return e.login})).market,Z=(0,i.useState)(!1),C=(0,o.Z)(Z,2),w=C[0],y=C[1],I=(0,i.useState)(""),S=(0,o.Z)(I,2),_=S[0],q=S[1],D=(0,i.useState)("requestconnection"),A=(0,o.Z)(D,2),E=A[0],B=A[1],M=(0,i.useState)([]),R=(0,o.Z)(M,2),L=R[0],U=R[1],F=(0,i.useState)([]),P=(0,o.Z)(F,2),O=P[0],z=P[1],W=(0,i.useState)([]),H=(0,o.Z)(W,2),K=H[0],Y=H[1],$=function(e){n((0,x.SA)({connection:e})).then((function(e){e.error||(n((0,x.Ih)()),n((0,x.JL)()),n((0,x.oc)()))}))};return(0,i.useEffect)((function(){n((0,x.JL)()),n((0,x.Ih)()),n((0,x.mw)()),n((0,x.oc)())}),[n]),(0,i.useEffect)((function(){U(l)}),[l]),(0,i.useEffect)((function(){z(u)}),[u]),(0,i.useEffect)((function(){Y(b)}),[b]),(0,c.jsxs)("div",{children:[(0,c.jsx)(h.Z,{body:E,marketByInn:a,toggleModal:function(){return y(!w)},approveFunction:function(){var e={firstMarket:k._id,secondMarket:a._id};n((0,x.b_)(e)).then((function(e){e.error||((0,x.h7)(),y(!1),q(""),n((0,x.mw)()))}))},closeModal:function(){y(!1),(0,x.h7)()},isOpen:w,sendingRequests:O,handleDeleteRequest:function(e){n((0,x.Oo)({connectionId:e})).then((function(e){e.error||(n((0,x.mw)()),n((0,x.Ih)()))}))},incomingRequests:K,handleAcceptRequest:function(e){$((0,t.Z)((0,t.Z)({},e),{},{accept:!0,rejected:!1,request:!1}))},handleRejectRequest:function(e){$((0,t.Z)((0,t.Z)({},e),{},{accept:!1,rejected:!0,request:!1}))}}),(0,c.jsx)("form",{className:"flex gap-[1.25rem] bg-background flex-col mainPadding transition ease-linear duration-200",children:(0,c.jsxs)("div",{className:"supplier-style",children:[(0,c.jsx)(f.Z,{value:_,onChange:function(e){var n=e.target.value;v.y.test(n)&&q(n)},label:e("Do'kon INN raqami"),placeholder:"".concat(e("misol"),": 123 456 789"),border:!0}),(0,c.jsxs)("div",{className:"flex gap-[1.25rem] grow",children:[(0,c.jsx)(m.Z,{onClick:function(e){e.preventDefault(),n((0,x.UO)({inn:_})).then((function(e){e.error||(y(!0),B("requestconnection"))}))},add:!0,text:"Yangi do'kon qo'shish"}),(0,c.jsx)(m.Z,{edit:!0,text:"Yuborilganlar",onClick:function(e){e.preventDefault(),y(!0),B("sendingApplication")}}),(0,c.jsx)(m.Z,{count:N.count,bell:!0,text:"So'rovlar",onClick:function(e){e.preventDefault(),y(!0),B("requestApplication")}})]})]})}),(0,c.jsx)("div",{className:"mainPadding",children:(0,c.jsx)("p",{className:"supplier-title text-center",children:e("Hamkor do'konlar")})}),(0,c.jsx)(g.Z,{filterBy:["marketName","inn","directorName","lastname"],filterByMarketName:function(e){var n=e.target.value.toLowerCase(),r=(0,j.filter)(l,(function(e){return e.name.toLowerCase().includes(n)}));U(r)},filterByMarketInn:function(e){var n=e.target.value.toLowerCase(),r=(0,j.filter)(l,(function(e){return e.inn.toString().toLowerCase().includes(n)}));U(r)},filterByDirectorName:function(e){var n=e.target.value.toLowerCase(),r=(0,j.filter)(l,(function(e){return e.director.firstname.toLowerCase().includes(n)||e.director.lastname.toLowerCase().includes(n)}));U(r)}}),(0,c.jsx)("div",{className:"mainPadding",children:L&&(0,j.map)(L,(function(e){return(0,c.jsx)("div",{className:"pb-4",children:(0,c.jsx)(d,{market:e})},(0,j.uniqueId)("markets"))}))})]})}}}]);
//# sourceMappingURL=2664.48fee600.chunk.js.map