import React from 'react'

import logoCarrinho from '../../assets/assetsHome/logo-carrinho.svg'
import { CartItems, CartResume } from '../../components'
import { CartImg, Container, ContainerItems } from './style'

export function Cart() {
  return (
    <Container>
      <CartImg src={logoCarrinho} alt="Cart-logo" />

      <ContainerItems>
        <CartItems />
        <CartResume />
      </ContainerItems>
    </Container>
  )
}
