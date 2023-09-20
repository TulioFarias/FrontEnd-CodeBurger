import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

import { useCart } from '../../hooks/CardContext'
import api from '../../services/api'
import formatCurrency from '../../utils/formatCurrency'
import { Button } from '../Button'
import { Container } from './style'

export function CartResume() {
  const [finalPrice, setFinalPrice] = useState(0)
  const [deliveryTax] = useState(5)

  const { cardProducts } = useCart()

  useEffect(() => {
    const valueFinal = cardProducts.reduce((acc, current) => {
      return current.price * current.quantity + acc
    }, 0)

    setFinalPrice(valueFinal)
  }, [cardProducts, deliveryTax])

  const submitOrder = async () => {
    const order = cardProducts.map(product => {
      return { id: product.id, quantity: product.quantity }
    })

    await toast.promise(api.post('orders', { products: order }), {
      pending: 'Realizando seu pedido...',
      success: 'Pedido realizado com sucesso.',
      error: 'Falha ao tentar realizar o seu pedido, tente novamente...'
    })
  }

  return (
    <div>
      <Container>
        <div className="container-top">
          <h2 className="title">Resumo do pedido</h2>
          <p className="items">Itens</p>
          <p className="items-price">{formatCurrency(finalPrice)}</p>
          <p className="delivery-tax">Taxa de entrega</p>
          <p className="delivery-price">{formatCurrency(deliveryTax)}</p>
        </div>

        <div className="container-bottom">
          <p className="totalValue">Total:</p>
          <p className="priceTotal">
            {formatCurrency(finalPrice + deliveryTax)}
          </p>
        </div>
      </Container>
      <Button
        style={{ width: '100%', marginTop: '30px' }}
        onClick={submitOrder}
      >
        Finalizar Pedido
      </Button>
    </div>
  )
}
