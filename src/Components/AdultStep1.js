import React from 'react';


class AdultStep1 extends React.Component {
    render() {
      if (this.props.currentStep !== 2) { // Prop: The current step
        return null
      }
      // The markup for the Step 1 UI
      return(
        <div className="form-group">
          <h2>What gender group is needed for this division?</h2>
          <h4>Make selections based on options below</h4>
          <label htmlFor="genderInput" value={this.props.selectedGender}>Male
            <input
              className="form-control"
              id="genderInput"
              name="selectedGender"
              type="radio"
              value="male" // Prop: The email input data
              onChange={this.props.handleChange} // Prop: Puts data into state
              checked={this.props.selectedGender==="male"}
            />
          </label>
          <label htmlFor="genderInput">Female
          <input
            className="form-control"
            id="genderInput"
            name="selectedGender"
            type="radio"
            value="female" // Prop: The email input data
            onChange={this.props.handleChange} // Prop: Puts data into state
            checked={this.props.selectedGender==="female"}
          />
          </label>
          <label htmlFor="genderInput">Co-ed
          <input
            className="form-control"
            id="genderInput"
            name="selectedGender"
            type="radio"
            value="coed"// Prop: The email input data
            onChange={this.props.handleChange} // Prop: Puts data into state
            checked={this.props.selectedGender==="coed"} 
          />
          </label>
        </div>
      )
    }
  }
export default AdultStep1;