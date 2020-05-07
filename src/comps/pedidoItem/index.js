import React from 'react'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'

const PedidoItem = ({ codigo, quantidade }) => <>
  <TableRow>
    <TableCell>{codigo}</TableCell>
    <TableCell align='right'>{quantidade}</TableCell>
  </TableRow>
  <TableRow>
    <TableCell></TableCell>
    <TableCell align='right'></TableCell>
  </TableRow>
</>

export default PedidoItem
