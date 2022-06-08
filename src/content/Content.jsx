import React from 'react';
import Pusheen from './pusheen.gif';
import MuiButton from '../muiButton/MuiButton';
import Header from '../header/Header';
import './content.css';

function Content () {
  return (
    <div className="content__div">
      <Header copy="Happy Birthday, Ish!"/>
      <img src={Pusheen} alt="pusheen" className="content__img" />
      <p className="content__p">
        Sending you an actual postcard won't get there in time and it's not really possible right now so I made this instead.<br /><br />Happy happy birthday! I can't believe it has been a month since we met each other in Hawaii, but it already feels like I've learned so much about you. I know the circumstances around us aren't ideal right now and there are going to be many challenges along the way but so far, I'm so happy to have met you and I hope that whatever we have continues to progress. :) <br /><br />Don't let your age stop you from having fun! Continue being your fun, sexy, and warm self. Wishing I could be there to celebrate with you.<br /><br />Missing you so much.

        <br /><br />Dom  
      </p>
      <MuiButton str="/bonus" label="See Bonus Gift"/>
    </div>
  )
}

export default Content;
