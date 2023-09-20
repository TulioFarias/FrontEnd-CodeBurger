import { PropTypes } from 'prop-types'
import React from 'react'

import { ErrorMessageStyle } from './styles'

export function ErrorMessage({ children }) {
  return <ErrorMessageStyle>{children}</ErrorMessageStyle>
}

ErrorMessage.propTypes = {
  children: PropTypes.string
}
