import { ADD_USER } from './styles'

export const addUser = (users) => ({
    type: ADD_USER,
    payload: users
})