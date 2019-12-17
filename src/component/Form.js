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
      <form onSubmit={()=>{this.props.handleUpdate(this.state)}}>
      <input type="hidden" id={this.props.notes.id} onChange={this.props.handleChange} value={this.props.notes.id} />
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
