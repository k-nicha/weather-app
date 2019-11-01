import React from 'react'

class Home extends React.Component {
    constructor () {
        super()
        /* Initial state */
        this.state = {
            show: false
        }
    }

    showOrHide = (event) => {
        console.log(event.target.id)
        /* menuvanje na state so setState() metoda
        otkako state-ot kje se smeni,
        komponentata si go vika svojot render metod odnovo
        (ASINHRONA E, PAZETE! noviot state moze da go procitate
            samo vo render i so callback) */
        this.setState({ show: !this.state.show })
    }

    /* Render method */
    render () {
        // najnovite state i props gi chitame tuka

        return  (
            <div id='main-container' className='flex-container'>
                {/* SearchComponent */}
                {/* ResultsComponent */}
                {/* HistoryComponent */}
            </div>
        )
    }
}

export default Home