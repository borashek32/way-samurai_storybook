import React, {useState} from 'react';
import './App.css';
import {UncontrolledOnOffComponent} from "./components/UncontrolledOnOff/UncontrolledOnOffComponent";
import {ControlledOnOffComponent} from "./components/ControlledOnOff/ControlledOnOffComponent";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {ControlledRating} from "./components/ControlledRating/ControlledRating";

function App() {
  let [on, setOn] = useState<boolean>(false)
  const changeOn = (on: boolean) => setOn(!on)

  let [value, setValue] = useState(0)
  const changeValue = (value: number) => setValue(value++)

  return (
    <div className="App">
      <header className="App-header">
        <h1>Uncontrolled OnOff component</h1>
        <UncontrolledOnOffComponent />
        <h1>Controlled OnOff</h1>
        <ControlledOnOffComponent on={on} onChange={changeOn} />
        {/*<UncontrolledOnOffComponent on={true} />*/}
        {/*<UncontrolledOnOffComponent on={false} />*/}
        <h1>Uncontrolled Accordions</h1>
        <UncontrolledAccordion title={"Menu"} />
        <UncontrolledAccordion title={"Users"} />
        <h1>Controlled Rating</h1>
        <ControlledRating title={"Controlled Rating"} value={value} setValue={changeValue} />
      </header>
    </div>
  );
}

export default App;
