import React, { useState } from 'react';
import './AdminMovies.scss';
import { useSelector } from 'react-redux';
import Loading from '../Loading/Loading';
import AdminMovieItem from '../AdminMovieItem/AdminMovieItem';
import ModalMovie from '../ModalMovie/ModalMovie';

const AdminMovies = () => {
    const movies = useSelector((state) => state.moviesReducer.movies);
    const loading = useSelector((state) => state.moviesReducer.loading);
    const genres = useSelector((state) => state.genreReducer.genres);
    const countries = useSelector((state) => state.countryReducer.countries);
    const [visableModal, setVisableModal] = useState(false);

    return (
        <div className="admin-movies">
            <div className="admin-movies__top">
                <h3 className="admin-movies__title">Фильмы</h3>
                <button onClick={(e) => setVisableModal(true)} className="admin-movies__btn-add">
                    Добавить фильм
                </button>
            </div>
            <div className="admin-movies__header">
                <span className="admin-movies__name-chapter">Название</span>
                <span className="admin-movies__name-chapter">Постер</span>
                <span className="admin-movies__name-chapter">Информация</span>
                <span className="admin-movies__name-chapter">Описание</span>
                <span className="admin-movies__name-chapter">Действие</span>
            </div>
            {!loading ? (
                <ul className="admin-movies__list">
                    {movies.length > 0 ? (
                        movies.map((item) => <AdminMovieItem key={item.id} item={item} />)
                    ) : (
                        <div className='admin-movies__notfound' >Фильмов нет</div>
                    )}
                </ul>
            ) : (
                <div className="admin-movies__loading">
                    <Loading/>
                </div>
            )}
            {countries && genres && (
                <ModalMovie
                    visable={visableModal}
                    setVisable={setVisableModal}
                    genres={genres}
                    countries={countries}
                />
            )}
        </div>
    );
};

export default AdminMovies;
