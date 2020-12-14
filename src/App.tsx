import React from 'react';

import './App.css';
import { MainApp } from './Component/MainApp';

const App:React.FC =()=> {
  return (
    <div>
      <h1 className="title">
        React-Timer-App
            </h1>
      <MainApp/>
    </div>
  );
}

export default App;
