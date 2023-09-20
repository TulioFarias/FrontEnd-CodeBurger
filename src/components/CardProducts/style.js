import styled from 'styled-components'

export const Container = styled.div`
  border-radius: 30px;
  background: #fff;
  box-shadow: 0px 30px 60px 0px rgba(57, 57, 57, 0.1);
  display: flex;
  gap: 12px;
  padding: 16px;
  width: max-content;
`

export const Image = styled.img`
  width: 150px;
  height: 130px;
  border-radius: 10px;
`
export const ProductName = styled.p`
  color: #000;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`
export const ProductPrice = styled.p`
  color: #000;
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-top: 30px;
`
export const ContainerProducts = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
