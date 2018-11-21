import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './components/LeadForm';
import LeadForm from './components/LeadForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello fullstack!</h1>
        <div className="col-md-8">
          <LeadForm/>
        </div>
      </div>
    );
  }
}

export default App;
