import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MoviesAction } from '../../redux/actions/movies';
import { SET_MOVIES, SET_MOVIES_SUCCESS } from '../../redux/consts';
import MovieItem from '../MovieItem/MovieItem';
import './MoviesList.scss';
import Loading from '../Loading/Loading';

const MoviesList = () => {
    const dispatch = useDispatch();
    const movies = useSelector((state) => state.moviesReducer.movies);
    const loading = useSelector((state) => state.moviesReducer.loading);

    return (
        <div className="movies-list">
            <div className="container">
                <div className="movies-list__content">
                    <h2 className="movies-list__title">Фильмы</h2>
                    <ul className="movies-list__list">
                        {!loading ? (
                            movies.length > 0 ? (
                                movies.map((item) => <MovieItem key={item.id} item={item} />)
                            ) : (
                                <div className='movies-list__notfound'>Фильмы не найдены</div>
                            )
                        ) : (
                            <Loading />
                        )}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default MoviesList;
