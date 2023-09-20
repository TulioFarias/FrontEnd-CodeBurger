import PropTypes from 'prop-types'
import React, { createContext, useContext, useEffect, useState } from 'react'

const CardContext = createContext({})

export const CardProvider = ({ children }) => {
  const [cardProducts, setCardProducts] = useState([])

  const updateLocalStorage = async products => {
    await localStorage.setItem('codeburger:cartInfo', JSON.stringify(products))
  }

  const putProductsCard = async product => {
    const cartIndex = cardProducts.findIndex(
      findProduct => findProduct.id === product.id
    )
    let newCartProducts = []
    if (cartIndex >= 0) {
      newCartProducts = cardProducts

      newCartProducts[cartIndex].quantity =
        newCartProducts[cartIndex].quantity + 1

      setCardProducts(newCartProducts)
    } else {
      product.quantity = 1
      newCartProducts = [...cardProducts, product]
      setCardProducts(newCartProducts)
    }

    await updateLocalStorage(newCartProducts)
  }

  const deleteProducts = async ProductId => {
    const newCart = cardProducts.filter(product => product.id !== ProductId)

    setCardProducts(newCart)
  }

  const deleteLixeira = async ProductId => {
    const deleteCart = cardProducts.filter(product => product.id !== ProductId)

    setCardProducts(deleteCart)
  }

  const increaseProducts = async ProductId => {
    const newCart = cardProducts.map(product => {
      return product.id === ProductId
        ? { ...product, quantity: product.quantity + 1 }
        : product
    })

    setCardProducts(newCart)

    await updateLocalStorage(newCart)
  }

  const decreaseProducts = async ProductId => {
    const cartIndex = cardProducts.findIndex(
      produto => produto.id === ProductId
    )

    if (cardProducts[cartIndex].quantity > 1) {
      const newCart = cardProducts.map(product => {
        return product.id === ProductId
          ? { ...product, quantity: product.quantity - 1 }
          : product
      })

      setCardProducts(newCart)

      await updateLocalStorage(newCart)
    } else {
      deleteProducts(ProductId)
    }
  }

  useEffect(() => {
    const loadUserData = async () => {
      const clientCardData = await localStorage.getItem('codeburger:cartInfo')

      if (clientCardData) {
        setCardProducts(JSON.parse(clientCardData))
      }
    }

    loadUserData()
  }, [])

  return (
    <CardContext.Provider
      value={{
        putProductsCard,
        cardProducts,
        increaseProducts,
        decreaseProducts,
        deleteProducts,
        deleteLixeira
      }}
    >
      {children}
    </CardContext.Provider>
  )
}

export const useCart = () => {
  const context = useContext(CardContext)

  if (!context) {
    throw new Error('Deu um errozinho!')
  }

  return context
}

CardProvider.propTypes = {
  children: PropTypes.node
}
