"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[5121],{2543:function(e,t,n){n.d(t,{Z:function(){return i}});n(2791);var a=n.p+"static/media/Excel.3a5a1731280185e0e4ae99ee0a4eebfc.svg",r=n(3168),s=n(184);var i=function(e){var t=e.onClick,n=(0,r.$)(["common"]).t;return(0,s.jsxs)("button",{className:"exportButton",onClick:t,children:[n("Eksport"),(0,s.jsx)("span",{className:"btn-icon bg-white-900 p-[8px]",children:(0,s.jsx)("img",{src:a,alt:"excel icon"})})]})}},7667:function(e,t,n){n(2791);var a=n(1087),r=n(71),s=n(184);t.Z=function(e){var t=e.link;return(0,s.jsx)(a.rU,{to:t,className:"linktoback",children:(0,s.jsx)(r.dUf,{})})}},5692:function(e,t,n){n.d(t,{Z:function(){return j}});var a=n(71),r=(n(2791),n(184)),s=function(e){var t=e.onClick,n=e.text,s=e.type,i=e.active,l={cash:(0,r.jsx)(a.OR0,{className:"paymentsstyle",size:"1.3125rem"}),card:(0,r.jsx)(a.RjO,{className:"paymentsstyle",size:"1.3125rem"}),transfer:(0,r.jsx)(a.g2P,{className:"paymentsstyle",size:"1.3125rem"}),mixed:(0,r.jsx)(a.qTT,{className:"paymentsstyle",size:"1.3125rem"})};return(0,r.jsxs)("button",{onClick:function(){return t(s)},className:"salestyle ".concat(i?"bg-primary-700 text-white-900":"bg-[#E9ECEB]"),children:[l[s],n]})},i=function(e){var t=e.onClick,n=e.text,s=e.onDoubleClick;return(0,r.jsxs)("button",{onClick:t,onDoubleClick:s,className:"paymentstyle grow",children:[(0,r.jsx)(a.Q84,{className:"paystyle",size:"1.3125rem"}),n]})},l=n(9434),o=n(7146),c=n(1413),u=n(1188),d=function(e){return(0,r.jsx)(u.c.DropdownIndicator,(0,c.Z)((0,c.Z)({},e),{},{children:(0,r.jsx)(a.lmx,{size:"0.625rem"})}))},m={control:function(e){return(0,c.Z)((0,c.Z)({},e),{},{borderTopRightRadius:".125rem",borderBottomRightRadius:".125rem",borderTopLeftRadius:"0",borderBottomLeftRadius:"0",fontSize:"0.75rem",fontWeight:"400",padding:"0.375rem 0.3125rem",color:"#071F45",outline:"none",border:"none",boxShadow:"none",cursor:"pointer",height:"100%",backgroundColor:"#F79009",minHeight:"100%","&:hover":{backgroundColor:"#DC6803"}})},container:function(e){return(0,c.Z)((0,c.Z)({},e),{},{height:"100%",position:"absolute",right:0,width:"3rem",top:0,bottom:0})},option:function(e,t){var n=t.isFocused,a=t.isSelected;return(0,c.Z)((0,c.Z)({},e),{},{fontSize:".75rem",fontWeight:"400",color:a||n?"#ffffff":"#071F45",backgroundColor:a?"#0090A3":n?"#00B4CC":"#ffffff",transition:"all 0.2s ease",overflow:"hidden",cursor:"pointer",textAlign:"center"})},menu:function(e){return(0,c.Z)((0,c.Z)({},e),{},{overflow:"hidden"})},singleValue:function(e){return(0,c.Z)((0,c.Z)({},e),{},{fontSize:".75rem",fontWeight:"400",color:"#ffffff",margin:0,textAlign:"center"})},valueContainer:function(e){return(0,c.Z)((0,c.Z)({},e),{},{padding:0})},indicatorsContainer:function(e){return(0,c.Z)({},e)},dropdownIndicator:function(e){return(0,c.Z)((0,c.Z)({},e),{},{padding:0,color:"#ffffff"})}};var p=function(e){var t=e.value,n=e.onChange,a=e.option,s=e.onSelect,i=(0,l.v9)((function(e){return e.currency})).currencyType,c=[{value:i,label:i},{value:"%",label:"%"}];return(0,r.jsxs)("div",{className:"flex w-[11.75rem] border border-warning-500 rounded-[0.25rem] outline outline-transparent outline-0 focus-within:outline-2 focus-within:outline-warning-500 transition-all ease-in-out duration-100 relative",children:[(0,r.jsx)("input",{className:"w-[8.6875rem] placeholder-blue-200 py-[0.3125rem] px-[.3125rem] rounded-l-[0.25rem] outline-0 text-sm text-right transition-all ease-in-out duration-100",placeholder:"misol: 100 000 000",type:"number",value:t,onChange:function(e){n(e.target.value)},onWheel:function(e){return e.target.blur()},min:0}),"/>",(0,r.jsx)(o.ZP,{onChange:s,styles:m,isSearchable:!1,value:a,options:c,components:{IndicatorSeparator:function(){return null},DropdownIndicator:d}})]})},h=function(e){var t=e.value,n=e.onChange,a=e.option,s=e.onSelect;return(0,r.jsxs)("div",{className:"flex justify-between w-full items-center mb-[1rem]",children:[(0,r.jsx)("div",{className:"text-black-700 text-[0.875rem]",children:"Chegirma :"}),(0,r.jsx)(p,{onChange:n,onSelect:s,value:t,option:a})]})},f=n(4952),x=function(e){var t=e.onClick;return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("button",{onClick:t,className:"exitbtn",children:(0,r.jsx)(a.Lp2,{size:"0.75rem"})})})};var b=function(e){var t=e.mix,n=e.value,a=e.onChange,s=e.label,i=e.onClose,l=e.keyInput,o=e.placeholder,c=e.type;return(0,r.jsxs)("li",{className:"custom-payment-ul-li",children:[(0,r.jsxs)("span",{className:"custom-payment-text-style",children:[s," :"]}),(0,r.jsxs)("div",{className:"flex items-center w-[11.75rem] gap-[0.625rem]",children:[(0,r.jsx)(f.Z,{placeholder:o||"misol: 100 000 000",type:c||"number",value:n,onChange:function(e){a(e.target.value,l)}}),t&&(0,r.jsx)(x,{onClick:function(){return i(l)}})]})]})},v=n(8825),g=n(7689),y=n(2932),N=n(7584);var j=function(e){var t=e.returned,n=e.active,o=e.togglePaymentModal,c=e.type,u=void 0===c?"cash":c,d=e.cash,m=void 0===d?"":d,p=e.card,f=void 0===p?"":p,x=e.transfer,j=void 0===x?"":x,C=e.discount,k=e.hasDiscount,S=e.debt,Z=e.allPayment,w=e.allPaymentUzs,z=e.paid,D=void 0===z?0:z,U=e.client,P=void 0===U?"":U,T=e.onChange,q=e.onClose,I=e.changePaymentType,L=e.discountSelectOption,R=(e.handleClickDiscountBtn,e.handleChangeDiscountSelectOption),E=e.handleChangeDiscount,_=(e.exchangerate,e.handleClickPay),B=e.saleComment,H=e.changeComment,M=e.onDoubleClick,O=e.paymentUsd,A=void 0===O?"":O,F=e.debtuzs,Q=e.debtType,X=e.setDebtType,J=(0,g.TH)(),K=function(){switch(u){case"card":return(0,r.jsx)(b,{value:f,keyInput:u,onChange:T,onClose:q,label:(0,v.t)("Plastik")},"sale-card1");case"transfer":return(0,r.jsx)(b,{value:j,keyInput:u,onChange:T,onClose:q,label:(0,v.t)("O`tkazma")},"sale-transfer");case"mixed":return[{label:(0,v.t)("Naqd"),key:"cash",value:m},{label:(0,v.t)("Plastik"),key:"card",value:f},{label:(0,v.t)("O`tkazma"),key:"transfer",value:j}].map((function(e){return(0,r.jsx)(b,{value:e.value,keyInput:e.key,onChange:T,onClose:q,label:(0,v.t)(e.label)},"sale-".concat(e.key))}));default:return J.pathname.includes("/kassa/debts")?"sum"===Q?(0,r.jsx)(b,{value:m,onChange:T,keyInput:u,onClose:q,label:(0,v.t)("Naqd")},"sale-cash"):(0,r.jsx)(b,{value:A,onChange:T,keyInput:"usd",onClose:q,label:(0,v.t)("USD")},"sale-usd"):(0,r.jsxs)(r.Fragment,{children:["mixed"!==u&&(0,r.jsx)(b,{value:A,onChange:T,keyInput:"usd",onClose:q,label:(0,v.t)("USD")},"sale-usd"),(0,r.jsx)(b,{value:m,onChange:T,keyInput:u,onClose:q,label:(0,v.t)("Naqd")},"sale-cash")]})}},W=(0,l.v9)((function(e){return e.currency})).currencyType;return(0,r.jsxs)("section",{className:"absolute transition-all left-0 top-0 right-0 bottom-0 overflow-hidden duration-200 ease-out bg-black-300 backdrop-blur-[3px] z-20 ".concat(n?"opacity-100 pointer-events-auto":"opacity-0 pointer-events-none"),onClick:o,children:[(0,r.jsx)("h3",{className:"text-white-900 text-lg leading-[1.875rem absolute top-[50%] left-[35%] -translate-x-[50%]",children:(0,v.t)("Oynani yopish uchun bu yerga bosing !")}),(0,r.jsxs)("div",{className:"customerPay-head-style transition-all duration-200 ease-linear h-full overflow-auto absolute top-0 bottom-0 right-0 ".concat(n?"translate-x-0":"translate-x-full"),onClick:function(e){return e.stopPropagation()},autoFocus:!0,children:[(0,r.jsxs)("div",{className:"top-payment w-full",children:[P&&(0,r.jsxs)("div",{className:"customer-head-icon",children:[(0,r.jsxs)("div",{className:"flex items-center custom-payment-text-style",children:[(0,r.jsx)(a.J4e,{className:"mr-[0.75rem]"}),(0,r.jsxs)("span",{children:[(0,v.t)("Mijoz")," : "]})]}),(0,r.jsx)("h3",{className:"text-[0.875rem]",children:P})]}),(0,r.jsx)("div",{className:"mb-[1.25rem] font-medium text-[1.25rem] text-center leading-[23.44px]",children:J.pathname.includes("/kassa/debts")&&"dollar"===Q?Z+" USD":w+" UZS"}),(0,r.jsxs)("ul",{className:"w-full pb-[1.25rem]",children:[!t&&K(),(J.pathname.includes("/kassa/debts")||J.pathname.includes("/qarzdorlar")||J.pathname.includes("/maxsulotlar/qabul/qabulqilish")||J.pathname.includes("/maxsulotlar/qabul/qabullar"))&&K(),(0,r.jsx)(b,{value:B,keyInput:u,onChange:H,onClose:q,label:(0,v.t)("Izoh"),placeholder:(0,v.t)("misol: qarzga olindi"),type:"text"},"sale-card"),k&&(0,r.jsx)(h,{value:C,onChange:E,option:L,onSelect:R}),J.pathname.includes("/kassa/debts")?"sum"===Q?(0,r.jsxs)("li",{className:"custom-payment-ul-li",children:[(0,r.jsxs)("span",{className:"custom-payment-text-style",children:[(0,v.t)("Qarzlar")," :"," "]}),(0,r.jsxs)("h3",{className:"text-error-500 text-[1rem]",children:[F," UZS"]})]}):(0,r.jsxs)("li",{className:"custom-payment-ul-li",children:[(0,r.jsxs)("span",{className:"custom-payment-text-style",children:[(0,v.t)("Qarzlar")," :"," "]}),(0,r.jsxs)("h3",{className:"text-error-500 text-[1rem]",children:[(0,N.Y2)(S)," USD ",(0,r.jsx)("br",{}),(0,r.jsx)("br",{})]})]}):(0,r.jsxs)("li",{className:"custom-payment-ul-li",children:[(0,r.jsxs)("span",{className:"custom-payment-text-style",children:[(0,v.t)("Qarzlar")," :"," "]}),(0,r.jsxs)("h3",{className:"text-error-500 text-[1rem]",children:[(0,N.Y2)(S)," USD ",(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),F," UZS"]})]}),(0,r.jsxs)("li",{className:"custom-payment-ul-li",children:[(0,r.jsxs)("span",{className:"custom-payment-text-style",children:[(0,v.t)("Qarz")," :"," "]}),(0,r.jsxs)("h3",{className:"text-error-500 text-[1rem] flex items-center gap-2",children:[(0,r.jsx)(y.Z,{id:"debt",onChange:function(){return X("dollar")},value:"dollar"===Q,label:(0,v.t)("USD")}),(0,r.jsx)(y.Z,{id:"debt2",onChange:function(){return X("sum")},value:"sum"===Q,label:(0,v.t)("UZS")})]})]}),(0,r.jsxs)("li",{className:"custom-payment-ul-li",children:[(0,r.jsxs)("span",{className:"custom-payment-text-style",children:[Z<0?(0,v.t)("Qaytarilayotgan"):(0,v.t)("To`lanayotgan")," ",":"," "]}),(0,r.jsxs)("h3",{className:"text-[1rem] text-loginButton",children:[D.toLocaleString("ru-Ru")," ",W]})]})]})]}),(0,r.jsxs)("div",{className:"bottom-payment w-full flex flex-col gap-[1.25rem] border-t-[1px] border-black-200 pt-[1.25rem]",children:[(0,r.jsxs)("div",{className:"custom-paymet-btn",children:[(0,r.jsx)(s,{text:(0,v.t)("Naqd"),type:"cash",active:"cash"===u,onClick:I}),(0,r.jsx)(s,{text:(0,v.t)("Plastik"),type:"card",active:"card"===u,onClick:I}),(0,r.jsx)(s,{text:(0,v.t)("O'tkazma"),type:"transfer",active:"transfer"===u,onClick:I}),!t&&(0,r.jsx)(s,{text:(0,v.t)("Aralash"),type:"mixed",active:"mixed"===u,onClick:I})]}),(0,r.jsx)(i,{text:(0,v.t)("To'lash"),onClick:_,onDoubleClick:M})]})]})]})}},7795:function(e,t,n){n(2791);var a=n(3168),r=n(184);t.Z=function(e){var t=e.connectors,n=e.styles,s=e.currencyType,i=(0,a.$)(["common"]).t;return(0,r.jsxs)("div",{className:"productTypeBlock ".concat(n),children:[(0,r.jsxs)("div",{className:"productType",children:[i("Maxsulotlar soni:")," ",(0,r.jsx)("span",{className:"ml-[0.5rem] font-[400] text-black-900",children:t.reduce((function(e,t){return e+t.products}),0).toLocaleString("ru-RU")})]}),(0,r.jsxs)("div",{className:"productSumAll",children:[i("Jami")," :"," ",(0,r.jsxs)("span",{className:"ml-[0.5rem] font-[400] text-black-900",children:[t.length>0?"USD"===s?t.reduce((function(e,t){return e+t.totalprice}),0).toLocaleString("ru-RU"):t.reduce((function(e,t){return e+t.totalpriceuzs}),0).toLocaleString("ru-RU"):0," ",s]})]})]})}},8405:function(e,t,n){n.r(t),n.d(t,{default:function(){return w}});var a=n(3433),r=n(1413),s=n(7762),i=n(9439),l=n(2791),o=n(9434),c=n(7689),u=n(2543),d=n(184),m=function(e){var t=e.products,n=e.deliver,a=e.date,r=e.pieces,s=e.onClick,i=e.debt,l=void 0===i?0:i,c=e.debtUzs,u=void 0===c?0:c,m=e.paid,p=void 0===m?0:m,h=e.paidUzs,f=void 0===h?0:h,x=e.all,b=void 0===x?0:x,v=e.allUzs,g=void 0===v?0:v,y=e.onClickPayDebt,N=e.id,j=e.time,C=(0,o.v9)((function(e){return e.currency})).currencyType;return(0,d.jsxs)("div",{onClick:s,className:"flex-[0_0_23.5%] cardStyle",children:[(0,d.jsx)("h1",{className:"headerStyle",children:n}),(0,d.jsxs)("div",{className:"text-[.875rem] mt-[1rem] text-center",children:[(0,d.jsxs)("div",{className:"numberCard",children:[(0,d.jsx)("p",{className:"paragrafCard",children:"Maxsulot turlari:"}),(0,d.jsx)("p",{children:t.toLocaleString("ru-Ru")})]}),(0,d.jsxs)("div",{className:"numberCard",children:[(0,d.jsx)("p",{className:"paragrafCardBtn",children:"Maxsulotlar soni"}),(0,d.jsx)("p",{children:r.toLocaleString("ru-Ru")})]}),(0,d.jsxs)("div",{className:"numberCard",children:[(0,d.jsx)("p",{className:"paragrafCard",children:"Sana:"}),(0,d.jsx)("p",{children:a})]}),(0,d.jsxs)("div",{className:"numberCard",children:[(0,d.jsx)("p",{className:"paragrafCard",children:"Vaqti:"}),(0,d.jsx)("p",{className:"text-warning-200",children:j})]}),(0,d.jsx)("span",{className:"block h-[1px] bg-white-400 my-[0.5rem]"}),(0,d.jsxs)("div",{className:"numberCard items-center",children:[(0,d.jsx)("p",{className:"paragrafCard",children:"Umumiy :"}),(0,d.jsxs)("span",{className:"block p-[0.1rem_0.5rem] rounded-[4px] bg-primary-700",children:["UZS"===C?g:b," ",(0,d.jsx)("span",{children:C})]})]}),(0,d.jsxs)("div",{className:"numberCard items-center",children:[(0,d.jsx)("p",{className:"paragrafCard",children:"To'langan :"}),(0,d.jsxs)("span",{className:"block p-[0.1rem_0.5rem] rounded-[4px] bg-success-500",children:["UZS"===C?f:p," ",(0,d.jsx)("span",{children:C})]})]}),0!==l&&(0,d.jsxs)("div",{className:"numberCard items-center",children:[(0,d.jsx)("p",{className:"paragrafCard",children:"Qarzlar :"}),(0,d.jsxs)("span",{className:"block p-[0.2rem_0.5rem] rounded-[4px] bg-error-500",children:["UZS"===C?u.toLocaleString("ru-Ru"):l.toLocaleString("ru-Ru")," ",(0,d.jsx)("span",{children:C})]})]}),0!==l&&(0,d.jsx)("button",{className:"mt-[1rem] p-[.5rem_1rem] rounded-[1rem] text-center bg-error-500 text-white-900 hover:bg-warning-500 duration-200 active:scale-95 shadow-[0_0_10px_rgba(255,255,255,0.2)] active:shadow-none",onClick:function(e){y({debt:l,debtUzs:u,deliver:n,id:N}),e.stopPropagation()},children:"Qarzni to'lash"})]})]})},p=n(7667),h=n(5077),f=n(7795),x=n(5121),b=n(7584),v=n(2987),g=n(763),y=n(2230),N=n(3168),j=n(5692),C=n(2106),k=n(1295),S=n(9078),Z=n(4232),w=function(){var e=(0,N.$)(["common"]).t,t=(0,o.I0)(),n=(0,o.v9)((function(e){return e.login})),w=n.market._id,z=n.user,D=(0,o.v9)((function(e){return e.incoming})),U=D.incomings,P=D.incomingscount,T=D.incomingconnectors,q=D.successUpdate,I=D.successDelete,L=D.loadingExcel,R=(0,o.v9)((function(e){return e.currency})),E=R.currencyType,_=R.currency,B=(0,c.TH)().state,H=B.date,M=B.supplier,O=new Date(new Date(H).setHours(3,0,0,0)).toISOString(),A=new Date(new Date(H).setHours(26,59,59,59)).toISOString(),F=(0,l.useState)(0),Q=(0,i.Z)(F,2),X=Q[0],J=Q[1],K=(0,l.useState)(10),W=(0,i.Z)(K,2),Y=W[0],$=W[1],V=(0,l.useState)({name:"",code:"",supplier:M}),G=(0,i.Z)(V,2),ee=G[0],te=G[1],ne=(0,l.useState)({name:"",code:"",supplier:M}),ae=(0,i.Z)(ne,2),re=ae[0],se=ae[1],ie=(0,l.useState)({filter:"",sort:"",count:0}),le=(0,i.Z)(ie,2),oe=le[0],ce=le[1],ue=(0,l.useState)([]),de=(0,i.Z)(ue,2),me=de[0],pe=de[1],he=(0,l.useState)([]),fe=(0,i.Z)(he,2),xe=fe[0],be=fe[1],ve=(0,l.useState)([]),ge=(0,i.Z)(ve,2),ye=ge[0],Ne=ge[1],je=(0,l.useState)([]),Ce=(0,i.Z)(je,2),ke=Ce[0],Se=Ce[1],Ze=(0,l.useState)({}),we=(0,i.Z)(Ze,2),ze=we[0],De=we[1],Ue=(0,l.useState)(""),Pe=(0,i.Z)(Ue,2),Te=Pe[0],qe=Pe[1],Ie=(0,l.useState)(!1),Le=(0,i.Z)(Ie,2),Re=Le[0],Ee=Le[1],_e=(0,l.useState)("cash"),Be=(0,i.Z)(_e,2),He=Be[0],Me=Be[1],Oe=(0,l.useState)(""),Ae=(0,i.Z)(Oe,2),Fe=Ae[0],Qe=Ae[1],Xe=(0,l.useState)(""),Je=(0,i.Z)(Xe,2),Ke=Je[0],We=Je[1],Ye=(0,l.useState)(""),$e=(0,i.Z)(Ye,2),Ve=$e[0],Ge=$e[1],et=(0,l.useState)(""),tt=(0,i.Z)(et,2),nt=tt[0],at=tt[1],rt=(0,l.useState)(""),st=(0,i.Z)(rt,2),it=st[0],lt=st[1],ot=(0,l.useState)(""),ct=(0,i.Z)(ot,2),ut=ct[0],dt=ct[1],mt=(0,l.useState)(0),pt=(0,i.Z)(mt,2),ht=pt[0],ft=pt[1],xt=(0,l.useState)(0),bt=(0,i.Z)(xt,2),vt=bt[0],gt=bt[1],yt=(0,l.useState)(0),Nt=(0,i.Z)(yt,2),jt=Nt[0],Ct=Nt[1],kt=(0,l.useState)(0),St=(0,i.Z)(kt,2),Zt=St[0],wt=St[1],zt=(0,l.useState)(0),Dt=(0,i.Z)(zt,2),Ut=Dt[0],Pt=Dt[1],Tt=(0,l.useState)(0),qt=(0,i.Z)(Tt,2),It=qt[0],Lt=qt[1],Rt=(0,l.useState)("approve"),Et=(0,i.Z)(Rt,2),_t=Et[0],Bt=Et[1],Ht=(0,l.useState)(!1),Mt=(0,i.Z)(Ht,2),Ot=Mt[0],At=Mt[1],Ft=(0,l.useState)(_),Qt=(0,i.Z)(Ft,2),Xt=Qt[0],Jt=Qt[1],Kt=(0,l.useState)(""),Wt=(0,i.Z)(Kt,2),Yt=Wt[0],$t=Wt[1],Vt=(0,l.useState)(""),Gt=(0,i.Z)(Vt,2),en=Gt[0],tn=Gt[1],nn=(0,l.useState)(""),an=(0,i.Z)(nn,2),rn=an[0],sn=an[1],ln=null,on=(0,l.useCallback)((function(e){var t,n,a=[],i=(0,s.Z)(e);try{for(i.s();!(t=i.n()).done;){var l=t.value,o={_id:l._id,createdAt:new Date(l.createdAt).toLocaleDateString(),time:new Date(l.createdAt).toLocaleTimeString("ru-RU",{hour:"2-digit",minute:"2-digit",hourCycle:"h24"}),supplier:(0,r.Z)({},l.supplier),products:l.incoming.length,pieces:(n=l.incoming,n.reduce((function(e,t){return e+t.pieces}),0)),totalprice:l.total,totalpriceuzs:l.totaluzs,totalpayment:l.totalpayment,totalpaymentuzs:l.totalpaymentuzs,debt:l.debt,debtuzs:l.debtuzs};a.push(o)}}catch(c){i.e(c)}finally{i.f()}pe(a)}),[]),cn=function(){ye.some((function(e){return e.pieces===ze.pieces&&e.unitprice===ze.unitprice&&e.sellingprice===ze.sellingprice}))?De({}):t((0,x.NP)({market:w,startDate:O,endDate:A,product:(0,r.Z)({},ze)}))},un=(0,l.useCallback)((function(){t((0,x.eT)({market:w,beginDay:O,endDay:A,currentPage:X,countPage:Y,search:ee}))}),[t,w,O,A,X,Y,ee]),dn=(0,l.useCallback)((function(){t((0,x.FN)({market:w,beginDay:O,endDay:A}))}),[t,w,O,A]),mn=function(){At(!Ot),setTimeout((function(){Bt(""),qe({})}),500)},pn=function(e){return Math.round(1e3*e)/1e3},hn=function(e){return Math.round(e)},fn=function(e){Ee(e?!Re:e),Me("cash"),ft(0),gt(0)},xn=function(e,t){var n=Math.abs(jt),a=Math.abs(Zt);if("USD"===E)if("cash"===t){var r=Number(e)+Number(Ve)+Number(it),s=Number((0,b.uX)(e,Xt))+Number(nt)+Number(ut);r<=n?(Qe(e),We((0,b.uX)(e,Xt)),ft(pn(n-r)),gt(hn(a-s)),Pt(r),Lt(s)):(0,C.bH)()}else if("card"===t){var i=Number(e)+Number(Fe)+Number(it),l=Number(Ke)+Number((0,b.uX)(e,Xt))+Number(ut);i<=n?(Ge(e),at((0,b.uX)(e,Xt)),ft(pn(n-i)),gt(hn(a-l)),Pt(i),Lt(l)):(0,C.bH)()}else{var o=Number(e)+Number(Fe)+Number(Ve),c=Number(Ke)+Number(nt)+Number((0,b.uX)(e,Xt));o<=n?(lt(e),dt((0,b.uX)(e,Xt)),ft(pn(n-o)),gt(hn(a-c)),Pt(o),Lt(c)):(0,C.bH)()}else if("cash"===t){var u=Number(e)+Number(nt)+Number(ut),d=Number((0,b.Nt)(e,Xt))+Number(Ve)+Number(it);u<=a?(We(e),Qe((0,b.Nt)(e,Xt)),ft(pn(n-d)),gt(hn(a-u)),Pt(d),Lt(u)):(0,C.bH)()}else if("card"===t){var m=Number(e)+Number(Ke)+Number(ut),p=Number(Fe)+Number((0,b.Nt)(e,Xt))+Number(it);m<=a?(Ge((0,b.Nt)(e,Xt)),at(e),ft(pn(n-p)),gt(hn(a-m)),Pt((0,b.Nt)(m,Xt)),Lt(m)):(0,C.bH)()}else{var h=Number(e)+Number(Ke)+Number(nt),f=Number(Fe)+Number(Ve)+Number((0,b.Nt)(e,Xt));h<=a?(lt((0,b.Nt)(e,Xt)),dt(e),ft(pn(n-f)),gt(hn(a-h)),Pt(f),Lt(h)):(0,C.bH)()}},bn=function(e){var t=e.debt,n=e.debtUzs;tn(e.deliver),sn(e.id),Ct(t),wt(n),Qe(t),We(n),Pt(t),Lt(n),Ee(!0),Jt(hn(n/t)),Ee(!0)},vn=function(){var e=function(e){return e<0&&e||-1*e},n={payment:{payment:Number(jt<0?e(Fe):Fe)+Number(jt<0?e(Ve):Ve)+Number(jt<0?e(it):it),paymentuzs:Number(jt<0?e(Ke):Ke)+Number(jt<0?e(nt):nt)+Number(jt<0?it<0&&e(ut):ut),type:He,cash:Number(jt<0?e(Fe):Fe),cashuzs:Number(Zt<0?e(Ke):Ke),card:Number(jt<0?e(Ve):Ve),carduzs:Number(jt<0?e(nt):nt),transfer:Number(jt<0?e(it):it),transferuzs:Number(jt<0?e(ut):ut),comment:Yt},user:z._id,incomingconnectorid:rn};t((0,x.Yt)(n)).then((function(e){e.error||(t((0,x.FN)({market:w,beginDay:O,endDay:A})),At(!1),Bt(""),fn())}))};(0,l.useEffect)((function(){un()}),[un]),(0,l.useEffect)((function(){q&&(un(),dn(),De({}),t((0,x.qd)()))}),[t,un,dn,q]),(0,l.useEffect)((function(){I&&(un(),t((0,x.LG)()))}),[t,un,I]),(0,l.useEffect)((function(){dn()}),[dn]),(0,l.useEffect)((function(){on(T)}),[T,on]),(0,l.useEffect)((function(){!function(e){var t=(0,g.map)(e,(function(e){return(0,r.Z)((0,r.Z)({},e),{},{sellingprice:e.product.price.sellingprice,sellingpriceuzs:e.product.price.sellingpriceuzs})}));be(t),Ne(t),Se(t)}(U)}),[U]);var gn=[{title:"\u2116"},{title:e("Yetkazuvchi"),styles:"w-[10%]"},{title:e("Kodi"),filter:"product.productdata.code",styles:"w-[7%]"},{title:e("Nomi"),filter:"product.productdata.name"},{title:e("Soni"),styles:"w-[10%]"},{title:e("Kelish"),styles:"w-[10%]"},{title:e("Jami"),styles:"w-[15%]"},{title:e("Sotish"),styles:"w-[10%]"},{title:"",styles:"w-[5%]"}];return(0,d.jsxs)("div",{className:"relative grow overflow-hidden",children:[L&&(0,d.jsx)("div",{className:"fixed backdrop-blur-[2px] z-[100] left-0 top-0 right-0 bottom-0 bg-white-700 flex flex-col items-center justify-center w-full h-full",children:(0,d.jsx)(Z.Z,{})}),(0,d.jsx)(j.Z,{returned:!0,type:He,active:Re,togglePaymentModal:fn,changePaymentType:function(e){if(He!==e)switch(Me(e),e){case"cash":Qe(jt),We(Zt),Ge(""),at(""),lt(""),dt(""),Pt(jt),Lt(Zt),ft(0),gt(0);break;case"card":Ge(jt),at(Zt),Qe(""),We(""),lt(""),dt(""),Pt(jt),Lt(Zt),ft(0),gt(0);break;case"transfer":lt(jt),dt(Zt),Qe(""),We(""),Ge(""),at(""),Pt(jt),Lt(Zt),ft(0),gt(0);break;default:Qe(""),We(""),Ge(""),at(""),lt(""),dt(""),Pt(0),Lt(0),ft(jt),gt(Zt)}},onChange:function(e,t){xn(e,t)},client:en,allPayment:"USD"===E?jt:Zt,card:"USD"===E?Ve:nt,cash:"USD"===E?Fe:Ke,debt:"USD"===E?ht:vt,hasDiscount:!1,transfer:"USD"===E?it:ut,paid:"USD"===E?Ut:It,handleClickPay:function(){null===ln&&(ln=window.setTimeout((function(){ln=null,Bt("complete"),At(!0)}),300))},changeComment:function(e){$t(e)},saleComment:Yt,onDoubleClick:function(){window.clearTimeout(ln),ln=null,vn()}}),(0,d.jsxs)("div",{className:"absolute left-0 right-0 top-0 bottom-0 overflow-auto",children:[(0,d.jsxs)("div",{className:"flex items-center justify-between mainPadding",children:[(0,d.jsx)(p.Z,{link:"/maxsulotlar/qabul/qabullar"}),(0,d.jsx)(f.Z,{connectors:me,currencyType:E})]}),(0,d.jsx)("div",{className:"flex flex-wrap gap-[2.5rem_2%] mainPadding",children:me.length>0&&(0,g.map)(me,(function(e){return(0,d.jsx)(m,{date:e.createdAt,time:e.time,deliver:e.supplier.name,products:e.products,pieces:e.pieces,debt:e.debt,debtUzs:e.debtuzs,paid:e.totalpayment,paidUzs:e.totalpaymentuzs,all:e.totalprice,allUzs:e.totalpriceuzs,onClickPayDebt:bn,id:e._id,onClick:function(){return function(e){var t=(0,g.filter)(xe,(function(t){return t.incomingconnector===e}));Ne(t),Se(t)}(e._id)}},(0,g.uniqueId)("card"))}))}),ye.length?(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)("div",{className:"mainPadding flex items-center justify-between",children:[(0,d.jsx)(u.Z,{onClick:function(){var n="Maxsulotlar-qabul-qabullar - ".concat((new Date).toLocaleDateString()),a=["\u2116",e("Yetkazuvchi"),e("Kodi"),e("Nomi"),e("Soni"),e("Kelish UZS"),e("Kelish USD"),e("Jami UZS"),e("Jami USD")],r={beginDay:O,endDay:A};t((0,x.vi)(r)).then((function(e){var t=e.error,r=e.payload;if(!t)if((null===r||void 0===r?void 0:r.length)>0){var s=(0,g.map)(r,(function(e,t){var n,a,r,s,i,l;return{nth:t+1,supplier:(null===e||void 0===e||null===(n=e.supplier)||void 0===n?void 0:n.name)||"",code:(null===e||void 0===e||null===(a=e.product)||void 0===a||null===(r=a.productdata)||void 0===r?void 0:r.code)||"",name:(null===e||void 0===e||null===(s=e.product)||void 0===s||null===(i=s.productdata)||void 0===i?void 0:i.name)||"",count:(null===e||void 0===e?void 0:e.pieces)+" "+(null===e||void 0===e||null===(l=e.unit)||void 0===l?void 0:l.name)||"",unit:(null===e||void 0===e?void 0:e.unitpriceuzs)||"",unitusd:(null===e||void 0===e?void 0:e.unitprice)||"",all:(null===e||void 0===e?void 0:e.totalpriceuzs)||"",allusd:(null===e||void 0===e?void 0:e.totalprice)||""}}));(0,b.rD)(s,n,a)}else(0,C.Ug)("Jadvalda ma'lumot mavjud emas !","warning")}))}}),(0,d.jsx)("span",{children:"Ro`yxat"}),(0,d.jsx)(h.Z,{currentPage:X,setCurrentPage:J,countPage:Y,totalDatas:P})]}),(0,d.jsx)(v.Z,{filterBy:["total","code","name"],filterByName:function(e){var t=e.target.value.toLowerCase();Ne((0,a.Z)((0,g.filter)((0,a.Z)(ke),(function(e){return e.product.productdata.name.toLowerCase().includes(t)})))),se((0,r.Z)((0,r.Z)({},re),{},{name:t}))},filterByTotal:function(e){return $(e.value)},filterByCode:function(e){var t=e.target.value.toLowerCase();Ne((0,a.Z)((0,g.filter)((0,a.Z)(ke),(function(e){return e.product.productdata.code.includes(t)})))),se((0,r.Z)((0,r.Z)({},re),{},{code:t}))},filterByCodeAndNameAndCategoryWhenPressEnter:function(e){"Enter"===e.key&&te(re)}}),(0,d.jsx)("div",{className:"tableContainerPadding",children:(0,d.jsx)(S.Z,{page:"incomings",headers:gn,data:ye,currentPage:X,countPage:Y,currency:E,editedIncoming:ze,Edit:function(e){De(e)},changeHandler:function(e,t){var n=Number(e.target.value),a=(0,r.Z)({},ze),s=function(e){return t===e},i="USD"===E?n:(0,b.Nt)(n,_),l="UZS"===E?n:(0,b.uX)(n,_);s("pieces")&&(a.pieces=n,a.totalprice=n*a.unitprice,a.totalpriceuzs=n*a.unitpriceuzs),s("unitprice")&&(a.unitprice=i,a.unitpriceuzs=l,a.totalprice=i*a.pieces,a.totalpriceuzs=l*a.pieces),s("sellingprice")&&(a.sellingprice=i,a.sellingpriceuzs=l),De(a)},saveEditIncoming:cn,Delete:function(e){return function(e){qe(e),At(!0),Bt("approve")}(e)},Sort:function(e){if(e===oe.filter)switch(oe.count){case 1:ce({filter:e,sort:"1",count:2}),(0,b.ki)(ye,Ne,e,1,ke);break;case 2:ce({filter:e,sort:"",count:0}),(0,b.ki)(ye,Ne,e,"",ke);break;default:ce({filter:e,sort:"-1",count:1}),(0,b.ki)(ye,Ne,e,-1,ke)}else ce({filter:e,sort:"-1",count:1}),(0,b.ki)(ye,Ne,e,-1,ke)},onKeyUp:function(e){"Enter"===e.key&&cn()},sortItem:oe})})]}):(0,d.jsx)(k.Z,{text:"Qabullar mavjud emas..."}),(0,d.jsx)(y.Z,{body:_t,isOpen:Ot,headerText:e("complete"===_t?"To'lovni amalga oshirishni tasdiqlaysizmi ?":"Mahsulotni o`chirishni tasdiqlaysizmi?"),title:e("complete"===_t?"To'lovni amalga oshirgach bu ma`lumotlarni o`zgaritirb bo`lmaydi !":"O`chirilgan mahsulotni tiklashning imkoni mavjud emas!"),approveFunction:"complete"===_t?vn:function(){t((0,x.H4)({market:w,beginDay:O,endDay:A,product:(0,r.Z)({},Te)})),mn()},toggleModal:mn})]})]})}}}]);
//# sourceMappingURL=5121.dec3b373.chunk.js.map