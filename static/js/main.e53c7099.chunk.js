(this.webpackJsonppesquepaguemenu=this.webpackJsonppesquepaguemenu||[]).push([[0],{57:function(e,o,a){e.exports=a(69)},64:function(e,o,a){},69:function(e,o,a){"use strict";a.r(o);var n=a(0),t=a.n(n),c=a(7),i=a.n(c),r=a(115),d=a(114),l=a(47),s=a(38),u=a.n(s),m=a(39),p=a.n(m),g=u.a[500],f=p.a[200],h=Object(l.a)({palette:{common:{hood:g,wall:f},primary:{main:g},secondary:{main:f}}}),E=(a(64),a(65),a(48)),b={drawer:{numero:0,open:!1},signinForm:{posto:"garcom",senha:""},header:{tabidx:0,indicatorColor:"primary"},user:{signin:!0,nome:"cliente"},menu:{itens:[{codigo:"Costelinha e Torresmo de peixe",preco:40,descricao:"Costelinha e Torresmo de peixe"},{codigo:"Tambatinga ao Molho",preco:52,descricao:"Tambatinga ao Molho"},{codigo:"Lambari Empanado",preco:30,descricao:"Lambari Empanado"},{codigo:"Peixe Frinto",preco:30,descricao:"Peixe Frinto"},{codigo:"Pintado Empanado",preco:65,descricao:"Pintado Empanado"},{codigo:"Frango a Passarinho",preco:25,descricao:"Frango a Passarinho"},{codigo:"Moqueca de Peixe",preco:105,descricao:"Moqueca de Peixe"},{codigo:"Batata Simples",preco:20,descricao:"Batata Simples"},{codigo:"Batata com Bacon",preco:25,descricao:"Batata com Bacon"},{codigo:"Farofa",preco:10,descricao:"Farofa"},{codigo:"Arroz",preco:6,descricao:"Arroz"},{codigo:"Vinagrete",preco:6,descricao:"Vinagrete"},{codigo:"Pir\xe3o",preco:15,descricao:"Pir\xe3o"},{codigo:"Bolinho de Peixe",preco:18,descricao:"Bolinho de Peixe"},{codigo:"Molho Verde",preco:2,descricao:"Molho Verde"},{codigo:"Copo com Gelo e Lim\xe3o",preco:1,descricao:"Copo com Gelo e Lim\xe3o"},{codigo:"Itaipava",preco:3,descricao:"Itaipava"},{codigo:"Skol",preco:4,descricao:"Skol"},{codigo:"Petra",preco:4,descricao:"Petra"},{codigo:"Amstel",preco:4,descricao:"Amstel"},{codigo:"Heineken",preco:6,descricao:"Heineken"},{codigo:"Sem \xc1lcool",preco:6,descricao:"Sem \xc1lcool"},{codigo:"Vinho",preco:7,descricao:"Vinho"},{codigo:"Suco",preco:7,descricao:"Suco"},{codigo:"Coca",preco:4,descricao:"Coca"},{codigo:"Fanta",preco:4,descricao:"Fanta"},{codigo:"Sprit",preco:4,descricao:"Sprit"},{codigo:"Guaran\xe1",preco:4,descricao:"Guaran\xe1"},{codigo:"Coca Litro",preco:8,descricao:"Coca Litro"},{codigo:"Fanta Litro",preco:8,descricao:"Fanta Litro"},{codigo:"\xc1gua com G\xe1s",preco:4,descricao:"\xc1gua com G\xe1s"},{codigo:"\xc1gua sem G\xe1s",preco:3,descricao:"\xc1gua sem G\xe1s"}],versao:"01"},pedido:{itens:[],aberto:!1}},v=a(11),w={pedidoMenosUm:function(e,o){var a=e.pedido.itens.find((function(e){return e.codigo===o.codigo})),n=a?a.quantidade:0;return n>1?Object(v.a)({},e,{pedido:Object(v.a)({},e.pedido,{itens:e.pedido.itens.map((function(e){return e.codigo!==o.codigo?e:Object(v.a)({},e,{quantidade:e.quantidade-1})}))})}):1===n?Object(v.a)({},e,{pedido:Object(v.a)({},e.pedido,{itens:e.pedido.itens.filter((function(e){return e.codigo!==o.codigo}))})}):e},pedidoMaisUm:function(e,o){return e.pedido.itens.find((function(e){return e.codigo===o.codigo}))?Object(v.a)({},e,{pedido:Object(v.a)({},e.pedido,{itens:e.pedido.itens.map((function(e){return e.codigo!==o.codigo?e:Object(v.a)({},e,{quantidade:e.quantidade+1})}))})}):Object(v.a)({},e,{pedido:Object(v.a)({},e.pedido,{itens:e.pedido.itens.concat({codigo:o.codigo,quantidade:1})})})},setComandaAberto:function(e,o){return Object(v.a)({},e,{pedido:Object(v.a)({},e.pedido,{aberto:o.aberto})})}},C=function(e,o){switch(o.type){case"pedidoMaisUm":return w.pedidoMaisUm(e,o);case"pedidoMenosUm":return w.pedidoMenosUm(e,o);case"setComandaAberto":return w.setComandaAberto(e,o);default:return e}},M={pedidoMaisUm:function(e){return{type:"pedidoMaisUm",codigo:e.codigo}},pedidoMenosUm:function(e){return{type:"pedidoMenosUm",codigo:e.codigo}},setComandaAberto:function(e){return{type:"setComandaAberto",aberto:e.aberto}}},k=a(101),y=a(41),j=a.n(y),q=a(116),U=Object(q.a)((function(e){return{fab:{position:"fixed",right:"1rem",bottom:"1rem"}}})),O=function(e){var o=e.dispatch,a=e.action,n=U();return t.a.createElement(k.a,{onClick:function(){return o(a.setComandaAberto({aberto:!0}))},color:"primary","aria-label":"confirm print",className:n.fab},t.a.createElement(j.a,null))},x=a(103),P=a(105),A=a(119),S=a(104),F=a(42),B=a.n(F),L=a(43),G=a.n(L),W=function(e){var o=e.descricao,a=e.quantidade,n=e.handleMaisUm,c=e.handleMenosUm;return t.a.createElement(A.a,null,t.a.createElement(x.a,{container:!0},t.a.createElement(x.a,{item:!0,xs:3},t.a.createElement("p",null,o)),t.a.createElement(x.a,{item:!0,xs:3},t.a.createElement(S.a,{onClick:n},t.a.createElement(B.a,null))),t.a.createElement(x.a,{item:!0,xs:3},t.a.createElement("p",null,a)),t.a.createElement(x.a,{item:!0,xs:3},t.a.createElement(S.a,{onClick:c},t.a.createElement(G.a,null)))))},T=function(e){var o=e.state,a=e.dispatch,n=e.action,c=function(e){return function(){a(n.pedidoMenosUm({codigo:e}))}},i=function(e){var a=o.pedido.itens.find((function(o){return o.codigo===e}));return a?a.quantidade:0};return t.a.createElement(x.a,{container:!0},t.a.createElement(x.a,{item:!0,xs:12},t.a.createElement(P.a,null,o.menu.itens.map((function(e){return t.a.createElement(W,{key:"menulist-".concat(e.codigo),descricao:e.descricao,quantidade:i(e.codigo),handleMaisUm:(o=e.codigo,function(){a(n.pedidoMaisUm({codigo:o}))}),handleMenosUm:c(e.codigo)});var o})))))},V=a(117),R=a(113),I=a(108),N=a(118),z=a(110),H=a(112),J=a(107),Q=a(109),$=a(111),D=a(106),K=a(45),X=a.n(K),Y=a(46),Z=a.n(Y),_=a(44),ee=a.n(_),oe=function(e){var o=e.codigo,a=e.quantidade;return t.a.createElement(t.a.Fragment,null,t.a.createElement(D.a,null,t.a.createElement(J.a,null,o),t.a.createElement(J.a,{align:"right"},a)),t.a.createElement(D.a,null,t.a.createElement(J.a,null),t.a.createElement(J.a,{align:"right"})))},ae=function(e){var o=e.state,a=e.dispatch,c=e.action,i=Object(n.useRef)(),r=function(){return a(c.setComandaAberto({aberto:!1}))};return t.a.createElement(V.a,{open:o.pedido.aberto,onClose:r,scroll:"body"},t.a.createElement(N.a,null,"Pedido"),t.a.createElement(I.a,{ref:i},t.a.createElement(Q.a,null,t.a.createElement(z.a,null,t.a.createElement($.a,null,t.a.createElement(D.a,null,t.a.createElement(J.a,null,"C\xf3digo"),t.a.createElement(J.a,null,"Quantidade"))),t.a.createElement(H.a,null,o.pedido.itens.map((function(e,o){return t.a.createElement(oe,{key:"pedido-item-".concat(o,"-").concat(e.codigo,"-").concat(e.quantidade),codigo:e.codigo,quantidade:e.quantidade})})))))),t.a.createElement(R.a,null,t.a.createElement(ee.a,{trigger:function(){return t.a.createElement(S.a,{color:"primary"},t.a.createElement(X.a,null))},content:function(){return i.current}}),t.a.createElement(S.a,{color:"primary",onClick:r},t.a.createElement(Z.a,null))))},ne=function(){var e=Object(n.useReducer)(C,b),o=Object(E.a)(e,2),a=o[0],c=o[1];return t.a.createElement(t.a.Fragment,null,t.a.createElement(ae,{state:a,dispatch:c,action:M}),t.a.createElement(T,{state:a,dispatch:c,action:M}),t.a.createElement(O,{dispatch:c,action:M}))},te=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ce(e,o){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),o&&o.onUpdate&&o.onUpdate(e)):(console.log("Content is cached for offline use."),o&&o.onSuccess&&o.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(t.a.createElement(d.a,{theme:h},t.a.createElement(r.a,null),t.a.createElement(ne,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/pesquepaguemenu",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var o="".concat("/pesquepaguemenu","/service-worker.js");te?(!function(e,o){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):ce(e,o)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(o,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):ce(o,e)}))}}()}},[[57,1,2]]]);
//# sourceMappingURL=main.e53c7099.chunk.js.map