export function reducer(state, { type, payload }) {
  switch (type) {
    case 'INCREMENT_ORDER': {
      return {
        ...state,
        order: state.order.map((el) => {
          if (el.id === payload.id) {
            return {
              ...el,
              quantity: el.quantity + 1,
            }
          } else {
            return el
          }
        }),
      }
    }

    case 'DECREMENT_ORDER': {
      return {
        ...state,
        order: state.order.map((el) => {
          if (el.id === payload.id) {
            return {
              ...el,
              quantity: el.quantity - 1 > 0 ? el.quantity - 1 : (el.quantity = 0),
            }
          } else {
            return el
          }
        }),
      }
    }

    case 'CLOSE_ALERT': {
      return {
        ...state,
        alertName: '',
      }
    }
    case 'REMOVE_BASKET': {
      return {
        ...state,
        order: state.order.filter((el) => el.id !== payload.id),
      }
    }
    case 'BASKET_SHOW': {
      return {
        ...state,
        isBasketShow: true,
      }
    }
    case 'ADD_TO_BASKET': {
      const itemIndex = state.order.findIndex((el) => el.id === payload.id)
      let newOrder = null
      if (itemIndex < 0) {
        const newItem = {
          ...payload,
          quantity: 1,
        }
        newOrder = [...state.order, newItem]
      } else {
        newOrder = state.order.map((orderItem, index) => {
          if (index === itemIndex) {
            return {
              ...orderItem,
              quantity: orderItem.quantity + 1,
            }
          } else {
            return orderItem
          }
        })
      }
      return {
        ...state,
        order: newOrder,
        alertName: payload.name,
      }
    }
    default:
      return state
  }
}
