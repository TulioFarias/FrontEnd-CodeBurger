import styled from 'styled-components'

export const Container = styled.div`
  background: #efefef;
  min-height: calc(100vh - 72px);
`

export const ProductsImg = styled.img`
  width: 100%;
`

export const ContainerCategory = styled.div`
  display: flex;
  justify-content: center;
  gap: 55px;
  margin-top: 20px;
`

export const CategoryButton = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  border-bottom: ${props => props.isActiveCategory && ' 2px solid #975BA6'};
  padding-bottom: 5px;
  color: ${props => (props.isActiveCategory ? '#975BA6' : '#9a9a9a')};
  font-size: 20px;
  line-height: 20px;
`

export const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding: 40px;
  justify-items: center;
  margin-top: 20px;
`
