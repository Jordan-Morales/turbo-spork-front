// =============================
// DEPENDENCIES
// =============================
// packages
import React from 'react'

// components

// =============================
// COMPONENT CLASS
// =============================
class MyLaunches extends React.Component{



//// ==============
//// RENDER
//// ==============
  render (){
    return (

      <div className="row">
        <div className="col s12 m6">
          {this.props.notesArray.map((notes, index) =>
            <div key={index} className="card blue-grey">
              Number: {notes.flight_number} <br/>
              Notes: {notes.notes} <br/>
            </div>
            )}
      </div>
    </div>


    )
  }
}

// =============================
// EXPORT
// =============================
export default MyLaunches
