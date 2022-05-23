import React, { useState } from 'react';
import AdminMenu from '../../components/AdminMenu/AdminMenu';
import AdminMovies from '../../components/AdminMovies/AdminMovies';
import AdminCountry from '../../components/AdminCountry/AdminCountry';
import AdminGenre from '../../components/AdminGenre/AdminGenre';
import './AdminPage.scss';

const chapters = [<AdminMovies />, <AdminGenre />, <AdminCountry />];

const AdminPage = () => {
    const [currentChapter, setCurrentChapter] = useState(0);
    return (
        <div className="admin-page">
            <div className="container">
                <div className="admin-page__content">
                    <AdminMenu
                        currentChapter={currentChapter}
                        setCurrentChapter={setCurrentChapter}
                    />
                    {chapters[currentChapter]}
                </div>
            </div>
        </div>
    );
};

export default AdminPage;
