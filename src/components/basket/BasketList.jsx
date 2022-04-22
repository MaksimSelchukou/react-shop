import React from "react";
import { BasketItem } from "./BasketItem";


export const BasketList = (props) => {
    const { order = [], handleBasketShow = Function.prototype, deleteToBasket = Function.prototype, incrOrder = Function.prototype, decrOrder = Function.prototype } = props;

    const totalPrice = order.reduce((sum, el) => {
        return sum + el.price * el.quantity
    }, 0)



    return (
        <ul className="collection basket-list">
            <li className="collection-item active">Корзина</li>
            {order.length ? order.map(el => (
                <BasketItem key={el.id} {...el} deleteToBasket={deleteToBasket} incrOrder={incrOrder} decrOrder={decrOrder} />
            )) : <li className="collection-item ">Корзина пуста</li>
            }

            <li className="collection-item active">Общая стоимость:{totalPrice} руб
                <button className="btn waves-effect waves-light btn-small send-btn" type="submit" name="action">Оформить заказ
                    <i className="material-icons right">send</i>
                </button></li>

            <i onClick={handleBasketShow} className="material-icons basket-close">Закрыть корзину</i>
        </ul>
    )
}