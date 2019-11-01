import React, { useState } from 'react'
import 'styles/search.css'
//import { connect } from 'react-redux'
// import { searchCity } from '../redux/actions/searchCity'

const Search = () => {
  const [city, setCity] = useState(null)

  return <div id='searchContainer' className='flex-item'> 
    <input
      id='inputCity'
      className='form-control search-input'
      placeholder='City'
      value={city}
      onChange={(e) => setCity(e.target.value)}
    />
    <button
      id='searchForecast'
      className='form-control search-button'>
      Search Forecast
    </button>
  </div>
}

/* const mapDispatchToProps = (dispatch) => {
  return {
    searchCity: (param) => dispatch(searchCity(param))
  }
} */

// export default connect(null, mapDispatchToProps)(Search)

export default Search