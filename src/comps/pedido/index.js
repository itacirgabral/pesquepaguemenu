import React, { useRef } from 'react'

import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'

import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'

import PrintIcon from '@material-ui/icons/Print'
import CancelIcon from '@material-ui/icons/Cancel'

import ReactToPrint from 'react-to-print'

import PedidoItem from '../pedidoItem'

const Pedido = ({ state, dispatch, action}) => {
  const componentRef = useRef()
  const fechaDialog = () => dispatch(action.setComandaAberto({ aberto: false}))
  const PrintButton = () => <Button color="primary"><PrintIcon /></Button>

  return <Dialog open={state.pedido.aberto} onClose={fechaDialog} scroll="body">
      <DialogTitle>
        Pedido
      </DialogTitle>
      <DialogContent ref={componentRef}>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Código</TableCell>
                <TableCell>Quantidade</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {
                state.pedido.itens.map((el, i) => <PedidoItem
                  key={`pedido-item-${i}-${el.codigo}-${el.quantidade}`}
                  codigo={el.codigo}
                  quantidade={el.quantidade}
                />)
              }
            </TableBody>
          </Table>
        </TableContainer>
      </DialogContent>
      <DialogActions>
        <ReactToPrint
          trigger={PrintButton}
          content={() => componentRef.current}
        />
        
        <Button color="primary" onClick={fechaDialog}><CancelIcon /></Button>
      </DialogActions>
    </Dialog>
}

export default Pedido;
