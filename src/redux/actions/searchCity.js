import axios from 'axios'
import * as api from 'config/api.json'

export function searchCity (city) {
  return function (dispatch) {
    // Send HTTP request with desired city (from input value)
    let url = api.fetchForecast
    url = url.replace('{city}', city)

    // Displays loader as long as the request is pending
    dispatch({ type: 'FETCH_FORECAST_PENDING', payload: [] })
    
    axios.get(url)
      .then((response) => {
        dispatch({ type: 'FETCH_FORECAST_SUCCESSFUL', payload: response.data })
        dispatch({ type: 'ADD_TO_SEARCH_HISTORY', payload: response.data })
      }).catch((error) => {
        dispatch({ type: 'FETCH_FORECAST_FAILED', payload: error })
      })
  }
}