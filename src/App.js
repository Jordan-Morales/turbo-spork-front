// =============================
// DEPENDENCIES
// =============================
// packages
import React from 'react';

// components
import Nav from './component/Nav'
import Main from './component/Main'

// =============================
// COMPONENT CLASS
// =============================

// ExternalAPI-URL Definer
let apiUrl = 'https://api.spacexdata.com/v3/launches/';
let intApiUrl = 'https://cors-anywhere.herokuapp.com/https://turbo-spork-app.herokuapp.com/api/launch'


class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      launchArray: [],
      notes: [],
      view: {
        page: 'home',
        pageTitle: 'on load'
      }
    }
  }
  //returns entire launch array, currently approx 100+ items
  pullLaunches = () => {
      fetch(`${apiUrl}`)
      .then(response => response.json())
      .then(jData => {
        this.setState({
          launchArray: jData
        })
        console.log(this.state.launchArray);
      })
      .catch(err=>console.log(err))
    }

  pullStuff = () => {
      fetch(`${intApiUrl}`)
      .then(response => response.json())
      .then(jData => {
        this.setState({
          notes: jData
        })
        console.log(this.state.notes);
      })
      .catch(err=>console.log(err))
    }
  handleView = (view) => {
    let pageTitle = ''
    switch (view) {
      case 'home':
        pageTitle= 'home'
        break;
      case 'launches':
        pageTitle= 'launches'
        break;
      case 'mylaunches':
        pageTitle= 'mylaunches'
        break;
      default:
        break;
    }
    this.setState({
      view: {
        page: view,
        pageTitle: pageTitle
      }
    })
  }
  componentDidMount() {
    this.pullLaunches()
    this.pullStuff()
  }



//// ==============
//// RENDER
//// ==============
  render(){
    return(
      <div className="container">

        <Nav
        handleView={this.handleView}
        />
        {/* this is a comment? */}
        <Main
        view={this.state.view}
        handleView={this.handleView}
        launchArray={this.state.launchArray}
        notesArray={this.state.notes}
        />

      </div>
    )
  }
}

// =============================
// EXPORT
// =============================
export default App;
