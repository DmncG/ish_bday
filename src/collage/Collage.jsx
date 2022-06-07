import React from 'react';
import Ish1 from './ish_1.jpg';
import Ish2 from './ish_2.jpg';
import Ish3 from './ish_3.jpg';
import Ish4 from './ish_4.jpg';
import './collage.css';

function Collage () {
  return (
    <div className="collage__div">
      <img src={Ish1} alt="ish_1" className="collage__img" id="collage1"/>
      <img src={Ish2} alt="ish_2" className="collage__img" id="collage2"/>
      <img src={Ish3} alt="ish_3" className="collage__img" id="collage3"/>
      <img src={Ish4} alt="ish_4" className="collage__img" id="collage4"/>
    </div>
  )
}

export default Collage;
