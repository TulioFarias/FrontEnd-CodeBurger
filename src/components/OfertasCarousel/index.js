import React, { useEffect, useState } from 'react'
import Carousel from 'react-elastic-carousel'
import { useHistory } from 'react-router-dom'

import OfertasImg from '../../assets/assetsHome/ofertas.png'
import { useCart } from '../../hooks/CardContext'
import api from '../../services/api'
import formatCurrency from '../../utils/formatCurrency'
import {
  Container,
  OfertaImg,
  ContainerItems,
  ImageCategories,
  Button
} from './style'

export function OfertasCarousel() {
  const { putProductsCard } = useCart()
  const { push } = useHistory()
  const [ofertas, setOfertas] = useState([])
  useEffect(() => {
    async function loadOfertas() {
      const { data } = await api.get('products')

      const onlyOffer = data
        .filter(product => product.offer)
        .map(product => {
          return { ...product, formatedPrice: formatCurrency(product.price) }
        })

      setOfertas(onlyOffer)
    }

    loadOfertas()
  }, [])

  const showBreakPoints = [
    { width: 1, itensToShow: 1 },
    { width: 400, itensToShow: 2 },
    { width: 600, itensToShow: 3 },
    { width: 900, itensToShow: 4 },
    { width: 1300, itensToShow: 5 }
  ]
  return (
    <Container>
      <OfertaImg src={OfertasImg} alt="ofertas-img" style={{ width: '12%' }} />

      <Carousel
        itemsToShow={3}
        style={{ width: '90%' }}
        breakPoints={showBreakPoints}
      >
        {ofertas &&
          ofertas.map(product => (
            <ContainerItems key={product.id}>
              <ImageCategories src={product.url} alt="product-img" />
              <p>{product.name}</p>
              <p>{product.formatedPrice}</p>

              <Button
                onClick={() => {
                  putProductsCard(product)
                  push('/carrinho')
                }}
              >
                Peça Agora
              </Button>
            </ContainerItems>
          ))}
      </Carousel>
    </Container>
  )
}
