import React, { useState } from 'react';
import './ModalMovie.scss';
import { MdClose } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import cn from 'classnames';
import { MoviesAction } from '../../redux/actions/movies';
import { MOVIES_ADD } from '../../redux/consts';

const ModalMovie = ({ visable, setVisable, genres, countries }) => {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [descr, setDescr] = useState('');
    const [rating, setRating] = useState('');
    const [year, setYear] = useState('');
    const [link, setLink] = useState('');
    const [genre, setGenre] = useState(genres[0]?.id);
    const [country, setCountry] = useState(countries[0]?.id);
    const [img, setImg] = useState(null);

    const closeModal = () => {
        setVisable(false);
        setName('');
        setDescr('');
        setRating('');
        setYear('');
        setLink('');
        setGenre(genres[0]?.id);
        setCountry(countries[0]?.id);
    };

    const addMovie = () => {
        closeModal();
        dispatch(
            new MoviesAction({
                typeAdd: MOVIES_ADD,
                postData: {
                    name: name,
                    description: descr,
                    rating: rating,
                    year: year,
                    link: link,
                    genreId: genre,
                    countryId: country,
                    img: img,
                },
                url: 'http://localhost:5000/api/movie',
            }).addMovie(),
        );
    };

    return (
        <div
            onClick={closeModal}
            className={cn('modal-movie', {
                active: visable,
            })}>
            <div onClick={(e) => e.stopPropagation()} className="modal-movie__content">
                <div className="modal-movie__header">
                    <h3 className="modal-movie__title">Добавление фильма</h3>
                    <MdClose onClick={closeModal} />
                </div>
                <div className="modal-movie__middle">
                    <input
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        className="modal-movie__input"
                        placeholder="Введите название фильма..."
                    />
                    <textarea
                        onChange={(e) => setDescr(e.target.value)}
                        value={descr}
                        className="modal-movie__textarea"
                        placeholder="Введите описание фильма..."
                    />
                    <input
                        onChange={(e) => setRating(e.target.value)}
                        value={rating}
                        type="number"
                        className="modal-movie__input"
                        placeholder="Введите рейтинг фильма(до 10)..."
                    />
                    <input
                        onChange={(e) => setYear(e.target.value)}
                        value={year}
                        type="number"
                        className="modal-movie__input"
                        placeholder="Введите год фильма..."
                    />
                    <input
                        onChange={(e) => setLink(e.target.value)}
                        value={link}
                        type="text"
                        className="modal-movie__input"
                        placeholder="Введите ссылку на страницу фильма..."
                    />
                    <label className="modal-movie__label">
                        <span>Выберите жанр: </span>
                        <select
                            onChange={(e) => setGenre(e.target.value)}
                            value={genre}
                            className="modal-movie__select">
                            {genres &&
                                genres.map((item) => (
                                    <option key={item.id} value={item.id}>
                                        {item.name}
                                    </option>
                                ))}
                        </select>
                    </label>
                    <label className="modal-movie__label">
                        <span>Выберите страну: </span>
                        <select
                            onChange={(e) => setCountry(e.target.value)}
                            value={country}
                            className="modal-movie__select">
                            {countries &&
                                countries.map((item) => (
                                    <option key={item.id} value={item.id}>
                                        {item.name}
                                    </option>
                                ))}
                        </select>
                    </label>
                    <div className="modal-movie__label">
                        <span>Выберите изображние:</span>
                        <input
                            onChange={(e) => setImg(e.target.files?.[0])}
                            type="file"
                            className="modal-movie__input-file"
                        />
                    </div>
                </div>
                <button onClick={addMovie} className="modal-movie__add">
                    Добавить
                </button>
            </div>
        </div>
    );
};

export default ModalMovie;
