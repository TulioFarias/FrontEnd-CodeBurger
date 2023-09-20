import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import React, { useEffect, useState } from 'react'

import api from '../../../services/api'
import formatDate from '../../../utils/formtaDate'
import status from './OrderStatus'
import Row from './row'
import { Container, Menu, LinkMenu } from './style'

function Orders() {
  const [orders, setOrders] = useState([])
  const [filterOrders, setfilterOrders] = useState([])
  const [activeStatus, setactiveStatus] = useState(1)
  const [rows, setRows] = useState([])

  useEffect(() => {
    async function loadOrders() {
      const { data } = await api.get('orders')

      setOrders(data)
      setfilterOrders(data)
    }

    loadOrders()
  }, [])

  function createData(order) {
    return {
      name: order.user.name,
      orderId: order._id,
      date: formatDate(order.createdAt),
      status: order.status,
      products: order.products
    }
  }

  useEffect(() => {
    const newRows = filterOrders.map(order => createData(order))

    setRows(newRows)
  }, [filterOrders])

  useEffect(() => {
    if (activeStatus === 0) {
      setfilterOrders(orders)
    } else {
      const statusIndex = status.findIndex(status => status.id === activeStatus)

      const newFilterOrders = orders.filter(
        order => order.status === status[statusIndex].value
      )

      setfilterOrders(newFilterOrders)
    }
  }, [orders])

  function showStatus(status) {
    if (status.id === 0) {
      setfilterOrders(orders)
    } else {
      const newOrders = orders.filter(order => order.status === status.value)

      setfilterOrders(newOrders)
    }

    setactiveStatus(status.id)
  }

  return (
    <Container>
      <Menu>
        {status &&
          status.map(status => (
            <LinkMenu
              key={status.id}
              onClick={() => showStatus(status)}
              isActiveStatus={activeStatus === status.id}
            >
              {status.label}
            </LinkMenu>
          ))}
      </Menu>

      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>Pedido</TableCell>
              <TableCell>Cliente</TableCell>
              <TableCell>Data do Pedido</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <Row
                key={row.orderId}
                row={row}
                setOrders={setOrders}
                orders={orders}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  )
}

export default Orders
