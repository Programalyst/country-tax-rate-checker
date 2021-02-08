import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './components/NavBar';
import './index.css';
import About from './pages/About';
import TaxRates from './pages/TaxRates';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import ItemsPage from './pages/ItemsPage';
import NetworkCompaniesPage from './pages/NetworkCompaniesPage';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route path='/' exact component = {TaxRates} />
          <Route path='/about'component={About} />
          <Route path='/taxRates' component ={TaxRates} />
          <Route path='/items' component ={ItemsPage} />
          <Route path='/networkCompanies' component ={NetworkCompaniesPage} />
        </Switch>
      </div>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

