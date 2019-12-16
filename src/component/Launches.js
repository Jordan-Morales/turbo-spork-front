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
          {this.props.launchArray.map((launchData) => (
            <div key={launchData.flight_number} className="card blue-grey">
              Number: {launchData.flight_number} <br/>
              Mission Name: {launchData.mission_name} <br/>
              Location: {launchData.launch_site.site_name_long} <br/>
              Date: {launchData.launch_date_local} <br/>
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
