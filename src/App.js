import React from 'react';
import Navbar from './Components/Navbar';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Home from './pages/Home';
import './App.css';

function App() {
  return (
    <div className="App">
    <Router>
    <Navbar/>
    <Switch>
      <Route path='/' exact component={Home}/>
    </Switch>

    </Router>
      
    </div>
  );
}

export default App;
