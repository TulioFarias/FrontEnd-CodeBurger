import React from 'react'

import lixeiraImg from '../../assets/assetsHome/lixeira.svg'
import { useCart } from '../../hooks/CardContext'
import formatCurrency from '../../utils/formatCurrency'
import {
  Container,
  Header,
  Body,
  EmptyCart,
  LogoLixeira,
  ImagemProducts
} from './style'

export function CartItems() {
  const { cardProducts, increaseProducts, decreaseProducts, deleteLixeira } =
    useCart()

  console.log(cardProducts)
  return (
    <Container>
      <Header>
        <p></p>
        <p>Itens</p>
        <p>Preço</p>
        <p>Quantidade</p>
        <p>Total</p>
      </Header>

      {cardProducts && cardProducts.length > 0 ? (
        cardProducts.map(product => (
          <Body key={product.id}>
            <ImagemProducts src={product.url}></ImagemProducts>
            <p>{product.name}</p>
            <p>{formatCurrency(product.price)}</p>

            <div className="quantity-container">
              <button onClick={() => decreaseProducts(product.id)}>-</button>

              <p>{product.quantity}</p>

              <button onClick={() => increaseProducts(product.id)}>+</button>
            </div>
            <p>{formatCurrency(product.quantity * product.price)}</p>
            <LogoLixeira
              src={lixeiraImg}
              onClick={() => deleteLixeira(product.id)}
            ></LogoLixeira>
          </Body>
        ))
      ) : (
        <EmptyCart>Carrinho Vazio</EmptyCart>
      )}
    </Container>
  )
}
