import React from 'react'

import HomeLogo from '../../assets/assetsHome/logo.svg'
import { CategoriasCarousel, OfertasCarousel } from '../../components'
import { Container, HomeImg } from './style'

export function Home() {
  return (
    <Container>
      <HomeImg src={HomeLogo} alt="Home-logo" />
      <CategoriasCarousel />
      <OfertasCarousel />
    </Container>
  )
}
