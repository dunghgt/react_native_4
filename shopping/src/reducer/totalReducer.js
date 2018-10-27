import { TOTAL_ORDER } from "../actions/type";

export default function (state = [{ totalOrder: 0, totalPrice: 0 }], action) {
    switch (action.type) {
        case TOTAL_ORDER:
            return [{
                totalOrder: totalOrder + 1,
                totalPrice: totalPrice + action.payload.price
            }]
        default:
            return state
    }

}