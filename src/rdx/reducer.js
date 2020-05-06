import handle from './handle'

const reducer = (state, action) => {
  switch (action.type) {
    case 'pedidoMaisUm':
      return handle.pedidoMaisUm(state, action)
    case 'pedidoMenosUm':
      return handle.pedidoMenosUm(state, action)
    case 'setComandaAberto':
      return handle.setComandaAberto(state, action)
    default:
      return state
  }
}

export default reducer