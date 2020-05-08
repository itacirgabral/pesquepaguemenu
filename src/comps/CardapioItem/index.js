import React from 'react'
import Grid from '@material-ui/core/Grid'
import ListItem from '@material-ui/core/ListItem'
import Button from '@material-ui/core/Button'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline'
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline'

const MenuItem = ({ descricao, preco, quantidade, handleMaisUm, handleMenosUm }) => {

  return <ListItem >
  <Grid container >
    <Grid item xs={4}>
      <p>{descricao}</p>
    </Grid>
    <Grid item xs={2}>
      <p>{preco}</p>
    </Grid>
    <Grid item xs={2}>
      <Button onClick={handleMaisUm}><AddCircleOutlineIcon /></Button>
    </Grid>
    <Grid item xs={2}>
      <p>{quantidade}</p>
    </Grid>
    <Grid item xs={2}>
      <Button onClick={handleMenosUm}><RemoveCircleOutlineIcon /></Button>
    </Grid>
  </Grid>
</ListItem>
}

export default MenuItem