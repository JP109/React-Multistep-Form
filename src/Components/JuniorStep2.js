import React from 'react';


class JuniorStep2 extends React.Component {
    render() {
      if (this.props.currentStep !== 6) { // Prop: The current step
        return null
      }
      // The markup for the Step 1 UI
      return(
        <div className="form-group">
          <h2>What acheivements are needed for this division?</h2>
          <h4>Make selections based on options below</h4>
          <label htmlFor="skill">Bronze
            <input
              className="form-control"
              id="skill"
              name="selectedSkill"
              type="checkbox"
              value="Bronze"
              key={this.props.id}
              onChange={this.props.handleChange} // Prop: Puts data into state
              checked={this.props.jselectedSkill}
            />
          </label>
          <label htmlFor="skill">Silver
            <input
              className="form-control"
              id="skill"
              name="selectedSkill"
              type="checkbox"
              value="Silver"
              key={this.props.id}
              onChange={this.props.handleChange} // Prop: Puts data into state
              checked={this.props.jselectedSkill}
            />
          </label>
          <label htmlFor="skill">Gold
            <input
              className="form-control"
              id="skill"
              name="selectedSkill"
              type="checkbox"
              value="Gold"
              key={this.props.id}
              onChange={this.props.handleChange} // Prop: Puts data into state
              checked={this.props.jselectedSkill}
            />
          </label>
          <label htmlFor="skill">High School
            <input
              className="form-control"
              id="skill"
              name="selectedSkill"
              type="checkbox"
              value="High School"
              key={this.props.id}
              onChange={this.props.handleChange} // Prop: Puts data into state
              checked={this.props.jselectedSkill}
            />
          </label>
          <label htmlFor="skill">Club
            <input
              className="form-control"
              id="skill"
              name="selectedSkill"
              type="checkbox"
              value="Club"
              key={this.props.id}
              onChange={this.props.handleChange} // Prop: Puts data into state
              checked={this.props.jselectedSkill}
            />
          </label>
          <button className="btn btn-success btn-block">Submit</button>
        </div>
      )
    }
  }
export default JuniorStep2;