import React from 'react'
import './AdminGenreItem.scss'
import { BsFillTrashFill } from 'react-icons/bs';

const AdminGenreItem = ({item, clickDelete}) => {
  return (
    <li className='admin-genre-item'>
        <div className="admin-genre-item__text">{item.id}</div>
        <div className="admin-genre-item__text">{item.name}</div>
        <div className="admin-genre-item__text"><button onClick={e => clickDelete(item.id)}>Удалить <BsFillTrashFill/></button></div>
    </li>
  )
}

export default AdminGenreItem