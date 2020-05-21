import React from 'react'
import Grid from '@material-ui/core/Grid'
import ListItem from '@material-ui/core/ListItem'
import Button from '@material-ui/core/Button'
import ExposurePlus1Icon from '@material-ui/icons/ExposurePlus1'
import ExposureNeg1Icon from '@material-ui/icons/ExposureNeg1'

import useStyle from './css'

const MenuItem = ({ descricao, preco, quantidade, handleMaisUm, handleMenosUm }) => {
  const classes = useStyle()

  return <ListItem className={classes.itemBorder}>
  <Grid container align="center">
    <Grid item xs={4}>
      <Grid container className={classes.fullHeight} direction='column' justify='center'>
        <Grid item xs={12}>
          <p className={classes.textMargin}>{descricao}</p>
        </Grid>
        <Grid item xs={12}>
          <p className={classes.textMargin}>R$ {preco}</p>
        </Grid>
      </Grid>
    </Grid>
    <Grid item xs={2}>
    <Grid container className={classes.fullHeight} direction='column' justify='center'>
      <Grid item xs={12}>
        <Button onClick={handleMaisUm}><ExposurePlus1Icon /></Button>
      </Grid>
    </Grid>
    </Grid>
    <Grid item xs={4}>
      <Grid container className={classes.fullHeight} direction='column' justify='center'>
        <Grid item xs={12}>
          <h1>{quantidade}</h1>
        </Grid>
      </Grid>
    </Grid>
    <Grid item xs={2}>
      <Grid container className={classes.fullHeight} direction='column' justify='center'>
        <Grid item xs={12}>
          <Button onClick={handleMenosUm}><ExposureNeg1Icon /></Button>
        </Grid>
      </Grid>
    </Grid>
  </Grid>
</ListItem>
}

export default MenuItem