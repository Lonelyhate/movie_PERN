import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import AdminPage from './pages/AdminPage/AdminPage';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { MoviesAction } from './redux/actions/movies';
import {
    SET_COUNTRIES,
    SET_COUNTRIES_SUCCESS,
    SET_GENRES,
    SET_GENRES_SUCCESS,
    SET_MOVIES,
    SET_MOVIES_SUCCESS,
} from './redux/consts';
import { GenreAction } from './redux/actions/genre';
import { CountryAction } from './redux/actions/country';

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(
            new MoviesAction({
                typeLoading: SET_MOVIES,
                typeSuccess: SET_MOVIES_SUCCESS,
            }).getMovies(),
        );
        dispatch(
            new GenreAction({
                typeLoading: SET_GENRES,
                url: 'http://localhost:5000/api/genre',
                typeSuccess: SET_GENRES_SUCCESS,
            }).getGenre(),
        );
        dispatch(
            new CountryAction({
                typeLoading: SET_COUNTRIES,
                url: 'http://localhost:5000/api/country',
                typeSuccess: SET_COUNTRIES_SUCCESS,
            }).getCountries(),
        );
    }, []);

    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/admin" element={<AdminPage />} />
            </Routes>
        </div>
    );
}

export default App;
