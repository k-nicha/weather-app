import React from 'react'
import Search from './components/Search'
import Results from './components/Results'
import History from './components/History'

class Home extends React.Component {
    constructor () {
        super()
        /* Initial state */
        this.state = {
            show: false
        }
    }

    render () {
        return  (
            <div id='mainContainer' className='flex-container'>
                <Search />
                <Results />
                <History />
            </div>
        )
    }
}

export default Home