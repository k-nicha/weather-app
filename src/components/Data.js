import React from 'react'
import 'styles/table.css'

const Data = ({cityName, days}) => {
  const dates = []
  const finalResults = {}

  const temps = days.map(day => {
    // create a temperature-by-hour array with max and min temperatures (by day)
    const arr = day.dt_txt.split(' ')
    const currDay = arr[0]
    const currHour = arr[1]

    // create separate array only for days with no timestamp
    if (!dates.includes(currDay)) {
      dates.push(currDay)
    }
    
    return {
      day: currDay,
      time: currHour,
      temp: day.main.temp
    }
  })

  let i = 0
  
  while (i < dates.length) {
    let maxTemp = 0
    let maxTempTime = null
    let minTemp = 1000
    let minTempTime = null
    for (let j = 0; j < temps.length; j++) {
      if (dates[i] === temps[j].day) {
        /* replace previous written value */
        if (temps[j].temp > maxTemp) {
          maxTemp = temps[j].temp
          maxTempTime = temps[j].time
        }
        /* replace previous written value */
        if (temps[j].temp < minTemp) {
          minTemp = temps[j].temp
          minTempTime = temps[j].time
        }

        // add temps and time for said day in the final object
        finalResults[dates[i]] = {maxTemp, minTemp, maxTempTime, minTempTime}
      }
    }
    i++
  }

  let tableData = []

  // Find hottest day
  // Also worksfor multiple days with the same highest temperature
  let unsorted = []
  for (let date in finalResults) {
    unsorted.push(finalResults[date].maxTemp)
  }
  const sorted = unsorted.sort((lo, hi) => { return hi - lo })
  const highestTemp = Math.floor((sorted[0] - 273) *100) / 100

  for (let date in finalResults) {
    /* converts temperatures to celsius
    and round down to two decimal points */
    const highest = ''
    const max = Math.floor((finalResults[date].maxTemp - 273) *100) / 100
    const min = Math.floor((finalResults[date].minTemp - 273) *100) / 100
    if (highestTemp === max) {
      highest = 'warning'
    }
    tableData.push(<tr className={highest}>
      <td>{date}</td>
      <td>
        {max}
        {highest && <img className='table-img' src='images/temperature.png' />}
      </td>
      <td>{finalResults[date].maxTempTime}</td>
      <td>{min}</td>
      <td>{finalResults[date].minTempTime}</td>
    </tr>)
  }

  return <React.Fragment>
    <div id='dataContainer' className='subtitle'>
      {`${cityName} - the weather in the next five days`}
    </div>
    <table className='table'>
      <thead>
        <tr>
        <th>Date</th>
        <th>Maximal temperature (in celsius)</th>
        <th>Occurred in</th>
        <th>Minimal temperature (in celsius)</th>
        <th>Occurred in</th>
        </tr>
      </thead>
      <tbody>
        {tableData}
      </tbody>
    </table>
  </React.Fragment>
}

export default Data