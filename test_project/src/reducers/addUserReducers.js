import { ADD_USER } from "../actions/styles";


const initialState = [
    {
        userName: 'abc',
        fullName: 'xyz',
        email: 'gmail',
        password: '123'
    },
    {
        userName: 'dung',
        fullName: 'dang dung',
        email: 'dddg',
        password: '123'
    },
    {
        userName: 'hieu',
        fullName: 'minh hieu',
        email: 'minhhieu',
        password: '123'
    },

]

export default function (state = initialState, action) {
    switch (action.type) {
        case ADD_USER:
            return [...state,
            {
                userName: action.payload.userName,
                fullName: action.payload.fullName,
                email: action.payload.email,
                password: action.payload.password
            }
            ]
        default:
            return state
    }
}