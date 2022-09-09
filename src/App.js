import './style_sheets/App.css';
import { AB1, AB3, ABX } from './Artboards';
import Article, { P1, P2, P3, P4, P5 } from './Article';
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
        <AB3 position='front' />
        {/* <P1 />
        <P2 />
        <P3 />
        <P4 />
        <P5 /> */}
        <Article />
        <AB3 position='back' />
        {/* <Focus obj={useList()[0]} /> */}
        <Footer />
      </div>
    </div>
  );
}

export default App;
