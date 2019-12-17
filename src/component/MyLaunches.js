// =============================
// DEPENDENCIES
// =============================
// packages
import React from 'react'

// components
import Form from './Form'

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
            Flight Number: {notes.flight_number} <br/>
            Mission Name: {notes.mission_name} <br/>
            Location of Launch: {notes.site_name_long} <br/>
            Date: {notes.launch_date_local} <br/>
            Notes: {notes.notes} <br/>
            <button onClick={() => {this.props.handleDelete(notes.id)}}>
            Unlike
            </button>
            <Form
            handleUpdate={this.props.handleUpdate}
            notes={notes}
            />
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
