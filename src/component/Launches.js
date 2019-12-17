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
      <div className="row">
        <div className="col s12 m6">
          {this.props.launchArray.map((launchData, index) => (
            <div key={index} className="card blue-grey">
              Flight Number: {launchData.flight_number} <br/>
              Mission Name: {launchData.mission_name} <br/>
              Location of Launch: {launchData.launch_site.site_name_long} <br/>
              Date: {launchData.launch_date_local} <br/>
              <button onClick={()=>{this.props.handleCreate(launchData)}}>LIKE THIS</button>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

// =============================
// EXPORT
// =============================
export default Launches
