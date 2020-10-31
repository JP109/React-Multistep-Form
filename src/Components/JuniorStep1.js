import React from 'react';


class JuniorStep1 extends React.Component {
    render() {
      if (this.props.currentStep !== 5) { // Prop: The current step
        return null
      }
      // The markup for the Step 1 UI
      return(
        <div className="form-group">
          <h2>What age group is needed for this division?</h2>
          <h4>Make selections based on options below</h4>
          <label htmlFor="JageRangeInput">13-U
            <input
              className="form-control"
              id="JJageRangeInput"
              name="juniorAgeRange"
              type="radio"
              value="13-U"
              onChange={this.props.handleChange} // Prop: Puts data into state
              checked={this.props.juniorAgeRange==="13-U"}
            />
          </label>
          <label htmlFor="ageRangeInput">14-U
            <input
              className="form-control"
              id="JageRangeInput"
              name="juniorAgeRange"
              type="radio"
              value="14-U"
              onChange={this.props.handleChange} // Prop: Puts data into state
              checked={this.props.juniorAgeRange==="14-U"}
            />
          </label>
          <label htmlFor="ageRangeInput">15-U
            <input
              className="form-control"
              id="JageRangeInput"
              name="selectedAgeRange"
              type="radio"
              value="15-U"
              onChange={this.props.handleChange} // Prop: Puts data into state
              checked={this.props.juniordAgeRange==="15-U"}
            />
          </label>
          <label htmlFor="ageRangeInput">16-U
            <input
              className="form-control"
              id="JageRangeInput"
              name="juniorAgeRange"
              type="radio"
              value="16-U"
              onChange={this.props.handleChange} // Prop: Puts data into state
              checked={this.props.juniorAgeRange==="16-U"}
            />
          </label>
          <label htmlFor="ageRangeInput">17-U
            <input
              className="form-control"
              id="JageRangeInput"
              name="juniorAgeRange"
              type="radio"
              value="17-U"
              onChange={this.props.handleChange} // Prop: Puts data into state
              checked={this.props.juniorAgeRange==="17-U"}
            />
          </label>
        </div>
      )
    }
  }
export default JuniorStep1;