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
      return <Data gotoCourses={this.goToCourses} />
    } else {
      return <Courses />
    }
  };
    
    renderFormation = () => {
       if(this.state.courses) {
         return <Formation goToFormation={this.goToFormation} />
       }
    };
  
    goToCourses = () => {
      this.setState({generalData: false})
    };
    
    goToFormation = () => {
      this.setState({courses: true})
    };


   render() {
     return (
       <div className="App">
           {this.renderGeneralData()}
           {this.renderFormation()}
       </div>
     );
   }
  }