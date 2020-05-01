import React from 'react';
import './App.css';

import Header from './layout/Header';
import Home from './components/Home';
import Qrcode from './components/Qrcode';
import Results from './components/Results';



import { 
  BrowserRouter as Router, 
  Route,
  Switch 
} from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App"> 

        <Header /> 

          {/* #all components# */}
          <div>
            <Switch>
              <Route exact path='/' component={Home}></Route>
              <Route exact path='/home' component={Home}></Route>
              <Route exact path='/qrcode' component={Qrcode}></Route>
              <Route exact path='/results' component={Results}></Route>
            </Switch>
          </div>

        {/* <Footer />    */}

      </div>         
    </Router>
   
  );
}

export default App;
