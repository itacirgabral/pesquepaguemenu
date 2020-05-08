import React from 'react'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'

const PedidoItem = ({ quantidade, codigo, preco }) => <>
  <TableRow>
    <TableCell align='left'>{quantidade}</TableCell>
    <TableCell align='right'>{codigo}</TableCell>
  </TableRow>
</>

export default PedidoItem