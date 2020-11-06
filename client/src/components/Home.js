import React from 'react';
import { Link } from 'react-router-dom';

function Home({ seeChapter1, setSeeChapter1 }) {
  const getChapter1 = () => {
    setSeeChapter1(true);
  };
  return (
    <div id='home' className='column head fullPage'>
      <h1>This story tell us about an unpredictable life..</h1>
      <h2>Sometimes we can select important things about us.</h2>
      <h2>The real boss is DESTINY</h2>
      <Link to='/chapter1'>
        <button onClick={getChapter1}>Start Adventure</button>
      </Link>
    </div>
  );
}

export default Home;
