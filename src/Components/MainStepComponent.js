import React from 'react';
import {FormGroup} from 'reactstrap';
import '../Stylesheets/MainStepComponent.css'

class MainStepComponent extends React.Component {
    render() {
      if (this.props.currentStep !== 1) { // Prop: The current step
        return null
      }
      // The markup for the Step 1 UI
      return(
        <div className="form-group">
          <h2>WHat type of age bracket is needed?</h2>
          <h4>Make a selection based on desired age group</h4>
          <label htmlFor="ageInput">Age bracket</label>
          {/* <input
            className="form-control"
            id="ageInput"
            name="age"
            type="text"
            placeholder="Enter email"
            value={this.props.age} // Prop: The age input data
            onChange={this.props.handleChange} // Prop: Puts data into state
          /> */}
          <select className="form-control" id="ageInput" name="age" value={this.props.age} onChange={this.props.handleChange}>
            <option value="Adult">Adult</option>
            <option value="Junior">Junior</option>
          </select>
        </div>
      )
    }
  }
export default MainStepComponent;

