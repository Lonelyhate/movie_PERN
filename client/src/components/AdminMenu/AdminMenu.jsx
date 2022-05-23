import React from 'react';
import './AdminMenu.scss';
import cn from 'classnames'

const menu = ['Фильмы', 'Жанры', 'Страны'];

const AdminMenu = ({currentChapter, setCurrentChapter}) => {
    return (
        <div className="admin-menu">
            <ul className="admin-menu__list">
                {menu.map((item, id) => (
                    <li key={item} className="admin-menu__item">
                        <button onClick={() => setCurrentChapter(id)} className={cn('admin-menu__btn', {
                            active: currentChapter === id
                        })}>{item}</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AdminMenu;
