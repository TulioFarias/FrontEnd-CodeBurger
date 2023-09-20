import ReactSelect from 'react-select'
import styled from 'styled-components'

export const Container = styled.div`
  background: #efefef;
  min-height: 100vh;
`
export const ProductsImg = styled.img`
  width: 60px;
  border-radius: 10px;
`

export const ReactSelectStyle = styled(ReactSelect)`
  width: 250px;
  border-radius: 10px;

  .css-13cymwt-control {
    cursor: pointer;
  }
`
export const Menu = styled.div`
  display: flex;
  gap: 50px;
  justify-content: center;
  margin: 20px 0;
`

export const LinkMenu = styled.a`
  color: #323d5d;
  cursor: pointer;
  font-weight: ${props => (props.isActiveStatus ? 'bold' : 'normal')};
  border-bottom: ${props =>
    props.isActiveStatus ? ' 1px solid #9758A6' : 'none'};
  padding-bottom: 5px;
`
