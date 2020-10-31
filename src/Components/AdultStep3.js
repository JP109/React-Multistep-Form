import React from 'react';
import {FormGroup} from 'reactstrap'

class AdultStep3 extends React.Component {
    render() {
      if (this.props.currentStep !== 4) { // Prop: The current step
        return null
      }
      // The markup for the Step 1 UI
      return(
        <FormGroup>
          <h2>What level of expertise is needed for this division?</h2>
          <h4>Make selections based on options below</h4>

          <label htmlFor="skill"> A 
            <input
              className="form-control"
              id="skill"
              name="selectedSkill"
              type="checkbox"
              value="A"
              onChange={this.props.handleChange} // Prop: Puts data into state
              //checked={this.props.selectedSkill[0].checked}
            />
          </label>
          <label htmlFor="skill"> AA 
            <input
              className="form-control"
              id="skill"
              name="selectedSkill"
              type="checkbox"
              value="AA"
              onChange={this.props.handleChange} // Prop: Puts data into state
              //checked={this.props.selectedSkill[1].checked}
            />
          </label>
          <label htmlFor="skill"> AAA 
            <input
              className="form-control"
              id="skill"
              name="selectedSkill"
              type="checkbox"
              value="AAA"
              onChange={this.props.handleChange} // Prop: Puts data into state
              //checked={this.props.selectedSkill[2].checked}
            />
          </label>
          <label htmlFor="skill"> Novice 
            <input
              className="form-control"
              id="skill"
              name="selectedSkill"
              type="checkbox"
              value="Novice"
              onChange={this.props.handleChange} // Prop: Puts data into state
              //checked={this.props.selectedSkill[3].checked}
            />
          </label>
          <label htmlFor="skill"> Master 
            <input
              className="form-control"
              id="skill"
              name="selectedSkill"
              type="checkbox"
              value="Master"
              onChange={this.props.handleChange} // Prop: Puts data into state
              //checked={this.props.selectedSkill[4].checked}
            />
          </label>
          <button className="btn btn-success btn-block">Submit</button>
        </FormGroup>
      )
    }
  }
export default AdultStep3;