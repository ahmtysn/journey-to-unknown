import React from 'react';
import { Route } from 'react-router-dom';
import Chapter from '../../components/Chapter';
import Arrest from './Arrest';
import Prosecution from './Prosecution';
import ThinkAboutJudge from './ThinkAboutJudge';
import Defence from './Defense';
import HardPunishment from './HardPunishment';
import KingOfJail from './KingOfJail';
import Bribe from './Bribe';
import GodFather from './GodFather';
import ReducedPenalty from './ReducedPenalty';
import DeadEnd from './DeadEnd';
import TheEnd from './TheEnd';

function Chapter4() {
  return (
    <div>
      <Route path='/chapter4' exact>
        <Chapter
          chapter={4}
          className='chapter4 large column fullPage'
          info='Then What ?'
          path='chapter4/arrest'
        />
      </Route>
      <Route path='/chapter4/arrest' component={Arrest} />
      <Route path='/chapter4/think-about-judge' component={ThinkAboutJudge} />
      <Route path='/chapter4/prosecution' component={Prosecution} />
      <Route path='/chapter4/defence' component={Defence} />
      <Route path='/chapter4/hard-punishment' component={HardPunishment} />
      <Route path='/chapter4/king-of-jail' component={KingOfJail} />
      <Route path='/chapter4/bribe' component={Bribe} />
      <Route path='/chapter4/god-father' component={GodFather} />
      <Route path='/chapter4/reduced-penalty' component={ReducedPenalty} />
      <Route path='/chapter4/dead-end' component={DeadEnd} />
      <Route path='/chapter4/the-end' component={TheEnd} />
    </div>
  );
}

export default Chapter4;
