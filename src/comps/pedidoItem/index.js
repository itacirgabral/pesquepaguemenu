import React from 'react'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'

const PedidoItem = ({ codigo, quantidade }) => <TableRow>
  <TableCell>{codigo}</TableCell>
  <TableCell>{quantidade}</TableCell>
</TableRow>

export default PedidoItem
