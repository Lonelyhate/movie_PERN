import React, { useEffect, useState } from 'react';
import './Inner.scss';
import { RiSearchEyeLine } from 'react-icons/ri';
import Select from '../Select/Select';
import { useDispatch, useSelector } from 'react-redux';
import { GenreAction, getGenre } from '../../redux/actions/genre';
import {
    SET_COUNTRIES,
    SET_COUNTRIES_SUCCESS,
    SET_GENRES,
    SET_GENRES_SUCCESS,
    SET_MOVIES,
    SET_MOVIES_SUCCESS,
} from '../../redux/consts';
import { CountryAction } from '../../redux/actions/country';
import { MoviesAction } from '../../redux/actions/movies';

const Inner = () => {
    const dispatch = useDispatch();
    const genres = useSelector((state) => state.genreReducer.genres);
    const countries = useSelector((state) => state.countryReducer.countries);
    const [searchName, setSearchName] = useState('');
    const [genreId, setGenreId] = useState('');
    const [countryId, setCountryId] = useState('');
    const [ratingId, setRatingId] = useState('');
    const [yearId, setYearId] = useState('');
    const ratings = [
        {
            id: 1,
            name: '1+',
        },
        {
            id: 2,
            name: '2+',
        },
        {
            id: 3,
            name: '3+',
        },
        {
            id: 4,
            name: '4+',
        },
        {
            id: 5,
            name: '5+',
        },
        {
            id: 6,
            name: '6+',
        },
        {
            id: 7,
            name: '7+',
        },
        {
            id: 8,
            name: '8+',
        },
        {
            id: 9,
            name: '9+',
        },
    ];

    const ar = Array.from({ length: 53 }, (_, index) => new Date().getFullYear() - index);
    [...Array(7)].map((_, index) => new Date().getFullYear() - index);
    const years = [];
    ar.forEach((item) => {
        years.push({
            id: item,
            name: item,
        });
    });

    const searchMovieHandler = () => {
        dispatch(
            new MoviesAction({
                typeLoading: SET_MOVIES,
                typeSuccess: SET_MOVIES_SUCCESS,
                search: searchName,
                genre: genreId,
                country: countryId,
                rating: ratingId,
                year: yearId
            }).getMovies(),
        );
    };

    return (
        <div className="inner">
            <div className="inner__container container">
                <div className="inner__content">
                    <div className="inner__search-block">
                        <h2 className="inner__title">Поиск фильмов</h2>
                        <div className="inner__search-movie">
                            <div className="inner__search">
                                <RiSearchEyeLine />
                                <input
                                    value={searchName}
                                    onChange={(e) => setSearchName(e.target.value)}
                                    type="text"
                                    className="inner__search-input"
                                    placeholder="Название фильма..."
                                />
                            </div>
                            <button onClick={searchMovieHandler} className="inner__search__btn">
                                Поиск
                            </button>
                        </div>
                    </div>
                    <div className="inner__selects">
                        <Select
                            title="Жанр:"
                            data={genres}
                            curentData={genreId}
                            setCurrentData={setGenreId}
                        />
                        <Select
                            title="Страна:"
                            data={countries}
                            curentData={countryId}
                            setCurrentData={setCountryId}
                        />
                        <Select
                            title="Рейтинг:"
                            data={ratings}
                            curentData={ratingId}
                            setCurrentData={setRatingId}
                        />
                        <Select
                            title="Год:"
                            data={years}
                            curentData={yearId}
                            setCurrentData={setYearId}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Inner;
