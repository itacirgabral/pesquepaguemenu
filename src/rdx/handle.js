const pedidoMaisUm = (state, action) => {
  const itemPedido = state.pedido.itens.find(el => el.codigo === action.codigo)
  if (itemPedido) {
    return {
      ...state,
      pedido: {
        ...state.pedido,
        itens: state.pedido.itens.map(el => el.codigo !== action.codigo ? el : { ...el, quantidade: el.quantidade + 1 })
      }
    }
  } else {
    return {
      ...state,
      pedido: {
        ...state.pedido,
        itens: state.pedido.itens.concat({ codigo: action.codigo, quantidade: 1 })
      }
    }
  }
}

const pedidoMenosUm = (state, action) => {
  const itemPedido = state.pedido.itens.find(el => el.codigo === action.codigo)
  const quantidade = itemPedido ? itemPedido.quantidade : 0
  if (quantidade > 1) {
    return {
      ...state,
      pedido: {
        ...state.pedido,
        itens: state.pedido.itens.map(el => el.codigo !== action.codigo ? el: { ...el, quantidade: el.quantidade - 1 })
      }
    }
  } else if(quantidade === 1) {
    return {
      ...state,
      pedido: {
        ...state.pedido,
        itens: state.pedido.itens.filter(el => el.codigo !== action.codigo)
      }
    }
  } else {
    return state
  }
}

const setComandaAberto = (state, action) => {
  return {
    ...state,
    pedido: {
      ...state.pedido,
      aberto: action.aberto
    }
  }
}

const handle = {
  pedidoMenosUm,
  pedidoMaisUm,
  setComandaAberto
}

export default handle