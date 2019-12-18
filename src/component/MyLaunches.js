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

      <>
      {this.props.notesArray.map((notes, index) => (
        <div key={index}  className="col s12 m4 cardFixer">
        <div key={index} className="card blue-grey">
          <div className="card-image">
            <img className="responsive-img" src={this.props.launchArray[notes.id].links.mission_patch} alt={this.props.launchArray[notes.id].mission_name}/>
            <button className="btn-floating halfway-fab waves-effect waves-light red hoverable" onClick={() => {this.props.handleDelete(notes.id)}}><i className="material-icons">remove</i></button>
          </div >
          <div className="card-content">
            Flight Number: {notes.flight_number} <br/>
            Mission Name: {notes.mission_name} <br/>
            Location of Launch: {notes.site_name_long} <br/>
            Date: {notes.launch_date_local} <br/>
            Notes: {notes.notes} <br/>
            <Form
            handleUpdate={this.props.handleUpdate}
            notes={notes}
            formInputs={this.props.formInputs}
            />
          </div>
        </div>
        </div>
      ))}
      </>


    )
  }
}

// =============================
// EXPORT
// =============================
export default MyLaunches
