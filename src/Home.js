import React from 'react'
import Search from 'components/Search'
import Forecast from 'components/Forecast'
import History from 'components/History'
import Title from 'components/Title'

const Home = () => {
  return  (
    <div id='mainContainer' className='flex-container'>
      <Title />
      <Search />
      <Forecast />
      <History />
    </div>
  )
}

export default Home