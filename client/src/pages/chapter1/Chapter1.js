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
        <Chapter chapter={1} info='Write your story!' path='chapter1/1' />
      </Route>
      <Route path='/chapter1/1' component={HomeWay} />
      <Route path='/chapter1/2' component={Execution} />
      <Route path='/chapter1/3' component={Escape} />
      <Route path='/chapter1/4' component={Offer} />
    </div>
  );
}

export default Chapter1;
