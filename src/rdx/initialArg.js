const initialArg = {
  menu: {
    itens: [
      {
        codigo: 'cer01',
        nome: 'Cerveja Itaipava',
        preco: 3
      },
      {
        codigo: 'bol01',
        nome: 'Bolinho de Peixe',
        preco: 5
      },
      {
        codigo: 'pei01',
        nome: 'Peixe Frito',
        preco: 7
      },
    ],
    versao: '01'
  },
  pedido: {
    itens: [
      {
        codigo: 'cer01',
        quantidade: 3
      },
      {
        codigo: 'bol01',
        quantidade: 2
      },
    ],
    aberto: false
  }
}

export default initialArg