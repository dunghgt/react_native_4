import { ADD_FAVOR_LIST } from "./type";


export const addFavorList = (data) => ({
    type: ADD_FAVOR_LIST,
    payload: data,
})