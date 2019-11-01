import axios from 'axios'
import * as api from 'config/api.json'

export function searchCity (city) {
  return function (dispatch) {
    let url = api.fetchForecast
    url = url.replace('{city}', city)

    dispatch({ type: 'FETCH_FORECAST_PENDING', payload: null, isLoading: true })
    
    axios.get(url)
      .then((response) => {
        dispatch({ type: 'FETCH_FORECAST_SUCCESSFUL', payload: response, isLoading: false })
      }).catch((err) => {
        dispatch({ type: 'FETCH_FORECAST_FAILED', payload: err, isLoading: false })
      })
  }
}