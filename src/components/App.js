import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Moods from '../containers/Moods';


export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Moods} />
      </Switch>
    </Router>
  );
}

