import styled from 'styled-components'

export const Container = styled.div`
  background-color: #ffff;
  box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.03);
  border-radius: 20px;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  .container-top {
    display: grid;
    grid-template-areas:
      'title tile'
      'items items-price'
      'delivery-tax delivery-price';
    grid-gap: 20px 50px;

    .title {
      grid-area: title;
    }
    .items {
      grid-area: items;
    }
    .items-price {
      grid-area: items-price;
    }
    .delivery-tax {
      grid-area: delivery-tax;
    }

    .delivery-price {
      grid-area: delivery-price;
    }
  }

  .container-bottom {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: 25px;
    font-weight: bold;
    margin-top: 50px;
  }
`
