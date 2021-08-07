import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Pages/Home'; 
import Findvaccine from './components/Pages/Findvaccine';
import Aboutus from './components/Pages/Aboutus';


function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/findvaccine' exact  component={Findvaccine} />
      <Route path='/aboutus' exact  component={Aboutus}/>
     
     
        
      </Switch>
    </Router>
  </>
  );
}

export default App;