(this.webpackJsonppesquepaguemenu=this.webpackJsonppesquepaguemenu||[]).push([[0],{58:function(e,a,n){e.exports=n(70)},65:function(e,a,n){},70:function(e,a,n){"use strict";n.r(a);var o=n(0),t=n.n(o),c=n(7),i=n.n(c),r=n(115),d=n(114),l=n(50),u=n(41),s=n.n(u),m=n(42),p=n.n(m),g=s.a[500],h=p.a[200],f=Object(l.a)({palette:{common:{hood:g,wall:h},primary:{main:g},secondary:{main:h}}}),E=(n(65),n(66),n(51)),b={drawer:{numero:0,open:!1},signinForm:{posto:"garcom",senha:""},header:{tabidx:0,indicatorColor:"primary"},user:{signin:!0,nome:"cliente"},menu:{itens:[{codigo:"PT",preco:40,cozinha:!0,descricao:"Costelinha e Torresmo de peixe"},{codigo:"TambM",preco:52,cozinha:!0,descricao:"Tambatinga ao Molho"},{codigo:"Lamb",preco:30,cozinha:!0,descricao:"Lambari Empanado"},{codigo:"PF",preco:30,cozinha:!0,descricao:"Peixe Frinto"},{codigo:"PintEmp",preco:65,cozinha:!0,descricao:"Pintado Empanado"},{codigo:"Frango",preco:25,cozinha:!0,descricao:"Frango a Passarinho"},{codigo:"Mqca",preco:105,cozinha:!0,descricao:"Moqueca de Peixe"},{codigo:"QB",preco:25,cozinha:!0,descricao:"Quibe de Peixe"},{codigo:"BatS",preco:20,cozinha:!0,descricao:"Batata Simples"},{codigo:"BatB",preco:25,cozinha:!0,descricao:"Batata com Bacon"},{codigo:"Farf",preco:10,cozinha:!0,descricao:"Farofa"},{codigo:"Arz",preco:6,cozinha:!0,descricao:"Arroz"},{codigo:"Vingt",preco:6,cozinha:!0,descricao:"Vinagrete"},{codigo:"Pr\xe3o",preco:15,cozinha:!0,descricao:"Pir\xe3o"},{codigo:"BolP",preco:18,cozinha:!0,descricao:"Bolinho de Peixe com pimenta"},{codigo:"BolN",preco:18,cozinha:!0,descricao:"Bolinho de Peixe sem pimenta"},{codigo:"MolV",preco:2,cozinha:!0,descricao:"Molho Verde"},{codigo:"CopEsp",preco:1,cozinha:!0,descricao:"Copo com Gelo e Lim\xe3o"},{codigo:"Ita",preco:3,cozinha:!1,descricao:"Itaipava"},{codigo:"Skl",preco:4,cozinha:!1,descricao:"Skol"},{codigo:"Ptra",preco:4,cozinha:!1,descricao:"Petra"},{codigo:"Amt",preco:4,cozinha:!1,descricao:"Amstel"},{codigo:"HeinK",preco:6,cozinha:!1,descricao:"Heineken"},{codigo:"CervSA",preco:6,cozinha:!1,descricao:"Sem \xc1lcool"},{codigo:"Vinho",preco:7,cozinha:!1,descricao:"Vinho"},{codigo:"Suco",preco:7,cozinha:!1,descricao:"Suco"},{codigo:"RefGrf",preco:8,cozinha:!1,descricao:"Refrigerante Garrafa 1,5 Litros"},{codigo:"RefLt",preco:4,cozinha:!1,descricao:"Refrigerante Lata"},{codigo:"AgCG",preco:4,cozinha:!1,descricao:"\xc1gua com G\xe1s"},{codigo:"AgSG",preco:3,cozinha:!1,descricao:"\xc1gua sem G\xe1s"}],versao:"02"},pedido:{itens:[],aberto:!1}},v=n(11),z={pedidoMenosUm:function(e,a){var n=e.pedido.itens.find((function(e){return e.codigo===a.codigo})),o=n?n.quantidade:0;return o>1?Object(v.a)({},e,{pedido:Object(v.a)({},e.pedido,{itens:e.pedido.itens.map((function(e){return e.codigo!==a.codigo?e:Object(v.a)({},e,{quantidade:e.quantidade-1})}))})}):1===o?Object(v.a)({},e,{pedido:Object(v.a)({},e.pedido,{itens:e.pedido.itens.filter((function(e){return e.codigo!==a.codigo}))})}):e},pedidoMaisUm:function(e,a){return e.pedido.itens.find((function(e){return e.codigo===a.codigo}))?Object(v.a)({},e,{pedido:Object(v.a)({},e.pedido,{itens:e.pedido.itens.map((function(e){return e.codigo!==a.codigo?e:Object(v.a)({},e,{quantidade:e.quantidade+1})}))})}):Object(v.a)({},e,{pedido:Object(v.a)({},e.pedido,{itens:e.pedido.itens.concat({codigo:a.codigo,quantidade:1})})})},setComandaAberto:function(e,a){return Object(v.a)({},e,{pedido:Object(v.a)({},e.pedido,{aberto:a.aberto})})}},w=function(e,a){switch(a.type){case"pedidoMaisUm":return z.pedidoMaisUm(e,a);case"pedidoMenosUm":return z.pedidoMenosUm(e,a);case"setComandaAberto":return z.setComandaAberto(e,a);default:return e}},q={pedidoMaisUm:function(e){return{type:"pedidoMaisUm",codigo:e.codigo}},pedidoMenosUm:function(e){return{type:"pedidoMenosUm",codigo:e.codigo}},setComandaAberto:function(e){return{type:"setComandaAberto",aberto:e.aberto}}},C=n(100),M=n(44),k=n.n(M),y=n(116),j=Object(y.a)((function(e){return{fab:{position:"fixed",right:"1rem",bottom:"1rem"}}})),A=function(e){var a=e.dispatch,n=e.action,o=j();return t.a.createElement(C.a,{onClick:function(){return a(n.setComandaAberto({aberto:!0}))},color:"primary","aria-label":"confirm print",className:o.fab},t.a.createElement(k.a,null))},O=n(102),U=n(104),x=n(118),P=n(103),S=n(45),B=n.n(S),F=n(46),R=n.n(F),L=Object(y.a)((function(e){return{item:{textAlign:"center"}}})),W=function(e){var a=e.descricao,n=e.preco,o=e.quantidade,c=e.handleMaisUm,i=e.handleMenosUm,r=L();return t.a.createElement(x.a,null,t.a.createElement(O.a,{container:!0},t.a.createElement(O.a,{item:!0,xs:4},t.a.createElement("p",{className:r.item},a)),t.a.createElement(O.a,{item:!0,xs:2},t.a.createElement("p",{className:r.item},n)),t.a.createElement(O.a,{item:!0,xs:2},t.a.createElement(P.a,{onClick:c},t.a.createElement(B.a,null))),t.a.createElement(O.a,{item:!0,xs:2},t.a.createElement("p",{className:r.item},o)),t.a.createElement(O.a,{item:!0,xs:2},t.a.createElement(P.a,{onClick:i},t.a.createElement(R.a,null)))))},G=function(e){var a=e.state,n=e.dispatch,o=e.action,c=function(e){return function(){n(o.pedidoMenosUm({codigo:e}))}},i=function(e){var n=a.pedido.itens.find((function(a){return a.codigo===e}));return n?n.quantidade:0};return t.a.createElement(O.a,{container:!0},t.a.createElement(O.a,{item:!0,xs:12},t.a.createElement(U.a,null,a.menu.itens.map((function(e){return t.a.createElement(W,{key:"menulist-".concat(e.codigo),descricao:e.descricao,preco:e.preco,quantidade:i(e.codigo),handleMaisUm:(a=e.codigo,function(){n(o.pedidoMaisUm({codigo:a}))}),handleMenosUm:c(e.codigo)});var a})))))},N=n(107),T=n(117),V=n(113),Q=n(108),I=n(110),H=n(112),J=n(106),K=n(109),$=n(111),D=n(105),X=n(48),Y=n.n(X),Z=n(49),_=n.n(Z),ee=n(47),ae=n.n(ee),ne=function(e){var a=e.quantidade,n=e.codigo,o=e.preco;return t.a.createElement(t.a.Fragment,null,t.a.createElement(D.a,null,t.a.createElement(J.a,null,t.a.createElement(N.a,{variant:"h6",align:"left"},a)),t.a.createElement(J.a,null,t.a.createElement(N.a,{variant:"h6",align:"center"},n)),t.a.createElement(J.a,null,t.a.createElement(N.a,{variant:"h6",align:"right"},o))))},oe=function(e){var a=e.quantidade,n=e.codigo;e.zzz;return t.a.createElement(t.a.Fragment,null,t.a.createElement(D.a,null,t.a.createElement(J.a,null,t.a.createElement(N.a,{variant:"h4",align:"left"},a)),t.a.createElement(J.a,null,t.a.createElement(N.a,{variant:"h4",align:"right"},n))))},te=function(e){var a=e.state,n=e.dispatch,c=e.action,i=Object(o.useRef)(),r=function(){return n(c.setComandaAberto({aberto:!1}))},d=function(e){var n=a.menu.itens.find((function(a){return a.codigo===e}));return n?n.preco:0};return t.a.createElement(T.a,{open:a.pedido.aberto,onClose:r,scroll:"body"},t.a.createElement(Q.a,{ref:i},t.a.createElement(K.a,null,t.a.createElement(I.a,null,t.a.createElement($.a,null,t.a.createElement(D.a,null,t.a.createElement(J.a,null,t.a.createElement(N.a,{variant:"h6",align:"left"},"Qtd")),t.a.createElement(J.a,null,t.a.createElement(N.a,{variant:"h6",align:"center"},"Cod")),t.a.createElement(J.a,null,t.a.createElement(N.a,{variant:"h6",align:"right"},"Total")))),t.a.createElement(H.a,null,a.pedido.itens.map((function(e,a){return t.a.createElement(ne,{key:"pedido-item-".concat(a,"-").concat(e.codigo,"-").concat(e.quantidade),quantidade:e.quantidade,codigo:e.codigo,preco:d(e.codigo)*e.quantidade})}))))),t.a.createElement(N.a,{variant:"h4",align:"right"},"Soma ",a.pedido.itens.map((function(e){var a=e.quantidade,n=e.codigo;return a*d(n)})).reduce((function(e,a){return e+a}),0)),t.a.createElement(K.a,null,t.a.createElement(I.a,null,t.a.createElement($.a,null,t.a.createElement(D.a,null,t.a.createElement(J.a,null,t.a.createElement(N.a,{variant:"h6",align:"left"},"Qtd")),t.a.createElement(J.a,null,t.a.createElement(N.a,{variant:"h6",align:"right"},"Cod")))),t.a.createElement(H.a,null,a.pedido.itens.filter((function(e){return n=e.codigo,a.menu.itens.find((function(e){return e.codigo===n})).cozinha;var n})).map((function(e,a){return t.a.createElement(oe,{key:"pedido-item-cozinha".concat(a,"-").concat(e.codigo,"-").concat(e.quantidade),quantidade:e.quantidade,codigo:e.codigo})})))))),t.a.createElement(V.a,null,t.a.createElement(ae.a,{trigger:function(){return t.a.createElement(P.a,{color:"primary"},t.a.createElement(Y.a,null))},content:function(){return i.current}}),t.a.createElement(P.a,{color:"primary",onClick:r},t.a.createElement(_.a,null))))},ce=function(){var e=Object(o.useReducer)(w,b),a=Object(E.a)(e,2),n=a[0],c=a[1];return t.a.createElement(t.a.Fragment,null,t.a.createElement(te,{state:n,dispatch:c,action:q}),t.a.createElement(G,{state:n,dispatch:c,action:q}),t.a.createElement(A,{dispatch:c,action:q}))},ie=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function re(e,a){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),a&&a.onUpdate&&a.onUpdate(e)):(console.log("Content is cached for offline use."),a&&a.onSuccess&&a.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(t.a.createElement(d.a,{theme:f},t.a.createElement(r.a,null),t.a.createElement(ce,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/pesquepaguemenu",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var a="".concat("/pesquepaguemenu","/service-worker.js");ie?(!function(e,a){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var o=n.headers.get("content-type");404===n.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):re(e,a)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(a,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):re(a,e)}))}}()}},[[58,1,2]]]);
//# sourceMappingURL=main.88b8bf84.chunk.js.map