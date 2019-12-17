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
  constructor(props){
    super(props)
    this.state = {
        id: null,
        notes: ''
      }
    }
    handleChange = (event) => {
      this.setState({
        [event.target.id]: event.target.value
      })
    }

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

            <form onSubmit={()=>{this.props.handleUpdate(this.state)}}>
            <input type="hidden" id={notes.id} onChange={this.handleChange} value={notes.id} />
             Notes: <input type="text" id="notes" onChange={this.handleChange} value={this.state.notes} />
             <input type="submit"/>
            </form>
            <h2>{this.state.notes}</h2>
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
