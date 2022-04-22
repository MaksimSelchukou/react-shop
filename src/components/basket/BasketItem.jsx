import React, { useContext } from "react";
import { ShopContext } from "../../context";


export const BasketItem = (props) => {
    const { id, name, price, quantity, deleteToBasket = Function.prototype, incrOrder = Function.prototype, decrOrder = Function.prototype } = props;

    const { example } = useContext(ShopContext)
    console.log(example);

    const handleIncrem = () => {
        incrOrder(id)
    }

    const handleDecrem = () => {
        decrOrder(id)
    }

    const handleDeleteOrder = () => {
        deleteToBasket(id)
    }

    return <li className="collection-item ">
        {name}  <button onClick={handleDecrem}>-</button> {quantity}.шт <button onClick={handleIncrem}>+</button> = {price * quantity}.руб
        <span className="secondary-content">
            <i onClick={handleDeleteOrder} className="material-icons basket-delete">close</i>
        </span>
    </li>
}