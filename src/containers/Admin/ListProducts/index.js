import CancelIcon from '@mui/icons-material/Cancel'
import CheckBoxIcon from '@mui/icons-material/CheckBox'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

import paths from '../../../constants/path'
import api from '../../../services/api'
import formatCurrency from '../../../utils/formatCurrency'
import { Container, EditIcons } from './style'

function ListProducts() {
  const [products, setProducts] = useState()
  const { push } = useHistory()
  useEffect(() => {
    async function loadOrders() {
      const { data } = await api.get('products')

      setProducts(data)
    }

    loadOrders()
  }, [])

  function isOffer(offerStatus) {
    if (offerStatus) {
      return <CheckBoxIcon style={{ color: 'green' }} />
    }
    return <CancelIcon style={{ color: '#CC1717' }} />
  }

  function editProduct(product) {
    push(paths.EditProduct, { product })
  }
  return (
    <Container>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Nome:</TableCell>
              <TableCell>Preço</TableCell>
              <TableCell align="center">Produto em oferta</TableCell>
              <TableCell align="center">imagem do Produto</TableCell>
              <TableCell>Editar produto</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products &&
              products.map(products => (
                <TableRow
                  key={products.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {products.name}
                  </TableCell>
                  <TableCell>{formatCurrency(products.price)}</TableCell>
                  <TableCell align="center">
                    {isOffer(products.offer)}
                  </TableCell>
                  <TableCell align="center">
                    <img
                      src={products.url}
                      alt="produto-imagem"
                      style={{
                        width: '60px',
                        height: '60px',
                        borderRadius: '5px'
                      }}
                    />
                  </TableCell>
                  <TableCell align="center">
                    <EditIcons onClick={() => editProduct(products)} />
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  )
}

export default ListProducts
