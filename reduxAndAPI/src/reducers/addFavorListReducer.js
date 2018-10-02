import { ADD_FAVOR_LIST } from "../actions/type";

export default function (state = [], action) {
    switch (action.type) {
        case ADD_FAVOR_LIST:
            return [
                {
                    id: action.payload.id,
                    original_title: action.payload.original_title,
                    poster_path: action.payload.poster_path,
                    vote_average: action.payload.vote_average,
                    vote_count: action.payload.vote_count,
                    popularity: action.payload.popularity
                }, ...state
            ]
        default:
            return state
    }
}