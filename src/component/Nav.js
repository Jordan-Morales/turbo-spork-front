// =============================
// DEPENDENCIES
// =============================
// packages
import React from 'react'

// components

// =============================
// COMPONENT CLASS
// =============================
class Nav extends React.Component{


//// ==============
//// RENDER
//// ==============
  render (){
    return (
      <div>
        <nav className="black center btnMargin">
          <button className="waves-effect waves-light btn" onClick={() => {this.props.handleView('home')}}>Home
          </button>
          <button className="waves-effect waves-light btn" onClick={() => {this.props.handleView('launches')}}>SpaceX Launches
          </button>
          <button className="waves-effect waves-light btn" onClick={() => {this.props.handleView('mylaunches')}}>My Launches
          </button>
        </nav>
      </div>
    )
  }
}

// =============================
// EXPORT
// =============================
export default Nav
