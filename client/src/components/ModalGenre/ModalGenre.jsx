import React from 'react';
import { MdClose } from 'react-icons/md';
import './ModalGenre.scss';
import cn from 'classnames';

const ModalGenre = ({ visable, setVisable, name, setName, onClick }) => {
    const closeModal = () => {
        setVisable(false);
        setName('');
    };

    return (
        <div
            onClick={closeModal}
            className={cn('modal-genre', {
                active: visable,
            })}>
            <div onClick={(e) => e.stopPropagation()} className="modal-genre__content">
                <div className="modal-genre__header">
                    <h3 className="modal-genre__title">Добавить</h3>
                    <MdClose onClick={closeModal} />
                </div>
                <input
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    placeholder="Введите название..."
                    type="text"
                    className="modal-genre__input"
                />
                <button onClick={onClick} className="modal-genre__btn">
                    Добавить
                </button>
            </div>
        </div>
    );
};

export default ModalGenre;
