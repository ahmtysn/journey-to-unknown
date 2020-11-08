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
          className='chapter2 large column fullPage'
          info='The day to meet with the godfather.'
          path='chapter2/meet-father'
        />
      </Route>
      <Route path='/chapter2/meet-father' component={MeetFather} />
      <Route path='/chapter2/tell-your-name'>
        <TellYourName data={data} setData={setData} />
      </Route>
      <Route path='/chapter2/team-members'>
        <TeamMembers data={data} />
      </Route>
      <Route path='/chapter2/too-young'>
        <TooYoung data={data} setData={setData} />
      </Route>
      <Route path='/chapter2/go-seller' component={GoSeller} />
      <Route path='/chapter2/speak-with-seller' component={SpeakWithSeller} />
      <Route path='/chapter2/select-gun' component={SelectGun} />
      <Route path='/chapter2/do-you-have-money'>
        <DoYouHaveMoney data={data} setData={setData} />
      </Route>
      <Route path='/chapter2/buy-your-gun' component={BuyYourGun} />
      <Route path='/chapter2/insult' component={Insult} />
      <Route path='/chapter2/kill-or-forgive' component={KillOrForgive} />
    </div>
  );
}

export default Chapter2;
