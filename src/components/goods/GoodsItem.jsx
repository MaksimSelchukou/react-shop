import React, { useState } from "react"

export const GoodsItem = (props) => {
  const { id, name, description, price, full_background, image, icon, addToBasket = Function.prototype } = props

  // const [counterItems, setCounterItems] = useState(0)



  const onClickHandle = () => {
    addToBasket({ id, name, price })
  }

  return (
    <div className="card">
      <div className="card-image">
        <img src={full_background} alt={name} />
      </div>
      <div className="card-content">
        <span className="card-title">{name}</span>
        <p>
          {description}
        </p>
      </div>
      <div className="card-action">
        <button onClick={onClickHandle}
          className="btn">Купить</button>
        <span className="right" style={{ fontSize: '1.8rem' }}>{price}.руб</span>
      </div>
    </div>
  )
}
