import React, {Component} from 'react';
import MainStepComponent from './MainStepComponent'
import AdultStep1 from './AdultStep1'
import AdultStep2 from './AdultStep2'
import AdultStep3 from './AdultStep3'
import JuniorStep1 from './JuniorStep1'
import JuniorStep2 from './JuniorStep2'
import '../Stylesheets/MainComponent.css'

class MasterForm extends Component {
    constructor(props) {
      super(props)

      this.state = {
        currentStep: 1, // Default is Step 1
        age: 'Adult',
        selectedGender: "male",
        selectedAgeRange: "26-U",
        selectedSkill:[],
        juniorAgeRange:"13-U",
        jselectedSkill: [], 
      }
      // Bind the submission to handleChange() 
        this.handleChange = this.handleChange.bind(this)
        this._next = this._next.bind(this)
        this._prev = this._prev.bind(this)
    }
  
    // Use the submitted data to set the state
    handleChange(event) {
      console.log(event.target.value)
      const {name, value} = event.target
      let newArray=[...this.state.selectedSkill,event.target.value].filter(item=>(item=="A")||(item=="AA")||(item=="AAA")||(item=="Novice")||(item=="Master"))
      let juniorArray=[...this.state.jselectedSkill,event.target.value].filter(item=>(item=="Bronze")||(item=="Silver")||(item=="Gold")||(item=="High School")||(item=="Club"))

      // let selectedItem=this.state.selectedSkill
      // let aa=[],bb=[];
      // Array.(selectedItem).forEach( item=> {
      //   if(item.value=event.target.value)
      //   {
      //       aa.push(item)
      //   }    
      // });

      // aa.map(item=>{
      //   bb=item.value
      // })

      this.setState({
        [name]: value,
        selectedSkill:newArray,
        jselectedSkill:juniorArray
      })  
    }
    
    // Trigger an alert on form submission
    handleSubmit = (event) => {
      event.preventDefault()
      if(this.state.currentStep==4){
        const { age, selectedGender, selectedAgeRange ,selectedSkill} = this.state
        alert(`Your Team is created!: \n 
        Age: ${age} \n 
        Selected Gender: ${selectedGender} \n
        Selected Age Range: ${selectedAgeRange} \n
        Selected Skill: ${selectedSkill}`)
      }

      if(this.state.currentStep==6){
        const { age, juniorAgeRange, jselectedSkill} = this.state
        alert(`Your Team is created!: \n 
        Age: ${age} \n 
        Junior Age Range: ${juniorAgeRange} \n
        Junior Selected Skill: ${jselectedSkill}`)
      }
    }

    _next() {
        let currentStep = this.state.currentStep
        if(currentStep==1){
          if(this.state.age=='Adult'){
            this.setState({
              currentStep: 2
            })
          }
          else{
            this.setState({
              currentStep: 5
            })
          }
        }

        if(currentStep==2||currentStep==3||currentStep==5 ){
          this.setState({
            currentStep:currentStep+1
          })
        }
        if(currentStep==4){
          this.setState({
            currentStep: 4
          })
        }
        if(currentStep==6){
          this.setState({
            currentStep: 6
          })
        }

    }

    _prev() {
        let currentStep = this.state.currentStep
        if(currentStep==2||currentStep==5||currentStep==1 ){
          this.setState({
            currentStep:1
          })
        }
        if(currentStep==4||currentStep==3||currentStep==6 ){
          this.setState({
            currentStep:currentStep-1
          })
        }
      }

      // The "next" and "previous" button functions
    get previousButton(){
      let currentStep = this.state.currentStep;
      if(currentStep !==1){
        return (
          <button 
            className="btn btn-secondary" 
            type="button" onClick={this._prev}>
          Previous
          </button>
        )
      }
      return null;
    }

    get nextButton(){
      let currentStep = this.state.currentStep;
      if(currentStep !==4 && currentStep!==6){
        return (
          <button 
            className="btn btn-primary float-right" 
            type="button" onClick={this._next}>
          Next
          </button>        
        )
      }
      return null;
    }
    
    render() {    

        return (
          <div className="container">
          <h1>Sports Team Form</h1>
          <p>Step {this.state.currentStep} </p> 
            
          <form onSubmit={this.handleSubmit}>
          
            <MainStepComponent
              currentStep={this.state.currentStep} 
              handleChange={this.handleChange}
              age={this.state.age}
            />
            <AdultStep1
              currentStep={this.state.currentStep} 
              handleChange={this.handleChange}
              selectedGender={this.state.selectedGender}
            />
            <AdultStep2
              currentStep={this.state.currentStep} 
              handleChange={this.handleChange}
              selectedAgeRange={this.state.selectedAgeRange}
            />
              <AdultStep3
              currentStep={this.state.currentStep} 
              handleChange={this.handleChange}
              selectedSkill={this.state.selectedSkill}
            /> 
              <JuniorStep1
              currentStep={this.state.currentStep} 
              handleChange={this.handleChange}
              juniorAgeRange={this.state.juniorAgeRange}
            />  
              <JuniorStep2
              currentStep={this.state.currentStep} 
              handleChange={this.handleChange}
              password={this.state.jselectedSkill}
            />         

            <div className="buttons">
            {this.previousButton}
            {this.nextButton}
            </div>
        
          </form>
          </div>
        )
        }
  }

  export default MasterForm;