import { createStore, combineReducers, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import { forecastReducer } from './reducers/forecastReducer'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
    forecastReducer
})

// uses async middleware so we can dispatch http requests
const store = createStore(
    rootReducer,
    applyMiddleware(logger, thunk)
)

export default store