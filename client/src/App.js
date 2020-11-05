import React, { useState } from 'react';
import './App.css';
import Home from './components/Home';
import Chapter1 from './components/Chapter1';
import Chapter2 from './components/Chapter2';
import Chapter3 from './components/Chapter3';
import Chapter4 from './components/Chapter4';

function App() {
  const [seeChapter2, setSeeChapter2] = useState(false);
  console.log({ app: seeChapter2 });
  return (
    <div className='App'>
      <Home />
      <Chapter1 seeChapter2={seeChapter2} setSeeChapter2={setSeeChapter2} />
      {seeChapter2 && <Chapter2 />}
      {seeChapter2 && <Chapter3 />}
      {seeChapter2 && <Chapter4 />}
    </div>
  );
}

export default App;
