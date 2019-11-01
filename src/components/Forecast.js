import React from 'react'
import { connect } from 'react-redux'
import Loading from 'components/Loading'
import Error from 'components/Error'

const Forecast = (props) => {
/**
 * A component which handles the response from the HTTP reqquest.
 * Uses react-redux to connect to the store where the HTTP status and response is written.
 */
  let component = null
  if (props.pending) {
    component = <Loading />
  } else if (props.error) {
    return <Error />
  } else if (props.data && props.data instanceof Object) {
    component = props.data.cnt
  }
  return <div id='dataContainer' className='flex-item centered'> 
    {component}
  </div>
}

const mapStateToProps = (state) => {
  return {
    data: state.forecastReducer.data,
    error: state.forecastReducer.error,
    pending: state.forecastReducer.isPending
  }
}

export default connect(mapStateToProps)(Forecast)