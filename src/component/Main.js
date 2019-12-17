// =============================
// DEPENDENCIES
// =============================
// packages
import React from 'react'

// components
// import Space from './SpaceX'
import Launches from './Launches'
import MyLaunches from './MyLaunches'

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
      {this.props.view.page === 'mylaunches'
      ? <MyLaunches notesArray={this.props.notesArray}
      handleUpdate={this.props.handleUpdate}
      handleDelete={this.props.handleDelete}
      />
      : '' }
      {this.props.view.page === 'launches'
      ? <Launches launchArray={this.props.launchArray} handleCreate={this.props.handleCreate}/>
      : ''}
      </div>
    )
  }
}
// =============================
// EXPORT
// =============================
export default Main
