import React from 'react';
import { Route } from 'react-router-dom';

import Chapter from '../../components/Chapter';
import HomeWay from './HomeWay';
import Execution from './Execution';
import Escape from './Escape';
import Offer from './Offer';

function Chapter1() {
  return (
    <div>
      <Route path='/chapter1' exact>
        <Chapter
          chapter={1}
          info='Write your story!'
          path='chapter1/home-way'
        />
      </Route>
      <Route path='/chapter1/home-way' component={HomeWay} />
      <Route path='/chapter1/execution' component={Execution} />
      <Route path='/chapter1/escape' component={Escape} />
      <Route path='/chapter1/offer' component={Offer} />
    </div>
  );
}

export default Chapter1;
