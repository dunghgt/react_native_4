import { ADD_ORDER, DEL_ORDER, TOTAL_ORDER, CLEAR_ORDER } from './type'

export const addOrder = (orders) => ({
    type: ADD_ORDER,
    //{name, amount, unitPrice}
    payload: orders
})

export const delOrder = (item) => ({
    type: DEL_ORDER,
    payload: item,
})

export const clearOrder = (orders) => ({
    type: CLEAR_ORDER,
    payload: orders
})