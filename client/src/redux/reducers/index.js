import { combineReducers } from 'redux';
import { genreReducer } from './genreReducer';
import { countryReducer } from './countryReducer';
import { moviesReducer } from './moviesReducer';

const rootReducer = combineReducers({
    genreReducer,
    countryReducer,
    moviesReducer
});

export default rootReducer;
