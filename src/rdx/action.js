const action = {
  pedidoMaisUm: ({ codigo }) => ({ type: 'pedidoMaisUm', codigo }),
  pedidoMenosUm: ({ codigo }) => ({ type: 'pedidoMenosUm', codigo }),
  setComandaAberto: ({ aberto }) => ({ type: 'setComandaAberto', aberto })
}

export default action