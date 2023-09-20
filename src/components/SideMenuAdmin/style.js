import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled.div`
  background: #3c3c3c;
  box-shadow: 0px 0px 14px 0px rgba(0, 0, 0, 0.15);
  width: 300px;
  top: 0;
  left: 0;
  padding: 10px;

  hr {
    margin: 100px 15px;
  }
`

export const ItemContainer = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  border-radius: 2px;
  background: ${props => (props.isActive ? '#565656' : 'none')};
  margin: 8px;

  .icon {
    color: white;
    margin: 15px;
  }
`

export const LinkItems = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`
