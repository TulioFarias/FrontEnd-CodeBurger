import styled from 'styled-components'

import Background from '../../assets/assetsLogin/fundo.svg'

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background: url('${Background}');
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const LoginImage = styled.img`
  height: 75%;
`

export const ContainerItens = styled.div`
  background: #373737;
  border-radius: 0 10px 10px 0;
  height: 75%;
  padding: 25px 75px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    color: #ffff;
    text-align: center;
    margin-top: 100px;
  }

  form {
    display: flex;
    flex-direction: column;
  }
`

export const Label = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  color: #ffff;
  margin-top: 28px;
  margin-bottom: 5px;
`

export const Input = styled.input`
  width: 391.42px;
  height: 38.32px;
  background-color: #ffff;
  box-shadow: 3px 3px 10px rgba(74, 144, 226, 0.19);
  border: ${props => (props.error ? '1px solid red' : 'none')};
  border-radius: 5px;
  padding-left: 10px;
`

export const SingIngLink = styled.p`
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  color: #ffff;

  a {
    cursor: pointer;
    color: #9758a6;
    text-decoration: underline;

    &:hover {
      opacity: 0.8;
    }
  }
`
