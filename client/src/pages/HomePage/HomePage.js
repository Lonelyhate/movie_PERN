import React from 'react'
import Inner from '../../components/Inner/Inner'
import MoviesList from '../../components/MoviesList/MoviesList'
import './HomePage.scss'

const HomePage = () => {
  return (
    <div className='home-page'>
        <Inner/>
        <MoviesList/>
    </div>
  )
}

export default HomePage