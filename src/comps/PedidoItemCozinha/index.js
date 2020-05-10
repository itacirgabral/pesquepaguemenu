import React from 'react'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import Typography from '@material-ui/core/Typography'

const PedidoItem = ({ quantidade, codigo, zzz }) => <>
  <TableRow>
    <TableCell><Typography variant="h4" align="left">{quantidade}</Typography></TableCell>
    <TableCell><Typography variant="h4" align="right">{codigo}</Typography></TableCell>
  </TableRow>
</>

export default PedidoItem