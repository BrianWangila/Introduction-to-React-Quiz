import React from "react";
import logo from './secondLogo.png';
import './App.css';

/**
  Challenge: Display all users to the browser
**/

const users = [
  { name: "John Doe", id: 1 },
  { name: "Jane Doe", id: 2 },
  { name: "Billy Doe", id: 3 }
];


// comment this out after completion and uncomment code below it to proceed
// function Child() {
//   return <div>This is children content</div>;
// }

//  Challenge: Uncomment this code to complete quiz

function Child({handleChange}) {


  return (
    <>
      <div>Child</div>
      <button onClick={handleChange}>Change Parent Value</button>
    </>
  );
}

function Parent() {
  const [value, setValue] = React.useState(
    "I need to be updated from my child"
  );

  function handleChange(){
    setValue("second value")
  }

  return (
    <>
      <h3>Update Parent State Challenge (Using Callback)</h3>
      <div className="wrapper">
        <div>Parent</div>
        <div className="box-wrapper">{value}</div>
      </div>

      <div className="wrapper">
        <Child handleChange={handleChange}/>
      </div>
    </>
  );
}
// Uncomment this to tackle quiz


// // Comment out after completion
// function Parent() {
//   return (
//     <div>
//       <h3>Parent Component</h3>
//     </div>
//   );
// }
// Comment above code after completion

function App() {
  const [isHidden, setIsHidden] = React.useState(true);

  function handleClick(){
    console.log("done")
    setIsHidden((isHidden) => !isHidden)
  }
  const className = isHidden ? "" : "screen"
  
  return (
    
    <>
      <h1 style={{color:"blue"}}>JSX is Cool!</h1>
      <img src={logo} className="App-logo" alt="logo" />
        <h3>User names</h3>
        <ul>
          {users.map((user) => {
            return <li key={user.id} name={user.name}>{user.name}</li>
          })} 
        </ul>

        <button onClick={handleClick}>{isHidden ? "Hide Elements Below" : "Show Elements Below"}</button>

        <div className={className}>Toggle Challenge
          <Parent>
            <Child/>
          </Parent>
        </div>
    </>
  );
}

export default App;
