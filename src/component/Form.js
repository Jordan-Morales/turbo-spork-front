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
      <form onSubmit={()=>{this.props.handleUpdate(this.state)}}>

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
