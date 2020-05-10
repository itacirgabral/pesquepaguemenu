import React from 'react'

import Fab from '@material-ui/core/Fab'
import RestaurantIcon from '@material-ui/icons/Restaurant'
import css from './css'

const ConfirmaPedido = ({ dispatch, action }) => {
  const classes = css()

  return <Fab
    onClick={() => dispatch(action.setComandaAberto({ aberto: true }))}
    color="primary"
    aria-label="confirm print"
    className={classes.fab}
  >
    <RestaurantIcon />
  </Fab>
}

export default ConfirmaPedido