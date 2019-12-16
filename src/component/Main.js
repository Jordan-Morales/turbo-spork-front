// =============================
// DEPENDENCIES
// =============================
// packages
import React from 'react'

// components
import Space from './SpaceX'
import Launches from './Launches'
// =============================
// COMPONENT CLASS
// =============================
// BaseURL Definer
// let baseUrl = '';
// if (process.env.NODE_ENV === 'development') {
//   baseUrl = 'http://localhost:8888'
// } else {
//   baseUrl = 'https://turbo-spork-app.herokuapp.com/'
// }

class Main extends React.Component{

//// ==============
//// RENDER
//// ==============
  render (){
    return (
      <div>
      This is some notess maybe:
        {this.props.notesArray.map((notes, index) => (
          <p key={notes.flight_number}>{notes.flight_number} - {notes.notes}</p>
        ))}

        This is the main section.
      <Space />

        <div className="row">
        <div className="col s12 m6">

        {this.props.launchArray.map((grabLaunch) =>
          <Launches
            key={grabLaunch.flight_number}
            launchData={grabLaunch}
          />
        )}
        </div>
        </div>
      </div>
    )
  }
}
// =============================
// EXPORT
// =============================
export default Main
