import React, { useState } from 'react';
import './AdminCountry.scss';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../Loading/Loading';
import AdminGenreItem from '../AdminGenreItem/AdminGenreItem';
import ModalGenre from '../ModalGenre/ModalGenre';
import { CountryAction } from '../../redux/actions/country';
import { COUNTRY_ADD, COUNTRY_DELETE, GENRE_ADD, GENRE_DELETE } from '../../redux/consts';

const AdminCountry = () => {
    const dispatch = useDispatch();
    const countries = useSelector((state) => state.countryReducer.countries);
    const loading = useSelector((state) => state.countryReducer.loading);
    const [visableModal, setVisableModal] = useState(false);
    const [name, setName] = useState('');

    const onClickAdd = () => {
        dispatch(
            new CountryAction({
                typeAdd: COUNTRY_ADD,
                url: 'http://localhost:5000/api/country',
                postData: { name: name },
            }).addCountry(),
        );
        setName('');
        setVisableModal(false);
    };

    const deleteGenreClick = (id) => {
        dispatch(
            new CountryAction({
                typeDelete: COUNTRY_DELETE,
                url: 'http://localhost:5000/api/country',
                idDelete: id,
            }).deleteCountry(),
        );
    };

    return (
        <div className="admin-genre">
            <div className="admin-movies__top">
                <h3 className="admin-movies__title">Страны</h3>
                <button onClick={(e) => setVisableModal(true)} className="admin-movies__btn-add">
                    Добавить страну
                </button>
            </div>
            <div className="admin-genre__header">
                <span className="admin-genre__chapter-name">ID</span>
                <span className="admin-genre__chapter-name">Название</span>
                <span className="admin-genre__chapter-name">Действие</span>
            </div>
            <ul className="admin-genre__list">
                {!loading ? (
                    countries.length > 0 ? (
                        countries.map((item) => (
                            <AdminGenreItem
                                key={item.id}
                                item={item}
                                clickDelete={deleteGenreClick}
                            />
                        ))
                    ) : (
                        <div className="admin-genre__notfound">Страны не добавлены</div>
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

export default AdminCountry;
