import React from 'react';
import Header from './Header';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Red from './Red';
import Blue from './Blue';
import Green from './Green';

export default function App() {
  return (
    <>
      <Router>
        <Header/>
        <nav>
          <Route path="/Red" component={Red}></Route>
          <Route path="/Blue" component={Blue}></Route>
          <Route path="/Green" component={Green}></Route>
        </nav>
      </Router>
    </>
  );
}
