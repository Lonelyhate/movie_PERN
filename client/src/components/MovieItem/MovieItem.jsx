import React from 'react'
import './MovieItem.scss'

const MovieItem = ({item}) => {
  return (
    <li className='movie-item'>
        <div className="movie-item__main">
            <div className="movie-item__img">
                <img src={`http://localhost:5000/${item.image}`} alt="" />
            </div>
            <div className="movie-item__info">
                <h4 className="movie-item__name">{item.name}</h4>
                <p className="movie-item__text">Год: {item.year}</p>
                <p className="movie-item__text">Жанр: {item.genre.name}</p>
                <p className="movie-item__text">Страна: {item.country.name}</p>
                <p className="movie-item__text">Ретинг: <span>{item.rating}</span></p>
            </div>
        </div>
        <div className="movie-item__hide">
            <p className="movie-item__descr">{item.description}</p>
            <a href={item.link} target='_blank' className="movie-item__link">Перейти на страницу</a>
        </div>
    </li>
  )
}

export default MovieItem