import React from 'react';
import './AdminMovieItem.scss';
import { BsFillTrashFill } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { MoviesAction } from '../../redux/actions/movies';
import { MOVIES_DELETE } from '../../redux/consts';

const AdminMovieItem = ({ item }) => {
    const dispatch = useDispatch();

    const deletedMovie = () => {
        dispatch(
            new MoviesAction({
                typeDelete: MOVIES_DELETE,
                idDelete: item.id,
                url: 'http://localhost:5000/api/movie',
            }).deleteMovie(),
        );
    };
    return (
        <li className="admin-movie-item">
            <div className="admin-movie-item__chapter">{item?.name}</div>
            <div className="admin-movie-item__img">
                <img src={`http://localhost:5000/${item?.image}`} alt="" />
            </div>
            <div className="admin-movie-item__info">
                <p className="admin-movie-item__info-name">Год: {item?.year}</p>
                <p className="admin-movie-item__info-name">Жанр: {item?.genre?.name}</p>
                <p className="admin-movie-item__info-name">Страна: {item?.country?.name}</p>
                <p className="admin-movie-item__info-name">
                    Рейтинг: <span>{item?.year}</span>
                </p>
            </div>
            <div className="admin-movie-item__descr">{item?.description}</div>
            <div className="admin-movie-item__chapter-link">
                <a href={item?.link} target="_blank">
                    Страница фильма
                </a>
                <button onClick={deletedMovie} className="admin-movie-item__delete">
                    Удалить <BsFillTrashFill />
                </button>
            </div>
        </li>
    );
};

export default AdminMovieItem;
