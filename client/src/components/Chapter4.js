import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Chapter4() {
  const [respond, setRespond] = useState('');
  const actionToJudge = e => {
    if (e.target.alt === 'not-regret') {
      setRespond('not-regret');
    } else {
      setRespond('regret');
    }
  };
  return (
    <div>
      <div className='row fullPage'>
        <p className='m-right'>
          You took big responsibility. In fron of the police officer killed you
          these guys. It is a mistake or not we will see...
        </p>
        <img src='images/prison/arrest.jpeg' alt='' />
      </div>
      <div className='row fullPage'>
        <img src='images/prison/prison.jpeg' alt='' />
        <p className='m-right m-left'>
          Now you have time to think..What will you do in judge ?
        </p>
        <img src='images/prison/prison1.jpeg' alt='' />
      </div>
      <div className='row fullPage'>
        <p className='m-right'>
          Judge asked you ? Are you regret? Who is your boss ? with who do you
          work?
        </p>
        <img src='images/judge/questioning.jpeg' alt='' />
      </div>
      <div className='column fullPage'>
        <p>You have 2 options</p>
        <div className='row m-top'>
          <div className='column'>
            <img
              onClick={actionToJudge}
              className='options-img'
              src='images/choice/kill.jpeg'
              alt='not-regret'
            />
            <p className='m-top'>I'm not regret.I have no word to you.</p>
          </div>
          <div className='column'>
            <img
              onClick={actionToJudge}
              className='options-img'
              src='images/choice/save.jpg'
              alt='regret'
            />
            <p className='m-top'>
              I'm regret.I will tell everything what I know.
            </p>
          </div>
        </div>
      </div>
      {respond === 'not-regret' && (
        <div>
          <div className='row fullPage'>
            <p className='m-right'>
              Judgement time you get 30 years sentences... It is incredible !!
              But you were too brave, your friends will save you.
            </p>
            <img src='images/judge/judge1.jpeg' alt='' />
          </div>
          <div className='row fullPage'>
            <img
              src='https://images.pexels.com/photos/5692736/pexels-photo-5692736.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
              alt=''
            />
            <p className='m-left'>
              Cezaevinde krallar gibi karsilandin. Mukemmel bir hayatin var,
              herkes sana saygi duyuyor. Dostlarin ziyeretinde bir kac ay icinde
              seni burdan cikaracklarini soyluyorlar..
            </p>
          </div>
          <div className='row fullPage'>
            <img src='images/bribe/bribe.jpeg' alt='' />
            <p className='m-left m-right'>Paranin acamayacagi kapi yoktur.</p>
            <div className='column'>
              <img
                className='half-img m-bottom'
                src='images/bribe/bribe1.jpeg'
                alt=''
              />
              <img className='half-img' src='images/prison/free.jpeg' alt='' />
            </div>
          </div>
          <div className='row fullPage'>
            <p className='m-right'>
              Artik herkesin saygi duydugu gelecegin babasisin....
            </p>
            <img src='images/target/target.jpeg' alt='' />
          </div>
        </div>
      )}
      {respond === 'regret' && (
        <div>
          <div className='row fullPage'>
            <p className='m-right'>
              You are regret and now you have discount from 30 years to 10 years
              sentences. Your friends will not help you you told everything.
              Maybe you can die in prison accidently?
            </p>
            <img src='images/judge/questioning.jpeg' alt='' />
          </div>
          <div className='row fullPage'>
            <img src='images/fight/fight.jpeg' alt='' />
            <p className='m-left'>
              Bir kac gun icinde odanda olu bulundun, ne yazik !!
            </p>
          </div>
        </div>
      )}
      <div className='column fullPage'>
        <h1>THE END</h1>
        <p>Do you want to try again ?</p>
        <Link to='/'>
          <button>Journey to Unknown</button>
        </Link>
      </div>
    </div>
  );
}

export default Chapter4;
