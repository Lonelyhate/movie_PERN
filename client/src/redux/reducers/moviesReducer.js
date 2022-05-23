import { MOVIES_ADD, MOVIES_DELETE, SET_MOVIES, SET_MOVIES_SUCCESS } from "../consts";

const initialState = {
    movies: [],
    loading: false
}

export const moviesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_MOVIES:
            return {
                ...state,
                loading: true
            }
        case SET_MOVIES_SUCCESS:
            return {
                ...state,
                loading: false,
                movies: action.payload
            }
        case MOVIES_ADD:
            return {
                ...state,
                loading: false,
                movies: [...state.movies, action.payload]
            }
        case MOVIES_DELETE:
            return {
                ...state,
                loading: false,
                movies: [...state.movies.filter(item => item.id != action.payload)]
            }
        default:
            return state
    }
}