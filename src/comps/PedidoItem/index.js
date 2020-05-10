import React from 'react'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import Typography from '@material-ui/core/Typography'

const PedidoItem = ({ quantidade, codigo, preco }) => <>
  <TableRow>
  <TableCell><Typography variant="h6" align="left">{quantidade}</Typography></TableCell>
    <TableCell><Typography variant="h6" align="center">{codigo}</Typography></TableCell>
    <TableCell><Typography variant="h6" align="right">{preco}</Typography></TableCell>
  </TableRow>
</>

export default PedidoItem