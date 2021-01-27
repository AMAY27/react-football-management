import React from 'react';
import './App.css';
import Postlist from './components/Postlists';
import Nav from './components/Nav';
import Points from './components/Points';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function App() {
  return (
    <Router>
    <div className="App" >
      <Nav />
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/players" component = {Postlist}/>
        <Route path="/pointstable" component = {Points}/>
      </Switch>
    </div>
    </Router>

  );
}

const Home = () => (
  <div>
    <h1>Home Page</h1>
  </div>
);
  

export default App;
