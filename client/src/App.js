import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import NavBar from './components/NavBar';
import Home from './components/Home';
import Chapter1 from './pages/chapter1/Chapter1';
import Chapter2 from './pages/chapter2/Chapter2';
import Chapter3 from './pages/chapter3/Chapter3';
import Chapter4 from './pages/chapter4/Chapter4';
import FollowStory from './components/FollowStory';
import Form from './components/Form.js';

function App() {
  const [seeChapter1, setSeeChapter1] = useState(false);
  const [seeChapter2, setSeeChapter2] = useState(false);
  const [seeChapter3, setSeeChapter3] = useState(false);
  const [seeChapter4, setSeeChapter4] = useState(false);

  return (
    <div className='App'>
      <Router>
        <NavBar />
        <Switch>
          <Route path='/' exact>
            <Home seeChapter1={seeChapter1} setSeeChapter1={setSeeChapter1} />
          </Route>
          {seeChapter1 && (
            <Route path='/chapter1'>
              <Chapter1 setSeeChapter2={setSeeChapter2} />
            </Route>
          )}
          {seeChapter2 && (
            <Route path='/chapter2'>
              <Chapter2 setSeeChapter3={setSeeChapter3} />
            </Route>
          )}
          {seeChapter3 && (
            <Route path='/chapter3'>
              <Chapter3 setSeeChapter4={setSeeChapter4} />
            </Route>
          )}
          {seeChapter4 && (
            <Route path='/chapter4'>
              <Chapter4 />
            </Route>
          )}
          <Route path='/form' exact component={Form} />
          <Route path='/*' component={FollowStory} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
