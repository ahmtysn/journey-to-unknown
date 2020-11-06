import React from 'react';
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
import GoHome from './components/GoHome';

function App() {
  // const [seeChapter1, setSeeChapter1] = useState(false);
  // const [seeChapter2, setSeeChapter2] = useState(false);
  // const [seeChapter3, setSeeChapter3] = useState(false);
  // const [seeChapter4, setSeeChapter4] = useState(false);

  return (
    <div className='App'>
      <Router>
        <NavBar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/chapter1' component={Chapter1} />
          <Route path='/chapter2' component={Chapter2} />
          <Route path='/chapter3' component={Chapter3} />
          <Route path='/chapter4' component={Chapter4} />
          <Route path='/form' component={Form} />
          <Route path='/go-home' component={GoHome} />
          <Route path='/*' component={FollowStory} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
