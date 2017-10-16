import React, {Component} from 'react'
import { connect } from 'react-redux'

class NavBar extends Component {

  render () {
    console.log('test');
    return (
      <div className='nav-bar'>
        test
      </div>
    )
  }
}

export default connect(state => state)(NavBar)
