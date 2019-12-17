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
      notes: {
        id: '',
        flight_number: '',
        mission_name: '',
        site_name_long: '',
        date: '',
        notes: '',
      }
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

            <form onSubmit={()=>{this.props.handleUpdate(this.state.notes)}}>
            <input type="hidden" value={notes.id} />
            <input type="hidden" value={notes.flight_number} />
            <input type="hidden" value={notes.mission_name} />
            <input type="hidden" value={notes.site_name_long} />
            <input type="hidden" value={notes.launch_date_local} />
             Notes: <input type="text" id="note" onChange={this.handleChange} value={this.state.notes.notes}/>
             <input type="submit"/>
            </form>
            <h2>{this.state.notes.notes}</h2>
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
