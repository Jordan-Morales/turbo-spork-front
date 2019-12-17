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
let postAPIURL = 'https://turbo-spork-app.herokuapp.com/api/launch'
let proxyURL = 'https://cors-anywhere.herokuapp.com/'

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
      },
    })
  }


  componentDidMount() {
    this.pullLaunches()
    this.pullStuff()
  }

 handleCreate = (createData) => {
   const data = {
     flight_number: createData.flight_number,
     mission_name: createData.mission_name,
     site_name_long: createData.launch_site.site_name_long,
     launch_date_local: createData.launch_date_local,
     likes: 0,
     notes: ''
   }
  fetch(`${postAPIURL}`, {
    body: JSON.stringify(data),
    mode: 'no-cors',
    method: 'POST',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    }
  }).then(data => {
  }).then(response => {
    this.pullStuff()
  }).catch(err => console.log(err))
}
handleUpdate = (event, updateData) => {
  event.preventDefault();
  console.log(updateData);
  console.log(updateData.id);

console.log(proxyURL + postAPIURL + '/' + updateData.id);
let modData= JSON.stringify(updateData);
console.log(modData);
 fetch((proxyURL + postAPIURL + '/' + updateData.id), {
      body: modData,
      method: 'PUT',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
        'Credentials': 'include',
        'Access-Control-Allow-Origin': '*'
  }
}).then(updatedData => this.handleView('mylaunches'), this.pullStuff())
.catch(err => console.log('this is catch', err))
}

handleDelete = (id) => {
 fetch(`${intApiUrl}/${id}`, {
   method: 'DELETE',
   headers: {
     'Accept': 'application/json, text/plain, */*',
     'Content-Type': 'application/json'
   }
 }).then(
   this.pullStuff()
 ).catch(err => console.log(err))
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
        handleCreate={this.handleCreate}
        handleUpdate={this.handleUpdate}
        handleDelete={this.handleDelete}
        />

      </div>
    )
  }
}

// =============================
// EXPORT
// =============================
export default App;
