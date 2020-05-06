import React from 'react'
import Grid from '@material-ui/core/Grid'
import List from '@material-ui/core/List'

import CardapioItem from '../cardapioItem'

const Cardapio = ({ state, dispatch, action }) => {
  const makeMaisUm = codigo => () => {
    dispatch(action.pedidoMaisUm({ codigo }))
  }
  const makeMenosUm = codigo => () => {
    dispatch(action.pedidoMenosUm({ codigo }))
  }
  const quantidade = codigo => {
    const item = state.pedido.itens.find(el => el.codigo === codigo)
    return item ? item.quantidade : 0
  }

  return <Grid container >
    <Grid item xs={12}>
      <List>
        {
          state.menu.itens.map(el => <CardapioItem
            key={`menulist-${el.codigo}`}
            nome={el.nome}
            quantidade={quantidade(el.codigo)}
            handleMaisUm={makeMaisUm(el.codigo)}
            handleMenosUm={makeMenosUm(el.codigo)}
          />)
        }
      </List>
    </Grid>
  </Grid>
}

export default Cardapio;
