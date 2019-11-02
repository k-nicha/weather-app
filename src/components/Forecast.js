import React from 'react'
import { connect } from 'react-redux'
import Data from 'components/Data'
import Loading from 'components/Loading'
import Error from 'components/Error'

const Forecast = (props) => {
/**
 * A component which handles the response from the HTTP reqquest and data flow.
 * Uses react-redux to connect to the store where the HTTP status and response is written.
 */
  let component = null
  if (props.pending) {
    component = <Loading />
  } else if (props.error) {
    component = <Error error={props.error.response.data} />
  } else if (props.data && props.data instanceof Object) {
    component = <Data cityName={props.data.city.name} days={props.data.list} />
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