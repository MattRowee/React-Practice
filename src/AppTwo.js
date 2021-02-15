import React, { Component } from 'react';
import './App.css';
import {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

 function AppTwo (){
     
    const [score, setScore] = useState(5);
    return(
     <div className="App">
         <Header score={score} setScore={setScore}></Header>
         <Content score={score}></Content>
         <TodoList></TodoList>
     </div>
     )
    };
        
function Header(props){
     return(   
            <header>
                HEADER
                <Button onCLick={()=>{props.setScore(props.score+1)}}variant='primary'>Set Score</Button>
            </header>         
     )  
 };

 function TodoList(){
     const [list, setList] = useState(['Brush teeth', 'Go to work', 'Go to store']);
     const [textInput, setTextInput]= useState("");
     return <div>
         <label for="text-input">Add to list:</label>
         <input type="text"
         id="text-input" 
         value={textInput}
         onInput={(event)=>{setTextInput(event.target.value)}}></input>
         <button onClick={()=>{
            setList([...list, textInput]);
                     }}>Add</button>
         <ul>
             {list.map((item, index)=>{
                 return <li>{item}</li>
             })}
         </ul>
     </div>
 }
 function Content (props){
    return(
        <div>
            <h1>Title</h1>
            <p>My highscore: {props.score}</p>
            </div>
            )    
}
  
export default AppTwo;