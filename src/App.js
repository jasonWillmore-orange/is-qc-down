import React from 'react';
import './App.css';
import ServiceList from './components/serviceList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Is QC (sandbox) Down or is it just me?
        </p>

        <ServiceList />
      </header>
    </div>
  );
}

export default App;
