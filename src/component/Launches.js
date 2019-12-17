// =============================
// DEPENDENCIES
// =============================
// packages
import React from 'react'

// components

// =============================
// COMPONENT CLASS
// =============================
class Launches extends React.Component{


//// ==============
//// RENDER
//// ==============
  render (){
    return (
        <>
          {this.props.launchArray.map((launchData, index) => (
            <div key={index} className="card blue-grey col s12 m4 l4">
              <div className="card-image">
                <img class="responsive-img" src={launchData.links.mission_patch}/>
                <a className="btn-floating halfway-fab waves-effect waves-light red hoverable" onClick={()=>{this.props.handleCreate(launchData)}}><i class="material-icons">add</i></a>
              </div>
              <div className="card-content">
                <p>Flight Number: {launchData.flight_number} <br/>
                Mission Name: {launchData.mission_name} <br/>
                Location of Launch: {launchData.launch_site.site_name_long} <br/>
                Date: {launchData.launch_date_local} <br/></p>
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
export default Launches
