import { CHOICERIGHT_UNIT } from "../actions/type";


const initState = [{
    id: 0,
    value: true
},
{
    id: 1,
    value: false
},
{
    id: 2,
    value: false
},
{
    id: 3,
    value: false
},
]

export default function (state = initState, action) {
    switch (action.type) {
        case CHOICERIGHT_UNIT:
            return state.map(item => (item.id === action.payload.index)
                ? {
                    id: item.id,
                    value: !item.value
                }
                : {
                    id: item.id,
                    value: false
                })

        default:
            return state
    }
}