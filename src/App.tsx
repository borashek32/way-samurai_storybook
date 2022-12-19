import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Uncontrolled OnOff</h1>
        <UncontrolledOnOffComponent />
        <h1>Controlled OnOff</h1>
        <ControlledOnOffComponent on={on} onChange={changeOn} />
        {/*<UncontrolledOnOffComponent on={true} />*/}
        {/*<UncontrolledOnOffComponent on={false} />*/}
        <h1>Uncontrolled Accordions</h1>
        <UncontrolledAccordion title={"Menu"} />
        <UncontrolledAccordion title={"Users"} />
        <h1>Uncontrolled Star Rating</h1>
        <StarRating title={"Circle Rating"} />
      </header>
    </div>
  );
}

export default App;
