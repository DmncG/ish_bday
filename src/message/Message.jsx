import React from 'react';
import Collage from '../collage/Collage';
import Content from '../content/Content';
import Header from '../header/Header';
import './message.css';

function Message () {
  return (
    <div className="message__div">
      <Collage />
      <div className="message-container__div">
        {/* <Header /> */}
        <Content />
      </div>
    </div>
  )
}

export default Message;
