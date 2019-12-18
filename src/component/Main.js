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
      <div className="row">
      {this.props.view.page === 'home'
      ? <div className="full white-text">
        <h2>Welcome to our SpaceX Data Site</h2>
        <p>Here you can review your favorite launches and see information about each launch. Did you know SpaceX first launch was in 2006?</p>
        <br/>
        <br/>
        <br/>
        <footer>
        This is a General Assembly Group Project by:<br/><br/>
        <a href="https://github.com/Jordan-Morales/" className="white-text">Jordan Morales <ion-icon name="logo-github" size="large" ></ion-icon></a>
        <br/><br/>
        <a href="https://github.com/KB-Z" className="white-text">Zach Donner <ion-icon name="logo-github" size="large" ></ion-icon></a>

        </footer>
        </div>

        : ''}
      {this.props.view.page === 'mylaunches'
      ? <MyLaunches
      notesArray={this.props.notesArray}
      launchArray={this.props.launchArray}
      handleUpdate={this.props.handleUpdate}
      handleDelete={this.props.handleDelete}
      handleView={this.props.handleView}
      formInputs={this.props.formInputs}
      />
      : ''}
      {this.props.view.page === 'launches'
      ? <Launches
      launchArray={this.props.launchArray}
      handleCreate={this.props.handleCreate}/>
      : ''}
      </div>
    )
  }
}
// =============================
// EXPORT
// =============================
export default Main
