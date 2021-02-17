
import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false
  };

  switchNameHandler = (newName) => {
    // console.log('Was clicked!');
    // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 27 }
      ]
    });
  };

  nameChangedHandler = (event)=> {
    this.setState({
      persons: [
        { name: 'Max', age: 28 },
        { name: event.target.value, age: 29 },
        { name: 'Stephanie', age: 27 }
      ]
    });
  }
// fat arrow, this always returns to this class
// showPersons: !doesShow  : toggles the state. 
// if does show is true, set false, visaversa
// merges new data with state
  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
      borderRadius: "3px"
    };

    let persons = null;
    // This was originally in the JSX as a ? terniary statement, but 
    // was removed to keep the JSX clean as.
if(this.state.showPersons){
  persons = (
    <div>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, "Max")}
          changed={this.nameChangedHandler}
        >
          My Hobbies: Racing
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
        </div> 
  )
}

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button 
          className="primeButton"
          style={style}
          onClick={this.togglePersonsHandler}>Toggle List</button>
          {/* terniary expression. a property in state such as showPersons 
          can become an if statement that defaults to null with 2 lines of code */}
        {persons}
        {/* end of terniary statement */}
      </div>
    );
  }
}

export default App;


// import React, { useState } from 'react';
// import './App.css';
// import Person from './Person/Person'

// const app = props => {
//   const [ personState, setPersonsState] = useState({
//     persons: [
//       {name: 'Max', age: 28},
//       {name: 'Manu', age: 29},
//       {name: 'Mark', age: 26}
//     ],
//   });
    
// const [otherState, setOtherState] = useState("Some other value");

//   console.log(personState, otherState);

//       // Naming convention 'handler' because it is a 
//       // Method you are not actively calling

//   const swtichNameHandler =()=>{

//       // console.log("This is switchhandler (click)in App.js")
//       // DONT DO THIS: this.state.persons[0].name = "Matthew";
//       // Props and changes to state are the only thing 
//       // that cause React to update the Dom
//       // Componenet React will update state, but leave unspecified data alone!
//       // functional react components are not the same: they replace 
//       // state, they dont merge!!!!

//       setPersonsState({
//         persons: [
//           { name: 'Matthew', age: 35},
//           { name: 'Nina', age: 10},
//           { name: 'Seth', age: 38}
//         ]
//       });
//     };
// // functional React components dont need render() methods

//     return (
//       <div className="App container">
//      <h1>Hi Matt.</h1>
//      <p>You are truly a good guy</p>
//      <button onClick={swtichNameHandler}>switch name</button>
//      <Person 
//         name={personState.persons[0].name} 
//         age={personState.persons[0].age}/>
//      <Person 
//         name={personState.persons[1].name}
//         age={personState.persons[1].age}
//         click={this.swtichNameHandler} 
//         >My Hobbies: Racing
//         </Person>
//      <Person 
//         name={personState.persons[2].name} 
//         age={personState.persons[2].age}/>
//       </div>
//     );
//     // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work???'))
//   }

// export default app;
