import React from 'react';
import Welcome from "./welcome";
import WelcomeFromClass from './welcomeclass';
import SeprateComponent from './sepratecomponent';

function App() {
  // const amIProDeveloperNow = false;
  const name = "Usman Abid";

  return (
    <div>
      <Welcome name={name}/>
      <WelcomeFromClass 
      name="Daniyal"
      newElement={
        <div>
        <SeprateComponent/>
        <p>Check mate</p>
        </div>
      }/>
    </div>
  );
}

export default App;
