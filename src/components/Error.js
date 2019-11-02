import React from 'react'

const Error = (props) => {
  let text = ''
  if (props.error.cod === '404') {
    text = "We couldn't find the city you were searching for. Maybe try with another one?"
  } else if (props.error.cod === '500') {
    text = "Oops, something went wrong. Please try again later."
  }
  return <div id='error' className='text'>
    <div>
      <img width='50rem' height='50rem' src='images/warning.png' />
    </div>
    <br />
    {text}
  </div>
}

export default Error