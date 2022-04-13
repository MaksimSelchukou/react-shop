import { GoodsItem } from "./GoodsItem"


export const GoodsList = (props) => {
  const { goods = [], addToBasket = Function.prototype } = props

  if (!goods.length) {
    return <h2>Nothing here</h2>
  }

  return (
    <div className="goods">
      {goods.map((item) => {
        return <GoodsItem key={item.id} {...item} addToBasket={addToBasket} />
      })
      }
    </div>
  )
}





