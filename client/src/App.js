import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { OpenContext } from './components/OpenContext';

import NavBar from './components/NavBar';
import Home from './components/Home';
import Chapter1 from './pages/chapter1/Chapter1';
import Chapter2 from './pages/chapter2/Chapter2';
import Chapter3 from './pages/chapter3/Chapter3';
import Chapter4 from './pages/chapter4/Chapter4';
import FollowStory from './components/FollowStory';
import Form from './components/comments/Form';
import GoHome from './components/GoHome';

function App() {
  const [open, setOpen] = useState({
    // initial values are false
    isOpenC1: false,
    isOpenC2: false,
    isOpenC3: false,
    isOpenC4: false,
  });
  const { isOpenC1, isOpenC2, isOpenC3, isOpenC4 } = open;
  return (
    <div className='App'>
      <Router>
        <OpenContext.Provider value={{ open, setOpen }}>
          <NavBar />
          <Switch>
            <Route path='/' exact component={Home} />
            {isOpenC1 && <Route path='/chapter1' component={Chapter1} />}
            {isOpenC2 && <Route path='/chapter2' component={Chapter2} />}
            {isOpenC3 && <Route path='/chapter3' component={Chapter3} />}
            {isOpenC4 && <Route path='/chapter4' component={Chapter4} />}
            <Route path='/form' component={Form} />
            <Route path='/go-home' component={GoHome} />
            <Route path='/*' component={FollowStory} />
          </Switch>
        </OpenContext.Provider>
      </Router>
    </div>
  );
}

export default App;
