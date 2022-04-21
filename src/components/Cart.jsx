export const Cart = (props) => {
  const { quantity = 0, handleBasketShow = Function.prototype } = props

  return (
    <div onClick={handleBasketShow} className="cart blue darken-4 white-text">
      <i className="material-icons">add_shopping_cart</i>
      {quantity ? <span className="cart-quantity">{quantity}</span> : null}
    </div>
  )
}
