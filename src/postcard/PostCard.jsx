import React from 'react';
import Aloha from './aloha_hawaii.jpeg';
import MuiButton from '../muiButton/MuiButton';
import './postcard.css';

function PostCard () {
  return (
    <div className="postcard__div">
      <img src={Aloha} alt="aloha" className="postcard__img" />
      <MuiButton variant="contained" str="/message" label="Open Card" />
    </div>
  )
}

export default PostCard;
