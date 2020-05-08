import React, { useReducer } from 'react'
import { action, initialArg, reducer } from './rdx'

import ConfirmaPedido from './comps/ConfirmaPedido'
import Cardapio from './comps/Cardapio'
import Pedido from './comps/Pedido'

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialArg)
  return <>
    <Pedido state={state} dispatch={dispatch} action={action}/>
    <Cardapio state={state} dispatch={dispatch} action={action}/>
    <ConfirmaPedido dispatch={dispatch} action={action}/>
  </>
}

export default App;
