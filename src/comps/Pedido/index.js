import React, { useRef } from 'react'

import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'

import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'

import PrintIcon from '@material-ui/icons/Print'
import CancelIcon from '@material-ui/icons/Cancel'

import ReactToPrint from 'react-to-print'

import PedidoItem from '../PedidoItem'
import PedidoItemCozinha from '../PedidoItemCozinha'

const Pedido = ({ state, dispatch, action}) => {
  const componentRef = useRef()
  const fechaDialog = () => dispatch(action.setComandaAberto({ aberto: false}))
  const PrintButton = () => <Button color="primary"><PrintIcon /></Button>
  const precoUnit = codigo => {
    const item = state.menu.itens.find(el => el.codigo === codigo)
    return item ? item.preco : 0
  }
  const ehCozinha = codigo => state.menu.itens.find(el => el.codigo === codigo).cozinha

  const total = () => state.pedido.itens
    .map(({ quantidade, codigo }) => quantidade * precoUnit(codigo))
    .reduce((acc, el) => acc + el, 0)

  return <Dialog open={state.pedido.aberto} onClose={fechaDialog} scroll="body">
      <DialogContent ref={componentRef}>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell><Typography variant="h6" align="left">Qtd</Typography></TableCell>
                <TableCell><Typography variant="h6" align="center">Cod</Typography></TableCell>
                <TableCell><Typography variant="h6" align="right">Total</Typography></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {
                state.pedido.itens.map((el, i) => <PedidoItem
                  key={`pedido-item-${i}-${el.codigo}-${el.quantidade}`}
                  quantidade={el.quantidade}
                  codigo={el.codigo}
                  preco={precoUnit(el.codigo) * el.quantidade }
                />)
              }
            </TableBody>
          </Table>
        </TableContainer>
        <Typography variant="h4" align="right">Soma {total()}</Typography>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell><Typography variant="h6" align="left">Qtd</Typography></TableCell>
                <TableCell><Typography variant="h6" align="right">Cod</Typography></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {
                state.pedido.itens.filter(el => ehCozinha(el.codigo)).map((el, i) => <PedidoItemCozinha
                  key={`pedido-item-cozinha${i}-${el.codigo}-${el.quantidade}`}
                  quantidade={el.quantidade}
                  codigo={el.codigo}
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