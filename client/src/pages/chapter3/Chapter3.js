import React from 'react';
import { Route } from 'react-router-dom';
import Chapter from '../../components/Chapter';
import GoodFeelings from './GoodFeelings';
import NewLife from './NewLife';
import Intelligence from './Intelligence';
import Leader from './Leader';
import LuxHabits from './LuxHabits';
import QuietStreet from './QuietStreet';
import RememberMom from './RememberMom';
import Revenge from './Revenge';

function Chapter3() {
  return (
    <div>
      <Route path='/chapter3' exact>
        <Chapter
          chapter={3}
          className='chapter3 large column fullPage'
          info='Famous leader and getting new habits...'
          path='chapter3/new-life'
        />
      </Route>
      <Route path='/chapter3/new-life' component={NewLife} />
      <Route path='/chapter3/leader' component={Leader} />
      <Route path='/chapter3/lux-habits' component={LuxHabits} />
      <Route path='/chapter3/intelligence' component={Intelligence} />
      <Route path='/chapter3/quiet-street' component={QuietStreet} />
      <Route path='/chapter3/remember-mom' component={RememberMom} />
      <Route path='/chapter3/revenge' component={Revenge} />
      <Route path='/chapter3/good-feelings' component={GoodFeelings} />
    </div>
  );
}

export default Chapter3;
