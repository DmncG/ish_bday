import React from 'react';
import './kmk.css';
import Header from '../header/Header';
import KMK1 from './kim-min-kyu-cats.jpeg';
import KMK2 from './kim_2.jpeg';
import KMK3 from './kim_3.jpeg';
import KMK4 from './kim_4.jpeg';
import KMK5 from './kim_5.jpeg';
import KMK6 from './kim_6.jpg';
import KMK7 from './kim_7.jpeg';
import KMK8 from './kim_8.jpg';
import MuiButton from '../muiButton/MuiButton';
import './kmk.css';


function KMK () {
  return (
    <div className="kmk__div">
      <Header copy="LOL Enjoy HAHAHA" />
      <div className="kmk__images">
        <img src={KMK1} alt="kmk1" className="kmk__image" id="kmk_1" />
        <img src={KMK2} alt="kmk2" className="kmk__image" id="kmk_2" />
        <img src={KMK3} alt="kmk3" className="kmk__image" id="kmk_3" />
        <img src={KMK4} alt="kmk4" className="kmk__image" id="kmk_4" />
        <img src={KMK5} alt="kmk5" className="kmk__image" id="kmk_5" />
        <img src={KMK6} alt="kmk6" className="kmk__image" id="kmk_6" />
        <img src={KMK7} alt="kmk7" className="kmk__image" id="kmk_7" />
        <img src={KMK8} alt="kmk8" className="kmk__image" id="kmk_8" />
      </div>
      <MuiButton str="/message" label="Back to Messages" />
    </div>
  )
}

export default KMK;