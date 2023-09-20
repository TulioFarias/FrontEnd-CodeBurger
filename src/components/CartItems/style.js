import styled from 'styled-components'

export const Container = styled.div`
  background-color: #ffff;
  box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.03);
  border-radius: 20px;
  padding: 10px;
  width: max-content;
`

export const Header = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  padding: 10px;
  border-bottom: 1px solid #b5b5b5;

  p {
    font-size: 16px;
    color: #b5b5b5;
    text-align: center;
  }
`

export const Body = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  padding: 10px;
  width: max-content;
  grid-gap: 10px 15px;

  p {
    font-size: 16px;
    text-align: center;
  }

  .quantity-container {
    display: flex;
    gap: 20px;
    justify-content: center;

    button {
      height: 30px;
      width: 20px;
      background: transparent;
      border: none;
      font-size: 24px;
      cursor: pointer;

      &:hover {
        transform: scale(1.01);
        transition: all ease-in-out;
      }
    }
  }
`

export const ImagemProducts = styled.img`
  width: 150px;
  height: 130px;
  border-radius: 10px;
`

export const EmptyCart = styled.p`
  padding: 10px;
  font-weight: bold;
  text-align: center;
`

export const LogoLixeira = styled.img`
  width: 40px;
  height: 40px;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }
`
