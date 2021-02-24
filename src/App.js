
import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import styled from 'styled-components';

const StyledButton = styled.button`
      background-color: ${props => props.alt ? 'red':'green'};
      font: inherit;
      border: 1px solid blue;
      padding: 8px;
      cursor: pointer;
      border-radius: 3px;
      
      &:hover {
        background: lightgreen;
        color: black
`
class App extends Component {
  state = {
    persons: [
      { id: "w34terg", name: 'Max', age: 28 },
      { id: "yutnfth", name: 'Manu', age: 29 },
      { id: "ktymnfs", name: 'Stephanie', age: 26 }
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

  nameChangedHandler = (event, id)=> {
    // default JS method find()
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person ={
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;
    
    this.setState({persons: persons});
  }

// fat arrow, this always returns to this class
// showPersons: !doesShow  : toggles the state. 
// if does show is true, set false, visaversa
// merges new data with state

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }
  
  deletePersonHandler = (personIndex) => {
    // the old way. creates a new a copied array
    // rather than directly manipulating state
    // however, we will use a spread operator to 
    // populate a newly created array
    // always update state in an immutable fasion

    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }

  render() {
    // const style = {
    //   backgroundColor: "white",
    //   font: "inherit",
    //   border: "1px solid blue",
    //   padding: "8px",
    //   cursor: "pointer",
    //   borderRadius: "3px",
    //   ":hover": {
    //     background: 'lightgreen',
    //     color: 'black',
    //   }
    // };

    let persons = null;
    // This was originally in the JSX as a ? terniary statement, but 
    // was removed to keep the JSX clean as.
if(this.state.showPersons){
  persons = (
    <div>
      {/* converting a JS object into valid JSX 
        and it replaved on the <Person> components we were importing*/}
      {this.state.persons.map((person, index)=> {
        return <Person 
        click={() => this.deletePersonHandler(index)}
        name={person.name}
        age={person.age} 
        key={person.id}
        changed={(event => this.nameChangedHandler(event, person.id))}
          />
      })}
        </div> 
    );
    // style.backgroundColor = "red";
    // style[':hover'] ={
    //   background: 'salmon',
    //   color: 'black',
    // }
    // style.border = "1px solid silver"; 
    // style.color = "aliceblue";
    // style.fontWeight = "bold";
    }

    let classes = [];
     if(this.state.persons.length <= 2){
       classes.push('red');
     }
     if(this.state.persons.length <= 1) {
       classes.push('bold');
     }
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p className={classes.join(" ")}>This is really working!</p>
        <StyledButton 
          alt={this.state.showPersons}
          onClick={this.togglePersonsHandler}>
            Toggle List</StyledButton>
          {/* terniary expression. a property in state such as showPersons 
          can become an if statement that defaults to null with 2 lines of code */}
        {persons}
        {/* end of terniary statement */}
      </div>
    );
  }
}

export default App;

  