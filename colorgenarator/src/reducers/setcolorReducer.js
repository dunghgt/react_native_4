import { SET_COLOR } from "../actions/type";

const initialState = [
    {
        id: 0,
        number: 255,
    },
    {
        id: 1,
        number: 152,
    },
    {
        id: 2,
        number: 0,
    },
]

export default function (state = initialState, action) {
    switch (action.type) {
        case SET_COLOR:
            return [
                ...(state.filter(item => item.id !== action.payload.id)),
                {
                    id: action.payload.id,
                    number: action.payload.number
                }
            ].sort((color1, color2) => color1.id - color2.id)
        default:
            return state
    }
}