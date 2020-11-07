import React from 'react';
import Direction from '../../components/Direction';

function KingOfJail() {
  return (
    <div className='row fullPage'>
      <img src='../images/chapter-4/jail.jpeg' alt='jail' />
      <p className='m-left'>
        Cezaevinde krallar gibi karsilandin. Mukemmel bir hayatin var, herkes
        sana saygi duyuyor. Dostlarin ziyeretinde bir kac ay icinde seni burdan
        cikaracklarini soyluyorlar..
      </p>
      <Direction children='Next' path='/chapter4/bribe' />
    </div>
  );
}

export default KingOfJail;
