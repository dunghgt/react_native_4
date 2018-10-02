import { ADD_FAVOR_LIST } from "../actions/type";

export default function (state = [], action) {
    switch (action.type) {
        case ADD_FAVOR_LIST:
            return [
                {
                    id: action.payload.id,
                    title: action.payload.title,
                    image: action.payload.image,
                    vote_avg: action.payload.vote_avg,
                    vote_count: action.payload.vote_count,
                    popularity: action.payload.popularity
                }, ...state
            ]
    }
}