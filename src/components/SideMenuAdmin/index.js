import LogoutItem from '@mui/icons-material/LogoutOutlined'
import PropTypes from 'prop-types'
import React from 'react'

import { useUser } from '../../hooks/UserContext'
import listLinks from './menu-list'
import { Container, ItemContainer, LinkItems } from './style'

export function SideMenuAdmin({ path }) {
  const { logout } = useUser()
  return (
    <Container>
      <hr></hr>

      {listLinks.map(item => (
        <ItemContainer key={item.id} isActive={path === item.link}>
          <item.icon className="icon" />
          <LinkItems to={item.link}>{item.label}</LinkItems>
        </ItemContainer>
      ))}

      <hr></hr>

      <ItemContainer style={{ position: 'fixed', bottom: '30px' }}>
        <LogoutItem style={{ color: '#fff' }} />
        <LinkItems to="/login" onClick={logout}>
          Sair
        </LinkItems>
      </ItemContainer>
    </Container>
  )
}

SideMenuAdmin.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string
  })
}
