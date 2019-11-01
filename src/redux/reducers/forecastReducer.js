export function forecastReducer (state = {
  isPending: false,
  error: null,
  data: []
}, action) {
  switch (action.type) {
    case 'FETCH_FORECAST_PENDING': {
      return {
        ...state,
        isPending: true,
        data: action.payload,
        error: null
      }
    }
    case 'FETCH_FORECAST_SUCCESSFUL': {
      return {
        ...state,
        isPending: false,
        data: action.payload,
        error: null
      }
    }
    case 'FETCH_FORECAST_FAILED': {
      return {
        ...state,
        isPending: false,
        data: [],
        error: action.payload
      }
    }
    default: {
      return state
    }
  }
}