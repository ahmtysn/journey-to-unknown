import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import Chapter1 from './components/Chapter1';
import Chapter2 from './components/Chapter2';
import Chapter3 from './components/Chapter3';
import Chapter4 from './components/Chapter4';

function App() {
  const [seeChapter1, setSeeChapter1] = useState(false);
  const [seeChapter2, setSeeChapter2] = useState(false);
  const [seeChapter3, setSeeChapter3] = useState(false);

  return (
    <div className='App'>
      <Router>
        <Route path='/' exact>
          <Home seeChapter1={seeChapter1} setSeeChapter1={setSeeChapter1} />
        </Route>
        <Route path='/chapter1'>
          <Chapter1 seeChapter2={seeChapter2} setSeeChapter2={setSeeChapter2} />
        </Route>
        <Route path='/chapter2'>
          {seeChapter2 && (
            <Chapter2
              seeChapter3={seeChapter3}
              setSeeChapter3={setSeeChapter3}
            />
          )}
        </Route>
        <Route path='/chapter3'>{seeChapter3 && <Chapter3 />}</Route>
        <Route path='/chapter4'>{seeChapter2 && <Chapter4 />}</Route>
      </Router>
    </div>
  );
}

export default App;
