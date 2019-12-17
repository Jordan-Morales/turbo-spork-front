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
          <div key={index} className="col s12 m4 cardFixer">
            <div key={index} className="card blue-grey">
              <div className="card-image">
                <img className="responsive-img" src={launchData.links.mission_patch} alt={launchData.mission_name}/>
                <button className="btn-floating halfway-fab waves-effect waves-light red hoverable" onClick={()=>{this.props.handleCreate(launchData)}}><i className="material-icons">add</i></button>
              </div>
              <div className="card-content">
                <p>Flight Number: {launchData.flight_number} <br/>
                Mission Name: {launchData.mission_name} <br/>
                Location of Launch: {launchData.launch_site.site_name_long} <br/>
                Date: {launchData.launch_date_local} <br/></p>
              </div>
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
