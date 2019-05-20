import React from 'react';
import Header from './Header';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Red from './Red';
import Blue from './Blue';
import Green from './Green';
import Color from './Color';

export default function App() {
  return (
    <>
      <Router>
        <Header/>
        <nav>
          <Route exact path="/Red" component={Red}></Route>
          <Route exact path="/Blue" component={Blue}></Route>
          <Route exact path="/Green" component={Green}></Route>
          <Route path="/:color" component={Color} />
        </nav>
      </Router>
    </>
  );
}
