import React from 'react'
import Search from 'components/Search'
import Results from 'components/Results'
import History from 'components/History'

const Home = () => {
  return  (
    <div id='mainContainer' className='flex-container'>
      <Search />
      <Results />
      <History />
    </div>
  )
}

export default Home