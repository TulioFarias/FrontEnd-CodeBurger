import React, { useEffect, useState } from 'react'
import Carousel from 'react-elastic-carousel'

import Categorias from '../../assets/assetsHome/categorias.png'
import api from '../../services/api'
import {
  Container,
  CategoriaImg,
  ContainerItems,
  ImageCategories,
  Button
} from './style'

export function CategoriasCarousel() {
  const [categories, setCategories] = useState([])
  useEffect(() => {
    async function loadCategorias() {
      const { data } = await api.get('categories')

      setCategories(data)
    }

    loadCategorias()
  }, [])

  const breakPoints = [
    { width: 1, itensToShow: 1 },
    { width: 400, itensToShow: 2 },
    { width: 600, itensToShow: 3 },
    { width: 900, itensToShow: 4 },
    { width: 1300, itensToShow: 5 }
  ]
  return (
    <Container>
      <CategoriaImg src={Categorias} alt="Home-logo" style={{ width: '15%' }} />

      <Carousel
        itemsToShow={5}
        style={{ width: '90%' }}
        breakPoints={breakPoints}
      >
        {categories &&
          categories.map(category => (
            <ContainerItems key={category.id}>
              <ImageCategories src={category.url} alt="categorias-img" />

              <Button
                to={{
                  pathname: '/produtos',
                  state: { categoryId: category.id }
                }}
              >
                {category.name}
              </Button>
            </ContainerItems>
          ))}
      </Carousel>
    </Container>
  )
}
