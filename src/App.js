import React, { useState } from 'react';
import './App.css';
import Intro from './components/Intro'
import Pcr from './components/Pcr';

function App() {
  const [entered, setEntered] = useState(false)

  return (
    <div className="App">
      <header className="App-header" style={{
        backgroundColor: '#DEDEE0'
      }}>
        {!entered && <Intro onEnterClick={() => setEntered(true)} />}
        {entered && <Pcr />}
      </header>
    </div>
  );
}

export default App;
