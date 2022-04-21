import { useEffect, useState } from "react"
import { API_KEY, API_URL } from '../config'
import { Preloader } from './Preloader'
import { GoodsList } from './goods/GoodsList'
import { Cart } from "./Cart"
import { BasketList } from "./basket/BasketList"
import { Alert } from "./Alert"

export const Shop = () => {
    const [goods, setGoods] = useState([])
    const [loading, setLoading] = useState(true)
    const [order, setOrder] = useState([])
    const [isBasketShow, setBasketShow] = useState(false)
    const [alertName, setAlertName] = useState('')

    const closedAlert = () => {
        setAlertName('')
    }


    const incrOrder = (itemId) => {
        const newOrder = order.map(el => {
            if (el.id === itemId) {
                return {
                    ...el,
                    quantity: el.quantity + 1
                }
            } else {
                return el
            }
        })
        setOrder(newOrder)
    }

    const decrOrder = (itemId) => {
        const newOrder = order.map(el => {
            if (el.id === itemId) {
                return {
                    ...el,
                    quantity: (el.quantity - 1) > 0 ? (el.quantity - 1) : el.quantity = 0
                }
            } else {
                return el
            }
        })
        setOrder(newOrder)

    }

    const deleteToBasket = (idItem) => {
        // console.log(idItem)
        setOrder(order.filter(order => order.id !== idItem))
    }

    const addToBasket = (item) => {
        const itemIndex = order.findIndex(el => el.id === item.id)
        if (itemIndex < 0) {
            const newItem = {
                ...item,
                quantity: 1,
            }
            setOrder([...order, newItem])
        } else {
            const newOrder = order.map((orderItem, index) => {
                if (index === itemIndex) {
                    return {
                        ...orderItem,
                        quantity: orderItem.quantity + 1
                    }

                } else {
                    return orderItem
                }
            })
            setOrder(newOrder)
        }
        setAlertName(item.name)
    }

    const handleBasketShow = () => {
        setBasketShow(!isBasketShow)
    }
    useEffect(function getGoods() {
        fetch(API_URL, {
            headers: {
                'Authorization': API_KEY,
            }
        }
        ).then((response) => response.json()
        ).then((data) => {
            data.featured && setGoods(data.featured)
            setLoading(false)
        })
    }, [])
    return (

        <main className="container content">
            <Cart quantity={order.length} handleBasketShow={handleBasketShow} />
            {loading ? <Preloader /> : <GoodsList addToBasket={addToBasket} goods={goods} />}
            {isBasketShow && <BasketList order={order} handleBasketShow={handleBasketShow} deleteToBasket={deleteToBasket} incrOrder={incrOrder} decrOrder={decrOrder} />}
            {alertName && <Alert name={alertName} closedAlert={closedAlert} />}
        </main>
    );
}