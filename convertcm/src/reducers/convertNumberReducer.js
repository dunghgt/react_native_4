import { CONVERT_NUMBER } from "../actions/type";

export default function (state = [], action) {
    switch (action.type) {
        case CONVERT_NUMBER:
            const check = (action.payload.index2 - action.payload.index1)
            return check >= 0 ? action.payload.number / (check * 10)
                : action.payload.number * ((-check) * 10)

        default:
            return state
    }
}