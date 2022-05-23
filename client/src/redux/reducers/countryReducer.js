import { COUNTRY_ADD, COUNTRY_DELETE, SET_COUNTRIES, SET_COUNTRIES_SUCCESS } from "../consts"

const initialState = {
    countries: [],
    loading: false
}

export const countryReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_COUNTRIES:
            return {
                ...state,
                loading: true
            }
        case SET_COUNTRIES_SUCCESS:
            return {
                ...state,
                countries: action.payload,
                loading: false,
            }
        case COUNTRY_ADD:
            return {
                ...state,
                loading: false,
                countries: [...state.countries, action.payload]
            }
        case COUNTRY_DELETE:
            return {
                ...state,
                loading: false,
                countries: [...state.countries.filter(item => item.id != action.payload)]
            }
        default:
            return state
    }
}