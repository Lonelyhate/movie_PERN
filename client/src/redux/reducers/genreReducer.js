import { GENRE_ADD, GENRE_DELETE, SET_GENRES, SET_GENRES_SUCCESS } from '../consts';

const initialState = {
    genres: [],
    loading: false,
};

export const genreReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_GENRES:
            return {
                ...state,
                loading: true,
            };
        case SET_GENRES_SUCCESS:
            return {
                ...state,
                loading: false,
                genres: action.payload,
            };
        case GENRE_ADD:
            return {
                ...state,
                loading: false,
                genres: [...state.genres, action.payload],
            };
        case GENRE_DELETE:
            return {
                ...state,
                loading: false,
                genres: [...state.genres.filter((item) => item.id != action.payload)],
            };
        default:
            return state;
    }
};
