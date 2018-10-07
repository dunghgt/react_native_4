import { ADD_FAVOR_LIST, DEL_FAVOR_LIST } from "./type";


export const addFavorList = (data) => ({
    type: ADD_FAVOR_LIST,
    payload: data,
})

export const delFavorList = (item) => ({
    type: DEL_FAVOR_LIST,
    payload: item,
})