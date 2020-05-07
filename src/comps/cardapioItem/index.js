import React from 'react'
import Grid from '@material-ui/core/Grid'
import ListItem from '@material-ui/core/ListItem'
import Button from '@material-ui/core/Button'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline'
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline'

const MenuItem = ({ descricao, quantidade, handleMaisUm, handleMenosUm }) => {

  return <ListItem >
  <Grid container >
    <Grid item xs={3}>
      <p>{descricao}</p>
    </Grid>
    <Grid item xs={3}>
      <Button onClick={handleMaisUm}><AddCircleOutlineIcon /></Button>
    </Grid>
    <Grid item xs={3}>
      <p>{quantidade}</p>
    </Grid>
    <Grid item xs={3}>
      <Button onClick={handleMenosUm}><RemoveCircleOutlineIcon /></Button>
    </Grid>
  </Grid>
</ListItem>
}

export default MenuItem