import PropTypes from 'prop-types'
import React from 'react'

import { CardProvider } from './CardContext'
import { UserProvider } from './UserContext'

const AppProvider = ({ children }) => (
  <CardProvider>
    <UserProvider>{children}</UserProvider>
  </CardProvider>
)

AppProvider.propTypes = {
  children: PropTypes.node
}

export default AppProvider
