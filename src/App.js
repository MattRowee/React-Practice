import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      {name: 'Max', age: 28},
      {name: 'Manu', age: 29},
      {name: 'Mark', age: 26}
    ]
  }
// naming convention 'handler' because it is a method you are not actively calling

  swtichNameHandler =()=>{
    console.log("Party time");
  }

  render() {
    return (
      <div className="App container">
     <h1>Hi Matt.</h1>
     <p>You are truly a good goi</p>
     <button onClick={this.swtichNameHandler}>switch name</button>
     <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
     <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobbies: Racing</Person>
     <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work???'))
  }
}

export default App;
