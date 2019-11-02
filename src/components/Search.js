import React, { useState } from 'react'
import 'styles/search.css'
import { connect } from 'react-redux'
import { searchCity } from 'redux/actions/searchCity'
import ReactTooltip from 'react-tooltip'

const handleSubmit = (e, city, searchCity, setError) => {
  /** 
   * Handles data submit and validates input string 
  */
  e.preventDefault()
  if (!city) {
    setError('Please input a city name')
  } else {
    searchCity(city)
  }
}

const Search = (props) => {
  /**
   * Submits search data using state hooks and sends the HTTP request
   */
  const [city, setCity] = useState('')
  const [error, setError] = useState(null)

  // Change input style if there's an input error
  const style = error ? 'form-control search-input search-input-error' : 'form-control search-input'

  return <div id='searchContainer' className='flex-item'>
    <div id='search' className='subtitle'> Search for a city </div>
    {/* Also display error as tooltip on hover */}
    {error && <ReactTooltip place='right' type='warning' effect='solid' />}
    <form>
      <input
        id='inputCity'
        type='text'
        className={style}
        placeholder='City'
        data-tip={error}
        value={city}
        onChange={(e) => {
          // Save city name in state
          setCity(e.target.value)
          // Reset error state whenever there's an input change so the element styles are re-initialized
          setError(false)
        }}
      />
      <input
        id='searchForecast'
        type='submit'
        value='Search Forecast'
        className='form-control search-button btn btn-info cursor'
        onClick={(e) => handleSubmit(e, city, props.searchCity, setError)}
      />
    </form>
  </div>
}

// Map action to props so we don't have to import store
const mapDispatchToProps = (dispatch) => {
  return {
    searchCity: (param) => dispatch(searchCity(param))
  }
}

export default connect(null, mapDispatchToProps)(Search)
