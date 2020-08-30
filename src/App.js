import React from 'react';
import './App.css';
import './components/ClassCounter'
import ClassCounter from './components/ClassCounter';
import HookCounter from './components/HookCounter'
import HookCounterTwo from './components/HookCounterTwo'
import HookCounterThree from './components/HookCounterThree'
import HookCounterFour from './components/HookCounterFour'
import HookCounterOne from './components/HookCounterOne';
import HookMouse from './components/HookMouse';
import MouseContainer from './components/MouseContainer';
import IntervalHookCounter from './components/IntervalHookCounter';

function App() {
  return (
      <div className="App">
          <ClassCounter /><br /><br />
          <HookCounter /><br /><br />
          <HookCounterTwo /><br /><br />
          <HookCounterThree /><br /><br />
          <HookCounterFour /><br /><br />
          <HookCounterOne /><br /><br />
          <HookMouse /><br /><br />
          <MouseContainer /><br /><br />
          <IntervalHookCounter/><br /><br />
    </div>
  );
}

export default App;
