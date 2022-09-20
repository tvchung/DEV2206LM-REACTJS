import logo from './logo.svg';
import './App.css';
import EventDemo1 from './component/EventDemo1';
import {React, Component } from 'react';
import Demo from './component/Demo';

class App extends Component {
  render(){
    return (
      <div className="App">
        <EventDemo1 />
        <hr />
        <Demo companyName="Devmaster Academy" />
      </div>
    );
  }
}

export default App;
