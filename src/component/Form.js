// =============================
// DEPENDENCIES
// =============================
// packages
import React from 'react'

// components

// =============================
// COMPONENT CLASS
// =============================
class Form extends React.Component{
  constructor(props){
    super(props)
    this.state = {
        id: this.props.notes.id,
        flight_number: this.props.notes.flight_number,
        site_name_long: this.props.notes.site_name_long,
        likes: this.props.notes.likes,
        mission_name: this.props.notes.mission_name,
        launch_date_local: this.props.notes.launch_date_local,
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
<<<<<<< HEAD
      <form onSubmit={()=>{this.props.handleUpdate(this.state.notes)}}>
      <input type="hidden" id={this.props.notes.id} onChange={this.props.handleChange} value={this.props.notes.id} />
=======
      <form onSubmit={()=>{this.props.handleUpdate(this.state)}}>

>>>>>>> 4fbcededbeade5cf68c661c0043d76a3be6153c8
       Notes: <input type="text" id="notes" onChange={this.handleChange} value={this.state.notes} />
       <input type="submit"/>
      </form>
    )
  }
}

// =============================
// EXPORT
// =============================
export default Form
