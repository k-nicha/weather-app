import React from 'react'
import store from 'redux/store'
import {connect} from 'react-redux'

const retreiveCityPrognosis = (e, list) => {
  const id = event.target.id
  store.dispatch({ type: 'FETCH_FORECAST_SUCCESSFUL', payload: list[id] })
}

const History = (props) => {
  /**
   * A component which displays the recent searches made by the user.
   * The links are also clickable and will display the data
   * about the given search back to the user.
   */
  const list = props.searches
  let cities = []
  if (list && list instanceof Array && list.length > 0) {
    cities = list.map((el, index) => {
      return <li id={index} className='list-group-item cursor colored-border'
        onClick={(e) => retreiveCityPrognosis(e, list)}>
        {`${el.city.name}, Population: ${el.city.population} - click to view forecast`}
      </li>
    })
  }

  return <div id='historyContainer' className='flex-item'> 
    <div id='recent' className='subtitle'> Recent searches </div>
    <ul className='list-group'>
      {cities}
    </ul>
  </div>
}

const mapStateToProps = (state) => {
  return {
    searches: state.historyReducer.data
  }
}

export default connect(mapStateToProps)(History)