import React from "react";
import Data from "./components/Data"
import Courses from "./components/Courses"
import Formation from "./components/Formation"


export default class App extends React.Component {
  state = {
    generalData: true,
    courses: false,
    formation: true
};


  renderGeneralData = () => {
    if (this.state.generalData) {
      return <Data />
    } else {
      return <Courses />
    }
  }
    
    renderFormation = () => {
       if(this.state.courses) {
         return <Formation />
       } 
    }

    goToCourses = () => {
      this.setState({})
    }
    
 


   render() {
     return (
       <div>
           {this.renderGeneralData()}
           {this.renderFormation()}
       </div>
     );
   }
  }