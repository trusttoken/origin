(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{1642:function(e,n,t){"use strict";t.r(n);var a=t(1),r=t.n(a),c=t(0),o=t.n(c),i=t(28),l=t(476),s=t(380),u=t(860),m=t(9),d=t.n(m),p=t(7),f=t(6),b=t(23),v=t.n(b),g=t(11),h=t.n(g),y=t(76),E=t(58),k=t(5),w=t(25),N=t.n(w),O=function(e){var n=e.className,t=e.value,a=e.onChange,r=N()(Object.keys(E.a).map((function(e){return{code:e.code,title:e}})),"title");return o.a.createElement("select",{value:t,onChange:a,className:n,autoComplete:"shipping country",name:"checkout[shipping_address][country]"},o.a.createElement("option",{"data-code":"US",value:"United States"},"United States"),o.a.createElement("option",{disabled:"disabled",value:"---"},"---"),r.map((function(e,n){return o.a.createElement("option",{key:"".concat(e.code,"-").concat(n),"data-code":e.code,value:e.title},e.title)})))},S=function(e){var n=e.country,t=e.value,a=e.onChange,r=e.className;if(!n||!n.provinces)return null;var c=N()(Object.keys(n.provinces).map((function(e){return{code:e.code,title:e}})),"title");return o.a.createElement("select",{value:t,onChange:a,className:r},c.map((function(e,n){return o.a.createElement("option",{key:"".concat(e.code,"-").concat(n),"data-code":e.code,value:e.title},e.title)})))},j=t(4),x=t.n(j),C=function(){if(!Object(p.a)().config.beta)return null;var e=Object(c.useState)(),n=r()(e,2),t=n[0],a=n[1];return o.a.createElement("div",{className:"alert alert-warning beta-warning"},o.a.createElement("b",null,"Note:")," This site is in Beta and not yet accepting real credit cards or crypto currency. Please use Rinkeby for crypto transactions or click"," ",o.a.createElement("a",{href:"#test",onClick:function(e){e.preventDefault(),a(!0)}},"here")," for a test credit card number.",t?o.a.createElement("div",{className:"mt-2"},"Test Credit card: 4111-1111-1111-1111, Exp 11-21, CVC 111"):null)};function P(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function I(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?P(Object(t),!0).forEach((function(n){h()(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):P(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}t(9)("\n  .beta-warning\n    margin-top: 2rem\n    font-size: 0.875rem\n");var D=function(){var e=Object(p.a)().config,n=Object(i.g)(),t=Object(f.b)(),a=r()(t,2),l=a[0].cart,s=a[1],u=Object(c.useState)(l.userInfo||{country:"United States",province:"Alabama"}),m=r()(u,2),d=m[0],b=m[1],g=function(e){return b(I({},d,{},e))},h=Object(y.b)(d,(function(e){return g(e)})),w=Object(y.a)(d),N=E.a[d.country||"United States"];return o.a.createElement("div",{className:"checkout-information"},o.a.createElement("div",{className:"d-none d-md-block"},o.a.createElement("h3",null,e.fullTitle),o.a.createElement("div",{className:"breadcrumbs"},o.a.createElement(k.a,{to:"/cart"},"Cart"),o.a.createElement("span",null,o.a.createElement("b",null,"Information")),o.a.createElement("span",null,"Shipping"),o.a.createElement("span",null,"Payment"))),o.a.createElement("form",{onSubmit:function(e){e.preventDefault();var t=function(e){var n={};return e.email?e.email.length<3&&(n.emailError="Email is too short"):n.emailError="Enter an email address",e.firstName||(n.firstNameError="Enter a first name"),e.lastName||(n.lastNameError="Enter a last name"),e.address1||(n.address1Error="Enter an address"),e.city||(n.cityError="Enter a city"),e.zip||(n.zipError="Enter a ZIP / postal code"),{valid:Object.keys(n).every((function(e){return e.indexOf("Error")<0})),newState:I({},e,{},n)}}(d),a=t.valid,r=t.newState;g(r),a?(s({type:"updateUserInfo",info:r}),n.push({pathname:"/checkout/shipping",state:{scrollToTop:!0}})):window.scrollTo(0,0)}},o.a.createElement("div",{className:"mb-3"},o.a.createElement("b",null,"Email")),o.a.createElement("div",{className:"form-group"},o.a.createElement("input",v()({type:"email",placeholder:"Email"},h("email"))),w("email")),o.a.createElement("div",{className:"mt-4 mb-3"},o.a.createElement("b",null,"Shipping Address")),o.a.createElement("div",{className:"form-row"},o.a.createElement("div",{className:"form-group col-md-6"},o.a.createElement("input",v()({placeholder:"First Name"},h("firstName"))),w("firstName")),o.a.createElement("div",{className:"form-group col-md-6"},o.a.createElement("input",v()({placeholder:"Last Name"},h("lastName"))),w("lastName"))),o.a.createElement("div",{className:"form-group"},o.a.createElement("input",v()({placeholder:"Address"},h("address1"))),w("address1")),o.a.createElement("div",{className:"form-group"},o.a.createElement("input",v()({placeholder:"Appartment, suite, etc. (optional)"},h("address2"))),w("address2")),o.a.createElement("div",{className:"form-group"},o.a.createElement("input",v()({placeholder:"City"},h("city"))),w("city")),o.a.createElement("div",{className:"form-row"},o.a.createElement("div",{className:"form-group col-md"},o.a.createElement(O,{className:"form-control",value:d.country,onChange:function(e){var n=x()(E.a[e.target.value],"provinces");g({country:e.target.value,province:n?Object.keys(n)[0]:""})}})),N.provinces?o.a.createElement("div",{className:"form-group col-md"},o.a.createElement(S,v()({className:"form-control",country:N},h("province")))):null,o.a.createElement("div",{className:"form-group col-md"},o.a.createElement("input",v()({type:"text",className:"form-control",placeholder:x()(N,"labels.zip",E.b.labels.zip)},h("zip"))))),o.a.createElement("div",{className:"actions"},o.a.createElement(k.a,{to:"/cart"},"« Return to cart"),o.a.createElement("button",{type:"submit",className:"btn btn-primary btn-lg"},"Continue to shipping")),o.a.createElement(C,null)))};t(9)("\n");var $=t(13),A=t(3),T=t.n(A),U=t(8),R=t.n(U),M=t(12);var B=function(){var e=Object(f.b)(),n=r()(e,2),t=n[0].shippingZones,a=n[1],o=Object(c.useState)(!1),i=r()(o,2),l=i[0],s=i[1],u=Object(c.useState)(!1),m=r()(u,2),d=m[0],p=m[1];return Object(c.useEffect)((function(){function e(){return(e=R()(T.a.mark((function e(){var n,t;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s(!0),e.prev=1,e.next=4,fetch("".concat(Object(M.a)(),"shipping.json"));case 4:return n=e.sent,e.next=7,n.json();case 7:t=e.sent,s(!1),a({type:"setShippingZones",zones:t}),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(1),s(!1),p(!0);case 16:case"end":return e.stop()}}),e,null,[[1,12]])})))).apply(this,arguments)}t.length||function(){e.apply(this,arguments)}()}),[]),{shippingZones:t,loading:l,error:d}},z=function(){var e=Object(f.b)(),n=r()(e,1)[0].cart.userInfo;return n?o.a.createElement("div",{className:"info-row"},o.a.createElement("div",{className:"label"},"Contact"),o.a.createElement("div",{className:"value"},n.email),o.a.createElement(k.a,{className:"change",to:"/checkout"},"Change")):null},q=function(){var e=Object(f.b)(),n=r()(e,1)[0].cart.userInfo;if(!n)return null;var t=n.address1,a=n.city,c=n.zip,i=n.country,l=n.province?"".concat(n.province," "):"";return o.a.createElement("div",{className:"info-row"},o.a.createElement("div",{className:"label"},"Ship to"),o.a.createElement("div",{className:"value"},"".concat(t,", ").concat(a,", ").concat(l).concat(c,", ").concat(i)),o.a.createElement(k.a,{className:"change",to:"/checkout"},"Change"))},W=function(){var e=Object(p.a)().config,n=Object(f.b)(),t=r()(n,2),a=t[0].cart,i=t[1],l=B(),s=l.shippingZones,u=l.loading,m=x()(a,"userInfo.country"),d=x()(E.a,"".concat(m,".code")),b=s.find((function(e){return!e.countries})),v=s.filter((function(e){return(e.countries||[]).indexOf(d)>=0}));return!v.length&&b&&v.push(b),Object(c.useEffect)((function(){var e=x()(a,"shipping.id"),n=v.find((function(n){return n.id===e}));if(!a.shipping||!n){var t=v[0];t&&i({type:"updateShipping",zone:t})}}),[s.length]),o.a.createElement("div",{className:"checkout-shipping"},o.a.createElement("div",{className:"d-none d-md-block"},o.a.createElement("h3",null,e.fullTitle),o.a.createElement("div",{className:"breadcrumbs"},o.a.createElement(k.a,{to:"/cart"},"Cart"),o.a.createElement(k.a,{to:"/checkout"},"Information"),o.a.createElement("span",null,o.a.createElement("b",null,"Shipping")),o.a.createElement("span",null,"Payment"))),o.a.createElement("div",{className:"checkout-review-info"},o.a.createElement(z,null),o.a.createElement(q,null)),o.a.createElement("div",{className:"mt-4 mb-3"},o.a.createElement("b",null,"Shipping Method")),o.a.createElement("div",{className:"checkout-payment-method"},u?o.a.createElement("div",null,"Loading..."):null,v.map((function(e){return o.a.createElement("label",{key:e.id,className:"radio ".concat(x()(a,"shipping.id")===e.id?"active":"inactive")},o.a.createElement("input",{type:"radio",name:"shippingMethod",checked:x()(a,"shipping.id")===e.id,onChange:function(){return i({type:"updateShipping",zone:e})}}),o.a.createElement("div",null,o.a.createElement("div",null,e.label),o.a.createElement("div",{className:"description"},e.detail)),o.a.createElement("span",{className:"ml-auto"},e.amount?Object($.a)(e.amount):"Free"))}))),o.a.createElement("div",{className:"actions"},o.a.createElement(k.a,{to:"/checkout"},"« Return to information"),o.a.createElement(k.a,{to:"/checkout/payment",className:"btn btn-primary btn-lg"},"Continue to payment")),o.a.createElement(C,null))};t(9)("\n  .checkout-review-info\n    border: 1px solid #eee\n    border-radius: 0.5rem\n    padding: 0 1rem\n    .info-row\n      display: flex\n      justify-content: space-between\n      border-bottom: 1px solid #eee\n      padding: 1rem 0\n      &:last-of-type\n        border: 0\n      .label\n        color: #666\n        width: 100px\n      .value\n        flex: 1\n      .change\n        text-align: right\n        font-size: 0.75rem\n      a\n        color: #1990c6\n  @media (max-width: 767.98px)\n    .checkout-review-info\n      .info-row\n        flex-wrap: wrap\n        .label\n          width: 70%\n        .value\n          width: 100%\n          order: 3\n        .change\n          width: 30%\n");var _=t(53),K=t.n(_),G=t(573),H=t.n(G),F=t(418);function J(){return(J=R()(T.a.mark((function e(n){var t,a,r,c,o,i,l;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.backend,a=n.stripe,r=n.cart,c=n.encryptedData,o=n.listingId,e.next=3,fetch("".concat(t,"/pay"),{headers:{"content-type":"application/json"},credentials:"include",method:"POST",body:JSON.stringify({amount:Math.round(r.total),data:c.hash,listingId:o})});case 3:return i=e.sent,e.next=6,i.json();case 6:return l=e.sent,e.abrupt("return",a.handleCardPayment(l.client_secret,{payment_method_data:{billing_details:{name:"".concat(r.userInfo.firstName," ").concat(r.userInfo.lastName),email:r.userInfo.email,address:{line1:r.userInfo.address1,city:r.userInfo.city,state:r.userInfo.province,postal_code:r.userInfo.zip}}},shipping:{name:"".concat(r.userInfo.firstName," ").concat(r.userInfo.lastName),address:{line1:r.userInfo.address1,city:r.userInfo.city,state:r.userInfo.province,postal_code:r.userInfo.zip}}}));case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var Y=function(e){return J.apply(this,arguments)},V=t(90),L=t.n(V),Z=t(275);function Q(){return(Q=R()(T.a.mark((function e(n,t){var a,r,c,o,i,l,s;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.pgpPublicKey,r=context.config.ipfsRPC,e.next=4,openpgp.key.readArmored(a);case 4:return c=e.sent,o=Array.from(crypto.getRandomValues(new Uint32Array(5))),n.dataKey=o.map((function(e){return e.toString(36)})).join(""),e.next=9,openpgp.encrypt({message:openpgp.message.fromText(JSON.stringify(n)),passwords:[n.dataKey]});case 9:return i=e.sent,e.next=12,openpgp.encrypt({message:openpgp.message.fromText(JSON.stringify(n)),publicKeys:c.keys});case 12:return l=e.sent,e.next=15,Object(Z.post)(r,{data:l.data,buyerData:i.data},!0);case 15:return s=e.sent,e.abrupt("return",{hash:s,auth:n.dataKey});case 17:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var X=function(e,n){return Q.apply(this,arguments)},ee=t(328),ne=t.n(ee),te=t(308),ae=t.n(te);function re(){var e=ne()(["\n  query WalletStatus {\n    web3 {\n      networkId\n      networkName\n      walletType\n      metaMaskEnabled\n      metaMaskAvailable\n      metaMaskApproved\n      metaMaskUnlocked\n      metaMaskNetworkId\n      metaMaskNetworkName\n      metaMaskAccount {\n        id\n      }\n    }\n  }\n"]);return re=function(){return e},e}var ce=ae()(re());function oe(){var e=ne()(["\n  mutation MakeOffer(\n    $listingID: String!\n    $value: String!\n    $from: String\n    $quantity: Int!\n    $currency: String\n    $fractionalData: FractionalOfferInput\n    $shippingAddress: ShippingAddressInput\n    $autoswap: Boolean\n    $commission: String\n    $encryptedData: String\n  ) {\n    makeOffer(\n      listingID: $listingID\n      value: $value\n      from: $from\n      quantity: $quantity\n      currency: $currency\n      fractionalData: $fractionalData\n      shippingAddress: $shippingAddress\n      autoswap: $autoswap\n      commission: $commission\n      encryptedData: $encryptedData\n    ) {\n      id\n    }\n  }\n"]);return oe=function(){return e},e}var ie=ae()(oe());function le(){var e=ne()(["\n  mutation AllowToken(\n    $token: String!\n    $from: String!\n    $to: String!\n    $value: String!\n  ) {\n    updateTokenAllowance(token: $token, from: $from, to: $to, value: $value) {\n      id\n    }\n  }\n"]);return le=function(){return e},e}var se=ae()(le());function ue(){var e=ne()(["\n  query GetCurrencies {\n    currencies {\n      __typename\n      ... on Currency {\n        id\n        name\n        code\n        priceInUSD\n      }\n      ... on Token {\n        decimals\n      }\n    }\n  }\n"]);return ue=function(){return e},e}var me=ae()(ue());var de=function(e){return function(n){var t=Object(F.b)(me).data;return o.a.createElement(e,v()({},n,{currencies:x()(t,"currencies")||[]}))}},pe=t(1638),fe=t.n(pe);var be=[["fiat-USD","USD","$"],["fiat-GBP","GBP","£"],["fiat-EUR","EUR","€"],["fiat-KRW","KRW","₩"],["fiat-JPY","JPY","¥"],["fiat-CNY","CNY","¥"],["fiat-SGD","SGD","S$"]],ve=be.reduce((function(e,n){return e[n[0]]=n,e}),{}),ge=be.reduce((function(e,n){return e[n[1]]=n,e}),{}),he=(ge.EUR,ge.EUR,ge.EUR,ge.EUR,ge.EUR,ge.EUR,ge.USD,ge.GBP,ge.KRW,ge.JPY,ge.CNY,ge.SGD,de((function(e){var n=e.className,t=e.target,a=e.currencies,r=e.prefix,c=void 0===r?"":r,i=H()(e,["className","target","currencies","prefix"]),l=x()(i.price,"currency"),s=x()(i.price,"amount");if(!l)return null;var u="string"==typeof l?l:l.id,m=a.find((function(e){return e.id===u})),d=a.find((function(e){return e.id===t}))||m;if(!m)return null;var p=0===d.id.indexOf("fiat-");s=s*m.priceInUSD/d.priceInUSD,s=fe()(s,i.decimals||5);var f=!d.code.match(/^(USD|EUR|GBP)$/),b=p?function(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:".",a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:",",r=arguments.length>4&&void 0!==arguments[4]&&arguments[4];if(isNaN(e)||null==e)return"";var c=1,o="";e>1e6&&r?(c=1e6,o="M"):e>1e3&&r&&(c=1e3,o="K");var i=(e=(e/c).toFixed(~~n)).split("."),l=i[0],s=i[1]&&i[1]>0?t+i[1]:"";return"".concat(l.replace(/(\d)(?=(?:\d{3})+$)/g,"$1"+a)).concat(s).concat(o)}(s,2).replace(".00",""):s,v=x()(ve,"".concat(d.id,".2"),""),g="".concat(v).concat(b).concat(f?" ".concat(d.code):"");return o.a.createElement("span",{className:n},c,g)})));function ye(){var e=ne()(["\n  query Wallet {\n    web3 {\n      metaMaskAccount {\n        id\n      }\n      walletType\n      mobileWalletAccount {\n        id\n      }\n      primaryAccount {\n        id\n        proxy {\n          id\n        }\n        predictedProxy {\n          id\n        }\n      }\n    }\n  }\n"]);return ye=function(){return e},e}var Ee=ae()(ye());var ke=function(e){return function(n){var t=Object(F.b)(Ee,{fetchPolicy:"network-only",pollInterval:1e3}),a=t.data,r=t.error,c=t.networkStatus;r&&console.error(r);var i=x()(a,"web3.primaryAccount.predictedProxy.id"),l=x()(a,"web3.walletType");return o.a.createElement(e,v()({},n,{wallet:x()(a,"web3.primaryAccount.id"),walletType:l,walletLoading:1===c,walletProxy:x()(a,"web3.primaryAccount.proxy.id"),walletPredictedProxy:i,isOriginWallet:"Origin Wallet"===l||"Mobile"===l}))}};function we(){var e=ne()(["\n  query GetCurrencyBalances(\n    $tokens: [String]\n    $account: String!\n    $proxy: String!\n    $useProxy: Boolean!\n    $target: String!\n  ) {\n    currencies(tokens: $tokens) {\n      __typename\n      ... on Currency {\n        id\n        name\n        code\n        priceInUSD\n      }\n      ... on Token {\n        id\n        decimals\n        balance(address: $account)\n        allowance(address: $account, target: $target)\n      }\n    }\n    proxyCurrencies: currencies(tokens: $tokens) @include(if: $useProxy) {\n      __typename\n      ... on Currency {\n        id\n        name\n        code\n        priceInUSD\n      }\n      ... on Token {\n        id\n        decimals\n        balance(address: $proxy)\n        allowance(address: $account, target: $proxy)\n      }\n    }\n  }\n"]);return we=function(){return e},e}var Ne=ae()(we());var Oe=function(e){return ke((function(n){var t=Object(F.b)(Ne,{skip:!n.wallet,variables:{account:n.wallet,proxy:n.walletPredictedProxy,tokens:n.targets,useProxy:n.walletPredictedProxy!==n.wallet,target:n.allowanceTarget},fetchPolicy:"network-only"}),a=t.data,r=t.error,c=t.refetch;return r&&console.log("withCurrencyPrices",r),o.a.createElement(e,v()({},n,{refetchBalances:c,currencies:x()(a,"currencies")||[],proxyCurrencies:x()(a,"proxyCurrencies")||[]}))}))},Se=t(1639),je=t.n(Se);var xe=Oe((function(e){var n=e.targets,t=void 0===n?[]:n,a=e.price,r=void 0===a?{}:a,c=e.listing,o=e.currencies,i=e.proxyCurrencies,l=e.children,s=e.refetchBalances,u=H()(e,["targets","price","listing","currencies","proxyCurrencies","children","refetchBalances"]),m=r.currency,d=r.amount;if(i=i.length?i:o,Object.keys(u).some((function(e){return e.endsWith("Loading")&&u[e]})))return l({prices:{},tokenStatus:{loading:!0}});if(!u.wallet)return l({prices:{},tokenStatus:{loading:!1}});if(!m)return l({prices:{},tokenStatus:{loading:!0}});var p=o.find((function(e){return e.id===m.id}));if(!p||!t)return l({prices:{},tokenStatus:{loading:!0}});var f,b=t.reduce((function(e,n){var t=o.find((function(e){return e.id===n}));if(!t)return e;var a=d*p.priceInUSD,r=je()(a/t.priceInUSD,16);return e[n]={amount:String(r),currency:t},e}),{}),v=t.reduce((function(e,n){var t=i.find((function(e){return e.id===n}));if(!t)return e;var a=d*p.priceInUSD,r=je()(a/t.priceInUSD,16);return e[n]={amount:String(r),currency:t},e}),{}),g=t.reduce((function(e,n){return e[n]=function(e,n,t){var a=(p=x()(n,"".concat(e,".amount"))||"0",p.replace(/^([0-9]+\.[0-9]{18}).*/,"$1")),r=web3.utils.toBN(web3.utils.toWei(a,"ether")),c=x()(n,"".concat(e,".currency.balance"))||"0",o=web3.utils.toBN(c),i=x()(t,"".concat(e,".currency.allowance"))||"0",l=web3.utils.toBN(i),s=o.gte(r),u=r.sub(o).toString(),m=r.sub(l).toString(),d=l.gte(r);var p;"token-ETH"===e&&(d=!0);return{hasBalance:s,hasAllowance:d,needsAllowance:d?0:m,needsBalance:s?0:u,value:a}}(n,b,v),e}),{});if(c){var h=c.acceptedTokens.find((function(e){return"token-ETH"===e.id})),y=c.acceptedTokens.find((function(e){return"token-DAI"===e.id}));f=h&&x()(g,"token-ETH.hasBalance")?"token-ETH":y?"token-DAI":"token-ETH"}return l({prices:b,tokenStatus:g,suggestedToken:f,refetchBalances:s})})),Ce=function(e){var n=e.walletStatus;return"no-web3"===n?o.a.createElement("div",null,"Cannot query web3"):"no-wallet"===n?o.a.createElement("div",{className:"alert alert-danger"},"No crypto wallet detected."):"wallet-locked"===n?o.a.createElement("div",{className:"alert alert-danger"},"Wallet not unlocked.",o.a.createElement("button",{className:"btn btn-primary",onClick:function(){window.ethereum.enable()}},"Unlock")):"wallet-unapproved"===n?o.a.createElement("div",null,o.a.createElement("button",{className:"btn btn-primary",onClick:function(){window.ethereum.enable()}},"Enable Wallet")):"wrong-network"===n?o.a.createElement("div",{className:"alert alert-danger"},"Wrong network"):o.a.createElement("div",null,"Wallet Connected OK")};function Pe(){var e=ne()(["\n  query TransactionReceipt($id: ID!) {\n    web3 {\n      blockNumber\n      transactionReceipt(id: $id) {\n        id\n        blockNumber\n        status\n        events {\n          id\n          event\n          returnValues {\n            listingID\n            offerID\n            party\n            ipfsHash\n          }\n          returnValuesArr {\n            field\n            value\n          }\n        }\n      }\n    }\n  }\n"]);return Pe=function(){return e},e}var Ie=ae()(Pe());function De(){var e=ne()(["\n  subscription onNewBlock {\n    newBlock {\n      id\n      number\n    }\n  }\n"]);return De=function(){return e},e}var $e=ae()(De()),Ae=function(e){var n=e.hash,t=e.event,a=Object(F.b)(Ie,{variables:{id:n},skip:!n||"pending"===n}),r=a.data,c=a.error,o=a.refetch;Object(F.c)($e,{onSubscriptionData:function(){"pending"!==n&&o()}});var i,l=x()(r,"web3.transactionReceipt"),s=x()(r,"web3.transactionReceipt.events",[]),u=x()(r,"web3.blockNumber"),m=x()(r,"web3.transactionReceipt.blockNumber"),d=s.find((function(e){return e.event===t}))||s[0];if(c&&c.message&&!c.message.includes("Invalid JSON RPC response"))console.error(c),i="Error";else if(l&&m)if(l&&m&&!1===l.status){var p="Transaction reverted (tx: ".concat(n,")");console.error(p),i="Error"}else if(d)i=u<=m?"Confirming...":e.children({event:d});else{var f="Expected event not found (tx: ".concat(n,")");console.error(f),i="Error"}else i="Waiting...";return i};function Te(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function Ue(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?Te(Object(t),!0).forEach((function(n){h()(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Te(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var Re=Object(l.injectStripe)((function(e){var n=e.stripe,t=Object(p.a)().config,a=Object(c.useState)("token-ETH"),s=r()(a,2),u=s[0],m=s[1],d=Object(c.useState)({}),b=r()(d,2),v=b[0],g=b[1],h=Object(c.useState)({}),E=r()(h,2),w=E[0],N=E[1],O=Object(c.useState)(!1),S=r()(O,2),j=S[0],C=S[1],P=Object(c.useState)(),I=r()(P,2),D=I[0],A=I[1],U=Object(f.b)(),M=r()(U,2),B=M[0].cart,z=M[1],q=Object(c.useState)(),W=r()(q,2),_=W[0],K=W[1],G=Object(c.useState)(),J=r()(G,2),V=J[0],Z=J[1],Q=Object(c.useState)(),ee=r()(Q,2),ne=ee[0],te=ee[1],ae=Object(i.g)(),re=x()(B,"paymentMethod.id"),oe=Object(F.b)(ce,{notifyOnNetworkStatusChange:!0,skip:"crypto"!==re}),le=oe.data,se=oe.loading,ue=function(e,n){if(n)return"loading";var t=x()(e,"web3");if(!t)return"no-web3";var a="MetaMask"===x()(e,"web3.walletType");return t.metaMaskAvailable?a&&!t.metaMaskUnlocked?"wallet-locked":a&&!t.metaMaskApproved?"wallet-unapproved":t.networkId!==t.metaMaskNetworkId?"wrong-network":"ready":"no-wallet"}(le,se),me=x()(t,"listingId"),de=Object(F.a)(ie,{onCompleted:function(e){te(e.makeOffer.id)},onError:function(e){console.log(e),K(!1),C(!1)}}),pe=r()(de,1)[0];Object(c.useEffect)((function(){if(n&&"stripe"===re&&!D){console.log("Make Stripe payment request...");try{var e=n.paymentRequest({country:"US",currency:"usd",total:{label:"Item Total",amount:B.subTotal},requestPayerName:!0,requestPayerEmail:!0,requestShipping:!0,shippingOptions:[B.shipping]});e.on("token",(function(e){var n=e.complete,t=e.token,a=H()(e,["complete","token"]);console.log("Received Stripe token: ",t),console.log("Received customer information: ",a),n("success")})),A(e)}catch(e){console.log("paymentRequest error",e)}}}),[n,re]);var fe=Object(y.a)(w),be={currency:{id:"fiat-USD"},amount:String(B.total/100)},ve=Object($.a)(B.total),ge=j||!re;return"crypto"===re&&("ready"===ue&&u&&v.ready&&!_||(ge=!0),u&&(ve=o.a.createElement(he,{price:be,target:u}))),o.a.createElement("form",{onSubmit:function(){var e=R()(T.a.mark((function e(a){var r,c,o,i,l;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),!ge){e.next=3;break}return e.abrupt("return");case 3:return C(!0),e.next=6,X(B,t);case 6:r=e.sent,c=r.auth,o=r.hash,"stripe"===re?(i=t.backend,Y({backend:i,stripe:n,cart:B,encryptedData:r,listingId:me}).then((function(e){e.error?(N(Ue({},w,{cardError:e.error.message})),C(!1)):ae.push("/order/".concat(o,"?auth=").concat(c))})).catch((function(e){console.log(e),N(Ue({},w,{cardError:"Payment server error. Please try again later."})),C(!1)}))):"crypto"===re&&(l={listingID:me,value:v.tokenValue,currency:u,from:x()(le,"web3.metaMaskAccount.id"),quantity:1,autoswap:!0,encryptedData:o},K(!0),Z(c),pe({variables:l}));case 9:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},o.a.createElement("div",{className:"checkout-payment-method"},o.a.createElement("label",{className:"radio".concat("crypto"===re?"":" inactive")},o.a.createElement("input",{type:"radio",name:"paymentMethod",checked:"crypto"===re,onChange:function(){return z({type:"updatePaymentMethod",method:L.a.find((function(e){return"crypto"===e.id}))})}}),"Crypto Currency"),"crypto"===re&&o.a.createElement("div",{className:"pl-4 pt-2"},"ready"===ue?o.a.createElement(ze,{from:x()(le,"web3.metaMaskAccount.id"),value:u,onChange:function(e){return m(e)},onTokenReady:function(e,n){return g({ready:e,tokenValue:n})},price:be}):o.a.createElement(Ce,{walletStatus:ue})),t.stripe?o.a.createElement("label",{className:"radio".concat("stripe"===re?"":" inactive")},o.a.createElement("input",{type:"radio",name:"paymentMethod",checked:"stripe"===re,onChange:function(){return z({type:"updatePaymentMethod",method:L.a.find((function(e){return"stripe"===e.id}))})}}),"Credit Card"):null,"stripe"===re&&o.a.createElement("div",{className:"pl-4 pb-3 pt-2"},o.a.createElement("div",{className:"form-row"},o.a.createElement(l.CardElement,{className:"form-control",style:{base:{fontSize:"16px",lineHeight:"24px"}}}),fe("card")))),o.a.createElement("div",{className:"actions"},o.a.createElement(k.a,{to:"/checkout/shipping"},"« Return to shipping"),o.a.createElement("button",{type:"submit",className:"btn btn-primary btn-lg ".concat(ge?" disabled":""),children:ne?o.a.createElement(Ae,{hash:ne},(function(){return o.a.createElement(Me,{exec:function(){ae.push("/order/".concat(ne,"?auth=").concat(V))}},"Success")})):_?o.a.createElement(o.a.Fragment,null,"Awaiting approval..."):o.a.createElement(o.a.Fragment,null,"Pay ",ve)})))})),Me=function(e){var n=e.exec,t=e.children;return Object(c.useEffect)((function(){n()}),[n]),t},Be=[{id:"token-OGN",name:"OGN"},{id:"token-DAI",name:"DAI"},{id:"token-ETH",name:"ETH"}],ze=function(e){var n=e.price,t=e.value,a=e.onChange,i=e.onTokenReady,l=e.from,s=Object(p.a)().config,u=Object(c.useState)(),m=r()(u,2),d=m[0],f=m[1],b=Object(c.useState)(),v=r()(b,2),g=v[0],h=v[1],y=Object(F.a)(se,{onCompleted:function(e){h(e.updateTokenAllowance.id)},onError:function(e){console.log(e),f(!1)}}),E=r()(y,1)[0],k=s.acceptedTokens||Be,w=k.find((function(e){return e.id===t}))||k[0],N=k.map((function(e){return e.id}));return o.a.createElement(xe,{price:n,targets:[].concat(K()(N),["fiat-USD"]),allowanceTarget:s.marketplaceContract||"0x30A8EA8Caa1BF53b42Ea20bA226f0D2177A0B2C7"},(function(e){var r=e.tokenStatus,u=e.refetchBalances,m=r[t];return Object(c.useEffect)((function(){if(m){var e=m.hasBalance&&m.hasAllowance;i(e,m.value)}}),[t,l,x()(m,"hasBalance"),x()(m,"hasAllowance")]),o.a.createElement("div",{className:"crypto-chooser"},o.a.createElement("div",{className:"tokens"},k.map((function(e){return o.a.createElement("div",{key:e.id,className:t===e.id?"active":"",onClick:function(){return a(e.id)}},o.a.createElement("div",null,"Pay with ".concat(e.name)),o.a.createElement("div",null,o.a.createElement(he,{price:n,target:e.id})),o.a.createElement("div",{className:"sm"},o.a.createElement(he,{prefix:"1 ".concat(e.name," = "),price:{currency:e.id,amount:"1"},target:"fiat-USD"})))}))),m?m.hasBalance?m.hasAllowance?null:o.a.createElement("div",{className:"alert alert-info mt-3 mb-0 d-flex align-items-center"},"Please unlock your ".concat(w.name," to continue"),o.a.createElement("button",{className:"btn btn-primary btn-sm ml-3".concat(d?" disabled":""),onClick:function(){if(d)return!1;f(!0),E({variables:{to:s.marketplaceContract||"0x30A8EA8Caa1BF53b42Ea20bA226f0D2177A0B2C7",token:t,from:l,value:m.value}})}},g?o.a.createElement(Ae,{hash:g},(function(){return o.a.createElement(Me,{exec:u},"Done!")})):d?"Awaiting approval...":"Unlock")):o.a.createElement("div",{className:"alert alert-danger mt-3 mb-0"},"Insufficient balance"):null)}))},qe=Re;t(9)("\n  .crypto-chooser\n    .tokens\n      display: flex\n      > div\n        border: 1px solid #eee\n        padding: 1rem\n        border-radius: 0.5rem\n        margin-right: 1rem\n        cursor: pointer\n        text-align: center\n        opacity: 0.75\n        &:hover\n          opacity: 1\n        &.active\n          opacity: 1\n          border-color: #007bff\n        .sm\n          font-size: 0.75rem\n          margin-top: 0.25rem\n  .checkout-payment-method\n    border: 1px solid #eee\n    border-radius: 0.5rem\n    padding: 1rem\n    label\n      margin-bottom: 0\n    label .description\n      font-size: 0.875rem\n      color: #666\n    label.inactive\n      cursor: pointer\n      &:hover\n        color: #666\n    label:not(:first-child)\n      border-top: 1px solid #eee\n      margin-top: 1rem\n      padding-top: 1rem\n    .radio\n      display: flex\n      align-items: baseline\n      input\n        margin-right: 0.5rem\n  @media (max-width: 767.98px)\n    .crypto-chooser\n      .tokens\n        flex-direction: column\n        > div:not(:last-child)\n          margin-bottom: 1rem\n\n");var We=function(){var e=Object(p.a)().config,n=Object(f.b)(),t=r()(n,1)[0].cart;return o.a.createElement("div",{className:"checkout-shipping"},o.a.createElement("div",{className:"d-none d-md-block"},o.a.createElement("h3",null,e.fullTitle),o.a.createElement("div",{className:"breadcrumbs"},o.a.createElement(k.a,{to:"/cart"},"Cart"),o.a.createElement(k.a,{to:"/checkout"},"Information"),o.a.createElement(k.a,{to:"/checkout/shipping"},"Shipping"),o.a.createElement("span",null,"Payment"))),o.a.createElement("div",{className:"checkout-review-info"},o.a.createElement(z,null),o.a.createElement(q,null),o.a.createElement("div",{className:"info-row"},o.a.createElement("div",{className:"label"},"Method"),o.a.createElement("div",{className:"value"},x()(t,"shipping.label")),o.a.createElement(k.a,{className:"change",to:"/checkout/shipping"},"Change"))),o.a.createElement("div",{className:"mt-4 mb-3"},o.a.createElement("b",null,"Payment"),o.a.createElement("div",null,"All transactions are secure and encrypted")),o.a.createElement(qe,null),o.a.createElement(C,null))},_e=t(89);n.default=function(){var e=Object(p.a)().config,n=Object(i.g)(),t=Object(f.b)(),a=r()(t,1)[0].cart,m=Object(c.useState)(null),b=r()(m,2),v=b[0],g=b[1];return Object(c.useEffect)((function(){if(a.items.length)if(window.Stripe)g(window.Stripe(e.stripeKey));else{if(e.stripe){var t=document.createElement("script");t.src="https://js.stripe.com/v3/",t.addEventListener("load",(function(){g(window.Stripe(e.stripeKey))})),document.head.appendChild(t)}d.a.addStylesheet()}else n.push("/cart")}),[]),o.a.createElement(s.a,{client:u.a},o.a.createElement(l.StripeProvider,{stripe:v},o.a.createElement(l.Elements,null,o.a.createElement("div",{className:"checkout"},o.a.createElement("h3",{className:"d-md-none my-4 ml-4"},e.fullTitle),o.a.createElement("div",{className:"user-details"},o.a.createElement(i.d,null,o.a.createElement(i.b,{path:"/checkout/shipping",component:W}),o.a.createElement(i.b,{path:"/checkout/payment",component:We}),o.a.createElement(i.b,{path:"/checkout",component:D}))),o.a.createElement("div",{className:"order-summary-wrap"},o.a.createElement(_e.a,{cart:a,discountForm:!0}))))))};t(9)("\n  .checkout\n    display: flex\n    h3,h4,h5\n      font-weight: 400\n    .breadcrumbs\n      font-size: 0.8rem\n      a\n        color: #1990c6\n    > .user-details\n      flex: 7\n      padding: 3rem\n      display: flex\n      justify-content: flex-end\n      .checkout-information,.checkout-shipping\n        padding: 1rem\n        max-width: 600px\n        width: 100%\n      .actions\n        display: flex\n        justify-content: space-between\n        align-items: center\n        margin-top: 2rem\n    > .order-summary-wrap\n      padding: 3rem\n      flex: 6\n      min-height: 100vh\n      border-width: 0 0 0 1px\n      border-style: solid\n      border-color: #ddd\n      background: #f6f6f6\n\n\n  @media (max-width: 767.98px)\n    .checkout\n      flex-direction: column\n      > .user-details\n        padding: 1rem\n        order: 2\n        .checkout-information,.checkout-shipping\n          padding: 1rem 0\n        .actions\n          flex-direction: column-reverse\n          margin-bottom: 5rem\n          *\n            margin-bottom: 2rem\n      > .order-summary-wrap\n        padding: 1rem 1.25rem\n        border-width: 1px 0 1px 0\n        min-height: 0\n        .toggle-order-summary\n          display: flex\n          justify-content: space-between\n          .toggle\n            color: #1990c6\n          .icon-caret\n            fill: #1990c6\n            margin-left: 0.5rem\n          .icon-cart\n            margin-right: 0.5rem\n            width: 1.5rem\n          &.active\n            .icon-caret\n              transform: scaleY(-1)\n\n        .order-summary\n          margin-top: 2rem\n          display: none\n          &.show\n            display: block\n\n")},602:function(e,n){},603:function(e,n){},623:function(e,n){},625:function(e,n){},644:function(e,n){},716:function(e,n){},792:function(e,n){},793:function(e,n){},798:function(e,n){},816:function(e,n){},817:function(e,n){}}]);