import { createContext, useReducer } from 'react'
import { reducer } from './reducer'

export const ShopContext = createContext()

const initialValue = {
  goods: [],
  loading: true,
  order: [],
  isBasketShow: false,
  alertName: '',
}

export const Context = ({ children }) => {
  const [value, dispatch] = useReducer(reducer, initialValue)

  value.closeAlert = () => {
    dispatch({ type: 'CLOSE_ALERT' })
  }

  value.deleteToBasket = (idItem) => {
    dispatch({ type: 'REMOVE_BASKET', payload: { id: idItem } })
  }

  value.basketShow = () => {
    dispatch({ type: 'BASKET_SHOW' })
  }

  value.addToBasket = (item) => {
    dispatch({ type: 'ADD_TO_BASKET', payload: item })
  }

  value.incOrder = (itemId) => {
    dispatch({ type: 'INCREMENT_ORDER', payload: { id: itemId } })
  }

  value.decrOrder = (itemId) => {
    dispatch({ type: 'DECREMENT_ORDER', payload: { id: itemId } })
  }

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>
}
