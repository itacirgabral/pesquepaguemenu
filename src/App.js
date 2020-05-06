import React, { useReducer } from 'react'
import { action, initialArg, reducer } from './rdx'

import ConfirmaPedido from './comps/confirmaPedido'
import Cardapio from './comps/caradapio'
import Pedido from './comps/pedido'

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialArg)
  return <>
    <Pedido state={state} dispatch={dispatch} action={action}/>
    <Cardapio state={state} dispatch={dispatch} action={action}/>
    <ConfirmaPedido dispatch={dispatch} action={action}/>
  </>
}

export default App;
