import React, { useState } from 'react';
import './AdminGenre.scss';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../Loading/Loading';
import AdminGenreItem from '../AdminGenreItem/AdminGenreItem';
import ModalGenre from '../ModalGenre/ModalGenre';
import { GenreAction } from '../../redux/actions/genre.js';
import { GENRE_ADD, GENRE_DELETE } from '../../redux/consts';

const AdminGenre = () => {
    const dispatch = useDispatch();
    const genres = useSelector((state) => state.genreReducer.genres);
    const loading = useSelector((state) => state.genreReducer.loading);
    const [visableModal, setVisableModal] = useState(false);
    const [name, setName] = useState('');

    const onClickAdd = () => {
        dispatch(
            new GenreAction({
                typeAdd: GENRE_ADD,
                url: 'http://localhost:5000/api/genre',
                postData: { name: name },
            }).addGenre(),
        );
        setName('');
        setVisableModal(false);
    };

    const deleteGenreClick = (id) => {
        dispatch(
            new GenreAction({
                typeDelete: GENRE_DELETE,
                url: 'http://localhost:5000/api/genre',
                idDelete: id,
            }).deleteGenre(),
        );
    };

    return (
        <div className="admin-genre">
            <div className="admin-movies__top">
                <h3 className="admin-movies__title">Жанры</h3>
                <button onClick={(e) => setVisableModal(true)} className="admin-movies__btn-add">
                    Добавить жанр
                </button>
            </div>
            <div className="admin-genre__header">
                <span className="admin-genre__chapter-name">ID</span>
                <span className="admin-genre__chapter-name">Название</span>
                <span className="admin-genre__chapter-name">Действие</span>
            </div>
            <ul className="admin-genre__list">
                {!loading ? (
                    genres.length > 0 ? (
                        genres.map((item) => (
                            <AdminGenreItem
                                key={item.id}
                                item={item}
                                clickDelete={deleteGenreClick}
                            />
                        ))
                    ) : (
                        <div className="admin-genre__notfound">Жанры не добавлены</div>
                    )
                ) : (
                    <Loading />
                )}
            </ul>
            <ModalGenre
                visable={visableModal}
                setVisable={setVisableModal}
                name={name}
                setName={setName}
                onClick={onClickAdd}
            />
        </div>
    );
};

export default AdminGenre;
