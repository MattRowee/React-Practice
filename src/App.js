import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person'

const app = props => {
  const [ personState, setPersonsState] = useState({
    persons: [
      {name: 'Max', age: 28},
      {name: 'Manu', age: 29},
      {name: 'Mark', age: 26}
    ],
    otherState: "this is other state"
  });
    
const [otherState, setOtherState] = useState("Some other value");

  console.log(personState, otherState);

  const swtichNameHandler =()=>{

      // console.log("This is switchhandler (click)in App.js")
      // DONT DO THIS: this.state.persons[0].name = "Matthew";
      // Props and changes to state are the only thing 
      // that cause React to update the Dom
      // Componenet React will update state, but leave unspecified data alone!
      // functional react components are not the same: they replace 
      // state, they dont merge!!!!

      setPersonsState({
        persons: [
          { name: 'Matthew', age: 35},
          { name: 'Nina', age: 10},
          { name: 'Seth', age: 38}
        ]
      });
    };
// functional React components dont need render() methods

    return (
      <div className="App container">
     <h1>Hi Matt.</h1>
     <p>You are truly a good guy</p>
     <button onClick={swtichNameHandler}>switch name</button>
     <Person name={personState.persons[0].name} age={personState.persons[0].age}/>
     <Person name={personState.persons[1].name} age={personState.persons[1].age}>My Hobbies: Racing</Person>
     <Person name={personState.persons[2].name} age={personState.persons[2].age}/>
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work???'))
  }

export default app;

 
  //   // Naming convention 'handler' because it is a 
  //   // Method you are not actively calling

  // swtichNameHandler =()=>{
  //   // console.log("This is switchhandler (click)in App.js")
  //   // DONT DO THIS: this.state.persons[0].name = "Matthew";
  //   // Props and changes to state are the only thing 
  //   // that cause React to update the Dom
  //   // React will update state, but leave unspecified data alone!
  //   this.setState({persons: })
  // }