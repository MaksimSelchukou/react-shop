import { useEffect } from 'react'

export const Alert = (props) => {
  const { name = '', closedAlert = Function.prototype } = props

  useEffect(() => {
    const timerId = setTimeout(closedAlert, 3000)
    return () => {
      clearTimeout(timerId)
    }
  }, [name])

  return (
    <div id="toast-container">
      <div className="toast">{name} добавлен в корзину</div>
    </div>
  )
}
