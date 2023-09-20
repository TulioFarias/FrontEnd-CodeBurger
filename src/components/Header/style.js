import styled from 'styled-components'

export const Container = styled.div`
  background: #e5e5e5;
  height: 72px;
  display: flex;
  box-shadow: 2px 3px 5px rgba(0, 0, 0, 0.03);
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`
export const ContainerLeft = styled.div`
  display: flex;
  gap: 30px;
`

export const ContainerRigth = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`

export const PageLink = styled.a`
  cursor: pointer;
  text-decoration: none;
  color: ${props => (props.isActive ? ' #9758A6' : ' #555555')};
  line-height: normal;
  font-size: 16px;
  font-weight: ${props => (props.isActive ? ' bold' : ' normal')};
`

export const ContainerText = styled.div`
  font-size: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 16px;
  color: #555555;
`

export const Line = styled.div`
  height: 40px;
  border-right: 0.5px solid #bababa;
`

export const PageLinkExit = styled.a`
  color: #9758a6;
  font-size: 14px;
  font-weight: 700;
  line-height: normal;
  cursor: pointer;
`
