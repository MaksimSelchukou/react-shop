import { useEffect, useState } from "react"
import { API_KEY, API_URL } from '../config'
import { Preloader } from './Preloader'
import { GoodsList } from './goods/GoodsList'
import { Cart } from "./Cart"

export const Shop = () => {
    const [goods, setGoods] = useState([])
    const [loading, setLoading] = useState(true)
    const [order, setOrder] = useState([])
    console.log(order)

    useEffect(function () {
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

    const addToBasket = (item) => {
        // debugger

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
                    return item
                }
            })
            setOrder(newOrder)
        }

    }
    // debugger
    return (

        <main className="container content">
            <Cart quantity={order.length} />
            {loading ? <Preloader /> : <GoodsList addToBasket={addToBasket} goods={goods} />}
        </main>
    );
}