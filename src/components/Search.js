import React, { useState } from 'react'
import 'styles/search.css'
import { connect } from 'react-redux'
import { searchCity } from 'redux/actions/searchCity'

const handleSubmit = (city, searchCity, setError) => {
  if (!city) {
    setError('Please input a city name')
  } else {
    searchCity(city)
  }
}

const Search = (props) => {
  const [city, setCity] = useState(null)
  const [error, setError] = useState(null)

  const style = error ? 'form-control search-input search-input-error' : 'form-control search-input'

  return <div id='searchContainer' className='flex-item'> 
    <input
      id='inputCity'
      type='text'
      className={style}
      placeholder='City'
      value={city}
      onChange={(e) => {
        setCity(e.target.value)
        setError(false)
      }}
    />
    <button
      id='searchForecast'
      className='form-control search-button'
      onClick={() => handleSubmit(city, props.searchCity, setError)}>
      Search Forecast
    </button>
  </div>
}

const mapDispatchToProps = (dispatch) => {
  return {
    searchCity: (param) => dispatch(searchCity(param))
  }
}

export default connect(null, mapDispatchToProps)(Search)
