import React from 'react'
import { useHistory } from 'react-router-dom'

import Cart from '../../assets/assetsHeader/carrinho.svg'
import Person from '../../assets/assetsHeader/login.svg'
import { useUser } from '../../hooks/UserContext'
import {
  Container,
  ContainerLeft,
  ContainerRigth,
  PageLink,
  ContainerText,
  Line,
  PageLinkExit
} from './style'

export function Header() {
  const { logout, userData } = useUser()
  const {
    push,
    location: { pathname }
  } = useHistory()

  const logoutUser = () => {
    logout()
    push('/login')
  }

  return (
    <Container>
      <ContainerLeft>
        <PageLink onClick={() => push('/')} isActive={pathname === '/'}>
          Home
        </PageLink>
        <PageLink
          onClick={() => push('/produtos')}
          isActive={pathname.includes('produtos')}
        >
          Ver produtos
        </PageLink>
      </ContainerLeft>

      <ContainerRigth>
        <PageLink>
          <img src={Cart} alt="carrinho" onClick={() => push('/carrinho')} />
        </PageLink>

        <Line></Line>
        <PageLink>
          <img src={Person} alt="login" />
        </PageLink>

        <ContainerText>
          <p>Olá, {userData.name}</p>
          <PageLinkExit onClick={logoutUser}>Sair</PageLinkExit>
        </ContainerText>
      </ContainerRigth>
    </Container>
  )
}
