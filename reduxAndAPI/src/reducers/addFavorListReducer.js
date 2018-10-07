import { ADD_FAVOR_LIST, DEL_FAVOR_LIST } from "../actions/type";

export default function (state = [], action) {
    switch (action.type) {
        case ADD_FAVOR_LIST:
            const newMovie = state.filter(item => item.id === action.payload.id)
            if (newMovie.length !== 0) {
                return state
            } else {
                return [
                    {
                        id: action.payload.id,
                        original_title: action.payload.original_title,
                        poster_path: action.payload.poster_path,
                        vote_average: action.payload.vote_average,
                        vote_count: action.payload.vote_count,
                        popularity: action.payload.popularity,
                        release_date: action.payload.release_date,
                        backdrop_path: action.payload.backdrop_path,
                        overview: action.payload.overview
                    }, ...state
                ]
            }
        case DEL_FAVOR_LIST:
            return [...(state.filter(item => item.id !== action.payload.id))]
        default:
            return state
    }
}