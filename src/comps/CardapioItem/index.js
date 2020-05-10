import React from 'react'
import Grid from '@material-ui/core/Grid'
import ListItem from '@material-ui/core/ListItem'
import Button from '@material-ui/core/Button'
import ExposurePlus1Icon from '@material-ui/icons/ExposurePlus1'
import ExposureNeg1Icon from '@material-ui/icons/ExposureNeg1'

import useStyle from './css'

const MenuItem = ({ descricao, preco, quantidade, handleMaisUm, handleMenosUm }) => {
  const classes = useStyle()

  return <ListItem >
  <Grid container >
    <Grid item xs={4}>
      <p className={classes.item}>{descricao}</p>
    </Grid>
    <Grid item xs={2}>
      <p className={classes.item}>{preco}</p>
    </Grid>
    <Grid item xs={2}>
      <Button onClick={handleMaisUm}><ExposurePlus1Icon /></Button>
    </Grid>
    <Grid item xs={2}>
      <p className={classes.item}>{quantidade}</p>
    </Grid>
    <Grid item xs={2}>
      <Button onClick={handleMenosUm}><ExposureNeg1Icon /></Button>
    </Grid>
  </Grid>
</ListItem>
}

export default MenuItem