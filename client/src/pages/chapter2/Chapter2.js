import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import Chapter from '../../components/Chapter';
import BuyYourGun from './BuyYourGun';
import DoYouHaveMoney from './DoYouHaveMoney';
import GoSeller from './GoSeller';
import Insult from './Insult';
import KillOrForgive from './KillOrForgive';
import MeetFather from './MeetFather';
import SelectGun from './SelectGun';
import SpeakWithSeller from './SpeakWithSeller';
import TeamMembers from './TeamMembers';
import TellYourName from './TellYourName';
import TooYoung from './TooYoung';

function Chapter2() {
  const [data, setData] = useState({
    name: '',
    age: '',
    money: '',
  });
  return (
    <div>
      <Route path='/chapter2' exact>
        <Chapter
          chapter={2}
          info='You are lucky. The godfather invited you...'
          path='chapter2/1'
        />
      </Route>
      <Route path='/chapter2/1' component={MeetFather} />
      <Route path='/chapter2/2'>
        <TellYourName data={data} setData={setData} />
      </Route>
      <Route path='/chapter2/3'>
        <TeamMembers />
      </Route>
      <Route path='/chapter2/4'>
        <TooYoung data={data} setData={setData} />
      </Route>
      <Route path='/chapter2/5' component={GoSeller} />
      <Route path='/chapter2/6' component={SpeakWithSeller} />
      <Route path='/chapter2/7' component={SelectGun} />
      <Route path='/chapter2/8'>
        <DoYouHaveMoney data={data} setData={setData} />
      </Route>
      <Route path='/chapter2/9' component={BuyYourGun} />
      <Route path='/chapter2/10' component={Insult} />
      <Route path='/chapter2/11' component={KillOrForgive} />
    </div>
  );
}

export default Chapter2;
