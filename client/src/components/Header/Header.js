import React from 'react'
import './Header.scss'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <header className='header'>
        <div className="header__container">
            <div className="header__content">
                <Link className='header__link' to='/' >Фильмы</Link>
                <Link className='header__link' to='/admin' >Админ-панель</Link>
            </div>
        </div>
    </header>
  )
}

export default Header