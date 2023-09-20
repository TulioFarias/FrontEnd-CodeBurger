import PropTypes from 'prop-types'
import React from 'react'
import { useHistory } from 'react-router-dom'

import { useCart } from '../../hooks/CardContext'
import { Button } from '../Button'
import {
  Container,
  Image,
  ProductName,
  ProductPrice,
  ContainerProducts
} from './style'

export function CardProduct({ product }) {
  const { push } = useHistory()
  const { putProductsCard } = useCart()
  return (
    <Container>
      <Image src={product.url} alt="imagem do produto" />

      <ContainerProducts>
        <ProductName>{product.name}</ProductName>
        <ProductPrice>{product.formatedPrice}</ProductPrice>
        <Button
          onClick={() => {
            putProductsCard(product)
            push('/carrinho')
          }}
        >
          Adicionar
        </Button>
      </ContainerProducts>
    </Container>
  )
}

CardProduct.propTypes = {
  product: PropTypes.object
}
