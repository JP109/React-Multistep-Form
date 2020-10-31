import React from 'react';


class AdultStep2 extends React.Component {
    render() {
      if (this.props.currentStep !== 3) { // Prop: The current step
        return null
      }
      // The markup for the Step 1 UI
      return(
        <div className="form-group">
          <h2>What age range(s) is needed for this division?</h2>
          <h4>Make selections based on options below</h4>
          <label htmlFor="ageRangeInput">26-U
            <input
              className="form-control"
              id="ageRangeInput"
              name="selectedAgeRange"
              type="radio"
              value="26-U"
              onChange={this.props.handleChange} // Prop: Puts data into state
              checked={this.props.selectedAgeRange==="26-U"}
            />
          </label>
          <label htmlFor="ageRangeInput">40
            <input
              className="form-control"
              id="ageRangeInput"
              name="selectedAgeRange"
              type="radio"
              value="40"
              onChange={this.props.handleChange} // Prop: Puts data into state
              checked={this.props.selectedAgeRange==="40"}
            />
          </label>
          <label htmlFor="ageRangeInput">50
            <input
              className="form-control"
              id="ageRangeInput"
              name="selectedAgeRange"
              type="radio"
              value="50"
              onChange={this.props.handleChange} // Prop: Puts data into state
              checked={this.props.selectedAgeRange==="50"}
            />
          </label>
          <label htmlFor="ageRangeInput">60
            <input
              className="form-control"
              id="ageRangeInput"
              name="selectedAgeRange"
              type="radio"
              value="60"
              onChange={this.props.handleChange} // Prop: Puts data into state
              checked={this.props.selectedAgeRange==="60"}
            />
          </label>
          <label htmlFor="ageRangeInput">70
            <input
              className="form-control"
              id="ageRangeInput"
              name="selectedAgeRange"
              type="radio"
              value="70"
              onChange={this.props.handleChange} // Prop: Puts data into state
              checked={this.props.selectedAgeRange==="70"}
            />
          </label>
        </div>
        
      )
    }
  }
export default AdultStep2;