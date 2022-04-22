import { createContext } from 'react'

export const ShopContext = createContext()

export const Context = ({ children }) => {
  const value = {
    example: 'This is context,Helloy!',
  }
  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>
}
