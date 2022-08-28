import './style_sheets/App.css';
import { AB1, AB3, ABX } from './Artboards';
import { P1, P2, P3, P4, P5 } from './Article';
import background from './more-assets/bg5x.png';
import Footer from './Footer';
import { Focus } from './Focus';
import React, { useRef, useEffect, useState } from 'react';
import useList from './useList';

function App() {
  return (
    <div className='App'>
      <div className='content'>
        <img id='bg' src={background} alt='background' />
        <AB1 />
        <AB3 />
        <P1 />
        <P2 />
        <P3 />
        <P4 />
        <P5 />
        <AB3 />
        {/* <Focus obj={useList()[0]} /> */}
        <Footer />
      </div>
    </div>
  );
}

export default App;
