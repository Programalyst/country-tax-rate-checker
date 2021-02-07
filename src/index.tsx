import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './components/NavBar';
import './index.css';
import About from './pages/About';
import TaxRates from './pages/TaxRates';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route path='/' exact component = {TaxRates} />
          <Route path='/about'component={About} />
          <Route path='/taxRates' component ={TaxRates} />
        </Switch>
      </div>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

